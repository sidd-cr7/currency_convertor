# 💱 Currency Converter - Day 18

A powerful real-time currency converter built with React and Vite that fetches live exchange rates and updates instantly.

## Features

✨ **Real-time Exchange Rates** - Fetches live data from exchangerate-api.com  
🔄 **Two-way Conversion** - Convert from any currency to another seamlessly  
⇄ **Swap Currencies** - Instantly swap source and destination currencies  
📊 **16+ Currencies** - Support for major global currencies  
⚡ **Instant Calculations** - Dynamic updates as you type  
🎨 **Beautiful UI** - Modern gradient design with smooth animations  
📱 **Fully Responsive** - Works perfectly on mobile and desktop  
🌙 **Dark Mode Support** - Automatically adapts to system preferences  

## What You'll Learn

- Fetching real-time data from a public API
- Syncing multiple inputs with React state
- Handling dynamic calculations and re-renders
- Formatting numbers for clean UI
- Building utility-style apps that users actually need

## Tech Stack

- **React 18** - UI library
- **Vite** - Lightning-fast build tool
- **CSS3** - Modern styling with gradients and animations
- **exchangerate-api.com** - Real-time exchange rate data

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

## Project Structure

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

## How It Works

1. **Fetch Exchange Rates** - Component fetches rates from the API when it mounts or when the source currency changes
2. **Calculate Conversions** - Amount changes trigger instant recalculations
3. **Sync State** - Both input fields stay synchronized through React state
4. **Format Display** - Numbers are formatted to 2 decimal places for clean presentation
5. **Handle Errors** - Gracefully handles API failures with user-friendly messages

## API Details

Uses the free tier of [exchangerate-api.com](https://exchangerate-api.com):
- 1,500 requests per month (free tier)
- Updates daily
- Supports 160+ currencies

## Performance

- ⚡ **Fast** - Built with Vite for instant HMR
- 💾 **Lightweight** - Minimal dependencies
- 🎯 **Optimized** - Only fetches when necessary
- 🔒 **Reliable** - Error handling for API failures

## Supported Currencies

USD, EUR, GBP, JPY, AUD, CAD, CHF, CNY, INR, MXN, BRL, ZAR, SGD, HKD, NZD, KRW

## Future Enhancements

- [ ] Cryptocurrency support
- [ ] Historical rate charts
- [ ] Offline mode with cached rates
- [ ] Favorite currency pairs
- [ ] More API providers for redundancy

## License

MIT

---

**Part of 30 Days of React Projects - Day 18**  
Built by Slash Dev HQ
