const eventsData = [
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "Jane Street’s $15 Billion Loss Lays Bare Its Hedge Fund Side",
    "type": "NEWS",
    "remark": "News via Bloomberg — The question pinged around Wall Street trading desks as they watched their rivals at Jane Street shatter record after re...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jane-street-15-billion-loss-204522531.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "Sector Update: Financial Stocks Decline Late Afternoon",
    "type": "NEWS",
    "remark": "News via MT Newswires — Financial stocks fell in late Monday afternoon trading with the NYSE Financial Index dropping 0.8% a...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/sector-financial-stocks-decline-afternoon-195353964.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "JPMorgan revamps SanDisk stock with massive price target",
    "type": "NEWS",
    "remark": "News via TheStreet — I covered SanDisk's Investor Day Aug. 14, when the company revealed a long-term financial framework calling for 80% gros...",
    "url": "https://www.thestreet.com/investing/stocks/sndk-sandisk-jpmorgan-raises-stock-price-target-after-investors-day-august-2026"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "SanDisk Rallied On Contracts It Had Already Signed",
    "type": "NEWS",
    "remark": "News via Trefis — The investor day news was a day old when the analysts moved the stock, and what they were paying for was visibility....",
    "url": "https://www.trefis.com/articles/611683/sandisk-rallied-on-contracts-it-had-already-signed/2026-08-17"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "Why AMD Stock Is Down Today",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — AMD Stock Slides After Chipmaker Sets Terms for Massive $4.75 Billion Debt Sale...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-amd-stock-down-today-173725648.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "JPMorgan warns a brutal grocery shock could hit boomers, as USDA says prices may jump 12.3%. Is your nest egg ready?",
    "type": "NEWS",
    "remark": "News via Moneywise — “Rising fertilizer prices could lift global food inflation temporarily to 4-5%.”...",
    "url": "https://finance.yahoo.com/economy/articles/jpmorgan-warns-brutal-grocery-shock-173000391.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "Will Housing Push, New Bonds and Blockchain Network Expansion Change JPMorgan Chase's (JPM) Narrative",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — In recent weeks, JPMorgan Chase & Co. has declared dividends on its Series II, OO and PP preferred stock and launched a ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/housing-push-bonds-blockchain-network-170942577.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "The ‘Jamie premium’ nears $1 trillion as JP Morgan flirts with historic market valuation",
    "type": "NEWS",
    "remark": "News via Fortune — CEO Jamie Dimon has spent two decades building JP Morgan into the lion of Wall Street. Its market cap was $138 billion w...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jamie-premium-nears-1-trillion-164735019.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "Arch Capital Stock: Analyst Estimates & Ratings",
    "type": "NEWS",
    "remark": "News via Barchart — Arch Capital has underperformed the broader market over the past year, but analysts are moderately optimistic about the ...",
    "url": "https://www.barchart.com/story/news/3888832/arch-capital-stock-analyst-estimates-ratings"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "UBS, Tudor Investment Increase Bitcoin ETF Exposure in Q2",
    "type": "NEWS",
    "remark": "News via CryptoProwl — Swiss multinational investment bank UBS (NYSE: $UBS) and Tudor Investment, a hedge fund firm founded by billionaire......",
    "url": "https://www.cryptoprowl.com/releases/ubs-tudor-investment-increase-bitcoin-etf-exposure-in-q2-6447"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "JPMorgan cut Polymarket as banking client over regulatory concerns",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://qz.com/jpmorgan-polymarket-banking-relationship-regulatory-concerns-081726?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "Bitcoin Just Took a $390 Million Hit: A JPMorgan Warning From April Explains Why",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://beincrypto.com/bitcoin-etfs-390-million-outflow-jpmorgan-warning-analysis/?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "JPMorgan Raises S&P 500 Target to 8,000 as Earnings and AI Growth Strengthen Outlook",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://investorshub.advfn.com/market-news/article/34287/jpmorgan-raises-sp-500-target-to-8000-as-earnings-and-ai-growth-strengthen-outlook?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "JPMorganChase Opens New Two-Story Magnificent Mile Flagship, Bringing Chase, JPMorgan Private Client Together Under One Roof",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/small-business/articles/jpmorganchase-opens-two-story-magnificent-190000531.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "ETFs to Buy as JPMorgan Races to Become the First $1 Trillion Bank",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/etfs-buy-jpmorgan-races-become-144000478.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "Shein Is Said to Target Up to $27 Billion Valuation in HK IPO",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/shein-said-target-27-billion-143209036.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "AI Is Driving Up Treasury Yields: ‘It Just Touches Everything’",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/economy/policy/articles/ai-driving-treasury-yields-just-093000747.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "Banks Cheer as Trump’s Regulatory Rollback Spreads to Europe",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/economy/policy/articles/banks-cheer-trump-regulatory-rollback-040005762.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "3 Bank Stocks Walking a Fine Line",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/3-bank-stocks-walking-fine-163700759.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "Bonds Face a Bigger Threat Than the Fed as Global Rates Climb",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/economy/policy/articles/bonds-face-bigger-threat-fed-120000846.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "Is JPMorgan Chase (JPM) Stock A Bargain Or Fully Priced? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQRVh4aWxYYmQtWGQtdXpoWUFId0EwQ0dabVlZNVVfSkpCQ1pPcEkyeFJqS2twUEY0RWJuV1I3VHBkckJSMnF6LUJ2NkhqemlTdVI3ZmJhUjFHQUplcjZ3Y1FaNFdFUFEyN3VZdFJiMlZCUHZ6VmxKOTZ3ekI0bXZQY05NdjlOVS1QTUxlZ04zZUlzbDdlS0ZvVzdva2ZZVWp4SGdTVHlSY3lva2g0amNkQUZ1R21pSkQyQWpuZtIBwgFBVV95cUxQUnZ2bmdpdVUwektqbktQUThTVjVObFJyVWZFZjU2UTBFTGN5dHpkU0NJSjluenJTaGpwYzRhWGR2MHpLanc0YXkxQ1hUSEtFYi03QlNOVkJjZWhRMm12TnZNcmRxdl9lZ1ByMjRLTE0wTUUyNV9yTTRUU01IWkN1NmJBU0RrZXNqOTlmRVVGajlFRE4tNUoxWVFVSTcxQTVPUlpYVklMYk0yZ25JTVB3dXpsclkwd0pqeTdFcHhaWjQyZw?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "Here’s How Much You Would Have Made Owning JPMorgan Chase Stock In The Last 5 Years - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQYjJ5UTN0S2xZR0R4X1g1YlRmaWRUUjZzSWFxU0ptUUxQZUNldDUwVWNDTjlPdU05c0tlSXdVQ2xGSU1UQkg2SldMUmJIN1BodFlXeGpLMVcxSUVJdzdnWTRRV29uQ0dYRUZDUWl1QjhPOXIyUW9qc1E5X1Y1Sko0WThjLVZyTHhOSWRkRGZxTlFDOEVPa0dKNW5YTlZpbU5BdjZRcjRMZXRwTU9uaHFIQ2Y4R1NreTdRU19KeXhR?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "JPMorgan Chase (JPM) Stock Gets Fair Value Boost After Analysts Raise Targets - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQQUJCVENvbkFBUC1kUU5FWUNqbWU4b2F1SmdGeDZIMk5fMWZIZFVkb25aRUJQU3ozbndQMHNwZHNVYUdhRVdraXNtOE1Md0tKOTVmbjhocEJPdDBZQUhnQzdlLTdQZnB1U2I4dElSRUdWLTM2RkVlelFuUDRkdkxQM2RuV3U5OXRHSkE0VEFCYXpOZ3pzTWlXck1B?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-15",
    "event": "JPM Stock Gains Nearly 3% — Jamie Dimon Succession Dynamics Shift After Marianne Lake Exit - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxQdjdQbW5Za3hwWGcyMVB2OWxuWjhkUEdrZHBBbnItWmVSYWswRzVYdnRrRS1nSG9MdWd3dlhTdEpGQ0lVTy1Obm5ueVhoVlBWdUxuUGZmWGZzU3UyZXUyZlhkRTFvYWFoekZSOWR1bkMxaXZBclJ5NWsteFY3djZ0LWFua3RqVm9ULTBVeWV3em5HTml3S3Qxc0pFMFpQUFZ6b0Q5S0tmNFQ0MTJMMzhfOEV6NnRNUHRVMFJiSEpsZXFHVVlPWXFQcjI0Wk8tMk5GTkVOWEV1cGFsUTZYUjlPajRSSjhPOG5XWTFn?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "ETFs to Buy as JPMorgan Races to Become the First $1 Trillion Bank - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOcDlDdzhqcl9yeWRrQmZTcndMSUNtRUtJbG9rcERHTmhoN2ZNOVozZXJsS3BaM2dJX21FZzF3em9fV2VtQ0plQkFtRGZzWE1BOW1ldHdTZG90TUlUWmJ4Y2I5czFoZWxvNFBMNDhnQTAzcUlBVFFqUW9FN3I3OVlTTVlKZ1RyTDFnQ2s5bkNDdEwwdDhSVF9QT0sySkZjWVdWNzc2RWlCX1ZQb2t0WXo0Z2lud2ItNWxZU3hSeDF3?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "The biggest trading losses are getting bigger—FT (JPM:NYSE) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPNjROVWVuaXUzc04wTlVibFZsRG1iUWhFWENXMGwzNjZBbDExWTNDMlN2U3ZWbzVXUFVzbnNYWExOWnFydnRIbGswSkM1TXdKOWZFeVNlNXlZQXd5Q3dnbUVDM05qQkhTcElFall0UGYxaUJHOUpPQm9TcFJMY0VfU2UyQlB1WWRTUUI3ZXZPRHBxZw?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "JPMorganChase Dividend Declaration Covers Series II, OO and PP - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOUTA2UFI1VHItR2tqRFFnNFlOQkUxdzNzMUN6TnExM2RERjM2dGs0S2ZJX2V0cDhSYV9VY093M3luLUN0MWI5TkVlSHVNQ2FZRkx3VmxHZmtTYXhPMXczTmRnd1k5MFpsQnlWeGg0d1ZOekx1bXVjaVN5NS1vVlVnTFBiemFXdXdIMG9YOENqYW1OZHlLZEM5Qlh3?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "JPMorgan Chase: How To Limit Risk On A Stock That's Doing Well - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQLVk3bkVwaTRNdmNKYWlmNUJvZ0gxNE5aOWhyNHFTSFpaUjV1NFFEbWVjSzEzZ21wdEs3WVJ5Tm1faVNfQUNPcjBsd0pTZ25DRDVualh4TWJHazBoYVJTVEpOU2l3T3R6UmJ0Z1RoUXlZb29PZVhyOWswTFF3Tk5tUWdSbHk4b203YmJob1JsWFV6M2hEU2tMdzlteXFtcVdlVGdn?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-13",
    "event": "JPMorgan Chase Stock (JPM) Opinions on Robust Performance and Fed Expectations - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOY2dHd3V3Vzc4cXM5c0lLVldTX0R5dWVHUFhWWVliTGJ1Q3hXZTVVMXU2cC1lSFFrb3ZXZW9nOExPV0NoTVptZnFzUGduRUEzaWw3OFdCa290QUk2UkNjOW5KR0pFa3VVUTYtYlhnT3lLZWlUdTRMTkxwY05BdkdjaXZPbnU0MFEwWnp2SVo3cmZJNHAxbTNtY3drWkNFTXFhYWpiQWtoMWgtRUhkc0tHbXNoZGlwUQ?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-13",
    "event": "Dow Jones bank stock hits record high on surprise jobs report - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOM0pvSVl5RXNiSEZ6d3VWeXBCSFprTnY1UUpmRU5oX3lJWDRYNC1nYUZCUXQxRTBsRlZIVzgxVjkxX1BYT3VBRWVieDM2YXRNaG1idkZENUtSNllEbVRZQll1YnFmTklMX0FaN2R6S09iNldPSjd2cl90ajUxRHN2dHJzM3ItYWF0anhMeUtSYjFqTUt4bDBha19BYw?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-15",
    "event": "JPMorgan Chase & Co. $JPM Shares Sold by Gateway Investment Advisers LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPRThwOURLVTBuc3NfdXBCWVZJZldlX25TVlZpa2I2T2VTWjFoeDJVeDNlNk5OeTU5TVF2TmRIRVdJMDB1NVNIRG5OdGNzbjM5eHRuOUkwcXctRlRsbmxlRE9ha3V6cmt5ZGV2TVNyZWVyaGFBM3dpZVd3ZkRMMVA1YTFsUGxKMThvclZZMkI4bXJwUjI4SnU2RnpwSVdtVDlXcEljTWhiNzIwN1lHNld4dDFER2I0MG9iVmtVdUY5cjlaQnJuQnhMdA?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "JPMorgan Chase & Co (JPM) Stock Price, Quote, News & History - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiSkFVX3lxTE04TXFrZ0ViZDNCRmp4VDJ5T3BKZlNNUkZ0VW91V1ZXQjIxRFdNNDVXSWN1YlF2Xy0zeVVkUDF5QmhraGN0S2YwLTJ3?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-13",
    "event": "JPMorgan Chase (JPM) Stock Looks Reasonable On A 166% Five Year Run - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQb3NhSXFzWDVlVGZrUFJKWjNrdzgzTU9jR3FqdXk5czNnT0F0OEt4S3o3ZGM3TV9tX3BRalRxQlRkSFg3cEpYNGZQcjVmZU9VeHY4cDZqZEFKQlRFTHU4bVljdm1yMmdsNzVYS21iYThVT1JhUnVueHMta0RmSTcyUFJ6X0U3Q21jamFQeUlMNm1iVk5UbzRtMkNsMA?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-15",
    "event": "JPM, GS, MS Stocks Edge Higher After-Hours — Banks Lift Dividends And Announce Buybacks After Fed Stress Test - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQNFBEZVk5UzVPNXJWQVZoMWpvSlBWaEhYa0hOeGpuQ0VpSTFVU01JeHljcXNvM3FoN2xveHFoQ3Y4RnZuVTh0eHJ4ZnhPWGZhUVphNWo1OE5Qa2dlTXh5WjQxMVFUTHJIUlhXS3F2SkFlLWI0dGpnMjdVZTFWdVRYQk4xZjRhUjVVeThYclhrWDFQOWFPZFZjNGViMkwycVpvbXc1aElLQkxSRGx0d2JBWDdWRnBvekJmLUtlOGlpV0o3dDRNWURaSlQ3UTVRNkRabGVOVDB2OFJoM3dBNHJJeERLcjM?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-07-27",
    "event": "‘Further Upside Ahead’: J.P. Morgan Says Buy These 2 Stocks - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQNFpoeFZXaTU2VkdYaGdac1k1SzhaLUZlM3lWckdzWmhOMVF1bjBnS1lSVFR6WjJQX1FxYTE5VTZveWZJSWxpemZiUkJha0htVVZMSG04N3FYOWxjYlJSZVhiZlhqN2lVOFBKRzFHeXRsNkkwOVIySnVod01lcEo3cEFiem5XY1FsV09WWmlhVmFMMm8?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-15",
    "event": "Why Did Banking Stocks GS, JPM, BAC Surge To 52-Week Highs Today? - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOTTByV1B2WWFRMEp6WEdoZURMeHRRWkM0eGNIQ3FUYVhTWUc0VktMSkkzOUJUNzlHZC1WUEFhdm9pcFNWcWVZVEtzSEtmdkoyLVg5UEdoVWsxdlc5cEFUNkNTcExCOEQwejB3TXlzejJfcmFxMFBLa2ppUFVIeVNWYnYtVWVnLWhVVS1NRXVpOGszWm5CUk5tMUt1cmtaSmItZUZUYU53c1NoaXliS0ZuNkFiejdVZ0tuZ00xT3NsaWNfVng3?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-15",
    "event": "JPMorgan Chase (JPM) Ends Banking Relationship With A Prediction Market Platform - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQSzZpWUpMMGlmNzE3V2U2ZjdvdlRqYXBPdFBtOUxoeEZkeW9UOGJrUEptTWZrMWRTNzk3bkVxZm9CSjNweTBHR3VBMkRwRWxvazZXR1hlV1pIOUJUSHlyam9FSkhvVkRtOGhJMHMyaWFubk95MFlRcEhtckszckVBMXh6eUh0UXdlczZWTDFkOEtoN0YtZV9ORFhoQ2Q0cm5pOGJOOF96dFRnNWQydUt0a3ZvRFlwM004SFdYdGFBODFLVFFDTFHSAcsBQVVfeXFMUFJwSlRlSllSX0c2NFV1OFREeENfdk9temZUTGd0bGI5RHRzQVRJUzE4X2N1WlJISXJwMTgtRjJfa2dUY3B1N2luZ2IyT0dlRFVJaWlSTXVOdmkza050S1lPZ2x6aENCb3ZCX005NU5tZHdnQjlVVFlqQVFhQUt5elJhOWNZN1VjclVLR3BIY2xvdnd5dHFhYXR6Rkt3U0lWRnRmYXdJLVRfTndqU0tEVW95akE3Q0dSSTlFTzZvZzF5UGJvY1JyZWpfcGM?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-13",
    "event": "JPMorgan Chase & Co. (JPM) Up 5.3% Since Last Earnings Report: Can It Continue? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNN0FJSWhha0ZmeUxMYnZFSlVTSlkxblIyVHZ5dUZUOGZEUGhUWkFwNEVyNmxMVjVYVzhvNHQzQ0Y5allncVBQaVdYQVBHUnMzWW1vUDRFaFoyZUNuUXpsc1RtVVVCbU43MXVES242cWFXNTVHOHZubVRSV3hSUklPSGU0QTRacDN0VEVvbkxQeEpSUQ?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-07-29",
    "event": "JPMorgan Chase (JPM) Stock Looks Undervalued Even As Earnings Look Fair - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQekE0TUk1aFJUOUZhczFYdHJNOEVJb2ZuMHB6ZFBTZkppOU5vTVVncUFmYi1QNjBmTlFPRXBBX082OEpxOFc3dDNuQkxJdEhkYU1PWmxOVVV0WThNSEE3Y1pmS19kOG9aeXRwMDVIVHNmNzRLMHp4TUJNQ0E4TV84dDBTRm1VbDNRaUFPdDBKSl9SdGZTM3liWUg2bw?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-07-31",
    "event": "Is JPMorgan Chase & Co. (JPM) Stock Outpacing Its Finance Peers This Year? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQbnJlUWhHX1diel9ILTJ6VU5KdVF4WTRneGhQOWhONW1ack1nY0k2dkNmLXRIS1M0T0U2UTlwZjFuNThpbWFDVndGZmdzNFFsUFF6Zm5CMWNWeUtVTGJJRFp1NTVGdlB2eUh4a3lDeTg0U1ZFLTZwV01uTHFzc0pIUjMzVTFBMXQ2c043OWN4cHN1UkRBTjg4?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-06-10",
    "event": "JPMorgan Chase & Co. (JPM) Stock Moves -1.12%: What You Should Know - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPTThDUkVJdk1tSEEyY1JoUHJsQ2ZEOFlaOW96TkxKYjdWLVFya1dfcWdxSV9XV0w1Z0VKMlFCUWZPTDF2TEJRZjk4aG1ydGI0VUIyVWRfMktzVHRXcV9xNUl6dW03ZkZ5UFNiRXB1bVBwOEFWeDloWWFpNkJadHhWajV5YzNYUWs4TG1ETm1SaDN4cllnYjJN?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "JP Morgan Chase & Co. (JPM) Stock forecasts - Yahoo Finance Australia",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOVXFjS3lzM1I0d053UHFkOEhTNXNTS0RJSlpRN2tMeExrX284SnZOdFhpaFRleVhZX2p5UEtxN0hnQmU0bWJ2SjBjUVFxc3NaRi1tQnRxa3ZITzJuS2pSbWtrblNwV2J0Tm5LN2xKZXo3alIwbVVCN0tlNE5Ec21XdG9fNkwxMTlvNDVyWTJ0LWY?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "Scarborough Advisors LLC Sells 9,378 Shares of JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPSUMzR0Q4S21zd18wb0h6cG1walJvWWRpekxGN2JPSUlRUjhQREdOV0lYZlg0S1B1bVpHSjhlRGd5ME5CMzFDaG1wcVdSd2RlbDR1bzY0c2J0UGxIUm1zWnVnOUF4SmtIaHJFZ0EyOVZIVHcwWm43cXB0TURlNXNPRWx5VW9xX2ViVEtoN2g5S18zOW13V0xrQkY1Q0tDbjRTd0xWR283X0Q0N3dBTmZkZUNRUVR2Q2hpLVF3d3p5djBBa0hWSEtz?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "Washington Capital Management Inc. Has $2.95 Million Stock Position in JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxNZXgxZ2FTbVhfYk5qdTUzbmNTbmtGclcxTWF0UjRxSWdCNkxkSkg1MDJfc2h5NG5KNWVqN19KUmdqSXROb0VXWXA3NEt0Z1U5cFFDLVVGenZnMWhIcXBScGFuVFFNSUFFQ0pYajdpVUl5MkJfcGFJeEZ3VDhKNmtDRGVJallVRk5RcE94MUNjZTBNcFJQVjVTY2tEYnFULXBmZG5ncjY2VkZiT1hJOGRRQWJ4S3gxUzJ6ZkJTaE5fdDNTRlZDMFFoM2lkWEVkYUN6TWpUQVJjbHdkbUlRZW1DR3pmUUU?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-11",
    "event": "Fund Update: New $99.2M $JPM stock position opened by MUTUAL OF AMERICA CAPITAL MANAGEMENT LLC - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQX0MxVlFhcGptb3R0S3N0cDNkSlNZY3ljb0xkVEQtVFlkMjIwNXVkQXdIOGphaFAzT3hndUQwSGdHc0VtYjRRVFRXNlhkUjRfU0h3bEQteEJqLXBJem94VXFlUEY1Mmd3XzdqcFVmeUdFc3UzRjNzNTVHUkZPNmg4MG9SLTR5UzVEalBKN0dyV0FDTzA5WGpTT0tSYU5FTS1oWWw2TGRxdU9mRElmalZ2WEdSSndGaTNRc1gzLVVwVUhvT1VkWXk5Z0wzOGFTdw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Amazon Alexa+ assistance is the way consumers 'actually want to shop': VP",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — Amazon (AMZN) vice president of Alexa and Echo, Daniel Rausch, speaks with Josh Lipton about all the ways the new Alexa+...",
    "url": "https://finance.yahoo.com/video/amazon-alexa-assistance-way-consumers-211500608.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "How Heavy AI Spending Can Pay Off for Amazon and Meta",
    "type": "NEWS",
    "remark": "News via Barrons.com — Mark Mahaney sees growing signs that internet behemoths will get a return on their soaring capital expenditures....",
    "url": "https://www.barrons.com/articles/amazon-meta-stocks-ai-a973fab2?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Update: US Equity Indexes Slide After Trump's Threats to Bomb Oman Lifts Crude Oil, 30-Year Treasury Yield Touches 19-Year High",
    "type": "NEWS",
    "remark": "News via MT Newswires — (Updates with index/price moves, macroeconomic data, and company/geopolitical news from the first pa...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/us-equity-indexes-slide-trump-211106690.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Sandisk, Micron, Coherent, Boeing, Apple, Amazon, and More Stocks That Explain Today’s Market",
    "type": "NEWS",
    "remark": "News via Barrons.com — Coherent is the best-performing stock in the S&P 500 on Monday. Sandisk, Micron, Marvell, and other AI stocks also rise....",
    "url": "https://www.barrons.com/articles/stock-movers-a39cdac2?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Stocks Struggle as Long-Term Yields Rise: Stock Market Today",
    "type": "NEWS",
    "remark": "News via Kiplinger — Fear of a Fed move to tighten monetary policy has receded, but market-based interest rates are still trending higher....",
    "url": "https://www.kiplinger.com/investing/stocks/stocks-struggle-as-long-term-yields-rise-stock-market-today"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "What You Actually Pay To Join The AAPL Run",
    "type": "NEWS",
    "remark": "News via Trefis — Apple is firing on all cylinders, yet its stock has stumbled. Here’s how to decide if this is a buying opportunity or a ...",
    "url": "https://www.trefis.com/articles/611667/what-you-actually-pay-to-join-the-aapl-run-2/2026-08-17"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Update: US Equity Indexes Decline, Crude Oil Jumps After Trump Threatens to Bomb Oman",
    "type": "NEWS",
    "remark": "News via MT Newswires — (Updates with index/price moves, macroeconomic data, and company/geopolitical news from the first pa...",
    "url": "https://finance.yahoo.com/markets/articles/us-equity-indexes-decline-crude-195613628.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Amazon's Stake in Anthropic Is Now Big Enough to Move Its Earnings. Here's How That Compares to Alphabet's Stake in SpaceX.",
    "type": "NEWS",
    "remark": "News via Motley Fool — Amazon and Alphabet are benefiting from their massive investments in AI and space companies, but those investments come ...",
    "url": "https://www.fool.com/investing/2026/08/17/amazons-stake-in-anthropic-is-now-big-enough-to-mo/"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Here’s How Nancy Pelosi Beat the Stock Market and Warren Buffett",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — The S&P 500 has delivered roughly 13% annualized returns over the past decade, one of the strongest bull runs in modern ...",
    "url": "https://247wallst.com/investing/2025/11/23/heres-how-nancy-pelosi-beat-the-stock-market-and-warren-buffett/"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Top Investors See Value in AMZN: “Amazon Has Built One of the Largest Chip Businesses in the World and Barely Anyone Has Noticed”",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Amazon has quietly built a chip business that top investors say rivals the biggest names in semiconductors, yet the stoc...",
    "url": "https://247wallst.com/investing/2026/08/17/top-investors-see-value-in-amzn-amazon-has-built-one-of-the-largest-chip-businesses-in-the-world-and-barely-anyone-has-noticed/"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "AI/R Compass UOL Named Amazon Quick SI Partner by AWS Generative AI Innovation Center",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/ai-r-compass-uol-named-190200031.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Amazon’s Stock Could Hit $500 by End of 2027. Why AWS Revenue Is the Key.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/94a0dc38-2964-37a3-b7ce-cf6ec1cec673/amazon%E2%80%99s-stock-could-hit-%24500.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Apple Stock Got an Upgrade. It Could Be the AI Gatekeeper.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/6bef341c-5032-3b65-a77f-891b2b04046d/apple-stock-got-an-upgrade..html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Rivian Drops 25% This Year With $164M of Credits Vanishing in the Second Half",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/17/rivian-drops-25-this-year-with-164m-of-credits-vanishing-in-the-second-half/?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Here’s how Amazon’s stock could nearly double by the end of next year, according to Morgan Stanley - MarketWatch",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPV1RUWEpINjJIaFN6OGk5c19KQ0pJc1BuMUFnSXNrX0hLZXJsUVdNN0xkWV9OYnAyODVic2NhdXlJS1FDSVk1OWVHNlNnR3A2TXhhbWhPVUJoeGc4TTVpMnFGZXBfUnNsT2gxT2VWWmhfSWN0TEpRSmxRQ0ROaWJzT2d3cEtlSHNGbC0xZDBGdjBDcGhkdDhNM1Q5b1JUdEk0RXp6LWJhX3ZUYS1wTXZWRHctODZZeWxoT2ROWktwTDlGa0FMRUdBcG9UZE5UaEQwbmpLUQ?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Investor Stanley Druckenmiller Increases Stake in Amazon Stock (AMZN) by 1,000% - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNNTNCNlZPSWVyUGVtMXg2bG5WakJRYVRCMUM2SG1EcmRHN0NOYk9oNHp2VTFPcDNWWWttQUQxU01WM2JTY21QQ1hlQUJ1VjE3ZVVEYmp2eDJGQWFUNU1SUUtPQTRpekZuajNzZ2V4Z0hVV3AzNVBtcklzWk1pR3lDTzJuWEJVU0NETkEtOEFNblRERC12TDlkU2tZNi1EemtNLWpjRERLdmV4QQ?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Stanley Druckenmiller loaded up on Amazon and chip stocks before July rout - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNRDlSZnlyczVwT1BoOWxsUWI3OV9hd0dkaXY1c2JwblFOTHBUeW5fT2JacS1iOUxja0ktSlZrZ2VyT0MwbDlCTnA3ckt6N1Z0d1NvMlhSZzVKdVZKSS0wNmVocGJwVUdZbVF4eGRtdzZ5VmpFTjVMN3MyUncwWG93QmEwYmRCblpyWk5SeFA3dHkxTW9UVjVwNVhHTm93Q2p3akNLM3l3?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "Amazon (AMZN) Stock Gets Fair Value Bump As AWS AI Demand Lifts Analyst Views - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQUVBrM1U1NDFNZVRhZWR6VVhzMTRIMlFaR3dTMlh4OE10cllDeUtqZ2ZDc0w4LTM2bXIwdTMzZXlEb0k5dEtsSV80WFpXNVg2WXVkMGplSGlmX0p3MDVZVThBNmxuU3lZMFZXa0FqR3VQRnBWZVgxVVpiM1lQQTE4ODFkZWYwNVJUU2FCbXhWeGtnR3p5WjRN?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Amazon’s Stock Could Hit $500 by End of 2027. Why AWS Revenue Is the Key. - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5LOGU0SG9wME5XTTFVbFU5VXotS1pWRUg2dnVFZ3JZY3AwSmROVFkzRXF0TjBDUExqdEVTalZKU1hsVzZOYVZwQUpTckFpTWtzbWZwTEFiYUM0ZGdqeWZLOXJwTXVOcjhlQzhIa010ZDRtVjlNLU1CaA?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "Peter Thiel invests $118 million in surging big tech stock - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1ySWNzOVc1eVhzNkxITllkQzBxcWdMa2NPSjZobGhHa1pPNXZNazBheTJzNk5fLTVKeExMbXZRbU1mSGMxSmt5YUc0SE5IRHo4NUxWQ2t4VXp6VDNjSk0wdURSTGQ1TUs5b056azlEdG1Nd1RNOFE?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "What's Going On With Amazon Stock Monday? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQQU1Ca3NzemluZU5FODlKalNubXpqV0VacmFCaHV4NEg1d2R0NmpGSmpXSTJfMjJpQlVqdDA0RXRRWlkzU3NwOFktQ2t4V0xicW00amJYNnBLRXA4NUdqVGI0THBaN3Y2QTZHQ3dkRmFQRDhfeGR2emtVMDVFRXZwWF9HY0c0WXFKeDlXWlpXd3ExcHlONmRLVzZJWWt0REZhend2eg?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-14",
    "event": "Amazon and Alphabet Both Cost More on Next Year's Earnings Than on Last Year's - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQUExQWkJzM1RrOWlCNHhKMU9XcG9BY1NMX2lnTVlySE05bmFVWkxxX3gweV9lem1IU0xBeDNKajlFSkFzV0Z5Tm8zaDBkdWpJcEhKcUdhd3l5ejAyazBMRFJmNFNXbDZxOHY3VXExS3Q3RkhRQmphVjJSZEx6YU56Q3c2c0FDQ3pRVHRaZk1OSFdTOURLTnhMZg?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "Amazon or Oracle: One AI Stock Worth Buying, the Other Is Too Risky, Says Investor - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNZWlvRDBrU09nUzlKd1Zsc2E1RG42X25NNmdLRURUUEhTQnlYV3E4bFVZN25Gczh0TVIzaDZadTh5cXdJaUpwUTRBdnk3YjJHQ0Zhb2Q2NEx4VnYxVVFoZi1wNFR2eXBDMzFqSUZ0cVZWSEdxTl9lWlo4TXBlTEVETzZhNllDNUtXTmtkYW0xa0xzaXFEUjYtZDNIbzM2RHRkUFJLN3ZjN1YzT0xiUnc?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Amazon Stock Prepares for Bull Run as Morgan Stanley Details “AWS’s Path to $1 Trln of Revenue” - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPc1JlRVR5UUVJVTNDVG0yRHV1V0ZNaFpPc1Bpdi1tS2VGem5IY1M4dVBJbTFMSnFZeXUzdjdyMHlWWi1PbFNCVWRCOVBWUF9TbVpjWmJITlpWSi12cFNvZG96UmhsckZ3bVVIcXJ0T2kwYWRWUFozcHEwMHh4UWd6azlidFdPYnh6YUp0NGQ0V2xEUjVGdjN4QlVzS3NjMHpVRjBnbS1nd3lDc0hfMFp1cm5XRC1yVTA3S0pib1FB?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "AMZN Stock’s Road To $500 Could Be Led By AWS, Believes Morgan Stanley – Firm Sees AWS Revenue Reaching $1 Trillion In 8 To 10 Years - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPSE1JWUVtWXdBemJraWgyZVRSV3VmM1M4aWJxV0sxUUpvRWlHNmFwUGFPQXR3a1dIVGhCX004RUI1bTNQTFUwQ05XTTktdTlqRjFVQ2lwN1g3aDV4T1l1a1hJRG9zWG1JQkFpR2lpbEczblh1T2RlVXJHYWNHZjYyS25TN04yUURTYTg4U0Zzd2o3WWl6?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "AMZN Stock’s Road To $500 Could Be Led By AWS, Believes Morgan Stanley – Firm Sees AWS Revenue Reaching $1 Trillion In 8 To 10 Years - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxOQllZR3ZzU25aQzdTaDhnUFJYU1BONnEtYjVVcTJhY2Y1aEJFY2kwWlo2c2ItWDZ0am1kbWFvc3RHQnZfaEVPQ194RmhwWGlodGd6OVQxMjZUcDhsbV82cHNIMGtRRGlYLWZZdk55Rmh5OHpQUlpfMmw1THlySllrRjZ2RDd3UDJCX3l3dEF3T2xaLUwzUkdObTFVTzI1NnByd0hnVmxjU3ZxOEhtNUhsME1RWkxhWW1mbU12dWxpdndoTUY3Q3JtZlY1VUF6Ymg5?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Amazon (NASDAQ: AMZN) exec eyes new stock sale under 10b5-1 plan - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQUjhNVjRtYjhFVUFKZTN1ZkI5NlZ5c3lrSkV2WDd6SnlnMWFWY3ZhYzY3ZlJwdXJGdEZFaEQtXzRHRUppYTB5dEJlNVFoMjZkanhEWVNzQlpKNU5mazVjNUNKN1VRamROaGtpczJiZ0lVNVVRY3RsRWhWUTZkcTJkb2duUWJlRmgtbnl6TlNYM1RsYW1LUWc?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Amazon (AMZN) Stock May Trade At A 39% Discount Following AI Demand News - webull.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBFTjZQT09rSXBpMUZKVFFZTmtqZkFJakE5QzFOck9qNjlYcDJ1cE83S0I5Yks0NnY5eVl3Qy1VMWpManYwbl9UMWhfY1RGTFJDcm5XZDNYVnc?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Amazon.com, Inc. $AMZN Stock Holdings Lifted by Howard Financial Services LTD. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxNX0l6SVdjUnFwVlpNVGp0VGZMSVZ0bFhFX1FVZGZPY3p5dTdCaF9IY2xwUTEweUU4aU5tT1FITlBSdnNrRE01bTViOEtSSndMRlF3R3h4UHlpT0J0QVJHYXpPLWVSNmNEdy01b2FvTXV3NTFHUERQRVMyMXJfUjEweGJFVkY3MUZSV0d3cHlXY2hMWEt2R2I4alNWc1BOTktFaUZoYV9DbE8xaW5sNV9GNGowSWRPT0tOMTFTVFItY3NGOUlCdy1yLUVFeEdoQjQ?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Top Investors See Value in AMZN: \"Amazon Has Built One of the Largest Chip Businesses in the World and Barely Anyone Has Noticed\" - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxQejJMcWFQd0ZhWmpYZjI3TlRodkZOZzdNdHlVTWJ0SGVDeGVZaHVnNzRuWHdsZFFwbVY0c3JmWjJUbHozUTVsWmhYWnJRbjdtQ0l6ejNKX3RLV0xsWUxnaVNOUlRyei1laU9ScjdXSTNoTm53ZVBxTGtEaGlMR0d0UFA5Tk9VRG1KV0ZOcEl1amlCcWE5T2x0UkNGMGhTZWo3bmJIOWhuRlRLa3UzLUZBTGhFS3NDSnR2UWN5bWtZZmx6enJiMlUxN3RwbTViWHlxTVFRRkpHQWFCM3NkUWFFTEZVWFhyUkVEeVQ0UDk2ak0xaEY3c2hZa3BFbXF6UzQ?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-03",
    "event": "Amazon tops $3 trillion market cap as stock continues post-earnings surge - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE5qVDNrbTdTYVBLTUV3RXFZZkVrT21nWE9DRXJwcFQtYmtYTTlZSlAxNGM3aUxBTVVSTVVrY3hIdkpIeWcyMENiWUExbEdhR1BtRXNJb3lsZlFJdWZNcEdaaW11Wk9rdk51aUZmSTd2Sl9ZakZILWlpWUNHS2lmYVnSAYQBQVVfeXFMUERiZ2wtdTI0YjRhUDl6RnVkNmhtYWFKYUVEWkRXR1FySll6Y0czZ2FuUm5ITjZGUFF2UFZxSlU3Yk10Y2tiRnlBNmpBR09KQmNuVmZfMXA2b0p6U0kwcmxsSThUUWVHUWQ3ekJOV1l6RTYtU2xfODhFb0kwRlAxT2EtOXFr?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-15",
    "event": "$AMZN stock fell 5% this week. Here's what we see in our data. - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPSDh3WmkyU3ZGc09Lc29HTmFxVVN1UXVTTS1sWV8tR3NaR3pYdUdITDlUUGE5RTB3WFppYlZJOTB5RkY0WHZfeEhyV1NjeVpNamlyOXpMaVJGZ3M4N2dtV204OGU4YU1GVWYxbnpURlFVUV9BLTF4Z0NaQk1acVdDZm51VW84aVhqOUROQ1JqdnNHd04zVWRqalluUzY1b0FpdkE?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-07-27",
    "event": "Going Into Earnings, Is Amazon Stock a Buy, a Sell, or Fairly Valued? - Morningstar",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQYVhlWkV1eFFZaGlyQVJZQjNONzRicU5DR0xkVHRYXzFRX3BFTm5vWGVfTF9ZcURwMkJhXzNnci1xOXBUV1FNSUZ4VzNLSGltWjcweFFwT0NaNEM0R01XaE55TXF2NkpENjJ6RjdDQkNFQTJaU2NIbXZKZjAzZm13M3NSM1N0Nm1vRDRqT3I1VFI0b21fcC0zSnNZNmxjOEVqakh0LTNnNmdWRUE?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-15",
    "event": "AMZN Stock Drops For Second Day — Amazon Reportedly Cuts Jobs In Artificial General Intelligence Unit Amid Strategic Realignment - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxObGx0T21YQzRqVjNDR3A2cEx1RWI4RTZidVNhbk9mQUZpZ3loUEJtbWd0SFBlOFdKY0NtaEp2SWpTVDRGLUVWWnFSOUJ3dS13N05KbTlPcC1aYTV2M3YyVTNkRExpTG52UTZWYVZDQ3dzRl8wV3FzTGlGWXByUi1kd2xmcnRlXzFBNk8tMGJUYUZJeVYtUmo2ZDUyWDFRNGkteWZNNjIyYTh4Y1JSMTFaNHdlS2VuSEJjdS1tU0RGWFljVmsyZVdmZmlB?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-07-31",
    "event": "Amazon: What We Think of the Stock After Earnings - Morningstar",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPTXhIdDMwZ1JWb3Y3V0Z4QllGRUN1N1RjRFUyeFRNYm44OExQc2JXcjR0T2JwSWxvRWR6U2VscF9kT19pc2liWksybUtkd0lmVTg5YUZ0eFF2LUoxckZybjlJbnRqSldfUVp4NVA3RWVEQ01NMWQ0SlotTE0zenhaYWthYkM0cVgwZDFhb3Z3?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Amazon.com, Inc. $AMZN Shares Bought by Grant Private Wealth Management Inc - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPRHlEVWNUVk90MzhFbTdTZVFpNkhyZGMxeV9qX3NxbHBsSzJGUEJYaVN2YnJaNHgwanhkZm1vVVdDLXphQUVTZmE1QXRmVFlIbGwtV0JoTjJBZTlWWTRZU1BOWmdnZ0d1c0wyNm1fT3hYZzRPZXRoNXhmNnpXZ041anQwX280UkdpdklLZDIzMmlPSF95c1lrczBLY085YkNtYWhCVUVOWXAwb3Z1Zk5fMzgtc2FWeVlDWkxjeU9GTlQ1c3M4eTE3NGFmRjc?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Stanley Druckenmiller, David Tepper, and Peter Thiel Just Made the Same AI Bet— On One Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOQTR3YjAydzBKS0RfbDhWdnc1SWt6LWxOYWJhVWlPdXdEWTFUUVVYSHI1Um1kaEh5bjJBdEx5ZldDa3RxUldXLTd2eXhFNzZ1WUVvQVRGOGR0eXZRRjd0VkVfREFOSkZUbXV2ZUZ0MjdDdW9ibGptUTR4R1dlZGhQR2FzSk1ZWXRiT3AzX1BMQjBOcUg0OXFrbThFTE1Vc1Q4bFBGbHBVaWs?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-15",
    "event": "AMZN Stock Jumps — Amazon Announces Multibillion-Dollar Data Center Expansion In Missouri - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQV2l3WU13SDAwOUxIem5BUHRZQkRkVi10TnU5UzJJVE0xMHhmSF83WXdST3NzWGg0Tlh1X2tzZE9fMzQtNkNrVmhMSlBwWlh3LVFzTExDSjQ5X19rSUxVa2Y0eWFHSGEtNmhGMjhFV0tHUXlfdG4yR0NhcVJ4V0YxcW5FTTRtaUctOTFTSE9pbjNlN1YzQXg0UjdpYUgtbWJobGZSdXVtam1ENDhEQzNCSDQzVnNvQkFHZ29uS09GaE1HUlc2a0VCTG5Rb0Q?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-15",
    "event": "AMZN Stock Slides After Proposed Consumer Class Action Suit Over Trump Tariff Charges - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxNWFBRVXdqbmg4bTZpUzZuVmdkVTh3UnVONjB4SGE5OEgxbWdqXzdpempCT2x2WGRNejlpdnE5azhuNlhlRjNqOXlRb0duSzhkdElacDd1NjBDZHZfVTBfajFKMUltUW0zVlNzR2duT1EzdTQ1UzdaMWFfRVlmMjNGYVItazBFVmVEYWhSQ3BUTDFVTnBuWUh4eURYQUs3LW82eWNLLXF5MzZlSmVvWE1YX01MUjRXSjBRVFNwUmxXTnQwekVyRU8tQlUtZE1Xay1mT1Z4RS1aSE01OGVWTXZ5VUZOOA?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Tech stocks today: Anthropic's huge haul, Meta trial to kick off",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — Tech stock coverage for the week of Aug. 17....",
    "url": "https://finance.yahoo.com/technology/live/tech-stocks-today-anthropics-huge-haul-meta-trial-to-kick-off-132945569.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "SpaceX shareholders include Google, Nvidia, BlackRock: Tracking the stock's volatility",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — A 13F filing has uncovered notable corporate ownership of SpaceX (SPCX) shares. Yahoo Finance Markets and Data Editor Ja...",
    "url": "https://finance.yahoo.com/video/spacex-shareholders-google-nvidia-blackrock-150348057.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Nvidia Lines Up $105 Billion For OpenAI. Here's What it Means For Investors.",
    "type": "NEWS",
    "remark": "News via Motley Fool — Nvidia is betting big on OpenAI's future -- to the tune of $105 billion in financing guarantees....",
    "url": "https://www.fool.com/investing/2026/08/17/nvidia-lines-up-105-billion-for-openai-heres-what-it-means-for-investors/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "S&P500, Dow, Nasdaq End Lower As Geopolitics And Oil Price Risk Take Center Stage — TSLA, PSKY, MSTR, BABA, NVDA In Focus",
    "type": "NEWS",
    "remark": "News via Stocktwits — Brent crude prices settled near $91 a barrel....",
    "url": "https://stocktwits.com/news-articles/markets/equity/us-stocks-drop-geopolitics-and-oil-price-risk-take-center-stage/cZYG0TMRJSc"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "BlackRock (BLK) & NVIDIA Corporation (NVDA): BlackRock’s Larry Fink Says the US Alone Needs 70 Gigawatts of Power for AI",
    "type": "NEWS",
    "remark": "News via Insider Monkey — BlackRock, Inc. (NYSE:BLK) CEO Larry Fink joined the CNBC panel this week and laid out the scale of what’s needed to pow...",
    "url": "https://finance.yahoo.com/technology/ai/articles/blackrock-blk-nvidia-corporation-nvda-213145577.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Dow Jones Futures: Trump Comments Spark Stock Market Losses; Elon Musk-Led SpaceX Rallies",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Dow Jones Futures: President Trump's U.S.-Iran comments sparked market losses Monday as oil prices jumped. Elon Musk-led...",
    "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-trump-stock-market-losses-elon-musk-spacex-spcx-stock/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Penguin Solutions Highlights AI Factory Platform, MemoryAI for Inference Growth",
    "type": "NEWS",
    "remark": "News via MarketBeat — Penguin Solutions (NASDAQ:PENG) is positioning its business around a full-stack “AI factory” platform that combines infr...",
    "url": "https://www.marketbeat.com/instant-alerts/penguin-solutions-highlights-ai-factory-platform-memoryai-for-inference-growth-2026-08-17/?utm_source=yahoofinance&utm_medium=yahoofinance"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "OpenAI to lease massive new AI data center in US, backed by Nvidia",
    "type": "NEWS",
    "remark": "News via AFP — ChatGPT-maker OpenAI will lease a massive new data center in the United States for 20 years, backed by a $105 billion fi...",
    "url": "https://finance.yahoo.com/technology/ai/articles/openai-lease-massive-ai-data-205913179.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Will Bitcoin Drop Below $60K as BTC ETFs See Biggest Outflow in 6 Weeks?",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Bitcoin ETFs just posted their worst outflow week in over a month, and the Strait of Hormuz may have more to do with whe...",
    "url": "https://247wallst.com/investing/cryptocurrency/2026/08/17/will-bitcoin-drop-below-60k-as-btc-etfs-see-biggest-outflow-in-6-weeks/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Nvidia’s Huang Says OpenAI Data Center Could Generate $600 Billion in Revenue",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/3ca8e65d-bedb-32e6-ab70-b0a6fe0323ef/nvidia%E2%80%99s-huang-says-openai.html?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Morgan Stanley Delivers a Bullish Message for Nvidia Stock Investors",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/morgan-stanley-delivers-bullish-message-204121851.html?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Nvidia's Next AI Infrastructure Bet Is Scaling Fast",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/nvidias-next-ai-infrastructure-bet-203610188.html?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Nvidia, ASML Lead Five Stocks Near Buy Points With Roaring Growth",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/cd7217b5-d3da-364e-93aa-992f30c3cbc4/nvidia%2C-asml-lead-five-stocks.html?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Gold and Silver Prices Are Rising. Here's Which Precious Metal May Have More Upside",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/17/gold-and-silver-prices-are-rising-heres-which-prec/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Broadcom's AI Financing Could Reach $370 Billion. But It's Not as Bad as It Sounds.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/17/broadcom-s-ai-financing-could-reach-usd370-billion-but-it-s-not-as-bad-as-it-sounds/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Micron Stock Has A New Profit Floor, But Did It Build A Ceiling Too?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/611676/micron-stock-has-a-new-profit-floor-but-did-it-build-a-ceiling-too/2026-08-17?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "CoreWeave, Nebius Could Gain 10 Points of Margin",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/coreweave-nebius-could-gain-10-203310305.html?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "1 Semiconductor Stock Worth Investigating and 2 We Avoid",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/1-semiconductor-stock-worth-investigating-204620394.html?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Nvidia Strikes Deal With OpenAI As Tenant; Is Nvidia A Buy Now? - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1XTUFJeFZmVTllZDZKSFlLVjhXd2hLUEFnSXlwakRMdk1pemZJQmZFOFNKSHJBbWNfYzM4OEtoQmFpN0dINXFieE1fT3FlVTNkdExwdzJLVTJRRURUWk5yV1F4cEppRVdYSm9PekNFTEtrbE8zOUVHM2dRZzY2R0k?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Nvidia's stock has started to come alive. Here's 3 reasons why it can continue - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNYjJCajA4aDNSSU9MaExrYy1EbERVZG53RVlOYXh3RmlqTzJBNjdzZ2gxMGU2UGxLMnI0RkllNHNXbHlkUThmamwxSmlmcmJGdXN5WDBpbF9QQUhkcDBfZmZrRWRGUFhYTnRKSzlDRzdQM2NZX3diSG9EdXYyTzd0aHk4Y1MxWlFOdFZPZTY0a09YSWloWlZNQV82SF9MLU5hMVhKYk9COHRuV3F3ZFdtUWxTZw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Ray Dalio Has Invested Over $900 Million In This Stock. Should You Buy? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPb01rVWZjUjdRRXZwVVM3VHdWUlkzQkVPQTlDR05MUlpQQUx5Tll5NnFabDZGMmNXbUl5TmdvSnhQQzNBTkhvaHR5eUhjWFdSWmVnZHV4TEZ6bEdINlgzTndIdFFYSnZQTlRaam90U1JiVkRMVXV4Z1VHbW14SEFhM3IyLVlTMlV1R09mZTBLUDBxcklGdU5V?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "SpaceX’s stock is rising, and that’s a good sign for Nvidia and Google - MarketWatch",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPUkNyenBWRzJNZ0hjR2p3MG9rVHl1a3VQZVBxZXlweGg0X1BFWHdMR3lqamtZcFRTSDFVQTNFOExyUXlxWjN2bHc3aTRaY0w3YmxMem1wRHZDNVk0eXk4ek9qbjJnQkdWRUllT3dvMTA5MHllazNsM2pocVBka1VKQVEzX3JPSmVJaDFPZk83cGtXRVdvM25RRFRQTmFJOTQ3ZUFtaE51cXE2M3BLZEtF?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Nvidia (NVDA) Stock Looks Near Fair Value After A Huge Run - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQOGlnYVNrVjFlalRWUFMxQjY5REFyUjlSQVBSZlotUTMyckFIWUJUT240UmNjSlJKSTVNbVRlcDhnUFQtMHp6dWRCenRSV2x6UzE1ZXpjUUtMLWNxQ1c2Rk01NnRwMGNLWUlQN0JfMGJiRVJXSzhLaU1VRW5hMVFaclRrZEpBb19DSGpEc1oyWVBoTllIMnVjcw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Nvidia just took a very serious step on SpaceX stock - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQVnhub3NIMjFKYVdHa0VIM0tnM1h2ZUZsRTVxcTBaQjB2ZkVlMnlsWFNBSFRLcnBOcERhTDdnYk92a0w1ZUs0cDdLZF9jdndSX2JoaGI4dkFVM3NUdWl4VENpM0p3LTA5NmFtaGhwNWxBOWdSeFoxa0w2NFVsbEdiTjJEdlI5Qm54eFdUemZ0X3Fzdnd3X2dTMDF4dw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Billionaires Battle on NVIDIA: David Tepper Bought More. Dan Loeb Sold Every Share. George Soros Bought Puts. - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxQc1R6UlNjcURJUmcza2x0ZDJKMmNYYlg3d01GMWZUdlppanBmaGYzTmRkVUx5R1ZFYjNuY0RyOE0ydWFnVVZNVklydDM3ZEstLUZ2X0Q3OExSbXE4Y0JGQjV2Y2s4UkpfaHhuNHJMaTVrcWhBd3otcE55UkJDSE5DUWJXdHVHVERQN1BpVGl0bXZmTDF3RElvcmR1Nktuel9uZ3VlTW9RUHFOVmNabnVEVEV4WTNKU2pNRVYyYmR5NWg2ekxDNVdsdEpFNHpNTkhRdUtHMHF1a0VfS3F5VGFtSE9Ecw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-15",
    "event": "NVDA Stock Alert: Nvidia CEO Jensen Huang Says Chips Are ‘Investable Asset Class’ - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOcmRTTzVGMlh3cmhKQlFNbUtRV3hSRUpoMzU5YUo0UUp2dzRaYndFckMycVRVYjhrOHlKV0RqNHRsSDU2Z3BkLWhXWjVtOFNrOGFEZHQxOFlxUFFTa3ltOGdYUGlBTTM4cFhXcGpOMnVYTTNFeDhLSVZ2Q0p1b09PcDZGaDdzVEtzWWN2bUg4cUNCVnV5V09YeG1MeFZVZnhnT2NGeklVZFNndzE0b1VJUkduczlXbEJWbFJhT2FZTQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "AI Money Moves Put These Five Stocks In Spotlight Last Week: NVDA, INTC, ORCL, AMD, SNDK - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxNd2pVcHZnd2ZRY2JnQldxNE5YdUNFSzNEUGdoVzI3S0ZhcWZ5UVp1elNzV3ZvTnMyb1BNbmRrU1FlejdPcldpRngtbS1LSWx5b3VITWlfZU83eGdsbGNLWlRZaV9rR29KbjFQRE1ENFRnS1Z0Rm5GT1pBTzZ1VjJyckhVejNRZHNaSWU3NTI4eGFpbWw4RDdhaktXU1JMNmc3VUt0enBwSmotRGEwU00wcUpLVUhVaTNkcmZFUjBtLXdiR0IwSTNVdUw5MXpJS2xWeEJZYmZ5SU1uYVE0R3pzQg?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "SpaceX Stock Is Everywhere: Google, Nvidia, AMD, Harvard Disclose Stakes - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNSkc3Q0JPQWd1U0JxbW1mWFRpZVVvTENyVF9PVTBIQ1h2ck1KYTRZek91YUlFUk9LRWY2LVpReFVPZmdjUUhIaU5tazJsRkpWemF3Z21yajNyX19JNnY3UXV3OVZGSWdTYUpORy11RFRPLVRlRGFhMEtzMkhWVTdDZE9PWnQ0Z2tDTGhNeXFsYjdYdGV3QXAybEZJYWltcGNwTGszSlVNak84Vkh1aHNrelIyR3FwVkwycU94dURaVmxZcWlkdmY5Rg?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Apple’s stock could rise 30% if it strikes an Nvidia deal for AI, this analyst says - MarketWatch",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOT212eHQ0T2o3eHd6UE9QRHRWeXRON0tKck5hZy11NGdTRlQxRnFmTTBvTG1rM28yRUVfMm5aaURSS3JTWlNld2NTdDg5SHdxNWZuZjBXSkRhRUF0ZFVsY3VWZjlzbUVvN1FXUjFYTjVsQ2thcGhTVW4xXzRxMS0xRHZkTUc5VVNnZW1udTJ3eGRUSEd5OTFEV1VpR293YkRiUjByZ00xNTgxamdCWmY3OUduTk82aDBuclVteXUxWWE?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Nvidia’s Huang Says OpenAI Data Center Could Generate $600 Billion in Revenue - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTFA3dW9JWUlCUkQtOUVFZW1zSFV2X1p3Vl9HRXpTWEdSLXgzVy1KZThoLVRqYkVkd0xEenZ4encwcExhWlJrSGY4bzZFbmkzY3JBamJ0RzZJYlZvOEFCTDUxREplUlNyc1BlMFVuUGhlcHAwSXlrREE?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Prediction: Nvidia Stock Will Fall After Aug. 26. Here Are 2 Reasons Why. - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPN3FPaUc1QTFndk00TmhRSHVUMERERDBxRm4xaFp5Y2tONmVWSXBnZXN1QXhVRjRLWWVSX0NhRDBkQVlLajNvc2o4U1pDRkRSOW9tVFRBcGhIbE4xU1BiaV9SWmRLYmZtYkZRV1FOSWRnOURTYUxwem12bEhDX2x3Z1NkWGEwLWZZOVVRbS1iNF9uWC1IODhSZA?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "NVIDIA Corporation $NVDA Stock Holdings Cut by Sarasin & Partners LLP - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPUkEyeTFHLVBJWm4zMXcxMDZZUXBXcmo1eFRsNUdjYjBjRmFnM2xrZU9POWVlMHpsWHNlWUJPRjBmZ2k4dDlQNW9hd3ZjWUpHUGFFQnFaVmN1UWppVTh0NU9uTWxKbGhES1ZXN05yUnZTLVVmVWxNcmRmZ0dlUmZmemM0RkU1WjRJLUlfZ294Tk5UdGxqZjdiaDZUMlBVWXB3N3NzWGo1aHo1eWFLME9zOXpXYXRjUTAzc2FoSm1mU2RQcDN5cnc?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "NVIDIA Stock Is Up 19% This Year. Its Biggest Overhang Just Got Smaller. - TIKR.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNUE1TSHZ1aFMzY3NfNkVmTjRaSnlmSGdWelR4UDE4cXNOYkVsRGJ1WFZadGdLMWFJQXhqUWNsbUl3dVdaSWF2VmFWeVdrdU43SVk3ZHJUaTJpcjhIVnM4dU81ZkRuVmVneU5pS2QyZEhwcHBmZ1R5bk90cFN0Nlk4eHI1OVRBelg4YjFQNVZTYjFTbDZMOWVXY2xZbw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Nvidia Is Becoming AI's Bank: Here's Why It Could Reshape NVDA Stock - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOUlBUenRSOXN6NXNaZUNTRFRZY2tfMENHUnBELVdxS1NtVGxrWllJZC1Rd3k5MV9PNkd3MG9veEtFa0FfZUFucnBjS1FIVkhUZXg2SE9zRlh3UlQ0b0p0a0h3QlRwN09hMUR2cUhjeHl3Y0U1TDlackxIVFNOZFhJZGZQT2JJNTdDMlJMbmVRTWp4T25lOHdJdEJBc3k4djhOTlY1eGVMeHBKbWxkOVpXQ1VnbjRGX0hFdExGNi1ZTFRDVlVaTGc?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-14",
    "event": "Nvidia discloses $21 billion stake in SpaceX at end of second quarter - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOczZFNXoxeDBQS1Y4T3ZvdW96QzNlUlBGOWZ3WEtqbDZXaTc5MTZESDJyRTNha1F3WWhwdHNfYXd5RDhqR2psbjFYRWZsR2tJNmVBc1J6THl2cWt0TFduRHRySG5YR250N1hQUkdKLUNHd1hZM2wxbkNRWlJWZ25UVHpFa0Q5bmUteGJ4bjh6c1IyY1lHZlBwMUMzLW5YS09sQ21oN1F3aGTSAa4BQVVfeXFMT2ZZMHJZWGxvZ1FCZTQ4SVFmUVJqck5xTGdLNzNOYjRSYjRIU1V1OHNvM2lqQnpKQWYzWGVIbGpsNTFpWE1mTHcyNmZfWDBHUnVhMm11NzBjbGF3Wk1WZ0FnVjhmVjBOZXk3a09aZ1R4eFJqUHhwUmY2VXg5ckdzOGR4YTF6X1BLY1hSd2hsbWd1NnJfZ093cXY0MkpMeFEzbUFFRXByVlRzNnpzM3dB?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Nvidia, Alphabet, Peter Thiel: SpaceX Top Shareholders Disclosed - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNRGM3NGpBRTYyMkpyLU1pb0E2c0FlNTRRa1lPd1dNN1h5Z1ByQl84dFdtLTlvOEhoek5aRnRyUmprRFRPci1SWW9WVmI1WHNhZHNMRmt2MGVCWnlaVUFPTTBWRENUbVJqQW5lMENrN2ZZcUx4YnBkWExlZlB0SmFIbzZwcU5pOGw5N2JJeXN3TWNBV0E?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "History Says This Is What Will Happen to Nvidia Stock After Aug. 26 - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQancwSk9BTlYzdTQyM2s0TV9wdmtBcTZFanl5R21YQVhMeUY4RGFHejNnSEc3LXE4MzVuTXJzS0FuU0g4eWtrb3k4bkFvNDNYSVlUQ0dwaE9qdmxGZVZ3elY3dUFHVC1zR2UxSl9HenpmOFVLN3ZCeG9UTmtzMnVLZGs3ZzNsUmduVnNHa1NtQmNNN013U19YNlU2NXhpQQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Nvidia, ASML Lead Five Stocks Near Buy Points With Roaring Growth - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQN2tSZzVYT0d5cEJ3TEZGcW1VSm43NGxOSnBtVTlhOVliaDhKSzRoRzBuckY1RGN0YmowUHpFUUoxOGp4ZTNFYUpZcXNiOEctVGNHMm82UzQtMmhYdXlmVG15azhySmtGQVpHelpBVktlaUJ5NjBmQUY5WDRFT2MyOU1xLWg4SnNiWDA2Wi0tQUV6RmNnd3o4?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-15",
    "event": "Prediction: Nvidia Stock Will Hit $300 Before 2026 Is Over - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQWF9nOWJ2cllXT0NWUkJ0ZUtmeHh5Mk5ldjM2Y1F4bTJ6Vm0zVHlWSUx5bXRkbFR4U2R2dVZpWGo4M25Kdm1WRnBWaU1LZVFyLXZ4YjlncmFnSFVTcm5PWjRjOW9hcmxKTHN4RDg3WUxfQmYzbHJRc0U1NzE4a0txUE54SlhtT3FsS3hFcnZmSkFvclBjNWxaVldTWjM?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Nvidia Reportedly Infuses Cash Into Potential AI Infrastructure IPO. Here's Why - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOdmJ3Q0ZlZl9OUV84TXVEbFN0UVhzaGJyOHNyeXRlUS1XbGFQUldIcVFXMkpBSm1SeFRIaWVlZzRldkEwN0huOHhNLTFhOUdKSXhzc0dlWEhMTy1jWHRhb2Vqd1RoVUNNN1VDMV9MQUpBZEV3eUVtNmVLVzJQOTByTUo3SDVSTXhNMnJNN2ZQcFVXLVU?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-14",
    "event": "Nvidia earnings preview: What’s next for Nvidia stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQU2FTeUdJNFFOUWFvLTllX3M4aGlfTjByUktJOFVCYlltUHZKcm5nNTBmQnhGd0Z0RDl6UlNkR2hJTl9fR3hkQTJ5aFZraWVhSHpVLXlEWVdHMVFnTXgtbDdaNlAxTWJFbFV2S2tXWGRXcnFlSHZyMXJiV3hLWk5DbGJKZk9PZm1VQmc?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "The Goldman Sachs Group (GS)’s CEO Says He Has “a Deep Belief” in NVIDIA Corporation (NVDA). Reuters Compares the Deal to Auto Loans - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQVnZpOUZPTWJLY3RVV3RqalEzYzdxakRlVXlUbFAzYnBqZUMwYXJMekIwVi1QYUF5WndQTnE4NmdGR1hUZU42cTNlVTYxOEFjcXZMdERHc1BFVU1HcHZGclNjV2VyQ1BPOUx4NFlwRkNJR1F0T0g1VEVaS1ptSk9LTGxGNWpNRFdQZGozYTg3OWpUX05Rcnc?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Jensen Huang Doubled Nvidia's Own Sales Forecast to $1 Trillion Through 2027. Here's What That Guidance Means for the Stock's Valuation. - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQd0hzUEo4WE1sQTZnMWRDM3R3dHRSWWpzRXMwMXJES19RT1pRSTFORDZUMndBcmRocXd3ZkhjbjRyU19sQVNmSzd0N2hPMl9palVZMXE2d21aWUZxRjBHRVlaamRIcVN2bGVrZnZfZzJRcHlSanZRaXc5SnZDM09weC1BVGM0a1NNaTRxUi1sc2xiaURFSFh2ejJneXBvUQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "TSLA Stock In Focus As Tesla Reportedly Preps Cybercab Public Launch In Austin This Month",
    "type": "NEWS",
    "remark": "News via Stocktwits — Tesla’s regulatory status for commercial Cybercab service, however, is unclear....",
    "url": "https://stocktwits.com/news-articles/markets/equity/tsla-stock-in-focus-as-tesla-reportedly-preps-cybercab-public-launch-in-austin-this-month/cZYGLCSRJST"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "SpaceX Matters More for Telsa Stock Than Cybercab These Days",
    "type": "NEWS",
    "remark": "News via Barrons.com — Shares of Tesla are becoming closely linked with shares of SpaceX. One reason is the growing belief on Wall Street the c...",
    "url": "https://www.barrons.com/articles/tesla-stock-price-today-spacex-a37b62ef?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Tesla prepares for Cybercab launch in August starting with rides to employees, the Information reports",
    "type": "NEWS",
    "remark": "News via Reuters — Tesla has told employees it is gearing up for a public launch ‌of Cybercab, starting with a rollout in ‌Austin, Texas, a...",
    "url": "https://finance.yahoo.com/technology/articles/tesla-prepares-cybercab-launch-august-205824739.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "BYD Keeps Global EV Lead as Tesla Sales Rebound",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Tesla grew faster, but BYD still sold more EVs....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/byd-keeps-global-ev-lead-203216285.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Tesla to launch Cybercab in Austin this month - report",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- Tesla Inc. has informed staff it is preparing for a public launch of the Cybercab, its first vehicle bu...",
    "url": "https://autos.yahoo.com/ev-and-future-tech/articles/tesla-launch-cybercab-austin-month-201352516.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Nvidia, Alphabet, Peter Thiel: SpaceX Top Shareholders Disclosed",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — A series filings disclose the massive stakes tech giants Nvidia and Alphabet and mega investors Peter Thiel have in Spac...",
    "url": "https://www.investors.com/news/spacex-stock-elon-musk-nvidia-alphabet-google-peter-thiel/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Top Tesla investor says gold beats Bitcoin but he isn't selling like Saylor",
    "type": "NEWS",
    "remark": "News via TheStreet — Ross Gerber is asking questions about Bitcoin that most holders would rather not answer right now, and doing it while ma...",
    "url": "https://www.thestreet.com/crypto/markets/top-tesla-investor-says-gold-beats-bitcoin-but-he-isnt-selling-like-saylor"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Stellantis Recalls Almost 1 Million Cars; Stock Falls To All-Time Low",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Stellantis stock tumbled to a new low on Monday after it announced a recall of almost 1 million vehicles worldwide.  The...",
    "url": "https://www.investors.com/news/stellantis-recall-dodge-jeep-chrysler-ford-general-motors/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Alphabet’s Waymo Leads on Safety, but Tesla Could Still Close the Robotaxi Gap",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/alphabet-waymo-leads-safety-tesla-174328905.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Rivian Closes the Self-Driving Gap With Tesla",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/rivian-closes-self-driving-gap-162217297.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "America’s Best Dividend Stock Has A Good Year",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/17/americas-best-dividend-stock-has-a-good-year/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Elon Musk Is $142 Billion Short Of A $1 Trillion Net Worth",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/17/elon-musk-is-142-billion-short-of-a-1-trillion-net-worth/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "FOXF or TSLA: Which Is the Better Value Stock Right Now? - Yahoo Finance Singapore",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNT2Nsd3o2STV3SFZfYzhjbHdVZi1rVkRIaTdkekg3YmlEdnJfdHM5ZVpscnllb1VUaFp6ejViU3FWOFFCSHlMVnM4bFFscTZtSjh5b2JkaTBZWUUzakp3RjFwaV9UdzlwNHd3N2tRWUNNMHZPeWZaSHJBeGk4YjhITXpXaw?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Tesla Is Finally Getting Ready to Demo a Flying Roadster. It May Not Stop the Sell-Off in TSLA Stock. - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQVkZ3VXp4dTR4V0pZNGRfa1F1ajliRUFVMWZxeWd4c2VHdnpfc1NXLTlla0o3ZzVoYTMteDE2SjZOdjZuRlhQOWVaOVZ5aDNWUHU2TUFvYzJwOTRwZzhPSDhDTTF6X2hWUXlOZTNsRkhFbkhBSzhERDBxNldOZWR3ckRFR0V4Z21EU3hiTWRqeEh0WWE4eVJLYzVRTXVDZGpRRWpBNENhcFZxb3Q1WlktdmJvV3BiQVhLa2lWZ0gtRVQwQzIyOVVacVI1cWktemZnekdYNks3YTczWWs?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "TSLA Archives - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQaWcwWkE1elVnZHFyUjFnX3dVNFltZklMRVZlTVdVMUtUQURoYTVDTmg4dnNaNUZ3eFBaaFNuYktEeC1oUU14cElVTzVvbldGVEVIUjdUR3o2eDZZZm00d3RCNzN6Wlg2TUVfa0I5bGVvNkFhVlEyQXQ0MFNkazc2U2ZRelRLV1JWNXJveG1kSnBmMVJjelYtR1NjSEVHNUVCU3c?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-13",
    "event": "Tesla Stock (TSLA) Opinions on Potential SpaceX Merger and Cybercab Rollout - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNQ1ZySC13WTFEcktqTEhhUVNqMXl3aldYUnNJMzl6OUh4aXV2V3hjaUgyYXB4MzVVSmNReFpYdFZrczlWRWpWQ2xvTnpuTmd0ay1wZkV1MlpPUk5heTE0bWZmUWVuMHN1MGxpVFdaeHBwMDBFaVJ1Y2NvSVVCaEhrMVRnZWFzQTZ6VVFnQzRyc1N2dzRSR29oWEZQWUpjSFAxcElzUlhNVGo1blYtdHYxU21n?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "TSLA Stock Rallies As Q1 Earnings Drive Past Wall Street Estimates On Higher Deliveries, Lower Costs - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQUmRMRWptOGRndnljdlFZaHJWQVlOZmNvVzl5OFo1cVRzbnp5eXVHeTg0RFZDaFotbi0xYmo4ZHBjQkMxdGpLSVZoNW1xemtJNGlvbzVqR01URTlZcDhRaEdFa0E1ZjhKSkVocS1naFo0cEVWMEwzM3FHb2FXMjAwYldyUGFzSVAtcTEyVVd4akZOVklHWkszVTRTM3BqMXJPS0FTNlV4eVdiQTZoNWZiWVM0OGpxSE1KWUxGckxOUUFrZGVHMTZ3ZQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Tesla Stock Price Prediction: SpaceX Thruster-Equipped Roadster May Debut This Month, Could It Boost TSLA Stock? - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOUE9fX3lUU0M0bFpvcVpxTG9CSV9YYjBZbm94UnlsYnYzbDhCOWo4R2xfNmFQSFVKTmJZSVZSS0pxSFlkcWpMSUtYd1pycnZzT1I4OVVPVWV3NklJalNEZ3JjTEpKQXdZNXdoUzJGbDZtVWRpbzVVcE9XTHp6cHRiSWlJbUtDR0xtREU5YkZOVFlDcG0zYldKc296ek9XSnhkSENWVHZjS1otUHp4YVJSSlByY1dBbVlwRmFET1JR?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-14",
    "event": "What's Going On With Tesla Stock Today? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNenFfdHhUWmJHLTFVS3JDZTJjbGFfOFFHRTVhSDlNVWZqdXFPc0toMkQyT3c0UV9IbENTNXdrUEdZOTItNENpeWxWNllWNWNIekhjdDhxTncyb3hoa0VpT0V1aU80MUtkbzdLTG5CZ1ZkRlMwTlBXLWVkX3pVS296bGctMjktTUFGSHVWbkpXTENacGVzOGRYR1NUbzJLUUs1OHNv?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Tesla (TSLA) Advances After Beating Key Metrics in Q1 - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQVzlLZm5yNzBCUHpkNThfOGp4OWg2M1RvQlV5aHo5UVY5QWRjdVA1YW4tem1nZkRuczV0UlgyZ1VzODd4QVRMcWhtYk5OZC1aWlNQaXVEZnVReUF4TlZZc1pLNXo5NTM5Tjd6emYtREZwSnNRak9MRkZZdVl5RmR4TFVMZGNyaWpHcTdzUDhKZWtjb0FIVlZRRUNSeEk?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "Tesla Wins Over Another Skeptic: JPMorgan Raises TSLA Stock Price Target By More Than 200% - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQWTBIMUV2YlFCMlkzSWQwa3JIa3YybnprSnVIUC1YekQxT2dLOHVVWFFxUmlMc0l6ZmNxTWFBR0ViOVBaaEg1LXZ3R29DOGE3WnBpRlNjeFVsbHU5Qlk2dVJxQ1NlWjVkbVQ5bzRfWFpfZ2JnNjE2cko2N0c2U2ZCRl9WeDE3ZFRrWnVFUWFmTmZfUDhrSFhWTk16UzF3MTc3dnVXT29qM0VBak4yNUVZLTl1T2thTy1CTGE0dg?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-11",
    "event": "Tesla Stock Surged 40% From Here Last Year. Here's How to Play TSLA Stock in 2026. - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNSVZPbHBhWFZjNFZvWmJYVHJSSGRlY2lVYjhLVFBNZ19uSXlQOFdId0E1cW1sTjRCclZhdlZMbDlyd21VQXM4REVOYzBId040QXNPYXRpbldvUDJHcVhKeEsxVFYtM0xvQmd6bHFlTW5NR2dMLVdRVmY2QS1nLW5nOWN3X3pDSzNzSVlnZlYyYklPVVlRTVkybXQtazEyQzFmT0xIZ0FoTEJjTDZyXzJIOUVFTFdGNzhJYTIyLWlQazQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Tesla (TSLA) Stock Looks Rich On Sales But Strong On 5 Year Returns - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNRkFvc1ZzWDFncVBqZmVWYkp3VmcxWDdCN1dyaDBpUDh4VFZZcHF2WkhZQ25QM3l6OFk1MktfWjNiMFIzMFM5amNNSzlpRXVYd3I3Q3piY2RsblhpVGEza1BBNjZuQUFKWlpFYUlnM19ROU15bXFwWGlySFJGTFNHZm5LZzJfZ0tWQzAxdG1zbmFieFctSXpV?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "TSLA Stock Slips — Investors Await Tesla’s Q2 Earnings And Semi Progress - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPbGZqanRpSnF5MFVCM0hxdHNRZks2ekt2V2pMYzNyd1JuZ1FqOExOcHIxTEExRmNGRmZMRUozMXJxZG9heFZ0WFZFZmpNVXY4a2w0NFZDajNZYTF2OWZFVUV4RDJMNW9XNlRGQ0xySVNKYzljc2J5R3lzTkZncnRma0czeWV4X200a0hiSDE0M2ZMb1FxM2lCUk41VC1UQi1nRFo3MGhiWDJoUFJOY2FMVU5kMzQ5RkoydVVIMFFWazdoLUJlRWd3eGRybjVaeFE?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "TSLA Stock Rebounds Premarket After Q2 Rout — Cathie Wood Bought The Dip, Retail Influencer Sees SpaceX Merger Reveal In 3 Weeks - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOVmdySk5UT2ZvbDBKZ3VkcldESmc2alUyMkJNVzlJVHRyeHFTUmZDODh5WUNobFlFZTUyOGlhOTNvem1KVndJbHYwcjRHTmNXYXBBR1dRZ3R6Uk1ZeFZ3enFVRXRSbGJSNGVHLU1tUkREc043ZEhVNnhFZVJsZ2lTb1h0d1JreVdLZXVzT2hNeE1XQk4zNHhMWTBnUkVqYW1uOGY0azFzdjBkX2txVWxoWVlmdC1tTTlyLV80?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-07-28",
    "event": "TSLA Stock Slips Premarket: Morningstar Calls Tesla ‘Very Attractive’ After Earnings Rout — ‘Now’s A Good Time’ To Buy - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQenJJUjd4dmxxSTNnLS0wLW9ZYTVnSFppQ3VGaDc0dUhOMURNT0FCQ3JISjZUeDJJSEFXR1VtWTZsc08tZ29HMWYwVEdLcnlrOExVRW9TcjEyN2NVNk5NUkFqbm1tZHdaUnhEdzVpVWc0a2loTk9zampFVTgwN1RNSWVmeHg2cmVSa2NHRktVN0JKUnd2TzZQREhLNUE2VkZqLVVSVWFn?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "TSLA Stock Jumps After Strong China EV Sales In April Bucks Q1’s Global Downturn Trend - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxOcl9MaktMQ0xHb2MzMUh1RERkODNaaHI0UVRscVE0dmJ2Q0lHay1raHhDM29fNmtkekRlU1doekhJM0NLakdNMmV3dkZaanlGN193QnQyZlNEbGJXUHFrQUdlOEhHdVFxdVRQa1h2c09sNDdENGM0Y1dmT282TW1RX3NDOWNjT0JBbzJ1aVVzbWVIUmtxZGhuMUMwMlhxaUZ3bWRnY05qRE5PbnBRdk10NkVTQ01OczJ5a3RpcDM3MmhsSnRZMVlyNHE0YThXWXFWc2p0M25Dc1NhZ3hSRlVEVzRR?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-07-23",
    "event": "Tesla (TSLA) Stock Trades Down, Here Is Why - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOeWt5MHJkQzZnN08yV20ydjk4RWpfMUdMb1dkeVRVV3lPMG51amR1WjFzS050b0ZuMkVuZThUODcwcXpMVFkzNVJpOURlc21HZkM0STBSMzVwcmRaakJrUDFGdl8yWUlJVEQtNjhqaXpzZzFuYmRILVBDLV9HSzlVRUVxbE15UEMzX2tIeGRoWW1FNEZNaDg4Yw?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "TSLA Stock Slips As Musk’s China Visit Yields No Deals; EV Firm Dismisses Model Y Price Hike Rumors - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOLTJkd2s2am5VbWhscERBMldGT3V1eFdVX0ZOQ25xeldGdGl4MmRRQm4yU09ncXkzbTIzQUdxdF9ZcExPcEJHZGN3a3lXNDUzUktuSkU0WExhQTRYTXk1amZlQVp3X09HcnVXLVZ6eThTN09acFhPRFFLNnIxbGFnZEh0VFNGRlFsUDdfWlY3TXlSb1Npa183WmxEeUs5WHNXb2JkVWRiZ1NmZnVaalJmNTFJRE5qRkIybXEwcEVOOFRSZENZME9LTUNQcG1lSWNVeXNRMGFEVU0za2JqUy1SdlVsWWZmakhYVHoteWxBQ1ZkZw?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "TSLA Stock Slips Overnight: Gene Munster Sees Over 50% Odds Of Tesla-SpaceX AI Powerhouse Merger - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOX28zRXpOMmNUM2ttUXc2NzVKa0U2US1BOTAzMEpydDFtQUFRdk9EekJ5SFJmZnExdE5oYXBkRlM5ZEswNDZIeVJQemNHVkcwN25FUV85YUp2UklwRjFxOHpGSHl1LTVQNmdHLS1JM3oyOHZmcHpFME52MjVlMVhRSmtiOVpwU2pvV0lPOW4tblBSMHRWTkRCdjh0ZUhYSkRCRmJyVkZJR1pFMXpjWTJQSEFB?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-14",
    "event": "TSLA Stock Rises As Swedish Union Ends Nearly 3-Year Strike After Tesla Buyouts - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQcW9OcDhBYUtfRllZbjlteFkxM3pqdkx1NzFpNXE2aGppaThESU1Xcldjbl9aWlhvZm5iQVhwYS1aNzB5SnhDb0NBRkV1S2x4eEFSUEZCWERVaFBuY25yX1QzTklGMTNidlE3b2JKZ1JYT2Rocmd2OGJpTldqbWJWeHFRWjZaNDgyWlBkeEI2djVlUGhmZTFjcGNKeEU2ZlhhUV9XZmlTLUxERVU5UktLMU84bUlzSTNZVnRwZ0lrZENzX2FpRHdWczhWRFRXNnc0V2dPVnBjLXhJNGc?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "S&P500, Dow, Nasdaq End Lower As Geopolitics And Oil Price Risk Take Center Stage — TSLA, PSKY, MSTR, BABA, NVDA In Focus - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPazd6ZnJWeFo1MzVDa0VrWUlicXBETEFBOW5kZkFhb1RGY2dXT0Fvbm81NWtXYUtIN0hpTm8xUTNFMVZaNnMzeVFXN2RWWWZPajlxWG5xQlZrNU1TeW1hY252dDFhOWlSNXhiMWRRYmdIQl85akVwTnZ4ZkhpeU9yVm9pMi00MmpUVktWcXJOd211S0ZBNlBFSDhFblZMSUZFU2hRT2VJcHJDWWZESVl2RVNCWWNzZTVsTXR1U2d1OXh2VkhSdkE?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "TSLA Stock Climbs Premarket: Chamath Says Tesla Is Going ‘All In On Nuclear’ As $10B Texas Solar Plan Emerges - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPVlM2VXh4c25yTmFOcE5vWEhaWERZU001aGNheEY4WnhtTlFxVmVkZzYyZ2ZianU0RVNzNU5FdURGTVlmNnlINi1sREFSTnlkck5xTGEzcnlaR0lCcnh4QnZzeElrR19ZQTdwXzVvWTQzQTZjREtqSUdmekNMLTJuMnl1Ymd5NU81dU9Xdi1kd0tSa1k0NUxMcElYaWJVQjMxNHZNWVpSRXlUOTFLTHlQSlBn?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-07-29",
    "event": "Tesla (TSLA) Stock Still Trades At A Premium On Sales Despite Weaker Earnings - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOWVZLQUxTZFg0RUhRN2NDN3o3N3lRSzF1VzNuYkx4TlpHVEVtblVlLW1kY3BSWE9jX1FSdnhDcXMwSEtHSkRDcGRfNTVrdWdDbnZscGwwYk1OTGtYOU5VMDRUOTNzYjlZdmZmY2hMUnhqN012aWUwWE5GVGFMRW1UWjVGc2JUaFhVZlg4eUZ2Rkw0bVdmUnp5U1FB?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-13",
    "event": "Tesla Inc (TSLA) Stock Up 3.8% but GF Value Says Overvalued -- G - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQbGt5ZVlySXc3ZDJvN3NReXRJNUtTY3NHTGdHYWRKTFRSY1NpNFNsZXZCa2cxMW5vRGtDMEQ5dWw3NDB4ZkJaTVg1RGtKbjQtbXFod09fTk1rZjZXZlZCQWlMU2YzeGNGS01WWGJZZTEzOVc4Sk43NEszMlR3eXkxaVN5VTNySUVmVGszcFB3RFpVUXE2cktRai0wczFLLXVnWkswVFNFMXZhQUdLTGc?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "Tesla (TSLA), What Is Behind The Fresh Attention? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNbE45Qm1QQmlMdkRoZTJTb3U4UjhjX0ZScEpMd2VodjJCNlNVcWdxM0xuUGlPVGwyOExXdTBUSFVKQ3dlZmc0ekU1MmZ3a2I5R0w3S205anh4QXJ5djl2a1RHWnpuOXNoOXItdzJGZmdhd1hBblRSYll1SUktV1FPVmJFLU16UHZjM00teVRlSGxTXzhsQXFzY3lfem85RDJ0OHFkZVhLamNiZU1DQUZkS09B0gG3AUFVX3lxTE0zdXBEMXY2QnFMWVZDQXd3RUZpNkFyR1BNTV9SU1hFbXcwZFlVT3Y5QlhnOEY4alNkLV9vNnZ4M3VvcW9pa2RwLXBjT2F4azNSZzRpUVhFUEx1bE84Ui02cW9hTURxX3ZBUXhoc0NLa2kwbDRtWnBqeE41WlE1UzNWWW9aZ0VzU0o4N2E3MVpfSVk5dVBDSkRjQUJxdFhCWXp3QVJWMjNodUNwV3d5ZFJiZ05HM3BzTQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-07-21",
    "event": "TSLA Stock Badly Needs a Pump From Elon Musk. Buy Shares Now to Bet on Post-Earnings Hype. - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxOR0Y0TTl0QTZQbk5PZGk0MEY2QTFObm9rcDZyZkRzYUFhZjZfd1hSakU3TG01MDBwcmZjOWtrLTRoZVljZ1lHMjBFQ0VRemozN2lWV25wWjl6V2xWUUZmeUxiV09ZcFRJb2w5YVNfeGdSWE42SG5XVDBheF9rWDJ5WENZSm5nY0dZTFRRVFFsZHdsdlM5TExN?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "Boeing Falls After Army Apache Crash, but Commerical Jet Turnaround Is Crucial",
    "type": "NEWS",
    "remark": "News via Barrons.com — The U.S. military has grounded its Apache helicopters after two soldiers were killed near Fort Hood, Texas. But the airc...",
    "url": "https://www.barrons.com/articles/boeing-stock-army-grounds-apache-helicopters-25211417?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "Tomahawk Missile Production Is Surging—and These Stocks Could Benefit",
    "type": "NEWS",
    "remark": "News via Barrons.com — RTX won a $22.9 billion Navy contract aimed at dramatically increasing Tomahawk missile production. L3Harris, General Dy...",
    "url": "https://www.barrons.com/articles/rtx-stock-tomahawk-missile-production-defense-stocks-5afeb7d2?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "RTX, Pentagon Sign $23 Billion Tomahawk Missile Contract",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — The Department of Defense has been pushing contractors to ramp up production of critical munitions. RTX stock rose about...",
    "url": "https://www.investors.com/news/rtx-pentagon-department-of-defense-tomahawk-boeing-lockheed-marting/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "1 Industrials Stock for Long-Term Investors and 2 We Ignore",
    "type": "NEWS",
    "remark": "News via StockStory — Whether you see them or not, industrials businesses play a crucial part in our daily activities. Still, their generally ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/1-industrials-stock-long-term-183820593.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "United Launch Alliance names new CEO amid Vulcan rocket travails",
    "type": "NEWS",
    "remark": "News via Orlando Sentinel — Longtime United Launch Alliance President and CEO Tory Bruno jumped ship right before Christmas last year, moving on to ...",
    "url": "https://www.orlandosentinel.com/2026/08/17/united-launch-alliance-names-new-ceo-amid-vulcan-rocket-travails/"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "3 Reasons We Love FTAI Aviation (FTAI)",
    "type": "NEWS",
    "remark": "News via StockStory — What a brutal six months it’s been for FTAI Aviation. The stock has dropped 24.5% and now trades at $215.84, rattling ma...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/3-reasons-love-ftai-aviation-170220021.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "Korean Air installing automated cargo equipment at Incheon, JFK terminals",
    "type": "NEWS",
    "remark": "News via FreightWaves — Korean Air is making large capital expenditures in container handling automation and refrigerated store rooms at two key...",
    "url": "https://finance.yahoo.com/technology/articles/korean-air-installing-automated-cargo-164623802.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "Is Airbus Strengthening Its Position in Military Helicopters?",
    "type": "NEWS",
    "remark": "News via Zacks — EADSY is expanding its military helicopter foothold as Lakota demand, fleet modernization and new U.S. Army contracts su...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/airbus-strengthening-position-military-helicopters-145300769.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "China’s Aerospace Industry Gains Altitude Slowly After Taking Flight",
    "type": "NEWS",
    "remark": "News via The Daily Upside — A C919 aircraft built by the state-backed COMAC completed an international commercial flight for the first time last wee...",
    "url": "https://www.thedailyupside.com/industries/industrials/chinas-domestic-aerospace-industry-is-slowly-taking-flight/"
  },
  {
    "stock": "BA",
    "date": "2026-08-15",
    "event": "Archer Aviation Has $6.9 Million of Revenue. It's Buying a Boeing Business With More Than $200 Million.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/15/archer-aviation-has-69-million-of-revenue-its-buyi/?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-16",
    "event": "2 Dow Jones Stocks to Target This Week and 1 We Avoid",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/2-dow-jones-stocks-target-144500619.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "Boeing Stock Commands a Massive Premium: Is It Truly Earned? - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOblFuMEVDVWFFRlVzblVscFgzX2dad0tnbEdNVEcxUnVLZEQxaDhuQUI3dFpKM1F1VW9PUFNLZC1sc2YwZjdlaDJ6akw0eTF0QVF6M1RuSFg2WFQ5VnRYRy1uQThkcF9WM2d2UmVHZ1lJYy1jclpSTEVpT1lJc2lGbjBfMUh0ZVNhcTFfbFVTaV9UNmx4aVAzNXBFbGwtaVY4b2xGTzA2ZGNaamdBd1EtZkJncmVLOWUt?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-07-24",
    "event": "Boeing (BA) Stock May Be Fully Priced Following Its 12% Slide - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQZUpnM2d4Zy1Ob2RSN044SkxBTW1YRXBOa2puSlhOaC1DSTJRQndVelZXcDF3SHM4NVpYd2pTUFlJMEJOa0JvQWRTcmd2Y055T3FpZVd5eXNjcEJoZDFHa09wTTZ6bDc3V3h6SDZQSjU5VnJ4R3VfR1d3N3MybFp3eWk2UmR4OVFCMzNhcGtCcUxtLTNK?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-15",
    "event": "BA Stock: Boeing Secures $2B Satellite Contract From Department Of War - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQTmU5NjJRNUFRN1dOY0RBX05XcFFKVnY2SFhVZFVBWmNJbmg0aVlrSUU5bDZjZFRrZXV2RmYtM3NmVnFNUU9oMFRXMEgyaXFxUFR3aTlPWU0wRmViSDhLeUJDS1prN0FkOE90Z25LVmhVTDhNbmVNS1lMQm5LSmpKcGhBVnliN25xbE43RENDY0pqc19uNUNlX3JMR2YxaU9nSGhvc2VxNEhnc2FYdEluMi1JYjdpUGxRMnpTbm13UW5yV2JSQUhoRnpCN2ZwemM?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "AMG National Trust Bank Buys Shares of 16,271 The Boeing Company $BA - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNOHFRVldMZ1lmOW1vV2VaemN2VzRHdHdBMkE0M2oxeEtrOWRNbFU0LV85ejZUT2x2NXlvVWFhT2dXTEV2VE1xTFI2YlpkOTJtNnpJLU5Jdl80ck56eVJfQmJQZzFVY0FiUE5RSXNNdUhvUUtiWlFOSHVyc241ZzUxaDFRN3NYNWhEV3pUaURQX2tYallKd2dOUGZKVWtITnpuZVhqTUFkUkZsS0tCN2gyenRzRE9KOVdHUGlkb2ZsSGpheF9XWkE?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-03",
    "event": "Boeing Stock Lifts Dow After Double Upgrade, FAA Certification - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTE1wWFQ3eVNUb2Z5c3NOV0F0T0JmUEkxYTZjMHUwV2xWdEtsTWlmX2JLMnB3RjlNTnFCSGpXbHB0U3Y3YV96MWdqcXdZTXRFZHA2WDFKN1M4UmUxNDB1M0VJX2Z0bzhNSEFkbmNEMnZfQQ?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-13",
    "event": "Boeing Stock Rises After Argus Upgrade Highlights Production Ramp and Positive Cash Flow Outlook - TIKR.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPR0NLOG9fd3lZbHhMN3MwdE1aTjJxelRQNkw4b3Q0RkZWRjRmaTctY3VHMGsxdC1Dek0ycEJUdUZEVDlNeXJKUWEwNlpocVdDQnNsNTJ0UzdnZGUxQUZLQzhKdjVNck9DR1cwWXBmbV9jNGJsamNfRVhmZjZEVWdqa1RVME9sUHZlaHU1T1l0bUM?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "Fund Update: New $25.3M $BA stock position opened by Varma Mutual Pension Insurance Co - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQWGxsSjJVZzVBeFpZTm5CLVZVczY0RnpwSF96b0xfOGw2ODJtNUtWRWJLc0NlVTRSV2hveGlGSWVRVUFLcGhmbDhURFJadVRjS00xR3RPSWZTUkt4M1NDYmZRaDlNQlNDZ0Z3MEp2NU1QTFBPczlpemlvRHg1WEVHU0dRSUNRUUFUelQ2U19DaExUNkNyUDVJTlAyN2NMVXc5N2c1eXRTakdvbWp1dGFuVzJ3VjZ6bDV6ZzlrZ2VnM0d1MHc?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "What's Going On With Boeing Stock Wednesday? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQUW5OeXRneTJpNkdyNWlQdHpJWVZhT0NIa25lOVVlNlV5Zk85V29yLUFPT2V6bUJZWGM0ZU4yTGpCUVdkdWhXeE1nVnZTTGZFYzBsOHFUT3h4UWtiVVJPNVNLd00tUU00TEExT3hPcGJEVkxZN3JyRTFxQVI5b3NQZWhMSFlqZEFRWVVkX3JBOFhGT2dMbzF3NU5Bbjd5aUZwQjZONA?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-14",
    "event": "BAE Systems (LSE:BA.) Stock May Trade At A 9% Discount Despite THREADS Progress - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNbTBNQWs0SFRDcm9Ub2xDSS1aX2VIeHVLbmQzQWkycW1CQVNOeG9YWk9fa1hJdkdpM0NFV0hxQ045VzdCR1NvTzRGd09Na1NnOUt1aTVfNkVlNzc3YlpoU2E4QjBXMFdHY3VoVm9KMHNOb09NRDRGdmNjQmlsVENOYXFlM1N5bkRuN1FzNlRqUEE2bWs?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-14",
    "event": "Boeing Shares (BA) Dip 0.4% With Ryanair Engine News Highlighting a $2 Billion Shortfall - TechStock²",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNemhrczJWN2owRUlpVmhqT2ZISTFJVGhjaE9scEQxV3FMczNOazQ3OWhvb1c0U2J5ZWc1QVAtYnFtZDdZVF9wRVVLX3NZd0pZRTVnNk9SYjRNOEtkWjgxZFQtQ0NxTlNKeUpxdU80QnpYOEVkNDVMeGpGZVMzalFyVUdjRDl0VlJ2eTVSODJtU2JqM2dyLUMyRVZTancydXFsbWtN?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-14",
    "event": "BA Stock Gains Overnight: Boeing Reportedly Challenges Airbus Loan Deal As Aircraft Rivalry Rekindles - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi9wFBVV95cUxPX3B2MDNSb1NFeWw5b3U1bFhXZXZLamYwU09JVUN4eXVoT2NqcDMzX2lQTS1BTF96X29ibFZBMy05YnJJUXhPLUNtcjU3d0xLQlE0T1lqZHFRLWdUYTBEQVdtaVhydks0RHp4Qnd1VEhPeFRxaUM0LUpnUk5BTktodVpxRjVCLWVqbE9rbnVaUXlYRGY2bmhHTGRXdmNTZUh3TFMxVk42REViSExRdHJjS0pzT2FVa3dYak1uSGNpNld6UkxfSExvMjcxeGM0VzNVd1hEdk5xUF9aaHRGOUJtRjZqX090MTVBT1RaTFVpQ0ZlcUJ0ZmNF?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-15",
    "event": "How Does Boeing Stock Stack Up Against Its Peers? - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQREt1U3AxOFgyb3FldjRTQlczRlpmbF9PWUZESVZoM1VCSFlKLW84RWZ5Mno3eGtvWEhYd2pJN2IxbnNjR1JtSHppRG96SlBaLUpadllYVWt5OHFGX3lWWEZzZEZSb0ZnYUV0ZnVESzd3V1BTUGxDTG0zYXpfZUZLQS02NzBiTjE4Q1ppWjhSXzc1VW5XaDRQeGVRTGRrdUxpRzh3RHRmdzNOZkJ5eEE1OHllVy03T2Ni?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "Here's What the Boeing-Archer Aviation Deal Means for BA Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPSEphYkNWam5rVVplVkhnM0ZJcVhjREFpQjg2OGJFaFo2VWNYUmIzOV9vaDlKcFpqVjlyNEpMb2FzTEQ5Nk1YVkJhS2V1d2JiZFM1NVFyaDkxT192b2U3eGx4WC1Pblk3cFVNa2ZUc1I0Q0pfNDdSalp5dTlkRjlSb0xZbG5hWkFOUXNQUzZnVmFFYXdqRGZWSVJDaGtwU3M?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "10,623 Shares in The Boeing Company $BA Purchased by Simplicity Wealth LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQaVozcTIxS3M2M1ZHeDE2dXNuVWRMYmhvZ0lKanFPdWtWeFc0X29TSHZOWlIxMXNQTFZmcDI4WTQ4bWExNG8tejF2WEpjQnl2RzRfaDNxWEYzUTBmWHdDY3UzeWx4Ym1QbVRGczBXV0FCN2JYVkFGVTVoUXBIaXBPTkNOZUFGZU11X0lXZTlOa2t3Q3FTaEFRWS1zckxoOXQ3VkxqYTctaWp3eFdpSTFoSXVWRHh5dXh3QlZhRVJzZXhKLUdDZ2o4MnNIcUNVUQ?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-06-29",
    "event": "Boeing (BA) Stock Drops Despite Market Gains: Important Facts to Note - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOUTBlTms2VlhMNzg3Wk1SQWZsdHppZFVwSTl5eko2WlhXa3pEQmpsQm84bmt4VzdhdlVVRmpQR2laN2UtdUZtYzVSWnVSRzQ4Y2NYV1U4MnE0TnpQWDhYT2dRbmZTVjJhN3BTaGdLSUQtcVE5NWZDaUZuMjRiMmdqdTRFRnNWRjdSNXI2V0FmWm9sRkJxUUE2UVRn?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "11,906 Shares in The Boeing Company $BA Acquired by Wealth Effects LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQeHdqZ2JGblRBSjRVelRQWHJvejJ3M21Ed05xUzhmdTBhZE9aS0RfRjFFdWdRdS1oQmpuVGJlWE9ZLWFwZ1VXdG5RUWhMbUhhMW9ncDlCY3d1bkpYdjVWWE1veW1SUEpMbkFTdzQ5dHpNaTlUUUgyV3R5ZTI2QlNuVFZzaHVTZ2dKN2hQLXJjNDd5STZwa1lfRHRROURJbGY2SmNjdmJ0RVpiS0M0WUJaQnNqc2lDeUlNcmZSME9GeUMwZHlNWmswQg?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "Compass Capital Management Inc. Acquires Shares of 55,384 The Boeing Company $BA - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPZVhtU2xWeW8zTUdFaV84dGxGSHl0cjBQSDdaVmpnM2NkZFdZUFFTdFRJSHB5WDAzX05idDJRMkQwckdWSTZiaVAwUW41R3FXUHJveWY0aGJYUjItVlQ1anlLM1pyTGowQ3diMzRkVUhMa2NOcXFqY3ZkSXlkOHV1SmsxdVFweU05MDAtbnBLeXdDSDJqT3ZkYThVN0dqX3otb3g2SzdZVndvSnVpZGtTdG1uOVloblJZcFJna2dVSTk3ZHR5eDRsTTE3dm9lMVp1VXRhUg?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-07-02",
    "event": "Why Boeing (BA) Stock Is Trading Up Today - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNbHF5OUE4ZEpoc2V3RFRLblpIeUpkaHJCNTV1MHVWeTJRWkJ6aWlUMFZrYS1kcDZwZWprcEhQM1hUYnFUWHNnMzk1M3VWbEdldThxSE1PcVhFNmdZd1BXOUdJMllQNXY1eU1TWThvVUJlN0tvcVB4RnVyVGtzNXQ3SjZZdElYS0VSZjU0TnBPdGFBblVXS3Z3?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-03",
    "event": "BA Stock Jumps 7% After Rare Double Upgrade — FAA's Approval Of Boeing’s 737 MAX 7 Adds To Bullish Momentum - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQZEVHbmV1NWUyQzZIdTMxbVRqQkpFS0llMHRmOHhxMjhBWDktelBkQll2bXNtNVE0WmthZ0ozZ0RjOG54alpRb1JDODYyVUI3VUlYQUkzelQ5ejlkSVZmU21yVDlodGZ5ZDcxVWhVMUVBcTVMQnYyT0x2UG1TRE5XQUlEMFdkVEpzM0lzQTRTSQ?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-13",
    "event": "ADVANCED MICRO DEVICES INC CEDE (AMDC.BA) stock price, news, quote and history - Yahoo Finance UK",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE0xaDBaUzM2RHhCdTlpYnpBeTNWN0g4ZHFBTHZ1TFNvV3gwa01hcDViTUktWTB5b0JmREYtN094M1hCS1N0b3R6ckZBbW1FZjJWUHR0RE9MVzRhaWdPRmhvcVJNSQ?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-15",
    "event": "Is it time to start worrying about Browns defensive injuries? — Ashley Bastock - Cleveland.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOTWV4T1NhSC1ya1AwaXhLOFlXMHlKemNCVVVBc3BCXzEwSGZxRkh4dlFpUmRwZkVjOWlVNFQzSUFJQ0pqQ19ZdGp4RjhiZTM5ODFyZFVqRlNPR2RIamNjZTZIaFNXRDYtMkgyeFpaVE5FYVNtWDN0VkU0T3ExYVpXYXdDdU9zUHhDU1ZXMUttU2RvX2ZPb01vYWNRUlFFd0JRcTBjT1QyTGFNZHVnbkhDOTAzY1RZMjBYeTRHUDZB0gHSAUFVX3lxTE5RZERueEpyYU9PYUpJR2pKZEo1YVVnWmpZS2ctMFBEVXBuNFVLQzI4aVJIOUVTTGwzUHd4VXhYY0wzenhjOVVuWEE0RVVUanV5dWQ1M1RIWV9GemJKZEU3Y05BV0VSazdUMmJQOXc4ZlFxdy1fOUx1ZXZqVkREQVFvOUZWcDFWZUZNQ1pHOUZEbG00RHB6VWJ4VTJJQ0E5WlJfQW1BYjRkck5BZlh5YjJFcDdma2kwOXpGYm03RU5DbDI4QnZsYTRqOVI1cGV4VVZhQQ?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-07-21",
    "event": "BA Stock Slips Despite Boeing’s Farnborough Order Spree — Retail Stays Bullish As One Trader Sees $50 Pop After Earnings - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOZFlzS0FqeDhwanZZNTI4ODhSZW1HSlk4TzNFUTIxOWprWFhSY1lmdDJMSEZCSUpkRmU3NmRsNTdUNms1cHJmdVQ0blVPSWo3SzlteFplcUZaOWZQWXpQaGU4TE1FUVBDVEc1VGl6Y1N4YnRLdHBXOTdMU2VGaVhUaDRuZW81SUZQeTNET2FvS01JU3FseWFOemtR?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-07-28",
    "event": "Boeing posts wider loss than expected as Air Force One costs weigh on results - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTE1JMW5uRGo2LUE3NnViemtQLTQyUXAtaG9mNmdncHQ0NGNiVHBhN24tSFNsclpCRC1qeUZlejQtQkdZX0haUmZIX2p0anR6MTF2TTRaNUhjMU9sR3VJSGhRd20tVTVmZDBTTmhqTHNGa0XSAXZBVV95cUxOYlItR3Zqd2YtaVJ2aHkwcnpxb0hrRk80Si1UTzZZMWpWcVNMaTRqUUMzWXBFVzYwLUhsQnZxazZpUElNRTQ0N0R5VXRaZnZtVEtHVnF4Ukd0a3RqdVA5blNZMjdTd01rR0luRGtHbDdrOHRLMWtB?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "Boeing Stock Rises 7.4% YTD: Can the Turnaround Gain Momentum? - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQenMtMGpNS3lGWGNGdmtoRlI4Nkh6eFFSS3FnclpiekxKVWttYWJSeFFwYlhCVExNSEdBSm51ZU81QmpQbXdXckJpLTRORUI4ZFp0ZUM1Qlc1anZiTDlnNmFzcGpURHZlckhNUUNrSktGV1QyNWhaV0R0NF80SGtUd2Q1bHdLNmlfc2xBQVRyM2FzVTZqQllhcDVrV2NDdk9nU0hzSld1NC1ZM0ZaU0xiemFuZmIxNGMtSHhzMi1ndkIxVjFxUUNESkM4czcyZ25iSmxpUElFMTE?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-06-23",
    "event": "Boeing (BA) Stock After Recent Operational Scrutiny Is The Current Valuation Attractive - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOQjFrbHRvbTRmN2hacXd2d1dUYmdCWncyUDQ4TVR4OGFyeUV1bVpEU0EyS2IyaG1ZUkFSUzZHbDV1bS1tbzdNMmZIS29WWlJjVFNFa081dWJ0TWp3MVMwMHZPUUxHZ2FIbklmQ2l6LU14THFodEU2X1NVY3B0ZWRBSjNKVE5EUVk4NjNvcHlrUVhUWTR4ODFSRFgzOGFBa1NE?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "SpaceX's biggest investors are finally visible — just as millions more shares unlock: Chart of the Day",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — The curtain is finally lifting on who owns SpaceX (SPCX), and the stock is surging over 5% Monday....",
    "url": "https://finance.yahoo.com/markets/article/spacexs-biggest-investors-are-finally-visible--just-as-millions-more-shares-unlock-chart-of-the-day-154946600.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Why indie games are the next big tech investment: Gaming CEO",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — Griffin Gaming Partners Co-Founder Peter Levin chats with Yahoo Finance Executive Editor Brian Sozzi about managing over...",
    "url": "https://finance.yahoo.com/video/why-indie-games-next-big-100000670.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Financial Advisors Love Warren Buffett, but They Don’t Always Agree With Him",
    "type": "NEWS",
    "remark": "News via Barrons.com — Money pros explain when they embrace the Oracle of Omaha’s investing wisdom and when they encourage clients to take a di...",
    "url": "https://www.barrons.com/advisor/articles/warren-buffett-wisdom-financial-advisors-ec4db144?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Stocks to Watch Recap: Alibaba, L3Harris, Diana Shipping, BHP",
    "type": "NEWS",
    "remark": "News via The Wall Street Journal — ↗️ Alibaba (BABA, HK:9988): The Chinese company struck a $1.5 billion deal to sell its videogame business as it sharpens...",
    "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-17-2026/card/stocks-to-watch-alibaba-diana-shipping-bhp-xNrQSBdGgZVZiqNTks2N?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Here Are Big Tech’s Big SpaceX Investors",
    "type": "NEWS",
    "remark": "News via The Wall Street Journal — SpaceX shares got a lift after some of tech’s top names identified themselves as big investors in Elon Musk's rocket-and...",
    "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-17-2026/card/here-are-big-tech-s-big-spacex-investors-zTtV70jGWpcxqvGCSc0Z?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Mexico Explores Ways to Regulate Social Media Among Children",
    "type": "NEWS",
    "remark": "News via Bloomberg — Mexico is exploring ways to regulate the use of social media by children and adolescents, as countries such as Australia...",
    "url": "https://finance.yahoo.com/technology/articles/mexico-explores-ways-regulate-social-202941529.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Alphabet Eyes First Australian Dollar Bond Sale",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The financing push comes as AI spending accelerates. Summary...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/alphabet-eyes-first-australian-dollar-202414977.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "SpaceX Stock Tests Resistance, Attempts To Retake Debut Price",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — SpaceX stock jumped more than 5% Monday, fighting to recover its 150 debut price. SpaceX conducts rapid Falcon 9 launche...",
    "url": "https://www.investors.com/news/spacex-stock-rebound-150-debut-price-resistance-falcon-9-launches-ownership/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Warren Buffett's Portfolio Is Looking Even More Like The Dow Jones Index. This Is Why.",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Berkshire Hathaway's Dow-heavy equity portfolio has grown even more so of late. That is thanks to Warren Buffett fixing ...",
    "url": "https://www.investors.com/news/warren-buffett-berkshire-hathaway-portfolio-looking-more-like-dow-jones/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "AI hyperscalers or memory chips: Which is the better investment right now?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/ai-hyperscalers-memory-chips-better-142329824.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Alphabet Seeks $3.6 Billion in First Australian Bond Sale",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/alphabet-seeks-3-6-billion-163642861.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Alphabet Eyes $3.6 Billion in First Australian Bond Sale",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/alphabet-eyes-3-6-billion-125031886.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "'Spending is leading to earnings': Wall Street strategists see payoff from Big Tech's AI investment",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/news/spending-is-leading-to-earnings-wall-street-strategists-see-payoff-from-big-techs-ai-investment-151610093.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-14",
    "event": "Berkshire ups Alphabet stake under Greg Abel, making it a top-3 holding",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/berkshire-ups-alphabet-stake-under-212900630.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-13",
    "event": "Gemini & Zocdoc launch AI doctor booking",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/gemini--zocdoc-launch-ai-doctor-booking-195932395.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Google’s Pixel 11 isn’t the story; Gemini AI is",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/google-pixel-11-isn-t-205900374.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-14",
    "event": "Reddit is joining the S&P 500 next week. Here's what you need to know.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/reddit-joining-p-500-next-145131579.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-11",
    "event": "Cloud AI Today - Novo Nordisk Partners With AWS For AI-Driven Drug Discovery",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/healthcare/articles/cloud-ai-today-novo-nordisk-123802779.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-11",
    "event": "Tech Weekly: Nvidia raises cash, robot dogs keep homes safe",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/tech-weekly-nvidia-raises-cash-111453690.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-10",
    "event": "Berkshire is buying stocks under Greg Abel, but who’s really in charge?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/berkshire-buying-stocks-under-greg-155300705.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "AI compute is 'critical infrastructure' like railroads & steel: Hut 8 CEO",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/ai-compute-critical-infrastructure-railroads-120000243.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-11",
    "event": "CoreWeave jumps 10% following Q2 earnings",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/coreweave-jumps-10-following-q2-210500927.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-10",
    "event": "The loneliness epidemic is growing — can FeedIRL help solve it?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/loneliness-epidemic-growing-feedirl-help-220000359.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-11",
    "event": "Can SpaceX really reach $100B in annual recurring revenue by 2027?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/spacex-really-reach-100b-annual-144912928.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-14",
    "event": "GOOGL Stock Alert: Google Unleashes Its Biggest Weapon Against Apple - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPaEhJczh2aVFwMmhQYlZoTkVCWi1JRGNudU1GQ3lBVkxreXF6RVhRcWJ5YmV6OEhCSlhncnc5Zjl0UmcwSkoycmZuRGt5ZWdULVlzQUpNMkN1TVY0aE1xSWFWSUs5dGRZQkxwZjJrOHE3UDNna3pKWGpvMzUxQlk3OHF5TldmYWtiWk43ZEgwVnB6YndpT19WOVRxUmdaMTl6RVdIMmNqa1Q2SVpaUUpLWA?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "‘Historic Moment’ as Alphabet Eyes First Australian Dollar Bond Sale; GOOGL Stock Rises - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPMmdNQUlQaFVuU1J1T2g2aC02Rm9QNF84TXZTd2szQlFKVWNhekVNcDNMQ184SWNCSzFXTl8xYklBcVpVU3o5b0dDVy1xeVQ4djBpV2ZacGdIU2QwZlRiNm1KSUdfdWo0R1ZReVF4STgtNXAtNlZTSkRKdFhlNzB6M2hQaHV4WFhyZGd4X0UwTDNOT3EwTmdGbG9KaHdvcm9nQjNYZlZuQzcxMV8zZFRNT1lhSFA?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "Sergey Brin Wants Google to Double Down on Gemini. What That Means for GOOGL Stock. - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPUXcyQ1cybFhrMlZWeFBFdTNCbUFJR3lLRjRSVHBkb20wM1NocjU2U2VkNDd2Zk42QWZWLVJRbWs2U3pfZU9DbVQ1S29QYkttT2NkaU5GN3RDLWlJc3JpT3lfQjJNeUhYcFZmNHQwRkZRTXhCZXA5VERYQTBaamhKM2NLVVFTX2IweDVBS1BBd1UwTzlvOEJoNTFjNm4?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "1 Jaw-Dropping Metric That Makes Alphabet Stock a No-Brainer Buy. - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQVXBrT0RMVEh2Xy1FT2wzNHNtVE91NnBTSU1adGhpTHo1UnNVMExsc0dHQlFHNUNFWjhLMWtvVUxfSDBaNVc2TFpISU1JaHpib1lIWHFKSzh3NkRyTlprVXJCMXM3SHBvd0lFRjA3a2lmQmNzNU4ydE9tX3ZHUmdUWEdmOXNZMGpIV3ZNRUZxNjlpNmNxczNn?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "Warren Buffett Wasn’t the Only Billionaire Buying Alphabet Stock in Q2 - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQVWVvYzUtMEo2S2tXaHpFYS1CaW5tQ1Y5aURPUTZ6TXd6RF9EMXFPY0xIY3RmT1FhZUROQWwtaE9IeHFpa1BaTC1IeHlZVnc5SGp4N0RjVUdFLTE5a0lHN0xEOFlBZDRmOWxQWmNZT0toT21PcE1JTkJwV1VGLXk3bWFyemZUSTU5SjBMdEQyNmE5S2I4ZE80V2ZDQlBsc2R1dGhHTm9ITk1YUUxkUk5DaFRhdw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "Thurston Springer Miller Herd & Titak Inc. Grows Stock Holdings in Alphabet Inc. $GOOGL - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOVXJpM0RtRHFuamZEcDE2NVR2LXA1d0hnSlJxbkROb3JIU0RUM3p1YWw0NTg5MWRNRnZJZXFQX0NoaF9Ca2t0TFplcHNZa19tNFFIWHZRa2V2RVZSQnNBdWdPYXRCM0I4ZzJ2MUhneHJ4NTZyZTN0QWRybVlRLVdGTllwTDBUNWhwSU1jZWpmRkd3V0ppeGFEb05KR20zaFV2Q2ZaSmN6cG5EbFBvRDQwcVpPdTZMX1p2UWdaLWR2cEZqYjZBNEhlWUdmdEFlQTZHQUxrV09vdnlKMlk?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "Alphabet Stock to $515: 3 Reasons the Bull Case Is Getting Stronger - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOa3NNakxLYnFkNEJObFdFc3lMallyMHdXNUNpR0EyMUc4UjJDSk9nZGZnVW42UWNkZm9jcU5DTXRIVmUxU0RTbkZJZU91ODJSbU9NcDIzSnliX2h1VmMzUHFZZXpaV3ZzUXlNcVQwNTVkZm43Ty0yVkFNYUw4UE1vYU9hNm1hSmo2RHJVS2l0VHQ0TjZCRzNRZjA4d1NaSFlzVDZEWWFSdWtaR3hEdWc?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "AMD Stock Slips Despite Reports of a Google TPU Partnership - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPV1ExdzRubENZVEhuckhwaW5DaFNRb3BKUzJmYTJhUHJ2c0ltYXcwWktxWTM1cUxKRzAzS2J4Wmp1Zm1kM3BOeUVIZV9EWEtOWmhqekZMQTFJdGZKdGRBdWRfSGE3TU5YVS1OR19oSGx5SWlud09WN2pyc2FIdG51NXcxRjl5M3d0UUJZRFFXTFBIU1k?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Alphabet Stock Has Attractive Short-Put Yields As GOOGL Stock Treads Water - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNZXJ5dDZMYXRpYzBwWW1YWVhhajhZVXVXTEZPU3RDN1FvbFNGYjRSNDZVZnMxdkpJemNYeXk3WGlDanlxNzF3U09PcWRSLTFwSGNkdkZhcFN6TTkzMm9wcTVjbGpYLTJ6VVNvZW5yLTJpQ19XRTZZWWc5NndBdHFDVnRrandfLUJwTmZGTVlPM3dDODctaElhUnAxdlNHRnZSRUVxX0RoQldreW05ZENLOTUzSEZiWkFIdnc?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-13",
    "event": "GOOGL Down 19% From 52-Week High: Buy, Sell or Hold the Stock? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQSG1YYUZuMVc5TkJQeW1EV1dvaTVfWVdVWGF6bG5YUDh6Q0JUb19ZM25RLWtZRVB6ekVHRzdEUXlTQnBtN2c2UUFFNENoWVhTaHVlY0J2a3ctOUZJNTBxaUZDeVpiQS02eUoxT0I2RjB5ekJZbWJRU2luaEItdi1LWUxia0ZlYkhrS0lyZ3JTaw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "Alphabet (GOOGL) Stock Price Forecast 2026: Cloud Hit $20B But FCF Collapsed — Buy or Short? - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQeXNna0FPVFVzVTBlNUM5NVVCNU9TLVhBazdFMVhkaFpBelZTMHBGV2ZqWTBwdFhwUVp3ajJLWXVaNTZURlFrRlhVQ010NDZzVTFhblZESDlvME0wWkhhemJBaXlyREZDLXhpckVRM3QxUlA2dW1idHlFQkEtT3FlbEdIb05UT1QtOFcySkRlc0pwRzc2Z25JQXE2YU8zS2JvLUh1ZUxEd3c5a2lETlItcXo3UEN6ZnA0c185SjNlN1J1QzI2VkE?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Top Investors Warn Google Is Now “A Very Different Company” Than It Was 2 Years Ago - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOTU5nZ3A2RlczT2tEQzZSLVotcnNETFR2QnR3TkJJOGZ1bF81VmZEQnotb3VCUkYzYUJVM21Xc3JnV2sxTXdMT1Y4VldaUDhUQ09zZGxPSFJoeUNacENiTW5hUDB4QXlnc25WeHpTVU9iY0wyeGk4WXU3LThLSXZqZm1HcFdEdlFMQXJPMUowUVlXSGwxNS12b1F3OTlNZVBpWklxb1prcnBqNE15aHNIX2xfTWxNbEdsUVBkblBlYlZ4R2M?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "Alphabet Stock (GOOGL) Opinions on Recent AI Developments and Earnings - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQVVo4ZFRjRVJQN1pFbVZXT05rcXhBSllaM2ZJTExWdmhLZWxWRTQ2b1ZmU3ZWWjF3aGNEV2lQeDJudU1yWWhza2JBOFRCU0pYYnpIVmxuN01Qb0JWUm9rNW04czRCOHhrOTBCeDA0UHhoLXVwNXdaN2g0U1UyTDB5WlhqMGU3akZ6cHNISl9sVHBtekk4TlVPaURuZUFKVWRseXd6UURCRWJhcXc?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "GOOGL Stock: Google Loses More AI Talent As Two Experts Reportedly Move To Anthropic - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxObDBOMEdpR3JmR3N3TDlaNXNvTEpFOWt1WWJabUs1TlBPTjVnTUNJQ2RTaGt6TmhjLW82TUozMmRQNDNYRXliNW5HYmpXVDQzRkRYTXdmOEw5WjlDRkQ5bGcxaW0wWmJEckQtSmZrSk9tOWgya1BsWW4tUHRjd2I4Vi1fdTlkUE5QZ1JhcGMzaTZiSEdVb1pQMHFpZWxxMEE4T3Y0cXE1ZXpuRFI0MXlxTnZ4RmlnSVRVVEc0bjhDSFRqNGMtR1hIanBNT1d0dmJ3N21OSUpOVldhTFY4bG93b1h3?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "Alphabet Inc. $GOOGL Stock Position Cut by Agate Pass Investment Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxORDVaUXNUMEJzUXFOMWt5Z0ZpYTU0T1N3dEY0RnpZR2NnUlJ4a2ZDcjdhV291M0x2bTJKNzVTSi1aOVMwbGdjWkVMRlhCYktIVmd2OTc2QThiUHZmRXNWSlNGN1dwZGFOT3h3WkQzZU45QVM4Z2dKRmFSeWZkZUhMOU5tOVQ5R0pVZ3YzTHNkUFZJTFFKYnFWckdfRWt5ci1mZGxfY3lxNEwyY2xzeVFVYk16T0ZHNndNN1d4bUhPOExpeUJZdmNPTlV6TnBnWkR1SmVzVQ?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "The Sign Before Alphabet Stock’s Surge Was Google Cloud’s Margin, Not Its Growth - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPT2V0VGJBdF94Y25sUDFla1NBM0tzSjhqUmh2YzUwTDdHQ1l2LWFEMlZkSG9BTEtUaGFYZDRkNGZ0TktlM3NYRzR4ckxrQnZENEtHcThNOFllRjFjdkZmTk5xUk1zVUl0ZHRGNkVTM2loMjJWd0dqRHc0OVFsSmRaSFNTd1JoeGVxUXFEMFhBUnNfblFKbk4xQTVpSWZsUWM3TzBrdjAwQlh1eGFiRGFRLTU3SnFEVlQyM3BtazY5eERWU1VzaUxZU2t1T0VzVnpmeVNCWTZB?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-11",
    "event": "Alphabet (GOOGL) Stock May Be 20% Undervalued Following AI Bond Sale - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPLUl1enV6Q0N3T1pKcG5FLVQ4SExSVlVDTkZ1VWZUc1VydTdEWGxDYlhlMTI5bGhMSXhRVUJKdFZYel96dnVobUJiLTBlZG5fZ1BwTERIa2kyYTltZDNuYlA2dGFGdzlFZk14eDVGSkFpX0lWclNVN0k1R3JWRWRsUUJRZkxVQjRsbjB5eTBLSHBEVkxHaU0w?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "$GOOGL stock fell 3% this week. Here's what we see in our data. - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQMmFMcDl6RFdHVm5fV21SUVV0UDJTdjBWeE1jMVMzRzh2R2hPRWVWZWNNM0tUTFo2bDBrVDZpNXFudVV4VkxORnN4THNaT1diSkhGN2NlQkVycXdGai14c0tFOTVqQTJ4cU00MFNLa3RrXzRQenJ3S2FFZURHR3d6dTRZY3M5cGwyTkJjdXZ3b3RWYXo2MVBoNm1uMTgtZ293ZVJHMA?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "GOOGL Stock Gains After-Hours As Alphabet Is Set To Replace Verizon In Dow Jones — Retail Eyes ‘$400’ Level - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxNUnlnbV95S2Q0dndkQkxnQmJWa1pPanMzdEtoWlUyLU42OHFFYTBCS3ZpdnVueGFva2lieldySFlIN3VzeGM1YXhSOVItOUtFMTQzTXdsbkdYbEVFc2dXMDNfTllLbmxONnQ2dHVqaTFwSXhDWEZpQVhHWmI3MmJkZmhXeHFJU3FKUHBxX3dGaWotNjJvTFBveDE5ZVd6NW9GdXplMXdkWVJ1anVMQ3EzOWJTLXdUTXpWSDJYdmxJWC1LT3EtczNkTFNrdFAwMVFHSUxlTmwwYlhub09zZElhSFFSLVM?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-14",
    "event": "Alphabet Inc. $GOOGL Stock Holdings Decreased by Westmount Partners LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQMjJORjdYa0IwOU1FcGVzMTJBNFFaNTY1Qks4QmJPZy1BSndONEVDaFhnLWV5bWpZX0lxTVFFSDU0dzVZT0tZem41SUtNS0R6UFNZNDVUZEpUd3hwTUgzWHI0X0d0eUEtcVJnaFA1c0hvald5REpPajVqenduT3lUZDNCVmNfUk93Z0Nwcm81X3gyNzNWZEdvZjE1ZGFaWTJMWEVqbzUzTlJSZkFxeER3RlVPdG9DbXQxZWJ2T0dCOGdzV2FwSDE5YjBn?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Berkshire Is Chasing GOOG Stock Big Time, But It Might Not Help Reverse Warren Buffett’s Historical Mistake - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxQYlV5ZE5rc1ZHNndmWlA2UGd0cUhPSlJpVUU3NWw2VjVMblVyMDlTZXd1X0s4VTNYaUVfTGZQbXFMcDFHN3FuNHBlbFhUd3RhdWdVSDBwdUEwOGJfVm5xQ1Q3Q1RhMFpPSFZzZm5PcUs2N01rdExhM3pGU1p5a2VnZUR0UjNJX2g2eHRPb1lSd0c2aWVxTUxySzZ3SWhTMVZoQjFJNHRIOXVpVTRqRmV3bHctMVVReTlIcXlqUHdjTVZ3YktEZFY2OGVfaElnaHR5bEJfRndla1l5OW1ibHBKOF9JVQ?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "GOOGL Is Already Borrowing Billions For AI – Now It’s Reportedly Eyeing Australia’s Bond Market - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxNT19CZFQtR0xwU1hzRU1iODhzelRrVnBpUVhlTlJRNDJ3X2FlN0FuaUE1QUR3ZXktb2RUbDFyQVJuSkJOMHFEOS1IWnE0RXZjOWdlTXc0bkRPTGJNbU1HcTZ2WDdINGJ2WVYteGdqU05sQ1Q4RnhtVkh4VUdualUtYnc3a2xvQ3hmd1Y0bmh0UW9oeVZtVnlzTnp6b1B2ZWdCMFNGWjBsZnlDTFJ2aEczdDVqN183VElUUXB0RWhad2pZUVVnV1djX0E5cTZLRDY3ZWRSNVJIbTQ0U3NEYkloWXdtb09SZlhPRlFWNDhB?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-07-23",
    "event": "GOOGL Stock Sinks 8% A Day After Strong Q2 Earnings — But Wall Street Isn’t Backing Away Despite Price Target Cuts - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPYXd0Ym5IeDhCR1lrTTluRkhoZllEb3BzLXFHbFgtT0tDUzdad3RRREhfOXh5RUZKc3FYeWxwTHNwLVdKRzE0bnZCbDBZSHFWOUx1bGI2N29UVDhCTzUweHRwajJpYlhoX1k4cFRsT0p2OEREbEhSeC15YzVoejBqdm5Dd2x3R1lQZ2plaEJWc25VUQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "Bank of America Sees 50% Upside in Micron",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The bank sees structurally higher earnings ahead....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bank-america-sees-50-upside-202331376.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "Will Bank of America Benefit From the Jio Credit Partnership in India?",
    "type": "NEWS",
    "remark": "News via Zacks — BAC invests $1.9 billion for up to a 49.9% stake in Jio Credit, expanding its India presence and exposure to the growing...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bank-america-benefit-jio-credit-153200615.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "TTM Technologies Strikes $1.1 Billion Deal to Acquire Epiq Solutions",
    "type": "NEWS",
    "remark": "News via MT Newswires — TTM Technologies (TTMI) has agreed to acquire Epiq Design Solutions in a $1.1 billion all-cash deal...",
    "url": "https://finance.yahoo.com/technology/articles/ttm-technologies-strikes-1-1-142848540.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "Billionaires Battle on One Stock: Warren Buffett’s Berkshire Sells While Dan Loeb Loads Up",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Warren Buffett's Berkshire and Dan Loeb's Third Point studied the same consumer lender last quarter and walked away with...",
    "url": "https://247wallst.com/investing/2026/08/17/billionaires-battle-on-one-stock-warren-buffetts-berkshire-sells-while-dan-loeb-loads-up/"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "Beat the Market the Zacks Way: Bank of America, Marex, Mettler-Toledo International in Focus",
    "type": "NEWS",
    "remark": "News via Zacks — Bank of America, Mettler-Toledo and VSE post strong gains as Zacks' Focus List, ECAP and Top 10 picks outperform....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/beat-market-zacks-way-bank-125100488.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "Berkshire Ends Fourteen Quarters of Net Selling",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Alphabet becomes Berkshire's third-largest holding...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/berkshire-ends-fourteen-quarters-net-121114255.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "MU Remains BofA's Top Memory Pick – SNDK Signals Memory Growth May Be Structural, BofA Says",
    "type": "NEWS",
    "remark": "News via Stocktwits — BofA reiterated its ‘Buy’ rating on Micron and a $1,550 price target, implying an upside potential of about 59% from cur...",
    "url": "https://stocktwits.com/news-articles/markets/equity/mu-250-eps-bull-case-sndk-signals-memory-growth-structural-bofa/cZYGbtPRJ12"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "Why this Wall Street strategist says the \"trade is long gold\"",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- Bank of America strategist Michael Hartnett told investors in a note on Monday that gold remains his pr...",
    "url": "https://finance.yahoo.com/markets/commodities/articles/why-wall-street-strategist-says-113012320.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "The Secret Word Game Bank of America’s CEO Plays With Wall Street",
    "type": "NEWS",
    "remark": "News via The Wall Street Journal — It’s no happenstance that Brian Moynihan regularly jams “gainsay,” “concomitant” and “fantods” into otherwise ordinary s...",
    "url": "https://www.wsj.com/finance/banking/the-secret-word-game-bank-of-americas-ceo-plays-with-wall-street-987dcbee?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "BAC",
    "date": "2026-08-15",
    "event": "Why Is Bank Of America (BAC) Committing $250 Billion And Investing $1.9 Billion Abroad?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-bank-america-bac-committing-150822701.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-16",
    "event": "Central bank market backstops risk fuelling leverage and future crises",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/economy/policy/articles/central-bank-market-backstops-risk-073550702.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-16",
    "event": "3 Unpopular Stocks We Think Twice About",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/3-unpopular-stocks-think-twice-014900743.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-15",
    "event": "Bond Traders Are Agonizing Over $70 Billion of Shadow Credit Backstops For AI Companies",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/bond-traders-agonizing-over-70-190000845.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-15",
    "event": "Ultrapar (BOVESPA:UGPA3) Stock Gets Fair Value Bump As Analysts Revisit Q2 Assumptions",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/ultrapar-bovespa-ugpa3-stock-gets-161004479.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-13",
    "event": "Bank of America (BAC) Stock Still Looks Like A Bargain Following Its 139% Run - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPU0NNMVh5Qk9xZ3E5OXMtbTJhNjIzaFRQRzZSd3l1UFc2QmtDclMxTUNXV2RNVWF5VmUzSERhN1M4WXVlcTRZSGtReWxSV0VJYzdoY3kwamNEVUxPQ0pTS2FDQnZpN1hvOE9ZTkVKM2stVTJPUmhHeHotTGRHOXdsY3JiUTFiMXhzLUJSbWRkZk85VllQbWdkaw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "BAC STOCK- BANK OF AMERICA CORP STOCK TODAYS BREAKING NEWS | BAC STOCK Real Estate Market (OEt6D0lZ8e) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE9QdDVZYTFRMkpMQlV4VkxNcE4tQzZRMmJIS19BaHZlMlNDUXNQcWNSeldudk9aSU5mWTBkLVc3TExDSDJfNGw4d2ZJQTlPTE5WYXpuOHR5LXdpVzA?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "Fund Update: New $198.6M $BAC stock position opened by Railway Pension Investments Ltd - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOLWpsdW9yMElJQlFzNFJrSDRYbGhTSWlyVGR2eHpfUXQ2d2Y3clJldU9fSkFVM2tBb2pfeC1CVkpsX1NpRWFBYXJMWS1WMkdvRlk2b2FVc3BKQ1ZyX0tWcllobWUyV2F2ZXc2QUthYjJSRVhPSDQ5X3ljRkdiOVFIWUhVNW9KTWxyTl90bnpGV19fQWNiZmtaTS03dVRYWENMTjBPaUx3Y3BHWlg5VEUyRzZIUlhBUzV3TUdUVHJxaEtZNFU?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "Will Bank of America Benefit From the Jio Credit Partnership in India? - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQM0o4Vktvd0REdEtDd1FtcEo2Zm1YeExPOVVqVjdzMVNDZjNDbnZIdVV0QjVXdG10dDhSYlJPeWtsOHRMR0k1V0h1MnlyS0tqbTltVmZVdjN6TjBIWVVVSFZmMTlhQjh6aUxGWHlhQ2MyVzIwYTBXRldmUzFWWE9IMVh1MUh5M3Zaa0FwQWp5NnhmUDRQbU5XbFRZeUNUQ3JEMGJ6bFZvbTZiT1liandFMWVQbFVBeFpYTTZHRjVsWHZ6bHM?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "Bank of America (NYSE:BAC) Reaches New 52-Week High - Time to Buy? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQNmg3el9tMXZqMnhBbVZIZjNnbmVkRGhaVWpQbWw0VnpzRklDZ3hyQmFabFVoSTFEMTljUUdfenEzYVo1OW1YS0hYS0pmcTVKU2txbURZUHRIQWg2TVhqODY2Qnh2ekpkZnFjZzBHSXFvanpKUWlYMTUxWUhwMnp1VWtEMVFCS1pPcTZBX051OTNoOWhrSUMzMWdvbGo0YldpYWdkLWFJbHRGMkdRaUdXZ3d2OTU?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "BAC Stock Analysis | Bank Of America Corp Stock Chart & Future Outlook Hardik Pandya (KOsOkLYLll) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5hV0lmNUFLS2VYM1ZabGNJR2NoeXNLTklhdVVOYzlnRWhaQUprMkhneTRwbDZkWDdPckJLbWUxVFRrWnpQNk4wOU1PX04xa1ZOY0ZfVEp0WXVnczNUVEhpUA?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-15",
    "event": "Why Is Bank Of America (BAC) Committing $250 Billion And Investing $1.9 Billion Abroad? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQV216M3VaV1FLWm1EUGt1N0ZpcGdwWlJncGQ4WUhGQS1FQzRkWERVbFprMW5rMEU2N2tMZXNLRnhRaTlGTVBBYmFiRExEQVpUZ1NEOTRmWGZ6VjVVdlpFR3hMUU96ajNqQTZtNHRPdGFMYTdYVmJ2bDhHVVVtZWRmVHVyS1RQY2V6X2tPNUhBT3dVUDRjQnFpYlkwYkM?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "8,735 Shares in Bank of America Corporation $BAC Purchased by Capstone Wealth Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxNbDcxeVRZSGNOamRnY0NDM1g5Z3Y2OHRlWEV3cnB2bGlCR3hZeFdwNzg1bWpLTk0wWUo2VjJsLXFSakktemJJUlJZMWs1ZERNZkdPaFZtRjRXdEMyUDRlYlBxbkFvTlpjdXAxb3pyYTVGMjdkV3c1b2tNRHZ3RTI0Tmw1dl8wamp4ZWpNQkRiOXJUUTl4Q2hPTlJlQnBJWUQwWWFGLWpaVGNSZmpoY1ZpU1U3azAwUHdfYmo0TEo5Qzgwbm9QWDJNVEZuMzFBN1pWYVZoUWhYb2pJVUdwd180MXVPYmZydw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "BAC STOCK- BANK OF AMERICA CORP STOCK TODAYS BREAKING NEWS | BAC STOCK Injury Attorney (LEiKlstk2K) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1nMGpvS0NzVjRyZ05OMUpQYkhkUjctVXJha2xlQXZSMS14Q21pTHVWSUs4cUpWbTRLRkhpNXN6ZFhUc2w2aUdSemNkb0JOd1dBOXI2RkUxMnliUTZSUVk0Xw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-07-15",
    "event": "Bank of America (BAC) Stock Still Looks Cheap Following Its 111% Run - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPQllLNEt1S0hScS1mZjVRZlc4dGt0alJVb09SajFrSWNZUkZlc2xYRmUwbENKV0FGdzFaMUhfd0tFOUdfZGRnRlhvM0tHQmpmR2tiQVpFQ1ZTRDZqVm5rWFVLWTd5MGQ1LTBZbURKcjAwTkFRZGZieXYzYjUyUExSYnpmZ1B5NEF6RnZZWWsyRU8tZUlqS0RDNQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "Kesler Norman & Wride LLC Makes New Investment in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPOFlwRUZXZEdyamxFdnZYZVpYQmpyeFVtcEFmRUFWS0otTHhwVVNDWUhTQTh1M3RhNHluVFh6SFlYckgwblZpSVhqLVdDSHdjZkNDczVxdUloRjY1dkdUZEJia21mdUozQ3NlQ0p2OEE0TVBWVWlJM3JjdlZ1ZXVQR0U3RDhaTzRMYjVkeXE3Y0duQVVMTzdUbXhDbXptS3I0dTBmR1c1eDVkNkpIVWF6NXpOZ2dTdFNuOHYzN2ZORFQ1Zi1FUFVyci1XcVpRM2J3dXd6c1ctdw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "🚨 The Analyst Vs BAC Stock: Bank Of America's Biggest Opportunity Or Biggest Trap? 📈💰 Petrolio (MO3EGonjCI) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE82WjhnczNHamt5UWkyODY1b3R3N01fR2xNb3JsU0N5andBT0JCOW0ybzd2aWlONUtZYWc0anNGdlN0YUtySUFDNjFSRENheHZnNlc5LXhYNEgzRzg?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-07-29",
    "event": "Bank of America (BAC) Stock Could Stay Reasonable Despite Fresh AI Expansion News - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPV1pRUGNMVzlFWF9ubHdZQVdWNmVvUm8zcEhfS2g4Mk9fcldsYmVEdDhUSTRrRkxVc0RLX1k4bEVWM1dqOS15OTA5WjJsUVZQc3dSdFhYYjVBQmNwZzdqTkVqNkEwaGVnUzFNTmJaZm14N3pYM0NFVm0yR2VrbnNCNGtvbzJfY2tMQXRxaU16eGVvRkJwVGUySQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "BAC Stock Breakdown: Is $60 Possible In 2026? Villanova (uJDkZLLjOt) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5mZm1YakIxVUxPVDV1Sk1UUzJvd2tqaElJV2hTNzE2b3lQTFVnSGhieTZLU3RTdDF2MENEQXZ4czRlMlFiYVZDQk5FVXlBaGZSNG54b1FvTTRDd2FjcTFXYg?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-06-17",
    "event": "Bank of America (BAC) Stock After Strong Multi‑Year Gains Still Reasonably Priced? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQYm9WcFlMN21kSld6WDZkdjQ0SmZkeEdNUWg1RzdSWDU1NnpyampvRldKTW42alpibEYweGdWVXA0WXhkRVQ2NmtWLXlGV2d6OWU4QlByRUhmQm9GUmRKdXRSMW1EQWZvSUJPN1NneVdHSUpiTzNLZ0JKV0xSWVNsb1R2N2NoMW5iWFdRM2IzZzZfYXdvWmxaNWN3?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "Bank Of America (BAC) Stock Analysis: TPO Institutional Order Flow Carburant (2mj23vsEF6) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE92bFZ1R2JJZ1ZSY21lZktsSzJlSmRjRTVaV1pRNEdWX29mWnRyWVdnaGFBbHBuVVFXNDdKNXl4MjhWYTd2dWI0NUdqZUdlZVIxT0E0Wmh0SVE2dmM?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-06-17",
    "event": "Bank of America (BAC) Stock Draws Fresh Price Target Split After Mixed Analyst Revisions - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPMHJULU9EaWJpbHlUb3pyaWoxRTgyTnVZODVFNU9QMUFJM05JUV9ia3BSNmdEWlM0djdMQ28tVzNVUlY5WVJOMjM5b0lWOWQwODUzb1lEY29LTDhpWGxCVnBBWGtlaTN3Vmxub25hNExEZ2hlc0d3LWNpUXo3bDBVaUxHMGpQZWNsWWtvTkFYTWd0c1AzUGZUdw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "BAC Stock (Bank Of America Stock BAC STOCK PREDICTION BAC STOCK Analysis BAC Price Mesothelioma Firm Elena Rybakina (Y6wx7UfIkm) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE5IVl85Y2RsVlU4aTgta2tqeHd0cUNBVFNHQVU3UlZGY1pYS0lFbC15Qi1ncnlEeTRNNUxFRThVbUd6bk80Z2x1Nm1ETFd5bl9xVG1MbW9JTjJuc0E?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "BANK OF AMERICA (BAC) STOCK ANALYSIS: Is It Safe? Undervalued Now? Scotland Election Results (kR0DDdMwXF) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9DZ3FWdHdyT3ZsX3NhSVlxS3RkMUJqZHlEWHdfWHBNQ0lGR3ktQ0tHcVlDYnFhNERDclBhWV9PZW9hMzRjS2pSc3JNNXJBaEtXVmRKXzJ5TUpUUWs3aG9Taw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "Bank Of America: Warren Buffett's DOOMSDAY Weapon (Bac Stock Analysis) Josh Windass (ncg2BINlt4) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1aZFlXLUFhYTVJc1k0SG5hMHhJLUZZSEJxeWtON0tWekpvTzZMMmhFcUEtTnhEb2Z2UVRkYmlYaE9yVHBacmduWHFyZnpEQzVISjhMSWVPRnctd0YzRmxkWg?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "Bac Stock Pre Market World Cup (8HvrbLATQw) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE0xWDltaUZjUmxDdGxKUWJEeFJGYmhUd0dMaVJUZDhVR0xUcGZyMXVrWEo1S1h1V1RrUDltUUo2VnRWNmVPdWtnYzZLbDJHaU81YmJ0bjZqY3FBcTl1R1g4Uw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-17",
    "event": "5 Investors Betting Big On Bank Of America (BAC) Stock! Cami Kepke (UXwd8AcXOZ) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE4xTHdQS1ltV2xjZm5odGxfeHljN3VJUHpNNHdLUm0wcUduTF8xQ3ZHTjJLVmprYWFYSFhKcnFQblhHeGVMcUxtSUUtd095d0UtV0pCaUpTR2FOM0RmYXpzYQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-06-12",
    "event": "Bank Of America (BAC) Stock Valuation After Strong Q1 Results And Upgraded Markets Revenue Outlook - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxOR0dQTHloRENNSWJ6eURBUFk0ZXYweVZ3MmlOcW11X1lEM3dJSy1wQWNvTUV3Ykt6dll4QXMxREJaTzFsWlVNSFpSSEJlX3oyb2RTSkh6T0RzcnJLLVB4TEFORFpBU0JaUHdEb2ozbVYyakJOdFRGTzY2NjFvZzFUcm5BQmhPTjJkeDd5bjE1Z2R3Sm9Uc1RwZC1mUktpUQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-07-03",
    "event": "Is Bank of America Corporation (BAC) A Good Stock To Buy Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQMG1vaTcxalo1Qk5CMXNIX0F4TVIyWlV3TUtzSThRczFDbGY5TzN4OWxTREY2elcxbzdnZWZaQWRhSURzTk9zTWE1d2ZzLXIxNDlBa0NiOVZuejBEeWhUcDdpVTJ6SFBIeEZ1UTBWUmNhRmhkUFhUZ2hfemVTX0dGOXpya196a3R0OVQ0YTZ4TnlENm5PTlhJWHRqWDB1dG8?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Visa Stock Slips After Ackman Reveals New Payment Bet",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Pershing Square's new Visa position adds a prominent long-term investor, but the shares surrendered part of their disclo...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/visa-stock-slips-ackman-reveals-204441833.html"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Should You Buy, Sell or Hold PayPal Stock After a 36.1% 3-Month Rise?",
    "type": "NEWS",
    "remark": "News via Zacks — PYPL's 36.1% surge in three months reflects TPV and Venmo growth, but weak checkout growth and fierce competition raise ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/buy-sell-hold-paypal-stock-163500698.html"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Can Visa Direct Give Visa's Growth Story a New Direction?",
    "type": "NEWS",
    "remark": "News via Zacks — Visa Direct's 21% transaction growth and expansion into cross-border and stablecoin use cases could reshape V's growth s...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/visa-direct-visas-growth-story-155700036.html"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Billionaire Bill Ackman's Hedge Fund Just Bought These 2 Financial Stocks That Warren Buffett-Led Berkshire Hathaway Sold in Q1. Here's What History Says Investors Should Do.",
    "type": "NEWS",
    "remark": "News via Motley Fool — Even among high-powered investment experts, one man's trash can be another man's treasure....",
    "url": "https://www.fool.com/investing/2026/08/17/billionaire-bill-ackman-warren-buffett-berkshire/"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Gerber Warns Strategy’s Bitcoin Leverage Could Trigger a Selloff",
    "type": "NEWS",
    "remark": "News via Cryptonews — In Bitcoin news today, Ross Gerber, CEO of Gerber Kawasaki Wealth and Investment Management, argued this week that gold ...",
    "url": "https://cryptonews.com/news/bitcoin-news-neutility-strategy-leverage/"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "ChatGPT and Billionaire Bill Ackman Agree on Visa (V)",
    "type": "NEWS",
    "remark": "News via Insider Monkey — According to Rallies Arena, a public tracker that gives AI models money and watches how they invest it, Visa (NYSE:V) is...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/chatgpt-billionaire-bill-ackman-agree-133636224.html"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Ackman’s Biggest Portfolio Overhaul in Years Includes a Return to Netflix",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Bill Ackman once fled Netflix at a loss, so his decision to buy back in now raises a pointed question: does he see a gen...",
    "url": "https://247wallst.com/investing/2026/08/17/ackmans-biggest-portfolio-overhaul-in-years-includes-a-return-to-netflix/"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Bill Ackman lost $400M dumping Netflix — now says it ‘won the streaming wars.’ Should you rebuy a stock that burned you?",
    "type": "NEWS",
    "remark": "News via Moneywise — Here's what changed....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bill-ackman-lost-400m-dumping-101500398.html"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Visa’s Agentic Ready Program Moves Issuer-Layer Readiness From Theory to Production",
    "type": "NEWS",
    "remark": "News via Forkast News — The July 2, 2026, live agentic payment transaction in Germany—executed by Worldline, ING, and Visa—served as a definitiv...",
    "url": "https://finance.yahoo.com/technology/ai/articles/visa-agentic-ready-program-moves-011957911.html"
  },
  {
    "stock": "V",
    "date": "2026-08-16",
    "event": "More Than 30% of Americans 80 and Older Still Carry Mortgage Debt. The Number Climbs to 41% for Those 65 to 79, Visa Says",
    "type": "NEWS",
    "remark": "News via Benzinga — For many Americans, retirement was once expected to come with the major financial milestone of owning a home free and cl...",
    "url": "https://finance.yahoo.com/real-estate/articles/more-30-americans-80-older-163153780.html"
  },
  {
    "stock": "V",
    "date": "2026-08-16",
    "event": "Visa (V) Drew Fresh Interest From Bill Ackman’s Pershing Square",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/visa-v-drew-fresh-interest-120853703.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-15",
    "event": "3 of Bill Ackman's New Stock Picks Are Interesting: S&P Global Trades 28% Below Its High While Visa and Mastercard Sit Near Theirs",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/15/bill-ackmans-new-stock-picks-are-interesting-sp-gl/?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-16",
    "event": "Billionaire Bill Ackman doubles down on these stocks in Q2",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/investing/stocks/billionaire-bill-ackman-doubles-down-on-these-stocks-uber-microsoft-amazon-q2?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "FINBOA Introduces Recovery Assist to Streamline Payment Dispute Resolution Through Visa Verifi™ CDRN®",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/finboa-introduces-recovery-assist-streamline-142500584.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Visa (NYSE:V) Stock Price Down 1.4% - Here's Why - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNVjh6ZUpmWXNyQ1p5RUdfUXNEcG5JelJCUTBjOEhXaXFNZEdkVzJBRWJSeVF5T1JkV0ZKN25hUUtiTXRzZDhXQk5XNmgtcHBIWkNldmZvLUpiRUlhdXMzQlloNEYxUmx2RkZ3THlzTE5ERkI5SGI3UUpsbDhRTjhpcTJsSUJiYk1NM1JWNTFPLVN0djRodUdBMVpB?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "ChatGPT and Billionaire Bill Ackman Agree on Visa (V) - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOcEE2cjBEQjZEWXI4WHEtV0lxVkFNZ2JlY3Roa0ZBOFpsWHMwTFdYR3JUUkJOemFEVVhMTktzVVdKXzh2YzZBQ25jNFY3TTZCWWozR2J2ZVFZMzlqclBMTWcwejlTQVJPamhNc1FOWVdYdzRFVy03RGIxM0k0dlBvby1QNjdfbkJmZml2Z0t5WnBjc3RNeU9JTkVnUDJsaUlsS2hZSQ?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-14",
    "event": "Visa Inc (V) Stock Price, Quote, News & History - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiR0FVX3lxTE5rQlJtQmp1RkZ6ejh3YlctN01HWkdsaVdFSjNkTi1nckthYjVURzlKOXpFUXJtT004NHBEV3dwbTlVU3FkZnFR?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-11",
    "event": "Visa (V) Stock Trades At A Premium Despite Fair Value Upside - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxNRkprQ3g4NkxkSkhmaGdtVHZVM1ZUeUl2SzlwOE9ObU9OOER2LVc1bVFuNHg2SFhaSzRBd1p1OEl4S05aZTNXalh2UVlyaUVuTGxSV3lkSnJSdTdfVnpaU18ya1dVeW9GOEtEeURWZEo3cFhqcTB2OFRCVjJBdWFnVERvZUhMVDBTTmdaZzNQa3BBSVUxZ1JkOGIxVTgwdm12Uzg1dnhCckV3X2NkNnNHaHljRWg3NVJnV3FlcW9LU1hLSHUwc2VVVlJR0gHPAUFVX3lxTE1qdUlvOW9xeUN3d0VvUTNmNEEtMk9YSl8yTlZDMnNHV1B3QW9GbTd0ZDhISEk4bURyUGtuOS1iLVpEXzN2bGRUdUEzTnl3MFZLVmU2ZDMxUjBIcFpNR0ZFZEZ1OEU5S0M0SnlOYVlFYVh3MVFMMTc1YlhzcTdTRzJxUktRdVJOcGVXS3VaX1EzQUVZYVdiV2NsWWl1MFJma2I2SUVxYUJpckJDeWdBVWZtOEtmOE5hdUo4dlJ1Z3p2T2VVMjdZQW9kMVpPbnBOdw?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-16",
    "event": "CoreWeave vs Nebius: Both Companies Reported Strong Earnings, But Here’s the Stock You Should Buy - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQZTlVZDBkbUpRUlVZYWdFbF9rU0VyYkRLSVFjN0JFMTktNUtvU0s1T3ZacFBaOWIxanRzb3NGZ3lFU0ZpYW10NFI5ZFJlMEhpdWx1YzlHeDVfdWZ3dTlqNkpqaGlVQVdJSTU2dEZncUFwenBVMW94dkZJSjlWTzE0Rm1Ia182TXE4VUx3bDNEbVE0N2JPX1NDeG5nWDNQalB4TWVNZHBPcFBiT3ZDa1BOQ2lKa1RYY1VFOXYtXzJKWHoxMWFCRFZheld2bmJqUXJ1a1NUTA?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-07-13",
    "event": "Why Visa (V) Stock Is Up Today - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQTWxGa2xOcWNIeHFyOEZ0dG9VbG5UMXR2UTNKUkg5ejRaYXI5Z0N4cDZDVS1idXBzR28xSWpQQmJLQTl4amxsVW1KRjhBLXpXbzRjdzlxYkF4dk9mbmE5Yl8tVEh5ZXM3QTF6cXhiM1RPRDRpZmVDX0ZsclVic0FyWjE4OWRBZVRXclYtc1pB?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-13",
    "event": "Visa Inc (V) Stock Price, Trades & News - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOTzVtTTYxSHlHbjRJaHE4WHNsU2xNTFVpR1JPZGt2RWpIWXQwazFjblBpbTVDY21PcF9DVERkOHFMOUhIc0dZOWRmSDB2Q2szZm1NZ21TTVJCUjlvNkZXODJUXzd3ckF0VDNEV3lVaGQzYWYtb3RPZVNTNUpTNGxDMWhTLTdSSEhmODEzSjBsTUZzUQ?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-15",
    "event": "Cisco vs. Broadcom: One Stock Looks Like the Better AI Play - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQbW05NUdzTm85VkpRd2lyV1lLZHZqZmhDN3BjWmJ4MkhyM0JjX0lQandYSEZUZW84WDFBazhMX05EYV9YNl9pYmlzbkljM3lkOVZjVEpCcENLZDVCekpWQ0VsU19XMXltY1RTX3BtRVJYLVFJSzBkMXhZSkdGRm9YbWlqTTFjZDVSTVBpTDdvUGowYXRIVFE?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-05-06",
    "event": "How Much Upside Can V Stock Deliver? - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOQzR6Tmhxel8wdi1EeXRpUGpaNnVkWDRURFJjaE5qMmd1U21rb0h0M1EtQ0hNOW5nVGhBM1Z4NzlTempsTktaaWItVHNaMGJLM1U1bmV4UmpOUXpuaV9JT0QzM2t1a216WGRKQkt3YVk0aW9TQ3RONE93TVFuU0VrWkFWZHk1YVEyeFlVZVVDbWFCWFN2RV80UQ?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-16",
    "event": "Thunder Bridge Capital Partners V (TBCVU) Stock Price, News & Analysis - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFBscmZHdnFIS0RSbzlOZ2h2QkU0M1lIQUJEb3RDZ0dYN2cwVlhSdi0wOHFvcUhpN0haS1lyTDVKdjN1UE43eVFwS092T25mQ216VEp2a0xLQzdzWkU?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-16",
    "event": "Broadcom vs. AMD: Which AI Chip Stock Is the Better Buy? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNYzNObFhMMlM5V213bmNfN19FYU01S1h1YU9GblowT1NlNTJHbVRvX2hwQTVORkhzYThYOW5CamNYUDF0eFkzN3NuZDd5U3JRTWdYR3F5YXJSY3NhdnU5djZYSkM4ZHVTR3QtcUhLS3lmUnluc1B0SE41Q0lYa2JjVUhfd2d3cFRzLTFlWHk4S3E?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-06-18",
    "event": "Visa (V) Stock After Recent Pullback Is The Market Price Missing The Story - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOakNaTnVCQTdaVUdoOU9WLVlhRlduRl9VbHBRV09Uc2xCcE9oNHVpY1l2cEE3SXRkTC1HTmhZU3M5WnFGVmw5Rk1XY2FyMlJHd0lGVWkzT1p6RkNxazA4SjVBdlJFYkNzYzM0aHpuWjhDc2QxZFk2ZDRnRUFSRDRhZDVERzF0RGxDZXNtN0E3aVNVLVlUTXdtcw?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-07-31",
    "event": "Visa (V) Stock Sees Modest Fair Value Lift After Strong Q3 Analyst Revisions - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPVjU3QnZnSnN3TGlLd0ZPeFNJVWFzaHZnRFhXYTBfeVZUR245eGZhb2JPRktIZk9pS1ctVXFDQWtOMGJYUS1Fbm1EdWhtSmpsS0ZrY1cwVTJYd2F4WVhudEptWW5qbVUtbVRWOUdjSUZlR0xvdU5tTzYyTVdvS0RsVHpNUUNmMmRnbUN4N3JJU2dxUUU?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-06-27",
    "event": "Visa (V) Stock Faces Mixed Analyst Target Changes As Valuation Views Diverge - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOdDJQaGs2bTd4UFBHeEd0eG10X0pGT1lLeEJJcWZzRDJDMUFlbFY3emVQcGNBVlJMSmNta1pQNmE5MlJXSFpRTWlrWWNtZFFycF84N2Vtd194ZS03WW9ycjJlRW1Wal9rbTEwSEpvZUdzOFJPaUNBVUY3WE91LWx6RGZxUmpTRURmbGdyd3VQWXhSSVU?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-06-11",
    "event": "Visa (V) Stock Drops Despite Market Gains: Important Facts to Note - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOTURYTWxBNVQ2aERNUjBxWVpWR3lxcllxOXJia1FuVnRnZ0tVMmpucnc4V3UwX0RPVThKdXg5RE54N1N4NFpPR3VHakRSaFVGRDl1VUNjUWRRQS1HVGxGSjIxUzR5dnlTMWpwT3VJeFdZRVd2Sm03SkR1MFBTYkMxRjZ6eENLREpOVUlIcm1uME5FSy0wTEE?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-05-17",
    "event": "Truist Raises PT on Visa (V) Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQc2ZnOEtGa0RBbFVtV2xkelVqdkEySUNBNUhLcWxMeTNGVl9ETUtrVm9RYlV6S3FDVV92d0E3aFprMU81V0ZLYnpoUVlYT0p5UkhvRXJxTjlEV3Vmd1hFMWFoNlM3enFTVTBsU29ULXZ4clU4dTVJMWI4Y2EwOVlLdzU3RlRrWHZVdGJ0WWl3TEN5UQ?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-03",
    "event": "Visa (V) Stock May Be Fully Priced On AI Driven Job Cuts - Yahoo Finance Singapore",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5Hdk5wSmo2dUgyeXFRTl94U1hBR0dfX0FjRzQ5OG5wQ1Q1ekViSGdOT2Z6ckNTRmV2eDVWZXJoS3BSbWlTUHRubnJrNWtxV212Wm4zNmo5UlppQ1puR1Vzb0FzWGxjYVpuQV9nZkNTbHZmMDNEM3gwS1llZw?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-07-16",
    "event": "Visa (V) Stock May Trade At A Discount To Fair Value Yet A Premium To Earnings - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQVnVzbXE1VFVJZVA1ZzVybWJMQS1tTUhJUzQ0Ri04WmJLbml5dzd4WmVMRmFHRmFXNkxFM0xPRW1lSHZNT3lJRGZNb1VTVzlVdEdqaC1HMVR2XzZ6MllzRDJjb25NMzJFWndFZUdtSGZPZU01aFV0cEF2NTFxNmFRZmFRV3ZBMTlRLXFOaGlVNlQ?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-03-23",
    "event": "Morgan Stanley Keeps Buy Rating on Visa (V) Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPT1JMMm5pT2c5WmhlS3NfTTM0ZmI2Uk53MFNnLURpcjUxb2NQd0pQQkZkUTJqeXpBRGhpWFZhOUh0RFBwYWdudTU3b19xVmVJbXVISlFibjllYjJoR0xURHhObERxVE54QmRCMkZwNWk5SERFdTRsR21leHJLYUFfaERXdThxWHFFU0xZNC10ZGZpVzl3NzMyWW54Zzc?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-06-17",
    "event": "Visa Stock (V) Opinions on Technical Breakouts and Market Valuations - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPLXh0MkxBLU56aXNabnBWS2UzZm5uaktYM2UwOFBHaGtIRnVqNkdYbjJ5RV84T0JQMGw1bklmQ2Z3RWo2ZWFWQzlHUGNjRTdzclR1OWpPODBvTW5PTlp2M1hfTWp3bmI0MTJzcXVRVklBa1BWN3FTUWRONUN4aVNKVjhFWHFoaVZ5TWVremFZRC1MYXdxSlA5Mm1FcXBkRmEyWnBiQXVlMXk?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-06",
    "event": "Fund Update: New $162.3M $V Stock Position Opened by Alberta Investment Management Corp - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNTGctbDh4bGdWMEVqR0h4ZFp6RzlrenMzWXpoRzdEb0lUcnZCakdSMURhLTVFRW90UTI2Ry00SVRha0owb3Y1T2hkTjc4WXVXQzNDZTNsdDNKMUpnOWFyOGRxaDB0dko4TGx3OHV0MWZKUEtucGhvRUpyeFJCSGl5Z2JXMWhBRmpGZjM4VW4temoxN1JDYWc?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-05-05",
    "event": "V Stock: 3 Impending Events That Could Invalidate the Thesis - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPWC1jNjlEUXpsOE4tVzRuS28xc1NlRk9nV3JpekREdnBxZGVCTkk5bzJ3RnVtX3hlOWVkQVFVSWJJcmhQSWowb2dfN3FOcWllYnUwaUZibU54Y0JoMHVrU19QVzh1Si1xVlZ1VHFoNjlYNDREY0RwX1R6YUdVazI2ZDFqV093N3hzUWRVYkYzOVZOdHI3Vks0MTNvLXdHWEtEanhqYk85aGZfWU16d1VBaXJkbnBfVE5UbkE?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-01-13",
    "event": "Why Visa (V) Stock Is Trading Lower Today - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNb2p2SEluM0NfM3Y1TXJpZkx2TWpfbzNxRllyZzBZaHd3X1hjdTVsa0UtTFhabGZ5NEJFOHplNjVhVGVrRGVocVVmZXFqbHFJS3dJOWd1OWJnaE9RNmtKMUpncVlQVHNIOHZwelhfandVbnlrMmNLb2pGckd6Zl9zTlBCSnZndndnVWUwcHRlZDgwTzdtVjdXNDFlM1I?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-07-30",
    "event": "Visa (V) Stock Faces Margin Squeeze Despite Strong Revenue Growth - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNWlB1UTZJT2ltdjk3M1lob3FPSlprQnhGZkNFdndjQWxVWWs0UWtlbXdUMDVnMXp5Q1AyNlVOa3RnNHFrd0lYdlBFMmEyaVhBUzIwOENqbndubVBZX05TbnJUR2hBMXlnNl9ScHpFY1dRX2d0N3UwRnpDTmtDUGFvSWZKTmllZkNBckJvVjRTMXNGV25iMzdWMmtQMDFFRTJQMFQ4aEdqS1pLdElGRUNYWlhXc3BvWnd2NTBiRVJKdUVsRnBReDZIWkM2ZUnSAdIBQVVfeXFMT3JQUG9VZV94THB4cXhIZDVRTGJwUkFuQngzQ2tUaXBta014LTJOT3JpZW9VQWU1NzNuUTIxdmNYemRKUVJjSmJKOUFscS1zSG96cFlLUUFBNlBleTVXel9IRDZwTEg5eVZ0cy1mbkVUN18zSVNuYUo4RHpzSUdCWFdXcHNRdGtzbHdtXzFyM1ZOc1RncHduX2dwZTZQdVhQaGpqOVJMTThvVG1WOVh4YWhCSVQzZW1Wd1owOU1kVjlfZ3hoTHVZakZDckhGTGZWb1FR?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-01-24",
    "event": "High Margins, 44% Discount: Buy Visa Stock Now - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQVEtCbjBaWlQ4XzdqZkhwTGw1aDI5aWtwZi1WMEozVjlFNTZLc1dMYmZETEFjVkgtUEpONHYxR0Q2Vk5XVGNRQ0FtdDJWQ1BITVVKdHRGODNJWkxkLU1mdTlpLWJwSkE0LVBYNmJZM1ZXZGp4SXNIUE96ZlJxMUIzWTZ1ZzRjNy1ZQUZManJ1eEtyWkxSSFNVanZiSlNFUW9EeUx3?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Tech searches for gains as stocks teeter at the open: AlphaCheck",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — Stocks got off to a quiet start a day after the S&P 500 hit a record high, while bitcoin fell....",
    "url": "https://finance.yahoo.com/markets/article/tech-searches-for-gains-as-stocks-teeter-at-the-open-alphacheck-135155576.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Billionaire Masayoshi Son  Put 66% of His $18 Billion US Portfolio Into 1 Stock",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Masayoshi Son just placed an enormous bet on a single American chipmaker, and the move has already turned against him on...",
    "url": "https://247wallst.com/investing/2026/08/17/billionaire-masayoshi-son-put-66-of-its-18-billion-us-portfolio-into-1-stock/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Billionaire Masayoshi Son  Put 66% of Its $18 Billion US Portfolio Into 1 Stock",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Masayoshi Son just placed an enormous single-stock bet inside SoftBank's US portfolio, and the company he chose sits at ...",
    "url": "https://247wallst.com/investing/2026/08/17/billionaire-masayoshi-son-put-66-of-its-18-billion-us-portfolio-into-1-stock/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Sector Update: Tech Stocks Rise Late Afternoon",
    "type": "NEWS",
    "remark": "News via MT Newswires — Tech stocks were higher late Monday afternoon, with the State Street Technology Select Sector SPDR E...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/sector-tech-stocks-rise-afternoon-195417941.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Stanley Druckenmiller Opens Positions in Hut 8, Riot Platforms And Bitdeer",
    "type": "NEWS",
    "remark": "News via CryptoProwl — Famed investor Stanley Druckenmiller has taken a shine to cryptocurrency miners turned artificial intelligence (A.I......",
    "url": "https://www.cryptoprowl.com/releases/stanley-druckenmiller-opens-positions-in-hut-8-riot-platforms-and-bitdeer-6450"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Top Midday Gainers",
    "type": "NEWS",
    "remark": "News via MT Newswires — OmniAb (OABI) unveiled a partnership with Eli Lilly (LLY) on a new ion-channel drug discovery progra...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/top-midday-gainers-174029108.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Sector Update: Tech Stocks Rise Monday Afternoon",
    "type": "NEWS",
    "remark": "News via MT Newswires — Tech stocks were higher Monday afternoon, with the State Street Technology Select Sector SPDR ETF (X...",
    "url": "https://finance.yahoo.com/technology/articles/sector-tech-stocks-rise-monday-173150965.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Druckenmiller dumps Micron, Intel, buys Amazon in Q2 2026",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://qz.com/druckenmiller-duquesne-micron-intel-amazon-081726?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Cerebras Shares Skyrocket Monday. Intel Gains While AMD Is Down Slightly",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/17/cerebras-shares-skyrocket-monday-intel-gains-while-amd-is-down-slightly/?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "What Quadrupled Intel Stock Was Not Foundry Customers",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/611684/what-quadrupled-intel-stock-was-not-foundry-customers/2026-08-17?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Intel’s secondary share sale explained",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/investing/stocks/intels-secondary-share-sale-explained?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "AI Networking Stocks Are Rallying on Monday. Marvell Up 8%, Credo Up 8%, Ciena Joins the Move",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/17/ai-networking-stocks-are-rallying-on-monday-marvell-up-8-credo-up-8-ciena-joins-the-move/?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "13F Season: Where Wall Street's Smart Money is Betting",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/13f-season-where-wall-streets-155500114.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Co-Packaged Optics in the AI Data Center: 10-Year Market Forecast and Strategic Analysis: Evaluating Silicon Photonics, Switch ASICs, and Strategies of Nvidia, Broadcom, Intel, and Marvell",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/co-packaged-optics-ai-data-144300820.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Stocks making the biggest moves premarket: Alibaba, Intel, Sandisk & more - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOaE10T1RRaEZDZmtMX204ZmtaNUNfWVJjdmVWdldSaVFicm5MRE00M2lRTm5ydzBOTFNtWXB6TWdCc3M1T1k4MENSa0FyUWtHb3hhTzQ4Q2NBZ1RKN2NyMWR2YV94QTFGV2FFcGFPMWp0em5XUW1SUVh6QXo1emhSTTNyOVVTSzVaODY0U3NQUnptMm4tbTY2Uw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-15",
    "event": "CEO Lip Bu-Tan Just Gave Intel a $10 Million Vote of Confidence - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPRjRGdVN2MkZVTUl2TjRhM3RNellCemotZUlrLU9wdThGcFdnczdJWnRIcGM4bFkyTE9pdjR0b21uVkF4T1YyOFRkelBvTlZoZGJZVllKUmlENDJrdW0tTHVNcFM4MHRoZ2ZLeE1PVjdLcWw5R3RUQnJoMjN0R1RyTDZ5bVBoR3Q3bm1LRA?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "What Quadrupled Intel Stock Was Not Foundry Customers - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPRnpjU3VPQ0tBSTFNbFFqaVlsQ05nLXFQNF9ldUJMOUdMWEFhNWl3eTR1YXp1dlFhOEloeFBiZFZwd2w0cjE4ZEdYeVpaLXRjOWdHWUY0dHg4djZhaW5Ea0hNcXA2am5zQllYa3JjRVNqSDJfZG5kV3VaR2tnWUdpUnN1bkljUzYwZ0daN1hEM0c1ck40TUpNYWRacW1hazlSb2RZOWFqN1h4a0dYUzZaaG1GLVo?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "What's Going On With Intel Stock Monday? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPOTFxSFR6WmVBQzNLZGhNaktEVDNpTW5lRlJjaXlYeHFubEZtRmtGRDVrMEEtWkhjMFBrS19fT1NkaVRPYVlVTkNWNUdPWHhkcEdhV2pjRDZXVUtKYUxMM29OZktTRFR0dzdCUUZMRWhCLVd2bTBOdm5nSVJFNzJiaGxsbTBkX0pzVXVJT3BzUFpCODg5XzA3TQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Intel Stock (NASDAQ:INTC) Notches Up, But What Caused the Big Surge? - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNcHZaN3ZaRzAxYTJKeTRPcjB1a3NDaFhGYm5PRl9neFNLS2dqZHlVelg3RkVBcXNUeUh2RVhNQkV1bGpaTmpLUWdHTjdSb3lCSXNSNURTdEVqVE5tbWdybjllejUtaTJhb1B3TGd2UW1tUmRWVUR4azBVOHpLQ2ZhRUpwczVUbDdhMEM5X2hPN3NFNGxCRWdIcg?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Billionaire Stanley Druckenmiller Dumped Micron and Intel, and More Than 11X'd Duquesne Family Office's Stake in an AI Pioneer - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOQURpaFZfQ2hhN25LZ1Bod0ppSTdlbV9ETTJkcXpVZGhCVWh4S0NTaHdocWJKU0UxZFdDMzBnX1V2TXNBZHpQY3VZWUJlVHJDRWtVc2tuRWg5WXZsT0o2Q2dqUFNkMDRsbGpxV0JVNHBqS2d1N25NNmE4eTU2ME9QTEU3cVdwR1U3aU1DZDBfNl9DR2NQREJNSQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "Intel Stock’s Real Opportunity Is Demand It Cannot Yet Ship - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQc3dHa3oyOF9obnhLbHZLRTF6T254bnRkUzlZNkgyUWEzS0JkN2VpNHgxX3NvYlBSVmt6T0NQSzBYWnRGdWFoYm44VDVibkhvQ2xsMUhFZ0ZSc3d1T25hM3lCZ20xdXgybVdUX3FhQzVobjFpRU93a2luZXc3NGFZODNfd2VVUUZDdjU4ck55TmRCUXp1WjY3ZVR2b0doc1ZnT05qZVZmeVgxUG9p?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "Here’s Insiders Fund’s Thesis on Intel Corp. (INTC) - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPTzgxWnlfQ0RNbVhUak1tUTNIdWprcUw2Y0hhVFQ4bndPemVhMU53R1JXZHZpc2dJZlB6VmRES1I0UlRiNF9oU3NNaUp0VzZiYmtWdUFGRzVESHJaQVR6UjRJNUV5aGxaZnd2Vm1QdjBPZG9tOFRjaUl0YUpqMXNPUlJRQ3Rpck4xT2U5d2d5V2NQbkRqd0NEUWhfTWs?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Intel CEO Buys $10M in Shares in Upsized Offering – What This Means for Investors - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPVXRTMUQ0alFDNDVaVG9oUTRyZ2ZTNFRoX3RXcEs5ZTk4ZlpKZ045bFNuRlJFMXZjVDd1RVFPNm40a3NmTUNMcmFfRGR4N0dGZ3p2d25Ha0VfOGFIcXFzYnd2SjNXMnZxal9rTnprclQ3MnI3alJpSjNrTG1ZLUxlTy0tNGNZSGRHSExhUENrcVRCRVBGVl93VEJ1NXZlQVg0ME1xTHZCUFBoV0JC?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Intel’s $23 Billion Capital Raise May Have a Silver Lining for INTC Stock - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQS3M0OFZucjBWYUwwdWZxTU5mYXhvT0pjZUVJVjZydHY4X3kwWkdtMThXbGVLejB3SllhT3MzV0ZVa25ENW5oY0JNRnFiVWRibmplNldUVURVN2MzSC05cGdOR0ZDVl9uQnZRSndUWEt1TWMxcU1td2VPZm5QRlEySm9uNEF0ZWxQc3ZpQXZVSTVNZi1hUU1xTllpNEFSVHlReDNtbUZCZDJkMkJFaU8xSzdzeGZJdw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Billionaire Masayoshi Son Put 66% of His $18 Billion US Portfolio Into 1 Stock - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxPZzRZYVZmUVdWMzIzbEU3UUt6bU9tekNSRUtFV25nQ3pKU295VHF4RTBiOVJWRTNNSVM2X09xYi1fME1OOHZwRzVlblhzSTIzRFFqWjA3R1h0UkF1VFJHMVRRTm1uUXl2Vm9zYzZ3RnJZUDZPUEswcHEzeTlSMmhCeEgxQ1RfQmdyZUNkY3VUQVVvV3I2aFlCOGF3d1g1c0RHVENEQWdTd1plTloyaTZ0UHp1cm5Hc3VLdnhkNA?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Intel’s Chart Puts Out Some Bullish Signals as CEO Stocks Up - TheStreet Pro",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQbS02TmtaM0ZYY0dRa1hISGUwSHlUTU5BcEYzNjJZTnlIaGhwVWFVdUd5emRCdllnSFhNdGtyZVRsc3VucW5xYXRkS25nXzJUT0dsQjV3X3Myamt5cHZBVlZsdG5mSVFMRklEOEllSWlyNWVxNm04SlluUDJoRHBKZUstbFFsd25vWHF3QUhONkdacVFPeFk5cjJKZHhBZw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-10",
    "event": "Intel upsizes stock offering to $20 billion at $95 per share as AI demand accelerates - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9wLUxnRncxa2pNdGoxaFhBVnZzNU40Qks5MDFnSFJ5eHAzdWo0RGluXzctenFpbmREckVJQkFhTHJMREdNbnZaeDNtYnNDQnBxckd3bGZ2Qm1xbU9ZaW01bkQwNnRvdUFRUUVjYXpyT2JxSjjSAXhBVV95cUxOUFZTSFNOX3hPb2lHTzhMMXdESmV6anV2SlNObC1wZmNDM3RmUmtVdXdfMmpETzkxTmVROG5Idy00V1Q1UEt4b1VEaS1aZEdRRXBYNmZKbGotSU0yNkNPMDJZcHZsU29zMTdWekNHSUNWT2lBellmMlc?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "QUICK SPARK: Intel Stock Rises After CEO Spends $10 Million on Shares - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQSktRV0llRU83bDV1b285MEw2VGJSZlJZZndhNkRHT2NpOC1KYXhmUlhTWE5iWjV6RzhYaVdtWGExRUN5UThCampqZ0Q5RE1ad21nQklQQm40eU03eWlsbXRQTXdxR29lNVVHam9reXZtb19PeDlpUlN4VllRRXhrZVVVd21NRTFnRDhscDIyVjhSS3RreW5MZmtULTRVMS1WYmpISTlFU3V4cmxUT0lDUDFRRHdpLW90YU9GeFVmZlNfeDQw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-15",
    "event": "INTC Stock Still A Buy After 230% Rally This Year? Jim Cramer Sees More Upside Ahead For Intel - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxQQnZod2lYMUNWUE5IUlJrMy1NeU9GTHZObmFJSGxuRnAySlVGZDRZV3FtWlN4VlZDdXdFM19xZHEwdkh2akJwOHIwY3BOWU5sTkkyUFVNbjhyZjVzTVpLR0dVWjNNLVEwRUxBYWFLcVdWSUVneXJIVVExUTlrNVZVb0RVRzhTdUd0YkM3bFcyUkVaM0hUMXBtUDhPSUx6STVNNEtRckE0Slh5cjZrQlcwbk5pLVJGT2RYNWZBS0xIZDh6eElZZGxaQkZEZUxndVd4ZmNSQjNuQTE2akxzYTFLZFdyY0pISXZId1gteU5oNA?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Intel (INTC), Why Is It Back In The Spotlight? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOOWdJTThKVmVZU2pYQmVaZGlIaFRvQjlkd0NwbW1HRjJhWVYzdUIwOFhVcjVIRlM0bEVrcUJBV3VHSmlaaHVHT0lVcFIzcXFhTVllQk40b1pqWDR0eDJOLWNPbmh4WE5IZUZPUGhqS1V3VDctR1FxbTgwbVFoMTZKeU9HSkpwMnlmU3M5aXdtbi1vZDJncmhXYnViazdVMFFSWG1ucURMRlVVY3RFaVdVYk9B0gG3AUFVX3lxTE5leU1qTHQ0dlhJWjV5N3gwSDJsTVpnWlhhYlZMS3hDNGdrcnNLdG9VbmFNRFlZOXhkLWpIM0Q3LWdEVFN0QjR6TDFyd3BtSTRlR1lWMV9yblgtSWdWbkhxV1JDOGZwcTlYbUtvSzNWRzZsQzNXbjF4SHVfUFBWMTBaLXRWLThGb19LMkZhd3NOc1piUjNzd3pQYVVETDF1S2RTcjBEQXVKN3hWbHVnMmZWTzkxNmR4TQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Which stocks are most active on Monday? - ChartMill",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxNS2pKaVhXUU1kSF9OSnFHSWtNNjBlWmFvUmFlb2ZLeWJZY1NvUmZwVE0tZ2VMVnhtVEIwSHRjZzQ3S3VhbTFUSlB4WVZsV2xrZW90ZDhXZWtkYngyaGFodFkwMGJ0cFZieXFraU1CZGFxVTFrY3dJbFN1MjJoMElBTEJTdGJ2T1NWSXhkN0JidVRpZmtR?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "iA Global Asset Management Inc. Buys 166,264 Shares of Intel Corporation $INTC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxOQkVmOGE5LW1sNHN5UDV2bkdyV05NRlJfUXBxMHhoOVVpY21LaUtxSlVUdGhhblhvel9yNDJwUHg4d05kYVBEaE5NUlB2enI0aVl1cXpidVZLLUplY3FBaXZTWHRxZWxVWlZtTy1SdkRKUzJycmZxU1RaSW9xZE9DLTlVU0R6dGQtb1JSM2FSaWVvUklMM0NwS1lMdDlMazRmaTJ4dC1LbW5SN3NLSDdVZlBmdUhfQlgwZnpHalctTjdFVFhLRmF3dHNYMVI2N2FLQ3c?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-15",
    "event": "Nvidia turns $5B Intel stock bet into $30B windfall — filing reveals new $21B SpaceX stake and complete exit from Arm stock - Tom's Hardware",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi_wFBVV95cUxQSGFqNXdqempLcmlwSU1WNVY3MUxUa09HMmV5d1hLaEhzSG9MLWxVNURVOWxzTXJadVNpWVA1RnZUcnd0ZFZBU2V1TWNqVUZYaEhMbWk5TEdLNjZCMUxzUVRHc09DZkxHeFJENGIzOUR0UnNyT2FEcHN0eS1lbjRnTzU4dzJ0M1VHV1ZhSktCdk1vTmIxZ0F6VkhjUDc3ZG1mVVA1T042RDhfampndGdpNy0zX1NON3RrVXB3b0cwZ0hocTdJbjdpbzcxZ3YyTHFDZVlJRnhHU1pBMHFnV3ZKZUQyM0xnemFMbVYxRUw4OGZaeVRXYmYzOFRjVWhMVFk?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Intel’s secondary share sale explained - Yahoo Finance Singapore",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOSV9tdi1aX1Z5SDdqa3Q0dGJ4bUNBenQ3T1FRcXBQUUVtb25xbEFwa25xdW1WaFhQaC1Kd3RIUDVNNFF2WGYtc2N0VTNLaTZRZ0drV2NCY2pnNFV1MHBXMHh0dVVKWkxNejNiaWFrMFU5ZTA0ejJTaHh6M0UtcGRXZk9BblpUVy1pMWRtT3ZB?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Cerebras Shares Skyrocket Monday. Intel Gains While AMD Is Down Slightly - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxONFFOZ0RRMDA2RWJFRkplMFZfVUpMRHltdWZTNUtqZ2owcllHZVhOWGFkYm5PZWljUnM4MTZqMEFxS3hVeE9jZ1lVbFN3R25sVFFQWmswY19oV1kwQ0EwaVFoeTVFZWxyYW1rYlFiV0N5ZklxQl8ycFppQ1J0OXpDS0lKby1uNU1TQUJGcTY0SlAzU05Gbks4SGoxbWlWanVESGZCemdCQ1VLV2poMGticnBLaXJkQQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Intel Corporation $INTC Shares Sold by Channing Capital Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxNN2RTTmUwek8tUzA2bHlIRkhrTldPMlp2NHZQVE5QM1U5LS1BM2pvS2dVamNkd3lpT1BYM21HcEhQcnVwVWM4dnU0dlRRVXRTOWY4c3lSeWFWRThhUWJvZkFOQVVMZjNsM1JDWmROU0kxeXJPTEpERUVDNnBlWXRodjdwWXh5UTVWeENrX19lMmRpN2dGR1dkM1VWNHBPNHduaXZyQjZzVk5PeG1NUmlvTDdxMnVFSkZvc1RPM1gyQk5DMUlPSmx6RWdB?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "Intel Stock's Real Opportunity Is Demand It Cannot Yet Ship - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNbEpIbDgxZVItUVJOQlFSYTJCWWxIbnQzZVQxT0xMSVhnUVV3T3MwY3pBY1o0QmJ3ay1VeHhOb2lfVTdseGZRbEJRYnIzaXdrSDMweE8wSnBNQy1WRXVvVVBMRnV4LXNwQXppelRDeXV6VXZXMjY0bTROZ0w3WlpSUS1RNzNCbW5xcWJUeWZOM0ZwT3VxYnRUcDVPb21mRjVhWDEw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Keystone Financial Group Acquires 8,612 Shares of Intel Corporation $INTC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPWnJPUFYxcUZWXzRUb0x1a25WZko5cHZxeDR0aTlwQlNtdzZZaFMzYVVGMDRhYXdoT3BNZFdRb3Q1WlktUENINEdtR1JrVnVkZWUwYThQSWRJWG5OTTl2dFlDbUtGdjNsM0dKdHFtaG1BMk5jdEhxRzExLXZBdFI5NXdNRTdnbC1RRjRBcjJ6QnZGaVhaaU1Dai13RmdYa1dCZzFZeFNHMTBJZGFUWXN6YVE4TUpsWHJnTjRIYk05OFRXa1BENmJBUW1zaTY?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-17",
    "event": "Citi analysts downgrade SentinelOne, Netskope on valuation concerns",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- Analysts at Citi downgraded shares of SentinelOne and Netskope to Hold from Buy, saying the stocks have...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/citi-analysts-downgrade-sentinelone-netskope-122856077.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-17",
    "event": "Why Did CRWD, S, AEHR Stocks Hit 52-Week Highs Last Week?",
    "type": "NEWS",
    "remark": "News via Stocktwits — The stock rallies were fueled by bullish analyst targets, stronger demand expectations and AI-driven growth catalysts....",
    "url": "https://stocktwits.com/news-articles/markets/equity/why-did-crwd-s-aehr-stocks-hit-52-week-highs-last-week/cZo6o9eRJKi"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-16",
    "event": "2 Growth Stocks to Add to Your Roster and 1 We Avoid",
    "type": "NEWS",
    "remark": "News via StockStory — Growth is a hallmark of all great companies, but the laws of gravity eventually take hold. Those who rode the COVID boom...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/2-growth-stocks-add-roster-031700837.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-16",
    "event": "CrowdStrike Is One of My Largest Holdings and Trading Near Its All-Time High. Here's Why I'm Not Buying More Shares Right Now.",
    "type": "NEWS",
    "remark": "News via Motley Fool — The timing of an investment matters, even for great companies....",
    "url": "https://www.fool.com/investing/2026/08/15/crowdstrike-is-one-of-my-largest-holdings-and-trad/"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "CrowdStrike’s Expanded QuiltWorks AI Security Push Might Change The Case For Investing In CRWD",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — CrowdStrike recently expanded its Project QuiltWorks program to small and mid-sized businesses worldwide via major distr...",
    "url": "https://finance.yahoo.com/technology/ai/articles/crowdstrike-expanded-quiltworks-ai-security-231134189.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "CrowdStrike vs. IonQ: Which Technology Stock Is a Better Buy in 2026?",
    "type": "NEWS",
    "remark": "News via Motley Fool — One company is a profitable, growing leader in cybersecurity. The other is an early-stage quantum computing bet with eno...",
    "url": "https://www.fool.com/coverage/better-buy/2026/08/14/crowdstrike-vs-ionq-which-technology-stock-is-a-better-buy-in-2026/"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "Top Analyst Names Snowflake and CrowdStrike Among Top AI Software Picks",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Snowflake Gets Major RBC Vote of Confidence as Software Sentiment Rebounds...",
    "url": "https://finance.yahoo.com/technology/ai/articles/top-analyst-names-snowflake-crowdstrike-200115543.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "Major Software Providers Poised for Quarterly Beats Amid 'Bullish' Reseller Feedback, RBC Says",
    "type": "NEWS",
    "remark": "News via MT Newswires — Several major software companies are likely to top expectations for their upcoming quarterly financi...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/major-software-providers-poised-quarterly-194418720.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "Renaissance Nearly Triples Nvidia Stake, Slashes Micron",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The quant fund also exited AppLovin....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/renaissance-nearly-triples-nvidia-stake-172532360.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "Zscaler Increases CapEx: Can AI-Led Demand Justify Higher Spending?",
    "type": "NEWS",
    "remark": "News via Zacks — ZS ramps up capital expenditures to support AI security demand, even as higher infrastructure costs threaten near-term f...",
    "url": "https://finance.yahoo.com/technology/ai/articles/zscaler-increases-capex-ai-led-145300536.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "AI Security Operations Center (SOC) Market Surges to $47.07 billion at a CAGR 21.1% by 2031 | Report by MarketsandMarkets™",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/ai-security-operations-center-soc-144500073.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "Jim Cramer Admitted ‘Trimming’ Palo Alto & CrowdStrike Holdings For His Charitable Trust",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jim-cramer-admitted-trimming-palo-075043010.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-13",
    "event": "CrowdStrike Expands Project QuiltWorks to SMBs, Extending Frontier AI Risk Protection to Organizations of Every Size",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/small-business/articles/crowdstrike-expands-project-quiltworks-smbs-131100522.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-13",
    "event": "CrowdStrike Holdings (CRWD) Gains as Autonomous AI Agents Go Mainstream",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/crowdstrike-holdings-crwd-gains-autonomous-134148875.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-13",
    "event": "Why CrowdStrike Holdings (CRWD) Outpaced the Stock Market Today",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-crowdstrike-holdings-crwd-outpaced-214502723.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-13",
    "event": "1 Sensational Stock-Split Stock to Buy Right Now, and 1 to Avoid",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/13/1-stock-split-stock-buy-right-now-and-1-to-avoid/?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-17",
    "event": "CrowdStrike Could Plunge 30% After Earnings (NASDAQ:CRWD) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQOS1rQ0hRRk9Pb0NlR2JUX09sS21VVkstS3o2c1hrblJ2SHJWcVpwU3RHN0pYNVhCV0dMc2NXVDItT2dwQUJmZjA5R3RmblhWRTRBNGMxYmdiM0ozYWlkV2p4VEhxZnNrcFZKWVhqUHVqUzdRUW94ejdKdHhsR3hIdkZHbnJSaVJuNWpHYmZRVVhuanN4RkE?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-17",
    "event": "CrowdStrike hits 52-week high: Is CRWD stock a buy before Q2 earnings? - Investing.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQNUxZSE4yODJYTjhCV0N6YVpZOHFpS1RHM25vRm4xcVNPNmd1S1NZSEk4QURwLXptZXZDMDgxcWpRaTJCbXNFNVEwNzVDRzQtR2hqT1dua25SUnhYdTJyeXZxbHRMSFU5TnpjOGhmdGpUeXFvTWc3VFlLUmpMNWN5a2NSZWl0VktxUEJieWNzd3FOS19oYUFLNzNWTjQ5cEZGSDNSOTlXWjJnMXVWcVZxYTg4THQtOXpXX040RGUwNlN5RXRKdmJKTA?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-13",
    "event": "New CrowdStrike Price Target as Long Rally Reaches Late Stages - TheStreet Pro",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQSG5BZld4MDdqZXBfMTlNcWpsTGtUSTRfX2tOcXpGeFNfNm5KTG1kNGhDeEVRaXZGc1ZvNDQ1Smd4WjhVNXV6ekk5S3Z0aHYtdkhpMk5qbnlIdzRfWXZVdG8wR1hkY19NZG9OZU10dWs4czNrcFVfU1Fob2ZBdXFCTzQ0VEZuaGw5Mk5ZcHF5LVB6dEM5dFJXeHlSMC1SOW5QSnc?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-07-27",
    "event": "CrowdStrike Holdings (CRWD) Stock Falls Amid Market Uptick: What Investors Need to Know - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPbWhPTFVzOU91RjZsV1RKMGwyVFl1SWdCNGVqZEZDdW9ZdDZxd29yVFZ3b0dRbDJ3dEN4SHJPM2tHUVFZZ3lZWDd1Mi1NYWFpUlZTTC01NUswaXVKbU1lZ0NnSDBqbFlRU1FWYkRfN1NLOHYzR3paQW44cmNfdWRIVXEwb21MMUx4MVR0ZXJFeGJmbkVVckYtS3BJSWx1S0ZVeVB0Qw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-17",
    "event": "CRWD Maintained by TD Cowen -- Price Target Raised to $235 - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPZGdiUjRwb1hJc2ZOekV6QVVVdUloQVhJMjFVMDZUTW56T0FTUVdJV1Jmcm0weGxBQ3pyUkVkNFZsRTFRckZjUTdmRkt2VzVDZFNiejNnNzF5X0tXVjVYMGFRdzVnclBRcDFkR3ZQWUttTkt4Wm9uVTJXYm9LSEpCNjhTenRoOFVqUzVfUENLaTJ0Tl94NFpTMg?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-15",
    "event": "CrowdStrike Stock (CRWD) Opinions on Recent Analyst Price Target Increase - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQOTJXU0VyNWVLSlhxWkRkMVhyWEZ2aGFEbXRyRGc0aTJGd2VYU2tnZlpZcHc1UklOTzdNM3UyUzVsaDdhOGd1VXcweHhGeWVqTHN3U1dNUDVaYWNXTV9sNnQycGJkTmoxQ1dmX0hrcTRIc2dScW9td1pwOE41a3BYakJvNmYySTd2djlUQkRXMk5YNGJaS1kyS3dJdXN3SW5hRDhDR0U5VmNoT0ltS0xR?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-17",
    "event": "Looking Beyond CrowdStrike? 3 AI Security Stocks Stand Out - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOLVBKc3ljZGRrZHhIZzcwZlhfNVY4eHFxNXIwQl9rbG1zei1JSmxVQkxGOU1sbGxlNlhUTjdjcjdUQUxfOHhLWEIxQ3JmNXNJUFBJRWxmZW5ROVUzenJuX2ZpSElIdzhqb3ZyNklTemhvNkVvd2VsUHZqVmxVZGxwWnlaWjFkWjNUWVZZZERYbGhKa2VnR05JRWt3?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-17",
    "event": "Why Did CRWD, S, AEHR Stocks Hit 52-Week Highs Last Week? - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPRkNRVkVtSTcyOGZ1ejV3LU5FOGVfSzZqOXhYaURnTkM0T2JGRjNBSVFnNGhYQVBLZVppX2RKWjgwa2JuV3d3T3NwN1RRLUtKS2lKM1NOcVNPTTVGbmVnTFBPMTYxRWpnVXNJMEloQ2xubGJqeWUwRWo3Rklyak1vZVBkVE9pWm4tQkZLVjNoM1Q5WF8zaWN1ZmZQSEk0VW84dnRneVlXN2c0NjMyUHBHZS1HZWp1c0RSTnc?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-16",
    "event": "CrowdStrike (CRWD) Stock Eyes $229 After $1.17B Q2 Revenue, Falcon Flex Growth - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQU1A3cjdwV0IySHlVSGg3QUpISWhVZG5WdVkxNDdfNXcyMy1BQjhrZ3FtOUJJcWh1UXdQMU5ockxNb09WbVZBcmE2cmxLLUR2RzExdmc0T0d6T1lOcEIzSzgyMGZhZndwbXBCdlkzcWhDcEl5Rm0tZEdtZGR5QlFqNHloVk43N1gyMFBGTUdTeS1CYkFSRXMzYnhtbkhyZVlJY3BmRTdJRDJsUkc1NGJsZ3NuUk9iVVVpZncycEFB?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "CRWD 260814 205.00C (CRWD260814C205000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9HWHA2dTNfbE1HNzhnSlVTMmVpcUtpbU9KX0JVN1dveDNEQXdXWFFFSGVnYlRZRk81TkVORVlqZUtMRnFVOTFMN0RiX1Q2WXFvUVRKbmJ4bmJqVjRPUlMxMQ?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-10",
    "event": "Why Is CrowdStrike (CRWD) Stock Rocketing Higher Today - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOTHh0Wmo4ck91WlBCdHk3WGxkOGxnVFF5TFJuNXNpejI3MWpXTlNqYk9sZW1iTDZGSnE3RVo1TzlCbU5RcWlJcW5DME1SYk1PN2s5OXRRNWNCX3lzckNOMVBjVi1aODlELTdpUDc5Nkp1aHdiWXpPNUM3bEdjUF9GSmNZOHNSNHFhMldQSWtXWXhJRldULUYxdERxaVlHb0drTFNVN2JzcmZQT2hnS0xJY2NzZVI2TzA?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-13",
    "event": "Fund Update: New $571.6M $CRWD stock position opened by RENAISSANCE TECHNOLOGIES LLC - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPd043MWxwS2dmNVBHN0dlaGRwMlMxd1l3LUhHVURKakM1YWZrZXU0ZGZ1Xy1BWlg4QTFueVZHRHo2WEd1ejhkdUVTaTBQcndaOW8zSUxPdUZ6SkdKeEstMXQ4THZfUUVRdUtqQkRNd3k3RnNLUWlSdmtJUzZXZHFVYTJiZ3pwb3VfaEdIN3J3bjB3aGJaVHF6YWF6UU9LU3p6Ym1Za1V2TDlOeXQ0OENRVVNXcXI0MG40ZE1xQ2VpTm0?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-17",
    "event": "CRWD Maintained by Wells Fargo -- Price Target Raised to $230 - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdGQxQ1Y4NkQ5S3ZBU1VtejRxTUhTeUZnNzRtUjJaTEpMMmxlUXNWMnhHOTl5OUxWUUtUdzlxREFnTnpJcFByb050emZLS2tBZll0dkE1Yk5pLWFXVFZaZ0p5c3FqWUVkOVFiWml5emJ4U3lxRktQVWxKWXhaMXNUNEFNSHBDM2xGbUhkaWstNS1IMWVwZTFqNEFpVWg?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-07",
    "event": "CRWD Stock Rises 106% in 6 Months: Time to Hold or Book Profits? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPQ01rcUlTUnRFdE5sVksxdS1ENzFka2swSERqb0VlLXZxYmMxLTA0cl9hWXNGU1BjX2RXckNSeVFqMk96TFpFUFo5RC1HTjdFRXNvSUY2V0ZwRC1RaTBtdnZrQldFdG0zTVRSM1d2amtRdl9nUnBwaldtVjJkOVZZNEFwRXBSeXFjTVdzalpYSmw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-16",
    "event": "CRWD 260814 225.00P (CRWD260814P225000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1TeF9KSFN5dGp5RzhHYW9QLWFQcXdQVVlRaDdaTTZvM18xWnNuczc2TFg5LVJMQ1JaRV9YWUNqbFhiMjR6bWlIUFlWTnlSQ2FEd1B4ZVRwSG9jMTlGMklRRg?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-17",
    "event": "CRWD Looks 66.4% Overvalued on GF Value™ - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxNamNXdzFndTBMeS1XQ3pYTlZUSkRVYjlYZ0twa2Y3bzVOeXYyRUNPdEdsT3RMX3dSbE5mby1rNk5yc05sV3M5UjUzM2N6UjVaMkkyczJkMkpLWmtSaFdVS3kwVGM1b3NlaDNud2d4NjEtVXJrbGV0WjVYdTlQZzMwYUp3?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-04",
    "event": "CrowdStrike (CRWD) Stock May Be Above Fair Value On AI Threat Report - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPWG9Pc21aMWRWRDRwV0xkU3hzQVZnWVZCTnQyX3lVbVREX0I2NDFLdnlQUmJlb09JUUg4YWZ4OTA5WWFjNlpFY3JkTDJRSXF6RzUxeDY5bDFfYnQ1SHU5RWR2SjNzM2NTZ2FUd0hDRXBheWVRSTQtbW5LNkhhbWthcEJPcm4xVmxNdzViZm9jT3VteWU4LS1UMWhTNTJKdw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "CrowdStrike slips as insider sales and pre-earnings profit-taking appear to weigh on shares - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNTTZEekFrc1lkWTBBSHlrSVY2RUFwQWcxSC1Ia2xXMUplaHNxVWJjTHpGOWNsdDNPSkVrXzJKX0JodnhrZUtsQ1NaakUzby1wX0xvelFPeVdwckFJdjFTbTJzVDhyNTVRRkhodXhpUXpNQUUxZVVQUDk5UjFvUXNVMXBvLUNBcmZTTHdsdmY4Yk5hdlNPbzNpM1BHaVV4a0prc1J3VUNZWlV6Q2k3THNmdlQwbVR2eW1May1mX2NsOVhydw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-13",
    "event": "CrowdStrike Holdings (CRWD) Gains as Autonomous AI Agents Go Mainstream - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQdmFzWFpPVU9td004c1VsVmNGRnZTYXJpNEZWUzFjQ0VPSTJ5ZVFZOGFnUklUeDBJMWFyU1hGR2ljZFZ3UVRTaEJ5NjNBekFQMXYyN25TRDNNOC1XYnYtTDdEVVdrWXVwR0JyRjhTTjdfcmNfNTlUWkFvaU5YU0JoWFk4UlRGRXEzbjU0VDdKdHpFVmkzZFliTlFDc0Q2QnNsVnZ1MlNMZmZOMGs?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-03",
    "event": "CrowdStrike (CRWD) Stock Trades Up, Here Is Why - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxONjREMFFBTTFPZkZrWmZPT05Mb001Qm80S25US0JxT2VqTkY0cEtMcmRNQkZEdGNGalJtNEk4SV8ybTFHOG1KX20xQnpvNHpPSWFnQy1VMlpmU3Rvd2sxM1ZrWThidnJDZmFGQzVXbEVYVm5hUUJVRnh2ZjU0MWdVZWdRS1N2Q0lHc2JUcmd4S2FwZUJFR0ljYjJXd0RlNFhUbXVBNmw0YTBHX0Ry?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-07-21",
    "event": "CrowdStrike Holdings (CRWD) Stock Declines While Market Improves: Some Information for Investors - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQeHNIOFdFSDRUZnQ1YjJreVVFZ29mUllFWWt5WUlla2dFN25IbXNlVHk2T3VOZk5WVHdrTU13SVJmNEVFSTBULWJOd3ZYM2V6a2dpdGZTQ0w2MV93TWRNdFpfZEZpMERkbGJ4QktqOE5FVW0wTmRZQm9kNi1SaktUTnNjbWZkQk5rSFNOWnJBbFM4VHBxVFhnRVUwMmE1N2YtYlNTZGpVRFk?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "CrowdStrike Holdings Inc Stock (CRWD) Moved Down by 3.06% on Aug 14: Facts Behind the Movement - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOTFBMVlREU3VscEVsWE9yZEMtWVdhLVdkcVU1WUdvSm9JTjZyWXZ0dW4yVThCQXBUSzlMbGZGUFRycV9Jcno3WVc0UnQtSDBCdFp0R2hGQTBocFlPNGd1cFhYZW1fSFNzMzRTR2xLc0o3SDRXZklVdnZ1LXJkLURTQXlmOXhfOEhNZl9J?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-16",
    "event": "CrowdStrike Holdings (CRWD) Expands Project QuiltWorks Globally, Is The Upside Already Priced In? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPYzk4N1JPSXN2UkZHWWphVVBNdUJ1X0gtLUp1VHdua0R4MjdudXRsZzYzSmNzVF84ZGdVQTFTZWdMZlhUS1VleFR5dFRIcmd2Y2hHQzhzRmJmWXhMbjc0eGFZa0lIaWszZlpjc1ozUzVXUGMydkNJQUw0RmJjU0xaV0FkN1ZVNF95Z2ViN0FUYjNKNHRMY1JNaUpzZndld1hoX0J4NzlhcnF1cHM4ZTg0Rkh3RllBM3Y4a2c2MmJvUzhjeHpvWEctb1dpcHN1eE9DSXF2azhB0gHbAUFVX3lxTE03SHRKYWFpLXhZWExHVHZzNzhlcmhSMUhVaEhSRVlpXzQyaFBnQzhIRExDUmhxcUs4ZVU0c3YxU1ZIcUNRN3dQMy1SQm5RcjhzZmNVc3V6ZFNlLXp0X3JEc2dqQi12b0JJZUJFbmcxcWZGR2NtR25RWFowRTBqdFRpN29ZUUF0MXlMZENVMXd6ZkRjNUYwbkg4M19BeVM1RnMxdEFaalV3cWttNjd0aFFOeDBfYWMwOGk3aUp6Q3JQREpXSmVKV2llY3dLaVVQTTY0ejNuRU9WcEJKaw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-06-29",
    "event": "Why Is CrowdStrike (CRWD) Stock Soaring Today - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNYkJIQXJtTDBQcXRrVURpdEtka2pHYjdXVklXWklJTmFTbzNYNS1kM1Bja01oaDdoc0c0MWh5bkRDQjR1Y2lMY2JHV283TzJtZl96eVBGdHdGQTBsT3gtcDZVR041UHpxZXF1LTFOaXZhaU42SVFTemFRX09abEp2cXp2cjIwYlNobm1uSlhab3NVWjd5QXA1ZzBRTUdPekdx?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "CrowdStrike Holdings Inc (CRWD) Shares Fall 3.8% -- GF Value Says Still Overvalued - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPVFFWelh5WWQ3MmltYmlFMEM0d2tQTWc2VWlxRWFxYzlpTE5ZZWhEWU5JZEJNY3ZpLU1pRGFfZUc4Wlh3b1dVOUNlOWxDWGozcFJmVjd3V2hET29WdUE2bTl6bm04VjluY1pNZ0wxR1M1dlRmbWFhdmpvV2ZIUjlHbG8tejZhb1FuM2s1bnVzMy1JWGh2aUhqSUhIbUtMRndpdzBCRkVSUHYzekpjYkdfNHl2WHI?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-17",
    "event": "Will Higher Unit Costs Weigh on Newmont's Margins in 2026?",
    "type": "NEWS",
    "remark": "News via Zacks — NEM faces higher 2026 unit costs as lower production, higher royalties and sustaining capital pressure margins....",
    "url": "https://finance.yahoo.com/markets/commodities/articles/higher-unit-costs-weigh-newmonts-131200308.html"
  },
  {
    "stock": "NEM",
    "date": "2026-08-16",
    "event": "Gold Just Hit $4,400 and the Miners Are Finally Catching Up",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Gold miners spent years trailing bullion even as prices surged, but something shifted in July and the gap is closing fas...",
    "url": "https://247wallst.com/investing/etf/2026/08/16/gold-just-hit-4400-and-the-miners-are-finally-catching-up/"
  },
  {
    "stock": "NEM",
    "date": "2026-08-15",
    "event": "The Anti-AI ETF Is Here, and Its Biggest Holdings Are Engines, Trucks and Air Conditioners",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — A new ETF built on diesel engines, truck fleets, and air conditioners is pitching itself as a refuge from software-heavy...",
    "url": "https://247wallst.com/investing/etf/2026/08/15/the-anti-ai-etf-is-here-and-its-biggest-holdings-are-engines-trucks-and-air-conditioners/"
  },
  {
    "stock": "NEM",
    "date": "2026-08-15",
    "event": "Our Newmont Stock Pick Still Glitters After 66% Gains. Stay Bullish.",
    "type": "NEWS",
    "remark": "News via Barrons.com — Newmont Corp  has returned 66% in the year since we recommended it as a Barron’s stock pick, handily beating out the 30%...",
    "url": "https://www.barrons.com/articles/newmont-stock-pick-still-glitters-after-66-gains-stay-bullish-30cfc217?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "NEM",
    "date": "2026-08-14",
    "event": "Barrick Mining (B) Cleared Its IPO Hurdle. Why Did Shares Fall 6%?",
    "type": "NEWS",
    "remark": "News via Insider Monkey — Barrick Mining Corporation (NYSE:B) shares fell over 6% on Monday, even after the gold miner cleared a major disclosed o...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/barrick-mining-b-cleared-ipo-190026220.html"
  },
  {
    "stock": "NEM",
    "date": "2026-08-14",
    "event": "Newmont (NEM) Could Be 19% Undervalued Following Its New Nevada Gold Deals",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Newmont (NEM) is back in focus after a series of Nevada deals, including a fresh earn-in on Headwater Gold’s Jupiter Pro...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/newmont-nem-could-19-undervalued-111155046.html"
  },
  {
    "stock": "NEM",
    "date": "2026-08-14",
    "event": "Headwater Gold and Newmont sign earn-in agreement for Jupiter project",
    "type": "NEWS",
    "remark": "News via Mining Technology — The agreement allows Newmont to earn up to a 75% stake in Jupiter by spending $30m and providing a pre-feasibility study...",
    "url": "https://www.mining-technology.com/news/headwater-gold-newmont-sign-earn-in-agreement/"
  },
  {
    "stock": "NEM",
    "date": "2026-08-13",
    "event": "Franco-Nevada Q2 Earnings Miss Estimates, Revenues Soar 57% Y/Y",
    "type": "NEWS",
    "remark": "News via Zacks — FNV's Q2 revenues jump 57% y/y, fueled by higher precious metal and oil prices, while earnings miss estimates and margin...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/franco-nevada-q2-earnings-miss-142100861.html"
  },
  {
    "stock": "NEM",
    "date": "2026-08-13",
    "event": "Newmont Shares Rally 24% in a Month: Buy, Sell or Hold the Stock?",
    "type": "NEWS",
    "remark": "News via Zacks — NEM's 24% rally is backed by stronger gold prices, but lower production, rising costs and estimates cloud its outlook....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/newmont-shares-rally-24-month-124100830.html"
  },
  {
    "stock": "NEM",
    "date": "2026-08-12",
    "event": "Barrick Mining's Q2 Earnings & Sales Top Estimates on Higher Prices",
    "type": "NEWS",
    "remark": "News via Zacks — B's Q2 earnings jumped 74% as higher gold prices drove sales growth, while 2026 capital spending guidance was lowered....",
    "url": "https://finance.yahoo.com/markets/commodities/articles/barrick-minings-q2-earnings-sales-121700925.html"
  },
  {
    "stock": "NEM",
    "date": "2026-08-13",
    "event": "Headwater Gold Signs New Earn-In Agreement with Newmont on the Jupiter Project, Nevada",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/commodities/articles/headwater-gold-signs-earn-agreement-102500576.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "Newmont's Nevada Gold Mines Dispute Resolution Positive for Cash Returns, Growth, UBS Says",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/newmont-apos-nevada-gold-mines-165716016.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "Barrick Mining Corporation Q2 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-barrick-mining-corporation-q2-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss&.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-12",
    "event": "Gold Runner Exploration Appoints Justin Lowe as Senior Geologist and Manager of Exploration",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/commodities/articles/gold-runner-exploration-appoints-justin-114500961.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "A $2 Million Reason Why Barrick Mining Stock Is Down",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.barchart.com/story/news/3784505/a-2-million-reason-why-barrick-mining-stock-is-down?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "Lake Victoria Gold Unveils Maiden 580,000-Ounce Resource at Tembo Project in Tanzania",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/commodities/articles/lake-victoria-gold-unveils-maiden-161323906.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "Can Agnico Eagle Keep Earnings Shining Amid Cost Pressures?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/commodities/articles/agnico-eagle-keep-earnings-shining-124300130.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-17",
    "event": "Will Higher Unit Costs Weigh on Newmont's Margins in 2026? - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOam9WSGg3b3RVUmNaU29wWGo2YnFKRVd0b2J0NjBwdHdpRHVjaUo2NnhMWDJnS29tVTVVaFM1UFhHSWRlYTBhYnY5WGpGalh1V2E2azZSX1JyVEUxSWdKbzBtX0J2MG5TSjV3TUZOWHFyMGFjU1FTOTlMMTNmaTVOeVdxSmNwb19BNGhoa2UwTklKeE5tQ0xxb05mWGNfM1otQ2V1NnJUSzNaZTR1cXMyeW1VTQ?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-14",
    "event": "Newmont (NEM) Stock Looks Cheap Following Its Nevada Joint Venture Deal - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNa01DTWVVYUZlbVpfa0lYVnBmSGo5c2FfQlV2d1RudEJENExhaTJkVUlOblNLZHBoakZDYWVqNVBkMUxReE9vbXc2RWpzbEpBcTAwUXE4aG4zMDhaUHV0akJXb25ORm1OdUNZRkdfQjhSb2YzYlhDaWtOcVlRME52cEhFdnhCLVY3cUJ0RVJXUDFiZWJiS19CeGVlQzZYQVZ1cjBVbk10SHhqWWZTM185UlJUMFVEVkdhOW90dU9Xc195QdIBxwFBVV95cUxNd2E2WUZGRUQySjhWby1jRnhEOU1CM1laRUNtcnl1OTlGVGNsVS1vR0FfUVZ2MkFJODNKQVJDdkdPeFJFdVhmUmJ0ZlpCZm5UZzlNZkxDVXNSU2wzdkJZV1ctRnpPTXRaOG1TVUJ6N3ZkNHBXT2JFZHJQSF9EYjlRc2x4akFZcXdJbjRzVWdnR2pqRnkzQl9yZThMajdNUW5WMlVFNVo4WUdEZmlpb3hUNC05bDBoczg1QlhrR3NTY3plY29KbHJ3?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-06",
    "event": "Newmont (NEM) Stock Stays Reasonable Following Its 183% Three Year Run - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNb243QlVyRVRJbnVvM0tnd2hxTEhFajZEVEVKQTZmbUtsN1ZoQ0pmTlo1aEdwYS1DMkhNM25wbUJLNmxtYUlCMWQ2czVIbmpBZzhoYXRYTk1XRlQxV1JYMlF2YTE5U2lCbnAyUnlJZGVGbXlwLVZmbElHbEJZblNISm1kNU9TLVBzM1RKU09wTjRfSVg5U29Va0pYWXhCVEJi?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-07-22",
    "event": "Why Newmont (NEM) Stock Is Up 3.7% Today - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPbzFjTmFnYU5tQld3eE8tY3RTSFJXTmFfVXYxRkhVN2E0SXFhNzVINktDdmE0OS1VaHh2b2JYVkc3M3lHbk16MG5KOXFpSUVyWEtZWWg2MHpYa2hxQnNNZHRCdmRZbkwyM2ViblluZkFiRGlCQmdWcHltdGpuclFTeC0wQ3lUQQ?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "6 Green Days In A Row: Newmont Stock Is Up 25% - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOLThGU0U2S0syYnRsQTJCN3FNREgtUUVaUk41SkNCeTQxdzVUQjh6enhSOHVfLVRhU3ltYlRoaTdIVlR0MC1TM1hlT1pwalNFeHE1YUxEQlJJTTVwNnMyQUYyRUpLdl9LTV8yVGFRTkxFMndQQlBQMkdvMFVsUUJVUmdJQ1RXbXIzYzZ3bUxYUGp2bk9oNHEyTHM0WndSR1d2YWp2VGxTTQ?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-14",
    "event": "Newmont Corporation Stock (NEM) Moved Up by 3.20% on Aug 14: What Signal Does It Send? - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOb3dXVF83RVhqZWtZX0p6RVJ5YjkxWEtJLTB6VlB4MkV1S2tmMy1kYV9uR3cyeWU4bE1OWTdmWXBQYWRTZmJJQWRkeGp0blllRE5OWTFSUy1KanRNb2hjNWpGUjBsWHdEVjNtbVlPdjcyQmlFY3dWRGhveTc0WkFHWEkwRVFJajA1V3c?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-17",
    "event": "Newmont (NEM) Could Be 17% Undervalued On Its Barrick Nevada Gold Mines Reset - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPUVRiTGVtMnFLOW4yLVVsR3dISlFsYWY5TTBrNzJNRndUamhQVGVWMWhmZVU2dkJpWWZNRTRscklyQWJwZkcwZmNLQkVuRFV4bVkyVFlfSU5QWW5KazB2TkFsaUlIMGdHa3k0UXpmX2J0WEw3WlpfbEJHdU1ZTy1RRFdub2dkN2lBekRDMnNQNXd6TE5zbG5sRnVUSVlKQ0p4eXcwZEpub05wUUdieVdESGxTQUdfZDRETy1vUnV5QkY2UdIBxwFBVV95cUxPa0lieEVIVzJZZld6S1EwdjVvOGFLdVo1UllDSUItOXB2RnJ5MkEyTnlWbk9mQy1zRVlXanVKQ1BFamZlbm1JU3h4Ym1HckF0V0ppQ3JPUmxKZ3diQ3BrM2stWFdsaHJKak9yMW5iNU12bE45SVAtWWNaUlNZRkM4akk3c2c4d2NsUHpYSTc1MGQ0NTFVUVFHX1NXUFBiai1KamxHUWFURy1pZVBlRDJFVGlHOFBfbG5jbmJCSEFmX1JaNDBUbjdr?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-13",
    "event": "Newmont Shares Rally 24% in a Month: Buy, Sell or Hold the Stock? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPRXpibXl3VmU1QTNJUzNRbEpqdGVYc2NLa3BWaHhHOGFBWWdIeXRuRE9pNkJFTy1PQVJHYks4N3NYanU3ZE0xbG9RYnJfdVl6Q0RsTzlhUS1oTUhCUktMZm92ZFhHU3BySFFTekxFaGdISXZUcWZFZ2FPVkU2STRqYno5ZU10RWZhZmx2YVBIN3luRmltd1J4d3F3?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "Newmont Stock Surges 25%, With A 6-Day Winning Spree - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOZ3h0OWZLU2U2RXVfQjlOZ0FjT3R4RWloeDV1RGk0MFBJNTdJT1gtV0hYTFZSLVhfV0dmNzhhXzRmTm5SV0hPQWNyeWhSSkxhX1QtRXZqNEdmRG1pSHlmb3VDeDNOUGZfNHhyOW9tbDBOTk1JNXY2NzdYNjcxVG03dW0yalZCWFduaFhic0treElvalF0S2E2QmZua3lGNUIxQjlsU0NRdlNZRXljbzduMGNMYm9SN2lxWTRn?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-06-23",
    "event": "Newmont (NEM) Stock Price Pullback Versus Cash Flow And Earnings Valuation Signals - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNczR5azJPYTN3QWlkNkpJSVJnZkgtaU9Bd3dRa29FbXF6NkkwRlRmNGYtbmdaZ2hmZEdaWkJma0ZCQ2hjc0NicjZISjdDaGRBUE5SY1JGVWxSNGt1N2pfbTNJVm1VVFVpMzdObmdPTDFlUW9LM08tQkQzNzVXaDBISDh5Q3hZcTZ3eF9qaEpxSlhIVEtkT1B6R0tjM2N3dw?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-15",
    "event": "Newmont Stock Leads Gold Miners With Strong Margins As Inflation Risks Stay In Focus - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPUEJjdHcwNkZRUzByX3JpT3F4UWQtWkVGYWdlOC1mZG05c29VQ2ZFTnNJTWJXYXUxS25WNERGWENDNGo1YjFaLWV3VVQzZkxKNkhWZkRfWHVMdmxLWmpaZTlUM24tSkx4Mlh0NXEyZkVWTVBBTXRCRnh4ZEQ3VHdHaVozdU9Dc2NIS1dhVHJHS1RUZzlkN2ZlWVNZbHlSbmlrSnhuQVJzSUxleU1sd2pXNHBrWk1tSzF4UWMyLS1hdjlWQdIBxwFBVV95cUxPLVRNV2hTRnNUUWp6aW9KcDN2SHoxV1BKejBHa0l4RDZDaXhBbWRwTFVSOFA5WDJiSDF0RlJhWC01MXhKOTlONEhpUmhCMFExeWQ3bERhVzlSVTRkRXdLYWkwUkhfekZSaFJzXzdHSjBVekg5dzEya1JzdDZNT3RHTDFySnczWUZKNzJxcjRTVVl6NERuS3J1X0FIcmdhWV9JS1dyZmlPUnVMZk1CYjJ6eVBlU0hiT1poSGpSLXAtTlFlSkwyV21v?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-06-30",
    "event": "Newmont Corporation (NEM) Stock Slides as Market Rises: Facts to Know Before You Trade - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPLU9XcloxTlFKdkttN3hwaGZaYTY3c0FkQXF0YkFFWjlDc0VUNmlXTVdvOXd2Mksya3UtMVRiWktTX1diWkFMZk45UFlDa2xUMDVVaHpfaUNvNDdkbWtwUFNrY3hLOGUxUDA1MHdjREhhOHM5eURfVHRlMDlnZTFMc2tBNWw1RUhQTF9TblpXbHotZkFRYVpNWmVnaGtrcUpVR0M0?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-06-18",
    "event": "Newmont Corporation (NEM) Stock Falls Amid Market Uptick: What Investors Need to Know - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNdXlQalBSc0xoVGp4aEFVS3YxM0ZTM3dRWGZ1c2NhTG9LeTJoNlZmOWFPanU2SC14eThkekdfM3RMakM3OWh5eVVUMDh1dVNITjhDR2lUa2czby1jWlFuMFE1U1BfcHgzdUVuNWtha29ROFVQNW1OWXpWUzhXUVM5NlBsTm12RmE3YUNORWxYbzBEQUNjSl9GbmJTZTBqSC1WWmc?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-06-16",
    "event": "Newmont (NEM) Stock Could Be 38.7% Undervalued After Leadership Reshuffle - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNcTdmSlBjUlNqWjJKMmRvRXFVTGl3STgwczRMX1hmQjg5aUladk5aU1k1RWNzbFZmZVd4aTlTaUN3UWZpQVp5Sjd6aHp3ODhvRV9FMnlvQmEtdnkyNkxJTGF3T2xCcEpneFUwTnBrWDV1eFJObF9JbFRHU0Z3MHQ1TVAwc2tzTmdkeGswcFlOaGNfSVJBTmc?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-07-09",
    "event": "Newmont (NEM) Stock Looks Cheap On Earnings While Cash Flow Looks Fair - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOdUpnT29jbFRrVzM4YXdKak4wckhQc0N5Vk9hWlVLNWZ1bEFqd0NlWlJTemNsbFpzS3pQWnEtQ3VxYVpfM01OWkZTUm5vbTRiRVpHUTdjQkhRVWxWUW5SV3JLbnA4ZnZzdDJoSTVUNFVqeGlWdTN1b080Zzh5bXVIQktRTXpoc0I5SUtvSEVTNUJkblI1cVZQZ3pn?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-07-21",
    "event": "Here's How to Play Newmont Stock Before Q2 Earnings Release - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQcnVPVWxEZk9xR3RGQlY1RFdSZ1hmQ1Q2SERObFoxS0JjTFhqSjZtMV9sRXczWUV3OGlxSWVEc21KYkJnUHYxOUd2eEE3S04wS19fMTdaaU9hRU9GUUZyNFRTTXdScnEzSll3RjNmdXlmMzZzanRVSVgwbjRsa1Zxc2YtQk1qSlJHcVhna2FWY251RFdNYWRN?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-07-15",
    "event": "Newmont Stock Slides 16% in 3 Months: Here's How to Play the Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPazVCbDFoSDBscmhxTEtxdkxyZ0lHRW5zNVNlb3dSdzRZSi1vWm1kOFBWTzlvRWRmdzFiQ0tJYUNXLUp5TVNUUzJsRUh5dkNkRnlZSFBHSVQyeG1xOTJfM3Z6TkMxQzJLYW85T1M3SEhpaVowYjRGQWhFT09lU19xaGM2d0ozX1dsNEs1VGVfZ3NSM1Nk?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-07-23",
    "event": "Newmont Corporation (NEM) Tops Q2 Earnings Estimates - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQ2UtSVdSeWtESWhHVllNSFVqNWZYZlUzeDRYNGxfRnl0bE4tbnBxb1hJdzZ5dzJBM25tbjhxSG01bnhoUzJXaGpBZVdiY21PWklxdHowSlAxYU1pSG1ROG01Mi1BMG9DZGJtUFhWOUg3Vno5ZEVPaF9JUVIyZ0NlcUhKTUIxRVBMZUNlbFRfSVFhOUNkNnp2Sm9QOXc?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-06-29",
    "event": "Is Most-Watched Stock Newmont Corporation (NEM) Worth Betting on Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNY2hyclM1dVBPdGJoV2hJOVA3bTBRRjRPYllrRTVUZmIxM2ptLXZLQWo5R3ZWYzBDVlpRY0ZCMXp4elhIT0l0UGl4dWlxMXlQSFJsRmgxZTJNaURCblZmS1h2T09ldG90WDctY2hLRlpfRGdWODI4YVE2aE1mRTlzUl9CSVFZWldWejI1S1FJbDB2Z1VWMDBPWDl4eHdxSkFjcFBkcnpB?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-12",
    "event": "Newmont Corporation (NEM) Stock forecasts - Yahoo Finance Singapore",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNYy1tZmw1ajNFT195OEt2YXVRd2pfdWFuQ0Z0QXFqQUM2Zlh2MnEzWU00T1o2ZmVlSXh3ZjJ5akk3YWdfdklMc1R3WEttbVR6VmluY2hFOG9RR0FIR3ZVc1hkNXk4cG1rVTRHYTY3QVBRalN2WlpnRnFDRW9xYVVYa2tuRGhWQWhpanBmbUVWWS1JZw?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-10",
    "event": "5 Green Days In A Row: Newmont Stock Is Up 21% - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQbGdsTEVGaTBsOGtQalN3dVJURFdXYWFSYy1MQUFGZFN0VWR5WUVWYkg2MndTczVDU0Z5amE2SHctbDNIYnBlZ09NMGxtVDNZS3E0SmM1TXM0VlNvdU9tbHFpZXJLSUN1Uk9iMF9QYnR0Y0RhZGd0SDlJLURhOUZtdlJITFBQemNETno0OTQ3b0JZSjJ2TW5UcUlxTnZKYzJmTGkxaFVKdw?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-15",
    "event": "Should Newmont’s Nevada Joint Venture Reset and Spring Peak Deal Require Action From NEM Investors? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOdlMtRTU2QV9lVjJsMFNaeUM2Zkh1MGktc0x3TTdsdXFrNGNib2h0UlVYNGtBNHVOd3I5a3VVU1UtUGd4SFc4V244eHk5REJ3RENoQzFyZXNjRUpyOVJfb0V3QmtiazU0YVN0V3RpYmJQSHBOZGVRRllaNkZpZkZtU3M0YlVEZlV2UVlrWUxMRWxrb0NoTmdYOVUxUE9yb05IYkRGZ3lvMWcxdEZiX1YyMjYxM24tYW1Rb1U1ZEJWNjdOd9IBxwFBVV95cUxPZ1RDb3VzYnc5bkpBOGF2eDFLMXpVTmwtUWpjdjg5UmVTQjNZTE1LUmZKME9KanVRYWRXY290YWtnVkVJS3E1emNjRncycEdkUU5hZC16eWpmelRXRWltZGZhZkJJTVJqYm43STM4QWNRSVJ1OVVnX0dfcE12QlFiXzM0VkRRWmtaRE5ZZ2x6d0VqcXM1OWZtMHgtYzV3dG9sV2IyY0pTZzVDanVQckljQ2RXQTU2ZGJZdlAxcFFUSTZrX2p3eFcw?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-04-06",
    "event": "Newmont Corporation (NEM) Stock Sinks As Market Gains: Here's Why - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNRTBkdHU5ejJBTGhkellyZFJGR19iYnpOcTVaQlpCZUhmN3NNYk4tVjJfQnBmVWg4LXoyU1JzSVp3d2c2bUw3b0tPOC1ycElCQkNxTlNEa3FxTnhhbWRjYWtqdzRkTS1uRVo2em43cDJRd0VERm01aFg0cm9hVjZsX3RzYlo4SktwR1pMMlZGTnlocUFSN0JIMmtrblBXYXFOY2c?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-06-11",
    "event": "Gold Mining Stock Poised for a Short-Term Bounce - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQZ1I2RFlTNmlzVkZxVFlXN1REX2daQmo0d3JXRE5sRjcxaFhjVkJCNU1JSHVFYWxPUWczcVdjUHpuOHB4RkZJN3FHalFRdUM4NjdaSUhHS2Z1RVhkQ3U2QW5kLTVoUWlRNHdoWkNENHE5Z1hOeVJwZE44bWVtTjJYZzg0WERMNXBTbkZGeGFudWpseFdMMkdxWHJoUQ?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-07-24",
    "event": "NEM Q2 Earnings Call Centers on Costs and Capital Returns - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPZXRQUF9wa202T1ZPbC1nWlQzdDBUTEx0aXVZcFBCT0VxZDAzaEhFelNFcEppbldpLWJuYWtibVFvNDlxenFsUnRISjlwd1laNTdEaFVnNXFWUDk4T1hQc3ZBLVNMM1BOOTNLQ0tJUV9OTEs0OXZqOUFRdkVjaWVBVHNJaW5Ccy1JX0Vwak9ORzNRWEU2dzFOMQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "1 Unpopular Stock That Deserves Some Love and 2 Facing Headwinds",
    "type": "NEWS",
    "remark": "News via StockStory — Wall Street’s bearish price targets for the stocks in this article signal serious concerns. Such forecasts are uncommon ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/1-unpopular-stock-deserves-love-191020096.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX Stock Rises on Massive $22.9 Billion Tomahawk Contract",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Raytheon will lift annual Tomahawk production from roughly 60 missiles to more than 1,000 under the seven-year agreement...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-stock-rises-massive-22-171805645.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "Can L3Harris' New Rhode Island Facility Strengthen Undersea Growth?",
    "type": "NEWS",
    "remark": "News via Zacks — LHX expands undersea defense capabilities with a new Rhode Island facility, supporting advanced training systems for U.S...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/l3harris-rhode-island-facility-strengthen-143300358.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX’s Raytheon secures $22.9 billion U.S. Navy Tomahawk missile contract",
    "type": "NEWS",
    "remark": "News via InvestorsHub — Raytheon, an RTX (NYSE:RTX) business, has secured a $22. 9 billion, seven-year contract from the U....",
    "url": "https://investorshub.advfn.com/market-news/article/34432/rtxs-raytheon-secures-22-9-billion-u-s-navy-tomahawk-missile-contract"
  },
  {
    "stock": "RTX",
    "date": "2026-08-16",
    "event": "Billionaire Investor David Tepper Just Exited 12 Stocks. These 5 Are the Most Surprising.",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Appaloosa Management just walked away from 12 stocks, and the pattern hiding beneath the list suggests David Tepper is b...",
    "url": "https://247wallst.com/investing/2026/08/16/billionaire-investor-david-tepper-just-exited-12-stocks-these-5-are-the-most-surprising/"
  },
  {
    "stock": "RTX",
    "date": "2026-08-14",
    "event": "Boeing Signs Seven-Year Frameworks to Expand SM-3 Output",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Agreement with the Pentagon and Raytheon covers avionics and ejector assemblies...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/boeing-signs-seven-frameworks-expand-193122852.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-14",
    "event": "Is RTX Strengthening Its Position in the Global Missile Market?",
    "type": "NEWS",
    "remark": "News via Zacks — RTX is expanding missile production and investing in advanced defense technologies as U.S. and allied demand for precisi...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-strengthening-position-global-missile-145400140.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-14",
    "event": "Boeing, RTX Agree To Interceptor Deal With Pentagon; Stocks Rise",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — The Pentagon reached an agreement with Boeing and RTX to increase production of components used for advanced interceptor...",
    "url": "https://www.investors.com/news/boeing-rtx-pentagon-department-defense-iran-war/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "RTX",
    "date": "2026-08-14",
    "event": "Is NOC Expanding Its Joint Domain Command and Control Presence?",
    "type": "NEWS",
    "remark": "News via Zacks — Northrop Grumman is expanding its JADC2 presence with secure communications, networking and battle management technologi...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/noc-expanding-joint-domain-command-144700028.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "RTX (RTX) Stock May Be 3% Undervalued Despite Fresh Missile Defense Contract",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-rtx-stock-may-3-200931331.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "Wall Street Analysts Think RTX (RTX) Is a Good Investment: Is It?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/wall-street-analysts-think-rtx-133002966.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX's Raytheon awarded seven-year contract for Tomahawk cruise missiles",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/rtxs-raytheon-awarded-seven-contract-121000156.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-14",
    "event": "Unusual Machines Soars 22%, Red Cat Climbs 8%, Ondas Gains 4% on Trump’s 100% Drone Tariff",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/14/unusual-machines-soars-22-red-cat-climbs-8-ondas-gains-4-on-trumps-100-drone-tariff/?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "Can GE Stock Compound Its Way Higher?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/611305/can-ge-stock-compound-its-way-higher/2026-08-13?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "Howmet Rides on Commercial Aerospace Strength: Will the Uptrend Continue?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/howmet-rides-commercial-aerospace-strength-145600289.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "Can Lockheed Martin's Space Business Become Its Next Growth Driver?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/lockheed-martins-space-business-become-125000281.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-12",
    "event": "Defense ETFs to Buy as Pentagon Pushes to Boost Missile Stockpiles",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/defense-etfs-buy-pentagon-pushes-183500130.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "Patriots and THAAD: Lockheed Martin Corporation (LMT) and Northrop Grumman Corporation (NOC) Bet Big on Missile Defense Surge",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/patriots-thaad-lockheed-martin-corporation-140553456.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX Stock Alert: What to Know as Raytheon Nabs $23 Billion Navy Contract - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNN1UwTC1NWlh4bnlUUHF1UWQtWWJVRFFicE8xb3Z5QlIwMm9PQWc4bC1CcC1JRTE2NWxTSTYxUkJaZnBYck0zZGtJVlBON3lFTHlmSE1BLVlrNEVkZWpXbV9ZMmY4UXl4QU95UFVKZldySnBlNnNoMGthRnN6LW9CZExzc0dqYU9zRzRqdEVCTEpGOURfZHlRbkVsM2NYYzZnYlFNdUpVX3E0TmpGMDVDTzFYaGE?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX, Pentagon Sign $23 Billion Tomahawk Missile Contract - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPQnAwU05fSE5rZjNnZWZqMW84dDhKRVpPUlpkM19JMmZTRVJSOEMwNlhsNWhPV2Ixd0NEYy04QWZ6WFc4b2JpYURONVZOUHFTTnY1QUUzOTZMdXJXZnRKejZWWDlRTkhQV3hvYTk3Nng0QXhaNVVhZm9jUG0xZW5wV3RKSkJfcUVhY3AzMXVQR29SS25icFhhSlFScU9yWGl3?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX Stock Rises on Massive $22.9 Billion Tomahawk Contract - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxQUWtaNzN2VzB1YU5sNGliX1Bjb2E2RmpZVzcyMU1hYk5XMkhsbWxfN1Zzdkl5MzAwSDI2NDJZdEJ2N01va2UwNkpyTlRadkI0aEJsU1k4QUxyZVg4OXVKaHhkbkpwV0xWazNJTUpHdUZ1MVVoWHl1NWJ0ZE1YRDFNdXRvYlNZVzJDUF9RMjY4LVRnbGFzbkFOLW9mSWNaS2dCVjh2THliRlBHb1d0QWJDbTJZdUtlZWcy?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "Tomahawk Missile Production Is Surging—and These Stocks Could Benefit - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOLXdvYVZXMlczS2VSX2NzcjZfTGtlZUNUM2hndVBzaXAxRFFxMXd5VlVDQzJiNkFZaU5JSTE5OFdGS3VhSUVybWJ4aUR6MllqQmg2U213clQzVkotejNaSmVjc0JRb1lidE4wNTVPSlBTdGRpY3l2ZWtGUW1QaGs4TUV4dElTZFB3YXg3YjhsVDdQbFhIX3ZXdFVR?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "RTX (RTX) Stock May Be 3% Undervalued Despite Fresh Missile Defense Contract - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxPcUhlZnljZkJ5Z25nZzRSNFdYdF81YjlSUDFuaDhINlJESi1oSHhKTkhEbkRCUmRmRjFMdHN2d2lWZkg4clVpTGtPd2h0X3JzM25NUEtHMUVMeHE2LU53TDBrSTRUVkEzZW1MbkQ1ZmdUWjhLekRyVW9fbHdMcE5UalEtM09oWWNvcWE1aA?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "The $22.9B contract tied to a Tomahawk output ramp - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOaDg1M1BVLUw4S0NMc0VPSHMtalE4N3U4TGk0ekhkZWZJaS1hX2poOWhxOVpyb1hyRG44b1lYRURjekFmS29IaWpCTmdxaGRIeVgwQ0F5amhXV2hMZ0pyTW9jbHFRQlRqMmpqTzZYc0l2VUFpRV9OUVB6RFJDaGY5alNOdktUUGR2QTlvR1dTQzZZUVJYalJVX3RhTE91RXNWODRKVThZVnZPTk9YbXprWGdVUnpObkk?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "70,094 Shares in RTX Corporation $RTX Bought by German American Bancorp Inc. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxObFJuSElCczJlQVFpcFFZX3pxcUtoc25XQmZBb2RlU1pxMWh4UjdDcXo5RHI4ZzJqazNvMV9CaUdQQjB6WVhMb0EyRjhqU2ZNazRreURVY3FUS3RQN2xDTzNvZDhLcTA1RDVidkY2dFRvcU5UWWMxLWJHLVg2a3RGSE1OSmxwaFdGUG1zQzVjQi0xcW1YVXF5U1hOVDNBWW1PRE1zWHNYMDdrdUhsQ1VJcm9URUJOYW93XzVlYzUzcFRtX3I4NUUxazB2d3locmM?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-07-30",
    "event": "Morgan Stanley delivers strong new verdict on RTX stock after earnings - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNTktRdUhTY0RweEFQamQtUWtRemJXdEhIYlBkSlFmSDFiQ1czUHR4Tnd3OTZMVWxOUGhyS2Q3MlN2dFdmZGVpcTZtNmVmSFJONWNKSU1sQlpPQ3ZvbUNpSWJhU2pzSWliNVM1VExxUTY0T1dhcDc1UUQ0WXlzVC1KaWp6cnVQakdpems2d0FBOWlIbWNkNEdIQ19IeUdvRFBESF9fNkIxX25mX3otX1J6aktkUWpmaTduRG1oMW5n?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-12",
    "event": "Why RTX Stock Looks Very Appealing Again - Clearance Jobs",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQUnVWRHJNRWt1c3JhTUg2ek9pNzc4N3RBaGhyb3dYemtIOGZxS19YMUI5MngyQUJMbTFkaUdMeV9NMEdVall1enZFc3FScjQyUzB0WG1ka0duZ1pZZHJDRmFYSTNrQmJueTNybF9vWGhKdnVuTjAyODhtQzRhTWpSMVk2bHljV2xIV2RZ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX Lands $22.9B Tomahawk Contract — Raytheon Targets 1,000 Missiles A Year - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxQeW02ZmN2dGs0YjAzbEN3cWM1WUNiQ2pvR0tjdG81aEtJM1dBck9tRVRLZUxEOWhPclUxVy15UzhqdEJrbjZ1V2lUNzV0aVpNUm1lNlZfV2lMMW1tMnBqMW16VnhQRVN5OGloTlZzay1DbFloVm1ENTBjYWZxZkVIZEVSdmlPaC1HZzdiY21PZHBrQUx2RlQySnFVbWE1OGM4ZFhsOUV2SXp3Smt1a2ZwUDMzczRuWTlYeW5QT2hWWFNhbVMtRGRxT2RwWFVPYUZKZzRyNG1Udw?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX Shares: $22.9 Bln Tomahawk Order Challenges 17x Output Growth - TechStock²",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPSTNsY2tpdUg3OU4zYWR3NFJzM3BWQXpSWHRqZmdYYkhJeXNMc3NyNThad0JwS2Z1ckNpM1Z4YWhfNDh1WTViQXVWTXRpdGp5WDJ6cXhFeTFyMkZKekVWb0wzc3VNUGNUc3dWcDBta0w3c0ZaQlNrVmM0b1RMVWdXeGJidjVBUXVNOTI4b3J3?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "Raytheon Secures $22.9 Billion US Navy 'Tomahawk' Missile Contract, Bolstering Long-Term Orders and Defense Business - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi-AFBVV95cUxQUGdFLTdfTFBrOUFCWVNBNUpFRTBnUnVBaDdRTldaN3ZBdmlvSWh6LWNfZnprb3Q2M0JxWjFPZkFQcUdnWDVhMENrZ1o1SEVjYm4zRmQ2eTRWdEt4N1ZSRTBvYWp2NEQ2UnJrVktWN3VVYVlaNW9oczE2c2NZMU9peGNNdTJTc0RxSENncEExX2dZWVBEM2FOOU5jellRak9Fd2t4aEZMOGJvXy1BLVplQlFtOTRfUm5mQzgwS0FmcThtazFZQmFWM3RpOUx5WFNpOF8wREtlTGN6NG5OVEtWSDR6R29CR3lWNFZYak5EY1poM0QwNGQ2LQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-15",
    "event": "RTX Has a $218 Billion Backlog and Keeps Beating Estimates. So, Why Is the Mean Target Only 4% above the Current Price? - TIKR.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxOZ0FCS2hkc1VTV3BQYTFaZzFJeUlLZk9MZWpzSVBfa3ctdENRVkVHMlMyZnF1VHFKWkZKb04xWkoyYlpoYjVnSXRjY1ZwWkozVm9lR0NaQWRDcGdLV2lxUV9xRWtMbVBnT1ZqSUtFeWtpX3NJSjhUZUU0VnBXeEwwandOb2ZET2hPTFJRNml0NjFieFdoY01jUTVHQW4wMm9ORTBQLXUtOTdYVVZZemVxUTZocmhtWTNPRlRDYzNYaWd1My10dE00Vml6a2UzRndxYUFvOUlZbw?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "73,028 Shares in RTX Corporation $RTX Bought by Global Retirement Partners LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNYk1oTkRscDlQNEw1TkRIY1VyeGJyZFJiUlVOMmlucGg2aXRpOTh5ak5RTzRjVF9zcW44ZzgzVU80bGZDZHNsbEwzaDk2N25uM2JpVThadGdqckh4cVctd25GZHhXVzZ2My0zbGdnM1NwTmR1U0FJWjBEWDhQTjJBcF8xSzJrejNITDN3aTEzVEs5aTlRSlREZ01MWG85VlZOLWNKdmJpTmpvS2d5UEJjMzdQbGtIdVZvbGZEWGlGUUxiMXdfa2tfdWdUcnF0amZUcGhr?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX’s Raytheon secures $22.9 billion U.S. Navy Tomahawk missile contract - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPQURXREZ3ZkpmNVQzUXVsX1lnY0RxeHRnV2VsakJfbzRyWWJUNWo3SDJDd3BfZ3RLclZhTDM1bUdkUVI4eDBYRU5ZUk5kMFMwX3FUcWZ0dW9mYjFIRGlUaHRwT2xIUG9TMVRTMDI1eGF3Q3d3UXEwUEFBNjVoLWMtMndaYVJLSy0yZG1CQVRHNjY5ZXBw?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "OMC Financial Services LTD Buys Shares of 13,927 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOd1I3WmtuU0JSSXJxczkzV0pONnJSLWtsMXBBTG5JMDBlMXo1VkZCN3cycFZWZkRjX1pHUmU5YkpDWGR1aDlzdmx2dnNZaDNDN2V0dHpISVY4cGYta3ZvdkJNNERsOGlSUFpnelhIVjgtWUxiQ0QwRFcxallXai1neXFlM1BYelpCSmlPN0xKVHhfZ2NjOVFadmNZY3lhcmp6OWlLMkNMSDNINnltdW5ONGd4Qnkwa1dVbGZqalRzTWN3dDJIVHo4?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "Mitsubishi UFJ Asset Management Co. Ltd. Buys Shares of 3,357,045 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOOUZPd2hYZ0VHSnpZZUxtX3hFZGpkZ0ZHR3MzeTg5VlJfR1N0N25meGtyM3pHOGFvSnZSQWo2dXktWFNLLXBJQVRnTUNNcjlINV9IcU9GZEQ3U1ZpSllDdmhya2s0ZERTeU9zd3hicnFoMHZwS3RtRkVpYlk4bGFUSTFrdWk1NWRsaWNhTzNXMGd3c3lEZ0hUT0VGRmIwV1lBTTRzVjk3OUVVdzFuTTBBejM1SFhXV3B1SnVhbUQxLWF5X1pKV19rdGJJQmppcE5hUlh3SmpyZlNIUQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "Longfellow Investment Management Co. LLC Purchases Shares of 10,057 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxNWDI3YUhVNVBOYVZQNmplbjNtajB2ZHFRdTJhSkJTVHVBTmRnOUVEdGs4Z0xUbF9WNE0zMWNkLXFIV1VMODVQbnhGZDhWekRPR2NrQm51bUloczBPTFpNSGtYSVUweU9NSE1qVXpQcnpmbm0xSFpIeGFuQ0FoeUgwbEdidFp5QlF2YmZPTG5mWTZQNmd5SkN5TER0V2l5dV9ZUE5FNzczQ1FNSWdSOFV5RTRZd1FUTTM2NjhCaGliUzBFZmtLYkw4WmFJY3FHQUpZbUpqNFhCSE10X1Q0Wko0?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "Roman Butler Fullerton & Co. Buys New Shares in RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPeWdmbEsxRmU1ZDM1VG4xd0ZSTXNMcFNBZ01YVzdINTVUNm5BZ295MjhBTWxwR3Z1RnFXQVRPQk1oV1U4dmF0Z1k2dVN3NGprWk1MWDd3U3RrZFlkMWl6MzM1M28xemtSaFZPRVN5WmF2T1diMW9zTDlsYUgtZ1daR0tnOWl2ZlpVWTllNmhlZGgzQlVSSzNfUzJSdV84dnlpc2NMMWF0dWFLMDZlZEdqbUFuNlN3dnhhTEVsWkplSy1kbWM?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "RTX (NYSE:RTX) Stock Price Down 1% - What's Next? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQRWtoR054WDlNdzlXVDl3SlhtZ2hyRF9ndlN4Z1drQkpDNkZEcGE3SVhNM2wyd01zYmpBajg3UkVnRm0wTUE1a0dvSkNkNTRyODlST1NGZFdBZG9aUXpKdWItVnVFTVFJc2tvRFg4NjZNWTFxMGVyWG10VnZsRnBoWEctZ2J4SWxYbVZlaWlvLTN6ZERxUVQtU3pTRQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-14",
    "event": "RTX (NYSE: RTX) Stock Price Trades Near Fair Value As Missile Defense Contracts Bolster Cash Flow Outlook - foreignpolicyjournal.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxOVm1UMnVYM2N3VnJLZDM0OXZ5My15MHRYN1Z3VEN0dXUwMjlLWmg3a1pBX0l3d3lTTUhBdjBqMmVCME9tNy0zZ0lXeXU1NEVJYkpiSUJUbEYxd0ZPTzRTcTY1eFJOVl82eTExcWVUX1psYl92b1NwVkJLQk9jbFBLLWotOU93aXJ6V3AwSzVjOHFQdWRjUHRXX293RUVfbXNkcEd1elc5Qlg2XzZpTmw0a29iQlBrZ01rUzBYNlVOUFZveWQxemIyM1JQLU5oWFdwVmpRb0czTW9MblJzMzlNVnBGWWU0QQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-14",
    "event": "Boeing, RTX Agree To Interceptor Deal With Pentagon; Stocks Rise - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPd2g3d2pCdktrZVVrNkx1dzVmT0QwTXhlZlpnS1ZsdF81czlRUjRZc0Y0by0xVWNETnFZUlZuWWVJWnhWNnlidFBkUXVfVWJKYm5McV84SUJTcEZCUmE4M1h2VXV5LVZVbVlsVVFoWEx3ekFxQWZLWU8zREwwaXdGOWFjc2hHQQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX stock climbs on a $22.9 billion Navy contract - AD HOC NEWS",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQeVA5MlQ5aTRlaVdOQklvcUdkTDRrRHo5YWlSOW91dDItR3FBMURwb2U2T2VpOEtERTJtbERvSjhxMGRoT0xaaTgyZGxpaEVkS0h6cXpycFQwblpBTjl1NWJETXl1emdhdW9hNGhGNlVPVlRtYVR4MkR2cWZEMTlWRzhjbzZDSlpBMloybnFfVEFJWlVVMnVua2p3Z3E5THRodFZlVUlaa0dqXzhxNW93dw?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-14",
    "event": "RTX Corp. stock outperforms competitors on strong trading day - MarketWatch",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxONUFHQ0t4Smc2MHdHYVRBVWZLOEM4LVVfa0pyREhqWmZaaThfT3RJTFRGU3dQUlVrRE1wMXdDdXUtY2Q2b2pzU1dJT3BpUl9Ua1p2LUl4N3E4TlcyZjhnczdxdjQ5SkZqMUVicmR1ajJUb2ItWDNqOHd4N1N5Q05GeldfUHY4SUVJaEZnMjB5dC1ZMHJUY20xSk94ZGRjSGRURXlDTXFCZHRoRmpVeENUWnJsdHRLczVlcGZpTQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-12",
    "event": "RTX Stock Price Prediction 2025-2026 | RTX Corporation Forecast - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5zenEtb2NEU25MVVhyQnkxaXYwS1dfQTNQdUttT0pVb3FDUmJIY3AxY0tLRlNWUFFIT3NhOGw5ZVp0c1NsTEtzZ0VkRlZFSjd3RXlCZmM4UHRPQ0RHdkhUWV9CRQ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "Rocket Lab Stock's Next Leg Rides On A Vehicle That Has Not Flown Yet",
    "type": "NEWS",
    "remark": "News via Trefis — Rocket Lab's backlog is expected to convert into revenue faster than it was, and the vehicle that would compound that ha...",
    "url": "https://www.trefis.com/articles/611678/rocket-lab-stocks-next-leg-rides-on-a-vehicle-that-has-not-flown-yet/2026-08-17"
  },
  {
    "stock": "LMT",
    "date": "2026-08-16",
    "event": "1 Unpopular Stock That Should Get More Attention and 2 We Turn Down",
    "type": "NEWS",
    "remark": "News via StockStory — Wall Street has issued downbeat forecasts for the stocks in this article. These predictions are rare - financial institu...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/1-unpopular-stock-more-attention-122100183.html"
  },
  {
    "stock": "LMT",
    "date": "2026-08-16",
    "event": "Iran disputes Qatar, Kuwait accounts as U.S. war commander visits carrier",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- Iran called on Qatar to admit an investigative team examining the fate of military pilots Tehran says w...",
    "url": "https://www.yahoo.com/news/us/articles/iran-war-commander-visits-uss-003112203.html"
  },
  {
    "stock": "LMT",
    "date": "2026-08-15",
    "event": "Verizon (VZ) Brings AI And 5G To Airspace Monitoring Pilots",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Verizon Communications (NYSE: VZ) and Lockheed Martin are collaborating on NetSense Airspace Awareness-as-a-Service, usi...",
    "url": "https://finance.yahoo.com/technology/ai/articles/verizon-vz-brings-ai-5g-121023535.html"
  },
  {
    "stock": "LMT",
    "date": "2026-08-15",
    "event": "MarketBeat Week in Review – 08/10 - 08/14",
    "type": "NEWS",
    "remark": "News via MarketBeat — Stocks eye a third winning week as strong earnings from SoundHound, Albemarle and CAVA offset mixed results, with Market...",
    "url": "https://www.marketbeat.com/articles/marketbeat-week-in-review-08-10-08-14/?utm_source=yahoofinance&utm_medium=yahoofinance"
  },
  {
    "stock": "LMT",
    "date": "2026-08-15",
    "event": "Putin says Russia, North Korea coordinating on regional security",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- Russian President Vladimir Putin told North Korean leader Kim Jong Un that Moscow and Pyongyang were ac...",
    "url": "https://www.yahoo.com/news/world/articles/putin-says-russia-north-korea-012444686.html"
  },
  {
    "stock": "LMT",
    "date": "2026-08-14",
    "event": "Rocket Lab, Amazon Win Space Force Contracts. SpaceX Closes Cursor Deal.",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Space Force taps Rocket Lab, Amazon, Lockheed Martin and more for communications contracts. SpaceX closes $60 billion Cu...",
    "url": "https://www.investors.com/news/space-force-sdn-contracts-rocket-lab-amazon-spacex-completes-cursor-deal/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "LMT",
    "date": "2026-08-13",
    "event": "SpaceX, Defense Contractors Progress On Orbital Interceptors, Pass Golden Dome Test",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/b69dd222-f46f-32fc-adbf-e1f12b3ab986/spacex%2C-defense-contractors.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-13",
    "event": "Do Options Traders Know Something About Lockheed Martin Stock We Don't?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/options/articles/options-traders-know-something-lockheed-184300168.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-14",
    "event": "Can HASTE Help Rocket Lab Tap Into the Growing Hypersonic Market?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/haste-help-rocket-lab-tap-141300823.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-15",
    "event": "LMT Stock On Track To Register Eighth Consecutive Session Of Losses – Lockheed Remains Confident About Meeting 2026 Guidance - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQMUE5WWtfMnU3QkNlYnN4LWNVdTJWb1JwcG9EbkY3dnpFNkZvV1BJcW5nNHFFLVdFcHJXZkpsWWY1OGNtN1ZBSVl6YkxlYnNSMWJkNWdGRDNTRFNaa3VJOE9va0pqWFdISDRZeWxnOGkzREt1cThWVzlBLUdPMzFIaC1GMTUxYXlja1Y4OEQzaFAtMlg0U0pDY2hWVVR5dXR2UEh1a0dGbW5lSGF0eXowWUlOckFBUTlvM1ZVdTdFVC1pZEZqOWhNc2p2QmVRblE?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "Government Contract Update: $991M payment to LOCKHEED MARTIN CORPORATION - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNTEFMLUNwSUVJdFdpUGt0TEd1V0g5bFZiaDlfZWwza0pBOV9EZERBeUViWlZTRHk4Vm9kMzNaWmV3NGQ4c1I2am5vNU9YTmtaT1B0V2pzcUZvSWU4Vkt5ejdEWTQ3V0hkVDBYQWVfeW14VjF1MXFTaXdjNTJveDNRWnJtTUYzR2JDZFpjdXIzdzlBMUZkX0MyTkFLNjg2YzJWRk9IYkVkWGwyRkhTU2c?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-24",
    "event": "Why Lockheed Martin Stock Keeps Going Up - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOQXFsN0VhMjVIOWxuclBpeTBpVUI1TGJ5cGpOcUNQTExNalJvWmVkN0hYTFZHcUJwRWxZV2w4LXNGOEUxRVZBcjluamF3d2tSTzFERXpwZDZGNWZGcTFwZFpkVEF2eFRpdGNUdnk0WnNYcW9mTUg5Q1RhRFdvNHkxcXlWbm5uazcxMTBNMDlLWE5GYWZPMGxqSElOSVY?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "Visa, Lockheed Martin And A Health Care Stock On CNBC’s ‘Final Trades’ - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQTU1mY0ZjcWxwODRfOTYxR2lYbXNhN2hZWkFfLXFBVldld3pCR0VVN1dwWS1BZGJxY3ZNc2ZGaWQwUFFaNEI5aXVGR1gtd0xjeC15SVJSSzBtRU0tT0tJaWY5d2pwYnNpQWlKa2pZM25oQTZDaWNTdDZTd25xeDZNUVVBUGw1Zk9mUkw4Y0l1LWdMSGh6X2FZQkZKYm9qbmowRmMtaXh6OTh3WkNZUXB1dHNtTXFEdkNfNjY5dnVQTV96QWUzMXhXMVdCaw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "Lockheed Martin (NYSE:LMT) Trading Down 2.4% - What's Next? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNeGdPQldEOWlxSVd2WEpEOWtSbVQ1Mi1VUXNoTmx0eGFhQWtsQkpJdU1UaGFjNXVRcTl4QWNSbDZqaER2UWo4VkM2VzdSME9DVlp1UjNCczlqa1M4VDZQcU9FUGZKUTFHVFFIMzZGLW4wMW56eC1ZSGVZUEg0UzE3MWlCbHBhWlJmb3l2dHk2TTZqSU1VazBTb0tadm55SWNsbnJNdkNzVQ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-11",
    "event": "An 8.8% Income On LMT Stock, For Giving Up Gains Above 9.4% - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOSUhqUGlZZDBtcnlJNjE0NDNVWjBkWW5CbXJYVXItZW5tUkRhWnJVN09ORjFqSnlsWmdId1NNckkxa2pONVJMdW45OWxpS3pJREg2YXBEMGtIa3BZNWJITkxhN1djamkycmw5RzVRYnhqTFpabGxIak5pY3RMMllYR3dNbFdNWUhLaXZtZlVkTVZ1QUlnUXdlM3V2cnRzaDg1OE0tNDU1UVBNV3VFTGpVcnRqNV9RLW8?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "LMT Looks 8.2% Overvalued on GF Value™ as Dividend Sustainabilit - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQOGN6OWtYamdlcUplWG1MOEVmd05HQmQyY3dvYmNUQzVOdlpPOE1POGxEeWk0alZIelFhR0g2RlVpTXA1UnpiQmRzMHVyd3dEU2RJSFdYMktST2xsWFFWZXM5VDY2LWxaQWgwcHo2bVhGejVDT2tHTjFaeTZQS0dPZEtrV00wNzRyTG5xZmZ1T1lOMlZyRzBkZldyclpqNjZLQXhyUnRaUkVZNWpPVVBBcllha1Ryd1JQQkRTVzln?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-14",
    "event": "Lockheed Martin (LMT) Stock May Be Undervalued Despite Its 89% 5 Year Run - webull.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE1zSVczNFI5MEdYbFhZMlVkMnNwdUFTa0k1QjRXOWFudXhFaXVCOFdVUUY1SGtMelZiNFNLUy10amlXSGszYnRHcldBb21aWE5JNmxGTE41dTY?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-13",
    "event": "Do Options Traders Know Something About Lockheed Martin Stock We Don't? - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQVDZnOXRVZjh1X0g4LTZhNWdzbVVyQ3RnRkZRY1ppWmZock9iSkhkQ2RXQ2xITUd3eVp3VkFOQnpDZjlyMzRWTzhoN1Iwb3hpZXJmNVZZelBxMW4yOWFyYXZleUtVUEw5ZGl6c3lkaW93MDRNWlhZZDc3dE9ibXAzNEdkZEJJUFdORGFqdUJVc2J3TkhTQ3FhRzg0Uy1SeUUzcGZMc2lZRWEtTkpsX0xiQnlOYnl0M1FRYk9adWRRdTVOLUxL?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-14",
    "event": "Lockheed Martin Stock (LMT) Opinions on Analyst Price Target Upgrade - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOTmRvQi1DZTlkaFRsZ1NrT3NLRmh1Z0pDaDJ3X3V1LTZLOEFid2V3T1d5cEtmVWRTQ0wycTAzNzgyNTllWWxaLTRkcHZNODVlMHUzbjcwWWllLVBqR2NjTzZSSnJMX3d3VFNLNUwzVW5GVUJuQzRVa3VvdXVkUDBUVUJOWC1EdUVGUUcxMVdoakhEdHB1OWllQUVsWWhPLTcwRWVLdDJPUDM?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-15",
    "event": "GM, LMT Stocks Gain Overnight: General Motors, Lockheed Martin Reportedly Working On Weapons Parts Partnership - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPTWYxRUl3VVRfSlF3ZG9UUXpqOEdfOVV1c1RlSHFtMzlWS2hmSWJxWkR3VjNYcEo3UGdlTWwwc2hxaVJUVmt2QUJEamk3aU5MUGdLLWJkamZMTk9qQXRPZWhJSDBWTjZLNndwSUFkd3RET0JSSmh5dmhuQ1BaRndsR2p6Ym9CQTBhWnhBSk9scDBMYlZUdW44MXF5ejlDRzRaM1dYcFNuakFTWGxKc1FOZ2RLRTE5TXBqd200RlhZaGR2aG1RY2dBcXVYbGRxOUtPeThWUEplb2R2UXNWWllKdTl3V1FocUNOTDNGa1RqZWgyZw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "OMC Financial Services LTD Invests $3.18 Million in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxQTVVCRGt5ZlQyaXBpZmoxTDRNV2xOaDRBY2lvVUpsaE80MTJaRHpfZlFQMC1oV1ZOTUJwNWV0cVhmLTlxSkY3TmxvOHpPN1laaEhwMHFpemVfZVBnUWxDU041RkxLQVF1WDJPVTVhb2tMTDdYVi1PUlUxN1JOQ2lhbkRfMjN3OHBGRmFmRklPY1kwd2d2OXFzaTd0eXJmUDFoa3p5SDZzeS1FbTBDdlRpQTNkOVZBLWNtV3ZKS3MzWXhPV2kyNXZIODhqaVozWXZlTzczVWxuQ1FlQQ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "8,438 Shares in Lockheed Martin Corporation $LMT Purchased by Flputnam Investment Management Co. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxOWWNCY0YySnFwWG50THdkZmF2amxmRkxCOUhySUlEZ05Bdy1tVl9NenkxZzJhajR4b1lvZnJJNmVNdEtycF9IRWZVOW5HVXdPeEQ5OGtPdUc0Z1BPNEJ5aWtLV0hLeklSVmdzQjBfVUtUVjJ6d3BxX3I3R1UyV0hhUHlKbHlnNmRsMTJId0UyRGR5a2NIdDJyMlNaN3FOek9KRjg4cXhOODgzQlY1UDgtY1lUUU9fU0ZmTGt2TU9Fa0Y4XzBSQjNRMm96ZzFMNGV0YldpRmQ2MW9aUjkzanlzR3dnSG8waTJiT1E?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-06",
    "event": "Lockheed Martin (LMT) Stock Sees Modest Fair Value Lift After Analyst Target Increases - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPRFV6ODlCeGV0NUFRMDVsVTdlX1J6VGNqQjV1U041eEp6ZVFiV05RX2MwRFVkeGx3SUJ5N2U0MjRoNkpfdnhyY2o1T091bXRsMUxMRzdzN2lBZzVtV2NjQUJiZFlPcFJxMUpVdkM2ZXlLb3ZtcHpyWlVjcEF5ckM2UEplMVRmSXdmNDViSk1udkMzOEpoX21kVWRQcw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "6,403 Shares in Lockheed Martin Corporation $LMT Bought by 1ST Source Bank - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPS01wV3A5Tm4xaWtjNlVjU1pTalgwMVdDeEpqeml2MUtqNnVEUm51MzB1T05LREUtNjQ1dEZERXkwbzlLTk1Va3BSb0RIS19pbU5PeUZ2Q1I3Z2l3WlpyLWRHaDMwdHBiR3pVVzVSS0xrTlRyMHpFUlhZRmk5UTRqRmtxd1Z6WG45RFVIWXR3TkdRSi1HRlFHNWJYdkt2LUk3NDdwaHhKOEVIM1dMWndKOTFtbXJrWHBqeVdwVWppV1VEazRtTnl4N0xkemVhQQ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "9,385 Shares in Lockheed Martin Corporation $LMT Acquired by Global Retirement Partners LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQaUJYWFRYS2RfNl9oT21pSlY0Vlk2OFd0akplNUV3elg5eUtOb1RGV1VYSDMwb1ppZXd5SktReGZaSEgyYTJOSDVKSEd1RzhYMV8yRDgzbDNHU1hGcVBUVEtpOEZhSGd1X19Hb296SHZXUXJBR2h6ODMtX3FtZVJ6cHpsckpwX3pOLVpTbkE4VmNKdDhCMjZ3UjA5V2xablNfV09ZOXZBUkZsS2tDWnR3S2dhV19OU3FHaVloQWNqX2ZadDZSdDA4SmNRaTRaak4xaHJyYjJMc0FJLUhqT0g4UXNPRFA?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "Abbot Financial Management Inc. Buys Shares of 6,678 Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxOeWdwZkhFUG1uYThIeTRISEVQdUZlUkhnVnpBNUh3MnNBSS00Sk16eHFvSlhwd1pMNkxPT3F6WmRXZFlyWDFKYzRVSjNRUnJTNGpaakVTVVRjRzJZRGtqMTJvMzNZZFN0c3d2Y040RVZyN2pJMlQ3QWFnODdsZFROZnpSVGI5WlNXVTdDNjNvLXduWXdrWGlKVzdHNVVqOW1IMV9MYTJwVGlkY1FQVkNhcW9od3dHN1BJWVdtNGFzUTVvdDVqRENCSnU4Y05uNWpIVDRQWS1CZVA5X1k?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "Chase Investment Counsel Corp Makes New $1.89 Million Investment in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxPaGpYLVdGRDBqck4tQ3ktNC1DZjhDbjlMSUJycnhJTkFkRHV1X0NDU05QOGEwUkM5Y1U3OVBHSE5DRmFoSDNhcWQyMVZCYmlUTTd3QUxTVEhDbkxpTGgyOGVTaU5taHA4cU9BRmlYeWV6Z3dja3R5N3NfT2oyRTdMbFgzN21WVW5CZEpySUs5a0JGbEV6c2cwWDI3NDJRQVpPQl9iMWpLWm1pLWNqc2xsYVJhN1lWZF9ab1hxN3Z2Q2t2LW1FTGJfSktDNGtKUko2a0hQUkxLMVlkYlN2NzZkejBTcHA3TWdBYWUxUC04Yw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "Trivium Point Advisory LLC Purchases Shares of 3,215 Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxNdGppclJZMlV5UkoyUGlUU0VFOWFqZWZzejhCaTBfaDFtNllocmVfUlZPYTJ2eFQ3WGZINnAxMU1XaE1xOGhKNkhlQVNiZXZZWDd6c3oyLV84VEJuZTdpVzkyMlEwd1dwTnpzaDM5bjFwQU0xcTJMZ1VqVmNJeTlnaDViV1paTkk3VGRlSVBHTlQxYWU5VTNaNTg1Zmk0ZTBkNVRWZ1lab3Yxbk5iRGZQOUl3TXRRZUNIVTZSUzR3a2NXNVF1MDVGM1RhTkZ0ZGp0c0ktY0VNR3dIaGdV?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "LMT Looks 9.0% Overvalued on GF Value™ Amid Strong Dividend Prof - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQdU9yc1gtaUhUeHA1Uk1URmRvSmZpYmZWQWYxbFlKMGJfQVF2Qlk0UkxyU0lPTnVRR2dYclAyQ2t2RWVrLWs1bHNyc0dEMHdHTEttcTRmaTJ6NWJzVkRlZllJT09rcWl3emNrdTdqczZub1RnY2lESFVQOWFWQlliZkg1bVFQc2VJUjBFcUF5bGtwNDBaQ09kakgtM29KYlVGWVpZeU5B?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "Pentagon's procurement surge: Who could benefit most? (LMT:NYSE) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNZTJUZTNkY1IyRFBLWkhnOXQybWtFaXBxc0hlcm03TVpyb2RKbEZ5bUE5SEZ0UmZfc3Q0c29fNV9oeUYwWnF4ZkdzMmNLTmRRb1d6TWRpT1VhMG5Jd3pYRUx6TmFLclR5UnFtTU5EU1NzMW0tak5sQ2VxRElLZlRleDN5cDdlck9oVU1YTURkRkVpQQ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-23",
    "event": "Lockheed Martin (LMT) Stock Fair Value Edges Lower As Analysts Trim Targets - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOaGYxdU5TdDFBMk5MU1l2SXh5RmRHeVBHelpEcUZEVWwyRlZ2UW95dWZPWGhHc2tvdi1KRjNYZmtCbkMyS2pHTnpnYU84VTVGNVNHNkNyVFZYdW1WeGhYUTdRNjlHTGdxN25mTDFrdEFtMWM3UmpPNUJDTXVyakV4Tkp0SkY1cExKOWt0dVpSWXZuZUFwWUkwRUFUbw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "Baxter Bros Inc. Purchases New Shares in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPaXpRaUZNUDc1N2pBM3gwMy1CVWF0SkRxenhQci15aGMzY0RUZE04cUZMQmVKWVFKM0p3YW5teFVJNEZRdHpCNGJMajFxSlRfSW9oTDA2VUtiNjY0S1NRMVEwdUNaeDNwbHlWS3Z0TEw5VEJTeS1vUGMtNkFWLWw3QjRBdUNHdThRLVA2Wl8tYkw0bUpyLTZZYnZUX1FBTmdRRU1JUVhuSVpWYXJOdlJNLTV6SGE2aHJuWjlYYm1kQWYxWUNMLUo5bklQbWc?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-14",
    "event": "Is Lockheed Martin Gearing Up to Lead Defense Stocks? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPd0g5aE1KNmxPa1FNTGN0cGJwYTRnSHRUaG9iUHNCUTNfWVJwRlJmOFBrRG80U3k5T2YxbWpEeU9sWk5OSS0yclY0TDN6Q25EUnRVdWtzOHBpOF9qbWtXSnJDbS1iQ1NlVFplZTVFSUlFdGdqenlTajB3NGZYejR5UUdGQ2VXWEItNy1ITlR2eWs2Y3M?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-05",
    "event": "Should Investors Chase LMT Stock After Its 15.5% Three-Month Gain? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQRzE0S3NoWWctT1hpdElncW1jQnl4SklpcTBLSVlURVRJYW5wSWg0UkwxcmtTT253NGh0QndxeU0wVURjVmtheUxvX0JXQ1labl9kMXFjbmVUbUQ2LVZ6S0Z4TmdjQm45SmplenVDNHgyUWRzYXV0VjFnRUJGT1pLaEZPNXpOWExCTk40REpQc3VOSmNtSGZkTg?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2022-07-12",
    "event": "Prime Day Event",
    "type": "NOTE",
    "remark": null
  },
  {
    "stock": "AMZN",
    "date": "2023-07-11",
    "event": "Prime Day Event",
    "type": "NOTE",
    "remark": "11-12 July 2025"
  },
  {
    "stock": "AMZN",
    "date": "2024-02-01",
    "event": "Q4 '23 Earnings",
    "type": "NOTE",
    "remark": null
  },
  {
    "stock": "AMZN",
    "date": "2024-04-30",
    "event": "Q1 '24 Earnings",
    "type": "NOTE",
    "remark": null
  },
  {
    "stock": "AMZN",
    "date": "2024-07-16",
    "event": "Prime Day Event",
    "type": "NOTE",
    "remark": "16-17 July 2025"
  },
  {
    "stock": "AMZN",
    "date": "2024-08-01",
    "event": "Q2 '24 Earnings",
    "type": "NOTE",
    "remark": null
  },
  {
    "stock": "AMZN",
    "date": "2024-10-31",
    "event": "Q3 '24 Earnings",
    "type": "NOTE",
    "remark": null
  },
  {
    "stock": "AMZN",
    "date": "2025-02-06",
    "event": "Q4 '24 Earnings",
    "type": "NOTE",
    "remark": null
  },
  {
    "stock": "AMZN",
    "date": "2025-05-01",
    "event": "Q1 '25 Earnings",
    "type": "NOTE",
    "remark": null
  },
  {
    "stock": "AMZN",
    "date": "2025-07-08",
    "event": "Prime Day Event",
    "type": "NOTE",
    "remark": "8-11 July 2025"
  },
  {
    "stock": "AMZN",
    "date": "2025-07-31",
    "event": "Q2 '25 Earnings",
    "type": "NOTE",
    "remark": null
  },
  {
    "stock": "AMZN",
    "date": "2025-10-23",
    "event": "Q3 '25 Earnings (EST)",
    "type": "NOTE",
    "remark": null
  },
  {
    "stock": "AMZN",
    "date": "2025-10-30",
    "event": "Q3 '25 Earnings",
    "type": "NOTE",
    "remark": null
  },
  {
    "stock": "JPM",
    "date": "2026-01-12",
    "event": "Trump ข่าวคุมดอกเบี้ยบัตรเครดิต — Gap Down ก่อนเปิดตลาด",
    "type": "NOTE",
    "remark": "ตกแรงมาก ช่วงก่อนเปิดตลาด"
  },
  {
    "stock": "JPM",
    "date": "2026-01-13",
    "event": "Q4 '25 Earnings",
    "type": "NOTE",
    "remark": null
  },
  {
    "stock": "JPM",
    "date": "2026-02-23",
    "event": "Company Update (แทน Investor Day)",
    "type": "NOTE",
    "remark": null
  },
  {
    "stock": "SPCX",
    "date": "2026-06-12",
    "event": "IPO",
    "type": "NOTE",
    "remark": null
  }
];
