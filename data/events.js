const eventsData = [
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "Cramer Warns Fintech Bulls: These Three Stocks Are Priced for Perfection",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Jim Cramer called out analysts for piling into the same fintech names at the same time, and the recent carnage in SoFi, ...",
    "url": "https://247wallst.com/investing/2026/08/19/cramer-warns-fintech-bulls-these-three-stocks-are-priced-for-perfection/"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "JPMorgan Stock Falls 1.2% as Treasury Yields Retreat",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The market's most profitable bank slipped despite record earnings and booming trading revenue....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorgan-stock-falls-1-2-191715485.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "C's July Card Delinquencies Tick Up: Will This Impact Asset Quality?",
    "type": "NEWS",
    "remark": "News via Zacks — Citigroup's July card delinquencies edged up, but lower charge-offs offer some relief. Can improving credit trends ease ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/cs-july-card-delinquencies-tick-171000694.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "Financial Services Roundup: Market Talk",
    "type": "NEWS",
    "remark": "News via The Wall Street Journal — Find insight on ASR Nederland, Ping An Insurance and more in the latest Market Talks covering financial services....",
    "url": "https://www.wsj.com/business/financial-services-roundup-market-talk-5bdfa597?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "Goldman's LCN Deal Extends Its Push to Scale AWM & Durable Revenues",
    "type": "NEWS",
    "remark": "News via Zacks — GS's LCN deal expands its AWM platform into private real estate, supporting recurring fees and a more capital-light reve...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/goldmans-lcn-deal-extends-push-143700238.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "Jamie Dimon Has Run JPMorgan Chase for 2 Decades. What Happens to the Stock When He Steps Down?",
    "type": "NEWS",
    "remark": "News via Motley Fool — Jamie Dimon's track record at JPMorgan Chase is a good one, but he's still just one of many leaders....",
    "url": "https://www.fool.com/investing/2026/08/19/jamie-dimon-has-run-jpmorgan-chase-for-2-decades-w/"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "Klarna shares face pressure as JPMorgan cuts rating on weaker outlook",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- Klarna’s second-quarter results beat expectations, but a weaker second-half outlook, deteriorating Euro...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/klarna-shares-face-pressure-jpmorgan-134930868.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "These 3 easy benchmarks can help you find out if you’re really ready to retire. Have you met them yet?",
    "type": "NEWS",
    "remark": "News via Moneywise — It turns out, a million dollars probably isn’t nearly enough....",
    "url": "https://finance.yahoo.com/markets/articles/3-easy-benchmarks-help-really-122500468.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "Jamie Dimon Warns UK Bank Tax Hikes Could Trigger a New York-Style Finance Exodus: Report",
    "type": "NEWS",
    "remark": "News via Benzinga — JPMorgan Chase & Co. CEO Jamie Dimon warned UK Chancellor John Healey that higher taxes on banks could drive financial j...",
    "url": "https://finance.yahoo.com/economy/policy/articles/jamie-dimon-warns-uk-bank-120108481.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "5 of JP Morgan’s Top Stock Picks Pay Big Dividends and One Yields Over 12%",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — J.P. Morgan updates its Analyst Focus List every month, and the August edition quietly signals where the firm's top anal...",
    "url": "https://247wallst.com/investing/2026/08/19/5-of-jpmorgans-top-stock-picks-pay-big-dividends-and-one-yields-over-12/"
  },
  {
    "stock": "JPM",
    "date": "2026-08-18",
    "event": "JPMorgan Chase (JPM) Could Be 3% Below Fair Value Following Chicago Expansion",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorgan-chase-jpm-could-3-231616401.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "JPMorganChase to Present at the Barclays Global Financial Services Conference",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorganchase-present-barclays-global-financial-201500359.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "Dave Ramseys explains 3 serious retirement mistakes Americans make after 55. How many are you making?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/articles/dave-ramseys-explains-3-serious-111500132.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "JPM Stock Gains Nearly 3% — Jamie Dimon Succession Dynamics Shift After Marianne Lake Exit - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxQdjdQbW5Za3hwWGcyMVB2OWxuWjhkUEdrZHBBbnItWmVSYWswRzVYdnRrRS1nSG9MdWd3dlhTdEpGQ0lVTy1Obm5ueVhoVlBWdUxuUGZmWGZzU3UyZXUyZlhkRTFvYWFoekZSOWR1bkMxaXZBclJ5NWsteFY3djZ0LWFua3RqVm9ULTBVeWV3em5HTml3S3Qxc0pFMFpQUFZ6b0Q5S0tmNFQ0MTJMMzhfOEV6NnRNUHRVMFJiSEpsZXFHVVlPWXFQcjI0Wk8tMk5GTkVOWEV1cGFsUTZYUjlPajRSSjhPOG5XWTFn?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "JPMorgan Chase & Co. (NYSE:JPM) Shares Down 1.6% - Time to Sell? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNa2pHc1ZQQWEtRFRmSWZNamF4QzB2Mjg3OVZ1WGFTenFJSDVfNHQ5RzZSVnhXNlNvVG5KXzAtQnpndGdmMzFDOHNIRThDRTk3RC1sem1pbXphdy1KRWFHOE9vZkpDTm5XLWwyRkhvZFZlOUFHNUR0RVVfNlppeHBnVU85TUFDd2VmZWhTTTNIRjAxNkNWR3dYMnhPQmhWM3RKUGJSQmxNUEswWVU?oc=5"
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
    "date": "2026-08-13",
    "event": "JPMorgan Chase (JPM) Stock Looks Reasonable On A 166% Five Year Run - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQb3NhSXFzWDVlVGZrUFJKWjNrdzgzTU9jR3FqdXk5czNnT0F0OEt4S3o3ZGM3TV9tX3BRalRxQlRkSFg3cEpYNGZQcjVmZU9VeHY4cDZqZEFKQlRFTHU4bVljdm1yMmdsNzVYS21iYThVT1JhUnVueHMta0RmSTcyUFJ6X0U3Q21jamFQeUlMNm1iVk5UbzRtMkNsMA?oc=5"
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
    "date": "2026-08-18",
    "event": "JPM, GS, MS Stocks Edge Higher After-Hours — Banks Lift Dividends And Announce Buybacks After Fed Stress Test - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQNFBEZVk5UzVPNXJWQVZoMWpvSlBWaEhYa0hOeGpuQ0VpSTFVU01JeHljcXNvM3FoN2xveHFoQ3Y4RnZuVTh0eHJ4ZnhPWGZhUVphNWo1OE5Qa2dlTXh5WjQxMVFUTHJIUlhXS3F2SkFlLWI0dGpnMjdVZTFWdVRYQk4xZjRhUjVVeThYclhrWDFQOWFPZFZjNGViMkwycVpvbXc1aElLQkxSRGx0d2JBWDdWRnBvekJmLUtlOGlpV0o3dDRNWURaSlQ3UTVRNkRabGVOVDB2OFJoM3dBNHJJeERLcjM?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "JPMorgan Chase & Co. $JPM Stock Holdings Increased by Alecta Tjanstepension Omsesidigt - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxPaGlKVWpuTkNMbFgxT2w5cDZNVGdRbXJfLXNFMW5TTmdEUkhrOExIQ3FFWWJRT0NDRmJNTG43R1dCamNCUk9lblFTcWdNMlQ0MVBrSmhrU1dkVUZpMnZOdThXT1BxMnV1UndMSlppWlRaSG5QeTljbjY2T3Y2T2hINGk3UGdLc1I0cXB1cVFEWXZmTkkxX1JCYVN2d3lZWDdxOUJSelEydHBWZXpIT3FkaFpybzdqMXU2b2Ffc2NMbXV6UTJnZ0tEQlBGWW12UkVoUVZ6Wjg4OTZhRjA?oc=5"
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
    "event": "The former Morphic CEO from Lilly's $3.2B deal joins J.P. Morgan - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPSFdySVA3Y0kwTU4yWC16WTVFVGFBVFJ0SWtfMzdpQ0R6SEc1czBBRXU4QVN3N3FSVEd2MW5kUC1KYXEyMjNYdWNmTnU4bG5sd2xJZ1NWVlZLbFVzaWN3VVdnNkt4RTZXQmpNbVBYQWlGa0REcXA1VmxUcTBZX1RxUl9HakluS2ctWG05N3ZhU1VHMGVzMjI3R3o2VXh0V0xrOEd5dzVlRU5kMlV2eHVfc0lNVWdfY2VhWUl1NVdn?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "JPMorgan Chase & Co. $JPM Shares Purchased by ABN Amro Investment Solutions - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPRC1nSlk3UU5vcVhWdGlNcU1nMlhjVEp1YTV4Yk5XbUJYMDJZVTVKSFR6MkFORndOSFhtSkJLMlQwQktfSWdfRG9rUDhkR1BnamlEeUwtNVh3NERBbEhlWlJJR3dDM2NWaXFlbTFrR2RGQUJqVUdkajVkYmxHWWhtQWt3N0RvSk1HMjdHNU53M0wxSWJOZXZaMEZGWDd3VkNwa09Yb21McVYwX2ZMQVVHQno2amZZRXgzZGxGRENEVFhWc2E3YUZtU2tNTnA?oc=5"
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
    "date": "2026-07-29",
    "event": "JPMorgan Chase (JPM) Stock Looks Undervalued Even As Earnings Look Fair - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQekE0TUk1aFJUOUZhczFYdHJNOEVJb2ZuMHB6ZFBTZkppOU5vTVVncUFmYi1QNjBmTlFPRXBBX082OEpxOFc3dDNuQkxJdEhkYU1PWmxOVVV0WThNSEE3Y1pmS19kOG9aeXRwMDVIVHNmNzRLMHp4TUJNQ0E4TV84dDBTRm1VbDNRaUFPdDBKSl9SdGZTM3liWUg2bw?oc=5"
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
    "date": "2026-08-19",
    "event": "Mosley Wealth Management Sells 2,815 Shares of JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOQ3BSMjZxREJSN0huRUF2Z1E2ZlRlOFBNdTNDY1ZkNDFIckdrOUEyT09Vcm1TMVNmX2NGbVpTU1dfYjgzaEwxNEFsM1BXeWtCVEVUN2ZEeUczUkJnN0d1YTNqX2trZUZVb0hEVjZwM1o2RnZBRF9iSlRPSHpnb3F3OHdXOFFNOFlNVGFrdVFTaHNESC1qX3NxUlV5RU1udlFfakVxeUdFcXowWDZGS2pUSmFidXpJai1iT21LREFSSElBMVZkaU4w?oc=5"
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
    "date": "2026-08-19",
    "event": "Oakworth Capital Inc. Has $67.09 Million Stock Position in JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxOSHVPRG9PYWlTbDVmQm51OHE2MG1BTXdlRUxxOHl3YjhNVXc3N3dfNnhENUxwSzNJLW1ST052bHFya29tazROUVk1ZlV4THNCYjFBNjItTFJPVWR0WndDYkszOHJtTE1JbWI1VjllN1N2b1JzZnN5enBLRW1QVHEwa1VBVnU0ckVkSmh2Q25QcDlIbnE0VG9UVDJFd25NXzFSczQzeFBxNVBIWWg1eUVEazd3cEt1Q1ZiSl9IM0YwWDVUNlhuRmg0VDBkcVlMaTA4Nk9OWA?oc=5"
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
    "date": "2026-08-18",
    "event": "JPMorgan Chase & Co. $JPM Shares Purchased by Mirae Asset Global Investments Co. Ltd. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxOMXoteHk0MzJfaVRpS2ZZQnpBRjhTSWlYb0J5ZHBKblVDNVdXLTkwU0RnSUhNVkRxQTNSTW95QlJYT3BtUVE1RHU5dlBUQnlPSEM4aTJDdWxWekRFZ1lnVmVCZWJNc01NVmYwWFBBODJKY25DZnUtZHB2YUV1ZzhyUi1VX0hsWU9XWVdDb18yY1Fvb3dxVmVSQjBkQUpSVFBwT1ZUbXdvc0hBYldsOC1wTTRmZkVCSG5IcnBPTmhqdDZCMGtNM1ZIMWU5U3QxeVE4c0JNTmo0dw?oc=5"
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
    "date": "2026-08-13",
    "event": "JPMorgan Chase Stock (JPM) Opinions on Robust Performance and Fed Expectations - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOY2dHd3V3Vzc4cXM5c0lLVldTX0R5dWVHUFhWWVliTGJ1Q3hXZTVVMXU2cC1lSFFrb3ZXZW9nOExPV0NoTVptZnFzUGduRUEzaWw3OFdCa290QUk2UkNjOW5KR0pFa3VVUTYtYlhnT3lLZWlUdTRMTkxwY05BdkdjaXZPbnU0MFEwWnp2SVo3cmZJNHAxbTNtY3drWkNFTXFhYWpiQWtoMWgtRUhkc0tHbXNoZGlwUQ?oc=5"
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
    "date": "2026-06-18",
    "event": "JPMorgan Chase & Co. (JPM) Stock Sinks As Market Gains: Here's Why - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNaExvUkwwWVVZbmdFY2VrTERGc2NwS0xLX3lhNkVWZFA0LTdLQTZESERCeVpDWVBFRUNJYXdOX1BkazhNMzFycVZXZm9rTjRTTUVhMmROZlBQeU9hR2g5TjFYV0taV1hvTnBfMjV4TXRGYjRRR09jWHFhUmVQb0llRl9Jal83X2dRSXZ4ajdYaGp0MWxXcEZj?oc=5"
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
    "date": "2026-07-14",
    "event": "JPMorgan Chase (JPM) Stock Is Up, What You Need To Know - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNUnAzZ0gwc19BdUV1aVdrS056bi14RktZREF5aWRrbFFSaXN1aFJVTUh4dlBwR3QxbG9rV3g4ejhYQ0hqZkw4TXBoLUlYZ2ZSeWJ2RnIwSDBWTm83d1h0TE1GbE42Rnpva0lXLVIxMHhEaFViVnB6RmpZb2dPUFJER1BEUEtueDI2VWZPODAxZ2lLdDRBekgzdXB3?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon Prime Air maybe coming to a city near you",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — Amazon (AMZN) is taking Prime Air to the next level. The tech and retail giant plans to expand its drone delivery servic...",
    "url": "https://finance.yahoo.com/video/amazon-prime-air-maybe-coming-200757375.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "If Walmart doesn't raise its outlook, the stock will fall: CFRA Research",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — Walmart (WMT) reports second quarter earnings on Thursday before the opening bell. CFRA Research senior vice president o...",
    "url": "https://finance.yahoo.com/video/walmart-doesnt-raise-outlook-stock-155212028.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon Adds Grok 4.6 to Bedrock",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — SpaceXAI gets a major cloud distribution boost....",
    "url": "https://finance.yahoo.com/technology/ai/articles/amazon-adds-grok-4-6-215824526.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon Makes Major Move for Shoppers",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The logistics experiment is moving much closer to scale...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/amazon-makes-major-move-shoppers-215603266.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Alphabet Stock Surged When Its AI Spending Found Customers",
    "type": "NEWS",
    "remark": "News via Trefis — Its largest peers all trailed the market over the same year, so the re-rating was about what Alphabet's own spending sta...",
    "url": "https://www.trefis.com/articles/612013/alphabet-stock-surged-when-its-ai-spending-found-customers/2026-08-19"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "U.S. Markets Prepare For AI Compute Derivatives Tied To TSMC, Nvidia GPU Prices",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Regulators took initial steps to allow investors to trade AI compute futures based on the prices of GPUs sold by the lik...",
    "url": "https://www.investors.com/news/ai-compute-derivatives-nvidia-meta-tsmc-broadcom-microsoft-amazon-google/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Walmart Earnings: The Biggest And Most Influential Retail Report Looms",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Walmart earnings are due early Thursday after a summer promotional pricing blitz to lure inflation-weary consumers. On W...",
    "url": "https://www.investors.com/news/walmart-earnings-the-biggest-and-most-influential-retail-report/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Why China’s Unitree IPO Surge Is Good News for Tesla",
    "type": "NEWS",
    "remark": "News via Barrons.com — If humanoid robots are the future, and they appear to be based on what investors are willing to pay, then Elon Musk face...",
    "url": "https://www.barrons.com/articles/unitree-ipo-china-robot-tesla-7b95f6e1?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "IBM Stock Is Out Of Favor, But The Margin Commitment Never Came Down",
    "type": "NEWS",
    "remark": "News via Trefis — The revenue guidance came down after the second-quarter miss; the operating pretax margin and free-cash-flow commitments...",
    "url": "https://www.trefis.com/articles/612014/ibm-stock-is-out-of-favor-but-the-margin-commitment-never-came-down/2026-08-19"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Prediction: This Will Be Amazon's Stock Price by the End of 2026",
    "type": "NEWS",
    "remark": "News via Motley Fool — The company's cloud computing investments are starting to pay off....",
    "url": "https://www.fool.com/investing/2026/08/19/prediction-amazons-stock-price-end-of-2026/"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon Stock Rises as AWS Growth Reclaims Attention",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/amazon-stock-rises-aws-growth-174624803.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon drone delivery is expanding. See in which cities, when",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.usatoday.com/story/money/2026/08/19/amazon-prime-air-drone-delivery-coming-more-cities-2026/91371094007/?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Apple stock stands out among Magnificent Seven on low AI spending",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://qz.com/apple-stock-magnificent-seven-ai-spending-market-edge-081926?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Attention Alibaba Shareholders: August 20th Could Be a Very Good Day For You",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/19/attention-alibaba-shareholders-august-20th-could-be-a-very-good-day-for-you/?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon to Bring Drone Delivery to 500 Cities, AI Be Damned",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/15034023-2862-3356-9e22-c4568464e286/amazon-to-bring-drone.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Nvidia Stalls as Google's $12.2 Billion Custom-Chip Push Expands",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/nvidia-stalls-googles-12-2-173648919.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Tesla, the Cybercab, and What the Stock Needs for the Gains to Keep Coming",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/399cee74-4fe6-3939-9d39-4bea5b0a0fcd/tesla%2C-the-cybercab%2C-and-what.html?.tsrc=rss"
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
    "date": "2026-08-17",
    "event": "Amazon’s Stock Could Hit $500 by End of 2027. Why AWS Revenue Is the Key. - barrons.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE5LOGU0SG9wME5XTTFVbFU5VXotS1pWRUg2dnVFZ3JZY3AwSmROVFkzRXF0TjBDUExqdEVTalZKU1hsVzZOYVZwQUpTckFpTWtzbWZwTEFiYUM0ZGdqeWZLOXJwTXVOcjhlQzhIa010ZDRtVjlNLU1CaA?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Prediction: This Will Be Amazon's Stock Price by the End of 2026 - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQQWhHZlFGcUN6cE9LOGJWMDlSN0t1eEFPY1dMNWdOS1hMNzB3eXE3c195dHAyM3ctYnltMk4zUHBLbndzWkE4czZVeU9iakpmc0NvUlh1X195eFJNVWRPd1ZiZEpaR1FULXBGTk01UFRweTJBUldpYzVIOVVSbnZZd0o3N1JoMkVaanJaOWduZFBhSHZRVmNQbjVxRjNpU3V0ZzY4NnM4R2YzYVdXZnJ1UU5lOHo5SERHRXlsM1NIa29KQUR6R0xSTWlSV04tWXNTd2dJRUdEQ1NSMVIwUVVOYg?oc=5"
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
    "date": "2026-08-19",
    "event": "Institutional Investors Added Over 70 Million RIVN Shares as AMZN, UBER Remain Key Holders - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQbGFHUG5XN1BkdlIwR1J3cTlzdTRUTjVKVmpDdFBzeWMycXJsUW5pc3JCamFpbHZhUHJSdzhvVUI5LUFtbFNKaTh2NWhFbTFMaXc2MkJfV3lVY180b1dLaTAtR05IbFhMX2RpZEtQNy1fMUtoWFVZS3JTUU94TW1tWTZHTGpFRloxSTJrRF83aEJLc0paVng3amdsSm1NSjNjTDZtVw?oc=5"
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
    "date": "2026-08-17",
    "event": "Here’s how Amazon’s stock could nearly double by the end of next year, according to Morgan Stanley - MarketWatch",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxPV1RUWEpINjJIaFN6OGk5c19KQ0pJc1BuMUFnSXNrX0hLZXJsUVdNN0xkWV9OYnAyODVic2NhdXlJS1FDSVk1OWVHNlNnR3A2TXhhbWhPVUJoeGc4TTVpMnFGZXBfUnNsT2gxT2VWWmhfSWN0TEpRSmxRQ0ROaWJzT2d3cEtlSHNGbC0xZDBGdjBDcGhkdDhNM1Q5b1JUdEk0RXp6LWJhX3ZUYS1wTXZWRHctODZZeWxoT2ROWktwTDlGa0FMRUdBcG9UZE5UaEQwbmpLUQ?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon Stock Moves Higher Wednesday: What's Going On? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOT01LVU1WeU9rT1BYV1RUSHdjY015U19MRk95MjVVSmpOZkEyRFdxZ05iN0pySWt6VU9SRXNKeVcxdVl5V3paOHo4THB2UFc1N0t5VURZakZWbW9GUkVJZjJIbDlFUm5haWtTcTQzRklmRkUxLS1PcmZ3d2FaamxBcXlBVmdJemgxb0JLRTlfN2ZUSjcyQ2ZNUWhNemtkUkdDNGRWcVpXdjNFQXhFUHhiNA?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon Stock (AMZN) Jumps as Drone Delivery Expands to 500 Cities - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPRkNpaF91MjJSMnFicE1LeWZpS1ZuRVRrcFhHN0ZRRC00b2QtS0ZKNHRfZnlLc2pWc0UzUXNOSEdaWl9QY3JoLS1BNGdoZkZ0YS1Ba2JoTG9FNkFzX05FUUc2dHd0QkQ0Q1lUby1NTDVIdGtUdW5Zam9nYmJqU29RMzFiVkhySTZPTDEtbzdBRUhGMVBRZml1Zg?oc=5"
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
    "date": "2026-08-19",
    "event": "Amazon.com (NASDAQ:AMZN) Stock Price Up 2.5% - Here's Why - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxOclZ5SzNSMWtxamNwSEktbXplUGlLc3V2dUh0RTNXRUFlM2I4NWxMdXlNUjIwUjNQZkNOTVJ1eUhPSVJ5OHBJaFZMQmdWak10TXJ2ek1EcW5WUzVGN3NRX1R1SkNsMjdJSHp2N3pKZFYzZ0xxcXcwUlN6b2gxbU5QR0tTQ3BuUGlpeEFJVEZaUEZrZ3REbV84d0VtVmNGRUhFRW90cg?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon Stock (AMZN) Opinions on AI and Drone Initiatives - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOYVNpc0t2MWk3UjR2d05rRnRNeE9rdFdxcl93UlZobnprX1l0Um9IX2kxcjlLZDNKZUlaRmotNFJld2xCV3BUT2JFM3hfUVE5cUZuc2N3R1ducGVBY3hWZy1ISmsyajAxTDlCVXpZeHJwQUtzMjdtTmswZXFPcmpNTmNLeGVYRlhlY0psTVZodjg1M1dvNG9CNA?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Prediction: This Will Be Amazon's Stock Price by the End of 2026 - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNSE9VNW5jU0Y1M1FlbWdTNW1pM2hUc3lrT0lmdzl1LTRnczZkWUg0RWhLNDFDWnBPdFdrYTgyVWI0aFlBb2ZlMmxtZTA1ODhDYllvaWk2bVlob0FNZ2hETDNSdVRuRkowM09kMjdEdTd0YldDUjRfSlZPRnJaZnhzd19wTEVhU1p1TklBWHNR?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon (NASDAQ: AMZN) stores chief sells 3,741 shares in pre-set plan - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxNTkRpUC1BMVA3N0wzNVFNU0UweHU3aEZfRUJ0SGdWMHlMakVBT05sMHBNNFlLMTRpOVV0akk3Nmc4VUZmRU9HeDdEMFpDVGYyd0tHcjY2bWVVT2hkZGRpclI5eHVScUJxQ0ZmbjNObVlIempDdV9sV0kyUmhvYVF5RUpkT2tkZ05EaXpFMnFPTi02RzdiM1pfM2tXMERpUWVLTUtyUUVHMFItRDh0?oc=5"
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
    "date": "2026-08-18",
    "event": "AMZN Stock Drops For Second Day — Amazon Reportedly Cuts Jobs In Artificial General Intelligence Unit Amid Strategic Realignment - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxObGx0T21YQzRqVjNDR3A2cEx1RWI4RTZidVNhbk9mQUZpZ3loUEJtbWd0SFBlOFdKY0NtaEp2SWpTVDRGLUVWWnFSOUJ3dS13N05KbTlPcC1aYTV2M3YyVTNkRExpTG52UTZWYVZDQ3dzRl8wV3FzTGlGWXByUi1kd2xmcnRlXzFBNk8tMGJUYUZJeVYtUmo2ZDUyWDFRNGkteWZNNjIyYTh4Y1JSMTFaNHdlS2VuSEJjdS1tU0RGWFljVmsyZVdmZmlB?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon.com (AMZN) Targets 500 U.S. Towns And Cities For Prime Air By 2026 - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQeC1yZVY1OVRzZHFHUXN2WkhRQ0xOOUxKWU5hdDRDeTE1a2tGd0ZNVjVtZzdCWUFoSGx3di1icE5pR3RJNnhUMkd1NU5sa2hFenZNZTdXaHZIa1FCd0ZlNnZCZjlmeWU5MVk4NFc1MzVzamw2cXFsVHdTMW9UN1dHUHIxRUxGR1JraHRfMkV4X2NfYVAtbXZuY3g2Sl9BWC11OVdhVmJ6TXVjbTlFb3NhZGlzRHZrTmRTYmhpMk1RWG5ISEt10gHKAUFVX3lxTE9iRl9MVVRrMk9jNE5LME0ySkNwRE83RUVtaUVGOGE5WXRLbi1LczBwNmRsUFUydFJpZDh6QkxqdlVVZEdHdTdOaXFLa3F6UzRybTVlZGVWNldrLUEzaENtX2ttLVJrYUlfN0hkamxWOS1NaklvYXJlWU83YklhRzB2d2xENEJsdVY3dlJsblpBdW8tLTg2UDZiTHpKeE95QTRuX1VtNTRjaWEzWXZUNXlxOGpyT2UwancycnJ3b1ppdTRJcUlRYlE2eGc?oc=5"
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
    "date": "2026-08-17",
    "event": "What's Going On With Amazon Stock Monday? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQQU1Ca3NzemluZU5FODlKalNubXpqV0VacmFCaHV4NEg1d2R0NmpGSmpXSTJfMjJpQlVqdDA0RXRRWlkzU3NwOFktQ2t4V0xicW00amJYNnBLRXA4NUdqVGI0THBaN3Y2QTZHQ3dkRmFQRDhfeGR2emtVMDVFRXZwWF9HY0c0WXFKeDlXWlpXd3ExcHlONmRLVzZJWWt0REZhend2eg?oc=5"
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
    "date": "2026-08-19",
    "event": "Amazon (AMZN) Sees Bigger AWS Growth, but Rising Competition Could Pressure Returns - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQN3AydjcydVdYU3NNTTJ1aXFGTVRUa2JKR2laaEdaU2J2N1UxXy11SVBmTWJzaTlxeWUxY2w4V2xXYWRvRHJxSUNrTVhUTjlmV2ZrS3ZCZzR5c0c5WXNJZXlhS2ZQMVRGbXNwQm9vUmNheTl1dksyVUpEWEtLdTZfWmgtYUNESW1OZUpUSUVLZS1ORVFKNnRr?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon Plugs $18B Into the Southern Power Grid - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOZTRPaUFESm0wempHbnhpSXlTcVhzS3BEZzB1V1d2ZmVqRjk2QlgwSUF4WC1tWDFYdzJuUEhjTXJIWUVLbGM4ZkRESGhfZEVaVUxXaC14aVRpQ0VYMm5UWlRHYUx3YUFHSkNscTdpYTBHVzY5bDJmM2Y5OU04US15bFp6SHpzVU5XRlE?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Wall Street Analysts Think Amazon (AMZN) Could Surge 25.6%: Read This Before Placing a Bet - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQZ2F2WlR4T0ZQTFdfbDh0RmxSOHVZTXVRcS1Jd1dyZTZZYlhTTXNpU3ltRVBzWlZ0dWQ2anV4VVhudHpfUGR3bmtOTmY3TFFPZGhWMS1uRUNfV05rTjY1SjZXclBKV1lnaE5DMlhzLVA3OHdXZmJnbGpBVHlRRGUxdXBDdTh2dVdYVlZQc1lCM3p0OWlzdXJKbHFRUlNvQ2czS1p2azBSQXQ3Y2ZU?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "AMZN Stock Rises Premarket, CEO Jassy Defends AI Spend: ‘We’ve Lived This Movie Before With AWS’ - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxNRGtacllNeElWakYzUXlVeXBibGljQWJiRHd2UzE0Y2hCNlk3S3dTQlpHa1c2VG1IRUV5OWxsMnpXVjdqdk5URXdtdTBTSC0yRmp0Q3pQUUlINW85OTNGbWFVR0Npb01UNFNualVZLU5YSjMwaVcxNDBsc3ptamNxLXV4VFZHOXEzSFZySHRmRVpYQTQ0emEwWl9WRU1tOFNHa29EMEgzeHBuT1RydWV3UHg1TlBlTVRCU1kxR1BmVlBBOENWWHFJRWY2UVlMRjJiZTNRRW9INDVUU0d6UzV0ZFVuZ0o2ZnVleVB4MA?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-18",
    "event": "AMZN Stock Slides After Proposed Consumer Class Action Suit Over Trump Tariff Charges - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxNWFBRVXdqbmg4bTZpUzZuVmdkVTh3UnVONjB4SGE5OEgxbWdqXzdpempCT2x2WGRNejlpdnE5azhuNlhlRjNqOXlRb0duSzhkdElacDd1NjBDZHZfVTBfajFKMUltUW0zVlNzR2duT1EzdTQ1UzdaMWFfRVlmMjNGYVItazBFVmVEYWhSQ3BUTDFVTnBuWUh4eURYQUs3LW82eWNLLXF5MzZlSmVvWE1YX01MUjRXSjBRVFNwUmxXTnQwekVyRU8tQlUtZE1Xay1mT1Z4RS1aSE01OGVWTXZ5VUZOOA?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Is Nvidia stock too cheap right now?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — Nvidia (NVDA) reports earnings next week, on August 26th. Ahead of the print, Bank of America (BAC) says the AI chip gia...",
    "url": "https://finance.yahoo.com/video/nvidia-stock-too-cheap-now-144036744.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Broadcom Gets Fresh Google Warning",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — A key AI relationship just became more complicated...",
    "url": "https://finance.yahoo.com/technology/ai/articles/broadcom-gets-fresh-google-warning-220417060.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Billionaire Stanley Druckenmiller Just Dumped Micron and Intel While Adding These 2 AI Stocks. Should Investors Follow Suit?",
    "type": "NEWS",
    "remark": "News via Motley Fool — AMD and Alphabet look like good long-term buys....",
    "url": "https://www.fool.com/investing/2026/08/19/billionaire-stanley-druckenmiller-just-dumped-micr/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Stifel Has Message For Nvidia Investors Before Earnings",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The next test is whether strength extends into 2027...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/stifel-message-nvidia-investors-earnings-215114118.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "The Fed's July Meeting Minutes Show a Growing Urgency to Raise Interest Rates. Here's Why I Still Think a 2026 Rate Hike Is Very Unlikely",
    "type": "NEWS",
    "remark": "News via Motley Fool — Minutes from the Federal Open Market Committee's July 28-29 meeting show uneasiness among members regarding inflation....",
    "url": "https://www.fool.com/investing/2026/08/19/the-fed-s-july-meeting-minutes-show-a-growing-urgency-to-raise-interest-rates-here-s-why-i-still-think-a-2026-rate-hike-is-very-unlikely/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "VUG’s 0.03% Fee Hides the Real Cost: 63% of Your Money Sits in Just Ten Stocks",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — VUG's rock-bottom fee gets all the attention, but a hidden cost in the fund's structure quietly shapes every dollar you ...",
    "url": "https://247wallst.com/investing/etf/2026/08/19/vugs-0-03-fee-hides-the-real-cost-63-of-your-money-sits-in-just-ten-stocks/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Could Eli Lilly Be Worth More Than SpaceX by the End of 2026?",
    "type": "NEWS",
    "remark": "News via Motley Fool — These two stocks both have market caps of more than $1 trillion, but Eli Lilly's valuation is supported by strong financ...",
    "url": "https://www.fool.com/investing/2026/08/19/could-eli-lilly-be-worth-more-than-spacex-by-the-e/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Lowe's Companies, Inc. Q2 2027 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Moby — Moby summary of Lowe's Companies, Inc.'s Q2 2027 earnings call...",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-lowes-companies-inc-q2-2027-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "NVIDIA (NVDA): What Foxconn and Super Micro Are Telling Us about the AI Boom",
    "type": "NEWS",
    "remark": "News via Insider Monkey — NVIDIA Corporation (NASDAQ:NVDA) is heading into its August 26 earnings report with expectations already elevated. Wall ...",
    "url": "https://finance.yahoo.com/technology/ai/articles/nvidia-nvda-foxconn-super-micro-210152728.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Marti Technologies, Inc. Q2 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Moby — Moby summary of Marti Technologies, Inc.'s Q2 2026 earnings call...",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-marti-technologies-inc-q2-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "The Estée Lauder Companies Inc. Q4 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-the-est%C3%A9e-lauder-companies-inc-q4-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss&.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Viking Holdings Ltd Q2 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-viking-holdings-ltd-q2-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss&.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "TOYO Co., Ltd. Q2 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-toyo-co-ltd-q2-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss&.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Nvidia Reportedly Explores Stake in AI Data Provider Mercor At $20B Valuation",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://stocktwits.com/news-articles/markets/equity/nvidia-reportedly-explores-stake-in-ai-data-provider-mercor-at-20-b-valuation/cZYdtqXRJlq?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Why I Wouldn't Bother With the Anthropic or OpenAI IPOs",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/19/why-i-wouldnt-bother-with-the-anthropic-or-openai/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "SpaceX Spent $18.4 Billion in a Single Quarter -- $15.8 Billion of It on AI. Here's Where the Money Is Going.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/19/spacex-spent-184-billion-in-a-single-quarter-158-b/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Why Newmont Mining Rallied Today",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/19/why-newmont-mining-rallied-today/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "BILL Q4 Earnings Call Highlights",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.marketbeat.com/instant-alerts/bill-q4-earnings-call-highlights-2026-08-19/?utm_source=yahoofinance&utm_medium=yahoofinance&.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Nvidia Stock Drops In Broad Market Slide With Earnings In Sight. Is Nvidia A Buy Or Sell Now? - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1XTUFJeFZmVTllZDZKSFlLVjhXd2hLUEFnSXlwakRMdk1pemZJQmZFOFNKSHJBbWNfYzM4OEtoQmFpN0dINXFieE1fT3FlVTNkdExwdzJLVTJRRURUWk5yV1F4cEppRVdYSm9PekNFTEtrbE8zOUVHM2dRZzY2R0k?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Is Nvidia stock too cheap right now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTFBpei1WTHRMaEJkR2NyQkdJUXYydzZ4SklzSUNnZUh3Nl9KVGtkbXFwTUwzNnZrQVE3RFlkdDA2RWdXNGZwN0YxLVlEQXA4eGRqdnA5RDVfWk41YU9vc09RVWxxR0psaVZVVl9lTW5CcTV0OHNEejNWeXRLUUF5UQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Going Into Earnings, Is Nvidia Stock a Buy, a Sell, or Fairly Valued? - Morningstar",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPb0VOQm9kVnMtUWdwakFBUWNBU25nU3Z1ZzJfcjE0c1FIRndqRXJiV3VKNGV1S1VhTzc2aGdfaXBmZENTR00wdmlWa1RLR2hmNVlQTW5vMmtLa1JSSU5wMzE4SEk3ei1JX2FFN0k3eFFRNzRJX1RXQ2NsMC04TU9RTDVvd3Y5NE1vTE8yWlI2ODZHMkpQQXJvLXBGWDFyUjQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Cathie Wood buys $22.3 million of surging semiconductor stock - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQTjZwdzVLRGpOVXlfdUZxbXl1Nk5SUmNVbkJZeVIzS1dYZW13bnAyNnJTZkVxaTVlRURvZ21ZR1ltSVVaWkxUbmJVVG1FU1Y0dW52V1VfdElUR0dwUUsxY1hXb2RLR0FmVmlWTV9tNFZqWVVyTjA3WVNNdnNlTzhTeldQajZUVjQ1bkZFSGlnRlNfT1VoYUJHS01Ndnl4WTRITG5QY2RoRVYwN2FrckxoYWI2a1N2QQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Why Is NVDA The Discount Option Among Its Peers? - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxPT25JWHNvUWV1RmRmQ3pJUEp6ZmRBY2FoZWhoZHM1aGdDbUJfbUJWQWo4UkNoci1RTVozNDE2ZW05N0UxUU9zakpnSWw4R1FuRVA1VXR2cHNia2UwX0VyZ2d4U2hKcTd1M1g4N3BWZUVNSVJDbUp5cmNGVGw2LXQyWVpkTW8ycnk2Z0dXVTF2c1ZpQ2ExV2c4RzJZd0pYYy1QRG1lLWJyZnE0dFo4?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "8 Stocks Nvidia Has Invested In - US News Money",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE82OXVTS2ZrdWE1NDFqWDdvbUlpQVd6UUsxSVJxMGJIVDgzTG1xTmx4QzJnYWV0MG5YY1NzTzlWWWRGT3lrUEs1cURrNXRPOHl5SWtiVDlwd3phWHlxbk1qY1J0WHpNSjRDbUpTOU1IVjhteEY3bVhBdklqYlJNZw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "'Big Short' investor Michael Burry unpacks 'serious competition' for Nvidia that he thinks could shake up the AI trade - Business Insider",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPbm1JbjQzc3BBWklqTmF6a0ZlNXNHazh4WFgyY1ZKVFNFSXh5NDdpbDd1aG9GZ1NFbFlTNnJ5dEFQdzFDdzQ3Qm5UUW5SX3hZNVZ6c3JRbWRXSmZXNm93Y0NmV3E1Z0dZNi1Bc2pGd0lqVEJDZ3V6RzZIbC13UXF2SEpBRC1KRkxQaG5GcnhJbE9UcFA1d3ZKSktLMDdtaFk?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "NVIDIA vs. Broadcom: The AI Stock You Should Buy Right Now - Zacks Investment Research",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQQmlGTGh5NE1rS1d4c1ZGOW0tNU1mUXVkTTBkb1pkakc2TkZRcDhEZ2lMbmU4d19Yd2ZaSVFYZ1l5aGZ4Zlc5UzN5b0ZZanJkLXVETzV5aV9JdGxRa1pISWs2UHBwZ1NNR0Z4Y3lkYy0tbExQa19odUtORHg2bmdkS1F1aUpHOFo4V2x4VTBEUUlNYXRFLU5SbjFnWFRCZw?oc=5"
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
    "date": "2026-08-19",
    "event": "Nvidia Stock Won't Be Overvalued by 2028: My Case for Buying NVDA Today - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNX1lwekk2Z2E1dWd6NWlCSFJRMDMyU05tb29HOHRFMklubzdqR3NkMDhFVmpjMlZuTUNRSzdRNkNVREROclpSaEhvRzVSaTAySENnVmxtQkZVMlhoRlRMcnAwSGZuckpwMGdCeU9CQ1dlZlFrQkVRNXdiWFpHUTNZM2J1S3p0S0RwX1B2Z2gzZUdIZ0hTcmxpQQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Nvidia stock's deep discount creates a 'compelling opportunity,' BofA says - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQLUJWRzJVUVd2M3dwZjJ6N2pwcDJaM1JVN1hIRTlJcmZ1MzlYTGVVcUx4cGZOcjg4U1JnSGh5bEJYSkdmYVlCeklGck9TR0VONk1EOVBQTjBlQktsdHE1eHYwZm9Ib3lKQXFvTHB6ZGRBY1ZuZnlUZlc5WGVxaGdhbWZ2U21fbjd2dmpwbE9sUkJLdFdMZ2lmcjhQdUZnVVVJbVY3cGxFLUI5bl9KSldMT3J0MGhWSHE4WjhSekhXcnNabDJjSzgxeVV1SmRsMEE?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Analyst updates Nvidia stock price ahead of earnings - Finbold",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE9aU0FzcU1MQ2IwdDBfbjIwTVBkTUoxNlV2M1JtdW5DUEE4Ql9nOF9ieEx4TFdhZVhsMkc4bk9lLWFLOVFINndzSEYtREpZOVUwTU94R1AyOWdVUWc3bFRUQ3o1cVlFZGlURUdrc0RuM1VyVTlwZmxyY2xmT3dFUQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "How Nvidia Stock Could Get a Surprise China Boost - barrons.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTE0zV1RUU1lmLUR0Vl8zdEZHQVNsMU10bEx6aXNxU0NNbGR2VVVsamdNZXBWSmJ3Y3lpc0JaTzhlZ3M2QlFvdU9ZV0gwbkVmSFVHY0JkekFQMk81QjVQbWJPOVZPVXpvZ3pPbjBPYS1ZbzhSSzdsNUNFSC1xNTQ?oc=5"
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
    "date": "2026-08-16",
    "event": "Nvidia (NVDA) Stock Looks Near Fair Value After A Huge Run - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQOGlnYVNrVjFlalRWUFMxQjY5REFyUjlSQVBSZlotUTMyckFIWUJUT240UmNjSlJKSTVNbVRlcDhnUFQtMHp6dWRCenRSV2x6UzE1ZXpjUUtMLWNxQ1c2Rk01NnRwMGNLWUlQN0JfMGJiRVJXSzhLaU1VRW5hMVFaclRrZEpBb19DSGpEc1oyWVBoTllIMnVjcw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "The CEO of This Nvidia-Backed Artificial Intelligence (AI) Chip Company Just Bought $10 Million of His Own Stock. Here's What He's Seeing That Retail Investors Won't Want to Miss. - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1LcjVrWTRvbXB5WC12WEl3ODVkVjZPN3ZBWVJ1WmZUOW42OXJVWk1zS3JIamhPTG1weFJnQ3VwZGY3aFRWbnJqTmllQzUzODczQ0ZHR1d5aElQWHM?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Bank of America doubles down on Nvidia stock despite big risk - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNc0dyUVdUcTlBSm5uSnhYVjkySUQyeEtWd0k1SjJLT2RyTW5ETWd1NGdMaDkyYkViQ3JQbnpQYnpONHZESDZoNjRDTHE4aUpCWFNzVUQ2dnUyVU5INU5KVjFiUVVsYjU2MDVUOGgwRy1vS2k1UlpWVWp4SG5SY2xra3NLMXNrVVZZZUI3X2JnYTZHMWpVcWlPb08wRjg1Zw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "NVDA Stock On Track To Snap 3-Day Losing Streak After H200 AI Chips Reportedly Reach ByteDance, Tencent in China - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxONjk5NHktb25vZWFsS0ZQNnUwdGY1OURRUG03LXBXYkczN1RldGh0TVBzclNCZGlfOG9QQTlka1ZSaUhRazJjb1poYTJUalFqVkNDX3V2ZnY5M1FBb2Z2VGoxZFJXbnNMNFVVUnFrc2tLYXIxS3ZaWmZQVFhyRk9OeTFyZDdveEJQbWdyeGFLczBLUQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Billionaire Cathie Wood's Ark Invest Bought $27 Million of Nvidia and $16 Million of Broadcom During the Recent Sell-Off. Is Now the Time to Follow Her Lead? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxONTZ6eGxOZktYXzcxMDY2c0Q4YUNJbVdNZUZZRndMX3hfdW5TZk82MU1Pd2F3ckJEUko4YkFzY2FtS2FSMkg1RkZGa3FZZndpTFhDdjExRDFkR2QxSDJ2UndVVGZ4Wl9YZ0wtWE1EWXRwaU10WnFVUDdnSk5VTWYyV3g1WHVYTWF6bFJYQkMyTU1PdjBTQXNmbHM2ekJOeVZGV0E?oc=5"
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
    "event": "Here’s the case for Nvidia’s stock to climb 55%, according to BofA - MarketWatch",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxQREN2WV9jRmpPT29iUjVvWV95WUVkYUtkM3JLR2JQLTFOMTJTb0hZTzFWeWJXaENUeGQ4S2pPeXNuQV9Xem4ydmtwUEtYbk1RS3FyOTVSYTNNOGtxZkZIaXA1RlE4QkRQNENlUEtDczFvZEFQR3Y1MzZhbWhxMExPZ2dZUXNoTjBQNUZSWTZHSlN1TU15S3EzZjdzbTVnS0ZQRWc3Q3hXbGd5b3huRjBCa1lCU21xZw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Is NVIDIA’s (NVDA) AI Dominance About to Face Its Biggest Test Yet? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOMm95eXMtR1YtdTgtVHlYVDFtYnNzWkd6NkJJOHFrSnh1NjVlSkQzdExUQkZqdG9FNDZvSWlrNUt0WWVjMkRmbU42dERfOGxaTl9mbU9uZ3pRal9OZ1Y3eDREN0NCN2JWX21KLUxtbVZ3QzNzRGg1S1B4SWJUUWZPR0hia2p2YU4yeUhLVkhlMmhwOGx1M09SeFZB?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-18",
    "event": "Why Is NVDA Stock Rising In Premarket? - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNZUxqM2ROZkpHRU9pdnppek5HcUM2QVZkT0ZDclRZRVR6OXhlX2FQYWh2WGJNNEp1ai1SNFdzZGh5aWtYS1p5UEh5ZDZ3dEV0NTMzWGptQ2cxVVF3RzBoUXB2WDhOUHU4bXh0UXNUaGlENEFIOVJlSzJDWWVRTkZqaXY0R2MwSlJzblhwUThWbksyc0JsMFQ1SWtEanYybFh4cExF?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-19",
    "event": "Why Is Nvidia Stock So Cheap? - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMie0FVX3lxTE9BOFRrQktSRkNDMWo2ZzQ1SzBjTlVpRlp5NG9xdUZGU3lGQWR2TFIxSzdOTUJrRjFhWmlCYWpsemlNaXlMaHF0UjJBdmNMV05tVmRDU0t4eW9XWVRTeTh2VENpcFZabDRlTEdBb2NWa29OQlM4T0hpVlNYRQ?oc=5"
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
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "General Motors Raises Guidance as Truck Demand Offsets EV and Tariff Pressures",
    "type": "NEWS",
    "remark": "News via MarketBeat — General Motors (NYSE:GM) Chief Financial Officer Paul Jacobson said the automaker’s first half performed “remarkably wel...",
    "url": "https://www.marketbeat.com/instant-alerts/general-motors-raises-guidance-as-truck-demand-offsets-ev-and-tariff-pressures-2026-08-19/?utm_source=yahoofinance&utm_medium=yahoofinance"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Tesla Stock Surges 2.9% Despite Its 321-Times Earnings Valuation",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Falling yields revived speculative growth--but Tesla's operating margin remains the harder problem....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/tesla-stock-surges-2-9-174820790.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Tesla Stock Jumps as Cybercab Launch Puts Robotaxi Plans in Focus",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Tesla Shares Surge Ahead of Cybercab Launch as Autonomous Driving Takes Center Stage...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/tesla-stock-jumps-cybercab-launch-172749081.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Tesla Climbs 3%, Rivian Jumps 4%: Why Are These EV Stocks Outperforming Ford and General Motors Today?",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Pure-play EV stocks are surging past their legacy rivals Wednesday, but no earnings beat or product launch explains the ...",
    "url": "https://247wallst.com/investing/2026/08/19/tesla-climbs-3-rivian-jumps-4-why-are-these-ev-stocks-outperforming-ford-and-general-motors-today/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Should You Buy Tesla Stock While It's Trading Below $400?",
    "type": "NEWS",
    "remark": "News via Motley Fool — Tesla's stock is on track for its worst performance since 2022, but back then, the markets as a whole were struggling....",
    "url": "https://www.fool.com/investing/2026/08/19/should-you-buy-tesla-stock-while-its-trading-below/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Humanoid robots don’t deserve their superhuman valuations",
    "type": "NEWS",
    "remark": "News via Financial Times — At least robots don’t need to be told to calm down. Investors are a more excitable bunch, as shown by the 460 per cent g...",
    "url": "https://finance.yahoo.com/technology/ai/articles/humanoid-robots-don-t-deserve-164310551.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Tesla’s Biggest Opportunity May Have Nothing to Do With Cars",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/19/teslas-biggest-opportunity-may-have-nothing-to-do-with-cars/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Elon Musk Says Tesla Is ‘Most Made in America’ Car Brand as Trump Tariffs Shake Up Auto Industry",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/economy/policy/articles/elon-musk-says-tesla-most-150027321.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Virtuix Reports First Quarter Fiscal Year 2027 Results as Omni One Orders Increase 150% Following Meta Launch",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/virtuix-reports-first-quarter-fiscal-213400259.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Westport Shares Rise 7% Despite Wider-Than-Expected Q2 Loss",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/westport-shares-rise-7-despite-153900017.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Nasdaq Overcomes a Chip Slide. The Mag 7 Is Roaring Back.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/0a0e1296-76c9-3eb8-acf9-e14282fc38a4/nasdaq-overcomes-a-chip.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Humanoid Robot Battery Market to Reach USD 622 Million by 2032, Growing at 72% CAGR, Says MarketsandMarkets™",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/humanoid-robot-battery-market-reach-143000239.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "U.S. Stock Market Moves | Tesla (TSLA.US) Rises Nearly 3%, May Launch CyberCab to the Public by Late August - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNQ19wRUIwcVdHMUhQOFV0Z3RiQ1ZidGowQlZCU0RWZ29rZ2w5YWZMY21rcVF3eXVBRzl1cmpSQ0tHWVpFUm1JWUtBeEk5bVAyS1ZzNzFQYnA5NFhtb055a1dSZ215U3dhbGx1OHF3dTV3WEg1bTNLd05yZXNFbDZmMmF6cC1jSHpBSTZ0SjYwNUJBVU5femU0a0hnUQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Tesla, the Cybercab, and What the Stock Needs for the Gains to Keep Coming - barrons.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFA4dEtoMHp6X1ZMel84TEpYU2huMHlLT1pGcHExelB6cEFFZXlWVkVyMndHWnVQTV8yZnVhT0hxS3c2ZW1ZeExsQ1BHQVdfWU9uV1dJeVVQZ0RGdmtweE10b3BNeEk2N0ctLV9TYlhRMU5iakk1ck84OEdIWHFacWs?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Buy, Hold or Sell Tesla Stock Ahead of Cybercab Launch? - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPQnpkNGdTYmx3djFBZWh3Y1I0OVBLd3haNW9lUTJOWURRcFBRMW1PbjdMTmw0RnNOQkpidjlnOWNIVFdhX3FmT2hWS3VZM0szRi00dDZSMW1NRnlDa1JhNU13SUxES0t2cnlYck54cUJOS1RLT3NjbU85WkFEVDRJTW9WOEpxSmZEUDhsQVoyX0U5RmFDTHdFRlc4SUgwSUNIMWpLaEZGOUl3WTJ3Ymc?oc=5"
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
    "date": "2026-08-19",
    "event": "Tesla Stock (TSLA) Is Boring Investors as Cybercab Event Tease Fails to Lift Shares - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOX2dIcEQwTkdSdms5a3RnUkhkODBVeFhYbnBUbWV1TmRiSmoyR1hRc2FLMlhxZjVoMkpzSFY0UXllbm5YYVVBdWFxUFZ6OHhReklNdFoyWWFkSG5SN0xOMTIyWjRKSzVkY0w0cFpJV3puYnRPRFNIdmhpUzBmcmgzdkdGbHZUc0tqdElLSE5QbXhOZ1hYOGtSLWVaRzFzUVhxM281M2pWOXFGZkx4RURZSQ?oc=5"
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
    "date": "2026-08-19",
    "event": "Tesla: No One Is Paying Attention (NASDAQ:TSLA) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMifkFVX3lxTE43eC1Xc0ZlTzR1T3VYNi1RbTJvMld5TkQxTzBISndOWWY2ekV1YThYd3g3QzBBU0JwS0NVaWY5NzBvOW1EVXo4S2lLd2s4V2tGb0I0bldKRGNpQ0U1SGRRT3NoYzVOUTdBd1I2c1JKZml5c2x1Ym15Xy1uN09qZw?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Gary Black Says Tesla Stock Will Remain ‘Moribund’ Until Musk Deploys Unsupervised Cybercabs At Scale - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQLW15N0d3NEVmUGlMcjBKNDNBaVRnR2ttQmJzYUtuSWI0a3NkUVFubFl1Y21aMk90dHBfODQ5ekcwQ2NkdDBqcXItdXFyRWZYZ0EwSzFkQ0JYSFROVDJXRWhKamRscGZCMTMxdlpiY095RUVBUlZySm13aFhtN1ZsOENEVU45Z09Cdi0yUkxPYUo1UXVWakhz?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "Why Are Nasdaq, S&P 500 Futures Tumbling Premarket? META, TSLA, NVDA, MU, NBIS, SLS, HD Stocks In Focus - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxOVGhkTVdBUGJoWU5CX1ByX05uR0dRd2ZXZ3NyUDFnZlBzN29qM1hFZW1KQ2FuZXJydUtNU2wwTWpIOVd1aDhIVjV2bmRRM0syVXBwU190b3ZaZDc3NUVjUHNGaFJuUkJrbG9NX1Qwem9iZDI5LUpmeVM3ZFMyMnlJVTc2UU9fbm40aFZmem9lcmV4ei01ZWk3V0pSU3JKblBodERob3I2VDRSYjR1ZHpYX3BQWUlTWVpxenJTeVQzWW0xRjBGS1FJc0owQ0ZjZmlNUGJfM21NblFsWngtaXpteg?oc=5"
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
    "date": "2026-08-19",
    "event": "Tesla (TSLA) Stock Is Up, What You Need To Know - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOOWVEMks2YjVYSHpnTlFLaWlFOGlVSzdfT0F1aGh5NHowOWpIdVJIYVVmSUtZTmQ1MldFV2RWUTZrNDJPNjJONDVaR0ZkYlF6Z2xpT0NsX2lnaTM3VThWdDBVQnViQ1M4ajVNVmJWTmo1Wk9WNUNBVXBUUHFEZWI3RVJYVVBuVnBJV3dnVzdmemNoaUQtOGJiVzJocXVyX1pfWUJyODIxa0s?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Tesla Stock (TSLA) Opinions on Recent Sales Figures and Autonomy Progress - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPeUktY1RUOFA4MUxkMms1bzhjQ0Qtd2NSa2pSVmYtMjBDSjBlNkN3TDh4eGxnSzFselU0b3k4OUJaVWVBSkFKRllKNkxLeVZrWEdEc3ppU3V3dVFVR291TEExTWlCR0IyS1NSelF6U1JPZFpPenZSS245RTVqTWY0LXZxa1QwVEFaWFlVUW0waXNOaDFiY0lyQXAyRS1SemxsTGwwcG41cG1rT0NKN2tZ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-05",
    "event": "After Earnings, Is Tesla Stock a Buy, a Sell, or Fairly Valued? - Morningstar",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNOVdEaXFTSVM5MTB6anVqT1ZzN242dVZyeDdIc01GU2tRTzc4Vm1acTluTlctZXN4Q1lwRWpYeTl2Si0yOTdhbFBUSHBUdGNkMlBXcDM0NHlqX19wb3NqY2RPWVVHZ3BiaFh6ak9QVkdCRW1GMEQ1MFctSmJETmV5RmtUQnV2NDFaMkd1cEdlSHdGeVVqNW1tbW5HelUtTTk3WVhB?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "TSLA Stock Extends Tumble Overnight: Munster Sees Capex Blowing Past Street Estimates Next Year Too - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPRkx0eEM2aTdZcWZEeFdZRDJJVTFWWHgyWndzMTRTTlBsZ3kydXlUbDRaX3VCamRkUndoNV9YNWRvbjZSTzR5VzAxQS1uekNOX1B0RUl1TkJ4eU9UMkxrdDZVaGNKZ2k4cDdERTNMeXZzWVlESzhSZklVZWh6LVhIaWU4a1pmT3ppcHc3MHJDU2o2TWhNU3hOeUtWQ0t4dmlMS0gwc1M0V012Q2FWQkNKQVVVRQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Tesla Inc Stock (TSLA) Moved Up by 3.08% on Aug 19: Facts Behind the Movement - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxOZ0JmblpWdmZNaGlna1lsckk4ajJuOFk2czRPbV9fa2lZYk8yQ3dGSFFwQVdNcnlkdEpMUkgxRjRIN29PRXJrNDRjOEhSZDdNTGNMRU1mUmFENVBTeTh4R25aUFcyc1ZPZUNYUFdMU1d5V3Qtd2ktQlJ3a2x4R0lXUjZGd2M3N2tJZkN3?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Buy, Hold or Sell Tesla Stock Ahead of Cybercab Launch? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOQUpsU2JpQW13YkV4NEl6YUhoeWROSXBDX1hFWFRMZ0pPS3hJcF9NcEN1UXo0VDNmRDNYQnBCOWdVdUJ0MFJvQUpOWXAwN08wanBENkhUb0N6LUhwbXpHUzZIM2M0enh1Uk9fQ2w1amtWN0lCMXNsaXFybWp4NXdkMkdFZ3FkekpFbW5tRU4xenRYQWQ5?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "Tesla Wins Over Another Skeptic: JPMorgan Raises TSLA Stock Price Target By More Than 200% - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQWTBIMUV2YlFCMlkzSWQwa3JIa3YybnprSnVIUC1YekQxT2dLOHVVWFFxUmlMc0l6ZmNxTWFBR0ViOVBaaEg1LXZ3R29DOGE3WnBpRlNjeFVsbHU5Qlk2dVJxQ1NlWjVkbVQ5bzRfWFpfZ2JnNjE2cko2N0c2U2ZCRl9WeDE3ZFRrWnVFUWFmTmZfUDhrSFhWTk16UzF3MTc3dnVXT29qM0VBak4yNUVZLTl1T2thTy1CTGE0dg?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "TSLA Stock Recovers To Close Nearly 2% Higher As SpaceX IPO Debuts - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxNdllKT3F6R3RYYjJIQ1JwejV3MlVzZnZ1OGt5THEtZTRhREtBV0VxNEUzVGVlMDkyRzBxdGd0QlFBRVVOb1BteWVvX1NFUjJEeC1uQnp5eWxtbG1VQkp5bWpmTzM4eTdKQlV0T0xZVm5YdGI5bHFfQWtDNVlGVXFrZ3VhcVVOM2R5QXg2TW5ERF9GWjBwbFNCTEtiOFBoSUZQQmRFMVIwRFJlRzJONl9iNUp1dHh6SmQybkZpWA?oc=5"
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
    "event": "Tesla (TSLA) Analyst Ratings, Stock Forecast and Price Target - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAJBVV95cUxPdVdfWWhKcVVmeGZPWDFiZmVtaFpVMVk5Nk5ocnVKWXdRQUM2VWpPS19lNzdSUGRwMmw0YU9vZ1dQdWtrRGpRV001Tll4OU5UbWQ3MkFuOWdKaUVZeS1PQTRLODBTQWJkbm9GLUx1T0VPTXhrZkhaUW9xLWhOdm5ET0p6OWgzeV9wM0lwQV9uX2J2bmZ3dW5pemRhV2JfQTdyd0xrNUdRSnd2NkJLTGNjRF9kOTFlVjloVEVPNUNOd3o0TTZiU0EwZmpHSGdVcTdtUjhvWWFXdW1Ea0FVMTNUMURvLUVBSTFDZVl3NGk0NDE0T0R4Z3NqMUFYYjlhSUM5c2RUVW9UR1R2SXRiT3dGT1NCcC1PMzVsVE5lVWJTWjJZSVdY?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "TSLA Stock Slips — Investors Await Tesla’s Q2 Earnings And Semi Progress - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPbGZqanRpSnF5MFVCM0hxdHNRZks2ekt2V2pMYzNyd1JuZ1FqOExOcHIxTEExRmNGRmZMRUozMXJxZG9heFZ0WFZFZmpNVXY4a2w0NFZDajNZYTF2OWZFVUV4RDJMNW9XNlRGQ0xySVNKYzljc2J5R3lzTkZncnRma0czeWV4X200a0hiSDE0M2ZMb1FxM2lCUk41VC1UQi1nRFo3MGhiWDJoUFJOY2FMVU5kMzQ5RkoydVVIMFFWazdoLUJlRWd3eGRybjVaeFE?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "TSLA Stock Slips As Musk’s China Visit Yields No Deals; EV Firm Dismisses Model Y Price Hike Rumors - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxOLTJkd2s2am5VbWhscERBMldGT3V1eFdVX0ZOQ25xeldGdGl4MmRRQm4yU09ncXkzbTIzQUdxdF9ZcExPcEJHZGN3a3lXNDUzUktuSkU0WExhQTRYTXk1amZlQVp3X09HcnVXLVZ6eThTN09acFhPRFFLNnIxbGFnZEh0VFNGRlFsUDdfWlY3TXlSb1Npa183WmxEeUs5WHNXb2JkVWRiZ1NmZnVaalJmNTFJRE5qRkIybXEwcEVOOFRSZENZME9LTUNQcG1lSWNVeXNRMGFEVU0za2JqUy1SdlVsWWZmakhYVHoteWxBQ1ZkZw?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "TSLA Stock Rallies As Q1 Earnings Drive Past Wall Street Estimates On Higher Deliveries, Lower Costs - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxQUmRMRWptOGRndnljdlFZaHJWQVlOZmNvVzl5OFo1cVRzbnp5eXVHeTg0RFZDaFotbi0xYmo4ZHBjQkMxdGpLSVZoNW1xemtJNGlvbzVqR01URTlZcDhRaEdFa0E1ZjhKSkVocS1naFo0cEVWMEwzM3FHb2FXMjAwYldyUGFzSVAtcTEyVVd4akZOVklHWkszVTRTM3BqMXJPS0FTNlV4eVdiQTZoNWZiWVM0OGpxSE1KWUxGckxOUUFrZGVHMTZ3ZQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-17",
    "event": "TSLA Stock Breaks Losing Streak: Fund Manager Says Autonomy Beats Rich Valuation - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxPMzdOTXQ1SEJfMnVDYlplYjBHQV9SeUQ5UjFnS3BRWDhSbUNzZWhiQlVtWE5WVm9OWlNxdWlsUzk2LXh5ajhXblU1aHpFdG5RRUZ6LThsWHd1Wmc0MmNUQzdxTFJ2cVhoR01scFE2VHNabzNGQ09fTm9SMmFfWExjTFM2cnJTMHJ6ZzUtNXh3SW42dGpwbU1xeXZuMDk0VEItLWFUWHJTYU9VWUNFbl9yb1NRS0xsNWlNcVFNaDh6QzVPOFEzWGIwaThtTVgzVXgzTVItcTBfS0NUNnM?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "TSLA Stock Jumps After Strong China EV Sales In April Bucks Q1’s Global Downturn Trend - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxOcl9MaktMQ0xHb2MzMUh1RERkODNaaHI0UVRscVE0dmJ2Q0lHay1raHhDM29fNmtkekRlU1doekhJM0NLakdNMmV3dkZaanlGN193QnQyZlNEbGJXUHFrQUdlOEhHdVFxdVRQa1h2c09sNDdENGM0Y1dmT282TW1RX3NDOWNjT0JBbzJ1aVVzbWVIUmtxZGhuMUMwMlhxaUZ3bWRnY05qRE5PbnBRdk10NkVTQ01OczJ5a3RpcDM3MmhsSnRZMVlyNHE0YThXWXFWc2p0M25Dc1NhZ3hSRlVEVzRR?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-19",
    "event": "Avation Targets 14% Fleet Growth Through 2030 as Aircraft Supply Tightens",
    "type": "NEWS",
    "remark": "News via MarketBeat — Avation (LON:AVAP) outlined plans to expand its aircraft leasing fleet through the end of the decade, supported by an ex...",
    "url": "https://www.marketbeat.com/instant-alerts/avation-targets-14-fleet-growth-through-2030-as-aircraft-supply-tightens-2026-08-19/?utm_source=yahoofinance&utm_medium=yahoofinance"
  },
  {
    "stock": "BA",
    "date": "2026-08-19",
    "event": "A $1.5 Billion Deal: Why Boeing and Lockheed Stocks Are in Focus",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Boeing and Lockheed's ULA Expands Debt Deal to $1.5 Billion...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/1-5-billion-deal-why-121756818.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-19",
    "event": "Thomas Gnau: Beavercreek firm captures $39M Navy contract, Wright-Patt awards Boeing $75M Air Force One parts contract",
    "type": "NEWS",
    "remark": "News via Journal-News, Hamilton, Ohio — A Beavercreek firm won a $39.6 million U.S. Navy contract to deliver F-18 communication systems, and a key mission at Wr...",
    "url": "https://www.springfieldnewssun.com/local/beavercreek-firm-captures-39m-navy-contract-wright-patt-awards-boeing-75m-air-force-one-parts/article_9f426961-1511-5602-8744-bc5a2df3e641.html"
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
    "event": "Boeing-Lockheed’s ULA triples bond sale to $1.5 billion - report",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- United Launch Alliance has completed a $1.5 billion private bond offering, three times larger than the ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/boeing-lockheed-ula-triples-bond-185553491.html"
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
    "event": "RTX Stock Gets a Radar Lock on a $23B Navy Win",
    "type": "NEWS",
    "remark": "News via MarketBeat — RTX Corporation secured a $22.9 billion Navy Tomahawk contract and topped Q2 2026 earnings estimates, prompting raised f...",
    "url": "https://www.marketbeat.com/articles/rtx-stock-gets-a-radar-lock-on-a-23b-navy-win/?utm_source=yahoofinance&utm_medium=yahoofinance"
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
    "date": "2026-08-19",
    "event": "Innodata Targets Government AI Evaluation: How Large Is the Runway?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/innodata-targets-government-ai-evaluation-170400210.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-19",
    "event": "Form 8.3",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/options/articles/form-8-3-123900229.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-19",
    "event": "Herc Holdings Inc. Announces Election of Erik Olsson to its Board of Directors",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/herc-holdings-inc-announces-election-121500614.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-19",
    "event": "Sidus Space (SIDU) Stock Looks Fairly Valued As Q2 Results Test Its Recovery",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/sidus-space-sidu-stock-looks-110920943.html?.tsrc=rss"
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
    "date": "2026-07-24",
    "event": "Boeing (BA) Stock May Be Fully Priced Following Its 12% Slide - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxQZUpnM2d4Zy1Ob2RSN044SkxBTW1YRXBOa2puSlhOaC1DSTJRQndVelZXcDF3SHM4NVpYd2pTUFlJMEJOa0JvQWRTcmd2Y055T3FpZVd5eXNjcEJoZDFHa09wTTZ6bDc3V3h6SDZQSjU5VnJ4R3VfR1d3N3MybFp3eWk2UmR4OVFCMzNhcGtCcUxtLTNK?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "Fund Update: New $27.4M $BA stock position opened by Rakuten Investment Management, Inc. - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOVnh1T0h3eERpZ2l5STRXaV9NYS1XcWlEalpoNThINjJVQmM1Y2ZJX0dVakRuMlhqWDdxS09IWWtvTWdXcTUwS2paT2lYR3N3czFnRE90UnpRa1N1WDg5VjRpTFV4YWJqVmVuSFBzdUlaa3RGVlZpbHF5ajVMVjVmTTA2REYtZjVDWnVVQjFIWVBHSEo4Vjl4UzZEWEYxY2hDOTdWSC01OU41ZmtJVUNlc3o4Sm5EclVlci16QmRQWTdzaWlseGN3?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "BA Stock Edges Higher After Hours — Boeing’s 737 MAX 7 Reportedly Nears Key FAA Milestone After Long Delays - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxPOThTek1ib1U0bVY1Z1E1WDZMM1E3NFE3Mnozc3pEV3JoNFdfdEJ5bkhOc0RCY3o3Z0FfQ1NpMzdkUTlGVzNtR1h2cGRsMnk1dGZMeFI2dVFLU1pReHcwYWtNQ0hUZ0w3Z0lXZmZjUFZyRDVqeE1XVlo4NUdSQVRQcXpodVFYbjBGNUY2eGZtVVVlNjUxemhSSVE0YTNSekFTR0FPNEJ4M25vZWlGNWV2NE9xY0k4ZDZRQnlhdmpkellGZzdNdGFVeXVwX0F2c1NnZy14ZXdUVmlma2RkbGpB?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "Boeing Stock: A $715 Billion Backlog Faces a New Netflix Trust Test - TechStock²",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxOUG9MYVRaQUctN2RXSG15OHZzN1o2X2dhUXJSNVJ1Xy1PNGpra1FOc1FNZGhRaTlHUHdYcWd4dTNCMDRIcGRieTFuUExfMjR3TElxc1RiTC1iM2NsMWdMYzlFZ19vUTQxRUJvVEROeTRram1scTZCZWFSUVdlQlUwdVZwYnh2ZkdVbjhROFUtbw?oc=5"
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
    "event": "Unpacking Q2 Earnings: Boeing (NYSE:BA) In The Context Of Other Aerospace Stocks - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxPNXJId1N3TXdJb0tVQTJoUTlHRjJwcndoQWVBZFU2dEZWMFJISHN1dFhtZnhka2RrejByOFJ0dDV1d2RCQzJaVExRZUVLM2d3cHNrVWV3eVlnQ0g3RjM1eFVVWXJjbmhEZTVEcUpRUUg1VnRZcWdxa29Ba096V2sxblI3QUJ1TGRJVlRvNkx0djcyUkVXSEV0cS1xbWdGdW9SdW9LdHVDUXNkQ0xKZ0hveXNUVk9kRXAwcUNvR241SzdjTDI5QTJFWDhrdw?oc=5"
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
    "date": "2026-08-18",
    "event": "Did FAA Approval of the 737-7 Just Shift Boeing's (BA) Backlog Conversion Outlook? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQM1J6OG1Kc1BQaHRlQ01GRXNIQWdIQjI5eFM4RWt5UWJhT3NjVDQ2WVQ3dERmREllSHk0VUVib0lQMTdLX2FCZ2FXUHdHRlliSjNJNGdncURoSXBuSlg5aVNSWnV3YnVFeUhMWmFZZjFtUnBxUEotWFdqU3BtWmEtdVBYT29keUk3MC1kTGdsaHI2Y2ZDR0lWWlBpeERrcWNDVzhaZWU2WDFTS2Z3dDNrSzdNNWpiVi1LNXlFQW5YTWROYUnSAcgBQVVfeXFMT2FMVGYtNVFGR25vbVl3WXNwcm95aHZkNWpKSGhoc2RtRUNVWk52YWthSFk3WUttRGJDbTEwcDV2b3E3Q0hjZXp5X1RGdGVJLXI2TENuc29MS19Tb1Z6djI4WC1KV2lEcDBhcnlCZktoS3ktUnhWbXFTeW5WRmRJRVNZcDJWX0lWM3dzZzU3c1N4NnhyTXhlSDdGQkpsOWVhNHhuaTR5OEYzcm5ZTE9WVHI4M294ZFh6c1hpZkgtUTI0aWFyZGt3U1k?oc=5"
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
    "date": "2026-08-17",
    "event": "Boeing (Dinari Tokenized Stock) - BA - Stock Price & News - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiTkFVX3lxTE5kUXYxbWxzVlc4ODhCeUVoVmhWWTM3dlJIVkpKcFo3XzZzNFBvZTY2djNjbklhdS1NLXN3amVjYWNIbVNSR0FzbG5JSml3QQ?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "BA Stock: Boeing Secures $2B Satellite Contract From Department Of War - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQTmU5NjJRNUFRN1dOY0RBX05XcFFKVnY2SFhVZFVBWmNJbmg0aVlrSUU5bDZjZFRrZXV2RmYtM3NmVnFNUU9oMFRXMEgyaXFxUFR3aTlPWU0wRmViSDhLeUJDS1prN0FkOE90Z25LVmhVTDhNbmVNS1lMQm5LSmpKcGhBVnliN25xbE43RENDY0pqc19uNUNlX3JMR2YxaU9nSGhvc2VxNEhnc2FYdEluMi1JYjdpUGxRMnpTbm13UW5yV2JSQUhoRnpCN2ZwemM?oc=5"
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
    "date": "2026-08-07",
    "event": "Boeing (BA) Stock Could Be 41% Undervalued As MAX 7 Wins Certification - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNRU91dXZHcVE3bDA1U1Z1bzh0SkhpSTRBOXBJS3Bhd21NWXJpTmNSSHlKRXVwSWlTa2xzdVYwdGo0ekpHbjEtdGtQcW5NaXdtR19KN1h0S3FDU3psU1QzelYzTGRnbWZqY3BqeFVEbkktczVRVDEyUm16NmFQM29YS1BjdkFseUJXYjhCYTF5Y29CTmJTNEVFbkp6Y3pEbEJocl9ZSy1NdVJONkJEa0h4NWtrUlFHdUQ5SVRDYm44dGZRRnAy0gHKAUFVX3lxTE9Mdjg1UHhUU2ZJV1ZQTkc4VUFmX3FvX3B0dWtSdjQ1SWxSOW1XX3NPRDhHWnF0cl9jcDlEOXNocjJ6NG8tT3BKRnZ1TnpQMUhEcFBSblZkeV9CbWVuWlNhTkdmVjFNNTNWZktqaks4R1huRVJXU3hCeGV0ZXYybDJqWktpTW9PRFVPWGFOSTNvcENta1dHanhRQ0VVV1MyNkE0MV9qYzFsNml3RzUtOXhSQUZMVjVnRDU1UmxnR0k1bVd3VUxleW53RGc?oc=5"
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
    "date": "2026-08-03",
    "event": "BA Stock Jumps 7% After Rare Double Upgrade — FAA's Approval Of Boeing’s 737 MAX 7 Adds To Bullish Momentum - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQZEVHbmV1NWUyQzZIdTMxbVRqQkpFS0llMHRmOHhxMjhBWDktelBkQll2bXNtNVE0WmthZ0ozZ0RjOG54alpRb1JDODYyVUI3VUlYQUkzelQ5ejlkSVZmU21yVDlodGZ5ZDcxVWhVMUVBcTVMQnYyT0x2UG1TRE5XQUlEMFdkVEpzM0lzQTRTSQ?oc=5"
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
    "date": "2026-08-12",
    "event": "Here's What the Boeing-Archer Aviation Deal Means for BA Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPSEphYkNWam5rVVplVkhnM0ZJcVhjREFpQjg2OGJFaFo2VWNYUmIzOV9vaDlKcFpqVjlyNEpMb2FzTEQ5Nk1YVkJhS2V1d2JiZFM1NVFyaDkxT192b2U3eGx4WC1Pblk3cFVNa2ZUc1I0Q0pfNDdSalp5dTlkRjlSb0xZbG5hWkFOUXNQUzZnVmFFYXdqRGZWSVJDaGtwU3M?oc=5"
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
    "date": "2026-07-28",
    "event": "BA Stock Climbs After Boeing CEO Says Production Is At 'Levels Not Seen Since 2018,' CFO Calls $10B Free Cash Flow 'Very Attainable' - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQdFdDVGRpaHVYSVoxY1lHY09QSFZMcmxBZjZTV0NyWm5SbU1EeklBQmZiMVlPV2RIV2xsQmRfNXpiYnpYWThlT1VYSWt2eXJpWGdreHZESXhUQ1lEc0RwVm4xZmFpR09nV0hNelFmOUsxUVBiaThJRTlOTTV6YWdKLVJYWnE1THJFampHc0puN1VHS1p5eUE?oc=5"
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
    "date": "2026-08-13",
    "event": "Boeing Stock Rises After Argus Upgrade Highlights Production Ramp and Positive Cash Flow Outlook - TIKR.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxPR0NLOG9fd3lZbHhMN3MwdE1aTjJxelRQNkw4b3Q0RkZWRjRmaTctY3VHMGsxdC1Dek0ycEJUdUZEVDlNeXJKUWEwNlpocVdDQnNsNTJ0UzdnZGUxQUZLQzhKdjVNck9DR1cwWXBmbV9jNGJsamNfRVhmZjZEVWdqa1RVME9sUHZlaHU1T1l0bUM?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-16",
    "event": "Boeing (BA) After 737 7 Approval And Tech Deal Looks Pricey To Some - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQekdSUTNPcjI4RkFmQ2Q4WU9uaHdaWFpjcEkzdE9FUjFIbWNZN1hXQTBVeU1RX1dXNFdyZk9Rd2V1MFEtZFAyQXpjWEtIYjNLMU5WNUtZMUxYVGRRaEZ3aTVPcUZwYkpoM2VGVHhZNTFpQTc5X1Iyb3JvZjdTS2FMenNZQ2IxeFk1ZDNnekY1bjQ0NTFVb09tdUkzODNTUzVGSVJPVGRZbHgzb21ldXlxUWhfUDRTLUcyZlF3QlBNWW1WMUgz0gHKAUFVX3lxTE54U1U1c1R6eVg0RV9SRTdYSE1rODBYSllBdUpVRzN0M19sLVlYVTluMmVrTl9VTG1aTXFCNVlqRU0tYktYQXVZNnA0em9PcTA4SkxVWFh5aE5TVENkeS1OM0l3VEtZVUZjMVJBMmd3X05OWDYzWHNoeExPNkd1SV9iZEgzNmNvNDdSdnNVT0h0ZVVUbzNIWTE5ZzNoUU5aVDYySGlsZmdxMVNUbEEwMDJ3M3gxSTI2cDJGeS03cGdMdnJ5ckZpYU9KOFE?oc=5"
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
    "date": "2026-08-06",
    "event": "Fund Update: New $65.1M $BA stock position opened by IMC-Chicago, LLC - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxORlFQdl84dzl6ZkQySHdmT2dxbVEwT2ZmZlBpOWZ3TUg5bFJwZ1RiSnNlQlVYOFdsams3RnNFYVhvdk9JR0VOVHdqMGhNUU1Fd3ZKTk9COU1BOEpnUzh2M0R1bHRJNnFFQjRKV1pDUWw0ZVdla0FRc1JvaURYRnBSVHA4YzJfcnpzVmhTanJzVGdvX3c4VUtzaFQydXBTRU5EM25VUXVIUGxzd0FodGtB?oc=5"
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
    "date": "2026-08-19",
    "event": "There's 'light at the end of the tunnel' for tech stocks amid bond rout: Eric Jackson",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — As bond yields (^TYX, ^TNX, ^FVX) continue to surge ahead, EMJ Capital founder and president Eric Jackson and Yahoo Fina...",
    "url": "https://finance.yahoo.com/video/theres-light-end-tunnel-tech-140846636.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Marvell Technology (MRVL) Stock Trades Up, Here Is Why",
    "type": "NEWS",
    "remark": "News via StockStory — Shares of networking chips designer Marvell Technology (NASDAQ: MRVL) jumped 8.2% in the afternoon session after it disc...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/marvell-technology-mrvl-stock-trades-221402545.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Why Broadcom (AVGO) Stock Is Trading Lower Today",
    "type": "NEWS",
    "remark": "News via StockStory — Shares of fabless chip and software maker Broadcom (NASDAQ:AVGO) fell 3.9% in the afternoon session after its competitor...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-broadcom-avgo-stock-trading-220602333.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Spirit Flight Attendants Fight Google’s Data Bid for AI",
    "type": "NEWS",
    "remark": "News via The Wall Street Journal — The flight attendants want assurance that their confidential information will be removed from the sale of the defunct ai...",
    "url": "https://www.wsj.com/pro/bankruptcy/spirit-flight-attendants-fight-googles-data-bid-for-ai-e939e049?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Marvell Technology (MRVL) Expands Google AI Partnership: What Investors Need to Know",
    "type": "NEWS",
    "remark": "News via Insider Monkey — Marvell Technology, Inc. (NASDAQ:MRVL) has expanded its partnership with Google to develop custom chips for AI infrastru...",
    "url": "https://finance.yahoo.com/technology/ai/articles/marvell-technology-mrvl-expands-google-211507897.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Moderna, Merck, Micron, Marvell, Estée Lauder, Honeywell Aerospace, and More Stocks That Explain Today’s Market",
    "type": "NEWS",
    "remark": "News via Barrons.com — Moderna soars and Merck advances. Micron trades lower while Marvell surges after the company issues a warrant to Google ...",
    "url": "https://www.barrons.com/articles/stock-movers-882bea6d?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-18",
    "event": "Why tech stock bulls may not shake this AI problem",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/article/why-tech-stock-bulls-may-not-shake-this-ai-problem-132840379.html?.tsrc=rss"
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
    "date": "2026-08-19",
    "event": "California billionaires pour $40 million into blocking wealth tax",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/california-billionaires-pour-40-million-120000511.html?.tsrc=rss"
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
    "date": "2026-08-18",
    "event": "OpenAI releases new ChatGPT for Teens with parental controls, guardrails",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/openai-releases-chatgpt-teens-parental-195520710.html?.tsrc=rss"
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
    "date": "2026-08-19",
    "event": "Dow Jones Tech Titan Alphabet Offers New Buy Point, But These Key Flaws Remain - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNUWhBUUh5SEE3RUYxSlBjbjYwU1hJaVQtRnpBZGI0M0lPblgyUDdhM2lQWjRnMWs1Sk43eGRSRERZTGxrWW5ZZEJSTXFLM2UxYXViMmFaV1NWZWlqeE04YmRxN29xXzJiM20xTXQzbjRpMDFLM2NhRUhTN0RKN1M4c29MdjB1dmtEdkFuT0d2LTVsS2NKWlVDOGpsdzVhWmJjQ1RCMDlMclQ2ek5ZVC15N1ROTnVjUnc?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Berkshire Just Made a Huge Alphabet Bet—Should You Follow? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQNjl0N2VQa2NyaUk1UjY3MVN4THByOTBHRkZNQy1UVUJHTEgtaEV1cjNUNGxUVjJTZ25rOXA4VUktX1lyVW1QeUNhSTBuSm9qTFoyY0c4S0VGS0c4clRBUUU1QWQxbGg0cFQ3QXVWT2wwX0Q0UUZEQ2tidFAyUUhpcWl4TVo3VHJCbmllbThOOTlORklEeXZrNA?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Marvell Stock (MRVL) Soars 14% on $12B Google Warrant, Custom Chip Deal - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOTlRiUENDR2tVSDMxaWlDVzBseW51ZHJ5ZGY5QUtzS0dVRXZLeUV6RVNwWkJBNzhIcEZKNmFUUG9vTjhhVm10bWpCcllBRi1nSEc4enE5T1VISUVvSHFuWXNjODhYcUxPWXVSbmk5TnpUV2h1N2k0TjdMNHdXdXRNNzU0ZDlyZEo5TmNOTld0dFVMQ1JDdjBjU0RVMjhWdTQ?oc=5"
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
    "date": "2026-08-18",
    "event": "Zacks Investment Ideas feature highlights: NVDA, GOOGL, AMZN, INTC and others - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxOTnBhc0RBRzlIakZLUDlBZXZObUg4X0RsazJvYmxYd0hrM01wVFZoQzZRaFdoYUtNamNPU29BOU5RVnZwMi1EaUxFWEgwWF9UVWVicDQ3SURZX1NocFpGT29YR1RHMko1ZVM4bDJLQmNqbDNaUzBPTjV3Qk01Q2M2VUVla1diS1FLTFhrYzNmVmh5bzY0Q3JYY3FHRGdpa2hIN045LVJhUmwydw?oc=5"
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
    "date": "2026-08-14",
    "event": "GOOGL Stock Alert: Google Unleashes Its Biggest Weapon Against Apple - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPaEhJczh2aVFwMmhQYlZoTkVCWi1JRGNudU1GQ3lBVkxreXF6RVhRcWJ5YmV6OEhCSlhncnc5Zjl0UmcwSkoycmZuRGt5ZWdULVlzQUpNMkN1TVY0aE1xSWFWSUs5dGRZQkxwZjJrOHE3UDNna3pKWGpvMzUxQlk3OHF5TldmYWtiWk43ZEgwVnB6YndpT19WOVRxUmdaMTl6RVdIMmNqa1Q2SVpaUUpLWA?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "GOOGL Stock Rises Overnight: Cathie Wood's ARK Buys $96M While Trimming AMD, BIDU Stakes - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOa3lUWENYUXhLcE5FTVJpYWp3QVpRVDZQcGVrQ2RQX2JuLUdES0IxV0NQYjdrTkJpaFZRd2xUU1Qtb1RVZTlSVU1xQmVrWjdZSlVFSTZyZlliZmZzREhYSmRObmdRd2stenlLWERlckl1SHFzbE5fVWZjRjZhb2gzYzlHYXhmM01FeE1XVGI2aFk5cnpIWkZNMGI1bTVWcHRGbFlOMmRydzhNYlZpVkVkdGRKQjFheWlSX0NPRE9oUkhzS3h6X2NJOWQ1V19RaXBmZC04X254WVlUcXlKb3dULUhmbm8?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Alphabet (GOOGL) Stock May Be 23% Undervalued Following $25b AI Bond Raise - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQNmZxbmpqT3JfS2s2MGxJWDZ1elhMdzNTU3hZUWpxSzJ5cFgtYnQzUUJSMGNYRjBVSnlHb3NKanF6dFlLdDhZUXdERXVjU0g2VUxsYUFUWHlxMWYtNzByTzVxUkxQY2RheFhiNUE1NkVKYi1fcEY0U2s2NHNiQlRpc0FXazNwWU1fYzlobDA4MFNudEZjbDlpVmlQVkJiZlpsMVdJQnhYeGVld3BMZFVibUhiM2JhVmZWM01yem9Ga1RMZ9IBxwFBVV95cUxQWWs1d0lfTUNuTk9UR01WWkl3ZFlwM1FEbWNJaWpwbXlMeUYzc0EtckVwLWRrNWptNmNRUklZV3MxcDM5U3pXdVVKcC1vLTZHUzFISXhoYnVpMEtBSnlZYW1meERleHFIY2xfSmlwM01RZzdhYkNEQ0ZyZTExWXhRSkZabXNIdHJqM0pvRUFlcGYxWTB5U2ppMnlvSjVKWFgySTR6N0k0enRwTWxmQjJoQTBfRjc5Mjk2SXB2dFJ5bkQweng0OU5V?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Is Google Stock Still The Cash Machine You Bought? - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxNNDVJNnhPU0dQbmtuNWl1S3l4NWRYRHZzVkxZNTZZYUl2M25aZTFiamdOWE5UZHB0VUg3NHFxMnI4WUk3RXlwX3U2NXRJMElBcjdfT05STHZiSkhjdnBha1hCQXYwVjBxRnp0VVl2T0F3S29nd21fNTcydEk1UWRxeTk3aHlBaHdrVFNDcU5OS2VhV1lZWVFSSTFTRE1Fb2QtWmRZSWtnSWJwZ3prSl9PVw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Marvell’s stock pops on news of Google chip deal — and Broadcom’s falls - MarketWatch",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPcFZjUnVYcG1EbFpjV1c5b3FPajJtZ0hCLUJmdTdubnJ0VVRQR0VNYi1Mek9kdXhVS3ZsdHA0Y3NWbkhWcmRHRXBVZ2FYVTJCZlFmMVdsLWl2VXoxRGs2Zi1WblZFSC1Ga3FIV1M4Z0pTT29JaHRoQVdiQks4TXE4TG96VFh0ZEJZU2V3Qy1oYXlIaGM3bnRRNF9hRHlCREdDOGxNcGRRcjlhN2lteFNrZA?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Marvell Stock Jumps On Google Deal, Broadcom Slides - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPRW9NV01zYlNGMkFaSU9aVnhrSE9lSkgydlk4bWJSWDlnWXhETXppdnF5amd5RnU4SHhnZDJKMW9TZmNHQzFyYzZ6OVpYaExodXNxOTloZk9kcExteVp3bXUwT0tNLVdDRjd4LVNyb1d0SDhBSTRlTHpiYmR4b0hUTjJWV1IxTS1yZks5eVpQWVJVZU9vbnBVNw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Marvell's stock pops 10% on AI chip deal that lets Google buy up to $12.2 billion in shares - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMibEFVX3lxTE01ZjN6RG5qZ2hsZU5Db1FlOVdDNWJsX2dpVHVlMnAwdEpIa1BaV21fZ290eTNhVUdqOEVqSkdlRGZCclRtellnd05GQm9JWlpKRC11X1p6Y21CLUdyUWUwaThFUDFwQ01TWmNDUdIBckFVX3lxTE1mNEJ4WHBveW1zdm5DeGU2X3RTcndUbDdfNW5ZcjVlX1g0dGZERE5YdVJjbG9ZVHZnaDhzSklJcnRkb08wd1Bsd1pLeHZCd0xfbkx2dHJkaXJNVHZyaUZhMWw2V1hZVThYclhzdHJVVVh6Zw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Alphabet Stock: A Berkshire Hathaway-Style Compounder Hiding In Plain Sight (NASDAQ:GOOG) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOT2NpRFZ4V251OHEwT1ZKNHljSG56VzhRa3N5UEt5bS01ZHhKUXZ0WlZ4bW1uMU5teUpQNFpPdktuZDdQOHBHVGVDaVBUb0dWME9BUXlFc3dLcy03NEVhbDZMUHlBcHNyNjBxOXZMdFo1NUJkS2ltODMxSmlicmJLbVdHbFZtZVpoSmRvaHpuZVU2Mi02cC1yUWd5NHZlSUt1WVBxd0lrcW5QNHFqRWNMQ043QkFNQQ?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Marvell Gives Client Google Right to Buy $12.2 Billion Stock - Bloomberg",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNWUthaHBDWVRmVFNLMTQwS1RyYnlmelc4T3hNSWp0cnVKemhpd19UcklodEIyMXA1ZjRlLXlnZ3cybzJleVJYU2NSMUFzTDloc0Fkc0NSRjVSZ0g3X2ZxLUdkU0FaRVVEU3luRENwSGhjc0dqZEF0VlZZTkpvRGhIaXVxdDJYR0NOVUNpYk5MMjhTOWRRV0otbHd4OEticDI5c2hCb2FGalNCWHhFSzkwMlZBNA?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Marvell gives Google option to buy $12.2 billion stake in custom AI chip deal - Reuters",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQM25qTEk3MUd3ajdfTUxKdHdZRFBJLVpWT0ZKemNURzlTVUQ5SUNtVGF3WTF0N0NfRndKaENWdDRqVVBXSmZRS0xiY24wTFEyc1I3NWI5eU1PVDJxZ1lFb0Y1VVEzMDZmb2k2dkV3WmxhNk1LMG5HN3ItRmRwQ3lvQ2pjRU5JRDN3MXJpLWo5aGlJR3hyVG5EdkswS3k2RlhzMXU2cGctR1EzOE50Zk1PXw?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Marvell stock surges after chipmaker hands Google a $12.2 billion stake option in new AI chip deal - qz.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMicEFVX3lxTFBMb0NvVEtkcVQ5LXpWTUl4QUNVR3dqdl9UaU9SUHNPckhIdzhGLWN2d2k5QjI0dnRXMjdESU9zd2R0elMyeS1fSXR0U3FRRDQxSmd4N3h1VWVyMmtBS2xZUFN3b0NSb2Zva05VemwtUWo?oc=5"
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
    "date": "2026-08-19",
    "event": "Alphabet Inc. $GOOGL Shares Acquired by Generali Investments Management Co LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxOTU5UQmdPQlJibldVNHd5MTlNaDI1Wnh6dFJTd0ZiaXJZYm9oLXBfNVZIZmVOUDJZY1VLTUNWZ2lvV2c3aDFhNEVlMEZ1UE8tWnVrZ2p6QTJUSFlOTkN1WEljemxwZHlrZkFVSHNtd0pIT1NDWXZtcnRLMXpSNTBEd2psc2xkTml2anFqRGFfbmpHYUFoNDg2MHpkRzNRNndSeXlhalJMRzZIcGRQSm5wTFFVSXRDT3R6LWRWR0tHNU1aQ1Awc0ZVYUREOVFTUkQyUGdZ?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "GOOGL Stock Dips Premarket After Breakout Week: Analyst Says Google Developing Next-Gen AI Chip With MediaTek - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigwJBVV95cUxPVW9xZ1RSVnlmM1R6bFVma0lBZzd2bmNObFVsWnhmQnVaNHdEN1FBM2ZZX0JtakFtWEpHazhuUU5UX0FienlVRi1acHVYd2l6U05UQlVkV3ZDZ3NhOG1aekxGTnkxdkxINlJJaEExb1FvMjVKTjZlYnFxdUhyWTIzQWtxSHowYkloYXlESnpEY2hYZEtWMENoVXFVVFpZWlZTaWRudDI0V0pDQURRWFlUcW9OcTNVdE1hYVJGbDh0U3hqUFl0ZlNMbWhqb2RLOGc4QkJsazZsYjV5QmdlM2ZMU3ZVVFF0VTloMDhndHNLMkRpVWV4U2dONDY3eXV1S1dUbnpZ?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Alphabet Stock Surged When Its AI Spending Found Customers - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOdnp1aWNFWG44aVVkazJPR1JJY2lBcTJrTmFENWxFSWxCNWRULTRteFdfcDhOM1YySjdQVGhMMExobHVVa21yRUo3enFBLVJMUVRiVXV0TFVJM3o3S00yNDFhNXp0eXRzRmJDb1I2YW1LdFpOWXNuQzN3c2lvYXlTSWZidVlCNmR0QjBkT1lnV0xXdjdiRjdObzRXNGFhWnNHMzRKbWVuTnlKVlVJb0N3VV82MHVwZlltc1pONg?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Alphabet Inc. $GOOGL Shares Purchased by Nolet Wealth Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQeW1FYTd3aGh0czgzYUM2VzMzRC1ZdG95VktVbEZ0bDZvenVBdFZqbVZXUi1kOFZ1M3VLcjlaUE5YNEhyalk5UGFPR2paeHRqQnlFdVEwRVk0cjFVT093Y1VoU0hIVG1jS2JrUUpYNnoyMjg5aENmOWJ6U3BYNXA3d2VQYVZIZ1o4R1hKT1NQTVdpdU5MVHg4VHRwdEtwbi1vaFEtMUxqLVFjYVdnWVhpOWNVakJWNFNYdTZYSTJuUDcxWkpTVWc?oc=5"
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
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "Why Workday (WDAY) Stock Is Trading Up Today",
    "type": "NEWS",
    "remark": "News via StockStory — Shares of enterprise software company Workday (NASDAQ:WDAY) jumped 4.5% in the afternoon session after Bank of America s...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-workday-wday-stock-trading-215802724.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "Which Big Bank Stock Has Dominated in 2026: Bank of America, Wells Fargo, or Bank of New York Mellon Corp.?",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Three big bank names have taken three wildly different paths through 2026, and the gap between the winner and the loser ...",
    "url": "https://247wallst.com/investing/2026/08/19/which-big-bank-stock-has-dominated-in-2026-bank-of-america-wells-fargo-or-bank-of-new-york-mellon-corp/"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "Software Stocks Are Bouncing Back From AI Fears. BofA Sees More Gains Ahead.",
    "type": "NEWS",
    "remark": "News via Barrons.com — Investors have become all too familiar with the fact that the software sector is under pressure as Wall Street worries a...",
    "url": "https://www.barrons.com/articles/software-stocks-workday-figma-gitlab-6db115f6?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "HP earnings preview: BofA expects PC share gains but margin trough ahead",
    "type": "NEWS",
    "remark": "News via Proactive — HP Inc (NYSE:HPQ) is expected to hold its full-year guidance steady when it reports fiscal third-quarter results on Augu...",
    "url": "https://www.proactiveinvestors.com/companies/news/1097292/hp-earnings-preview-bofa-expects-pc-share-gains-but-margin-trough-ahead-1097292.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "BofA makes bold call on Cisco stock after earnings",
    "type": "NEWS",
    "remark": "News via TheStreet — Bank of America sees a stronger setup for Cisco after earnings, but one issue could determine whether the stock can deli...",
    "url": "https://www.thestreet.com/investing/stocks/bofa-reiterates-buy-150-target-cisco-stock-after-earnings"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "CrowdStrike Stock Likely To Swing On Earnings. This Trade Brings Returns From Those Moves.",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — For CrowdStrike stock, this options trade centering on selling a put could generate around $235 in option premium....",
    "url": "https://www.investors.com/research/options/crowdstrike-stock-crwd-cybersecurity-tech-options-market-trade-earnings-volatility/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "Intel and AMD Fall 4%, NVIDIA Unchanged as Chip Selloff Defies Bond Yield Relief",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Chip stocks are selling off hard even as bond yields fall and the broader market turns green, yet one name in the sector...",
    "url": "https://247wallst.com/investing/2026/08/19/intel-and-amd-fall-4-nvidia-unchanged-as-chip-selloff-defies-bond-yield-relief/"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "Nvidia Trades At 50% Discount",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Bank of America sees Nvidia shares trading at a steep discount to where they should be, but the bold price target rests ...",
    "url": "https://247wallst.com/investing/2026/08/19/nvidia-trades-at-50-discount/"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "Bain Capital Specialty Finance (BCSF) Stock Fair Value Falls As Analysts Cut Outlook",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — The fair value estimate for Bain Capital Specialty Finance has shifted lower, moving from US$13.83 to US$12.67 as part o...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bain-capital-specialty-finance-bcsf-120901925.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "Home Lenders Enhance Digital Impact with Accelerated Closing and Funding, Relationship Value-Adds and Visual Consumer-Education Content",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/real-estate/articles/home-lenders-enhance-digital-impact-120100811.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "BofA Continues to Boost Tech Banking Ranks With New Hires",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/bofa-continues-boost-tech-banking-113100937.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Bank of America Has a Stark Warning on AI Spending",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/bank-america-stark-warning-ai-210907473.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "World's second-largest bank boosts XRP holdings",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/crypto/markets/worlds-second-largest-bank-boosts-xrp-holdings?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "With the national debt nearing $40 trillion, Bank of America has a warning for bond investors",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/economy/policy/articles/national-debt-nearing-40-trillion-191211352.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "BofA Sends Bullish Message For Taiwan Semiconductor Stock Fans",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/bofa-sends-bullish-message-taiwan-204702561.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-18",
    "event": "Bank of America Says $5,000 Gold Is Within Reach",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/commodities/articles/bank-america-says-5-000-192431060.html?.tsrc=rss"
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
    "date": "2026-08-19",
    "event": "Bank of America Corporation $BAC Stock Holdings Lifted by Sunpointe LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQb014ck9wRjBwTkhPS2t1c3JWWXpSVHp2anBLMTJMNjRoLWlCR3BPUVJ1Z0g1S3ZtQTJUd1FlOFhNVFc0ZkJDVWNKeDEtSEszTDZEdlFFMnNmamNVeC13OTd5dXdLS2VJb2F5Vks5T0pKWnF5Rkp5cEVzZU1BTGZNWHNjMzFOQUw3Ri1vQk5zQ0ZvUnE3RDNSdU9pdHVSX256RG9ucmZzY0IyXzFsTndLV0FfMmZLbnBKU1pwQ1M0SVVHWEZLZWV6MXRxRQ?oc=5"
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
    "date": "2026-08-19",
    "event": "Bank of America: Current Price Already Requires A 16% Terminal ROTCE, Hold - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxONGNJc3dtaV9RUXZvY0U1Mnp4X3FraDFJTW1mbllwTk95UG5rTC1iaXlWblkzUmZtN1VlbktvMnlxekNVc0tiODNHblNpaXZ4QTZxUl9aYmd6eFNyUm1vVXhya3dacmJoZ21vb1pEdlFsdzU2ZjFrOU4yckRjQnZfV0NQRm1XWG5pWE1NTTR4OFNaVGRqdTBTVmVEaEoxMEVFX29aUzFIUHRzZEJ5UU13c2R5UFZpblJfQTJWQw?oc=5"
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
    "date": "2026-08-14",
    "event": "Fund Update: New $198.6M $BAC stock position opened by Railway Pension Investments Ltd - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOLWpsdW9yMElJQlFzNFJrSDRYbGhTSWlyVGR2eHpfUXQ2d2Y3clJldU9fSkFVM2tBb2pfeC1CVkpsX1NpRWFBYXJMWS1WMkdvRlk2b2FVc3BKQ1ZyX0tWcllobWUyV2F2ZXc2QUthYjJSRVhPSDQ5X3ljRkdiOVFIWUhVNW9KTWxyTl90bnpGV19fQWNiZmtaTS03dVRYWENMTjBPaUx3Y3BHWlg5VEUyRzZIUlhBUzV3TUdUVHJxaEtZNFU?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "Why ServiceNow Stock Rallied Today - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxQblg4V0ZERG9OX0Ftak9lRjFxcU9VTXdLZmFLaDd3cXMtaWZ2ZEVJTFNMdDMzYjNrQVBwNElYVFRSS3RnelhDMTRFYXd4UTg5ZXJBbmtlQzJQZEJKSlU0VTZfdUYyRlhIWFNDcEQ3RDJVMnN1WFBNY2xkT1hhUTM1WHhTeXNyVnY3d2YzdFBHcnlDRFppOWlKd2puVEpzbDhqUUlpX0tXcTVLXzc3ZTljaEVyTElnWm1LY3c?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-01",
    "event": "Buy these stocks ahead of earnings. Bank of America says they offer plenty of upside - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPbmdHRnRmVjh1MzQyMC1yQVpTdDc1Qk1YRGxUN0tBTThhX1N2aGh5ZEVHRzJUMEdncWlhSnVfTUVCRTFnRlR1LUpqNl9LMmFTQmlETG1RTUFPMkFtWC1ISlROa3RjaDB4WUVXUjNPTHRfVlpEbFRZTXZMTVIyWE45NjEyaDRFb0tFbnc?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "Bank Of America (BAC) Stock Analysis - Trend Reversal! Will BAC Shares Continue To Go Lower? Brock Stewart (mjpdmMHOGI) - Mshale",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE16ZmNSY1Vna1BWMXI3S2Q4bmJMTkdKWVRURjhna1B4Q3AwbTk5RzAwSGp1TWkwNmlWU0lGZ3ZQUGVKOVVqdGMyS0FqeDRGM1k4cDQ1SnhWc0ZzN1k?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "Bank of America (NYSE:BAC) Trading Down 1.7% - Should You Sell? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPVndUVmgycjJnbmM3a0JCaUV0ZFV3YTBQMkliSV9yU1plb2JXdXJMTVU2bXlSc29odjlHM2VxVFJVM1pJa2NLWnVRRG0yRjJCQlgwNXRXT0pFM2M0WjN6M1FDRko5YXlDOVkxbURIWExWZmlBeFh1Wmo0SVBjTjBZdS15TVU4dGRDZDdXczVDbXBjUllzR2llMU1YN2wxanR4b3VRYmptQzVmNUJ2MlE?oc=5"
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
    "date": "2026-08-19",
    "event": "Bridgewater Advisors Inc. Makes New Investment in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2AFBVV95cUxNZ1c3X2s4SjA2a1dQX1hHdlBtSjFRNFN1Ty1fZG9QLURXMnFXYzhYSE1mRk93QVhhdmlkMG1tU2RfU2kzUFJJMkJrSC1LLThoekhGVEtueGdwNG1feDZIMExMUjZKdjNDdk8wTFhpOWZHRDR5UDZLUFA3dG9ZTlVBWXpoZnZCbTBjMmQzUDAxQ29SclZFTy1sLVVwWnhUT2xWQ2d3bDZnR1plSWNwZnc3c0l1b3ZnRkhjNXZSUnB3XzAxaUZBYk1kU0F4aHRKaVdHbnlITWYtemg?oc=5"
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
    "date": "2026-08-19",
    "event": "12,242 Shares in Bank of America Corporation $BAC Purchased by Maridea Wealth Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxNR2V4MUNNQVg4SzE3bFlETE02TGZSd1RfX0U2MFZQWVVhMnVzQlU0YmZGVHkyZW80aEJxOFAzM2JPWjlzeDJIc1kteHlzWGwyNlgwTE04aFVidElxbmNzek5qdFFPZDN4YlJwd1l5UmdsZmZkVjhZanpSWTJHbmdnSlZ1OGIzZ05zMjZZUjRXdWdhU2Q3TWdwZm9UWkhXWnVoVXotQ08yY0lZNGN3anc3TWNjczRDUjBfMFU1Ym1Jall0Si10MkZzWFM0OVFqN0t1b0ZlRkRhX1ZpNkcybWJUejE2T0U2UQ?oc=5"
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
    "date": "2026-08-19",
    "event": "Hardy Reed LLC Takes Position in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxQenRyUzl3ZGpFLUVheDVhUGRNUGh6MEJJVTh4SE92eHgxNGZ3aHF2bUJwazNwX0M3enZOdHNacWVud1ZYZXlNaTl3Q3pCU3B2ejF5NUFuMHM4eWxDenZTN1pjZV9ha2xhRkZrSlE5TUJrSV9VdG10N1lJaUg1WHYweDNxVWI1Q2VBbWdDbk5RSnJ5M3dvUFREUzNqNkVwOXZ3SUkxRHlNVWhaVU1xdlFlUzY0ZU54VVB6eE5KN2R0NmlvN1U?oc=5"
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
    "event": "Bank of America Corporation $BAC Stock Holdings Decreased by Empire Life Investments Inc. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxOUlhSN2pWbUJld0xIYU9RMEZkblpfM3pjUmNTQWpSWDRtNm01S0M4RGR3Z21SZEtfNFBHRG9rbjQ1eGZvTTVqZlRuTlhOLWo1MmRBb0RzaXRwS3Z1M1VGV040WDdRdngzMkFEMGJLS2ctc2o1Y0txTktFazBlbUEtYmszTVZtZ083cjVNUWdhNkoyRnhxZG5kdy1QSjFmc1lVU1A5V1AxamEzazRxMmlMRW1jaDBvTG1qQXZ6ekxIWXRGUzhTRVZJQzRNbkxFSXVtcjVESGZWd1d0MTRnVHV1QThn?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "BIP Wealth LLC Takes Position in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxOeDZsakNxUkRPN3FueGI4Z2g1YklKWDJicG9vTDA3bGJXdVp4bnRPcklrTTlWVUV3emNIbG9JeDNueXl2UVk1cEc2RjVJVzUxTzNwYXF1eTBZajVBT3F3TjExekd1ZHQxRzZ2aUlfZktsSnpEMTNVbm1aRFc2eXRHSmptOFJxQW1zTGE3ZkE2cFRmVWlGSXE1MmVaRWZlaGVvdjBzckhyWjZmd3JLTTdxWU9wQ3YybUNaNTV3SXg3MzVEMk0?oc=5"
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
    "date": "2026-07-03",
    "event": "Is Bank of America Corporation (BAC) A Good Stock To Buy Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQMG1vaTcxalo1Qk5CMXNIX0F4TVIyWlV3TUtzSThRczFDbGY5TzN4OWxTREY2elcxbzdnZWZaQWRhSURzTk9zTWE1d2ZzLXIxNDlBa0NiOVZuejBEeWhUcDdpVTJ6SFBIeEZ1UTBWUmNhRmhkUFhUZ2hfemVTX0dGOXpya196a3R0OVQ0YTZ4TnlENm5PTlhJWHRqWDB1dG8?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-19",
    "event": "Mill Capital Management LLC Acquires New Shares in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQSzdhWGNsV0dGdFpqR2E4ejRVNXZMdl8xbFd5MV9IQTVtTUhna0xUUDdpM3JoMmdLQmNETjFOS0hyRExibGVPeE9fQW4xNmh5LW1iVVJIdnMzWkRnMkNCN1FYSDRqU3NRMVJHdTN4elhyN1VkSF9xWEdxRWsxcXg3d201aHlMdVJ2QThVTlFBRjNGWnBfUTh6eVRJTVZaQmQxX1NBcWh3TmdnVzZwME1RY3NVbEROT3dtSUZRTU9FMGJHZHV2dHpWWlBnQlpTcGJ0NE40S3lTZWR3TmM?oc=5"
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
    "stock": "V",
    "date": "2026-08-19",
    "event": "Visa Stock Jumps as Investors Favor 54% Margins",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The payments giant offers double-digit growth without semiconductor factories or direct consumer-credit risk....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/visa-stock-jumps-investors-favor-215740162.html"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "Can Total Wireless Help Western Union Deepen U.S. Retail Reach?",
    "type": "NEWS",
    "remark": "News via Zacks — WU is expanding its U.S. retail reach through Total Wireless, adding money transfers, bill payments and money orders to ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/total-wireless-help-western-union-154700010.html"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "Rain forms agentic payments alliance with Visa, Mastercard and other players",
    "type": "NEWS",
    "remark": "News via Electronic Payments — The Agentic Payments Alliance (APA) will operate as a coalition governed collectively by its founding members....",
    "url": "https://www.electronicpaymentsinternational.com/news/rain-forms-agentic-payments-alliance-with-visa-mastercard-and-other-players/"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "Multi Year Growth Runway Fuels Visa’s (V) Bullish Case",
    "type": "NEWS",
    "remark": "News via Insider Monkey — Pershing Square Holdings, an investment holding company, released its second quarter 2026 investor letter. A copy of the...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/multi-growth-runway-fuels-visa-114955075.html"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "The Zacks Analyst Blog Highlights Visa, Lam Research, Caterpillar, Q.E.P and Altigen",
    "type": "NEWS",
    "remark": "News via Zacks — Top research reports spotlight Visa as payments grow, Lam Research on AI demand and Caterpillar on strong backlog....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/zacks-analyst-blog-highlights-visa-085300521.html"
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
    "date": "2026-08-19",
    "event": "REPAY Joins Visa Platform Connect, Granting ISO and ISV Clients Next-Generation Payment Infrastructure",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/repay-joins-visa-platform-connect-201500563.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Visa In Search Of Stablecoin Partner After BVNK Sale",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.cryptoprowl.com/releases/visa-in-search-of-stablecoin-partner-after-bvnk-sale-6456?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Bill Ackman Bets Big on Visa After It Lagged the Market for 5 Years. Should You?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/18/bill-ackman-bets-big-on-visa-after-it-lagged-the-market-for-5-years-should-you/?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-17",
    "event": "Visa Stock Slips After Ackman Reveals New Payment Bet",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/visa-stock-slips-ackman-reveals-204441833.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "DBS Hong Kong Partners with Visa, Preface to empower Customers with AI Readiness skills, for the Future of Intelligent Payments",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/dbs-hong-kong-partners-visa-062300616.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Kraken launches cashback debit card in the U.S.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://qz.com/kraken-krak-cashback-debit-card-us-081826?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Mastercard’s CEO Explains the Next Big Opportunity: Machines Paying Machines",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/18/mastercards-ceo-explains-the-next-big-opportunity-machines-paying-machines/?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Contrarian vs. the crowd: One trader made a massive bet against chip stocks - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQX1pnSUhSeW02N0g0bG5zREJ5aDBRNFJiaDNnNUcwekc5d2EyN3hsWlpxUWRHME5WZFYtZ2dkaGNCX01TUHQwc0ltbjl5ek9ROUN2R3otRW9WY0pBT19nVXpqVnF5QVJ4Q2JvRUVkdWZOX1ZrMzJoeEVmenczY2FKMDJxQkk0V1FxRHlDTlJ6Q1Q2R1NPRHhZbnRWMXR5Vkx5WmszeWJMekdyS0h5NlRv0gG0AUFVX3lxTE5tZmpxMk1rSU5Fbjc3NmhNc1ZaQlBHQmMzTTZZQzFrR0F4WTRnVHdxUjMyVnRzMzBUemhUc2xJLV8teHBSNkxhRnFJVEdXLTVDTFpyNlFlR0VUbDR3WDNkVjJpWnNvaHNGVmpUWExrOUdzSkFrMW9BY1hXbm9DcjJBcHFWbktzaExidXowOEZ2MEEyZVJqWTRkdVN3WEJzdWliN3dxRmdPVzRyUTB3SFdETlVPeQ?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "Better Buy: Walmart Stock vs. Costco Stock - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPelZJYmphTVc4UC13QXFVbnR2NWNYSnZ6Wk40cTRlQ0YwNnU1SVRrNkl3TTJQLTE4WlNlX0M2Tmt0WnNTbURaRm1oRWNXQnkyZnlYam9Dc1JxZnh2Q3ZyN1hMakdDS1lhR3VVVE1WVTFnSXlIUGlveW5FTmxXN1VzZnVyNEZPa3JSdnZB?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "Danica Pension Livsforsikringsaktieselskab Has $33.43 Million Stock Position in Visa Inc. $V - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxPOTlmWTdHVGxOdmNtQkdwRUl5dlA0cVJuU0JveThHUkgzQlNmNWdxTDlQZWxEeTdpTnYtQ3pjYnMtamVhZERJU09XaTdEYVZJT0k5RlZaSWxWX1JBbGVWT0cyMVdkb0NKTEVwbGk4dVBHdUh1RnU1YmxMN2Z1V1N3TzVUUzdFQjZGelRxZzhxbUdIVTZFS3RaRnIwTUlSSWZhZWRrWVRWRDdfSTI1a0l5amhzZTd5VHRrMjBnaDEzcWJqYldnY0lTcDlJYXZFLXNPWnBKUlVVNVVnbUZiSnYwdGRYWQ?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-18",
    "event": "Here’s How Much You Would Have Made Owning Visa Stock In The Last 10 Years - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOTWNPQjFKbDZ6b2piY3dFel9XQTdyci1UUW1ZVUJOR0w2VWFoQzk0OW1tel96QjZNQVJaeENKa055d3FiNVhfNW5jVWpKY253Tk1fd3VHSnM5emJObjViS1Q5ZHJXYjBSb3dIYy1GWTgyYXpzQm0ydFNCNDl2MDB1amdYLXhfbURfZ3ROZWh2SFIxZWtpMHRfMWg5YVZnN3ppMTdESm12S2NreUpVUmNXc3Vn?oc=5"
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
    "date": "2026-06-18",
    "event": "Visa (V) Stock After Recent Pullback Is The Market Price Missing The Story - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOakNaTnVCQTdaVUdoOU9WLVlhRlduRl9VbHBRV09Uc2xCcE9oNHVpY1l2cEE3SXRkTC1HTmhZU3M5WnFGVmw5Rk1XY2FyMlJHd0lGVWkzT1p6RkNxazA4SjVBdlJFYkNzYzM0aHpuWjhDc2QxZFk2ZDRnRUFSRDRhZDVERzF0RGxDZXNtN0E3aVNVLVlUTXdtcw?oc=5"
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
    "date": "2026-08-18",
    "event": "Power Integrations (POWI) Stock Looks Pricey As It Unveils 2200 V PowiGaN - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxNZW5IeG5Ha2RZSWJyUGRVUldyTU9HdlRaS3BsUURUeng4eWFZckFmZDBCV1lBdE8xM1NqZjgxTjFCYzB2d1hZYXZxYklBaHpNdV9RT3lNZmVKUU0xYV85cWYtZUZoeW96OXRXckJ1ZzVYQzBoRG5iT0dpeE5lN1o2NjZOUDF2SVdraXJreXBRZnJ1WjZNWHpyZ09lbjduaFFkZ0gtem1zYUk3RmxXcjFvZldsQ25fbmFDOTdPTXBPcWRGdlVtQjN2NlhfSUxXdnk2SjZ6WkJTdm1SYTTSAeABQVVfeXFMTXFIS0I5cXIwSjd6NTZyTzZxUzRLTXJtTXZoc2xHMjJ6bmh0ZnNIdEl6Znhsc2RWUm9nZHJobmxmdWpKZGVtOHpGYmxBQWVIclZiQzNvOVJlci0tR0JpaDZSNU9YenJaX3lzS1Awb3lqSGpBRl8yVFl3cUpfUkNXRFVsaUEtQWNxUUVhc3d0aXpBcXBwcHJZVVRTdzFOMlRHbVJTdWZJQmJucVl3SEpESVM2RkI5MmJ1WlpSdzQ0c1JBNGw1NFI1azIwU2dkSjhUTllRUlpWNGw2dGFKYkRINm0?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "Diversify Advisory Services LLC Raises Stock Position in Visa Inc. $V - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxObmxqWW9PSllmZzhkcUdLTTR5TC1MTHNNaVdGQmhKYjZnNjJiSFFORmFZVmdCV0ZXWmozWE9TSGxrdnJRSWVvak9QMG5VYkZ3RW91WmtjN3ZxN2xYenBrbWhfV2I5OWxjOEpub0VQTUZtR0pKd1F5el9heU84eEREM0p6S0pfYmJueW9PLVpCRWdRSlM0TXhWRTBFQVZEaDNSV3VTVmVLRFRBUWd6Y1lhaXROXzRqa2JQd3BnMi04aW05YTFSUHd3?oc=5"
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
    "date": "2026-07-31",
    "event": "Visa (V) Stock Sees Modest Fair Value Lift After Strong Q3 Analyst Revisions - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxPVjU3QnZnSnN3TGlLd0ZPeFNJVWFzaHZnRFhXYTBfeVZUR245eGZhb2JPRktIZk9pS1ctVXFDQWtOMGJYUS1Fbm1EdWhtSmpsS0ZrY1cwVTJYd2F4WVhudEptWW5qbVUtbVRWOUdjSUZlR0xvdU5tTzYyTVdvS0RsVHpNUUNmMmRnbUN4N3JJU2dxUUU?oc=5"
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
    "date": "2026-08-18",
    "event": "Visa (NYSE:V) Stock Unloaded Rep. Richard McCormick - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPQ05DRFNWVk0yTHd4T1g5dFk4QzlKTGdwNEtueGFzN293UFdyZ3kyTVhTdXpyVFRpUG1NT3p3Q2puNVYxTW5FUzdGSjN0eXd3cHBJcnhPR1k5TjNGYkdUcXc1NFU1RGtYZHZQdmExWjloZmRLb3VZR194WkJKU1VXQl9uell4VnZaV256akN5M3F4bWlELTVTcElETk53aDVpOE5R?oc=5"
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
    "date": "2026-08-19",
    "event": "Artemis Wealth Advisors LLC Raises Stock Holdings in Visa Inc. $V - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOaGZkc19udDNCRHlQWWMySUNRMU5wbjctQ3FjRnRzVk5MeDBkNmxoUzlIWU5aVkNlWktObFc3TExxUk1qWVo0Sk8zUFpaQjhEbnQzZi01c0xRYUZnay1zX0VQMGJGcGRSNDNkTGhpU2JMc2MwMXQzTEdJd1h2NkNRNW1MX1RwZ3NHU2tTNlF4UHpqbWV1TXJBd2o2UEdPaExUYWliZU5mTVczR0NjdGJFc2JVZGRGYUx4RzNEdWx4bE9xQQ?oc=5"
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
    "date": "2026-08-17",
    "event": "Visa (NYSE:V) Stock Price Down 1.4% - Here's Why - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNVjh6ZUpmWXNyQ1p5RUdfUXNEcG5JelJCUTBjOEhXaXFNZEdkVzJBRWJSeVF5T1JkV0ZKN25hUUtiTXRzZDhXQk5XNmgtcHBIWkNldmZvLUpiRUlhdXMzQlloNEYxUmx2RkZ3THlzTE5ERkI5SGI3UUpsbDhRTjhpcTJsSUJiYk1NM1JWNTFPLVN0djRodUdBMVpB?oc=5"
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
    "date": "2026-03-23",
    "event": "Morgan Stanley Keeps Buy Rating on Visa (V) Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPT1JMMm5pT2c5WmhlS3NfTTM0ZmI2Uk53MFNnLURpcjUxb2NQd0pQQkZkUTJqeXpBRGhpWFZhOUh0RFBwYWdudTU3b19xVmVJbXVISlFibjllYjJoR0xURHhObERxVE54QmRCMkZwNWk5SERFdTRsR21leHJLYUFfaERXdThxWHFFU0xZNC10ZGZpVzl3NzMyWW54Zzc?oc=5"
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
    "date": "2026-05-05",
    "event": "V Stock: 3 Impending Events That Could Invalidate the Thesis - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPWC1jNjlEUXpsOE4tVzRuS28xc1NlRk9nV3JpekREdnBxZGVCTkk5bzJ3RnVtX3hlOWVkQVFVSWJJcmhQSWowb2dfN3FOcWllYnUwaUZibU54Y0JoMHVrU19QVzh1Si1xVlZ1VHFoNjlYNDREY0RwX1R6YUdVazI2ZDFqV093N3hzUWRVYkYzOVZOdHI3Vks0MTNvLXdHWEtEanhqYk85aGZfWU16d1VBaXJkbnBfVE5UbkE?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Tech sell-off resumes, counterbalancing bond yield relief: AlphaCheck",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — Tech stocks faced renewed selling pressure, while healthcare, basic materials, and consumer discretionary stocks rose....",
    "url": "https://finance.yahoo.com/markets/article/tech-sell-off-resumes-counterbalancing-bond-yield-relief-alphacheck-141446892.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "15 S&P 500 stocks are up 100% or more this year — here's what they have in common",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — It's been a big year so far, at least for these 15 companies....",
    "url": "https://finance.yahoo.com/markets/article/15-sp-500-stocks-are-up-100-or-more-this-year--heres-what-they-have-in-common-135448325.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "This Billionaire Tech Investor Is Betting Big on SpaceX and Chip Stocks",
    "type": "NEWS",
    "remark": "News via Motley Fool — Philippe Laffont aggressively added to his positions in semiconductor stocks in the second quarter....",
    "url": "https://www.fool.com/investing/2026/08/19/this-billionaire-tech-investor-is-betting-big-on-s/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Why Is NVDA The Discount Option Among Its Peers?",
    "type": "NEWS",
    "remark": "News via Trefis — The market is treating NVIDIA like a semiconductor laggard, even as its growth and profit metrics dominate the very peer...",
    "url": "https://www.trefis.com/articles/611930/why-is-nvda-the-discount-option-among-its-peers/2026-08-19"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Wedbush Flags Surprising Move in Intel GPU Prices",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Rising memory costs are starting to reshape hardware pricing...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/wedbush-flags-surprising-move-intel-190725379.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Wedbush Issues Stark Warning for Intel Stock as GPU Prices Surge",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Intel Faces New AI Hardware Headwind as GPU Prices Surge Across Key Markets...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/wedbush-issues-stark-warning-intel-190356281.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Intel Stock Charges A Premium For Capacity Still Being Built",
    "type": "NEWS",
    "remark": "News via Trefis — The multiple is paid on capacity that is still being built, while the trailing year still ends in a loss....",
    "url": "https://www.trefis.com/articles/612015/intel-stock-charges-a-premium-for-capacity-still-being-built/2026-08-19"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Intel GPU Prices Jump 48% as Memory Costs Surge",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Wedbush sees another sign of memory inflation....",
    "url": "https://finance.yahoo.com/technology/articles/intel-gpu-prices-jump-48-165415393.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "One of Wall Street’s Best-Known Hedge Funds Just Loaded Up on These 5 Stocks",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Lee Ainslie just torched Maverick Capital's playbook, dumping chip giants to pour hundreds of millions into five names t...",
    "url": "https://247wallst.com/investing/2026/08/19/one-of-wall-streets-best-known-hedge-funds-just-loaded-up-on-these-5-stocks/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "INTC's Client Computing Business Gains Momentum: Is More Growth Ahead?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/intcs-client-computing-business-gains-155100741.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Insider Watch: 3 CEOs Betting Millions on Their Own Stocks",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/insider-watch-3-ceos-betting-151500672.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Veteran fund manager rethinks Intel stock target",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/investing/stocks/veteran-fund-manager-rethinks-intel-stock-target-intc?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Insiders Are Buying Intel (INTC) and Opendoor (OPEN)",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/insiders-buying-intel-intc-opendoor-153115587.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "How Intel and TSMC Could Benefit From Samsung Hiking Chipmaking Prices",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/694e7e12-b22d-3a8b-829b-5206bfc76001/how-intel-and-tsmc-could.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "The CEO of This Nvidia-Backed Artificial Intelligence (AI) Chip Company Just Bought $10 Million of His Own Stock. Here's What He's Seeing That Retail Investors Won't Want to Miss.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/19/ssss/?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "CEO Lip-Bu Tan Just Bought Another 105,000 Shares of Intel Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxNRWhVRGtVX3JCVXZLVldHSkpiWi1ZSlQ4MTVHTXFQZms2T3k2NUwyQU1KX2J5SkFRcW1RVndmVnhmWUIyZ0dzNmJtclpIaVhvNVM0a3p2algtSEdyd214Skh5Y3l1dWIwT21iS2ExOXRyUU9acTFWcDBFQkRYY3NUYXdFakZ0bW5nbkJUVQ?oc=5"
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
    "event": "Why Intel, Marvell Stocks Are Dropping After Chip Stocks Enter New Bull Market - barrons.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxONlR0c0ZHZUFxd0pPRTRPRFJYYjBjOGhUMC11MldvQWRYTUNqeGdYVWVLQThiRGtxSEI4QUVHOVp6aUpJa1BmMFYtZjE3VUtlb3E5dTF0VzdhWkRtRm1mQzhRQmZFOElfZHdCTjhkX1pSNmZaRVNqd044VzQ5dzhNaF9Hbk41UQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Why Intel Stock Is Falling Today - Currently.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihwFBVV95cUxPaE5haXZhSldxXy1yU0t0Vk5JaGEzTjZPbnlMMWNuSGY3THQ2Q2VaY3VRanIzd21mc0dSUEkyX1ZNZnJyUGlyZ3ZnejlmRUFPTkdoRVBpNm1zczV4SC0xcmFSWl9mRnVob1dvbUVTLWxoTWd2YTlqc3lqMDFyS2pkMjdtVW1Gem8?oc=5"
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
    "date": "2026-08-18",
    "event": "What's Going On With Intel Stock Tuesday? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPZFpIeDhWbzNONU1rZ2Y1V0hlYXpTV1djazduMmtlUURlWWJzMFlDQ2VGMThMNmlNVzZSdkZXeDh6end0cmxyZTlPN0NxQmtJV1QwU0tnTXBQU2FzZlIySGdQeWV3N0laUmlkMEN5WVpXSVVQQUdod2ctT2JTZkVwaXpYdHhvNWpYQ2g5c09rdmRCR1FuVkpWRU5tV0l0UWo3N1BNRQ?oc=5"
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
    "date": "2026-08-19",
    "event": "AMD and Intel Shares Plummet, What You Need To Know - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNV3dNd1dWb2I5c1daam9IQlhNSUotX2c2amVKVXl1bHhCUFVDQXhpZDZoWWx3N29yS3F6aVVoeXNEN0ZGU3ItOXVuRFdJdFQxYmdnNG1qWVlCaXZZWC1nZndmMGxXOEIzMTNYNHh4VU9PT0ZYeDhmOWFaQk9LM1ByMEdST2pzZmVqVFZYX01VZVlBeFpXbDVFVlI1VzRSMVRNWlJ2dnFwSzhKclRtWXFzZG55U2kzRUxxalo1UmhpblJ4bzdlSTlYNThMXzJDTW05?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Intel Stock (NASDAQ:INTC) Slides After Landing Socionext for Chiplets - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOdTM5aHFta3l5a0t0b2ZtTS1GMWpreDNzOVBGR1FjX0p1R1FZSkR0elozdFM1dWt5YnJDQkFqLVNOcTJzTnQ3NDFkZVlpaHp6SkkyU3FJbkJHMFBoaTl2UkhYcmdTd2tHODZUTTlpNlRYTURvenRxcllKQ0sydVJNNTRlVmhCcVRMYTM2MDFHcUY0c2p5Qkt2ajNkVGo?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Insiders Are Buying Intel (INTC) and Opendoor (OPEN) - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiogFBVV95cUxQSXZWaGl3ZjN6SVF2RHR2NGhJdkNiOHdKYTBvRHVJSGFGZnhNdUpLVzE3SXd2aWFzc256akFmU2FpY1VLX21jWGdKbjhPd0dFMHI0c1F6Qk5FZDdJcVRGSzltNkRCU0QyblZMZEU4ZDFpWjFyb3duVE14bHYxbFJqTmtJM21BWmtNZm9RbUNWRmkzTjFyX3djSU5kWk5aazh2aUE?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Veteran fund manager rethinks Intel stock target - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNVmRpOWlMM2E0Y1RLcmRvUXd5NXJOdjBHdXRJWmdoRVFrM1l6eFdhbXhZUjNNMnQ1SFQzc2NTYVBLRTlpdjJYcUthbS1RNFFrYk8xd0xLNktTYU0ybUVUYWpFUDhwUzVtWHAwY1pqdlR4SHFzZ0FMZFdoREhfTC1ocHJkRkJCUndCUEs5bE5QbU44a001MjF2QzJyMG8?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Intel Stock Charges A Premium For Capacity Still Being Built - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNWkNsQXc5bnFfbEk0dWd3SjZMQi1wOTU1bi12Y2xGUUV6RUpqTnBTYkhsWHoxdzJLcXlia3lfMG5leC16X3RjakkxNU9zVldhQlRMZmRvSHFUbVNxU2xVYmdOUEdBSEgydkFjQlFtVXo1YU9LY3NWRjRlQ3ZDNXowMm55TXB2dmRzU0dIR1FMYmNubno5Ykh5YWg4M2phOEpENnpuZzBjLXFtTTRxcEctd3A4ZXh2cXF0aE5LUTJB?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Intel (INTC) Stock Looks Expensive With Cash Flow Still Catching Up - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxNSmhoNFNzNUNQUXRtSjVkdUJXbEtZUzhSbFoyNjl0VUlQWWxicDZPdkIxOWNZbDlRWE9aWnNlOXBEV3hoYXQ1dzhIVkRrMW1oMXJjZDQwb0szU1dTZTNmQ2NrbkNMbXlTU2J2a3NuZklwVlpVWi1wSzF2a011bjdHRTNTNDJPc3czb0tzOVZZbDFJUTBkTzJfQndZQW1yUmdLUWZHY1ZIcGd3NU5hS19TMHB1R0ZVWXRJcG9UVVJqZEtSSXdpeFdVRjVhWHY0UW_SAc8BQVVfeXFMTUpoaDRTczVDUFF0bUo1ZHVCV2xLWVM4UmxaMjY5dFVJUFlsYnA2T3ZCMTljWWw5UVhPWlpzZTlwRFd4aGF0NXc4SFZEazFtaDFyY2Q0MG9LM1NXU2UzZkNja25DTG15U1NidmtzbmZJcFZaVVotcEsxdmtNdW43R0UzUzQyT3N3M29LczlWWWwxSVEwZE8yX0J3WUFtclJnS1FmR2NWSHBndzVOYUtfUzBwdUdGVVl0SXBvVFVSamRLUkl3aXhXVUY1YVh2NFFv?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Intel Stock (INTC) Opinions on Massive Equity Offering and Insider Activity - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxObHdZNDA0SWhVOU1RUVR4OWdQYXdKeGNsbkRWMm96UzRmMTFTNExxb3BjZXhjNFE3MGpMcm9XNXJ3LUFVdDdfMWstc1pLOTNZdHM2UFF4ZmxIaEgxM2NiX3FMOExTd21qWW9kSll5RTcya3B2N3hBZHV3NWNZMDB5T0hMdTlTYVFvbU9wcTRqby1YbkF0TGhWMFNsVkR3bUtPVkRPT1NmdnZwXzFMRnp3aV9B?oc=5"
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
    "date": "2026-08-10",
    "event": "Intel upsizes stock offering to $20 billion at $95 per share as AI demand accelerates - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMic0FVX3lxTE9wLUxnRncxa2pNdGoxaFhBVnZzNU40Qks5MDFnSFJ5eHAzdWo0RGluXzctenFpbmREckVJQkFhTHJMREdNbnZaeDNtYnNDQnBxckd3bGZ2Qm1xbU9ZaW01bkQwNnRvdUFRUUVjYXpyT2JxSjjSAXhBVV95cUxOUFZTSFNOX3hPb2lHTzhMMXdESmV6anV2SlNObC1wZmNDM3RmUmtVdXdfMmpETzkxTmVROG5Idy00V1Q1UEt4b1VEaS1aZEdRRXBYNmZKbGotSU0yNkNPMDJZcHZsU29zMTdWekNHSUNWT2lBellmMlc?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Wedbush Issues Stark Warning for Intel Stock as GPU Prices Surge - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxQd3lXdE5IbVU5NEd5WWpIVTJveGtSQVg4ZXl4eFJoUnd4dTJUWTFPeGRGWnZmYWx3QUtJSlJpVzU2bkRQbm1VdHBLVzRiWUt3cnJtOGhIV09OYUs3ek5MNFhaakRxb0VHdnYtQnlwUndFZnp6VVlSLWxYZi1qb1NkNXFybjZOUE5ydVJ1Tm4zRzRndEZlWDFDUk5KaDlTUFlteVpkZE5BaDQ4UUdZUmRXMWpsOW5lMDE3cTJJakdnX0VTZw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "SoftBank Group put 67% of U.S. portfolio into Intel stock - qz.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiYEFVX3lxTE5PMEFHOTB2Zkk4SlNVZFdxWGNmTE8xcTY5dWUyeks5Sl9WZkVPZmJ1dldPUC1EaUxmT1NmenE3amI0Wmd2S0liR09aaEc0QS0wREs0UGNPU0ZxN0dCaTQ5bQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "What's Going On With Intel Stock Wednesday? - Intel (NASDAQ:INTC) - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxQNnRZeDJydDYtdmFzaWUteUYzc0pWTFJIYTRaS2k4MlBrMXhpR1c0RFBHWFN6TTV3MWVHOTVwZnA4eXlGdzJQOF90d05TNGhqR090Q0Z6Mk5kSGVkajBubDB1OG1pN2dhb1VKVllBbmJlOHpvTFNvbW8xWlJZMVJGb2ZHUE83ME1hLVlWMFZzWWtYUXNmVDZxdUZ3RVF2TkFWdV9RVUdDU1RSU1ZjTFgtb3k1bFVVeWR0bFZYd2NpMTBhX21heUJZd21HUzVZN19RcWo2WTRjUXNWNGpZ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "INTC Looks 204.4% Overvalued on GF Value™ as Price-to-Sales Sign - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxOUDlGRzh3QVAzN2Nxc3RwOE5XaUJZa2pqeDNUWFdYUVlCQlRpZ3piT1FKZHd3TmdKcFhfRmVCSS1OMmdrNGpVQlBmMnJiMkFCTmZCT2dSTkpXVXE3N0k0WjB1REgybUc0OHhNaU51N3E5UG1LdFR4RDFJczVldmcyX3BhVDE1S1lQY0Jhc3RBTDZHLWVqTHRTRHU1NEp3NjJpSi0xNHBPb0hXQjNzelE?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Intel Corp Stock (INTC) Moved Down by 3.58% on Aug 19: What Investors Need To Know - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxPdFM4cGxLZ1pWZHo2VHpLYWQzdlhTT3VObXZ3VTl0cm5zamtIR2FWbGlIYURFanVWV2FYU0w5REM5OVRPVXRiZjkzaVFsdFg5VWN4dHQ4enYzMmJZYlAyUnR1WVBYRENuV3RzcVgzMHpVUFAxUklRdFo2TkgtSkZHSjlfTlJ6UGdweU1N?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "INTC Stock Has Surged 233% This Year — HSBC Sees Another 60% Upside As Foundry Business Becomes 'Too Good to Ignore' - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQTXQtRnU2OTdPNURnU29RcW9ReTNLSTd2X1VfdDJYaVpidWQxSzJXRTVNc0gxVjhGQWNWcEVMeEtjQVVMcTMtSlZUYkdoMWVzVWVsVTVGdVdSclJ5Y1UwMUNzeXRKYjdBX21ZYWpJaklOdmppV05mcS1kaGJYZ3B5TFRfcm14QnM0UG1malhFcFRBcTRhY3NyOWlJQlFkNU4tTUNWdVRIS0F3N3hDSkRmc0xBa2Ixa1huTGVmSm04bktabGNxNGs5ekhCR29jZw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Billionaire Stanley Druckenmiller Just Dumped Micron and Intel While Adding These 2 AI Stocks. Should Investors Follow Suit? - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOa205b2tITU5icFNGYi1leVo1RlFMRllMMVRQRmRwQUNQdmJsOXFYZFdSOWhIOXNfeXlyVUdPbjNza0tJTlM1YmhSczQwWnZxMTZjTC1HeVZtVTRxUWVkeUlZZzVudFBRbmV1ODhhY1QwNVNkc29qOU9XSHY4bkJZLUJwLXQ5d1owSXRzUTRNNnRFMnNNbkF5bQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "AMD and Intel Shares Plummet, What You Need To Know - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxOajk1Sld5S19BR1lSX3RBbWhJa21PRk5fY1hIQk9XVmJzNktIMm5QTzBnLUVCYXdhWWVRb1RUMldkWFJSRmwzLXd1U192cmF3OXB5MnFsMHhlRzZjNVhuLUhJOFpSUkJnQUFFcGxRNkZ1UXpTcWJ6VldXM1VkUEdPNGpPSTFsSWRUTTZod3FJUklrTHBTaTZpMUhyejk1US1RRzM4a1FKbFNpVjVnNkVZRw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "Calamos Advisors LLC Purchases 293,357 Shares of Intel Corporation $INTC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxOcm5zSDlwT3JTN0VGZWJoU1hncTdrTEloNXZlZXB4cHJhTU53c2V0bDdNX3EyTFRTZ0FDVm4tNk13TnMtd3dmTVFjdUpvalA5bzc1ZENxVERVOFFrUHV1VF9aNDJfbnJtTmp0cTJpSUVPV2hRdWJ1RXF0b1FHUGFhYzJaRDhSM3F6dGRtUjdGN3lGQWxDV2JKUGdlVUtmdWpiRDctdDVKcmlQU2dGN1FGNXVjY0hBLUZhRXJNcnRGMm5QUUcxdm1nWE53OA?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "Dow Jones Futures: S&P 500, Nasdaq Rise On Treasury Move; Moderna, Merck Spur Big Biopharma Gains",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — The S&P 500 and Nasdaq rose slightly Wednesday as Treasury yields fell. Moderna and Merck fueled big gains for biotechs,...",
    "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-sp500-nasdaq-treasury-move-moderna-merck-spur-big-biopharma-gains/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "Software Companies' Second-Quarter Beat Rate Accelerates Sequentially, RBC Says",
    "type": "NEWS",
    "remark": "News via MT Newswires — Software companies' revenue and earnings beat rates accelerated sequentially in the second quarter,...",
    "url": "https://finance.yahoo.com/technology/articles/software-companies-apos-second-quarter-203412309.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "Cybersecurity ETFs to Buy as Top Holdings Deliver Robust Q2 Results",
    "type": "NEWS",
    "remark": "News via Zacks — Cybersecurity ETFs gain momentum as cyber leaders like FTNT post strong Q2 results, fueled by rising AI-driven threats a...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/cybersecurity-etfs-buy-top-holdings-183900917.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "CrowdStrike Sinks 7% Despite Truist Price Target Raise to $245, Palo Alto Networks Falls 5%",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Truist just raised its CrowdStrike price target by a wide margin and called the cybersecurity setup constructive, yet th...",
    "url": "https://247wallst.com/investing/2026/08/19/crowdstrike-sinks-7-despite-truist-price-target-raise-to-245-palo-alto-networks-falls-5/"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "CrowdStrike Setup 'Constructive,' But Truist Favors Rubrik, SailPoint Ahead Of Q2 Earnings",
    "type": "NEWS",
    "remark": "News via Stocktwits — Truist raised its price targets for CrowdStrike, Rubrik and SailPoint while maintaining ‘Buy’ ratings on all three stock...",
    "url": "https://stocktwits.com/news-articles/markets/equity/truist-cybersecurity-rubrik-rbrk-sailpoint-crowdstrike-earnings-outlook/cZYdKc8RJlb"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "Is CrowdStrike Holdings (CRWD) Priced For Perfection On AI Hopes?",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — CrowdStrike Holdings has delivered very strong share price gains over the past three years, yet current valuation checks...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/crowdstrike-holdings-crwd-priced-perfection-001603224.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "US Stocks End Third Session Lower As Higher Treasury Yields, Oil Prices Weigh — BABA, AAPL, GRRR, KLAR, CRWD In Focus",
    "type": "NEWS",
    "remark": "News via Stocktwits — The U.S. 30-year Treasury bond yield spiked to a fresh 19-year high on Tuesday....",
    "url": "https://stocktwits.com/news-articles/markets/equity/us-stocks-end-third-session-lower-as-higher-treasury-yields-oil-prices-weigh/cZYcnUERJjD"
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
    "event": "CrowdStrike Faces High Expectations Heading Into Q2, BofA Says",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/crowdstrike-faces-high-expectations-heading-152114269.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "This Politician on the House Intelligence Committee’s Cyber Panel Just Bought Three Cybersecurity Stocks",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/18/this-politician-on-the-house-intelligence-committees-cyber-panel-just-bought-three-cybersecurity-stocks/?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CRWD vs. FTNT: Which Cybersecurity Stock Should You Buy Right Now?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/crwd-vs-ftnt-cybersecurity-stock-141000399.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "Renaissance Technologies Has Taken a New Position in CrowdStrike. What This Means for CRWD Stock.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.barchart.com/story/news/3907191/renaissance-technologies-has-taken-a-new-position-in-crowdstrike-what-this-means-for-crwd-stock?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CRWD Could Beat Q2 Expectations Across The Board, Says Benchmark — Firm Sees Multiple Growth Catalysts",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://stocktwits.com/news-articles/markets/equity/crwd-beat-q2-expectations-across-board-despite-rally-says-wall-street/cZYcaVkRJj5?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "Why Bank Of America Is Bullish On Cybersecurity Stocks",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/16bb2013-c711-3a89-8988-5452b824621a/why-bank-of-america-is.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CrowdStrike and Palo Alto AI Winners Ahead of Earnings",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/crowdstrike-palo-alto-ai-winners-115602075.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "KnowBe4 Combats Voice-Based Threats With Advanced Simulated Vishing Capabilities",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/knowbe4-combats-voice-based-threats-141100649.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "CrowdStrike Setup 'Constructive,' But Truist Favors Rubrik, SailPoint Ahead Of Q2 Earnings - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxNc0pjOG93cGFZeVFBbzAzZ05TQUJoVjAyTFNEcDZ5Y1NVelJzT25aWEJqdzVEWU9KcHFDcXgzalg1TU9FUEplNmV4cEdaUHdpWENod081T1Vhd25KOVdta1Rya29UMUdsRTZ2WkhpaTJwVHNpZXp4b21fNnktOWY0a3dKazhiMnZfNVd6YkFQTGswcllwN3dTS3o1ZkRYOG5PRG5CTmNTX1VKa0ZxMHc?oc=5"
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
    "date": "2026-08-19",
    "event": "What's Going On With the Slide in CrowdStrike Stock? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxORVRRbDgtQzBYRlczdFBJNzk1LWtwcGhxNUZ1LUlqVW1xVGdGYkY4Slk5U2g4Rk9UZExRVzF4Y0JhNUZYQ2I3cFduWUpBOW9Sbl9peHZ3VE05aDJCTjZsQkh0cFNfS0pFeG40VlY4OUZxZTkxbF90SGptNlFqVTNaSnRSQkJTcFB0d1FGaWhsaUR5WGJ0Y2d6NW9jbzJpUlNjUHhKU3RrRkRNVnUxWUtvUg?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "CrowdStrike Holdings Inc Stock (CRWD) Moved Down by 6.29% on Aug 19: What Signal Does It Send? - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQV2tucm1vSGJfQVpBX2IyYlk4QUFBQWRpdGdwU3M5SWtUSGlJX3JBcWwtbEdGSDVEWE1Jd3FQelByTWJBUW4zZjhxMG5BVEF6Z2R4MGVWbDNNNm1PNUo2czVOeXhGRWJhUmplRGw3V0tjSGZzRG81U01IOXEwVmpLbVZMV3NZcmRHcjNV?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "CrowdStrike Stock Likely To Swing On Earnings. This Trade Brings Returns From Those Moves. - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxQektUemFVNzlBczQ3R25RN3YtbDkwZndPNExSeEtGcF9UVkwxY3pNQkxBZlhHdTNnQkFIZlZFYjhyM3dIekJXQS1mUm9rYmRNVXJlVkxGQ3ZNZEpodDRYMGtXeUdLZVFpVDlpUndsRmVKdVMyVE94UWtjVEQxYlZOQVJoZjdyaldnSnZHazN5dkx3MWtNU0l4bkY4UXhUY1YzMUZMc3llT3FQY3dCRkw5TEd6WVE5aVVNVmF2SXZodUhqY0hU?oc=5"
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
    "date": "2026-08-19",
    "event": "A Look at CrowdStrike Holdings Inc (CRWD) After 5.3% Decline -- GF Value $130.48 vs Price $201.63 - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxPNWlFV2R5R0dFelhweFNqTjd0cXM5TU9PVEtoM1NSVzVwLXQyRFJIekxCdE9ZSWl1b2J4RWswQmhjazZOZmxleVdqaXl2UXpGV3pTTzlmcVNwM2N4eGRsV2ZMbXR1VGlWZXhSZnRxb090SWNtWlY3Mk1yUlFEdkNpd01EUUN3UjRCYVdibE1qREJUc3BpWkFyVXBVbGVYMWt6R3pFa0tpRnhwLXBFTDd1S0xYNmJQX0ZtU1BNZk1adm1UTGM?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "Rapid7, Tenable, CrowdStrike, Twilio, and Datadog Shares Plummet, What You Need To Know - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxQbDh4bjRfTjFQZHFzcGFoY1BhU2doYW8ybGFZV3BVQ2c4SFNROXpleWotalI2U05sNEpvUkNSQTMtWVk4NE5iVzhOUFlnYnZqMHVPcEhCS2xwaW1HLWdQMjZlUTdDc3RQM1RXTFhuR1V4SjdjcXpsZWJ3OFI3QmpVclJ5Y3lEUGRxb1FLYk5WVURkMG0wcG5JNFRHcmdadHF3cHJuREotZHlTSnNWMTltbmFXWGNXdkR2ZGQwWHFGYzREZGFhMkNQZHpBcjVIWGVQdm9YMDhGT2xHVVdUZjNSZGdaTndoS1BoU25EdVR4NWRFb1pRX0ZDWXNOWQ?oc=5"
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
    "date": "2026-08-15",
    "event": "CrowdStrike Stock (CRWD) Opinions on Recent Analyst Price Target Increase - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxQOTJXU0VyNWVLSlhxWkRkMVhyWEZ2aGFEbXRyRGc0aTJGd2VYU2tnZlpZcHc1UklOTzdNM3UyUzVsaDdhOGd1VXcweHhGeWVqTHN3U1dNUDVaYWNXTV9sNnQycGJkTmoxQ1dmX0hrcTRIc2dScW9td1pwOE41a3BYakJvNmYySTd2djlUQkRXMk5YNGJaS1kyS3dJdXN3SW5hRDhDR0U5VmNoT0ltS0xR?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CRWD Could Beat Q2 Expectations Across The Board, Says Benchmark — Firm Sees Multiple Growth Catalysts - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi8AFBVV95cUxOa1FRZ3hYWW1qM0JqbGRNWVVJNWp0LVBXa3dienpDV1RlSVRIZm5jdGV6N3h5RnM2NnBoVkVkNlF5QU11Qy0xYXdnd25IbWJ3QjAzNHJXZ0h2UVFTWFo5ZFA1UWF1M1QyWE55MG5Dc2VIX1JtbVlyMWI3d0NtWVdIV2RMNFg3Qzh6blNGQWI0V0NkWVNpYXJHc1dHc0YtMkhaREp3dElmR2xBZW1jcDZvUmJQak5PMFFSR2FuMHpDbzBIQzYzUHowN21uZ01uVlhBTF9CTmwyeFBacy1ZZDhsZFN4bmVEVnJhR0VkbDhGeHg?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "CrowdStrike (NASDAQ: CRWD) CEO sells shares while 400,000 sit in trust - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxOdUtJQ3V0SjhBRnNUaGk0N2M1LWJnTUpRWTEwTUdlc25Fbmc0NnZHZDNIS2FlUzRkeFlLbmxlanA2b29XWEM0LWFXSWNIMlNQMFlieTdsNUUwZTZjV3ViU0JVMW1JOTlBY0pVVkM1cFB3TUwtTzdRMENwNXhFM3JLbEF4Z0xMMlZLQnZhRWJ0akt0VDN1ZnpyX3MxYzkwYWF3aEtReW1aQXpxNEYybHRLbThVS0JQVmJaS0hj?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "Renaissance Technologies Has Taken a New Position in CrowdStrike. What This Means for CRWD Stock. - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNeFA4TWVCTWJXMXh4elpOdk5iREhRSWxJbWd3eVM4S2Q4YUpfa0Z6bFk1LU13VndjVmI3aGFlTnlmU1BwOTg4RzJ6ajBtQzJDc05OM0I3Tm5yb3NmSU5BQnJmc3FqcGVpYkJIckY3S3F6MGFhWjN3TmlqSWRvb2o4VGVDeUJGSmFseUg5Ul9NbnVxREtFTUJfdS0wbzRFYXdkMnJBdWZXaTlaTFlCbDlpdnN3M204OVBsU3c4QXNnQ216Q1g0WFFrSUh1THN0TUN3ZVNJVEZ3?oc=5"
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
    "date": "2026-08-19",
    "event": "CrowdStrike Eyes ARR Growth as Analysts Debate Premium Valuation - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1AFBVV95cUxNdnFhNVhtb2hVMGY4TDJlVGN6azdnRzlqNzk3cEFXWHp1VTZWQW5MYTVkeHlQTWVEVjhtZnNaVU16Wk5Mc2pydFZCZUtQa0g5UkduV2ZNcUczT1dqNVQ0R2x0OXROSVM4NWNROE12dWpDMUlRczB0RWVSNUVrWW02WDVxQ2Z0X0NrSFh6dklKaUpKcTg5dXQxMDRjZVdpb1d4bXpySldVTloyWUlyMm9PV0VCeVVLNF9jd2tVbllPZEdFb1lvUmZWVFFPYzk0MnZEZC1Oaw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "CRWD Maintains Outperform Rating by Mizuho -- Price Target Raised to $240 - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQQXBSWlk5LV9hWV9XT2ZuMnRjTzJpODZDSklDdlpna29RNkhiSTJJQVl1SzhQbUc5MHYwZEZSbVg1ZmI0REJaRTFYS19DbVF3Z2JCQkl6RnJGb3JwMkFxZ0dxdmd4dHlfaE1kbVMxNVJucWJzZmhNSDFKaHBiWVBaOHZFOVAxcENtNjdhbDV3VUp2c29nek40ZjdtUEwtRzB2X3hUSWc5Q0dNazRv?oc=5"
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
    "date": "2026-08-19",
    "event": "AI Panic vs. Reality: CrowdStrike's 110% Rally Forces Downgrade Ahead of Q2 Report (CRWD) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNVE1TQWxHTVFQdnQzMl9ETzF5OTRzRkFWajh0b1I3U0pBNldQekdMQlJ6bjZ5SzM1bXdXSFU2Y1g1c3pLNW1QOFdoU042WkF4Y2dLdXZmY0huUzBKWmI0eGVXeXZNXy1yZVFTSUhRdVRic1lxampKZTgxZEstTE9iaEU3VXpQNmFpVVpxQVpqUjdzVGVuQ0o0dWhVdmJHM0tJeUZPMXQwQnNKSGxtdHBWVEV5T0EzV0t4WUhld3pHQUFXWkJSS3c?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "CRWD Maintains Buy Rating by Truist Securities -- Price Target R - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxPWnh2ZnJ6cld3UHNFRUpqTEswbkREcTU2VU1uQzZFRTE0VFZxcWg2UjFBRjBLdy14a1UzZWJCN0RCM0hnQUN6Y1N6cV9QVGtOZU1qZHFoQjRuTXl4RXlMb2tTQXRRakN4V0p3eVRobnh2MmI2SG9nY295d0F5eVNmSXN2cFI1aW5MQTFsR3JhaDlYZkdpVWw0VWMtSVlMU0R4YzdfWmNpMFNZOUszdDJiMVJB?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-04",
    "event": "CrowdStrike Stock: Is Wall Street Bullish or Bearish? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPclQyUUtwUFZlcll1NXBRclpUVGkyMjdDYVVaN3JMdE5jaDZHOHEtcUVhbERwRWRWUWk3UXhmOXMtUUpkRWpoS0d0OUhzbTNLZ1ludF9VLVMxbS1va2Q5TXNRWGYwVWlNeEpieXBOZ1Q5RFUxaEdaUjY4d0tVRk1iLWhRQzVzVktkZ3Boa1IwQzNFaUIzVElObzdRSlJhZFpyZDJrSg?oc=5"
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
    "date": "2026-08-19",
    "event": "CRWD Maintained by Cantor Fitzgerald -- Price Target Lowered to $250 - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxOaWVoc3FBS2MxWXpXNE1McmFFVUNsQ0V5RzBrbEVGUW16ZHpaMjQ2cXJ2ZGJBcTd2YWp1eVY5Q05KSUx1cmVPTXp1MkxOenhHcl95ZXJ1N2JWLWdWOWVLZE1HQkxsOHVlWGZhbU1BSlZwaTZ5YmIxMkpBc0xZSVR1Yl92NmxGbl9vU280VWZ6b2NYMldWNTVnWFd2X0VXTDV0aWp6ZGp3?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-07-31",
    "event": "Jim Cramer Believes Cybersecurity Stocks Like Palo Alto & CrowdStrike Will Do Well - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNa1I0OHZuRWhpSmZNVENNVGhaZE1telpyZU9Wc3VYRzdqd0xuM2ZQWnNSb0NLemc0VklxT242VVBMUkdNbTVZd0R5SmctU01rRzk5LXRrSmQ3SDV4Tm5CY3RXSE9XODVYaGhSSENOWkJfazRwdDVnR0o4Ynp1Ym0wRE45YW1VazhwbHVJTEpRcEQyMDZWMk5ncTA0bnBMX250TnVOM0lEbXQ?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-18",
    "event": "CRWD vs. FTNT: Which Cybersecurity Stock Should You Buy Right Now? - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNN1RzOWIteXdRaEV3SXpYeGtVZVBkdV91NHZNNmo3bEdONzlLVTZiRWlaYm45M3QxdFE1QVowZzJXVElnUnF2OWVPakxiTVpjRUdKMGE1XzdVeUhQek1CRV9Kbm0xYm1JMWllZkJaV1VoMFQ4SEZIbjFCZlpyZXotOGw4ZDFHU0NuMXlKRlNDVUNybWpRb1RIZ0N1T2tMWF93UGYyM0E0cVkzZGFCM1lta29WN2ZYUXp3LU13N3c2QThmT1dzQ0JieE9yNUl1UTl5OUkxUURlX29QTlVTRWQwNDhB?oc=5"
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
    "stock": "NEM",
    "date": "2026-08-19",
    "event": "Treasury Yields Fall, Gold Jumps On Bessent Buyback Plan; GDX Flashes Buy Signal",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — The gold price jumped and the GDX gold miner ETF surged on Treasury Secretary Scott Bessent's move to cap long-term bond...",
    "url": "https://www.investors.com/news/treasury-yields-fall-gold-price-jumps-gdx/?src=A00220&yptr=yahoo"
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
    "date": "2026-08-19",
    "event": "American Rare Earths Appoints Nick Lissolo as Chief Commercial Officer",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/energy/articles/american-rare-earths-appoints-nick-120300225.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-13",
    "event": "Newmont Shares Rally 24% in a Month: Buy, Sell or Hold the Stock?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/newmont-shares-rally-24-month-124100830.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-12",
    "event": "Barrick Mining's Q2 Earnings & Sales Top Estimates on Higher Prices",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/commodities/articles/barrick-minings-q2-earnings-sales-121700925.html?.tsrc=rss"
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
    "date": "2026-08-19",
    "event": "Newmont Corp (NEM) Shares Surge 7.8% -- What GF Score of 81 Tells Investors - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNTkxxQnNMb0NjZ2ZaUnpzZGdxR0o1SkJUbjZjSjhqQnFNbmEyLVJsSzQ0NF9udnVsUC1Cc0J6WHRiYkxwQ2cxYVp3eHlyYURWTTNPTS1hM2VRZzAxaUFobXNhdExnSWhoTmxPMTdZXzgyaXpaQjNCb0QzaGw3OEFrZ1VYNDVCblRrQTM4MTNTdlJSdE8tQkNmZTRGT3c2eXNRNlhSaGlKUnBXbFU?oc=5"
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
    "date": "2026-08-16",
    "event": "Newmont Corp (NEM) Stock Forecast & Analyst Ratings - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wJBVV95cUxPbGJVb1ZkWF9jLUxWb3hwUjRZTmFSSmhSNUpzQU83OFBLVVpfLWRLNnhZZHQwVFM2RWRybENyX3NsS0NPeTlfamZ1T0pUNjdYM2xCcUJOQVFJRkZZTElURmdhSGtwdWtJWWdnMlJMUkM5blFlUzBjTWJ5blVNQzAwU1d2eGtxLTBhanluaGpDYTJXZXJtdEtYUkdDdXRwM2FGejZXbkRQN3NyQk9aWHpkaldjc1BVbUpjRHVvNm9yTm96eERiQTRudnAxWVRUeEwzaVpTUXEyalR2dVh6bFZEQ2k0WWIxRjAyazlyV2lpai1mdnJYQTExVGZfQzlUREgzcjg1MHRPRjBZWU5UUTd4SDZoc1l6UkNMY3JxcWFubWdyUkNtS0hHQ1VjanRZRC1qeGl2VjlDQVNSa2w2WDYtQ0VlSWltOWdFbHdlMzY3d1ZlY2J5UVpn?oc=5"
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
    "date": "2026-08-17",
    "event": "Will Higher Unit Costs Weigh on Newmont's Margins in 2026? - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxOam9WSGg3b3RVUmNaU29wWGo2YnFKRVd0b2J0NjBwdHdpRHVjaUo2NnhMWDJnS29tVTVVaFM1UFhHSWRlYTBhYnY5WGpGalh1V2E2azZSX1JyVEUxSWdKbzBtX0J2MG5TSjV3TUZOWHFyMGFjU1FTOTlMMTNmaTVOeVdxSmNwb19BNGhoa2UwTklKeE5tQ0xxb05mWGNfM1otQ2V1NnJUSzNaZTR1cXMyeW1VTQ?oc=5"
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
    "date": "2026-08-18",
    "event": "Newmont Corporation Stock (NEM) Closed Down by 3.57% on Aug 18: Key Drivers Unveiled - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQSGJ0N094VWxMMlBJWWpldTBNM01UaDRvV3NtY1RCM211emRFQkh1OUxhS0VfMGFaZGl6ZXZFTDhhQjVYRFpFWVB2UXpYNjNsWTdwTVZCWmh0ajF0eEpPbWpLQWdOVFUwZElMQk00emVQaDJIbmVTT0ozWEpweWlicjY4MXYtOW1WSXc?oc=5"
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
    "date": "2026-08-18",
    "event": "Newmont Corp (NEM) Shares Fall 3.6% -- GF Value Says Still Overv - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOV2poN2FiTTdKdGl3eHpZQjdFOG1xRjFRdFZ0UVJrczZMTDQwbDcwUEQ4M1Naem1DUkZXWE5UQnAtTXpNTmFnWkc1YTlHM25CUWg0THQ5bV9yWG5wNXE2Y2lTck1tczdhZ1h6aFc4cjk0ZS1BcWNPTEZIQkFfbTZaYlRJdUV6UTBrVE1xdW9CN3d1UTU2X19jcE5oZEY1WVdzck9z?oc=5"
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
    "date": "2026-08-13",
    "event": "Newmont Shares Rally 24% in a Month: Buy, Sell or Hold the Stock? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPRXpibXl3VmU1QTNJUzNRbEpqdGVYc2NLa3BWaHhHOGFBWWdIeXRuRE9pNkJFTy1PQVJHYks4N3NYanU3ZE0xbG9RYnJfdVl6Q0RsTzlhUS1oTUhCUktMZm92ZFhHU3BySFFTekxFaGdISXZUcWZFZ2FPVkU2STRqYno5ZU10RWZhZmx2YVBIN3luRmltd1J4d3F3?oc=5"
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
    "date": "2026-06-30",
    "event": "Newmont Corporation (NEM) Stock Slides as Market Rises: Facts to Know Before You Trade - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPLU9XcloxTlFKdkttN3hwaGZaYTY3c0FkQXF0YkFFWjlDc0VUNmlXTVdvOXd2Mksya3UtMVRiWktTX1diWkFMZk45UFlDa2xUMDVVaHpfaUNvNDdkbWtwUFNrY3hLOGUxUDA1MHdjREhhOHM5eURfVHRlMDlnZTFMc2tBNWw1RUhQTF9TblpXbHotZkFRYVpNWmVnaGtrcUpVR0M0?oc=5"
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
    "date": "2026-07-30",
    "event": "NEM vs. EQX: Which Gold Mining Stock Is a Better Pick Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNWFMxcF8xd3JiQUE2a2J1RGJEcTJjYmhRQ2didW5VdHhwaEZNdUtJMDIzZTkteGhTQmlIbWNnRXMtenRNcEpKd3lJUlJZMTAtTUljUDgzMHhNVkcwN2FtWlZWT2gzQmVtalFvTm9CRUVUeVVHU3N4SzV1eUZWTnJ0ZUIzczBhUVVFUXVtSHdEQ0s2cDd6dElV?oc=5"
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
    "stock": "NEM",
    "date": "2026-07-31",
    "event": "Do Options Traders Know Something About Newmont Stock We Don't? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPRkdxaDE4cWI5UjNrUTBSelluSXBDZ1FGT09ncl9WdTZkbGZzOS1yd1hxOFVhYzV2aVItdlB0UTM3RFA5OTgzRlBJbFpOZnVINnNNa3VDbWNnYUJCZkxwSG1mZ2h0alc1cUVDbWVCNGhmSmY2NG1sYmh1enlfaTdjYS1EM1FtUjZqTVZCLVRrYkdyWTM1ZkdVT1lNZTd1VUlYWUhERzJoTQ?oc=5"
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
    "date": "2026-07-23",
    "event": "Newmont Corporation (NEM) Tops Q2 Earnings Estimates - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNQ2UtSVdSeWtESWhHVllNSFVqNWZYZlUzeDRYNGxfRnl0bE4tbnBxb1hJdzZ5dzJBM25tbjhxSG01bnhoUzJXaGpBZVdiY21PWklxdHowSlAxYU1pSG1ROG01Mi1BMG9DZGJtUFhWOUg3Vno5ZEVPaF9JUVIyZ0NlcUhKTUIxRVBMZUNlbFRfSVFhOUNkNnp2Sm9QOXc?oc=5"
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
    "date": "2026-08-15",
    "event": "Newmont Stock Leads Gold Miners With Strong Margins As Inflation Risks Stay In Focus - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPUEJjdHcwNkZRUzByX3JpT3F4UWQtWkVGYWdlOC1mZG05c29VQ2ZFTnNJTWJXYXUxS25WNERGWENDNGo1YjFaLWV3VVQzZkxKNkhWZkRfWHVMdmxLWmpaZTlUM24tSkx4Mlh0NXEyZkVWTVBBTXRCRnh4ZEQ3VHdHaVozdU9Dc2NIS1dhVHJHS1RUZzlkN2ZlWVNZbHlSbmlrSnhuQVJzSUxleU1sd2pXNHBrWk1tSzF4UWMyLS1hdjlWQdIBxwFBVV95cUxPLVRNV2hTRnNUUWp6aW9KcDN2SHoxV1BKejBHa0l4RDZDaXhBbWRwTFVSOFA5WDJiSDF0RlJhWC01MXhKOTlONEhpUmhCMFExeWQ3bERhVzlSVTRkRXdLYWkwUkhfekZSaFJzXzdHSjBVekg5dzEya1JzdDZNT3RHTDFySnczWUZKNzJxcjRTVVl6NERuS3J1X0FIcmdhWV9JS1dyZmlPUnVMZk1CYjJ6eVBlU0hiT1poSGpSLXAtTlFlSkwyV21v?oc=5"
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
    "date": "2026-08-19",
    "event": "A New Defense Stock Is Born: Lyntris IPO Set For Wednesday",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — The defense contractor Lyntris sold 17 million shares in its IPO. The stock closed 14% below its list price of $17.50 a ...",
    "url": "https://www.investors.com/news/lyntris-ipo-defense-stocks-pentagon-lockheed-martin-rtx/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "RTX",
    "date": "2026-08-19",
    "event": "Honeywell Aerospace Stock Has Fallen Far Enough. Morgan Stanley Says It’s Time to Buy.",
    "type": "NEWS",
    "remark": "News via Barrons.com — Morgan Stanley analyst Kristine Liwag on Wednesday upgraded shares of Honeywell Aerospace to Buy from Hold....",
    "url": "https://www.barrons.com/articles/honeywell-aerospace-stock-morgan-stanley-d7855d56?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "RTX",
    "date": "2026-08-19",
    "event": "2 Industrial Stocks I'd Buy Every Day Before RTX",
    "type": "NEWS",
    "remark": "News via Motley Fool — RTX is strong, but its shares are near their highs. Here are two industrial stocks tied to AI infrastructure spending th...",
    "url": "https://www.fool.com/investing/2026/08/18/2-industrial-stocks-id-buy-every-day-before-rtx-co/"
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
    "date": "2026-08-19",
    "event": "Commercial Aircraft Inflight Entertainment and Connectivity Systems Market Report 2026-2031, Featuring Panasonic, Thales Group, Safran, RTX Corporation, Burrana, Astronics Corporation and Other Key Players",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/commercial-aircraft-inflight-entertainment-connectivity-092300628.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "RTX (RTX) Lands $22.9 Billion Tomahawk Deal With Seven Year Production Ramp",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtx-rtx-lands-22-9-010728674.html?.tsrc=rss"
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
    "date": "2026-08-18",
    "event": "North America’s Only Cesium Project Moves Closer to Production",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/energy/articles/north-america-only-cesium-project-000000475.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "Boeing Stock Commands a Massive Premium: Is It Truly Earned?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/611666/boeing-stock-commands-a-massive-premium-is-it-truly-earned/2026-08-17?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX, Pentagon Sign $23 Billion Tomahawk Missile Contract",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/840f039e-f7a6-3452-8856-142ad01604ae/rtx%2C-pentagon-sign-%2423.html?.tsrc=rss"
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
    "date": "2026-08-19",
    "event": "Ramsaran Maharajh Sells 13,655 Shares of RTX (NYSE:RTX) Stock - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQTFdHX3hQc1k0OVd5aU8zcEJWYTllbEZBUTNUdVF3dkdoX213RjZFa08wYlRScE5YNnhvUFY2aU5RbHVOWFNsVzg5bl9Dc2I2a1dVYXplUEpGeXNLQ3Y5c1I1SlRSZURCcFpsbUdPdU82eWNod2JrTVltZjZZcHlMVkZFYlJrMUVCLXV4cXMyTEJVS2NSLVFUemlmZDA5b3l2UDJWVllfcjhCcGtxQjViUg?oc=5"
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
    "date": "2026-08-19",
    "event": "RTX Corp (NYSE: RTX) legal chief unloads 13,655 shares - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNVFRCWmdLQmlQdE1TSlFqQUdmU3BHVnVUdkgwOUFzN3l3azBOLTV0OE5yRkpUc1REUFBnTEV6UXNaTGMxS2ZwY3RlbUk3RkVwQkxvLWVNNFZLTDA0dFpaRVRQRk5XWm9EbWlYVGNvMkpWVlNMNHQyVGhnMGFsYzl4cDMwaHZhN1d3VnBYNGNIVlpuaGMxMm1vV1hVdVZNRlVfaEpF?oc=5"
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
    "date": "2026-08-19",
    "event": "2 Industrial Stocks I'd Buy Every Day Before RTX - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQUFVGMXFhLWdXRDd3c1dna1pmVm9Pd2E1MGhVSFJ4LTZHbG4wcnAtU3JrakdSdEhNSG13ejVzaEFMLTJKVE92dFNSQ1Y3ZXl0bi1DTnRNbW9HdUVGclNRdDJDbDZtOFRkdlladHluVzFaZlFwUnF0NkdLZURtb2tQclNnMnZNLXgwQzZTMTlWS29rcHQ2dEhPVw?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-19",
    "event": "RTX (NYSE:RTX) Stock Price Down 2.2% After Insider Selling - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOdE44eW1JYW84NGFDYkl6czhHaUdJWnFCR2tZZXUzS3lfdFNOb3VNcGY0SmtRMkx3UFRTYkUtOEhGMngzYm9LeUdyRnFXdWduUjc3aWY5MHViVDdyZm9peEdXZEtpSnpyMHlYSnZRTVRDc1E2RGxtV3BQREtkUG9wUlY0NVNOak40V2lBVnl3M3dJcTF4VzdxSEpoZF9mTE1LTDdTZF93U1RVLW8?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "RTX Stock Alert: What to Know as Raytheon Nabs $23 Billion Navy Contract - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxORjZ5dnM4dExWWXBKZC1MMHE1V2w1V3M3YUFNZi1QVXBXb2M3a2k4dmhLY2cwNGdhSk9qd21oZWJLZHR2WGt6NUVxLU5DNmdqZmRNNk4tWXlyNVFWdUJ2TmJqaHQ1b2c3RlR0MXJIMWVzbWxyS3lSb1p4V3ZkYzYzTTlIX0F1ckFDeFpLNGo5RkZ5TG1lNkNUaW5B?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "RTX Stock Gets a Radar Lock on a $23B Navy Win - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxOYk90Q0JhbUhLVGh6b2o2RURuTV9kRG9fc3lqd3hFa1RIUkxTYjNyXzNPdmxhUWNacVZHWXhmVjB4QlJ3bm95TWl0MlpxazdpUnVSZEd4ZHJBanRXalE1dU5XbHNUZ2lSeVVpLWhaajNOS3ZJLVJMQ0FBT2NnRkdaU3JOX0E0ZDZGenBmYVlpNGNiemhC?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-06",
    "event": "What Makes RTX (RTX) a Strong Momentum Stock: Buy Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNRzFXSFcxVmJtREFjbjNZekVNcHJWN2NvcHVqbmN3MDlxcVh1TFlDaFlONlBubGZiZFBxejFIeFhWZTFLMU55bzI2Rl9EVzVHQ0JBZXQ2NFdicGJ0dG5BaFVuNkFkSy16dHJoaWc5cktRVXBnNmVZaXBEemlHZVlOTEhNXzlBZE1FN1pjLXltc2R0ajJSM1VNeENR?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-19",
    "event": "Danica Pension Livsforsikringsaktieselskab Acquires Shares of 99,243 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNdTdsWWI0VnFjNkVtOWFrZkxCV291TFZydnh6QVpOUGtHMnJiYkMwNFNaaWU4NWpyUW1XT3RzYllCRzBMZ0xtM2pPV3hTcjBFeldPdFd5dFlpN29pNVAzQ3hoS1E4WHV1bUtHUTk5V1pWb2JpY2VMNXl1UzZBOVRTQm02bk5fSkRRdG54ZDBQYTV2RGZwVmhTdFR6OUJKSHUzOGZsVWVmeTNDVm80ZGRMVTkwRGVZcENsaDducEpYcWpRZFlwYnVfRFNOR3hxZWFJZkVqM1ZiaHEyRkFocnpFWHZR?oc=5"
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
    "date": "2026-08-19",
    "event": "Diversify Advisory Services LLC Buys Shares of 46,852 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxOeWRZSmxCeDNtYjJtWVp3dENiS0gwUldpTGxTdzVyMVJhTkNOdmZZcmpILTZILTJTcDVDamlMclZWU2lVWHViaXNnMHpNajUtRzZNNmNINl9UbGFtRmNOOVRaaUs4X0c3UmRjdFYwUkVfS21sMk9WNzdVSHRMTF9NMHhqVVpuWGpuTDc1QXZ2azFTa3k2M3RWUjJnUzdaOFFSeEY5NzBYRVVNSHAyVGJKRkMzbi11WlNJU3Fuc1dFTktGLUxsX3I1cFRhd3loUQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-19",
    "event": "10,691 Shares in RTX Corporation $RTX Bought by Gables Capital Management Inc. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNQ1Nfc0hucjAxRE1nTndCeXJId213UnU3ZnJwU3BUcWlDdkRCT0FEWDJldHh6c2MtMEdMeGVOaFdYa2xsalRWRXhJM0JqZXdIWjVQZ3BGeXJHMFdFQjRYWFZYSjJhNkpBZjlmaTBPWG94Qk1MeEV4dU93UmRmblB6eFF4UnhKY0JmOEkyS21OcWNMYjZrSVZIZTBhUGQwRWRZQ3VBc29kN1pVVXBFZ1ViemV1aTRpT1FxeW1ucFdzLXpNQXQyMjd1ZUJnWGR2ZE1ydkE?oc=5"
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
    "date": "2026-08-19",
    "event": "Compass Wealth Management LLC Acquires Shares of 33,949 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNZXU3SVRMWUU3YVZqaXpiYWtMYTdkcnBSZHlwQVZPOTdSdUswU0RodC0xekxhUldvUFRhUTdoZzl2THhnUVBBd3hlVGN5ZUk4ZFlRNVhKYlJmTjFXaVpodW0wQUM1Z1ozTXotMGlPMFIycE51d1lHcndsM2VPZ0pOeGx4MUVyUnNOSk12TTVPWEk4TG95OTF4SXl1UGZPS0xJWVptTWcwMGpTQktvX0hIbEx2MUlHTGtUR2p1d1pGajFXcGVhclc5M0ZDS0NySDdJ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-19",
    "event": "2 Industrial Stocks I'd Buy Every Day Before RTX - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNeWg1emJyVHJhUzFIV0Z3S1dUVktZaGlOY1dNcGl3Q2UtY2V6RE1lenpTYXdxSnIyVnNhc2ZZSkhIY2hDNndJaFBOdVBzMWV3OEdzeVJOOWdlb01xSHQ0ZXNBNTBkNVhJS2wtUkNYOUg0ZDdOdVdFYWNjaTJlMkg3NWZlc1BJTllUNV9SbjFSVFdFVHRwSEE?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-19",
    "event": "Catalyst Investment Management LLC Acquires Shares of 4,743 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxOZnZQbl9rck1UbFpWS2RwYjlQNWpydVM4cWJoNEVtNkRqMWRDY1NiRVU3Z01uWk8zWlN0NDhTT08tcm1Qem1Ea0s3M2QtMEZ3VzVkWEtLcmpNMDJtV3hWUngxSTEwVmtQZHdJUC1ycGZmM3haVGlYRjY1M0lpZDJsVjBoQVhJMlNDMmZrSEJjMk05ZWpQWV8yNlExN1BmMFdQcmdwN1MtSWVIdVZhYmtNT2xGOGV4TU80ajM0V2p2X0NUUzNaRDRncVZVb0hYYTJZUF9ya0hB?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "2 Reasons to Like RTX and 1 to Stay Skeptical - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxONFJUcHVWV2V4LTB3Ri00QjdpaWt4bG9LVkVsQkl2TG5JQlZGcnBhWWhvSmdmU2xxcTVCeHQ0MGl3b2lOSHAwdS12YmQyczVtM2NkNWJMZHkyRm41RW5YMGRYb1RKZGdlNUhmalhuS0dtU0wwWDFMOWt6Zm1LYlRwRl9rdEdSVmJFeklwXzl3?oc=5"
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
    "date": "2026-08-18",
    "event": "RTX, Lockheed, and 7 More Stocks to Consider as Missile Production Rockets Higher - barrons.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQeS1lckRJU1EwSzhnY1lnZXZ2UWFjUzVESDFiWTNxcjluTENFbG5nOGlDNDJIZGw4T2NzWlI4dDV1TTFkQkY1Uk5FMDhsYzM5Smpha0ZlZFhjaE5yd2pvNnNwaGhyVVA2dzVuX0w2Yi1hSVRYQXU2R0RiM1p0LVFuMTYzRlJRdWdlX2RlMDlBb1UxUQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-17",
    "event": "Tomahawk Missile Production Is Surging—and These Stocks Could Benefit - barrons.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxOLXdvYVZXMlczS2VSX2NzcjZfTGtlZUNUM2hndVBzaXAxRFFxMXd5VlVDQzJiNkFZaU5JSTE5OFdGS3VhSUVybWJ4aUR6MllqQmg2U213clQzVkotejNaSmVjc0JRb1lidE4wNTVPSlBTdGRpY3l2ZWtGUW1QaGs4TUV4dElTZFB3YXg3YjhsVDdQbFhIX3ZXdFVR?oc=5"
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
    "date": "2026-08-18",
    "event": "RTX, LMT Stocks Head For Weekly Gains After Solid Q2 Performance — Retail Calls Defense 'A Bipartisan Issue' - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi-wFBVV95cUxPdmQxZFhTdnZtdjZIc3JyaERDZ2FPTENjWk9ieXAxUXhQVlBmS2NfZ3RzQkFBZUlkcEo2OEwzWVRhOENCOEJfUXZfS3FseFRtV1pFSjhXSGUwaURSUFJmemg4ZmpWVWtodF8zVjB3VThxV2VJTVRncUNwa3hjSTdUbG9JV2ZKR05feEE0b19rNTNxcTJfTjhzOHg0TGlxREFfckN2Z3JIOUNjOXhjLW1lRUt1UjVEbjRnbV9jYkVhelllNGtrNGRTX0o4bkt2U1pOTDNobjVTa1pBWjZ6WFFIZDIxVkRqTFN0TnJNMDE4eXJSSkl6eHNreHQxRQ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-19",
    "event": "Is Leidos Strengthening Its Position in the Growing AI Market?",
    "type": "NEWS",
    "remark": "News via Zacks — LDOS is expanding AI across defense, cybersecurity and logistics, while its OpenAI partnership supports adoption across ...",
    "url": "https://finance.yahoo.com/technology/ai/articles/leidos-strengthening-position-growing-ai-125700215.html"
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
    "date": "2026-08-18",
    "event": "LMT Stock On Track To Register Eighth Consecutive Session Of Losses – Lockheed Remains Confident About Meeting 2026 Guidance - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxQMUE5WWtfMnU3QkNlYnN4LWNVdTJWb1JwcG9EbkY3dnpFNkZvV1BJcW5nNHFFLVdFcHJXZkpsWWY1OGNtN1ZBSVl6YkxlYnNSMWJkNWdGRDNTRFNaa3VJOE9va0pqWFdISDRZeWxnOGkzREt1cThWVzlBLUdPMzFIaC1GMTUxYXlja1Y4OEQzaFAtMlg0U0pDY2hWVVR5dXR2UEh1a0dGbW5lSGF0eXowWUlOckFBUTlvM1ZVdTdFVC1pZEZqOWhNc2p2QmVRblE?oc=5"
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
    "date": "2026-08-19",
    "event": "Lockheed Martin Has a Record $230B Backlog. Here’s Where the Stock Could Go - TIKR.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxQUmNXQWxUb1E1YUhWVjJ3aUZmNDJXenpfUXlaU1ZFNTNHbnQ1amg1Z1gydnNsVlFzblZNYy0yUDQ5N09yQ2pqbnEtUW1EMHpscVVzdnBhZ21jb2ZuRVJ2SjJJLTEyWXM2WHpWb3JQdmdCQ3VHOVdOSGVHUjZtaTBzR2Y0cjYyZGI4TlVOV1MxOHVhX3NFa2pMRUpCWW04OG8?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-19",
    "event": "Wealthfront Advisers LLC Makes New $13.89 Million Investment in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6gFBVV95cUxPQ0ZjME56WjRzenhiZHNuRm9hTUhKOEc4ZVNXMDAwTk5JVUR1RUV4MnRZTWFkWldtQ0tSOUd0MVplWkJITnRKRnVGdmpqNXV3ak8yTGtvRDY5bUEwaUVJaVZFanFqcHFURkJWbllqdjg1bk4tVFg3bkZrckFsZXJSUXBYTDRGczZOa3hrWlJMMUloaWVWeS1ZbW5Pa1hnNGhjQ25tUDFsRGpZNGhMZTdDemNwb3JhM2RDdDZlOGJiSlV2aEZ2eFFFdEtzVmpETkNGeW9uQ3lzRm9GeVdyWVdIZS1NVk1UX3lCSmc?oc=5"
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
    "date": "2026-08-19",
    "event": "Aljian Capital Management LLC Takes Position in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxPaURkVTQ2eVFLVDZTazJ4MnZmeTRhaThyQV8ySVlaTVphYlRoZ2NWRTBKWm1oWEdIaFQ4bVJZc3BDYjUxWUN6Tkx3U0V0ZndKZ3Y3M2NZMV91TWRLU0R3S3kwbl84MXpHVVhWLV91Qks1R2FWdTk3RkQ4cUp0ZWRTX213c1pXcUJkT3Y1SVNhWG03N1otbnZaTUl1cWNUdFBtTWREOVZfWG5aSVZ0eVFwRkwzdjhVRDk0NXRxZDVuUFRKT1lkT0h5Q0JENnVnb3czLW1XTDN4cw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-17",
    "event": "Government Contract Update: $991M payment to LOCKHEED MARTIN CORPORATION - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxNTFF2cTgyVnZVVF9acHc4a2V2Rkt0REpoZE5UMUFfZU9aTmtybVg4THFwMFlqSVNrMThDWnhBd1lTZV9nbFVMUENxbHllRlBkeHQ2ZmczTnF1QmhyWFBkMmVSbUotOXp2NmdNWmtwX3F2eWI3M0VXakx5YjdyQThqcFNkMTRjOW9hTFJiRHFWbTg0bXViMHFuWWhBemxlY1Y3QUd0UzRMaW0?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-19",
    "event": "Diversify Advisory Services LLC Purchases Shares of 15,306 Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQOWU0VC13S2pxQTc1V3Z1czltbmg1NzQxODhYOVB4X01mR3I2WjI5TWlfaEVFVlBjeDBCQTdHRlhzZGVvemlNeDdvalhCcXN6ZVJaalRTN0tPcGlZR2h3ME1pZWxLa0VZTW5adzNJRFU3ZkFEQThmWnB4d0N3VndhUHJPZTA4M0p5b0N6ZzExRTVjQmFkVy15Wm9rd3ZkUjVrT0FLaDJxZzBTdnpTcWtHZW95T2s3RDFxTWcwNUxiSEVRM1d2dl82NTJuNGVfV1dPM2JvT0hqb0xvZ2dIYkpkVDliUWY?oc=5"
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
    "date": "2026-07-14",
    "event": "Lockheed Martin (LMT) Stock Sinks As Market Gains: What You Should Know - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWFk1M1FtenVLNVJIaXl0d1JtelRSWFZ1dzNvZ2RSWFJiclFqQXhZQTJBeENQSTAxMzZNR1lrQV9vbmpuZ29ESVNlMFRfeEZHYk1Pek82R05rTFNNODAtTlFtNjRwQ2ozYUpINENxdTBDUG5UalVtaHk5QUNvRE5WVVVYT2hYNzI1cFJZZ2s1YVRLRFBjV3dJcnlBcUc?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-19",
    "event": "Plato Investment Management Ltd Makes New $903,000 Investment in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxPMWZHWXprS0toRHlZOVRjVnkzUy11MGRpeUdQWktBUnJzcXRkT0UzTVNPcHNjUk83R2RfdXZqTnVycWNyY29tcEllV0J5aGw1TU1Mb0VWQzNHZEZvLWlNVnhvR3JycHh5YnhRdEtya3FiVWhtQlVyXzZVWkdMalRHYnRGNy02V2lITjFmd1VJdC1XdmNJTk1TRnIxU0x0bzVSMmV3Z0k4UDN2a21hcm0zNUlaX1ZINHEyVFpKTndxYTdpdm9kWE5Wcl9VLVV5ZmtlcWd3T1hYdVJURlloSXk2c3VWcTZQdFVwNFhj?oc=5"
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
    "date": "2026-08-19",
    "event": "Deutsche Bank AG Acquires New Position in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPbGx5QzZpaGt0Qy1ZVEs2LXJZdXhtQXdsbzBYYTZHakR5LWhSVE8yVkswWWY4N0NFT0JKSGYtSTFrSUVxMmZGRG1mTHU3c212MEVXZmljWndxNFlNV0I4RmxmUUdfck0yWkVPUjhXZjNNdHN0cnRZM3RzcGdRaHhuZ2JaT3B2bVI2SlNGR1R3OXhRd3d4MVhrcHQ2Q1RCSUMtWXBOSjRVQkZHODlXU1pqMXJ3cGFOZzBnQ2dqYUpNd0JUYkJOX3k5aVpVMmJoZzg?oc=5"
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
    "stock": "LMT",
    "date": "2026-08-19",
    "event": "First National Bank of Omaha Acquires Shares of 8,546 Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxNbXREQXpyQ1JqY0drbHdRek9TVUlndVc5M1Y2ZjE5YXRDSU1md1hVTWZiZEFsZ0o5ZTFQMzFiajVzYjZqUzh6TlQ3M0VBc1h6OWJYUktOOXA0VDFHQ2NXOGhXQkpGM2hzSGY4elhHZVN0R09iU0ZvTHNrR192Q2dyRDZBRl85SzdVaDdwMHF0dkRUbTVwYmVHMFlaMUVvcl9ma3NvVEhycUlCeVZ0UkpCaDBIQUUwLU5QYVJXUTIwVVBsNXNobF9SY2JzZE55S3M0WHpPOHpVWTJyWWFxbnc?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "Lockheed Martin (NYSE:LMT) Trading 2.5% Higher - Should You Buy? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNOUdsYzZNTmQtVExFU1piYjVtS2xoMUYwblZyYWE4M2FMeHB0NDFiWkk0TnBrMG9FeGs1U0k1UVFwalJIbmZ3N3FNUGZzRTg5MmhfdlkxSFp3UENFN2UwZHYtdWR1SGY2TGRJXzV6bF9LeEZGNzZpQkk1VnhCdlZJeFpLZVNIbjF1MGtmNEpSazRCWS1LaHliZEF0a05neTNkdmlmQ2Q0enA0djRVVnNB?oc=5"
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
    "date": "2026-07-23",
    "event": "LMT Stock Soars as Lockheed Martin Raises Annual Forecast - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQOG1IR3JKUDNUbUZKNFdnMnFjU1ZIUngzbFlvcmxNclduVFR0d0dSWDRBdjVvaDJsUTE5X2VqeV9PRXFrS3FHenExWjFoX0VPNGduS2t6eUQ1YllXZTlDR1IweEVSN0RVbnAtMm5pc0xrdkRtWGJpbXhkY2FyQU9feXlfd1BQTG9nc3BXelpDVXZwZWR6OTdYVVhJZE8?oc=5"
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
    "date": "2026-08-18",
    "event": "UNIVEST FINANCIAL Corp Makes New $4.38 Million Investment in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5gFBVV95cUxOcGN6cHNSak1WR1N0ejVuNC1DY3VKanhjOHR4UFdfbmp4S3I2RjR3LXozVURtUFE0VHprZWhEd3RxTUlpTnh3TGxnZ1VhakdaX2tia0o1YzNfTlVUeDdrXzhjN0p5bTgtcDgyYkRjbHdZU1dmVFNOeGxKN1lHOUthNHV0Ni1hS0RudzFkZWFIelBTVngtTkJ4d2xxMDVTdThBbXBnTXdxUXNleTBnMkdZR2ZncVFvd2tVd2YxS0RFd3pnU0hsd2U5SElMTDdFMEc2VXNJN3ExdVpqMkl5cjRpdTZLZ25YUQ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-06-19",
    "event": "Lockheed Martin (LMT) Stock After Recent Pullback Is The Current Price Attractive? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxQb3ZubWExTWxvbFRFLUYzdkZBTGFHUVNsSkR4M0dzZ21saEE0QUhjRnJXTEZHb3hYVmJMNlBULXliOE5xQnlMRFJlVmdjTEllQkhINTZLT3BzUmFpcGJkVkRoR0ZZM2hJSUVWRXM1WFU1Y29ycDZUcGVEZ0pCLTVDSTRtU2tfM2JaODNZTFcwdUtVX3RrSWlDcTZsR2xIZw?oc=5"
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
