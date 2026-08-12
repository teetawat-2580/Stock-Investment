const eventsData = [
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "Why Delta and United’s Loyalty Programs Could Be Worth $30 Billion",
    "type": "NEWS",
    "remark": "News via Barrons.com — Air Canada sold the 25% Aeroplan program stake to Blackstone and some leading Canadian institutional investors, valuing ...",
    "url": "https://www.barrons.com/articles/air-canada-delta-united-airlines-stock-afc20459?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "JPMorgan Stock Rises 0.7% as Bank Calls for S&P 8,000",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — JPMorgan raised its index and earnings forecasts as AI spending translated into faster cloud revenue and larger corporat...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorgan-stock-rises-0-7-165529080.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "JPMorgan Sees S&P 500 at 8,000: ETFs That Are Worth Buying",
    "type": "NEWS",
    "remark": "News via Zacks — JPMorgan sees the S&P 500 reaching 8,000 as AI spending and earnings strengthen. Explore ETFs to capitalize on the poten...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorgan-sees-p-500-8-152700914.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "Will Asia-Pacific Growth Support JPM's Corporate Banking Business?",
    "type": "NEWS",
    "remark": "News via Zacks — JPMorgan's APAC corporate banking revenues rise over 20% as AI, data centers and intra-Asia trade create growth opportun...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/asia-pacific-growth-support-jpms-151100622.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "JPMorgan Chase (JPM) Stock Gets Fair Value Boost After Analysts Raise Targets",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — JPMorgan Chase is back in focus after analysts lifted their fair value estimate from about US$353.95 to roughly US$373.8...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorgan-chase-jpm-stock-gets-141249724.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "GM sets up $4.5 billion supply chain prepayment facility",
    "type": "NEWS",
    "remark": "News via Quartz — The automaker will issue formal payment promises to a third-party firm, which will advance funds to select suppliers on ...",
    "url": "https://qz.com/gm-supply-chain-prepayment-facility-procura-081226"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "Bank of America's Cybersecurity Investment: A Strategic Move",
    "type": "NEWS",
    "remark": "News via Zacks — BAC plans to acquire MDSec to strengthen cybersecurity, adding 65 specialists as AI and digital banking raise cyber risk...",
    "url": "https://finance.yahoo.com/technology/articles/bank-americas-cybersecurity-investment-strategic-130300954.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "Here's How Much You'd Have If You Invested $1000 in JPMorgan Chase & Co. a Decade Ago",
    "type": "NEWS",
    "remark": "News via Zacks — Why investing for the long run, especially if you buy certain popular stocks, could reap huge rewards....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/heres-much-youd-invested-1000-123003568.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "Bank of America Pledges $250 Billion for Critical Infrastructure, AI",
    "type": "NEWS",
    "remark": "News via Barrons.com — Bank of America, Morgan Stanley, and JPMorgan Chase have pledged billions to invest in critical infrastructure including...",
    "url": "https://www.barrons.com/articles/bank-of-america-250b-ai-infrastructure-investment-49dc2fac?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "GM locks in $4.5bn facility to secure auto parts supply",
    "type": "NEWS",
    "remark": "News via Just Auto — Procura Auto Parts, a firm specialising in inventory management and component sourcing, will serve as paying agent under...",
    "url": "https://www.just-auto.com/news/gm-4-5bn-secure-auto-parts-supply/"
  },
  {
    "stock": "JPM",
    "date": "2026-08-11",
    "event": "JPMorgan revamps S&P 500 target for rest of 2026",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/investing/stocks/jpmorgan-sp500-2026-target?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-11",
    "event": "JPMorgan Chase joins Olympics as first-ever global banking partner",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://qz.com/jpmorgan-chase-olympics-worldwide-partner-banking-081126?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "Jamie Dimon Warns Dollar Won’t Stay Reserve Currency if US Loses Its Edge: ‘The World Will Be Fragmented’",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/currencies/articles/jamie-dimon-warns-dollar-won-023103176.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-11",
    "event": "The Treasury Is Selling $125 Billion in Debt. Inflation Risks Could Mute Demand.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/696f7a57-82cc-3571-bf17-1823e66a1547/the-treasury-is-selling-%24125.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-11",
    "event": "Goldman's M&A Leadership Bodes Well: Should You Buy GS Stock Now?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/goldmans-m-leadership-bodes-well-140500187.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "Experts say putting every dollar toward $35,000 in credit card debt could backfire — here's another approach",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/articles/experts-putting-every-dollar-toward-103500069.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-11",
    "event": "Chase Auto Captive Finance Partners Earn #1 Rankings in the JD Power 2026 U.S. Dealer Financing Satisfaction Study℠",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/chase-auto-captive-finance-partners-153000730.html?.tsrc=rss"
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
    "date": "2026-08-12",
    "event": "JPMorgan Chase (JPM) reports 34,064 positions in latest Form 13F - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNajQwOUV2TFVNOGloc3E3RnNGX2F4UlVTZ2Z2ZDlEdEZvMThHT0RNaHBDWHVyWlR4cndkTFRZOHhGNHpKRXo0WW90aFdNX09JX2ZudmpxVjJsV2JROElOcTlUQ3hoaUtzUm44NnRsVVIyYjBMNGdFYWpkSFVMQ2tNcUVIaUlOVUtVOTE2dmxPMWFpUk1DY2NsOWxMM1c?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "JPMorgan Chase & Co. $JPM Shares Sold by Northside Capital Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPb2hWRGhFZzZ2akNZalZNWFRtRzFUVlI5djZEWVU2WktOWENpazZRRHY3clBSYm52ZU1QMWVFTF9LRGEtQzRidnpVN2FielFXOWwwV2s0UFNwWEFyQlQ4Q0RibVZFNWpNSEFuX21FREp5bEpwSUN0MXlQcEdSTDNtdlhXV3Z3VUFXLUJWZ0VGcDcwRGMzU0FYMUYwaXRkZnZydjZ4eER6V0t3WVpPZ0poMndYaDN0Zl9UQXB2UkJLcjk3dk9ocWNxN2lR?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "Goldman, JPMorgan, Invesco test blockchain for day-to-day trading (JPM:NYSE) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOMGM4QVAwNU1melMwckpqUXpvSWZQcUx0dGZMTU5GeGRSQkJSRVpvTmlwSlFqMno4dGJrbjhLVnpESENsTHhJN0FCbGhfNXJXQjBvcXZINkM3eW1LdGpMTGNPTmFGeU5odnZIalpHYUh6WG96N1FMTGg3VlB3ZTlfTFdOX1FvWXdLNWZkbEx6UkN1b0Nodi1paEgtVXhKQ3R5SGFR?oc=5"
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
    "date": "2026-08-12",
    "event": "JPM Looks 17.0% Overvalued on GF Value™ - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNVTBwaF9HRkp1X3duODVla25RcExHM2NnM2pDWEE3RlhOWEpKZHVNVUlzOExXR1ljQ2VqZ1JaUndPX3dfc0MyTEVIV1JmaV9ZeFIzNVcxcDBMQWlKc1A0SFJISURJZ09aMWFuTWNZeTlVUk1CNXFZV2d1b3ZueGp0Sw?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-10",
    "event": "JPM News | JPMORGAN CHASE & CO (NYSE:JPM) - ChartMill",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiWkFVX3lxTFBmUGd3SFozS1J5ZWw4MWpya0o3SHcyckFmSGlZQjJIbUVnV3FRa2YzU0JzZlkyd0lPQW5WZjZUZVhhUEM2YTl0WGR0aHNJNEp2MDFmSXFNdnp0dw?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-09",
    "event": "JPMorgan (JPM) Stock May Be 27% Undervalued After $750b Housing Push - webull.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiWEFVX3lxTFBRRGNfVHlQYWFHQVp6Wngzd01aMlYxcUoydE1pblAtWVFQQXYxRFRfYU04RmdyTVgyOHRpVlh4ZWcwUkd6VGZXMzFkYTBHQlZXaTBHUHhCNDI?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "Diversified Management Inc. Sells 14,474 Shares of JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPWHNISzVWMXdqLS1PN3c4M2l5eE1LUHFRcEI3c3h0Z1ViS3ZVc3JzRE5NcXhiT21RcVVrcDJ3WEdHczd2Ykk0cmR4NU51N2VpNEgwNTd6bnJ3V3RYcUY5eWlsN2pma1BDelNCaDJla2JLZVRjcEo1RDVVQnJ4TW9jNUxnRmdOQmFMRm5QUXEzT0Yzck1UWHJnUXQ4eFh4eUo2TnQ4SjBMTXVJRVV1ckZwZU9VN3F5dWk1dkp5cXdodUtBYmdlZ21rUmdjMA?oc=5"
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
    "date": "2026-08-12",
    "event": "JP Morgan Chase & Co. (JPM) Stock Forecasts - Yahoo! Finance Canada",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQTmMtbXN4MV9yRUNvd3I2OGozWDZfNDVOdkRyNW5wdHJ4OG1mN0hCSHZSaW1wVFZlTExMV1EyQXJYVzE4anoxMHRUQUFqemczNXN3MWphZXNnMmxlVEJBTlRINmFlY0JsT3ZCcTBvWFprLVpmSGN6enJFUHZxNDZtMmZiQll6R2lkVVN2N2tfT3E?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "JPMorgan Stock Rises 0.7% as Bank Calls for S&P 8,000 - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOVTFDeTQ1N19ITGRWQXV1TjBIR28ybVNHSy03M1pjNUZVUk1JNEdHV0tOYThPejlNN3hqZEo0QXBCdWNzZXpNeFRZTmgxdDRGdFUyVmVaWUhaTGdJTXAxakx0emhEcFVfc3hod0RReG9tanZ0OEdFZGE4WGxuaC05cHBsTzRGYmNkOThDY1Zxb1JUdw?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-12",
    "event": "JPMorgan Chase & Co. $JPM Position Boosted by Western Wealth Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPOG16SnQyc0VFcnpyRTNNM2tpclBRRGtYWEZOVDBDdzFPZE1RWGdiU2hYdUJjRFJmS1JJV0ZqY3RGX0c3dkhWRzE0WmhoOENfRUNqRzJsaGg3N3VfVldPTk9Sd2c2VERubk1wQ0ZOMG82MjF1OTllQWhZLUxGT002NktWZ1Y2VHZNcjl0QXZIeGFZRFUzQm1ZWjNEWk10cEJSRGtaVUd6MC1GeVIwV2hKMGM2X1I3aHpHUjI4WDlLaUVFcFVWMmhKUzN1a0Y?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-11",
    "event": "Jaguar Land Rover and Subaru Finance Rank #1 in Separate Categories - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQcGkybEpjdTFhRlVQUVJ6UWhFcDM5THlxNk9oMTg4anh3MzUyNENrZ2U4QnN3bllfMElGNFZQUE4wZ2hvY05tOWw4TklBUUIyX3IwNjdVUHh6SXdLekZNX3ZwWVVObFJSZEVwN05seG5OeTBRSmJNVzg4UWY5ZkJKUGVEMjEzNmU3NlFqdWtwSTR1ZjhhYk9GdnE2OFF5Q09kZlBMaEl4YTNXZkRnNDZ4c2ZwQ1BpWlpBVWhwb25n?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-10",
    "event": "JPM Stock Outlook: Global Market Rally Expected in Second Half - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOR1ZtZmt2T0J3WG9VVmQ5c3hGZElUS1ZzN19qckZxTG1lWGxET1VGaEJUVFo5M0Z4aFFDRVpTMzFBbVotNjNRdVFZUmFmRUlFQmhxeGY2TmlqeTdRMWMwSzRLSWUxaTJ6d0xMYmItRWJIMUloQVBBbnd0eGJGMnR4bHdqcDM4SnRwS2ktMEtMckMxUkIxTFYzTGJGbE0xMmdhcWc?oc=5"
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
    "date": "2026-08-10",
    "event": "JPMorgan Chase & Co. $JPM Stock Holdings Increased by Franklin Street Advisors Inc. NC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxQNE4zNnkwWldFS3pJbjJhd3dpM3pEUXdOUXh0c1VMcjlaYW9sRmRIM29NdkFPQkxpRkI0Y280end2eW9PTEhQQ3draGcybVc5T0k0dnhrdGV1UndUZkFSanNzQzVGZ1JFdlBBVWNzeWVSTWdvMjdxNjZvajVXZkhjSFVaR0czdmZFS3Zob3V5ZWdLeVdFWWpJdWhDcFpRRlhKbTl2Wmc1Q2p0VnhjSjBNc3BIMTIwZXlBTGZJcUI5SXIzN2ZKajU4MFMwbXc0R0l6V1lBM3o0SVlxUQ?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-10",
    "event": "JPMorgan just bumped its S&P 500 price target as it sees AI capex finally delivering for companies - Business Insider",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNb2pPUWdiZVh4WEVxZ3Fud1E3VUxNN3pGR2drMjN4Q1llb1VYaFExRmtjcE1uMlpBdGJZWUJaZjB2bTNmUEs2TkhOTk9WTUVxSExzRlBoVk5CcEl2bk1Wa0o4Y0ZhRW96TWk4RFlHcVBtQi0tVU01Zy1GMjdseHJUV1FSSTVtMkdQM3RRY2p6eDBDa2JtTUllTlVFdE40OXhS?oc=5"
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
    "date": "2026-08-11",
    "event": "Insider Selling: JPMorgan Chase & Co. (NYSE:JPM) Insider Sells 2,500 Shares - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQbkpMaGxhT1VNRncxMGRha2dJSGphb3dzQml2NHNJUHZGTERKNGx1VW9QYUxTNHhPRHFtdWJCSFJ5SFJiQXRUQnhUVF9weGhFb0lBU1BpZmZpZlRJWUFqOXl3bDRmSGVIcVVwWjZVSGVHSTBkbHNZaVFkbmQ1RS1FSDU4V0lURl8wZS14RmhaMVVpSmQxZ2tscnRZcC0wb3dLcEtVV0piTDFUV2duZU9jeTFwT2JyV0JjZ3o2dE1R?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-10",
    "event": "How Investors May Respond To JPM (JPM) Buybacks, Blockchain Traction and Upgraded Earnings Expectations - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPbzZCeG1xVWtPNjJxSXRrbllsTGVQZ2RwRW5rTFFDTmNJY2hMWGJqX05XS3ZPMkYzczNiWmEzaFBwY3BoZVFTekJZRU93cDVqRzBabFVNa2hFT3lpa0pDZUo5N0tneTRLZTB1bU5KM3BoYzhjd3IwSU9CTXJMOFNHQnF5WDlFWGV6VmFtaWU4WlF4OXMzSnlLT0tWNUhWM3NGTXVwV0hlQUpiTXVVQzlab2ZWQVhSd01aWUpXOWV0ZXFzTUZIdkHSAcsBQVVfeXFMTmtUQTJ0Rnl6VDZ3VnhmRHBoMnlmNkJ0R0RSVjVuMGxhY0h0bGRSWXRBczV1dlBidnpLZDZsSWtPNDdLb09MLWVpVXpVMC1hQnpsOVFYeExZVTFnNFN6SzZ3UTVreVMwa2h6cjBaQW10WW9WVU0yd1RvOVZWNFZnV0hzSUF3YVpTQm5hOFZONUtGam1YQmRqRlZiMEVHUlo2WmhQM0dnUmpSLTdPNEdNYlV5OS1rSU5IZmpLSFVfMjdLdHAxektLUnpSaVU?oc=5"
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
    "date": "2026-07-27",
    "event": "‘Further Upside Ahead’: J.P. Morgan Says Buy These 2 Stocks - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQNFpoeFZXaTU2VkdYaGdac1k1SzhaLUZlM3lWckdzWmhOMVF1bjBnS1lSVFR6WjJQX1FxYTE5VTZveWZJSWxpemZiUkJha0htVVZMSG04N3FYOWxjYlJSZVhiZlhqN2lVOFBKRzFHeXRsNkkwOVIySnVod01lcEo3cEFiem5XY1FsV09WWmlhVmFMMm8?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-06",
    "event": "JPMorganChase reports $5 trillion in assets in Q2 filing - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNel9UVXpudzlLMWRhbFpfcnpvRjl6MTFGU1I5cDEwMms5bnZZaUdsQmVmNXY1bDBmWE1XVWwzYnNnZkpLQ0hJSGQ1OWNtNXJKTnlkRzVHRm44RF9uVmVfY3gxY0pDQlE0TmpySl9sYWZPMWxXVWxUMUlubjh0WUl2cjQtV0hkX0VZS1FPYzNMVnVEOHdEdjR4bTJMOFpxSG9ldHk1T0dXRXppWmdqQllGWTNDb3pDZw?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-11",
    "event": "Wealthcare Advisory Partners LLC Cuts Stock Holdings in JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxQeU5CZ29LaWxZWm56RW85bzk2eXhrcDJIbGhSVkdnUmtyZlduTUdJbnktOHEwbDhpY01HaXcyLWRIWVpCOHkyd3plVzdfWXdtdjBWRFlKNC1BU0NjaE1FYXpNRGdoeEJwc1ZLS3N0SldnZnZYc2k1VFNXNW5pSHVVZUpQN2w5QVUtbmg4aVF3MGZHdHM1a0tVdy1qQjZ5Y1VjQ1Z2cUptY1RCS3lPM3dVVHI3R1Y5YzBBU3Z6aEl6SzF0QTZfRmxIRU1CQ0RkQ2NodXBMaw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Amazon (AMZN) Is Powering OpenAI’s Cyber Models, So Why Is The Stock So Cheap?",
    "type": "NEWS",
    "remark": "News via Insider Monkey — Amazon (NASDAQ:AMZN) just gave security teams a fresh reason to watch its cloud business. On August 11, two specialized ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/amazon-amzn-powering-openai-cyber-175657381.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "What Could Industry Rivals Mean For Trade Desk (TTD) Now?",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — The Trade Desk (NasdaqGM:TTD) is facing rising competitive pressure as Amazon and Google roll out new advertising produc...",
    "url": "https://finance.yahoo.com/media-advertising/articles/could-industry-rivals-mean-trade-171017043.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "BETA Technologies Q2 Earnings Call Highlights",
    "type": "NEWS",
    "remark": "News via MarketBeat — BETA Technologies (NYSE:BETA) reported second-quarter revenue of $14.7 million, exceeding its prior guidance range of $8...",
    "url": "https://www.marketbeat.com/instant-alerts/beta-technologies-q2-earnings-call-highlights-2026-08-12/?utm_source=yahoofinance&utm_medium=yahoofinance"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "The Sign Before Alphabet Stock's Surge Was Google Cloud's Margin, Not Its Growth",
    "type": "NEWS",
    "remark": "News via Trefis — Google Cloud's growth rate stayed in the same band in the quarters before the run, but the margin underneath it was doub...",
    "url": "https://www.trefis.com/articles/611164/the-sign-before-alphabet-stocks-surge-was-google-clouds-margin-not-its-growth/2026-08-12"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Is Amazon (AMZN) a Solid Growth Stock? 3 Reasons to Think \"Yes\"",
    "type": "NEWS",
    "remark": "News via Zacks — Amazon (AMZN) could produce exceptional returns because of its solid growth attributes....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/amazon-amzn-solid-growth-stock-164502534.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Is TTD Worth Buying as Cheap Valuation Clashes With Execution Risk?",
    "type": "NEWS",
    "remark": "News via Zacks — TTD trades near five-year valuation lows as revenue growth slows and earnings estimates weaken, while CTV and retail med...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/ttd-worth-buying-cheap-valuation-164300345.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "This AI Stock Is Surging. Can It Shake the ‘Meme Stock’ Label?",
    "type": "NEWS",
    "remark": "News via Barrons.com — Applied Optoelectronics reports solid earnings, giving a boost to investors who hope it can be more than a meme stock....",
    "url": "https://www.barrons.com/articles/applied-optoelectronics-earnings-stock-price-c63f8050?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Nebius Second-Quarter Revenue Exceeds Estimates Amid Robust AI Cloud Gains",
    "type": "NEWS",
    "remark": "News via MT Newswires — Nebius (NBIS) reported stronger-than-expected second-quarter revenue on Wednesday as robust demand f...",
    "url": "https://finance.yahoo.com/technology/ai/articles/nebius-second-quarter-revenue-exceeds-154839122.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Amazon Stock's Next Leg Is Already On The Order Book",
    "type": "NEWS",
    "remark": "News via Trefis — The cloud unit is a minority of revenue and the majority of operating profit, and what it has already contracted is what...",
    "url": "https://www.trefis.com/articles/611159/amazon-stocks-next-leg-is-already-on-the-order-book/2026-08-12"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Apple Is Showing Signs Of Cratering This Month: Is One Wall Street Pro’s Expectation of 33% Gains Persuasive?",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Apple just posted a blowout quarter and the stock has been bleeding ever since, leaving investors to wonder whether a bo...",
    "url": "https://247wallst.com/investing/2026/08/12/apple-is-showing-signs-of-cratering-this-month-is-one-wall-street-pros-expectation-of-33-gains-persuasive/"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Amazon Raises 2026 AI Spending to $220B: Smart Bet or Riskier Trap?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/amazon-raises-2026-ai-spending-150200704.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Microsoft Corporation (MSFT) vs. Meta Platforms, Inc. (META): Two Different Bets Behind Big Tech’s $1 Trillion Lease Bill",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/microsoft-corporation-msft-vs-meta-150020825.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Amazon Just Exploded 13% on Its AWS Quarter. This Fund Pays You Every Friday to Own It",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/12/amazon-just-exploded-13-on-its-aws-quarter-this-fund-pays-you-every-friday-to-own-it/?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Victory Marine Holdings Appoints E-Commerce Director to Scale GUTSI Omnichannel Growth",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://investorshub.advfn.com/market-news/article/34176/victory-marine-holdings-appoints-e-commerce-director-to-scale-gutsi-omnichannel-growth?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "The Factory Math That Could Power Rivian Automotive Stock Higher",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/611169/the-factory-math-that-could-power-rivian-automotive-stock-higher/2026-08-12?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Airbnb vs. PepsiCo: Which Stock Is a Better Buy in 2026?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/coverage/better-buy/2026/08/12/airbnb-vs-pepsico-which-stock-is-a-better-buy-in-2026/?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Will CoreWeave's Global Expansion Accelerate Revenue Growth?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/coreweaves-global-expansion-accelerate-revenue-134900784.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Palantir Stock's Premium Sits On One Country's Demand",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/611168/palantir-stocks-premium-sits-on-one-countrys-demand/2026-08-12?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Nvidia Will Be The World’s First $10 Trillion Company",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/12/nvidia-will-be-the-worlds-first-10-trillion-company/?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "4 Semiconductor Stocks to Buy Amid Top Hyperscalers' $745B AI CapEx Bet",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/4-semiconductor-stocks-buy-amid-131600083.html?.tsrc=rss"
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
    "date": "2026-08-11",
    "event": "What Could Push AMZN Stock Higher From Here? - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNSEw3cHFRVXg3bU1iRUNkdFBiQlZndkd1OXhGeFA5blBJV0doU2pUQmg2Ujh4aVE1VGJYcXNhOFRpcDQ3LXUxZmJPOHR4TG8zLVN6UGdhQTJkWHBLOS1jV25LdFBqRnNELXlqQ3ZqMnREZTU2SjJpX2dzaE9jRDJEMVJTeDBleS1UVUFzd2x5NTMybmhFMUFJVEkzTGdORUl1WlFwU2Judw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-10",
    "event": "Amazon: Stunning Earnings Reaffirms Thesis (NASDAQ:AMZN) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQNFNOU3pjb1Ewc29zbmphdnpDNWVleTF6RE5LOEdWMXdoOUNxS2xjMElDRFpzdGNoNndoc2FnZkpaVXdMR0RMNUJwMUViVHFST1k2dlpaOUtrV09hRzZlOW5rMExybmhFOHNtNWdhc1QtbDl0eVJOUVFJTXRKeXJya2lVSmRBZThNTmc?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Amazon Raises 2026 AI Spending to $220B: Smart Bet or Riskier Trap? - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxOVUFZb1VrWmxfcEl3NEI3TU5JZVFDZGlTRnpwbXpYOGlkcjBWYXgwU0FNU3Z1eGdvOGh4QlhUZ0ZVMTd5U0YtTmE0Z2RDcTl6YVRVQzVZWEFwOFNnMFdBSS01MU5JR2FDTFJoQVFmOGd6cGhkMGNNWWJfalhTcUxmZE9PdzItUFZ3UjRiUHFOS2VQTXFHeUpfbUdFZ0VhSkV0cHhMakpKbU81VW1TbWhGUVBfZGpwSFpEQU8yM3N6ZEh0Sml6Q1pqVjlyOXBlaEtxWE5QU2xiSG4zdXhLb2JwWURUbw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-10",
    "event": "Amazon.com vs. Chewy: Which Consumer Stock Is a Better Buy in 2026? - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQbHpDSzA4NGhPcUtMeTVCUUVkN0xQZXRTYll3M0dWYS1XMjQ1RWZadHpOR213UUpRbTV1UmlhYVBicko0TWMxcWE5ZUlGRjluc3d2NGp2a3pCQWJuaUJjNnN2aXl6clVRRGhwUm9JU2RNMDdxQ1huc1FMMHpQaS14cWZNSW9MZjQyY25TV1o2b2xEYTAxWlFpMEh6RWhna09rMmpLWFpzdDBwekNXNW9BaFFSVTFocjQ?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-10",
    "event": "Jeff Bezos Closes In on $6B Liverpool Deal as Amazon Stock Tops $3T Market Cap - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNYmtLNXQ4NWQzTEhQMTdobEZLekUtaFFTaW9vR3l4VkYwSHFKdVBaZjBQSWc2RlVOZGxPUmlxUHB3TFNWRms4OEM2Y1F4VTY3cGF1OVNScTRZNmpiZFZ4RkFnMzJYeHBOTHdqZWpyNUp4cEdPVzdHMnZOQzZqT3V4SjdKY01NUFFvUjlKeGNheU5ENC16U0NhdVZEYUdYa2MzQkJBSWRGeW1mQQ?oc=5"
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
    "date": "2026-08-11",
    "event": "AMZN Stock to Close Above $300 by August End? Crypto Punters Bet on the Possibility Following Amazon's Im - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQMk9ESm8xOHQ5ZUFvZnNCaGRXOWdEMmdmZVlRN29xV3hvUTFxc1pScnJJdkxuZkZybXFQSlh6djhJYzMtWFJ4elFpM01RNHBmNmJQSDNFSzFFem4zeFpwZlEweldvbXNCMWhJZTdsbjluaUV2dXowZWlPZnZ1cmZpMGg5Z1BOQTRFeEhQRjVaV3g0N0o5bWdVbFlrR0VmUzVWVmlSVVoyTGFqRWt5dzFoZ0RfX0NLZw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-10",
    "event": "Amazon Stock And The Profit Signal Everyone Is Chasing - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPYTI1cDl3SUlZNjJUQ1ZORmphbGxLYXRsRVdrSFQ5SXhkSUNnSTJxdDRqVWs3TnFaTGZnSlI5RkRycGExaUlTd2dyX0F6emJ5dXNTbmZvcHdCUDBSNXZURlllN055LUM3dmxJSGZ6Nk5PVmprcloyd1hpYklXTjRfOUh3SVBpVGtSQ29zb1YxN0RnUlM0YlpLOXM2WDYxNXJxY19vN1JOcXJPd1FzNW1rUVl3UWlYdw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Amazon Stock’s Next Leg Is Already On The Order Book - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPSDZwODczWWUxZkg4MWxuTmM5eHB6V0pIYWV0WHk4VjZRNFMyaW5wM2I5SmtnNXdnMlhhVDdOZEd1Y3VxMmQ0N3NyaUc2b0FicmRNZHljTXBuWTZfcnVqQnlNeVRQZHJJQ3U1YkhUZDllTklQbmFOekZuZER6ckJnS0ViNkZ6UkdhMTE3TlVSb0ZPaUVUQnVEemQ5aW1VbGMwY2p4TjVjQXVYZzNvNmloajJn?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Amazon (AMZN) Is Powering OpenAI’s Cyber Models, So Why Is The Stock So Cheap? - Yahoo Finance UK",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQVkpYVUlXaW5NLUhiRUNQcmRLUTBKUUlKY0RadzdfMlRUWTU4bDM3b0QtNlY0bGthUkFablJDM1p2cE1jc0VoenFRaThjdlFEeXR2Z1ZjdlpZYkJBOFBuN3BQcEtRT3BjUTVIVlBmLXZ3bXdESkZqSHc0eHBCNmtidXFXUVdKeVpyeVE?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-11",
    "event": "Why AMZN Stock Is Rising Today - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPYnlLNHgwSi1mZVgySHpQZkl0QzhFb05sQUpqSFROeGNtQmoxQzFKT09PbHBTRy1fdFBZRUJNeTBaa04xZ2d2YWJEYUNZSk8zT2FfbUVDandRaE4weVZtTjQ3M3NTTWdLalFXRnpfRi1rdTFNNnpQVEZSV01VbzRtajlnTTR5RmxZLWdZd2RrQzFNYXJKeTRBUDNIUjIzT1pDMHFGYVcwZDBqTDBJZ3BuNm5SNENEdw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-11",
    "event": "Should Amazon Investors Be Worried After Jeff Bezos Sold Over $4 Billion in Shares? - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOTlRtSF9UNHZ5M0dTZE43QUlEUDREWU16YnJNWG56ZFFSaU1YaGJiN3R3M0g0NGZkUnlvdUhiWTZ6YVNoVGZzSThGTDd6aGV0b3Y0QWpsWi03TUFpaEVvZTBONzllUllfY2pUV3pLTnNoS0hESmJhYnlMOENabTRoVkhMZklaME1iZnlfWjZPRmNDc3FSTURETA?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Amazon.com (AMZN) Could Be 43% Undervalued After LaFontaine Joins Amazon Autos - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNdEhTcTZOaExUaGNjMWFwVTZqaU1hMEpkYVUycUZQLXd0ME9QOXQwdy14dnJQZkpVZXd1ZDdPZl9UdXhHMWVKLWxUUzRPTU9BOGktYzJsbHFVYUhJWUJkcEtDOWtFQ2E1eVhmNnZiYUhqSkszOGJwVjBRbnNGOVhhX3BxNHFTMzdVcVJBbEsydzNSVHE2ZzdhUExtTzVoYnhHSzY5Q2pLbU56N2JaZm5tX0MzeTdDLUNKQkZ2dVBCM0draDRm0gHKAUFVX3lxTE5rN1RXNVl1VmtzMG9FRkRvNnM3OHdnUGZuZ0dwMWp0ZS1PYkRNYWNrMkNiWEVHMWlqTDN0UUJGWFJuMERCamZQOGFyNjlZYmxLWFRDYk5feHFaSGp5OGxka1RWMlU2Zkh4Y0Y4dmtMVEJJRFlITzd1SlZoNTYwLXI2TjhLdWQ3NTZhOVhuQU9ySFNIaEtlRWRoUFFaS1hSUUdmTW0xc1dVSzVrV3lsWTRyWU92QS04dmo2WllxZzd3MmUwT3dWSkJFZUE?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Amazon.com, Inc. $AMZN Stock Position Reduced by Cim LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOaW1vTXMxSG5tRnNhUy00N0ZSSEczMTQ5ME5tU0ZaS1FqeGVQRUlGTzJ6Y1hDbkdIUlF3SnBqcWR0YWktUTJ1ajR1aHYzS1FxMWRLTVdIUDRRT0FEaGcyQ2ZDckFKT0w5ODJCNll3cnVQOEs5V1J3TFdrTzVkQUYzTmM3VEtXX1huUEhvTHluWjMzZWd6LTN5STdjZmxvcHZ6d2VSR0h6SkFMaGtJZlRCbWI4bw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Is Amazon (AMZN) a Solid Growth Stock? 3 Reasons to Think \"Yes\" - Yahoo Finance Singapore",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxNbEhDTTdobnpCRFp0UllPNDJYcmdHWC0zSW5WLTZIb3Axc1lXUTNtbjZlQld3WWRKSnAtc0RRQkU3NGRsaHZlMEpaZ3A1bDNDQ0ZxWndhejlNT0YyQWpDWk04UzVhaFBuS0t1QTFYbzM3eWpyR3UzeVhKejE1UlgzanVYbUFJdw?oc=5"
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
    "date": "2026-08-08",
    "event": "AMZN Stock Rallies Over 3% — Amazon Reshuffles AWS Leadership As Veteran Dave Brown Exits, Dave Treadwell Takes Over - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi_gFBVV95cUxPZEdCNG0zaXZFOVVKeWZuZkV3Z0ZtWEpxYkZFZWFKSkczMTVBcDlnYXlIVnZVbzl6WGhzSkl5VmFHbE1weGc1Zzg1UWQ0VkxyaXhOem5iQXBsSEIyNkJtTjhtX2NIMEFnS1ZyZjRoa2hsSUl5MHR2VmFVTVljVGozeGhwNFVvT01xd0Q4ZEFpb3JUMmJ1bHhxVzB4WjFIb1FnbjBnLXRmbXVINnRoM0hvVGhjcnpNczh2VW5QTnNYQms0MERucDlISi11UzN4UU9IaHFrQWtJZy1QWjNWdk85T3ZERmkxTElEN1ZWTXpBVkU2R0VEWWp3UU8wcWdZQQ?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Amazon Grew Revenue 20%. Here's the Only Reason I Can Think Of for Why Amazon Trades at Just 22 Times Forward Earnings. - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwJBVV95cUxNWDBJV1NzNHlmdmVPeHY5Ti1lUENfTlB4bU1ENFlXdzJfbGFHOThiQ2hhcldIM3A2dTJJWXcyLU1sWFd6amd2YzZpQmhiQVdlM19yWkN2WTlCTlpkRXVGSGtoVEdaMmNJYUNJNEhVTkVkbE8yemNlT2Jfa0xlbTBTZlB1UFhsSHFmem1NTlpHNi1UZXhDSGRLWVNCMElrZm45cWFveTFfUHl5UzFlQVFmT19ETWVpa1lJbDNkNk1lVDl5NHNpWldoYWpNZTZJRWNVcElqS2NVWUtGbndvUDREVjFaN2NNSzJvZkJBZDM2Z2x4VERyY1FPVmdUVUQzZk52Y2puMzNNOTI3dGRXRll0WlluaEk3ZTVFeE9CaGJUNlhmcTlaSWRN?oc=5"
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
    "date": "2026-07-31",
    "event": "Amazon: What We Think of the Stock After Earnings - Morningstar",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPTXhIdDMwZ1JWb3Y3V0Z4QllGRUN1N1RjRFUyeFRNYm44OExQc2JXcjR0T2JwSWxvRWR6U2VscF9kT19pc2liWksybUtkd0lmVTg5YUZ0eFF2LUoxckZybjlJbnRqSldfUVp4NVA3RWVEQ01NMWQ0SlotTE0zenhaYWthYkM0cVgwZDFhb3Z3?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-11",
    "event": "2 Unstoppable Artificial Intelligence (AI) Stocks That Will Join Amazon in the $3 Trillion Club by 2027 - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOb2M2NW1XQW9VN2NfRWJ1TG5DYlhKNE82SFdRYkZEelFmNzNsM2VBbkhQcEVvYmVEdVNQYXcwRTRxOFN5NzMxNktCVDBBVWVaTGVzOTFVS1NaR3c1N3laMEtock9rUFpxeDRDUzlDWkhBVWhtbHlNcVFPV2VRSmZPSk85WXNYLUppTHU3NTJVSU9LRkN2bFJtSEdGQzlfbFVwS21OY0NHcw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-06-30",
    "event": "Jeff Bezos’ Amazon May Hit Historic Milestone No Company Has Reached, Says Analyst: 'Has One Of The Most Important…' - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOQ291ZUFfY3I5UUQybWhzaFdQM2RkM0IxYXU2Qk1SY0ZnNEc0VGNTc2pCQmpXZWV0UWpkRU5BVENVejZHVzl0RVAybVRMLUxaZGpaSFhaYVFRMl9qUnRkVXB6dkhYa183QThaT19HalprNzdYSFlrdUREdVp3Q1pld0lTOUZ5a19PRzdEcG1EczBsWFB6?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-12",
    "event": "Amazon Grew Revenue 20%. Here's the Only Reason I Can Think Of for Why Amazon Trades at Just 22 Times Forward Earnings. - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQYjdpWndOUld4aUtkdHV3Z3EyUmRySy1uanBKWGVyR2xoSDZDYzJtdXN5TER2d1Z6Q1d5Y282VmJZLXE3dExFNk0yM3BLRUhmaXVEME5pbFBQdlRlU2ZwSm8wRV9wMV9kSTBNcU1SN3hIMUJ5SHQtSGRqVnhKQ3kybjBkLUlqU3B5NVNkTWxWRmtiZ0Q3WnVtLQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Nvidia partners with Goldman Sachs, BlackRock to fund AI build-out — but there's one big risk",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — Nvidia (NVDA) is partnering with BlackRock (BLK), Goldman Sachs (GS), Blackstone (BX), and other major firms on Wall Str...",
    "url": "https://finance.yahoo.com/video/nvidia-partners-goldman-sachs-blackrock-152456010.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "CoreWeave, Nebius soar as AI spending powers growth",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — CoreWeave (CRWV) and Nebius (NBIS) shares skyrocket following earnings, as revenue surges to “stupid” levels and demand ...",
    "url": "https://finance.yahoo.com/video/coreweave-nebius-soar-ai-spending-141200933.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Trump’s Capital Gains Tax Cut Plan Could Save Elon Musk Millions — Maybe Billions — of Dollars on Tesla",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Elon Musk’s Tesla (NASDAQ:TSLA) stake is one of the largest personal equity positions in American history, and depending...",
    "url": "https://247wallst.com/investing/2026/08/12/trumps-capital-gains-tax-cut-plan-could-save-elon-musk-millions-maybe-billions-of-dollars-on-tesla/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Stock Market Today: Nasdaq Gains As Nvidia Rises; Wendy's Soars On Deal News(Live Coverage)",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Stock Market Today: The Dow Jones index rises on a key CPI inflation report. Nvidia partner CoreWeave soars on earnings....",
    "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-sp500-nasdaq-july-cpi-inflation-nvidia-partner-coreweave/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "SpaceX Has Slumped Since Its Debut. Here Is Where History Says the Stock Heads Next.",
    "type": "NEWS",
    "remark": "News via Motley Fool — The hottest IPO of 2026 fizzled out over the past two months....",
    "url": "https://www.fool.com/investing/2026/08/12/spacex-slumped-on-its-debut-here-is-where-history/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Bloom Energy Says It's Now \"The Standard for AI Onsite Power.\" Here's What That Means for the Stock.",
    "type": "NEWS",
    "remark": "News via Motley Fool — CEO KR Sridhar may have overstated the company's place within the industry, but his bigger point still stands....",
    "url": "https://www.fool.com/investing/2026/08/12/bloom-energy-says-its-now-the-standard-for-ai-onsi/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Why Quantinuum Stock Popped Today",
    "type": "NEWS",
    "remark": "News via Motley Fool — Quantinuum is off to a good start as a pure-play quantum computing stock....",
    "url": "https://www.fool.com/investing/2026/08/12/why-quantinuum-stock-popped-today/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Cava's Stock Surges After Q2 Results. Is Now the Time to Buy?",
    "type": "NEWS",
    "remark": "News via Motley Fool — The fast-casual restaurant chain's latest quarterly numbers came in better than expected....",
    "url": "https://www.fool.com/investing/2026/08/12/cavas-stock-surges-after-q2-results-is-now-the-tim/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Intel Is Up 176% This Year. Is It Time to Take Profits on INTC, AMD, Broadcom, and NVIDIA?",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Intel's stunning 176% run has the semiconductor sector buzzing, but with AMD trading at a jaw-dropping 123x earnings and...",
    "url": "https://247wallst.com/investing/2026/08/12/intel-is-up-176-this-year-is-it-time-to-take-profits-on-intc-amd-broadcom-and-nvidia/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Jim Cramer Just Called Intel a Major Focus Name: Here’s What He Sees in Lip-Bu Tan’s Intel",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Jim Cramer just named Intel a major focus name and pointed directly at CEO Lip-Bu Tan, but Wall Street's cautious consen...",
    "url": "https://247wallst.com/investing/2026/08/12/jim-cramer-just-called-intel-a-major-focus-name-heres-what-he-sees-in-lip-bu-tans-intel/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Nvidia (NVDA) Stock Trades Down, Here Is Why",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/nvidia-nvda-stock-trades-down-180522894.html?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Is Investing in Coca-Cola Stock Near an All-Time High a Better Buy Than PepsiCo Under $140 Per Share?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/12/invest-coca-cola-stock-all-time-high-pepsico/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Elon Musk: SpaceX’s AI Revenue Will Surpass Its Entire Space Business “Next Month”",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/12/elon-musk-spacexs-ai-revenue-will-surpass-its-entire-space-business-next-month/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "S&P 500 Stays Near Records After Mild July Inflation Report",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/12/sp-500-stays-near-records-after-mild-july-inflatio/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Western Union's Dividend Now Yields a Whopping 13.5%. Here's Why I'm Buying Its Competitor Instead.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/12/western-unions-dividend-now-yields-a-whopping-14/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Bank of America sends blunt message to Nvidia stock investors",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/investing/stocks/bank-of-america-sends-blunt-message-to-nvidia-stock-investors?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "CoreWeave and Nebius Group Deliver Earnings Shocker. Here's What It Signals About the Future of AI.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/12/coreweave-and-nebius-group-deliver-earnings-shocker-here-s-what-it-signals-about-the-future-of-ai/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "CoreWeave CEO: We’re Booking 2020-Era NVIDIA GPUs Through 2029 at “Full Freight”",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/12/coreweave-ceo-were-booking-2020-era-nvidia-gpus-through-2029-at-full-freight/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "3 Costs That Might Stretch Your Retirement Income Thin -- and How to Prepare",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/retirement/2026/08/12/3-costs-that-might-stretch-your-retirement-income/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Up 26% Since July 29, Is It Too Late to Buy Microsoft Stock?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/12/up-26-since-july-29-is-it-too-late-to-buy-microsof/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "BREAKING NEWS: As Markets Rally in a New Era of American Innovation, ELEKTROS Highlights Hard-Rock Lithium, Critical Minerals and EV Charging Technology",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/energy/articles/breaking-news-markets-rally-era-173300085.html?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "NVIDIA Stock Jumps 2.5% Today as $500 Billion AI Funding Opens",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/nvidia-stock-jumps-2-5-173022032.html?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-11",
    "event": "Nvidia Confirms $500 Bil AI Funding Deal. These Stocks Jump. - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxPSXdHaG5KeV9nc1drckdFVUx5SXBzdjlXVGpxQzh1Q28xMlhRR1dRSmhPak1QUGFjdzl5R2FZaS1YOU9xODZ1ckNxc3hrMXp3blo5Y05CTjMwN1NnenFlUmExQ2hLV0NIVE5VbXZQZ0lrcVEwMjhSUmNZemJwVDQ4NTFR?oc=5"
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
    "date": "2026-08-12",
    "event": "Nvidia (NVDA) Stock Trades Down, Here Is Why - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPOElpUlhVLUxTLU51TTJLTzBSSlNWOWJodkRBSWd4TjkzX1BmQlB0QzNkdDJkRFhOYUJUMTIyY1NWSkcxTlI3dGwweFhEVWVWRTJRaThlRFRpLTZnQkN4SWdZYW5JdWFrREVsN3BBN0Y1QlBoSGdzc3N2LVdGbWNudERISWUwc2otM1FPd0QzekdCMjQtd2l6ZGpB?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Nvidia's $500 Billion AI Gamble Raises the Stakes for NVDA Stock - Yahoo! Finance Canada",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxNNWtDa2RsU0VhTXFLYnFrai1CTnpsLVUwSHFJMElQbG1oTFFEbDlhYmZsNlRyVktBOVF0cWhKZEdqNXVVR0hiYzlGU0FidEVENUxRSS1vbTltQkh5RFY5MUo0ZEJ5VlBvR2V5UERjMk1iVl8wTTJfeHN6bEVFNnJ5eXc5R2c?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "US Stock Market Movements | NVIDIA (NVDA.US) Rises Nearly 3% Intraday Amid Reports of Development of Top-Tier Global Open-Source Model - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQcElaMDB4bjR2VndfdHN5V2FsZnI2QWRvbE9GVG5xWXBld0hHeG9VWndsallJNVBkczVVa2FDcXN6WDk2Y0E5RlUzQksyRTcwTTN6aHRmOFp3bU9JbVNCZDA1NnRNVUlYbGJtQ2lYQUJOY204NVVOZWNLZ0FNY000d2hkeTBHYWVSRHM4QUE5YllGMmx1bFcwY01SZ1hkWlZiOUtqbUJFYU8?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "This HVAC Stock Has Outperformed Nvidia Over the Past 5 Years. Yes, Really - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPSm1yZWtNdlQxRmpUaUJDWG9yNzlSNGZzVGNfMUN5dW9wZTJiWDhURGVFREU0YTUxN2JIZHpzS1ZycDhTSjN3RExITmxYUU9IYThaa25XWmxvZ3kyN3RVR0dPSmFHTjFURG9hTTV1UmFlLV9mQzdac2ZIakZJTDlzSlF6Ti01V3QyX2FHUE9jN0N2cG0xZ0E?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-10",
    "event": "Here’s Why Nvidia Stock Is Down Today - forbes.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxORnVlbW1pSGlNdkVWNVo2bTdHRTdTM29vRUxMckNQVVFKWGRtQXlSVFJobGwzSnI4eUxlc0JWZ1RZUzdmUFFXVEVETGNKLWRkRzgtWGJXczFITFhIcGZTNlBkZF9KMmh0SjI2Ty1XYkVUajNDUV92YWJNZ0xtVTZveUtYSVFXVDJIX1pXSlRJLUZfdmttQmUzZGVKNFpmYm9fcTJKZGlqTjd4OTdqN2prNVdUZkl5QW5ZT2dULThzSGx5b2pxUUh3NDNUQ0FHTHdwZzZ2MlF0TEdWNHNFWUJGeFFwS3hISno5X01fSjNLc1psZw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-11",
    "event": "Nvidia's Masterstroke To Turn Itself Into An Asset Class—Characterizing This As Circular Financing Is Flawed - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxQcWVHdjZKdmg0Qi0tbW5YanFESWxCSTVaSVBvLUlNNHB6cXFOQXZSenc0dlVVZjNfeloxekF1U3pUZm5hU2h0dE9MWTctTFNoN1FNVnYzUHVPNHVBUkxvZ3hDMkJISFVYaDEtQ25fOEtaTG5YaE5UNTNxOGZlaGY0cy1scFp5MWNMYnZPRVROSXBWSlFPLTJLZU9oXzFOVnJXTHhFSEhueUpFajRvbDJOa3FZX055WmlwYi03WGo0M3lndG03NXdrYUt5MTBZWjk1SEtZQkFrSXBaZkdQZm5fZlRqallPWWwySUE?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-09",
    "event": "Nvidia's Stock Is Completely Mispriced (NASDAQ:NVDA) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxNSmtLdDNybHBVRHUwbmxQclc5dlo3NDdZdU1SbWJQdWZoalE5T2s4dkZjM1FPUTVpVkR4RUJ6NnVFVE05Rnp5NHVSX3hTRzVqNzZCVjVlT1F1UlRSNXNMV2JYYzg0MGRYR25HSTQ3Rkw0UGJQMkJ5WVhOOUotVnVfRHVCWQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-11",
    "event": "Elon Musk's Newest Data Center 'Moonshot' Could Send NVIDIA Shares to $500. It Could Also Crash the Stock. - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxQRDZ0V0xmeTIyME5aLUo5cDN1V1pMVXR0WHdQZXZmWXF6d2lNekFBTWVsamhSZFdUb1Z3SmtZenppbFN4aFJtU0pReTlwLXB4clcyRzhBSHJkZlhVbkRpVU9BekxOYUZaMEpqdmpJbFh5TTctMl8xZm9ITUh2NkV4RFJXRHNQWXRNcGFjWmtHeEUxdUhtUE5iX0tneWdzODMzX2hIQWFnNDZiTE5LME1vUkJmNkFpNWRzZ3FSMms2VW1uM05TU1NJT3BXTXdnTDhibzZLWHFWbldaMTY3?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-10",
    "event": "Nvidia (NVDA) Stock Trades Down, Here Is Why - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxQRDhLOGhIc2I2d0tVNmlpWTVmYnliSjU2SzdsVXBlMFI3ejhqaFhFeWNCUmVLWDJDQ3dLOHN2QmlKdjJLR0llNTJ4YV9XUk41aGhMejdmVzlIN3BsSFNMU3NIMXB2TEZhTXRBLTIxdVRtRmVJS1RUTkNIZmZXSXpQalpuLVNHdGh4QVVwanU5dDNCU2xlODFHMl85S0NYUzZ2MmZTNEJWTmE?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "AMD Trades at 63x Forward Earnings, While Nvidia Trades at 24x. History Says This Is the Better Buy. - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQNHNZZlJ4MEtyN0xiWDBjczFDcmR3OFZ0V0FEZkFheFNxdF9aY20tQXFCdGY1VWpvT2otM0wzWnRWNWlnZ0Y2dXk1VXdUYW5fblpWc2RjNGI2dGFPQ0ZDZ1RxeGp4RjJDdnBrX3AxS05vckdmQkMxdlRRdEp0SlZDN1dxWGJqM3B6ZFkwVHBjYmxrQTJzTDVXaktEVGI?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Bank of America sends blunt message to Nvidia stock investors - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNZGRjRFdEcVdBQVYwMmFDYzhkMW91U0JzTl9YeVozc0ZFQjlzTVhacHhuQ1ZHbGlqV01PNU9DWl82WHE1cTRpc0h6UEtqd2xYckh2b0ZSZ0hZREZITXlHOTB5SFV5dUxmOXc0MzUta1AzSWlCM0hJSFJwOFNuNXNnUEdWNk4yZ2wtY2pseUlCS2kwaVhFLTZMYWtpelhaeVJCNnZjWXFOSQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "What's Going On With Nvidia Stock on Wednesday? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOOUhFakdCZ3lEZE9ndTFHNnk1YW4wd1RpYU5JTjdjQWxmR0N1LUU0eUYxcjBiTGdpbjlRZldQNVRJYUhwMjZMaXFGd1puU2hBY3UxODlJN1RjdkNrbHMyaHhqd21EWWJHQnpiWTQtQXVOYk5EQ3A1QVE0S0dYMHNwbmZpRkJ0OFlIaTJNY0t4RkpSNF9mbktEV1ZfYzdWeHdoMnc?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Fund Update: New $89.9B $NVDA stock position opened by JPMORGAN CHASE & CO - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQUlNaZEctVUFDekJndDVYcmFOM0lMNkp2V3JkbU54bHc5cE14ZVkxdWwtS2s5cWg2b04wREVHNWdlSmRlVWtyRV9taUJDb2RqZVZELWppQXNkMEIzMXFERUFFa0pjaXRWSVlMX0JZaEQteGhxMFRMYjRVVEI5b1o1RGk2eE1hNWgtRll5YktOdGhXejRLbzk1UngtREtySElINTkxYTg1aGdWVW5BbVI4UkhUUV9jdw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-10",
    "event": "Nvidia Stock Slips as Its AI Investments Draw Fresh Scrutiny - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPazlIVnY5UGhPVTFhbmJxVm4tSl9JZHpYM1pXLVJ6dUhnSktvYnpVeEd0SS1NMU0tYUJSaGtFQXRpakdkd3B0MzU1QXZoWmtobG85TFlZb1dQcFVEQ25yVnFkZTJsR1lKc0FrWEl6cS1KZWFzZnI3NVNWQ0tLb2hZZkNIOHI3OVhud1E?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Nvidia's $500 Billion AI Gamble Raises the Stakes for NVDA Stock - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQRXpHVzZfRi1hWjNTcDluWlVqYmJaQ0txRkxKZFdZTzRHdkxZcDNRRXJYd2lhNEhxNWZubV9sQmcxSXhJWHF2ZHFfRjN2THZGUmk2X2FFWmtKZHFkSjhZWFRranByQ3hFTmtIOGhzOUxfQ0xGREprU0llREJaMmdDWjRXbzZ6ZzF3Q0RCMkxrcUZZbHd4SHNFcHQ4dlNzZjVGZ1c3cHQ2NzRHdHRadXhpangxM1NsZEN5QS1uZG5iOVo?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-07",
    "event": "How To Earn 11% On NVDA Stock And Set A 30% Safety Net - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNSXJZWXFQUEZXWTlqaXd5R2Y2LXFoN3RGQUQtaG5RdzZfbVdnNUppdEp4M0tHc3Z5aHFDVk9Pc2ppVWk2VVZOdmNqTGlGSW1pNU9KVmd2VjQwbnFFUlZCemtUb1dLVlNjYjdNY2NjbzVCM3NsTHJ3bWM0TUdGMXVaYkV6SjlZTDhOS2JTZXlEWnBwWk5KMzdQaHhUSm1EVElMaG5Mc0NQSkM2VzlqakxVZGVJWQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Supermicro Soars On Report. Why Nvidia Is Also Rallying. - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNOG5FSDJ2TFhyRUxFU2VTWjBFUWFKY04wZnQ0Uy1TVlAyTlBRWTI2VlB0QU90UjVyVWdILVoxTHRjSGMtazZrYS1Sa3p2OFBpVU5JQVhUbDh2RlZOaElEc01tc191dDZXYWwzS1dDcUZSRGlrdHBhSndjSm5sY2ZFdkdQbUNrVVZMZ2trVC1NN3hQaHJjVUhDdkhDa2lyNW8?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Nvidia (NVDA Stock) to Invest $3 Billion on Lancium as AI Race Turns Into a Power Race - CarbonCredits.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxNZnBuTGR0YmZlc25yS25wYWhPdE9DZmxIQ3RoazB5cHFhTWd6d0VQWHJNaWQ5Y3ZRdnJ2STNCbEpwdkNhcXFMSWZ3dHJjVXdVLW1VMnN0bXJCU0N2NTZWbGxmVjRBdndHQXA3aXZBZGdEOTNGQ2tNbTlqbDJPVWp6dw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-12",
    "event": "Michael Burry Calls Nvidia’s $500B AI Financing Plan A ‘Wall Street Stunt’: ‘Meet The New Boss’ - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPVWlEWWFJLUx4bjBHZzA1dk5RMVpGaHRfb0ZUTGVkV0hvTDNtRjNXNEs0X01zazlxMmxMLTN6dVB3OHI0S243QklnZnVtWFFFWHFibF9IcVN3RzMzaGxaRGRKSENvZmFJTHJSZkVhaW92SExGMVdmSDRsSENod2hDUTFCX3lfZmtfLUF1X01tdDNKbVgwcy1OMVRNMA?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-11",
    "event": "Will Nvidia Split Its Stock Again in 2026? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNWFVUbE1fbzUtcm1oQ0hPTzQzMmlJek1XVzJOR0R2YXB3Y0VYSzRHR2s3NzBUVGRmc1FLM0lrZllid3BVaWlYUk5oYVFBWC1hZzF6NUtDWG5CWFpVOTJmcnZwdHpKbnVxcWFSMS03Z1N3VFJYOGVoY05ubTVtYVJUM25kM3lQQVk5aVdqRVg3YjItSDdoN0NNSmdR?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-10",
    "event": "Cathie Wood Ignores AI Panic — Buys More Nvidia, Sells This Gaming Stock Instead - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNS2tqQThJQTFuWFJNazB6Q1JDYWl1QkVNOEJmV056STFNU2dCMzA1RnlPTVhBTGlDZUd2S0Ytclp4NU1ONDctQVFRNGxlYk1WdDROS0l2c2RhRkF0RHoySTZqTEYybXVpd1UwMFpjM0I0ZmFHdDFVaE5rNUI0VEJXV042LWk2aUJsTXZIcVN3WGNSSzJIc2otNA?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-10",
    "event": "Is Nvidia Stock Still a Good Buy at $220? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNSjMyZk8zbnF1NFFtdFV1Q2I4S0ZERjYwMDN0SUZwY000eVNrci16NlNNczdETTc5MTlqYURTZmlXSGRoaVppUm9sZHEzcEVzTVh5Z3R2UHUzY2U2OFltSEJ3SXVPM0IwQ0R1XzR5OW9adC1WcTFfbjNUT2RYemxIZ2NJUG1oZEd2WjVmVDBIQ18wa3Z5di0w?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-11",
    "event": "NVDA Stock Eyes Worst First Half Since 2022: Retail Patience Wears Thin As Board Member Trims Stake For Third Time This Year - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgJBVV95cUxORzhNMG5sbTZPeXlsLUFWb0xrc05MRGNQcW9aS3VrOTF5RFRYdFRuQkZvRFFFdkdyNzNiaGNodWdJdjJHZE9oYUNnUWxoclN6LTU4YTRIRnR6NnZKRDV5ZVVSWWJPdGNsdFZZM01rZ1V2ajlPcTFHczdBUElKSUtJbEptTFc5V1JKQXZMbHpkeWxDazRpZGc3eHhDVkxuSXN0OE51QmI3bU1FN2pWMEFVODlFT2Q5SVVrXzNQQktFSjR1dkRFWlBpRlF4V2JuZW1rSFZtSU9sWnU5bXBRaDJxbjVGN3M2cGg4dG5SVWY4d2h6SENzbGlkdGk2dUVvWmtDRmZudmVhOHlmeTNGU0F0S2NWNFdSZw?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Norway's Wealth Fund Reveals $1.2 Billion SpaceX Stake",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The world's largest sovereign wealth fund also posted a record $184 billion first-half profit....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/norways-wealth-fund-reveals-1-163846788.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Tesla And BYD Are Reframing An Age Old Stock Market Question",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Tesla is betting billions that software eats the car business while BYD bets the factory floor never goes out of style. ...",
    "url": "https://247wallst.com/investing/2026/08/12/tesla-and-byd-are-reframing-an-age-old-stock-market-question/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Tesla wants to build a $10B solar factory in Texas",
    "type": "NEWS",
    "remark": "News via TechCrunch — Tesla wants to build a massive solar factory in Texas, but first it wants the state to chip in to defray the costs....",
    "url": "https://finance.yahoo.com/energy/articles/tesla-wants-build-10b-solar-161831178.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Tesla Just Keeps Crashing: One of Wall Street’s Most Outspoken Names Sees 80% Gains Anyway",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Tesla's earnings just delivered a brutal profit shock, yet one of Wall Street's loudest voices is calling for 80% gains ...",
    "url": "https://247wallst.com/investing/2026/08/12/tesla-just-keeps-crashing-one-of-wall-streets-most-outspoken-names-sees-80-gains-anyway/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Tesla’s China Numbers Show It Is On The Road To Comeback",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Tesla's stock has cratered 26% this year while rivals circle, but a fresh wave of data from the world's largest car mark...",
    "url": "https://247wallst.com/investing/2026/08/12/teslas-china-numbers-show-it-is-on-the-road-to-comeback/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Waymo’s Wreck Crashes Its Driverless Car Lead",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Waymo dominates the driverless car race by nearly every measure, but a string of high-profile incidents in San Francisco...",
    "url": "https://247wallst.com/investing/2026/08/12/waymos-wreck-crashes-its-driverless-car-lead/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Tesla (TSLA) Stock Looks Rich On Sales But Strong On 5 Year Returns",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Tesla stock has delivered a strong 50.0% return over the past 5 years, yet current checks flag it as expensive, with a l...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/tesla-tsla-stock-looks-rich-150957436.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "How SpaceX's AI Buildout Is Boosting Tesla Megapack Sales",
    "type": "NEWS",
    "remark": "News via Zacks — SPCX's surging Megapack purchases are boosting TSLA's energy business as AI power needs drive demand for fast-response b...",
    "url": "https://finance.yahoo.com/technology/ai/articles/spacexs-ai-buildout-boosting-tesla-150400729.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Great News For Tesla Stock Fans",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/great-news-tesla-stock-fans-144232257.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Tesla's Japan Sales Surging: Can Its Delivery Network Keep Up?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/teslas-japan-sales-surging-delivery-145400822.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Why Is General Motors Exiting Its Indiana Battery Joint Venture?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-general-motors-exiting-indiana-145200443.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-11",
    "event": "TSLA Stock Recovers To Close Nearly 2% Higher As SpaceX IPO Debuts - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNdllKT3F6R3RYYjJIQ1JwejV3MlVzZnZ1OGt5THEtZTRhREtBV0VxNEUzVGVlMDkyRzBxdGd0QlFBRVVOb1BteWVvX1NFUjJEeC1uQnp5eWxtbG1VQkp5bWpmTzM4eTdKQlV0T0xZVm5YdGI5bHFfQWtDNVlGVXFrZ3VhcVVOM2R5QXg2TW5ERF9GWjBwbFNCTEtiOFBoSUZQQmRFMVIwRFJlRzJONl9iNUp1dHh6SmQybkZpWA?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Most Analysts Still Aren’t Bullish on Tesla Stock, Even After Recent Selloff. Here's Why. - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNZThQeU02QWNOQnJGWWk5Z1lWZFlxWlBYUFpBSHJFTUVPOXhlTlVpMFhLUjdCSEVXOEl4OHhxRWc2aVc0VXVuczVwd3FQNEtTZ2J5Qm5VZHpfdi1hWE9LYzVGVEhZUWg0OTdyTEZtVUpfNWZYbWx1d2cwY3VodFZSRU1KZ1lzem5VOW9fX3BYVGdZVTNlTWc?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Tesla Stock Forecast: How Much Will TSLA Stock Be Worth in 2030? Can It Hit $3,000? - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxNVFZibUlDdy02NU1WeTVUWEdZZzAtc1pOLW5HRFgyN2JQYmxIMlRhdTNFZHZUaU9zTFlSTllicUY4dlpCYTFlVXBBN00yeVpRUGVWRl93d3dQQkktRGZCc2lHVnpxUG5RbHFpcy14ZkdvRFVyWGxIajJUTHRSNDJ3c1dQeUxKS0ZaMDZtRlBHd2NEUG9CM01vS2ZhQVpubHo2WW1mYVdCRV8yUUhldWVZWE5MamY4SHBNVTdxM0FONFhqWlZvRXZkUWNZcXk0Q3p2WmRYZzY5RmxGMGI2VGFIZzlQQlE1VngxU0J5X3p5R3ptRDA?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Diversified Management Inc. Lowers Stock Holdings in Tesla, Inc. $TSLA - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQbWZtRVVfZUhfR2RwRFVnMV9oanl0NXlMM0JaYjM2bVhCMl9FYkIyazVlUENyRHBRTWV0ZnYya19FZVg3M3VFMEg5ZUZrWTN2eXcydVpiMkZBYk5ZNldxUXpUS1BKUUd4STBUTnVkdU50LUFJNUJHek81N2tKSFZQNXRoTlRpRXdiazJwZVpOUjNKbWU4THNBaVlJRU5LMVFOd0xkZHVXX3ZYVW1TUlBpOHRxdTVDQllKTnNXeFZndmM1SWV4S3c?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Tesla's Japan Sales Surging: Can Its Delivery Network Keep Up? - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxOeUh2QmxaMWltc1R4QVN4UUJQN3YxcTctNGJIWlY3WVZEcjZ5eTZrOGN6OWRLQ3lGRENOYUVtNUxPYmlobnJ1QVdPMnNVV0o5SndlaTMyOTVuY19RQVBBSlI1eDYtZ1BlRm1vTEVTNnlVTVVtRXlRbjA2RDM1Z0EzU2NveDRNUlUwZ2hCVDY4MmpRQ01tNk1fS2tNcHNhX2l6NVBiNTFCVFpDVTUtdGhWU3ZlX2lFVWMtSzZfZEoxOGw5LUFBMmFDYnlxYmxKMHEyY0xWdjhKQlZKQzN5?oc=5"
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
    "date": "2026-08-06",
    "event": "The Debates That Matter For TSLA Stock - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxOSUhtME9vNm9rU3dTR3pWVTRIWlR6WjluLWhKQUdlc0t2eWtOckxqNmRLM2pWTUZkTEhiZ1lPTEVkLTF4SnlBNEViRVlIMlBmdHkyZ2dnMFdzQ0xJY0JTa2Z0MmxKbmpCbjR4RVpHNnFFYlBwMG44TmlWVk5UbnZjUFB6Rjc2UFB1aVRVeTY3bS1keEpIOXZ1am02dDk5Smgw?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-11",
    "event": "TSLA Stock On Track For Worst Week In A Year On Fresh Roadster Delay As Musk’s April Promise Fades - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxOTXpzV2drdVRITXRXaFBEdGsxdFdTR2FSazBFMDJKWUJ4MF8tWWNZQnEwT2tpYXh5cmFEOUZGemN2dUV0ZTFjbjZHNDdXZ005bXV6UlVkVzNJc05Yc0t0Ri0ySzBCOXItVTI5eGZUTFRMTm10RXlLMkhFZWpnbjNvSkVoSnN0V09XaV9ucVNfeWdLWkIzQXNHWDJBZXRsNktwcl80bE40a3g2aS1ibEZwMEJodmlqYTd4UmFGdldSNTdOeElValkwWjU4YWpWNnY0YnQ4VzE1aHRzaTJIMUZqX29CaktiQUxYU2NyZFdoWQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "Wall Street’s Favorite Tesla Rumor Could Unlock $824 Billion Pay Day For Elon Musk - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQVGQ5YXhyUGg1Mjh4M1ozYWloOXNGeEFkaWMwaHlLZlI3YXlaQTZyVThoRXJnSEc5dmVnbHhMLUJqZEkyUS1Kd3JMSnhIX1ctNS10Q3hERjhjX0VYSlpSZkdLbmU0RFh0aTFHYkFudVRvbTV4VU9Eb3YxdTB5WDZ3U01LLXRlOHhjTmpycWY1alBOaHJxV29jYnB4VXV2UQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-11",
    "event": "TSLA Stock Dips — Tesla Gears Up To Ramp European Production To 7,500 Vehicles Per Week Amid FSD Push - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxPX3VRbktRSDB6U0syUHJxTTg4Z1FHNnZFRGpaVXlVdmkwRTlHLUxEZzlHZ0Y3V0E5MUhVVnhfS1NCellhd2taVWVGclFnb3JoVU5vUEV6TmtpejR5c0J4Nko3QUJFaUs3VUpvMzFlZkk4aEF3MGdIeFJ3b3R5MnotcmpKVzYyTjA1dXgtNkNtSng0NXJpbmVSR2VhWWJDUEhrWHJocTFxTXVjSzFGSzVzeU9Id2pzSVFuLVljYTNmRVVGbVZUaGpOOUtIcmxiMnpqakVKVVY5cG5SMHNwbEZzVTU0MFJxOWJiMjVhRmNzOTFMY0Jy?oc=5"
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
    "date": "2026-08-11",
    "event": "Tesla Wins Denmark Green Light For FSD Expansion — But TSLA Stock Slips - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNalFQVWYtc0ZkVzRtaDNIV1ZqWmpfYlNBcnFqS0xNNHd5NkxLMUFsTUEtbGh0ZnNtTlB1NGFxN2E5eHFzVE0zT3RBQldSOHVLNXZNVzlyd21CNVBwZUhrdkNtMU9ENGU5ZGYtbWlzM192am0tZmdtUlJscm8yanhFbS1rMnJpRHdlT3lqY2dpZUVxb1UzaUU2clc2SzNidmhkREpiNTFqRG4tRWduODJERU1B?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-11",
    "event": "TSLA Stock Breaks Losing Streak On Tesla’s 10-Million Vehicle Feat - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxPNmVhWTVKZjdlX0czX3paaXV0WnlLbjkyekhSeGdod3FpQzRxdm1mdFRuaThPMXdLdXdxYVJUa3ROWXlOajRRSlVSVnpad0ZqaFpKWVpJTTZkTWZoa3FZQ3hDSFRtOVV1amNpUFNIa1lpVGxsandRSzVPMktNSmxTbEd3a2lwbTlCa3FXdHRCOHZraDdvdWRxXzhKc1J6eUh0aXI4OWJob184a241TkctZnJqZkxUd1B6WkxLZnZZQjRLWGQwUkxKZ0Rn?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-11",
    "event": "TSLA Stock Slips Premarket: Musk Joins Trump’s China Trip As FSD Delays Threaten Tesla’s Biggest Factory - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQVHl5OGJHalFWTEM0d0l2LXRjLVJ6QTVjV0t3a3J6YkxkMF9fT2ZGU2VkNGl2NGpEc0NxMjV0SkRHMDhQUWJVTXZUOTVFeVdfb1I4dDBzV25yNWc2UlRsaGpIb1h0dXZIcVMyUXNQZ0FUd01vMmVPQmd2NDBkMy0tV2E1TGs2emp0Xy1iMHA0Z21ISDNpSTFOQzRKRjZGSGhZQ21vY2R0dzZfbEVnOWh4VzhtRnVoWnRJRXMwblQ0VFdJRzVKWnAyOExR?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-11",
    "event": "TSLA Stock Breaks Losing Streak: Fund Manager Says Autonomy Beats Rich Valuation - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxPMzdOTXQ1SEJfMnVDYlplYjBHQV9SeUQ5UjFnS3BRWDhSbUNzZWhiQlVtWE5WVm9OWlNxdWlsUzk2LXh5ajhXblU1aHpFdG5RRUZ6LThsWHd1Wmc0MmNUQzdxTFJ2cVhoR01scFE2VHNabzNGQ09fTm9SMmFfWExjTFM2cnJTMHJ6ZzUtNXh3SW42dGpwbU1xeXZuMDk0VEItLWFUWHJTYU9VWUNFbl9yb1NRS0xsNWlNcVFNaDh6QzVPOFEzWGIwaThtTVgzVXgzTVItcTBfS0NUNnM?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-11",
    "event": "TSLA Stock: Major Roadblock For Tesla FSD As Sweden Reportedly Opposes EU-Wide Approval - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQcmF6U2VXMzhpLWJsUU1DdzgzTkZ5UlpvOFpYcm5FQXlwREN1RnNMMFNDVXZIZm4wNjRRaC1vV05uaEFqTkVWZXNWNEpPZk9BM01wdW52d0ZpMkpBUk1zVnVQaURlME5aelNqcy02cXJlMkRLWm1uRUEzbjlNXzVoNmo5ZXFZLVFaQ1RwcUFvNzdNdGlWS0RuQU16dkUySm12WjltY1ZSdE12VW9pdmVjVkRuRjRjODljZVR5NG5jNVg5YXUxb2VWUHhLWlBUS2RhRlNiXzYwOHR1R3NSYVE1STQtRFk?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-12",
    "event": "TSLA Stock Slips After-Hours: Waymo's Massive Robotaxi Lead Casts New Shadow Over Tesla's FSD Push - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQMU9XUWdfQ05IbC1DcVdnTjVtcldQazlLT1AycXdaNUFYT2pXSmw3TDhSY3N0OHRwV1Qzc09NTTdMaE8zYmFxQ0g3SUxQVEswMXlmRS1sdmt4Q0NJazluWWR6ay0wdmZYOHAxN2JRX282YjNENjN3alp5d1Q2b21feFFFUXRtSWdPUjZWTjRTbE15QkxfS0JqcW1kSjRjY1p6eTVxTjJMSmxTeEJDNWVfd2ZrVQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-11",
    "event": "TSLA Stock Sinks As SpaceX IPO Nears — Analyst Says Investors Are Selling Tesla To Catch A Day-1 Pop In Next Musk Trade - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPOWhTS3VHemxZNE92eHVGb0lhLW56UE5PaWJBblZkVzJCX21LR0hJZEN3bGpVRHoyQWRrUW9YekJGeGNmR0FncU5pUmEzWHBLWkxOVUNQRWhVcXNjR25MRkhGY21nSlQ2SmRxWWRaZFVKdWRSVU9HdU1NM25NUUtrOU1ZazNwMWh4dnc4TjIwS1hvQUgxOG5CanI2S1ptZGFFWTRFODlBVTg2WWtPSkRmbzJMS1pJRkF2VTNn?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-10",
    "event": "TSLA Stock In Focus: Could Optimus Be The Missing Link Between Tesla And SpaceX? - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPMFRNRTlQa1FMUUhtWi12YVVXYUZJanRXZnJFVU96V2s2US04cnlBNFk1NmdhN2piNzE1M0NBczNQTEZTdDNVSVpZUXhvX2ZLOWxaSjhWWW5MRGxRTGRMSU5veE50MzFjeDBhVjZEVE5kb2l3bXljSDFFY0FJV1FLMzk5bmxlVVlQZUl2bVR2cm5EZFUtZFV2bU9xd0oyOHdCbF9JU1RrN0x1eWlSUm1JZGZON1pSMXNiNGRJd25RZkVaVDQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-07",
    "event": "TSLA Stock Jumps After Strong China EV Sales In April Bucks Q1’s Global Downturn Trend - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxOcl9MaktMQ0xHb2MzMUh1RERkODNaaHI0UVRscVE0dmJ2Q0lHay1raHhDM29fNmtkekRlU1doekhJM0NLakdNMmV3dkZaanlGN193QnQyZlNEbGJXUHFrQUdlOEhHdVFxdVRQa1h2c09sNDdENGM0Y1dmT282TW1RX3NDOWNjT0JBbzJ1aVVzbWVIUmtxZGhuMUMwMlhxaUZ3bWRnY05qRE5PbnBRdk10NkVTQ01OczJ5a3RpcDM3MmhsSnRZMVlyNHE0YThXWXFWc2p0M25Dc1NhZ3hSRlVEVzRR?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-08",
    "event": "Tesla Stock (TSLA) Opinions on Year-to-Date Performance and Analyst Upgrades - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPZG5kcFl5OW82em1Id0FjRHRTTTYtVG16SUhiTGd6NjRQT0dyWU5xUUVVc0RaMm9KbW1IZUU5VE5PYlRiVVJQaklDLTk1TkhOeU1uSHZNVndab2FiYkpSdVhkVW5hdzg0Nm81bktiWDQ5cG0xanZqXzR3OThnUHliaHZlVVRZWi1rcVNTZklXT1JIZHhuNmotbTlKMzEtZkplaVdjVlM4Ympta3BEZnl6SC1fcw?oc=5"
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
    "date": "2026-07-29",
    "event": "Tesla (TSLA) Stock Still Trades At A Premium On Sales Despite Weaker Earnings - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOWVZLQUxTZFg0RUhRN2NDN3o3N3lRSzF1VzNuYkx4TlpHVEVtblVlLW1kY3BSWE9jX1FSdnhDcXMwSEtHSkRDcGRfNTVrdWdDbnZscGwwYk1OTGtYOU5VMDRUOTNzYjlZdmZmY2hMUnhqN012aWUwWE5GVGFMRW1UWjVGc2JUaFhVZlg4eUZ2Rkw0bVdmUnp5U1FB?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-11",
    "event": "TSLA Stock Slips Overnight: SpaceX IPO Hype Is Starting To Look Like Amazon's Dot-Com Bubble Peak In 2000, Warns Ex-Lehman Trader - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOOGRHcHIzZkdkc09kSHRhZjFHRDlhNDlWaDl3SklkZ3IxNFd1UnJBdkQ4ZlhUUTQwWHZkYWh3eWtfNUJkU0VRVWdfRUp4dWNleXBZQVBJSDFGNmhKX2V5MmlVajk1UjA1QzhyaWZfajF3dVhGejU5VEljR3lLT1E1LU5idVA1RjRkdFlDR2N0RG5lOEZnaWNWTzlrUnkzUzdHMEhkQ0J6UGlFMkU?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-10",
    "event": "Tesla Stock’s Deepest Fall Was Worse Than Its Worst Market Crash - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNVW1jaHNGWGJxZm1wU1JCc3NTbzBqTUg4dE9DRU54YjFVRTZfNThKOW9acjhaTHdwSHhiMFBNMW5pRDA1dVVIOGRxZTBjRGNwLWJqWTdzSXdLMkxNc0RvSG93T1otcE5wcExZNzJxMmh0bHJfbDQyLWs3UXVNR3ZnREtpekFqWk1lRXdNc1pRbGxDMTUyN3dKbjZOelZ2MUlDeDJWQTVqSE05MW9QUl9CRGZlOXJqSDUyWFpGUGp6NGFwUQ?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "Archer Aviation (ACHR) Jumped, So What Is Behind The Latest Attention?",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Archer Aviation (ACHR) has drawn fresh attention after reporting second quarter 2026 results that included US$5 million ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/archer-aviation-achr-jumped-behind-181223318.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "SpaceX Supplier Tumbles After First Earnings Report Since IPO",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Applied Aerospace & Defense fell about 10% on Wednesday after its first earnings report since going public in June....",
    "url": "https://www.investors.com/news/spacex-applied-aerospace-defense-space-industry-earnings/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "Archer Aviation Is Teaming Up With Boeing. Time to Buy the Dip?",
    "type": "NEWS",
    "remark": "News via Motley Fool — Archer and Boeing just announced a blockbuster deal, and it could have a huge effect on Archer's long-term growth....",
    "url": "https://www.fool.com/investing/2026/08/12/archer-aviation-is-teaming-up-with-boeing-time-to/"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "Stock Of The Day: Boeing, Airbus Supplier Soars 15% On Earnings, Flashing Buy Signals",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Boeing and Airbus supplier Astronics surged Wednesday on strong earnings, flashing buy signals. The stock has doubled in...",
    "url": "https://www.investors.com/research/ibd-stock-of-the-day/boeing-supplier-astronics-stock-earnings-buy-signals/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "Archer Aviation Is Buying The Revenue Its Own Quarter Could Not Produce",
    "type": "NEWS",
    "remark": "News via Trefis — Archer's post-earnings rally was driven by a dual catalyst: an all-stock acquisition of three Boeing units and a Q2 reve...",
    "url": "https://www.trefis.com/articles/611156/archer-aviation-is-buying-the-revenue-its-own-quarter-could-not-produce/2026-08-12"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "Zacks Investment Ideas feature highlights: Archer Aviation, Boeing, Palantir, NVIDIA, SpaceX and United Airlines",
    "type": "NEWS",
    "remark": "News via Zacks — Archer Aviation's Boeing deal, defense partnerships and regulatory progress could accelerate its push into air taxis and...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/zacks-investment-ideas-feature-highlights-140700637.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "ACHR Stock Gains 49.2% in a Month: Is There More Upside Ahead?",
    "type": "NEWS",
    "remark": "News via Zacks — Archer Aviation's 49.2% rally reflects Midnight's commercialization progress, expanding production and advances in auton...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/achr-stock-gains-49-2-140400379.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "Boeing Stock Rises 7.4% YTD: Can the Turnaround Gain Momentum?",
    "type": "NEWS",
    "remark": "News via Zacks — BA's rising deliveries, defense milestones and record backlog support growth, but production delays and 777X issues clou...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/boeing-stock-rises-7-4-130200131.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "NIO Stock Falls as Blackrock Slashes Stake in EV Maker",
    "type": "NEWS",
    "remark": "News via Barchart — Nio stock sinks as BlackRock cuts its stake by 12%. Here’s what that really means for NIO shares....",
    "url": "https://www.barchart.com/story/news/3802577/nio-stock-falls-as-blackrock-slashes-stake-in-ev-maker"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "China's C919 jet makes first international commercial flight",
    "type": "NEWS",
    "remark": "News via AFP — China's homegrown C919 jet completed its first international commercial flight on Wednesday, a symbolic step towards Bei...",
    "url": "https://finance.yahoo.com/technology/articles/chinas-c919-jet-makes-first-094140599.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "New Boeing deal gives Archer something rivals don't have",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/investing/stocks/archer-aviation-boeing-deal-insitu-wisk-defense-revenue-achr?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "An 8.8% Income On LMT Stock, For Giving Up Gains Above 9.4%",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/610955/an-8-8-income-on-lmt-stock-for-giving-up-gains-above-9-4/2026-08-11?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "Argus Just Upgraded Boeing Stock. Here's Why.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.barchart.com/story/news/3788744/argus-just-upgraded-boeing-stock-here-s-why?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "Boeing’s Archer deal allows focus on core business, Bank of America says",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.proactiveinvestors.com/companies/news/1096902/boeing-s-archer-deal-allows-focus-on-core-business-bank-of-america-says-1096902.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "The Boeing Company (BA) vs. Southwest Airlines Co. (LUV): A Long-Delayed Plane Finally Clears the Runway",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/boeing-company-ba-vs-southwest-194820074.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "Archer Jumps 14% on Boeing Deal",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/archer-jumps-14-boeing-deal-190640430.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "Joby Aviation Stock Is Priced For An Aircraft That Has Yet To Fly A Passenger",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/611004/joby-aviation-stock-is-priced-for-an-aircraft-that-has-yet-to-fly-a-passenger/2026-08-11?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "Archer Aviation: Ready for Takeoff?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/archer-aviation-ready-takeoff-184400772.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "Move Over, GE Aerospace: This Aerospace Stock Deserves Your Attention Instead",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/11/move-over-hot-ticker-this-aerospace-stock-deserves/?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "Why Archer Aviation Stock Just Jumped 9%",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/11/why-archer-aviation-stock-just-jumped-10/?.tsrc=rss"
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
    "date": "2026-07-24",
    "event": "Boeing (BA) Stock May Be Fully Priced Following Its 12% Slide - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQZUpnM2d4Zy1Ob2RSN044SkxBTW1YRXBOa2puSlhOaC1DSTJRQndVelZXcDF3SHM4NVpYd2pTUFlJMEJOa0JvQWRTcmd2Y055T3FpZVd5eXNjcEJoZDFHa09wTTZ6bDc3V3h6SDZQSjU5VnJ4R3VfR1d3N3MybFp3eWk2UmR4OVFCMzNhcGtCcUxtLTNK?oc=5"
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
    "date": "2026-08-11",
    "event": "BA Stock Jumps 7% After Rare Double Upgrade — FAA's Approval Of Boeing’s 737 MAX 7 Adds To Bullish Momentum - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxOWURta290N0FWV1VMbno0bFN2c2ZqX3dWckxJOGQ4b2YyUEtNdTRlUHhvR1JaclZURmU3Y1hkY3hjT0RZTkxrdkFXUnQ5cnNYb29XY0U0SUhyTE9GdUJCQ3JOdkxGNC1SdmxPUnpwNTVud2ZxQnFSYTItWHEzZ2tJQUlpVjZqY29rN09EWkV0SDh1RWVXbjBaRGRjZDBGQmlMNHg5cGpqSjZxMzRBWHlCTEk5cDI3cFY5RDJ1RHhCTWJpZGh1Vl93WDdmV0JtRnM?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-07",
    "event": "Boeing (BA) Stock Could Be 41% Undervalued As MAX 7 Wins Certification - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNRU91dXZHcVE3bDA1U1Z1bzh0SkhpSTRBOXBJS3Bhd21NWXJpTmNSSHlKRXVwSWlTa2xzdVYwdGo0ekpHbjEtdGtQcW5NaXdtR19KN1h0S3FDU3psU1QzelYzTGRnbWZqY3BqeFVEbkktczVRVDEyUm16NmFQM29YS1BjdkFseUJXYjhCYTF5Y29CTmJTNEVFbkp6Y3pEbEJocl9ZSy1NdVJONkJEa0h4NWtrUlFHdUQ5SVRDYm44dGZRRnAy0gHKAUFVX3lxTE9Mdjg1UHhUU2ZJV1ZQTkc4VUFmX3FvX3B0dWtSdjQ1SWxSOW1XX3NPRDhHWnF0cl9jcDlEOXNocjJ6NG8tT3BKRnZ1TnpQMUhEcFBSblZkeV9CbWVuWlNhTkdmVjFNNTNWZktqaks4R1huRVJXU3hCeGV0ZXYybDJqWktpTW9PRFVPWGFOSTNvcENta1dHanhRQ0VVV1MyNkE0MV9qYzFsNml3RzUtOXhSQUZMVjVnRDU1UmxnR0k1bVd3VUxleW53RGc?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "BAE Systems (LON:BA) Stock Price Expected to Rise, Deutsche Bank Aktiengesellschaft Analyst Says - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxPMFJaTm5GOFFqckstLTk2WnVTZklIbW85MkNXVDR1UW5CWkNNVFhNYWFzYkY0aGJxdE80Mk9OMFpvZlF3a1phaHpaUnZVU2F6akh3V2pjMHlXaE92MW1TNHVPM0M4dlp2VktSSXpwdDRxTVVrOHhWSnNZTkFHNFlWUVlhazB3VUxBVXpncjVhdVpKWXp0Ry1UdXlMUU1wMUVkSUdlZVR4TDBpZ0JFUjUtYTNCamtCQjhaaW41Wm5DOXZrUW4xZm4yYmRURkR2cDZlR0oyN1pVUDZKOUhqaDRN?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-09",
    "event": "BA 260807 310.00P (BA260807P310000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygJBVV95cUxNdm4tRnl4QjVnWnloaHFRdm5oM0ZIV1ZqVWdoOXBsS2FJYkpoSjV1bGR3NTlNeHpPLS1wUlBidXZTcUlpdjh6QlRjU1V5b2VGSXRKWWw2dlZ3cGdEbGhTNkl4SXBWQ2ctNlcyaHNhNS02djFWQ0JhcWdON0pabUlWWnNsSHlPTEVzbWlTLVd6ak9EcFdVUmVzNExaVHBISWphaERtMTk2MXNLNzJISHJ0OUExNm9ZU3RTYVR6VmJ0M3ZieEpLU1BKZU5raWt0eGgtWVN6bDEyWllUb1RxbUhfcC0wQzU5YXR6Tm45UXhaYkprY1VnTG5yUkNlbl9YVFdPdnE5emUyUUhlU25xakJPY2QwSVBUN0ZvNnk5VVpuWDkyRjA3Um5Ka0UwX0RMWGZrMEFua05HbE1KY3BfdXlENWpVZm8tSV9ZU2c?oc=5"
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
    "date": "2026-08-11",
    "event": "Boeing Stock Gains As Singapore Airlines, Qantas Reportedly Eye Major Wide-Body Jet Orders - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxOT016Wm9VQkhhMFNFak05cUd5dEU5ck9qVWhBVHQ1clJKcjlvZlk3WG5GZ2NHeFBxMmJNaDNfY1AxLXM2cjZ2dk93djJFbW5hTlppT0JLdFoxSGN1Vng1OGNKZ0ktNFFFQlMzNkdGdUpzUzJ2aGRIbDVaV3A4c091TkdvNlFFekZGZFQ3NGhWbUhZdDQ1OHpaMDFoc1dPQVg0d3JZTndFNW00akpQQzluUUJSeUhzcC1EWV9YajNTLUZvTWlXOTUwUXJjT181bmxqRHVZWHFPQy0tUThuZnVCMldmUEZabmJj?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-08",
    "event": "$BA stock rose 8% this week. Here's what we see in our data. - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNVmxkamlpV2pQaThNbjZ0blJKY3NlZXlHVWlxRmswUklPYnRQNXJWSkR5WTZfWkhjQ3JIemh0MEVlbjUxQTBsNk5TcWFkTGR2Q2h6Mk84RldHSWVTNUE4aEF1ZjM5SHFHT19hb2VuOVB5bXpZZm1iOFVRY21uNGVxMnVqSm81dXl3S2tGSlBWeXdhSTVoM093blFIZFFzU0k?oc=5"
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
    "date": "2026-08-09",
    "event": "BA 260807 212.50P (BA260807P212500) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygJBVV95cUxQSWlGbnFwYjdPZHc5SDI4N3RmbHg5STNuZ2h1R2VpVGNUdnJyZThHTnNmM2dQbEIxcklZVGg5eXNwZ1loRkdmNjBENDdLYUU5aEJLR1BndndmNG5zYXQ5VzQyY05sSzg4QVEtTEtKbXdPMjdBVHFYYkw3SGFkal9HbEg2Y01zaUQxUEFsNzZVeUJyakFTcXdSbFF5ci1FYmR4dGhJbTJmZy1XVGh4SG5mWGFsSi1Xb3loM1dLeDdKZDFJTF82em5MbmphdGpyZVAxR05HOEJIb1ZwZHlyREI2a19aUzNCTEFoYmgyV1Y4SENJTjIyUGdZM2dDWDNFUHo1U3k2eFp0SVZlaWo5UGRPZjdCMkZ3ZlBDVTF1U1NXdGNSMWEteTlmZzY2X3JsS3FCNm5nemt6alM4eE9ENEVvODFXbEJaZzlmN3c?oc=5"
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
    "date": "2026-06-29",
    "event": "Boeing (BA) Stock Drops Despite Market Gains: Important Facts to Note - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOUTBlTms2VlhMNzg3Wk1SQWZsdHppZFVwSTl5eko2WlhXa3pEQmpsQm84bmt4VzdhdlVVRmpQR2laN2UtdUZtYzVSWnVSRzQ4Y2NYV1U4MnE0TnpQWDhYT2dRbmZTVjJhN3BTaGdLSUQtcVE5NWZDaUZuMjRiMmdqdTRFRnNWRjdSNXI2V0FmWm9sRkJxUUE2UVRn?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-10",
    "event": "ACHR Stock Rocketed Over 21% In Pre-Market Today — What’s The Boeing Connection? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQSkZMZExrWml1d0NPSy1mNFNkMWhpSHN2bW8yVlRuR25fTDFBOTdrczZuTVI3aGx1Yzk0eHFzUGlYT2pMd2F3LUh4N19EMVpDMnV3Tnc4amItSERyZmxCUjYtTFI4UXlhZTlCZzRPN0VjUXNKRXAtRzlzUjhaVmEwRHBXTzVKZzdwYkYtQ2ZmQWNGNEhjY04w?oc=5"
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
    "date": "2026-08-09",
    "event": "BA 260807 227.50P (BA260807P227500) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE9ieW5XUENsM3A1T1ZJN3pVdXA0d3I5dWFsem9weUtlck1LaXBSUG9mak1xdG9IYm1KcTJFMWZOSUZMQUJvZjhfUVp2Sk94ZW1fRGJiV2hUMDB0WDk2VUE?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-10",
    "event": "(L16A4.BA) stock price, news, quote and history - Yahoo Finance UK",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE4weThvUkZlWWtWNWlTbEsxZ1ZLak1PNWlTaHl0UnpEMk9yaEtLREVmTV9FbElFNkE0dUt5X0Z5dkNLX3RDczRXSFk2T1RNN1d2RGpDZXpPbDM0QkdpUHFrcUcwTW8?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-10",
    "event": "BA 260807 210.00P (BA260807P210000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiXkFVX3lxTE5kOHd5RG82NmNBTjRnMXlvNDdya2x1alh0M2VRSmVlb1FTWFJ1QUVSUXBJVzNSTWNJeW80M3JPdE5hTFN0bW85LTUzNkZVejFGV3NIY0h2WWhfeldOZ3c?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-07",
    "event": "BA Stock Edges Higher After Hours — Boeing’s 737 MAX 7 Reportedly Nears Key FAA Milestone After Long Delays - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxPOThTek1ib1U0bVY1Z1E1WDZMM1E3NFE3Mnozc3pEV3JoNFdfdEJ5bkhOc0RCY3o3Z0FfQ1NpMzdkUTlGVzNtR1h2cGRsMnk1dGZMeFI2dVFLU1pReHcwYWtNQ0hUZ0w3Z0lXZmZjUFZyRDVqeE1XVlo4NUdSQVRQcXpodVFYbjBGNUY2eGZtVVVlNjUxemhSSVE0YTNSekFTR0FPNEJ4M25vZWlGNWV2NE9xY0k4ZDZRQnlhdmpkellGZzdNdGFVeXVwX0F2c1NnZy14ZXdUVmlma2RkbGpB?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-12",
    "event": "Boeing (BA) Reshapes Its Portfolio With Subsidiary Transfer And Archer Stake - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNN0R6LXdtRHBPc1RKRTcxZGZEejFrVFZkTzNFdjV6VEFONkhxMDdjSTZ3MWRnWEY3d0t3elZJN0p0aWFFcHo0OGgtN1JEOWtDVTRuT0NlOUc2OFpWclFQaWJzQ1RrUllTNVIxczZMVU9Tc0FsSkt5bUVubjdEZjF3N1l5Y0tKdW5Fam80aV9mMHN4UzhoNlgtTkdBZlpudFNfSDktWjBzUGRQR0ZaMG9kdk4zWmoxVHY3RFR0aUFPNDBCZUk10gHKAUFVX3lxTE91ZHl4b19YelNjcmhfdFZmM0ZER05qbVpRV0h4TUtiXzV4eEtMR0kwMGlDakV3SmtLTjFXOEozdllILXJRVTBuLU1RSDhtYnFrZElLTjBueERRVTZOX0FHU1pVMUNHbjhvQVhzWnpkczNGWEVFNzdSMUhBalo1NXBWdGRvTUtBMXE2UmJYdjBDZ2pBcWxPSG0zNVJGcXkwcTY5MkJ5MGF1YUo5Y1JIUFlqZVlxLWVwWXJ0YnlpWGJJZlZ5bi0zZ0RsR3c?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-11",
    "event": "What Is Boeing (BA) Signaling By Trading Three Units For Equity? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNZ2RSeFVjV2pNUUhnTjVadV9BcW02TzNqX1prY29hWjFLM1VXd1NOOUl1XzgySXRERjBqMmI4S2d5RTRPNFZTMzY3djFPSGtsLTR6TDl4dmRHSy1sRHhiVnN6OFhkZ2JPWFE5LUtBcXpjUU9RdFptZ3Zxb1ljWUZKYlNNVWNfcVFJTm5FczVFMG1LVXRpNnFMQ0pmMUQ0V1E?oc=5"
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
    "date": "2026-08-06",
    "event": "Fund Update: New $65.1M $BA Stock Position Opened by IMC-Chicago, LLC - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQYmRFM18zSzBERktwOFR1YTdUc2ZvdjF0dnhQMmxPamNZRy1MUnJLZnFXRmpHcVo3cy0zMEVwWlM1M19iQ2lXNDJfTWtoQW9Tb0pOS1ZEUUI3OVh0LUJEbzhnOGZLazJoQlF3a2xGdzFzdmVONHowRFYxYjFNZEhGdC04aHIwcHJ3Qi1lM0ZvYy1FckFMMHc?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Google launches Pixel 11 smartphone line, including Pixel 11 Pro Fold, as Apple preps foldable iPhone",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — Google debuted its Pixel 11 line of smartphones on Wednesday....",
    "url": "https://finance.yahoo.com/technology/article/google-launches-pixel-11-smartphone-line-including-pixel-11-pro-fold-as-apple-preps-foldable-iphone-140000624.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Alphabet stock slides as Google hikes Pixel 11 prices",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Google raises Pixel 11 prices by $100 as rising memory costs put pressure on smartphone makers...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/alphabet-stock-slides-google-hikes-171719825.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Alphabet Stock Slips as Australia Expands News-Payment Rules",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Google could face a levy based on Australian advertising revenue unless it signs agreements with more eligible publisher...",
    "url": "https://finance.yahoo.com/media-advertising/articles/alphabet-stock-slips-australia-expands-170837283.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Cathie Wood has a new demand for OpenAI, Anthropic and Google",
    "type": "NEWS",
    "remark": "News via TheStreet — Cathie Wood is connecting two of her biggest investment convictions, Bitcoin and artificial intelligence, in a way that ...",
    "url": "https://www.thestreet.com/crypto/markets/cathie-wood-has-a-new-demand-for-openai-anthropic-and-google"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Warren Buffett and Greg Abel's Alphabet Stake Now Tops $24.2 Billion: 3 Reasons Berkshire Will Keep Buying",
    "type": "NEWS",
    "remark": "News via Motley Fool — It's not a typical Berkshire business, but it checks the right boxes....",
    "url": "https://www.fool.com/investing/2026/08/12/warren-buffett-and-greg-abels-alphabet-stake-now/"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "TTD Falls 23.5% in a Week Amid Macro Pressure and Execution Woes",
    "type": "NEWS",
    "remark": "News via Zacks — Trade Desk shares slid 23.5% in a week as slowing revenue growth, weaker margins and execution gaps deepen concerns over...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/ttd-falls-23-5-week-160200350.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Advanced Micro Devices vs. Alphabet: Which Artificial Intelligence Stock Is a Better Buy in 2026?",
    "type": "NEWS",
    "remark": "News via Motley Fool — AMD's explosive growth and fortress balance sheet contrast sharply with Alphabet's valuation discount and cash generatio...",
    "url": "https://www.fool.com/coverage/better-buy/2026/08/12/advanced-micro-devices-vs-alphabet-which-artificial-intelligence-stock-is-a-better-buy-in-2026/"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-07",
    "event": "Big Tech is borrowing its way through the AI boom: Chart of the Day",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/article/big-tech-is-borrowing-its-way-through-the-ai-boom-chart-of-the-day-100000605.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-06",
    "event": "Google seeks $25B bond raise as investors grow weary of AI spend",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://blockspace.media/short/google-seeks-25b-bond-raise-as-investors-grow-weary-of-ai-spend/?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-06",
    "event": "Alphabet's $25B debt sale underscores hyperscalers' AI arms race",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/alphabets-25b-debt-sale-underscores-191800525.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-06",
    "event": "Investment Banks Rerate AI Stocks, Google’s $25B Bond, SpaceX’s Terafab Mega Factory",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://blockspace.media/podcast/investment-banks-rerate-ai-stocks-googles-25b-bond-spacexs-terafab-mega-factory/?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-06",
    "event": "Alphabet Lures Investors to Mega Bond Deal With High Premiums",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/alphabet-lures-investors-mega-bond-154856439.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-10",
    "event": "Why Google and Amazon rank top among Cloud hyperscalers for AI",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/why-google-amazon-rank-top-143256903.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-07",
    "event": "AI theme has 'a long way to run': Strategist",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/ai-theme-long-way-run-204908888.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-06",
    "event": "Blackstone Has Pitched Mega Debt Package for Anthropic Chip Deal",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/blackstone-pitched-mega-debt-package-174741685.html?.tsrc=rss"
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
    "date": "2026-08-06",
    "event": "Microsoft is starting to show its payoff on major AI plays",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/microsoft-starting-show-payoff-major-193732756.html?.tsrc=rss"
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
    "date": "2026-08-10",
    "event": "JPMorgan’s S&P 500 8,000 target: Is the market getting too expensive?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/jpmorgan-p-500-8-000-141600149.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-07",
    "event": "OpenAI developing $300+ AI speaker to challenge Amazon Alexa",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/openai-developing-300-ai-speaker-202000842.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-07",
    "event": "Alphabet Taps the Bond Market Again for Up to $25 Billion",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/news/alphabet-taps-bond-market-again-153030870.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-07",
    "event": "Apple Stock Surged On An Upgrade Cycle Its Own Reports Flagged Early",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/610602/apple-stock-surged-on-an-upgrade-cycle-its-own-reports-flagged-early/2026-08-07?.tsrc=rss"
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
    "date": "2026-08-11",
    "event": "Alphabet (GOOGL) Stock May Be 20% Undervalued Following AI Bond Sale - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPLUl1enV6Q0N3T1pKcG5FLVQ4SExSVlVDTkZ1VWZUc1VydTdEWGxDYlhlMTI5bGhMSXhRVUJKdFZYel96dnVobUJiLTBlZG5fZ1BwTERIa2kyYTltZDNuYlA2dGFGdzlFZk14eDVGSkFpX0lWclNVN0k1R3JWRWRsUUJRZkxVQjRsbjB5eTBLSHBEVkxHaU0w?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Alphabet's Blowout Q2 Confirmed The AI Stack Thesis, And Shares Are Still Undervalued - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOYldEVThveHBPUGYtVkE5OTJ3WktCSEVMbmUyZm5SbWdJNE9zWmxkdElEekVPT0dlNm4tLXlwaVQyc19uRWpOczQwMHZwUEdkbktldU9KZ0EwTnNTR3B4cHBOeEM4TGxpTi1xa3RGdWpLb3FFUU00QzRyc0l0LXRucm8wT1NHZ0hQX1l1dXRFYV93U3UtaTRobmxEUjV3ZXExVENyRlU2LXpKM2VqVTdIWUVaQW51bHVKSm1kaVpUZExaUQ?oc=5"
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
    "date": "2026-08-12",
    "event": "Alphabet Inc. $GOOGL Stock Holdings Increased by Central Pacific Bank Trust Division - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQbkNjSVpIQWdqRFpFZkkyY05IdDBlYmVHc3NOZllQRHN2Z1JIM29KYjZqSGRYNnpWdkYzcklxR1hHSkdpbmk3TmtncjdkU1pHVW9PVHJ1Z3ppSUNrdFkxQ2NOcUpzODhWQ3Q2bWZ4dEJsZHhDOE9xblg1SFZ0SzhQSm9XUWt4NkpWbDBBZFVBNnprRXBoZ3pPbGRkUVZMNDVPcmN5cWIxRjg5a2dSOW4tU3RZSlF3R1ZkVTg0TkthY29aQWlOU2NzekxzZW15XzMtLW5BT18wOExtQW8?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Google Stock Price Today: GOOGL Up or Down on August 12 (Live Polymarket Odds) - Action Network",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQUk5WelFZUFN1TjdNeGJwSXhsV0pQQjF6dWVoUXh0Q1c0ckxEM19seER4cjhJdUZDY1FvSnd4QWRZZFZtMEhnU1JZWUFBN1l2VHhsZHFSWXQwWDFEQTV3XzN3SUpaemJzX3R2RnF6NlEwblNjc1liZzlBVTdYRVphZGVhWlUwU2RSekRnUFJibXBESkh5SUx4UnNlUjZ3QlB1aThaTTMyQlB4NHFfdEhz?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-11",
    "event": "Why Is Alphabet (GOOGL) Facing 3,000 Youth Lawsuits As Earnings Influence Grows? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPYjFxREUxcXdWbFZXSU9vekNsSkRLX181NjB3NGRnOTBLOFd4Mjl3R0VWdjhLU3lzc1RzbFY4UHJZZkViNndFNWZNbndrT2tkbVgtbUxPWUdiZW1lQ0RwWTRXdGVXc2RjLV94MmwzQ1dQVC1yN0RaRkJPWGlHbDBIbzdZWExReUJBTExMdjZCbU1rSWJxaWEw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-10",
    "event": "Is Alphabet (GOOGL) Still One of the Best AI Stocks to Own? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPVlZQYnZ1c3IxcjIyNkdlcjNpQUVsM3AxZml2NlBIbGFwN2NqZDlYNXVQaE5FNlJBLUtOczZjYU1YRGNubktoa1dIQ2p0R0Q1SHdKRUdVYVlOYWVsZ2FYX3pvSHdPX2xEdWdjdXRlZTNtQ2hXOGpQUGZZVHMzakdSa05VM3UxdC1URHNnYkRJRnUwdjhjbjBYaw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-05",
    "event": "Google stock drops amid DeepMind leadership shake-up - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPcmQzQjBOMy1CY1k5T1pURGFYT3NHa1hSSENrRjZSNTZQYzFJd1ZoaU1zUWVJRHB6MldhbHhsTHBfUi1CTzY2VEx6TWkzOFItR1FNZ2JLSGd4b0lxLXc1Q3hNbnpkeVozdjA2eVBJaG1uUUFqeTZjNk9yWlFoMjdsbHR1bmRud25lQTdPRldFT2pfTm5uTkFhSk1ZaExBTXFJYUJQU0xZellOTlZfQXFTTnNn?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Fund Update: New $142.2M $GOOGL stock position opened by Optiver Holding B.V. - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQRXo0YnRQdnpjalZranZ3c0YxSTZvZTNOYnVuOVZmT0FJR2V3LWJpUVljdTd4VjViVXE5b2l1eGx1dWhNV2h5TnpjN1hnaEZveVJ3RmdwUm10bjhzUktDOV9lb2hSS0labmZmcEREdENTc0dLNzJlWFlMT21HUXgzcmlOY2VjdnBfUWtqYkZqTE5YcGpmTjFCQ09kcVhOcUZ3cmRub3lwUEtJWEZwUVdCYWxicWlFeTA?oc=5"
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
    "date": "2026-08-12",
    "event": "GOOGL Stock Drops In Premarket: Report Says Search Giant Trims Cloud Team Amid AI Spending Push - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxQUjZDVDVHZjBJcmxHbmhfVWFBV3ItampZSHFzZXp3dFRFREk4Vkxyb0x0MXZwS1JaQmJjSUQ2aVV6UUxPZk1fdTRFUTFSZFcxOWQyVDB0ZFA5WWVPTEc0dlZtZUhIQVdhTV9WV3IzVGY0UExkVWFadUFJVFRPM1V5YllLQ05lZUNoS0xpZEJXMmtHWmloMjZIMXdVUUItRUJpRmktR2VXUWQ4djluZTRfVFNUTEdqM25SRlZybzMtamtNWklBaDZrMklpN2lhQVJxNlhDZ2JzVDMycGNhdGZqdUNjQjQwVEVzM1RQMXZSdw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Is Alphabet (GOOGL) Quietly Redefining Its AI Risk‑Reward Tradeoff With New Debt And Leadership Shifts? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPUDFiQmUxcl9ETG9rYlp6R25yVWN3Tzg4Y1lwaDJOc1J5a21ybWNWVUI0amFGcmV2LXp3bEFZRWFUMDRfTVFrYkQ5cG5kM0pVMEE4YTRwRUxfQW9IbnlfLUpmejdSSXBzWjhVSHhrTlVOazJwNS1wUExVN3RUd2ZldnctaUZYdnYxTDRGLTdra3A0QlF6TWtJOGZYejZQaVo4c1p3M01yd3ZzX0d1b29pNm54NEpWMHphaTBJNGFjMFBmZDTSAcgBQVVfeXFMTnZES0ZGcWV4TjVFekFsWWxKQ3ZDQ0Z3aWFwYTlrN3YzU1EzWGxacV9GUGVfOW84SDhBc294VTF1dHk3cGZSZjNabUxia2wyUjVPZldqUFNEMjVaUE9pN0RCTXFKd1g5cE95X2JvNzFFMTdRRVhTTWk4bzVTeEdXdmV4LWY3ZmdjazZ2ZU0xaWhlY3ZtbGNib1hvcks0OXRhY1A0S1k1bkg2YnozTkdtb0hPV3JORndtVnVKVFZkaG1oeEgzcVRtSWs?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-07",
    "event": "Dear GOOGL Stock Fans, Here's What Google's AI Shakeup Means for Alphabet - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQRVhWbGI5QlFkTzAwaEI4a0lCTFVaNWY2S1AyRzZxdEc1eG5GRTgyMGtETzFPeXZKZWVKZ3lYT1l2TC1GV3kxVjZDV044MlFLMk1aUDFiSW43X3FoUllWaU1EZjUtV3RqRnNPSFQ5S1RjX0F1LVI0RFphNGpWMktwR0VrcjhHWGxEakFwbHczckt0NlFOQ0VNT0JYcjE2LS0xRC1wYmE2OWRHQXROMVh4RXNmYjJKNUU?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Alphabet stock slides as Google hikes Pixel 11 prices - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOc3VpWXF1bWJGZXZzbTlIYW9QTkowMzdQV3I5cFhtQnhaazRMbjMydmJUUVYwck1sQnQtYVpFaHBGU0dLTU9hdWcwQUJpMkcwUC14ZHNDYV9iaEFoMVBFeWNyc2s0N0lnTmxNSG4xWk9Da3ZCY1I1YVpveTNEdDZCV1JzRkpBT1liM3BTc1VwZmxQM19rV1Z4QVRfblJvanF4LV94Ni12YWNPS0NLczUyTklkcw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-11",
    "event": "VOO is down 0.1% today, on GOOGL stock price movement - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQVkdPRjViMlN4NFprSGJ4OEZkTVFURElDOVRFR2wxbzdBbEoxU18tZG1hZjE2VGlrd29jZ1NxUUN0eFJtQ3FOMDY3S1dqTlV3eWdiQUNtYXBnYk9lTGxSem5LNHAzTE5MQU5obDlrNjF2c3lOVW1pTXIwU2tfUnNiN2dOYjBrZVlNTVM5eXl3c3JPVlc2?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-11",
    "event": "Alphabet (NASDAQ:GOOGL) Stock Price Down 3.8% - Time to Sell? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxORXFkcHB1NlV1RWVXZnFnT1d5ZXBHbHFJT0padTZzbllNa0Uya2ExMWRWdG43QndyM3BUenBaVEoyU2R3Z2htbi02UC02T044MFkwZ1BQTHVvT2tkXzdsbjlPeGJ4ekJ0eXQ4WG0wdTN1ZURLQWdDeEdHaEJreGxoV0RhUXYtR1k5TXNkaEp6SUZ5Y0huUUlSZU1rMmpXTEt3MGtiMjY3ZE5lZ1U?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-10",
    "event": "Alphabet Stock (GOOGL) Opinions on Berkshire Hathaway Investment - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNUG9PeDNMTFpUNjVqWkJYTDZoVV8yUHp3Z2xFVTZxUzlmeFZuc3ZMQ3lsei04elhtWHB4UjB1SDJudmwyd2pRVTZmRWRrek1NbTR2Z2JmVVNoXzBrTTVkT0YtUm9DcUlldkk3bXVQXzFkNGhVS0VIZF8yS0hDQUpoYmdfTnVtNFlORk5FWDJTMWdycWxjbWI1RnNNWUtoQVNSZ2k4?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Alphabet Inc. $GOOGL Shares Sold by Moody National Bank Trust Division - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQQmo1SFlFZUJLVVpYdFZ1VTBYbXdIR2NOTm9Yak1BeE9XR2JBNTFWVGxaVWVOTEpucE5xQ3dTeE52c01yS3NzTVVpTjR1QkluVFJ4ZVJPblZzQzluRi1oQTJPN25aMGpyV1RZSndYb0V4eVc1SHpxM240LVBKOXFySHNDMTc3eDlmV2lpdXR1aUFQM2tSckYxazZ6eThGTGdCNUg4V2g3VWNlcm9uOE1EOW50QnpROE5pVldhbGpjay1PdFVlSjFySg?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-11",
    "event": "Why Alphabet (GOOGL) Stock Is Down Today - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigwFBVV95cUxPb0d0RUtCZUhCbTdpZnAtejVhNjRwUUoxNWE0bnB5c2dieGdkQS00VFNBU0xDMkY4SkZPb0F6ZExYaGtfLVlPcTNfLXQ4MWktOUZzWDREc0tkWTNSQ1l0eFpOYXprVWZSWGJKLW5hQTR1QzFXRDlrTmxkM2U4TmZxcnNqMA?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Stonebridge Financial Group LLC Sells 1,998 Shares of Alphabet Inc. $GOOGL - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQMFhVUVg1WHBXc0Z5dVdqNmdDazN3WURYdjJDZXBzcUVmS1A2ZDQtWVM2aWhodnE1QmNDeUxOUnMtZG1wWURUV2hjNDhLTXRoZXdKV0ZrYWNCWTU4dnhqQWNtTE9sVTgxRHBfeFZhekVPYWd5VUF4ZkxYMFdLTE9JeXlBbVRMeDNMdUhWelhUQmUyZDJza1FMaHJOT0NYM3luVzdYdlNUemN5cDhyckJnWVlyZU92ZGtST1NCMEl4NmdwVW1SVzVKSkZoWHo?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Pacific Excel Wealth Advisors Inc. Has $3.14 Million Stock Holdings in Alphabet Inc. $GOOGL - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQSmpZbzdDQkFndEtlTnI5QzFfYmVkeEZ4TFNXUl9TNER0S0NwaVNsNU04VzFZckpodnBKeDFsb3pXYVBOLUI5V2FqSWp2WC1XVnUzUlJOd1c5UXQzeTZlaG00bWJGeTVCZXNTa1hWRjZVUFBJdVhaSUtPSnl3TkFBQ19wU1FaalFRc1RGaHMzcGFoYVRaTlRmYTBlYm1RUzJiZ1ZudHZpNURqb1Y5S2xOSFpsdFZiR3NkZjg3QVU4WklnSWtKdXVRNXBOZ1BRMkVJOXBuV1p3THFKcGZRX1hfOA?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Neville Rodie & Shaw Inc. Sells 2,596 Shares of Alphabet Inc. $GOOGL - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPZVZKYzBnS2h2QTFhV3JxdmhITTJTcW9qY0hMNXBWeV9MekRXWXp5MjMwM3RUZnVya1h0Y2p4d3FIYUNITnZ6eGVuR0w3LTdwVVE4cEEwSHRDdUNTdE1jUENoVW9uTjVuaG5UWTRrbnZuQXh1b3RxWGFCaGVVTXpRaVl0UE8wc1loU0J4RTBkM2NaWF9FRFB2a2xzWjVWQVhPcGJ1YnM5MU5yUUQyU0drY3R1ZDhFQThWc0F4Yzl4Wkc?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-12",
    "event": "Alphabet Stock (GOOGL) Drops With Pixel 11 Launch Spotlighting $100 Price Increase as AI Subscription Probe - TechStock²",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPTEhDT2E3YUlqeU9xWWRNdVloR01tSjBpZE9va0xvT28yNXFMLTcwdzA4T2lTQmsybk9pRzNmaUVYdFpLV21LajZYTHB4OS1yOE1BSFBMdGhTaXUzSG96RW1qRFllZW5NZXY5NDd4RXFFakV0TnJ4eGtZNmNBTXNVUjRvc0lzYVJrZlNRRTNQWDRYdkI0aTFhQjBvT0NnZHFmUndTMzFjcnpxOC03OHU1Zg?oc=5"
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
    "date": "2026-08-12",
    "event": "Can Bank Of America’s (BAC) $250B Bet Pay Off?",
    "type": "NEWS",
    "remark": "News via Insider Monkey — Bank of America (NYSE:BAC) said on August 12 that it will deploy $250 billion by July 2027 to finance US digital and inf...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bank-america-bac-250b-bet-182351252.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Sector Update: Financial Stocks Mixed Wednesday Afternoon",
    "type": "NEWS",
    "remark": "News via MT Newswires — Financial stocks were mixed in Wednesday afternoon trading, with the NYSE Financial Index up 0.3% an...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/sector-financial-stocks-mixed-wednesday-174608110.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America Stock Rises on $250 Billion AI Push",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The bank's 18-month initiative targets data centers, semiconductors, power generation and transportation infrastructure....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bank-america-stock-rises-250-171558748.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "BofA to take 49.9% stake in Jio Credit for $1.9 billion in India push",
    "type": "NEWS",
    "remark": "News via Reuters — By Nishit Navin and Jayshree P Upadhyay Aug 12 (Reuters) - Bank of America will acquire as much as 49.9% stake in the no...",
    "url": "https://sg.finance.yahoo.com/news/bofa-invest-1-9-billion-154850725.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "S&P 500 Earnings Are So Good Investors Are Starting to Worry",
    "type": "NEWS",
    "remark": "News via Bloomberg — (Bloomberg) -- The latest reason to worry about the stock market is quite the doozy: Earnings growth has been too strong...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/p-500-earnings-good-investors-144537963.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America launches $250 billion infrastructure finance initiative",
    "type": "NEWS",
    "remark": "News via Quartz — The bank's Critical Infrastructure Finance Initiative targets digital, energy, and core infrastructure projects through ...",
    "url": "https://qz.com/bank-of-america-250-billion-infrastructure-finance-initiative-081226"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America pledges $250B toward US infrastructure update",
    "type": "NEWS",
    "remark": "News via Banking Dive — BofA will lend, bank, invest in and advise on projects such as data centers, power generation and transportation....",
    "url": "https://www.bankingdive.com/news/bank-of-america-pledges-250b-toward-us-infrastructure-update/827705/"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Transparency notification by  Bank of America Corporation",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/transparency-notification-bank-america-corporation-163000968.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America Launches $250 Billion, 18-month Critical Infrastructure Finance Initiative in Honor of America's 250th Anniversary",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/economy/policy/articles/bank-america-launches-250-billion-100000466.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America pledges $250 billion for US infrastructure financing",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/bank-america-launches-250-billion-090237128.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "The mega-bucks infrastructure buildout gains steam",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.axios.com/2026/08/12/bank-of-america-infrastructure#utm_source=yahoo_finance&utm_medium=partner&utm_campaign=subs-partner-yahoo-finance-AI?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America unveils $250B initiative to modernize US infrastructure",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.foxbusiness.com/economy/bank-america-unveils-initiative-modernize-us-infrastructure?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America commits $250bn to support Donald Trump’s ‘America First’ agenda",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/economy/policy/articles/bank-america-commits-250bn-support-090007780.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America to Deploy $250 Billion to Bolster AI and Energy Infrastructure",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.wsj.com/finance/banking/bank-of-america-to-deploy-250-billion-to-bolster-ai-and-energy-infrastructure-d8471732?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America Enters into a Joint Venture Agreement with Jio Financial Services Limited to Acquire up to 49.9% in Jio Credit Limited",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bank-america-enters-joint-venture-152000516.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "SMCI Stock Eyes 1-Month High As Analysts Lift Targets After Earnings, But Caution AI Server Margins 'Not Sustainable'",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://stocktwits.com/news-articles/markets/equity/smci-stock-eyes-1-month-high-as-analysts-lift-price-targets-caution-margins-not-sustainable/cZo8RzHRJgF?.tsrc=rss"
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
    "date": "2026-08-12",
    "event": "Can Bank Of America’s (BAC) $250B Bet Pay Off? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxNemdHM0hfalZvMDBTc09EUVZQTExQY21lZFpzVUlMMVJJWmQ2X09WOHZrUXl2UXdMcU5mTUxwa2J1YWtKZEZ3VENaZzVndVFWcFRvVElQMHlUS0gzckpObkV6UXh0N3NIWUo1VFN4bWV5eFREX0pHUUxmbVhaZ29qSXE2eHdNZTdDMWVPTy1Hb0JoQVRh?oc=5"
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
    "event": "Bank of America Initiative Aims to Create Tens of Thousands of Jobs - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxObE12SVlONHJxWDdQYTdYbkJOZVJ5MGl4bVphTGthbTlINFNtUjNLdy1qOGF0c1hUbGdWck1Xdy1VazlzZzdELXhRby1QWmZwNGFmYk85OUo3X2VMbnJjcGwweHlDMldZOERjSjNNRGNYSFUyaVFNUzdGb3JqY09BR2RkLXY4ODdabDg2NFM4UkdySmt4aHdXbjhnN0t0VFJUQ0xjRGdqUUtPbXdX?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America starts $250B critical infrastructure finance initiative (BAC:NYSE) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxORUJnaFFtcWpha2NtX01kS2xFYlVOd293Wk81M2Z6dU9CZ2Z2VHpCaWxMbmo5amhvQng0aGNkM3h1ZldjNW1KWnRqdzVVMjduRHozSlFxWnQzYWJyeVFoUUg1RW9DREQ0RUtPaS1CcFNweHBqSEw4RWE3c2lZbHZqa0tEb2Q2cWFfajNobjlTX2ZiWDJMaDlScnE3cFZMUVRncW9vUTBobnAza0E?oc=5"
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
    "date": "2026-08-12",
    "event": "BAC Looks 19.1% Overvalued on GF Value™ as Dividend Sustainabili - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOMXZmX25GaE5jR29Nc1VvaVNvWmJnUHBTSFVuMnVtV24zeWxLQUJyS19IUmJkUnZDV3BkT3FoQnRMS1lwODF5Q3phc1JyMnh5d3NBOGZHYkJ2S1RXVTBUV0IzQ0NrX3B5VGkwMnRRS2daZFFsOFNmYzBqUlBlZW9OR2pBVFoxWmU1RlFwWHlySzV6ZmxBSXFGTjR6cjFpM3JUNm01cXFSdnlSaFVXWnFacF9KSGpqR01xNWNab2R0cw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America Stock Rises on $250 Billion AI Push - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQbHpVNGJqQ2xyOUdQUV85V1VMRHBfRk1FRVBrLUs3V3ZBNktwQW91Z3V5S05SNFZJandra2xzbTQ0MEJEYklXMS1QdzVTQTZ1X1RtVDN5NFdfX2tBX0R2cVd5alZ0aEUtWXJNVGl1V0NIV3FxVy1zU2M3RUZoSUpqeDBLYlBvb1c4SGRPM1B4LVBreGNqNVgwcWtVY09ZdDRYbEZrS3BqbEF0Y044WmU0?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-09",
    "event": "BAC 260807 57.00C (BAC260807C57000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3AJBVV95cUxNZGJpMVVSeG9mdnZ6ZnhPb0xlSkNQNTVIb0JkdGRQUU1rc0o4TWtzZWtjOU00cE5QR3J1bUh5SkJscDVhM2ZheDIxSVY1WlZ4a3p1MlpyVktRSm80N1N0MENVd0tUZXh3RnNlQUFnZ3FnMjBqaXFTY3gtTXF4eDJNZUpnbUtJSHlnUTBkM3VLVUctZU9USGF0R2hoRDVfNzJ2eVdzSXBMTU82a3dtbW02ZHhlY3pGTVlXM2hVR3M3VVhJMTRFazk1dE5qa1pVZnNuamN0YzdDV0g5Y1NoMldDQmVKRmlaT2pucDVCczlWTkJVbFVGRjNZbUpKZmVTRnpjUHVuUDY3Y3ByS1RqbmU2NklJbVdHN0RRR29TcUV3UWRINTdKdkRsUnNrZmNwVzZKMWVKMHY1Tktfb1lxanh2VVpJdkNpVVYtVTlMcExRVlZWd1lhcmdaWEpiZkk?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-11",
    "event": "3 Hyped Up Stocks That Fall Short - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNam9MY3lvdkQ4UWY1bEhSdGtVWUdmSUoxRWp5Tk1yWjRzX3pvT2hZWDNMbkRZNmxWQzRvZmVRcmJxZzVuNVdVNmJnd3hHUjBHSG9MaC1nSG1halhNQzMzX3FYRU9weEJHWDlpTl9FdDhjUVNBcERVb3Q1N2s1NDlRY3hPSVlidGN0bGtwdGVoX1l1UnNFOF9Pbm84Zw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Jio Credit Could Receive Up to $1.9B From Bank of America - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNSUhndlhYVlpiMnpOR2t5bmxiNXRON3lZbG9XQW1pNE5wTU1XUHJsZWR0Q3RKN3hsUmRmYnp2bEZYRlVQN0NZREU2azJ2akRsNlJOUlFYZGZ4blY4SmticGdXQ3dEa2x5N1d3Tm1ORlh3QmZOcUdVZHRmcWd4cFBLVl8xV2ZKT3FxQzUzUG1wZ01YNExBZHMzbzh5MS1TOTdNY29sdU40d1hucXpVQjNXbnlTMnVwZGs?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-12",
    "event": "Bank of America's Cybersecurity Investment: A Strategic Move - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQdFNiZ3FEb3FWeXc0OXVZYnlWd05KRERqZWZMSlhvUWp1R1NaZVpZaXhkM3JTd2U1TGx4VjMzSW5LT1gwUWMyMmR2a3FJcENhTFpZRVpNejZBVzJKYkltYWFuamt3MnJ0cUNKVFpVUktGRXVqbFQ0REtKejdBbkZxUDhQRFdRanBNQmFMNEg1VW0xdE0tUWQ4OGJocC1oQVV2eXJteV9Wb3FiZmxjWEtSaXNYbmc4UQ?oc=5"
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
    "date": "2026-08-11",
    "event": "Where Does Bank Of America (BAC) Value Sit Below Fair Value? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQMXdxZldvcXFqbkFyM21VQlpfNVVQN041MDNCSDNxbVRkeHlNNDVPVkc5c0p4a0VEaHdIT1JwM3poRzllVzNabDBjelo0eWVlcjFHcnl4VVUwNmZyeWZOWmd6M2pKRG1fdHZleThyY0h5eFFidjZ2dXdtUVRXR2xzNUFXRjVZOTRwOEkyZ1ZWZEd1RUw0U3NUWjFTMS1kVldCSjFDWHB6TGZUUnlFOFFBTWdjYm9RYzNnZHd6Mm1FTk5kRUXSAcgBQVVfeXFMT2ZHZ2J6VUpJSm43S2l4TXVSSFUyXzZtY0RFak1XT3dEY0pzVjJVQy1vV2VsbzNWZlgxemFlZGo1cFVGV1ZwQVdaTUJ5YW03Y3NrZ2xuQmRoOWRiVkJyYzlscFh4Q0Q2OWp1OXJsT1lmOUdwZVJuLXNkLW9hSDVxZVVEWXdQQ215STV3UklfN0ZhR1ZybWJZc2lpUlB5MGQ5VnRDc1otZ2kxcXYzbW9XdlZONjhkdk1rVzJhMlpsTVNqaXpyYklJUFo?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-08",
    "event": "BAC 260807 72.00P (BAC260807P72000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3AJBVV95cUxPa3FJOHJlelNuT29fRkIzWFdqSnJ6YXg2VE53cE11a0FGZXdKM2VPSUpmbFh3VGNoMUotMVpPYW5vekZaVnREME9sSkFEVC1TQW1vWS1qNEd3SGhEbmFZWEwzcEtUMVZHd0t4UEtKYnBoTDFBd1B0dWdwNl9la0ltVjd6LXByMGFEbWtzNUtGT2JIQlg5cG1XSjAtMVpwNWFJSm1GbVpUNE5xaXRIaXd0VTVQNWxoQlRMT3YzaVBJSW5hWUloc1VCdm5tRks3WENsdkpGeEMyRFNYYjZQakdrckMwb3JWRG9VcTJaRkdaYXlVMndLYUluLWx0d1RSeXNraENUSzNJeXNSN3RROVJ5YXlDcFJFYnptb083dzFudVFfNnM4MER5UmRpV2xqS3o4UGRoMklMQXFDZDdxUkVEOUxDVTVYYlVBdGJoVWhDUHJyYS1NUkpPb1VKRGQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-07",
    "event": "Bank Of America (BAC) Flags AML Penalty Risk, Is The Stock Still A Bargain? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOcXVlQmFNVWdncjBscG5wV2ZJLVFuQ0VPQWxjUjJPWXpZeWdJMHl6TmhpYXJhQmJHczI4WFQxbGhlVk92NXMzek1BYTVZeXh0bjFLeUM3SzI1N21GQ2ZUREZDM0xKLUoyUnhwMmJCUEl0RmxjR1NLX1NEbzlnczMydzg1cFM4RWRGbFZzRVJEOUdEUzFWcmc?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-10",
    "event": "Bank of America Grant Will Link New Jersey Youth to Career Paths - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQUXJ3dVR4bW5kMFdnOUk5bEk5NVExOEctZmIxaDdaUjFxaHh1NjZuSmtfdTdYNUI2UkpRNURyck9SWnIzU1laaXdmdVZNNDFfMkx2S3NPTFUxZjZJQnpDX2hTQzBEcXMxT0FPdFJjMVIyaG1sVHBCVTIyZkVUUEVhY2lDRlZuZG1Qeml3RXhsWFlrZWdjc0tYY1pHQUNiX2hQcVRFM2NaUGlaYzhSSTBENmFaZ1BkNVhvLXIyeXFSdw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-07",
    "event": "BAC 260807 51.00P (BAC260807P51000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgJBVV95cUxOSkY0RF85MkE0TnJWTjlpUWUzT0RrVk9zb0ZTbmh5TDJ2aHhrc3dRYzg5YkVRU2k4bWZmRXU1M3hsZGdjU1EtSUQ3TzJWUkluZzgtV0RYZ2Z0Q1NSNnRlcUxMSS1pcXRUaGdObFd5VUhndXN2OEhOVWkyU0dsa2ZrQTRhUnhhVllaZTF3Nm5mdDVIdnpEckI3OVlmRFgzUG5VNWt1OFRsbGhJdVBCZl8yVUVRWHhkdGdwUVNWd1lRbmRsTnlucU9ydTlIM1NTNm5zNDRWN0NlU1lPVlRycC1yS1hlMDlMSVpNbHZtVGhoSHlRS1l1OC1YWmZhQUd3NWhhem9LaHljN1NJNmdxSzUxS3VrdGNsdlphZjZJaFR6bFY3TG1aeGtTclNIbkdtOV9vNS10TzJ4SGxyTTdDZ2kzTFNzSmxybzBCcnppdzFR?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-10",
    "event": "BAC Aug 2026 45.000 call (BAC260814C00045000) Stock Price, News, Quote & History - Yahoo! Finance Canada",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5LWFNVSTRLckljb1RMWWNacXktSTRxUUowa3BNTWxvU2ppRkwtUDFxdzhMYVNyeVZ0UGRQYlZ0V0dEa3dfLTJKbFNRMTFtb3lzMllyRGJjZlV6R1Q0MERSRlFNVGQ?oc=5"
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
    "date": "2026-08-10",
    "event": "Contravisory Investment Management Inc. Cuts Position in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNUWJ5OHNrb1RhUlFIQVZDV1ExR1dVaTZxVW96WHR3WnAwSGp1ck1YNVhicmxlZ0J2VTBMdGNoUkd4UTF0alU1aFdVRDFNZGp6SkdpVkJVSmNiZGdRRXFoeFRTcGo0aDZ2ZmhJTV93NTY5Z08zOGF0ZnpsT2ttdEtkeUxHWEI1bWlod0s2NlVraWUzcmpOTjBheWlRdXFuWkdTaFF4UlFDQ2w1UVRaUlpzUF9nQVV5X0h3b1pRM3pvRFhRdDFpSHBta0ZpbUY1S3ZISGgtSVRmcXBsWVNsVVZQUHlB?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-10",
    "event": "BAC Aug 2026 70.000 put (BAC260814P00070000) Stock Price, News, Quote & History - Yahoo! Finance Canada",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE5PY0hWUXdyczk3ZWFGMXJzWGxvZWVnWjJ2OTNJbE9EZVpaTmpjWjlpLWdNRWp6OHpzVmtra0J6YXdsNXU3Rld5elFTR2RfeG5tcUdDb1FZa1pYdHZhUHVuXzNVMWM?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-10",
    "event": "1 Mega-Cap Stock with Impressive Fundamentals and 2 We Brush Off - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPUm1VV2NQdVpwakx2bm5ZektDSnNJbU1xTHYtc1o4MXN5ZDRSN2JlSUpDYUxGWVNsQmtwdmdEbzJOZ2N5d2lyUW5EVy05ZG13aXVlX0syU1NzWEVVZWVIdWpKY1M3cHpTMUtwclRqVlR1cTdPRWI3UE5KRjRYZ0dXdkJCbF8zS0RWSkw0R1B3cXgySE0xYnNz?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-08",
    "event": "Bank Of America (BAC) Is A Key Underwriter On An AI Data Center IPO - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPc2dOOWdzZlBwS0tzS0FzTW1SYmx0cFg4Y3k3WHBoOTNCSDFmSkduSnp3LW9lMGxkZVdVWXl3MlBuemJYRzc4YlA5OFM3RUtOa3VhQU5GWEpjbktrSHVwU3pBUFVzUjlJZjhkVkw5elJNQUNiOHdrUTg1WXRBSXFuV2VmRG43MW1oTTBYSy1YX1BRQlhuZ0dtNXRMUVpNcTBKdDZqS2xKRUVha3dvYndsdXk1NEhHNDlDQ1hGVHFEaDkyZUVwYW9N0gHMAUFVX3lxTFBhZWNwMUU4N2tESmhNYktxZUNzUW1LQlhicGN3UE90djNsOFVETGRmckx0QUxpb1p1ZndIWV9mdW10SF9SSkhWanBqNWF2UEFUMkRZNzNaSVRRZGE0U0lFYXZXVmYtd1k5Yi0wUmluSW50TnRnMnBWbzhGVkp5d2F1SEx0SlNZM29IOXgtUWN6U1RYV1JTSC1uOHJCNDB5SUVBYWdRaTRDUVpzYlk5N0RHVFdRNjd4Rk9KbHN6bk51V3l2SWRKS05lN25seA?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-12",
    "event": "Circle Lines Up Major Financial Institutions For Its New Arc Blockchain. Here's Why Circle Stock is Now a Buy.",
    "type": "NEWS",
    "remark": "News via Motley Fool — The new blockchain expands its ecosystem and widens its moat....",
    "url": "https://www.fool.com/investing/2026/08/12/circle-lines-up-major-financial-institutions-for-i/"
  },
  {
    "stock": "V",
    "date": "2026-08-12",
    "event": "Visa Inc. (V) vs. Mastercard Incorporated (MA): Visa Bets $2.4 Billion on Stopping AI-Powered Fraud",
    "type": "NEWS",
    "remark": "News via Insider Monkey — On August 3, 2024, Visa Inc. (NYSE:V) agreed to buy Tel Aviv-based fraud detection startup BioCatch for $2.4 billion in ...",
    "url": "https://finance.yahoo.com/technology/ai/articles/visa-inc-v-vs-mastercard-140953343.html"
  },
  {
    "stock": "V",
    "date": "2026-08-12",
    "event": "Cashi launches public beta for stablecoin spending app and Visa card",
    "type": "NEWS",
    "remark": "News via Electronic Payments — The company expects a full launch before the end of the year....",
    "url": "https://www.electronicpaymentsinternational.com/news/cashi-launches-public-beta-for-stablecoin-spending-app-and-visa-card/"
  },
  {
    "stock": "V",
    "date": "2026-08-12",
    "event": "Stablecoins Process $4.8T in 30 Days, but Just $1.1T Survives Adjustments, Visa Data Shows",
    "type": "NEWS",
    "remark": "News via CCN — Stablecoins processed $4.8 trillion across 1.6 billion transactions over the past 30 days, according to Visa’s onchain a...",
    "url": "https://www.ccn.com/news/crypto/stablecoins-4-8t-volume-visa-filters-77-percent/"
  },
  {
    "stock": "V",
    "date": "2026-08-12",
    "event": "Visa and Mastercard Have Both Reported. Which Payments Giant Is the Best Buy Now?",
    "type": "NEWS",
    "remark": "News via Motley Fool — Despite strong fundamentals, these financial stocks have underperformed the market in 2026....",
    "url": "https://www.fool.com/investing/2026/08/12/visa-mastercard-payments-giant-best-buy-now/"
  },
  {
    "stock": "V",
    "date": "2026-08-12",
    "event": "Visa (V) Broadens Stablecoin Settlement Capabilities",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Visa (NYSE:V) is expanding its stablecoin settlement capabilities through new partnerships with Lightspark and Zerohash....",
    "url": "https://finance.yahoo.com/markets/crypto/articles/visa-v-broadens-stablecoin-settlement-081059283.html"
  },
  {
    "stock": "V",
    "date": "2026-08-11",
    "event": "Circle Internet Is Still Down 10% in 2026. What Will It Take to Get CRCL Stock Back Up to $100?",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — CRCL stock has held up far better than its crypto peers in 2026, but the $100 recovery bulls want hinges on four specifi...",
    "url": "https://247wallst.com/investing/2026/08/11/circle-internet-is-still-down-10-in-2026-what-will-it-take-to-get-crcl-stock-back-up-to-100/"
  },
  {
    "stock": "V",
    "date": "2026-08-11",
    "event": "Visa Inc. (V) vs. Mastercard Incorporated (MA): Same Strong Spending Story, Very Different Stock Reactions",
    "type": "NEWS",
    "remark": "News via Insider Monkey — Visa Inc. (NYSE:V) and Mastercard Incorporated (NYSE:MA) both beat Wall Street’s profit estimates this earnings season o...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/visa-inc-v-vs-mastercard-182054581.html"
  },
  {
    "stock": "V",
    "date": "2026-08-11",
    "event": "Will Pismo-DPS Help Visa Capture More of the Banking Value Chain?",
    "type": "NEWS",
    "remark": "News via Zacks — V's Pismo-DPS strategy could deepen its banking infrastructure role, expand fintech and bank relationships and broaden i...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/pismo-dps-help-visa-capture-160400693.html"
  },
  {
    "stock": "V",
    "date": "2026-08-11",
    "event": "Visa's Cheaper Multiple Rests On A Margin Assumption",
    "type": "NEWS",
    "remark": "News via Trefis — The forward numbers make the stock look reasonable, but they assume profitability keeps climbing at a company currently ...",
    "url": "https://www.trefis.com/articles/611005/visas-cheaper-multiple-rests-on-a-margin-assumption/2026-08-11"
  },
  {
    "stock": "V",
    "date": "2026-08-11",
    "event": "Grandstand Launches Rollcard, a Purpose-Built High-Limit Debit Card for Sports Betting, Casino and Prediction Markets",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/crypto/articles/grandstand-launches-rollcard-purpose-built-113000894.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-11",
    "event": "Cloudflare Wants to Control the Identity and Money Layer for Agent Commerce",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/cloudflare-wants-control-identity-money-061021630.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-10",
    "event": "What Wall Street Pushed MA To Explain",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/610750/what-wall-street-pushed-ma-to-explain/2026-08-10?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-10",
    "event": "Q2 Earnings Outperformers: Visa (NYSE:V) And The Rest Of The Credit Card Stocks",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/q2-earnings-outperformers-visa-nyse-155722569.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-10",
    "event": "The Real Upside Case For Mastercard Stock Is In The Plumbing",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/610755/the-real-upside-case-for-mastercard-stock-is-in-the-plumbing/2026-08-10?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-10",
    "event": "Why Visa (V) Could Be a Major Winner in the AI Payments Boom",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-visa-v-could-major-130908103.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-10",
    "event": "Visa debit case turns on market definition, lawyers say",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.paymentsdive.com/news/visa-debit-case-doj-justice-antitrust-turns-on-market-definition-lawyers-say/827259/?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-10",
    "event": "Campaign Asia Agency of the Year Awards 2026 Unveils Its Most Extensive Regional Judging Panel as Final Entry Deadline Nears",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/media-advertising/articles/campaign-asia-agency-awards-2026-030000520.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-08",
    "event": "Great disappointment will follow the Great Wealth Transfer as baby boomers pass on just a fraction of their fortune to millennials and Gen Xers",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/economy/articles/great-disappointment-great-wealth-transfer-230109389.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-08",
    "event": "Circle Internet Group (CRCL) Launches Arc As Its Growth Story Moves Beyond USDC",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/crypto/articles/circle-internet-group-crcl-launches-041923139.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-12",
    "event": "Visa’s AI Opportunity Is Hiding in Every Transaction - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQaGEyWVo0VVpaenM2dzZlWlpjV0g1U1I1Uk5Xd0xwb3BKc0dyTGhUa3BLb0V4S2FtS0hPWTVHSS1nd19tQ04tY0pwRTBNZ19nOWpKUmYtMUI1aTBBa1BvUTFnZnF3WHdseTg3NF9vUzlQRlpKU08waW80UFBXdjVyc1dTMV9WNGtOaklIZDVhZjU2UQ?oc=5"
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
    "date": "2026-08-08",
    "event": "V Stock Jumps On Strong Earnings Beat Amid Credit Card Culture Boom: Announces $20B share repurchase program - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigAJBVV95cUxPaGRuQTI2NXI3Z1lnOEMwZldCTElqLTJLUVQ0ajBSY1RlS25Ed2JmbmJhWDB1YnBwZGxZQ1pCYzJRM3oyVjdZZXQxNjFvMWFDQ3diVFlDSXBhVzdoU0lRYm1pNFhyMVJ1bFVRdFUtRkJpV0dQckVCanJhQi12OFNXSTA0NlpVTng1S3Q1cWNKcFQ5STBqdE1IZ1hxUW1tSGZsMW54bjZ2aXloM0g3X0Q4Wkw3amtueDI5dXBTT2U2YWRqX19lZ1BvcXAtbE93V2FTYUxWc0lIaGUyajc5LWdRM09OWTdTdlljdWJfQ0hZdm96MkRfQmIxeUNkc2hjWFdU?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-11",
    "event": "Visa Inc. (V) vs. Mastercard Incorporated (MA): Same Strong Spending Story, Very Different Stock Reactions - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPMmNXN1BSOFFjTm5CeGxWUVkwNTUyX1pQMkNEVVJvV0Z2Y1VBZUhoZ3diT0pqMzBRS1VlVnFuR2FkSndQS19yMldmbmluczViS2hjU0xWemlPYWJWQWtSVERWcDdMTFdFck9sZWRWNzQyQWtlQ2NnOEJvWWxFTlVkaVRGRVMwVGdCTlBBU2l4WDBOZ2c?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-12",
    "event": "Trading (IVQ.DB.V) With Integrated Risk Controls - news.stocktradersdaily.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQWGJ2aVlvUnYtNlJiMG9RRmtseW4xaWVVZThWZXM4M2w0S1V0SFUwV19Va3dPSTdma3FwS0tvOUMxdHFsVGxrbl9TZGx5WkgzV1JpdUpacmN1Y1BzTUhtUUNnemQ5YjRHdmZrTnBtQXFyY1Rhbk9BVHFqLWFQRkk5ck1pN1lhZVBMQ0dmMl9GMXJLYzEyQUJpZnVqWVo1ajhOdS0tOQ?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-07",
    "event": "Reading Between The Lines Of V’s Latest Call - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxORWZOd3BUR3VXR2RQd0h0MHBOMGs4Zm9PcWhoWlpzNXNLbFVVczRRNVVKdGItTlhjQmNtcTdvRjk4QURhOHA3ck41MkI5UTVNeFd0bGxYV0lZTzRqaE05dlNPSE12SHdmSjJGTFEtNkxMSnhrQ0NoOXBSMktHLTYwVGpKczBUOVlpZVZ4YkxqbkJPQVRlQmRxemZpTG8wWDNEb3ln?oc=5"
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
    "date": "2026-08-12",
    "event": "IPVV News Today | Why did InterPrivate Investment Partners V stock go up today? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9CQXlEUDBMQ3ktVEJYM01hMUxpNkJOeUNMV1J0QTdKLW54N09kZ2hmN05LcnpydmZ0WU1oY2E5a2hVWkcwUDFlbDJFQkxOMmJ4QkQwVTk0dEFfVDh0SXBqYw?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-08",
    "event": "SalesCloser Technologies Ltd. (SCAI.V) Stock Price, News, Quote & History - Yahoo! Finance Canada",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiVEFVX3lxTE1XNmJsd2tTMUtXakV0NzJELV85LVlqXy13TGVMR1lrVkkzWnc4eTh4UGhTaXJaNWlaNVRqV0JUdE5tQ25kclRyOWNxRUVDa1g3Y05oYg?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-11",
    "event": "Visa’s Cheaper Multiple Rests On A Margin Assumption - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOVnI0TUdqUExueGphOHBJUWh5SUlRMWEtdGpvOTlucVd1cE5YU3QxWm9md18yNkNjMHRubTVKbWxFLVU4dVQ3QU1BMzVOenU5RXo2S1BYMi0yT1M0V0RReTAwQUJkaHhIY0JmbGlyTGNkZWJVTTh1ZDJmMWo4RFNmNXM4c004LTZQZmFlRERFOS1hWTh2OWRwYXMxaktHRXkyWFVnZGZyY2FzYW1GVkE?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-12",
    "event": "Northside Capital Management LLC Increases Stock Position in Visa Inc. $V - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPUFFDNUhaUlpDTk8wMWU5ZWtvMkpTLXJRM0dlbzFFcGMybE55Q0lhNm16SUROWlpRVlozZHVtY2F1R0VGR19BbWpMZmVvNmRSbHVoYVpQT1Zyak9rQk8wRDY1cWVkQlZmTjZ3VFZFejctWlhDcmtyT1ZiS1Z1SHNwMXRGVVJhWFlnREtiV2JuX28zR2ZBS1dCQk02czUxVDdCQjNKVjN3M0h5MlJSRFI1STR6S2ZsMy1Vc3RGMGRXTGdoal9SVG5JdmFnMS0?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-10",
    "event": "Why Visa (V) Could Be a Major Winner in the AI Payments Boom - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQaTNtcEh5Q2dBSjM1aksxenhqVjNodXZLM1JLUWt2VnVoaC1hbjc0cUhqRi1KQ09EYXZQa1BMeXBOcnlmM2NVM056dTd2Y0FZQUE5QnB1Vll3b3dwRGstMGlha3BfUkhYcl94RURlS1FVanlTVVkzLXBOU0ZXNC1pbDZ5TWFvSHBGcE5Eb2xhdTI?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-10",
    "event": "Q2 Earnings Outperformers: Visa (NYSE:V) And The Rest Of The Credit Card Stocks - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQRVdiOE9fVjVpdGlseGRsWEdpQ3JFY3JmekI0RnNfUTh2enExWW1zNmtsTDRrODdKWmRwZGx5V1JkSUZMdGxBR05TZ1U0dWh4UzI4UVNlM05EYUVpZS1jeGVNSlI0Mlo2bE5LOTB3X1B1YWFPMHRxS1d1WW5ZTUlIdGtpb0FRR1hrNFVXSTdnOV9XVTdtSjZnc2xLNndFUDFZQWc?oc=5"
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
    "date": "2026-06-18",
    "event": "Visa (V) Stock After Recent Pullback Is The Market Price Missing The Story - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOakNaTnVCQTdaVUdoOU9WLVlhRlduRl9VbHBRV09Uc2xCcE9oNHVpY1l2cEE3SXRkTC1HTmhZU3M5WnFGVmw5Rk1XY2FyMlJHd0lGVWkzT1p6RkNxazA4SjVBdlJFYkNzYzM0aHpuWjhDc2QxZFk2ZDRnRUFSRDRhZDVERzF0RGxDZXNtN0E3aVNVLVlUTXdtcw?oc=5"
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
    "date": "2026-07-16",
    "event": "Visa (V) Stock May Trade At A Discount To Fair Value Yet A Premium To Earnings - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQVnVzbXE1VFVJZVA1ZzVybWJMQS1tTUhJUzQ0Ri04WmJLbml5dzd4WmVMRmFHRmFXNkxFM0xPRW1lSHZNT3lJRGZNb1VTVzlVdEdqaC1HMVR2XzZ6MllzRDJjb25NMzJFWndFZUdtSGZPZU01aFV0cEF2NTFxNmFRZmFRV3ZBMTlRLXFOaGlVNlQ?oc=5"
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
    "date": "2026-07-28",
    "event": "V Stock Slips After-Hours — Visa Reports $563M Job Cut-Related Costs Amid Resilient Consumer Spending - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi9gFBVV95cUxOWWQ5T20tOENYR2gwR0NXS0VVR0ZwdmhjSDR2OUQzQmdOUEFBUjN0TzJrRkQxTE5pYWtzcUVQNzNOWUtSUGcwRXpfX3I4Nl9kMDNyODlieHowdG0xYVVuMXR3Y3NvQmVJN2gtdkNSZ0MwY1MwQ1QwRXZGa0Jhc3NPOHhSQlpwZlVFRkdwOUx0SzM4MEF4OTdYZDhVWk4xekg0azNxU0EwaEdKRUZaVXBFVFhNb2xwZ1NUM0piSlVoREFibzBGOXlpTW9aWUJHWTh0OE5rQ0tBRC1IWVg4WjBIWmN1Sk1za19uLXBST3QxeUFwbEM3Qmc?oc=5"
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
    "date": "2026-08-07",
    "event": "Visa Inc. $V Stock Holdings Boosted by PensionDanmark Pensionsforsikringsaktieselskab - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPYU5vbEwyRnpyWE0wSmRkUXhFVDFuMnFKc3FhV0o1YU13UkhfMzdoYXpfVzBYYVQxcHU0SWh1UjYtSmh4Tkl0YWdQNnQ0aG94ZktMUUhuOERHM041TjJiZEpDeThtdjdPazh3LVlNMEtxd3lzb2IxbVhjWmRRWThGblItY1J3d2RBaHFxUlZUdWdXby1zcktZanRob2FPRWJXMjVoN2tqTEFVMjJsdmR6cGhlS0E2MF9uVGd4N3dqVDlHdGkzRi1fUS1hSTBiS3lEOUJOLWVQQU1yeUhY?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-02",
    "event": "Visa (V) Stock Looks Fair On Cash Flow Yet Rich On Earnings - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxPb2ZNTmc3NHhwY3BQTFFBUDBnR1pLUW5NZWh2bDNlcVJrdGhILWxNengzQU4zRktlYWVHUllZckMyWm96RllSYlItV3ZvZncyU0YzOHlmRVVhbkpBRjZEOW9vVnlTMDFZWkxXbG5KQ2JqQ3F3MWpITFZEaFhYa1RxNi1fU3ZDWUZVZzVMdzZSektEMUpQejlOcnlBX1c5ZUN6aEY0c1VrU01RSFg2TDhWUTd3TFMwNzdud0s2UlBfUlA1WHRTVHZsa9IBzgFBVV95cUxPX0s3aExRR1gwQi1CT2ZMZzhMOC12MHpqZlVlYlYzVnF3N1c4M3c2TEFudUNoSUhsS2tRTXJXMGszT05pUHY1Y0VMTWF1Ujh3a2daRmxBX0thcnFaWnlBMktHTFJUVjZFRlhHLWp3czBBb3dUNmJKd0dQaTRnUXlWLVNlQ21mSERRMTR0cEZESUVnaUwwd2ZpdTRlQ25SR1lFU1VMMTJMOXZUZFZ1RlJveHd0cmgwTzY1M2Jvb2FZWXBHc01RN3ZTMG94cnEwZw?oc=5"
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
    "date": "2026-01-13",
    "event": "Why Visa (V) Stock Is Trading Lower Today - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNb2p2SEluM0NfM3Y1TXJpZkx2TWpfbzNxRllyZzBZaHd3X1hjdTVsa0UtTFhabGZ5NEJFOHplNjVhVGVrRGVocVVmZXFqbHFJS3dJOWd1OWJnaE9RNmtKMUpncVlQVHNIOHZwelhfandVbnlrMmNLb2pGckd6Zl9zTlBCSnZndndnVWUwcHRlZDgwTzdtVjdXNDFlM1I?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-06-17",
    "event": "Visa Stock And The Number Behind The Worry - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPbmRWSXdqR0VxVU9uWXFSOU9vemlaTlRkTHkwSDFmZUFJeUxkS0FKM05fTXVFM1h2ZGRSNlpmcWlDUE5xQVh0ZUNvRTg0MTlJaTVEZHE0cV9KLXAybF9aQUpjLUExT1J4V0R1NGFsWFp4cks0V1NNUkZtekdOczREX3BaNEVEUUNaWTZmSW5HZHllREFHdVFXWDdWdE80QzlPNlE?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Forget big tech: the real AI money is in plumbing",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — Host Kenny Polcari joins Yahoo Finance's Jared Blikre and Founder ETFs' Michael Monaghan to explore the data showing why...",
    "url": "https://finance.yahoo.com/video/forget-big-tech-real-ai-100000112.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Lip-Bu Tan Puts $12 Million Into Intel's $20 Billion Raise",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Lip-Bu Tan takes $12 million at the $95 offer price...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/lip-bu-tan-puts-12-172750520.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "How Far Behind AMD is Intel?",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — AMD and Intel both posted their strongest quarters in years, but the businesses underneath look nothing alike. One is ri...",
    "url": "https://247wallst.com/investing/2026/08/12/how-far-behind-amd-is-intel/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Why Intel (INTC) Stock Is Down Today",
    "type": "NEWS",
    "remark": "News via StockStory — Shares of computer processor maker Intel (NASDAQ:INTC) fell 3.7% in the morning session after the company announced a pl...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-intel-intc-stock-down-151722385.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Why Intel’s $20 Billion Stock Offering Is Actually a Great Sign for the Company",
    "type": "NEWS",
    "remark": "News via Barrons.com — Shares of  Intel  have been under pressure this week since the chip maker announced a $20 billion stock offering.  UBS a...",
    "url": "https://www.barrons.com/articles/intel-stock-equity-offering-ai-chips-3a320f4d?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Intel Did Much Worse Than Super Micro Computer But Both Got Punished",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Two AI-driven quarters, two brutal selloffs, and two very different reasons why Wall Street walked away from each. The c...",
    "url": "https://247wallst.com/investing/2026/08/12/intel-did-much-worse-than-super-micro-computer-but-both-got-punished/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "MYR Group and Turtle Beach have been highlighted as Zacks Bull and Bear of the Day",
    "type": "NEWS",
    "remark": "News via Zacks — MYR Group's AI, energy and electrification exposure, strong backlog and earnings growth make it a compelling infrastruct...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/myr-group-turtle-beach-highlighted-142800158.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Earnings Calendar and Analysis for This Week (August 10-14)",
    "type": "NEWS",
    "remark": "News via Kiplinger — Check out our earnings calendar for this week, as well as our previews and recaps of the more noteworthy reports....",
    "url": "https://www.kiplinger.com/investing/stocks/17494/next-week-earnings-calendar-stocks"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "SK Hynix and SanDisk Climb 8%, Western Digital Gains 4% as Memory Shortage Deepens",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/12/sk-hynix-and-sandisk-climb-8-western-digital-gains-4-as-memory-shortage-deepens/?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Intel vs. Qualcomm: Which Chip Stock is the Better Buy Now?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/intel-vs-qualcomm-chip-stock-130500569.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Private 5G Network Deployment Tracker & Forecasts 2026-2030 | Covers 9,300 Engagements Across 130 Countries",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/private-5g-network-deployment-tracker-133400478.html?.tsrc=rss"
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
    "date": "2026-08-11",
    "event": "Intel: This Pullback Is A Golden Opportunity (Rating Upgrade) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNOHNzNDZ3alhiaW5INUhVTmx0SC0zUHdaWUswUXJEUXI0TGZ2b2FaRHpCZWJFdGtkOW1XT3ZkODJ0ZGZxNkJsNEZPNGJpck9lN2Q2OGgwd0hmekVROW9tNXhWajlRQ0FqNy1UaXU4OWpkbDB1eUpiTXdnRVBVVi1BWjU5b194bHliWkxRZFlTd08tMEUyWm1kdzZyRFRHZURjRFE?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Why Intel’s $20 Billion Stock Offering Is Actually a Great Sign for the Company - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQN1U2RUltNmZhbG1BWmRIRE9wUlkyQWxEeC1yLXZjaGdIOGtGaUR5WWdpM1ZIUWszNzJKbExOVjlCYVI0YWw2X3Z2N0VGZFJya0hILWlybU9BLVE1OGQ4UTJjaFNMUkFraGRKRjVYTnR0aWNXSGhKd2ZDTFhkVjBoT1h0SmM?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-10",
    "event": "Intel stock stumbles following blockbuster $15 billion equity offering - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPYWtjaGZ6aElzSF9UNlVHaWdJNUhweTdFUm5sYmNGd1FhM1FiZF9rLWtmbmUzNTY1MTlqSXViYjl2ZXhsNXFjY1FEdFJtWXEteHFTQTZCbnNrUWY0QkRrY2tGSjdDQWc2QVdUd2NSTkQ1TmVRcWFxd2VabnNOQUZLeklXWFBYcnhmMUlHZ0FUbDktNFhnM0c4QjczMTZDcmhQdGJXSFhpMzlJZDA?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Fund Update: New $320.0M $INTC stock position opened by AustralianSuper Pty Ltd - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQM21NZXhBeFBIby1lbUpfOXpDcEVibzZHcmdqekNLLXhoaDBiUkxTSG5LZk5zRDlZQlR0cUpEcnRRNk9vY044TTRqeFFwd1ZyeTBxY25UdEFaWVNHYjlwSW9RYlpuTGVkQUFZcGxmUmgwQ2huZFhBM0FaZTBrMVpvUG9RcVp6QkM3Rkp0eEFIbEgtSkVwalVvOGFZQ1FRcFRCWmstNEFDZkc2VUZ5OXJpd0x5N25LaVZpSkE?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Intel (INTC) Stock Looks Undervalued On Sales But Fairly Valued On Cash Flow - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxNYWlZaW9BbkZIN2FaNjZud3dtcTVfUVhYQ0xidXpQVWhtLUx5OEVNWE5OaUFnaDZrVE15TERpY2Y3LXBjeDV5Vzgtb1o1ZzBUU2MwUk96S3dvTnhTTEROSnc1Q3QyekNQcUp3MkhON29ISEs3NTRTLXFVQ2xGQjRkaS1ULW1zOFI4bHk5dUNrWU5haFB4THVkNjdpZ1EteXJZQ19MUUh4ZVc1SVg3a2duX21WbXBvVDhhZ2ZJOXRlSFpnSEV4d2Yzb3EyLW8zN3fSAc8BQVVfeXFMTWFpWWlvQW5GSDdhWjY2bnd3bXE1X1FYWENMYnV6UFVobS1MeThFTVhOTmlBZ2g2a1RNeUxEaWNmNy1wY3g1eVc4LW9aNWcwVFNjMFJPekt3b054U0xETkp3NUN0MnpDUHFKdzJITjdvSEhLNzU0Uy1xVUNsRkI0ZGktVC1tczhSOGx5OXVDa1lOYWhQeEx1ZDY3aWdRLXlyWUNfTFFIeGVXNUlYN2tnbl9tVm1wb1Q4YWdmSTl0ZUhaZ0hFeHdmM29xMi1vMzd3?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Intel: The Turnaround Is Real, But The Stock Is Now Dangerous (NASDAQ:INTC) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQQUxGZmhCWUR4WTROUEwxWEhkOWVqb2FRTlBwSWNGMnZRQ0NuZ0M1djlmWFV2cXlaVUdrUmNPSDFDb1p1Uy1KV1dxRUY2REV5WUxOamp5YS1yUkVkTS1LTEZxd2ZRZjR6MnlhajBzVEtwVG4xRF9uX1JzS2ZLSGpuYTZiZ0JfSF9rcWUwYm1PdnJpeklGOVQ0WEg1YjVBeVJsWXc?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "What's Going On With Intel Stock Wednesday? - Intel (NASDAQ:INTC) - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNQXV3ZC1SRnZIMU1SZFotdFU2NTBGX0RRQ1JIa2xtRGFKaWxYTUw2TkNVLTg5anl2Rl9Sc3FrdkNoeWpyLTFhMG5jcVpHVDlLV2Z0cHVoenlrR0ZuVjJUcENGa095bzV3cVplam11SkYtQ0JtYlVmTVhfOTFvX3JtRlhXYkhjWUg1X3lLdHhrZFVya2p0OHBJdXRUSi01aW94dklKQkc5bEdyQU9NelQzc24wMllUcVo2TUsyVHlGSWktdXc?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Intel’s Rally Gave It a $20 Billion Opportunity and Now Comes the Hard Part - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPdERjenpsQkdtMnRUdjNkOG12TGdHZm9jV2dPcUotUmxLLVBKeFZtdnFKYUJTaHVGX3Y0Z3pCRjZFWWF5QWRidHV2ZGEtR3RlZHMyNWlPUzFTZ2pFaVRuc1RUaWRab1FwSWxkYUJZZm5UQkt4WVVuamM3Nmt3SmRvU0U0WDJKVHlULUh6OFBNYVFDbm13UHMwbDhrTFNhNGRUeXdobDZaUUJaRHZrdk1B?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "A $20 Billion Reason Why Intel Stock Is in Focus - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxONTM3cDNuT0FZYi00SGpsa3ZKUmhaazRQWkVmOEJzNDBnSXVxNEhFWUNLZ0V4WV9QZU1rQlhhb2ZJTW11T2Z4Q0ZBZkRNNjVJb1hUY0hNNG9CZm9VRkJ2U0tKQmN0NV9rQ1FpY2p0OWtVWno3amxVem9Ta1h2dnVnSjdRUWpNMmRQRzR2UEJpLTM5R1pOWFE?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-10",
    "event": "Why Intel (INTC) Stock Is Down Today - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPaHFRUm5WdURWSTlyNERXZWhZaURCX2xHdVpBd3NCMWN0SVI5Z0g3TUpyVW81MFdMUzN2R3RzTHZodDRQcjdNS1lPWWFUSjl4NXZiNnZOREFhald3eGNCQVpHV1ZfcGhhNW1lVGF4b1MyQnpQQzFDUFN2T1MxVXhLRjdLcW5mMFNONVVIZjdIYmpPTVY0WXVtbWZSRzd6UlE?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Intel Is Up 176% This Year. Is It Time to Take Profits on INTC, AMD, Broadcom, and NVIDIA? - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOQ295RXQ3ZjQ0a09vQTVIZ0NkY1FWUEFxTWNsRnRNMi03VHBmRU0xVWhNTndCWE1LUzA4cS0tdUpJTVlodjRYbm9RYkp6cGVuLTZlSlZvNGRiRDNzS2xaRjNaemFnWjFRb3NfcmNOSzRLN0dWUmd2WFl1bXR0bl9OWW9OVFZvZjM1RjZ1MHhlMC1vQnVZS2lXdURGUXBlQ3NQSS04QUVQRS04bjhiWk56TlRqZ2dQVmh2aXQ3UXVBN0xpT1NuaHFF?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-10",
    "event": "INTC Announces $15B Stock Offering To Support Capex Amid ‘Strong’ AI Compute Demand - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOV0JQaDI4U21Qd1E4Q1VpYkF0dlg3T182Nnc3OWt2MHVrQzU5OVRrdXlSc09WajlUQnozX0plYUFPZlpOUVNtOHdZNEdqTkRNSmtycTR2SlFjOGFFcFh3VDBVRjhwNW4xeFM1dWl6N2lnZjdTV1dvNGJHUEhDOHpBNktYbGs0RTR1SkxER1hwSXJjOTFRZWlFNlpPaTdib00?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-10",
    "event": "Intel Raises $20 Billion in Upsized Share Sale for AI Plans - Bloomberg.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNc3ZDd0Vqc1lWWG4zc1FRbnd5aHJuSWQ0MnBjZTBWR29PVWtianpySUdhWEhwYWhqR1hUNHNQMXg2bmhkMjhXV3ZUU2JZNVMtV0N0dUQ0R1BVQXZxOTU2VWFKMlBtQzlFelQ3VnR3SHlmaHRWdlo5Sjh4dnZXZ2FKS2RVYUFtT0FkZTR4MkxZY0FKR0dWYkNzbUo5SGUyN0dpTkFKbDM2Wm1nYXJtak9z?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-11",
    "event": "Investors Hated Intel’s $15 Billion Stock Sale, but Wall Street Wanted $100 Billion Worth - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPRFN5eUlIbXVIX2NtdFNSMTF4RGJkYW1DU0tuZndlTGtQVUw5U0pfZnVTWm9zTktBNUJvdzBHMUJ4QjRpUjZFazAxSXVQdm1HTnRSaHpQMlF4TlI1YWlza3FWTEQtWGxiWU5Ld2I4XzFIdndSMFBuNGFweUdTQ1BMVUFua2FfcWdYRnVEZ19yb1FIdkNGTktaTkFmRlhrUQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-11",
    "event": "Intel Stock Slips as $20 Billion Offering Expands Dilution - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQajMydmt2OGNwOE9KdjNaNzJJTjBHdkJBeGRrNnJoRnJqa0xzZ0JKRktyVFNDV29hUlBlQTZ1TjZUa0JOcFBoc293TS1xcjBkQ1pIUnB0YnVMYlYzTEZwYUVvQTBsZkNudm9MRkhLN0VETFhCa0o0M2ZmejhKU0JsM3hMWWZiTVFZWlppU2FVOFg2Y3RJdjhqQQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Should you buy Intel stock after $20 billion equity offering? BofA answers - Investing.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPMy1kVmVIR1h4NkM3QzMxa0phR2NKeWpGTnozWXhoN3hWME9XV0doN0FieWdMLWFJQ3hLUGt2OVFCRFdJaWRERk1idzc1NktuSWVtUGNYdlhYdE9ya2IyN29RYjk0aWZ4a3Jya2tjMjV4U28yY25vU2RTSFhTYjV4Nmo4aVhrWV9DVUJGOGVNWmoyMnV2THc0YXctVk5UQ2VHcWRrRk1TNWVicUhkX3kxbVBOU0hoTExqTHRabUtrNlYwaEgxNnRwbVhuQUhWOUE?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-10",
    "event": "Intel Stock Drops After $15 Billion Share Sale. Is AI Spending Getting Too Expensive? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPQ3EyQVRjaHdVSFdrcnMtclZYVjFmYm1EX05zUllBVXJFTWxBcEJOWV9veWZSTU5sRDNVNzlPcVJGNTFGTFU1cUQxTXZiRkRUdk1IZHhvLVdVN1NWRWg2VklKeWdwNUFBd0ZVaEU1LVdqaHBiZWc1em8zMU04c3ItM0ZqSGp3eGhaTVpkTm8xbERiVlE2M19CdA?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Intel Is Raising Billions in Equity. History Says This Is What the Stock Will Do Next. - Currently.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPak5xRVZDU0xFbTU5b0RZNEJfT0FRcnhDY21Jbmp1Zm42VWVGM2pGMGpKdmEtZ2lINXBfXzNWcHRNaHdnYU5FczI3WDM2bUJhOTdXMkViRVNldjRubW9CYWF2VGkxbkQtY1M5S0pZcjV1RGVmSjlqWC1PTTNDWHh6NU9seTF6RkpmQ21oOTlVa1BzZw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-10",
    "event": "Why is Intel stock sliding over 3% today? - Investing.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPREZOUDFfREUwbkhyREppemxRREJVc04zNTBIYUNuOHJleW1aN0QwQ2NraFpNYU1BOXFmT001NGY1NmdQcVE4WVFtakxMcnFNVDkzOXdWQU9FcnAxSldSeUJrSFBLMnBNcW4ydXUyWFUzZzZfTUI3TlBjQ0NQTmlEVmJUQ1RYWXc0WkpPNmNqSHFIcVVaa2l3Q0VjN25JbUlTdVJv?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-11",
    "event": "INTC Stock Gains Overnight: Chipmaker Raising Share Sale To Over $20B? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPUUVwbU5ZMTgzd0NRSW1SSE1PV2hyRGNGWDRKaUgyc2p6dnEzaXNSWFZaZV9rMjZVSlBIMy1XVFZrcXBNWTZiekQtY2E0MFFpWm50T1hWTy0wZm9LcjZ5ZFA2VzAwbU1zYmRGcGxRRDM5VVRJV21EckhrSXZ3LXRWMVJ4RXFiTklRWGh1UVhPWlFDZTlSLVBhcGtPNjBSaXl4bXZN?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-11",
    "event": "Intel Is Selling $15 Billion of Stock to Fund the AI Build-Out. The Dilution Is About 3%. The Premarket Hit Was 5%. - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNbmgyS3REb2l5R2lrVXNTRVhlSFJyallMbFQ5VHZqWG51NmY5blVYRFVBNGR6Q2QyeWFTdXgtVVhlNzZRM090dDlzblE0U1VlTVpiTDJ4T1htNEdmLWpxMldFRkZfeFExZnhRa04xUmhaXzJ4NDBaVFJGSU53VFBPVzdZczZ0RzNDWjBtOGFiMERPR3JLanhOeDJXTQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-10",
    "event": "Intel Stock Drops 4.5% as $15 Billion Share Sale Hits - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNV3JRU0pxREVZWEVhSWI2blRQenN5YkROZXhBNzVacWpOeHFOSmY1YWRGdkRUbW5hTk5kelVXb3VqU0JjZ0xpOHFaZGV5UnlhVDd5TUs4LVU2VElUS1Q4a3ZQZ3FqRlpiaXVQNkN5QnY1YUdCRUthWUNUWDBybnVXNDVpQURpWVZ0Z2FGcTZ6QQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-12",
    "event": "Better Buy: AMD Stock or Intel Stock? - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxOTm5VOTBQRUJOeTZFV3g1aFJhdms1SEd5Tm1KeFI5eVpyUFlQR2F0TDE3QmROOUlpdHFmSENKRkhJY2NlYnBSb2NmeFRRWEdlTEZDNnp1VWRMM05maTBycUtmRmdOOXlHdHZoNFpRTmthMjA4WkxSbkV2T1VIUG5YLVJaOFo?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-12",
    "event": "CrowdStrike Holdings (CRWD) Could Be 15% Above Fair Value As AI Security Buzz Builds",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — CrowdStrike Holdings (CRWD) is back in focus after its Fal.Con 2026 cybersecurity conference sold out faster than any pr...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/crowdstrike-holdings-crwd-could-15-181308575.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-12",
    "event": "Why Is CrowdStrike (CRWD) Stock Rocketing Higher Today",
    "type": "NEWS",
    "remark": "News via StockStory — Shares of cybersecurity platform provider CrowdStrike (NASDAQ:CRWD) jumped 5.2% in the afternoon session after reports s...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-crowdstrike-crwd-stock-rocketing-170122023.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-12",
    "event": "The Zacks Analyst Blog Highlights Meta Platforms, Texas Instruments, CrowdStrike and Weyco",
    "type": "NEWS",
    "remark": "News via Zacks — Meta's AI investments face monetization uncertainty, while Texas Instruments and CrowdStrike benefit from strong demand ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/zacks-analyst-blog-highlights-meta-141000887.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "Top Research Reports for Meta, Texas Instruments & CrowdStrike",
    "type": "NEWS",
    "remark": "News via Zacks — Meta's AI expansion across apps faces margin pressure and uncertain monetization, while WhatsApp and AI glasses add new ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/top-research-reports-meta-texas-203100631.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "Cerebras Stock Gets a Boost. Wedbush Sees More Upside Ahead of Earnings",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Cerebras Stock Gets a Fresh Boost as Wedbush Eyes $280 Target...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/cerebras-stock-gets-boost-wedbush-191815420.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "CrowdStrike Stock's Surge Showed Up In Its Bookings Two Reports Early",
    "type": "NEWS",
    "remark": "News via Trefis — The demand behind the run was already in its subscription commitments two reports before the price moved....",
    "url": "https://www.trefis.com/articles/611018/crowdstrike-stocks-surge-showed-up-in-its-bookings-two-reports-early/2026-08-11"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "Palo Alto Networks Stock Ran On A Threat That Management Had Already Named",
    "type": "NEWS",
    "remark": "News via Trefis — Palo Alto Networks had described the AI attack problem, raised its long-term target and bought an observability platform...",
    "url": "https://www.trefis.com/articles/611014/palo-alto-networks-stock-ran-on-a-threat-that-management-had-already-named/2026-08-11"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "How Cybersecurity Has Become Critical Tech Battlefield",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Cybersecurity faces a new era as hackers automate attacks. The troubling trend brings serious implications for AI stocks...",
    "url": "https://www.investors.com/news/technology/ai-stocks-cybersecurity-artificial-intelligence-battlefield/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "Wall Street's Latest Blockbuster Stock Split Has Arrived -- and This Industry Titan Has Rallied 337,000% Over the Last 32 Years",
    "type": "NEWS",
    "remark": "News via Motley Fool — This marks the sixth forward stock split for this consumer-facing giant....",
    "url": "https://www.fool.com/investing/2026/08/11/wall-st-latest-stock-split-arrived-rallied-337000/"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "Jim Cramer’s AI Security Play: Why CrowdStrike (CRWD) and Palo Alto (PANW) Are Dominating the Market",
    "type": "NEWS",
    "remark": "News via Insider Monkey — Wall Street’s early-year assumption that generative AI would commoditize cybersecurity led short sellers to bet heavily ...",
    "url": "https://finance.yahoo.com/technology/ai/articles/jim-cramer-ai-security-play-054641205.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "CrowdStrike Named a Leader in the 2026 IDC MarketScape for MDR/MXDR for the Enterprise Vendor Assessment",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/crowdstrike-named-leader-2026-idc-120000751.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-10",
    "event": "Cybersecurity Stocks Surge, With Palo Alto Networks and CrowdStrike Leading the Charge",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.investopedia.com/market-update-cybersecurity-stocks-surge-with-crowdstrike-and-palo-alto-networks-leading-the-charge-12042728?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-10",
    "event": "CrowdStrike, Palo Alto Networks stocks hit new highs after Black Hat",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://qz.com/crowdstrike-palo-alto-networks-stock-black-hat-ai-security-081026?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-10",
    "event": "CrowdStrike Holdings (CRWD) Fal.Con 2026 Sells Out With 10,000 Attendees",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/crowdstrike-holdings-crwd-fal-con-151403680.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-10",
    "event": "Retail investors end SpaceX buying spree as stock reclaims IPO price: AlphaCheck",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/article/retail-investors-end-spacex-buying-spree-as-stock-reclaims-ipo-price-alphacheck-144858062.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-10",
    "event": "Is Zscaler's Discounted Valuation a Buying Opportunity or a Value Trap?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/zscalers-discounted-valuation-buying-opportunity-131600441.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-10",
    "event": "3 Market-Beating Stocks Worth Your Attention",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/3-market-beating-stocks-worth-110922809.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-09",
    "event": "3 Mega-Cap Stocks to Research Further",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/3-mega-cap-stocks-research-214922807.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-08",
    "event": "Jim Cramer Favors Fortinet (FTNT) Alongside CrowdStrike (CRWD) and Palo Alto (PANW)",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jim-cramer-favors-fortinet-ftnt-135021351.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-08",
    "event": "Jim Cramer Names 5 Investing Themes and 13 Stocks to Buy for 2026",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://beincrypto.com/jim-cramer-stock-picks-2026/?.tsrc=rss"
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
    "date": "2026-08-07",
    "event": "CRWD Stock Rises 106% in 6 Months: Time to Hold or Book Profits? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPQ01rcUlTUnRFdE5sVksxdS1ENzFka2swSERqb0VlLXZxYmMxLTA0cl9hWXNGU1BjX2RXckNSeVFqMk96TFpFUFo5RC1HTjdFRXNvSUY2V0ZwRC1RaTBtdnZrQldFdG0zTVRSM1d2amtRdl9nUnBwaldtVjJkOVZZNEFwRXBSeXFjTVdzalpYSmw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-12",
    "event": "CrowdStrike (CRWD) Is Up 5.1% After Fal.Con 2026 Sells Out On AI Security Focus – Has The Bull Case Changed? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPYkhIX2R6bHhTbk9WeGRRYW5GLUlRaUJVTHhoZ0FqUS1PNGN5SFJ6WG1SS2ppNDFpRzBrMmV3NFBfa1VaLWF1eVdyaS1RZlptMExuVFRRNW15UERRTjdWRG1RcWtKdFU4VHpwLVlwaTdxNlNNNVZvMk1GUjFZaW04eEdjVTV1NFlOd01ER1lJVEpiTkZFWVB6RklqcTJkN0RITzFOM1lZcTFxZTVJODFZMndOdzhyYjRfS0NjVDZCRExiOHJfc0RzeGt2eFprdDhaQjNLY9IB2gFBVV95cUxOYzU0ZnROQmxjRE94UElPRHA3MGdVRmh1RVFlSnppczZTSUFQY21HcWhqb2F2a3VJRXhMYy1ZaURSUFk5SHVUYnJiYnpTbUhOUzY4QTByV2YtQm1WclNEMTJQNlB5Ul9hV2FBaU5SWC1DVTNCN0xBOG9iMmFrQ04xdXlNQjk0YVFGMUdFVnBMc05MTmFfdXRESHA2TVVuSm5FbUllLUlLRHN4c3FsLWphRHRld1QzbXBxVDFtaUtsdkFYejJ0VU1MekJYalZOTEtuR0F5bjNSQkRYZw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-08",
    "event": "CrowdStrike Stock (CRWD) Opinions on AI-Driven Cybersecurity Demand - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxNcXlQNnV1MENWRF9YQzhTcFd2V0tZZzNvQ2pmVURUNjZfS3VpRDdWRlZqSF9qSFlZYnBPV3lWMmE3UHhaczVpMm1YOFJTVE1DRWtFZzVGNUt1V0VMa0ZEcWJLM2NhOWhyRDJDNHc2SHZkT2tJVXBHTE9xVVBXUEFTbkc0OG43U19FM25uc0Z3UjZsUVlYVzNjME9vZVJwZVg2LTRyazFCYw?oc=5"
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
    "date": "2026-08-12",
    "event": "CRWD Maintains Rating by Citizens -- Price Target Raised to $230 - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNZ1lvekFsMEVRemJpYUYxSDRxTDJjemhoSlM5ZVFiVldwTF9OT1lmMW5hSGRwbjcyUnJNdkNUNmctdF9XTWxiUnR1MnRLZlFuUlRLRWVMN2p5YU50c3h2bG1tUGR4NVZSb0hYbktJRWlQMWdhUjl6Vi05WUFGbkM3bzhDaEZmaGR0LVNtX2pCUUJ2dWtWc1BHb3pMZjRHU0ky?oc=5"
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
    "event": "CrowdStrike Falcon Complete Delivers 1-Minute Median Time to Contain - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxQbFljWVdVY2JNYUZOZzNrQzJuTnZBSXQ2NXE2Mm8wUG02RW9jU1I0U2MzcHkzdzIyalB2eHR6VG9CQ1FnYXBmYVMtU3pMNHdIby13UWhxOENmQmUwTU92a3lNd1hSZ2dBU3lXTWlZM1lJVUNtZTE1RzNyMXNlNzhIRWhEYkNkWkYyY0pxTDFBbm00Y2VIeTVqNHc2Nk1HNkpyT1h1N3EwOGFUMXVSUkNXSzg5Um1qLU1QYjFz?oc=5"
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
    "event": "SPY is up 0.1% today, on CRWD stock price movement - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQNllWd1hReG9nVzR3RC04MHROa3VVUExITlY4N3BDb2ZYMGJZVVZOQlBsVXpHZFZXaXJ6T3V5OXlhMEczdENiWThBQTJkNGRwMERHMnJHTzhjYlR6R2R6Mkg4MU00YnNOU0l5ZmtuLWxncHJqLWo2Rk8yZkNMYmNkTjRsczZXeVlSMjZxZERhTGs?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "CRWD 260807 152.50C (CRWD260807C152500) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3gJBVV95cUxOWnhUQklCWnR3NFhRaGNFUDdKVTFqRWFqTHlGWjd4VnFBSUFUMXVBTl9MVzhCZkdsdHpyeUx0U2hWV25wOW1RWHdGTzZyVWhCWE14SVZxV2xKVmRDUjRSWHpFb2FSbnY2OWV4RFFCRy1fdk9RVENSOTRIM21yM0xQU19DSDNzai02ZFRCNEFPWWxaM3V6Z2xaYzV6QXNOM01nV1pEOHFBOTV3VnVoZlQyOHpUS0xsSU9ZeklxZk9qS0tsbWV5NkZOYVF6VHdUMVh0MGFuYW54Zm05bUZoV2ZmaVByenJsamFURDVib1ZKalJyenQ2blhOb3c1T3FVVUtHRXhjTjgyTDgtRnZtMVpDSzQ2ZGkwNm1EUHVVWGNnenR4dk1sSW0yVXJzZlFEaUNhVlM2STBGV3B2UWJsNEpKNzVWdVMxcEJ3OHcwdzVhdU82QTdJR18zdTFDUy1WQQ?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-12",
    "event": "CRWD Sep 2026 285.000 call (CRWD260925C00285000) stock price, news, quote and history - Yahoo Finance UK",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiZkFVX3lxTE5nVjdnTDYyQkFGN3VyX2VWU0M5aFFyLWhaSWs0ZDVkMEczbXhlVk93R1R4dTBxaWs2RkRNTkk4ZXlRZE04STdIWWktYW5ZZU9sMzZRMS1Rd2x6M2l4YXhGaUQ4Vk5NZw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "CRWD 260814 197.50P (CRWD260814P197500) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE9aX19rUUFnLTBEUnE1clZ2T0owYTdPREFKb19KYUVHRVg1TVFmQVhKNE1aa1ZhVVBubFZGZ2tiNDAtT1YwZFd3YWFJQUtqZkduc2txbVo2ZURmNTlhQU5Baw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-12",
    "event": "CRWD Jun 2027 690.000 put (CRWD270617P00690000) interactive stock chart - Yahoo Finance UK",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMibkFVX3lxTE5MV3lqNkZXaEVQbTQzZjRxN0dhVjNka0taT3pPNzJwa2JhMFRjMUNUX2xjR3gyQlh4WjJYek1OSlh5Z1VkZ29EMjdncm4zbkl2RXZQTE9VbC0xdUVxYXN2TURSZFZiYlA3TmNiMkNR?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-10",
    "event": "CrowdStrike Holdings Inc (CRWD) Stock Up 5.0% but GF Value Says Overvalued -- GF Score: 78/100 - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPeWItWndmS09qX0tpTTZIcjVQTWkzVFJvMXBaU0NLbG92R2s3SHZGTXI4RmpDMHk1U0lTRU1sS2xIR3ZULU82X2NTdGdna0ZTa1JoeUJ4WDBXdGtLYXhQY256WWF4OU45Sm9FVU8xcnVmZk5aQWNoT19PckFIbWlpUEVKeFdhdjdSRE9UdjdIbU1TVTV0ZjU0LWZBaWZpZGk2LXZNcmJ3UGZ6ZmExU0x4U0tYNnc3N1VwSEtQSW1HczE2dw?oc=5"
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
    "date": "2026-08-04",
    "event": "CrowdStrike (CRWD) Stock May Be Above Fair Value On AI Threat Report - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPWG9Pc21aMWRWRDRwV0xkU3hzQVZnWVZCTnQyX3lVbVREX0I2NDFLdnlQUmJlb09JUUg4YWZ4OTA5WWFjNlpFY3JkTDJRSXF6RzUxeDY5bDFfYnQ1SHU5RWR2SjNzM2NTZ2FUd0hDRXBheWVRSTQtbW5LNkhhbWthcEJPcm4xVmxNdzViZm9jT3VteWU4LS1UMWhTNTJKdw?oc=5"
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
    "date": "2026-08-11",
    "event": "PANW vs CRWD vs AVGO: Morningstar Has A 'Top Pick' Trading At A 40% Discount After Earnings - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOU0VaZk5RWHZFd3k3WVI0d21SUG1YY3B5RE52SElzVEllYnhvRUpRNUpRdEItQUZZSFJLdEFDZzBBYjVuUksxMGZaR1I1a0FabXVESjkzellJRTlWT3k5a0xBUlcwTV9RRW01Z2NsTGpkVHVmVUNLMjhuczhSTzZ5T1JDYzJmbXFiT1pmLXBPVEt4MGU0UlNkRGx2Y2hIcVdpZmhocVluakNiT1Z3djhaS04xS0ZWcjlr?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-08",
    "event": "CRWD 260807 135.00C (CRWD260807C135000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgJBVV95cUxQbGtOcVFMQ3FzU3RCWGlyUWtRWmwwaDROVUhxSEZGbUU0Y0JORWxWbHRBQUtobWtwemNraEJuVzBXYlZWWHZYQ0FSbjRkdjE0Yk95bXpUU2xHTWtNN2RUa1RNWmhKd09JLTM1Y2NuMlRGem9oTWlXUUVacHRTRDVmd1M2YzA4eUZNN1NPQ01oUkVIOVZkU21xM0xoYkljcFdUckdUTVdNa1VodTdhdUd4SEdYX0Z4ZG1wMlowbGxqWkQ1eHprc1l4NWJLWGVZWUYxbzlyVzVDYmpQQVhvcWU5N2d1WFNya21janlJaFpENTJIZEFwd2ZuZkliVWVYTElKdm52dVdaZHB1bHd3b0djR09xaEFnRzhzenlwS2JwNkt5RDlwVFJseVU2VEppLWZFM1VNbnFfckhNbTZURlE?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "CrowdStrike (CRWD) CEO George Kurtz sells 20,000 shares in 10b5-1 trades - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxONVJFR01TTExXYzdwU2dpeGtDaWRGT2tlXzNDRFphVHlxRk4yWnBfUWx4YXpqUVlZVjRJOTZ2MUhkREdxWUQ3M3NHbkFneTJSZDYzTDhZaGEwZjRpb0IyNUFkSzdjbWZfbTRMOTJFNVlMM3pTTTdMWnJnVDhIN3B6TU5LU1dUc2szbUhQY1F3SlBmZFI2R0c5YmFsVUF2VHNaU2xkcUo5NVk1em5YSmZ6NEl5aXo3RW9qMVRZ?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-12",
    "event": "Directional Asset Management's CrowdStrike Holdings Inc(CRWD) Holding History - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxQSDBXTGF5ZV80MUtWaTN2N3JKUWFheWh6U010OS1YZWI4SlpUWmpyeTIwQk1PNVRTQW1SVmJJblBILUstMlhqYXpsV0poejAzck9BUnJQeVNaUlVmRjIyXzltelZDQXdURmtpVzhrTU93dEVHdk9lclN4MElYTHpXUndmNHo?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-11",
    "event": "Troubles Ahead For Nvidia? CRWD Stock Too. Take A Look Real Estate Market (ZtnmhnExDd) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTFAtRjdMQ09zaTVZcWloeTZab00tbTZxc0xoSmdqdzlFNG1kRjJCeVBGZGF3TEw5VUlSc3pGWVVRUWw3WklqSXdBSDdsUGxTcncxUFFfU3RvWDFQYTA?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-07",
    "event": "Insider Sale: Director at $CRWD Sells 1,038 Shares - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPNU1NMTcxYUd6T1RmTjE0TjdlX2t6aFByN3FGaUh0ZG9iRUFxSkJhWmJUNEhOX0x2aXpVZDhrakVKYkpFRThRWGFROFAzdHd4cVZwVHNVNGVnTE40UjRHdVk3MHNBQzBrY1JLNFE1YzlBQnJMcjhoUHNqNEFJdDdlTldIYjBsOHI5Rm5POWRWVnhSVVE?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-10",
    "event": "CrowdStrike Holdings Inc Stock (CRWD) Moved Up by 4.23% on Aug 10: Key Drivers Unveiled - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNaGtNM3BmbWxrR1RkRGEzNGJ6RjVTQTVqQll5Sm1hdDI3Mzl6ZGVaM0Q4NVhBdHRLSE1WMjZMS19hMEZGX0tsTTFJSi14OWx2WWc2QUtBZG5BZ2E3SWtVTkNPZUNURkpOVl9XZlNSbzdSckN4cDNGd0FhclhmRDNOaXA0UGRmMnBtLThZ?oc=5"
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
    "date": "2026-08-11",
    "event": "A $2 Million Reason Why Barrick Mining Stock Is Down",
    "type": "NEWS",
    "remark": "News via Barchart — Barrick’s shares are under pressure as investors digest a nearly $2 billion Newmont deal along with a disappointing earn...",
    "url": "https://www.barchart.com/story/news/3784505/a-2-million-reason-why-barrick-mining-stock-is-down"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "Lake Victoria Gold Unveils Maiden 580,000-Ounce Resource at Tembo Project in Tanzania",
    "type": "NEWS",
    "remark": "News via Insider Monkey — Lake Victoria Gold Ltd. (TSXV:LVG) (OTCQB:LVGLF) (FSE:E1K) has released the maiden National Instrument 43-101 (NI 43-101...",
    "url": "https://finance.yahoo.com/markets/commodities/articles/lake-victoria-gold-unveils-maiden-161323906.html"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "Barrick Q2 Earnings Call Centers on Newmont Deal and IPO",
    "type": "NEWS",
    "remark": "News via Zacks — B's Q2 call spotlights its $4B Newmont deal, unchanged 2026 guidance and plans for a year-end North American gold IPO....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/barrick-q2-earnings-call-centers-140000914.html"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "Can Agnico Eagle Keep Earnings Shining Amid Cost Pressures?",
    "type": "NEWS",
    "remark": "News via Zacks — AEM shines with forecast-topping earnings, but rising unit costs and inflation pressure could test its margin discipline...",
    "url": "https://finance.yahoo.com/markets/commodities/articles/agnico-eagle-keep-earnings-shining-124300130.html"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "What Is Barrick Mining (TSX:ABX) Unlocking With Its Nevada Gold Mines Deal?",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Barrick Mining (TSX:ABX) and Newmont have resolved all outstanding disputes and updated the governance of their Nevada G...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/barrick-mining-tsx-abx-unlocking-121011547.html"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "Barrick, Newmont sign new agreement to finalise NGM joint venture",
    "type": "NEWS",
    "remark": "News via Mining Technology — The agreement adds Barrick’s Fourmile and Newmont’s Fiberline and Mike projects, forming a Nevada gold asset....",
    "url": "https://www.mining-technology.com/news/barrick-newmont-new-agreement-ngm-joint-venture/"
  },
  {
    "stock": "NEM",
    "date": "2026-08-11",
    "event": "Barrick Mining (B) Misses Q2 Earnings As $1.95 Billion JV Deal Clears IPO Path",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Barrick Gold (NYSE:B) reported a Q2 earnings miss alongside updated capital expenditure guidance. Barrick Gold and Newmo...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/barrick-mining-b-misses-q2-060759779.html"
  },
  {
    "stock": "NEM",
    "date": "2026-08-10",
    "event": "Gold.com Q2 Earnings Call Highlights",
    "type": "NEWS",
    "remark": "News via MarketBeat — Gold.com (NYSE:GOLD) reported second-quarter 2026 gold production above guidance, improved quarterly output and continue...",
    "url": "https://www.marketbeat.com/instant-alerts/goldcom-q2-earnings-call-highlights-2026-08-10/?utm_source=yahoofinance&utm_medium=yahoofinance"
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
    "date": "2026-08-10",
    "event": "WPM Q2 Earnings Beat Estimates on Higher Prices, Revenue Growth",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/commodities/articles/wpm-q2-earnings-beat-estimates-143300595.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-10",
    "event": "Barrick Mining Q2 Adjusted Net Earnings and Revenue Rise; Reaches an Agreement with Newmont",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/commodities/articles/barrick-mining-q2-adjusted-net-134115840.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-10",
    "event": "AEM Stock Pops 25% in a Month: What Should Investors Do Now?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/aem-stock-pops-25-month-130600702.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-10",
    "event": "Update: US Equity Futures Mostly Flat Pre-Bell Amid Lack of Progress in Middle East Peace Negotiations",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/us-equity-futures-mostly-flat-125721912.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-10",
    "event": "Barrick Gold Falls, Newmont Rises As Miners Agree On IPO",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/12ff7b55-b4a1-3940-b689-3d5259373c51/barrick-gold-falls%2C-newmont.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-10",
    "event": "Barrick Gets Newmont’s Green Light For Gold IPO – But B Stock Slides Premarket On Q2 Earnings Miss",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://stocktwits.com/news-articles/markets/equity/barrick-newmont-gold-ipo-q2-earnings-b-stock/cZojomhRJOe?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-10",
    "event": "Barrick and Newmont Reach Agreement Regarding Nevada Gold Mines Joint Venture",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/commodities/articles/barrick-newmont-reach-agreement-regarding-100000714.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-09",
    "event": "LunR Royalties (TSX:LUNR) Reports Earnings And Adds A Director, Is The Stock Overvalued?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/lunr-royalties-tsx-lunr-reports-130907306.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-09",
    "event": "Barrick Chairman's Planned Overhaul Meets Investor Backlash",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/barrick-chairmans-planned-overhaul-meets-120132508.html?.tsrc=rss"
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
    "date": "2026-08-11",
    "event": "Newmont Corporation (NEM) Stock Forecasts - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxQMGdVUFhMbU5qRkhaY2R1NzRKdXZWcExGX2MxY0xEUTRybjlxM3dlYjBGLWdKNVJVTDgxWGpxNUN0eWxRc3dXX3BhcTMycWMtSzdfUjZqRlJLSlhRUk9nQVRQNVlYRURQYS0tRmduLXRlMUxaNjZ6bVZrRTZBNWcxSHU3VHVmSGh3RTVtbw?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-12",
    "event": "Newmont (NYSE:NEM) Price Target Raised to $149.00 at Scotiabank - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPazZYSE5faUlCU053dk5kSE9RQTJrZ0lzT2JRQS1wZHRSSlROT29XVDU3bU1wZUotVzJObi1ySm8wNml2aWhYbFFiU1NVZWVfaTRSVi1xa3hja0VKckxPYWNVU3lGWTM3dGRZV25KajVWa25UTnFNLUg0WHJZazZybGtxRlU4bDcwbXk1aEtoLW5ueEpWU0ZLNUtVTGdrR3lnRHE3MHZRMGprU0pTOFcyWWFR?oc=5"
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
    "date": "2026-08-12",
    "event": "NEM Maintained by Scotiabank -- Price Target Raised to $149 - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQb1E4YW9vV3dHRWNXYkJXZXY5TTQ3TEF0RjNTZEJRNC12cXZFTTViRDNvN2VKdjNJTmU5d2NwMkZfTklKQjNqejZndFBjYktsdHdIemdYbkRlNFI3V0VVWFNkeVFMR2VmR0VJQ0VOem1fb04wSnNqVzJLVkhtNUR5c25MNGhZTm9xNzdvamlXOXNvak9MaE1vVHB3?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-09",
    "event": "I'm looking at Newmont stock (ticker NEM) and thinking ATH - investingLive",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPakl6WE5XY0puMGpxc2p3S3E3cDFpRjhUdDA5TURXTTByWDVYb2ViTlFLWmFBQnplZHljTUY3aXkybFd4c3N1dUwzUUxLT0QwVXhELVRrLWF0Rl9udXo2SmItSVZhRkZJNnJYdHUtalAyYmNBTDJCckpTd1ZNUUZLZ0hvTm9LbGcwYS1UenE3SlJnbktr?oc=5"
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
    "date": "2026-08-10",
    "event": "NEM 260814 93.00C (NEM260814C93000) Stock Community & Discussion - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMia0FVX3lxTE1kZURFQmhyeUp4SmdlbzVVX3JDa1FfQWg0ZUYzdkxFRHctU1l6N2pQSkhNenBDMndENUt0dlVVZUhGcWhYNnBIOVdQb01kRjEtc2NDejUyN1QwYTZLTlZINHRQdjUydXJ6NEpv?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-10",
    "event": "Big Gold Miners Agree On IPO. One Pops, One Sinks. - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPZEtkd1dzc1JkZTFoRy1lRUN3dm9sdHM4OXhnNU1NeGpHbk1EX0dTMmVyOUdMMXdZd1BQZm5XemxUb1hLSGRUVlRyLXRaR1NVemsyU2prMENwV19xY1RMeDhEQlZrbDFGOXhIRUpDM0R5SzVEeVBwc1IwMHRkUmlIUWttNC1JX2lxaUNhZUJB?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-07",
    "event": "Newmont Corp (NEM) CFO sells 11,445 shares at $105.09 each - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNMFo1NjFhY0phNVVMT2pablZlUzlBR1BLWnRUYV9wNVNZQ0M0WFdwSkcxTW5SbEJzNXRVam1qTUc5aU1nQmxNZzFzYjM2TXZEMmVnNmplLUluUHc1Q0Y0cmZtcnFSQ21JUjlNcDd5SUlkYzZsNnR1bVVBcHUzRXdpc3RTZjl1SHR5UW45bHNMVENUVkFYTjdITTV4dXprdW01TVlXZEVVMGZaaVlu?oc=5"
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
    "event": "Handelsbanken Fonder AB Trims Stock Holdings in Newmont Corporation $NEM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxOWldBU3VoYUlJaU1ob3BndXBFTDcxWWpUeFVXRUVpd2NLZWVhY25wR1BaeEM0VWVjMTFDVU5HSzU5MlMyWnVxeGdRRlkzam1nMXAxeGMyR1UwdUVvcWxKWXdyenFaOW1iRlNEOHpvWGJoWklBOVEtN20xNlkwcXdSQlkycF9DWVprWW1tQlZZMVdHcWY3bXZTUlR0WWZVTm42Z2RxMGRoTmFJSl9OdUI2c0NVYjNaUFh5Umdua3FqS05tdFBZRzdOUGtzcnU?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-12",
    "event": "Newmont (NEM) Resolved Nevada Gold Mines Disputes - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOQU5ieG9zTDJlMHUyN2dWazlSZ3lEQ0ViRlY4M0tBWm1BaDU1YzhZNVY0S3A0ZXI3NEktU2VnR01senRlZnpubnpBclBrb2tyWEN3VmlPQ1djb0xmcGtpQ2ZBWGFGU1EtSk00eVVvUl9RRmhEOTZuVTZZcEdkTklETjU3V0lJQ1FjenZYNkdRaS00bFRKSjlmWGpOQndCT0xlYkttNk13WDNfbERKNkhXSNIBtgFBVV95cUxOdEJ4UTN3NWpuVlBxaFFfZE5IRHFrWnZhX2lHSGdTdVJ1Mkxsd083WkFadEt4aGVTbXEyS3JfV2VzWHNVZEQwTFUzRjBXWXJXdFZfUUpKQnRoMW9HVzNKWHZpYU9DNnh4X1VGSmJxbWt4aFV0c3dSc3hDNEFnNUxQX0lMWWE2dy1aMEJDSlJqeUtmckdCeEp2djlxNWtMQmhsOHFucUtIeGtHYkxtcEJmVWhfTWRRQQ?oc=5"
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
    "date": "2026-08-11",
    "event": "NEM Looks 47.3% Overvalued on GF Value™ as Momentum Drives Shares Higher - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQcDl6WnlNSGxxOUx6MkVhYlNVSVdseXE2cV9Uc2p3dzRzbmNoWG1yTVRKc1Y4Um9mT0pheEZrSklnZlBHQjlURVAtUzRPYm03cWRZOVAzYmpSYU5JdXh6eGtFdUIxcW1vSTh0b0ZqVEFWZkllUkV1NTlwdFVMNWJtUm5venF1UDFObHNhQVExYm8xenFYVUg4OXVxc0tZUE1hZ2VsMGdNcmpiUThq?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-12",
    "event": "NewEdge Advisors LLC Sells 12,928 Shares of Newmont Corporation $NEM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOWmk5MlBWWnRuR0dZWjA4YlQ1MGZ1VmhqV1dLaGVDU2hyYkxOcEwwaGRLdVdBVVBJYXZTWGkwN21SZE94MTZpYmcxdThuVGRpSk1nODNyZGxzd0Z4QVRaWGRBUG8wSUctZE5WVHRfa2tiRU9oV0dGYjJrYjEtUXM5aHljNUNmM0h4NG5RTmR0WE5MUVNkblV6b01sZDFKQ201ZmotT2NVQjliWE1FSjNIQUhIeDlEdVNBTjlEdFhDaU9EUEd2aVE?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-10",
    "event": "Newmont Corporation Stock (NEM) Moved Up by 3.05% on Aug 10: Key Drivers Unveiled - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNcVJ6QVE4M2hDeDd2Mm54eG5XLW9JTHpEdUFjVFZibVJsQ2RoSXp0aDd5UVE2Sldhc3o5MVlIcmt0MjlhTzBsYWFISlJtNmhvcVVjVHM5VTB0ZVZqS1Ita3FSS2Zvcm9UZk9Sc211eWxNamlEUGlxWlo3M3R4Q0I2RGtRcGRvRUhfTVE?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-09",
    "event": "NEM Aug 2026 108.000 put (NEM260814P00108000) Stock Price, News, Quote & History - Yahoo! Finance Canada",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiZEFVX3lxTE9BRjRaLXNPSzNmeDc0NmFjeTM3UXAyRWRSUW50aVdMaS05VGpYSWxNWHZoWkdLRmQzZG05SGlaOXNKZUhZc0J5aHRCUy0yRTNSVU1RSzNObnVnMGJNR0VJVlk3Q3M?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-08",
    "event": "Does Newmont (NEM) Pairing Higher Q2 Earnings With Undervaluation Recast Its Risk Reward Profile? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNODZoNncyS0NWRkdhd0JCS2t5NGtKT1Y5TXJJb2kwUlUzbHNFeGFxbnpwQ05WR25vVWVuVk80YXNPd1Y4UWN4YnFFMGpXcXdEN1UtVW9kWDFodTdoOEJzaUJ4dThEc3hqLVJzbUx3bVRuTUpPMnpSOFdHS1RvUHYxRzBva3Vwdy05N3ZlTDB2NVIxc3BFRDUtSDFFLXphNjZiTGpkSTFSNHIxNEdPNlU0ekxxZGFYcXFhUGl0cGtxNmxjUdIBxwFBVV95cUxQVlA3eUQycWE3T2Y3MTlEeGhRUmFjaU80ckFpUy1BZ0VibndMOU0zd0RUc2xSM1lTZHhuUEVBQ3UxRFhUbGp4Q2VsNE9PSUdadjJzTlR3REpMMVdsVEx2N1BJcTZ1emlVQnhHUGVSR3dkRjFZNTJQSFN6RGN1QWFsRjVQSzREQXpQd0JvaWFqTW0xR3l6ZVozNm84NEFQMWt4YktNd3g5LUZmNHY4MTJyRGpSRUphRlN3bnNudVA2ZXdKTXRLX3Y0?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-09",
    "event": "Newmont (NEM) Reaffirmed Guidance In Q2, Is It Still Below Fair Value? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQZG41aXlhZGRybXBpNFhnWFA5M2dpT0dMb2hqUTB6end2YmtocHIyTkdsOTdnMEc4cWxwUVVTaXpJYlJfMm9aRk9RMkM5Zy1OcjFJOXNWaFo0cy1ENDlpaWtBaktmaWx6TDdaN1RYZk1MMkRGTlk5amlKQWhYZlBkemUtQ0V2M19VcnRheVV6RjMyMXRuVFFGc29MLUpPMkpoNDRSVHp1Y0Rwd1FBc3F0MVlwbDNQWXIyZjJIOHJ2RjBPd9IBxwFBVV95cUxNM2xDMldxZGhNbFoyRjJVQk1DcENvdFVJSUNtVkJMZG9FVE5iaUh5SjhWeWxYN3ptZFYtMGJtTFFkY3hIMmwxM1pvalVwVXd0ZnJJZmFoLV84NGRITFVpbmpLckJpZXF5QkRQRExnaDFOY2dGVUhBaXk5Q01zcXBiTjl2dTh4V0MyeEFwYXdzWE5CV1FoQnJkUTlMVk9NMENjMDRZQmZXbDItSWE3NVk0UmlFbEdwRlc0NndtaGJNeUhjdWkwbksw?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-10",
    "event": "NEM Aug 2026 90.000 put (NEM260828P00090000) Interactive Stock Chart - Yahoo! Finance Canada",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE83cWZud3M5S1NCSjZnbENacXZyWmxkR0V0NE1jUk5KVmZFSFRiQzljZ3VVZVJNY1kwa1N5bG1ZeldtdjkzbU9YbEZ1QmhwOFIwaTU1WFRWZUJRUnNmSnZTZ0gwbS1oSTVlLTBheQ?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-10",
    "event": "Newmont CEO Viljoen Sells Shares Under Pre-Arranged Trading Plan - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxQR2tPYnNHTWJCMkVVR1lkMDJ3bmpvSGFFdm9tWnBUSTNNVk5uYjJrb21IcmFJc25vM2M1N3g5bE1sSUdwUzNQZHctTXBTcE5PWTVCMVdUckpsblJFMHlXNXpEMFJqMmYxX2Zab1hNVUFzU2pRb056QV9POG1acGFnNTF5S2pqZ2ptZWlwTzFVUlVPUHp5Z1Npd3J2MVlWNTB2THh6WGFlNllZbFhia0V0MlI2NjFDY3FFMzYtWmNfSzF1Wk9McDJFOEFURlo0VVNjWDVQaGZRQS1Pd3BxY3c?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-07",
    "event": "Brian Tabolt Sells 11,445 Shares of Newmont (NYSE:NEM) Stock - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQeHh2eU9KRFJhcVAxRkd2ZnhZZjJvWi1vbDMzelFCcGRtWk9kUXg1RU41LU1VSl9WYm1FVGJXZHVQX3FCQjJyN2xKYWxyOHEwNVpmbUhJTUo2bkNlVTRVYVRjMW5YZDRXMVJLM2NpUWhRdFJzYktjTXg4VHgybkprX2E2MGlhT01jZk9oeXIwTVB4V2JhYTNBakNaUnJrdVlIM0N4eFVMMXNXSHptbFY0?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-08",
    "event": "Newmont Corporation $NEM Stake Lifted by Beacon Investment Advisory Services Inc. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxOaC1HNVF1WXhMU3Y2bU40M25pSEkzY0N0d3hnTVdST2g0dkI5OVlEQ2xIZjJYTlZYZC1LbmltMVd5V0FjbGMxcW0wUWh1dHNnY3ktbjhEWk9VbDRsZUhXQktZVVZ1RTRPUi16WXYxZUFZTVBfbmlHM2pxRnVUQmhfc0tnNkpFUVFVZjh2VEFzUC1KM05US2lQV2lTejVNZFBqNUVDeWE3cFItLTZiNjJPVTRQanNWZkZMY1k1T05FT3JBYlk2UUdyZ3ZtNGNCSGllNDF6TFhoNA?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-08",
    "event": "PensionDanmark Pensionsforsikringsaktieselskab Increases Stock Position in Newmont Corporation $NEM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxOcGwtY1Z2M085b0hsWTZCMHdzWlFxY2pfZzJWWm9NT3F2d1E1UjRneDh6dG9fN1hUNDgwbURSNUprblRBWXh3M19sbnpUeTRiVk9NTXNXdDJZWUJyNFF4V3QxLTJEc0Q1b2dIU3F1SUdiZkZXYTVGN24ydm4zR0daeloxMFBXQmJlMm9RNDRhWS1INlRXbjNNc0cyNTZwZmYwZmp3ejdKVnV5Q2VDRmt0ZlZXeVl6NFNBRjVObWxTbDBuQ2M5eTViMGxURWFhNDhvTHFNdm5NR20zaGRYR1BYalpHRW1QTGxIajF2WHYyNWU?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-12",
    "event": "Can L3Harris' Platform-Agnostic Model Expand Growth Opportunities?",
    "type": "NEWS",
    "remark": "News via Zacks — LHX expands defense opportunities through its platform-agnostic model, broad technology portfolio and flexible program p...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/l3harris-platform-agnostic-model-expand-141800411.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-12",
    "event": "1 High-Flying Stock to Target This Week and 2 Facing Headwinds",
    "type": "NEWS",
    "remark": "News via StockStory — “You get what you pay for” often applies to expensive stocks with best-in-class business models and execution. While the...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/1-high-flying-stock-target-115722505.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "Israeli Defense Contractor Beats Earnings Estimates; Stock Sinks Over Iran War Renewal",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Elbit Systems fell solidly after beating earnings. Iran war disruption fears and declining aerospace sales were possible...",
    "url": "https://www.investors.com/news/elbit-systems-iran-war-israel-defense-aerospace/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "Is Howmet Aerospace Stock a Buy After Q2 Earnings Beat & Raised Outlook?",
    "type": "NEWS",
    "remark": "News via Zacks — HWM beats Q2 estimates as commercial and defense demand surged, prompting higher 2026 revenue, EBITDA and earnings guida...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/howmet-aerospace-stock-buy-q2-173200208.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "RTX Outperforms Industry in the Past Month: How to Play the Stock?",
    "type": "NEWS",
    "remark": "News via Zacks — RTX's recent rally is supported by defense contract wins, technology milestones and rising 2026 estimates, despite its p...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-outperforms-industry-past-month-142200119.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "RTX (RTX) Following Fresh Missile Defense Contract And The Case For Modest Undervaluation",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Why RTX stock is back in focus after fresh missile defense contract RTX (RTX) is drawing renewed investor attention afte...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-rtx-following-fresh-missile-131155876.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-10",
    "event": "GE Stock Keeps Climbing. Should You Climb On?",
    "type": "NEWS",
    "remark": "News via Trefis — This jet engine powerhouse is flying high on real business strength, forcing investors to ask a disciplined question: is...",
    "url": "https://www.trefis.com/articles/610732/ge-stock-keeps-climbing-should-you-climb-on/2026-08-10"
  },
  {
    "stock": "RTX",
    "date": "2026-08-10",
    "event": "Embraer's Second-Quarter Earnings and Revenues Surpass Estimates",
    "type": "NEWS",
    "remark": "News via Zacks — EMBJ beats Q2 earnings and revenue estimates as deliveries and backlog climb, while stronger margins and cash flow drive...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/embraers-second-quarter-earnings-revenues-144500599.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "RTX's Collins Aerospace to support modernization of U.S. Army's Chinook helicopters",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/rtxs-collins-aerospace-support-modernization-130000717.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-10",
    "event": "Is General Dynamics (GD) Outperforming Other Aerospace Stocks This Year?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/general-dynamics-gd-outperforming-other-134003764.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-10",
    "event": "RTX's Raytheon awarded $745 million contract for SM-3 IIA interceptors",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/rtxs-raytheon-awarded-745-million-130000138.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-09",
    "event": "Pentagon asks defence firms to accelerate weapons production",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/economy/policy/articles/pentagon-asks-defence-firms-accelerate-010848666.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-07",
    "event": "Honeywell Aerospace Needs to Resolve Supply Chain Issues for Upside, Morgan Stanley Says",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/honeywell-aerospace-needs-resolve-supply-150840001.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-07",
    "event": "Apple Among Three Stocks In Voracious Demand. Funds Also Feast On 14 Others.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/7e310c90-76c1-3769-96ef-87693459878e/apple-among-three-stocks-in.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-06",
    "event": "RTX (RTX) vs. Lockheed Martin (LMT): How Street Is Pricing Two Defense Giants",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-rtx-vs-lockheed-martin-214357572.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-06",
    "event": "How Woodward's Q3 Beat and Raised Outlook Could Shape 2027 Growth",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/woodwards-q3-beat-raised-outlook-163700496.html?.tsrc=rss"
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
    "date": "2026-08-12",
    "event": "Analysts’ Top Industrial Goods Picks: RTX (RTX), Ametek (AME) - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOb2VzUWZDT0hKOEZiTkRYSDJTbk5yaUZETmdxSFNfWjY5dXl1THFPVEx0Y0F2dEFFcnBtU1ktN2xsN2p4NzRwcUI2M2t5NXdXLVhmc3oyZFBVZ1BnWVltbnliWmNQbzBwaDhVdjAyd05GT2VFNUtXclhoS2JuTjRldFdWX3R0MG1sYk93Mm9yaEdJSnRDN3pSVEw4cElhNVFrVHVHSFRMRklVclZYLUJHVkRXeFZvUGU3TnZTRE5Ja0VtN1MyZklzWmNyb0tFb2MybmpYRA?oc=5"
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
    "date": "2026-07-23",
    "event": "RTX Stock Rises After Strong Earnings but Faces 2 Iran War Headwinds - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE5YcWl5SDlTYWh3OFNqaS15YW1TSDdScDN2ZHY1Z0d3UmpqdjVFNVhlUE5kcHhKby1FZ2tFS0gwSVRGRGVfanBEQkxfdS1rREpRdFNfcFU5OTZDWmQwckROd291RjlTVTEtdG9qODVxWDEtZ1BN?oc=5"
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
    "date": "2026-08-06",
    "event": "Fund Update: New $13.9M $RTX stock position opened by Global Retirement Partners, LLC - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOcEc4Nm90MlJoTFNQWExSR2VFTDJUem1sdHNQWXhBWVRsbWt4elNMVDhwQ3VZNmMwTWQ1WnR2THlNaG04LUJiS0hxb01DZEdnQi1XS1l5M2R2bXkxVHp2bkhIVWdxd1pDNFk2SFFLTzdGTWZKRDZXSXBzQXhncjVyeUZFUEF1dmZZN1RYbTFKQ2hGdzBzR2dCbWZfNzlubFhHU2JZeXBNbzRjZEppWjJCZDN4SmtnOWdyVVNaZENoQmc2bHZO?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-09",
    "event": "1 High-Flying Stock to Target This Week and 2 Facing Headwinds - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNak5VTGx4S0dYeXZYb3VTZHlWb1B3N1Z3N240a29FVkFmYTc2R1E2S2JBdTV3UXpPVGNha0owck8yZWowQWN1R2dzNkRtcTBmb2hxcEdEbUx1cjhIRHZZMmlvX1VMNmhiZERScllqejlWSHlmMmlYNm5wWDRBenNIOTM2V0dmR19YMXo4aDlObHhGUlp5Mmp4U2FpUGxpX3VjX2hQd1I5ZWdyRFZaSzJtcDZGMk0zNGVZVEN6SWdHLXUwdw?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "AdviceOne Advisory Services LLC Has $115.20 Million Stock Position in RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxQTnR0WVc1QWx1Q2xwWEFrNjlzWHRZcXp6blIyVHFrLW92YTZ0WXN2Rkk1ZFBTTzVJNnBRWjZ1UVpUWVJGY1MteDVEeGZqTm9NSS1FOEk3YkNsRWlSR19IclNLSDh5OURUdUU3UV93bU0zblZ2ZmJ2dWtIZDFOeDRBaWZpNDJhS3djOXhSSXdxMXVwdWplUVBfNGRLazdrRlpFRFlBMTNFS0gzeDVBalZVMmpvUUdMVnBycGVQUTc0UE4xcDZqOU5NdkVadW1Bb1lxcDd3VVhlenVDbktyYzFGQXVB?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-10",
    "event": "U.S. Navy Sees Raytheon's HADALUS Launch Underwater for First Time - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNSDl2UnBFNmIwWEhScVUzRHdtUHB2WlpENFZPTEJiQVFVcWRTN3d3dS01a25MQzVNaUEwRGp0TmVhMmhUUkJSeFJOaTJ5RkotZklpV3VFdlFZMzZ6VFNQeGk0dUQ5MTgycjE0NU5BNUN3Vl91THh0cWpFZEFSbXYwMGxGQ0xRZGZOYjJJZ3ZRVm9fcGFuNmMtX2REc1htSW5heC1jVlk2SUZSZXRKZzlTam5Ndw?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-07-23",
    "event": "Lockheed Martin, RTX lift 2026 forecasts as Pentagon looks to restock weapons - Reuters",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxNTF9RanhOcnotQzBGd3N4c2V4ZUwtcEJBSklsTkh4V0FaLVNwaDBsOHZ3bFFJeG1lMmtiVXFiV3lIYmJzTE9FS3puZ1ZMWmR6ejhoZEZobXZlZi1SZDRPenlQNmJXLWV3enNwRnJCakVhbm5LVWhZazIxMlBfS3hJWFQ0R3N4Nk8xWkoyd3l2NnhGaDA5cVB0aDhnTXl1dTJNdU1adzZXUnNqbkgtT0s0Q1JBc2sxeGZLM0RHMlhrVWRMcmlENWpzN0V1RTlrQQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-06-30",
    "event": "RTX Stock Is Up 33% in the Past Year. Here’s What a $271 Billion Backlog Means for 2027 - TIKR.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxQcDdwRVBROTRMN0RPcnhiVVByalgxaW9PVnUwLVRVSS1wNFVKdTY1aXNCaEgtOUx4UEIxQTFjRkc1NF9xWTI5RXIwTzB2bUxzVGttNGpIMllBUGo0X0hUUHRsNi0tODV5bjhGSGtWdE9MWUxncFVnMTFYY3NpWnBqeTRfczlIbGlvN256QXVKaVB4d09MbmQ2d1hwdEljbHRzRndvTWItVE5OQ0d1MkE?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-11",
    "event": "RTX Outperforms Industry in the Past Month: How to Play the Stock? - Zacks Investment Research",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNaC1vdmthSktFUVNPd01SY1RRLWRFVkF1Mms5NUhmd2xFSU9INDNRU1JIODdQQW96OVl3MUZnYjgwOUVaeFZvZ0lNWTBPMlNPM1hpcmRPb0ZRenhmZ2NMbTAyMDdpd0VvNHg3eDJEcGVZNjl3cURlVTlxNlJubzJtdmg4eHV0eExBbURJaDRreEtybWs1RjJmRDJucDJMYjJIY25wdUVxcVk?oc=5"
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
    "date": "2026-08-10",
    "event": "Raytheon Receives $745M for Missile-Defense Interceptors - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNMXo3TTcwekwzVTFLZ3lieGY5WlFWVjRrZmhMWnhVQlRqRm1wQ09fXzdDRDNkczZoWEF2a2doTnBBRDFWaW1xaTBmMVllZW5sYkhtZFkyVlhVajB2YkNXTHNxN0piRGhJRTU5T0wxSVM0TjhfenM0Y0dlYVExSDh4c2VjYVlWWnJ1SkM1ekZIZnVpSGlUMlpUWTg2Szk5aDktcF9UMWtsZUJoZHltaDhN?oc=5"
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
    "date": "2026-07-23",
    "event": "RTX (NYSE:RTX) Reports Upbeat Q2 CY2026, Stock Soars - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQR3d5dWpISVNYVzJmYjNJY05xZll6VGRlSFE1Ymk0cS00R0dpcmtfUGh0ZGFqaHpmcm4zSnNXM3phSDhxeGJRVUpIZnNHSVV0UjJlV3ZENm5pdUdheC1OS3VzcEcwSkpNVkRBTDZkR1BEWGRQY0ZGVzlLZGs3ZlBUVzZPVXd1dXhRQkhHQ1Y0Ti16U2lyUVBn?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-07-02",
    "event": "Why RTX (RTX) Stock Is Up Today - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOcTBGZDV2THk5S2ZEVG03Z2xhWnNfTTA1NU9TSTBuN0VUQ1lIalk3eEdTcmROSTBOVEFUMHlfV1RuSi1HU2JFZmNEd3hBaGtQUEIxU2Z6RGVkR1NqcWJNb0M3RlFSYUsyV0JHbmt6ZERWQXgwQTZNREtQSGNXc1h3Y2MyaWwtZmpzdGFKdUQ0aDFlUQ?oc=5"
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
    "date": "2026-07-21",
    "event": "Should You Buy, Hold or Sell RTX Stock Ahead of Q2 Earnings? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOTTR5NEs1aTNJVVBycVkySk9zZVdWb0xPQ2stblRpSDhWbUg0MDZ1T01SQ2EtWmtfWW8ydm9UdThTTDZpXzBSRGR4VHRTa3B3bjJpOFp1bmw2MzRRQmNhbXlVU3h6eHZmbTFSRjFiWXNmQUdhZmdybTY1V0VmOVJKNTU0eUJmdmFIOGpUNUpOeXJ0QQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-07-23",
    "event": "RTX stock jumps as company lifts guidance after Q2 beat - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOaU1WXzZkY29jZkNlbUs1bE9abmJ0QVVqcjFRa1NnY3BtZHlkMDQzVkNEVFdESWt2MWRDZUkwazRoQkdhSWRyYVQ0YXg5clY3NThqYU9RQzNPbVhDczh3dG1XQk45bks2TTFPSUVvZGd1dmhRRGV6UFRNMDVzdURGM3FqR3BXNHV6QTBFN01wNUVHX2lKLXNxVmZn?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-07-27",
    "event": "Why Did AAPL, FBRX, RTX Stocks Surge To 52-Week Highs Today? - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQX0lqLWlJX0YzYnhVLVFlOHFGS3NaQXhIWERkLTF1dERhTDJTRVRrOXNjazVoTjcwQkQ0aS1Lem5jSHFEdjdycXQxVks3ZGNvTUtqYnRGWFVjLWpiZWszNXdQZnNEU3pHNXQ4RWZfWDVqTk1ZdUx1eTFpWEoyN25UQjU0bVF6YnVSbUVuOG1pdmpHSWdIa29UaDZ1Nl9Rcm9WckVPREJLOUJOVkx1U0xiTFNfYjBQUUZ5QW4tdWJ3?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-07",
    "event": "RTX Is Up 44% in the Past Year and Near a Record High. Is It Too Late to Buy? - TIKR.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOZHBuM3N0V0dKVUhzd2YwaHNzbEw4eC1tZURObGtQWERuRW9DMmRwOTY1RncwNkdfdVhNQUF2WVpRQW1lN01HS1FCcmN0WVgxc0k1VGlmR0xKVlpCX0ZNV3FzbVE4RTZPaGJUbW1BWFdlYW0xdGFMdWtHRUY5WHF6akQ1aS1EMmdpemRkc0NFVTc0LTM0d3NCWGtjX3NVQ2hhX1E?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-10",
    "event": "Is General Dynamics (GD) Outperforming Other Aerospace Stocks This Year? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQQ29SUDlMd0pDQTFIcGk3Z1k5S252bTg1UXJGSkQ2Vy1NbXNnVWFCNjl0bUt1TEFKWmZodDdKbEdvdmJDX2k0dnRiYm5kNWVDdjJoZkZsTXFZb19NMkZDQ1FZZFF0RWdQcXA3aS1QcDdWN2hjbkxSSmNQZWRVbS1zdTdrR19hSUxVYVdJUldvQjBoVHlPTDNVNHZqWndKamxlYWdrcTZtdw?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-10",
    "event": "Hennion & Walsh Asset Management Inc. Acquires 4,634 Shares of RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNWVY1cUE4aldid0k2VlZYdkxVLTE1akVvVVFaWDZoM3VaMVE1RE1RaUtIczNBT09aZmI4SWpYaUozdFUzZ1E3MDNRa3BiZTFNRkNfMUJ3Q0pHRk1Kc1VBT1VaaVdGRlNhenJHeThiVW5TZzMxVnotM1lLUTVFMmJsZGY0RUt2Q3BLNmw3dThRQmRrR0dSQU5MMGJvOEFpTnBRZlVWRnRwVm9jYzNFdHJLM1VBRk9xQmtsWHdRdGZkanJjeVZyMzRUVmdPVkVubWNzb0lQZXhB?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-12",
    "event": "Rocket Lab Stock Sold Off While Its Operating Margin Kept Climbing",
    "type": "NEWS",
    "remark": "News via Trefis — Cash burn and a softer gross-margin guide have added to a slide that leaves the stock well below its high, yet its opera...",
    "url": "https://www.trefis.com/articles/611170/rocket-lab-stock-sold-off-while-its-operating-margin-kept-climbing/2026-08-12"
  },
  {
    "stock": "LMT",
    "date": "2026-08-12",
    "event": "Palantir Just Crushed Earnings Again. These 2 Legacy Defense Stocks Are the Cheaper Way to Play the Same Budget.",
    "type": "NEWS",
    "remark": "News via Motley Fool — The defense spending supercycle has only just begun....",
    "url": "https://www.fool.com/investing/2026/08/12/palantir-crush-earnings-legacy-defense-stocks/"
  },
  {
    "stock": "LMT",
    "date": "2026-08-12",
    "event": "Lockheed Martin demonstrates AI-powered drone detection system using 5G networks",
    "type": "NEWS",
    "remark": "News via InvestorsHub — Lockheed Martin (NYSE:LMT), Verizon (NYSE:VZ), Keysight Technologies (NYSE:KEYS), ODC and Astris AI completed a live dem...",
    "url": "https://investorshub.advfn.com/market-news/article/34109/lockheed-martin-demonstrates-ai-powered-drone-detection-system-using-5g-networks"
  },
  {
    "stock": "LMT",
    "date": "2026-08-12",
    "event": "Firefly CEO Jason Kim Sees ‘So Much Demand’ For Rocket Launches As Capacity Hits Record Constraints",
    "type": "NEWS",
    "remark": "News via Stocktwits — Firefly Aerospace CEO Jason Kim sees traction for its Alpha and larger Eclipse launch vehicles amid a surge in demand fo...",
    "url": "https://stocktwits.com/news-articles/markets/equity/firefly-ceo-jason-kim-sees-so-much-demand-for-rocket-launches-as-capacity-hits-record-constraints/cZo8RoTRJg0"
  },
  {
    "stock": "LMT",
    "date": "2026-08-12",
    "event": "FLY Stock Rises On Strong Q2 Revenue — ‘Demand Is Not The Problem…Ramping Up Production Is,’ Says CEO",
    "type": "NEWS",
    "remark": "News via Stocktwits — CEO Jason Kim said on Tuesday that demand for launch capacity is “getting amplified.”...",
    "url": "https://stocktwits.com/news-articles/markets/equity/fly-stock-rises-on-strong-q2-revenue-demand-is-not-the-problem-ramping-up-production-is-says-ceo/cZoFm84RJX8"
  },
  {
    "stock": "LMT",
    "date": "2026-08-11",
    "event": "Lockheed Martin (LMT) Opens Strigo Center To Speed Modular Missile Development",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Lockheed Martin (NYSE:LMT) has launched its Strigo Product Center to speed up development of modular missile technology ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/lockheed-martin-lmt-opens-strigo-231744558.html"
  },
  {
    "stock": "LMT",
    "date": "2026-08-12",
    "event": "Lockheed Martin, Verizon, Keysight, ODC and Astris AI Demonstrate Technology for Public Airspace Protection with NVIDIA Technology",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/lockheed-martin-verizon-keysight-odc-103000358.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-11",
    "event": "Jim Cramer Endorses Lockheed Martin as “Sensational”",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jim-cramer-endorses-lockheed-martin-052029334.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-11",
    "event": "Why Is the U.S. Army Buying $54 Billion Worth of Patriot Missiles From Lockheed Martin?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/11/us-army-buys-54-billion-worth-of-patriot-missiles/?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-11",
    "event": "Firefly Aerospace Announces Extension of Multi-Launch Agreement with Lockheed Martin Through 2031",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/firefly-aerospace-announces-extension-multi-200500862.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-11",
    "event": "Why Did The Pentagon Just Hand Lockheed Martin (LMT) $58.62B?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-did-pentagon-just-hand-163937740.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-11",
    "event": "Joby builds defense muscle with $500M buy of Resonant Sciences",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.axios.com/2026/08/11/joby-resonant-defense-acquisition-ohio#utm_source=yahoo_finance&utm_medium=partner&utm_campaign=subs-partner-yahoo-finance-AI?.tsrc=rss"
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
    "date": "2026-08-11",
    "event": "Lockheed Martin (LMT) Stock May Be Undervalued Despite Its 89% 5 Year Run - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQVWVoOTcwX3ZhSGx6X20xTVFOSFJZa0h5V0lmMXpDZ0lGOTRrMXplNVo5WDNEdlA4c3pxV3RvbDNCc1JPbXpNYW11cmtTb2FWQldZY1RyWnRURVlqZzlGcUIyeDgtVUZoNmdOMGhZMGcwcGNSNmFscFhCNGZNdVJTakdpbXdzYVNoS216cFRtbWtYVjVnYnhfZExNQ3d2TW5HVGh5eEpVMzd6VWVXUkdiSXpxMlB5aUFZQVNGbGV4MjlGRXMwSEVtYjJ5c3NDZXgteVNnVW930gHWAUFVX3lxTFBVZWg5NzBfdmFIbHpfbTFNUU5IUllrSHlXSWYxekNnSUY5NGsxemU1WjlYM0R2UDhzenFXdG9sM0JzUk9tek1hbXVya1NvYVZCV1ljVHJadFRFWWpnOUZxQjJ4OC1VRmg2Z04waFkwZzBwY1I2YWxwWEI0Zk11UlNqR2ltd3NhU2hLbXpwVG1ta1hWNWdieF9kTE1Dd3ZNbkdUaHl4SlUzN3pVZVdSR2JJenEyUHlpQVlBU0ZsZXgyOUZFczBIRW1iMnlzc0NleC15U2dVb3c?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-12",
    "event": "Drones Tracked in Miami Area Using Existing 5G Network - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQZm5XdDk5T3lCcmV3T00wZWhocEtxNE1ZVDU1WUFQdExGM3BkR0hQbnY2dnhUQUk4UWZMcU90TG5ZejJBNlRiU2xmWV8wcWFabGNyZ1I2OG15c3p0VURIYjZ4TDYxSDdUeUJrRE9FX2t4azFZWW5sTy1qWWxWSWlIVDg0WmNIWnd3VGpYLVdXdHp2ZmR2eFJxeFpacTljeUtLbXlFSklCTHlnejJ0d28tdEtEUHZjWTg?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-12",
    "event": "Lockheed Martin tests 5G drone detection, containerized rocket launcher (LMT:NYSE) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPTWFyWmNpOGNmajBVaEx0MnVsNmVZS25MV3NpMlRkQmVPSzUtc1gzVGlvTC1vOGlONVE2NVRsbGl6b3g3dDVkZWxWaEZVVGdhT1ItTTNGREtZczhyOUM1MHg0SHY0ZXA0eXMxcnViVDhzRmNsR2ltLUQ1ZndfTWVzdjJZTFlZTTlDcC0xNDBJOFlzaDQ3Vnd1UFd3MEllNDhiRlcySjZ6dzBDX0NC?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-12",
    "event": "Wedge Capital Management L L P NC Increases Stock Position in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxNOERPWTRBdWRMS3Q2WWJ4UDFmbkVKREJRclRHVnZCWXpQTHVsUVhhanNkSGFPcy1TTlNOcFpra0gtUVU1b2tnREE5eHRwRzY4bXRFUUluZmtKY3ZLeldQdkpkMFRnTjZlY012LUxaLVJRcHBGdmFiV2hmZTdNb0xTUDQyNlNqUmowSXhqX2t6cm5pWDdoUnRrbGZnekZUcUpnNlliX0FjaDhvMEtCSFQ5MlZvSExYNWMtUGRSekhmZU9kTTFtYzByNHZ6VkJMaUxQb2Y2dTQ5R1dYeW91SmMxQktfMDI1eFU0OHc?oc=5"
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
    "date": "2026-08-12",
    "event": "LMT Looks 8.3% Overvalued on GF Value™ as Dividend Remains Attra - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPQTkzeDl4MHRneFNwSzNCMC1oWnFsbElyRXRfX1pOck5kbVlCZWNobnB0RmxiNHNaMGpVQklzWl9wWjh1MXdfeTI1QUZFWHFuazZIZ0NLM2VVWWZsUUVrZTR2Nzgxa2ltemJvR25XSzZGZjBicEY0MWQ0TUJHUHdjaEFyQ1h3TjV2bmVZQUc0S3N5cUpnTE9sbFY1Q0ZUWXc1bEZVVlFGMVM?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-10",
    "event": "Lockheed Martin Corp Stock (LMT) Moved Up by 3.00% on Aug 10: What Investors Need To Know - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxNcEZkWWxFazdWYkxEblRCeG45Nno3Mnh5NzItR25JSjliLTltczduU0N6cmlQZXNNVXJwdkpJdHIyQVNSbjRXRkdoNVJMTWdjRVA0WDEwdnJjM2t1X0p5LWRLMDY5NzJLVThDeGcybFpaRGFIcFRqdkxtdGNmS0NOaTV4and2UkxtOWc?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-10",
    "event": "LMT 260814 360.00P (LMT260814P360000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE5uRWdxMzBOSERlQ3NYUmoxU2VtdVZFUTJVUWFJcUwxT09fdklQZUl4RGlUMXdlYkVpc0pBZzd4WC1jVFBhWlZiR2xkMlBFcnFPRjJYWloyVklEaDI0SXp3?oc=5"
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
    "date": "2026-08-11",
    "event": "Lockheed Martin (LMT) insider schedules NYSE sale of 2,410 common shares - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOYVdmSG44aGVGUXF6NlQweHFCeTRhZnlPSVVualowdHZaczJYOEtQazhMSVRuSEFQenpobEdlT3E1M3BFcG9XUERVdXlwQUNiVGFOWmJvem1ucGhVcWFsaFlUSHRNbU9pY1VWT2RVWkV6SGhzcVZSaTUyc0w5X0x5UklnZ1E0a3R5RXhzXzdWR2IwWTJHSFgwQTB1MUg?oc=5"
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
    "date": "2026-08-10",
    "event": "Lockheed Martin's Interceptor Motor Fires in Orbit-Like Chamber - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOR18wajNaaFA1MlV5UFI0TEkxU0dQTmFJWXdvdHU2QUxiYzFMbU9adFZ3T3RYSkVjTWJvNm51ZkhULUc0cjBlbjRiNHpkVXZacXR3TS1selkzaFFxdWJ5Z2tqc1ZTVjRwdmJoYnRHSnFVM3FhVlNGclFwbnRUSjBVbVZzR2tVcnZhaE5JN095Tk9ucC1aQTRlc25SdS10WHgyRURvTVV3QWozVGlHY3c1M0Yyc2NGZw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-11",
    "event": "Lockheed Martin (LMT) Opens Strigo Center To Speed Modular Missile Development - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPWjV0aGMwWnpldUlXc1A1NDI3dTZRX0c4ZGZJeERxNEI5czk4YlF6WkVVQUpRWVJDbFFyajlvU2U1ZzNVanQ3cDRHX1d1X2EtWkx1NU5Bb196VnZJcHU0X0p1LTcxVlNyaXFTZ2VqOWpCS3ppbmxRQXdWTE1Ua0RLM2dBYXZLMkU0UHpnR1BVZnFlcXppRFNvZGt6elBmUQ?oc=5"
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
    "date": "2026-07-23",
    "event": "LMT Stock Soars as Lockheed Martin Raises Annual Forecast - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOG1IR3JKUDNUbUZKNFdnMnFjU1ZIUngzbFlvcmxNclduVFR0d0dSWDRBdjVvaDJsUTE5X2VqeV9PRXFrS3FHenExWjFoX0VPNGduS2t6eUQ1YllXZTlDR1IweEVSN0RVbnAtMm5pc0xrdkRtWGJpbXhkY2FyQU9feXlfd1BQTG9nc3BXelpDVXZwZWR6OTdYVVhJZE8?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-21",
    "event": "Is Lockheed Martin (LMT) Undervalued On Its $10.5b GLSS2 Contract Win? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNNkhNY3gwV0hYdUo0MmdHS0JJMmwtTUN1MkNIUHpuOEFiYWlsV0RKTGttMDl3U1FjNVlzU28xOHNDSTBlY3EzX3ZxYWMxclNfR3Q3VXlBekh2d1RrdGY4N1lmRzl5dzFQSllNdGlDb0p0UE9ISHhDbWUyQUhCTW1ETDdqUHl5bFV0dmtwMnQ2VnRVckd5ZS1NOWJXMWg5bHBZ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-10",
    "event": "Lockheed Martin (LMT) Lands Major Defense Wins, Is The Upside Already Priced In? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxQenVxbkVHYlVsa1dqeVFVOXJRTHZabVAtWG5OS3lyME4wT1V2S0MtR2VuSHM5aTc2Z2RiTzVQSW5CaE5HVWEtdWZUdmJDVFhqak9WalZCTjBsNTJ5SHROY2JqSWoxQzVFOC1fbmRQclhqUUQzUFJDTFdmQmhJaTgyQ2dVMW9GT2wzZ1JuMjdLeGNvczZDd3RzZmVlTlhDYllvY2NpWmo5OEpUM2Y5VmpybGk0bXRvQU5Kd25xNXcyS3gwZ0tTTDdGOENCY0x2N2ptcWfSAdcBQVVfeXFMTTMyd2czQ1ZmZlNRaWhrVXRWV25VdWxFcFl2MnZ5TzNQVENqbXJNc0x0OWlkandoRkZuMHR3eGFkYklmYWtlQ1NabzQyZGtKV21GUVNqaTEzVjUzc0VPR2hVUjVVV1QxWDdfWVlVYlJDeDk3em52YXIxdWN6RE84bHVxR3RfSmNMT29GbXQ0LWROUTlHTFMwdFBXTVhrQTlRakFOakxHSG50c09GVkhOUDAxNEVSc1BQTG9CTE1raDV3YmVNUVpmRVpxdHR0VHh0WVNWYXMtM3c?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-22",
    "event": "Lockheed Martin (LMT) Stock Fair Value Edges Lower As Analysts Trim Targets - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOaGYxdU5TdDFBMk5MU1l2SXh5RmRHeVBHelpEcUZEVWwyRlZ2UW95dWZPWGhHc2tvdi1KRjNYZmtCbkMyS2pHTnpnYU84VTVGNVNHNkNyVFZYdW1WeGhYUTdRNjlHTGdxN25mTDFrdEFtMWM3UmpPNUJDTXVyakV4Tkp0SkY1cExKOWt0dVpSWXZuZUFwWUkwRUFUbw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-23",
    "event": "Lockheed Martin (NYSE:LMT) Reports Upbeat Q2 CY2026, Stock Soars - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxOQUFFSEN6YXlBcEVYaDZDckZja0xrdk5fYWVBSWs0NHExSU1oN21tTUFCUWxyWVk2OHBiaExUTnItSTFIVk5GdzRSUllTQkdWZTdGZ0lFSmw1LWNraW5nU3FfSGpwaWlTV01ZMFlVVTZMN2JLLW9jQy1YRXdvYURUMmhQb0hDdTRZLXEzal8xSUJ2WmpETS1heEJmVlo3Zw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-20",
    "event": "Is Lockheed Martin Stock Worth Buying Before Q2 Earnings Release? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPQkpSNFRxdy1hbjEtOGd0QXlFcERjZ2VTenRtaW5sNW9qdnFkOHJKUE4wMzg2R1MzVEJRUFgxMjJuUHpfYnJlanMwbmZSVnpBekpQTGtfc21kWVNPdUNFd19kbFpMWHhyMXlFcDlSVEtPVDJrQXFhLTZpanB0Q2dza05vYjl1S1BKMGFuVW55UnY1azRKbGY2SkNYQmVPYkRk?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-21",
    "event": "Why Lockheed Martin Stock Dropped Tuesday Morning - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNMkdjRUVfaTlCMVFIYzJDQlJjZGM0bmlWXzRsMzNiQWxueUhDLTlVdkRqWjZobHFkTEdiMUNwN2ZzdzNRWmhnNjl1VW0wc3FDWXVySGZjbFRnd2NrdEtGOUp0MnJxN2xxbnFtVW1vZTVyV1hxallfNFhkN3ZydVFyRkxIOWF1cjRXbXFyTGFuVE1IeUVjTlZzTjJxNjVfVVk?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-02",
    "event": "Why Lockheed Martin (LMT) Stock Is Trading Up Today - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNaVJZSzZidVFtRTR1RkJ1REpOV2lVa0l0QWVGV1FELTBoWU9NSHJQbHNOX2NjSVBudzBWMmo5S0dpTUVqcXlGNTRrTnI4LUp5QXFoY3VERkN0QTZmeG1LYWUxWnZhbnlFRGtxM3B2RDRkcE02eHBGT2NzQjk1bk9KcEhrcmtlaFpPSnhhNTIxUGZrLXJSMDFyTVVB?oc=5"
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
