# 💱 Currency Converter

A sample real-time currency converter built with React that fetches live exchange rates and updates instantly.

Features:

Real-time Exchange Rates - Fetches live data from exchangerate-api.com  
Two-way Conversion - Convert from any currency to another seamlessly  
Swap Currencies - Instantly swap source and destination currencies  
16 different Currencies - Support for major global currencies  
Instant Calculations - Dynamic updates as you type  

Prerequisites

- Node.js 16+ and npm

Installation

i) Install dependencies:
```bash
npm install
```

ii) Start the development server:
```bash
npm run dev
```

iii) Open [http://localhost:5173](http://localhost:5173) in your browser

Build for Production

```bash
npm run build
```

Project Structure

```
src/
├── components/
│   └── CurrencyConverter.jsx    # Main converter component
├── styles/
│   └── CurrencyConverter.css    # Converter styling
├── App.jsx                       # App wrapper
├── App.css                       # App styling
├── main.jsx                      # Entry point
└── index.css                     # Global styles
```

Supported Currencies

USD, EUR, GBP, JPY, AUD, CAD, CHF, CNY, INR, MXN, BRL, ZAR, SGD, HKD, NZD, KRW

