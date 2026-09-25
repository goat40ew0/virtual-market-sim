# Virtual Market Simulator

A fast, simple stock market game with fake money and real-market-style symbols.

## Windows one-click launch

Double-click **`start-market-simulator.bat`** in this repository.

The launcher will:

1. Find Python on your computer.
2. Start a local web server.
3. Open the simulator automatically in Chrome or your default browser at `http://localhost:3000`.

To stop the app, close the minimized **Virtual Market Server** command window.

If Windows says Python is not installed, install it from:

https://www.python.org/downloads/windows/

During installation, enable **Add Python to PATH** if that option is shown.

## Manual launch

You can also open a terminal in this folder and run:

```bash
python -m http.server 3000
```

Then visit `http://localhost:3000`.

## Features

- US stocks: NYSE / Nasdaq
- Indian market: NSE / BSE symbols
- Global equities
- Crypto, forex, and commodities
- Virtual cash only
- Live, delayed, and replay market modes
- Buy / sell order simulation
- Portfolio and trade history

## Notes

This is a browser-based simulation intended for learning and play. It is not a real brokerage or financial advice tool.
