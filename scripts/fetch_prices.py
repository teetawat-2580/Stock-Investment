import yfinance as yf
import json
import os

tickers = ['JPM', 'AMZN', 'NVDA', 'TSLA', 'BA', 'GOOGL', 'BAC', 'V', 'INTC', 'CRWD', 'NEM', 'RTX', 'LMT', 'QQQM', 'SLV']

all_prices = {}

for symbol in tickers:
    print(f"Fetching 5Y historical close prices for {symbol}...")
    try:
        t = yf.Ticker(symbol)
        hist = t.history(period="5y")
        if hist is not None and not hist.empty:
            prices = {}
            for k, v in hist['Close'].items():
                date_str = str(k.date())
                prices[date_str] = round(float(v), 2)
            all_prices[symbol] = prices
            print(f"Loaded {len(prices)} price points for {symbol}")
    except Exception as e:
        print(f"Error fetching 5Y prices for {symbol}: {e}")

prices_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'stock_prices.js')
js_content = "const stockPricesData = " + json.dumps(all_prices, indent=2, ensure_ascii=False) + ";\n"

with open(prices_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully written 5Y historical stock prices to data/stock_prices.js for {len(all_prices)} tickers!")
