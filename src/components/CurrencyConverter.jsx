import { useState, useEffect } from 'react'
import '../styles/CurrencyConverter.css'

export default function CurrencyConverter() {
  const [amount1, setAmount1] = useState(1)
  const [amount2, setAmount2] = useState(1)
  const [currency1, setCurrency1] = useState('USD')
  const [currency2, setCurrency2] = useState('EUR')
  const [rates, setRates] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [lastUpdated, setLastUpdated] = useState(null)

  const currencies = [
    'USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY',
    'INR', 'MXN', 'BRL', 'ZAR', 'SGD', 'HKD', 'NZD', 'KRW'
  ]

  const fetchRates = async () => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(
        `https://api.exchangerate-api.com/v4/latest/${currency1}`
      )
      
      if (!response.ok) {
        throw new Error('Failed to fetch exchange rates')
      }
      
      const data = await response.json()
      setRates(data.rates)
      setLastUpdated(new Date().toLocaleTimeString())
      
      const convertedAmount = (amount1 * data.rates[currency2]).toFixed(2)
      setAmount2(convertedAmount)
    } catch (err) {
      setError(err.message || 'Error fetching exchange rates')
      console.error('Fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRates()
  }, [currency1])

  const handleAmount1Change = (e) => {
    const value = e.target.value
    setAmount1(value === '' ? '' : parseFloat(value))
    
    if (rates && value !== '') {
      const converted = (parseFloat(value) * rates[currency2]).toFixed(2)
      setAmount2(converted)
    }
  }

  const handleAmount2Change = (e) => {
    const value = e.target.value
    setAmount2(value === '' ? '' : parseFloat(value))
    
    if (rates && value !== '') {
      const converted = (parseFloat(value) / rates[currency2]).toFixed(2)
      setAmount1(converted)
    }
  }

  const handleCurrency2Change = (e) => {
    const newCurrency = e.target.value
    setCurrency2(newCurrency)
    
    if (rates && amount1) {
      const converted = (amount1 * rates[newCurrency]).toFixed(2)
      setAmount2(converted)
    }
  }

  const swapCurrencies = () => {
    setCurrency1(currency2)
    setCurrency2(currency1)
    setAmount1(amount2)
    setAmount2(amount1)
  }

  const getExchangeRate = () => {
    if (rates) {
      return rates[currency2].toFixed(4)
    }
    return '0'
  }

  return (
    <div className="container">
      <div className="converter-card">
        <div className="card-header">
          <h1>💱 Currency Converter</h1>
          <p className="subtitle">Real-time exchange rates</p>
        </div>

        {error && <div className="error-message">⚠️ {error}</div>}
        {loading && <div className="loading\">⏳ Loading exchange rates...</div>}

        {!loading && (
          <div className="converter-section">
            <div className="converter-box">
              {/* From Currency */}
              <div className="currency-section">
                <div className="currency-group">
                  <label htmlFor="currency1\">From</label>
                  <div className="input-group">
                    <input
                      id="currency1"
                      type="number"
                      value={amount1}
                      onChange={handleAmount1Change}
                      placeholder="0.00"
                      disabled={loading}
                      className="amount-input"
                    />
                    <select
                      value={currency1}
                      onChange={(e) => setCurrency1(e.target.value)}
                      disabled={loading}
                      className="currency-select"
                    >
                      {currencies.map(curr => (
                        <option key={curr} value={curr}>{curr}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Swap Button */}
              <button
                className="swap-button"
                onClick={swapCurrencies}
                disabled={loading}
                title="Swap currencies"
                aria-label="Swap currencies"
              >
                ⇄
              </button>

              {/* To Currency */}
              <div className="currency-section">
                <div className="currency-group">
                  <label htmlFor="currency2\">To</label>
                  <div className="input-group">
                    <input
                      id="currency2"
                      type="number"
                      value={amount2}
                      onChange={handleAmount2Change}
                      placeholder="0.00"
                      disabled={loading}
                      className="amount-input"
                    />
                    <select
                      value={currency2}
                      onChange={handleCurrency2Change}
                      disabled={loading}
                      className="currency-select"
                    >
                      {currencies.map(curr => (
                        <option key={curr} value={curr}>{curr}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Exchange Rate Info */}
            {rates && !loading && (
              <div className="rate-info">
                <div className="rate-content">
                  <p className="rate-label">Exchange Rate</p>
                  <p className="rate-display">
                    1 <span className="rate-currency">{currency1}</span> = <span className="rate-value">{getExchangeRate()}</span> <span className="rate-currency">{currency2}</span>
                  </p>
                  {lastUpdated && (
                    <p className="last-updated">Updated: {lastUpdated}</p>
                  )}
                </div>
              </div>
            )}

            {/* Refresh Button */}
            <button
              className="refresh-button"
              onClick={fetchRates}
              disabled={loading}
            >
              {loading ? '⏳ Refreshing...' : '🔄 Refresh Rates'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
