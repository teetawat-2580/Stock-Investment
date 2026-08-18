const eventsData = [
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "Wells Fargo makes aggressive JPMorgan prediction",
    "type": "NEWS",
    "remark": "News via TheStreet — The Wall Street analyst thinks JPMorgan is days away from a milestone no bank has ever reached....",
    "url": "https://www.thestreet.com/investing/stocks/jpmorgan-stock-1-trillion-wells-fargo-mayo-target-jpm"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "Ultra-short bond ETFs complicate case for holding cash",
    "type": "NEWS",
    "remark": "News via TheStreet — Wall Street’s favorite safe harbor is quietly losing its edge....",
    "url": "https://www.thestreet.com/investing/ultra-short-bond-etfs-12-billion-july-inflows"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "Bond Traders Are Hedging Risk Fed Pivots to Rate Cuts in 2027",
    "type": "NEWS",
    "remark": "News via Bloomberg — Bond traders are changing gears again. After a raft of data helped all but price out interest rate hikes for the rest of...",
    "url": "https://finance.yahoo.com/economy/policy/articles/bond-traders-hedging-risk-fed-203004033.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "The 5 Safest Vanguard Funds to Own in a Volatile Market",
    "type": "NEWS",
    "remark": "News via Kiplinger — The safest Vanguard funds can help you through a volatile market by adding stability to your portfolio at low cost....",
    "url": "https://www.kiplinger.com/slideshow/investing/t041-s001-the-6-best-vanguard-funds-to-own-in-a-bear-market/index.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "JPMorgan warns a global food crisis could hit next year, and unlike oil, there’s no backup plan for fertilizer",
    "type": "NEWS",
    "remark": "News via Moneywise — JPMorgan argues that an upcoming crop shortage could be a national security problem as some countries benefit from prepp...",
    "url": "https://finance.yahoo.com/markets/commodities/articles/jpmorgan-warns-global-food-crisis-183000431.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "4 Highly Rated Vanguard Dividend and Income Funds",
    "type": "NEWS",
    "remark": "News via Kiplinger — These four low-cost Vanguard dividend and income funds have all earned high praise from Morningstar, and they offer attr...",
    "url": "https://www.kiplinger.com/investing/mutual-funds/602490/4-highly-rated-vanguard-dividend-and-income-funds"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "Anthropic targets $10B+ credit facility ahead of planned public debut - Bloomberg",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- Anthropic (NASDAQ:ANTP) is reportedly preparing to expand its revolving credit facility beyond an initi...",
    "url": "https://finance.yahoo.com/technology/ai/articles/anthropic-targets-10b-credit-facility-173031496.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "State Street Stock Hits All-Time High: Is Now the Right Time to Buy?",
    "type": "NEWS",
    "remark": "News via Zacks — STT stock hit an all-time high yesterday, after surging 73.7% over the past year. With improving NII, strong fee income ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/state-street-stock-hits-time-155100766.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "5 Dividend Growth ETFs to Buy",
    "type": "NEWS",
    "remark": "News via Kiplinger — Dividend growth ETFs offer investors a steadily growing stream of passive income and exposure to quality companies....",
    "url": "https://www.kiplinger.com/investing/etfs/dividend-growth-etfs"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "JPMorgan vs. Truist: Which Bank Stock Belongs in Your Portfolio?",
    "type": "NEWS",
    "remark": "News via Zacks — Does JPM's scale, earnings resilience and rising capital returns outweigh TFC's cheaper valuation and higher dividend yi...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorgan-vs-truist-bank-stock-135700858.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "J.P. Morgan Life Sciences Private Capital Welcomes Bruce N. Rogers, Ph.D. as Venture Partner",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/healthcare/articles/j-p-morgan-life-sciences-130000021.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "JPMorgan chief cautions UK chancellor against tougher bank taxes – report",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.retailbankerinternational.com/news/jpmorgan-chief-cautions-uk-bank-taxes/?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "Should JPMorgan BetaBuilders U.S. Small Cap Equity ETF (BBSC) Be on Your Investing Radar?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorgan-betabuilders-u-small-cap-102001532.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "Universal Technical Institute, Inc. Announces New Revolving Line of Credit Agreement with Fifth Third Bank, JPMorganChase, Truist, Citi and PNC",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/small-business/articles/universal-technical-institute-inc-announces-130000454.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "ByteDance Draws Over $30 Billion in Orders for Jumbo Bank Loan",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/bytedance-draws-over-30-billion-125514222.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "Should You Forget Big Banks and Bet on a Fintech Instead?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/18/should-you-forget-big-banks-and-bet-on-a-fintech-i/?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "EXL closes new $1 billion senior secured credit facility",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/exl-closes-1-billion-senior-200100840.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "There’s a hidden Roth conversion window that shuts completely in 2028 — most US retirees don’t know it exists. Act now",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/small-business/articles/hidden-roth-conversion-window-shuts-101500228.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "Citi Unveils Custody+: A Suite of Near- and Real-time Custody Solutions to Meet Always-On Industry Demand",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/citi-unveils-custody-suite-near-110000350.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "JPM, GS, MS Stocks Edge Higher After-Hours — Banks Lift Dividends And Announce Buybacks After Fed Stress Test - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQNFBEZVk5UzVPNXJWQVZoMWpvSlBWaEhYa0hOeGpuQ0VpSTFVU01JeHljcXNvM3FoN2xveHFoQ3Y4RnZuVTh0eHJ4ZnhPWGZhUVphNWo1OE5Qa2dlTXh5WjQxMVFUTHJIUlhXS3F2SkFlLWI0dGpnMjdVZTFWdVRYQk4xZjRhUjVVeThYclhrWDFQOWFPZFZjNGViMkwycVpvbXc1aElLQkxSRGx0d2JBWDdWRnBvekJmLUtlOGlpV0o3dDRNWURaSlQ3UTVRNkRabGVOVDB2OFJoM3dBNHJJeERLcjM?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "JPMorgan Chase & Co. (NYSE:JPM) Stock Sold Sen. John Boozman - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOWlZ1Q1FfbC1xNHJ0WVNBNE4zNTZSVVZ2WXZzN1RoQ3h6VEZvVkhzVXY3czllM3k0YUNRV21HRUhtV2phOEdSbEdQV3BBNkwxR2ZncjFzVWNSUmkxNTdYb3JOZlROR0lxLUpPTFJ6MTVBQ0xYaVcxcXpqZmJycUxYYk9MMktDWkp5RlczN0FzZXpNM3Bmc3lhTUxleldYUU45TGxFWXU1SmNhWG8?oc=5"
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
    "date": "2026-08-17",
    "event": "Is JPMorgan Chase (JPM) Stock A Bargain Or Fully Priced? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQRVh4aWxYYmQtWGQtdXpoWUFId0EwQ0dabVlZNVVfSkpCQ1pPcEkyeFJqS2twUEY0RWJuV1I3VHBkckJSMnF6LUJ2NkhqemlTdVI3ZmJhUjFHQUplcjZ3Y1FaNFdFUFEyN3VZdFJiMlZCUHZ6VmxKOTZ3ekI0bXZQY05NdjlOVS1QTUxlZ04zZUlzbDdlS0ZvVzdva2ZZVWp4SGdTVHlSY3lva2g0amNkQUZ1R21pSkQyQWpuZtIBwgFBVV95cUxQUnZ2bmdpdVUwektqbktQUThTVjVObFJyVWZFZjU2UTBFTGN5dHpkU0NJSjluenJTaGpwYzRhWGR2MHpLanc0YXkxQ1hUSEtFYi03QlNOVkJjZWhRMm12TnZNcmRxdl9lZ1ByMjRLTE0wTUUyNV9yTTRUU01IWkN1NmJBU0RrZXNqOTlmRVVGajlFRE4tNUoxWVFVSTcxQTVPUlpYVklMYk0yZ25JTVB3dXpsclkwd0pqeTdFcHhaWjQyZw?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-17",
    "event": "JPMorganChase’s New Chicago Location Brings Checking and Investing Together - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQdlFUOWo4NDA2bndscHJCbWRCQ2VMMlNPZGRaemNTcnN2TmI3VTJfQmR1VndONmRuQkdmdlZ0TWxlV1dvZWpSMll3QWtOSHd0cFZuZFlTNTVZTTFKOS0td05PVFEza1lNa19jU3Z1Uzlfc1gtYnVQMlc1RWJoeG81bm9lS3lfRjJlRjBta0RyWnNnc185a2FjLVJnSVNxT1RjWVNXS0ZPZjhvWElNNHd6bXdRMlk2dw?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-13",
    "event": "JPMorgan Chase Stock (JPM) Opinions on Robust Performance and Fed Expectations - quiverquant.com",
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
    "date": "2026-08-18",
    "event": "Owen LaRue LLC Lowers Stock Holdings in JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQc2lWbjltdThhMVVjU0tNTjkxMlM3aWJSQkxoWmVwdGtNaGl0Ty1lamlUNWNaR2R1OHNyRzRod0dvRmNOWS12UHFtQmNERnRMcEV5ZWhOTy1hOFo3X3Y4cmM1SHYyYWN1VzFKZmNISUhaZjBFMzJxVDhPdFJ1a2ZJSTNSc1YyTWprYXZUNmcyRlhiZG5DMHc4QVNuS2JwcENoVl8zb2NvVXFBa2ZUYnh1REZibjhVa3llM2gyNXZWRQ?oc=5"
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
    "date": "2026-08-18",
    "event": "Why Did Banking Stocks GS, JPM, BAC Surge To 52-Week Highs Today? - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOTTByV1B2WWFRMEp6WEdoZURMeHRRWkM0eGNIQ3FUYVhTWUc0VktMSkkzOUJUNzlHZC1WUEFhdm9pcFNWcWVZVEtzSEtmdkoyLVg5UEdoVWsxdlc5cEFUNkNTcExCOEQwejB3TXlzejJfcmFxMFBLa2ppUFVIeVNWYnYtVWVnLWhVVS1NRXVpOGszWm5CUk5tMUt1cmtaSmItZUZUYU53c1NoaXliS0ZuNkFiejdVZ0tuZ00xT3NsaWNfVng3?oc=5"
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
    "date": "2026-08-17",
    "event": "Here’s How Much You Would Have Made Owning JPMorgan Chase Stock In The Last 5 Years - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxQYjJ5UTN0S2xZR0R4X1g1YlRmaWRUUjZzSWFxU0ptUUxQZUNldDUwVWNDTjlPdU05c0tlSXdVQ2xGSU1UQkg2SldMUmJIN1BodFlXeGpLMVcxSUVJdzdnWTRRV29uQ0dYRUZDUWl1QjhPOXIyUW9qc1E5X1Y1Sko0WThjLVZyTHhOSWRkRGZxTlFDOEVPa0dKNW5YTlZpbU5BdjZRcjRMZXRwTU9uaHFIQ2Y4R1NreTdRU19KeXhR?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "JPMorgan Chase & Co. $JPM Shares Purchased by Mirae Asset Global Investments Co. Ltd. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxOMXoteHk0MzJfaVRpS2ZZQnpBRjhTSWlYb0J5ZHBKblVDNVdXLTkwU0RnSUhNVkRxQTNSTW95QlJYT3BtUVE1RHU5dlBUQnlPSEM4aTJDdWxWekRFZ1lnVmVCZWJNc01NVmYwWFBBODJKY25DZnUtZHB2YUV1ZzhyUi1VX0hsWU9XWVdDb18yY1Fvb3dxVmVSQjBkQUpSVFBwT1ZUbXdvc0hBYldsOC1wTTRmZkVCSG5IcnBPTmhqdDZCMGtNM1ZIMWU5U3QxeVE4c0JNTmo0dw?oc=5"
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
    "date": "2026-08-18",
    "event": "Exchange Traded Concepts LLC Reduces Holdings in JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQUDVCdk9fVC1XYVNKQnFxN2ZuY2t4TmFCaWJzTkZHRWRDVzFSdlYxei1jQjdZcXVlQTBFZHEzdFRpQ3kxTkRQV2lHRVNIRERlX1VsLUdHdVBOb2hFbWxCeldQdDdYelpTRENZeHVjeTdydkpWU091UGhuTGJ1MTJDY014Q1h6T2RWQnpsVWpvX2pjYWNjbk9xNmhCNGMtazFWUHJTSWxOZlRjckthWFFkSEtiVnV4c3ZpNFJSaGtpNVJhOW1jSjhJOGx5cw?oc=5"
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
    "date": "2026-08-18",
    "event": "Premier Fund Managers Ltd Buys 4,680 Shares of JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNVi1qZzVKa0hKRWE5bVNzRzFjWHpOUXNabWp3QlVfNnB1VlFJcjhLdEJJVjA2QjZWcmxBbmxGdVk2TzRkS2dxSDlKZ1ZuSldfZFZpQ01seDhHTnZweUF4Y3JoM2h6eVFaVHU5TmFkUjZzaU5aY1VIZ1pIZDNHTlF1bGRsc0plLVpUSFBfQl9XQVhPQWtfaU91cUZNWW1BZ29CLXB0YjE0RUZRclF1Y0RXUWsxeGJMV2VtOXVyYzdSXzRUbVNjRnVF?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "RWQ Financial Management Services Inc. Sells 5,815 Shares of JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQQXNNeFRDZkN5YXhrU3dMdUxSSDlYUjVSSFhOOGVFNmloWXgzQmtnLXN3cUNrek9ya2ZWMzctZjlrYkFmbHBkdGlNUldCOENxOUphSmlWYUhoa19JY0t0OE8tMjNVUkFqN2xXMEc0QXRzMUcwYkx6R2Zfd2RUWExjczc3d1Z3RFVYMXhVTkFZNkNiV3JyME4xRG1CNFRObGxaUEdUUnB2SjJrTHBSZjlPTkJUOVphR19LMURUSnlCMWZma21xUzd3WU5ha2ZQWll1RXFLeGlhUlY?oc=5"
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
    "date": "2026-07-25",
    "event": "Jim Cramer: These Two Financial Stocks Are Outrageously Cheap - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPYzFET0trSjY1NEZNdEFrLXE2VzhIN2RVQjVCUWtyYmFFZ2pkeDQ1bEZDQVNReHNhTTZaSW1Jcm9KT0NQSk90OS1fbjdTU0JGdFRLdEU2bUFXdTgwQ2dEbHRTaFp6M1hWdnVXLVhaYW9IcW5EVzY0c2hKazZWRGE2M3MyQ3dVaG5IWEVxNE1iUXhmN2NhbE9GRHY5T0w?oc=5"
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
    "date": "2026-08-18",
    "event": "Hemnet jumps as JPM upgrades stock on improving listings, attractive valuation - Investing.com South Africa",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQN245UDkxZ0JHNlE3NWd4aGNkQnpXWlRVUkJaY2xObXJNZHViRm1tVlkzYXJBT2l0bnY0d2JaNWhqbTJxZ0JwTmFaY0Q2UjhvazlzRFViNUVaVEJqV2lkZVBndTNZYkFCTl95QTVaeGxfRFFONUkxVGdIb2hqbWV5WmMwcFpZd05ORG02cmRXZXFBeUpzbTJYUU1VMWgwWm9odVVteEZnd01hYU1ueEQ0RTMzLUFOSl9ucnZ1UEw2Q1kxWTdJX01IODhiaTZLQQ?oc=5"
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
    "date": "2026-08-17",
    "event": "ETFs to Buy as JPMorgan Races to Become the First $1 Trillion Bank - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOcDlDdzhqcl9yeWRrQmZTcndMSUNtRUtJbG9rcERHTmhoN2ZNOVozZXJsS3BaM2dJX21FZzF3em9fV2VtQ0plQkFtRGZzWE1BOW1ldHdTZG90TUlUWmJ4Y2I5czFoZWxvNFBMNDhnQTAzcUlBVFFqUW9FN3I3OVlTTVlKZ1RyTDFnQ2s5bkNDdEwwdDhSVF9QT0sySkZjWVdWNzc2RWlCX1ZQb2t0WXo0Z2lud2ItNWxZU3hSeDF3?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Why tech stock bulls may not shake this AI problem",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — Aggressive AI spending is unlikely to be reined in by the execs doling out the checks....",
    "url": "https://finance.yahoo.com/markets/article/why-tech-stock-bulls-may-not-shake-this-ai-problem-132840379.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Tesla Just Landed a Major Win for Long-Delayed Semi",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The rollout could reveal whether Tesla can scale beyond pilots....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/tesla-just-landed-major-win-212212407.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Bank of America Has a Stark Warning on AI Spending",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The AI boom is creating a less obvious market vulnerability...",
    "url": "https://finance.yahoo.com/technology/ai/articles/bank-america-stark-warning-ai-210907473.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Hedge Funds Split on Amazon After a Big Q2 Rotation",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Viking tripled its stake while Bridgewater cut sharply....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/hedge-funds-split-amazon-big-205740668.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "NASA Taps Blue Origin, Firefly For Services. SpaceX Stock Hits Resistance.",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — NASA selects Blue Origin, Firefly Aerospace, more for prelaunch services contracts. SpaceX readies for next Starlink mis...",
    "url": "https://www.investors.com/news/spacex-stock-falcon9-starlink-nasa-payload-services-blue-origin-firefly/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "This Stock Popped, Then Dropped on Its Big Plans for the Tesla Semi Truck",
    "type": "NEWS",
    "remark": "News via Barrons.com — Tuesday was wild for  Einride  The small-cap stock soared, then dropped after the Swedish trucking firm announced plans ...",
    "url": "https://www.barrons.com/articles/einride-stock-price-tesla-semi-truck-c4e436e9?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Sector Update: Financial Stocks Mixed Tuesday",
    "type": "NEWS",
    "remark": "News via MT Newswires — Financial stocks were mixed Tuesday with the NYSE Financial Index little changed, erasing earlier ga...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/sector-financial-stocks-mixed-tuesday-201025983.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Swedish Trucking Company Inks Deal For Tesla Semi Truck Rollout",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — On Tuesday, Swedish logistics company Einride bought several hundred Tesla Semi trucks that will be used by Amazon and o...",
    "url": "https://www.investors.com/news/tesla-semi-amazon-einride-ev-trucking-shipping-electric-vehicle/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Boeing-Lockheed’s ULA triples bond sale to $1.5 billion - report",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- United Launch Alliance has completed a $1.5 billion private bond offering, three times larger than the ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/boeing-lockheed-ula-triples-bond-185553491.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Amazon's $500 Bull Case Puts AWS Under Massive Pressure",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Morgan Stanley sees extraordinary upside if Amazon converts AI capacity into a trillion-dollar cloud business....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/amazons-500-bull-case-puts-184302733.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Tesla Plans Cybercab Launch As Soon As This Month: Report",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/d42fd524-a30e-32c9-b651-2c5fafc3e1dd/tesla-plans-cybercab-launch.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "What Does The S&P 500 Earnings Boom Say About The Stock Market?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/f0dc497e-67ca-3735-a37d-2a7fa74fac4a/what-does-the-s%26p-500.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Sector Update: Tech Stocks Fall in Afternoon Trading",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/sector-tech-stocks-fall-afternoon-173201461.html?.tsrc=rss"
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
    "date": "2026-08-18",
    "event": "Amazon.com (AMZN): AI Demand Triggers AWS Revenue Acceleration - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQMVQwb0dNc1k5cExzQ3N3cE1Ic1dWTkk5Y1p3LVFfN1dyaFp6M3NhZi1kWWVHVmc1ajYxT1BDNGY1VVJZcmlhU0lxeUV0bmV6OUM4VERPYzMxRnVMRnZaUUhJOEU0V21XUnprNGQ1YzZVeFZWZFRmVWgzZWZ5UVF5b0FDRklrVWlabzBSY1cxSGM2LXUz?oc=5"
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
    "event": "Morgan Stanley resets Amazon stock price target after earnings - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNblNjVXI3ci1SQ2NCS2xabVdCaDgtdlNGNnYzcWhxNTFCRHVfemdueHJySmQ5UUM4TmF5WVJKTW9YdHhuNWt2RVdpYlE0c2Y1ZXJlUlREZG9ZbkVOek9lS1U2OVd6S1lfd1pPM0FLeGY2X1RFLUpYTXI5c2V1MnRkZTJIWlVjNllBZ1lIdFNZa216ajhQTU1pTXFnc3JKRFlDZkxmdEp0bjh6Qkl0c1JKaTNlZ1dwUkFPb3c?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Amazon Crossed $3 Trillion. Here’s What Comes Next. - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPZTJBVjJzZ2hzajZISXdMVUw0R2Zud1I2NmNBbjFtaUZBa2Z1b2pwYVFDSlRGQjVCLU1wTXBHZV9xam5nWUZnbzVMU1E4UFVjSFFCWE9fT2Q5RlRfamJPcmw1VTdpS1NoMU94TGNiSXhuakQ1MnV0TFZKWVpWdFR5b1B2ZngyYlhnT1lLTzBiNzM2SFI0MHc?oc=5"
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
    "date": "2026-08-16",
    "event": "Amazon (AMZN) Stock Gets Fair Value Bump As AWS AI Demand Lifts Analyst Views - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQUVBrM1U1NDFNZVRhZWR6VVhzMTRIMlFaR3dTMlh4OE10cllDeUtqZ2ZDc0w4LTM2bXIwdTMzZXlEb0k5dEtsSV80WFpXNVg2WXVkMGplSGlmX0p3MDVZVThBNmxuU3lZMFZXa0FqR3VQRnBWZVgxVVpiM1lQQTE4ODFkZWYwNVJUU2FCbXhWeGtnR3p5WjRN?oc=5"
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
    "date": "2026-08-18",
    "event": "Zacks Investment Ideas feature highlights: NVDA, GOOGL, AMZN, INTC and others - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOTnBhc0RBRzlIakZLUDlBZXZObUg4X0RsazJvYmxYd0hrM01wVFZoQzZRaFdoYUtNamNPU29BOU5RVnZwMi1EaUxFWEgwWF9UVWVicDQ3SURZX1NocFpGT29YR1RHMko1ZVM4bDJLQmNqbDNaUzBPTjV3Qk01Q2M2VUVla1diS1FLTFhrYzNmVmh5bzY0Q3JYY3FHRGdpa2hIN045LVJhUmwydw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "Quant ratings on Third Point’s top Q2 holdings: AMZN, XYZ, COF, KEYS, FLEX (AMZN:NASDAQ) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOa1pwVDdnRi1XeWplU1JCRU5KN055SzQ4OHFVNlk1NTlHOVBJbXBDVmxORFBwYWxseGVlX2NMZjMya28zbmQ1aUhkSktEYVVLNmVUZ1NkZkJfTWFqZFBXZVdTSHlocUxPNU41Nmt4LVdwRnFRSGFLLUJNOW02VEFLeW1lbmdTOURFNjJhT0NIR2NJdVdsQVM3N0psT2c1TmVUdmx6bC1VenB2dw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Why AMZN Stock Is Rising Today - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxPYnlLNHgwSi1mZVgySHpQZkl0QzhFb05sQUpqSFROeGNtQmoxQzFKT09PbHBTRy1fdFBZRUJNeTBaa04xZ2d2YWJEYUNZSk8zT2FfbUVDandRaE4weVZtTjQ3M3NTTWdLalFXRnpfRi1rdTFNNnpQVEZSV01VbzRtajlnTTR5RmxZLWdZd2RrQzFNYXJKeTRBUDNIUjIzT1pDMHFGYVcwZDBqTDBJZ3BuNm5SNENEdw?oc=5"
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
    "date": "2026-08-18",
    "event": "A Star Investor Just Trimmed Amazon—Here's What It means - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQSzM4Y1lvT093ellOYkc5X21aZzIyZzBLWEQzTFUyZmNseXRmRUhUbmFIT0hpdWxPeTBIc1VKYzZ4b2xVejVWbHhUaXYzWTlueGYyeE05RFJ2NFdvT0N2UGRkMGJpS3hIeHhoVl80MEtuWS1YSFlCUGdlQmVxNk1lUHRheTBWSlIzUEE2TGZIU3lWNFVJLWJiZFp6U29WZw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Wall Street predicts Amazon (AMZN) stock price for next 12 months - Finbold",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxNQmhSNDZZclFOampUdV93WE1iaTlOZU9DSFJPM21wLVpRUHJIT3lxSnF2ME92UkNEamNDM0hzTmRjdzA4ZnR1b3gwV3lHOW1YTEwwLW9VdVBINlFwZWw0RVUtblBpbEtvUDZIX0JvRlJsdThkZ3BiS2FCRFZ2U1E1dzV0emdGaGk5QUdaUQ?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "AMZN Stock’s Road To $500 Could Be Led By AWS, Believes Morgan Stanley – Firm Sees AWS Revenue Reaching $1 Trillion In 8 To 10 Years - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgJBVV95cUxPNktXNmZsblc4eTdiY0VRbThqbXJPQ2VhczZwbklnZXJKdk5kamdZS1lMY19pdDJHeTVYMGY4M1VwZ0FQNlVlclBhdjIydTJ5Z2NEX05EdWIwcmw4UFRidGJqa282cEJqSWN3bkk0aTJFaS1mRktvY3ZXeXR5RjZlb0FKaEtVclg4VERlLVo0V0JSTTVJdUJ4UUl3RGJ4Rm1kZWNONWJrRGhhWTlzVUdSR0NWN1ZnbXI4dlNUQy1VN2p0R2RqNTR2VW8tSkZXWFZtZ1lfMmdyWmlLZEdsVXhJZWtFbnhBRDFNNlhSMmJ2eDluT3play1TdFg4TW9sWEdMRVRDa1NrM09rLXlHYVBHQldxVGY0dw?oc=5"
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
    "date": "2026-07-31",
    "event": "Amazon: What We Think of the Stock After Earnings - Morningstar",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPTXhIdDMwZ1JWb3Y3V0Z4QllGRUN1N1RjRFUyeFRNYm44OExQc2JXcjR0T2JwSWxvRWR6U2VscF9kT19pc2liWksybUtkd0lmVTg5YUZ0eFF2LUoxckZybjlJbnRqSldfUVp4NVA3RWVEQ01NMWQ0SlotTE0zenhaYWthYkM0cVgwZDFhb3Z3?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "What BofA and Morgan Stanley Are Saying About Apple (AAPL) Stock in August - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOOXBiNHhnd0pNdTBWM2xkX0hqY2szbkRjYzNjQlRtYnFGc0dpV3B1UXZQU1RRMlRqOVdKRkhUOE1lZ29pR01NMXZjeVhELU5FbHcxMHctTXAwXzNKalhPVFBQZmx6RVE4bjBqTVBZd0xHWFFVT1dSMzJMa1VBYzJweWNyMm5lM0NqTUUzZFpNell4YnpqdDJod0tKX3RmVEZnNXhTMHc1bm14a2dyRUpvNjloQ1IwRkE?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-15",
    "event": "$AMZN stock fell 5% this week. Here's what we see in our data. - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNOFFlTDdKVmZqNkJIYXpyYWJocnVZNUh4dmc3UzNGa2F0eEd1a3pzaTl0cklMWWZBamZrMzBLcXJWV25zZzF3Smtmd1ZKYmpiZUJrNEpqUXlMWEhzSkRVaklwRGxyV0NGN0lmMGdkcXluOXZ5TnM1UjdSamRFc2p1YmJWVXlYV1dtWGF2LXp5ZFBFX0tDYjEzanVuUXlrUmFNakVv?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Amazon stock price down 0.510% on Monday - StockInvest.us",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOY01EUEFEWUhfTVdMNWZnUTRjN0pReWh4NEJldVNDLXFrOU5qOXZ4S3N4Zm5xWTlBWWdMRWd1VUt1QlZGU0k5NWpRNHE3Tkt1dlYyQ3NKN0RMYTNYSkFUNkZJdU5KLUdKa1F2QjlDX2R4aEtsMnBPU3JkbFlyTUNDNmotRnFjVDhUNG9r?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Amazon Ads Benefits From AI Shopping: Can Growth Stay Strong? - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPbEw1dEUweHFVVkdLckRZS3QxX3p4N1Z0NTJrWlVyTzN2UkhkUl9nWHJ1WmNadFdvNjh4VDhlNU1rcVQ3VG53aEVOM004djl4T2lmXzB3ZC1iTHpZQVpZNFp1bGwweHJDSl81MmEwTzdFd2tJSEZvUGxHZlVnNk1RNGk2WDRNeTVhVDhERm96MGRPcGRZQUQxSW9HeGI5Y2gxY0VUbkpNNC1vdW9sNkZoX3NUU3BJT25iUmdMd3RBZU8weW1ISVlqMGpoR016Wm1zdWI5Ml96OFlfQ1RW?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "What's Going On With Amazon Stock Tuesday? - Amazon.com (NASDAQ:AMZN) - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxOY2NIcFNuVHNmc2phVDZlZkdSWlFCOFFNTkxFOEt0R041LUh6bEp4aTJVMDNmOTgzLTM3VE9iazVKN1Bvb085TVFiT09JTkNBQU02T01wZUVodUxlMFZrRWVEeFMwd1ZHX2Y5bnBlRnhROUVBMkdjSHEtc0FUZzByYWRZekdoUzN5YUl4VzVjdFk1RllIaGt5SThmUGNRWkRJNkZsbjcxT2Rpc28zYVdsbWVwVDJFdjVpRjhqX1VpaHdWNjdOT3hEc3FkSWkwMkJmLWc?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "AMZN Stock Jumps Overnight: AWS Sticks With Nvidia Bet Even Amid Surging Demand For In-House Chips - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNbmFSVEhRamtlS24wazFWMWd1VVNTYUhlVHpCeF9OUXhLWmktOUxQUURXZ3AzcFE4bFpYVFNqOHd0Ykhwb0ZHU2JtbGlpbEl4b24tMHp0OFNRMXE0Mlg4enN6Q0pJSktaMDI0aWpRVkJUTlJ0TllXZW5jRHNKVXpMQ3pFNnJDdVlia2NpMmVleERXcDN6Z01vTUJHbDBrSVZPckt6bjMtTU1lQW41bUtEbWpadVlGeFI4VlEtQXlBX0x3N2NuVjVsb1JmQm9sRzVkUWdVZ25B?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-17",
    "event": "AMZN Stock Rises Premarket, CEO Jassy Defends AI Spend: ‘We’ve Lived This Movie Before With AWS’ - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxNRGtacllNeElWakYzUXlVeXBibGljQWJiRHd2UzE0Y2hCNlk3S3dTQlpHa1c2VG1IRUV5OWxsMnpXVjdqdk5URXdtdTBTSC0yRmp0Q3pQUUlINW85OTNGbWFVR0Npb01UNFNualVZLU5YSjMwaVcxNDBsc3ptamNxLXV4VFZHOXEzSFZySHRmRVpYQTQ0emEwWl9WRU1tOFNHa29EMEgzeHBuT1RydWV3UHg1TlBlTVRCU1kxR1BmVlBBOENWWHFJRWY2UVlMRjJiZTNRRW9INDVUU0d6UzV0ZFVuZ0o2ZnVleVB4MA?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "Amazon.com, Inc. $AMZN Shares Sold by Chapin Davis Inc. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxONy1JZFF5Z2tIUUFQOEotV1Q0RHllTWZ3WTJGTUFGb1piOTFwVFo0eEs4VDZSMFpxSFprS0RtYlMwbW0zNWxIT3ZOVUtKT0FxYlltanhLaW1DaW1SSHVqTVpHOHpzU2E0ZGpndVM1QkJGd0wtdlZ1UXNnY1VlQ3lDdmpEUUtBYk9ERWNTdUlHSXpkNXpwZElPbUg3VkNmc2hmUXFJQmxPSXNtZ25qOGtBRg?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Chip-stock bears are back in control. Here's how to play the downside with limited risk: Alpha Options Playbook",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — The chip comeback just hit a wall — now the SOXX ETF is having its worst day since July....",
    "url": "https://finance.yahoo.com/markets/article/chip-stock-bears-are-back-in-control-heres-how-to-play-the-downside-with-limited-risk-alpha-options-playbook-161031671.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Rocket Lab Wins One of Its Biggest Contracts Ever",
    "type": "NEWS",
    "remark": "News via Motley Fool — Rocket Lab is a defense contractor now, specializing in missile defense....",
    "url": "https://www.fool.com/investing/2026/08/18/rocket-lab-wins-one-of-its-biggest-contracts-ever/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Is Palantir the Next Trillion-Dollar Stock?",
    "type": "NEWS",
    "remark": "News via Motley Fool — Palantir is already worth nearly $400 billion. Could it become a $1 trillion company next? Here's the simple math -- and...",
    "url": "https://www.fool.com/investing/2026/08/18/is-palantir-the-next-trillion-dollar-stock/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Prediction: Microsoft Will Be Worth $5 Trillion by 2029. Here's the Math.",
    "type": "NEWS",
    "remark": "News via Motley Fool — Getting there from today's value takes about 10% a year. The software giant just grew earnings three times that fast....",
    "url": "https://www.fool.com/investing/2026/08/18/prediction-microsoft-will-be-worth-usd5-trillion-by-2029-here-s-the-math/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Robotics Stocks Punished Tuesday in AI Sell-Off: Ouster Down 10%, Aeva Technologies Down 12%, Symbotic Down 4%",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — A cooling AI trade, a 19-year Treasury yield high, and a cohort of robotics names that doubled into today just became a ...",
    "url": "https://247wallst.com/investing/2026/08/18/robotics-stocks-punished-tuesday-in-ai-sell-off-ouster-down-10-aeva-technologies-down-12-symbotic-down-4/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Micron, Other Chip Stocks Drop During Dog Days Of Summer",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Chip stocks tumbled Tuesday in a broad reversal from Monday's solid gains, leaving investors with whiplash....",
    "url": "https://www.investors.com/news/technology/chip-stocks-micron-nvidia-drop-dog-days-summer/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "AMD’s $1.3 Billion Portfolio Reveals Its Biggest Investments and Where AI Demand Lands Next",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — AMD just filed its first-ever 13F, and buried inside a $1.31 billion portfolio are five positions that trace exactly whe...",
    "url": "https://247wallst.com/investing/2026/08/18/amds-1-3-billion-portfolio-reveals-its-biggest-investments-and-where-ai-demand-lands-next/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "China’s Favorite Budget Meal? Burgers",
    "type": "NEWS",
    "remark": "News via Moby — Burgers are cheap, fast, and can cover the macros. What more could food delivery fiends want?...",
    "url": "https://app.moby.co/home/news/news-chinas-favorite-balanced-budget-meals-are-burgers?utm_source=yahoo_finance&utm_medium=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Elauwit Connection, Inc. Common Stock Q2 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Moby — Moby summary of Elauwit Connection, Inc. Common Stock's Q2 2026 earnings call...",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-elauwit-connection-inc-common-stock-q2-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Amer Sports, Inc. Q2 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Moby — Moby summary of Amer Sports, Inc.'s Q2 2026 earnings call...",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-amer-sports-inc-q2-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "ReNew Energy Global Plc Q1 2027 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-renew-energy-global-plc-q1-2027-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss&.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "TH International Limited Q2 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-th-international-limited-q2-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss&.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "AMD vs. Nvidia: 1 Metric Tells Me Which Is Clearly the Better Buy for 2026",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/18/amd-vs-nvidia-1-metric-tells-me-which-is-clearly-t/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Corporación América Airports S.A. Q2 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-corporaci%C3%B3n-am%C3%A9rica-airports-sa-q2-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss&.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Rare Earth Stocks Drop Tuesday as AI Fears Grow: USA Rare Earth and MP Materials Slide",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/18/rare-earth-stocks-drop-tuesday-as-ai-fears-grow-usa-rare-earth-and-mp-materials-slide/?.tsrc=rss"
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
    "event": "Nvidia just took a very serious step on SpaceX stock - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQVnhub3NIMjFKYVdHa0VIM0tnM1h2ZUZsRTVxcTBaQjB2ZkVlMnlsWFNBSFRLcnBOcERhTDdnYk92a0w1ZUs0cDdLZF9jdndSX2JoaGI4dkFVM3NUdWl4VENpM0p3LTA5NmFtaGhwNWxBOWdSeFoxa0w2NFVsbEdiTjJEdlI5Qm54eFdUemZ0X3Fzdnd3X2dTMDF4dw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Nvidia's AI moat is shifting from chips to capital - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOeUVqUjhzeWswMXdGZlJFMWFhbWxRMHBlSTFQMEFaTjNWbWVla29BNGtPUDFLdTI3NGg2WE9zRE85QjZyaXdpU0doeDBzM1QzdGM1aG9GSTQ5cWxOUDlSX2lNekRWMkxlR1FKMjVwQVphOFAzRmVjZGRfOU03M2VGdWVNWGNvdHdXUjlFMXNBUdIBlAFBVV95cUxPOVJVZ203Y0JGbnk3WGNFWm1jcmNobDNzZ3dJSF9fNVp1c0RzYUtoQWtscGpaRlN6VWRDUEM1dUY5NW1xc2tBM0ItWWtTV2IxMDI3cjZidmNaVjZ6LWRfdWdrUW9keUcxdEc1VFBObmRxaTV1aHFzc1dzZHFTS1FZTjNmWUpWVmJsRDdrWmJvOExEVTdL?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "This Nvidia Supplier Is Seeing Endless Data-Center Demand. Why the Stock Is Sinking. - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihAFBVV95cUxPbVE1NmtqeDJtb2NLSG9iTWdkcjZNZ0hxZ0p2NnJRaEpjMGtCNzh1aEI0Qk5zQ0xZR2tUSUptZTZpWUpjU2VVNkVXd0ZMaFMyaW4xaU1NTnRDYy1ybFlIX3p6VDZSRGhzc3dMcTh5X0pEeFZfV3RJb1BzVDZORU1lS2E4Zlc?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Veteran Analyst Revamps Nvidia Stock Price Target Ahead of Earnings - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxPT3JmaEpQLVNDX2Zubl85dlZYNDhyWWxhRTktS3ZlSTVrUk9aQXRTTW1QbVc0OFg4SWM5ZTEtcE9KN1dhcmowMjFaaklJY0tGaVVCdkNxTnk0bkhfSUZ2TmpxYVI1Rl9tbi1EdmdscWhiTlpnWllJOExGaWFURE5WSUNNTjkzSHhhbXl3UVBRZ0V0YTJpOXJ5R3ZwMWwwVXBLUTd3UFExTkVVdjN5cEVTTzV3VEpoc1pLTTBfRHJIR1hYb203dXc?oc=5"
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
    "date": "2026-08-17",
    "event": "Ray Dalio Has Invested Over $900 Million In This Stock. Should You Buy? - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxQMThVUWplUVpWZHloelZoX1BZNGZVTlN4Vy1LamxqUEVRUEV3ZXlsa194SWQwVDBqdTkwb0laeWFhZ3JlNWp1TkNzdXNYdXZ0ZEtmVGpXb01zaVJ2dWFrYnFZcWlZVUYzNTdsSTlieUk0WmJ3VThkdFJhQlpkTTQ1S1VkWlJ1b3huUFozU2RpaGRuUnhEVVczVk54Sno3WlJGSzdXcmJRVG5tc3dKVDFYdml3?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Why Are Nasdaq, S&P 500 Futures Tumbling Premarket? META, TSLA, NVDA, MU, NBIS, SLS, HD Stocks In Focus - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxOVGhkTVdBUGJoWU5CX1ByX05uR0dRd2ZXZ3NyUDFnZlBzN29qM1hFZW1KQ2FuZXJydUtNU2wwTWpIOVd1aDhIVjV2bmRRM0syVXBwU190b3ZaZDc3NUVjUHNGaFJuUkJrbG9NX1Qwem9iZDI5LUpmeVM3ZFMyMnlJVTc2UU9fbm40aFZmem9lcmV4ei01ZWk3V0pSU3JKblBodERob3I2VDRSYjR1ZHpYX3BQWUlTWVpxenJTeVQzWW0xRjBGS1FJc0owQ0ZjZmlNUGJfM21NblFsWngtaXpteg?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "NVIDIA Corporation $NVDA Stock Position Decreased by Chesley Taft & Associates LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxOU01XMnBwUXJGNFR2VFYxai1wQWFRSFZyTWJ3NXJwSDloU21nNlNTbkhDTHVEdDlZeHlHQTVwaTZPN3RiblN6WHAwck43cUU2eVdKU1I3RVowQkQ2YjA4ZVBBWldaWDU4cEZrU29yUTRpanNocDVOb1ZaSmVESGdveTFFQWRFMmxDTFFmaFgtZ2xnNXRPQVBiemJUN1JTLU84Wm8yQVkzZU5yZTZxblB3VGdkUDhscjFpekpEczh3M0Q3Yk9MTUNvWWMzcVhaZXhiSFlmbmUzUQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Stock Market Today: Nasdaq Slides Along With Chip Names; Sandisk, Micron Lose Big (Live Coverage) - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOMDJMT0hxSWtHRUppMmgydmpNNnRJc1lONnZMOVB0MTJGTlJEUTZxRGFTbXpoaWhOazA1UHpEbFptUXNRQkNRRks1Q0xqeGIxbzNwVzRvUkloTHM0LUtacDAtNVJoOGM3MjBua2dwZ2RXdTFQX1BqXzdZbU9QckRHWXB5WlpPQjlkaHBPdVpZR3IxWXk2MDFsUGk5WUtRTHJWdGNOQzRpUUdmbmJkandQRk1MOWo1UQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Nvidia Stock Dips Tuesday: What's Driving the Action? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPUWtPN1dqa01yckJiRGlpY2hTaGNrSTdVSVoweHhZRndUbWplSWlrazdWRmoyZXlEeGVja29GLXh0TnVkV0k1QU10TGRKOEpYcm13c3JIeDg5cDNoRG5kUGNXVWE1OGllV1dSQTFFakZpMEhTMXp1TjBhaTlmNnVUTFdhQ3Q2STluSFJyaXNhMjQyWkhZYkxacHB2dFc2ZW12Tk5rMmpGNHE5a2NXaDNWUw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "History Says Nvidia Is Going to Disappoint Wall Street After Aug. 26 - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxQdkRtSGNiMXRpSFdjVHpiY3UxRE9taDYtRFZ2Ql9LSjZzTkFDZkhab1RNbmNPVmtGcWhhMXFKNnBKSm1xZ1BBd2tuUmxnSl9wekszVWdLeFhCV0Zjb0FRN3dJejdMYnk3TGxSVWk2WEZyYzBVenl4djdYekZwUHdrS0MxSDh6VkpRNENnTnU3Wkw4dXREM1Jrajg2a05MNWQ0LTlJ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "NVDA Stock Wobbles As AMD Challenge And Hedge Fund Exit Rattle AI Trade - StocksToTrade",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE1rdnR4RDlQTEUxNmNMTFpJcWdUbzJ5UTBlYlJYUjgzTXNhdUZKRWJTdTJiS29kRkFKVmdxYjk1UlJXQWFsYi1HcjRFRWVQSC1lT2E4RVU3RjNxeEUtMGNmUlp5YXNxaFZCMDhVejk3NGt0d2dMSERpaUI1TQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Here’s the case for Nvidia’s stock to climb 55%, according to BofA - MarketWatch",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQREN2WV9jRmpPT29iUjVvWV95WUVkYUtkM3JLR2JQLTFOMTJTb0hZTzFWeWJXaENUeGQ4S2pPeXNuQV9Xem4ydmtwUEtYbk1RS3FyOTVSYTNNOGtxZkZIaXA1RlE4QkRQNENlUEtDczFvZEFQR3Y1MzZhbWhxMExPZ2dZUXNoTjBQNUZSWTZHSlN1TU15S3EzZjdzbTVnS0ZQRWc3Q3hXbGd5b3huRjBCa1lCU21xZw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Nvidia Stock Is a Buy for Cathie Wood’s ARK, AMD Is a Sell - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOM1dCcGZUMnYxY2t5UHk1ZUlWZ0xOWEs2aFZGUVR2QTZaQmJITWtpQlJzbVBjN0tnR25XMTZ2eVJySktiTlNxVmM4MHhmanM3WWxIelZNS0xnQTNncDcyMF9DVElndjFOeGRneWF4Zko2empWUGFEUlFZNmhIS2N2d1dLWkxvdzQ1Xzk0?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "8 Stocks Nvidia Has Invested In - U.S. News Money",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE82OXVTS2ZrdWE1NDFqWDdvbUlpQVd6UUsxSVJxMGJIVDgzTG1xTmx4QzJnYWV0MG5YY1NzTzlWWWRGT3lrUEs1cURrNXRPOHl5SWtiVDlwd3phWHlxbk1qY1J0WHpNSjRDbUpTOU1IVjhteEY3bVhBdklqYlJNZw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Nvidia Q2 Preview: AI Momentum And Financing In Focus, Shares Fairly Valued (NASDAQ:NVDA) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxQU3B0REJzd2QzcVRDeHZ4UXJPS2dZb29RVV9pMVNBY2FxSExBaUo0c25BQS1NQUdWZzlFSGw2YjJVSXkyQW91NnVEZGc2NXpsbzVHaVlOLTlGeHFac05EMVpDOFAzNE0wX0Q4TGI3dXNSTERKZHZwY0FRbDV0Z1NTYnpXZ0tBdnNwSUdRaFkzOUZ2aWNmMUtocllBejc5bV8tSWxyUkthYmViVHFsNHp1S05FX1g?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Dear Nvidia Stock Fans, Mark Your Calendars for August 26 - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOMlZ1RWhqSE5OQUgyM0p6OHZrQW5NdVAyU3FuOFhTM0F0VXJ0RGVFeWo5TktsWmI3WXF5RmU0YXhtaUpJbFZhbnZFWFltcEtRZ24tXzlwal9nOVI1aHFPU2dhSS1uSFNodVVlWUQ1RlROSzBzNVZjZnF2WGp6YmZFZERldGswUjJRNVY1QjFFN2lNVHlGV2Rfa0Z0S1Y4WGZjZHc?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Nvidia Shares Slide 2.1% as Wall Street Targets Point to $7.5 Trillion Valuation - TechStock²",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPVXF0Uzc3MVRHQmdfU1FnMWpDdkRlc3BjemdUTWNKNkM4NDU5TXhOczFrX0RTTTZSUGJmWFpHUWFRZGZES2hrdHhnb3hVSm8tZkF0SG1Sd19zYy1BUWhzWG1rdkpvZGNZTS13eThXTFNINWlOQ0NiUVBXS0hFR1M5TFhqOGtOYzlYVnlPZW92WkExaEpUY092YktsV3ZpN01Mc2c?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Bank of America Thinks Nvidia Stock Could Go 50% Higher - BeInCrypto",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYkFVX3lxTFBVaHhrZEkxSEQwUEt4bUFlWDNaNkktYXQzT3NWSVo5M3RORE11ZmNfMUw1Y0lrLXhUOWU0MUs2QXE3SHlsckJfZkRjcW9EdmpnSDMzc0w4cGNlNzZsb0R6Yjl3?oc=5"
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
    "date": "2026-08-18",
    "event": "Nvidia Stock: Why Bank Of America Sees 55% Upside - NVIDIA (NASDAQ:NVDA) - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNY0RwUl9LTkhady1jZ05LUDBJMHNBTW15MGkzMmVSZUNvN1VFLWJaRlVNQ09vTUR3alF5Q2tBdVpjVWgzbUcwalNyRkxweW96YTZzdEZPVlE3WV9fLWJacXlqVm9yNV9VX0E5OWJEVnNGSHcwSVZkaGxUdGJSWGJmN0N5eFNKMEZseTZMdl9naDV5ZVlrYkNsVFlZQ2M?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "BofA Sees Nvidia Trading at Up to 50% Discount on AI Risks - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQcEE4T0RKS045SnBsQmcxZ3M2eDl0OHB2U0ZFcTRsYUJkakhoODh0dGJubFhHNkdTVmItTERkdi05YnVDQ3BPTER5cC0yRGdKa2I2RURKMFVzOG1yWC1HV21SZFE1eEJKeE9JZVF6enFhTlZySERMQnVPdnBHNHhTWjJZSjJFUm9tVnQ5Ti1WSGZiRjRxUGc?oc=5"
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
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Tesla's new partnership: Swedish company Einride to deploy 500 Tesla semi-truck EVs",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — Tesla (TSLA) is partnering with Swedish trucking company Einride (ENRD), which is deploying 500 of Tesla's electric semi...",
    "url": "https://finance.yahoo.com/video/teslas-new-partnership-swedish-company-einride-to-deploy-500-tesla-semi-truck-evs-145522754.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "What does Tesla's Cybercab launch mean for SpaceX's own ambitions?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — Tesla (TSLA) showcased its new Cybercab — a version of its autonomous robotaxi without a steering wheel — ahead of its p...",
    "url": "https://finance.yahoo.com/video/does-teslas-cybercab-launch-mean-141500236.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Tesla's Cybercab Could Hit Austin Roads This Month",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Employee rides may come before public robotaxi deployment....",
    "url": "https://finance.yahoo.com/technology/articles/teslas-cybercab-could-hit-austin-212807468.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Tesla Stock Slips as 312-Times Valuation Faces Yield Shock",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Tesla's revenue recovered, but collapsing operating profitability leaves the stock brutally exposed to higher rates....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/tesla-stock-slips-312-times-211213449.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Analyst Drops Stark Tesla Stock Price Target",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Autonomy optimism is colliding with much weaker current fundamentals...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/analyst-drops-stark-tesla-stock-210738265.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Elon Musk Admits There Is Likely to Be Short-Term Pain for SpaceX Investors",
    "type": "NEWS",
    "remark": "News via Motley Fool — SpaceX's long-term vision will inevitably get in the way of the company's ability to hit short-term earnings expectation...",
    "url": "https://www.fool.com/investing/2026/08/18/elon-musk-admits-there-is-likely-to-be-short-term/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Veteran Analyst Firm Just Calls Tesla Stock a 'Sell' on Robotaxi Risks",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — GLJ Research Slashes Tesla's Outlook: Sell Rating Stays as Robotaxi Risks Mount...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/veteran-analyst-firm-just-calls-202652386.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "TSLA Stock Slips On Bear Warning That Upcoming Cybercab Event Is No Milestone",
    "type": "NEWS",
    "remark": "News via Stocktwits — GLJ Research is cutting its view on Tesla’s autonomous narrative to Sell, arguing the stock’s roughly 25% decline this y...",
    "url": "https://stocktwits.com/news-articles/markets/equity/tsla-stock-slips-on-bear-warning-that-upcoming-cybercab-event-is-no-milestone/cZYcZCGRJjv"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Tesla Is Down 25% in 2026: How Does It Compare to EV Competitors Like Rivian, Lucid, and General Motors?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/18/tesla-is-down-25-in-2026-how-does-it-compare-to-ev-competitors-like-rivian-lucid-and-general-motors/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Better Buy: Palantir at 108 Times Forward Earnings or Tesla at 190 Times?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/18/better-buy-palantir-at-109x-forward-earnings-or-te/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Gary Black Says Tesla Stock Will Remain ‘Moribund’ Until Musk Deploys Unsupervised Cybercabs At Scale",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://stocktwits.com/news-articles/markets/equity/gary-black-says-tesla-stock-will-remain-moribund-until-musk-deploys-unsupervised-cybercabs-at-scale/cZYcKsLRJjq?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Move Over, Tesla: This Stock Could Be the Real Winner of the Robotaxi Race",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/18/move-over-tesla-this-stock-could-be-real-winner/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "‘Highly Contentious’ Tesla Stock Drops Despite Cybercab Hope",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/0a0c9b5c-3a8c-3e98-8e65-6ad98bc27b3a/%E2%80%98highly-contentious%E2%80%99-tesla.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Tesla (TSLA) Could Put 500 Semi Trucks Into Service Through A Freight Deal",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/tesla-tsla-could-put-500-161006412.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Tesla Stock (NASDAQ:TSLA) Slips as FSD Develops New Hiccup - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxOME44RUl6NVpTMXdMV1ZZcThMTG9oTnhKMzZHODFZcUxuNnIyNFlkUzVkZk1pb1NsSjFRS0wyRWZ4RThkYzR0S3ZrVFR2aE1xeFZ5NXRoVkRRZnBjbUZPY0lBRHF1MGltelNPcGJTb0xiaUdpbWVhbzh2NWNMUDZ5cXVGOEROdFdZUlNNaU9B?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Stocks making the biggest moves premarket: Home Depot, Tesla, Fabrinet, Duolingo & more - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNZlIyZmZPaW5XTlRVUkJSVjJlenpTZU5lTTZUOEttYkRNRXpOcU1tV3QySmN6TThodUJDUFZpQnVRUndOZUVnOUZRYXZmaTR5b0NxSnBhVDJtVUt3NjBjQklKcjJoREF4TEdIRF9wVDcyYnBTaXM0YWcxak9GYzRyLVN3WWxwMnNnNzZTRDJaTGtjMjl0ZkZzektR?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "TSLA Stock In Focus As Tesla Reportedly Preps Cybercab Public Launch In Austin This Month - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPUklOb3dxb0JsNnJOemdFV0V2RDJzUWlKeV9QZC1qb1pEUS1UdGxkTnhoWkk1bmZhZzZvaGFtRTBOZDhBT1VCQnlfNWxVbnJnRlN3djdPRW03UERNMUJURlk1M09VaUtQRktOcFF4eWZsUWp1Zmx6QUxrRVhETTluVmxrZ1dWQnFuYUVXV01NZndlbDdQVm1rRHNOekR3bDQ?oc=5"
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
    "event": "Cathie Wood Pouring Cash Into Least Loved Mag 7 Stock, Buying An Estimated 450,000 Shares In 45 Days - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxPNjdOTWtfa1l6UHdvZmVoN0E0WTFjaWlaTy02WF93S1pBcVVIZWtlRkNYMmhhYkFYX3Q4aEFKb0xuNXFCano3d2xDaDFxMEY0RWJWbnc1RmNTa1ozQlR4YzI1cnIwNzUwZC1hbmVSR1Zod3Y3ajhmT0tCcU5HX0NwZlVjTVotWUpZNGl1MVFnak9GdWdudjVXcFRmc3JXMUdOcFhTWnQ0UFpPLUNPTDVXUWs5UUdQTFY1bGhWWE9CSE5Pam9xY1pDTHlUWV9NNld3RElqS1VfeEVMQQ?oc=5"
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
    "event": "Elon Musk Said Tesla Short Sellers Would Be ‘Obliterated’ Even Bill Gates — Yet They’ve Made $9 Billion This Year Shorting the Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQQ2J2cE1FZl9LQnhDcmwyZmlIRHpwME9QekMwYnM0QjhGc2U5VDRiQ3k2bkp4eWkzTUpxa0x5bGx0Smg3c3VtbDZndm02MVhpMHRUdGt1SmNNdDhwNHJjeXZQbXduRHgyUDFwMHVONFZ3V2xmdnRSTVlfODRlWGlUTDRHV1Y2cll3UUhpQnZ0Wnp3UGl0Vnc?oc=5"
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
    "date": "2026-08-18",
    "event": "“Way Cooler Than a Minivan”: Tesla Stock (NASDAQ:TSLA) Slips Despite New Release - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPXzU4Mmt2Q3k1WnExa2hRQzNNWWpBMXZhMWpwRHlRcGxhTDd0Rjh2MGdNRjdPdElLZFZEeWwxUTNlLUthR1Y2YTNQdUhIYzROb0ZSVUZkM0NxWVJaVllSejRRci14QTVBRl9DaVIyM3RXcFZyZHNZc2Q1eWphc0lzanFNcVE5bWdoZjV4cEl3TDFkRndjSmo3YXBRMW9zTnpIVG11bjV0OA?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "TSLA Stock Slips On Bear Warning That Upcoming Cybercab Event Is No Milestone - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOLWE3elp3MkM2VHdjdEFtYk00S1ZDRmdJMEp5Z3RwRGh2Nk1aUGc3VktabUZrN01aTkVKVEJtYThuc0VFM1U3MzFIV2F5azgzdWZiWEJVcWF3Z0JXWTFmSXVKN1VJU3UxeGlNdVVuYkdMaWgtWUhMbzRPQlZpQ1duV20telQ1Z0ttbUJoSnNBUHdZd25fVkM1bFdmdGJST01Wcnh1X2hoQmVjTVByYVNQUUk2Z18zR2dqOE5Zb0xtcjdOSXpFVUgzTXl6aElGdldEWUdhYQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "TSLA Stock Slips Premarket: Musk Joins Trump’s China Trip As FSD Delays Threaten Tesla’s Biggest Factory - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxQVHl5OGJHalFWTEM0d0l2LXRjLVJ6QTVjV0t3a3J6YkxkMF9fT2ZGU2VkNGl2NGpEc0NxMjV0SkRHMDhQUWJVTXZUOTVFeVdfb1I4dDBzV25yNWc2UlRsaGpIb1h0dXZIcVMyUXNQZ0FUd01vMmVPQmd2NDBkMy0tV2E1TGs2emp0Xy1iMHA0Z21ISDNpSTFOQzRKRjZGSGhZQ21vY2R0dzZfbEVnOWh4VzhtRnVoWnRJRXMwblQ0VFdJRzVKWnAyOExR?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Tesla (TSLA) Stock Looks Expensive Given Its Current Sales Premium - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQd1hOR0VMQVdweUpnSzBhNHlTOVNtNS1tLTAtc1p5U1lMWmowZVBFcG5XMlV0QXFtN2k0WmFjRGRSVzRYOXFlN2NCX3p6ZUowbE9mZWhkYzh5REl3UzVWYUdmMG9IcElJMFE5dDhoOHFha2VkSU5MWU1UQnBFVmVvZldGYkpxTmF6UGFzRFVSX29McjJBTzZyOVBNSlU3MGk3Um1JZXloTzZyei00TU5tQ01vUGNXLWg4Z09SYUtkZkl5TWFRR0HSAcsBQVVfeXFMUEEySWZydlN4T0M3YjZpS1hZRU9WLXZ6S3N4VFRnaGFvWmZHZnV5Q1kwQXVrNWQxSWVCX05zQlFqMi03dDRDd2E0WjRmUjBaTFUxWUc0UDdNVERiLWc1SXNjMVBNWUF6QTZrY1lvR2E4SHhQdF9NY3dJU3YybFpvc3dsbDRDeFB6ODdibTZHWDVFcWRieVN0VUdpUmZINDRpYXpQR2JvNEhYVUFzVnk5QVhZRnJhbGlXRUVWcGZ3MDVWM2Y0RTB6ZTd4R1k?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Tesla Stock Drops 1.38% in Tuesday Premarket - Tesla (NASDAQ:TSLA) - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPaUpFTlZhbHpQWURfYXRSWVhPczhtRUw4UzBDal91NEt1S2ktTmN5b21zRThHX2xJRGdQOFNpd0ZtWUVoMFVaOHFQXzljdTVJTDVsbW5ydkNjeF9JSG43c283UjByS1BNcXEtS1lYTUdQWnFpU1VGRktoZGZDZ0xleGJ2SWtGNDVQZk1aeTc5aFNzWXhBTWhjczUxYlhvWm1JMWpNY1ZRSE5WT29TMHFTRVVyYUk?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-13",
    "event": "Tesla Stock (TSLA) Opinions on Potential SpaceX Merger and Cybercab Rollout - quiverquant.com",
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
    "date": "2026-08-18",
    "event": "TSLA Stock Weakens As Elon Musk’s Optimus Faces New Challengers - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQeGwzZHM5WHFIWlIxbk0yNG9GRU9peXN6cFRJSWNnWjNGSDlkcG45MVNWSUV2Um5lU2ZyTnRyT3F4Q01YV1JHT1F1QV9FS1l2cFFnT1B1Y2Q2TFh1ZVFZWEwzeDVsN2pUOWM4NTFKU3pnbExSZUt2dWRYdHMwZ2o5RUhMb1F1emp1TlBrUEVhT19RR0llV2lKUS1LbVMxT2dZQV9lOGRlMkc2YnUxY3JjLV9UeUxnbVhUNklsRmZwWWxUNmc?oc=5"
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
    "date": "2026-08-18",
    "event": "TSLA Stock Shows Signs Of Rebound — But Influencers Debate Whether Musk Needs SpaceXAI To Win AI Race - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQWDdsVzFVQlowZ3pBenhlYmR6TEZWZXN6UEg3TG9fZ0w5cGx3aHA4LWNQR3ZZNWE0X1l4VjB6cWlFbWt2a3duYlltejNSeXJSYVJyVmRWdm1QYXNQajdxRkItY2k5MGxkSGk3THgtcmhSdVg1aS0wcnNmZUVZWTlmelNHUmdzQkoxX291dmEzSzc1NVZsMmNuVm5IR1F3TENUUHVOUmZNYUczV2RYSTZFWTZ6N2JQM2dHby16Q0xWRW8wdw?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "TSLA Stock Slips Overnight: Gene Munster Sees Over 50% Odds Of Tesla-SpaceX AI Powerhouse Merger - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOX28zRXpOMmNUM2ttUXc2NzVKa0U2US1BOTAzMEpydDFtQUFRdk9EekJ5SFJmZnExdE5oYXBkRlM5ZEswNDZIeVJQemNHVkcwN25FUV85YUp2UklwRjFxOHpGSHl1LTVQNmdHLS1JM3oyOHZmcHpFME52MjVlMVhRSmtiOVpwU2pvV0lPOW4tblBSMHRWTkRCdjh0ZUhYSkRCRmJyVkZJR1pFMXpjWTJQSEFB?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "TSLA Stock Rises Overnight: Elon Musk Drops ‘Quiet Period’ Hint Amid Tesla-SpaceX Merger Buzz - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxNWjdEc1FZU0hVR0JSSHFBUXBHd0ptUzNlc3dFQ3M4Mlh6dDVUb2lZLVI4Zl9CcE54c3MxVmxUdVZpZmxvalI0QWVPaFNTTnRGeE9CelZmZ2ctTDJiVVlDbXozcTRVZ2I0QnMxREZWa1h6REpwc0xzWmd6S1NNSnBMX1Z3aXo3RUdvQThFczgtaEpfLV9UNW1wdjVycU9OMUhBRmdQalZZNFZlek9CVWZaNlotclNhNmhEbGJkbDJlQQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "TSLA Stock Recovers To Close Nearly 2% Higher As SpaceX IPO Debuts - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNdllKT3F6R3RYYjJIQ1JwejV3MlVzZnZ1OGt5THEtZTRhREtBV0VxNEUzVGVlMDkyRzBxdGd0QlFBRVVOb1BteWVvX1NFUjJEeC1uQnp5eWxtbG1VQkp5bWpmTzM4eTdKQlV0T0xZVm5YdGI5bHFfQWtDNVlGVXFrZ3VhcVVOM2R5QXg2TW5ERF9GWjBwbFNCTEtiOFBoSUZQQmRFMVIwRFJlRzJONl9iNUp1dHh6SmQybkZpWA?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "TSLA Stock Eyes Red Week: Elon Musk Says Tesla’s FSD Could Soon Take Directions Like An Uber Driver - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPNXN1QWd4TVp6MDNJM0NCUVlWX3dXTXBhdXo5WEVQaE1uZ0V6cXhNTV9ibFNOYnBOMkJYS2haWXZOYjdjRjRsRjZNZnlUN24wZlpCZ1BNdkxzajItWWJiSzVKSzQyTklWUXFuVnE1ZXpkQkxJbDk3QmJBamFiSnY2MkQtTTVWejRkZGYydzZMeXpPWVBqNXJlbGliNXB5cWZyampJTXpuQzdnNGxQWG5uWURzMzA?oc=5"
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
    "date": "2026-08-16",
    "event": "TSLA Stock Slips — Investors Await Tesla’s Q2 Earnings And Semi Progress - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPbGZqanRpSnF5MFVCM0hxdHNRZks2ekt2V2pMYzNyd1JuZ1FqOExOcHIxTEExRmNGRmZMRUozMXJxZG9heFZ0WFZFZmpNVXY4a2w0NFZDajNZYTF2OWZFVUV4RDJMNW9XNlRGQ0xySVNKYzljc2J5R3lzTkZncnRma0czeWV4X200a0hiSDE0M2ZMb1FxM2lCUk41VC1UQi1nRFo3MGhiWDJoUFJOY2FMVU5kMzQ5RkoydVVIMFFWazdoLUJlRWd3eGRybjVaeFE?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "‘Freefall: A Reckoning for Boeing’ Review: The Cost of Cutting Corners on Netflix",
    "type": "NEWS",
    "remark": "News via The Wall Street Journal — Documentarian Rory Kennedy’s follow-up to her 2022 investigation into the 737 MAX tragedies argues that a profits-over-q...",
    "url": "https://www.wsj.com/arts-culture/television/freefall-a-reckoning-for-boeing-review-the-cost-of-cutting-corners-on-netflix-ea5a8edf?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "Unpacking Q2 Earnings: Boeing (NYSE:BA) In The Context Of Other Aerospace Stocks",
    "type": "NEWS",
    "remark": "News via StockStory — As the craze of earnings season draws to a close, here’s a look back at some of the most exciting (and some less so) res...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/unpacking-q2-earnings-boeing-nyse-193333441.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "Beavercreek firm captures $39M Navy contract, Wright-Patt awards Boeing $75M Air Force One parts contract",
    "type": "NEWS",
    "remark": "News via Dayton Daily News, Ohio — A Beavercreek firm won a $39.6 million U.S. Navy contract to deliver F-18 communication systems, and a key mission at Wr...",
    "url": "https://www.daytondailynews.com/local/beavercreek-firm-captures-39m-navy-contract-wright-patt-awards-boeing-75m-air-force-one-parts/article_4cb6eae6-5ba4-5c12-ab5f-2d51b8e25345.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "What Does Boeing (BA) Need Celso Ferrer To Do In Latin America?",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Boeing (NYSE:BA) has appointed aviation executive Celso Ferrer as president of Boeing Latin America and the Caribbean. F...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/does-boeing-ba-celso-ferrer-171516227.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "The Billionaire Famous for Betting Big on Micron Just Bought Airline Stocks",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — David Tepper made his 2026 fortune calling the memory chip cycle before anyone else, and now he is quietly repositioning...",
    "url": "https://247wallst.com/investing/2026/08/18/the-billionaire-famous-for-betting-big-on-micron-just-bought-airline-stocks/"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "FTAI Aviation (FTAI) Shares Skyrocket, What You Need To Know",
    "type": "NEWS",
    "remark": "News via StockStory — Shares of aircraft leasing company FTAI Aviation (NASDAQ:FTAI) jumped 7.3% in the afternoon session after the company an...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/ftai-aviation-ftai-shares-skyrocket-001420996.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "Boeing Stock Commands a Massive Premium: Is It Truly Earned?",
    "type": "NEWS",
    "remark": "News via Trefis — Boeing's growth is flying higher than its rivals, but its stock price is already in the stratosphere. Is the premium jus...",
    "url": "https://www.trefis.com/articles/611666/boeing-stock-commands-a-massive-premium-is-it-truly-earned/2026-08-17"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "Sandisk, Micron, Coherent, Boeing, Apple, Amazon, and More Stocks That Explain Today’s Market",
    "type": "NEWS",
    "remark": "News via Barrons.com — Coherent is the best-performing stock in the S&P 500 on Monday. Sandisk, Micron, Marvell, and other AI stocks also rise....",
    "url": "https://www.barrons.com/articles/stock-movers-a39cdac2?siteid=yhoof2&yptr=yahoo"
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
    "date": "2026-08-18",
    "event": "Expeditors International (EXPD) Is Up 5.2% After EPS Gains And Completing 70% Share Buyback Program - Has The Bull Case Changed?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/expeditors-international-expd-5-2-210916249.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "Winners And Losers Of Q2: Stanley Black & Decker (NYSE:SWK) Vs The Rest Of The Professional Tools and Equipment Stocks",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/winners-losers-q2-stanley-black-192533537.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "Bloom Energy (BE): 3 Reasons We Love This Stock",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bloom-energy-3-reasons-love-145333766.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "Fund Update: New $27.4M $BA stock position opened by Rakuten Investment Management, Inc. - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOVnh1T0h3eERpZ2l5STRXaV9NYS1XcWlEalpoNThINjJVQmM1Y2ZJX0dVakRuMlhqWDdxS09IWWtvTWdXcTUwS2paT2lYR3N3czFnRE90UnpRa1N1WDg5VjRpTFV4YWJqVmVuSFBzdUlaa3RGVlZpbHF5ajVMVjVmTTA2REYtZjVDWnVVQjFIWVBHSEo4Vjl4UzZEWEYxY2hDOTdWSC01OU41ZmtJVUNlc3o4Sm5EclVlci16QmRQWTdzaWlseGN3?oc=5"
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
    "date": "2026-08-18",
    "event": "Unpacking Q2 Earnings: Boeing (NYSE:BA) In The Context Of Other Aerospace Stocks - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPNXJId1N3TXdJb0tVQTJoUTlHRjJwcndoQWVBZFU2dEZWMFJISHN1dFhtZnhka2RrejByOFJ0dDV1d2RCQzJaVExRZUVLM2d3cHNrVWV3eVlnQ0g3RjM1eFVVWXJjbmhEZTVEcUpRUUg1VnRZcWdxa29Ba096V2sxblI3QUJ1TGRJVlRvNkx0djcyUkVXSEV0cS1xbWdGdW9SdW9LdHVDUXNkQ0xKZ0hveXNUVk9kRXAwcUNvR241SzdjTDI5QTJFWDhrdw?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "Boeing Stock Gains As Singapore Airlines, Qantas Reportedly Eye Major Wide-Body Jet Orders - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6AFBVV95cUxOT016Wm9VQkhhMFNFak05cUd5dEU5ck9qVWhBVHQ1clJKcjlvZlk3WG5GZ2NHeFBxMmJNaDNfY1AxLXM2cjZ2dk93djJFbW5hTlppT0JLdFoxSGN1Vng1OGNKZ0ktNFFFQlMzNkdGdUpzUzJ2aGRIbDVaV3A4c091TkdvNlFFekZGZFQ3NGhWbUhZdDQ1OHpaMDFoc1dPQVg0d3JZTndFNW00akpQQzluUUJSeUhzcC1EWV9YajNTLUZvTWlXOTUwUXJjT181bmxqRHVZWHFPQy0tUThuZnVCMldmUEZabmJj?oc=5"
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
    "date": "2026-08-18",
    "event": "BAE Systems (LON:BA) Insider Brad Greve Acquires 7 Shares - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPUTRKd05YRVZtN1BGd1FjUGNQaENvekRzNDI0ZEY2NmpUSG91R1ZnNmk3anpCYUVNeDlobzYwVTdZMnFINktVNkFvZE5xUjFqa1BadGhobGVLLWk3eXdwT1B4NlgzR1pmdmN4TVpqeXkzLU1DcTBuR09OSGpLSWRpcWZQMW16Q1ctVUUzSjJvM1Y5NElhQTFQTzdiOExtNUtwLXdaY20yR0pYOW5z?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "Did FAA Approval of the 737-7 Just Shift Boeing's (BA) Backlog Conversion Outlook? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQM1J6OG1Kc1BQaHRlQ01GRXNIQWdIQjI5eFM4RWt5UWJhT3NjVDQ2WVQ3dERmREllSHk0VUVib0lQMTdLX2FCZ2FXUHdHRlliSjNJNGdncURoSXBuSlg5aVNSWnV3YnVFeUhMWmFZZjFtUnBxUEotWFdqU3BtWmEtdVBYT29keUk3MC1kTGdsaHI2Y2ZDR0lWWlBpeERrcWNDVzhaZWU2WDFTS2Z3dDNrSzdNNWpiVi1LNXlFQW5YTWROYUnSAcgBQVVfeXFMT2FMVGYtNVFGR25vbVl3WXNwcm95aHZkNWpKSGhoc2RtRUNVWk52YWthSFk3WUttRGJDbTEwcDV2b3E3Q0hjZXp5X1RGdGVJLXI2TENuc29MS19Tb1Z6djI4WC1KV2lEcDBhcnlCZktoS3ktUnhWbXFTeW5WRmRJRVNZcDJWX0lWM3dzZzU3c1N4NnhyTXhlSDdGQkpsOWVhNHhuaTR5OEYzcm5ZTE9WVHI4M294ZFh6c1hpZkgtUTI0aWFyZGt3U1k?oc=5"
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
    "date": "2026-08-14",
    "event": "BAE Systems (LSE:BA.) Stock May Trade At A 9% Discount Despite THREADS Progress - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNbTBNQWs0SFRDcm9Ub2xDSS1aX2VIeHVLbmQzQWkycW1CQVNOeG9YWk9fa1hJdkdpM0NFV0hxQ045VzdCR1NvTzRGd09Na1NnOUt1aTVfNkVlNzc3YlpoU2E4QjBXMFdHY3VoVm9KMHNOb09NRDRGdmNjQmlsVENOYXFlM1N5bkRuN1FzNlRqUEE2bWs?oc=5"
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
    "date": "2026-08-18",
    "event": "19,594 Shares in The Boeing Company $BA Purchased by Principle Wealth Partners LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxQM2xSeDU3QjFpRWtXODFUdm1jRWVqcXNMT2JvMzRVMmdPN3VjSFVCdGI0YnYxTGl1QzA5WWZPdTRYejdRYjRJeV9uVG1qYU5URXVURXpHVlBZQkVoMloxOVgxMUthS2IxSE8teEYxZUI5cHZmMm5HWlZsTmF2dDUybjZCSnlKa0tnRG9KTEVfa1NDdzdOMzk2TnhBSDF1OG02YnpZODVldTRCdjRxVnBENXZzOElhUHI3c0V5R1ZVX0lzRHJmcjBDNE1na2ZnVnplNG1YUjFOcUw?oc=5"
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
    "date": "2026-08-18",
    "event": "Boeing Stock And Airbus Shares In Focus As Defense Spending Stays In Play - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNVkdaZjlKU2hFcjVhMlMwSFFNb1Fnbk1uU1h2WWZ0Zy0zNDk2ZG1odXFITExheGVZVDNVWi02WWZMa0N4ZzlnTUhTRHRQclVNSDgtcVFna3ljTTZFWHQ5VmlmWFZ4SjVCQ3E3Q1pjaHduakNmVWVlcXBwVnZBUHVPdHN5bnlsZ1JkRHdfSDV2U3NwTGZJQkJxNTZ6N1IxUDc3aHk3V3FJdzZUdTFJSTR6Z05RWUpyQkxEdHNHLW5WMFhDTTJ6RGQweFdCSVVXTGszWU040gHYAUFVX3lxTFBfellXTkVRbDJraEVLTzVRd3ZwTDVWbUVJcnRYYldZd3lhTE1uVmx5aEVpM2x5Y2NGcGx5ZjRxRlFRY1p5WHpjRzgxcEhPUEwwOUxidm9oQzB3dXpON1h1R0JDa3pXb2Mwa1JSSGhadmV0WFFsN0NFTFpHUk1MRWxEanFvTFQzVlNUalZ0S3JHaktSa1AzQXdYMTdKQWpZOS1sa2w5b3NpOFhOYXg2V0twX1d4V21OdGlha0doc3g5RC1maWo5UmFaSzhZOVJMdkFDLUtKUHhHTA?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "What Does Boeing (BA) Need Celso Ferrer To Do In Latin America? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPc01takZVUk1sNkxNcjR2RWFOek94bGV4U1JCYm5jWW1MX095d3RUc1NBbk94YktoM3h4M2dUdmRhZVZadmxncVkzTlVETF9lS3JZXzBPR1RGV2EzTmVFREZaVkRjTHE3R3VURzNUX3loVHQ1MlZVRFJUXzY2aDJveEljV2lFRXBGSDRhSDh0U0YwazVoM2lr?oc=5"
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
    "date": "2026-08-12",
    "event": "Here's What the Boeing-Archer Aviation Deal Means for BA Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPSEphYkNWam5rVVplVkhnM0ZJcVhjREFpQjg2OGJFaFo2VWNYUmIzOV9vaDlKcFpqVjlyNEpMb2FzTEQ5Nk1YVkJhS2V1d2JiZFM1NVFyaDkxT192b2U3eGx4WC1Pblk3cFVNa2ZUc1I0Q0pfNDdSalp5dTlkRjlSb0xZbG5hWkFOUXNQUzZnVmFFYXdqRGZWSVJDaGtwU3M?oc=5"
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
    "stock": "BA",
    "date": "2026-08-03",
    "event": "BA Stock Jumps 7% After Rare Double Upgrade — FAA's Approval Of Boeing’s 737 MAX 7 Adds To Bullish Momentum - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQZEVHbmV1NWUyQzZIdTMxbVRqQkpFS0llMHRmOHhxMjhBWDktelBkQll2bXNtNVE0WmthZ0ozZ0RjOG54alpRb1JDODYyVUI3VUlYQUkzelQ5ejlkSVZmU21yVDlodGZ5ZDcxVWhVMUVBcTVMQnYyT0x2UG1TRE5XQUlEMFdkVEpzM0lzQTRTSQ?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-14",
    "event": "Boeing Analysts Turn Most Bullish Since 2022 on ‘Momentum Shift’ - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNY3NTeDhETlQ4UW91RU8yal8xZEh4NjE1WjU4VVpDQmlxRTBocnZYVEdjblU0V05DSXczajdrQzEzUE9YZF9KdkpubVRfczlHQUtGZXV3N2VEQUpMcFQ2YXRZclBkcEd5RXVVNlM1SlkzWE92VFd3b2Zha05tbWxGaG84MHRDcVhFY3VoTXVMRURZUks0U0VybndxU0ItTWc?oc=5"
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
    "event": "Boeing Shares (BA) Dip 0.4% With Ryanair Engine News Highlighting a $2 Billion Shortfall - TechStock²",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNemhrczJWN2owRUlpVmhqT2ZISTFJVGhjaE9scEQxV3FMczNOazQ3OWhvb1c0U2J5ZWc1QVAtYnFtZDdZVF9wRVVLX3NZd0pZRTVnNk9SYjRNOEtkWjgxZFQtQ0NxTlNKeUpxdU80QnpYOEVkNDVMeGpGZVMzalFyVUdjRDl0VlJ2eTVSODJtU2JqM2dyLUMyRVZTancydXFsbWtN?oc=5"
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
    "date": "2026-07-03",
    "event": "Is The Boeing Company (BA) A Good Stock To Buy Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOVDI5QV9JN093enc5S1ZtY2R2VWZRZk41bTVvRno2NjZ5MDZKYmVDX3hveDMyTF9NWGRXV0RXOGwtUWpiNnVpM0tINUM0bVFWSWlsV1JTS0Y0WTk3RUlEa1VuVUFOdlVVNTh0MngtZjBlN0UwVE9VX0p6ZWo1QmFFcnVFZEgzUVZjOVByMVBZNzVuYXV5dzhwdw?oc=5"
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
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "OpenAI releases new ChatGPT for Teens with parental controls, guardrails",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — OpenAI (OPAI.PVT) released a new version of ChatGPT with updated parental controls and safety guardrails for teenage use...",
    "url": "https://finance.yahoo.com/video/openai-releases-chatgpt-teens-parental-195520710.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "Berkshire Boosts Alphabet Stake 83% as Buffett Makes Major AI Bet",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Berkshire increased its Alphabet holding to nearly 106 million shares worth $37.8 billion....",
    "url": "https://finance.yahoo.com/technology/ai/articles/berkshire-boosts-alphabet-stake-83-210009667.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "Wedbush Has a Message for AMD Investors After Google Move",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Custom silicon may open another path into hyperscaler spending...",
    "url": "https://finance.yahoo.com/technology/ai/articles/wedbush-message-amd-investors-google-205547063.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "Alphabet Stock Holds Firm as Cloud Revenue Explodes 82%",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Google's AI infrastructure bill is enormous, but its cloud acceleration gives investors something tangible....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/alphabet-stock-holds-firm-cloud-205213480.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "How SpaceX’s $60 Billion Cursor Acquisition Bolsters Musk’s AI Ambitions",
    "type": "NEWS",
    "remark": "News via Barrons.com — SpaceX  doesn’t waste any time developing rockets, launching satellites, or making big moves to build its AI business.  ...",
    "url": "https://www.barrons.com/articles/spacex-stock-price-ai-musk-cursor-e773d2aa?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "Sector Update: Tech Stocks Fall Late Afternoon",
    "type": "NEWS",
    "remark": "News via MT Newswires — Tech stocks were lower late Tuesday afternoon, with the State Street Technology Select Sector SPDR E...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/sector-tech-stocks-fall-afternoon-193526211.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "Meet the venture capital and crypto billionaires quietly bankrolling the fight against California’s wealth tax",
    "type": "NEWS",
    "remark": "News via Fortune — Campaign finance records show at least four billionaires quietly funding the opposition—and the fight is only growing st...",
    "url": "https://finance.yahoo.com/economy/policy/articles/meet-venture-capital-crypto-billionaires-184209621.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "Convertible Bonds Are the New AI Bet. The High Returns Hide Bigger Risks.",
    "type": "NEWS",
    "remark": "News via Barrons.com — Issuers sold nearly than $90 billion in convertible bonds in the second quarter, the strongest on record....",
    "url": "https://www.barrons.com/articles/convertible-bonds-ai-risk-return-ffcee519?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "Nvidia, AMD, Micron Lead Chip Stocks Selloff as Iran Tensions Rattle Markets",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — AI Stocks Under Pressure: Nvidia, AMD and Micron Sink as Geopolitical Risks Rise...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/nvidia-amd-micron-lead-chip-180635152.html"
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
    "event": "AI hyperscalers or memory chips: Which is the better investment right now?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/ai-hyperscalers-memory-chips-better-142329824.html?.tsrc=rss"
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
    "date": "2026-08-17",
    "event": "Why indie games are the next big tech investment: Gaming CEO",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/why-indie-games-next-big-100000670.html?.tsrc=rss"
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
    "date": "2026-08-17",
    "event": "SpaceX shareholders include Google, Nvidia, BlackRock: Tracking the stock's volatility",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/spacex-shareholders-google-nvidia-blackrock-150348057.html?.tsrc=rss"
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
    "date": "2026-08-15",
    "event": "Sergey Brin Wants Google to Double Down on Gemini. What That Means for GOOGL Stock. - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPNVpBaW1UaTNtd1g0djBoNURXR0pyeXIyN3o3ZlpYS2Q0Um54UkZXMXZsQXFiWUh0MFRnbUNzTHNMZHJNOWdiWGZDcXVDMmRQZ2U0ZmU1OEk0MXFaaHZmeTNNT1hRU1Q0cE9sWXlpWXE4aTl6bDhUVk9lTWZNTUlVTEFUQnEteUtFNFlMWE9oTVFETnhIQXh4TWxqMFpJZW1vR0dueUdpZ1h6LThuMndNV0tlc1R4N1JpbUt3Uno2dzd2WVk?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "Wall Street clearly loves Google stock, 13F filings reveal - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOUHN2MGZqTW1VUURKeDQ5UUJ1cXVUNmpNQWhSTkVGaGE4ejdjRDBtemRsMlhyYUtiUkJvWG1WS28tQzNzVnJyV25halNWX3NKeE1INnVrWERwYmF4SExLTENBY2RHcTJObXgxSmVXRV9mVy1zNTIybzloYTJ4cXlhYlFCTWpuczZjUEZCelR4NW5paHhoSnJ3UXlyYTN3ZjdRc1RYU2hRUXYwb2lndjliOVhUUkVaZkRqMXE3Q3F3?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "Greg Abel Just Bet $17 Billion on This 1 Stock - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxNZUtvMk1vNmloQjVyN0FCVmVGUWh5ZVdhNldHVHl0dHN3QWlaenVFZ2szM05fOUdLU1U5N3d3d3Y0S2ZNNGtncExaUjBBLWFNazVPOG84STZ3YXN0QWJaUTJENGN4RmdqY1hSTjBQWVI3SXVJRm9Yc0VUSGhGMEhxMENWdkJsVkY4allscER4ZGx5eHc?oc=5"
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
    "date": "2026-08-18",
    "event": "Hedge Funds Are Divided on MSFT and GOOGL. AVGO Stock Stands Out for the Wrong Reason - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNMVlDdThpTzhqWmdsb3RqZUVXWGRmZDRIcC1GNWU2UkRwUWtITEJZOXdERlJWblkzY3U2OU5wMm9xOW5uTnpmZWNfU28ta3NBYVV3OVE3M0hfZEt3b0ttaktuWUtFTzBQZUxja0djblJIaWczN18tNjh4WjZMYXpoN3YzV1RjTWZfRzVRM0ZrZS1hM3pkNmFyTF9uSzNfRVExSmJUNlJHeHZseklmOW5jaDR4Q0E?oc=5"
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
    "date": "2026-08-17",
    "event": "Top Investors Warn Google Is Now “A Very Different Company” Than It Was 2 Years Ago - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOTU5nZ3A2RlczT2tEQzZSLVotcnNETFR2QnR3TkJJOGZ1bF81VmZEQnotb3VCUkYzYUJVM21Xc3JnV2sxTXdMT1Y4VldaUDhUQ09zZGxPSFJoeUNacENiTW5hUDB4QXlnc25WeHpTVU9iY0wyeGk4WXU3LThLSXZqZm1HcFdEdlFMQXJPMUowUVlXSGwxNS12b1F3OTlNZVBpWklxb1prcnBqNE15aHNIX2xfTWxNbEdsUVBkblBlYlZ4R2M?oc=5"
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
    "date": "2026-08-15",
    "event": "Warren Buffett Wasn’t the Only Billionaire Buying Alphabet Stock in Q2 - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQVWVvYzUtMEo2S2tXaHpFYS1CaW5tQ1Y5aURPUTZ6TXd6RF9EMXFPY0xIY3RmT1FhZUROQWwtaE9IeHFpa1BaTC1IeHlZVnc5SGp4N0RjVUdFLTE5a0lHN0xEOFlBZDRmOWxQWmNZT0toT21PcE1JTkJwV1VGLXk3bWFyemZUSTU5SjBMdEQyNmE5S2I4ZE80V2ZDQlBsc2R1dGhHTm9ITk1YUUxkUk5DaFRhdw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "GOOGL Stock Rises Overnight: Cathie Wood's ARK Buys $96M While Trimming AMD, BIDU Stakes - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOa3lUWENYUXhLcE5FTVJpYWp3QVpRVDZQcGVrQ2RQX2JuLUdES0IxV0NQYjdrTkJpaFZRd2xUU1Qtb1RVZTlSVU1xQmVrWjdZSlVFSTZyZlliZmZzREhYSmRObmdRd2stenlLWERlckl1SHFzbE5fVWZjRjZhb2gzYzlHYXhmM01FeE1XVGI2aFk5cnpIWkZNMGI1bTVWcHRGbFlOMmRydzhNYlZpVkVkdGRKQjFheWlSX0NPRE9oUkhzS3h6X2NJOWQ1V19RaXBmZC04X254WVlUcXlKb3dULUhmbm8?oc=5"
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
    "date": "2026-08-18",
    "event": "A $10 Million Reason Why Google Stock In Focus - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOQ3VTa3E2WmZwd3E2d29BRV81XzZTb1lEVllGMTlXTEN0bWRuc0sxY2hnRkk1QlBHUlNjeFA3dFRsU0ZwRUVuSE5EeFlFN09XY2NRMl9iaGFkWHVrejQwZDVTc0ZSVWI3bXFPWkd5SnNrOUJzVUJybW1sVk85ZHVQQTREZTlfbFZSUXBrb3ltVXd6QXNsWkh6bDJvbV9iQlVOTktWekJ3RUw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "Berkshire’s Biggest Second-Quarter Move Was This Stock. Should You Buy, Sell or Hold? - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQZnoyRXpBZUt6VjhsMlhjTTZhM1RzX3FWVXM3TTQ0MV9pLTJEWmVva0xmUnNzamJQR1oxUzVhWWlxVTQ4NzZnNFVjMFlCZ1Z5WnV0NU9VQmR2OWdlMmtyVkZaRWhmNWZBR19NTWM4WF9qQ3BaVEJFcmJma1RMeGxhQkhxSUM1MTFpV1gxRXlySk5VQWl6TjNNMlJ2MDhOeV92OUUxN2lhOURyMHBTLTk1TGVsaFRnYTRRMGV1bXo2YlY4SEk?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "Berkshire Just Made a Huge Alphabet Bet—Should You Follow? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQNjl0N2VQa2NyaUk1UjY3MVN4THByOTBHRkZNQy1UVUJHTEgtaEV1cjNUNGxUVjJTZ25rOXA4VUktX1lyVW1QeUNhSTBuSm9qTFoyY0c4S0VGS0c4clRBUUU1QWQxbGg0cFQ3QXVWT2wwX0Q0UUZEQ2tidFAyUUhpcWl4TVo3VHJCbmllbThOOTlORklEeXZrNA?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-16",
    "event": "Alphabet Stock (GOOGL) Opinions on Recent AI Developments and Earnings - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxQVVo4ZFRjRVJQN1pFbVZXT05rcXhBSllaM2ZJTExWdmhLZWxWRTQ2b1ZmU3ZWWjF3aGNEV2lQeDJudU1yWWhza2JBOFRCU0pYYnpIVmxuN01Qb0JWUm9rNW04czRCOHhrOTBCeDA0UHhoLXVwNXdaN2g0U1UyTDB5WlhqMGU3akZ6cHNISl9sVHBtekk4TlVPaURuZUFKVWRseXd6UURCRWJhcXc?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "Berkshire Hathaway Boosted Its Alphabet Stake 83%—Buffett Said the Investment Was His Idea - Investopedia",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi9gFBVV95cUxQME9mdFRNT0J6RDg5V0hBc29weW90ZXNuOXlKUUdHYU5wZzhzeUMyTm4zVXp6ZVV2Sy1BelFWT1F5RG45b1JMa2lwRlJYc3J6N19jUl92X0pzYXdQNGNoZC1vVThEMzFrRnE2VmFUQlYwd0RNZ1p0RkIwRjJJOXlIZDNGbXNjNUw4QjN3dXFXSnh0S2g3ai1JZlFtNWdqUDJQSGRBdDlOVGxWckhGQlhoemt3bnd1Uk4yZFlrUjloc0FyUmZfMGthT0RHSUFwMXdGaGZCZVpKUHk2NkZ3Ym12YTRuRmZuZHZLaW8xWXNUS2RDdVhYT2c?oc=5"
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
    "date": "2026-08-18",
    "event": "GOOGL Stock Gains After-Hours As Alphabet Is Set To Replace Verizon In Dow Jones — Retail Eyes ‘$400’ Level - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxNUnlnbV95S2Q0dndkQkxnQmJWa1pPanMzdEtoWlUyLU42OHFFYTBCS3ZpdnVueGFva2lieldySFlIN3VzeGM1YXhSOVItOUtFMTQzTXdsbkdYbEVFc2dXMDNfTllLbmxONnQ2dHVqaTFwSXhDWEZpQVhHWmI3MmJkZmhXeHFJU3FKUHBxX3dGaWotNjJvTFBveDE5ZVd6NW9GdXplMXdkWVJ1anVMQ3EzOWJTLXdUTXpWSDJYdmxJWC1LT3EtczNkTFNrdFAwMVFHSUxlTmwwYlhub09zZElhSFFSLVM?oc=5"
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
    "date": "2026-08-15",
    "event": "$GOOGL stock fell 3% this week. Here's what we see in our data. - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQMmFMcDl6RFdHVm5fV21SUVV0UDJTdjBWeE1jMVMzRzh2R2hPRWVWZWNNM0tUTFo2bDBrVDZpNXFudVV4VkxORnN4THNaT1diSkhGN2NlQkVycXdGai14c0tFOTVqQTJ4cU00MFNLa3RrXzRQenJ3S2FFZURHR3d6dTRZY3M5cGwyTkJjdXZ3b3RWYXo2MVBoNm1uMTgtZ293ZVJHMA?oc=5"
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
    "date": "2026-08-17",
    "event": "GOOGL Stock Drops In Premarket: Report Says Search Giant Trims Cloud Team Amid AI Spending Push - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxQUjZDVDVHZjBJcmxHbmhfVWFBV3ItampZSHFzZXp3dFRFREk4Vkxyb0x0MXZwS1JaQmJjSUQ2aVV6UUxPZk1fdTRFUTFSZFcxOWQyVDB0ZFA5WWVPTEc0dlZtZUhIQVdhTV9WV3IzVGY0UExkVWFadUFJVFRPM1V5YllLQ05lZUNoS0xpZEJXMmtHWmloMjZIMXdVUUItRUJpRmktR2VXUWQ4djluZTRfVFNUTEdqM25SRlZybzMtamtNWklBaDZrMklpN2lhQVJxNlhDZ2JzVDMycGNhdGZqdUNjQjQwVEVzM1RQMXZSdw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "There Is Now a Way to Collect 6.25% From Google. It Stops Paying in 2029 - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPM3JIX3VnLUJjLURSQXFaVmZiaDJtZnJxdThkb3RVVTVhZ2NEal85UkZZQ2Q1SVJ6aVNsYlNyMWpfVThJNFo5VHJocXl4b0k5LU1xWjZiZDI2RUNYNjZGdm5TWlR0MFpOaEZQcVllenlBVm9mNlNVZ01McGU3NjBvSmgzdlhrRlNnX0w3dFRR?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-17",
    "event": "GOOGL Stock: Google Loses More AI Talent As Two Experts Reportedly Move To Anthropic - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxObDBOMEdpR3JmR3N3TDlaNXNvTEpFOWt1WWJabUs1TlBPTjVnTUNJQ2RTaGt6TmhjLW82TUozMmRQNDNYRXliNW5HYmpXVDQzRkRYTXdmOEw5WjlDRkQ5bGcxaW0wWmJEckQtSmZrSk9tOWgya1BsWW4tUHRjd2I4Vi1fdTlkUE5QZ1JhcGMzaTZiSEdVb1pQMHFpZWxxMEE4T3Y0cXE1ZXpuRFI0MXlxTnZ4RmlnSVRVVEc0bjhDSFRqNGMtR1hIanBNT1d0dmJ3N21OSUpOVldhTFY4bG93b1h3?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "BofA Sends Bullish Message For Taiwan Semiconductor Stock Fans",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Taiwan Semiconductor Stock Gets a Major Boost: BofA Sees U.S. Fab Expansion Gaining Momentum...",
    "url": "https://finance.yahoo.com/technology/articles/bofa-sends-bullish-message-taiwan-204702561.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "World's second-largest bank boosts XRP holdings",
    "type": "NEWS",
    "remark": "News via TheStreet — A Wall Street banking giant increases XRP holdings....",
    "url": "https://www.thestreet.com/crypto/markets/worlds-second-largest-bank-boosts-xrp-holdings"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Bank of America Says $5,000 Gold Is Within Reach",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Wall Street sees more upside after the latest rally....",
    "url": "https://finance.yahoo.com/markets/commodities/articles/bank-america-says-5-000-192431060.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "With the national debt nearing $40 trillion, Bank of America has a warning for bond investors",
    "type": "NEWS",
    "remark": "News via Fortune — Bank of America strategist Michael Hartnett warns against investing in bonds as the U.S. continues to run large deficits...",
    "url": "https://finance.yahoo.com/economy/policy/articles/national-debt-nearing-40-trillion-191211352.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Stock Alert: BofA Calls Nvidia Valuation 'Compelling' Ahead of Earnings",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — BofA Sees Nvidia Trading at a Deep FCF Discount Despite Rising AI Risks...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/stock-alert-bofa-calls-nvidia-180405838.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "PNC Financial Stock Hits 52-Week High: Is There More Upside Left?",
    "type": "NEWS",
    "remark": "News via Zacks — Can PNC sustain its rally after hitting a 52-week high as solid NII, loan growth and earnings accretion from the FirstBa...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/pnc-financial-stock-hits-52-173500380.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Bank of America makes astounding Csquare stock prediction",
    "type": "NEWS",
    "remark": "News via TheStreet — BofA thinks this newly public data center stock could move aggressively, even though the rest of Wall Street isn’t so su...",
    "url": "https://www.thestreet.com/investing/stocks/bank-of-america-csquare-stock-data-center-price-target-csqr"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "BofA Sees Nvidia Trading at Up to 50% Discount on AI Risks",
    "type": "NEWS",
    "remark": "News via Bloomberg — Nvidia Corp. shares could be trading at a discount of as much as 50%, as investors overstate risks related to the leader...",
    "url": "https://finance.yahoo.com/technology/ai/articles/bofa-sees-nvidia-trading-50-145211064.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "BofA Directs $250,000 to American Red Cross to Support Fire Recovery",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/small-business/articles/bofa-directs-250-000-american-180000532.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Why Bank Of America Is Bullish On Cybersecurity Stocks",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/16bb2013-c711-3a89-8988-5452b824621a/why-bank-of-america-is.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Berkshire Reshapes Its Stock Portfolio: ETFs in Focus",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/berkshire-reshapes-stock-portfolio-etfs-130000192.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Greg Abel Just Bet $17 Billion on This 1 Stock",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/18/greg-abel-just-bet-17-billion-on-this-1-stock/?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "AI Election Backlash Is Shaping Wall Street’s Stock Market Views",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/ai-election-backlash-shaping-wall-115805981.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Bank of America (BAC) Stock Looks Below Fair Value Even After A 136% Run - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNdGptU3dYcDdDUDNkWTNoRlNfRGJHXzlTckZlU2NSQVdTN215Q212VWdZWFA0UnM5c0RSRTlhSVg1RFpNYzRxWXRVOUpXMnZtWVpPV1R0YTJ2YVJoUUo3Nk1aVFMtaElUM2RZS1RxblpkQTl4Sm9rZUdfcHNiRTQxM0hLVG1EaGtLZ2t4LUNtYjVCRXZDZDZYMUhzRk5vX2RmelprdEN6YkRYSDdCczVJMkRwV09uYlRtUVBscHB5UzhGa1NUeXfSAcsBQVVfeXFMT2dhcmZSbzFlSUtIa0JHb1JrTWhEM0pPX1dtT1dNSUJRS2pKQkZtaTRDNzU1SFI0b1RHWkwtUE95b3VieHBJazZQb181Mi1FUDBRZ1M3NUU5ZmNNV0NJeVRFMkdTcjlkME5PbWhDM3plS1R4NGwwYVF5MGVwWkswa3JOOW1pX29pc28xcEVMT29tYnJZZzlFd2E2RGxPdFdibTNaa243aHkwcWZMZERnUGdRRE53dU9KaUpLUERvaWxYbkxWOEhlQU1DWU0?oc=5"
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
    "date": "2026-08-18",
    "event": "Bank of America (NYSE: BAC) CEO cashes RSUs, returns 18,083 shares - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxQdlQ5a0tGQ1k5NjdnOHNvSVZOUzRTbEFhR2dwZVpDaWM1NjlZaWxKcHVYYXJlUVdqRVYtc2I4OHB2Q09UaTFTQ3cwM0NRV3ZOZ0hHQmlZS1l3WFlMNmlWSmZVbGZYMUI3SVlwdjFFTGpYaEtRemp3ZmJXSjlMX2szdHhCNy1XNnphQllYY3pSN080Zm9ZcXhNUmFUQmJwVTE1Vl8tMUJwS2I1UGxpZGZCTHh2RVM1czg?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Bank of America Corporation $BAC Stock Holdings Decreased by Empire Life Investments Inc. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxOUlhSN2pWbUJld0xIYU9RMEZkblpfM3pjUmNTQWpSWDRtNm01S0M4RGR3Z21SZEtfNFBHRG9rbjQ1eGZvTTVqZlRuTlhOLWo1MmRBb0RzaXRwS3Z1M1VGV040WDdRdngzMkFEMGJLS2ctc2o1Y0txTktFazBlbUEtYmszTVZtZ083cjVNUWdhNkoyRnhxZG5kdy1QSjFmc1lVU1A5V1AxamEzazRxMmlMRW1jaDBvTG1qQXZ6ekxIWXRGUzhTRVZJQzRNbkxFSXVtcjVESGZWd1d0MTRnVHV1QThn?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Investors expect no landing scenario in coming 12 months: BofA's August survey (BAC:NYSE) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxON0xrbEZwbEpfTjVkMlF0ZDQyV1RLQ1NMcXhzMVVLQzA4RlphQjFGWTNzUjdYdmo4c0J0NjFKMEl1QWVyM2cyUXdyNEF2ZW81d0ZpMk9WSl9rX1REUUtDV1hranc3RXZaNFRrazNiRUdhaDdBVDRveTE5MzlkekZ4bTRkSEhHNnFTQWpzYkQ0cXM5MFBCVnRneVo3ZVU0NEdYZFMzOWZEeDZaRkk?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "I Might Sell BAC Stock For Verizon | Fidelity Investments Weekly Stock Portfolio Update (Mar 2021) Pete Davidson Baby (U8dcehvY02) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE05THBHSHUzMUh6ZmRVS2dZRUFWRTVUcE9PNEhhQVJDYjN2RHZuNWh3bUlXZkdXdng5a19mZjBtNGM5UG92YUV3dHNwZldJamFzV05kUlNRMGRuMzg?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-14",
    "event": "Fund Update: New $198.6M $BAC stock position opened by Railway Pension Investments Ltd - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOLWpsdW9yMElJQlFzNFJrSDRYbGhTSWlyVGR2eHpfUXQ2d2Y3clJldU9fSkFVM2tBb2pfeC1CVkpsX1NpRWFBYXJMWS1WMkdvRlk2b2FVc3BKQ1ZyX0tWcllobWUyV2F2ZXc2QUthYjJSRVhPSDQ5X3ljRkdiOVFIWUhVNW9KTWxyTl90bnpGV19fQWNiZmtaTS03dVRYWENMTjBPaUx3Y3BHWlg5VEUyRzZIUlhBUzV3TUdUVHJxaEtZNFU?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Berkshire Reshapes Its Stock Portfolio: ETFs in Focus - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPZzdVZlBETGhjSF9xaWM4dUlaR1U2NF9IVkZvanlobjlWbFJRSkpuOGdvMHR2eVdMZGtPalZVQUotbDY0bi1xM0dtTzEwTVJuOW1HWnprcTlLYjZscW5sRUREZVBFdlJuRDBpdHo5Q3dobnBmTWdYalJLM2dXbEdYbHdmaGRYOGE2RG9kN21vUXBQaXhBUFZCTkxIMnUyTmhPS0N0OTkzUTVlLUQ3Q3lNY2UyRXZsa3BKNVhvbjlDSEZibTc0WXAtME1JMmZRT0RVVUE?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Bank of America: Don't Chase Short-Term Momentum From The Global Bond Rout (NYSE:BAC) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNZno0VFZkSWV0RnFidVJlNXhvZ2pieWt1YnB5ZzVyV0p3X2MwSFFQWjdFdW1aNWZueGF0dURpczBfX2ZSenU1VVZITExrdWhVVGhHOEVqS2JUbTB0bFV1NV9kNjZDSURleE1mTGVUU1RBeUFvNW9Eam51NjVFN2dObVhpSElPWmVORkQ1aHhhS09ld29pNVZ0WXMtczhCOFBkVnliM3NvUXdHaFU3Qk9uS1hKQQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Bank of America’s $250,000 gift will help wildfire-hit families get shelter - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPMVRPblVwc3pobm1SLXJHSmtJUlJBb3dZMUV6NS01WE43REx4UHlpX1BXZzNuUUNkb2tUSTdQaWlvcjZyTnhFdDFfQ3VvSjkzMl96R3pFOEpvSU5vUnE3anhmQ21hNUEzdnR6QWxuX2d4RWgwTU9GTFo2TkNYRnJNV3dtQ04xaElDcnFrSmE5eGZMd0xfNzFjcFpjczB5QlFtZ1RpbnZQaTZvQnhWS0VDUnZSNA?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Bank Pictet & Cie Europe AG Lowers Stock Position in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxPZ0dUTGRybUp3QkxvV3RIck1qbjY0cTJvdThmUXFBNGNxTnVWV3ZLNVAzcl9PbTdpcVJabE9QVDVucTVGSmFZU210NGEzQ3k2UGVjYUMyTzczTGlkdEZGZ0thU1pHREtTa05PcWx2M3NUX2dwcVd5QzQ4aGlUVU5BT1ZxQWowRTNzRjZ4dks3RFlpclczemZkTTl3bHpDRUxwbWhENzRZdm44dzRCd0lWbE8zQnBXdVBlS1pKWEZ0eU1WT0xHaDF6bGVUQnZ0bmtteHpiakVaYm1oZEU?oc=5"
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
    "date": "2026-08-18",
    "event": "Nilsine Partners LLC Acquires 43,369 Shares of Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPZ1pjc1laVENfMV8zXzgwc1AyRjRtU191allucmFrSmNHcXotS2NmdnF2ZjQ3MFJrZTgydVBoTkxLbGIzTHkxYjFmY3UxbHdUdHM0bW1uSW1ldUtOM2pGUzhOMVdOX2h3WEs3NnBWMGFJVzk4ODdCT2c5RV92YkVidVcwQlowTWxyYWxaQUs5S0E3NEUwSFkxM3psb29OWC1rdThtWWxWRXFVblJ1LUVQX1loeGVaNW1mMkQ3akQ0VjdJdTZXMzhXMlpfdHFUam1UdmhiSw?oc=5"
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
    "date": "2026-08-18",
    "event": "Legacy Advisors LLC Buys 10,385 Shares of Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOTVdoZVVuVGJ2QkJ1VjFZR0ZVQVB1a1FCSXZfeXVvVmJ1bVlYZXhjTWdpV1pzb3NXTk1nUzBFR3A2WV9Gb0FrUGFHN0dJMTZwUF9tY3oyR3NNeXZ4VndZSDBka3U5VXRuOXFueUZfNTJOOVNKZktSay1pZ1A3X1V0WE1WQkJ6ckhvbUFHYVNfVVRmeVpLMzV6aUVSejlTWl9qaEhGZzhFV0J6X0JWM0VfQllmTDNaMVNVOXByNGkwWW5Ma2x3OFJRbHBrT3Iwdw?oc=5"
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
    "date": "2026-07-15",
    "event": "Bank of America (BAC) Stock Still Looks Cheap Following Its 111% Run - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPQllLNEt1S0hScS1mZjVRZlc4dGt0alJVb09SajFrSWNZUkZlc2xYRmUwbENKV0FGdzFaMUhfd0tFOUdfZGRnRlhvM0tHQmpmR2tiQVpFQ1ZTRDZqVm5rWFVLWTd5MGQ1LTBZbURKcjAwTkFRZGZieXYzYjUyUExSYnpmZ1B5NEF6RnZZWWsyRU8tZUlqS0RDNQ?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-07-24",
    "event": "Higher Dividend And Buybacks Might Change The Case For Investing In Bank of America (BAC) - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxORVZYOExseGVQcFdHWXZ3NlRvVGQ0MmU3YXhfRkR4Wkc1a1YwSlJORDdiMXltU1RGdUEyNjVZbFVOSkZacDRqdENhNEFzR2lSSVN1OXRtazJXUkJ1VUtKaVotOVE5NFpIQTQ1c1VnR2dhMHQ3UW1zaUk0S1Vra0d2TDlmZU5scXpaQXo0VExXdGRKNnI1QVh3OFQwMnVpb2ZEQ1k0Mw?oc=5"
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
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Should You Forget Big Banks and Bet on a Fintech Instead? - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPb1NuWDh1VlZVbjFDbmVSdG1SMTNmVXVfdUlYb19qYUJVS1h1aC1Hb3pXRll2bldYSnYwM3RVT3pXalA5ZnN6TGxXckctOXJ3YXNUMGQwQU1sVE4xZVFORkgwX0w0ZlNoTUJRbS0zUUM1ekR6VEZIaHMtV0FyTlh3dENQNFVJQmRia1pGUHF4MHBiWFNteEdEa2QtOGFVRFgxLW5fd09fY0h2ZUhXSHYyMGtNV2tPNjdwZUIxZ1VVWURjSmJiSHF3aEZlR0RhQ25acXp0NWZ3SQ?oc=5"
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
    "date": "2026-07-01",
    "event": "Bank of America (BAC) Stock Looks Reasonable On Earnings But Stretched Versus Fair Value - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPVUZNUHlRRlBDOXhVZ2U4dTRod0hIOXZXWFY1bzJWcHVJdUZESG04dVNFT0NJdjVDbThVM1dLaHVqVzRZaDg5Y3FXQklpUjRFTFotUnpXOGpDQ3BUVWJ5S2lwdkRNWEtNaWF4Zk1ObHVVYklqSTJ0X1RZeWlHd2xIQmhiZVN4UXBFclhHc3NfLUdMNVJDYUZFcA?oc=5"
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
    "date": "2026-06-12",
    "event": "3 Reasons to Sell BAC and 1 Stock to Buy Instead - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQenc1ZVBiTURkSWFtUFBfVnItZ1F0WXBFcVJMcTJSdTJKTENraTdpN0lnMVJTTjdrVzAyMXJFcENnMkZzWXZTZWVYWmtJdk1DUU9aMlJXa2dFQy03aXhObUF1bXhtNUpNOWJJRS1YcHJGcTVTSmZsdmt1dHV2WjlfWE91eEN2TXpibzM3ZE9B?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Visa’s Search for a New Stablecoin Partner Reveals a Strategic Divide",
    "type": "NEWS",
    "remark": "News via Forkast News — Visa is currently shopping for a new stablecoin settlement and over-the-counter (OTC) partner. While the move appears to...",
    "url": "https://finance.yahoo.com/markets/crypto/articles/visa-search-stablecoin-partner-reveals-220233895.html"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Top Analyst Reports for Visa, Lam Research & Caterpillar",
    "type": "NEWS",
    "remark": "News via Zacks — Visa's payments growth, Lam Research's AI-driven demand and Caterpillar's broad market momentum headline today's top ana...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/top-analyst-reports-visa-lam-204100392.html"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Visa Stock Jumps as Revenue Climbs 14% to $11.6 Billion",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Visa posts strong fiscal Q3 results with $6.3 billion adjusted profit and 10% payment volume growth....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/visa-stock-jumps-revenue-climbs-195927191.html"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Does Visa (V) Look Undervalued, Or Are Earnings Already Priced In?",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Visa stock has returned 59.2% over the past five years, yet valuation signals are split, with the Excess Returns intrins...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/does-visa-v-look-undervalued-161150207.html"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "McDonald’s Lost Money When Workers Missed Shifts. Here’s the ‘Crazy Beneficial’ Solution That Finally Fixed It and Saved $35,000 a Month.",
    "type": "NEWS",
    "remark": "News via Entrepreneur — A new app makes it easier for McDonald’s employees to get to their jobs....",
    "url": "https://www.entrepreneur.com/buying-a-franchise/mcdonalds-was-losing-money-missed-shifts-heres-the-solution-that-saved-35000-a-month"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Visa In Search Of Stablecoin Partner After BVNK Sale",
    "type": "NEWS",
    "remark": "News via CryptoProwl — Credit card giant Visa (NYSE: $V) is in search of a new stablecoin settlement partner after its previous partner in......",
    "url": "https://www.cryptoprowl.com/releases/visa-in-search-of-stablecoin-partner-after-bvnk-sale-6456"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Kraken launches cashback debit card in the U.S.",
    "type": "NEWS",
    "remark": "News via Quartz — The Krak Card offers up to 2% cash or bitcoin back and lets users spend from more than 600 currencies and crypto assets...",
    "url": "https://qz.com/kraken-krak-cashback-debit-card-us-081826"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Mastercard’s CEO Explains the Next Big Opportunity: Machines Paying Machines",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Mastercard's CEO is betting that the company's next decade of growth has nothing to do with credit cards, and the paymen...",
    "url": "https://247wallst.com/investing/2026/08/18/mastercards-ceo-explains-the-next-big-opportunity-machines-paying-machines/"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Bill Ackman Bets Big on Visa After It Lagged the Market for 5 Years. Should You?",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Bill Ackman just made Visa a major new bet after the stock trailed the S&P 500 for five straight years. Whether that lag...",
    "url": "https://247wallst.com/investing/2026/08/18/bill-ackman-bets-big-on-visa-after-it-lagged-the-market-for-5-years-should-you/"
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
    "event": "Can Visa Direct Give Visa's Growth Story a New Direction?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/visa-direct-visas-growth-story-155700036.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Should You Buy, Sell or Hold PayPal Stock After a 36.1% 3-Month Rise?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/buy-sell-hold-paypal-stock-163500698.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Billionaire Bill Ackman's Hedge Fund Just Bought These 2 Financial Stocks That Warren Buffett-Led Berkshire Hathaway Sold in Q1. Here's What History Says Investors Should Do.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/17/billionaire-bill-ackman-warren-buffett-berkshire/?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Gerber Warns Strategy’s Bitcoin Leverage Could Trigger a Selloff",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://cryptonews.com/news/bitcoin-news-neutility-strategy-leverage/?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "ChatGPT and Billionaire Bill Ackman Agree on Visa (V)",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/chatgpt-billionaire-bill-ackman-agree-133636224.html?.tsrc=rss"
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
    "date": "2026-08-18",
    "event": "Visa (NYSE: V) grants 5,492 RSUs after 4,170-unit vest by officer - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPeXhXM2RfNmNlcXhWTmd0WVpRVHBhOC1EUHlfTlFMRGdydUkzdnpucTZ4VDRrSEZMWHFMX2JjcVlyOEloSUwzNWZhXy1lQmJvLVBMRzNKbUtoeEF6d0VkdzJwWHlsREduVTJLZTNBZ1MtaXdUcnNvOG1mcTdwb3ltZFhmSmFNUG8xTFp5QWtVQjVYQlNka2xybEUxVVZwTTRF?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Visa (NYSE:V) Stock Unloaded Rep. Richard McCormick - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPQ05DRFNWVk0yTHd4T1g5dFk4QzlKTGdwNEtueGFzN293UFdyZ3kyTVhTdXpyVFRpUG1NT3p3Q2puNVYxTW5FUzdGSjN0eXd3cHBJcnhPR1k5TjNGYkdUcXc1NFU1RGtYZHZQdmExWjloZmRLb3VZR194WkJKU1VXQl9uell4VnZaV256akN5M3F4bWlELTVTcElETk53aDVpOE5R?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Visa (V) Draws Ackman Backing, Is The Upside Already Priced In? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxNR2V0ckRQWXplYUI2UlByUkVYakk3VEFabm9naHNaWHhoWmlhZm1uMzlDRm0wSWdfUjhkOEVDNUJ2Z0p1NDRIVXJmdEp0QS1xM0ZUVnNJRm5oSHpPYjlSTUVZTTk4cGwtOFp5Zm1OZi1YbldMa2hYRVM3aWM2RzVySzRmMkxiYWdtY3RxTkptVGZlcUtwWmJpamhZdE1Hc2JrbGRCWlhLTlROMjBNVHRXQzlPR010eGxMcUdlY0FTeHhodTR2VHVlczU1Z9IB0AFBVV95cUxNaURfa0NrQnpBeGxDalJHY2VYQnVId1hUZDdxLWdTTVJfNFhPSjZXTTRjYWZ6d3NPLTJfTklzRGRacDlKeUtzMFZmTVdmWUk5cU55TjFDUlBFZzVWVFRNcm81MVF5VkkyNG85M0NOMjFqMWRsR3A4NWMyZ3BtSXpuNU44cGhjMEFmTUFvR2dXalo2NVJzczJ4VmVLamRfZVJPOHFXeVN5WUhidVhrNXVHNW1VVFJyY1RPaGJGdDZlV29zVFRuOXg4UkJWdjZVb3VN?oc=5"
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
    "date": "2026-08-18",
    "event": "Visa (NYSE: V) CFO exercises 15,289 RSUs, withholds 6,992 shares - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxObjEyOGRWTVpWZXFYNWpPSGY3OW9PdWwzUlEyYldRR3hfZ1VLT3h0a3VjSDFqOUUyRVZwV3RzOXI3M29sUG80TS1ZZktjNjdCdWI1S2Z0R3JaUUQwSlFqazNpbFhHSmZqRk5OSVMyaTFHVHZRdV9JYS1tUkdCZ2JkcmRkTlpyZU15YVhVVGdMOWlENWFaM2JZclBJYTRHSXoz?oc=5"
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
    "date": "2026-05-06",
    "event": "How Much Upside Can V Stock Deliver? - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOQzR6Tmhxel8wdi1EeXRpUGpaNnVkWDRURFJjaE5qMmd1U21rb0h0M1EtQ0hNOW5nVGhBM1Z4NzlTempsTktaaWItVHNaMGJLM1U1bmV4UmpOUXpuaV9JT0QzM2t1a216WGRKQkt3YVk0aW9TQ3RONE93TVFuU0VrWkFWZHk1YVEyeFlVZVVDbWFCWFN2RV80UQ?oc=5"
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
    "date": "2026-06-18",
    "event": "Visa (V) Stock After Recent Pullback Is The Market Price Missing The Story - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOakNaTnVCQTdaVUdoOU9WLVlhRlduRl9VbHBRV09Uc2xCcE9oNHVpY1l2cEE3SXRkTC1HTmhZU3M5WnFGVmw5Rk1XY2FyMlJHd0lGVWkzT1p6RkNxazA4SjVBdlJFYkNzYzM0aHpuWjhDc2QxZFk2ZDRnRUFSRDRhZDVERzF0RGxDZXNtN0E3aVNVLVlUTXdtcw?oc=5"
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
    "date": "2026-07-31",
    "event": "Visa (V) Stock Sees Modest Fair Value Lift After Strong Q3 Analyst Revisions - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPVjU3QnZnSnN3TGlLd0ZPeFNJVWFzaHZnRFhXYTBfeVZUR245eGZhb2JPRktIZk9pS1ctVXFDQWtOMGJYUS1Fbm1EdWhtSmpsS0ZrY1cwVTJYd2F4WVhudEptWW5qbVUtbVRWOUdjSUZlR0xvdU5tTzYyTVdvS0RsVHpNUUNmMmRnbUN4N3JJU2dxUUU?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-07-14",
    "event": "Baird Raises PT on Visa (V) Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPSFhtb011enB0d05mWUc3bktOQTVUV1ByMWFIV2FHRlNzR0szSGJGdzhsdWhnaWFjV0g0Wm5VdVg1Rk9QaWx0T0JvMld2ZXRjOEJHWlhyOWUzMjhaY0hpdEhKeFhZd2lQTnJfRXpZUmNmdG9yX2J2RlNHb1laY2RJUU9MMVAta0FiLXNYanJ4cU4?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-07-02",
    "event": "Visa (V) Stock May Be 6% Undervalued After AI Payments Push - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPcEJIVlpFU1NmenhPemR6aDRnd3dBYjhIeVN4dXBKbFNOaVN2TE5vcFE1bnNoQjBBU1Q4amxZRVplczJyT0JZSHVxMDh3T29Ldm95dUFIclF5U2xRbmlCS3BXOFk2d09pXzY1SlRsaWZNaGdId1RzdWlIcC15VnEyaWw5LWlpSEFjRENB?oc=5"
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
    "date": "2026-04-19",
    "event": "Visa’s (V) Strong Moat To Bring Further Upside In The Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQQjh1QmlUek5ub2ZNQ1puaDkyeldBRzRHZndnNnFJMjZZZjNvc19FSlJNVEFWbGtqSFZTZXYtQmxPYUhxOHFqMTBCMEtLUWxaallLaXFuRjFCSW1kWjJIYXV5SGh1dHVlMU5LUVd0MDQ1YTI4NWh2bHMxcGlBM2dCUk1qUk5JcG9UVkgyZ2pVZ0tYMTg?oc=5"
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
    "date": "2026-03-23",
    "event": "Morgan Stanley Keeps Buy Rating on Visa (V) Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPT1JMMm5pT2c5WmhlS3NfTTM0ZmI2Uk53MFNnLURpcjUxb2NQd0pQQkZkUTJqeXpBRGhpWFZhOUh0RFBwYWdudTU3b19xVmVJbXVISlFibjllYjJoR0xURHhObERxVE54QmRCMkZwNWk5SERFdTRsR21leHJLYUFfaERXdThxWHFFU0xZNC10ZGZpVzl3NzMyWW54Zzc?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-01-18",
    "event": "Why is Visa Inc. (V) One of the Best Stocks to Buy in 2026 for Beginners? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMickFVX3lxTFBMR2tRbFk5WW4xdlFqNFVYX3ptRWpkWEJnMV9QejBKYnpwbXVrakRWczJFNWxFUlNCZ1JTNENoNEFTaTNZdTFEUlRpNG5KU05BZTVGX1B5OEpEQjVVN05Cb1Qwa21TbGJPUGxTREtRRnRsdw?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-06-17",
    "event": "Visa Stock (V) Opinions on Technical Breakouts and Market Valuations - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxPLXh0MkxBLU56aXNabnBWS2UzZm5uaktYM2UwOFBHaGtIRnVqNkdYbjJ5RV84T0JQMGw1bklmQ2Z3RWo2ZWFWQzlHUGNjRTdzclR1OWpPODBvTW5PTlp2M1hfTWp3bmI0MTJzcXVRVklBa1BWN3FTUWRONUN4aVNKVjhFWHFoaVZ5TWVremFZRC1MYXdxSlA5Mm1FcXBkRmEyWnBiQXVlMXk?oc=5"
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
    "date": "2026-08-06",
    "event": "Fund Update: New $162.3M $V stock position opened by Alberta Investment Management Corp - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQWkdDRWJlWlB0cnJiZ3F6MHpianFjRDJBUlJaQlphUW5wTWkzaWI3NDdUbjBSQm5kekgtWlQ2YVNDNjhEZzNzNEpRSmEyTXBKYzVnRmlpLUo5SmVmbEI2bnRuRnFkNWYwbktHQWlCU0pBYzBBazFwTHI1TWlobG9sdVJ0cXVTM016UnFOM1A0YmRKSUpHR0F1SENta1pKSUNnRzZyYXdEc1J5cDV2WTNkWWhST25mNk4wTkhESTJHQ0ZIR1Za?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Global bond sell-off pressures stocks: AlphaCheck",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — Tech stocks took a leg lower amid concerns about rising borrowing costs....",
    "url": "https://finance.yahoo.com/markets/article/global-bond-sell-off-pressures-stocks-alphacheck-135011383.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Micron, Coherent, SpaceX, Klarna, Amylyx, and More Stocks That Explain Today’s Market",
    "type": "NEWS",
    "remark": "News via Barrons.com — FEATURE  Stocks dropped Tuesday, dragged down by pressure on artificial-intelligence infrastructure companies and height...",
    "url": "https://www.barrons.com/articles/stock-movers-36984052?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Nvidia Reveals a $21 Billion Position in SpaceX. Here's How That Could Impact Its Earnings",
    "type": "NEWS",
    "remark": "News via Motley Fool — The chipmaker recently released its 13F holdings report, revealing a large stake in the space stock....",
    "url": "https://www.fool.com/investing/2026/08/18/nvidia-reveals-a-21-billion-position-in-spacex-her/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Intel Stock Plunges 7% as UBS Cuts Price Target to $112",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Intel Stock Takes Another Hit as UBS Trims Price Target to $112...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/intel-stock-plunges-7-ubs-182632378.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Why Intel Stock Is Falling Today",
    "type": "NEWS",
    "remark": "News via Motley Fool — Intel shares tumbled Tuesday as the ongoing Iran conflict continues to rattle markets....",
    "url": "https://www.fool.com/investing/2026/08/18/why-intel-stock-is-falling-today/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Tech Stocks Slide With Bond Yields at Decade Highs",
    "type": "NEWS",
    "remark": "News via The Wall Street Journal — Stocks slipped as investors fretted over heavy fiscal spending and inflation....",
    "url": "https://www.wsj.com/finance/investing/global-bond-rout-deepens-as-oil-holds-above-90-f0124f3d"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Cerebras, Intel, and AMD Shares Fall Ahead of Tonight’s ‘Supernova’ Event",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — AI hardware stocks are bleeding out hours before Cerebras' most anticipated product reveal yet, and the reasons go well ...",
    "url": "https://247wallst.com/investing/2026/08/18/cerebras-intel-and-amd-shares-fall-ahead-of-tonights-supernova-event/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Why Intel, Marvell Stocks Are Dropping After Chip Stocks Enter New Bull Market",
    "type": "NEWS",
    "remark": "News via Barrons.com — Chip stocks spent just 21 days in bear market territory. But that’s where the good news ends on Tuesday....",
    "url": "https://www.barrons.com/articles/intel-stock-marvell-chips-bull-market-1e739b69?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Stocks to Watch: BHP, Western Digital, Home Depot, Baidu",
    "type": "NEWS",
    "remark": "News via The Wall Street Journal — ↗️ BHP Group (AU:BHP, BHP): The Australia-based miner reported a 9% increase in annual net profit as prices of copper su...",
    "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-18-2026/card/stocks-to-watch-bhp-western-digital-home-depot-baidu-ilwOrSYMwrRkuR2shryj?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "The Gap Between MRVL Stock And Its Own Numbers",
    "type": "NEWS",
    "remark": "News via Trefis — This chipmaker's stock has delivered a chart-topping performance, but its operating results sit squarely in the middle o...",
    "url": "https://www.trefis.com/articles/611834/the-gap-between-mrvl-stock-and-its-own-numbers/2026-08-18"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Inside NVIDIA’s Portfolio: A $30 Billion Intel Bet and Other Surprising Holdings",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/18/inside-nvidias-portfolio-a-30-billion-intel-bet-and-other-surprising-holdings/?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Intel Corporation to Participate in Upcoming Investor Conference",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/intel-corporation-participate-upcoming-investor-203000270.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Intel Tripled in a Year. Here’s Where It’ll Reach in Another 12 Months",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/18/intel-tripled-in-a-year-heres-where-itll-reach-in-another-12-months/?.tsrc=rss"
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
    "date": "2026-08-18",
    "event": "Intel Stock (NASDAQ:INTC) Plummets 7% After Snapdragon Testing - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxOZWYxOEo5YmhFZjB6SkdqUThoOFRFaFM3YUt2NlVTM0hLWG1ZMWFOcUk1Y1Flb0N3MU1lQ3FIeGlBamhMWGVNM3dmN1JlNzlDYTdtc0VRMkVBc3czUUU3UVBtVTVFcnQzUEtwaWRLY044WFZjQTRUT21Kd1pfVFpZLXFYN21LOTVqZGR5TTZITHhLUQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Why Intel, Marvell Stocks Are Dropping After Chip Stocks Enter New Bull Market - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxONlR0c0ZHZUFxd0pPRTRPRFJYYjBjOGhUMC11MldvQWRYTUNqeGdYVWVLQThiRGtxSEI4QUVHOVp6aUpJa1BmMFYtZjE3VUtlb3E5dTF0VzdhWkRtRm1mQzhRQmZFOElfZHdCTjhkX1pSNmZaRVNqd044VzQ5dzhNaF9Hbk41UQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "Intel’s $23 Billion Capital Raise May Have a Silver Lining for INTC Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxOZXhLdlpzZ3EtVXpoaEpKZDZRT3llRWRPcjk4ZEQ1VmppOC04bVFoOFl6WlhrMUhJeE5lOTNEam8wQXEwekRSWDFYUFRiMVh0NUQ5V2R3QW1SUi0wNXFPaDRteHdpZ3BNdDktblNOeHNmSmRwYURjbVEzbkxUR1dUSWNTbkdLSjFiZ0FORnhDRWNpUk4zSWxWUWhzdw?oc=5"
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
    "date": "2026-08-17",
    "event": "Intel Costs 62 Times Next Year's Earnings. It Lost $11 Billion Over the Past Year. - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQRWxjRkJBRTlsclZzSER3Y1pLaWhYdUlITEF0YWZRVDRJcFFVbHNUdm85LUd1ZERJYXpQZnFaS0VGNVk4dDU4eDVIRDlhd3U3QXJtVU1ieDlGS3FoV3ZTMkJ0NGtPX1hBMlhWblBBS25RMEdxNHBYMlpBcXhWWm96TFR1MGlabWRCU2NpR2pMWUtGcURJZmxCQ2REYjhPSzFYdDFEb1hkTlBiX1hTdHRFMDRtMXVFUnIxeHVlX2VFY0JCZFk?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "What's Going On With Intel Stock Tuesday? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPZFpIeDhWbzNONU1rZ2Y1V0hlYXpTV1djazduMmtlUURlWWJzMFlDQ2VGMThMNmlNVzZSdkZXeDh6end0cmxyZTlPN0NxQmtJV1QwU0tnTXBQU2FzZlIySGdQeWV3N0laUmlkMEN5WVpXSVVQQUdod2ctT2JTZkVwaXpYdHhvNWpYQ2g5c09rdmRCR1FuVkpWRU5tV0l0UWo3N1BNRQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-17",
    "event": "AI Money Moves Put These Five Stocks In Spotlight Last Week: NVDA, INTC, ORCL, AMD, SNDK - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxNd2pVcHZnd2ZRY2JnQldxNE5YdUNFSzNEUGdoVzI3S0ZhcWZ5UVp1elNzV3ZvTnMyb1BNbmRrU1FlejdPcldpRngtbS1LSWx5b3VITWlfZU83eGdsbGNLWlRZaV9rR29KbjFQRE1ENFRnS1Z0Rm5GT1pBTzZ1VjJyckhVejNRZHNaSWU3NTI4eGFpbWw4RDdhaktXU1JMNmc3VUt0enBwSmotRGEwU00wcUpLVUhVaTNkcmZFUjBtLXdiR0IwSTNVdUw5MXpJS2xWeEJZYmZ5SU1uYVE0R3pzQg?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "SoftBank Group put 67% of U.S. portfolio into Intel stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxPTzlqeUIyZUZOUDU4RWtORGFKZF84Nlg1a0pkOHdSQU9jZVJVVDdvdVFHU0RhVnpQbWVpSmdyc0djUlFJMEF4cjV3X0hsVERyWDhsMmUzUnJNeE1WU3NMNi1Jd0hkVS13WTRQTVp1NUZ1OUhzRnNvNG9LS29TQ3lXUWROZGtJTHZGa1J4M1Bnd0N4dw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Intel (INTC) Is Up 6.1% After $20 Billion Equity Raise To Fund AI Build-Out - What's Changed - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOYTFjbWU4TmtmV3JKNTAwMjBvTUZCTkhvZ2pDV3BEemE4bDhKWXdlZ3JaUW9RbnpGOW5vRjFZVWQ1ZldWVWwtNjAtdW15QlZuUG5wTHhNeVU1eFFZOWVlYkFpbTl0am1yQmQ5c1hQZjZEeGNKTWppSjlzWkk2cnlGY1FKWUt3S1Js?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Why is Intel stock sliding today? - Investing.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNel9CbEcxeGJRUkN2V0FXVm5PcFdBd293bXdTUmVrTUN2VXhPZHI2ZFZDcDRZT1B4dHVsbmpzWGNacU1IekcxRHdkVTM5T1BnNlhJcVNseUZ0a0k1dnVpTjVaVFZBWk1PRTgyLVZ4ZEg1SlpjSmJlQXNpaGxMdjh4SGNYZ21OdEctTVpORnpTeHREZzFqZV9XYUFR?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Opinion | The government’s Intel bet was even worse than expected - The Washington Post",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPVEJqcGZpblc3ODk4Q2ZJR0EtZEtXb0d0NXVpT0ZTLURFLWlJajNvdDQ2Z0NyMEhpWnNzZ1pWWk96eG91WU4zcTFQbDJBYmN1SE1PUldpMmNyZVNCMk9TVG5leDFqamxaUjJMYW8tOWR5QzFZSDVSNWRGa1dGenVHNWFUV2VlMzUzWGlyOEZZcWlnTjRzUHFDWDM1cmhNdnBkTXA2eHE2RUhWd192TUxjZFpB?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "SoftBank put two-thirds of its U.S. stock portfolio into Intel, SEC filing shows - qz.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5PMEFHOTB2Zkk4SlNVZFdxWGNmTE8xcTY5dWUyeks5Sl9WZkVPZmJ1dldPUC1EaUxmT1NmenE3amI0Wmd2S0liR09aaEc0QS0wREs0UGNPU0ZxN0dCaTQ5bQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Why Intel Stock Is Falling Today - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigAFBVV95cUxOa2tGSXJjYlRfUWFxUER6eV9RZXl3X1VYRUk3emd5RHY0b1ByTmxKY3Q1bGl0NEJVWjl0aTVqbUdxQ1NVYkpYQ3ZNSWNBWlVLZzNjRE5RSGFTMTZjaEpQQUpEWi1RRHVBRE55WXB5LWJTQ0dVVVQ5aXBZZ2FEejM3ZQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "VOO is down 0.6% today, on INTC stock price movement - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPOXFtODFlc0ktcDdYZG1US1hYOWVfYm1EbjZIQkNZSnFmSUpVSFB5RW1sRXgtc0ZoaFRPYkNDbjV4RkpLQ21IUURsZThnTXRxcTc1aWcyb0FWZ2lsYUFrY09wU053WlZ6bWZPVDZsM2tlcXdYZ2RCeWgxV21rWDVuZktBX29DZmxrbm9RYmJqTXpIMHM?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Intel (NASDAQ:INTC) Stock Price Down 6.6% - Should You Sell? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxNQlJGMXhBVEU0WDFGbzUwbHJmS084Y3FlYV9La1dBSTdHaE11UkdsZmlZRG1jRE82S2JFS2plNE0ycjlESzVmTFRyWnBocjR6bGRJQVhKZXBOS2ZMQ1ZkQ1llZHhvcEtjaUhkbDQxSUpfQ1I4QWNTUnFrYkx3QWZFTFdVME9Vbkw1Y1k1cGk1OVVIclgyLWVZMHo3ODMtUTR0TUVGbXhSdGtJZw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Intel Stock Has Plunged 32% — What Investors Need to Know Beyond Dilution - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPY2o2bFdvVi1XRXVuMksxeUN2bC1TbGVnYU9EcXJqZmhpcmtfWHRRTGEwNlBZaXRXSmFKWTluWXc3Zm1jX0Q0NUNWcHFqZG1DSF8wZVJicUxrTm9rQnBqclF3eFhBRDZ5UU9nblZDOEtRT3ptNHkxcGhpdFZkSXMyQ24tdEEzYkY1WFY0NEhxTDZQSzF0NG0wcnU4by1JRGtUcTFwUk1tZHM0VzhLUTdMOUlTeE8?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Monster insider trading alert for Intel stock - Finbold",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMidEFVX3lxTE1tUVZzVU5SVm1ETGNKOUxSZ1ZrRy1Tc0J2WWJtWFBCS2FjYWtfUkV1c2JjX3lBWHZJNTFEekduaUI1ZXJYRFExVUV5UXFGRzN6b1Q1LVhLaklxRHVWLWxfZ2E2c3RxMTNHYmE2YkFtdmVuRjE4?oc=5"
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
    "date": "2026-08-18",
    "event": "Intel Stock Falls 4% Premarket as SoftBank’s 67% Weight Came Without New Buying - TechStock²",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxOd2lTQVY3U2lqUmpta29lZ3U3cWtYeE1ZRDRjLUtkTlFFWnYwR0stWlVSbDdEaU5ORHRfbWRnNnU1dlVxNEZrWnBxVlNpWmlTcHdCcmt3ejAzS1BzZHZ5RVpldUhLYk9WX005Z2xIaXUweXRITllucWFvZ3FQYWdKOElyX2xvbTVUdk4wOXhqQ0pPMVRvd1FlMnp5R0czdw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Intel Stock Pressured As $20B Share Offering Locks In - StocksToTrade",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE9KQ2R0WWJjaEc5OVd1QlVFYlR1d2prb3lpOWR4UGk3V185M01ublVFcDVreUJhU1E0OVpBU1ROdGRTVnRIbkFnaTFFXzJaYXQ2UElwenBVQ0JxNmw0NFR3bVFwdGtFM0U2Wmo1UlZPQ3JzUWJWejlRYXN3cVU?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Analysts Keep Hiking Intel's Revenue Forecasts and Price Targets - Is INTC Still a Buy? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxPNmlWQmE4Z1ROeHpUYmo3TTNkNkZMU244RnUtajJGNGpRU3ZIVnpOODB6MlZZLTR6RjJfVjA2d0oxS1JEdS1JMDBWbkJTNnBPUmxfWnNmNDdLN28tTGRHNTJ4WXpBT1pQZTU4RjJlNFUwd292ODJOeElhV1N3UUhPa1hUdFg3MEtpM1JXM09XWU1kczBWMVFERDM2c2ctLWg3eFE?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Intel Stock Plunges 7% as UBS Cuts Price Target to $112 - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxQYy1EZDVGXzVINkhFUWVmYy1USTdaM0hDVW5qU3BfbXdPUlZyWV9CXzdfeVg5UGVVRXVlU2lpVHRRbzI5SWFJWVlyT0RHOXdwSzFMREJONktQbDYyYk5vUlpWS3lsMExhVGVVSzA4dWRfdnZpSG5hUldGUi14a2pjV3BiZGt5eFdqTnRyTHEwWlJpekNKMkJsOE13anZqSHhuOEdiQXRqNmxFV3BEUUZBbHlCRQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "$INTC stock is down 7% today. Here's what we see in our data. - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxOM1B2RjhDdlNLUEVialdhbEpEeXB3ZVhHaWdYY2hYNWdVRlJoTlJmenBXN0pDdUdPMVo3RXJTMG9ueG16TGxTWVJzZ1Z2elFXc3FXSjFpX3ljODJmQmVzMFN1NTNOZkRZNVAtbms0cHZBTkNYcFVIRkoxVV9jeWprYjE1V2E1SzFpbkhJVzdneW5FNnRzT3cyMzdacnZrRlhlZ1E?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "CEO Lip-Bu Tan Just Bought Another 105,000 Shares of Intel Stock - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxOOUU0cDRITFNFX1VvVEtxWDVyMl93TXF6V0xjXzhMQ3E0QW1tVGFrSFhZQUs5RTROMGlVS1p0S0sxVXJ1NFduWlo5aDYwYURRYnVrSFhla2J3RktXN21oTzA1ZUNhWk5LYmhnWmFSQ1JYTHRXSjNfVFNoSF9HNmFKUXl4VzZBVUJ1dy1Rd2djSk9zWWhCbjc3dV9kSXJMcU5vMndyYWZjb0NLQ3h4?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CrowdStrike's earnings test for Falcon Flex sustainability",
    "type": "NEWS",
    "remark": "News via Proactive — CrowdStrike Holdings Inc (NASDAQ:CRWD) is set to report second-quarter fiscal 2027 results on August 26 after market clo...",
    "url": "https://www.proactiveinvestors.com/companies/news/1097218/crowdstrike-s-earnings-test-for-falcon-flex-sustainability-1097218.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "Snowflake Faces High But 'Achievable' Sales Growth Expectations, UBS Says",
    "type": "NEWS",
    "remark": "News via MT Newswires — Snowflake (SNOW) faces high revenue growth expectations heading into its fiscal second-quarter resul...",
    "url": "https://finance.yahoo.com/technology/articles/snowflake-faces-high-apos-achievable-163400570.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CrowdStrike Faces High Expectations Heading Into Q2, BofA Says",
    "type": "NEWS",
    "remark": "News via MT Newswires — CrowdStrike (CRWD) is faced with high expectations heading into Q2 results and annual Fal.Con confer...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/crowdstrike-faces-high-expectations-heading-152114269.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "This Politician on the House Intelligence Committee’s Cyber Panel Just Bought Three Cybersecurity Stocks",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — A senior member of the House Intelligence Committee's cyber subcommittee just disclosed purchases of three pure-play cyb...",
    "url": "https://247wallst.com/investing/2026/08/18/this-politician-on-the-house-intelligence-committees-cyber-panel-just-bought-three-cybersecurity-stocks/"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "Fortinet Expands AI Security With Virtue AI: Can Growth Accelerate?",
    "type": "NEWS",
    "remark": "News via Zacks — FTNT's Virtue AI acquisition expands AI runtime and agent security, adding new capabilities as enterprise AI deployments...",
    "url": "https://finance.yahoo.com/technology/ai/articles/fortinet-expands-ai-security-virtue-141200684.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CRWD vs. FTNT: Which Cybersecurity Stock Should You Buy Right Now?",
    "type": "NEWS",
    "remark": "News via Zacks — Fortinet's SASE momentum, steadier execution and lower valuation give it an edge over CrowdStrike as cybersecurity deman...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/crwd-vs-ftnt-cybersecurity-stock-141000399.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "Renaissance Technologies Has Taken a New Position in CrowdStrike. What This Means for CRWD Stock.",
    "type": "NEWS",
    "remark": "News via Barchart — Renaissance Technologies opened a new $572 million position in CrowdStrike in its Q2 2026 filing, adding a notable insti...",
    "url": "https://www.barchart.com/story/news/3907191/renaissance-technologies-has-taken-a-new-position-in-crowdstrike-what-this-means-for-crwd-stock"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CRWD Could Beat Q2 Expectations Across The Board, Says Benchmark — Firm Sees Multiple Growth Catalysts",
    "type": "NEWS",
    "remark": "News via Stocktwits — Barclays and Benchmark both raised their price targets on CrowdStrike, with Barclays analysts citing strong channel chec...",
    "url": "https://stocktwits.com/news-articles/markets/equity/crwd-beat-q2-expectations-across-board-despite-rally-says-wall-street/cZYcaVkRJj5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CrowdStrike and Palo Alto AI Winners Ahead of Earnings",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Wells Fargo Flags Strong AI Demand for CrowdStrike and Palo Alto Before Results...",
    "url": "https://finance.yahoo.com/technology/ai/articles/crowdstrike-palo-alto-ai-winners-115602075.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-17",
    "event": "Looking Beyond CrowdStrike? 3 AI Security Stocks Stand Out",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.marketbeat.com/articles/looking-beyond-crowdstrike-3-ai-security-stocks-stand-out/?utm_source=yahoofinance&utm_medium=yahoofinance&.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-17",
    "event": "Why Did CRWD, S, AEHR Stocks Hit 52-Week Highs Last Week?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://stocktwits.com/news-articles/markets/equity/why-did-crwd-s-aehr-stocks-hit-52-week-highs-last-week/cZo6o9eRJKi?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-16",
    "event": "CrowdStrike Is One of My Largest Holdings and Trading Near Its All-Time High. Here's Why I'm Not Buying More Shares Right Now.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/15/crowdstrike-is-one-of-my-largest-holdings-and-trad/?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "CrowdStrike’s Expanded QuiltWorks AI Security Push Might Change The Case For Investing In CRWD",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/crowdstrike-expanded-quiltworks-ai-security-231134189.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "CrowdStrike vs. IonQ: Which Technology Stock Is a Better Buy in 2026?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/coverage/better-buy/2026/08/14/crowdstrike-vs-ionq-which-technology-stock-is-a-better-buy-in-2026/?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "Top Analyst Names Snowflake and CrowdStrike Among Top AI Software Picks",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/top-analyst-names-snowflake-crowdstrike-200115543.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-16",
    "event": "2 Growth Stocks to Add to Your Roster and 1 We Avoid",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/2-growth-stocks-add-roster-031700837.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "SA analyst upgrades/downgrades: GOOG, CRWD, PLTR, PYPL - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQM1Q5MFFCN2hPRm1YdGZ2d0VWSUtGcDFkTExWaWlXamRVLVIyUmEzb1NFbGlOaTBya3pDM1pDT2htVnFGS0l2UjF2cFRnZksxSWVFQ3lmWU9KQXA3OWdhaEdKSG15b2ExMDAzY012OUhmSFNmNTk0WXNxNnN2SWQ5cU4xOGtvcnF0MVdCVlVMcHE1Zw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CrowdStrike (CRWD) Stock Looks Overvalued Following Its 4.6x Three Year Run - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxQakt6Q0F5eWRna3NHWFRySjhZQm5xR3BIUkc5aDVtRVZWUUFreGxLc1R6R0Viem5VZEEyMGRCdUZtaGE4ZXRqODNFMU9WTTFPeUR4djZneHVGS1AtUndGNlByTGM1T2dHWHNhMXgwV2c2X0hIV2txOTJTSFRIbThORjc0RTR6QkFJNkhnU05qRXlwU1Jaa09GWDNYMHBUeU95MTJGYnY3UlNzbE40d2RhMUpDMTIwcVQ2WUdXbXlNV3BiNlpUUVdFaG44dGhyWWFkdjh3QjZ30gHbAUFVX3lxTE9QY2NDYlBoVXY2N2ctbnVvd09MN29qRG5MLVFOOGJnbzFua3ZwSTdIaHkwbnZHSmctV2ZJWmYzME5SRmZzak03SlRrd21UWThPcy1yNTh1MEdJS016MF9tMVR2ZnhqQ0ZHeVpzZWU5enRvQWZ5VHprUFRJQzA4U2JqUGhYRFF5SlpMTUZEaDFBY2xKdWFyZWNOLVNOVkNuckc5UnJrQVhRTnRRdURtTnk4TjdScXNWR0hSMmphWFZKckZMQ09uYUp2ZmtvUVFJT21SS3hqNEpUQkstNA?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-17",
    "event": "CrowdStrike Beats Q1 Estimates On Earnings And Revenue — But Stock Sinks 13% After-Hours On Modest Guidance - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxNR2lGTmxuUkhqOFdabGV1RUNJQzRveGhhMDE4UWN1eHc0MnltVEFmT3BNWWl2X0xzZWFUSlRwV0swQnB6LU9fNGVSQ1lZRGczZXI5WjVPeldDQkd5WGhpZEJlWWpJMmZ2YS1MM04yS2dOaFFORkluTzlpd3FUallqeHp4c25RYWI5bTkxaFA0UnNRNFVoNFlnQTZVdW5qWE92OE9ncHlEOVFzeXliU28wYl8tdHNYV0JuTTF3bi1DdnB3WGJrNVJRM2NUcXRXUnBJei1lUGx0TGxrUmVD?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "Renaissance Technologies Has Taken a New Position in CrowdStrike. What This Means for CRWD Stock. - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOQnM1eWdabHg4dXZkWk8wX0NoSUM4bHd1T3BidXN6ai1zelkyZC1YNGRkVXNQWGw0eC1YYU5VVkwyUldYS1R3N21HREp5dHhvYUc2UmhseGIwdFlhaTNjeG9uX283LUs3OXRwWWEzem5Vd1JycTFwOFBNZEpITnNhQjVYVmhKUTBFaVBIOVhKWHg3WnNtalVndHZyTF9XMTlsVHVJUTlqU29Zakk0bVFxSV9kLURKcGc?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CRWD vs. FTNT: Which Cybersecurity Stock Should You Buy Right Now? - Zacks Investment Research",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxOZ2thV2hQTkdMejlmc281c3RKQTEyT3d0SEVCdm5YVFMweG11QWwzUlNXQzdDYnFtTE9hWC05R2lad1RPc0hjRWFkdklqOV9qOHhvZFB4OUR0RGNIX3dOQWRJdWtJMlpEVXJLN2xQcmxUTi1TbzM2dXJWQUVKNGFpdzFyTGs4RTBvZVZzUGF6UDNtUlVVTzR6TGNkS3dXd3NTNDBrTi1MMA?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CRWD Could Beat Q2 Expectations Across The Board, Says Benchmark — Firm Sees Multiple Growth Catalysts - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxQSUJmdXZobDRSRzMtc2Z6U3kwOG5wekR6NzJ6djBzNHJyVjczN09qSklnMmw1OE13ZU9kZjhsaHpoYU9LeWxqRTM2TU43MG44aVhGcnZZVUpMUTJ5R1NmemZzckdWbG1TMHpMb2E1YmNNQXpoUmd5SGZiY04yQVZ4UjdsTC1QNG5DYTFkbFg3aUMtaFFnLWhOSGltR3JScnV5TFhmc1lBNlc2RHBSWHVoenhzcjE5VXQ1QkhUX0xCQURVNFZya2dGdWtmSUtfMzJkUUFkSDNsR0FkbXVpUGJabjNrNmtQcW41dEwtWmVyUThLQQ?oc=5"
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
    "date": "2026-08-18",
    "event": "CrowdStrike's earnings test for Falcon Flex sustainability - Proactive financial news",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQdjlRZm1DeTVhRVAxb1QzbzJrV0V0MFRaYWRyVEk2REJHZV9URWFsbDdZWXlRZGxZRjhXZEI0UnpXRXpxbkJtWi05SDBKTF9xSmRIWXU1MTQ4LUZVUkFjT1o5NjNZTlQtbjNoUjI5VXR6NHU2dVloU3pUTm9BckNWRXVXczlsNnBBaFlvY0hlenVKd0FTdEVhMnJjenpDdFdJdXQ4ZklLTGUwdHBBYlpadjduaEtqaVJiMWVSWDB0dE13b2NhQklJbQ?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CRWD Maintained by Benchmark -- Price Target Raised to $250 - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNV3ZoSUtGcWpjenc0UXp6RXl0cHJ6dW5aY2lQRG9CbHcyQjVjSmd5LWI2MHJmVGI1OF9WNmF3Sy1nTFlCcDk5dE5xMU9BX21YanZoVldoaFN6U1JpYTlwNURZTGplS2UyRG1xaEhTVDJwWVp4SE0wQWpwdWFmcGZFZHEtY3gwZDZUMFI0aktKamFJVFhCMkRPc3BR?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-15",
    "event": "CrowdStrike Stock (CRWD) Opinions on Recent Analyst Price Target Increase - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQOTJXU0VyNWVLSlhxWkRkMVhyWEZ2aGFEbXRyRGc0aTJGd2VYU2tnZlpZcHc1UklOTzdNM3UyUzVsaDdhOGd1VXcweHhGeWVqTHN3U1dNUDVaYWNXTV9sNnQycGJkTmoxQ1dmX0hrcTRIc2dScW9td1pwOE41a3BYakJvNmYySTd2djlUQkRXMk5YNGJaS1kyS3dJdXN3SW5hRDhDR0U5VmNoT0ltS0xR?oc=5"
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
    "date": "2026-07-27",
    "event": "CrowdStrike Holdings (CRWD) Stock Falls Amid Market Uptick: What Investors Need to Know - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPbWhPTFVzOU91RjZsV1RKMGwyVFl1SWdCNGVqZEZDdW9ZdDZxd29yVFZ3b0dRbDJ3dEN4SHJPM2tHUVFZZ3lZWDd1Mi1NYWFpUlZTTC01NUswaXVKbU1lZ0NnSDBqbFlRU1FWYkRfN1NLOHYzR3paQW44cmNfdWRIVXEwb21MMUx4MVR0ZXJFeGJmbkVVckYtS3BJSWx1S0ZVeVB0Qw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-13",
    "event": "Fund Update: New $571.6M $CRWD stock position opened by RENAISSANCE TECHNOLOGIES LLC - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxPd043MWxwS2dmNVBHN0dlaGRwMlMxd1l3LUhHVURKakM1YWZrZXU0ZGZ1Xy1BWlg4QTFueVZHRHo2WEd1ejhkdUVTaTBQcndaOW8zSUxPdUZ6SkdKeEstMXQ4THZfUUVRdUtqQkRNd3k3RnNLUWlSdmtJUzZXZHFVYTJiZ3pwb3VfaEdIN3J3bjB3aGJaVHF6YWF6UU9LU3p6Ym1Za1V2TDlOeXQ0OENRVVNXcXI0MG40ZE1xQ2VpTm0?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "Analysts Have Conflicting Sentiments on These Technology Companies: Globant SA (GLOB), CrowdStrike Holdings (CRWD) and Zscaler (ZS) - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgJBVV95cUxNTFJoTXpWMHp0dWZqQkRuSHBXaUZXc2NGZ0RWUl80OFd2cmhFRHFMZDFHY0N5V2VvY0ZIOGRXcnpqaGxySzBlQm1EUmQxTVdadGxRV252ZDA1ZEhjSzBsbklIRG9YcDhraUd0ZlFyMkRWTVdjTHRnV0pLQmIxR3ItU2FFNndMTGZrQXNQTzZhT1o3VVBpbDZIajNDS2duV2YxcERBSjBYWGRXdG9sdHMwNXozSmU2LVRJc0psbi1ta1paZDlyRzJTSlItUnVJWnRWbGhKNE9IcXpVMHZ4MUhYNlRvcVp0S2RJOGhzZXJNbW1NblhHNGt6d2dIUHNqVTJyRldqdjFsellNSTVXTTFwRzRJQ0l6eDhnM2lVY3VEWnlUV2gyYm5oX2ZobUR0WGQxalE?oc=5"
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
    "date": "2026-08-18",
    "event": "US Stocks End Third Session Lower As Higher Treasury Yields, Oil Prices Weigh — BABA, AAPL, GRRR, KLAR, CRWD In Focus - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigAJBVV95cUxNNW1ITlk4M1VER0FlMkNvMDJkaTVzRW1lTEhGVzREOFp0dWRTMG5ac1lIRk1iOHlJR0l4NFBZM09YakhYTFkzVEhiaFNuVGtTTE5zU2QxMm8wMzJhVldDcW5TeTVjWXI3TklRMy01S3pGYkwwTVlGQmJKNTc5N2tWUzM5ZXRvNTVzcnlwYUVzcG5NbG5qOUktaFBjX0lfSGpSNlljSkpSWEtqa3NvUm54MG01Z3daS3dza3Y4RnBPTkoydnEwY2I2b21CcEVXRUlCeEpZS05oOUdaa2o3Vm1fd25XeHpzWjZGamk1ZWcybVdjMmdzMWhKai1kX1FDWE1U?oc=5"
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
    "date": "2026-08-04",
    "event": "CrowdStrike (CRWD) Stock May Be Above Fair Value On AI Threat Report - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPWG9Pc21aMWRWRDRwV0xkU3hzQVZnWVZCTnQyX3lVbVREX0I2NDFLdnlQUmJlb09JUUg4YWZ4OTA5WWFjNlpFY3JkTDJRSXF6RzUxeDY5bDFfYnQ1SHU5RWR2SjNzM2NTZ2FUd0hDRXBheWVRSTQtbW5LNkhhbWthcEJPcm4xVmxNdzViZm9jT3VteWU4LS1UMWhTNTJKdw?oc=5"
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
    "date": "2026-08-03",
    "event": "CrowdStrike (CRWD) Stock Trades Up, Here Is Why - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxONjREMFFBTTFPZkZrWmZPT05Mb001Qm80S25US0JxT2VqTkY0cEtMcmRNQkZEdGNGalJtNEk4SV8ybTFHOG1KX20xQnpvNHpPSWFnQy1VMlpmU3Rvd2sxM1ZrWThidnJDZmFGQzVXbEVYVm5hUUJVRnh2ZjU0MWdVZWdRS1N2Q0lHc2JUcmd4S2FwZUJFR0ljYjJXd0RlNFhUbXVBNmw0YTBHX0Ry?oc=5"
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
    "date": "2026-08-18",
    "event": "Rep. Josh Gottheimer buys shares in cybersecuri... - Pluang",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxOYWVGdUN5RF9GZE44bG1mb1plRVpXWFNrNXM5TUd2X01pYXhyWHlrMTMyQWtabXdLNEJPcE1JLVBqVmxkSXpqZmZKOENIcGFKWlRGMk9LaS14VWZnaGVpdnBuZUtjcVdyNk5NUl94cktnOUhLS0FfMVduazdhVzB5QzBITzJqQQ?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-14",
    "event": "CrowdStrike slips as insider sales and pre-earnings profit-taking appear to weigh on shares - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNTTZEekFrc1lkWTBBSHlrSVY2RUFwQWcxSC1Ia2xXMUplaHNxVWJjTHpGOWNsdDNPSkVrXzJKX0JodnhrZUtsQ1NaakUzby1wX0xvelFPeVdwckFJdjFTbTJzVDhyNTVRRkhodXhpUXpNQUUxZVVQUDk5UjFvUXNVMXBvLUNBcmZTTHdsdmY4Yk5hdlNPbzNpM1BHaVV4a0prc1J3VUNZWlV6Q2k3THNmdlQwbVR2eW1May1mX2NsOVhydw?oc=5"
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
    "date": "2026-08-16",
    "event": "CRWD 260814 225.00P (CRWD260814P225000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE1TeF9KSFN5dGp5RzhHYW9QLWFQcXdQVVlRaDdaTTZvM18xWnNuczc2TFg5LVJMQ1JaRV9YWUNqbFhiMjR6bWlIUFlWTnlSQ2FEd1B4ZVRwSG9jMTlGMklRRg?oc=5"
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
    "date": "2026-08-18",
    "event": "Newmont Corporation Stock (NEM) Closed Down by 3.57% on Aug 18: Key Drivers Unveiled - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQSGJ0N094VWxMMlBJWWpldTBNM01UaDRvV3NtY1RCM211emRFQkh1OUxhS0VfMGFaZGl6ZXZFTDhhQjVYRFpFWVB2UXpYNjNsWTdwTVZCWmh0ajF0eEpPbWpLQWdOVFUwZElMQk00emVQaDJIbmVTT0ozWEpweWlicjY4MXYtOW1WSXc?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-18",
    "event": "Newmont Corp (NEM) Shares Fall 3.6% -- GF Value Says Still Overv - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOV2poN2FiTTdKdGl3eHpZQjdFOG1xRjFRdFZ0UVJrczZMTDQwbDcwUEQ4M1Naem1DUkZXWE5UQnAtTXpNTmFnWkc1YTlHM25CUWg0THQ5bV9yWG5wNXE2Y2lTck1tczdhZ1h6aFc4cjk0ZS1BcWNPTEZIQkFfbTZaYlRJdUV6UTBrVE1xdW9CN3d1UTU2X19jcE5oZEY1WVdzck9z?oc=5"
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
    "event": "Why Newmont (NEM) Stock Is Up 3.7% Today - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxPbzFjTmFnYU5tQld3eE8tY3RTSFJXTmFfVXYxRkhVN2E0SXFhNzVINktDdmE0OS1VaHh2b2JYVkc3M3lHbk16MG5KOXFpSUVyWEtZWWg2MHpYa2hxQnNNZHRCdmRZbkwyM2ViblluZkFiRGlCQmdWcHltdGpuclFTeC0wQ3lUQQ?oc=5"
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
    "date": "2026-08-10",
    "event": "5 Green Days In A Row: Newmont Stock Is Up 21% - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQbGdsTEVGaTBsOGtQalN3dVJURFdXYWFSYy1MQUFGZFN0VWR5WUVWYkg2MndTczVDU0Z5amE2SHctbDNIYnBlZ09NMGxtVDNZS3E0SmM1TXM0VlNvdU9tbHFpZXJLSUN1Uk9iMF9QYnR0Y0RhZGd0SDlJLURhOUZtdlJITFBQemNETno0OTQ3b0JZSjJ2TW5UcUlxTnZKYzJmTGkxaFVKdw?oc=5"
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
    "date": "2026-08-14",
    "event": "Newmont Corporation Stock (NEM) Moved Up by 3.20% on Aug 14: What Signal Does It Send? - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOb3dXVF83RVhqZWtZX0p6RVJ5YjkxWEtJLTB6VlB4MkV1S2tmMy1kYV9uR3cyeWU4bE1OWTdmWXBQYWRTZmJJQWRkeGp0blllRE5OWTFSUy1KanRNb2hjNWpGUjBsWHdEVjNtbVlPdjcyQmlFY3dWRGhveTc0WkFHWEkwRVFJajA1V3c?oc=5"
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
    "date": "2026-07-30",
    "event": "NEM vs. EQX: Which Gold Mining Stock Is a Better Pick Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNWFMxcF8xd3JiQUE2a2J1RGJEcTJjYmhRQ2didW5VdHhwaEZNdUtJMDIzZTkteGhTQmlIbWNnRXMtenRNcEpKd3lJUlJZMTAtTUljUDgzMHhNVkcwN2FtWlZWT2gzQmVtalFvTm9CRUVUeVVHU3N4SzV1eUZWTnJ0ZUIzczBhUVVFUXVtSHdEQ0s2cDd6dElV?oc=5"
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
    "date": "2026-06-23",
    "event": "Newmont (NEM) Stock Price Pullback Versus Cash Flow And Earnings Valuation Signals - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNczR5azJPYTN3QWlkNkpJSVJnZkgtaU9Bd3dRa29FbXF6NkkwRlRmNGYtbmdaZ2hmZEdaWkJma0ZCQ2hjc0NicjZISjdDaGRBUE5SY1JGVWxSNGt1N2pfbTNJVm1VVFVpMzdObmdPTDFlUW9LM08tQkQzNzVXaDBISDh5Q3hZcTZ3eF9qaEpxSlhIVEtkT1B6R0tjM2N3dw?oc=5"
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
    "date": "2026-06-17",
    "event": "Newmont (NEM) Stock Could Be 38.7% Undervalued After Leadership Reshuffle - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNcTdmSlBjUlNqWjJKMmRvRXFVTGl3STgwczRMX1hmQjg5aUladk5aU1k1RWNzbFZmZVd4aTlTaUN3UWZpQVp5Sjd6aHp3ODhvRV9FMnlvQmEtdnkyNkxJTGF3T2xCcEpneFUwTnBrWDV1eFJObF9JbFRHU0Z3MHQ1TVAwc2tzTmdkeGswcFlOaGNfSVJBTmc?oc=5"
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
    "date": "2026-06-29",
    "event": "Is Most-Watched Stock Newmont Corporation (NEM) Worth Betting on Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNY2hyclM1dVBPdGJoV2hJOVA3bTBRRjRPYllrRTVUZmIxM2ptLXZLQWo5R3ZWYzBDVlpRY0ZCMXp4elhIT0l0UGl4dWlxMXlQSFJsRmgxZTJNaURCblZmS1h2T09ldG90WDctY2hLRlpfRGdWODI4YVE2aE1mRTlzUl9CSVFZWldWejI1S1FJbDB2Z1VWMDBPWDl4eHdxSkFjcFBkcnpB?oc=5"
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
    "date": "2026-04-06",
    "event": "Newmont Corporation (NEM) Stock Sinks As Market Gains: Here's Why - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxNRTBkdHU5ejJBTGhkellyZFJGR19iYnpOcTVaQlpCZUhmN3NNYk4tVjJfQnBmVWg4LXoyU1JzSVp3d2c2bUw3b0tPOC1ycElCQkNxTlNEa3FxTnhhbWRjYWtqdzRkTS1uRVo2em43cDJRd0VERm01aFg0cm9hVjZsX3RzYlo4SktwR1pMMlZGTnlocUFSN0JIMmtrblBXYXFOY2c?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-06-12",
    "event": "Why Newmont Corporation (NEM) Outpaced the Stock Market Today - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOSzdFQmlBaXBlUF9IWVBleDBvU1FkcGV3eDVPbkpJbFBPb3Z0ZlVxRU0wb0xlZlAyWEdaT2tQTVMxY2xEMmxvX1BpRG1vSFRtTUZMNW5USmxFcks3ZUd2MVFQMElTa0w0NXdaZUM3Sl9EcktrbXVmNjFhSWJnR2FlMkY0UVhCb2ZBaFB0MVZ2MFYyek9DN0UxbHJLX3d1U1lLdEs0?oc=5"
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
    "date": "2026-04-13",
    "event": "Newmont Corporation (NEM) Stock Drops Despite Market Gains: Important Facts to Note - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxONXhnSEpBa3VEczVzak51aXdHN3hUaWxvR2FuZi1hdm1kODRFd0l3akgtZjlBMVFFb2RVckxEdlBsSEJlUkRRcndXbk1NdVctZHhhc200NEQwMTJmTUEycEl6ZlJoZXJmOW5CSHJOaGlxbVRCb0dyMXVQM05pM1hqZjRPOVA4YTZieFFrRUF2Vl82OVJKVnYtTDFfTVFNcll2NGc?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "RTX, Lockheed, and 7 More Stocks to Consider as Missile Production Rockets Higher",
    "type": "NEWS",
    "remark": "News via Barrons.com — Coming into Tuesday trading, shares of 10 major defense contractors Barron’s looked at—including  Lockheed Martin Northr...",
    "url": "https://www.barrons.com/articles/rtx-lockeed-northrop-stocks-missile-production-33d756d7?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "Is Northrop Grumman Expanding Its Presence in Military Training?",
    "type": "NEWS",
    "remark": "News via Zacks — NOC is expanding its military training footprint with LVC, immersive and electromagnetic simulation tools for complex mi...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/northrop-grumman-expanding-presence-military-163500650.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "EMBJ or RTX: Which Is the Better Value Stock Right Now?",
    "type": "NEWS",
    "remark": "News via Zacks — EMBJ vs. RTX: Which Stock Is the Better Value Option?...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/embj-rtx-better-value-stock-154001826.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "2 Reasons to Like RTX and 1 to Stay Skeptical",
    "type": "NEWS",
    "remark": "News via StockStory — RTX trades at $222.00 and has moved in lockstep with the market. Its shares have returned 8.4% over the last six months ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/2-reasons-rtx-1-stay-152533880.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "Trump Has Abandoned His Role as Stock Market Cheerleader",
    "type": "NEWS",
    "remark": "News via Barrons.com — The 30-year Treasury yield hits highest level since 2007, Micron stock retakes key level, SpaceX makes $60 billion AI ac...",
    "url": "https://www.barrons.com/articles/stock-market-trump-things-to-know-today-88c6cc6d?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "3 Market-Beating Stocks with Competitive Advantages",
    "type": "NEWS",
    "remark": "News via StockStory — The best-performing stocks typically have robust sales growth, increasing margins, and rising returns on capital, and th...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/3-market-beating-stocks-competitive-114133747.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "RTX (RTX) Lands $22.9 Billion Tomahawk Deal With Seven Year Production Ramp",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — RTX (NYSE:RTX) unit Raytheon has secured a US$22.9b Tomahawk cruise missile contract with the U.S. Navy spanning seven y...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-rtx-lands-22-9-010728674.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "North America’s Only Cesium Project Moves Closer to Production",
    "type": "NEWS",
    "remark": "News via Oilprice.com — Power Metals is advancing the Case Lake project as a potential new North American source of cesium as governments seek s...",
    "url": "https://finance.yahoo.com/energy/articles/north-america-only-cesium-project-000000475.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX, Pentagon Sign $23 Billion Tomahawk Missile Contract",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — The Department of Defense has been pushing contractors to ramp up production of critical munitions. RTX stock rose about...",
    "url": "https://www.investors.com/news/rtx-pentagon-department-of-defense-tomahawk-boeing-lockheed-marting/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "RTX",
    "date": "2026-08-14",
    "event": "Is RTX Strengthening Its Position in the Global Missile Market?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-strengthening-position-global-missile-145400140.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX Stock Rises on Massive $22.9 Billion Tomahawk Contract",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-stock-rises-massive-22-171805645.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX’s Raytheon secures $22.9 billion U.S. Navy Tomahawk missile contract",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://investorshub.advfn.com/market-news/article/34432/rtxs-raytheon-secures-22-9-billion-u-s-navy-tomahawk-missile-contract?.tsrc=rss"
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
    "date": "2026-08-17",
    "event": "1 Unpopular Stock That Deserves Some Love and 2 Facing Headwinds",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/1-unpopular-stock-deserves-love-191020096.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "Can L3Harris' New Rhode Island Facility Strengthen Undersea Growth?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/l3harris-rhode-island-facility-strengthen-143300358.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-16",
    "event": "Billionaire Investor David Tepper Just Exited 12 Stocks. These 5 Are the Most Surprising.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/16/billionaire-investor-david-tepper-just-exited-12-stocks-these-5-are-the-most-surprising/?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-14",
    "event": "Boeing Signs Seven-Year Frameworks to Expand SM-3 Output",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/boeing-signs-seven-frameworks-expand-193122852.html?.tsrc=rss"
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
    "date": "2026-08-18",
    "event": "RTX Stock Gets a Radar Lock on a $23B Navy Win - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQS09YckRGLXlqNXAzS05aeFdSMm1YN2lFTzNaTDYzN3dOU3BoMW1MejFCcmp1V1I0NTZjVnFpSEV0VExpNDZGdlJmNGpoc2Y5MWltS0xmVUIxSC1HbVBLSUptSVBtNm5LekRhOFducHdLUUZMVXp0SGQ0N292QXB4UFhGY3pCLWltMlE?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "RTX, Lockheed, and 7 More Stocks to Consider as Missile Production Rockets Higher - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQeS1lckRJU1EwSzhnY1lnZXZ2UWFjUzVESDFiWTNxcjluTENFbG5nOGlDNDJIZGw4T2NzWlI4dDV1TTFkQkY1Uk5FMDhsYzM5Smpha0ZlZFhjaE5yd2pvNnNwaGhyVVA2dzVuX0w2Yi1hSVRYQXU2R0RiM1p0LVFuMTYzRlJRdWdlX2RlMDlBb1UxUQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "EMBJ or RTX: Which Is the Better Value Stock Right Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNc05uVTgwUFVpVW1BeE5rUE54NnhHY3BlSkotazgwb3Y1M051N29jVUJvSDJSbkdsV0xjenNGbjBKcWREUVAxeEwtekRVeTZMVEFrSmxvSUdlZDRORG9iN2p5QXo0YWQ3R0ttYno0dnRwN3FtaTFqUmkycFQzelJMNXpveFNWWkUtYTRQZXhIY25QTEVmOHlv?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "3 Market-Beating Stocks with Competitive Advantages - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQSFl5QUpMU2RFY0V1b2F2VndQM3Y3VzJPUmFyS1M3NmRUaEVISHE2SC1KOFBRbGxsVURSOVBacTlBWllRNzg1ZFRmaDNhdW1xT3o5ZXJyYTUtb2tzYWNXNENmaHZxQzMwaEQxOGlCRThHajZPVUpoU3kxMTNOaEdfdFVzZWNwTUhKSUNDc3VncDBSMnRmdnBhem9wWnRTZy1TR2VxWWoyaTFqV013akg4?oc=5"
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
    "date": "2026-08-18",
    "event": "2 Reasons to Like RTX and 1 to Stay Skeptical - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOZUFsdVFKaFgtNmp5aXJGSWRvS21XYmxLdXFMZ0Z0U2kxaTBYdTNYeEV1TmowSTJtQXVxTVVUcVRta3JMYmRiMTZHX09EVEJuQTNyRzJGNkpTZy1qY2Y2S2VmNjhDRlNIckxvSmdGVmFvU3NtRkVVVTd1V2x4SEM4S3Bpc2pIc3JtWjl3RTJxak9HNEM0MFlTa3FRMzdONDhIZVNzNTZoRFUzdw?oc=5"
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
    "date": "2026-08-17",
    "event": "RTX, Pentagon Sign $23 Billion Tomahawk Missile Contract - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPQnAwU05fSE5rZjNnZWZqMW84dDhKRVpPUlpkM19JMmZTRVJSOEMwNlhsNWhPV2Ixd0NEYy04QWZ6WFc4b2JpYURONVZOUHFTTnY1QUUzOTZMdXJXZnRKejZWWDlRTkhQV3hvYTk3Nng0QXhaNVVhZm9jUG0xZW5wV3RKSkJfcUVhY3AzMXVQR29SS25icFhhSlFScU9yWGl3?oc=5"
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
    "date": "2026-08-18",
    "event": "Elizabeth Warren Targets Defense Contractors’ $100 Billion Shareholder Payouts: ‘This Needs to Stop’ - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOSDNIRXJxcExNS1N4aVM3d05oVmtMUmwzSWxPdTRfNnJjaWpVaHkxVGRJNnRRNWozYnNfMmRFcEc4TmFiaUc5SExQNllHZ2xLVW5wV3g2d1g3X2czeFRxM1hNVVB3OHZvUnhQRjZPRHdaenJwQTI1ekFKRVo3RTVXWjVlMzRMbDRiSmdjZlUwdUJfQlg4UmdzVTNnYlRyb21YU2NIUXJFRm1VamhrdzNFSWJwdGwzSkVJTjYxTExvZGNuNjRSVHBBT2lOeDVoUHphMVVCVWZsckp0a016eDlUWHhkLUQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX Stock Rises on Massive $22.9 Billion Tomahawk Contract - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPLVppbVJPOVBfY1BjUTB6WS1ZTEpjWFczeVVFQ0JaR3hnYjlIR0N4TTVZdWYzSTdrbHJrRzd1TEVENi04aUJ1dkRKYVN5ZEd3cko0R1FhdjZsTzZQSGxkYUVEdGc5Vjk1dkNwbnJjbkh3cGFhMEdNcXJINlo3enk0SFFCMjE0Mm9TNVpCdWJlMmUtRVZ4emc?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "RTX (NYSE:RTX) Shares Up 1.8% - Here's What Happened - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOV0NvOVNKbnh4NzZGdDBvbC1IaWFzczhYWVRZVTJrZlpJOXcxVzNhbUpDdlJQRzFoRWhtbllEUE5GcnBVZ3dGZVFIdjZkbGE2VXdqWXF2akdEN0VmX2tnMXFWbFJLWEQ2R3VDeDh3aE1FdDAwU1NXYmFMczBWeWtZSTFJY2t1MUtxX3IzRHlnS0lrSDBhU3pTZU5lajhIOVk?oc=5"
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
    "date": "2026-08-18",
    "event": "MidFirst Bank Buys Shares of 4,575 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOYWd0TWJ5eEx3ZjM2QUFnaU1PWkNucmc5OG5Ua2NuY0JqUlpWT0w0UjRqR2hIVU9XSVRBdlUxaHNDYldFZEkwTldqNFcyeXNnR0FUaTNvSGdOTGdGSjZUelFsTXVsMkYwVGd6dlQ0RVNmNDZnSHRUYksxMkdsRnJmLWMzVTMzdVVmTjhKSC1xSVNZeFpYMFN3UVNrRjUwbXhraTR6Ql9LeVM0ZVpiZjRGV0FfMDY?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "4,879 Shares in RTX Corporation $RTX Bought by Pavion Blue Capital LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQaGYtU2xsYkJVQmV0SGdLb29vSzV4VGZFazBJYXlHVVFpM0F0TUtRR0JlSVZfMm11bnBud1U3Y294VXB3RHNXRFpXck4zLXZNUWhHS1N5dmR6Uzk4TzNoaFlxeVU1ZGxRMUs2R0NZWUhvYkpNTmVUV2UyQlVkUzVmZHhUak9NdF8xM3BqeU9wV1FRVGJHczNZWVVCUWk4ODBHWEFrNWFsZzdjSlVWS2dNRTM4cnhJUjNUVDBaZ0M3Z3NpSlBma1pXTg?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "11,707 Shares in RTX Corporation $RTX Bought by Texas Capital Bank Wealth Management Services Inc - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxOUHRQaFpLcnNpaEJlcDZmc01TTlZxQ2l4M3pYSGJsMDI0anQ0SWEwUEs1SXplVFdhb1FUNk5lQ3BUeTZKSUNrNUxxeFU0dHptVlZ3TXYwdmMzUVV1bE1YdEhlOGhBRzNLN1lSTDJaR21idmVOcF9iODY2ZkE3dWNGWEJ2MTB6TlVSSlY3U1FVMDFvcGh4SVRHVVhiTTdJR0NlOHBGcnBVbjFzWTQ4UTlJOTZQMjNuT016NlJmdTBmUVY0VmZ0ZmM5NU8wcU5pdlhMVnpaRS1vb2FoQ0FBQXA1XzdneHVXOElsS2xIag?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "BlackRock Inc. Acquires Shares of 110,528,494 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNNmVVN2Z0WVFpRUZJaHNkQ09tLVV1VjVuNnluMU5mdmxzU01xYmluMWtxbENYRnpic3Q1Nm9UUzN2UXhpUFZIUnZSLVBYbVdXWjEtQXg1SVlGZlhLSzNqQ1JyTW5wMUlWTXB4V2w0UkdvLTB6Z1JvaExTSzVGZFZQYjBXSDN1YVphMUFvN0dpNFl0T284ZmpoRFE0U3E5LU9rUjJvMmJUTjJSd01wV3FuazFFTWVMU21laW9uSHA3bGo?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "Principle Wealth Partners LLC Buys New Shares in RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNeE9EZUpLcmw1dk5TY1FMcTl3OFdEbzVDcm1oMXVUQW1qdVF1VTlLOFAwcjJKU3Zzc1NVSXVhSDlPVUIyQUhhb2tnVk9laFBSSjBGdzVkOEF5dHdZbFR1LXFHSmxPcHlha0JfeWVORFAyejd5eXY3VHI4ejZRY01saFlBd3gwTkNRSEdzcm8tbXJEUnhKOE9uOHhCSFN3ZlBTeENzTXF5aEN3YjVmM2Itemw4UWZsS0xvTW85R2dMWVFfV1BTZC01TQ?oc=5"
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
    "event": "The $22.9B contract tied to a Tomahawk output ramp - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxOaDg1M1BVLUw4S0NMc0VPSHMtalE4N3U4TGk0ekhkZWZJaS1hX2poOWhxOVpyb1hyRG44b1lYRURjekFmS29IaWpCTmdxaGRIeVgwQ0F5amhXV2hMZ0pyTW9jbHFRQlRqMmpqTzZYc0l2VUFpRV9OUVB6RFJDaGY5alNOdktUUGR2QTlvR1dTQzZZUVJYalJVX3RhTE91RXNWODRKVThZVnZPTk9YbXprWGdVUnpObkk?oc=5"
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
    "date": "2026-08-17",
    "event": "70,094 Shares in RTX Corporation $RTX Bought by German American Bancorp Inc. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxObFJuSElCczJlQVFpcFFZX3pxcUtoc25XQmZBb2RlU1pxMWh4UjdDcXo5RHI4ZzJqazNvMV9CaUdQQjB6WVhMb0EyRjhqU2ZNazRreURVY3FUS3RQN2xDTzNvZDhLcTA1RDVidkY2dFRvcU5UWWMxLWJHLVg2a3RGSE1OSmxwaFdGUG1zQzVjQi0xcW1YVXF5U1hOVDNBWW1PRE1zWHNYMDdrdUhsQ1VJcm9URUJOYW93XzVlYzUzcFRtX3I4NUUxazB2d3locmM?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "Lockheed Wins Slew Of Contracts. Air Force Doles Out $920 Mil Award.",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — The Department of Defense awarded Lockheed Martin multiple contracts worth over $152 million. The Air Force taps 24 comp...",
    "url": "https://www.investors.com/news/lockheed-martin-defense-contracts-152-million-air-force-24-companies-920million-awards/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "Tomahawk Missile Production Is Surging—and These Stocks Could Benefit",
    "type": "NEWS",
    "remark": "News via Barrons.com — RTX won a $22.9 billion Navy contract aimed at dramatically increasing Tomahawk missile production. L3Harris, General Dy...",
    "url": "https://www.barrons.com/articles/rtx-stock-tomahawk-missile-production-defense-stocks-5afeb7d2?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "United Launch Alliance names new CEO amid Vulcan rocket travails",
    "type": "NEWS",
    "remark": "News via Orlando Sentinel — Longtime United Launch Alliance President and CEO Tory Bruno jumped ship right before Christmas last year, moving on to ...",
    "url": "https://www.orlandosentinel.com/2026/08/17/united-launch-alliance-names-new-ceo-amid-vulcan-rocket-travails/"
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
    "date": "2026-08-15",
    "event": "LMT Stock On Track To Register Eighth Consecutive Session Of Losses – Lockheed Remains Confident About Meeting 2026 Guidance - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQMUE5WWtfMnU3QkNlYnN4LWNVdTJWb1JwcG9EbkY3dnpFNkZvV1BJcW5nNHFFLVdFcHJXZkpsWWY1OGNtN1ZBSVl6YkxlYnNSMWJkNWdGRDNTRFNaa3VJOE9va0pqWFdISDRZeWxnOGkzREt1cThWVzlBLUdPMzFIaC1GMTUxYXlja1Y4OEQzaFAtMlg0U0pDY2hWVVR5dXR2UEh1a0dGbW5lSGF0eXowWUlOckFBUTlvM1ZVdTdFVC1pZEZqOWhNc2p2QmVRblE?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "Lockheed Martin (LMT) Could Be 12% Undervalued As New Defense Tech Draws Focus - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxPM1FId0NwT25xSWVQbmNvVjlkUDFodF9jVEFJaW0xdnc5NFRiazI0M1ZQbWRZakFBSERPZjJKeUpmcVIta0VpcVh3bzVrRk5sQmxpdDhzMXdtOHFjalg5ZHp0eDhXYVU3em5TeUZ6WEcyN3ZwLTVMRFM4VHY3WDdLcFBKd3lxYWhmS21kMHppMXVpQllJUVhqTXpvQjlNUzBIODNPdjdCSjZiV09sLWpiVEZCNF9TNGRmM1M5LU5xcTB3aEpaTUdxSlYycmFBdGdMLUHSAdcBQVVfeXFMTU5QUWN0YUFnQXNWeGxWRzA0elp4YzRXVHNrY1U0Zm9HRWI4emo2eUhIZ1JtSy1vQlZhdUEtRGpaZGlwdk1iaXd1OXJDYjdYUDhLZVhHVFhkd1Zhb2ZNVUdhaWZkWk4xMWRBaEVZLVlBdWpiOFYzSjduRk54ckNCUTdDeFJ1ZEwtV095aExLRGhCWDk0NDNGTjdKM3VNTXBRaHhkOEdFZ1M4UWhaVWlqQVdaRVJCb0kyTkM1cHU3M1BaN010R09RdDQ3Q3lqWHpZbGdYX0V1UVk?oc=5"
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
    "date": "2026-08-14",
    "event": "Lockheed Martin Stock (LMT) Opinions on Analyst Price Target Upgrade - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOTmRvQi1DZTlkaFRsZ1NrT3NLRmh1Z0pDaDJ3X3V1LTZLOEFid2V3T1d5cEtmVWRTQ0wycTAzNzgyNTllWWxaLTRkcHZNODVlMHUzbjcwWWllLVBqR2NjTzZSSnJMX3d3VFNLNUwzVW5GVUJuQzRVa3VvdXVkUDBUVUJOWC1EdUVGUUcxMVdoakhEdHB1OWllQUVsWWhPLTcwRWVLdDJPUDM?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "UNIVEST FINANCIAL Corp Makes New $4.38 Million Investment in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxOcGN6cHNSak1WR1N0ejVuNC1DY3VKanhjOHR4UFdfbmp4S3I2RjR3LXozVURtUFE0VHprZWhEd3RxTUlpTnh3TGxnZ1VhakdaX2tia0o1YzNfTlVUeDdrXzhjN0p5bTgtcDgyYkRjbHdZU1dmVFNOeGxKN1lHOUthNHV0Ni1hS0RudzFkZWFIelBTVngtTkJ4d2xxMDVTdThBbXBnTXdxUXNleTBnMkdZR2ZncVFvd2tVd2YxS0RFd3pnU0hsd2U5SElMTDdFMEc2VXNJN3ExdVpqMkl5cjRpdTZLZ25YUQ?oc=5"
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
    "date": "2026-08-15",
    "event": "GM, LMT Stocks Gain Overnight: General Motors, Lockheed Martin Reportedly Working On Weapons Parts Partnership - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPTWYxRUl3VVRfSlF3ZG9UUXpqOEdfOVV1c1RlSHFtMzlWS2hmSWJxWkR3VjNYcEo3UGdlTWwwc2hxaVJUVmt2QUJEamk3aU5MUGdLLWJkamZMTk9qQXRPZWhJSDBWTjZLNndwSUFkd3RET0JSSmh5dmhuQ1BaRndsR2p6Ym9CQTBhWnhBSk9scDBMYlZUdW44MXF5ejlDRzRaM1dYcFNuakFTWGxKc1FOZ2RLRTE5TXBqd200RlhZaGR2aG1RY2dBcXVYbGRxOUtPeThWUEplb2R2UXNWWllKdTl3V1FocUNOTDNGa1RqZWgyZw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "21,662 Shares in Lockheed Martin Corporation $LMT Purchased by Meeder Asset Management Inc. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxONDM3eWhyTHRaNVR4WklXZ2tpY0h6Tk5EdzgyS01ZUWgwbnlCSTdnN0ZQSUZWSGtIdHNVRTF1dFRYd1pwQ1pFcXFzYTBzNDRENlh5Z2VnZ3BEX2F6SjIzVXlDS01Kd0NYdDhqV0duanVkdldOY3NudWE0TnN3ZEdfay13WEtvYVg0bXU2cGpMV1Q1VThjWlMtSTZmbmx2U0pFcHpzUjRwVm00OFp4bVlxUzVNNDNPbmQyb3QzVkRLZ3RydkEyMjZMa3U1V3kwMXpvNkNjaGRnNkI0amtSZ0VqUFdaUQ?oc=5"
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
    "date": "2026-08-18",
    "event": "Perigon Wealth Management LLC Acquires Shares of 19,089 Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQdWFEV2ZnOTQ4bVFwa2lvbnJuaFdPY0hxaURtQWVYLUt1Ym1NZjRkQVZUUVRVSHlsZC1VWmhkNVRoZjdjaGlUWnJveW9aZG9RU1hDdkZFbFU3YmNzYnZJQXM0TjJlMF8xbVhjc0pxRTMzYjdwQmdKWmFkQkQyTTNmd2dyOGI0SDZlbmVqOEVOalBPZUVrTi1feEJRekZ4ekJFQW5MbjVTMnJ6RGduVHhLdjcxUzc0bVJIMEdkbFo2SFZJZFZtMmgzLUFIWjNfbzVqQ1dUdGJLSGxlWG4zYWJkMw?oc=5"
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
    "date": "2026-08-18",
    "event": "14,375 Shares in Lockheed Martin Corporation $LMT Purchased by Trust Co. of Vermont - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxPVnVZYzNocU1wQzJjekQwRkpBUWdXS2xOT19VUXZZZ1NWT0NPQlJlUlRFeDRvWWtra1N1VERTWnh4S25qZEF6TTBRVnpOOGowYW5qa3V3eE9qNVFpRGxqdDBJUDhJVHNrRk91X1ZNZ2NRWFd6YWhqUUNScFVZbU5JLXpRTnpoaEdIcE9Fa1N0UUFHS052dks4QW1mYWcxWjk5ckVPNGV5MmNjUFBrSHg5ZW5LN1NJeEZqVHVRRVJmSFk2aklCcmkyTHNjMnhSdVFyeFNHbmh1X1E?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "527,532 Shares in Lockheed Martin Corporation $LMT Bought by Mitsubishi UFJ Asset Management Co. Ltd. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxNakRtQXZmTUpzb2U2d2NaNVdSNWVjSWkwTXlrTnZqM0llVWZjbGFER0E4S1dEYWhEY0NVQnhtMWR0dE9DR2ZPdm1Zazl1UlZYeVo2RjlTT3VyZTBwQ2lDaFJNY1AzVGRZM1lydDNxSU5ha0djZG1ZTW8xa043UHozNnVnZ0NxNUhCNkFRUXhDTXpYS2NXSFpVcllnLVZseGhNU290Nm1yZ1kxZjNONmFLV0Vud1VISmgtMVFpZ3ExWFQyYWdfampKSklhcTNQa0k0QVFac0VFSGFLdmw1VXZGemEyd2FIeV9KSW81Tkg1MA?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "Capital Financial Group Inc. Co. ADV Takes $2.10 Million Position in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7gFBVV95cUxOX3EzQkNxWlZvM3RKd3p1TG9sYmtOTFVFamhWMWJHZTVDQ3Y4ZFhYNDBoQ2x1dnFtQktKcElIdUNjRlZLUHlCRldTNlAzbUdYMlNlb0kyREVrRmJhM2NHZGhsVzF4bTRJOG1zaHNMbHBTVnFFTng3S1c5STRqUVZnajJ6SnN1MlBlSllPRVFFWk83eUZrZDVjMWQza1ZkQl9MNXdyUTlpblpaT1d6ek9QWkxJcEwyTUZzVkdrUXN2UVJ0TG5maW1SRUJmdlB3NEVUUzNwWkIybVJRZ05uZmlrOGstUFplVTdUSDAyN1lR?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "Principle Wealth Partners LLC Invests $3.78 Million in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxNV2RvWnRSbks4eld2UTFUTmdlTGViQ0Z1azg3bG9PNjlNdWlUSEF2Z3pHSDVXUVdneW9pbDV3aEtGZWlkRE1xeDg2ckhBYkNPanpoZWdYS1k2aXJTbjZUTC1KZ0JNNXZrUElfaDZQOWVvUXFDRnRDZlE0eEhvNUo4YUV6TmNUaEFKV043eTFwZHRscjJYalhWM0M0OXJ4QlRwRlJaRzhLa2hVSVg1QmxDR05hMTB0QW9CMGtHVjFtV0JuaUxGTVJSQ0RZOHlkQVBlbkZoc2lsSnRMVmQ1ckE?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "Pallas Capital Advisors LLC Makes New $2.20 Million Investment in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxNbU9WbDhpZUZQYjZpN2Z5Uk9CLVhBRjRncUJCR1BhTmxXelFsSGhnWnVQVEgycGd1RWdzblkwZVJsTHJaU2l3dTdvY3BQcGgyRUdNdWJVQmhrQVJRUlBHT0RiQWh0NEZUUDNSQTE5MWZGZEhzdTU2RWNmdXFFU0pPYVhZZExuNHFXSTgyNGlPcjJNRFhjM2ZiallvNkZBWWNneDUyNVJRNDl0SzdtakN6S2YzeVdpYnk5X0k3Ml9MNWk5eFNJRS1zcldpcy1NbE85bWFDM0VLV0pvYVdSZ0NKUVJuZTdfTUN2UlhUMA?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "B & T Capital Management DBA Alpha Capital Management Invests $5.33 Million in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxOZmw5Qm9lVVlVek4taVowRmp2SDZWa1FLV0FUWEF2N2trSlFCMWk2TEJHdXl0b0V2dlYySTRhZ3VuV2ZpcXBIZ3BCOUIyNjU1ZzVZWGtsZzlfci1BNWJJdVBqMDFmR1V1S21SNGducW9uT3BiYU1lM1dkR1pycXpCWU9USWJxLWJjNGJzS1UwREt6S0owNkZCMmNkQ09sckw5UlBkTTVjX2F5dEoyLVlSeXFlZDhVSnFjVFk2aFMwNlBJNGE3Rm1WZU5zUV9QNS1QV0x5YUpHM1hwNEQyc1R3S1d1TnRLWkpCdklrb0hvdE9wSjVEQTNTaXJOcw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "Performance Wealth Partners LLC Takes Position in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxQYmVtVXUyMWlEQ0Z6cndyMzFPOGctQnBFQXBtWFRhZFhfQlVtRno2Y3ZVS0RUNnNPd0MxX1AyUkVWbTRNT003RXdJcjRENk0yQTd4NTZValRfdndfOFVLOEFrODQ5ckJnQThOSHF0VThmN0VoLXlTSUh3UzV0WVg0YTZ1VkNFR3J2azNfM0lZMm1VRG1QREVWNFFGcExGWEVOTTBCTFJWVVhVX2FOb1VGbWQwckc0QlVUVjcxS1NCd0cxc2JKUHVyY0FSTHJ1Q0ZIN2pja3AzTXhxQQ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "BlackRock Inc. Invests $9.62 Billion in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNSGpEdFd1RVlYdXBSVXJnLWUxcjdtMWFNVFV5QlgtSGt0VFRWWmlPTWhlNGV2R05IdXJQbVhCMTlTVjBuTnJScWhvazlNdHlDMEJDcUxaNDFXbXhOTDRoUjF1X3lsbkIwWXZ3UnlsWmtkOXhjUnFrZmdXdllzdEZOTnpxcTd1bnRrbnRnaHBLX3ZuN1dJdUJoYURheGZoWi1zYnRIS2NHQ3VhcnU5UDlzX3B0ZHJvME9mVEtQZjhOR2tSMXQ1YTZ6MA?oc=5"
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
    "date": "2026-08-17",
    "event": "Government Contract Update: $991M payment to LOCKHEED MARTIN CORPORATION - quiverquant.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNTFF2cTgyVnZVVF9acHc4a2V2Rkt0REpoZE5UMUFfZU9aTmtybVg4THFwMFlqSVNrMThDWnhBd1lTZV9nbFVMUENxbHllRlBkeHQ2ZmczTnF1QmhyWFBkMmVSbUotOXp2NmdNWmtwX3F2eWI3M0VXakx5YjdyQThqcFNkMTRjOW9hTFJiRHFWbTg0bXViMHFuWWhBemxlY1Y3QUd0UzRMaW0?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-14",
    "event": "Lockheed Martin (LMT) Stock Sinks As Market Gains: What You Should Know - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWFk1M1FtenVLNVJIaXl0d1JtelRSWFZ1dzNvZ2RSWFJiclFqQXhZQTJBeENQSTAxMzZNR1lrQV9vbmpuZ29ESVNlMFRfeEZHYk1Pek82R05rTFNNODAtTlFtNjRwQ2ozYUpINENxdTBDUG5UalVtaHk5QUNvRE5WVVVYT2hYNzI1cFJZZ2s1YVRLRFBjV3dJcnlBcUc?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-07-27",
    "event": "Is Lockheed Martin Stock Still Cheap After Its THAAD Win? - TIKR.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOVUdiT2NjbG9jQTc4aG1uWi1MNzk4TEowSjBWVTVXWXkxVnlrbVE3ajlZV1hRV2hGcEQ0TVU5elJuZkJpTEVFbG41UGE5V09jc0hSN3ZObUtacGwwVXFiV3NkR000U0ZmMTJqV0VOdktTRFFRMDJGdzNWUWdGenVFS2ZmSzlVM2RKQUE?oc=5"
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
    "date": "2026-08-11",
    "event": "An 8.8% Income On LMT Stock, For Giving Up Gains Above 9.4% - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQSXVQbmVFUGpYdmY2UWRTbklhUmk4c05iVlF0MW0tQXpLVEgzWWVsMU9xb0ZhMmlvYk14QUdqeHZjMUdPb2hUNmRrZE5KQUZiMmJ0YnZIR1Y0OXk1R0xxY2FIdFp5WDh1Q0phLVhjUjVZQmlqNFFCX016MVV0Ml91Rzh0VFRmRG5oMHdQMF9DSQ?oc=5"
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
