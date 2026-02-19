**sample Currency Converter**

A simple real-time currency converter built with React that fetches live exchange rates and updates instantly.

---

Features:

Real-time Exchange Rates - Fetches live data from exchangerate-api.com for seamless flow 
Two-way Conversion - Convert from any currency to another seamlessly  
Swap Currencies - Instantly swap source and destination currencies  
16 different Currencies - Support for major global currencies  
Instant Calculations - instantly updates the currency conversions as you type. 

---

Prerequisites

Node.js 16+ and npm dependencies

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
Or just run it in your terminal

Build for Production

```bash
npm run build
```

---

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

---

Supported Currencies

USD, EUR, GBP, JPY, AUD, CAD, CHF, CNY, INR, MXN, BRL, ZAR, SGD, HKD, NZD, KRW 
and room to add more

