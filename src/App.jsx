import { useState, useEffect } from 'react'
import './App.css'
import Aurora from './components/Aurora'
import CurrencyConverter from './components/CurrencyConverter'

function App() {
  return (
    <div className="app">
      <Aurora
        colorStops={['#7cff67', '#B19EEF', '#5227FF']}
        blend={0.5}
        amplitude={1.0}
        speed={1}
      />
      <CurrencyConverter />
    </div>
  )
}

export default App
