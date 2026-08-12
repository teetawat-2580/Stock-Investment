import yfinance as yf
import json
import os
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
import dateutil.parser

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
seen_titles = set()

def normalize_date(dt_str):
    try:
        dt = dateutil.parser.parse(dt_str)
        return dt.strftime('%Y-%m-%d')
    except:
        return datetime.now().strftime('%Y-%m-%d')

for symbol in tickers:
    print(f"Aggregating news for {symbol}...")
    
    # Source 1: yfinance API
    try:
        t = yf.Ticker(symbol)
        news_items = t.news or []
        for item in news_items:
            content = item.get('content', {})
            title = content.get('title')
            if not title or title in seen_titles:
                continue
                
            seen_titles.add(title)
            pub_date = content.get('pubDate') or content.get('displayTime')
            date_str = normalize_date(pub_date) if pub_date else datetime.now().strftime('%Y-%m-%d')
            provider = content.get('provider', {}).get('displayName', 'Yahoo Finance')
            summary = content.get('summary', '')
            
            click_url = None
            if content.get('canonicalUrl') and content['canonicalUrl'].get('url'):
                click_url = content['canonicalUrl']['url']
            elif content.get('clickThroughUrl') and content['clickThroughUrl'].get('url'):
                click_url = content['clickThroughUrl']['url']
            else:
                click_url = f"https://finance.yahoo.com/quote/{symbol}/news/"
                
            remark_text = f"News via {provider}"
            if summary:
                remark_text += f" — {summary[:120]}..."
                
            fetched_news.append({
                "stock": symbol,
                "date": date_str,
                "event": title,
                "type": "NEWS",
                "remark": remark_text,
                "url": click_url
            })
    except Exception as e:
        print(f"yfinance error for {symbol}: {e}")

    # Source 2: Yahoo RSS
    try:
        url = f"https://feeds.finance.yahoo.com/rss/2.0/headline?s={symbol}&region=US&lang=en-US"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, timeout=5)
        tree = ET.fromstring(res.read())
        for item in tree.findall('./channel/item'):
            title = item.find('title').text if item.find('title') is not None else None
            if not title or title in seen_titles:
                continue
                
            seen_titles.add(title)
            pub_date_txt = item.find('pubDate').text if item.find('pubDate') is not None else None
            date_str = normalize_date(pub_date_txt) if pub_date_txt else datetime.now().strftime('%Y-%m-%d')
            link = item.find('link').text if item.find('link') is not None else f"https://finance.yahoo.com/quote/{symbol}/news/"
            
            fetched_news.append({
                "stock": symbol,
                "date": date_str,
                "event": title,
                "type": "NEWS",
                "remark": "News via Yahoo Finance RSS",
                "url": link
            })
    except Exception as e:
        print(f"Yahoo RSS error for {symbol}: {e}")

    # Source 3: Google News RSS
    try:
        url = f"https://news.google.com/rss/search?q={symbol}+stock&hl=en-US&gl=US&ceid=US:en"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        res = urllib.request.urlopen(req, timeout=5)
        tree = ET.fromstring(res.read())
        for item in tree.findall('./channel/item')[:25]:
            title = item.find('title').text if item.find('title') is not None else None
            if not title or title in seen_titles:
                continue
                
            seen_titles.add(title)
            pub_date_txt = item.find('pubDate').text if item.find('pubDate') is not None else None
            date_str = normalize_date(pub_date_txt) if pub_date_txt else datetime.now().strftime('%Y-%m-%d')
            link = item.find('link').text if item.find('link') is not None else f"https://www.tradingview.com/chart/?symbol={symbol}"
            
            fetched_news.append({
                "stock": symbol,
                "date": date_str,
                "event": title,
                "type": "NEWS",
                "remark": "News via Google News Feed",
                "url": link
            })
    except Exception as e:
        print(f"Google News RSS error for {symbol}: {e}")

print(f"Total aggregated news stories: {len(fetched_news)}")

# Combine static events and aggregated news stories
all_events = fetched_news + static_events

events_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'events.js')
js_content = "const eventsData = " + json.dumps(all_events, indent=2, ensure_ascii=False) + ";\n"

with open(events_path, "w", encoding="utf-8") as f:
    f.write(js_content)

print(f"Successfully updated data/events.js with {len(all_events)} items!")
