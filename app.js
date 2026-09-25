const state = {
  cash: 100000,
  positions: [],
  tradeHistory: [],
  selectedSymbol: 'AAPL',
  marketMode: 'live',
  filter: 'all',
  tick: 0,
};

const marketData = {
  live: [
    { symbol: 'AAPL', name: 'Apple', exchange: 'NASDAQ', market: 'US', price: 214.4, change: 1.42, volume: 61500000 },
    { symbol: 'MSFT', name: 'Microsoft', exchange: 'NASDAQ', market: 'US', price: 432.12, change: 0.92, volume: 28300000 },
    { symbol: 'NVDA', name: 'NVIDIA', exchange: 'NASDAQ', market: 'US', price: 123.6, change: 2.65, volume: 48200000 },
    { symbol: 'TCS', name: 'Tata Consultancy', exchange: 'NSE', market: 'INDIA', price: 3842.95, change: 0.85, volume: 2100000 },
    { symbol: 'RELIANCE', name: 'Reliance Industries', exchange: 'NSE', market: 'INDIA', price: 2865.2, change: 1.14, volume: 5400000 },
    { symbol: 'INFY', name: 'Infosys', exchange: 'NSE', market: 'INDIA', price: 1624.7, change: -0.42, volume: 4300000 },
    { symbol: 'SAP', name: 'SAP SE', exchange: 'XETRA', market: 'GLOBAL', price: 176.8, change: 0.72, volume: 1200000 },
    { symbol: 'HSBA', name: 'HSBC Holdings', exchange: 'LSE', market: 'GLOBAL', price: 648.3, change: -0.38, volume: 2100000 },
    { symbol: 'BTC', name: 'Bitcoin', exchange: 'CRYPTO', market: 'CRYPTO', price: 64280.44, change: 1.85, volume: 22450000 },
    { symbol: 'ETH', name: 'Ethereum', exchange: 'CRYPTO', market: 'CRYPTO', price: 3512.18, change: 1.22, volume: 16890000 },
    { symbol: 'EURUSD', name: 'Euro / USD', exchange: 'FOREX', market: 'FOREX', price: 1.0872, change: 0.18, volume: 0 },
    { symbol: 'USDINR', name: 'USD / INR', exchange: 'FOREX', market: 'FOREX', price: 83.76, change: 0.09, volume: 0 },
    { symbol: 'GOLD', name: 'Gold', exchange: 'COMMODITY', market: 'COMMODITY', price: 2037.4, change: 0.55, volume: 0 },
    { symbol: 'OIL', name: 'Crude Oil', exchange: 'COMMODITY', market: 'COMMODITY', price: 77.21, change: -0.68, volume: 0 },
  ],
  delayed: [
    { symbol: 'AAPL', name: 'Apple', exchange: 'NASDAQ', market: 'US', price: 213.3, change: 1.08, volume: 55800000 },
    { symbol: 'MSFT', name: 'Microsoft', exchange: 'NASDAQ', market: 'US', price: 431.6, change: 0.44, volume: 26600000 },
    { symbol: 'NVDA', name: 'NVIDIA', exchange: 'NASDAQ', market: 'US', price: 122.7, change: 2.1, volume: 43700000 },
    { symbol: 'TCS', name: 'Tata Consultancy', exchange: 'NSE', market: 'INDIA', price: 3828.4, change: 0.74, volume: 1960000 },
    { symbol: 'RELIANCE', name: 'Reliance Industries', exchange: 'NSE', market: 'INDIA', price: 2859.8, change: 0.92, volume: 4900000 },
    { symbol: 'INFY', name: 'Infosys', exchange: 'NSE', market: 'INDIA', price: 1621.2, change: -0.5, volume: 3970000 },
    { symbol: 'SAP', name: 'SAP SE', exchange: 'XETRA', market: 'GLOBAL', price: 175.9, change: 0.56, volume: 1180000 },
    { symbol: 'HSBA', name: 'HSBC Holdings', exchange: 'LSE', market: 'GLOBAL', price: 647.4, change: -0.48, volume: 2040000 },
    { symbol: 'BTC', name: 'Bitcoin', exchange: 'CRYPTO', market: 'CRYPTO', price: 63820.18, change: 1.05, volume: 21970000 },
    { symbol: 'ETH', name: 'Ethereum', exchange: 'CRYPTO', market: 'CRYPTO', price: 3478.25, change: 0.66, volume: 16180000 },
    { symbol: 'EURUSD', name: 'Euro / USD', exchange: 'FOREX', market: 'FOREX', price: 1.0861, change: 0.1, volume: 0 },
    { symbol: 'USDINR', name: 'USD / INR', exchange: 'FOREX', market: 'FOREX', price: 83.67, change: 0.06, volume: 0 },
    { symbol: 'GOLD', name: 'Gold', exchange: 'COMMODITY', market: 'COMMODITY', price: 2032.3, change: 0.44, volume: 0 },
    { symbol: 'OIL', name: 'Crude Oil', exchange: 'COMMODITY', market: 'COMMODITY', price: 77.6, change: -0.42, volume: 0 },
  ],
  replay: [
    { symbol: 'AAPL', name: 'Apple', exchange: 'NASDAQ', market: 'US', price: 208.2, change: 0.76, volume: 54600000 },
    { symbol: 'MSFT', name: 'Microsoft', exchange: 'NASDAQ', market: 'US', price: 424.5, change: 0.12, volume: 24900000 },
    { symbol: 'NVDA', name: 'NVIDIA', exchange: 'NASDAQ', market: 'US', price: 118.8, change: 1.8, volume: 43000000 },
    { symbol: 'TCS', name: 'Tata Consultancy', exchange: 'NSE', market: 'INDIA', price: 3798.2, change: 0.68, volume: 1900000 },
    { symbol: 'RELIANCE', name: 'Reliance Industries', exchange: 'NSE', market: 'INDIA', price: 2812.4, change: 0.72, volume: 4800000 },
    { symbol: 'INFY', name: 'Infosys', exchange: 'NSE', market: 'INDIA', price: 1598.3, change: -0.38, volume: 3900000 },
    { symbol: 'SAP', name: 'SAP SE', exchange: 'XETRA', market: 'GLOBAL', price: 172.5, change: 0.42, volume: 1160000 },
    { symbol: 'HSBA', name: 'HSBC Holdings', exchange: 'LSE', market: 'GLOBAL', price: 642.7, change: -0.33, volume: 2010000 },
    { symbol: 'BTC', name: 'Bitcoin', exchange: 'CRYPTO', market: 'CRYPTO', price: 62940.5, change: 0.86, volume: 21200000 },
    { symbol: 'ETH', name: 'Ethereum', exchange: 'CRYPTO', market: 'CRYPTO', price: 3410.5, change: 0.42, volume: 15700000 },
    { symbol: 'EURUSD', name: 'Euro / USD', exchange: 'FOREX', market: 'FOREX', price: 1.0849, change: 0.09, volume: 0 },
    { symbol: 'USDINR', name: 'USD / INR', exchange: 'FOREX', market: 'FOREX', price: 83.58, change: 0.05, volume: 0 },
    { symbol: 'GOLD', name: 'Gold', exchange: 'COMMODITY', market: 'COMMODITY', price: 2019.5, change: 0.38, volume: 0 },
    { symbol: 'OIL', name: 'Crude Oil', exchange: 'COMMODITY', market: 'COMMODITY', price: 76.8, change: -0.52, volume: 0 },
  ],
};

const els = {
  accountValue: document.getElementById('account-value'),
  accountPnl: document.getElementById('account-pnl'),
  cashBalance: document.getElementById('cash-balance'),
  investedValue: document.getElementById('invested-value'),
  positionsCount: document.getElementById('positions-count'),
  marketMood: document.getElementById('market-mood'),
  marketStatus: document.getElementById('market-status'),
  watchlist: document.getElementById('watchlist'),
  portfolio: document.getElementById('portfolio'),
  tradeHistory: document.getElementById('trade-history'),
  clock: document.getElementById('market-clock'),
  symbolInput: document.getElementById('symbol-input'),
  qtyInput: document.getElementById('qty-input'),
  orderType: document.getElementById('order-type'),
  selectedSymbolTag: document.getElementById('selected-symbol-tag'),
  filter: document.getElementById('market-filter'),
  resetButton: document.getElementById('reset-button'),
  submitOrder: document.getElementById('submit-order'),
};

function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPrice(value) {
  if (value >= 1000) return `$${value.toLocaleString(undefined, { maximumFractionDigits: 2 })}`;
  if (value >= 1) return `$${value.toFixed(2)}`;
  return `$${value.toFixed(4)}`;
}

function getCurrentMarketPrices() {
  return marketData[state.marketMode];
}

function getPosition(symbol) {
  return state.positions.find((pos) => pos.symbol === symbol.toUpperCase());
}

function getMarketMood() {
  const average = getCurrentMarketPrices().reduce((sum, item) => sum + item.change, 0) / getCurrentMarketPrices().length;
  if (average > 0.65) return 'Bullish';
  if (average < -0.65) return 'Bearish';
  return 'Neutral';
}

function updateMarketStatus() {
  const mood = getMarketMood();
  const isOpen = state.marketMode !== 'replay';

  els.marketMood.textContent = mood;
  els.marketStatus.textContent = isOpen ? 'Open' : 'Replay';
}

function updateClock() {
  const now = new Date();
  const hour = now.getHours().toString().padStart(2, '0');
  const minute = now.getMinutes().toString().padStart(2, '0');
  const second = now.getSeconds().toString().padStart(2, '0');
  els.clock.textContent = `${hour}:${minute}:${second}`;
}

function calculateAccountMetrics() {
  let invested = 0;
  let totalMarketValue = 0;

  state.positions.forEach((pos) => {
    const quote = getCurrentMarketPrices().find((item) => item.symbol === pos.symbol);
    if (!quote) return;
    const marketValue = quote.price * pos.quantity;
    invested += pos.avgPrice * pos.quantity;
    totalMarketValue += marketValue;
  });

  const totalValue = state.cash + totalMarketValue;
  const pnl = totalMarketValue - invested;

  els.cashBalance.textContent = formatCurrency(state.cash);
  els.investedValue.textContent = formatCurrency(totalMarketValue);
  els.accountValue.textContent = formatCurrency(totalValue);
  els.accountPnl.textContent = `${pnl >= 0 ? '+' : '-'}${formatCurrency(Math.abs(pnl))}`;
  els.positionsCount.textContent = `${state.positions.length} position${state.positions.length === 1 ? '' : 's'}`;
  els.accountPnl.className = pnl >= 0 ? 'positive' : 'negative';
}

function renderWatchlist() {
  const data = getCurrentMarketPrices().filter((item) => {
    if (state.filter === 'all') return true;
    return item.market === state.filter;
  });

  els.watchlist.innerHTML = data
    .map((item) => {
      const isSelected = item.symbol === state.selectedSymbol;
      const resultClass = item.change >= 0 ? 'positive' : 'negative';
      const buttonClass = isSelected ? 'inline-btn active' : 'inline-btn';
      return `
        <div class="watch-item">
          <div class="symbol-label">
            <strong>${item.symbol}</strong>
            <span>${item.name}</span>
          </div>
          <div class="price-chip ${resultClass}">${formatPrice(item.price)}</div>
          <div class="${resultClass}">${item.change >= 0 ? '+' : ''}${item.change.toFixed(2)}%</div>
          <button class="${buttonClass}" data-symbol="${item.symbol}">Select</button>
        </div>
      `;
    })
    .join('');

  els.watchlist.querySelectorAll('[data-symbol]').forEach((button) => {
    button.addEventListener('click', () => {
      state.selectedSymbol = button.dataset.symbol;
      els.symbolInput.value = state.selectedSymbol;
      els.selectedSymbolTag.textContent = state.selectedSymbol;
      render();
    });
  });
}

function renderPortfolio() {
  if (state.positions.length === 0) {
    els.portfolio.innerHTML = '<div class="muted">No active positions yet. Buy your first asset to begin.</div>';
    return;
  }

  els.portfolio.innerHTML = state.positions
    .map((pos) => {
      const quote = getCurrentMarketPrices().find((item) => item.symbol === pos.symbol);
      if (!quote) return '';
      const value = quote.price * pos.quantity;
      const delta = value - pos.avgPrice * pos.quantity;
      const deltaClass = delta >= 0 ? 'positive' : 'negative';
      return `
        <div class="portfolio-item">
          <div class="symbol-label">
            <strong>${pos.symbol}</strong>
            <span>${pos.quantity} shares</span>
          </div>
          <div>${formatPrice(pos.avgPrice)}</div>
          <div class="${deltaClass}">${formatCurrency(delta)}</div>
          <div>${formatPrice(value)}</div>
        </div>
      `;
    })
    .join('');
}

function renderHistory() {
  if (state.tradeHistory.length === 0) {
    els.tradeHistory.innerHTML = '<div class="muted">No trades yet.</div>';
    return;
  }

  els.tradeHistory.innerHTML = state.tradeHistory
    .slice(0, 6)
    .map((entry) => `
      <div class="history-item">
        <span class="symbol-tag">${entry.symbol}</span>
        <div>
          <strong>${entry.type.toUpperCase()}</strong><br />
          <span class="muted">${entry.qty} shares</span>
        </div>
        <div class="${entry.type === 'buy' ? 'positive' : 'negative'}">${entry.type === 'buy' ? '+' : '-'}${formatCurrency(entry.price * entry.qty)}</div>
      </div>
    `)
    .join('');
}

function updateSelectedSymbol() {
  const current = getCurrentMarketPrices().find((item) => item.symbol === state.selectedSymbol);
  if (current) {
    els.selectedSymbolTag.textContent = current.symbol;
    els.symbolInput.value = current.symbol;
  }
}

function resetPortfolio() {
  state.cash = 100000;
  state.positions = [];
  state.tradeHistory = [];
  render();
}

function placeTrade() {
  const symbol = els.symbolInput.value.trim().toUpperCase();
  const qty = Number(els.qtyInput.value);
  const type = els.orderType.value;
  const quote = getCurrentMarketPrices().find((item) => item.symbol === symbol);

  if (!quote) {
    alert('Symbol not available in this market mode.');
    return;
  }

  if (!Number.isFinite(qty) || qty <= 0) {
    alert('Enter a valid quantity.');
    return;
  }

  const total = quote.price * qty;

  if (type === 'buy') {
    if (state.cash < total) {
      alert('Not enough virtual cash for this order.');
      return;
    }

    const existing = getPosition(symbol);
    if (existing) {
      const newQty = existing.quantity + qty;
      const newAvg = ((existing.avgPrice * existing.quantity) + total) / newQty;
      existing.quantity = newQty;
      existing.avgPrice = newAvg;
    } else {
      state.positions.push({ symbol, quantity: qty, avgPrice: quote.price });
    }

    state.cash -= total;
    state.tradeHistory.unshift({ symbol, qty, price: quote.price, type: 'buy' });
  }

  if (type === 'sell') {
    const existing = getPosition(symbol);
    if (!existing || existing.quantity < qty) {
      alert('Not enough shares available to sell.');
      return;
    }

    existing.quantity -= qty;
    if (existing.quantity === 0) {
      state.positions = state.positions.filter((pos) => pos.symbol !== symbol);
    }

    state.cash += total;
    state.tradeHistory.unshift({ symbol, qty, price: quote.price, type: 'sell' });
  }

  state.selectedSymbol = symbol;
  render();
}

function render() {
  updateClock();
  updateMarketStatus();
  updateSelectedSymbol();
  renderWatchlist();
  renderPortfolio();
  renderHistory();
  calculateAccountMetrics();
}

document.querySelectorAll('.mode-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    state.marketMode = button.dataset.mode;
    render();
  });
});

els.filter.addEventListener('change', (event) => {
  state.filter = event.target.value;
  renderWatchlist();
});

els.submitOrder.addEventListener('click', placeTrade);
els.resetButton.addEventListener('click', resetPortfolio);
els.symbolInput.addEventListener('input', (event) => {
  state.selectedSymbol = event.target.value.trim().toUpperCase();
  els.selectedSymbolTag.textContent = state.selectedSymbol || 'SYMBOL';
});

state.selectedSymbol = 'AAPL';
updateClock();
render();
setInterval(updateClock, 1000);
