import yfinance as yf
import json
import os
from datetime import datetime

tickers = ['JPM', 'AMZN', 'NVDA', 'TSLA', 'BA', 'GOOGL', 'BAC', 'V', 'INTC', 'CRWD', 'NEM', 'RTX', 'LMT']

# Standard static events (converted FACT and EST to NOTE)
static_events = [
  { "stock": "AMZN", "date": "2022-07-12", "event": "Prime Day Event",                "type": "NOTE", "remark": None },
  { "stock": "AMZN", "date": "2023-07-11", "event": "Prime Day Event",                "type": "NOTE", "remark": "11-12 July 2025" },
  { "stock": "AMZN", "date": "2024-02-01", "event": "Q4 '23 Earnings",                "type": "NOTE", "remark": None },
  { "stock": "AMZN", "date": "2024-04-30", "event": "Q1 '24 Earnings",                "type": "NOTE", "remark": None },
  { "stock": "AMZN", "date": "2024-07-16", "event": "Prime Day Event",                "type": "NOTE", "remark": "16-17 July 2025" },
  { "stock": "AMZN", "date": "2024-08-01", "event": "Q2 '24 Earnings",                "type": "NOTE", "remark": None },
  { "stock": "AMZN", "date": "2024-10-31", "event": "Q3 '24 Earnings",                "type": "NOTE", "remark": None },
  { "stock": "AMZN", "date": "2025-02-06", "event": "Q4 '24 Earnings",                "type": "NOTE", "remark": None },
  { "stock": "AMZN", "date": "2025-05-01", "event": "Q1 '25 Earnings",                "type": "NOTE", "remark": None },
  { "stock": "AMZN", "date": "2025-07-08", "event": "Prime Day Event",                "type": "NOTE", "remark": "8-11 July 2025" },
  { "stock": "AMZN", "date": "2025-07-31", "event": "Q2 '25 Earnings",                "type": "NOTE", "remark": None },
  { "stock": "AMZN", "date": "2025-10-23", "event": "Q3 '25 Earnings (EST)",          "type": "NOTE", "remark": None },
  { "stock": "AMZN", "date": "2025-10-30", "event": "Q3 '25 Earnings",                "type": "NOTE", "remark": None },
  { "stock": "JPM",  "date": "2026-01-12", "event": "Trump ข่าวคุมดอกเบี้ยบัตรเครดิต — Gap Down ก่อนเปิดตลาด", "type": "NOTE", "remark": "ตกแรงมาก ช่วงก่อนเปิดตลาด" },
  { "stock": "JPM",  "date": "2026-01-13", "event": "Q4 '25 Earnings",                "type": "NOTE", "remark": None },
  { "stock": "JPM",  "date": "2026-02-23", "event": "Company Update (แทน Investor Day)", "type": "NOTE", "remark": None },
  { "stock": "SPCX", "date": "2026-06-12", "event": "IPO",                            "type": "NOTE", "remark": None }
]

fetched_news = []

for symbol in tickers:
    print(f"Fetching live news for {symbol}...")
    try:
        t = yf.Ticker(symbol)
        news_items = t.news
        if not news_items:
            continue
            
        for item in news_items:
            content = item.get('content', {})
            title = content.get('title')
            if not title:
                continue
                
            pub_date = content.get('pubDate') or content.get('displayTime')
            if pub_date:
                date_str = pub_date[:10]
            else:
                date_str = datetime.now().strftime('%Y-%m-%d')
                
            provider = content.get('provider', {}).get('displayName', 'Yahoo Finance')
            summary = content.get('summary', '')
            
            # Extract link
            click_url = None
            if content.get('canonicalUrl') and content['canonicalUrl'].get('url'):
                click_url = content['canonicalUrl']['url']
            elif content.get('clickThroughUrl') and content['clickThroughUrl'].get('url'):
                click_url = content['clickThroughUrl']['url']
            elif content.get('previewUrl'):
                click_url = content['previewUrl']
            else:
                click_url = f"https://finance.yahoo.com/quote/{symbol}/news/"
                
            remark_text = f"News via {provider}"
            if summary:
                short_sum = summary[:120] + '...' if len(summary) > 120 else summary
                remark_text += f" — {short_sum}"
                
            fetched_news.append({
                "stock": symbol,
                "date": date_str,
                "event": title,
                "type": "NEWS",
                "remark": remark_text,
                "url": click_url
            })
            
    except Exception as e:
        print(f"Error fetching news for {symbol}: {e}")

print(f"Total live news items fetched: {len(fetched_news)}")

# Combine static events (converted to NOTE) and live news items
all_events = fetched_news + static_events

events_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'events.js')
js_content = "const eventsData = " + json.dumps(all_events, indent=2, ensure_ascii=False) + ";\n"

with open(events_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully updated data/events.js with {len(all_events)} items!")
