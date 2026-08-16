const eventsData = [
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "3 Bank Stocks Walking a Fine Line",
    "type": "NEWS",
    "remark": "News via StockStory — Banks serve as the backbone of the economy, facilitating lending, deposits, and financial services that keep businesses ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/3-bank-stocks-walking-fine-163700759.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "JPMorgan Raises S&P 500 Target to 8,000 as Earnings and AI Growth Strengthen Outlook",
    "type": "NEWS",
    "remark": "News via InvestorsHub — JPMorgan has increased its 2026 S&P 500 price target to 8,000 from 7,800, pointing to an exceptionally strong second-qua...",
    "url": "https://investorshub.advfn.com/market-news/article/34287/jpmorgan-raises-sp-500-target-to-8000-as-earnings-and-ai-growth-strengthen-outlook"
  },
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "Bonds Face a Bigger Threat Than the Fed as Global Rates Climb",
    "type": "NEWS",
    "remark": "News via Bloomberg — As investors debate whether and when the Federal Reserve will raise interest rates, market expectations for further tigh...",
    "url": "https://finance.yahoo.com/economy/policy/articles/bonds-face-bigger-threat-fed-120000846.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "Central bank market backstops risk fuelling leverage and future crises",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- Central banks may be encouraging excessive leverage and indirectly lowering government borrowing costs ...",
    "url": "https://finance.yahoo.com/economy/policy/articles/central-bank-market-backstops-risk-073550702.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "‘Horrific’ Conditions Grip UK Hospitals Unprepared for Heat",
    "type": "NEWS",
    "remark": "News via Bloomberg — “Horrific, horrendous, unbearable, unsafe.”...",
    "url": "https://finance.yahoo.com/healthcare/articles/horrific-conditions-grip-uk-hospitals-070000753.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-15",
    "event": "HelloFresh (XTRA:HFG) Stock Sees Modest Fair Value Cut After Analysts Lower Targets",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — HelloFresh sits at the center of a changing analyst story, with fair value on one framework moving from €5.88 to €5.19 a...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/hellofresh-xtra-hfg-stock-sees-210957913.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-15",
    "event": "DIVO or JEPI: Which Monthly Dividend Actually Protects Your Principal?",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Both DIVO and JEPI hand you a monthly paycheck funded by covered calls on blue-chip stocks, but one of them has been qui...",
    "url": "https://247wallst.com/investing/2026/08/15/divo-or-jepi-which-monthly-dividend-actually-protects-your-principal/"
  },
  {
    "stock": "JPM",
    "date": "2026-08-15",
    "event": "This critical Social Security rule permanently changes in November — with less than 90 days to prepare. Are you ready?",
    "type": "NEWS",
    "remark": "News via Moneywise — If you’re a certain age, it can impact your payments....",
    "url": "https://finance.yahoo.com/healthcare/articles/critical-social-security-rule-permanently-111500909.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "Anthropic Revenue Surges to Over $11.5 Billion in Second Quarter",
    "type": "NEWS",
    "remark": "News via Bloomberg — Anthropic PBC is telling prospective investors its second-quarter revenue jumped at least 14-fold versus the same period...",
    "url": "https://finance.yahoo.com/technology/ai/articles/anthropic-revenue-surges-over-11-210857853.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "Weekly Wrap: Bitcoin Treads Water As Summer Doldrums Grip Markets",
    "type": "NEWS",
    "remark": "News via CryptoProwl — Bitcoin’s (CRYPTO: $BTC) price was trading at $62,800 U.S. on Aug. 14 as the market finds itself in the midst......",
    "url": "https://www.cryptoprowl.com/releases/weekly-wrap-bitcoin-treads-water-as-summer-doldrums-grip-markets-6434"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "JPMorganChase Declares Preferred Stock Dividends",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorganchase-declares-preferred-stock-dividends-202300466.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "JPMorgan Spots Something Unusual in Hot Stocks",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorgan-spots-something-unusual-hot-190932634.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "What Does JPMorgan Chase (JPM) Olympic Deal And Banking Exit Mean Now?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/does-jpmorgan-chase-jpm-olympic-190823020.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "JPMorgan Dropped Polymarket Banking Over Regulatory Risk",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.bankless.com/read/news/jpmorgan-dropped-polymarket-banking-over-regulatory-risk?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "Salesforce Stock Drops 2.8% as JPMorgan AI Bounce Vanishes",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/salesforce-stock-drops-2-8-182748477.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "JPMorgan Resets Knicks Valuation After Lakers Deal",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/media-advertising/articles/jpmorgan-resets-knicks-valuation-lakers-184822278.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "Sandisk Stock Soars as JPMorgan Targets $2,250 After Bullish Investor Day",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/sandisk-stock-soars-jpmorgan-targets-173142638.html?.tsrc=rss"
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
    "date": "2026-08-14",
    "event": "JPMorgan Chase & Co (JPM) Stock Price, Quote, News & History - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiSkFVX3lxTE04TXFrZ0ViZDNCRmp4VDJ5T3BKZlNNUkZ0VW91V1ZXQjIxRFdNNDVXSWN1YlF2Xy0zeVVkUDF5QmhraGN0S2YwLTJ3?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-15",
    "event": "JPM Stock Slips Premarket: Morningstar Says JPMorgan Is Becoming Increasingly Attractive At Current Levels - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxPc2pGR3ZpREd4QXg4clBCai1IQnJWYmE5TnVuYjZTendLcS1oY19naG1xZlRqeUtwa2RNM0txQkNwdGZXbFQxSlhqeFRkbnF1SHRCYW54N25yeEtpc3dLNk5UZy04Rlp1Z1d3SURkazFhS2NDdHhHZldiNldhMElzXzJpTG9RN1R4RUM2YjlxSDgzTFBRVmp0YUVGNHNNaDRYbS1nblJfYllIbjVMdlF3Yk1sMUI1T1FDaWhUWk50N1RiOTc0aHhKWVFsc2J1OGlfNDRTU2R4LUstT213V1otaEhITVZzZw?oc=5"
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
    "date": "2026-08-14",
    "event": "JPMorganChase Dividend Declaration Covers Series II, OO and PP - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOUTA2UFI1VHItR2tqRFFnNFlOQkUxdzNzMUN6TnExM2RERjM2dGs0S2ZJX2V0cDhSYV9VY093M3luLUN0MWI5TkVlSHVNQ2FZRkx3VmxHZmtTYXhPMXczTmRnd1k5MFpsQnlWeGg0d1ZOekx1bXVjaVN5NS1vVlVnTFBiemFXdXdIMG9YOENqYW1OZHlLZEM5Qlh3?oc=5"
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
    "date": "2026-08-14",
    "event": "JPMorgan Chase: How To Limit Risk On A Stock That's Doing Well - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQLVk3bkVwaTRNdmNKYWlmNUJvZ0gxNE5aOWhyNHFTSFpaUjV1NFFEbWVjSzEzZ21wdEs3WVJ5Tm1faVNfQUNPcjBsd0pTZ25DRDVualh4TWJHazBoYVJTVEpOU2l3T3R6UmJ0Z1RoUXlZb29PZVhyOWswTFF3Tk5tUWdSbHk4b203YmJob1JsWFV6M2hEU2tMdzlteXFtcVdlVGdn?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "JPMorgan Poised to Become First Bank with $1 Trillion Market Cap - Intellectia AI",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxOSzhGOTgyTjdIaVI2MU93SkZOTW53TmRuVVN3cXZYbkdCOFUxSEVzc3JuWU9MM0RubTdjQlZaM1BXSHROM0ItaFE0Y2ttYXJfLXU2cG9HNTMtMXMtcGhSaXpHZGdjOFFJT085VkUxTnVqNm9KUV84YjlFUHc5TU8xZ05xd3MwNC02QW9NU0YweER1OTJ4Ry1OZG01bnY5QQ?oc=5"
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
    "date": "2026-08-13",
    "event": "JPMorgan Chase (JPM) Stock Looks Reasonable On A 166% Five Year Run - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQb3NhSXFzWDVlVGZrUFJKWjNrdzgzTU9jR3FqdXk5czNnT0F0OEt4S3o3ZGM3TV9tX3BRalRxQlRkSFg3cEpYNGZQcjVmZU9VeHY4cDZqZEFKQlRFTHU4bVljdm1yMmdsNzVYS21iYThVT1JhUnVueHMta0RmSTcyUFJ6X0U3Q21jamFQeUlMNm1iVk5UbzRtMkNsMA?oc=5"
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
    "stock": "JPM",
    "date": "2026-08-11",
    "event": "JPMorgan Chase (JPM) holder plans NYSE sale of 2,500 equity award shares - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQbWhrN2dwd3ZTdjlSQVU5OVFlNUhTbHhNQ2h5czFnUjl3Y2tiMHg5SllPdll3djdWaTNOSWF5NmRtMk5vQW9xRldhQkRuOHhlRWw0YTAxbHFJaFItcjFnOWlwSGk1QldnbVFjVXMwR3NSWS0tOEJRdUFGbWQwWVhiMy04NlZtMkV1a1ZPZm92ZmV0UjB5N0VoVw?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "SOA Wealth Advisors LLC. Sells 11,299 Shares of JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOR0VkTTloZTZ0Z0Q2bkVBQVFKYl9VM2kxZkUwa1Z1UFVpTEdZa3pGY1BtREd0MGc3b1k2U1N4cjMtNHVmMHpGUE84Q1hqa3ZqTTAyb3RJSkVnVEtrMklhZmRfY3RNV3p6WksyYWJVaE44eUxoSTNkVEU3SXREb19mZ0N5dDNoVElKNW1pSWlraWI3T2NMRTlBN2VSS3Ezakh5YjJ1WUlHNzg3Wmk5M0NiekVXOG04cW15RTl5VVNrLWpUMUNSNGUw?oc=5"
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
    "date": "2026-08-13",
    "event": "JPMorgan Chase & Co. (JPM) Up 5.3% Since Last Earnings Report: Can It Continue? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxNN0FJSWhha0ZmeUxMYnZFSlVTSlkxblIyVHZ5dUZUOGZEUGhUWkFwNEVyNmxMVjVYVzhvNHQzQ0Y5allncVBQaVdYQVBHUnMzWW1vUDRFaFoyZUNuUXpsc1RtVVVCbU43MXVES242cWFXNTVHOHZubVRSV3hSUklPSGU0QTRacDN0VEVvbkxQeEpSUQ?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-16",
    "event": "Quantum Financial Partners LLC Takes $1.70 Million Position in JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxPdGtWckpYVTZUZnRZUmlZVWZINnA0c2xXTWlYRE9JWnY2WGtpa2g4RGNwemdUU3RtWGpZX0l3ZXR1UVM2MWtuVVBZT2JNa2xaT0RTbEJ4WHVyUnJYWC1zeGFTWXdhQnFhb1VZNXlCYWlrZjhVaDVfakVHWlNLU3BWUDdpWktEeS0zZDlmVE16QUlJRXluX1luWDNUODRPeXpEMnZ2QWw1TWhIbjU1VW10aEpZQUY0VS1ScEZhd1lVRVgzY1pCcTdPd3pqZmpBbmUtT3ZrV2pfdmRJUTg?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-14",
    "event": "JPMorgan Chase & Co. (JPM) Dividend Yield 2026, Date & History $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTE9jZEFUd1pDWlBtQXBsLUtXRlpQWmVtMzNIVVF3ek5zSS15TUVCeHAzSFZmVUJITjAzMlQtb2JOcTRvMTZ5eUZPNS1qbENWM09KQ21GeTNJd0JjNUp4djQ2OUt3?oc=5"
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
    "date": "2026-08-12",
    "event": "JP Morgan Chase & Co. (JPM) Stock forecasts - Yahoo Finance Australia",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOVXFjS3lzM1I0d053UHFkOEhTNXNTS0RJSlpRN2tMeExrX284SnZOdFhpaFRleVhZX2p5UEtxN0hnQmU0bWJ2SjBjUVFxc3NaRi1tQnRxa3ZITzJuS2pSbWtrblNwV2J0Tm5LN2xKZXo3alIwbVVCN0tlNE5Ec21XdG9fNkwxMTlvNDVyWTJ0LWY?oc=5"
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
    "date": "2026-06-18",
    "event": "JPMorgan Chase & Co. (JPM) Stock Sinks As Market Gains: Here's Why - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNaExvUkwwWVVZbmdFY2VrTERGc2NwS0xLX3lhNkVWZFA0LTdLQTZESERCeVpDWVBFRUNJYXdOX1BkazhNMzFycVZXZm9rTjRTTUVhMmROZlBQeU9hR2g5TjFYV0taV1hvTnBfMjV4TXRGYjRRR09jWHFhUmVQb0llRl9Jal83X2dRSXZ4ajdYaGp0MWxXcEZj?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-07-25",
    "event": "Jim Cramer: These Two Financial Stocks Are Outrageously Cheap - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPYzFET0trSjY1NEZNdEFrLXE2VzhIN2RVQjVCUWtyYmFFZ2pkeDQ1bEZDQVNReHNhTTZaSW1Jcm9KT0NQSk90OS1fbjdTU0JGdFRLdEU2bUFXdTgwQ2dEbHRTaFp6M1hWdnVXLVhaYW9IcW5EVzY0c2hKazZWRGE2M3MyQ3dVaG5IWEVxNE1iUXhmN2NhbE9GRHY5T0w?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "'Spending is leading to earnings': Wall Street strategists see payoff from Big Tech's AI investment",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — Wall Street sees booming cloud growth as a sign that AI spending is giving a return on investment....",
    "url": "https://finance.yahoo.com/news/spending-is-leading-to-earnings-wall-street-strategists-see-payoff-from-big-techs-ai-investment-151610093.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "Peter Thiel invests $118 million in surging big tech stock",
    "type": "NEWS",
    "remark": "News via TheStreet — Peter Thiel’s Thiel Macro hedge fund has been conspicuously out of investing in stocks for a while. His fund reported ze...",
    "url": "https://www.thestreet.com/investing/stocks/thiel-macro-amazon-stock"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "At AI-Fueled Market Party, Wall Street Eyes the Rates Punch Bowl",
    "type": "NEWS",
    "remark": "News via Bloomberg — Enthusiasm for Big Tech and its huge investments in artificial intelligence is powering the stock market to record highs...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/ai-fueled-market-party-wall-123000539.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "Peter Thiel’s Second-Biggest Bet is Not a Tech Stock Anymore",
    "type": "NEWS",
    "remark": "News via BeInCrypto — Thiel Macro put $76 million into Vista Energy, making the Argentine oil producer its second-largest position after Amazo...",
    "url": "https://beincrypto.com/thiel-second-biggest-bet-vista-energy/"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "NiSource (NI): A Costly Quarter Masks A Bigger Bet",
    "type": "NEWS",
    "remark": "News via Insider Monkey — On August 5, NiSource Inc. (NYSE:NI) held its second-quarter earnings call, and the numbers told two different stories a...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/nisource-ni-costly-quarter-masks-100126971.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "Open-Weight AI Won’t Crimp Demand for Picks and Shovels",
    "type": "NEWS",
    "remark": "News via The Wall Street Journal — Some of the artificial intelligence boom’s biggest beneficiaries can cash in whether open models proliferate or not....",
    "url": "https://www.wsj.com/tech/ai/open-weight-ai-wont-crimp-demand-for-picks-and-shovels-523e6410?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "Amazon (AMZN) Stock Gets Fair Value Bump As AWS AI Demand Lifts Analyst Views",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Analysts have been nudging up price targets for Amazon.com, with some research now clustering in the US$320 to US$365 ra...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/amazon-amzn-stock-gets-fair-061049757.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "Amazon vs. Microsoft: Which Cloud Computing Behemoth Is the Better Artificial Intelligence (AI) Buy Today?",
    "type": "NEWS",
    "remark": "News via Motley Fool — Both Amazon and Microsoft are benefiting from the AI arms race....",
    "url": "https://www.fool.com/investing/2026/08/16/amazon-vs-microsoft-which-cloud-computing-behemoth/"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "Billionaire Peter Thiel buys 1% stake in Argentine Vaca Muerta oil firm, filing shows",
    "type": "NEWS",
    "remark": "News via Reuters — BUENOS AIRES, Aug 15 (Reuters) - Palantir chair and co-founder Peter Thiel has bought a 1% stake in Argentina's Vista, o...",
    "url": "https://finance.yahoo.com/energy/articles/billionaire-peter-thiel-buys-1-013411129.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-15",
    "event": "How could open-weight models impact GenAI ROIC?",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- The rise of lower-cost open-weight AI models could pressure pricing and returns for model developers, b...",
    "url": "https://finance.yahoo.com/technology/ai/articles/could-open-weight-models-impact-235236970.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-15",
    "event": "Elon Musk Says SpaceX Has a Massive Competitive Advantage in AI That Amazon, Google, and Microsoft Can't Touch",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/15/elon-musk-says-spacex-has-a-massive-competitive-ad/?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-15",
    "event": "Tariff refunds are juicing corporate profits and GDP as more tailwinds converge to propel growth to a blistering 4.3% pace, top economist says",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/economy/articles/tariff-refunds-juicing-corporate-profits-190804315.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-15",
    "event": "5 Monthly Dividend ETFs Paying 7 to 14 Percent to Ride Into 2027",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/15/5-monthly-dividend-etfs-paying-7-to-14-percent-to-ride-into-2027/?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "What Is Amazon.com (AMZN) Chasing In The Reported Decart AI Bidding War? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOME11RnlNWDRfUk1JcEZkcUdNM08yVEhrdHo2dnFSSU9iX1g0QjBlMjBJdWVBa0JsMjFzeEh6bEdSbzRNWkxmdDRQQXQ1aXdtYWh0a2lueW9wdTZTQlZ2eG9xNkx4UXhaaXhvdHlXMU5sbWZvVWxVX3M0aU40TlpoelVWM1I2VW1VMjhRdUZScjQ1OXBuNXllM3FJaVNsdzQwN2pVSGJfSm9IelZZZm5KZjcxeFRwZTQ4SWs0WGZxWnR3cWc00gHKAUFVX3lxTFBZQkF2X3JuVkZ2ZzV1R1dCSkRMaFNkeHZ0M1JhcTBFd2RtQi1fWWVuSHNkMHNHNGVmLW1SbktUbGxZX0F4TlhjUzRiYWhFMnpUUUpLS1pUek5PN2R1NU1oZnR1VHVVREJoNG9TVG1EVEJvbE1LRHZGQkRIZWg5dUI0cGNSc1oyWUlId0pUNzIzdHp3UUMya1VldzZOM1RpdF9KaUFyejNHd0RFeHdmX3ZqUVdBYnBYWnp1cDNVUEVTYmRpWUVkR0txc0E?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-14",
    "event": "Joshua Kushner’s Thrive Capital Invests $215 Million in Amazon - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPYllqd0lNNGZHV01hMlJtajN1anpxUVlISVM3bnJYb2VIZXdTQXVGYTJNYjU2V19fclpfU0luRXpqYTBUNFhHWGlreWdjLTZVeW5MN2ZFcDhlS0xNWFZ2TnJjckN4dm53UnV2dzdFQ2ZVaF9WWEpHV2ZOdTBUeHVYekUzNFB2ZjBGUndRUVNyWTNObkxDTnowTzVuZEFOeThCQzdOUA?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-14",
    "event": "Amazon.com vs. StubHub: Which Consumer Stock Is a Better Buy in 2026? - fool.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNNnFlZVREU2dtVm5yZnd4WHRqZzVfWTlaanJWVUJFdzRUTV9EMmNLN1JxN2EwSTluVnRBNnc5RHBJdkRRbkRNN1VQU0hBT29uV3VqMmdkWjJBc2VuS0ppRk9zbWZHY1ZqX2ZQRG5GamtfVUZXZENiWmxtTGVPcE9jWGh0aDJ4RzRnd29kZHVlTWtQVExQN3VtUWdodHFtQTFFV0pnemxURWkzWXN0N2J3UEFmTlFBMjgtYXNz?oc=5"
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
    "date": "2026-08-13",
    "event": "Amazon: Blowout Quarter Justifies Revamped Fair Value Target (NASDAQ:AMZN) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPVnU3SmZzWk9vdEUyZEhDd2QtLTFtdWJGYmlmTXdscDUtUzExMkMzR25SdHZRX2xGZ09jU2JZdUVBNElQV2N1eVk3emN4a3hDaktBMGJhR09acE9tNGxjWWp6dWN0U096RTdVOGVZdDJtOFBMZ0drX3RadGdwRzZDNkZ0SERjTkMxYzNmcDJUbGVlNXhxWWxRNjRDZVBMSTNBVHc?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-14",
    "event": "COST, WMT, AMZN: How Politicians Are Trading Retail Stocks Ahead of Earnings - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxQcGFZdlNrbGJpTWV4ZnhHZWh0OXp3aFRmZWNpakdZYm1xZWJubkZ3SVBkdG9oTTg4YUdwUkdWOGRpc3BVc2VQQWdGN2tXOE8xWG9DdWMzaEdjR09LS05obDhGWFU2LUZBRDlGV09sM0JybHJaNVFKal93Vk1MX19iMnVweGFmS3pUQjBUX2pPdjVQVHNEbG1HMWtQRmZuUHZoMXZVVllR?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-13",
    "event": "Amazon’s Price Target Says +32% and Not a Single Analyst Says Sell - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQVkRXU1AtZFBuNG95ZC0tOEYwcGNhSWFlSnRDWVpGQndEMU9mVFkyNHE4TmxpWE1RaVltVEdlZXBxMV9CSUd4RnMzSG82aU5kVGdwcUZHQTc1TkV1VU1zNWVRVTBjak5FOFZyRFhMU1hPZVRjbUlWbUtsNlFoZXFLX010YVJGOWdHcGtkMFFGWWVFdUZGU3BnUTkzVHVSU18tUWV1aVFYSzYtdXc?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-14",
    "event": "Amazon and Alphabet Both Cost More on Next Year's Earnings Than on Last Year's - fool.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQUExQWkJzM1RrOWlCNHhKMU9XcG9BY1NMX2lnTVlySE05bmFVWkxxX3gweV9lem1IU0xBeDNKajlFSkFzV0Z5Tm8zaDBkdWpJcEhKcUdhd3l5ejAyazBMRFJmNFNXbDZxOHY3VXExS3Q3RkhRQmphVjJSZEx6YU56Q3c2c0FDQ3pRVHRaZk1OSFdTOURLTnhMZg?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-13",
    "event": "GOOGL Stock Tops Retail Pick Over AMZN, META, MSFT For Next 12 Months – But META Leads Wall Street Upside - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNQUZ4SmtrZUFYMENoLWF3eTZEd1FSR2lkZktWQlJqZDFJNmI0VVVLcE1kUE9vWDdFU05Mdm5Qb25naFJDclVrZ3psRnBLVUlxaU5HcjRzeWJQYnN3bk5CcUlDQ1h0c3hGT0dXN29TX0pfc3pqWXBOT2twR2dGV3JaMWI5THNaQ3pDUGctZnlaUlM0dmFBZUxvdg?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-13",
    "event": "Jeff Bezos takes bold new turn amid $4B Amazon sell-off - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQeWVZTFZCRi1oU28wMEpVVWplNjlBSGdRR1o0S1FDUm1yYWZsTkd3dzJxRnM5NEtzSmtWWXFNNURTZGdkOTZmNC1iUFRWQVBHVmMyQzJOVWxveEhsNVlRdEsyQzUyeTlLY1hkZmNrR0lDSjNqU194YVMzNzNNU2NpOF9Ddlc?oc=5"
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
    "date": "2026-08-12",
    "event": "After Earnings, Is Amazon Stock a Buy, a Sell, or Fairly Valued? - Morningstar",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPcUJfbTBpX1RKdW1fTE0zclVUT21KTS15TTJ3NFVJYzhOS3JCZkR6UEFyWTRVbjBNOWRrSHhYbkRnNjVKNG1NV3AwN1ZZNzlmZzVJbUNhd19NbEtBSFVBQlhteVlpWkhqXzdtbk1GYXhYckZKZG9uNk41Z0RIajZZMTBlM0h5dW9xdTFYTzV3TmNHRVp2aEVpZDR4MFFGV194TDRGRw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Amazon shares appear stuck in a rut. Trader Mike Khouw is betting things will stay that way - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOYjRlZzBxMk52R0hZRlB5T3BZblFOUlc4Q1VOVkEzd0RpZ3ZGOUtYM3ZJVTlPZlpZb3JIcGhSNFJjXy1kS180dU1BUjI1aFhwRFFOVnR4YVlWY29WbVFuQmxtMmREUkpqRTZDVURwR1lvZDZrTUxWRTBfR29YNm5FV0VoOVlEUXQ5R081V0QzQ016WllvU2JZUlBmY21PMzB2TTFfTldvS093Um50UzNyanM2QXduWDlZa1VBak1fMTg4UkIxelHSAcsBQVVfeXFMUFo1OXhvRGc0UDl0c0xyT21hV0JNZ2pHMzZQZDBLNGhLOTh6ZXhSbUdESkFRaXNmaHdjN3poV0NCTUUzb0tfalNXRkhIMjVOT21tRzVQNVF1NFJHT0xRSXNfR0hJb0NxRDRoRUItaUg4eGJzYlJPdms4U2E1TEN2WXhIOTB0Y3Npa0lVMjk4SnBYdjNjbFpNV1JPVTFpd1VVa1gzWEtuZkhDQWExYl9aeElzUUdYbHZTenlBRUVaOWpCZXdmNGxqaHVwRGM?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-15",
    "event": "Why AMZN Stock Is Rising Today - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPYnlLNHgwSi1mZVgySHpQZkl0QzhFb05sQUpqSFROeGNtQmoxQzFKT09PbHBTRy1fdFBZRUJNeTBaa04xZ2d2YWJEYUNZSk8zT2FfbUVDandRaE4weVZtTjQ3M3NTTWdLalFXRnpfRi1rdTFNNnpQVEZSV01VbzRtajlnTTR5RmxZLWdZd2RrQzFNYXJKeTRBUDNIUjIzT1pDMHFGYVcwZDBqTDBJZ3BuNm5SNENEdw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "Amazon.com, Inc. $AMZN Shares Acquired by Private Client Services LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOUTRHMzdtbElYODAxdzBtQkxTRUYyT0MtVTc0NDBJdnI4RjFtRzRiMW5vT1VrdHdXdmY0clZlTUgzQkQyaDdQUUZlcnlxM3c5MC1XdUZyNHRDcE1ISEdiaFFkLUc0QW14U2tIWWNfdXhPLUNsZjFGN3RTWlBVel90ZG1XX1JRTTQ2S29CMGw1Tl9jUkZrbklYV1Vib0Y3cTNTMUNEU0RROUtVUWQtRzJINlFmMENYbTA5d0kwa1J0LXpvLTl4?oc=5"
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
    "date": "2026-08-11",
    "event": "What Could Push AMZN Stock Higher From Here? - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNSEw3cHFRVXg3bU1iRUNkdFBiQlZndkd1OXhGeFA5blBJV0doU2pUQmg2Ujh4aVE1VGJYcXNhOFRpcDQ3LXUxZmJPOHR4TG8zLVN6UGdhQTJkWHBLOS1jV25LdFBqRnNELXlqQ3ZqMnREZTU2SjJpX2dzaE9jRDJEMVJTeDBleS1UVUFzd2x5NTMybmhFMUFJVEkzTGdORUl1WlFwU2Judw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-11",
    "event": "Amazon (AMZN) Stock Could Be A Bargain On Cash Flow And Earnings - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZzEzU2l5Z1VIMzk2WGttTTlCOVpXU01PalJkeC14cUFEdDNSbktBeXhlUDJkRUYwSW1NSWxqVnUxTjZaNXpLd2pGaTJjLUthME9VRThJajhlQnBpX0MyaHJMdFg4bjI0OGtVLVF4Z0ZRVDZzY0hnMDJERWdiZFltQmVaVUlpRW5rUHYwUmh5WUl3SjY1dVBjMkJEYk8?oc=5"
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
    "event": "AMZN Stock Slides After Proposed Consumer Class Action Suit Over Trump Tariff Charges - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxNWFBRVXdqbmg4bTZpUzZuVmdkVTh3UnVONjB4SGE5OEgxbWdqXzdpempCT2x2WGRNejlpdnE5azhuNlhlRjNqOXlRb0duSzhkdElacDd1NjBDZHZfVTBfajFKMUltUW0zVlNzR2duT1EzdTQ1UzdaMWFfRVlmMjNGYVItazBFVmVEYWhSQ3BUTDFVTnBuWUh4eURYQUs3LW82eWNLLXF5MzZlSmVvWE1YX01MUjRXSjBRVFNwUmxXTnQwekVyRU8tQlUtZE1Xay1mT1Z4RS1aSE01OGVWTXZ5VUZOOA?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-16",
    "event": "Amazon.com, Inc. $AMZN Shares Sold by BSN CAPITAL PARTNERS Ltd - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNMUR5d3VyVlhBRjhKTV93Z2RiNy1pWFl2VG5XaGNxcjRub25ycnBtRkxDU01ZSXBmTGlCOGRTSnM5a2hyOUhwR0c5c09tcElPMXlNVXVta1RKb1piT05aQk5MRHg4R0hfOHdiMUxhVVFBVzB5MTNBZUtoTVlva0U5TzRGQkQ1VVA2OTEwTFdKTU1KdmVBeEdHTlVSZVZtb0JaZ2p2RG5vYmxZSGtpMVZ2LUZvMjh5VXFKbDZR?oc=5"
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
    "event": "Amazon (AMZN) Stock May Trade At A 39% Discount Following AI Demand News - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPOF9uTHZIallwS2s0Z0pnckcyTmthR0owcmFWd0U5dldwdGxoSTZneHZkc3JyWW84VEFhYTQxeHVTNkJIeG5FVUxjQkxuYjEyaGZWZ3NvbWo2OTM4a3FHMUNvcmhtZFQyMDg4TDNxUHZsQ0hVVHdUNjdYMGdUcEwxd0sxc3J3NkVSZXN3S2xIVFZVRjBpNXZmQXo1dzdxRXdtbVQ0MUFFSlpKTTJaU0hveHhoR2J3b05fV2oxdEtsU3pvaWpk0gHKAUFVX3lxTFAtVTkzUE5nRXJPd05ienNZTEM4YWFQb18yWm5NZS0wclJWY1BSLWpPU0I3RVBvdUM0QTlmMHdISFZ2dXRFeGR0clRlc2lpSGNMS1J3b1pheUFabWlXUjNqOEFBTWFvQ015Y0dXMnowRnhVa01oNGdaSDE5OVdnNzFFVHQwU294UFdZT0MzS2dZeUJ0QWtBV2loUlhnM2o5VGlNSFJzaUVqLW1DaHk2TGtQVnRNRHZ0aGE3MlRCRElnNkFIT2tJQUpDaGc?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-15",
    "event": "AMZN Stock Rises Premarket, CEO Jassy Defends AI Spend: ‘We’ve Lived This Movie Before With AWS’ - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxNRGtacllNeElWakYzUXlVeXBibGljQWJiRHd2UzE0Y2hCNlk3S3dTQlpHa1c2VG1IRUV5OWxsMnpXVjdqdk5URXdtdTBTSC0yRmp0Q3pQUUlINW85OTNGbWFVR0Npb01UNFNualVZLU5YSjMwaVcxNDBsc3ptamNxLXV4VFZHOXEzSFZySHRmRVpYQTQ0emEwWl9WRU1tOFNHa29EMEgzeHBuT1RydWV3UHg1TlBlTVRCU1kxR1BmVlBBOENWWHFJRWY2UVlMRjJiZTNRRW9INDVUU0d6UzV0ZFVuZ0o2ZnVleVB4MA?oc=5"
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
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Is Now a Good Time to Buy Costco Wholesale Stock?",
    "type": "NEWS",
    "remark": "News via Motley Fool — Costco is lagging the S&P 500 so far this year, but it can still be a long-term winner in a portfolio....",
    "url": "https://www.fool.com/investing/2026/08/16/is-now-a-good-time-to-buy-costco-wholesale-stock/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Satya Nadella's Microsoft Stock Jumped 18% in a Week After Azure's Annual Revenue Topped $100 Billion for the First Time. Is It Still a Buy?",
    "type": "NEWS",
    "remark": "News via Motley Fool — Just like that, Microsoft goes from lame to flame after a difficult stretch throughout 2026....",
    "url": "https://www.fool.com/investing/2026/08/16/satya-nadella-microsoft-stock-azure-revenue/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Archer Guided to a $200 Million Quarterly Loss. It Has About $1.6 Billion.",
    "type": "NEWS",
    "remark": "News via Motley Fool — The air taxi maker's own guidance calls for losses as deep as $200 million a quarter. The balance sheet says how many of...",
    "url": "https://www.fool.com/investing/2026/08/16/archer-guided-to-a-200-million-quarterly-loss-it-h/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Meet the High-Yield Dividend King Wall Street Is Sleeping on. Here's Why It's a Buy in August.",
    "type": "NEWS",
    "remark": "News via Motley Fool — Sysco is delivering impressive performance, making the lack of attention Wall Street is paying it perplexing....",
    "url": "https://www.fool.com/investing/2026/08/16/meet-the-high-yield-dividend-king-wall-street-is-s/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Elon Musk’s SpaceX Holdings Revealed. (Hint: It’s A Lot.)",
    "type": "NEWS",
    "remark": "News via Barrons.com — SpaceX  is a popular stock, backed by some investing and corporate heavy hitters.  The heaviest hitter of all, of course...",
    "url": "https://www.barrons.com/articles/elon-musk-spacex-holdings-stock-8a935b9d?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Should You Buy Meta Platforms Stock Below $600 Before Mark Zuckerberg Unveils Its AI Cloud Business? Here's My Honest Take",
    "type": "NEWS",
    "remark": "News via Motley Fool — The company is making risky bets on artificial intelligence, but that may be undervaluing the stock....",
    "url": "https://www.fool.com/investing/2026/08/16/should-buy-meta-platforms-stock-ai-cloud/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Nebius' Contracted Power Guidance Continues to Surge. Here's What That Means for the Stock.",
    "type": "NEWS",
    "remark": "News via Motley Fool — The neocloud company is scaling its gigawatt portfolio quickly....",
    "url": "https://www.fool.com/investing/2026/08/16/nebius-contracted-power-guidance-continues-to-surg/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "History Says This Is What Will Happen to Nvidia Stock After Aug. 26",
    "type": "NEWS",
    "remark": "News via Motley Fool — The GPU leader is trading at a low valuation level ahead of its Q2 earnings report....",
    "url": "https://www.fool.com/investing/2026/08/16/history-says-this-is-what-will-happen-to-nvidia-st/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Sundar Pichai Raised Alphabet's Capex Guidance to $205 Billion the Same Quarter Google Cloud's Backlog Hit $514 Billion. Here's Which Number Actually Matters More.",
    "type": "NEWS",
    "remark": "News via Motley Fool — Alphabet recently raised its artificial intelligence (AI) infrastructure budget for the year....",
    "url": "https://www.fool.com/investing/2026/08/16/sundar-pichai-raised-alphabets-capex-guidance-to-2/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "This Oil Dividend Just Got a Raise. Here's What It Means for Shareholders.",
    "type": "NEWS",
    "remark": "News via Motley Fool — Delek Logistics Partners is a consistent dividend raiser, and its pullback on news of a share offering may be an opportu...",
    "url": "https://www.fool.com/investing/2026/08/16/oil-dividend-got-raise-what-means-delek-dkl/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "I Checked VIG's Top Holdings. They're Not What You'd Expect From a Dividend ETF.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/16/i-checked-vigs-top-holdings-theyre-not-what-youd-e/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Neuroscience Is Becoming AbbVie's Quiet Powerhouse -- and Management Now Sees $12.7 Billion in Sales This Year",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/16/neuroscience-is-becoming-abbvies-quiet-powerhouse/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Applied Materials Trades More Than 25% Below Its High With Revenue at a Record",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/16/applied-materials-trades-more-than-25-below-its-hi/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-13",
    "event": "Nvidia Stock Investors Just Got Good News From Wall Street (Hint: It's Time to Buy) - fool.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNbE1sMUwwNVMtMFVFa3FhanhwLU9XNTNmVlhYbGJhMExUaUptV29uZEt5SkY3aU01Q3RKTlF6eS05QVNjRUc3dkpfbEpNNDlTVXk2dXdQNmVOTjB5TlczMFJCN1JqZDR2R05qWjhWZF9tWWNnRVpuVHdBSVZiei0wT3lEdHp4TjNRNVYxaEt1M1lhRF94aW5N?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-07-27",
    "event": "Nvidia Stock Slumps After Data-Center Report - WSJ",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxNYVFLVEUxZ3c2Rlc2MHNiRkk0YkJzZ2dIVEMzZlJhbkowbUhqNm1CaXNRUzA1XzJWUnF1cnhjVFRnSWRmTFJiXzRUU2xWajdCNHlFLUczeHZXQmpiYXg4YkVkTDRTZ1pzY0dtWW90N0ZsNHRTSlIzRnVpQy1haWZydjJSS1hjVy1Pd1N1T21WZmhFTUZ3V3VXV1hvbmtTNUNvMmd6VEx0SXJjQm9UQWpHYW1OTWZWbHBWeHZfVE9JWTZqZFhWMlJtc1dQZzRDSGRUWjh5M0NWUmlEaEpxcEhuNWltWk1TQQ?oc=5"
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
    "date": "2026-08-14",
    "event": "Nvidia discloses $21 billion stake in SpaceX at end of second quarter - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOczZFNXoxeDBQS1Y4T3ZvdW96QzNlUlBGOWZ3WEtqbDZXaTc5MTZESDJyRTNha1F3WWhwdHNfYXd5RDhqR2psbjFYRWZsR2tJNmVBc1J6THl2cWt0TFduRHRySG5YR250N1hQUkdKLUNHd1hZM2wxbkNRWlJWZ25UVHpFa0Q5bmUteGJ4bjh6c1IyY1lHZlBwMUMzLW5YS09sQ21oN1F3aGTSAa4BQVVfeXFMT2ZZMHJZWGxvZ1FCZTQ4SVFmUVJqck5xTGdLNzNOYjRSYjRIU1V1OHNvM2lqQnpKQWYzWGVIbGpsNTFpWE1mTHcyNmZfWDBHUnVhMm11NzBjbGF3Wk1WZ0FnVjhmVjBOZXk3a09aZ1R4eFJqUHhwUmY2VXg5ckdzOGR4YTF6X1BLY1hSd2hsbWd1NnJfZ093cXY0MkpMeFEzbUFFRXByVlRzNnpzM3dB?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-15",
    "event": "Nvidia, ASML Lead Five Stocks Near Buy Points With Roaring Growth - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQN2tSZzVYT0d5cEJ3TEZGcW1VSm43NGxOSnBtVTlhOVliaDhKSzRoRzBuckY1RGN0YmowUHpFUUoxOGp4ZTNFYUpZcXNiOEctVGNHMm82UzQtMmhYdXlmVG15azhySmtGQVpHelpBVktlaUJ5NjBmQUY5WDRFT2MyOU1xLWg4SnNiWDA2Wi0tQUV6RmNnd3o4?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-14",
    "event": "Nvidia discloses big stake in SpaceX in Q2 moves (NVDA:NASDAQ) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQcFpDN3lSS0RQNW4zSW9FeHhoZXNkM1otWXJwY0k4aGxxZUNQa1hwSmlJVUZaejd0TGRxQ0ZLQkZzTU1KaWdqRlRyc3FadTNrUzJvbGFCTncxWnZ5Rl9WNlJtZVV1a2p0bkRQbTJISUVTaXFaYURjaUpTX1RSODYxbW5ST1ZJTXdsTXJueXNJTQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-14",
    "event": "NVIDIA's $500 Billion GPU Financing Deal Fuels Path Toward $270 - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQRDNiSFhOZnpKZXNoN1Y3cHl5WWpKZURJak90cTNEU3VPODdQbG16SnpEY2ZvYk0yLXhLQ1lkNlU3Q24tV3hqSkdsWUlpWHBJM3JCUW1GckRzVFFXVmxXR1Y3RVNrS3ppSWFDSUJ0SDMwNEJpV2lhSXozUkNFajlOQUt1QmM3V3VFMHpxejlkdFhQWk8zc3pLTWw1bFBOdw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-13",
    "event": "Cathie Wood's ARK Buys $28M Of Nvidia Rival Cerebras Amid Earnings Selloff - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQRDRlOWlBcVJUOTg3cjlsLTVzSmhrVWZMdTV1bXVCMGFwVi1QTDI1MW1ackhqVVFwWERGRGsxZ1RtZThJQmJRV3U1d0Q3V0JBX2ZpMTVvQzNrRlNBUy1pdFl4VVlqNG82cFJYVU9aQS1Ld213YWpjUGZoRVNQWDFvNGlKYlYyY1phczh5WHk2NVEwSkkxdG1DMXIzWFJuM2V4SnY2UWtZUk5veWZjUllGcllhRFRxSkJKd21vM0RUTmtKcDNfTm5XaG9JZ1lFX3JTWklTN251MGJPUFU?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-14",
    "event": "NVDA Discloses $21B Stake In SpaceX — Elon Musk’s Rocket Firm Becomes Nvidia’s No. 2 Holding - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPZmVZb0lJbnUyVUtNNGYxTHQtQ3V1cmpCeFNQeUJ6cFUtS1lEcXZ6b2s1emt2Sk9XZzdaTFJuS1RGVF9HN0s1U1liZGRxWUFpeVJUSi1FUkdDcFktbjR3c01pRTV5bHRxN3RXaGhYenp4V29wNEY2eHBLRzJsQ2VjcDQycFo5c29KRjZ6ejlkVlp2QU05R1duQlVXTWw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-15",
    "event": "NVDA Stock Alert: Nvidia CEO Jensen Huang Says Chips Are ‘Investable Asset Class’ - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNODhYcHpwRWowMm5xeVp1YXRyZ3FXODdETXNkcDl4RFdteWdYMW5fOEM5QkMtVE1NZ19DSUl2Ukpib3BvTTc0QmdIemJua29oVDh6VGhwQU5VT000OVhwQ2dCTV9fV3lPWDV4TlZxRmFpbnlqMVRhVlNiNGNjcDNaNmlTeFdlNEtCWVhiY2dfVGdtdEhKUXVV?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "Prediction: Nvidia Stock Will Fall After Aug. 26. Here Are 2 Reasons Why - fool.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPN3FPaUc1QTFndk00TmhRSHVUMERERDBxRm4xaFp5Y2tONmVWSXBnZXN1QXhVRjRLWWVSX0NhRDBkQVlLajNvc2o4U1pDRkRSOW9tVFRBcGhIbE4xU1BiaV9SWmRLYmZtYkZRV1FOSWRnOURTYUxwem12bEhDX2x3Z1NkWGEwLWZZOVVRbS1iNF9uWC1IODhSZA?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "NVIDIA Corporation $NVDA Stock Position Trimmed by Balefire LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOU1pabGJQSWdxVldEWnd0cTNhZEtsTUUyTmEzdU9La1FRT01RRmF0TC1YRkpZU2xOWWUwTS1UTG5nbEJmSk1EX3paMF9nV1BpekdpcjN6dmJDcXItVlVYUEZ1UF9MV2hnaWNKQW90WVdFUk9yVXdMZ0VaRzBmcUtPZ01EUktMUDB3TzZnYjJaSktGb3pKS2hWSzVqbUZtWnNTZXZXbFlCRzE3cldqSjBOQWxWMThkeFhNM0otODZMYkw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-15",
    "event": "NVDA Stock Eyes Worst First Half Since 2022: Retail Patience Wears Thin As Board Member Trims Stake For Third Time This Year - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgJBVV95cUxORzhNMG5sbTZPeXlsLUFWb0xrc05MRGNQcW9aS3VrOTF5RFRYdFRuQkZvRFFFdkdyNzNiaGNodWdJdjJHZE9oYUNnUWxoclN6LTU4YTRIRnR6NnZKRDV5ZVVSWWJPdGNsdFZZM01rZ1V2ajlPcTFHczdBUElKSUtJbEptTFc5V1JKQXZMbHpkeWxDazRpZGc3eHhDVkxuSXN0OE51QmI3bU1FN2pWMEFVODlFT2Q5SVVrXzNQQktFSjR1dkRFWlBpRlF4V2JuZW1rSFZtSU9sWnU5bXBRaDJxbjVGN3M2cGg4dG5SVWY4d2h6SENzbGlkdGk2dUVvWmtDRmZudmVhOHlmeTNGU0F0S2NWNFdSZw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-13",
    "event": "Jim Cramer says Nvidia now signals something much bigger - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOVEtVbkRUMVVCYzMtUGVMUmRSOVhfc2Fja3lwRXhtZVpHRjI5UU42RlM5d1pUVUpHWktTQ3Boa0JFLWtkR3hVLVhoX1VGOWhtNHVEd3B1ZVh1WVJCMlptQXlXVUx0REFpeG5pVFRuQzQtRnBSN3hreHZqS0Uyc1hHQQ?oc=5"
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
    "date": "2026-08-14",
    "event": "Here are Friday's biggest analyst calls: Nvidia, Apple, SpaceX, SanDisk, JPMorgan, Dell, Wayfair, Micron & more - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPSzZ0MFlkd0FMTldwTER0Q25UUnpVNXh5Qkt5M25NZnJGRmFVZnF5REZoZldIZnRRZlY1d0VZVDM4dUVSZy0wODUxWnRYWUpKUjVYU0pXQS12d1BlMjhFZTE2S2ZCbVZlOF9wTUVDV3NyUVgzZzNUODRwY2lEeDlVbDZyaEFsM29BNXVXcVVfVHdfdW1NOTZoT2NyX0MzQndXc2M2bFJR?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-15",
    "event": "Why Is NVDA Stock Rising 3% Premarket Today? - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxQVk5RSFBjZHhONy1wYXQ5OUZnT0JzN1BTLUM1VWI1MDh2MHA4Y2ZxY3ZXT0ppLVgzUE8tb2o3Yk5EcldmS1FDM0Q5b1doYjRrSWxXNnlUekdNdjFvMmlWcFpxLTAxZ0R6WDNaNWNCYzZEOWJzS3lXU1hsYm9tU1doNHU0TElZbFFCdF9CQW1TV0NxU2FPbmZGeW9rR1VIRzFaQUFzRlB1cjNBUQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-13",
    "event": "Cathie Wood Bought $59.9 Million of Nvidia Stock Before Earnings. Here's What Investors Should Know. - fool.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQSzgzTTZRWEM4Y0RXNnllNEc2R3ZidnN6bTktMzkxS3NvQzdfNnZ4anR3NHBnTm1rTThZZ29JNTZxbnB1M09rQmt0RHVMcEV3M1JMS0RUWmgxRk90cXhqSEdyci1ISnhjZFh3TGtjdm45SlQ2VHFLeGxBNFdUTXBRZUdlZDFQRVFTNVpiUXRQb0ZtNGo2a045VQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-15",
    "event": "NVDA Stock Looks 'Remarkably Cheap', Says Wall Street After Beat-And-Raise Q1 — Analyst Sees Nvidia Market Cap Soaring Past $10 Trillion - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNa0FheVlBTThLMGlhbGNzdGdUSnQtSEY5cmh0U1JQa01DbTlscWx4eTJUWWxqd0hMejlpOEtiU2o3OGdZa2lta3FZN19BZFk0TnlZOFFFbWUwNXRzMUd5OUNWalZmVnMzQUlfWmI3UUtLYV83WlI3VTFQUC1LUEVtUDVHX08xRmljRHJJLUM5b1pPbUp2bzdsa05HN0FKY1JaSWFpOVFFZ21JaVVhOUdZLTNaV1BFejAzZlRzTGRkbHU2NUtUMUtOWUNyTjktaTZoUXc?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Nvidia (NVDA) Stock Trades Down, Here Is Why - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPOElpUlhVLUxTLU51TTJLTzBSSlNWOWJodkRBSWd4TjkzX1BmQlB0QzNkdDJkRFhOYUJUMTIyY1NWSkcxTlI3dGwweFhEVWVWRTJRaThlRFRpLTZnQkN4SWdZYW5JdWFrREVsN3BBN0Y1QlBoSGdzc3N2LVdGbWNudERISWUwc2otM1FPd0QzekdCMjQtd2l6ZGpB?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-13",
    "event": "Act Now: Nvidia's Stock Is a Generational Buying Opportunity - fool.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNeWc4OG02Uk14cmtfbW5XTFBBdG40RmNwM1B6SmxiMnF3M1pMdnlTNWFzdWhNdGlzOVVBVHVnYVFNZ00xcm1SYjBJQzF1bEw5ZXU1dTl3LVBtX0tsQ2Y4b3c2aEphNm4ySkR5WDZ6Y0ZybmY1NDNmUWVtNktZdFpCU2lHZUFEM3UxTlprUlZhUjhJeUUzY2tvVQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-15",
    "event": "NVDA Stock Extends Fall Overnight Despite Handy Q1 Beat — AI Darling Still Sees Untapped $200B Opportunity - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi_AFBVV95cUxQTnh5c0JUX2Z1V2xLRVpHREFOdkw4aW1nRk5IaXlOaXNobUV2eFNxclFJcWpWT0xIOTRHVkhzdlhVWHRSOU5YQXRIaXR0TTdINHI5bVE5akVsQl9YLTBEczZyVGVPVGplYjhxY0pnN1QzWUJsX2puU0VZMU5xYldzZmk5UVhEN0FwV1NKd0syb2FQa0dpTUZyNzVjY05KVmJWTUVSWVNYSGs0WDkxOUppajFpZTVzWVJjS09JdmRRVUVnZGNlTFRUOG1Va2lya0ZoclNjbUhFWlZrTnFraUxsMFl6dDcwZ2lrd0IyUHd0dUhjb2FPSW04cjYwaGs?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-16",
    "event": "I asked ChatGPT if Nvidia shares would surge 50% in the next year and it said… - Yahoo Finance UK",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPVEt2VVZjcFFWTnRaZzhjSWlCVUNaakJfMUdwUEE4b3hZMENTek1sTUtuMnRsb09ubXNpRjVEbVl0MWVwTGJES1VZVnluVTdlQTQ1R2FtVlhsS3BLZUpTMzVQdFp5ZnBOb282ZVRPUk9DN2loMG9xTUZRbWQ5aWtQdDJJeGFNN0VadUE?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-13",
    "event": "Nvidia Stock Investors Just Got Good News From Wall Street (Hint: It's Time to Buy) - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVk1FTEpKbUcyVmVfM1pyMGF1YW1uSzNtbS1LcnpxWjhpdHJzenc0WjBSSnNrOVhhcU5vdjEwc3Fwc005eFpFekpYTW9Wd2Z3ZVoyejNNNWlkRlFUQVlPdWNBOElicTUyd3NXOTZKY2d0YTQzZm4zSURrR2l5VV9JYUdEU1FiWG5tOHl4WjVCMHBBUzBWWm1IaFNvX0Q?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-14",
    "event": "Michael Burry Calls Nvidia’s $500 Billion AI Financing Push a ‘Wall Street Stunt’: ‘Meet the New Boss…' - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPTllhd0RxNVROSy1FZ0t5VkZKV1lTR3J0WmU4X01Jc1htQkxFQUNLUEdiYzU3OEd2TUt0MnJ1N0s3SmZRN2g0N1lZOEdxd0JpWFRuY25mdkVxaDg1OThyLUhGbXJiN1NmTW05VVBFZWZfTUxmY2toV3hXUzZ4TXBOcHZJWUdodTFkbkpKUlRYdEdIQ3hxQXJWLUZn?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "Waymo shipped 3,200 Chinese-built EVs to LA for its robotaxi fleet despite 127.5% tariffs Americans can't get around",
    "type": "NEWS",
    "remark": "News via Moneywise — Waymo has imported 3,200 Zeekr cars from China since 2024 through the Port of Los Angeles. Most of those vehicles were i...",
    "url": "https://finance.yahoo.com/technology/articles/waymo-shipped-3-200-chinese-163000266.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "EXCLUSIVE: Ross Gerber Says Tesla Could ‘Double’ Sales Without Elon Musk, Warns Investors on SpaceX Merger",
    "type": "NEWS",
    "remark": "News via Benzinga — While much of the conversation in the news cycles about Elon Musk today centers around Space Exploration Technologies Co...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/exclusive-ross-gerber-says-tesla-140813250.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "Rival Shows the Drawback in Tesla's Driverless Tech Strategy. Are They Right?",
    "type": "NEWS",
    "remark": "News via Motley Fool — Waymo sees flaws in camera-only driverless technology systems Tesla plans to use?...",
    "url": "https://www.fool.com/investing/2026/08/16/rival-shows-the-drawback-in-teslas-driverless-tech/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "Elon Musk Has Said He Wants 25% Voting Control of Tesla to Feel Comfortable Leading Its AI Push. Here's What That Threshold Means for Shareholders.",
    "type": "NEWS",
    "remark": "News via Motley Fool — Musk wants more control, and shareholders could soon face a decision....",
    "url": "https://www.fool.com/investing/2026/08/16/elon-musk-has-said-he-wants-25-voting-control-of-t/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "This Sprawling Chinese Refinery Is Bankrolling Tehran",
    "type": "NEWS",
    "remark": "News via The Wall Street Journal — Hengli is accused by the U.S. of being a major importer of illicit Iranian crude; the Chinese petrochemical company deni...",
    "url": "https://www.wsj.com/world/china/hengli-china-oil-company-iran-c802475a?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "1 Industrials Stock Worth Your Attention and 2 That Underwhelm",
    "type": "NEWS",
    "remark": "News via StockStory — Whether you see them or not, industrials businesses play a crucial part in our daily activities. Unfortunately, this rol...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/1-industrials-stock-worth-attention-014100621.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "Morgan Stanley sends a blunt Tesla message to investors",
    "type": "NEWS",
    "remark": "News via TheStreet — The spending is going up. The margins are going down. Free cash flow is negative. And a Wall Street analyst who covers o...",
    "url": "https://www.thestreet.com/investing/stocks/morgan-stanley-sends-a-blunt-tesla-message-to-investors-robotaxi-artificial-intelligence"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "Elon Musk's Tesla Is Ending Sweden's Longest Strike by Buying Out Every Worker Still on It",
    "type": "NEWS",
    "remark": "News via Motley Fool — After 1,021 days, the union has no striking members left. The automaker never signed a collective agreement....",
    "url": "https://www.fool.com/investing/2026/08/15/elon-musks-tesla-is-ending-swedens-longest-strike/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "Forget SpaceX and Tesla. Elon Is Quietly Building Something Bigger Than Both. COMBINED?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/forget-spacex-tesla-elon-quietly-210000507.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "XMAG Is Outperforming the S&P 500 in 2026 as the Magnificent Seven Stall",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/15/xmag-is-outperforming-the-sp-500-in-2026-as-the-magnificent-seven-stall/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "Elon Musk Said Tesla Short Sellers Would Be ‘Obliterated’ Even Bill Gates — Yet They’ve Made $9 Billion This Year Shorting the Stock",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.barchart.com/story/news/3871544/elon-musk-said-tesla-short-sellers-would-be-obliterated-even-bill-gates-yet-theyve-made-9-billion-this-year-shorting-the-stock?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "Elon Musk's $1 Trillion Pay Package Needs Tesla to Hit an $8.5 Trillion Market Cap. Here's What That Means for Shareholders.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/15/elon-musk-trillion-pay-package-tesla-market-cap/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "Tesla Stock Is Recovering. The 3 Problems Underneath It Are Not.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/15/tesla-stock-is-recovering-the-3-problems-underneath-it-are-not/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "Early Tesla Investor Steve Jurvetson Bets on SpaceX Alumni to Solve AI’s Power Problem: ‘The Endgame for Datacenter...'",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/early-tesla-investor-steve-jurvetson-094522451.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "Elon Musk Admits He Underestimated Anthropic's AI -- Why Amazon Investors Should Care",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/15/elon-musk-admits-he-underestimated-anthropics-ai-w/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-14",
    "event": "Could a Tesla (TSLA)-Space Exploration Technologies (SPCX) Merger Help Elon Musk Unlock his Massive Tesla Pay Package?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/could-tesla-tsla-space-exploration-220616552.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-14",
    "event": "Stock Market Today, Aug. 14: Tesla Gains on TD Cowen Buy Reiteration and $460 Target",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/coverage/stock-market-today/2026/08/14/stock-market-today-aug-14-tesla-gains-on-td-cowen-buy-reiteration-and-460-target/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-14",
    "event": "Waymo Scales Toward 1 Million Weekly Rides After California Approval For Expansion",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://stocktwits.com/news-articles/markets/equity/waymo-scales-toward-1-million-weekly-rides-after-california-approval-for-expansion/cZotHVjRJKb?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-14",
    "event": "Tesla Reportedly Will Demo Flying Roadster",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/1b6cfee2-0069-35dc-aded-fce36aab6c84/tesla-reportedly-will-demo.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "Elon Musk Said Tesla Short Sellers Would Be ‘Obliterated’ Even Bill Gates — Yet They’ve Made $9 Billion This Year Shorting the Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQQ2J2cE1FZl9LQnhDcmwyZmlIRHpwME9QekMwYnM0QjhGc2U5VDRiQ3k2bkp4eWkzTUpxa0x5bGx0Smg3c3VtbDZndm02MVhpMHRUdGt1SmNNdDhwNHJjeXZQbXduRHgyUDFwMHVONFZ3V2xmdnRSTVlfODRlWGlUTDRHV1Y2cll3UUhpQnZ0Wnp3UGl0Vnc?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "Elon Musk Eyes Trillionaire Status Again as SpaceX Stock Rebounds - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxPWTRZLWxWOGVvTmYwY0tVWjFEc0VKTExnZkl2VDF4OV9NZjctZnRCVnVwSnEtWjRnWTl0bDZITUVJUTF3cTU5U1pDMnhqWFo1WkpsdFpsMU50Zkd1OXVpX2ZtZTRiaV9mNGtKQnUwMElONGxPZXRiT0Z0ZjNIbjcwM3BwVFFGTUdsd1NPUDdzSURFV0xUUDd5bnNvdzJuU0R6dHJxbWpsZGJ1T1pqS2cteTVnZncxamVTS1EyMHhOdUQ1YkpLZGdBUHFoTzZCZw?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "Tesla Stock Is Recovering. The 3 Problems Underneath It Are Not. - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOa1JHY0dhMFpHd3pEQlRZbWdBc29yNnVxSXRMaks4WDdtdlJhdUdkUzVNSzVQTXVlc2RvNlFCdlllTWh2NVZRU09ETGFDSHdGbDFJR1ZNb0ItMDFWNHdtcnAwWDd3ckpwalFuMEZWb2dIRUNINGpDVngtZ1dvRmJmeEVXMWU4VXRJM09iNjJJZmlQa0F1OXp3eFFmVEl6Vm9CV2I2SzFhRW1hQQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-14",
    "event": "TD Cowen Stays Bullish on Tesla (TSLA) Stock, Cites Strong AV Prospects - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPSlpBNmU4YzdBS1Fkb3Q3NVB5R00wZ19XVlBKQXQ1d05Kb0tfdXhVN3RxbXNwbklZZGtuZGFMWHF0Y3pkWlJXaUtldm1VaHVyWHdPdG5TSWRWelktR2dhNjhOVDJlNDlueEVUMTM4VmdwMGVZa0dGUnlWRndJWFRHN1BrOWM2cXZqRk1lTDd3WVBjd2tkRTUwWkhOTDd1XzA?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-13",
    "event": "Tesla: The Moonshot Premium Is Dead As Waymo And China Pull Away (NASDAQ:TSLA) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOX0FBRklLT2RvZWN5X2trZ01EVGxhU1paOE9CcWZWY3ZyVkdwUWtYSHVMc1hKdE5keUNaVXg5aDdMSWkxaU9KMWNxLXFUSVk3aFJBemJQRUpqSjhiY0tUQm53cldpNVNQbkhzMnAyZW52QWhmT2NxZk9YdmEzZHR6VEVZWnhfMUsxU2dLVFNvZm10Tk5ETlJ2ZDhwdU9jcWtrWFNhNVlNUQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-13",
    "event": "Michael Burry Loads Up On QQQ Puts, Boosts MU Short As He Braces For ‘Larger Fall’ — Here’s What He Did To NVDA, PLTR And TSLA - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAJBVV95cUxNQzQ1SGJkT2N1TGxETEoxRU1xZ1NFWDJHWWI4SVVOZDlGUno3TTlTeFY4a0hMNHlYclRidUlISjlaT2FFZnZvcnhadm1BaTJrQ2VabEZoRG5QZFhzMFVSZWVqUEM0MENFY3ZXS0k3YnYtMFd4RlRTSTlpNTQtUkpPaUF1ZEFZcDBRQXI4eDUySVF6YXlsQWVJR3NQcy1ueWx0dmdlanJNLU4zR3prZkprdlhyR1dMdmJvMU9LaWl4QW9kN2MzcTctbEhpY013MjNjSlNCRmc0bXRGc1V0NEhxNzVhdlYzdktyWGxRV2J5YWQ0cHRpUUgxdkROSXdjM3VvUEpJcGJvYWFUajhRemFwUA?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-14",
    "event": "From ‘Math Won’t Pass Muster’ To Full Expectation: Fund Manager’s Dramatic Pivot On TSLA-SPCX Deal - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNbVdCa3ZITk1LNmJIYUNhNlJJa2MyT3ZCMkppOW83RnlvVmwyeFVhU2hRVnJoNWxaYmZUOEUzYm1kNk1HUm5jaFlJc0RVazhZMlp1M1E4RDltOG91N3N1Rk1JZjgtTVozeFY2blFORkthMHVpU3BZbVZYb0FwXzhhRFhqXzB1TnV5cHVqdWExU0s?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-13",
    "event": "TSLA Stock Rises As Swedish Union Ends Nearly 3-Year Strike After Tesla Buyouts - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNQXNOWkdjNGREOWEwVDc4RE16UW5Cb2Ztb1ZPU2liR1NPcDU3U2tPV0J1WE1vbVowNmRQbWt3QTZvNGU0Qm9OYTQxMmx3TzZFY1loT0RDNk5DTjlIcWpXRFJ6SDAtc0o2R2w4c205S2lSZ2VzS216ZEl5Ykh5c215dVhtQ044V0V6TVVUNWJ3Tkd2d3NTcjcwZkZDSQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-13",
    "event": "TSLA Stock Climbs Premarket: Chamath Says Tesla Is Going ‘All In On Nuclear’ As $10B Texas Solar Plan Emerges - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNM0dLZWN2dDNMS1E5YzFCdlBfa2lWVUkyejFNbUxQbmJCcDFFa3hJRlhhbnd6eTczY1E0TTE3dmFrdkZKQXQtUTVXdHMwUU5GY3I2djdXR0VqSjZZWFhXY3Q5TC1qOHd2YjB5N0EyOGF3QXVaZnBSUHFaMnBVSzNDT1hhclNWTVN4WjlzbXVKUk1IWVp0TFhWUk1tZVEzdjlkeEE?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "TSLA Stock Jumps After Strong China EV Sales In April Bucks Q1’s Global Downturn Trend - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxOcl9MaktMQ0xHb2MzMUh1RERkODNaaHI0UVRscVE0dmJ2Q0lHay1raHhDM29fNmtkekRlU1doekhJM0NLakdNMmV3dkZaanlGN193QnQyZlNEbGJXUHFrQUdlOEhHdVFxdVRQa1h2c09sNDdENGM0Y1dmT282TW1RX3NDOWNjT0JBbzJ1aVVzbWVIUmtxZGhuMUMwMlhxaUZ3bWRnY05qRE5PbnBRdk10NkVTQ01OczJ5a3RpcDM3MmhsSnRZMVlyNHE0YThXWXFWc2p0M25Dc1NhZ3hSRlVEVzRR?oc=5"
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
    "date": "2026-08-12",
    "event": "Tesla (TSLA) Stock Looks Rich On Sales But Strong On 5 Year Returns - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNRkFvc1ZzWDFncVBqZmVWYkp3VmcxWDdCN1dyaDBpUDh4VFZZcHF2WkhZQ25QM3l6OFk1MktfWjNiMFIzMFM5amNNSzlpRXVYd3I3Q3piY2RsblhpVGEza1BBNjZuQUFKWlpFYUlnM19ROU15bXFwWGlySFJGTFNHZm5LZzJfZ0tWQzAxdG1zbmFieFctSXpV?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "Meta and Tesla Are Rebounding From Oversold Levels—Now What? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOMFlQV1FQbE9hUjFJYzJteGhYMy1HTTE5NGtORXBMZkppWTk2R0UzTkRGcm9WTGo3ckFRdlFtOVZNRjFGT2RiVzJmTGVpbURUUFhncEZrc0VKcDdBaDVSdnpFamhDR0oxWGt4cUZrRGtfOXpLYXNlSjlkN3M1YnoyNTF3eTJDSDhUMzhjQ21PQUFpbS1VeVBQQk9Wdw?oc=5"
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
    "date": "2026-08-16",
    "event": "TSLA Stock Slips — Investors Await Tesla’s Q2 Earnings And Semi Progress - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPbGZqanRpSnF5MFVCM0hxdHNRZks2ekt2V2pMYzNyd1JuZ1FqOExOcHIxTEExRmNGRmZMRUozMXJxZG9heFZ0WFZFZmpNVXY4a2w0NFZDajNZYTF2OWZFVUV4RDJMNW9XNlRGQ0xySVNKYzljc2J5R3lzTkZncnRma0czeWV4X200a0hiSDE0M2ZMb1FxM2lCUk41VC1UQi1nRFo3MGhiWDJoUFJOY2FMVU5kMzQ5RkoydVVIMFFWazdoLUJlRWd3eGRybjVaeFE?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "Security National Bank Boosts Stock Holdings in Tesla, Inc. $TSLA - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNakF4X2dva2lJVTRucTYzVEx0ZEo3djgta196MHgxYnlDMzlWTlpDSXVHLUtGYUk3R2hMZVdEaWp6SFVDVnJnWDdGbENKNWlXX0o3ME95RldZOGoxMVQ5aUluRU43WTRvMkZXYU9UdFc2UEhQeFdJY1l3WThMUjJhUUJrcFdRVjZRdjNmQ3JtWnZNMlZwTEFtUXBKaFA1VTR5NmtpNVlFS282eFVCc1hjSGRENlI1UmFXMmUydDM1c3c?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "TSLA Stock Rises As Swedish Union Ends Nearly 3-Year Strike After Tesla Buyouts - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQcW9OcDhBYUtfRllZbjlteFkxM3pqdkx1NzFpNXE2aGppaThESU1Xcldjbl9aWlhvZm5iQVhwYS1aNzB5SnhDb0NBRkV1S2x4eEFSUEZCWERVaFBuY25yX1QzTklGMTNidlE3b2JKZ1JYT2Rocmd2OGJpTldqbWJWeHFRWjZaNDgyWlBkeEI2djVlUGhmZTFjcGNKeEU2ZlhhUV9XZmlTLUxERVU5UktLMU84bUlzSTNZVnRwZ0lrZENzX2FpRHdWczhWRFRXNnc0V2dPVnBjLXhJNGc?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-16",
    "event": "Prospera Financial Services Inc Cuts Stock Position in Tesla, Inc. $TSLA - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQN3FuV0lIREdHT1QzbDdkSjlyTnRTUl9CM3hnVENYTTZsQXBoNm9UUzlZYjBoY2M0NWxkTWkxb0xvdnpieE9MMEtUV3BFQUNxTk1LdEZ2SVMyQW1tem1uLVFadEs2c2JCajMzX1lkMWFScW5KaDVmTTNReElGSjlPaG9XcFV3MEd2R3JWUkpmOXlndER2c3RqcHNWMG1nY01GeGx1eVVobW5KQmNwbVJzNmZRSWFMRGVIWm9BVEtrcDVBZ2hidFFvWVBn?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "TSLA Stock Recovers To Close Nearly 2% Higher As SpaceX IPO Debuts - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNdllKT3F6R3RYYjJIQ1JwejV3MlVzZnZ1OGt5THEtZTRhREtBV0VxNEUzVGVlMDkyRzBxdGd0QlFBRVVOb1BteWVvX1NFUjJEeC1uQnp5eWxtbG1VQkp5bWpmTzM4eTdKQlV0T0xZVm5YdGI5bHFfQWtDNVlGVXFrZ3VhcVVOM2R5QXg2TW5ERF9GWjBwbFNCTEtiOFBoSUZQQmRFMVIwRFJlRzJONl9iNUp1dHh6SmQybkZpWA?oc=5"
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
    "date": "2026-08-15",
    "event": "TSLA Stock Breaks Losing Streak: Fund Manager Says Autonomy Beats Rich Valuation - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxPMzdOTXQ1SEJfMnVDYlplYjBHQV9SeUQ5UjFnS3BRWDhSbUNzZWhiQlVtWE5WVm9OWlNxdWlsUzk2LXh5ajhXblU1aHpFdG5RRUZ6LThsWHd1Wmc0MmNUQzdxTFJ2cVhoR01scFE2VHNabzNGQ09fTm9SMmFfWExjTFM2cnJTMHJ6ZzUtNXh3SW42dGpwbU1xeXZuMDk0VEItLWFUWHJTYU9VWUNFbl9yb1NRS0xsNWlNcVFNaDh6QzVPOFEzWGIwaThtTVgzVXgzTVItcTBfS0NUNnM?oc=5"
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
    "date": "2026-08-15",
    "event": "TSLA Stock On Track For Worst Week In A Year On Fresh Roadster Delay As Musk’s April Promise Fades - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxOTXpzV2drdVRITXRXaFBEdGsxdFdTR2FSazBFMDJKWUJ4MF8tWWNZQnEwT2tpYXh5cmFEOUZGemN2dUV0ZTFjbjZHNDdXZ005bXV6UlVkVzNJc05Yc0t0Ri0ySzBCOXItVTI5eGZUTFRMTm10RXlLMkhFZWpnbjNvSkVoSnN0V09XaV9ucVNfeWdLWkIzQXNHWDJBZXRsNktwcl80bE40a3g2aS1ibEZwMEJodmlqYTd4UmFGdldSNTdOeElValkwWjU4YWpWNnY0YnQ4VzE1aHRzaTJIMUZqX29CaktiQUxYU2NyZFdoWQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-14",
    "event": "TSLA Stock Rebounds Premarket After Q2 Rout — Cathie Wood Bought The Dip, Retail Influencer Sees SpaceX Merger Reveal In 3 Weeks - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOVmdySk5UT2ZvbDBKZ3VkcldESmc2alUyMkJNVzlJVHRyeHFTUmZDODh5WUNobFlFZTUyOGlhOTNvem1KVndJbHYwcjRHTmNXYXBBR1dRZ3R6Uk1ZeFZ3enFVRXRSbGJSNGVHLU1tUkREc043ZEhVNnhFZVJsZ2lTb1h0d1JreVdLZXVzT2hNeE1XQk4zNHhMWTBnUkVqYW1uOGY0azFzdjBkX2txVWxoWVlmdC1tTTlyLV80?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-15",
    "event": "TSLA Stock Slips Overnight: Tesla Has A New Plan To Fight BYD And Chinese Rivals — And It Starts With Its Best-Selling SUV - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNdk5iSFhNY0h0Um9CSlJ5clg4ODd1UUF2MkZkZjdnSEwxZXBEM3RLTFVTTjlwNzBkTDNGOFVBVjVnUEZUdXhjTHRLOUdwX1VKcUpxcmtxOXRFQXFVUUNSX2pFQ1hreVhITFY5d1dpTFl2N0xDcE4xajhKUnR5cnJRbnFWWkxoSHQ4Q3FTbE04VEdubU1nbUtpRVJ1VEJiOGpYN3haS0dFVkV4Uzl0N0gtME9lQQ?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-16",
    "event": "2 Dow Jones Stocks to Target This Week and 1 We Avoid",
    "type": "NEWS",
    "remark": "News via StockStory — The Dow Jones (^DJI) is made up of 30 of the most established and influential companies in the market. But even blue-chi...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/2-dow-jones-stocks-target-144500619.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-16",
    "event": "Romania shoots down drone that breached its airspace",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- A Spanish F/A-18 fighter jet operating under NATO’s air-policing mission shot down a drone that entered...",
    "url": "https://www.yahoo.com/news/world/articles/romania-shoots-down-drone-breached-051906032.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-15",
    "event": "Archer Aviation Has $6.9 Million of Revenue. It's Buying a Boeing Business With More Than $200 Million.",
    "type": "NEWS",
    "remark": "News via Motley Fool — Boeing hands over three subsidiaries and walks away owning about 16.5% of Archer. Insitu alone brings annual revenue 29 ...",
    "url": "https://www.fool.com/investing/2026/08/15/archer-aviation-has-69-million-of-revenue-its-buyi/"
  },
  {
    "stock": "BA",
    "date": "2026-08-15",
    "event": "How 737-7 FAA Approval and New Tech Trial At Boeing (BA) Has Changed Its Investment Story",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Boeing recently received an amended type certificate from the U.S. Federal Aviation Administration for its 737-7 aircraf...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/737-7-faa-approval-tech-001703756.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-14",
    "event": "BAE Systems (LSE:BA.) Stock May Trade At A 9% Discount Despite THREADS Progress",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — BAE Systems has delivered a very strong 5 year share price return, yet current checks suggest the stock now sits close t...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bae-systems-lse-ba-stock-221306465.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-14",
    "event": "Boeing Signs Seven-Year Frameworks to Expand SM-3 Output",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Agreement with the Pentagon and Raytheon covers avionics and ejector assemblies...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/boeing-signs-seven-frameworks-expand-193122852.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-14",
    "event": "JLL Considers Boeing’s Old HQ for Chicago Headquarters Move",
    "type": "NEWS",
    "remark": "News via CRE Daily — JLL may move its global HQ to Boeing’s former Chicago tower, marking another major office downsizing in the city’s core....",
    "url": "https://www.credaily.com/briefs/jll-considers-boeing-s-old-hq-for-chicago-headquarters-move/"
  },
  {
    "stock": "BA",
    "date": "2026-08-14",
    "event": "Boeing, RTX Agree To Interceptor Deal With Pentagon; Stocks Rise",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — The Pentagon reached an agreement with Boeing and RTX to increase production of components used for advanced interceptor...",
    "url": "https://www.investors.com/news/boeing-rtx-pentagon-department-defense-iran-war/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "BA",
    "date": "2026-08-14",
    "event": "Boeing Analysts Turn Most Bullish Since 2022 on ‘Momentum Shift’",
    "type": "NEWS",
    "remark": "News via Bloomberg — Boeing Co.’s efforts to turn around its business are getting a loud cheer from Wall Street, as analysts this week turned...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/boeing-analysts-turn-most-bullish-103001501.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-13",
    "event": "BofA sees Boeing's puzzling deal clearing path for bigger move",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/investing/stocks/bank-of-america-sees-boeing-divestiture-archer-deal-clearing-path-for-bigger-move?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-14",
    "event": "AerCap, Boeing and Aeroméxico Celebrate Dreamliner Milestones",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/aercap-boeing-aerom-xico-celebrate-110000261.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-13",
    "event": "From Courtroom Rivals to Corporate Partners: Archer Buys Its Way Into Boeing’s Orbit",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/courtroom-rivals-corporate-partners-archer-213733752.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-13",
    "event": "Can GE Stock Compound Its Way Higher?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/611305/can-ge-stock-compound-its-way-higher/2026-08-13?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-14",
    "event": "PMGC Holdings Inc. [NASDAQ: ELAB] Reports Q2 2026 Results and Files Form 10-Q; Total Assets Reach $36.6 Million, Up 184% from Year-End 2025 and 290% Year-over-Year, as Quarterly Revenue Nearly Doubles Sequentially",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/pmgc-holdings-inc-nasdaq-elab-133100612.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-13",
    "event": "Archer Aviation Stock Has Surged 45% in the Past Month. Should You Buy Into the Rally?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/13/archer-aviation-stock-has-surged-45-in-the-past-mo/?.tsrc=rss"
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
    "date": "2026-08-16",
    "event": "Family Legacy Inc. Acquires Shares of 13,625 The Boeing Company $BA - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNNFgxOXl1R0RBZnhxM3p4aUc3M28xdVZxMnlDVWpTeEJRcVZFaTRKQ3JwT2FldHRlQ3QzdktEMEVCQjZleHRHUG5BNVVmVkNQbmtudGlZcG9YSVJMOVg0Yms3OFB0aFhhU0ZJaVdLS3F0bHp3c2FISXVaYTVnY2NJQ1ZvR3llNEd4NHp3X05OY09VUFpqYVNVcE54dDllSnNFU3FaUWpJbkU4M1dSY05GUVpXU19lcU03YVBLaHBrVTIxRk0?oc=5"
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
    "date": "2026-08-15",
    "event": "Is it time to start worrying about Browns defensive injuries? — Ashley Bastock - Cleveland.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOTWV4T1NhSC1ya1AwaXhLOFlXMHlKemNCVVVBc3BCXzEwSGZxRkh4dlFpUmRwZkVjOWlVNFQzSUFJQ0pqQ19ZdGp4RjhiZTM5ODFyZFVqRlNPR2RIamNjZTZIaFNXRDYtMkgyeFpaVE5FYVNtWDN0VkU0T3ExYVpXYXdDdU9zUHhDU1ZXMUttU2RvX2ZPb01vYWNRUlFFd0JRcTBjT1QyTGFNZHVnbkhDOTAzY1RZMjBYeTRHUDZB0gHSAUFVX3lxTE5RZERueEpyYU9PYUpJR2pKZEo1YVVnWmpZS2ctMFBEVXBuNFVLQzI4aVJIOUVTTGwzUHd4VXhYY0wzenhjOVVuWEE0RVVUanV5dWQ1M1RIWV9GemJKZEU3Y05BV0VSazdUMmJQOXc4ZlFxdy1fOUx1ZXZqVkREQVFvOUZWcDFWZUZNQ1pHOUZEbG00RHB6VWJ4VTJJQ0E5WlJfQW1BYjRkck5BZlh5YjJFcDdma2kwOXpGYm03RU5DbDI4QnZsYTRqOVI1cGV4VVZhQQ?oc=5"
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
    "event": "Boeing Shares (BA) Dip 0.4% With Ryanair Engine News Highlighting a $2 Billion Shortfall - TechStock²",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNemhrczJWN2owRUlpVmhqT2ZISTFJVGhjaE9scEQxV3FMczNOazQ3OWhvb1c0U2J5ZWc1QVAtYnFtZDdZVF9wRVVLX3NZd0pZRTVnNk9SYjRNOEtkWjgxZFQtQ0NxTlNKeUpxdU80QnpYOEVkNDVMeGpGZVMzalFyVUdjRDl0VlJ2eTVSODJtU2JqM2dyLUMyRVZTancydXFsbWtN?oc=5"
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
    "date": "2026-08-14",
    "event": "BAE Systems (LSE:BA.) Stock May Trade At A 9% Discount Despite THREADS Progress - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNbTBNQWs0SFRDcm9Ub2xDSS1aX2VIeHVLbmQzQWkycW1CQVNOeG9YWk9fa1hJdkdpM0NFV0hxQ045VzdCR1NvTzRGd09Na1NnOUt1aTVfNkVlNzc3YlpoU2E4QjBXMFdHY3VoVm9KMHNOb09NRDRGdmNjQmlsVENOYXFlM1N5bkRuN1FzNlRqUEE2bWs?oc=5"
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
    "date": "2026-08-16",
    "event": "Boeing (NYSE:BA) stock in focus today as shares test key moving averages - Kalkine Media",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNSTRLR2lpQktkR3ZwdWtONmhDV3puUU5HbkdfVmZodFJmcVRRM0xXckJVYWhlOTQ3YllKbkRIa01EdGxqQ1BNT3E5dVhNbkl5Z3J5SXdJUmJIeXZoOEV6YUdWVEVHQ2hiSnpTekplLXc1cGt0LU9WVDFONFNuN1FUblIwb3RLRlV4el82NjZ3TnZoUGsyT1BzVEYzLUM4aEs5UFE2aWw1R21ra3duQ0Z0SjhlWDBzdTI2bXJfbzExY0Q?oc=5"
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
    "date": "2026-08-16",
    "event": "Focus Partners Advisor Solutions LLC Buys Shares of 22,528 The Boeing Company $BA - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxNZGFrVUg3RktZMFpWeWNfZWlISlFLWnVlWms4eXV4TmlTbnFuUVdEXzExM2ZkamtKdE9heVRVY2NpMENlWVFvMHVxbl9MYWh5aE5RVjdEWFNBWVpFcmdkd2ZXVENtNVZ2b3dwQjZDS1FCLVMtM0E5OWFTR2o1Sk9MaU11YnpESXdMWUVxSjlEbWlWNkdaYm5fV2FITHRuZ0pteElkb0o4eFhhVEZHN3dWWjkyeV9lWWhMMURLM3c2clZtRkdHM0JEWnF1emRydHl4b2JuVGtucw?oc=5"
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
    "date": "2026-08-15",
    "event": "Boeing Stock Gains As Singapore Airlines, Qantas Reportedly Eye Major Wide-Body Jet Orders - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxOT016Wm9VQkhhMFNFak05cUd5dEU5ck9qVWhBVHQ1clJKcjlvZlk3WG5GZ2NHeFBxMmJNaDNfY1AxLXM2cjZ2dk93djJFbW5hTlppT0JLdFoxSGN1Vng1OGNKZ0ktNFFFQlMzNkdGdUpzUzJ2aGRIbDVaV3A4c091TkdvNlFFekZGZFQ3NGhWbUhZdDQ1OHpaMDFoc1dPQVg0d3JZTndFNW00akpQQzluUUJSeUhzcC1EWV9YajNTLUZvTWlXOTUwUXJjT181bmxqRHVZWHFPQy0tUThuZnVCMldmUEZabmJj?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-10",
    "event": "Boeing (BA) Stock May Trade At A 41% Discount Despite MAX 7 Certification - Yahoo Finance Singapore",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFBMLVJ5N0pqYnRWaHhIV0tDWjh1aDNZWnpZNlpzeHBteFlET21DLUtKeXFxQTJCVmZmZV9QR1JrVDJQNzBJenUzQzNHRFdwOVNZejRMQk96ZnNnVUY5b0hNZWJobHAxX0Z2d3h3d2ZGWllHYWZfczZfWFE5ZFVhQ3c?oc=5"
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
    "date": "2026-08-13",
    "event": "ADVANCED MICRO DEVICES INC CEDE (AMDC.BA) stock price, news, quote and history - Yahoo Finance UK",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE0xaDBaUzM2RHhCdTlpYnpBeTNWN0g4ZHFBTHZ1TFNvV3gwa01hcDViTUktWTB5b0JmREYtN094M1hCS1N0b3R6ckZBbW1FZjJWUHR0RE9MVzRhaWdPRmhvcVJNSQ?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "Argus Just Upgraded Boeing Stock. Here's Why. - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNd1JIUHVZXzJ6U05VNkp1RkR5dWxSZVdsWjB5UUtxeGdHNkxicmJWXzg1NDJnbzRTWVBJMS1lblV0SGhkUmVIUVFBenVORmFTNHNMT09rNU85N282N0RSOU95Z2FqaTNENnU0cmtSR1Q2OTlPNERsb1lBSWNSbnNXNFZuYXpyYzd2Q0Z0Sngwa2VsZ3lQZW9GOUFxY1g5Zw?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "Boeing Company (The) (BA) Stock Forecasts - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxNVDA3U0lKRnI1UW5SRlJfbnZWaGdKV0UwYVROQlV6Q2c4SE9VOVZLcFFxUERndWs1dUFLN3ZqZTFRcVZLbkEtb3RIN2RIWWVZVjIzS1dnOFZVVW41eEh2MmxCbmRpZ2tmTE4tNzJ4RHJzc2ttRDRCOE9qTGFKSTlaWG1ISEhqMURv?oc=5"
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
    "date": "2026-08-03",
    "event": "BA Stock Jumps 7% After Rare Double Upgrade — FAA's Approval Of Boeing’s 737 MAX 7 Adds To Bullish Momentum - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQZEVHbmV1NWUyQzZIdTMxbVRqQkpFS0llMHRmOHhxMjhBWDktelBkQll2bXNtNVE0WmthZ0ozZ0RjOG54alpRb1JDODYyVUI3VUlYQUkzelQ5ejlkSVZmU21yVDlodGZ5ZDcxVWhVMUVBcTVMQnYyT0x2UG1TRE5XQUlEMFdkVEpzM0lzQTRTSQ?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-10",
    "event": "Boeing (BA) Stock Could Be 41% Undervalued As MAX 7 Wins Certification - webull.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTE5NeHV3Z09HSDF4cVNxQlVnMnVUVG1va2tZUTNZYktFcDRGdmxkaHpMeW8xbzBZc0pCUmViY2pLbjFJMDd6YTNyWjkyclNWTHJQMXc0NzRFQU4?oc=5"
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
    "date": "2026-07-23",
    "event": "Buy, Hold or Sell Boeing Stock? Key Insights Ahead of Q2 Earnings - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQNi14dGhzbFlQODNSZFRJZG9Vd2lzU2kycE5YeE9yZlN3UDVlZG43OEFqaUVGWFk3Rm1WVUNtdEdRYnJRazFDd1d6VHdOcnhzUERKamdDT3JUZEtVamNlZ041Z0MxWWFKQWItLXdSa2JrV1ZwMmZfUG5MaG94cGFCcjRtUEpaMlVFYVBVRTlYRHlQbVFFUlE?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "3 Unprofitable Stocks with Open Questions",
    "type": "NEWS",
    "remark": "News via StockStory — Unprofitable companies face headwinds as they struggle to keep operating expenses under control. Some may be investing h...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/3-unprofitable-stocks-open-questions-161300304.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "Google is using a $29 gadget to tighten its grip on Android users",
    "type": "NEWS",
    "remark": "News via TheStreet — Alphabet (GOOGL) unveiled the Pixel Tag, its first item tracker, priced at $29, putting it directly against Apple (AAPL)...",
    "url": "https://www.thestreet.com/technology/google-is-using-a-29-gadget-to-tighten-its-grip-on-android-users"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "SpaceX is Planning to Spend Up to $500 Billion on Data Centers. Here’s Why Elon Musk is Pushing All-In",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — SpaceX is moving fast enough to potentially spend half a trillion dollars on data centers in a single year, and the infe...",
    "url": "https://247wallst.com/investing/2026/08/16/spacex-is-planning-to-spend-up-to-500-billion-on-data-centers-heres-why-elon-musk-is-pushing-all-in/"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "Block (XYZ) Brings Bitcoin Payments To Square Checkouts",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/crypto/articles/block-xyz-brings-bitcoin-payments-021000283.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "Is Berkshire’s Bigger Bet on Delta (DAL) Altering The Investment Case For The Airline?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/berkshire-bigger-bet-delta-dal-011615749.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "Bernie Sanders Slammed Google Co-Founder for Spending Millions to Stop California's Billionaire Tax Proposal—Crypto Punters Weigh Passage Odds",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/crypto/articles/bernie-sanders-slammed-google-co-233128634.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "Berkshire Hathaway boosted stake in Alphabet, homebuilders in the second quarter",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/berkshire-hathaway-boosted-stake-alphabet-213123203.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "Apple (AAPL) Launches Ads On Maps While Pursuing Siri AI Content Deals",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/media-advertising/articles/apple-aapl-launches-ads-maps-200858734.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "Apple, Samsung Can Absorb the Smartphone Cost Shock — Smaller Rivals May Not Be so Lucky",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/apple-samsung-absorb-smartphone-cost-180159241.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "Sergey Brin Wants Google to Double Down on Gemini. What That Means for GOOGL Stock.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.barchart.com/story/news/3870586/sergey-brin-wants-google-to-double-down-on-gemini-what-that-means-for-googl-stock?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "SpaceX officially closes its Cursor acquisition",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/spacex-officially-closes-cursor-acquisition-163000243.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "Warren Buffett Wasn’t the Only Billionaire Buying Alphabet Stock in Q2",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/15/warren-buffett-wasnt-the-only-billionaire-buying-alphabet-stock-in-q2/?.tsrc=rss"
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
    "event": "Sergey Brin Wants Google to Double Down on Gemini. What That Means for GOOGL Stock. - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPNVpBaW1UaTNtd1g0djBoNURXR0pyeXIyN3o3ZlpYS2Q0Um54UkZXMXZsQXFiWUh0MFRnbUNzTHNMZHJNOWdiWGZDcXVDMmRQZ2U0ZmU1OEk0MXFaaHZmeTNNT1hRU1Q0cE9sWXlpWXE4aTl6bDhUVk9lTWZNTUlVTEFUQnEteUtFNFlMWE9oTVFETnhIQXh4TWxqMFpJZW1vR0dueUdpZ1h6LThuMndNV0tlc1R4N1JpbUt3Uno2dzd2WVk?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-14",
    "event": "GOOGL Stock Alert: Google Unleashes Its Biggest Weapon Against Apple - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNUktuQkZSYnV1Q0FNbktNR01oQ1liaEdEbUxHTVlmVWtuQzlDZ184SFF1Slczbmg4UXA3bVRaVEFKOHFPSjRORExlZjk3OHVhZ3gtZzQ4eFRZM3JObmJTOXFxSFVYcllwRHYzdVJWVnZaVldvcHFSNzhKTXlodUstd2FNWUtURGVzdXNGRmpQMmsxSzBBcXU3aU1PMmJhaTh6?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "Alphabet Inc. $GOOGL Stock Position Cut by Maj Invest Holding A S - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPNzF3YVFYR0t5Q3JsMlhFazBkN2pHZHI4Nm5HMDd2MmZmbHVGVGZrMzFHa3lEdEhmMi1yakw4cWduZDV1TURkZTJpV0NTU0F3cm84c0w0SjVHcjVBaDhYVmFmdFNIRVRNb2I0M09GNTlUSHdQWXE1MERrTGRmbFBSeEdNY2FQX0xZSUdMTWplVVU2QmptdTBwY3JMTnA3cDZZelEwSldQQW1qUGRpdG5Va09sUmRQUXFudXpUTGQxN2FkQQ?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-14",
    "event": "Warren Buffett Loads Up on Google Stock (GOOGL), Making It His Third Biggest Position - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOQldqMlJVVzN4d2NOVmw5NjJWQXd4bmFtZnJxSUNKeFZ1NV9GSmNRVnlPN2JhMGpZbUtPUTZSYVM5UW5NQVhvUTZNZjhEQngzcFEydEhia0N1YXNMNFI2SngtVnZPaFlsWTQ1QUxnWl8zVWlKMVVUalRvVGNhSFFDcjlFLWloczd2WGs0WnZLYTluNldybTJKOWVFWlZqNnhIRzBBQktPMEUxTkZrZUp6OXJR?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-13",
    "event": "If Anthropic Stock Trades Like SpaceX, Investors May Wish They Owned Alphabet Instead - fool.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOVDE4Q004T1dDaU50eFZ3ZGFKamltenZTZ1NVcUxrUkpfR2Z2clZRSjI1Vi1pRlZwY0xIOHJRQ3I1YXNKZWhCQ3I4NGM2b1I1eWxjZXRfRHZaNnFHd0pKR1I3Rkp6N09ic3hBcEpwcWtrY0JCejV1Z0M1dm1PSUJWSEdaSHY1LWg2Rnl4OFgzVGwzUQ?oc=5"
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
    "date": "2026-08-11",
    "event": "Alphabet (GOOGL) Stock May Be 20% Undervalued Following AI Bond Sale - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPLUl1enV6Q0N3T1pKcG5FLVQ4SExSVlVDTkZ1VWZUc1VydTdEWGxDYlhlMTI5bGhMSXhRVUJKdFZYel96dnVobUJiLTBlZG5fZ1BwTERIa2kyYTltZDNuYlA2dGFGdzlFZk14eDVGSkFpX0lWclNVN0k1R3JWRWRsUUJRZkxVQjRsbjB5eTBLSHBEVkxHaU0w?oc=5"
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
    "date": "2026-08-15",
    "event": "GOOGL Stock Rises Overnight: Cathie Wood's ARK Buys $96M While Trimming AMD, BIDU Stakes - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOa3lUWENYUXhLcE5FTVJpYWp3QVpRVDZQcGVrQ2RQX2JuLUdES0IxV0NQYjdrTkJpaFZRd2xUU1Qtb1RVZTlSVU1xQmVrWjdZSlVFSTZyZlliZmZzREhYSmRObmdRd2stenlLWERlckl1SHFzbE5fVWZjRjZhb2gzYzlHYXhmM01FeE1XVGI2aFk5cnpIWkZNMGI1bTVWcHRGbFlOMmRydzhNYlZpVkVkdGRKQjFheWlSX0NPRE9oUkhzS3h6X2NJOWQ1V19RaXBmZC04X254WVlUcXlKb3dULUhmbm8?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-11",
    "event": "What's Going On With Alphabet Stock Tuesday? - Alphabet (NASDAQ:GOOGL), Alphabet (NASDAQ:GOOG) - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOeXlaUVJIZ2FMWVdtNzY3RDM4MUdyU2FubVdTRjl1R3hwWGlEQTJRU1h4c2ZqRjlNQzc5RjY3NXFyYVV6NHZVZFNmMnRMc0dmOUNSVlFiMHh6Z01JWkdjRjVic1dXYVVLOGNCdzRtLUJySy1mTnZTT0Z3LVpSazVneG56cFZVd09TU0NReTk5aFhkZGZyNXctUVlHUVFXdXFmM2JtOHNWdTJCcjhDdHZfWEdDMGJLTWlTQWdHZzJHa3MzeW5B?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "Stanley Druckenmiller builds $120 million bet on major tech stock - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPWXN6YzFPUEhtSXhmMWx1UlE0ejBTWWFZbjdJTUpYMzg5MGh5R3dPX184OEw0bUY3N005Ry01emxQWElrVm9xRFg2S2J0X1pPZE1tTW1UVmgyNnMzZHhPUFhWN3BZSlpZdDd6eEVKYTEzdWpCOVlqZHh3eUFEU3pRaDRsV08tWlNYVU1DZHRNc2h6Mmh3YUZr?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-10",
    "event": "Google Stock Sputters, But These Catalysts Could Spark A Rebound - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxNQW5vMUtQUDV4eUJHOUV2Q1FicFd4OGpJYkg0YkUxclhZRVJtM2s1Q0VLTUpxR0h3QXFRNVRWQnY3ZE14aU9zb0syd3VUTjFSOXJPTDdONDNSYTNHdURpMHk3a3dYa1hBT0xQLVdLNE1UWXAySkhRbENScXZWckkzV0RqVVBsZ29ZcjgyQWplMmNLaVc4OUZWbWYwQTY2NE50UkVtYXVmblpkWDBhRkNQem0xNEI1YmFZMU5Ta1NVdHB0MG5nUUdzZ2wtNHZwRmpBVTlWdjBVUQ?oc=5"
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
    "event": "Alphabet Inc. $GOOGL Stock Position Cut by Agate Pass Investment Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxORDVaUXNUMEJzUXFOMWt5Z0ZpYTU0T1N3dEY0RnpZR2NnUlJ4a2ZDcjdhV291M0x2bTJKNzVTSi1aOVMwbGdjWkVMRlhCYktIVmd2OTc2QThiUHZmRXNWSlNGN1dwZGFOT3h3WkQzZU45QVM4Z2dKRmFSeWZkZUhMOU5tOVQ5R0pVZ3YzTHNkUFZJTFFKYnFWckdfRWt5ci1mZGxfY3lxNEwyY2xzeVFVYk16T0ZHNndNN1d4bUhPOExpeUJZdmNPTlV6TnBnWkR1SmVzVQ?oc=5"
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
    "date": "2026-08-16",
    "event": "GOOGL Stock Leans On TPU Strength Amid Shaky 2026 — Even Elon Musk Admits They're Underrated - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxPZ2ZTbFZ1d0FNZHR3RDVDR1F3a1pHaHFFbGlCSHl4NGZoUjhad21BeWU4WUlvWmtjanJlRzZaTmNxNEZzT0dOdWwtdFozZjRfT2FTV3poMndBREpVSlpsSThEUUpCYjhPRUl3UU9xZFhCVWZYUURkNnV0NFE4VHdxV3A3UGJiZk9jSXBFX0htdDlkZ0IzUFBQbk1jbVRjNHBKSnZrbUZwZk80TV9jY3lPWlhSX0M3RzZDR09NNWlQRElZa1FlUnB6YjBXTmxfaHdHX25PSHJuemNxTm5BR3FYNmJMZ2M4b3M5ckE?oc=5"
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
    "event": "Alphabet Inc. $GOOGL Shares Purchased by Sax Wealth Advisors LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxOaDBKTm9VYzNDb2ozTXlSXzQ4UHVxVTFNc2l1ajlVSGNEcFRMQnJpNFBGNzVRX2R3TG04M2NmZ1dtZ29WM0p1NFh0QmYyN3RIQ1F1Y0xsalI2X19ncHNkZXUzNERxYlQtdUFvbGRjLVYtNlhVMGJnTHB1YWVJYU51N09fak10Y2tYN2VvRzRwbHBwVDdrakpDWlRBcVkzcFFwWDhwM0pzcXQ4T3hkbHlwajh5UHhXRF9iS2dUb1dXS2M?oc=5"
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
    "date": "2026-08-16",
    "event": "Gradient Investments LLC Buys 22,044 Shares of Alphabet Inc. $GOOGL - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQTnBnNk1JM2Rjay1rUVg4amtOSUJLMzRMNzJtRDVGV1BYUllhdzBSSzlhX1lOMGFWVFdZS20xSGxUYkxJRVF1WVVFSTdMc0pNMGhPWDI1UVkyR1lVWm0tN1hXQlJYUWEwQ1R3T19NYUFfeFZhTjJjYldwbG1ycWhjY0N5LXFWQ3RUWGlobThCTUlJaXRYaVd6Q0ZfMkVQaE82UV9UR3BUdTZzRkJsMWR6OTl4YzJTbUxJTTNZbkYwdFFDcFE?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-15",
    "event": "GOOGL Stock In Focus: Waymo Recalls Thousands Of US Robotaxis Over Navigation Issue - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxPSU9raW8wam5mYkJnVUdDWWNoUFctY2NkY0txZDJsMEtmNVBwZ3VBd25tbDFBazNHS3ozNHBPWldBZzRpMHFfZUJUbnhZTFY2Q2p6TUdDMU0xOGw4MXVvN3ZHT3J2UXMycGRua1huV2M2SnZmZlhraVpEUDRFV3o1eTFiQUowOWp5dkl2V3RudEVvcU9YMDlXX19sWlFRcUxkekRPSzFGVnB6SUdjenN3b0hMdHhha0daZTBsUGVlVHpISTVXNXhqOXNEa2dPVnJ3ZGJNZTRmWkhNZHVkeTYw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-13",
    "event": "GOOGL Stock Drops In Premarket: Report Says Search Giant Trims Cloud Team Amid AI Spending Push - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxQUjZDVDVHZjBJcmxHbmhfVWFBV3ItampZSHFzZXp3dFRFREk4Vkxyb0x0MXZwS1JaQmJjSUQ2aVV6UUxPZk1fdTRFUTFSZFcxOWQyVDB0ZFA5WWVPTEc0dlZtZUhIQVdhTV9WV3IzVGY0UExkVWFadUFJVFRPM1V5YllLQ05lZUNoS0xpZEJXMmtHWmloMjZIMXdVUUItRUJpRmktR2VXUWQ4djluZTRfVFNUTEdqM25SRlZybzMtamtNWklBaDZrMklpN2lhQVJxNlhDZ2JzVDMycGNhdGZqdUNjQjQwVEVzM1RQMXZSdw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "Rockland Trust Co. Has $145.72 Million Stock Holdings in Alphabet Inc. $GOOGL - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNbHBub0g0Z2NnNTJGeXhVNWJUYW51VUVJUjNPcmMxS0lRZkl5VTdzSWxfaGtWaTZTZHRUNGpVR1dONlNYM0ppZkpnWGwwOHZkczhCWGVBZGJ3eFVfczczVmZhSk9iV1p6ZENmd3BoUFFGX1hFWk9PblFON3gybU9zdlNJZXo5QmF2WmpQcFFlZVluWUo2dVdxNW9NbTFvN3F5NDZCUjg5WmJKSk9qWkxIeVlPYUVzbmVJWmtHb05NeHg3UmFZRGhVdWNOdmxWUQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-16",
    "event": "3 Unpopular Stocks We Think Twice About",
    "type": "NEWS",
    "remark": "News via StockStory — Wall Street has issued downbeat forecasts for the stocks in this article. These predictions are rare - financial institu...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/3-unpopular-stocks-think-twice-014900743.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-15",
    "event": "Bond Traders Are Agonizing Over $70 Billion of Shadow Credit Backstops For AI Companies",
    "type": "NEWS",
    "remark": "News via Bloomberg — Even before Nvidia Corp.’s splashy $500 billion financing partnership this week, investors were starting to fret over th...",
    "url": "https://finance.yahoo.com/technology/ai/articles/bond-traders-agonizing-over-70-190000845.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-15",
    "event": "Ultrapar (BOVESPA:UGPA3) Stock Gets Fair Value Bump As Analysts Revisit Q2 Assumptions",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Analysts have adjusted their price targets for Ultrapar Participações, with fair value in the updated model moving from ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/ultrapar-bovespa-ugpa3-stock-gets-161004479.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-15",
    "event": "Why Is Bank Of America (BAC) Committing $250 Billion And Investing $1.9 Billion Abroad?",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Bank of America (NYSE:BAC) agreed to acquire up to a 49.9% stake in Jio Credit Limited for about US$1.9b, expanding into...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-bank-america-bac-committing-150822701.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-15",
    "event": "BofA points to crucial Walmart numbers most investors ignore",
    "type": "NEWS",
    "remark": "News via TheStreet — Walmart (WMT) reports earnings on Aug. 20, and most of the attention will land on one figure: how much its U.S. stores s...",
    "url": "https://www.thestreet.com/investing/stocks/bank-of-america-walmart-wmt-stock-advertising-earnings"
  },
  {
    "stock": "BAC",
    "date": "2026-08-15",
    "event": "Warren Buffett's Successor, Greg Abel, Pared Down Bank of America, and Piled Into a Virtual Monopoly That's Now Berkshire's 3rd-Largest Holding",
    "type": "NEWS",
    "remark": "News via Motley Fool — Greg Abel's overhaul of Berkshire Hathaway's $358 billion investment portfolio continued in his second quarter at the he...",
    "url": "https://www.fool.com/investing/2026/08/14/warren-buffett-greg-abel-pared-down-bac-buy-googl/"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "Why AI is unlikely to be an apocalypse for jobs",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- Artificial intelligence is more likely to replace individual tasks than entire occupations, limiting th...",
    "url": "https://finance.yahoo.com/technology/ai/articles/why-ai-unlikely-apocalypse-jobs-234216568.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "Berkshire Hathaway Makes Alphabet Its No. 3 Holding After 48M Share Buy",
    "type": "NEWS",
    "remark": "News via Stocktwits — According to the firm’s filing with the Securities and Exchange Commission, Berkshire lifted the combined GOOGL and GOOG...",
    "url": "https://stocktwits.com/news-articles/markets/equity/berkshire-hathaway-makes-alphabet-its-no-3-holding-after-48m-share-buy/cZotygTRJK2"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "All the Stocks Berkshire Hathaway Bought and Sold in Q2",
    "type": "NEWS",
    "remark": "News via Kiplinger — Berkshire was busy buying stocks in the second quarter. Here are all the stocks that Greg Abel & Co. added to the portfo...",
    "url": "https://www.kiplinger.com/investing/stocks/stocks-berkshire-hathaway-bought-sold-q2-2026"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "Bank of America Sees Bargains in These 16 Knocked-Down AI Stocks",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.investopedia.com/bank-of-america-sees-bargains-in-these-16-knocked-down-ai-stocks-shares-tech-trade-12060473?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "Berkshire Hathaway expands Alphabet stake and trims bank exposure in Q2",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/berkshire-hathaway-expands-alphabet-stake-212358443.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "BofA Resets Applied Materials Stock Forecast After Earnings",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bofa-resets-applied-materials-stock-190717120.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "Broadcom Sinks 6% as BofA Flags $370B in AI Debt, AMD Climbs 4% on Baird’s $1,250 Call",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/14/broadcom-sinks-6-as-bofa-flags-370b-in-ai-debt-amd-climbs-4-on-bairds-1250-call/?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "BofA biotech scorecard: Two buys and odd one out",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/investing/stocks/bofa-biotech-stock-ratings-amgen-gilead-vertex?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "Is Citigroup a Solid Investment Option After a 51.2% Jump in a Year?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/citigroup-solid-investment-option-51-142900308.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "The AI build-out has a problem that $1 trillion in cash can't fix",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/article/the-ai-build-out-has-a-problem-that-1-trillion-in-cash-cant-fix-134114624.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "Bank of America’s Top Pick for a $210B Market Is AMD, But Traders Prefer This Other Stock",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://beincrypto.com/amd-stock-bofa-ai-pick-options-analysis/?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "U.S. national debt nearing $40 trillion as BofA warns against bonds",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://qz.com/us-national-debt-40-trillion-bank-of-america-bonds-081426?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "Bank of America won’t let employees work remotely 2 days in a row",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.bankingdive.com/news/bank-of-america-wont-let-employees-work-remotely-2-days-in-a-row/827938/?.tsrc=rss"
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
    "date": "2026-08-16",
    "event": "BAC Looks 19.9% Overvalued on GF Value™ Amid Dividend Sustainabi - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPWDNBRXZ4M2J6cFFGUFh1YTh5LXBGVUlRNHMxTTRhOHVVRFBCZkZVVXAyV2F5a3BIRW5CZnFYRGpIb2tKWmFweEo3WWl2TEhHYW9fcXN0cWlSVFJMbzFwZ3EtWE9adXE1cWR3VUZ0dUw4MXBVR01MR3p2ZEwwMTBfME1yUWFCNWVwb0FWSXZEY2RPQWdEckx0blhWYktSOS00ZVZjc3FfcVMzTWNMWnVn?oc=5"
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
    "date": "2026-08-16",
    "event": "Synergy Asset Management LLC Raises Stock Holdings in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxORU0xNk1TYW1iRzd6ZmlQcjNkX0c5V0dPWm10MEZLT0VEa1ozcU9kZlJFTU9CanR4dlYwUklQRHZhb0d5TnFCVVFidlNyR0FQWlluM3NIV3ZnSzRfeWI3SHJFR1ZubUcwX1FUd2ZQSFEtRWFRY01xdlpUcEctWHNSSDdOa1lscHlGMi1KUzc4cmhPSmJZZEM0ZmJ6MkRsOGFwWGhWNzliTGZvQlN6UmVtdWhXaWNGWUo4RmFPczNManIyWGhlUG9POXlTdVdrSFE3WmJQc1c0UTN3RnBPLU9n?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-16",
    "event": "Bank Of America’s Hidden Bull Run Is Just Starting! BAC Stock Analysis Aberdeenshire West (lYGCTrw3Wh) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1VWW5ZbGZiUFBjQm5KVmg3SkNndlRmUXBxdjY5UlQ0SFUzVlJMTzFNTm9FLW9aQkpmQ3BSdHh1OTI2dVVEWjRUVlNiWjRQSEtTNmoyREhiX3pDMTV2c0pkZQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "Bank of America (BAC) reports $1.55T in Form 13F equity holdings - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOc01GMnNGeVlSSjlreGJDeGt5cDNkTXQxRi1RUmxtYXlJbVRIa0Q2WnZXTmJ2d1VVVEFIMU81V0lvb3IyZk9GVlFQRXk3U2lyS2tMZlN6ME9pTTktVGFlOUdVQWJKYno5ME51Rjg1MTBmMHhEb0VBNDJjMDZ4WDZKcTQtdEFKWF9CUVBEcnZLWTlQd2hkcXJlRGZRYmRBdXk3b1pQaQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-13",
    "event": "Is Bank of America (BAC) Undervalued As Fresh Bond Deals Draw Investor Attention? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPYXBkcmlhbTk0VXhIY1c4MzNteG5ncW00cHV0LWR6a3NVcVNFZUUxVnluTk1YOEgyOEZqWVhXMUdzSWxOalJLTmozYkY5dzQ4Zm5SVV9oazBpUDN3dDc2OHFZaXBLajNtWTJJX05acF8yZ0hIZnpPNy16aVNFMEhHbFRLVWk1WDcya3JNYWJRWHZnb01nSXBoVzBib3VRU01TSDZIQUJGYkN2UkZDRmJtU2xEb2xhMGNidlRMOWdvcHAtR1RpSXfSAcsBQVVfeXFMT0ZoTnhXZ3otLVhfbkZfdUhRN1c5VG02Z1pkbDY3T1otN3ItZXduOU9EcHEzZG1uMlFkNGp1dlpMNzhnVTlfM0xGMGFvWGdfV0gxYnd3UmJlX3ZwelJ0NnRFcHN6ZTg3eUdjcGRJdFVFYjhpNjVtVEVHUjlVdTNqQm1aNS04V3QySE16clExNk9IZnJ2dFFkS3VLQi1McTQ2Q0pTUzJEQTdFc2dGUEhvSG5EdllMZzZtZFpyUDRZRjY0WFo3cENrUjRleDQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank Of America Partners With Jio Financial In $1.9B India Deal - Bank of America (NYSE:BAC) - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNV1VjR2RTNFI5TFkzOXVVWUtiekQ4YmIxTWJyamYyLWZ6SzNCYTE3dGJyTzdhR2M4RHFVTG85RUl0X09MN29QQkN6R3B2TVZNcnpkQTk4aDR0OUxPRTdDclhhRWc5YS0ydTMwNC14TWRkWXpWazlrR3A3X0lXR2Fhd01PamxTRUI0azZZTnBfYzE1QTNWX0ZZaGNfamRfWmxHbjRSNTR2QTllUk4zYlFWM05aTlllc0FRTE5DXw?oc=5"
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
    "date": "2026-08-16",
    "event": "Spectrum Financial Alliance Ltd LLC Increases Stock Position in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxQWEVuTVVsUjRUUFg1MlFqdzBybXBaUEd5MW1YekE5VU41aXN6NUd0UGdtZWpTdzMxWXQ0V3RsLVZPNy1fdTRSYl91U0RLMVFQRlgxWWhCMmV2NWRxSTRkMTV0YXNTOTRxWC1EZm1HemlkOHh4QUNHc2dqb2VETUR5U29fZmlIZERrT2FpNTlPQS1rZFJ0b3pCbjR2VHU4RXRMWjdUSlJ4X0lWbTd0MlhSc0QwNjJJdE5sTmNMdjAybU1OQWxXbmYzbzBUVkE0bVc0eFJybXh0TjlfTVpHVldXMFlyNEg5dFV3WUwteA?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America Initiative Aims to Create Tens of Thousands of Jobs - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxObE12SVlONHJxWDdQYTdYbkJOZVJ5MGl4bVphTGthbTlINFNtUjNLdy1qOGF0c1hUbGdWck1Xdy1VazlzZzdELXhRby1QWmZwNGFmYk85OUo3X2VMbnJjcGwweHlDMldZOERjSjNNRGNYSFUyaVFNUzdGb3JqY09BR2RkLXY4ODdabDg2NFM4UkdySmt4aHdXbjhnN0t0VFJUQ0xjRGdqUUtPbXdX?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "I Might Sell BAC Stock For Verizon | Fidelity Investments Weekly Stock Portfolio Update (Mar 2021) Pete Davidson Baby (U8dcehvY02) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9jSlA4WlFFSHllZllXQlM1cUdTMkpBOUVCbGdianBHT1JCSU9hWl9JOFd0SDU0MUR2aXdIVnN5UlRQd1NxQTY0OF9iWVppZzRYSFhDS3Ryc21pNVJjeE90bA?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-11",
    "event": "Where Does Bank Of America (BAC) Value Sit Below Fair Value? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQMXdxZldvcXFqbkFyM21VQlpfNVVQN041MDNCSDNxbVRkeHlNNDVPVkc5c0p4a0VEaHdIT1JwM3poRzllVzNabDBjelo0eWVlcjFHcnl4VVUwNmZyeWZOWmd6M2pKRG1fdHZleThyY0h5eFFidjZ2dXdtUVRXR2xzNUFXRjVZOTRwOEkyZ1ZWZEd1RUw0U3NUWjFTMS1kVldCSjFDWHB6TGZUUnlFOFFBTWdjYm9RYzNnZHd6Mm1FTk5kRUXSAcgBQVVfeXFMT2ZHZ2J6VUpJSm43S2l4TXVSSFUyXzZtY0RFak1XT3dEY0pzVjJVQy1vV2VsbzNWZlgxemFlZGo1cFVGV1ZwQVdaTUJ5YW03Y3NrZ2xuQmRoOWRiVkJyYzlscFh4Q0Q2OWp1OXJsT1lmOUdwZVJuLXNkLW9hSDVxZVVEWXdQQ215STV3UklfN0ZhR1ZybWJZc2lpUlB5MGQ5VnRDc1otZ2kxcXYzbW9XdlZONjhkdk1rVzJhMlpsTVNqaXpyYklJUFo?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-16",
    "event": "Mirae Asset Global Investments Co. Ltd. Raises Stock Holdings in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxQZy1SeEpMUHF0b2c1WDV5UDZzV2hLVXdRaTFiYmNxQmFUM00xa2ZuR0d3YVhESUcyU1V5ajZwQUMtLVFLYXptcGVSVlFsNENpek9zd2dheE9sS1JRN1ZwYU5uZkh2Y2hIMFpQTWI3NkF0UmphVDlKZzhjMDdDVHpfYmx5bjRSRUVWT1ozWWJTNVV1UDZvTXJTQzRRbThsZ1o2RHFJd08zZFNWRmtIOGpQWGpTSWIwNDZvWS1COG55cEJKdWxJX1RrY1EwczBGTHVoVlplX1l2RF9ZMnpSY3J3bzdzY2ZVaUlNcXk4?oc=5"
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
    "date": "2026-08-16",
    "event": "3 Unpopular Stocks We Think Twice About - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPZDk3U05hcjI2SzFWNzJzbjEzWmsyZlBIaG4yVmpOblpIdmljN01DZlliS18zNGtwLVdNeGxscnNLU2pKbElzS1BzU2RhVWtmVWhuckZQSHZTdG0xOU9PVE54ZjEySkZTbi1qVmthRlFiZFU3d1VMMFlvMmxmMlRmNkpGcmtqbFZqWHlTUFFablBIdjFrTXZtMzZkaw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-11",
    "event": "Bank Of America (BAC) Tightens Data Center Lending Standards - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNQkl6UGFpbUF2REYxclZMX0pJZzNRaGNzcnZXc2pHS21xWmQ3UkQxaHY3UnFKYXVZWWdMNmhRenFEMmgyNTh0ZjE0Q3psWDJBUG1fS3ZjMjRyZkR0VlVaamtZUHQzSS1GX2FaTUF4NE9Zby0wQnp5SDJqRXE4TmZmcmNzLUh6ajl3R0I4eDFCNnBzcWNqdG5EeV9oZw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Can Bank Of America’s (BAC) $250B Bet Pay Off? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxNemdHM0hfalZvMDBTc09EUVZQTExQY21lZFpzVUlMMVJJWmQ2X09WOHZrUXl2UXdMcU5mTUxwa2J1YWtKZEZ3VENaZzVndVFWcFRvVElQMHlUS0gzckpObkV6UXh0N3NIWUo1VFN4bWV5eFREX0pHUUxmbVhaZ29qSXE2eHdNZTdDMWVPTy1Hb0JoQVRh?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-06",
    "event": "Bank Of America (BAC) Flags AML Penalty Risk, Is The Stock Still A Bargain? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOcXVlQmFNVWdncjBscG5wV2ZJLVFuQ0VPQWxjUjJPWXpZeWdJMHl6TmhpYXJhQmJHczI4WFQxbGhlVk92NXMzek1BYTVZeXh0bjFLeUM3SzI1N21GQ2ZUREZDM0xKLUoyUnhwMmJCUEl0RmxjR1NLX1NEbzlnczMydzg1cFM4RWRGbFZzRVJEOUdEUzFWcmc?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank Of America (BAC) Unveils $250 Billion Infrastructure Push And India Credit Venture - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPWkVoZkNUV2t0VHRoYXVNQXZVVHM0Y0R3M1lFR1VpX1VCUHlRRGFCRzdZQlNURy1UU2VDTHpqWkVzQnFMT1JBV0x5Vkp3N2hWVHpJSVVoOWxMaGNkb3g3dy1zR3pkS2VkSG83aDRWR2FHbGNvVGxWLU95ampqUS1rX1NpbnpxYUJZNTJDVlg4a1AxTDBaTWNNWkZIRTVtejM1SGUwM2FhbXpyZC1SRXllMTdkdzJseE1OeXY3UnlyTEZjUWFrb1HSAcsBQVVfeXFMTUhuMnRZbFFpcWJUeDlGMkF1cXBoTWxKczhzTHdDNzU2MThRRExIZHVtTEFfR3FTV3RXeG9xYlphWFFBeC1LUkdqSXBpMGxYTUxrSFdpUmJEWU5ONnFCU2p5NlhYLWxrQ1pRWXVoMElvNENCSEtHQllab3V4ZWpWT1Fjd3FMV04tYm5peThuLTNudk94eWU4TE9STDFINmNyS1l2Um1lMnRlbE9xaW9CdXFjYl9jRXNndWI4ZUdyV3hyem03dkVCZVg3LWc?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Tema ETFs LLC Increases Stock Holdings in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPdGJ0RS1KWi1SNENnREZxRFFfNVVJWGNnY0ZsUEwzcEd0NXd5TWRoSnFPeFIzV1hDTGJBcTlmZVI2ajFXSkxBYjlBX1FFdjg4Z0MtUlowR3o1cU5GbXRJdmpRNG91OU13N3JIcFpTM0M4dGpzdUFfaU9Jczl0THdxZDVFNDZZYXE1dW5FOGVqTF9JQ04wbUgyZVBkUUdvYXBLMFozV0wzSFlGTFV2RnF2aThmOUNJY0VLZUFhS01NRHcyWmVCa0lFLWJfRlNsV0U?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-07-24",
    "event": "Bank of America Increases Common Stock Dividend 14% to $0.32 Per Share - PR Newswire",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNTFB2WDhCUWVQSm54dUlvaXk0NzItaFp6a1FuT2l4dzJRWFhDMjg1SWw3VWxrbjBYXzZDWWxzcXVzY1BqWEJxbFpMaHd5Vm9HOFE3Wl80UjJQWU5NSHBHdlNNZ2l6YXFKcTBPR3lWUFlpRGZURlZQUnBBTTJyTWF0OTFRR2FZZWdqZDJyaldkc2dWY21ONmdNcWNXcHJXNkViQU9nQmdDNHYyRnpKaDlpWUJiOERVTzlpYnRmZHE2M3F3QQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-13",
    "event": "Gratus Wealth Advisors LLC Boosts Stock Holdings in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxQWHhyMk11Q1VaNlFSMEZPeE1MUFNsdlBmdzBXTnpYc2EwaHc5NW1XMmdEUUJwT21MY0JNMzNzaFkzTk1nR282RE8weTl5WkpaZncxOUNwSzV5MXBtLWV2N1p2RUlZdVVOWFYtNTZ3MnFFeUZrQjhSOU5mczFPZHFtcE4tcERLNFFjRVFkMERsU2FYMmxpYWdNR1JBZGExcV9OUGo5LVJjRzFrQS02ZW10eGdadUEtcXhYZUhfdktqVk4xRkJNTkhmVnRjaXpEamc4azQxbDh2VGExYWxu?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-11",
    "event": "BAC or MS: Which Financial Powerhouse Deserves Your Investment Now? - Zacks Investment Research",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOUGZjcy0zZzUxOFFUWUNsaENWV1VnbFEzbERpXy1MTjVJYWJucHZQU29uYVdhM082QWh1TjN5aXFVTUtNdWRFdFI3b0YwYnltejhPcjlFVzZZUmtHT2dtMUo4OUJqaVljNmRtektyTjRiSmlMUjVEcmlQYVkzZWlUbTRHTl9sQjhzc0l3bktpNjIwcE1OMFppQUhMN2I2NC1Fc1dhNk04WVNnQQ?oc=5"
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
    "remark": "News via Simply Wall St. — Bill Ackman's Pershing Square added Visa (NYSE: V) in a major portfolio reshuffle, highlighting fresh institutional atte...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/visa-v-drew-fresh-interest-120853703.html"
  },
  {
    "stock": "V",
    "date": "2026-08-16",
    "event": "Billionaire Bill Ackman doubles down on these stocks in Q2",
    "type": "NEWS",
    "remark": "News via TheStreet — Billionaire investor Bill Ackman has been busy putting billions of dollars to work after completing one of the biggest m...",
    "url": "https://www.thestreet.com/investing/stocks/billionaire-bill-ackman-doubles-down-on-these-stocks-uber-microsoft-amazon-q2"
  },
  {
    "stock": "V",
    "date": "2026-08-15",
    "event": "3 of Bill Ackman's New Stock Picks Are Interesting: S&P Global Trades 28% Below Its High While Visa and Mastercard Sit Near Theirs",
    "type": "NEWS",
    "remark": "News via Motley Fool — The same investor just bought all three -- but only one of the charts looks like something went wrong....",
    "url": "https://www.fool.com/investing/2026/08/15/bill-ackmans-new-stock-picks-are-interesting-sp-gl/"
  },
  {
    "stock": "V",
    "date": "2026-08-15",
    "event": "Mastercard vs. Visa: One Fintech Giant Has the Stronger Growth Story",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Visa just crossed $4 trillion in quarterly payments volume while Mastercard keeps quietly expanding its margins and winn...",
    "url": "https://247wallst.com/investing/2026/08/15/mastercard-vs-visa-one-fintech-giant-has-the-stronger-growth-story/"
  },
  {
    "stock": "V",
    "date": "2026-08-14",
    "event": "Bill Ackman Just Bought Visa Stock. What Barchart Options Data Says Could Come Next for V Investors.",
    "type": "NEWS",
    "remark": "News via Barchart — Bill Ackman reveals a fresh stake in Visa stock. Options pricing also suggests V shares will rip higher in the weeks ahe...",
    "url": "https://www.barchart.com/story/news/3858472/bill-ackman-just-bought-visa-stock-what-barchart-options-data-says-could-come-next-for-v-investors"
  },
  {
    "stock": "V",
    "date": "2026-08-14",
    "event": "Solana is about to cut transaction finality by nearly 99%",
    "type": "NEWS",
    "remark": "News via TheStreet — Solana is about to get significantly faster. A major upgrade expected to land in September will cut transaction finality...",
    "url": "https://www.thestreet.com/crypto/markets/solana-is-about-to-cut-transaction-finality-by-nearly-99"
  },
  {
    "stock": "V",
    "date": "2026-08-14",
    "event": "PayPal Stock Surged On A Profit Shift Management Had Already Spelled Out",
    "type": "NEWS",
    "remark": "News via Trefis — The businesses that produced this recovery were named in the company's own reports well before the shares moved....",
    "url": "https://www.trefis.com/articles/611549/paypal-stock-surged-on-a-profit-shift-management-had-already-spelled-out/2026-08-14"
  },
  {
    "stock": "V",
    "date": "2026-08-14",
    "event": "Bill Ackman Moves Stocks. These 5 Prove It.",
    "type": "NEWS",
    "remark": "News via Barrons.com — Netflix, Visa and other stocks rose on the news that Bill Ackman was investing in them. The billionaire focuses on buyin...",
    "url": "https://www.barrons.com/articles/bill-ackman-pershing-square-investing-e4c21f3e?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "V",
    "date": "2026-08-14",
    "event": "The Last Time Bill Ackman Bought Netflix He Lost $400 Million. Here’s Why He’s Back In For 3 Million Shares",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Bill Ackman once torched $400 million exiting Netflix, then swore off the stock entirely. Now he's building a new positi...",
    "url": "https://247wallst.com/investing/2026/08/14/the-last-time-bill-ackman-bought-netflix-he-lost-400-million-heres-why-hes-back-in-for-3-million-shares/"
  },
  {
    "stock": "V",
    "date": "2026-08-14",
    "event": "Bill Ackman Just Bought Mastercard. Here’s What an Investment 5 Years Ago Would Be Worth Today",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/14/bill-ackman-just-bought-mastercard-heres-what-an-investment-5-years-ago-would-be-worth-today/?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-14",
    "event": "Ackman’s Pershing Touts Value Investing Amid Bid to Stir Demand for Funds",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thedailyupside.com/finance/markets/ackmans-pershing-plans-marketing-push-to-stir-demand-for-newly-realigned-funds/?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-15",
    "event": "Alphabet vs. Oracle: Which Is the Better AI Stock to Own for the Next 5 Years? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPa0tzSmpoX1AyMnBmckFTbGd6S3E1UlhoQ1VzeVczYVB6Njk0bjA5ZTNUVzRTRmljenRXMzY1UWx4dGcyQUNkckd3dXV5bHI0a1ZxcWhReFdoNFZTMmVRM210MDkyM1phU1ozc1d3bzlabmJfWnViNng0c3I5VDVjZXExNmM2dDFuQ3A3YzJmTkg2UjY2b0M0?oc=5"
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
    "date": "2026-08-14",
    "event": "Bill Ackman Just Bought Visa Stock. What Barchart Options Data Says Could Come Next for V Investors. - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOMlNBRDdxdlpfeVR4UXQ3ZDhQeEpuWHdPSTJCdlZyYlNVY0ZqdFp0TEhBbW1qT0I5RmdnaXY0YkxKRUNmQU5md0dSVlN2Z19wRFdEN2kxbWNCOF85S0tZODZNRFVjN0JBSVozNFBRRC02cHF5WURQYjFrdmFaSVZRSWwxbWVDVGJFZmlheUd1S2xWQkVMTElDZUp6SllSd0N1NXFhdkp0UmRkdkMwSWpjdXFFbE1PR0ZBalZjTHhSNXpVWFJNZC1ISXZOdmw4NUxJZTFOUVhVcVVMUQ?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-14",
    "event": "Better Tech Behemoth: Alphabet vs. Microsoft Stock - fool.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOLU9rdHExalNNY1hEYnFYUUFrQWlEWlVYQVY4SVJEdEJOQi0wdU5reUJPUms1Tkdid28xZzB4VzNIdC1yVjlkQ19QSFRnRENUc004b3M1Ym9BNWZ1cGZDLV9PbVdEeGVzelNwdHRrU09UYm5RYzM0Z09oRU1CLWlaMDJhWWU4MF9wVlBnSGJYZ05xNUdYQ3VpZw?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-15",
    "event": "Cisco vs. Broadcom: One Stock Looks Like the Better AI Play - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNMktVREV5ekVqaTlaS3QtbWlWZTM0V2JKbVFPTmJkOVltX2RxTnVnQ2VxMkRBaWt3czdXUnhodFZjdU9vb1B6YldFYnRuZkEtZkdPaWpYc1ZHcUswdHhUX3Rpa25ZVjIyOEIzb3F6Qkt2aV9acGt6UEc3T0VkaUtHZF9ReHQxVHlsSTZ3U241U0tXZGVHWkZ5aDdtWTFGTzgwblk4?oc=5"
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
    "event": "When the Price of (IVQ.DB.V) Talks, People Listen - Stock Traders Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxPdEdlczhSOXhfRzFjbGZkaXNSR091QW9aMTNObWxwSkxvMmNUN1RzNHdvcWVVcVk4bWJMYXJMV1BiMjRfbnZHRUVSeW9pOC02dmZwSlpnX0RXbWdueUtBdmw3TDRBWXNfMXM3WktGcm9aV3ZUdVBfWGVEUmpiTjQwVEVmWmtvbENuWUZFeV9QYzVRLVk5ZHlwUGVtOVdWcjdjVVFUSXNn?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-14",
    "event": "Thunder Bridge Capital Partners V (TBCVU) Stock Chart and Price History 2026 - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTFBfTWdFTFZzdUxiYkJ4bHoyaG1yVzVzTEdSOTlEZ3N2b0E4bW5TaEdQWWZIZTU3OUh0VFViWUFfUVExVURBVGFBNnpPZDRFM091cU5mVmdieUs2VjBLdGxhdkM1MA?oc=5"
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
    "date": "2026-08-14",
    "event": "CrowdStrike vs. IonQ: Which Technology Stock Is a Better Buy in 2026? - fool.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNczEtVHdOOGZ3Q1VKV0ZZZ2gyMHBDbGQ3YVNQcFNncERicHFaYkpFRUNPMEhXMnZzOFp1YzF0NXRpelo5RlQwajRIblVfWEdlcmVZU0l4WEs1LVVyV0FmMGozRExkblA0SkhwZmthY1U5V083UlBKYS0wSHEwcm9hU0VocHVSbk9sUjBaZW5IT2x5cHYzMVNMSDZLaVhySWQydkF0LXVBa0p1RF9JTnVwVVlQOUNHR2VqTDJB?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-15",
    "event": "Does Visa’s Expanding Stablecoin Role Reshape the Bull Case for V? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxObTkxRm9vVXhSQWFLVHJsZ09ILVNxYjY0Vm9tR3A4VFFESmV3Nl9ncWJCYm5TWkQ5UktVNDR6Zi1vSWVnclRhY1ZibU5FZXdMNDlsS3E3dk1rZ2dhTTBiTVp3ZUNDdUJIWU1WdlVTcmhSN2NqbEJ6c2ZfenBleDdjOFEtWUx3bWlWNkwtSngyRGxGYzlpOVpJbU5zUUZ3OGZjV1ppTWc0dHVzNEdvVDNzSE5nOU1VMEhlVU9oblBLcjVOMGh5eVlKaTJsa0PSAdIBQVVfeXFMUHB1cmwtVU9FU2plaWR1Sm9HdVpYTjF4WXNLUDROdER2UFJNMGtQVExUR2owb1B1U1VOdGNTY1ExeFlhQ0N4V21yajVHYzZ6ZXZxZUV6dzV1OVZhRzloQWg3UTJlQTFPMUtaaFdzOUtxV25BVWc2TzNDVTBwV3I4ODVJZVhmUlpubjE4YUxieXBYY2Z3bkJvTmNTMFRHWXQ1QmxZUnpUR0dmWUJwaU5NeGVIcDhhaTBNMmxPaHRFRmNXSTFkbTZWa2hMZTY5SEJsUUt3?oc=5"
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
    "date": "2026-07-13",
    "event": "Why Visa (V) Stock Is Up Today - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPcVZrZ2RCS3d1V3RZbXRjNEhfUWxBVEJTa2RsSjR2RUpzc3Y1bVVrSDVBRHF4WTQ4VTBxX2xpdTZ5Wk9taTF6a2JObXJYN3ZhVlA0VVctZUxZSGZzSVA5aXlBdU1VczBNNURoUzNOR1h1WXBRMXNfaksxalRPRnpiTzdodU5jQ05OQTNGQXR3Mng?oc=5"
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
    "date": "2026-08-03",
    "event": "Visa (V) Stock May Be Fully Priced On AI Driven Job Cuts - Yahoo Finance Singapore",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE5Hdk5wSmo2dUgyeXFRTl94U1hBR0dfX0FjRzQ5OG5wQ1Q1ekViSGdOT2Z6ckNTRmV2eDVWZXJoS3BSbWlTUHRubnJrNWtxV212Wm4zNmo5UlppQ1puR1Vzb0FzWGxjYVpuQV9nZkNTbHZmMDNEM3gwS1llZw?oc=5"
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
    "date": "2026-04-15",
    "event": "Visa (V) Laps the Stock Market: Here's Why - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNY0hHMTliQUJsc09PeENnUWh1RWpwNUNWR0xFNmhqcGt4SWZLS0ZMem1RQmhpdmhxUWcyM2E3aFd1R3pVQWpjNTA2a29TWVpza2k2UU93SEQ3d25zTHVVbU0zZ2k2YWhOYmtrNFBDMVZrZkR6N2Rpdk1aNWdLNWMyQURQN1dkeUxZZlZYaWpQNnFNVzg?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-04-20",
    "event": "Is Visa (V) The Best Long-Term Stock to Buy Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPcjhhckhjT1F1RVJzSWVIay1ScU5ENTVCWTN6VVExeWhlZUJtV2dfRERaMW9aNnBIVjJ1anVzQnVzUE54ZjZtZmU2SWpwel9ybzBUZmw1S2piWkp0TkxEdVlNcDBZVE5lSkJoQ09BS2tOeWZNVGhvZk5TWm1aUDJhN3VBUWdFTkZuRXFWSjRUSQ?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-14",
    "event": "Detroit Lions stock report: Risers, fallers after loss vs. Bengals - MLive.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOYzNFeW84U1ZCLTQ2Z1M4RkdULWNaRHNGMHBuNkV1N2RtSVR5cXVXc3RvQTI3UGo1aHhrc3BhU09DdnBveXZ6TmxQN3ktRnhDcjVmTi1oRnJjVFlpMlFXZkRCUDZ0TlkyQndRZmV5RE9nUUoxdGY0VFR1a3NGTzJsVmk5TV9DUGNLLXRvRGlaQ2tkMlhZdzBURkJfdXnSAbABQVVfeXFMTVFpdE16dFg3QVBlTXRGaUVobUlTVkpHWlFub05IZXZzenlQQTJBVVRvbEdpR2phQU9wZHZHcnB2TWM5MExvWnpNN3ZIcUVaVXk3T3JtNXZkZS1ET2l4VXNBR3NqOWN4Y1NGOVFHaC1FQkdpaG12OVQxSlZoUENfMGdaNTY3UlpKZ2lyS3dackdGbm9jejA5bGxka0oyUGVKMmlGSWJuckZON0JONWZkbHc?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-15",
    "event": "Dolphins Stock Up/Stock Down Report: Dolphins vs Commanders Recap - Dolphins Talk",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNY09KMFlHVVJYNm5lOWljT3BtOHBiV2t0ZUxSN3Q5WjlzUTktSmFOU2FlUXFnQ2JEMWxCZGd1N0xIU2w0V3hUUDVLa01Wam52S28yVWlSNmlGVGRpUGoyM1NHbGg1VnZpWGg3VTY5U2RkTFIyc0hTNWNKbzR6clpWNk1teGhIU0xfNXBxOVFJRkZENW5pZ3BLT2ZVRGhFUE9TSWZKWVNLQQ?oc=5"
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
    "stock": "INTC",
    "date": "2026-08-16",
    "event": "Stanley Druckenmiller’s Big Bet: New Broadcom, Intel and Arm Stakes in One Quarter",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Stanley Druckenmiller opened three brand-new semiconductor positions in a single quarter, and the names he chose reveal ...",
    "url": "https://247wallst.com/investing/2026/08/16/stanley-druckenmillers-big-bet-new-broadcom-intel-and-arm-stakes-in-one-quarter/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-16",
    "event": "What Could Intel (INTC) Returning To Memory Mean For Investors?",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Intel (NasdaqGS: INTC) CEO has signaled a possible return to the memory market, positioning the company as a potential r...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/could-intel-intc-returning-memory-130810975.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-15",
    "event": "Lip-Bu Tan Investing $12 Million of His Own Money into Intel Raise: Daniel Newman Calls It a ‘Strong Sign of Confidence’ in Chipmaker’s Future",
    "type": "NEWS",
    "remark": "News via Benzinga — Intel Corp CEO Lip-Bu Tan is investing $12 million of his own capital in the chipmaker’s newly upsized $20 billion stock...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/lip-bu-tan-investing-12-203042032.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-15",
    "event": "Nvidia’s Secret $21 Billion SpaceX Windfall — How One Chip Deal Turned Into a Rocket Fortune",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Nvidia cut a check for an AI startup and woke up owning a massive stake in Elon Musk's rocket empire. The chain of event...",
    "url": "https://247wallst.com/investing/2026/08/15/nvidias-secret-21-billion-spacex-windfall-how-one-chip-deal-turned-into-a-rocket-fortune/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-15",
    "event": "CEO Lip Bu-Tan Just Gave Intel a $10 Million Vote of Confidence",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Intel's stock has already tripled, so why did the company's own CEO just write a $10 million personal check to buy even ...",
    "url": "https://247wallst.com/investing/2026/08/15/ceo-lip-bu-tan-just-gave-intel-a-10-million-vote-of-confidence/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-15",
    "event": "AMD, Intel and NVIDIA All Rally as Super Micro’s Blowout Numbers Reignite the AI Trade",
    "type": "NEWS",
    "remark": "News via Insider Monkey — Three of the biggest names in logic chips closed higher on August 12, following a strong earnings report deep in the AI ...",
    "url": "https://finance.yahoo.com/technology/ai/articles/amd-intel-nvidia-rally-super-110738841.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-15",
    "event": "Arista Networks vs. Intel: Which Technology Stock Is a Better Buy in 2026?",
    "type": "NEWS",
    "remark": "News via Motley Fool — Arista is firing on all cylinders with 39% net margins and zero debt, while Intel is burning cash and posting losses as ...",
    "url": "https://www.fool.com/coverage/better-buy/2026/08/15/arista-networks-vs-intel-which-technology-stock-is-a-better-buy-in-2026/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "NVDA Discloses $21B Stake In SpaceX — Elon Musk’s Rocket Firm Becomes Nvidia’s No. 2 Holding",
    "type": "NEWS",
    "remark": "News via Stocktwits — Nvidia owns 122.8 million SpaceX shares, giving it a major stake in Musk’s space and AI empire as the two companies deep...",
    "url": "https://stocktwits.com/news-articles/markets/equity/nvda-discloses-21-billion-stake-in-spacex-elon-musks-rocket-firm-becomes-nvidias-no-2-holding/cZotyxyRJKP"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "Wall Street ends lower as investors weigh data, Middle East tensions",
    "type": "NEWS",
    "remark": "News via Reuters Videos — <body><p>VIDEO SHOWS: n/a</p><p>STORY: U.S. stocks ended lower on Friday, with the Dow, S&P 500 and Nasdaq each down les...",
    "url": "https://finance.yahoo.com/video/wall-street-ends-lower-investors-225242650.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "Intel’s stock buybacks: History & investor impact explained",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/investing/stocks/intel-stock-buybacks?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "Druckenmiller loads up on Amazon and AMD while dumping some chipmakers, 13F shows",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/druckenmiller-loads-amazon-amd-while-215638635.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "QCOM: A Cash Gusher At A Marked-Down Price",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/611499/qcom-a-cash-gusher-at-a-marked-down-price-2/2026-08-14?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "Intel Banks $150M Paper Gain As Joby And Mobileye Rally In Q2",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://stocktwits.com/news-articles/markets/equity/intel-banks-150-million-paper-gain-as-joby-and-mobileye-rally-in-q2/cZotsZFRJKG?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "Kulicke and Soffa, AMD, Intel, and Nvidia Shares Are Soaring, What You Need To Know",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/kulicke-soffa-amd-intel-nvidia-194100344.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "1 Semiconductor Stock on Our Buy List and 2 We Brush Off",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/1-semiconductor-stock-buy-list-180500555.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "Marvell's Year Was Made In Interconnect, Not Yet In Custom Silicon",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/611551/marvells-year-was-made-in-interconnect-not-yet-in-custom-silicon/2026-08-14?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "Veteran Bank Gives Intel Foundry a Major Vote of Confidence",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/intel-stock-focus-23-billion-161053832.html?.tsrc=rss"
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
    "date": "2026-08-13",
    "event": "AMD vs. INTC Stock: One Is a Buy, the Other Is a Hold, Says Bernstein - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNcnM4NG8yQXNNNVVUUFhFQlFDQUNxR3JOZzNvZnc0ZENLc29qdGRUUjdWdk1vSHRjemcyUTF2QXpQWThGdk8xOGhqSEw0QkVqbDRWc1NVelFPcFhOenEyLXJINTZ6LVZYMGZzSU1Sa1lqcElwWFVqOEIxWXdVWll5MERvRWZPWmN2VGlsU2EtNzg4dF9Kb3VnVHQ3RQ?oc=5"
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
    "date": "2026-08-13",
    "event": "Intel: The Entry Point Is Gone (NASDAQ:INTC) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxQWmV0R0lpVV9hRFlkYnprSGYzZnRrYmZYQTlvTVhMaXNvN1JoU085bVJjejUtOE13T1FLaUdVS2ZZUTFEVXpHZlFQSWcyY0NVWG5QNF9LS1NmYWptTXVkZUFqcVMxUDduOFNPeFNORktRVE9iOWw2OFI2bDZpMFU1OE9B?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-13",
    "event": "Why Intel Stock Popped Today - fool.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTFA2UXhiRFo2M2FSUXBFU2JaWldPRnRmNjJZeUFqZVpQbkg5VlNwaUo5dkZnWnllOWN1Q25MdUdkX0w3UkVfa0xGaS0xRjV2czdnQzkwTExpdEM2Z1JEVnhhU1QwY0kybGM4UkRJSDJvdnNZOXppRnZkZmVpMA?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-14",
    "event": "Intel’s $20 billion stock sale has surprising upside - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPNDFTMU9VVk9fWHhzcDR2OWVwSEJYb0hacVdYMS1mQmJUODAzTmp4QVZqaFVrajlERnFEZUk5YjRiNC1Sc013eHhXb3liVGowVC10SXFkUkZ0eXBoV1laNGRKMVI5RzEzZFdEbTlGcWZSTmhNbDBWU1FSVnNENGhjeHg2cWJBTDE4VGc?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-13",
    "event": "Should You Be Adding To Intel Stock Or Trimming It? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxObjBmQ0xIXzFERHVZaFI2OGhrSTJBWEo5el9aRXZHRi1nN1F5VGU1WWIzTDVRQUs3aEo0M2JHNmtMMzJDTW9Qa2t2eHN1VGtvZUxaTzRmeFhpLTU4UmhuWG1mWDg1WGpjcXNmNllhTlNwcHptOWdoOW8yUzFtSXRENVI5dHlZQS1vYlNiMUZ1TmtwYzdIWm44?oc=5"
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
    "date": "2026-08-16",
    "event": "Intel Stock Is Up 160% This Year. Here’s What Changed at the Company. - TIKR.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPOVB4YVlKeDl1aUJySG9Td2ItVUxsclRwQU5hQUczSGdDcl95WjduZDJDUzg3RUV0Skg5MVRTMFB2NlZnNGdQTktLZGxQZFB2UGl0QzBWZWIxdG5zLTh3TmtBZzlyTC1ybm1wN1JIbERqOGNPOWlpR2dwY1VwTl9rcXZpOXUtUHdrZzVrNElHTE5lRGJrU3c?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Intel (INTC) Stock Looks Above Fair Value After a Very Large Run - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQVGVZM0VrOG5aTHVPMlVyR3l5MDJkSlh6SFhTcmQzUmZ6RlpSTDZ6TXUyeXJkVTFFZmRLNy1QbFR6ZGpZd0JwYVRMNkNaUFBDeDFlSUNLckkyVnV2aDJsYnlTaWI5STh1cUFjbGxRWWtadGJWSFNVMUUxaXl5OWxBYWIzRmJzN2UxZ2VvTWpoamJ6VDVxMjZKcA?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-11",
    "event": "Intel raises $20 billion from upsized share sale - Reuters",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPWmlPY1Jtc3A4X2YxbXFKRmx6eUpMRGhzeTJCXzRwdVlIbzkyZVgzdFBONFRrRVZuOGNtTzQtSXRfd3MySUhnT1JWc3NBS1BYS2JlcDlVUUcydnRacHdzaE9WRmI5NWpvUHYxa1lRamVvZmpwSnBTdl9ueGZWdXJmTGcwSnBoa3g1UnJMT05VRUlyaTdsNGx0dlhjUVV6QXcweFVvaUhwV3dkdnBTWWJRT2x6VXNSa2FrSGVjRUx3?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-16",
    "event": "Swiss Life Asset Management Ltd Trims Stock Position in Intel Corporation $INTC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNMGJZWnZQS2lkaTM0ZkFnZFEzeWs4TXNYckl1SmN0YXNaS01LaTh1ZlA3bWlaM0tfOU15bDJuWVY2VHBvbUZHODlLSndpU1pxYm94YzVfTC12SjVhUy0tNm5qMjIwSDJIWE9hUHI4RkNrVmZfdmZBbzlzWm93OU5VQnNyaHE2VThEdkF2TDZXU0RpMUZHRG1UdTYyVHhDeDl0a2lmUl91ZF9Gd1NJbUF1NXZwMGZRczNQdVhqd2F3a2FHeWtiWXVZVm9wdUdweGdWM29rMTZn?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-10",
    "event": "Intel to Offer $15 Billion of Common Stock - WSJ",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxPcEZKU0FJRm54bE5UQnFUUUFjZzZyZFNhY2VUNzVRdzEtbVJMWkMwUHg4VHpaLXNVdW45cGZTQXhkOTQ1NlZ6Um9pM2I3QUVkN1FBWmktSlV2TlAxY2xUcEVEdERNN1Y3SjdUckJuVEZtbExuTUhxUlBYLTVfTDFWSg?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-16",
    "event": "Massive News for Intel Stock Investors - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPSXMwUzZ1ZDExVXZ1TktkbUc3OVJfcXJfX0EwNnFYckZ5amNqZWkzdEthQnpPeGtmdVlWMEVBZkItcjl1WHp1STlLdzZfLWhJLVRqRFVLSzhUQmYyQmdNbEItMVZHa3p4MU5ic3IyaGVVb29MWEdoX2NRTnBjanFqbnh0YkxCTkxGVGlEN2hoQUhleklCbXNoZTZ4bnFsVDhWd0pwSjl1SzRTLW51cDdmbXRvdU1uRVJK?oc=5"
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
    "date": "2026-08-13",
    "event": "Intel Stock (INTC) Opinions on Stock Offering and Turnaround Efforts - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOcWZVcUlqSzNMV1B5QjExc2JuTUZXWC1IQUFmTE9qSTB1YlJHUGtPM0p1bDVYd3djZkRYZ2hWbFR6Sm9VWjJPeGprcklkVVo5ZENJSVFrcWNUNTZNblQzNEo2SEhSNV9LRTlNZ0ZEV2V6YmZMTHFzMklYRlI1UkdPbl8yazBoM0E5aHdmWFBOT0RtM05sdm44UFBfaWFHQzZyd295SVM0SWM?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-16",
    "event": "Retirement Systems of Alabama Boosts Stock Position in Intel Corporation $INTC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQbmxKbUo3SmZRRTRpeENKYTN6SXdGbjl3bVFZZlFNUVJMc3BuaXBOYWJmcjhveExlb1FLZHR0X2taa3NuTmdMQkZVSWZyS2lBWFNNUy1Gc1d1Z3kwR3JicXFLaHZSRFhwNnB3dVJsUmVSeVBrRHQxLTV0V1Y5VzEwenNYQnFlcTMteU54SGJPN2lCNU8zY3JqRlJTOEhxekkxY1hzVUxzNk1fcjIwMXdiTjQ1bXNtR0ltT19hUHZYdWxCaFpVUjZDXzVKSjlyb1hkVm9Sdw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-16",
    "event": "Intel Corporation $INTC Shares Sold by Resona Asset Management Co. Ltd. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQMEI2NW1RWnFKZmRFaUZseVRYQ2tPNGRjbTdTb2dJcUFBNGFmR1RON0VvSU9vdnZETXJBb0NQbGxZYzEtSngySUJOdEJna2p5Y2FvVjZNNzJtTzM2bkk2d25fZjZ0a1JyWGc3Y0VONUkzbEU4NkF0Q2RGbUVnektrNDhVRjNfeFNRZGJpclZfd0VpSm93d1p2YWdaV2l4SjFodFdnYURhb1pkLXhEMlZSdmtyQ1BPSmpPT1I2NmhMWlEzOXpBVWRjNg?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Intel Is Raising Billions in Equity. History Says This Is What the Stock Will Do Next. - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxNX2g2QWV4NkVqbW9IM1JUdkZXcXpIbjhPR2llbDR4SEVKOGZyVEJNbWE5TVk5bnRMc0tPNVJVRmdCem1fZmZYcFNmMFY2S3l5Q2pzdU5ZaHNXLUl2cFBjaWNycWNwRU5lRThrOWxSNDlKWGVMZWJYRGNTWWl0NG1VblQwVTRvem1QbkxjRGt0cHhxamZmX2l2cV9TdFpIeHBJTjQ4RA?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-16",
    "event": "Atria Investments Inc Has $14 Million Stock Position in Intel Corporation $INTC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOaHBvSUNiWVRWQXF1Szd6OE5XN2ZIN21OUHNWUEY3U2J3Z3B6M1IzeGp1MTF6dzFYRzVrLWsxMzB4bDk5NzFmWk8yRUFRTHoxV0pZbkZRRjZrOHZENFBPUmpzWWdaT2JrQ2phOHBmdXBkdVJiazVsSTBmM3RsZXZ4T2NCeDZjZUptNjZQY3g4UV81Y3BYVXBkXzdNelktTS1BMGJIYWV1YjhfM1pTM2ZIX25zZzdJSUYzLUk0RkQ1bmw1NmxQUnBWRnhsamhGU2ZQOWpJWA?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-16",
    "event": "Axxcess Wealth Management LLC Sells 10,444 Shares of Intel Corporation $INTC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQNUZSSElneUV6VzRXbEotS0RaZGxqSVVreDh5NXV0cWhDSnk1OGpVNXRScllweHA2NzFQbFZqM1d4MTR0ZnYxaWs3Snoxd1A2Zlhvb1g3ZThIbzlHeEtDT0h2V3dJY0prY0E4RmdFdDBTckpKbm1SaGlvUi0yaExjblhqUnBrM0ZYNld5RkRqTHlqRWxLS2hPSHkxa1ZhaUoyaXRnWl83bWlsV2RYa3dqSUM3WkxTejhfRms4elJINWY4S0pvZjVkODhySnhWcHV3?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-16",
    "event": "Oregon Public Employees Retirement Fund Grows Stock Position in Intel Corporation $INTC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxPb1BaRUpOWmhYMFdQOVdtbTE0Z19Cd2g2Tk1lbkVtSmhiZ043QUhmN0owLWdWakNMSUo3ZGVKYW42T3piRFRPX2RmMUVqSkpuem1xX1hRVjRYekxHUWZRZ1ZjZ3A1UExvZld1WVdTdWQ5WngwSnlRYzIyX1VZRGtucThkNV9FbnFxbFdHeWpvWF8xdXU4Y2xDNXFGcFdEWk9CRHowYWIzYUFYenE5SVdXeUFqUGZlSDVuczNwb0ZWREM5NE1hOFBPbkVWU3V4Yjd0bWhqQ1k1RzlKUjBSLXNXTg?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-16",
    "event": "Banco Santander S.A. Increases Stock Holdings in Intel Corporation $INTC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxNeUJOSnNrSlQwX2ZTd0h1SF80Zi1NTDFPSDg0aFJpUXh1bEZvQW4zSUozTVpHYkpoazN4LU0wUjNSaEJac1NXSzNoa19DRlBITGFpWkVBT0dub0dBNzd3Q21MYloxRGRjQ1Jya1dFY1NpRVFZLWhybS1VRkxZZXlDNUtacm9FdTdkNkV0ZDYwWUpVU3I3d19PNHg2VjdzTzNUYnVjSkFZdDlSeXpmWWFicVRkTWY1RVBfdDZFQzZPcURDcU1FVXhxUW1B?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-16",
    "event": "Harel Insurance Investments & Financial Services Ltd. Purchases 105,585 Shares of Intel Corporation $INTC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxObkZsekZxWHBSQzlFSDVzakhhaC1OaG4tWGF6Ylc4enZyV2ZzQWJCOGtXNG8yS3kydEJnejhoRHJTa2pwa2NrR2Q1bHBaTzBhZEN5VDNPZHA3VEJyaE8tdW0xWjNwc1IxdldHLVhvVXNtZEJKOW1MeWE0dDdpUnZvaW1nWGVjRkxXSnZRdE1hWTR6NXc4MVA3MVFfaC1EQWU0YVNWalJXVlpMMTFjeXM3bzV1UnlnQ29pTWRlTzZPUlY1Z2h1cUZ4bVZQQkpQT05Va2J3aXcwNzBUampmN2Yyb3ZqUHNOcmNFTjB6NTZhSVZjUEk?oc=5"
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
    "event": "Jim Cramer Admitted ‘Trimming’ Palo Alto & CrowdStrike Holdings For His Charitable Trust",
    "type": "NEWS",
    "remark": "News via Insider Monkey — Jim Cramer has consistently recommended buying cybersecurity stocks for more than a year. Two firms that regularly cross...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jim-cramer-admitted-trimming-palo-075043010.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-13",
    "event": "Why CrowdStrike Holdings (CRWD) Outpaced the Stock Market Today",
    "type": "NEWS",
    "remark": "News via Zacks — CrowdStrike Holdings (CRWD) reached $225.53 at the closing of the latest trading day, reflecting a +1.69% change compare...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-crowdstrike-holdings-crwd-outpaced-214502723.html"
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
    "date": "2026-08-13",
    "event": "CrowdStrike Expands Project QuiltWorks to SMBs, Extending Frontier AI Risk Protection to Organizations of Every Size",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/small-business/articles/crowdstrike-expands-project-quiltworks-smbs-131100522.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-13",
    "event": "C3.ai vs. CrowdStrike: Which Tech Stock Is a Better Buy in 2026?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/coverage/better-buy/2026/08/12/c3-ai-vs-crowdstrike-which-tech-stock-is-a-better-buy-in-2026/?.tsrc=rss"
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
    "event": "1 Sensational Stock-Split Stock to Buy Right Now, and 1 to Avoid",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/13/1-stock-split-stock-buy-right-now-and-1-to-avoid/?.tsrc=rss"
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
    "date": "2026-08-16",
    "event": "CrowdStrike Holdings (CRWD) Expands Project QuiltWorks Globally, Is The Upside Already Priced In? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPYzk4N1JPSXN2UkZHWWphVVBNdUJ1X0gtLUp1VHdua0R4MjdudXRsZzYzSmNzVF84ZGdVQTFTZWdMZlhUS1VleFR5dFRIcmd2Y2hHQzhzRmJmWXhMbjc0eGFZa0lIaWszZlpjc1ozUzVXUGMydkNJQUw0RmJjU0xaV0FkN1ZVNF95Z2ViN0FUYjNKNHRMY1JNaUpzZndld1hoX0J4NzlhcnF1cHM4ZTg0Rkh3RllBM3Y4a2c2MmJvUzhjeHpvWEctb1dpcHN1eE9DSXF2azhB0gHbAUFVX3lxTE03SHRKYWFpLXhZWExHVHZzNzhlcmhSMUhVaEhSRVlpXzQyaFBnQzhIRExDUmhxcUs4ZVU0c3YxU1ZIcUNRN3dQMy1SQm5RcjhzZmNVc3V6ZFNlLXp0X3JEc2dqQi12b0JJZUJFbmcxcWZGR2NtR25RWFowRTBqdFRpN29ZUUF0MXlMZENVMXd6ZkRjNUYwbkg4M19BeVM1RnMxdEFaalV3cWttNjd0aFFOeDBfYWMwOGk3aUp6Q3JQREpXSmVKV2llY3dLaVVQTTY0ejNuRU9WcEJKaw?oc=5"
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
    "date": "2026-08-15",
    "event": "CrowdStrike's Q1 Beat Wasn't Big Enough For Some Bulls — CRWD Stock Heads For Worst Drop In 22 Months - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOdXFOcXQxTGg0eTVIcXhzTXFJWERIRi1IMndERkRhc254cGNkVU1TOVpVc0J6dXZoVTF1TXJhVDcxV21vbkVpOFJmdjJOUlN1UjV6SDRvMUFoZ1pTVzlneHQ2N3Ayak1ndy1hVTVlbkFUMkZaNDJEVktzeXJJLXBkVlpFdDJCQkxHMmExemlvWnZERHl5QndZeUFCUWxtRVQwOXNxOEJPMG00d29EeDRSd05TNWg2My0tZHJNcTliMURPWjhRa1NfcTlR?oc=5"
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
    "date": "2026-08-10",
    "event": "Why Is CrowdStrike (CRWD) Stock Rocketing Higher Today - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOTHh0Wmo4ck91WlBCdHk3WGxkOGxnVFF5TFJuNXNpejI3MWpXTlNqYk9sZW1iTDZGSnE3RVo1TzlCbU5RcWlJcW5DME1SYk1PN2s5OXRRNWNCX3lzckNOMVBjVi1aODlELTdpUDc5Nkp1aHdiWXpPNUM3bEdjUF9GSmNZOHNSNHFhMldQSWtXWXhJRldULUYxdERxaVlHb0drTFNVN2JzcmZQT2hnS0xJY2NzZVI2TzA?oc=5"
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
    "date": "2026-08-14",
    "event": "CrowdStrike Holdings Inc Stock (CRWD) Moved Down by 3.06% on Aug 14: Facts Behind the Movement - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOTFBMVlREU3VscEVsWE9yZEMtWVdhLVdkcVU1WUdvSm9JTjZyWXZ0dW4yVThCQXBUSzlMbGZGUFRycV9Jcno3WVc0UnQtSDBCdFp0R2hGQTBocFlPNGd1cFhYZW1fSFNzMzRTR2xLc0o3SDRXZklVdnZ1LXJkLURTQXlmOXhfOEhNZl9J?oc=5"
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
    "date": "2026-08-15",
    "event": "CrowdStrike Beats Q1 Estimates On Earnings And Revenue — But Stock Sinks 13% After-Hours On Modest Guidance - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxNR2lGTmxuUkhqOFdabGV1RUNJQzRveGhhMDE4UWN1eHc0MnltVEFmT3BNWWl2X0xzZWFUSlRwV0swQnB6LU9fNGVSQ1lZRGczZXI5WjVPeldDQkd5WGhpZEJlWWpJMmZ2YS1MM04yS2dOaFFORkluTzlpd3FUallqeHp4c25RYWI5bTkxaFA0UnNRNFVoNFlnQTZVdW5qWE92OE9ncHlEOVFzeXliU28wYl8tdHNYV0JuTTF3bi1DdnB3WGJrNVJRM2NUcXRXUnBJei1lUGx0TGxrUmVD?oc=5"
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
    "date": "2026-08-15",
    "event": "CRWD 260814 165.00C (CRWD260814C165000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5hdUQ3NkN3aFZxT19PZ3dVcXpIY3lJUHJ6ME1IbWJZM2RzSmZGeFk4TUJLZW15NW9mLTN6RGpHWXJEMHliS05EbndpdzFJQ205T3JGUEhsSVNiZEFnNS1BMg?oc=5"
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
    "date": "2026-08-15",
    "event": "PANW vs CRWD vs AVGO: Morningstar Has A 'Top Pick' Trading At A 40% Discount After Earnings - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOU0VaZk5RWHZFd3k3WVI0d21SUG1YY3B5RE52SElzVEllYnhvRUpRNUpRdEItQUZZSFJLdEFDZzBBYjVuUksxMGZaR1I1a0FabXVESjkzellJRTlWT3k5a0xBUlcwTV9RRW01Z2NsTGpkVHVmVUNLMjhuczhSTzZ5T1JDYzJmbXFiT1pmLXBPVEt4MGU0UlNkRGx2Y2hIcVdpZmhocVluakNiT1Z3djhaS04xS0ZWcjlr?oc=5"
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
    "date": "2026-08-04",
    "event": "CrowdStrike (CRWD) Stock May Be Above Fair Value On AI Threat Report - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPWG9Pc21aMWRWRDRwV0xkU3hzQVZnWVZCTnQyX3lVbVREX0I2NDFLdnlQUmJlb09JUUg4YWZ4OTA5WWFjNlpFY3JkTDJRSXF6RzUxeDY5bDFfYnQ1SHU5RWR2SjNzM2NTZ2FUd0hDRXBheWVRSTQtbW5LNkhhbWthcEJPcm4xVmxNdzViZm9jT3VteWU4LS1UMWhTNTJKdw?oc=5"
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
    "date": "2026-08-03",
    "event": "CrowdStrike (CRWD) Stock Trades Up, Here Is Why - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxONjREMFFBTTFPZkZrWmZPT05Mb001Qm80S25US0JxT2VqTkY0cEtMcmRNQkZEdGNGalJtNEk4SV8ybTFHOG1KX20xQnpvNHpPSWFnQy1VMlpmU3Rvd2sxM1ZrWThidnJDZmFGQzVXbEVYVm5hUUJVRnh2ZjU0MWdVZWdRS1N2Q0lHc2JUcmd4S2FwZUJFR0ljYjJXd0RlNFhUbXVBNmw0YTBHX0Ry?oc=5"
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
    "stock": "CRWD",
    "date": "2026-08-13",
    "event": "CrowdStrike: When Excellence Gets Ahead Of Itself (NASDAQ:CRWD) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNbWMyWXJFQTRvWXVNejZJMVVmdFlqQ0JRWVN4M2RVa1lRMGc2T1JMdHVGOGo5X1lydndoclk0X3Y0YlFPamNCc1YxNFc2NVYyZmZVSjRzam82TXo0MmhvYnBwNXBlOXNyYmhIVkxHZGRxVWlyWjdCOS0tdV9oM05KUHJlakt2VF83ZHM2MktLbEJyYkk?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "CrowdStrike (CRWD) Stock Eyes $229 After $1.17B Q2 Revenue, Falcon Flex Growth - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQU1A3cjdwV0IySHlVSGg3QUpISWhVZG5WdVkxNDdfNXcyMy1BQjhrZ3FtOUJJcWh1UXdQMU5ockxNb09WbVZBcmE2cmxLLUR2RzExdmc0T0d6T1lOcEIzSzgyMGZhZndwbXBCdlkzcWhDcEl5Rm0tZEdtZGR5QlFqNHloVk43N1gyMFBGTUdTeS1CYkFSRXMzYnhtbkhyZVlJY3BmRTdJRDJsUkc1NGJsZ3NuUk9iVVVpZncycEFB?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "CrowdStrike Stock’s Surge Showed Up In Its Bookings Two Reports Early - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQSGVZRWlOUExBR2dFLWdhblh2clFmVGplOGJhMzR6NUM2a2dmM0h1ZEUyWlR3clVRXzZBNVE2UUk0NFg5dkJ3bThENjRWUmd2dC1xcFJUY1JIeG5KajNkWE1STGVMMWZ5OWtzM1NmUkFBblVwVXdaU0tkd2c1aUctcjBDRWF2LVdhSmoxVVlUdEpmcEtGbWxCeFlndmwxeEZKUFdtY1VBMkRvR3pRbnBFQ01jcm1NbDBfVGE3VXpqY2RsRFpqWm1uTA?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "CRWD 260814 145.00P (CRWD260814P145000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE00eF9yeGFpeTlVOGpHZlZld2M1azhaMlM1VDBoZUhLMlp4QTA3bXZZODRURUdRc01vdy1EakNJdTcyWGY0UU1lM28yRThGREExSUg5UGkxR1A4QzBKcWVuWg?oc=5"
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
    "event": "What Is CrowdStrike Holdings (CRWD) Changing With Project QuiltWorks For SMBs? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxPdUJyMzBMbGhlWEV6TkFCSFJadTNpVC1YcnZKN0JxTnY3cTRyQmttMjg4c3ZOUy02TXJENWo4dll4TTQ0MnpCNmJseXhwT2RLc1ljN1pueUJLRXFrandoNUVxZjdST0lLaGs2eXY3S0FLdzBsU2RxeEtFVUVuVzhvS3hKSUJjdXVuMVBqQzZwWVAtYjF6T25OZnJoN29HdlRJZzliaGJkOG85VUp2WlNiWnQxV3ZiWTgwVmpIcmlRM18tODB3V29vQldFbC12NEtzWUJLYmJ30gHbAUFVX3lxTE8xa2hVT094LUZtMHFHekY3dzZWeVk2dGxkWUprNnhGZlIxSXI5NGktSGFCNkxkbG1QUmt2QkFWZkdEN0cyZFY0UjUwaHVjMWFscTgzdkRtZ1djQTBJVzlfaThpTlR3NXhPeFplU3dlRmo3NWV4aE9Qby1DZ043MnBaU1B3bHpVV0JvMk5taVh1OVlIVjBWZWhlMzAtb25KVVJOMG00T1VyZ3hka29HS3VrTUJxYWJaUDhfTlJ0SlJMNk4wTVN2YjBKQktsN2JoYlNoUWU2ZEtNUWJncw?oc=5"
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
    "date": "2026-08-11",
    "event": "Newmont's Nevada Gold Mines Dispute Resolution Positive for Cash Returns, Growth, UBS Says",
    "type": "NEWS",
    "remark": "News via MT Newswires — Newmont's (NEM) agreement with Barrick Mining (B) to resolve the Nevada Gold Mines dispute is positi...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/newmont-apos-nevada-gold-mines-165716016.html"
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
    "event": "Barrick Q2 Earnings Call Centers on Newmont Deal and IPO",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/barrick-q2-earnings-call-centers-140000914.html?.tsrc=rss"
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
    "date": "2026-08-11",
    "event": "Barrick Mining Corporation Q2 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-barrick-mining-corporation-q2-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss&.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "What Is Barrick Mining (TSX:ABX) Unlocking With Its Nevada Gold Mines Deal?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/barrick-mining-tsx-abx-unlocking-121011547.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "Barrick, Newmont sign new agreement to finalise NGM joint venture",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.mining-technology.com/news/barrick-newmont-new-agreement-ngm-joint-venture/?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "Barrick Mining (B) Q2 Earnings Update As $1.95 Billion JV Deal Clears IPO Path",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/barrick-mining-b-misses-q2-060759779.html?.tsrc=rss"
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
    "date": "2026-08-13",
    "event": "Newmont Shares Rally 24% in a Month: Buy, Sell or Hold the Stock? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPRXpibXl3VmU1QTNJUzNRbEpqdGVYc2NLa3BWaHhHOGFBWWdIeXRuRE9pNkJFTy1PQVJHYks4N3NYanU3ZE0xbG9RYnJfdVl6Q0RsTzlhUS1oTUhCUktMZm92ZFhHU3BySFFTekxFaGdISXZUcWZFZ2FPVkU2STRqYno5ZU10RWZhZmx2YVBIN3luRmltd1J4d3F3?oc=5"
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
    "date": "2026-08-14",
    "event": "I'm looking at Newmont stock (ticker NEM) and thinking ATH - investingLive",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPakl6WE5XY0puMGpxc2p3S3E3cDFpRjhUdDA5TURXTTByWDVYb2ViTlFLWmFBQnplZHljTUY3aXkybFd4c3N1dUwzUUxLT0QwVXhELVRrLWF0Rl9udXo2SmItSVZhRkZJNnJYdHUtalAyYmNBTDJCckpTd1ZNUUZLZ0hvTm9LbGcwYS1UenE3SlJnbktr?oc=5"
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
    "date": "2026-08-16",
    "event": "Silverlake Wealth Management LLC Purchases New Position in Newmont Corporation $NEM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNcXBkUE16RXlrTlpqeVIyUEhzZmI3MEJXV3RtYTQzckk4V00tMWhyYmR6Vzd3N0ZfYnliT25Jb3JHZExyNWYyN3RHemp4OFBDVTY3SzRoaXF3ZzBqOTNBTExXSnNkTUlrNWtoRHV4T3VmYzlaZ0Y2T0RINlhPUk05NE5kUUx4UEpFTTFmT1puWGN2WVU1SC1Kd3pBX2JIb1RfLUJidl9VLXgwVUlvRUdqLVc3eEFLWGY3alBlcjVRWTJLTFlnZmdmT3Q2Z1lmM1huR05vN05ZNThPWGM?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-16",
    "event": "Newmont (NYSE:NEM) stock in focus as gold prices climb and cash generation stays strong - Kalkine Media",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQYjZkRDBnNF9lS1dsbFAxWEZxZmdTVzk3MFlmTXpYbXZfZEZMN1hvLVBZWkxJWHNWNFJiQXlKcU96Q1l6eDA2RGNsXy1ERl9ha2lNLW1HNzhYZ293eUU2aTFVSWRHWWV4SVB1dlVZTkgydTZtT29rU1JTWVFxRklvMlF3TURqVkJJVFVuTWw2LUszRERfRXFuTVFwdkcwVzdycFBaSEhmZVMwWWprS0s3enpJZ3p5LWtLQkRVenM2a1F2aFdnV21rX3pfVVlOSGZ1Q1E?oc=5"
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
    "date": "2026-08-07",
    "event": "Newmont (NEM) Stock Stays Reasonable Following Its 183% Three Year Run - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNb243QlVyRVRJbnVvM0tnd2hxTEhFajZEVEVKQTZmbUtsN1ZoQ0pmTlo1aEdwYS1DMkhNM25wbUJLNmxtYUlCMWQ2czVIbmpBZzhoYXRYTk1XRlQxV1JYMlF2YTE5U2lCbnAyUnlJZGVGbXlwLVZmbElHbEJZblNISm1kNU9TLVBzM1RKU09wTjRfSVg5U29Va0pYWXhCVEJi?oc=5"
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
    "date": "2026-08-16",
    "event": "111,667 Shares in Newmont Corporation $NEM Acquired by Private Advisory Group LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxQQkxRemgtVWJqUkp3NjQyYWFfbUVDV3FBVXc0NjdxeXhzbF9IZnV0YjBqcHota1pDR0tzSUN4QUZDbzR3YkVFd1VaWmpyR1NsVnFuV0F0SHdFUTN6VTAteV9lY3paaUlrNHl5RHlZZ0F2MllDSW92dWFCcDJmLVNORnEzV0VjUWZKNXpMRk95bW8ycHk3elR1WnkxMXlDNlBGakR4VVJBei1UazVxMUlLLWZZOFEyY0RMRGcxcC1IT09BLUFpa044V1IzT05TRnZDU3dFNm5zSQ?oc=5"
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
    "date": "2026-08-10",
    "event": "5 Green Days In A Row: Newmont Stock Is Up 21% - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQbGdsTEVGaTBsOGtQalN3dVJURFdXYWFSYy1MQUFGZFN0VWR5WUVWYkg2MndTczVDU0Z5amE2SHctbDNIYnBlZ09NMGxtVDNZS3E0SmM1TXM0VlNvdU9tbHFpZXJLSUN1Uk9iMF9QYnR0Y0RhZGd0SDlJLURhOUZtdlJITFBQemNETno0OTQ3b0JZSjJ2TW5UcUlxTnZKYzJmTGkxaFVKdw?oc=5"
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
    "date": "2026-06-30",
    "event": "Newmont Corporation (NEM) Stock Slides as Market Rises: Facts to Know Before You Trade - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPLU9XcloxTlFKdkttN3hwaGZaYTY3c0FkQXF0YkFFWjlDc0VUNmlXTVdvOXd2Mksya3UtMVRiWktTX1diWkFMZk45UFlDa2xUMDVVaHpfaUNvNDdkbWtwUFNrY3hLOGUxUDA1MHdjREhhOHM5eURfVHRlMDlnZTFMc2tBNWw1RUhQTF9TblpXbHotZkFRYVpNWmVnaGtrcUpVR0M0?oc=5"
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
    "date": "2026-07-15",
    "event": "Newmont Stock Slides 16% in 3 Months: Here's How to Play the Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPazVCbDFoSDBscmhxTEtxdkxyZ0lHRW5zNVNlb3dSdzRZSi1vWm1kOFBWTzlvRWRmdzFiQ0tJYUNXLUp5TVNUUzJsRUh5dkNkRnlZSFBHSVQyeG1xOTJfM3Z6TkMxQzJLYW85T1M3SEhpaVowYjRGQWhFT09lU19xaGM2d0ozX1dsNEs1VGVfZ3NSM1Nk?oc=5"
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
    "date": "2026-08-16",
    "event": "Focus Partners Advisor Solutions LLC Buys Shares of 29,918 Newmont Corporation $NEM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxNYkk5R25rQkFfZjZYTkFJS2lWX1ZCclc2dzlPLUFwRGNoeHgtLURlS21QeEhhcGJhbVFPUlVEQVZDdnNiS1ZXYkdpSEIyaDBwXzNwOUUyNkJ0TjlXdzFFUlRmTF9xRHRXclV0UEJpM1RIWkxPVUdhZEFpcjJ2ZnNGTXB0UG1PZlZScXpPX3RzUjNOWnFIOTA5S29uSUlLVUFKZmwtRWVMX2hfa2dFRUZmLWc3SFgweF96aEVYdkpELXc4R21vM1lMal8zdUZiVEViTk9iVFlEZUt3Zw?oc=5"
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
    "date": "2026-08-07",
    "event": "Newmont (NEM) Stock May Be 16% Undervalued With Cash Flow In Focus - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNbjdncUUyR2pVcVYtV2pwY0EwT0laTjhSSlFLSDFrbHBLNTNrdXh0b2dxOEZ2WmNaa1JGU20xdE5ObHUxczhEVWlFcExLbWVOZEZ4bFJXUVVmanA4bmNmNEx3VWVYMHFMWGRPTTJpRHFmS044VWR1ZXpJNzhSM0VjcDl2TVU1bC1BUEZfOTAzSDBkdGRXcDUwZWt4MWlYMUFBenVpV18tNUY2c2NRWi0zVC1wWW5KVEYxc19XZmhOV2kxZ9IBxwFBVV95cUxOQVNzb3pYd2lnS2FoR3R5WXRyTGV2MS1DSFBHOERpNlZ4S2YzYkY1aHNIUy0xOXY2RDRhcVRrekwzMjF2aHltczBuRG9xSlRLTlVYdEwtSXFaMnA4cDhBckROVlVqRnM4NEh1X0ZySDhUUTA0a3AxcDlsSGlqRmRkLTJpWno0MlVLb0dTVHFhVUM4QmRiQnd6NVBNVldLc2tGWjZNeUE2UVFlcUtQUy15R3RndmxDUUl1V3ZySWhRc2JjOU5rRW9r?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-16",
    "event": "ABN AMRO Bank N.V. Invests $31.19 Million in Newmont Corporation $NEM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQSEJpaE9nVGZNeFlXUU1kbEh5aEFRbDFPR1hsZldOc2tXN0VhTVdwR2dyclhIRFhtVDloNDd2QW1nV1FBWW95QzU5OVo3a2JXakk5Y2wtTFJ1SDJ0Y3I2MjhGWEd3amxIZTVid1RDRmJweTMyaDhuQVZOTFRoZWxkZ1Fwa3FWR0VkaUlET19VMmZTRTVlUUxIOVJITldkLWM5UWpTMnhVc3M1dWdFVTdhVXREN2pIb2RNR2JaSzNKZjNUZE0?oc=5"
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
    "remark": "News via Simply Wall St. — RTX stock has almost tripled over the past five years, yet current valuation checks suggest it now sits closer to fair v...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-rtx-stock-may-3-200931331.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "Howmet Rides on Commercial Aerospace Strength: Will the Uptrend Continue?",
    "type": "NEWS",
    "remark": "News via Zacks — HWM's commercial aerospace revenues jump 28% as air travel, aircraft demand and engine spares drive growth....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/howmet-rides-commercial-aerospace-strength-145600289.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "Patriots and THAAD: Lockheed Martin Corporation (LMT) and Northrop Grumman Corporation (NOC) Bet Big on Missile Defense Surge",
    "type": "NEWS",
    "remark": "News via Insider Monkey — On August 3, the Pentagon inked a more than $3 billion deal with Lockheed Martin Corporation (NYSE:LMT) and Northrop Gru...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/patriots-thaad-lockheed-martin-corporation-140553456.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "Wall Street Analysts Think RTX (RTX) Is a Good Investment: Is It?",
    "type": "NEWS",
    "remark": "News via Zacks — According to the average brokerage recommendation (ABR), one should invest in RTX (RTX). It is debatable whether this hi...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/wall-street-analysts-think-rtx-133002966.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "Can Lockheed Martin's Space Business Become Its Next Growth Driver?",
    "type": "NEWS",
    "remark": "News via Zacks — LMT expands its missile-defense footprint as rising demand drives Space sales and boosts opportunities across next-gener...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/lockheed-martins-space-business-become-125000281.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "RTX Outperforms Industry in the Past Month: How to Play the Stock?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-outperforms-industry-past-month-142200119.html?.tsrc=rss"
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
    "date": "2026-08-12",
    "event": "Defense ETFs to Buy as Pentagon Pushes to Boost Missile Stockpiles",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/defense-etfs-buy-pentagon-pushes-183500130.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-12",
    "event": "Can L3Harris' Platform-Agnostic Model Expand Growth Opportunities?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/l3harris-platform-agnostic-model-expand-141800411.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-12",
    "event": "Boeing Stock Rises 7.4% YTD: Can the Turnaround Gain Momentum?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/boeing-stock-rises-7-4-130200131.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-12",
    "event": "1 High-Flying Stock to Target This Week and 2 Facing Headwinds",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/1-high-flying-stock-target-115722505.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "An 8.8% Income On LMT Stock, For Giving Up Gains Above 9.4%",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/610955/an-8-8-income-on-lmt-stock-for-giving-up-gains-above-9-4/2026-08-11?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "Israeli Defense Contractor Beats Earnings Estimates; Stock Sinks Over Iran War Renewal",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/3dc51756-00e2-38bb-8890-9f0165c41c8c/israeli-defense-contractor.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "Is Howmet Aerospace Stock a Buy After Q2 Earnings Beat & Raised Outlook?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/howmet-aerospace-stock-buy-q2-173200208.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "RTX (RTX) Following Fresh Missile Defense Contract And The Case For Modest Undervaluation",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-rtx-following-fresh-missile-131155876.html?.tsrc=rss"
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
    "date": "2026-08-12",
    "event": "Why RTX Stock Looks Very Appealing Again - Clearance Jobs",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQUnVWRHJNRWt1c3JhTUg2ek9pNzc4N3RBaGhyb3dYemtIOGZxS19YMUI5MngyQUJMbTFkaUdMeV9NMEdVall1enZFc3FScjQyUzB0WG1ka0duZ1pZZHJDRmFYSTNrQmJueTNybF9vWGhKdnVuTjAyODhtQzRhTWpSMVk2bHljV2xIV2RZ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-16",
    "event": "18,824 Shares in RTX Corporation $RTX Acquired by Summit Asset Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQeTM4cVU1b3RPR2R6d3hsbExvSTVVUWF6SGN5TWlVaFFhOXR5R3pkY1pZN24wcGF4Z00yQlNZMVl1QnpWZFdBNmw0bWJXNXdtc2RRWjdnTzVzRU1zNE01TnB3VjNpbTFENkdBNWZSNnNqTGlBajV0RTgwVjhvX2RrSXNoTElRc1ZJOU51cUFnc2JVSndGUXc2ZFcxTTZndzFEUEpEQXhCcXJwRHNGQmVkbXdESG5nX1JaLWpkWHFYb2xUZm5hMjByUVJqd1BDYS10NHc?oc=5"
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
    "date": "2026-08-14",
    "event": "RTX Corp. stock outperforms competitors on strong trading day - MarketWatch",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNTVdNYzlSN0h1VVhpZVRFbkxZTGxLR19OTGZBNl9nYVNlc0xQMXpSN0hTdHRpR0pheGd4Vk94WFBmcnVHcklOaEYwYVlfT3haM0xfd0ZnZWJ5M3BCRVBWSGxocVBab1p5RWV0aFZnRnhXWUhfX1N6dVg0cWxlUHBISlZ4TFRqWjlWclEySEtYOWl5bmNyWmluY3dvQ1luN1pEQ0RhLTVBRWU1V0kyTzhPWHl5TENBak5qaDFDYm9OYkJQRk5MOTFnQlB4QlY5NDV5a25wSQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-14",
    "event": "LMT, RTX Win Big US Defense Contracts Worth Over $1.1B - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPSUM0OEc5c1E4U04tSXE2OW1FaE5odC1GTkxId2hZZE9SY050VGZJbm1qajNyTnRadnYwWUZWcnkxcVJwQmtHNlJrTEcydF8tYUpzelU0V2ltVDR6b3JuVHIzTVdnQ29LcWRYdE0zSzhoeFBwUVQ1Z2ZyM3d3QnJlYzBjSnpfSVlkQkJWZ21LSlgxTGZVYkdpZ1pnUGFoUmpoSFMxUHNTQ2FLTzNRcnB4aFdnZm1XYjRFOE0wTDgwekVoem5pb1p3?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-16",
    "event": "Centric Wealth Management Purchases Shares of 23,364 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPYUd5S1VpNHFyejdNV0Y0dmFGMFgybHdhY1ptMjEwdDQtYlRZbGtyUTd2Ul9Od2pMdlVoQXdodG90TmV0Rm5NV0NHOTJPREpRdzNBMkdldlROZUN5aXZpSTRGdUFJdjFpbVhJUkxYUDNUdmdRUklnSW1fRm5lSzA5N3Z0dVB0SXJ6NkJqNmhoY210RXBLX3A5V0xFelBWRFJlUWxYamtoQ1J2LXNrMno0amhsTllid19yazJpcC1vS1hZWjdzSTdCMWtReWQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "RTX Corp. stock underperforms Thursday when compared to competitors - MarketWatch",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxPd0d6dGZZMGxoMG9GaVpGZnZpUUgwcmowYnpMYkRkVDV5bWhXVFFwTVFQeHJGNWFobUMybEt5YkRBRndqNHZuQzdZT1NXcDFBWlR0MjRNaFZkZUVfUG9tRHl2Zmw2djY1Ti0yZlpFT0Z4c0o2OG5ZMTVRSUhrb2tyMUJHUUhaRjB3T3dUbXdpRzZDcEhmM2dKV0dGT25tMHAxV216VnNJNmI3b2t1R1Q3ZF9hWG43ZzRxSnA4ak4tQmIyU1Nk?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-07-23",
    "event": "Why Is RTX (RTX) Stock Soaring Today - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPaHdjeDFmWVhKZ1pNMXdQeDRCLVhPR2YzSHdaUVd6NzZBM3FQZy1CQmhUVkZXOEhoenh4dGtmSkJwdkRuYnlWWlhVZXNzbHBRRzlPWlBfX0RvSmhXNDdvMTNHdjNyMkVqTVZrVDJFajBsUi13cGRWaXVzb09PRk9YenNEY0lqTjhsaml0LTBUMW9lbXlv?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-13",
    "event": "RTX, LMT Stocks Head For Weekly Gains After Solid Q2 Performance — Retail Calls Defense 'A Bipartisan Issue' - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxPdmQxZFhTdnZtdjZIc3JyaERDZ2FPTENjWk9ieXAxUXhQVlBmS2NfZ3RzQkFBZUlkcEo2OEwzWVRhOENCOEJfUXZfS3FseFRtV1pFSjhXSGUwaURSUFJmemg4ZmpWVWtodF8zVjB3VThxV2VJTVRncUNwa3hjSTdUbG9JV2ZKR05feEE0b19rNTNxcTJfTjhzOHg0TGlxREFfckN2Z3JIOUNjOXhjLW1lRUt1UjVEbjRnbV9jYkVhelllNGtrNGRTX0o4bkt2U1pOTDNobjVTa1pBWjZ6WFFIZDIxVkRqTFN0TnJNMDE4eXJSSkl6eHNreHQxRQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-16",
    "event": "115,887 Shares in RTX Corporation $RTX Acquired by SCS Capital Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxONmViZlBhOUJWMmQyOUlKTkcza21MMlQxUDlBSXdRM0xYM2NuejF4WDl3QTF5MHhTa3BCNmxVQm1ENC1hVkVWOFZnR2s2MjJDaXRETldiYUdjdE5fUmpMOGFQU24zWTlLLU9nSWd3RWdWeVk5bm1KQTZhNS1jZERjZ3ZidXc0M0ZKaHV3YjMyQ1dyVlUyLVBhdlZpOUlfV1k3RlRQbkMtTmFsV0UyLUIyQm5RY3JCTXF0M05XOS1OMjZ0LUd3RWJNanhYakRyMzFzZWc?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-07-21",
    "event": "Should You Buy, Hold or Sell RTX Stock Ahead of Q2 Earnings? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOTTR5NEs1aTNJVVBycVkySk9zZVdWb0xPQ2stblRpSDhWbUg0MDZ1T01SQ2EtWmtfWW8ydm9UdThTTDZpXzBSRGR4VHRTa3B3bjJpOFp1bmw2MzRRQmNhbXlVU3h6eHZmbTFSRjFiWXNmQUdhZmdybTY1V0VmOVJKNTU0eUJmdmFIOGpUNUpOeXJ0QQ?oc=5"
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
    "date": "2026-07-28",
    "event": "RTX (RTX) Stock May Be Below Fair Value On Cash Flow Yet Full On Earnings - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOR3BQS1UtQl8ydEk3T1c5VFBvTktDRE9tdEZxSkJqcTYweXIzWllDOUNhZHJpNWd6TE1Md2RCMThjNE1zbGhobzFNNE51aFd6SVpZeDE5anBYYTlKUTdtcHZfbkJ0YVUzQkhuTUc3MHlBUXhNMTFyY3gwR2FmU2hQeDZGLWM1cWEtR1owVjBLWUpxUQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-15",
    "event": "Hardy Reed LLC Buys Shares of 4,796 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQWDVuQ21vRG04S19kQlVrRmJvT3VhOXJYdERUN2gwWEphT1JXVDl0UVhTc0lZU2JKVldwZXpnQXJMaHFnaTZCLTNMQzRxdFVGR2xkWmxpVV84dTFPZ0xWc095Tk5PVUtnM3NwX0hwT3Q3T09OWU1KRTVZSmY0Q1MxRnNieVo1NldjQ3NxbnpmZmJmWDJlLTdUX2YtbV9jbTUwRGlKQzRpUVhONV9Nd2FEZ19vX1VZZw?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-07-27",
    "event": "RTX Corporation (RTX) Hits Fresh High: Is There Still Room to Run? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOT1ZORlF5TkdPNGtZTXVSUjJzS05vX25PNml5MTdoSm12RXJONGMyZzI2Qm5xT2Q1dFZ3UU9ndDFrUmVoeHhvb0pNR3VNNTFoNmM3ZjRJaldobTdzUlAwcE5UZ1llS2N3Y1UxblhxMkxpMzRyNDJDcDBwY2ttVGhoa3ZRQkpqR3NjS1hYUnNuOHhwUGdxUE1oNU5rRQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-15",
    "event": "Oppenheimer Asset Management Inc. Acquires Shares of 470,320 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNaTNyUjBvM25NQ21oNFQzaVF5X013Mmk5QlRRd3BMQjZRTGtnZ2lMeTA4bDBGamJSanQ1ak1jdWNHX1M1UEhhNnlVUVhqUU4yS3RlR21wcVM3WXpBUHdKZFdHNDVuUmtIU3dNanVoYTFFLVY2VmpBYUZFcHZlVWhUTTNDdktZcG5lNlNIekRSLUl1YVd5QWEyNnoxZjhuaW9sY3c4Sl90VG5SM0g4bTYwUW0wMldFRHVXaHBaUUZ3RU1HVTFnNXJlc0piZlpFNWg3SE9mMnpB?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-07-27",
    "event": "Why Did AAPL, FBRX, RTX Stocks Surge To 52-Week Highs Today? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPUXZmdFlhNlRreTJzekRwZFBZZURDSnY2ekRFMDgyWW5nc3ctYkdZTnA5UnFZZV9HMXlvd2wyVndzY0ZYX2dGVXpNSklyUlp5UXJ2S1pENERYY0tZQVhKdm5iQzVmSTNMaHdfd29KY1Zhc0pxQldZVEtlVlUwSE5MWFlaQUwxcm1LOU9aWWI4Yw?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-14",
    "event": "RTX (NYSE:RTX) Shares Up 1.1% - Still a Buy? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxONWxZNm1qUXlPYUl0MXpXS2RyVjk1YkxTVl9ZRkJyczJtbmJGVzl2ZnlJTVMwV0dhUXN1UUxSTGpZNzUyaGhqN0VGbUpUWWN2THl5cU1uYS1vQjNUX3lrdDlQOUQ3ZWJMbU1jMGVDUzNoc0xxcVBiOWltZHloemlFS0VBZ0ZhRjdUMVl4cEdZSnRtNEZk?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "RTX (RTX) Following Fresh Missile Defense Contract And The Case For Modest Undervaluation - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOFBZZjM0UVNiRGk1a1FiTzk5cUJCc1p4THFoQ2duM1Q2aVZ1Y28tUVU4ckxLcmFSQ2ExZWRBeTZXc3pYdk5NTm1pUWRKOGhwMl9lWXB2bXl1YndEcmZGSWRzcXNzS3ZPaUpwNzBNaDdhTU9Mcnkxd29nYWdDMVEzZHFDSy1YY1lPWFo0OEJsaThYV1plVGdCanREbTU?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-15",
    "event": "RTX (RTX), Why Is The Latest RTX News Drawing Attention? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxPQlpVeTRzd0JNQTEzU2NQYmFWYnFNUVMweVRjUDhSRXRjUXV1UHI3Tmk3X3V3dDdqY2NBTGdFSm5LOVZsRWJ1VjJHOHBLTnhzZWFSRjNSNjlDa01JZW55OWUxSDNzUEFlREZtdGtMZzRKRi1vZVloMzI1UUVvelJVcVRjYVFteThDX3pDcGEwNlR6Z0Zuel9vUzd4S2tPVEc3TDZTOTZmZHlFSEVXRWVyV0E4bzhfbWPSAbwBQVVfeXFMUFcyUkVPNTJ2ZzVKZE1rM21TV2hJZ21tQmllOGF4N2JtamRid0drR3A1SUJuTkhBcEs0TkZhN2VhN0xPancwaWRIcXE3U3NFVGRwU0c1eUJfOFBpRUN6M2p6VVZxRTh0ck1JM3ZIb1UwZXBia0ozUHJUSFFMUGtZZUd3Skd4ZXotQVRHVlN1OVlKUUFvNGhzZXFrUDBXLW5wWVJ6eno1WWNuWWJVYWg5REp6anJNYXdZT2VDRlA?oc=5"
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
    "date": "2026-08-15",
    "event": "Northstar Group Inc. Buys New Stake in RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxOdWJLNTRVS3BHX2x0cDlyam9zQXlzLTdNMW1uNHNxdkZCeEU5T2I3Z2xVRjU2UEMtX1g3bkp6X0JHZ200Q3M3TzljdTlxN2ZHRHc4U2p3emxwWHdYTllrMGF1a1dMR1VOeE1ldWticTVwUHNMVklCbDVNc21LSEpUODRNT21lUExCVFdMZmM2UmhsY3Z2VE1va1ZKQzlOMERGRmZIdHRCdW5HdkJTMzJuTEZnRk5oZFptUkE?oc=5"
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
    "date": "2026-08-14",
    "event": "Can HASTE Help Rocket Lab Tap Into the Growing Hypersonic Market?",
    "type": "NEWS",
    "remark": "News via Zacks — RKLB expands its launch portfolio through HASTE, supporting hypersonic testing and broadening opportunities in defense m...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/haste-help-rocket-lab-tap-141300823.html"
  },
  {
    "stock": "LMT",
    "date": "2026-08-13",
    "event": "SpaceX, Defense Contractors Progress On Orbital Interceptors, Pass Golden Dome Test",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — SpaceX, RTX and 10 other defense contractors passed the first space-based interceptor test for the Golden Dome program. ...",
    "url": "https://www.investors.com/news/spacex-northrop-grumman-lockheed-martin-golden-dome-sbi-test-citi-targets-defense-stocks/?src=A00220&yptr=yahoo"
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
    "date": "2026-08-13",
    "event": "Firefly Aerospace (FLY) Is Up 16.2% After Record Q2 Sales And New Lockheed Launch Deal - Has The Bull Case Changed?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/firefly-aerospace-fly-16-2-043114479.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-13",
    "event": "Integrated Visual Augmentation Systems Market Trends Analysis and Growth Outlook 2026-2035 | Profiles Microsoft, BAE Systems, Elbit Systems, Lockheed Martin and More",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/integrated-visual-augmentation-systems-market-145900450.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-13",
    "event": "Can Rising Fighter Jet Demand Sustain Boeing's Defense Growth?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rising-fighter-jet-demand-sustain-144700133.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-13",
    "event": "SpaceX Supplier Tumbles After First Earnings Report Since IPO",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/ccde2b0f-9a85-321d-aeac-85a34d4e58bd/spacex-supplier-tumbles-after.html?.tsrc=rss"
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
    "date": "2026-08-16",
    "event": "1,657 Shares in Lockheed Martin Corporation $LMT Purchased by Stoneridge Investment Partners LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxPUkUxcWdHZ2RncVROdVdSZmZLNFkzMDlhTVI0MHZNdGpCd2JlcTRqU2I2OUpuTllVZnhMcE85SE5UblJxMlZ3UU5GNVlaSVF5ejlRcnBTTU80VjAwYWV2WWhMZlJrekdXazBTQjBKX3FKWjlMSXcwR2tGa2ZaZ0RfazdERlpZaUJHS1pjeGg1Z3gtT3dPNC15OFEtam9UeEdxLWtnOHN6RVJfamJ0ZXc2akxyNGhLcGRyd0NsWHhmZ0NfSTc3UUxmLVRjc2I4d2NyeS1iTHZQNWVValJvdVpSUVFnVllQVlYzMHpn?oc=5"
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
    "date": "2026-08-11",
    "event": "An 8.8% Income On LMT Stock, For Giving Up Gains Above 9.4% - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOSUhqUGlZZDBtcnlJNjE0NDNVWjBkWW5CbXJYVXItZW5tUkRhWnJVN09ORjFqSnlsWmdId1NNckkxa2pONVJMdW45OWxpS3pJREg2YXBEMGtIa3BZNWJITkxhN1djamkycmw5RzVRYnhqTFpabGxIak5pY3RMMllYR3dNbFdNWUhLaXZtZlVkTVZ1QUlnUXdlM3V2cnRzaDg1OE0tNDU1UVBNV3VFTGpVcnRqNV9RLW8?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-16",
    "event": "Price-Driven Insight from (LMT) for Rule-Based Strategy - Stock Traders Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNVXZhTjNyNGhTdi15WnZBQkpOYnE0QUpsSVFOak03eE05c0k0QnRTN3l2RVFYSlExaDd2RzRKY0FVa3RKRW1nT3E0aGN4R3U0cUhpcWhjVWlncWlndlZLbFlKVUJJSDUtby1Na09sUUh5c3hjanlfX0FXMGZTMVFrdjh0bFFCQmlvTFlITXpFQy1FMGk5ZnRzWmhXdW1wc1kxTlRLektnZm83OTlocmdMNmw4SkpyVkh2WDlZV0xnelEySGtWdzV0TDRJS2QxQQ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-11",
    "event": "Lockheed Martin (LMT) Stock May Be Undervalued Despite Its 89% 5 Year Run - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNajhOS2w1V2xRMXhYUVRtX1A1SmVXYTRXOTJacy1GU0p6ZHhrRnY2Zmk1cEpDV09vYUJDeFcwcVlBc1M1bzNQUk1fdXh6WVpRY1VNa05SZDJrTlVZdDE2NjMyQW5ILVV2SVd4TmJMaS1CTkpLYjdrekhaRUt0QXNRNl9aN196SFpCbTdRZ3hBYWxDMzNnV0tXeE1oSWd5V1ZKdzZ3eWJMeElBS2o0T1BGb1U4VGh4WVdKUmRwWVZXS29aVWpJM1RZcUplbF9PQTg10gHWAUFVX3lxTFBVZWg5NzBfdmFIbHpfbTFNUU5IUllrSHlXSWYxekNnSUY5NGsxemU1WjlYM0R2UDhzenFXdG9sM0JzUk9tek1hbXVya1NvYVZCV1ljVHJadFRFWWpnOUZxQjJ4OC1VRmg2Z04waFkwZzBwY1I2YWxwWEI0Zk11UlNqR2ltd3NhU2hLbXpwVG1ta1hWNWdieF9kTE1Dd3ZNbkdUaHl4SlUzN3pVZVdSR2JJenEyUHlpQVlBU0ZsZXgyOUZFczBIRW1iMnlzc0NleC15U2dVb3c?oc=5"
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
    "date": "2026-08-11",
    "event": "Lockheed Martin’s $230B Backlog Signals Strong Hiring and Defense Growth Ahead - Clearance Jobs",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOMnhuaV9ReVZBZGp6aDk2QkNwQ3poQ2ZWOU5VVzM2OFZwMXUxampLd0VjeWxsZ2VxMl9QOWdOSUo3V3U2UTd6bEZVQjlpYWM3eWtOaDlZVDVTZFRNNTBEOGtVOWxENk1VZTRIV0YwSlpscVJMbVR6aHBfR1pmZkx3cHBqYlRNZG4tWXRJXzI4Z2lMOVJzbmx2TnAyOHItUmxVdnNPMFN2Y3c3aVdqTzZDQVRSYmJ4MVNvNmZvY21WQkgwQ0h5ZEpXZk94RVRsNW16RlVfZl93?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-16",
    "event": "5,980 Shares in Lockheed Martin Corporation $LMT Purchased by M3 Wealth Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxQUjJtUldtNE90eVVSdmoyMWEyUmotRVF0cldYZ3lQZjQtdjNPS2hQdUhVU1oxZGtQcEZQOW5HaXZqNUk2M2RNa0xGdGFiRWtCN20yOHJ3NkZyQzNrWC1sdGhNVG1qbjFodVpZX1d4cWZueFg4TUdUQXRRNWxleGJtREd6VXNpcGIzSllyN3FTN3pJSmdIYXFvTXl4NUhsYUZQUVZ3Z1otbDFpa3JtOF9yRnVzQ01YZVUyZUFLa0lqUW5KRDNMU0NMTWN0QVQtZFRmS3RQVzNYUEM2cEk3ZUE?oc=5"
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
    "date": "2026-08-07",
    "event": "LMT Stock On Track To Register Eighth Consecutive Session Of Losses – Lockheed Remains Confident About Meeting 2026 Guidance - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQMUE5WWtfMnU3QkNlYnN4LWNVdTJWb1JwcG9EbkY3dnpFNkZvV1BJcW5nNHFFLVdFcHJXZkpsWWY1OGNtN1ZBSVl6YkxlYnNSMWJkNWdGRDNTRFNaa3VJOE9va0pqWFdISDRZeWxnOGkzREt1cThWVzlBLUdPMzFIaC1GMTUxYXlja1Y4OEQzaFAtMlg0U0pDY2hWVVR5dXR2UEh1a0dGbW5lSGF0eXowWUlOckFBUTlvM1ZVdTdFVC1pZEZqOWhNc2p2QmVRblE?oc=5"
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
    "date": "2026-07-23",
    "event": "Lockheed Martin (LMT) Stock Fair Value Edges Lower As Analysts Trim Targets - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOaGYxdU5TdDFBMk5MU1l2SXh5RmRHeVBHelpEcUZEVWwyRlZ2UW95dWZPWGhHc2tvdi1KRjNYZmtCbkMyS2pHTnpnYU84VTVGNVNHNkNyVFZYdW1WeGhYUTdRNjlHTGdxN25mTDFrdEFtMWM3UmpPNUJDTXVyakV4Tkp0SkY1cExKOWt0dVpSWXZuZUFwWUkwRUFUbw?oc=5"
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
    "stock": "LMT",
    "date": "2026-08-16",
    "event": "ABN AMRO Bank N.V. Invests $1.22 Million in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNR1FSMi15N05rZEV4Y1JVam54em96QUZlbi1aY1Fab2tjVGpHNnI1UllmTWpYLWZPTVEzcTJJR2NpdFJ2cGx1RWtDZ0lFcHFTY0d3Q2U5Q3VYY2xmTDNTTExxY3dROU5Ka3E0enhXLXNSaTQtZUlTZVU5a0ptMFlRWEVqREpqYkpBV1BDanlnM0N2cHhPMnpZQ3RMLVpqLVF4U1ZGVDdQU0ZyLW41SWQ4cXVPTnRMVk81a3dwVUR2ZmVQbkFsQ3RfLXRmZnc?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-23",
    "event": "LMT Stock Soars as Lockheed Martin Raises Annual Forecast - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOG1IR3JKUDNUbUZKNFdnMnFjU1ZIUngzbFlvcmxNclduVFR0d0dSWDRBdjVvaDJsUTE5X2VqeV9PRXFrS3FHenExWjFoX0VPNGduS2t6eUQ1YllXZTlDR1IweEVSN0RVbnAtMm5pc0xrdkRtWGJpbXhkY2FyQU9feXlfd1BQTG9nc3BXelpDVXZwZWR6OTdYVVhJZE8?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-23",
    "event": "Why Lockheed Martin Stock Launched Higher - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxQVFVIUE9VZkdYdGd3ZUhqcVpXRm5RTFNiSnpUS2I2Y2xTWktkOWkzRkhnenVyQkVZNGJjYWMzTmxzZUhyZzJVUXlXcFhjc1dQOWdLeUpBVXpoX0FFWnRwY2d1Zjg2YjB1bWZQeGZnQy05SmZIS0VGZHN2RnpfcER2THd5NUlQQjk5bHZYNGpJSTdsVkFmMTdkRnQ0ZDJuQWMt?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-13",
    "event": "LMT 260814 440.00P (LMT260814P440000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE96WFFKWkxiM3FTcUtxZldLeHVMM3ZyWjVic0FPbHVHbUQxQzBWQUMzaDVmakJmNWtkWVRvaFg3cWc1OGIxMmZyOFE1dFNfOWJJQ0p5U0hjbi1hN1JTUV9R?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-23",
    "event": "LMT Stock Sees Biggest Single-Day Rally In Nearly 25 Years As Lockheed Posts Record Backlog – Retail Says Defense Sector Getting Harder To Ignore - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOMWgyeXo5S09lYUVCUkIySmJmVWFMLWJqcld0TzRFSXFjRmlwMDF5R1pjYWs0TkVWbXNYLXREQzFHWUl3LWdqNzFQOW9OT3VtSGNBR0EwVkdhcjZpM2c3Tlp2SFZ5cURFNkdJNHBNMklzdldDVm1NcC1XOUVHdk50U05rQS1WZ29LTm80T1Z3TWlWVTc5VUMzS3NB?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-13",
    "event": "LMT (LMT) files Form 144 for $2.02M sale of 3,378 shares - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNbDhoU1hzdXZGeW4yUmtqdC02TFR6ZnJ0QWFuWDZKWXpHNEpIUENGUDdvQk9Jb1A2NUEta1Y3ZXpDV1p2RlNob3RNeXlOWUhWWWVXM1NDYmdiam0zd2N1bFBQeWx4ZEc3VWVxMXhfOUl3UWl6TjRrYjFwNmJ4clZ4RTdVOEdWVjFlbGJGVkxiMjlQNk5ic1FpUVlMUHU?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-13",
    "event": "Can Lockheed Martin's Space Business Become Its Next Growth Driver? - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxNdU1IOEZhV1BiRUVlN2xRem9kQW5BVnlORkI1MlZNZW11Q1M0Mk9relY4cEpyUmhQZHBxamtib0hIb3h4d1c1WlRMUFk4QUMtUnp4WmNqekVhTnh6OUw5bHlSOV9kbjZFTk9MR2hLaG1VWUIydWZVSXRSNnZJdzZzTEJ0Ym9hb1paT294NkNHSnFmNFphdUhuY1hCQXZ5WFVWRDg3WFIwRHo5bm9tX0EtWEdUSHR6T09HM25WR1lCNTBTTVQ2ZWp6UnRlWjZuRmFWWVRMZEhkbFVhRWFiQXp4SHdqRQ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-20",
    "event": "Lockheed Martin (LMT) Stock May Be Below Fair Value On $10.5B Logistics Win - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQc2FqMENpb1BfSjhpQl9RQ0NwckVpZThwbnd2NHZ2MlcyckhjRXFLYS1UbFJnX2FfRTQzTzFUblJHeDEzT2ZOM3NFWlRwUktGTlNabmZHVkhRVER4UnJ4WVY3R2h1Y2R3b3pMY3hnaEpwWV9Ua0dWcGNkMVI0MlBHNEFNcG5yZGhQN3N0b2g1TnV3amV2d0dadTl3?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-13",
    "event": "LMT 260814 635.00C (LMT260814C635000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE9ubEw3cWJhVGZubG1XeVd5aEwyWmQwZGtLLTJZckdLYnNxMEFET1huRENrNTNUQ1lRVzJaYmVwTUdPVVFlcnZQeFFwel9hQ2lwajBNQjRiUmlseXMxeDlB?oc=5"
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
