const eventsData = [
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "JPMorgan Rises as Wall Street Bets on Record Trading Strength",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The largest U.S. bank is recovering as investors focus on surging markets revenue instead of bond-market turbulence....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorgan-rises-wall-street-bets-195319479.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "WMT Stock Extends Declines After Seeing Worst Day In Four Years — But BofA, JPMorgan Insist On Buying",
    "type": "NEWS",
    "remark": "News via Stocktwits — Major Wall Street brokerages are advising investors to capitalize on Walmart’s steepest stock drop in four years, mainta...",
    "url": "https://stocktwits.com/news-articles/markets/equity/wmt-stock-extends-declines-bofa-jp-morgan-insist-on-buying/cZY9TOcRJVR"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "AI Cloud Firm Nscale Is Said to Seek Up to $3 Billion in US IPO",
    "type": "NEWS",
    "remark": "News via Bloomberg — Nscale is seeking to raise as much as $3 billion in its US IPO, according to people familiar with the matter, joining a ...",
    "url": "https://finance.yahoo.com/technology/ai/articles/ai-cloud-firm-nscale-said-164230544.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "Forget RTO: Fully remote workers report the highest well-being—and are less likely to quit, new study of 7,700 employees finds",
    "type": "NEWS",
    "remark": "News via Fortune — The research found little evidence that remote workers felt less connected to colleagues or workplace culture—despite wh...",
    "url": "https://finance.yahoo.com/small-business/articles/despite-ceos-elon-musk-pushing-153545441.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "How SK Hynix Could Top Samsung’s $80 Billion Shareholder Return",
    "type": "NEWS",
    "remark": "News via Barrons.com — SK Hynix stock has struggled in recent weeks but it could announce a huge return of cash to shareholders, according to a...",
    "url": "https://www.barrons.com/articles/sk-hynix-stock-price-samsung-a42a8f13?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "Can TROW's F/m Investments Buyout Deal Accelerate Fixed-Income Growth?",
    "type": "NEWS",
    "remark": "News via Zacks — T. Rowe Price's F/m Investments deal could accelerate fixed-income growth by expanding its ETF and SMA offerings....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/trows-f-m-investments-buyout-140300532.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "JPMorgan's Q2 Trading Revenues Surge 35%: Can the Momentum Continue?",
    "type": "NEWS",
    "remark": "News via Zacks — JPM's Q2 Markets revenues jump 35% as equities surge 86$, but tougher comparisons may test momentum as activity normaliz...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorgans-q2-trading-revenues-surge-134900185.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "AI capex cycle look more economically viable than it did six months ago: JPM",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- JPMorgan believes the acceleration in revenue at artificial intelligence companies has strengthened the...",
    "url": "https://finance.yahoo.com/technology/ai/articles/ai-capex-cycle-look-more-132713968.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "JPMorgan says stronger AI revenue makes capex boom more economically viable",
    "type": "NEWS",
    "remark": "News via InvestorsHub — JPMorgan believes faster revenue growth across the artificial intelligence industry is making the huge wave of infrastru...",
    "url": "https://investorshub.advfn.com/market-news/article/34805/jpmorgan-says-stronger-ai-revenue-makes-capex-boom-more-economically-viable"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "Sector Update: Financial Stocks Advance Pre-Bell Friday",
    "type": "NEWS",
    "remark": "News via MT Newswires — Financial stocks were advancing pre-bell Friday, with the State Street Financial Select Sector SPDR...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/sector-financial-stocks-advance-pre-131949582.html"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "JPMorgan Chase Financial Company LLC Declares Quarterly Coupon on Alerian MLP Index ETN",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/options/articles/jpmorgan-chase-financial-company-llc-201000025.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "JPMorgan warns Treasury buybacks delay U.S. debt problem",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://qz.com/jpmorgan-treasury-bond-buybacks-debt-warning-082126?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "Stoke Therapeutics shares rise as JPMorgan starts coverage with Overweight rating",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://investorshub.advfn.com/market-news/article/34770/stoke-therapeutics-shares-rise-as-jpmorgan-starts-coverage-with-overweight-rating?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-20",
    "event": "JPMorgan sees 100% upside in overlooked cancer drug stock",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/investing/stocks/jpmorgan-nuvation-bio-stock-lung-cancer-ibtrozi-nuvb?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-20",
    "event": "Layoffs at JPMorgan Hit Highest Level Since 2015",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/109fec68-b4fc-3cf4-a6d8-52bc4c3a1cf9/layoffs-at-jpmorgan-hit.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-20",
    "event": "Winnebago Industries renews and extends $350 million asset-based revolving credit facility",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/winnebago-industries-renews-extends-350-201000839.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "Bonds, Cryptos, Moderna Play Havoc With Markets. 2 Reasons for More Chaos.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/c2addf02-c4aa-3488-8228-f37392d94c73/bonds%2C-cryptos%2C-moderna-play.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "Faraday Future Presents at the 2026 J.P. Morgan Conference in New York; Investors Show Strong Interest in FF's EAI Robotics Strategy",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/faraday-future-presents-2026-j-001100647.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-20",
    "event": "Final Agenda: 2nd LA CorpGov Forum Sep 18 Featuring Activism, Sports, Entertainment",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/media-advertising/articles/final-agenda-2nd-la-corpgov-214417129.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "Forbright Bank to Sell Branches and Local Deposits to Trustar Bank, Sharpening Focus on National Digital-First Growth",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/forbright-bank-sell-branches-local-100000926.html?.tsrc=rss"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "JPMorgan Chase & Co. (JPM) Stock Drops Despite Market Gains: Important Facts to Note - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNNUo4S0xSblFyRTBOMDN4OURpQ1JNUTBFenpnVjNaMVMzMHhURDRQXzd6R2NFRzJjVktaTjRqUmNzLV8xaGNmMU92ejNSY0NjRWhVbUpFdG9tSlJxb0N6aHU3UzFnZWN3ZWtwUDJfQWVTM094N05mZ25mUDlkZEY2N3NEcnp4bnJfUnJkUWl2YkVTODlPRWtJ?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "JPM Stock Gains Nearly 3% — Jamie Dimon Succession Dynamics Shift After Marianne Lake Exit - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxQdjdQbW5Za3hwWGcyMVB2OWxuWjhkUEdrZHBBbnItWmVSYWswRzVYdnRrRS1nSG9MdWd3dlhTdEpGQ0lVTy1Obm5ueVhoVlBWdUxuUGZmWGZzU3UyZXUyZlhkRTFvYWFoekZSOWR1bkMxaXZBclJ5NWsteFY3djZ0LWFua3RqVm9ULTBVeWV3em5HTml3S3Qxc0pFMFpQUFZ6b0Q5S0tmNFQ0MTJMMzhfOEV6NnRNUHRVMFJiSEpsZXFHVVlPWXFQcjI0Wk8tMk5GTkVOWEV1cGFsUTZYUjlPajRSSjhPOG5XWTFn?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-21",
    "event": "Forum Financial Management LP Has $11.46 Million Stock Holdings in JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxQaGw4Yi1VMW0tM3VCVlc3cmFBTzl2eTNZbVR1TXV1dEU2YmtMRmIxVC12Q19Scm9pM0ZoOWU0SHZjbDdKNDFMdjM4NVdVT3RLUE15RzlESFd0WDF5X2VHRTJVOTFuSG9VUzNIQ0NSWlZ6NVRlQ2pnY2Z0ZVkzMGRjaUsxLUgyNjdXdklGVFZadWZ3VVBvekZpLXJ2aUFTcE0tcThrWWN1eWtkRE9UR3c5Sk5LTloxVGdMazdzOXBicUF4RndoalkzTTAwbk52YnJvcnBCQm9jSERzb2w1RjUzTQ?oc=5"
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
    "date": "2026-08-21",
    "event": "JPMorgan's Q2 Trading Revenues Surge 35%: Can the Momentum Continue? - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNYjRaVmI3cUQyWDVadExiTHBJTV85NnFtcTFOdE1Od2RsdlU3bjVVNGR3NFNKaVZtcmZoMlU2TEc0OXN3Zjl6bDlpMTZzamtlYzd1ZG43R0l3dDRlYTRsTWtYYUJ6Vk9ybHN5QUQzczlTdmVTZC1adG51NV9GQ0FkaWxrMElVRVNtRHMwaTE2N2d1b0VTamxMY3pZWXFKN193Y3dXczB5eTFXaEktZlNid29Xb0hlbllqSHFSUl93?oc=5"
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
    "date": "2026-08-20",
    "event": "3 Overrated Stocks We Keep Off Our Radar - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxNVHJIUHd3bGdfUkplS3U0UFotcFkwbEVENUlzTHNEUkt4ZnhwbkREOWI5TENieWNNMy1FTVdyekN5ck9pakczRkZSdWp3VkN4MFVYV01fZk5ZdjhLTHhIYnFwUWwwaDB3TkZ2RGt4UHdmOVcxUm51dzQwbm53NnNjU0hvRkt3X3VFSzZ6UXE5R1FkMlYwN2gteFRPYUxxRXc?oc=5"
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
    "date": "2026-08-18",
    "event": "The former Morphic CEO from Lilly's $3.2B deal joins J.P. Morgan - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxPSFdySVA3Y0kwTU4yWC16WTVFVGFBVFJ0SWtfMzdpQ0R6SEc1czBBRXU4QVN3N3FSVEd2MW5kUC1KYXEyMjNYdWNmTnU4bG5sd2xJZ1NWVlZLbFVzaWN3VVdnNkt4RTZXQmpNbVBYQWlGa0REcXA1VmxUcTBZX1RxUl9HakluS2ctWG05N3ZhU1VHMGVzMjI3R3o2VXh0V0xrOEd5dzVlRU5kMlV2eHVfc0lNVWdfY2VhWUl1NVdn?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-19",
    "event": "JP Morgan Chase & Co. (JPM) Stock Price, News, Quote & History - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinANBVV95cUxOV0RpMmMyUjNyeVQ0dmlvQjNsNHNkOWpvLVdISWdxUFduYU9NU2dDaEdMRDZ4SmlQb0JRdUNxWElOeG16aWtCWmZGdmJIQS1sNXFDS0pybXdaUEVRRVp2X1Y0V0xYYUFnenlwNDllZUF1ZUZPczNmSWdOU1d0Q1R6UWpheG40Q1c0bng0alRvVjJFYXlZOWd4LUFvTnJ2R2duU1J4eHVOb29wWWRzOVl2U3NvSUJuTlc1VF9lNWRTSXM1TENLMkUzS0NzMUJoUXczaG9sSDN4Z3prWS12cXktek5SRXBfeGp1aUpBODVienpzbDljZ2l1ejZIQy0xcFh3TTVEVkVqd0ktdHp5OEphOWV2X2F6MWtFSFNjZGlOZDNnUlFwZDhyYTMxZWQwODEwOFNUdHFyMjYydWtXOXVBTUlvdFRVR2h0WldnODZPNGdxQmtCOFNadG9rUU9QSlltaUVsbmpHTWVDY2kyR3U3bWtqUmZRWUlnalhud1VwcC1pM09tY0N3aWF5eGIzOWtVeGh1R2o5T0s2RWts?oc=5"
  },
  {
    "stock": "JPM",
    "date": "2026-08-20",
    "event": "JPMorgan Chase & Co. (NYSE:JPM) Stock Price Down 1.3% - Should You Sell? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxNVmVDcDFlYXR5YlBLRENrN29QeVZnT05odm5DTlNQZzJQV25BNFBiYnM1X2h4NjRNX0JRbGFQNE15bmVPUDhmWEJWZHN2MGxOZEhhdnhnZEtDNURybU1xZXFlMVdKWGZrYjlLeWFFMGZPMFhxOVA0ck5lcFRLU0NWemd2QVBOVTBlbG93MDFzRXBUZnJyNURsNWFSeXA5SEtscm9rSFJpNEZWdWpEUVJVQnhQTUVkdw?oc=5"
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
    "date": "2026-07-29",
    "event": "JPMorgan Chase (JPM) Stock Looks Undervalued Even As Earnings Look Fair - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQekE0TUk1aFJUOUZhczFYdHJNOEVJb2ZuMHB6ZFBTZkppOU5vTVVncUFmYi1QNjBmTlFPRXBBX082OEpxOFc3dDNuQkxJdEhkYU1PWmxOVVV0WThNSEE3Y1pmS19kOG9aeXRwMDVIVHNmNzRLMHp4TUJNQ0E4TV84dDBTRm1VbDNRaUFPdDBKSl9SdGZTM3liWUg2bw?oc=5"
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
    "date": "2026-08-19",
    "event": "JPMorgan Chase & Co. $JPM Shares Purchased by ABN Amro Investment Solutions - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxPRC1nSlk3UU5vcVhWdGlNcU1nMlhjVEp1YTV4Yk5XbUJYMDJZVTVKSFR6MkFORndOSFhtSkJLMlQwQktfSWdfRG9rUDhkR1BnamlEeUwtNVh3NERBbEhlWlJJR3dDM2NWaXFlbTFrR2RGQUJqVUdkajVkYmxHWWhtQWt3N0RvSk1HMjdHNU53M0wxSWJOZXZaMEZGWDd3VkNwa09Yb21McVYwX2ZMQVVHQno2amZZRXgzZGxGRENEVFhWc2E3YUZtU2tNTnA?oc=5"
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
    "date": "2026-08-19",
    "event": "JPMorgan Chase & Co. (NYSE:JPM) Shares Down 1.6% - Time to Sell? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNa2pHc1ZQQWEtRFRmSWZNamF4QzB2Mjg3OVZ1WGFTenFJSDVfNHQ5RzZSVnhXNlNvVG5KXzAtQnpndGdmMzFDOHNIRThDRTk3RC1sem1pbXphdy1KRWFHOE9vZkpDTm5XLWwyRkhvZFZlOUFHNUR0RVVfNlppeHBnVU85TUFDd2VmZWhTTTNIRjAxNkNWR3dYMnhPQmhWM3RKUGJSQmxNUEswWVU?oc=5"
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
    "event": "Owen LaRue LLC Lowers Stock Holdings in JPMorgan Chase & Co. $JPM - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQc2lWbjltdThhMVVjU0tNTjkxMlM3aWJSQkxoWmVwdGtNaGl0Ty1lamlUNWNaR2R1OHNyRzRod0dvRmNOWS12UHFtQmNERnRMcEV5ZWhOTy1hOFo3X3Y4cmM1SHYyYWN1VzFKZmNISUhaZjBFMzJxVDhPdFJ1a2ZJSTNSc1YyTWprYXZUNmcyRlhiZG5DMHc4QVNuS2JwcENoVl8zb2NvVXFBa2ZUYnh1REZibjhVa3llM2gyNXZWRQ?oc=5"
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
    "date": "2026-08-18",
    "event": "JPMorgan Chase & Co. $JPM Shares Purchased by Mirae Asset Global Investments Co. Ltd. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxOMXoteHk0MzJfaVRpS2ZZQnpBRjhTSWlYb0J5ZHBKblVDNVdXLTkwU0RnSUhNVkRxQTNSTW95QlJYT3BtUVE1RHU5dlBUQnlPSEM4aTJDdWxWekRFZ1lnVmVCZWJNc01NVmYwWFBBODJKY25DZnUtZHB2YUV1ZzhyUi1VX0hsWU9XWVdDb18yY1Fvb3dxVmVSQjBkQUpSVFBwT1ZUbXdvc0hBYldsOC1wTTRmZkVCSG5IcnBPTmhqdDZCMGtNM1ZIMWU5U3QxeVE4c0JNTmo0dw?oc=5"
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
    "date": "2026-07-14",
    "event": "JPMorgan Chase (JPM) Stock Is Up, What You Need To Know - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNUnAzZ0gwc19BdUV1aVdrS056bi14RktZREF5aWRrbFFSaXN1aFJVTUh4dlBwR3QxbG9rV3g4ejhYQ0hqZkw4TXBoLUlYZ2ZSeWJ2RnIwSDBWTm83d1h0TE1GbE42Rnpva0lXLVIxMHhEaFViVnB6RmpZb2dPUFJER1BEUEtueDI2VWZPODAxZ2lLdDRBekgzdXB3?oc=5"
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
    "date": "2026-08-21",
    "event": "Nvidia earnings are on deck next week. These 3 themes will be mission-critical.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance Video — Nvidia (NVDA) is set to report second quarter earnings results on Wednesday, Aug. 26, after markets close. Yahoo Finance...",
    "url": "https://finance.yahoo.com/video/nvidia-earnings-deck-next-week-200251512.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Morgan Stanley resets Nvidia stock forecast ahead of earnings",
    "type": "NEWS",
    "remark": "News via TheStreet — Here’s what could be next for Nvidia stock....",
    "url": "https://www.thestreet.com/investing/stocks/morgan-stanley-reiterates-nvidia-stock-forecast-ahead-of-q2-fy27-earnings"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "The Toughest Questions HD Faced On Its Latest Call",
    "type": "NEWS",
    "remark": "News via Trefis — Home Depot's earnings beat looked great on paper, but analysts on the call kept circling one large one-time gain to see ...",
    "url": "https://www.trefis.com/articles/612368/the-toughest-questions-hd-faced-on-its-latest-call/2026-08-21"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Anthropic hires ex-Google chip chief as AI lab pushes into hardware - Bloomberg",
    "type": "NEWS",
    "remark": "News via Investing.com — Investing.com -- Anthropic (NASDAQ:ANTP) has hired former Google executive Amir Salek to join its compute team as the ar...",
    "url": "https://finance.yahoo.com/technology/ai/articles/anthropic-hires-ex-google-chip-211528852.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "The Premium On AAPL Stock Vs What Its Peers Deliver",
    "type": "NEWS",
    "remark": "News via Trefis — Apple's stock commands a premium price among its peers, but its growth and profit metrics tell a different story. Is the...",
    "url": "https://www.trefis.com/articles/612366/the-premium-on-aapl-stock-vs-what-its-peers-deliver/2026-08-21"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Q3 Earnings Preview: High Expectations, Positive Revisions, and Broad-Based Growth",
    "type": "NEWS",
    "remark": "News via Zacks — The corporate earnings foundation remains exceptionally strong, as S&P 500 profits have now grown for 12 consecutive qua...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/q3-earnings-preview-high-expectations-203800936.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "DeepSeek Creates New Headache for AI Stocks",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Lower-cost AI models could reshape industry economics fast...",
    "url": "https://finance.yahoo.com/technology/ai/articles/deepseek-creates-headache-ai-stocks-201711619.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Elon Musk: “Starlink Now Has 11k Satellites in Orbit.” Amazon Hasn’t Even Cracked 1,000.",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Elon Musk just announced Starlink crossed 11,000 satellites in orbit, but the real story is where Amazon's much-hyped Ku...",
    "url": "https://247wallst.com/investing/2026/08/21/elon-musk-starlink-now-has-11k-satellites-in-orbit-amazon-hasnt-even-cracked-1000/"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Amazon Slips as Walmart Raises a Fresh Consumer Warning",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The retail giant is caught between weaker discretionary demand and an unprecedented AI infrastructure bill....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/amazon-slips-walmart-raises-fresh-185958464.html"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Take-Two Stock's Next Leg Sits In A Guide That Has Not Moved",
    "type": "NEWS",
    "remark": "News via Trefis — The bookings range behind Take-Two stock was set before a single Grand Theft Auto VI preorder existed, and it has not mo...",
    "url": "https://www.trefis.com/articles/612379/take-two-stocks-next-leg-sits-in-a-guide-that-has-not-moved/2026-08-21"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Amazon Stock: Cloud Takes The Spotlight While The Store Pays The Toll",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/612402/amazon-stock-cloud-takes-the-spotlight-while-the-store-pays-the-toll/2026-08-21?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Marvell Stock Flashes Strong Signal Before Earnings",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/marvell-stock-flashes-strong-signal-162453158.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Microsoft Stock Gets Cheaper Only If The Forecast Arrives",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/612403/microsoft-stock-gets-cheaper-only-if-the-forecast-arrives/2026-08-21?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Even The Calm Reading On Palantir Puts Nearly Half The Position In Play",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/612387/even-the-calm-reading-on-palantir-puts-nearly-half-the-position-in-play/2026-08-21?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Hyperscalers Will Spend $750 Billion on AI This Year. Cummins Sells the Backup Power.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/21/hyperscalers-will-spend-750-billion-on-ai-this-yea/?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Einride AB Reports Growth Acceleration & Fleet Scale Moves Towards 2028 – Quarterly Update Report",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/einride-ab-reports-growth-acceleration-164314486.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "The Hidden Tax Cost of JEPI’s Monthly Income Machine",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/etf/2026/08/21/the-hidden-tax-cost-of-jepis-monthly-income-machine/?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Meta Platforms Stock Drops 17% YTD: Should You Buy, Sell or Hold it?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/meta-platforms-stock-drops-17-154600084.html?.tsrc=rss"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Cathie Wood's Ark Invest Held $1.16 Billion of Tesla Stock as of the End of the Second Quarter, Even as It Trails Every Other \"Magnificent Seven\" Stock in 2026. Is Her Conviction Still Justified?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/21/cathie-woods-ark-invest-held-116-billion-of-tesla/?.tsrc=rss"
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
    "date": "2026-08-20",
    "event": "Cathie Wood and Stanley Druckenmiller Agree On Amazon (AMZN) and Alphabet (GOOGL) - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxPMW5OMmIwWUg3ZDdTalVJTWtXZjFDeUpvbEJUUUtQdjlXQzFMeHpjZ1ZxU2F3WG5zeFktdnpCTC1NVlcxc3lzeVV5MkRxR1NZM3dWWGNOeGZrQm16UlR2MS1FME1nTWo3ZkZ5NW9qNk50Y0xHNTc1NlBiOVBIRS1DMnhUUVJjMWxNTWJ2cGFpMXhrdDhBQ2NmT0p2QzJReWN5M3VGYXhicw?oc=5"
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
    "event": "Amazon Plugs $18B Into the Southern Power Grid - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxOZTRPaUFESm0wempHbnhpSXlTcVhzS3BEZzB1V1d2ZmVqRjk2QlgwSUF4WC1tWDFYdzJuUEhjTXJIWUVLbGM4ZkRESGhfZEVaVUxXaC14aVRpQ0VYMm5UWlRHYUx3YUFHSkNscTdpYTBHVzY5bDJmM2Y5OU04US15bFp6SHpzVU5XRlE?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Is Amazon (AMZN) a Buy as Wall Street Analysts Look Optimistic? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPR0dMQWJLQ3ZlRUdKd3pBczBCa25ibDlmVVlpSkhTZkcyWWVHZTVsdU5LVllXWXh3R09NZEJ0cjYyWUhTQTVrZDFiR0hnSWlyLWpqQzJaM3ZwOXczVjhGbEpNY1JYVGVWdk9yQ0RaaURVQWVUODd3RDBfZ2hSQjlaYTJScDFsMFRWVnpUMDBVTGk0RUFjZVpR?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Amazon: Don’t Miss Out On The Clearance Sale (NASDAQ:AMZN) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxQQ2tKWkpKdUFpeDk1VUZIX2xqd0tuSi1zV2dlajBLUmtja0RvWjRIWVlKOHFJTVc3MGRXOFc4NzEzZWRjT2RqSktrWEEwejdFZXd6dXpHcjN4bXJVSV9paGhNamlYT2J2Uzl1OUstYUs1Z3V2WENncndmcHJrTldSU19zekRYdHE1?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-20",
    "event": "Amazon Not Getting Enough Credit for AI Positioning, Analyst Says - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwwFBVV95cUxNSXdCRkhNSlhTRVZqMW1wU0dwLUplU1ppVzNiWU5VaGJEUXc3WllzOWZmYlZVTW9hcHc5Z2dZT0IxSi12S2ZiUHJIT3poczZEMnpyaVQzZTc5LTRWc0haWVFmeDlnT3BjTkJ4ODdWVDN1REhTS18wdDVCYnhzaG10UGNFbXJ0MHYycVBsTGlkRUwxd05KVlBIMG9iejZrNmI5blM3UnlnYktuZ1lCVTQzU2NPUldPdk1KbmROTFdxZDRSVGM?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon Stock Rises as AWS Growth Reclaims Attention - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxONDNrQkRBaS03aHo3blF2MGVPR2IyY18zUXVFb0xhZzRRWlB0UWxiYUdqc0FMeXNzWG9ETnA4Mnd2RjZZQU0wdUc4Ukg2djc4OE5NZkduQmJISVUxQkFLY19SWDNjZldfVDdxTllNRG5nMDdiVG1zQklMcGZ3dHFia3VlV19nZzg3MXAyMjZndWV5SExjeGxNaFpn?oc=5"
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
    "date": "2026-08-12",
    "event": "Amazon shares appear stuck in a rut. Trader Mike Khouw is betting things will stay that way - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxOYjRlZzBxMk52R0hZRlB5T3BZblFOUlc4Q1VOVkEzd0RpZ3ZGOUtYM3ZJVTlPZlpZb3JIcGhSNFJjXy1kS180dU1BUjI1aFhwRFFOVnR4YVlWY29WbVFuQmxtMmREUkpqRTZDVURwR1lvZDZrTUxWRTBfR29YNm5FV0VoOVlEUXQ5R081V0QzQ016WllvU2JZUlBmY21PMzB2TTFfTldvS093Um50UzNyanM2QXduWDlZa1VBak1fMTg4UkIxelHSAcsBQVVfeXFMUFo1OXhvRGc0UDl0c0xyT21hV0JNZ2pHMzZQZDBLNGhLOTh6ZXhSbUdESkFRaXNmaHdjN3poV0NCTUUzb0tfalNXRkhIMjVOT21tRzVQNVF1NFJHT0xRSXNfR0hJb0NxRDRoRUItaUg4eGJzYlJPdms4U2E1TEN2WXhIOTB0Y3Npa0lVMjk4SnBYdjNjbFpNV1JPVTFpd1VVa1gzWEtuZkhDQWExYl9aeElzUUdYbHZTenlBRUVaOWpCZXdmNGxqaHVwRGM?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Amazon Stock (AMZN) Slips amid Plans to Invest $2 Billion in Latin America - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPaTFicUlXWXI0cWh4QkVNODk0dWZxaWtsODhWNVZjZTFUUzVBOHY1TFNWSjBPZmE4bTQwYkQ2MnNVNUR6NTgxZ0NzX1Vxek1WRHYwUXpQNEZWU1ZRV1E3ZFZ0dkpiNFV1YzFEbnpueF8tUGpGYi01SU9mOU13dXpkV3U1VEpoVkw2VmFuSWp0bWNRNC1iRkNOUHVKRVVZWkg1VzRz?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-19",
    "event": "Amazon Just Gave Investors a Big Reason to Be Bullish - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPMmstVXZtWVFGd2xUMVphU25udzB4UlhqbnFxel8taXBMYU9LX1NvZGdVTDFZeWZ0THdRWDNGWHNNaU42NUh1UU41Tmo3eFZQUi1wblYyUmVxOENWdU51VnFvTTBjbDFiMDNJSE1RZGU0R0dMZkhEMTV0ZGxWSUV5enl2VTRnWnRCbzM3YVB4aE5jRlJrbXZndHBLZw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "AMZN Stock Drops For Second Day — Amazon Reportedly Cuts Jobs In Artificial General Intelligence Unit Amid Strategic Realignment - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxObGx0T21YQzRqVjNDR3A2cEx1RWI4RTZidVNhbk9mQUZpZ3loUEJtbWd0SFBlOFdKY0NtaEp2SWpTVDRGLUVWWnFSOUJ3dS13N05KbTlPcC1aYTV2M3YyVTNkRExpTG52UTZWYVZDQ3dzRl8wV3FzTGlGWXByUi1kd2xmcnRlXzFBNk8tMGJUYUZJeVYtUmo2ZDUyWDFRNGkteWZNNjIyYTh4Y1JSMTFaNHdlS2VuSEJjdS1tU0RGWFljVmsyZVdmZmlB?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Amazon Stock: Cloud Takes The Spotlight While The Store Pays The Toll - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNNHg2YjVOdVhlMVJxVkpOeF84bGpiaHhQb1dlWkhuQVZiRlZZUi1aMVdaNzhiOFNFU21ab1dEQlFuLTd5UUN4RjBTNzY3YW9MVkQwUFRfaUExUFI2M0FmVHkwUnVSYVNvY2tPWk1UU0NoMF9sUHJZUDNxZU1JOW5teEZyNXVjd3F6Ml9FX1dReEYweVRyWFlmM2pHOU1BejlYaU1mSEozVTdtam1CM2tyZVU1cHF6aEpkTzRmN3kzOUE2YXBSUGhGQw?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Amazon (NASDAQ: AMZN) officer to sell 2,343 shares in 2026 - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPZERpMV9iQ2VjeFVoTE5FOVVPZ3lPckdsSmZjSmNWaVo2allrWkp2Z0xTWWNUTkpvWnE4Ykw0OHk4NkVGZUZYdVhGbTR5TVd2MTZDU19PN1ZmR0plaWFBNFlGdU9acENmTkt6RF9pbFhEa2VQaVU4QTI5U1VGTlYyVzI1dkVVeVNpSGtHNTBNaFJJTDhNeGc?oc=5"
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
    "date": "2026-08-16",
    "event": "Amazon (AMZN) Stock Gets Fair Value Bump As AWS AI Demand Lifts Analyst Views - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxQUVBrM1U1NDFNZVRhZWR6VVhzMTRIMlFaR3dTMlh4OE10cllDeUtqZ2ZDc0w4LTM2bXIwdTMzZXlEb0k5dEtsSV80WFpXNVg2WXVkMGplSGlmX0p3MDVZVThBNmxuU3lZMFZXa0FqR3VQRnBWZVgxVVpiM1lQQTE4ODFkZWYwNVJUU2FCbXhWeGtnR3p5WjRN?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "Is Amazon.com (AMZN) Still Trading At A Discount Following Decart AI Sale Talk? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOMzFfeGNDSkR6YTFxU1A3RjVJQmkzTWVueGpTUWlROUI4bXhoaHhpelU1M0tyNW9tc0RwOGliZXRVcF94R0xsNjBtNDFZS1RIcl9fck5hbThMNUoyV2ZmNDhGU3lPNXdtWGI2ZEVyYWVETXdzWDBLazVkYlM2RVZ0V0NscElSOUgxLWc5Y3VuT1UyRVFLbjR4cXNlR0hidzlxblh1cmxqRTQtS09lU1hTOUJPLWJVeXA4WVFkWk4tMVdTTDdM0gHKAUFVX3lxTE1NUmphMkNSdzVJV0pydkJUQklRdERXSUxVS1JNRzdDd2lBVlROU3RYWjFWQWhLNUF4RlEyeXpKMUxIZHQycTRwM1lkTzV6MWZWeXFrYl92X1pLUjhYQjlZN04zUTh1YnJuVUszb0tQdWpkUER5djZ5dnJOYTBMMkV2QUc4ZFpUWWk4NkNzaEkza2dZaXBab1VoX2djYU9SWEJ5QnV2c0l0b0J6TElxbW9oY08wSThLbzNTXzdfdFEwZllNLWdtMUVRV2c?oc=5"
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
    "date": "2026-08-04",
    "event": "Jeff Bezos just filed to sell $4 billion in Amazon. The shares are falling - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirgFBVV95cUxPOE9XY19fa1dCUDZsbTlDOXF1MFI3OVpwTkNPbHc1RThHRWowTU5FTWh2cm54ZUpFR21rR3VJckVBMi1vd1k1T0RPOTh3SFZRcncxVFZiQnZqc2lybEpZX0M3T3k3V09SUUc0dVdzRU5GVHdlNUZ1Zkd3Zkc4UlFDeXNFWUlHSDZYRzR2OFZxdE4td1A5VmVYSVFtZkNYdklkTXVZX1YxMTQxUk13TGfSAbMBQVVfeXFMT2VDSmhpTDBleWdWSkluc2c0X0loSFFGRm9GZE5QT1VDbFdhZ2F6NGFPOE4zcXZicEdtc1JiMVlIakxLLXVmSi1pQ3AzMVhWS3Q2VWlxOGVWUTVKVkpqTV9PY1lpTWVRRTZ1dUQ0V0dWU3hoZEUyU0NjZ05xekt0UDVlcnRGUGcyX0lVSmdiczczSXVjcXhxWWd0cGRYUi1wNnZRa25NcHpEYUxERlRxOXhSaEk?oc=5"
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
    "date": "2026-08-21",
    "event": "AMZN Stock Slides After Proposed Consumer Class Action Suit Over Trump Tariff Charges - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4wFBVV95cUxNWFBRVXdqbmg4bTZpUzZuVmdkVTh3UnVONjB4SGE5OEgxbWdqXzdpempCT2x2WGRNejlpdnE5azhuNlhlRjNqOXlRb0duSzhkdElacDd1NjBDZHZfVTBfajFKMUltUW0zVlNzR2duT1EzdTQ1UzdaMWFfRVlmMjNGYVItazBFVmVEYWhSQ3BUTDFVTnBuWUh4eURYQUs3LW82eWNLLXF5MzZlSmVvWE1YX01MUjRXSjBRVFNwUmxXTnQwekVyRU8tQlUtZE1Xay1mT1Z4RS1aSE01OGVWTXZ5VUZOOA?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "David A. Zapolsky plans new Amazon (NASDAQ: AMZN) share sale - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPY0VESDJDN1oxWnd4RG13NzR1OTFwUHBjSWdaTExTQ3JucWJ1TENBZncyT0pMczB2elRXQzVVQmc0bnRTY3d1X2llYTBMXy0yZjNnajAzMFhDWnhMSUVzeVlhbkQ3bTMyOHVPU0NSVGk5S29ucC1oVDMwOHNtNzMtMjdOeVBqZGdGQnQwQTZ2WkV4OUdCNWc?oc=5"
  },
  {
    "stock": "AMZN",
    "date": "2026-08-21",
    "event": "The Premium On AAPL Stock Vs What Its Peers Deliver - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNMWFDRXA3aEc1cnozMFU3QnM1TVdkNUJNVFI2TFlhR3lSNktYLVhWU1dtMVRqZFJFSm55cm1lbUwteGFGS1M0UlZLN2gxR3NOS1NNZmlyQXBzZVdfSmF6VTZVeXU3SVNEMFZ0VVhzZWY4bHBEYnNmRDFPV1hHYk5lN09xUXN2eDc1YUxjTEV0UnI1UllHM1ZIRjFkY2JOZGpKR1ZHVEh5TGhfSHBUN1JGZHp3?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Stock market today: Dow, S&P 500, Nasdaq post weekly losses as bond volatility remains in focus, bitcoin soars",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — Stocks posted weekly losses after a bond sell-off this week put pressure on tech and AI stocks....",
    "url": "https://finance.yahoo.com/markets/live/stock-market-today-friday-august-21-dow-sp-500-nasdaq-bitcoin-080533702.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-17",
    "event": "Tech stocks today: Nvidia earnings on the horizon, as Anthropic prepares IPO plans",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — Tech stock coverage for the week of Aug. 17....",
    "url": "https://finance.yahoo.com/technology/live/tech-stocks-today-nvidia-earnings-on-the-horizon-as-anthropic-prepares-ipo-plans-132945569.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Here's what Nvidia needs to do to unlock an even better stock valuation",
    "type": "NEWS",
    "remark": "News via Yahoo Finance — Nvidia investors want something new....",
    "url": "https://finance.yahoo.com/markets/stocks/article/heres-what-nvidia-needs-to-do-to-unlock-an-even-better-stock-valuation-120651570.html"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Nvidia Stock Suffers Longest Losing Streak Since 2022: Will Q2 Earnings End It?",
    "type": "NEWS",
    "remark": "News via BeInCrypto — Nvidia stock's (NVDA) losing streak hit six days. Analysts see 40% upside. Will Wednesday's earnings end it?...",
    "url": "https://beincrypto.com/nvidia-stock-losing-streak-earnings/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Why Amylyx Pharmaceuticals Blasted Nearly 79% Higher This Week",
    "type": "NEWS",
    "remark": "News via Motley Fool — The biotech delivered excellent news from the laboratory....",
    "url": "https://www.fool.com/investing/2026/08/21/why-amylyx-pharmaceuticals-blasted-nearly-79-highe/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Why Ross Stores Stock Is Up Today",
    "type": "NEWS",
    "remark": "News via Motley Fool — Bargain hunters are flocking to the discount retailer's stores....",
    "url": "https://www.fool.com/investing/2026/08/21/why-ross-stores-stock-is-up-today/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Warren Buffett Successor Greg Abel Cut Berkshire's Bank of America Stake by $1.7 Billion. He Added $1.6 Billion of Delta Air Lines.",
    "type": "NEWS",
    "remark": "News via Motley Fool — The conglomerate's new CEO spent the second quarter selling the bank Buffett had been selling for two years -- and buyin...",
    "url": "https://www.fool.com/investing/2026/08/21/warren-buffett-successor-greg-abel-cut-berkshire-s-bank-of-america-stake-by-usd1-7-billion-he-added-usd1-6-billion-of-delta-air-lines/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "The Wild Swings of Earnings Season Continue",
    "type": "NEWS",
    "remark": "News via Motley Fool — The number of stocks moving 10% or more in either direction this past quarter is staggering. The team dissects the resul...",
    "url": "https://www.fool.com/investing/2026/08/21/the-wild-swings-of-earnings-season-continue/"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "US Stock Indices End Week Lower On Pressure From Elevated Long-Duration Treasury Yields — PSKY, MSTR, WMT, TSLA, NVDA In Focus",
    "type": "NEWS",
    "remark": "News via Stocktwits — The U.S. 30-year Treasury yield climbed for the second straight week....",
    "url": "https://stocktwits.com/news-articles/markets/equity/us-stock-indices-end-week-lower-on-pressure-from-elevated-long-duration-treasury-yields-psky/cZY97YMRJVO"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "The Buckle, Inc. Q2 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-the-buckle-inc-q2-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss&.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Nvidia Reportedly Strikes $7B Licensing And Investment Deal With AI Startup Poolside — NVDA Stock Ends Week 5% Lower",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://stocktwits.com/news-articles/markets/equity/nvidia-reportedly-strikes-7-b-licensing-and-investment-deal-with-ai-startup-poolside/cZY9I4kRJVB?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Two Years of Friday Paydays: The 44% Fund Has Kept Its NAV and Beaten Half of Wall Street",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/21/two-years-of-friday-paydays-the-44-fund-has-kept-its-nav-and-beaten-half-of-wall-street/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "JEPI Holds $46 Billion and Is Up 5.8% This Year. Four Funds With the Same Job Beat It by Double Digits",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/21/jepi-holds-46-billion-and-is-up-5-8-this-year-four-funds-with-the-same-job-beat-it-by-double-digits/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Why BitMine Immersion Technologies Stock Skyrocketed by 26% This Week",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/21/why-bitmine-immersion-technologies-stock-skyrocket/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Why Fabrinet Shed Nearly A Quarter of Its Value This Week",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/21/why-fabrinet-shed-nearly-a-quarter-of-its-value-th/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Why Is Tesla Stock Up Today?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/21/why-is-tesla-stock-up-today/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Lululemon Is Down 49% From Its All-Time High. Should You Buy Before Sept. 3?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/21/lululemon-is-down-45-from-its-all-time-high-should/?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "The K-shaped millennial: Chime explains the 2008 dividing line in personal finance",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/k-shaped-millennial-chime-explains-211925876.html?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "ZKH Group Limited Q2 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-zkh-group-limited-q2-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss&.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "BJ's Wholesale Club Holdings, Inc. Q2 2026 Earnings Call Summary",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://app.moby.co/home/research/tools/earningsCalendar/earnings-bjs-wholesale-club-holdings-inc-q2-2026-earnings-call-summary?utm_source=yahoo_finance&utm_medium=rss&.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Taiwan Semiconductor (TSM) Sales Just Jumped 45%. Why is the Chip Sector Still Selling Off?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/taiwan-semiconductor-tsm-sales-just-205844477.html?.tsrc=rss"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-20",
    "event": "Going Into Earnings, Is Nvidia Stock a Buy, a Sell, or Fairly Valued? - Morningstar",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPdWZTb0NVNDd2RWVMYWlSUXAzLWYxdHpBSmRmVmFBLWw1VC0xNFhVdjNzbXdkeDB2ZXo3bkdjeXdjdkw1X2NCUGtmWnNnT3JWSWRnVEM1OW9pSWhtOVBMUk1MbDJ2UFRmNHpUb0lyTmpKcUZxdENQSW0zTUFFekNvaEdPS1BaaUFuTHdxT3VtR19aanh6MTBCUzRObzlaS3dYSFAtMVI1OHNJV1U?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "BMO Says Buy NVDA, AVGO, MRVL, MU, and AMD Stocks, Calls Nvidia a ‘Top AI Pick’ - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxORkJ0VHhrNDk4TzFSNUFpaHd4a0dXaHBTTWQ0M2kwQUFLVk5wcGZ5TWVFdG1jeUlUaVRjeERLek11ZDdDVEpyeGg2ZXZoWW1ybnN5ZlNSdW5fQ1BtZXdfay1RZXZsdk9qODNfM2pSR3o4YlpRdkNKUExKU29RTTY1NlkyWmJ5RWdORXJ1dm1uMWhlLWpvZVJrQ1pMWDljbFZERHNXcQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "The $116 Billion That NVDA Quietly Paid Its Owners - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxNZTZqZXoyTkI5SHA0Nk5SNVRtSHVRaWVjNGNwVFNjNDZzMzhwZXJMa2RJUFlsOEJFSEc1N1FOdHI1V3JBWENYYnZjVHJqODZ3aUlhR1FreGJMWTNscHhadEhnMmRfQXZwNmZZaUlZUExHSXJKT1FNUGpLMG1mcnRVblpEQUt0UVNmc1NEMFM1Qkc0OVFBbUtMd01WUmpZbWs5X2ZNaElBVFBFX0U1Z0F3?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Something Big Could Happen To NVIDIA Stock on August 26 - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOa28zUW8zb3c2Mk03b1p3RTFLOHRLTVFQR0Zoc0s5T1ZkRUNYQmxOalUwbzA0bmVNZUloRHdQbV9jZWJMQ0lDd3dJdjlfZDM1WFBSUExKY0t2Y1FKZF9KLWlHWFE3VXF2T0tNU1dIVlVPam1GZTBrMFd2X2dBRjVHa0F0SU04V25mY0pQU1B4Z044VDBqTGZxQnl3TzE4UEU?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-20",
    "event": "Nvidia Stock: What Analysts Are Thinking Ahead of Earnings - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNbUhrWktLTXF5dG0yemRXR2hOY1VnbUFtTGN3VFNkSEV6UGNQMnZ2S0RDUGM5T2hQbWIxYWprajAzVmhRajd4MWh4QW1ZOVp3X1pvb2JYME84WndFSWJ1YmtVVG5UNWVQeWZxN3lzc2l0dHk4ZDVScmx6ckxKSkR4YmdfQmF4UHlILURkM2RKQQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Why Is NVDA Stock Rising In Premarket? - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxNZUxqM2ROZkpHRU9pdnppek5HcUM2QVZkT0ZDclRZRVR6OXhlX2FQYWh2WGJNNEp1ai1SNFdzZGh5aWtYS1p5UEh5ZDZ3dEV0NTMzWGptQ2cxVVF3RzBoUXB2WDhOUHU4bXh0UXNUaGlENEFIOVJlSzJDWWVRTkZqaXY0R2MwSlJzblhwUThWbksyc0JsMFQ1SWtEanYybFh4cExF?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Something Big Could Happen To NVIDIA Stock on August 26 - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNUXB2bFg1NHU4SzRKbmV3bFNtNVFHZTVrOGVsWDB0d1hFbm8tZjRDSnJNVVlZQjNPd2M5SG05Q0xhRE9nZGVxWnJQTUlrSUt5aDdYVDA5NnpaX2ZUa1J4REZvVDdVYzduclhiTG42QmNGb0owN3FhLUFqbUw2TXI5eFpvQkVNUjFFTHNIcXBjM2txWlBCTi1CbzdRNEpsOExf?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "NVDA Stock Gains Premarket: AI Chipmaker Denies Reports Of New Bespoke AI Chip For China Market - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxQdlcxTnREb0x4cnU3ZVdPNV9ldTNEaXY4MVlKaTVWTHVRanJnN1l6R3VkNXBGSnhiUjMyTlFOWnZRZTJEV2Nxd1Q5bjVoN3pTRWlIZ1JFY3RlNkdoclN1R293OXE0bEoxcWRhVThVc3ROZU1WRVhVUXlBSEdGMGR4M2NucElsX191SzBHOWFLY2QyQ1RtTWV1ZElPdGhPNnhmTllFTU1LajhSNndFRzNORkJiUmFxUWVsaEdPSGtMci1LZ0FNWHRiaWVHZzJ1bHRCanQ4Qk5GSlF5SmV5dVRvblRZNnNwVGdjYklZ?oc=5"
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
    "date": "2026-08-21",
    "event": "Nvidia Reportedly Strikes $7B Licensing And Investment Deal With AI Startup Poolside — NVDA Stock Ends Week 5% Lower - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigwJBVV95cUxPNEtlYnJaeGVwcDJDbW9CVGIwTGRPNVVUNi1qb2lTRVE3OXhVNDhXWFBtZ1cwTjNWZzhvVjlFVXRTeThnTThOcWluc2VqbzZ0d2VvcTZ5RERRVlN4c3hBTDRaOEVKWEVFQ3pxWmdsS2E2cjVkWnFQdUl1djhhN0dKWW01MC00cENSOEJrZW1IMkNDaFJyU1RzSGU2dzdWWW9seTZhNFlVTDVrbnlKNFNhNjh4bENmSDdLQXA2R1NPTkVMV3haTndaY3NTOHJ3eEh6WWlyQzhyT3RlZ1dqbUJsMTU1UlNsRU1LODFqRTZBT1JOT19KR1hodTlyMlFkeDdpMTZr?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "NVIDIA Earnings in 5 Days: Should You Buy, Hold, or Sell NVDA? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNNzhNRjJMRUdkRGQ5NF84QXh6MTc0Z0VtN1JtUWlpZXZPSDZoNFNvMzZKLWNPVE9waFRieER0VmhvYk1reVBEcFp3ZDVHZTBndDh2bmdkSTJBWC1zdVduV1BJTGUxQ3BVVElSZkE1ODFJOWZaNXBrdnA1dENxdktRNzdvMW1BTHBaNUc0cFRWVWRGWkR6b0E?oc=5"
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
    "date": "2026-08-18",
    "event": "Bank of America Thinks Nvidia Stock Could Go 50% Higher - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxPcy1FQXJfT3RnYVBVS0hIMFRCRTRSMVZEeHhUQUYteFkyMXVZeXh2V094eHNUa2kwS0lWLUFpYlBkQklMQ0lhcWMtdnQyZnBPeDI1MGhYT1hqdzBYNFcwT25nUlRlZXRadnpfRXpXRjB4SjhuT1d5ZjNDLUZTRUtMX2tUOWNoakdfYkx4MkJ0eEFISjJyY2hkcTdiMFllQQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Space Exploration Technologies (SPCX) vs. NVIDIA Corporation (NVDA): SpaceX Beats on Revenue, But AI Spending Steals the Show - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNcmJpRTl1Vl92VC1FcHV3UjVHcXY5Y0V5WElYalJXYXA3TEliY3g0T1B1UTBRdXpCVGN1NFM0Ync5dVFsRURSNElYa2ZkR3BVSzFfRlk2VzFFMjl2NjB1S2MxUERWSnVBV1JxZ3JZd0pGeVN3LWVwdm5MZUZ6WVhrQXBvN0xRcEl4VUpGV1Q0b0lQMk1lQWFORWYyb1ptYnNjcXcwSUhB?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Is investing in Nvidia stock like buying Cisco before the dotcom bubble burst? - Yahoo Finance UK",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxOVnVUdUhGbjg1cE5HT0h0SU1PX0VtTDd3T3N5Qjgya1U3a29rclFYcG9VY3dYd0tGNUlxVFNIWEVuN0s1cTdMNkRHT1kwdmhJdHJZTXhuQXlWR2pscGx4TXJUQlM5ODc4cktYOTZ5Z2hyYzQtM1ltV25OZmVtNlNQOWFZWExKeXpfRkduZw?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Nvidia earnings, Jackson Hole to test pillars of stock rally - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxOMHhmdy1oUVpqNnlaV3ZZVkNLc3J0NGhiVGx5b1N5dV9qU3dGY1RiQ1ExY3JTNGEzQkxjUC10dEJXSk1ZcWl5TWFTUDR6WW5fOVl3aGtybmkzT2JFRGdsTk5vMDloS21kZXFTMjI1dFMtbFdYSW00RWFIOXpDX2RBNDhabTRDbFA5QzNFbW5QRW5wR1VzWjR5TUlUWWtmZ2M?oc=5"
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
    "event": "Nvidia Stock Won't Be Overvalued by 2028: My Case for Buying NVDA Today - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNX1lwekk2Z2E1dWd6NWlCSFJRMDMyU05tb29HOHRFMklubzdqR3NkMDhFVmpjMlZuTUNRSzdRNkNVREROclpSaEhvRzVSaTAySENnVmxtQkZVMlhoRlRMcnAwSGZuckpwMGdCeU9CQ1dlZlFrQkVRNXdiWFpHUTNZM2J1S3p0S0RwX1B2Z2gzZUdIZ0hTcmxpQQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Should You Add NVIDIA Stock to Your Portfolio Ahead of Q2 Earnings? - The Globe and Mail",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxOQWZrcFV6SkQ0b0JBbklfYVpjdC1uZDNXM0UwTzhLXzVDVEhfMGJyRmFRcE1OMmVIUndhRmpVTVA2X3hEcDhWNnp2UWxwakdaV2Y1U3dSQWNJZzlMenZQbzVtWW9nbTR0c3VmT0M5S2RVblM2bzJ0RC14aEJQZ3ZOdG1lYVhTZ2dIeEdraHk5bFZoWkFjUjdDanJDc201QmVrTmhudWdxdlViWl9Ld1RtdXUtTWt1a3VOTUJzWmVjTm5sU0hKbmVVUU1fRXFwUjZsYjlwWTcxU2diZzB5RTZWejRSOGI?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-20",
    "event": "NVDA Stock Heads Into Earnings Next Week With ‘Rock-Solid’ AI Demand – But The Bar For A ‘Beat-And-Raise’ Is Getting Higher - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiAJBVV95cUxNNnhMWnY5Y3pLLXVZdlI2ckVLeVVFMWVHNG5FOXctdWx2ZzRDcUc1d2MwN0tDTy13bFJBS0xlSTZabFBtY25uWmNpNXM0V3p2WGNqV0pxU252VFFyclJhMUVadWwzT1gyMG9jeWxhalJ2R2p1SGdQQWdMcXNWQTVhNUp3TnVjYV9nX3cxWWtydkJPT0JZYU5NX2hFWlRucG04a0dHVmNKa29qRHlsXzVVSG9DU3lFdW4yVHU1VjlYUkpmZklrc0xtLTNfNkNSR0V5N3ZWVmRYeVFpX3ZhaVR6eFN6MnVxQjZmNUhOOUhJOElBT21wRmxIdUV3WHlINjZLWnpmYy1MdVM?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Beat, Raise, Repeat: Nvidia's Perfect Quarters Aren't Enough Anymore - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitwFBVV95cUxNNGpoUkZCb2FIQlJiMU1Hd0xnTkRvSFNsQVpGM19hWVJ3N0tMaXNWV1kyUHdpUHA0ajBBLXd4bmVaX25ZUHpDcVJSZGlyVE5RSm9GeTJLbE15NFdaSUNaZDQxclFtMi1SdEY5eFkxQUFkdXVsR2RuWGM3WXFaTU1DdTBsUFJ0empGVW54Q1g0SjRVTmwxR29EV1FidW1CQzNvTVVCY3dvZ1oyS0E0RVdILWtXQmZsUkU?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Nvidia Stock Is Trading at 33X Earnings, Its Cheapest Price in 5 Years. Should You Buy It Before Aug. 26? - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxQMlNIcmRwMElBYmVpVkExaHdBZGRucUkwcDVvZmI4NVpwSklCNDBfbnJKRGd6akp1cmYyN1lxV2tnQnRYMGpuZGFnaC1kY3A2ZV96SU5CVTNYM1FUOVE0b2c5M08xdWx0eHRnVnhVNVZvbzNGZXJTNjM2NUFMXzU5LWphZFk3M3pHUlFrUEJoTQ?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "Nvidia’s Ruthless Way to Beat the Competition Has 2 Problems - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMieEFVX3lxTE1jaWNESmFIYUtuNDI1X0p3N2xKOC0zSTZibzMweFBiY1lHVUlWdUlPc2tPbkFuY2pnd1BsT1luenFZRXgzVFFqNlAwZ3YydV90TmE0c2E1LU1WeEpkalc4YjA4enhqZ1FaTkFIN255Rm1lTVVsbXF1Yg?oc=5"
  },
  {
    "stock": "NVDA",
    "date": "2026-08-21",
    "event": "US Stock Indices End Week Lower On Pressure From Elevated Long-Duration Treasury Yields — PSKY, MSTR, WMT, TSLA, NVDA In Focus - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7AFBVV95cUxORkpyaHM2ajZJS0JaelRSRzBCNWZ3QldfeGwtd2RRc01ZVktxZEcyN3pvaG9reWNUZ3pYTWt3WVJJelUyYkNPSmNvYUMtazFPelhmQXdKNkY5V0xNcWlPTkw4QlJnbG81SVR2MmdsN1JGY3VhYzBwdC12RVRLWVVpQlZPcFVsdmU4cmxJY0hQODZBakRRVDRNdGFXOUVUR0lQZ01LMjRXSEdmdmpxNFFOU3Bnd1JGaHJpcGc2ZFpnLUZXVVFtMUt5NnY3cmdkWlRRRXVvVjJqYkY4QzhlQm5YTjF4TXEtdG5NeGhTXw?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Stock Market Today, Aug. 21: Tesla Gains on Nevada Robotaxi Permit Approval",
    "type": "NEWS",
    "remark": "News via Motley Fool — On Aug. 21, 2026, Nevada cleared the way for paid autonomous ride-hailing services, fueling investor optimism on its Cyb...",
    "url": "https://www.fool.com/coverage/stock-market-today/2026/08/21/stock-market-today-aug-21-tesla-gains-on-nevada-robotaxi-permit-approval/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Elon Musk's SpaceX and Tesla Are Building a $16.8 Billion Chip Factory 5 Times Bigger Than Earth's Largest Building. What Does That Mean for Both Stocks?",
    "type": "NEWS",
    "remark": "News via Motley Fool — The Terafab joint venture is set to materially benefit both businesses....",
    "url": "https://www.fool.com/investing/2026/08/21/elon-musks-spacex-and-tesla-are-building-a-168-bil/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Moderna, Robinhood, Marvell, Tesla, SpaceX, and More Stocks That Explain Today’s Market",
    "type": "NEWS",
    "remark": "News via Barrons.com — Moderna shares rise to close out a week of wild swings. Crypto stocks also extend their recent rally....",
    "url": "https://www.barrons.com/articles/stock-movers-b87ea8d7?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "SpaceX Stock Gets Another Sell Rating. Why It Could Fall 25%.",
    "type": "NEWS",
    "remark": "News via Barrons.com — DZ Bank analyst Markus Leistner launches coverage of SpaceX stock with a Sell rating and $100 price target....",
    "url": "https://www.barrons.com/articles/spacex-stock-price-sell-rating-a9df2e16?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Alphabet Rises as Waymo Secures Another Robotaxi Market",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Las Vegas permits strengthen Alphabet's claim that autonomous driving is becoming a commercial platform rather than a re...",
    "url": "https://finance.yahoo.com/technology/articles/alphabet-rises-waymo-secures-another-200045385.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Tesla vs. SpaceX: Which Musk Stock Offers the Better Bet on the Future?",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Tesla just posted record deliveries while SpaceX reported explosive revenue growth, and for the first time investors can...",
    "url": "https://247wallst.com/investing/2026/08/21/tesla-vs-spacex-which-musk-stock-offers-the-better-bet-on-the-future/"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Tesla Jumps 3.6% as Semi Launch and Robotaxi Expansion Accelerate",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — The electric-vehicle giant is ending a volatile week with two potential commercial-growth engines moving closer to reali...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/tesla-jumps-3-6-semi-182220329.html"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Tesla Stock Jumps as $300,000 Semi Truck Targets Europe",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/tesla-stock-jumps-300-000-161855959.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Tesla (TSLA) Up 8% Since Last Earnings Report: Can It Continue?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/tesla-tsla-8-since-last-153013632.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Tesla Rallies 4% on Europe Semi Launch and Las Vegas Robotaxi Permits, Uber Ticks Up",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/21/tesla-rallies-4-on-europe-semi-launch-and-las-vegas-robotaxi-permits-uber-ticks-up/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Tesla Faces Its Biggest-Ever China Recall",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/tesla-faces-biggest-ever-china-145418259.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Tesla Is Ready to Launch Its EV Semi Truck—and the Stock Is Rising",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/26ebeaee-77d7-3708-9b59-b78129dac82e/tesla-is-ready-to-launch-its.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "The Nasdaq Is Back—No Thanks to Chip Stocks",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/e392a536-c8ba-3a2f-a917-90535d806b1f/the-nasdaq-is-back%E2%80%94no-thanks.html?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Moderna Rallies 8%, BioNTech Climbs 4% as the mRNA Trade Whipsaws for a Third Session",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://247wallst.com/investing/2026/08/21/moderna-rallies-8-biontech-climbs-4-as-the-mrna-trade-whipsaws-for-a-third-session/?.tsrc=rss"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "TSLA Stock Eyes Another Winning Week: Nevada Clears Up To 5,000 Robotaxis, Musk Sees ‘Crazy’ Tesla Growth - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQYndCN0VvQWdwMzBVZjY4QmFkY2ZFN1I4aklnY1hPNlJCTmpDSG1RMXFTd3E2Z2FDa0ZvUnlkcDFjTzBrTU1XNkMycUlPTWw5VF8yOHNISG52MlRhN1JyLVd5VGgyQlNqU0VUMzhFVURHQmFNRXpPUG9PRUc3NHQ3UUhwTU1MdlRYa2J0aXdsdHZrY0R4Vk1CR3ByVTQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-20",
    "event": "Tesla Stock (TSLA) Slips after a Robotaxi Hits Bollards - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQN0w3MXMzWVZ2ckpPdDdNc0x0VlJFRzVhQXZGU3lOcDdWYTVvbnpBbVpHbUxrc1ltcHhRM2RYN085QkZvU2NvMDgwMWZTckFObnRnQU1NOEJ4aEZ2OGp2M0tBbWs5M3ZQMlNMVjJsZTMyeHdqUEJTQnVPVExuS1R6NVI5Qk5LOUNTcXg0?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "U.S. Stock Market Movements | Tesla (TSLA.US) Rises Over 5%; Cybercab Expected to Launch First Public Test Rides by Month-End - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxPNzkwOFZRYXJrQW9lX2w3NDVQZktMZ01ySW1XZm1vTHJUZjVXcFpMNG1adkJPbUdKNzJ1ZV8zbzNPazVYY2I3TWx1X0FlNU9NbnhSZVpvQTlJTjVSWF9ESk9GTGFCalNBSnBOTF95S3libGVZODdCTjBlU1FBU3JwanJIc1lVRTF0bzJrWjFQYlZTMElHN3FKLVhEOXBaY3B3b0l1Sg?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-20",
    "event": "JPMorgan Hints At Further Delay For Tesla Optimus Release - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTE1GeEtSem03alY1bmgwMG5lMEZNQzF4S2ZMZENRd09NemlKM1I0QlU5LWRCRHdEeWlZOHU4VktRSHF3WVdFa1VaYTg2TkFnUm4tWlU1NTNRUWxLSEs0RzdBQktBZlBCd0ExMVkxd3hROHRBN1lEUkRDN2hQWEphRlU?oc=5"
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
    "date": "2026-08-19",
    "event": "Why Are Nasdaq, S&P 500 Futures Falling Premarket? NVDA, SKHY, SPCX, TSLA, MRNA, MSTR, PURR, WMT Stocks In Focus - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi8wFBVV95cUxNNThSaEwxaTY4YUhaa1V6S1FraW5fb3pBQlVDV2FHSy1VQmlFMExoeFE0dWhrN2dESVpybDEzTElSWWVMWU9hS2tmUFZpWTlydmY2ZzNkMUE2TlVackk2a0pLM2tOYWRrdW5FbTVXSHYtWm1pTkJuNjMzUk9JZlNQTXpPdUZwVkJpOTZpVThYbGZ4MlNGZTJrTTBONlgwdkU2WHo4b3hKN3lfb3g1YzhFUUVIZ3FfTW41TVNPN2xaaG9Ld1ZyWG5oSHJubC1mYXdRQnFKZVlueERxbXpqV2hPRU1lbzdneFZPc0NOVFE1cDNrZE0?oc=5"
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
    "event": "Tesla, the Cybercab, and What the Stock Needs for the Gains to Keep Coming - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMif0FVX3lxTFA4dEtoMHp6X1ZMel84TEpYU2huMHlLT1pGcHExelB6cEFFZXlWVkVyMndHWnVQTV8yZnVhT0hxS3c2ZW1ZeExsQ1BHQVdfWU9uV1dJeVVQZ0RGdmtweE10b3BNeEk2N0ctLV9TYlhRMU5iakk1ck84OEdIWHFacWs?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-20",
    "event": "Tesla Stock Revs Up On Cybercab Buzz: Analyst Sees ‘Good Entry Point’ As Robotaxis Drive 30% Of Bull Case - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxPcGc3NXg4T3hydWNUVjNaVVJ4Y2ljcHVMRzVRVGpLWDlHekZhUTNQeXd4a0NtQlJZVklhWnZTYnNpS1NFOUFYeEJLUkxDTndkcnplNXlCNFdqYks1VlpoRDVtMzFKN3NLdi1vNVZ2Q3FhV3ZlSndqYnBHOUJuVzBrRTJOMFpQZkhqbEQ1Ql93T2tFWHRnMW81cDBiSQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Tesla (TSLA) Stock Is Up, What You Need To Know - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxNQ0tWMmxIS0YwWEJua0ZlRGdPVVBhaWwyYk9yNlJLY2ZIUnJLZU94UGJZSXFndWotSWhreWc2Z0JQelBWZVlveVNVSXRRaUtPYlQxdFZWMkh3VWs1YUFlNHlNTVgtUWhpcE1Vc0w2OUZsaXlVclJiaGtBaExsTjZIYlktNjBKM0FiZWp5UDRxTQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "QQQ is up 0.5% today, on TSLA stock price movement - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxNeG9Qczc2V1c5VmFqUkpXcXlpUHoyMENPaTZVeXZONGJpZHJZcEF0eDdwRmdEQkFCbVNKNnIzMjR0ZktZUEJRU3M4Vm55V1MwcjdsWFRQUURZYWg4UVpaVk9WQjZOUHJwYko2NEJKZHFVdFk4Y1ZLWnVxXzF3eDRaNk5NUGVQVHpQZnZCSlNjZWg?oc=5"
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
    "date": "2026-08-21",
    "event": "TSLA Stock Rises As Swedish Union Ends Nearly 3-Year Strike After Tesla Buyouts - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2wFBVV95cUxQcW9OcDhBYUtfRllZbjlteFkxM3pqdkx1NzFpNXE2aGppaThESU1Xcldjbl9aWlhvZm5iQVhwYS1aNzB5SnhDb0NBRkV1S2x4eEFSUEZCWERVaFBuY25yX1QzTklGMTNidlE3b2JKZ1JYT2Rocmd2OGJpTldqbWJWeHFRWjZaNDgyWlBkeEI2djVlUGhmZTFjcGNKeEU2ZlhhUV9XZmlTLUxERVU5UktLMU84bUlzSTNZVnRwZ0lrZENzX2FpRHdWczhWRFRXNnc0V2dPVnBjLXhJNGc?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Tesla (NASDAQ:TSLA) Stock Jumps 5% After Nevada Clears Up to 5,000 Robotaxis for Las Vegas - Stocks Down Under",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMidkFVX3lxTE1XRThVUkdCZTBTXzlYb0tEV0FyejFiRUF5cXRSQy1hdXBieUNXMTR5Y3AxMGlET1hzMHlIS3NkN21ldkM3VFJyRVdITVdqNFZBWGhyckUzbTE3Y0tXaGQ5RkdfTFM0VDlKVWZoZi1nalFTc25acXc?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Tesla Inc Stock (TSLA) Moved Up by 3.73% on Aug 21: A Full Analysis - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxNMzBETmg5alQ5Ri0zS0N2T040OC1sSTVPLWZaZENLdVBYZ0w2RmdrSlJfOFQ2YURycmthSG45NXg2cU5BSmtPSzhnWlJHVFpKWlBMZTlKM2RLMWoxV1BsejNoNXh3UlRoZzhrRDJZT0d6dWRCYURqWXZmX0tiUkRib3FMajRVLUJPQ1BR?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-18",
    "event": "TSLA Stock Slips On Bear Warning That Upcoming Cybercab Event Is No Milestone - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNckpkUHctNDd2eGtOVmRQbzB2d0tlNmhVLUh0Z1R1emJFdTZvVEtTd0czN19EZndXa1N6TVJQTFZ4d0NTLXRlU0JKekhpc2JiTG1NZ0ZnTGxyZnllb19fbFVDdE1IbDQ3dG9TR0pJVkt5MHFWNDhma1hzTm9pZDFFUjVYUWRqRV9RZ04tUi1nNTFLX2FESG9mbzVjRjlpMjF6aW8yVm9PZjltNTBDS0U3SDZWcXR2bzRzM3dEN3YxWGhuM0Ytd1ZKUHhMZzVSdC1fM0E4?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-20",
    "event": "Tesla Wins Denmark Green Light For FSD Expansion — But TSLA Stock Slips - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNalFQVWYtc0ZkVzRtaDNIV1ZqWmpfYlNBcnFqS0xNNHd5NkxLMUFsTUEtbGh0ZnNtTlB1NGFxN2E5eHFzVE0zT3RBQldSOHVLNXZNVzlyd21CNVBwZUhrdkNtMU9ENGU5ZGYtbWlzM192am0tZmdtUlJscm8yanhFbS1rMnJpRHdlT3lqY2dpZUVxb1UzaUU2clc2SzNidmhkREpiNTFqRG4tRWduODJERU1B?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Should You Buy Tesla Stock While It's Trading Below $400? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPTHcwQXFCLUN5UWxsTkZENm5ycmJkNW9kQURjRlFNd0xFVXdiYWVVZW50bGhPSzJibnNVenViVVRSaE9VMEk1LUdpQWRPcjNvanVCM2lpYjVaMlNqSklXT0ZJR3dpWjFfY0NKZGJQRzRzeDh2WWZiMmxPR1YxVXM3RDlIRy1wLVQ2YWtha1E3RHNlX2o4WDJOZXhn?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-19",
    "event": "Tesla (TSLA) Analyst Ratings, Stock Forecast and Price Target - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAJBVV95cUxQTEJfQzR1dzUzX0JGVkV4Z3BVdzhILW1xRDBDQy1nb2RrWnBOXzROejVZUlJTZlhralcxeHdqS01vV0F2RnNHZUtZS1Vnc0p5ckMyRE5RdlllcmJVWHpRcndxR01GOElHVXU4N0dvU0tPOTZRUE5FRnZGWkg5ZmoxeVdaR3ozYmJvUDlERENISFN0dUU0RXJGQ21mNU1PNmU2QzV2Y1FuQWk5MzZHbW5sdDBSYU9YeVpYbmtscFN3Xy1WMl9KS3hJQmtXSEdNUGQ5Z09YMHFYZzcxUGJYTGFwS3Rsektxdno4V2JrbG42Nnczbi1yZzNBTHV5UU53UHNYaXZFaWk1MXg2YmFudk14ckd2T21RQWs4STJZYnN4eVdoLWN1VTFDU0dmYmpjbHVUQXJiRDl2NFQ2ZzBk?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "TSLA Stock Slides Premarket: Australian Judge Warns Tesla Of ‘Really Bad Time’ As Robotaxi Worries Mount - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxOUXhXWjZkbkRVSjhKSDJ1SlVtcGJsc2hReVJ1anp2RnZWc2pRWFpUcklLSFloMDhuRUxUWklSM1prZ2ViUFZ4RVlIRDRSRmFOQVgyMlBaYzVwNjEyYmFYdXNuNHVHRndlVC1kZk5hWVMwOElVMzJNdVc5ZlZDZnBoQzVTeThvaEpPZ3puYkpDaUFUZ2FELXdvWVV1aklROGFwRFo0Y3lZQXVybXhJUW1rWWk1eVlFcEhFQlM5Y0lOLU1NQQ?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "Tesla (TSLA) Up 8% Since Last Earnings Report: Can It Continue? - Yahoo Finance Singapore",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMifEFVX3lxTFAzZ0JFSmI4azlFbERhVXpGZzc0MVl4X0k3Tlk1TEt5WlN0QzdjeVN2OHZpc1YxNUx2ZHo0NV9kSUI3R1FHc0tHWnRLUk9Wa0tiZ2pHX01aZlJrUk13OWl5VXhPTmlKOC1FSXFkLXl1dEJlWGVLcWZKT2tSWF8?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "TSLA Stock Eyes Another Winning Week: Nevada Clears Up To 5,000 Robotaxis, Musk Sees ‘Crazy’ Tesla Growth - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxNSmF3UUJaTERzeTFfdG94cndBYUxjTGhIZ0dNNWNROGJBdWpEV1FmRVM3RzVCOVMzR3RDbUxtS1IxdGI3aUd6Q1RYbG5ZRDgzREdCd3hjcUVyMmVOMVRfSEUybEJvZ0otSHJYVTZuY1ZPWVJEUTZCVGVIajRIeHZvNDdUbWtJQkd2RjZDQUFmNDJTYzM5SFJrd25NTkJ1UUVHZ1g5NVdrTU5vaDBjci1QbXJWZlY?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "TSLA Stock Eyes Red Week: Elon Musk Says Tesla’s FSD Could Soon Take Directions Like An Uber Driver - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPNXN1QWd4TVp6MDNJM0NCUVlWX3dXTXBhdXo5WEVQaE1uZ0V6cXhNTV9ibFNOYnBOMkJYS2haWXZOYjdjRjRsRjZNZnlUN24wZlpCZ1BNdkxzajItWWJiSzVKSzQyTklWUXFuVnE1ZXpkQkxJbDk3QmJBamFiSnY2MkQtTTVWejRkZGYydzZMeXpPWVBqNXJlbGliNXB5cWZyampJTXpuQzdnNGxQWG5uWURzMzA?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-21",
    "event": "TSLA Stock Hits 1-Month Low Amid SpaceX Merger Jitters — But Analyst Sees Tesla Holders Getting 66% Of Deal Within A Year - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxNSGllTG1EZVZHLUw5VkZHZVIzSkVGSU52NmRwZEhUYkl0TExQaEFvTTFTckxMZ1oxMkR3aGxZLVEyQVpJeDg0aUgzTDlPRlY2OElwN2t5a2FoM2dWUW0wSm1EX0NoUEM0UHlEbWlWeEtKX3VqMDE5XzJLT01zTkFwS2ZacDRnbXlxb2piaHpjM3VnR1hreDZfVzRkVHo5Qm5nZnZoY3llMnRCbDlic2NJYmJWY1pjRHp5Mm9VbnluVFo?oc=5"
  },
  {
    "stock": "TSLA",
    "date": "2026-08-20",
    "event": "Tesla Wins Over Another Skeptic: JPMorgan Raises TSLA Stock Price Target By More Than 200% - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxQWTBIMUV2YlFCMlkzSWQwa3JIa3YybnprSnVIUC1YekQxT2dLOHVVWFFxUmlMc0l6ZmNxTWFBR0ViOVBaaEg1LXZ3R29DOGE3WnBpRlNjeFVsbHU5Qlk2dVJxQ1NlWjVkbVQ5bzRfWFpfZ2JnNjE2cko2N0c2U2ZCRl9WeDE3ZFRrWnVFUWFmTmZfUDhrSFhWTk16UzF3MTc3dnVXT29qM0VBak4yNUVZLTl1T2thTy1CTGE0dg?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "AST SpaceMobile vs. Boeing: Which High Flying Stock Is a Better Buy in 2026?",
    "type": "NEWS",
    "remark": "News via Motley Fool — AST SpaceMobile burns cash while pursuing satellite broadband, while Boeing grapples with debt and production challenges...",
    "url": "https://www.fool.com/coverage/better-buy/2026/08/21/ast-spacemobile-vs-boeing-which-high-flying-stock-is-a-better-buy-in-2026/"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "Boeing Is Delivering Airplanes Faster Than It Is Delivering Cash",
    "type": "NEWS",
    "remark": "News via Trefis — The planemaker's delivery recovery is real, and the cash it throws off is still a small fraction of the annual figure ma...",
    "url": "https://www.trefis.com/articles/612394/boeing-is-delivering-airplanes-faster-than-it-is-delivering-cash/2026-08-21"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "Archer Aviation Has a New $200 Million Reason to Get Excited",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Archer Aviation just struck a deal with Boeing that could transform it overnight from a money-burning startup into a def...",
    "url": "https://247wallst.com/investing/2026/08/21/archer-aviation-has-a-new-200-million-reason-to-get-excited/"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "A $156 Million Reason Why Boeing Stock In Focus",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Boeing Wins $156 Million Navy Contract as Defense Orders Keep Flowing...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/156-million-reason-why-boeing-122133464.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "AI Bets Send Industrials Soaring, But a Slowdow May Be Coming",
    "type": "NEWS",
    "remark": "News via Bloomberg — A brisk rally in industrial stocks this year has defied higher oil prices, rising bond yields and restrictive trade poli...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/ai-bets-send-industrials-soaring-120954183.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "Boeing and 9 More Stocks for Manufacturing’s Revival, From Our Roundtable Pros",
    "type": "NEWS",
    "remark": "News via Barrons.com — U.S. manufacturing could be headed for an AI-fueled revival. Our roundtable pros size up the trend and offer 10 promisin...",
    "url": "https://www.barrons.com/articles/manufacturing-stocks-picks-roundtable-7c264514?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "BA",
    "date": "2026-08-20",
    "event": "Is AerCap Holdings N.V. (AER) a Better Aviation Investment Than The Boeing Company (BA)?",
    "type": "NEWS",
    "remark": "News via Insider Monkey — AerCap Holdings N.V. (NYSE:AER) announced the delivery of its tenth Boeing 787 aircraft on lease to Grupo Aeromexico. Th...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/aercap-holdings-n-v-aer-230100144.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-20",
    "event": "Archer Aviation Drops 7%, EHang Sinks 6%, Joby Aviation Falls 4% as Air Taxi Stocks Ignore Good News",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Archer Aviation just announced a deal to acquire profitable Boeing businesses and Joby reached a new FAA milestone, yet ...",
    "url": "https://247wallst.com/investing/2026/08/20/archer-aviation-drops-7-ehang-sinks-6-joby-aviation-falls-4-as-air-taxi-stocks-ignore-good-news/"
  },
  {
    "stock": "BA",
    "date": "2026-08-20",
    "event": "GE Aerospace Stock Is Priced For A Margin Repair That Has Not Happened Yet",
    "type": "NEWS",
    "remark": "News via Trefis — The engines it is shipping to build tomorrow's service revenue are costing margin today, and the shares carry almost no ...",
    "url": "https://www.trefis.com/articles/612228/ge-aerospace-stock-is-priced-for-a-margin-repair-that-has-not-happened-yet/2026-08-20"
  },
  {
    "stock": "BA",
    "date": "2026-08-20",
    "event": "Can Acquisitions Strengthen AAR's Position in the Aircraft MRO Market?",
    "type": "NEWS",
    "remark": "News via Zacks — AIR's $35 million Aircraft Reconfig Technologies acquisition expands in-house certification and engineering capabilities...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/acquisitions-strengthen-aars-position-aircraft-124300781.html"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "3 Large-Cap Stocks on Our Buy List",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/3-large-cap-stocks-buy-153947019.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "MSI Expands Drone Portfolio With D-Fend Deal: Will it Drive Growth?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/msi-expands-drone-portfolio-d-142200970.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "MOS Launches Enzyme-Based Residue Management Product",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/mos-launches-enzyme-based-residue-140400754.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "Are Transportation Stocks Lagging  CSX (CSX) This Year?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/transportation-stocks-lagging-csx-csx-134003809.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "Nvidia initiated, Teradyne downgraded: Wall Street's top analyst calls",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/nvidia-initiated-teradyne-downgraded-wall-133824309.html?.tsrc=rss"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "Boeing Is Delivering Airplanes Faster Than It Is Delivering Cash - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwAFBVV95cUxQbm92a1JFREtJNHpfc3VXZjFkRmlucW9HaVc0NWR0YUp6SzhvYklqbmZyTmNGYlBPUEFWV0JmN19OX3ptb2ZoOV9TV1lFTnUtcjRmRzM4eU4xVHExTFRpV2s5a01BbXV3dHFrSlBSdG1EZWo0TU9TV2ZCb0JxN0dWREhmZVFveUhQaTlSRl9oMWZvQllQeHlUOVVDTHgtUmplVHNRZWJubTd0QUoyamRsOHVpUUswdFFocW1KdjVoY0w?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-20",
    "event": "Boeing (BA) Stock Still Trades At A Discount As It Gains 6% - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxOM2UxNkNsUHhBTHhRTFY5Um9saGkxRUlyTUVCTVdwdzNjMWNDczZieTNtRkhMeU1ITHF6MG1sTHV3TEIzaXVZS0xuWHIxTDJNSWdJN2JPejcyc2cyZEZQa29saXZORlNEclpoQjRrQ1lsMG5BbnpJWjZhQzlTSUJ1WjZMcHUxMWtnTENCU3NrUUdBNEtQUnk1SUNDWWhnSmNEYUUtN1BtRnNtYTJ6eDlzU095TmlrTS1pRTBuZmRhWdIBxAFBVV95cUxQX29nZzNhQVpSd292MlpmZFJyLVpONV96cWxFaFUybmVuckg0VjY1bWRaRHNTUmtlTmtyWWNyN3F6VWtMZjk1LTJyY0pjUUszVllsbHIxa3AxU2FOeWlsbUhJLUFTREJRQkdRWS1vcUxpa19TcGpEZGJ5N1R1UmlDSlNiWFlpMEpUbDU5WUNxNElOWGpXb1BBU203d2U3cUVrcmQ4Q0lWZnJ5ano5V1Y4QThZSjFoWWRsc2Mta0lMTWo4dDBY?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "Boeing (NYSE: BA) hires EY partner with $600K salary, $300K sign-on - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxQQkRtbXlfQ3JjWEF3cnYwY01GMV80aWNEUUpsdUNROVo1bTJfVkRucTdSa1JESnlaQWtMOFowZktfSmMzb2haa2dSX2NEVnVnMEhrY251M1dYUk00WDlVcW1rSkcwUWRCX2xYOTRvRk5TUEhnN0hZM2F0MmdocjNhME90Q2haeW9ZRlp1SFhqa1ZzbVJLcHNUTVgtSmk?oc=5"
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
    "date": "2026-08-21",
    "event": "56,251 Shares in The Boeing Company $BA Acquired by NFJ Investment Group LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxQZVl0MFZ2U3JvQ2pKc2IxTzRUNEY1OTNnLXpmdHBDbWJ5SzBEZV8waXoxenpRZ0RZS3FlanFZNGdrRVo3QlRYdzFQOFJUM3l3Qm5fM3VMLXBmZWRBaDhtbTNldC1EMG5xeUhGdndtbHZYNlJWUXp0OUNoWjRlaFhaeFY5MEtDNTExNGZCSnV5MlNnOC1jZENUVnlDX0pxLWxUbjlLN0ZoM3ZYdlpCMUw0RjRFS3Z0di1JdVZOV3YtWDRlTk5IY0N4NDdFdnh1M2hF?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-18",
    "event": "Fund Update: New $27.4M $BA Stock Position Opened by Rakuten Investment Management, Inc. - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxNdkVKMXo1bmZnV210VUg0SWllcWdmdDZMOHNPa1RacEEtdkJkRXFkcTk5M1UwZzU0SlNBNlNjenA5QzV4SFpOekFSaERJVUZKMEpWMnUwa0VmTVo2cWFPRnhLSmthN0ZSWWVPUUNhUlZqVVo4OVJVNUdZcHBfWHk5NEJHdEEzN2N4V0pHY3lDU3Atb1ZFUXc?oc=5"
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
    "date": "2026-08-20",
    "event": "Boeing Co Stock (BA) Moved Down by 3.02% on Aug 20: Drivers Behind the Movement - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiAFBVV95cUxOQ1l6akNlaG1PSEl5aUljZEFQRzZKNVo3TTFfRXRaZkpCdnFFZjYyMThGM0R4VzRObVNGclVRbnFUem5HV3IzSkV4RlFrRGhwa25xTzIwbnlLX0F6Z3NSak1FYzVxV0NfblBIcWEyTzhmNnp5dDRyZ1VnMmZ6UmtRZzdzZjdMdWRC?oc=5"
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
    "date": "2026-08-21",
    "event": "Why Is Boeing (BA) In Focus After Its Air Force One Deal And Latin America Pick? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxOYUtQaDhHZHR2dXZzTEcwLTJNd2hLVEFxNUxJRlRUSy11ZUxobFU1OEJyTDVfWjM5QVREUURZM1BSTzh4TTU0S2xOM2cwbC1OMVpQd1paUG5pWmQwNTRaSXlhNUJDSDhyeHdhWlNBV0ZPeDJKUTVMSS1LTDl4VVhwc3dZVmNTYWpicHNTZzRnNUItNkxNQU9pR1p4c0t4Y1hIbmNPZUJJNWpvNVhVdW90a1Y0UTBFTzVjbV9jUXcwelB2V2tN0gHKAUFVX3lxTE9WZWR2aUthVnA4NnFOTWZaZmJzMVQ5QjQwbU8wQXMwSzBTcGw1dUZsYTI1a0gxbXcwSUhQVXVmUFNwLXNXZ1N6SDV6QUxtMFhhTktGUVhHYzZubUNFeW1XOGw2d3dTVVBnWHUxQXJxNWJlcVBiOVNYVkhoamNrMHZRWWpkTmVScFNscGloaVlUV2gtUGoyMFVVWmdwWG92TmtKMGQwc2ZmREkwUjJFVko0RXgtZ3BhSUJacExaVEw4V2R2OVFJMlZFUXc?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "The Number That Could Test Boeing Stock - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxNZVJRcHdzdkFHdDZCMzZZTGFHcXlCQjhwcTZfamMxR1hXa0dXZ3NhQzlKaGVJU1FtRUE2aHJKX05LaHlxak5FbExLc1d2RmdrVWROZmNDUm5Tdkx3YlRXR090TXFmMHlsRW9sVFJXd2MwVFI5WmdZYlV6QlR0cmRpUGpTZFRHWUlnQWhPcF90ZHFvX0xqRmdyU3FvbUJaWklkXzVvNTZDcVZVY2M?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-21",
    "event": "Mystic Asset Management Inc. Buys Shares of 22,608 The Boeing Company $BA - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQb2JfU2xQSHN3NHY1Zm1SZUJ3d0NqLVhmU1BQR1ZDMU1wNHpnem1QS054NW1FRmNyWGxLMGVwdmVUakZDTE1reHEyYWRERXdZV3h5SGNlSTRQNV9yRTE3MG9LR1Z4LUU0Y0Q4bmpaYmdlUTlKM1I1M0JKR1FaWnN3YmtXYXZPWFdvcXcxUUd3ODFGcmlIOXlITldhdTRMRDI2N19zMXY3d2g3ZjFNOGNSeFhlT0Nnazd5N0hDZ0pnUm5xZGUxNTV4TjYyVQ?oc=5"
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
    "event": "Boeing Stock Commands a Massive Premium: Is It Truly Earned? - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOblFuMEVDVWFFRlVzblVscFgzX2dad0tnbEdNVEcxUnVLZEQxaDhuQUI3dFpKM1F1VW9PUFNLZC1sc2YwZjdlaDJ6akw0eTF0QVF6M1RuSFg2WFQ5VnRYRy1uQThkcF9WM2d2UmVHZ1lJYy1jclpSTEVpT1lJc2lGbjBfMUh0ZVNhcTFfbFVTaV9UNmx4aVAzNXBFbGwtaVY4b2xGTzA2ZGNaamdBd1EtZkJncmVLOWUt?oc=5"
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
    "date": "2026-08-21",
    "event": "D L Carlson Investment Group Inc. Acquires Shares of 18,460 The Boeing Company $BA - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wFBVV95cUxNaWhtRndFRXhTWFVsb3Q5V2owS3V0cS05RFB6Z0hEUjlsbXh5bGZvZnZneU9GVWN2VVdQRXVyWkExZnFNd0JFZ1NBVDM2clEtZWdFQTRtX0tiSy1Sc2VnckFkWkpyV1VuMlpudXowRjg3Q3lWX0ZUbWpETUZfNGY4cEo2cHRNYm5LdldUMFN2MkZaN2NkYzRILUtURFMtQXh1RnZtai0wZUVncmsyMXBSRHJfSzNFZlJLdlZTU21kSWdaVXFJeHA2aDdfRlppSWlNeHVGSW1ybw?oc=5"
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
    "date": "2026-07-28",
    "event": "BA Stock Climbs After Boeing CEO Says Production Is At 'Levels Not Seen Since 2018,' CFO Calls $10B Free Cash Flow 'Very Attainable' - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQdFdDVGRpaHVYSVoxY1lHY09QSFZMcmxBZjZTV0NyWm5SbU1EeklBQmZiMVlPV2RIV2xsQmRfNXpiYnpYWThlT1VYSWt2eXJpWGdreHZESXhUQ1lEc0RwVm4xZmFpR09nV0hNelFmOUsxUVBiaThJRTlOTTV6YWdKLVJYWnE1THJFampHc0puN1VHS1p5eUE?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-20",
    "event": "7,169 Shares in The Boeing Company $BA Bought by United Bank - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxPYVFaSHJIQi1iTTZ4cU4wTkdUeHRYbmlselRSTURGdFI1NDhIQWQ3UmNQSjh2ZEhHNEJRQ1UwUWZMWkFhM3hUNXFOekd2c1R5a0E5bDNqQ2NFOXJxbU1wdDVrMWQtVkl4VGhWXzJoN09TeDFrNVRuR0lCZHNoenJnV2xKaWkzOF81SEYxVHNrWWhqcGNVdGhQMDVoSFJWV2R0YzVTTnBaOURqaWg1RDdITTZpdlEyWVYtb28w?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-20",
    "event": "Boeing Co (BA) Shares Fall 3.2% -- What GF Score of 67 Tells Inv - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipAFBVV95cUxQZjA2STlwNmVzRFJ5aDBFZUdCUkpOcFZzVzRHUEpSMy05QzNFMXVyM2FUd3l2ZG1TRDVOMnNoZHpHeWxNZVM5dXZlbzV6QUx2OTBtbGFXNkhSVzhfWXVuYlhFU1h5T21VbjdCTW5wVWFJc3ozWnppaEp3UXR1cXE1Q1VaeEZ3SmFKc1pXOWVUZHNWOFk2d3V4VEZBalBYcU9fU1dkTA?oc=5"
  },
  {
    "stock": "BA",
    "date": "2026-08-17",
    "event": "Boeing Falls After Army Apache Crash, but Commerical Jet Turnaround Is Crucial - Barron's",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijwFBVV95cUxPTVpTbjcwSUxpRi1Uc2pFQ1lJckxrRDlRYi1MaVlsMk92LWlKbmVBelRXVjZ5VG1wU2ZuMUlpWFdTQ2lGVjd0elNaSmk0LVFfcDVQeS1EcGY4emI2bU9UandsaldTbzVJWE12c0ZLY0J1Y0JZek5IdmtpT0djU3BqRXVCOHQ3SWZIMWV4RVBVRQ?oc=5"
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
    "date": "2026-08-20",
    "event": "Boeing Co (BA) Stock News Today - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMib0FVX3lxTFBjSXdDSDhfeXM2VlB3STNRMWhUNXRjY25iUVh5a2NZMk82YlY1YV9BNXhGV2JCUzVxbkdBb0R3a0tmZUZINkNkM0s0MTZmcmNCNlZSa2MyZ003TGNvaHd0QXNJZ3R0M05hTlZmMlAzVQ?oc=5"
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
    "stock": "GOOGL",
    "date": "2026-08-21",
    "event": "Marvell Technology (MRVL) Stock Fair Value Edges Higher After Google AI Partnership Expansion",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Marvell Technology’s modeled fair value has shifted to US$259.66 from US$254.41, signaling an updated price target in th...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/marvell-technology-mrvl-stock-fair-211042043.html"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-21",
    "event": "Alphabet (GOOGL): Google’s AI Boss Just Stepped Back. Is DeepMind Falling Apart?",
    "type": "NEWS",
    "remark": "News via Insider Monkey — Demis Hassabis, the Nobel Prize-winning co-founder of Google DeepMind, is stepping down from running the AI lab day-to-d...",
    "url": "https://finance.yahoo.com/technology/ai/articles/alphabet-googl-google-ai-boss-205228358.html"
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
    "date": "2026-08-21",
    "event": "Anthropic's IPO could come sooner than you think — likely beating OpenAI to the punch",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/anthropics-ipo-could-come-sooner-195110660.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-20",
    "event": "Waymo is making its own AI chip for its robotaxi service",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/waymo-making-own-ai-chip-194318039.html?.tsrc=rss"
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
    "date": "2026-08-21",
    "event": "Tim Cook built Apple’s $32M-an-hour growth machine: Can John Ternus keep it going?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/tim-cook-built-apple-32m-155300126.html?.tsrc=rss"
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
    "date": "2026-08-20",
    "event": "What Is Alphabet (GOOGL) Signaling With Its New AI Chip Stake Option?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/alphabet-googl-signaling-ai-chip-231221134.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "Did Treasury Secretary Scott Bessent Just Save the Bond Market? Probably Not — Here’s What Traders Need to Know.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.barchart.com/story/news/3936699/did-treasury-secretary-scott-bessent-just-save-the-bond-market-probably-not-heres-what-traders-need-to-know?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-19",
    "event": "There's 'light at the end of the tunnel' for tech stocks amid bond rout: Eric Jackson",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/video/theres-light-end-tunnel-tech-140846636.html?.tsrc=rss"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-20",
    "event": "Wall Street analyst sets Google (GOOGL) stock price target for 12 months - Finbold",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxOMEhXXzVwZ0VTQTl4VnpkekMzSk9ub2JxZjZoWjZHM05JMndTZmR0bEdUbnVzamgwaU1uQmd2RnJMZ0lyX1VMZEgzQU9NbmZvaGFKSzhmRmxtX2QzZVJnQS1ac1dtYkkxNmM4T3Z5aG82NUZ6Qm54U042UDRwcl9MSnlzcFBsa0VJTnBPTVN6a0dsTWw3d1E?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-20",
    "event": "GOOGL Stock Heads For Third Week In Red: YouTube Reportedly Plans Mega Creator Push To Take On Netflix - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxOZU53Q3pkcGotTVlBbUpHZGgtbmhzY0JZLWozYjhyTWRMd0RMRFd1NlBkOXBrXzl4Q01PWXV6cXZCWS1hSGVUM0VXYUh2TmZlSncyR1RCQU1yVjh3Y2tXeU9QRW8yT0xZNmxzWHhFSGxjYU94X3NyeXlFRmpITnNROVNYMXgyV2FkajdaTkJmVVkzaFgwWWQwMQ?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-20",
    "event": "Alphabet Stock Ran After Its Ad Machine Had Already Shown Its Work - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxQb0pFNlVfU0ZpYzJ3UFl2YW5TRjhLVUM4SWxWMzNMQTNJazl5ZlJfTTJUZXhoa2R3WlBmUXEtakd4QVJYZFhxeVRDcFhpSVJHX3V1UmY0SE1nN3ZQdDJMMk1aSEczeWhJSzRBbEpfV1JVQ1VCWWRQU0lPY2RBWkQ1cTU1UTJZcktDcXlCaFlEMklHMlJGN0RWTGRkNHFqNG16SGc2SURJXzh3QnJrNUx0QkRzVUNBbWpfY1Q1NUxQNXljcGIxbkhr?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-20",
    "event": "What's Going On With Marvell Stock Thursday? - Alphabet (NASDAQ:GOOGL), Alphabet (NASDAQ:GOOG), Marvell T - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxPdzZPUnUyQktMNGVqeVpIMjBVaTljYmhDdG1HQmJEOEUxcTUtX2JKd2NmcENHT0hIYng3OHktTGlPYXJzUG54THVKeERWa2N0dzFMUkNGcF9UaGE2MDVNN21LRXF4aXV4d0VCNWlYMmxVbm9YLW42Z0hyQ2hqeFdsUFlucmJNb1NhZlEyU0NRWlBXendoT1dDbnJnOWJlQjJKemRSZ2dvWUEyaEhZdHp6eDFhTGc0c3o5ejBRRGw0WFA4NWp4SDdQVVJyMDJTWElYWjRyZWVPZVFNNFdQb0ZCV0c5OW5ob3dYa2c2aGQtRWZ5cGNT?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-20",
    "event": "Alphabet Inc. $GOOGL Stock Position Increased by Hyperion Asset Management Ltd - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxNNHVDcmxqamo0U1RHamhvVDVkZzRsOWVBV2RwQk5nS3A5RWpCekxrcVRNVEQycERkeVFIQWVGWkVxb016VnNXa1lEV1VRc1ZFZjBVQ1JESVJuTUlTcU5pSEFNTmZ0VkRUTHlkeGlKREVLckprcUt3dUdCLW43V2c1YU96cGlYUmdqMFdyNkY3OWhvdHdZR2NKTUFaZmtTNUFyOXJyM2xsZl9RQTVhRklWWWQ5QmpNYjB6RFdPQTk0Z1NpRTNqLXEweVg3ZndGR3FxRk5B?oc=5"
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
    "date": "2026-08-20",
    "event": "Alphabet Stock (GOOGL) Dips Despite Positive News for Antigravity Coding Tool - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxPVzhCX1lvWDEtTld6NGZFSTVwYUVUaGZfYkhwTG10WlBPa1JKOWhPODNLbWJpei05Rm9SdUxXUlQzZGR5SnJMdE1zam9SQnAxaTVWb2ZLLWloRk9zMHJMUG1zWHoxMUg0WTR5cW55aldibll6LTN3UkstTFlCeldXWW9NTU5uS1pxcVkzVllQS1p0ZHBOa2dnVk81WDBGVW1BWEEyVjFoNG9JTjQ?oc=5"
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
    "event": "Alphabet Stock Surged When Its AI Spending Found Customers - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivAFBVV95cUxOdnp1aWNFWG44aVVkazJPR1JJY2lBcTJrTmFENWxFSWxCNWRULTRteFdfcDhOM1YySjdQVGhMMExobHVVa21yRUo3enFBLVJMUVRiVXV0TFVJM3o3S00yNDFhNXp0eXRzRmJDb1I2YW1LdFpOWXNuQzN3c2lvYXlTSWZidVlCNmR0QjBkT1lnV0xXdjdiRjdObzRXNGFhWnNHMzRKbWVuTnlKVlVJb0N3VV82MHVwZlltc1pONg?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-21",
    "event": "MRVL Stock Jumps After Google Gets A $12B Ticket To Own 7% Of Marvell — With Strings Attached - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi2gFBVV95cUxOaUNodjVzS2M2Z0VVeUQtNWVTZEx4bHBZb3NwMXh0TnVQbGxaaVhyZnZ3UF96NDZiOGJzbnpJbnlKOTB5RFlJY05mMGo3dDhkcVJVa0pqdmxVTkQ4cGpqX0hZZV83N040RWgxT2pySXBNOEVxY2ZiX2puSDVnR2hxdk5CM2E3Y2I0RHRJLVVZS01qeVBxNV9tUVRnc2ltbFl2SlpnSnhjZ1VzeHpNbkxNUk5MTG41eW1vMXdxT3BqOU5xZl9ydGJuaXFXMkJiVXZ1QVVzNXYtbnZaZw?oc=5"
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
    "date": "2026-08-11",
    "event": "Alphabet (GOOGL) Stock May Be 20% Undervalued Following AI Bond Sale - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxPLUl1enV6Q0N3T1pKcG5FLVQ4SExSVlVDTkZ1VWZUc1VydTdEWGxDYlhlMTI5bGhMSXhRVUJKdFZYel96dnVobUJiLTBlZG5fZ1BwTERIa2kyYTltZDNuYlA2dGFGdzlFZk14eDVGSkFpX0lWclNVN0k1R3JWRWRsUUJRZkxVQjRsbjB5eTBLSHBEVkxHaU0w?oc=5"
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
    "date": "2026-08-21",
    "event": "Alphabet Inc. $GOOGL Shares Sold by Elevated Capital Advisors LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxPSk5iQUxvd3l6aDd2S2dzRWRrcWswTUZLTUxnd3Q5MTF0YzVLcnFBU3ptOWdaU2dMeGJhdzh4T1pzU0ZMUlFERlR4NUNfNmF2Ti1rS05BSFRaZHpwZ21yYmpncUJUN3RMdmhOczlpbXJFTC1lZkw3T2Nfd25tQlJIRTRvc0pVY052YXMxcnVLcHpWcUxxeEF6MlJtTTlBcW0za1E4eGFlVkstejVva2Z1YkNBWEpRUkhOeVJxalFGZjBWdw?oc=5"
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
    "date": "2026-08-17",
    "event": "Alphabet Stock Has Attractive Short-Put Yields As GOOGL Stock Treads Water - Barchart.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxNZXJ5dDZMYXRpYzBwWW1YWVhhajhZVXVXTEZPU3RDN1FvbFNGYjRSNDZVZnMxdkpJemNYeXk3WGlDanlxNzF3U09PcWRSLTFwSGNkdkZhcFN6TTkzMm9wcTVjbGpYLTJ6VVNvZW5yLTJpQ19XRTZZWWc5NndBdHFDVnRrandfLUJwTmZGTVlPM3dDODctaElhUnAxdlNHRnZSRUVxX0RoQldreW05ZENLOTUzSEZiWkFIdnc?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-20",
    "event": "GOOGL Stock Drops In Premarket: Report Says Search Giant Trims Cloud Team Amid AI Spending Push - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxQUjZDVDVHZjBJcmxHbmhfVWFBV3ItampZSHFzZXp3dFRFREk4Vkxyb0x0MXZwS1JaQmJjSUQ2aVV6UUxPZk1fdTRFUTFSZFcxOWQyVDB0ZFA5WWVPTEc0dlZtZUhIQVdhTV9WV3IzVGY0UExkVWFadUFJVFRPM1V5YllLQ05lZUNoS0xpZEJXMmtHWmloMjZIMXdVUUItRUJpRmktR2VXUWQ4djluZTRfVFNUTEdqM25SRlZybzMtamtNWklBaDZrMklpN2lhQVJxNlhDZ2JzVDMycGNhdGZqdUNjQjQwVEVzM1RQMXZSdw?oc=5"
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
    "date": "2026-08-21",
    "event": "Alphabet Inc. $GOOGL Shares Sold by Eurizon SLJ Capital Ltd - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPcDFRWDV2UjdyNy1RVUFwSkJPRmJSMnhEeHF5MEs3WTlWNkp1MjhaemdYMUg1TUs0UnJ0UHBBa054MThyblVVU095cHh3X2I3aDM1ZU5mNzk3N2VWeGpVU0l1NWFBRUd5MGlqUlZOaUhuZVVOeWVNWEF5a1NtUUdKdkxUX0ZhM0JKb1JqRm5LSmtxY1dHaWFhemVGMTNGMUdRMUJYY3M3M3czZlh6VEVoeUFtUzZzUUxNWmc?oc=5"
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
    "date": "2026-08-18",
    "event": "GOOGL Stock Dips Premarket After Breakout Week: Analyst Says Google Developing Next-Gen AI Chip With MediaTek - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigwJBVV95cUxPVW9xZ1RSVnlmM1R6bFVma0lBZzd2bmNObFVsWnhmQnVaNHdEN1FBM2ZZX0JtakFtWEpHazhuUU5UX0FienlVRi1acHVYd2l6U05UQlVkV3ZDZ3NhOG1aekxGTnkxdkxINlJJaEExb1FvMjVKTjZlYnFxdUhyWTIzQWtxSHowYkloYXlESnpEY2hYZEtWMENoVXFVVFpZWlZTaWRudDI0V0pDQURRWFlUcW9OcTNVdE1hYVJGbDh0U3hqUFl0ZlNMbWhqb2RLOGc4QkJsazZsYjV5QmdlM2ZMU3ZVVFF0VTloMDhndHNLMkRpVWV4U2dONDY3eXV1S1dUbnpZ?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-21",
    "event": "Jennison Associates LLC Has $6.72 Billion Stock Holdings in Alphabet Inc. $GOOGL - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPMUpidE1pdEtsTW9naHNBVkdncFA0Ulh0WWt1eGI5QzBQN3JZaDU4c1hhMkVhOWNKSU1WcVpDZTdrMWkyVnBrTFBCdEZ1dTZFVW16V0ZLeXZPaEdvUGU4d3JiaFNHclRsTkNpeGpEdlBhbWh5U0NLQnIxcDAyQ2VFZHA3YVByZk1fN1JieUdtUm1hUTlEWWVteTR6b2tVVi14VE80MWFURkhpM1ZiS3BEUkFzM2hGeHdSWlpWR2tWQzJ2bkF0UjNqTl8tOHB0MGdPQkFN?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-20",
    "event": "GOOGL Stock Heads For Third Week In Red: YouTube Reportedly Plans Mega Creator Push To Take On Netflix - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxNSUxIOE01VFloYzVGaHo3NHpmTjA3T3RfeGE5aG5DaHdzVldtNkJ2LVVlVlREVkV6RXY5T216UzhTZGoyajNWdnExUV9mSlB2aGNoSDctMG9qVzdLT0YwUGZFOTBQdVFYdkFZVDFMTldGQmw1MnhZdVRyQ2JIWGllUkNXTjFSOTVrZEZHeEpyN2RibjFkWW1fdVVPaUFlRGdDeFd2RGduN1lsdzdnaEp1LVdfUldscTdxRmN1bmtEQkxVUFhGLW01cjJsOHNqb1h4UnFtbmcxZi05WEFKN3lyQWtxaFI3YnBhbFZtX19BTzJhYUJ6d1Rzbmp3?oc=5"
  },
  {
    "stock": "GOOGL",
    "date": "2026-08-20",
    "event": "Google’s Gemma AI Models Surpass 1 Billion Downloads As Developers Build over 100,000 Variants — GOOGL Stock Slips - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigwJBVV95cUxQR3hIRGtSNnlsZ29sWnVwN2dyU2FVSUlvWS1jWXVtb2pWRlM1YUdOS2lhWlZYSlFsTjYtdURSZUlrZkN5a21NWWVVN3pHXzlUUEN6N3h0YmpvY2UyQm1DOVp1b2lpVUVTUG5BcjBTaVhiNkVSWlBiZUFpdXdNSlZsSVk2SkYyRGxLbmxZVFVJVDVjUWtJcW8yOGpmYkJyekdJaDhOelh2UW9DWFZlVGtvRkFORVZDcXR3bnVua010dnYwMUwtXzMxQkRDeXVDRkVDNDZFQlBuaG5VUzVKVzJCRzJsb3JJX2JVSjEtSHZVVUwzWjRHRldINWtCdU5jZGpJdVZ3?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "SEC charges former Bank of America investment banker with insider trading",
    "type": "NEWS",
    "remark": "News via Reuters — The U.S. Securities and Exchange Commission on Friday charged a former senior Bank of America investment banker with ins...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/sec-charges-former-bank-america-202413058.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Sector Update: Financial Stocks Climb Late Afternoon",
    "type": "NEWS",
    "remark": "News via MT Newswires — Financial stocks advanced in late Friday afternoon trading, with the NYSE Financial Index and the St...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/sector-financial-stocks-climb-afternoon-195755759.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "BofA Sees a Stock Market Setup Starting to Change",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Several hated assets could benefit if consensus starts cracking...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bofa-sees-stock-market-setup-193717505.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Bank of America's Stock Market Signal Flashes Warning",
    "type": "NEWS",
    "remark": "News via GuruFocus.com — Crowded positioning could make the next pullback sharper...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bank-americas-stock-market-signal-182955978.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Walmart Stock Is Taking a Post-Earnings Beating. BofA Says Buy the Dip.",
    "type": "NEWS",
    "remark": "News via Barrons.com — Walmart stock keeps falling Friday but some on Wall Street believe it’s an opportunity to buy shares on the cheap....",
    "url": "https://www.barrons.com/articles/walmart-stock-earnings-retail-bank-america-d32dbf85?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Bank of America's sell signals are flashing red, but 56% of fund managers are going all-in on stocks anyway",
    "type": "NEWS",
    "remark": "News via Moneywise — If bankers are ignoring the signs of a crash, should you, too?...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bank-americas-sell-signals-flashing-145500469.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "BofA's Hartnett Sees Pressure on Risk Assets If Bond Plan Fails",
    "type": "NEWS",
    "remark": "News via Bloomberg — A failure in the US Treasury's plan to tame long-term bond yields would pressure the dollar and spur short bets against ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bofas-hartnett-sees-pressure-on-risk-assets-if-bond-plan-fails-100149671.html"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Bank of America sends warning on HP stock before earnings",
    "type": "NEWS",
    "remark": "News via TheStreet — HP heads into earnings with its PC business regaining ground, while Bank of America warns that rising costs could leave ...",
    "url": "https://www.thestreet.com/investing/stocks/bank-of-america-sends-warning-on-hp-stock-before-earnings"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Is Bank Of America (BAC) Undervalued As Its August Bond Issuance Raises Fresh Questions?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bank-america-bac-undervalued-august-043010697.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Bank of America resets Home Depot stock price forecast",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/investing/stocks/bank-of-america-resets-home-depot-stock-price-forecast?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-20",
    "event": "Bank of America Resets Etsy Stock Price Target After Event",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/bank-america-resets-etsy-stock-201721828.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Does BofA’s Upgrade and Buyback Boost Change the Bull Case For Etsy (ETSY)?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/does-bofa-upgrade-buyback-boost-031811783.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Memory Stocks Struggle for Momentum With ‘Smart Money’ Moving On",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/memory-stocks-struggle-momentum-smart-080700264.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-20",
    "event": "3 Moves to Protect You From a 60/40 Nightmare",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/05e4560c-82b7-3a7c-a4af-8b0742947c76/3-moves-to-protect-you-from-a.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-20",
    "event": "What Americans want from clothing brands is starting to change",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/retail/american-eagle-stock-bofa-aerie-growth-retail-clothes-shopping-change?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-20",
    "event": "BofA reveals surprising reason to buy Zoom stock",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.thestreet.com/investing/stocks/bofa-reveals-surprising-reason-to-buy-zoom-stock?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-20",
    "event": "Will StoneX's AMG Acquisition Unlock New Growth Opportunities?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/commodities/articles/stonexs-amg-acquisition-unlock-growth-161400974.html?.tsrc=rss"
  },
  {
    "stock": "BAC",
    "date": "2026-08-20",
    "event": "JPMorgan Raises 2026 NII Outlook: What Does It Mean for Earnings?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/jpmorgan-raises-2026-nii-outlook-150800977.html?.tsrc=rss"
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
    "event": "Bank of America (BAC) Stock Looks Below Fair Value Even After A 136% Run - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNdGptU3dYcDdDUDNkWTNoRlNfRGJHXzlTckZlU2NSQVdTN215Q212VWdZWFA0UnM5c0RSRTlhSVg1RFpNYzRxWXRVOUpXMnZtWVpPV1R0YTJ2YVJoUUo3Nk1aVFMtaElUM2RZS1RxblpkQTl4Sm9rZUdfcHNiRTQxM0hLVG1EaGtLZ2t4LUNtYjVCRXZDZDZYMUhzRk5vX2RmelprdEN6YkRYSDdCczVJMkRwV09uYlRtUVBscHB5UzhGa1NUeXfSAcsBQVVfeXFMT2dhcmZSbzFlSUtIa0JHb1JrTWhEM0pPX1dtT1dNSUJRS2pKQkZtaTRDNzU1SFI0b1RHWkwtUE95b3VieHBJazZQb181Mi1FUDBRZ1M3NUU5ZmNNV0NJeVRFMkdTcjlkME5PbWhDM3plS1R4NGwwYVF5MGVwWkswa3JOOW1pX29pc28xcEVMT29tYnJZZzlFd2E2RGxPdFdibTNaa243aHkwcWZMZERnUGdRRE53dU9KaUpLUERvaWxYbkxWOEhlQU1DWU0?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Bank of America Preferreds: Better Propositions Available Than Series GG (NYSE:BAC.PR.B) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxOWVg1eHB0Zng5al91ZTU1Q2UzQkw0VDZ2c0xIOHBDNXZZZm9nellRcGtWN0V3MnZkRVNPR1ViYzMwMm1hQnQtV3pzT3hYdkc5WXhGWmlhUHpOY0NpdlFIMVB2Qk1EV3FqWWdnZHJnSWg2LWZWNlZ6aTVJYkZrQ1VCQlpwalpLelRUU1lzdHExNEg3QVJNeVRuMloxQWVoQV96TFlPLTk2cHM5SzVWTXNpNmFn?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Simplicity Wealth LLC Invests $5.97 Million in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxPRVJKT1FSelBRcXpmczhYSGdTZEtiWTlWejVvdU5IY3lvSzBzTzhFV24wakpEY2Q3VmpKU2NtWF9UelpHZGp6dmpIelNNeEZ6RVhMb2ZybFZ1ZUNNQkhNdXNWWGdIaFFjWHZyd3BDZXl1bkVzREgwWnp4WHh5TlpHb0VqM29CVWd5WC0xRjQ1a2R6ZEQ2RjYtUk5IMDlvMmc3elY2MUpZWWNyeHpISklxZ1BPNkFZaGcwWmZ1ZWZpLUNtT1doMTFfR3JQdHpWNXFaSkpn?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Warren Buffett’s Berkshire makes $1.6 billion move on major bank - thestreet.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxPc3AzRHc4WXIyQXlLeXFJUE1SVktDQlgwcWFhMlRzOHpqbmlmM2cxOWhxb0t4RDNlYVp4MG1rVUZTOEdsV2psbTFvY1Q5WEdiTmphVEppNXI3S2xhSUtOckVQWGpGTjNadHMwTmpicUoyNHFnQzMzZEpBNUV1UTAtVnhBMGpqTnVKcWtGWmxRUFA1TlFUc0VETVE3NXNCcnF5M2xoLUJvM2c3X3VVUllz?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Baxter Bros Inc. Invests $1.92 Million in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxQQ0p5VlVOSXEwd0s2QzVxMVlxNnNNeXJja2h2UUdFNnNRMm9RVWV5UW5kZ2VhZWNfaHN1YUZwWFFKVmxrVEJWc0lPQ09hcjFHQ0czWmw4WUdVZEU1MEh1SUM0WlZ5SkRzaEc0dVNtVXZLRjkwd2FNTl80LXROM2NSMWZKSFd4NHJvVy1oYjllTl9MdDVKTWhBTVNiNkJScWNja1dPYlVNejAwaHd5WENmSnZPU2x3OHVQU2xWRUJiN0U1N0pLMG1CSkQ1cw?oc=5"
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
    "date": "2026-08-21",
    "event": "Bank of America (BAC) Wins Digital Mortgage Honors, But Is The Valuation Opportunity Priced In? - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxQUEdQcTFaRFRMT1BPQ1BONUwyUXJ1V0ltUEdiWVllT2pkT2JqWHRfaXNxOGtETFp0N3ZNemFrRG9BbU1MS3J0VHJncENicDV3WUJ6RC1ZRkM3OEJhZmNrUWxMaTBKa0g2b3F0VHg0YzZ2Q05UWWRQSkI0QS1Ib0tZSFZMZ1kxQjMybm9PbjJoV2JnY0RZSHRGUGdySk5hY3NIQUF4S2FnMFZlLTRJUlRYZWJaamFpR3B4ZmlKYXp4QTZaeGlpY1HSAcsBQVVfeXFMTUxvVFNqMERyM2prczRkQWI5aUswang0M3liVEtNSlBvSDg5Z1RlVUYxUGo1cmlERUpxR1k0NnVtb1hnekpKOFNZSXdKYWpjOTdsdGRwNDRXT2xLVEZjb01YU3h0ZS1mVndZOERMbVBlaDBlR1lDTFpwTEd0THYwQ2FxTURubHRLOXoyNmd0eF95VER1VUQ0OHNWbE9nMXF5aE5rS2tjRWUyRjBKdHYxLXFQTWJyQzdHM1pSN19IblZMSXJyZlpOOVVTMFk?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Commerzbank Aktiengesellschaft FI Invests $16.79 Million in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxPYU5TdkUyaVFUZlYzeTlwdGhteGpRb0VYRmwwemFZbF9CNmpkRFpsbjgzblFLWUZVV1c5ZjBJSm5aMnd3blpxcUMzRUZDUUlXV0d0bUtkMnJ3dkxPak9yaFBVMmxhV2JQTTdPOUg0eW1PU3h3ZXFDa21RVmYtblQ4ajlFdjY3OS1KWC1EWjNUbE5YMmdMeXR2c1pFczRnY1N6QXhTUWIxWWE5SHdCM0ZRMjFYaE53Q08zcXJwSDE4RC1pV3lNdk9ERXoxcHF0MmJrcjBiaVBUU3k2US1rTlU1TnNIMUc?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Plato Investment Management Ltd Invests $13.05 Million in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxNaTFWVDR1b3ZNSzhYMS1lYmJubnBDTXZJeWdiRG9PdHE3Rmd1bWhQUzdpY3AxQWNocTFjZkE1NDJEVUgzY09sVHltUkVFWmhOb0kxMXFKVkliRTBLM3ZmN2oxZThGd2JCUzVNaS14RG56cGxLSTZRT2Z6dk1QN3dTU0c5RmxPcVU1VlUxbEppak1WdjZ0dWFLeUJkamNjR0tDXzdHWC1uN08yM1N2YkpMZXJhaGg5UTNsblpNR2lhZVNSdmV0YlFaUy1fN290RjFZUHVQMTJWX3l5UzRSYXgxNHZ3?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Oak Barrel Wealth Advisory LLC Makes New Investment in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4AFBVV95cUxOZlZBZVpZZTdLZGtpSFNBRF9UTlhmNGdfRGstRDFLWC03ZkFERjNJbmlJQ0RjQkFJVjJkeGt4aGZCN0RwVDdIdkwtd3RSaTdBNXI0Mlh2M0d6ay1SRjU5TnRBOEdiN0VqWjM3Q3ZUY3pJQ25zRjBpRmRQUVdCUmFZeld5a0c5eWg2N1JFT2w1d3FFOW5yVzkyRFVwWDdsSnRmWHRtcFZXV2FoT0dNV3pldnNMZURhV3psNTJSR1BsbzJwd2NlMlU1U0hadjRFUnp1bjhFWlVxNFE2bUJNbmF2Rw?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Longfellow Investment Management Co. LLC Takes $2.07 Million Position in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi9AFBVV95cUxOUnpQQW9WM3g0QVQ2SjVHYzFQTTVILUV4Q29wSmV4NmJXQXk4eWI5TU9EOUt1OUVmVkloeTFGaTlsS2RiaXlRRkRta2hiMEVpbnV1NFZvWUdOTFRDR1BNQjdiSmF3Z1ByZXI0Ym1PZUlHWjdrZDBOTU9Sa2MxcU9BUUdiUEdaYTRuejlSLVRFbTVGNHFXcGlDUlZmYVZNUm1NdEJpZ0JmMU9KR1pYZmF2dmpQVWFucWV5cGZ2bjJ3Qms1Y1ZKdzQzRWhNWXRHY3dyQ2xseTN2bXhRQWZYRmlMMHAzd0pMNDBRN2p2WklHTnpJcjhH?oc=5"
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
    "date": "2026-08-21",
    "event": "40,609,919 Shares in Bank of America Corporation $BAC Bought by Bank of New York Mellon Corp - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQSHVnVUhOOENHTDhjdkY3bHZSSFFYNXBOVlQtQTRMR0tjdU5OSzRkMlZXNWVuc1d4SGhENjBiczdmN281eGpDZEQwMm9RSXU5OFBIbGg5VGE1TEFLYzVJbXFNRWYxbGp4QktFTDgzS1Z3X2ROX0lMcy1iaXZoQ3FraFRHSUlGZkEzZTJ5MXI0MW05dTByZ1VETHQ3U1hJNFI2MkppQzBaajVuamJjMG1XN0plcFNYbVpJdXVXRkNWNjhhMUlHNTRoWU1xOFZCaGs4UFpHUGZVaUJMQTBwRnZ2czFDOVc?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Focused Wealth Management Inc Invests $5.33 Million in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxPNUUxS0t2b1BXb2xRRVd3N3NiUXdaVW13SGItUTFaNEdSY3pONUF3UlN2RUw2NTV5OTlLOHJjYzdWM0ZZTmF1bDJBbzBUZ0Z4NXctbjJ4VVJ5M2tzbWd3N25aTHkydE9JcGcxZFQ2S3YyY29mOGNPbEUtbXVaTWdtOTVlalZoaEtGZ29UYTBQS281cFVYOWNCWDU1WmJuOEZLVUZLUzJDcWlrYmt6X2xhc0tMMTdEQlN2RGhhQTN0anhTZ05pVi12U3h1UnM1OVdjb1ZRaXc1d3hQRkJhd2c?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Trust Co. of Vermont Invests $5.13 Million in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNZ3dtdHVPUThCUmhIdFJCdm9pNVF1RGY2amNVclV3SUtFM3NMWU5ydWprSmZ6cnFzTFJDcHE1N0F6M2d6MnRnbnJnRU5SUFNLbERNQU9aQkFmWWtZYUlTUzA3UUM0THlwUElfVVNiTC1fMVhkeTBSTTVHSkJUbEc1STFmWm1wQk1IbHVLSThIM0pYSHJHbnZEV2cxZ2VpQmhaYi02WHN4VEFJVFltUkVkbnJHR2w2b0J3bXZSTFhYTlJSdTI5UzNKTWlzd2thZTZ4?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "8,512 Shares in Bank of America Corporation $BAC Acquired by Tulsa Wealth Advisors INC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxOd1ljSGNteWdvS1FJLVJjaktDcTU4VlpMVVBOU2NEU0ZJT3JnSE03MkpwWDZIWWlWOEdkanJmRXNHUWp5M1dvZDVyOGlQeGtnRUJfMC1fM0pLbDV6c2xXNm9CVm1zYTRFSDg5N3A4eFlpT2FHbm9UUk1TaHFqOVI4c1ZhZ1FjWE9lWTRqaXBoNnNQeHNieXMtLWNhUlZGUGM5aGx3SkNEaGdkQzF0R0hfZXk0T3JEaXg1VlVtb1c1MWFVaVRjYXRMWlVZLTQzTDA5aGRQOGZBTXpQekh2MWc?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "Deutsche Bank AG Invests $2.36 Billion in Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxQdFhRS29tdWNCb0hYWEltWnQzVi1NS2FpZlJrajJYUWxicTZlMHg3X3B3a21BZG1GeGxOd3FFcTFnUUpvdXdDcTFsR191cEVTZXBGRXRraHRkZXJLRHpwU2E5VUtPQnhJeXJMR3BkUEswOXlEcWJZcGdRR0RuU3hhUnVqLVNCUHJ3RExuWXFGODZKbnJfVGExY293RTFob2FpbFV6MjZpM1cwbzVkZHYzUmhzUkZVRXNlWTAtSTNHYUViUTNyTHZ2NXFzOE0?oc=5"
  },
  {
    "stock": "BAC",
    "date": "2026-08-21",
    "event": "71,334 Shares in Bank of America Corporation $BAC Acquired by Old West Investment Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi6wFBVV95cUxQR21hRXp0WklUUzh2cnZFdFptU1NPSmZTZDZnZGpqNWdiSFdCQVZzZGRNR09RdXUzcXU0YklnRzBpTS1kdmhHS1JCckNDcXRuaVAxMXBtZ1B2ZEd6QloyVWRibGlsWHIzU2RjTktQQ3g4TU4zNmtUd3VObVowM3diZ2RqUGdMbjBYTlZPRmpOaFUzb3otcHE1VkhWRUtKdUp5bUtiQjVvOGNuNTBpa1hOU2g4N1ZwWS1OOHo1eU5ob0xnc3VKblJFVVk5VjhmcXpKZW5xTnlOanphV1pfZGJxakVVcWhRRmQxRXVJ?oc=5"
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
    "date": "2026-08-18",
    "event": "Bank of America Corporation $BAC Stock Holdings Decreased by Empire Life Investments Inc. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxOUlhSN2pWbUJld0xIYU9RMEZkblpfM3pjUmNTQWpSWDRtNm01S0M4RGR3Z21SZEtfNFBHRG9rbjQ1eGZvTTVqZlRuTlhOLWo1MmRBb0RzaXRwS3Z1M1VGV040WDdRdngzMkFEMGJLS2ctc2o1Y0txTktFazBlbUEtYmszTVZtZ083cjVNUWdhNkoyRnhxZG5kdy1QSjFmc1lVU1A5V1AxamEzazRxMmlMRW1jaDBvTG1qQXZ6ekxIWXRGUzhTRVZJQzRNbkxFSXVtcjVESGZWd1d0MTRnVHV1QThn?oc=5"
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
    "date": "2026-08-21",
    "event": "Abbot Financial Management Inc. Buys Shares of 96,655 Bank of America Corporation $BAC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3AFBVV95cUxPSmlrbktqdTc2dnVxWW5kbTJCbTRhRW9EMk9wNDVJOXEtUW14SnotaHBrTlp6NjhRZHBBNnB4djFLNk1oVnZaT2VTX2dMNnBTWVJ1VXJIZWNvX2lheXhPZXVGczh3U3FiQ0lsMDByRTF0cFlXX2Z4eV9uRHNRN0tBaURkcGd5b3J3cmpWNDY3a2JIa1B0WkxvTEpYTUxDazFZTnF3bHhuWGxWczNyTVRacjRFVmxPNVc3elQwOHMwa1JXUXBwVE5CNmFWNVE2MXZCMEExckdYWHVpYmVP?oc=5"
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
    "date": "2026-07-15",
    "event": "Bank of America (BAC) Stock Still Looks Cheap Following Its 111% Run - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPQllLNEt1S0hScS1mZjVRZlc4dGt0alJVb09SajFrSWNZUkZlc2xYRmUwbENKV0FGdzFaMUhfd0tFOUdfZGRnRlhvM0tHQmpmR2tiQVpFQ1ZTRDZqVm5rWFVLWTd5MGQ1LTBZbURKcjAwTkFRZGZieXYzYjUyUExSYnpmZ1B5NEF6RnZZWWsyRU8tZUlqS0RDNQ?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-21",
    "event": "OBOOK Q2 Earnings Call Highlights",
    "type": "NEWS",
    "remark": "News via MarketBeat — OBOOK (NASDAQ:OWLS), which operates under the OwlTing Group brand, said its first-half 2026 results reflected a transiti...",
    "url": "https://www.marketbeat.com/instant-alerts/obook-q2-earnings-call-highlights-2026-08-21/?utm_source=yahoofinance&utm_medium=yahoofinance"
  },
  {
    "stock": "V",
    "date": "2026-08-21",
    "event": "Weekly Wrap: Bitcoin Breaks Out",
    "type": "NEWS",
    "remark": "News via CryptoProwl — Bitcoin (CRYPTO: $BTC) was on track to end the week up more than 20% following its biggest rally since 2023. The la......",
    "url": "https://www.cryptoprowl.com/releases/weekly-wrap-bitcoin-breaks-out-6497"
  },
  {
    "stock": "V",
    "date": "2026-08-21",
    "event": "PayPal Agentic Payments: Can They Reshape the Future of Commerce?",
    "type": "NEWS",
    "remark": "News via Zacks — PYPL's agentic payments strategy reshapes commerce as AI, identity and new payment technologies gain traction....",
    "url": "https://finance.yahoo.com/markets/stocks/articles/paypal-agentic-payments-reshape-future-164500935.html"
  },
  {
    "stock": "V",
    "date": "2026-08-21",
    "event": "Warren Buffett's Berkshire Hathaway Bought This Dividend Stock for a Reason. Here's Why Greg Abel Won't Sell.",
    "type": "NEWS",
    "remark": "News via Motley Fool — Since taking over as CEO, Greg Abel has made some big portfolio moves, but there's one longtime Buffett holding even he ...",
    "url": "https://www.fool.com/investing/2026/08/21/warren-buffett-berkshire-hathaway-dividend-stock/"
  },
  {
    "stock": "V",
    "date": "2026-08-20",
    "event": "Rain’s Agentic Payments Alliance Is Writing Agent Commerce Standards While Congress Stalls",
    "type": "NEWS",
    "remark": "News via Forkast News — The future of money is being written in the plumbing, not the halls of Congress. On August 18, 2026, Rain launched the A...",
    "url": "https://finance.yahoo.com/markets/crypto/articles/rain-agentic-payments-alliance-writing-202436472.html"
  },
  {
    "stock": "V",
    "date": "2026-08-20",
    "event": "$98 billion In Payouts, A Lagging Stock: The V Trade-Off",
    "type": "NEWS",
    "remark": "News via Trefis — The payments giant sent a torrent of cash back to its owners, yet the stock trailed the market. Here’s what that money r...",
    "url": "https://www.trefis.com/articles/612185/98-billion-in-payouts-a-lagging-stock-the-v-trade-off/2026-08-20"
  },
  {
    "stock": "V",
    "date": "2026-08-20",
    "event": "Billionaire Bill Ackman Just Sold 25% of His Stake in This Big Tech Giant for 2 AI Rivals",
    "type": "NEWS",
    "remark": "News via Motley Fool — Ackman sold shares of Amazon and Alphabet while buying shares of Microsoft and Meta Platforms....",
    "url": "https://www.fool.com/investing/2026/08/20/billionaire-bill-ackman-just-sold-25-of-his-stake/"
  },
  {
    "stock": "V",
    "date": "2026-08-20",
    "event": "Visa vs. Affirm: Which Fintech Stock Has More Potential?",
    "type": "NEWS",
    "remark": "News via Zacks — AFRM's faster growth, expanding BNPL ecosystem and lower valuation multiple give it the edge over V for greater upside p...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/visa-vs-affirm-fintech-stock-163600247.html"
  },
  {
    "stock": "V",
    "date": "2026-08-20",
    "event": "Warning: The Buffett Portfolio Your OMAH ETF Copies Is Disappearing One 13F at a Time",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — Greg Abel's first full quarter running Berkshire's portfolio wiped out sixteen positions in one sweep, and OMAH sharehol...",
    "url": "https://247wallst.com/investing/etf/2026/08/20/warning-the-buffett-portfolio-your-omah-etf-copies-is-disappearing-one-13f-at-a-time/"
  },
  {
    "stock": "V",
    "date": "2026-08-20",
    "event": "Visa (V), Why Is The Latest Update Drawing Attention?",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Visa (V) is back in focus after quarterly results exceeded expectations, helped by higher payment volumes, increased cro...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/visa-v-why-latest-drawing-111410491.html"
  },
  {
    "stock": "V",
    "date": "2026-08-20",
    "event": "Visa, DOJ lawyers clash ahead of trial",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.paymentsdive.com/news/visa-doj-lawyers-clash-ahead-of-trial/828378/?.tsrc=rss"
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
    "date": "2026-08-19",
    "event": "Rain forms agentic payments alliance with Visa, Mastercard and other players",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.electronicpaymentsinternational.com/news/rain-forms-agentic-payments-alliance-with-visa-mastercard-and-other-players/?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "Multi Year Growth Runway Fuels Visa’s (V) Bullish Case",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/multi-growth-runway-fuels-visa-114955075.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-20",
    "event": "UK towns compete for £20,000 grants as high street footfall falls",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.retail-insight-network.com/features/uk-towns-compete-for-20000-grants-as-high-street-footfall-falls/?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "The Options Market Puts PayPal Stock Between The High Forties And The High Seventies",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/611907/the-options-market-puts-paypal-stock-between-the-high-forties-and-the-high-seventies/2026-08-19?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "Visa Stock Jumps as Investors Favor 54% Margins",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/visa-stock-jumps-investors-favor-215740162.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "Can Total Wireless Help Western Union Deepen U.S. Retail Reach?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/total-wireless-help-western-union-154700010.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-20",
    "event": "/C O R R E C T I O N -- FINBOA/",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/finboa-introduces-recovery-assist-streamline-142500584.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-21",
    "event": "Upstart (UPST) Stock Looks Rich On Earnings Yet Reasonable On AI Growth",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/upstart-upst-stock-looks-rich-031830993.html?.tsrc=rss"
  },
  {
    "stock": "V",
    "date": "2026-08-21",
    "event": "Visa (NYSE: V) officer plans new sale after $10.7M April trade - Stock Titan",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQMndSUzdpd1FnWk1yRzBSMzgzS0RYQW1wRkFTb2EzWWNTNC1FMFN4M0l1MFA3V25SWnU0dTJjMXliS1NsbXpUU2hwQ3VZMHhWRjBTSmpYbmlobGk2eTVpcWJUcElSeGd2cE1CMDNxMHhaYWdMaGtXaXVjU0Z3dnRRN3FJZ2UyV25WSVE?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-20",
    "event": "V Stock Jumps On Strong Earnings Beat Amid Credit Card Culture Boom: Announces $20B share repurchase program - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMigAJBVV95cUxPaGRuQTI2NXI3Z1lnOEMwZldCTElqLTJLUVQ0ajBSY1RlS25Ed2JmbmJhWDB1YnBwZGxZQ1pCYzJRM3oyVjdZZXQxNjFvMWFDQ3diVFlDSXBhVzdoU0lRYm1pNFhyMVJ1bFVRdFUtRkJpV0dQckVCanJhQi12OFNXSTA0NlpVTng1S3Q1cWNKcFQ5STBqdE1IZ1hxUW1tSGZsMW54bjZ2aXloM0g3X0Q4Wkw3amtueDI5dXBTT2U2YWRqX19lZ1BvcXAtbE93V2FTYUxWc0lIaGUyajc5LWdRM09OWTdTdlljdWJfQ0hZdm96MkRfQmIxeUNkc2hjWFdU?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-20",
    "event": "$98 billion In Payouts, A Lagging Stock: The V Trade-Off - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxPZ0FyeWx6SnZaVzZFaG1GRDF6LXBCRUZFQ080M0poUnhNdHZwYjZBaWY4TFg5cW1BaGpYdlp2R2VtSzhINUdkcFdPT29saTVZRmxlcXMzUkVYZWJvVFdUc1V3OTB0NzBQbVVOZW9VUGw0T1pwaHB1V3U2aEFTeG9ZNmo0VFdwOTI3X1FZSUotUHd1akVHOG4zamw4eUpnWmZtYzNaX3lRMXRUdmszY19XNw?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-21",
    "event": "What's Going On With Visa Shares On Friday? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPTXVPVHFuZnZaWFpYOUJ3WU94VWJSZUEwMmZPYXJ0cThRdDNrcHJGNmx4TjRUMk1CZXlkZ1JWSm95aTZQX0xKdmR4U0hRZjNwX0hvbnF4dGF4UDNCbVF2c21JT1lva1ItX2p3YVNjOUtwbnZMbldsbXBDelM5Z3g3R1VJcnYtd2YwWG1pNi1iSzNLZFNOQkRLaG0xT1pjamsw?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-21",
    "event": "Vise Technologies Inc. Has $41.06 Million Stock Position in Visa Inc. $V - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxOX3VIa0VTaHpUbGZjcHJkNmQybEFtMmQ1QTRGZktIdXVOcnk2elB3VlZUaVEwakE2U2xENGh1Z0FNcm5EZU5KclZaWGY2V3M3TV9rTmJiTUlTYzNqMEY5bTl0enlnQXZnRUhjTk8wMzM5VmdCbzNVQ3BvTDMxUjg1TUNpMnNiYjBua0lteUg3RDJHZlVtTkpMLWk1bUM0dlVoMVFKUDZqLTRXSUVaak81LTFlX1RtUGdObTRXR1lON0htRTlZRWRN?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-20",
    "event": "Visa vs. Affirm: Which Fintech Stock Has More Potential? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxNNEdNWDVNckFXUVNEcmxoMENRcE9XeERvaFliaE1EcF82dVVVMWZ0S3Y4Zzl2by1YQk5TS3JPYWVGS0RXbGs0eWl4TllZaWIxcFhfcnpRRXVHWEJVN2Y2d3NEN0JveFFITmo5MEdSNTF3OU1EZTNNRzg1ajZoR3d5UFQwM2VVTE9mMVVzeGFUWlE4Zmg1SjRqZg?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-21",
    "event": "7 roster hopefuls to watch in Jaguars v. Panthers preseason game - Jaguars Wire",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxQei1PS1VlRVhuZmdRYWFaeENhbzRpWFNacmhCT2dNcjhXQjBvdGtsaFJFeHFVMms2dExJT3FraUxoZFhhX3huTi0xR3kydGhOWk9MSzM3SVlCUEdrcEptN2ZrZkJYdEdBa1FwZG12ejJxME9XMDR2M0FzLWdrOUVUeWdUN25CQkVzTU9VbW9NdnNyd3hqbnRkTl8wblFxUG5xM0VjeklDUm45Vk9zSlNSWUZjaDdjclZXM1V6RXd0M3hTeVVUOTBQcGNZbFQwOVdHNE9F?oc=5"
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
    "date": "2026-08-20",
    "event": "Chevron vs. Exxon Mobil: The Better Energy Stock for the Next 5 Years - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisAFBVV95cUxQbmhsUEo0a2RqWnEtQ2s5OTF1a3RSYWVzaHFTYW9VME1HV3NQdE9fVTBQT2dwUU1uSEwzdS0wcGt0aVptSWktMjJ3Zlg1dm1kNmpsMHhpdk9iSUYydlpDNTNSR0NQWXpDbHNKVzdYLUQtd1pCbFA2WmVsU2FQeGlCVnNZZWlMWmljX29QQURaRThseHZHSEw0RnZTQ3Z2ZEZqU0RvZXdGanVFVGpmd0NERw?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-19",
    "event": "Visa Inc (XSGO:V) Stock Price, Trades & News - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxOMkRkZ0hzS1h1dmJnZkd1OEtINVpMem84NmFzRmtaV3VISGhJQXNHVHM4SXNVM25XSGpXZ0JLV2RlSksxV2NMY0FybTUwbDBHVkxfUFBORkdtYXloQ2lVSkdfbGZqdUtZVzQ3UFpLT2J6S1hxdHVRRmJacW1DRW9ZekM0ZmZBU21GM2VkZ25UdWMwR3dweng5QzhNLWJ3U0J1M0Zrc2JyblBoSGxaak1FTjZXT2hxNmM5blAwOGtB?oc=5"
  },
  {
    "stock": "V",
    "date": "2026-08-21",
    "event": "Bowie Capital Management LLC Decreases Stock Holdings in Visa Inc. $V - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxPYWRJV3k2WWpaU01valpvWHM4OE81SzBHbTdKRXI1dFVveGQ2akxQUTQ2OFFNSVNGa1FuQ1g0LUhScVlpUzcxbE5LbDE4VWpEUFA1MmM2UmNIZ0xtWW01ZG5mS3JubFRJazY2ZE1wUWdNLTZycWdkaEdqWjBTQlZ0OWpvanBZVlVaU2ZHT2tpWjljcmp5VERrY0VhNzI5UTRJWEhmWU95MUR0TllhaGtrZ25vTl9TZ2diY0VnaFF5Tmlpd0hTdVI4?oc=5"
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
    "date": "2026-08-18",
    "event": "Visa (NYSE:V) Stock Unloaded Rep. Richard McCormick - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxPQ05DRFNWVk0yTHd4T1g5dFk4QzlKTGdwNEtueGFzN293UFdyZ3kyTVhTdXpyVFRpUG1NT3p3Q2puNVYxTW5FUzdGSjN0eXd3cHBJcnhPR1k5TjNGYkdUcXc1NFU1RGtYZHZQdmExWjloZmRLb3VZR194WkJKU1VXQl9uell4VnZaV256akN5M3F4bWlELTVTcElETk53aDVpOE5R?oc=5"
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
    "date": "2026-07-16",
    "event": "Visa (V) Stock May Trade At A Discount To Fair Value Yet A Premium To Earnings - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxQVnVzbXE1VFVJZVA1ZzVybWJMQS1tTUhJUzQ0Ri04WmJLbml5dzd4WmVMRmFHRmFXNkxFM0xPRW1lSHZNT3lJRGZNb1VTVzlVdEdqaC1HMVR2XzZ6MllzRDJjb25NMzJFWndFZUdtSGZPZU01aFV0cEF2NTFxNmFRZmFRV3ZBMTlRLXFOaGlVNlQ?oc=5"
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
    "date": "2026-07-28",
    "event": "V Stock Slips After-Hours — Visa Reports $563M Job Cut-Related Costs Amid Resilient Consumer Spending - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxOdmNkc3VxSkl2TXBhQ2JsODlUZkIyQXo2MVp1Q09Ncnl5djVSRXRwTWNmRjZsMTUtOEFuT2F0NllhbGJKWWFBcXNFVTlidURmYWVnNkk2VXZYNEtTTjhpdHplS2Q1QVVseFRNQnVCZXRjbU8yLUF6cUZ1NXR3c3Z1TWNFaktNYVZfTEFXTmlXbmN1WjQ?oc=5"
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
    "date": "2026-07-30",
    "event": "Visa (V) Stock Faces Margin Squeeze Despite Strong Revenue Growth - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizAFBVV95cUxNWlB1UTZJT2ltdjk3M1lob3FPSlprQnhGZkNFdndjQWxVWWs0UWtlbXdUMDVnMXp5Q1AyNlVOa3RnNHFrd0lYdlBFMmEyaVhBUzIwOENqbndubVBZX05TbnJUR2hBMXlnNl9ScHpFY1dRX2d0N3UwRnpDTmtDUGFvSWZKTmllZkNBckJvVjRTMXNGV25iMzdWMmtQMDFFRTJQMFQ4aEdqS1pLdElGRUNYWlhXc3BvWnd2NTBiRVJKdUVsRnBReDZIWkM2ZUnSAdIBQVVfeXFMT3JQUG9VZV94THB4cXhIZDVRTGJwUkFuQngzQ2tUaXBta014LTJOT3JpZW9VQWU1NzNuUTIxdmNYemRKUVJjSmJKOUFscS1zSG96cFlLUUFBNlBleTVXel9IRDZwTEg5eVZ0cy1mbkVUN18zSVNuYUo4RHpzSUdCWFdXcHNRdGtzbHdtXzFyM1ZOc1RncHduX2dwZTZQdVhQaGpqOVJMTThvVG1WOVh4YWhCSVQzZW1Wd1owOU1kVjlfZ3hoTHVZakZDckhGTGZWb1FR?oc=5"
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
    "date": "2026-05-05",
    "event": "V Stock: 3 Impending Events That Could Invalidate the Thesis - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxPdFVkR2d6VjNTdjNjUEZ1eWN4THd2dFR5YThCeVYyUEhIMmdpVWxFbmdWQlVNUE1mNllaQ2JGMngzWER6SmN3Q1pycmp5MUpRbHNOY0wtNmx0a1BqcVU0enJiQlpBNXhCQnllOGtBSXFVUEwzRTA4UTF6ZkVhSDBDUGUxa1ZiNmdkcjFQUjBncFltUGdZLU0tcHB4Y01TVDNqMHFGV3h4NWlOampLcmRfZmMzVkJ3Y3Yz?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "3 American Stocks Showing the Same Setup That Sent Moderna Up 177%",
    "type": "NEWS",
    "remark": "News via BeInCrypto — Moderna's 130% day ran on five conditions. We screened the market for stocks like Moderna and found three names, none a ...",
    "url": "https://beincrypto.com/stocks-like-moderna-three-names-fit/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "The $116 Billion That NVDA Quietly Paid Its Owners",
    "type": "NEWS",
    "remark": "News via Trefis — The chipmaker’s stock performance gets all the attention, but behind the scenes it runs one of the largest cash-return m...",
    "url": "https://www.trefis.com/articles/612357/the-116-billion-that-nvda-quietly-paid-its-owners/2026-08-21"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "Is Micron a Commodity or an AI Powerhouse? The Debate Driving Its Low Valuation.",
    "type": "NEWS",
    "remark": "News via Barrons.com — The paradox of  Micron  is that even as its stock has soared 700% over the past year, it still has an underwhelming valu...",
    "url": "https://www.barrons.com/articles/micron-stock-price-valuation-commodity-ai-memory-1b905948?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "Duquesne Entered a New Position in Riot Platforms During Q2. What This Means for RIOT Stock.",
    "type": "NEWS",
    "remark": "News via Barchart — Stanley Druckenmiller’s Duquesne Family Office entered a new 754,800-share position in Riot Platforms during the second ...",
    "url": "https://www.barchart.com/story/news/3971533/duquesne-entered-a-new-position-in-riot-platforms-during-q2-what-this-means-for-riot-stock"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "Should You Add NVIDIA Stock to Your Portfolio Ahead of Q2 Earnings?",
    "type": "NEWS",
    "remark": "News via Zacks — NVDA heads toward its Q2 earnings release with revenues expected near $91 billion as AI, Data Center and Blackwell deman...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/add-nvidia-stock-portfolio-ahead-141400651.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "‘It’s Done’: Investor Warns Warren Buffett’s Berkshire Can’t Beat the S&P 500 — Bets on PayPal and Intel Instead",
    "type": "NEWS",
    "remark": "News via Benzinga — Great Hill Capital founder Tom Hayes believes Berkshire Hathaway Inc. will fail to beat the S&P 500 over the next decade...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/done-investor-warns-warren-buffett-123111231.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "Micron Technology Stock Has Become A Bet On Memory Prices",
    "type": "NEWS",
    "remark": "News via Trefis — Micron's record revenue arrived on shipments that barely grew, which leaves the price of memory carrying the entire case...",
    "url": "https://www.trefis.com/articles/612378/micron-technology-stock-has-become-a-bet-on-memory-prices/2026-08-21"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "Nvidia in Talks With Chip Startup Rebellions for Potential Deal",
    "type": "NEWS",
    "remark": "News via Bloomberg — Nvidia Corp. is in early discussions with the Korean AI chip designer Rebellions about possible collaborations, includin...",
    "url": "https://finance.yahoo.com/technology/ai/articles/nvidia-talks-chip-startup-rebellions-074543725.html"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "Billionaire Investor Stanley Druckenmiller Just Sold Intel and Micron, and Piled Into 2 Artificial Intelligence (AI) Stocks That Are Betting Big on Robotics",
    "type": "NEWS",
    "remark": "News via Motley Fool — Druckenmiller has never had a down year in all his years as a professional investor....",
    "url": "https://www.fool.com/investing/2026/08/21/billionaire-investor-stanley-druckenmiller-just-so/"
  },
  {
    "stock": "INTC",
    "date": "2026-08-20",
    "event": "Lenovo Group Limited (LNVGY) and Intel Corporation (INTC) are Both Riding the AI Hardware Boom. One Just Posted a Loss Anyway",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/lenovo-group-limited-lnvgy-intel-232453667.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-20",
    "event": "The Engine Behind INTC Stock Has Real Parts",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/612199/the-engine-behind-intc-stock-has-real-parts/2026-08-20?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-20",
    "event": "Duquesne Management Just Dumped Its Entire Stake in This Surging AI Stock",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.barchart.com/story/news/3956536/duquesne-management-just-dumped-its-entire-stake-in-this-surging-ai-stock?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "Nvidia, AMD, and Intel: Wall Street Says to Buy 2 and Avoid 1. I Disagree.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/20/nvidia-amd-and-intel-wall-street-says-to-buy-2-and/?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "TSMC Commits Higher CapEx in 2026 While Raising Dividend Payouts",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/tsmc-commits-higher-capex-2026-154100814.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-20",
    "event": "Coatue Management Opens New Position in AMD Stock. View This as a Renewed Bet on the AI Trade.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.barchart.com/story/news/3959404/coatue-management-opens-new-position-in-amd-stock-view-this-as-a-renewed-bet-on-the-ai-trade?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-20",
    "event": "Earn 17% On AMD Stock Now, For Capping Your Upside At 24%",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.trefis.com/articles/612208/earn-17-on-amd-stock-now-for-capping-your-upside-at-24/2026-08-20?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-20",
    "event": "Moderna Is Yesterday's Top Gainer and Today's Biggest Loser",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/1cc26ab1-fac1-3eb3-936e-031426ebcbf7/moderna-is-yesterday%27s-top.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-20",
    "event": "NextSilicon Appoints Rupal Hollenbeck President and Chief Business Officer to Lead Global Commercial Strategy",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/nextsilicon-appoints-rupal-hollenbeck-president-190000645.html?.tsrc=rss"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "Intel Stock (NASDAQ:INTC) Slips as Howard Lutnick Defends Intel Deal - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxNSjJPd3FXZE80aDFtTERqVEFyMnZMQ2VSdGYtNDJiVV81QUkwS19JSzlXTkxCQXNHc3hwbVZuaVRGU0phM1c3dDVNV3MzRXFncjZ5TnNRd3dWa1cwSW9kNHZibVZWN1RDSDBGTGh0MkdYbmVaN3NuT19VekNwN2JTb0J6cE5pb09CS1Zwa0NPUnhYT0JvRnpJeHEyMA?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-20",
    "event": "Intel (INTC) Stock Became 67% Of A Major Investor’s US Equity Portfolio - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPS2tvWjhadlh4OE81VldzbzBfRkg4X1BpdndsOUZJQm5IVjNMTk81UU9tRVJIVmR4VHdrREJYR3VHRG5WbGNNMmkzSXpGMF91c2lZYTV4OXZscER0TzBnQXExM2xRR2ctOVJ5NUJPRzY1QWRwNFJZaWxUOFhNQzlJVG4tWWE0WS0xanJlLUpwX01HdVM5d2c?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "Trump’s ‘Do Magnets’ Push Could Spark the Next Intel-Style Rally — 2 Stocks to Watch (UPDATED) - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxPbFVTUVBPNC01UHNhcHhvRkxHdGNveFJIU0tQUTJsdmlBQWpYU2ZQLU1mMmpoWnlwdzBpRXJ4ZUdBZUFVZ0lKcE4xbk13UXJwai1LMGhvMFQwdVJnUkRVcWFKanhEbGw3VjIybWs2SmU0S25UelNMMlk5RlFNYV9qYkk2ZnN1MGcxT3hWTWt4Q1RvTTFBUXJOcl80dExndkJ0aExLcTFWakV4ZDRNa2xpTTNPaDJJbXdmV0gtRHV6MzVCa2cyckVSUjFMM1FsVVMz?oc=5"
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
    "event": "Intel (INTC) Could Be 81% Undervalued After Its US$20b Share Sale - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNcjU2dWpQSWx2Tzc5ZU9SeHBrVmdTSjM3Sk5XZ01jTXJQNGtJWnpHTFc3c1FteWh1cHZYUm1xQ0h6eXRGVzBtMUJJOE1jMGdWQkllUEF4VFVBWDRQa292SWNDUWw4a1ZUTEhYQ0Z1ZjFsbzJmTEo4aVp1ZWpyb3ZXMlVndGpTbzJoeEJKSFQySzh2M3MyQW5fZ3I5cTE?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-20",
    "event": "Intel: Why I Am Not Buying The Dip (NASDAQ:INTC) - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikAFBVV95cUxOZVNHTWQtUUwtU04tM2QwTjhSXzFaaEw1UTMwNmZDUlhSYllRTEx1NVNGRVk5M1VCVWNLT2g1STU3Q042RENSUkxNODlxc19zazdBYnc0ZjhVVjdqemp6b1RuUUhNaWhidVMtdHoyQ2pISjZDdmRFUGp1dmptZ1lxdXFoQTFwMGJRSWk3dUVQank?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-18",
    "event": "Cerebras, Intel, and AMD Shares Fall Ahead of Tonight’s ‘Supernova’ Event - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMisgFBVV95cUxNbmlRcENtcm9hNndVb1dQSmt3MGFZdEdtRVowUXFxUDFoSFlDOXh0dm1BRlotSFVGX21ycnRrRS1qekFNTUhOOVI4OEN6a3EzMkdhcEtvZkJHSzdxVHRlZFdRQ3hNS3lmNGUxNFRacWxEU3YzY205czh3M2U5U3RPMnoycmJfeU1GZE1RdG9TWHJxcjNlX1hldVFodnB5VHowdE4tUzlKQ3NLN2lLT2RKMXhn?oc=5"
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
    "date": "2026-08-19",
    "event": "INTC's Client Computing Business Gains Momentum: Is More Growth Ahead? - Zacks Investment Research",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirAFBVV95cUxQZVlwMVhKejhHZWtCcDh5NGNjc2FvSk5PaW01NHBYWndFTWVvYXJUTUExQjlfMjR3NGRMVU1HTVFFMVBBLXpDa3ZCaVM2UWlVQlNDRGdSWEtGMDV5WE9CemlMLURvS2ZheXB2a1Jfa1MtTXBValhod2VBZExTUWRQenZvVGYwa3UwaHJZTWxqQVJES0J4ODM0aDgxX0RtM01LZldDM2lLM2FVSlpF?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "Nvidia, AMD, and Intel: Wall Street Says to Buy 2 and Avoid 1. I Disagree. - Currently.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMihgFBVV95cUxOaVFLODREc2hZMjV0Tk9nUGRLX2Y1TXY5cUJCcFcxbzBpa1V0MTE2dHpXUnhLR2d5c0llamxnN0ktZUFoVkdFOEdXNWM3LXA3bXVTVDJNbW9mMkxPNXprdzM0TDg0bm9Uc1hFLWJyaVp5eHo1Tlc1T1FPUXZNcXl1YVhFcDk0Zw?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "INTC Stock Still A Buy After 230% Rally This Year? Jim Cramer Sees More Upside Ahead For Intel - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi7wFBVV95cUxQQnZod2lYMUNWUE5IUlJrMy1NeU9GTHZObmFJSGxuRnAySlVGZDRZV3FtWlN4VlZDdXdFM19xZHEwdkh2akJwOHIwY3BOWU5sTkkyUFVNbjhyZjVzTVpLR0dVWjNNLVEwRUxBYWFLcVdWSUVneXJIVVExUTlrNVZVb0RVRzhTdUd0YkM3bFcyUkVaM0hUMXBtUDhPSUx6STVNNEtRckE0Slh5cjZrQlcwbk5pLVJGT2RYNWZBS0xIZDh6eElZZGxaQkZEZUxndVd4ZmNSQjNuQTE2akxzYTFLZFdyY0pISXZId1gteU5oNA?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "Intel (NASDAQ:INTC) Stock Price Down 2.2% - Time to Sell? - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNcmd5OC14VHZLd0d0Wkc1NzJkOHFTSG5CeU9uSUtGcU5oOUoyU2dPT0tFYncyMThUdncyVnAwV0staGowam95VGZWZDhGb2JKVGxEV3E4dXF6SE1HR2R2VllxOG9LMlh0WlBMUjBhMXRhQm41bHFVNVVUTFZCNlllR01MVk1OZGRjN0pYeFhyMV9OWTNrNUZoOTVVelpVSnlCcmk5dmVn?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-21",
    "event": "How to Value Intel in 2026: Two Businesses, Two Completely Different Frameworks - TIKR.com",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxQOThpM2MtM1dZcjdBaEtDUy00UlV5Q0FORkdzUW8xX2ZnTlVZZWlucnFRT0Nia2FPVXR6TXM0cy0zaFJfdDhibXZGT1hKRnlaRjcwUHJROG1fY3RFV0t2RXpGTzVJVjRONWM4VXlxMHkxX2trZ3hyN2ROSEpTMkhJWkg0NEdWdVBYUmNGSkRR?oc=5"
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
    "date": "2026-08-20",
    "event": "The Engine Behind INTC Stock Has Real Parts - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQUGJOQ1M3M192bHlHRTU5R015VDhoR0plNE1Fa3JVQmd5VkRTVEI0WmtaU2VvR3NHYndwdEVRVWVBTTUzbFdWeS1RaXlrR2hTWWxxVW0xY2FiVkw0U3ZsVU1NN3hsbnEzUGJHZ09ZUGNiWTFvU09VaU5NZjNOTm91cXNUa3gwdUZhemdmdXFsQTM5NmdCLWxrZk1xdzR1YkFNU3NBZURiVQ?oc=5"
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
    "date": "2026-08-21",
    "event": "Nvidia, AMD, and Intel: Wall Street Says to Buy 2 and Avoid 1. I Disagree. - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxPcUxqVXhsazdWN05hT3VFbUNLTGItS3ctOVlqa1Z6WkF4S3lkVGF1OXp3My1QNzltNG43UlJrek5LemZkRDlFVUZoN2kyRkpRbVd0aWVjN1FsSUpXdVM4a3ZyUzlTdTNaQWs4Rmo3UmNDczdoUVVyNXduWUMtNnM3MFhuT2o2ZkhfZnRacmJZNzA2NjdGTHk4Qw?oc=5"
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
    "date": "2026-08-20",
    "event": "Intel Stock On A Winning Streak: Time To Get In Or Book Profits? - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizgFBVV95cUxQVDVOdFpmMDBVT2EwR0xsWUV1Nzc5cTd4eEJxYVFINlYtcW0wVUNlQk9xRWk4bXRxRzFOUmtFYVZ2WmJVUEFDcEdnNTM2U1BScUdGOVVGU2lNZHJNVkRkc1lBR0VkVjRGaWkzU21BNG82YWcxcVg1SGRxelRzaTZhZk01bWtLX19DaGozX3ZaTUZPTV9jU1pvanlydGxZbHpjdXNpUFloOW9STEVUSjRpVEEzS21EREdGbVlSLV82cGllOXd0ZVp0T0IwZC0yQQ?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "The CEO of This Nvidia-Backed Artificial Intelligence (AI) Chip Company Just Bought $10 Million of His Own Stock. Here's What He's Seeing That Retail Investors Won't Want to Miss. - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiW0FVX3lxTE1LcjVrWTRvbXB5WC12WEl3ODVkVjZPN3ZBWVJ1WmZUOW42OXJVWk1zS3JIamhPTG1weFJnQ3VwZGY3aFRWbnJqTmllQzUzODczQ0ZHR1d5aElQWHM?oc=5"
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
    "date": "2026-08-19",
    "event": "Intel Stock Charges A Premium For Capacity Still Being Built - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivgFBVV95cUxNWkNsQXc5bnFfbEk0dWd3SjZMQi1wOTU1bi12Y2xGUUV6RUpqTnBTYkhsWHoxdzJLcXlia3lfMG5leC16X3RjakkxNU9zVldhQlRMZmRvSHFUbVNxU2xVYmdOUEdBSEgydkFjQlFtVXo1YU9LY3NWRjRlQ3ZDNXowMm55TXB2dmRzU0dIR1FMYmNubno5Ykh5YWg4M2phOEpENnpuZzBjLXFtTTRxcEctd3A4ZXh2cXF0aE5LUTJB?oc=5"
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
    "date": "2026-08-17",
    "event": "What Quadrupled Intel Stock Was Not Foundry Customers - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxPRnpjU3VPQ0tBSTFNbFFqaVlsQ05nLXFQNF9ldUJMOUdMWEFhNWl3eTR1YXp1dlFhOEloeFBiZFZwd2w0cjE4ZEdYeVpaLXRjOWdHWUY0dHg4djZhaW5Ea0hNcXA2am5zQllYa3JjRVNqSDJfZG5kV3VaR2tnWUdpUnN1bkljUzYwZ0daN1hEM0c1ck40TUpNYWRacW1hazlSb2RZOWFqN1h4a0dYUzZaaG1GLVo?oc=5"
  },
  {
    "stock": "INTC",
    "date": "2026-08-19",
    "event": "AMD and Intel Shares Plummet, What You Need To Know - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxON2s1aDdWMGxGTTR0ZkJQMndqcWVhSzlWY0pha2NnbGJJeC16ZVJwOUNTdnJ2MWM5R3ZLYnE3anIyNWR0N3d0WE9zYjJzMmRuclpCb1ljVC1yNWZPaDhScXN4RXlqVzI3OUFROUl2RG5OallSX0tZallOOHV6LVhMQ3dka1g4VkJpWXg5Vl9LNzdvdkxJeXRwUFZn?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "Dow Jones Futures: Market Rally Repairs Some Damage; Nvidia, CrowdStrike, Warsh In Focus",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — The market rally suffered damage last week, though bitcoin and gold shined. Nvidia and CrowdStrike earnings are critical...",
    "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-rally-nvidia-crowdstrike-warsh/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "S&P 500 Posts First Weekly Loss Since July Amid US Warning to Iran",
    "type": "NEWS",
    "remark": "News via MT Newswires — The Standard & Poor's 500 index fell 1.4% this week, its first weekly loss in a month, as US Preside...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/p-500-posts-first-weekly-204508360.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "CrowdStrike needs more than a beat to keep investors happy",
    "type": "NEWS",
    "remark": "News via TheStreet — BofA lays out the exact bar Wall Street has set before next week’s earnings....",
    "url": "https://www.thestreet.com/investing/stocks/crowdstrike-q2-earnings-preview-bofa"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "Warsh at Jackson Hole, Nvidia Earnings: What to Watch Next Week",
    "type": "NEWS",
    "remark": "News via The Wall Street Journal — It’s late August, but the coming week will be a big one for markets. Headline events include Nvidia earnings after the b...",
    "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-08-21-2026/card/warsh-at-jackson-hole-nvidia-earnings-what-to-watch-next-week-e9WedRMUsVqY3fMQCdVf?siteid=yhoof2&yptr=yahoo"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "AI Is Now Attacking at Machine Speed, and This CEO Says That Changes the Case for Cybersecurity Stocks",
    "type": "NEWS",
    "remark": "News via 24/7 Wall St. — A top global tech CEO just declared that machine-speed attacks have made human-speed defense obsolete, and that single c...",
    "url": "https://247wallst.com/investing/2026/08/21/ai-is-now-attacking-at-machine-speed-and-this-ceo-says-that-changes-the-case-for-cybersecurity-stocks/"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "Can Rising AI Security Adoption Help CrowdStrike Challenge PANW & ZS?",
    "type": "NEWS",
    "remark": "News via Zacks — CrowdStrike's AI security demand is driving AIDR, cloud and identity growth, strengthening its position against cybersec...",
    "url": "https://finance.yahoo.com/technology/ai/articles/rising-ai-security-adoption-help-141500529.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "Countdown to CrowdStrike (CRWD) Q2 Earnings: A Look at Estimates Beyond Revenue and EPS",
    "type": "NEWS",
    "remark": "News via Zacks — Evaluate the expected performance of CrowdStrike (CRWD) for the quarter ended July 2026, looking beyond the conventional...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/countdown-crowdstrike-crwd-q2-earnings-131504800.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "Dow Jones Futures Rise After Bearish Market Signal; Bitcoin Keeps Surging",
    "type": "NEWS",
    "remark": "News via Investor's Business Daily — Futures rose after the Nasdaq closed below its Aug. 4 low, a bearish market signal. Bitcoin momentum continues....",
    "url": "https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-market-triggers-bearish-signal-walmart-spacex-crowdstrike/?src=A00220&yptr=yahoo"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "CrowdStrike Holdings (CRWD) & Palo Alto Networks (PANW): Cybersecurity Stocks Hit Record Highs After a Conference Made AI’s Dark Side Clear",
    "type": "NEWS",
    "remark": "News via Insider Monkey — On August 10, 2026, CrowdStrike Holdings, Inc. (NASDAQ:CRWD) and Palo Alto Networks, Inc. (NASDAQ:PANW) shares jumped mo...",
    "url": "https://finance.yahoo.com/technology/ai/articles/crowdstrike-holdings-crwd-palo-alto-013941449.html"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "CrowdStrike Stock Is Down, But The Business Is Looking Up. What Gives?",
    "type": "NEWS",
    "remark": "News via Trefis — The cybersecurity leader's shares have cooled off just as management is heating up its AI-driven growth story, creating ...",
    "url": "https://www.trefis.com/articles/612194/crowdstrike-stock-is-down-but-the-business-is-looking-up-what-gives/2026-08-20"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "Why CrowdStrike (CRWD) Stock Is Trading Lower Today",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-crowdstrike-crwd-stock-trading-211515406.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "CrowdStrike (CRWD) CTO Exit Puts AI Security Leadership In Focus",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/crowdstrike-crwd-cto-exit-puts-141330598.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "Can Strong Enterprise AI Adoption Help PANW Challenge CRWD & ZS?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/strong-enterprise-ai-adoption-help-140700559.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "Premarket movers: Deere jumps following upbeat Q3, Wolfspeed plunges",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/premarket-movers-deere-jumps-following-115748573.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "Dow Jones Futures Fall As Oil Prices, Bitcoin Jump; Walmart Skids On Earnings",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/68a3e9b8-8858-3a96-8c98-dd4126c44fbe/dow-jones-futures-fall-as-oil.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "Sector Update: Tech Stocks Decline Late Afternoon",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/sector-tech-stocks-decline-afternoon-194247445.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "CrowdStrike’s Fal.Con 2026 Unites Cybersecurity’s Ecosystem to Secure the AI Revolution",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/crowdstrike-fal-con-2026-unites-150000651.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "3 Ways to Invest in Cybersecurity Through ETFs",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.marketbeat.com/articles/3-ways-to-invest-in-cybersecurity-through-etfs/?utm_source=yahoofinance&utm_medium=yahoofinance&.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "Is It Worth Investing in CrowdStrike (CRWD) Based on Wall Street's Bullish Views?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/worth-investing-crowdstrike-crwd-based-133002896.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "CrowdStrike Named the Frost Radar™ Leader in Cloud Workload Protection for Fourth Consecutive Time",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/crowdstrike-named-frost-radar-leader-115900832.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "ScanSource to Acquire MicroAge, a Leading IT Solutions Integrator",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/articles/scansource-acquire-microage-leading-solutions-122500412.html?.tsrc=rss"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "CrowdStrike Holdings (CRWD) & Palo Alto Networks (PANW): Cybersecurity Stocks Hit Record Highs After a Conference Made AI’s Dark Side Clear - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxPbjZCZG5VRjhralluVjIyWHEtckJUd1JpQmRzMDVPQzlYbnd4b21QTVdiWFA5WkQtcVNSeWwzN1Exay11YVpmRGxMTThiODVnTG40MU5vSTk1ZEUzMlJMS1pIVGtySURmMUU3WmVhT285QzZvTHRaVkhNbEdqM1NzNkNJdC1xVG9qMDdFb2xjb29RTEw3YTVqSVhPbW1iWXJN?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "Stocks making the biggest moves midday: Walmart, Deere, CrowdStrike, Moderna & more - CNBC",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMingFBVV95cUxNeXZMUUlTNTVSaENtTEVybFZmRUE5NmlWUVl1Q291SUMwbkpsQVNxU2FEYk5RaUFNZFVNUDEwZnFfMUZyRGktVHdlQmxyN2dJdXY4QkpXSFpQc2R6TmVKV0NlME5VRFY0ZFg3WWxTYXh6cGNaTWxtcEgwUWtISkxma3M1UnNiRnc2YUpJTHhkVktZV0ZCV1IwMnE3V0Qtdw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "Why CrowdStrike (CRWD) Stock Is Trading Lower Today - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMirwFBVV95cUxOVVZHV1VZWElhcWVVWkhMZkhLX1RNNGxidFQxVlNsU09ETms1dURHSTNRWENxOWZleVlDa3hqV2lRN0xsRUc4bDhLdWdPSUN5WVN0TDVpd0tFTHNvblYzajY2S2xveWxJSktGelVrYkw5cm9nQWlHQk9yejJwS3RQYTRkVU9wUk9oaUtYWmhIV2Nibk15NDdtVkVjS0tNQS1mRDZ4SEktbXhIY3hnMzc4?oc=5"
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
    "event": "SA analyst upgrades/downgrades: GOOG, CRWD, PLTR, PYPL - Seeking Alpha",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikgFBVV95cUxQM1Q5MFFCN2hPRm1YdGZ2d0VWSUtGcDFkTExWaWlXamRVLVIyUmEzb1NFbGlOaTBya3pDM1pDT2htVnFGS0l2UjF2cFRnZksxSWVFQ3lmWU9KQXA3OWdhaEdKSG15b2ExMDAzY012OUhmSFNmNTk0WXNxNnN2SWQ5cU4xOGtvcnF0MVdCVlVMcHE1Zw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "CrowdStrike Analysis: Will CRWD Reverse off this Important Level? - Walmart (NASDAQ:WMT) - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMizwFBVV95cUxPb09Kc2YwZ211Tk1LLUVfUlNnY1M5X3hySmJ6N2ZEckNRVjVVa0dTVHVNNlRxVnhXaXQ2UVFxZjcyWmVsV3oycFY5SzhHdGNJd2M0TnhiWmk1ZkRlSWZLN0pQcm94Yk91U2pQYUpkY2N1XzktdEdMWUR5TW9HQ0FzV2g4djl1ajlaNkFyQ0RFTlFMWkR5UF9RdEp0SXNOUEhWTDIzREp5Q1FsWkQ1TG9FM3p1YWFrMUhuQ0E2ZnpjQkVMZHdxQmp6ek1Lc3BOWGM?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "CrowdStrike Stock (CRWD): Who Owns It Ahead of Q2 Earnings? - TipRanks",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxNUjNxdE5GWWcySkVDSWxjZWlxNnF4NkdkRzBZWHVDN1RyX0Q4UkhOX2V1SHdIS2lvdkQ4U0drMWtRZnU3QU5zVks5c2RMSkY0N3VRVkJZQTVHLWhmNmhOSjIzdmtUdFBkOXRnYzdncG5tTnRqQThkc1R4MU9VZGx5SldHNGVSamVYcktxVHdR?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "CrowdStrike Q2 Earnings Preview: 175x Valuation Demands Blowout, Not Just Beat - Tech Times",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiywFBVV95cUxNMEpIQl9XSi1jMlctcHNoMmNmdlZXSlFFaFBXN3VhWXBCbW9yMHp1b19ONVZuaUJEQmJMNlpyYUMtcWcwUC0xak1TUXF4c1g3aWxkRjRNOWlwWUhPY1lSZkgzcVVVczVraWx4bDIwWEpSMzBHQkFmUlVpZmdlSFR0Tko4UzBhSzZzWWNod2huMHdkN0lISi1teEZGbWQtaDdNcXBfLXFSdkRZdEVlbWEwTDNDc0swZGRXVzN2LTRqU01RU1ZaVFR2aVpVRQ?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-19",
    "event": "CrowdStrike Holdings (CRWD) Stock Declines While Market Improves: Some Information for Investors - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqAFBVV95cUxOYjljaWZFSk1PUmJIazVVcmxFaUhrMmxkVDV1MzlCLWJoWWt4TjFrUmRpZHJVX19UQU1nczFBMGYtMWxpMlZqa1JpZU41eldKRW1PbklFZEFyS1VjTDdIUVJhZnJWSVBheWZMbXZUZktUUDB6ZlhsSTNTWXFCNERLSGxiRTJiMlFXcF9uNENiSmR5XzVKcHllR2VwRHA2VFJnbWhqYUI0a0g?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "CrowdStrike (CRWD) CTO Exit Puts AI Security Leadership In Focus - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPeVpSQUg2RHlYREltWnNSdG41TGw0N0JmUWg3SGU0dXpwa3FpV3VxVEJ0VmZxWUpCZjJBb244WUxNUmRkUW5oRDlPaVQybnV6ZlByVFpja0NhWjI5VXRGdzBSeldCX0ZGUkRKME1RWTBHM2tJMVJfMHZRTUpxTkppTkVBRVZuWEtOOTU4Ym9taXh4eHVoOFRabEdR?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "CrowdStrike's Q1 Beat Wasn't Big Enough For Some Bulls — CRWD Stock Heads For Worst Drop In 22 Months - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiygFBVV95cUxOdXFOcXQxTGg0eTVIcXhzTXFJWERIRi1IMndERkRhc254cGNkVU1TOVpVc0J6dXZoVTF1TXJhVDcxV21vbkVpOFJmdjJOUlN1UjV6SDRvMUFoZ1pTVzlneHQ2N3Ayak1ndy1hVTVlbkFUMkZaNDJEVktzeXJJLXBkVlpFdDJCQkxHMmExemlvWnZERHl5QndZeUFCUWxtRVQwOXNxOEJPMG00d29EeDRSd05TNWg2My0tZHJNcTliMURPWjhRa1NfcTlR?oc=5"
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
    "date": "2026-08-20",
    "event": "Why CrowdStrike (CRWD) Stock Is Trading Lower Today - StockStory",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxNLU8yUVJUTXY1RE9SUExwU1VpOFJPU0l1by1GYTRSbkVoRTZKZVF2T2ZwTGdZeDRyZHJaY3hDRWU4ZkNoQVE1ajVpMEZBNTZuV29zWW95R0dWMXFGYUtUUlM1M1d0VUM2X2tZaEVhT3daU3FBN1B3TUNrWDlTOTFVa2pKMVN2NXhaU2hUaVNGUlJkcWlXd21KVXBsRTBGV2huVmc4ZUVLdmxTUEpjZWtGSDYwZw?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "CrowdStrike Stock Slides 16% Over 5 Straight Down Days - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitAFBVV95cUxOOHdnZzdPc1JZS2hXal96aEpwS0NzbHJlQ2ZnMDdxMVlfV1NKSndlR2xOQkZabkx5Q1pJWUJRdG1CRnBQbUNkd1Ywbm5UYWN3MERfeE5aVHotMW1LNHVHc3FwMlFoV01vbGpUTmVDSGRpd0VVVGx4MnRUR1NMWDE5bHVLVlJPR21odHZXSnUxd2pLa3RxeDktMzBWSXE5UmVNR2U0T1NzOGZfOTh0Mk1QZmVOdkY?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "SPY is down 0.4% today, on CRWD stock price movement - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMikwFBVV95cUxQYUlld2Q2dkZUOFEzMllmTU11dDFpVVkwQ091blV4R3lMcGhnaFhTR3pNZE5HVHRtTy1rQ29wTkhlLWgzd3h4Wkt1U09iWDVrUWdhcVZjMk15S2VsV0FTTlhNb1FuRzQ0UENDdGJNTnpxUFJNNVJaODE2LUtnU05JRnVMR2ExUDMyX2pQcU5tdVRmWDQ?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "Stock of the Day: Will CrowdStrike Reverse off of this Important Level? - TradingView",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixwFBVV95cUxNNExpZzh3dVNPZHh5U3BjR19VWmxzN01uTVlMU1pyQ1IxUnY3bVlDSS03ejA5TUJoOWl3WGJSaGZMM2pBc2UzZDVlZnJHNkozWUNpMy1WalZvUHdBdDBjS3dsZE0wT3ZtSGZpd3djYU5uOGNUZWJUYUhGUXZzMDRIcEVHYzMtUjVyNHFMYlZtN0I5OGpSeGtFR3NZTW9QUTl2MXhDU2hRcWxpMnJhdXlCV0NfWjA0b1JYZ0ItNE5FbHZxWGhBaEJr?oc=5"
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
    "date": "2026-08-21",
    "event": "CRWD Looks 46.4% Overvalued on GF Value™ as Q2 Earnings Near - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxNc3ZuMmkyWFlBZjlYWXdsT1FYNEw4b3dHaTV5eDMxZllFTkZoZDdfYTRtdGk2UW9NX295RFAwV28tVDJscjRxMHJjaHpLN2JMeWRRbGFPdnJ4emxpRGFSUUxPSjI4SXQ5dFpqRWEwTlJlbzlfY09IVG9PTmpGaTc0RU1zM2hyS240Y2lKNjBCVW9xRVBJbVZjNmhFVTQ?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-20",
    "event": "CrowdStrike shares fall as CTO departs to launch AI cybersecurity fund - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMioAFBVV95cUxNR2VYUUdJOUVfUk5LeF8yaDN5ZU5hVTB0bWw0UnNJOG9PREQyRlpFczhKazM0Q1dfSnFDMG9tQmxObzRxM0h2a0dGa09BUTNNLS1LNVBPaUFVdFRJbzVzbjdJU0Z3NjI1ZEpwRFV4ZFR3T3pneDhpc3NzakJLdjloVDVtQU1iVnVaaGRCSkMySG01dF83ZUVzeTJwM29KdXhF?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "CrowdStrike Stock Plummets 16% With 5-Day Losing Streak - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiwgFBVV95cUxNSlYzUll1NnNKX1M3MVdXSDJRaGFpbkFrRjhEX0pEQW9OWnNwMW8zWUROTHFDTzViM3dxMGFJMjZ0NGxhaTNMUnhxV3dCWXp6c3JzX1hlWmFNOUlrVWtyMzdmQ21IOWpfbVVabVIwUEVrOUNGeGNRcFBRWTZpaXY2UXdYNjdmcmQ0aExlVmRLVkYzaHhlS3ExSFFaYzhVa0ZVQ1JtMy0xbU9KeEsyRGxjaTBCazJlaWhKQWZQRmhqcVdkQQ?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "Why Did CRWD, S, AEHR Stocks Hit 52-Week Highs Last Week? - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiugFBVV95cUxPRkNRVkVtSTcyOGZ1ejV3LU5FOGVfSzZqOXhYaURnTkM0T2JGRjNBSVFnNGhYQVBLZVppX2RKWjgwa2JuV3d3T3NwN1RRLUtKS2lKM1NOcVNPTTVGbmVnTFBPMTYxRWpnVXNJMEloQ2xubGJqeWUwRWo3Rklyak1vZVBkVE9pWm4tQkZLVjNoM1Q5WF8zaWN1ZmZQSEk0VW84dnRneVlXN2c0NjMyUHBHZS1HZWp1c0RSTnc?oc=5"
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
    "date": "2026-08-21",
    "event": "CRWD Maintained by Scotiabank -- Price Target Lowered to $227 - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxOWHhwbnRncFlpR2JIN0RtYmM5SVp0Tmp5UTJBaDZ1Tmk4LXlWc0RVSG4yaUY5blB3VXlGRTBlZG1UYTc2Mkh2amREci16eXM3bUI1eU80LWtkMG1aQWd3U3g1Nzh5cF91eVprMElMd2Y0N2dWR04weG1FWDVQenBjOUU2alFmWlVyQngyMTZxMmNkREQybTBZR0JqOFo?oc=5"
  },
  {
    "stock": "CRWD",
    "date": "2026-08-21",
    "event": "Countdown to CrowdStrike (CRWD) Q2 Earnings: A Look at Estimates Beyond Revenue and EPS - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipgFBVV95cUxNU2pVTjRJWlllUm9lRDdZcGVqQzdJeThTTG1tU2dTOC1zbm96cFhia3dVQWxMaXFYSF9GVU5SM3MtcFlkOGtRV04zbVRmMDNDOTVoTmRyUVE4cHBJY19qZmJzVnA1YUJNT2xIRkdRQXNWeFVTeXNFa1N4V3dmYktQMTU5SFdJT0tvLXFab1o1aFl1cF8zbEVQWGNlSFhkWnR0RUdRVWN3?oc=5"
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
    "stock": "NEM",
    "date": "2026-08-21",
    "event": "Freeport-McMoRan Stock Ran, And Half The Reason Was Visible Seven Months Early",
    "type": "NEWS",
    "remark": "News via Trefis — The copper tariff premium was the visible signal that faded; the quiet rebuild of its US mines was the half of the move ...",
    "url": "https://www.trefis.com/articles/612390/freeport-mcmoran-stock-ran-and-half-the-reason-was-visible-seven-months-early/2026-08-21"
  },
  {
    "stock": "NEM",
    "date": "2026-08-21",
    "event": "Why Is Newmont Stock Surging Friday?",
    "type": "NEWS",
    "remark": "News via Benzinga — Newmont Corporation (NYSE:NEM) stock traded higher Friday as strong gold prices and a board appointment supported sentim...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/why-newmont-stock-surging-friday-121548866.html"
  },
  {
    "stock": "NEM",
    "date": "2026-08-19",
    "event": "Why Newmont Mining Rallied Today",
    "type": "NEWS",
    "remark": "News via Motley Fool — Gold prices increased with a little help from Treasury Secretary Scott Bessent....",
    "url": "https://www.fool.com/investing/2026/08/19/why-newmont-mining-rallied-today/"
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
    "date": "2026-08-20",
    "event": "Newmont Appoints Peter Beaven to Board of Directors",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/newmont-appoints-peter-beaven-board-203000330.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-14",
    "event": "Headwater Gold and Newmont sign earn-in agreement for Jupiter project",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.mining-technology.com/news/headwater-gold-newmont-sign-earn-in-agreement/?.tsrc=rss"
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
    "date": "2026-08-19",
    "event": "American Rare Earths Appoints Nick Lissolo as Chief Commercial Officer",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/energy/articles/american-rare-earths-appoints-nick-120300225.html?.tsrc=rss"
  },
  {
    "stock": "NEM",
    "date": "2026-08-13",
    "event": "Franco-Nevada Q2 Earnings Miss Estimates, Revenues Soar 57% Y/Y",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/franco-nevada-q2-earnings-miss-142100861.html?.tsrc=rss"
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
    "date": "2026-08-21",
    "event": "Why Is Newmont Stock Surging Friday? - Benzinga",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinAFBVV95cUxPU18zbjd4aE1oNkZ5ZVVwaHhSTDBxQkNPTzhSenQxRzlCZWEtRlpWazRkVVAwaUZZMV8zRW5TcnUyUTlfRlk5enBkbmY4Uy0taEV3NjhncTNlcVNjMll6M0hyaC1vMkJMelQzMnFjZTZBQXR2aV82VHlLQjZrZWx3WlZvSUJiZXZseWF4NVpJbTQwNzd6cmZTcHVkYlo?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-21",
    "event": "Newmont gains as higher gold prices add to momentum from strong cash flow and buybacks - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuwFBVV95cUxNd2FreTd2Wm9FZElRN21NTUQzWGJkRjFDcXRwUEIwb2E1NU1OLVNCUDJvc2ZYX29qQXZVVmVyQU94WG5RazBHQ01LMFYyWlh3WEhUb1hQMFA5Ym5fendVaDFLWGNCdnNGRFBlM25oelNpb2JhdFVBaFlpdThua2JoRllCMW5zN1ItN200ZHJ1LUpaZFNIenVWTkNrbi1JYUpJMjJzaW1pOVVKZzlLc053d2ZMMWY2bUE0YWxJ?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-21",
    "event": "Newmont Corporation Stock (NEM) Moved Up by 3.18% on Aug 21: What Signal Does It Send? - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxQZTlTNE9QNTRwTlk4LUwwUnktclh3S0xuejZISjd3UjRnQzFkY0c3ak5iUThqU3hfMnBIUFV5M3FRMUM3ZS1CLWhVeDRnWlh6VnNHR0pfbG5uYkJXQ28wa1RfeFlMdEl5dFlRVEU0ZHNOMFRpZzNFV0h5TFFPbzFUYlotZ2NOR3dKQVE?oc=5"
  },
  {
    "stock": "NEM",
    "date": "2026-08-21",
    "event": "What's going on in today's pre-market session: S&P500 movers - ChartMill",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqwFBVV95cUxOVG1naFByMjktQURsdG1sSlZ4RE1oYkhTb3Z6ODN1R0ZsaVY1RGRaNGM5ZEllQXpVSFc3WnhyS0MwYWUwMXRfRG1pNlFrUkZvdTFxbG41YXVSVmVHS2NMXzZDSF9SaElkdGNDTm10MjZCTVg1bXltSkMxZU1IdktlZ1RyNExPeXV1b29DWUE5QTRxbVRkb052ZHlSc0Mwd2ZSRDdCLUZLRURrd3c?oc=5"
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
    "date": "2026-08-16",
    "event": "Newmont Corp (NEM) Stock Forecast & Analyst Ratings - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1wJBVV95cUxPbGJVb1ZkWF9jLUxWb3hwUjRZTmFSSmhSNUpzQU83OFBLVVpfLWRLNnhZZHQwVFM2RWRybENyX3NsS0NPeTlfamZ1T0pUNjdYM2xCcUJOQVFJRkZZTElURmdhSGtwdWtJWWdnMlJMUkM5blFlUzBjTWJ5blVNQzAwU1d2eGtxLTBhanluaGpDYTJXZXJtdEtYUkdDdXRwM2FGejZXbkRQN3NyQk9aWHpkaldjc1BVbUpjRHVvNm9yTm96eERiQTRudnAxWVRUeEwzaVpTUXEyalR2dVh6bFZEQ2k0WWIxRjAyazlyV2lpai1mdnJYQTExVGZfQzlUREgzcjg1MHRPRjBZWU5UUTd4SDZoc1l6UkNMY3JxcWFubWdyUkNtS0hHQ1VjanRZRC1qeGl2VjlDQVNSa2w2WDYtQ0VlSWltOWdFbHdlMzY3d1ZlY2J5UVpn?oc=5"
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
    "date": "2026-08-10",
    "event": "Big Gold Miners Agree On IPO. One Pops, One Sinks. - Investor's Business Daily",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxPZEtkd1dzc1JkZTFoRy1lRUN3dm9sdHM4OXhnNU1NeGpHbk1EX0dTMmVyOUdMMXdZd1BQZm5XemxUb1hLSGRUVlRyLXRaR1NVemsyU2prMENwV19xY1RMeDhEQlZrbDFGOXhIRUpDM0R5SzVEeVBwc1IwMHRkUmlIUWttNC1JX2lxaUNhZUJB?oc=5"
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
    "date": "2026-08-18",
    "event": "Newmont Corp (NEM) Shares Fall 3.6% -- GF Value Says Still Overv - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiowFBVV95cUxOV2poN2FiTTdKdGl3eHpZQjdFOG1xRjFRdFZ0UVJrczZMTDQwbDcwUEQ4M1Naem1DUkZXWE5UQnAtTXpNTmFnWkc1YTlHM25CUWg0THQ5bV9yWG5wNXE2Y2lTck1tczdhZ1h6aFc4cjk0ZS1BcWNPTEZIQkFfbTZaYlRJdUV6UTBrVE1xdW9CN3d1UTU2X19jcE5oZEY1WVdzck9z?oc=5"
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
    "date": "2026-07-30",
    "event": "NEM vs. EQX: Which Gold Mining Stock Is a Better Pick Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilwFBVV95cUxNWFMxcF8xd3JiQUE2a2J1RGJEcTJjYmhRQ2didW5VdHhwaEZNdUtJMDIzZTkteGhTQmlIbWNnRXMtenRNcEpKd3lJUlJZMTAtTUljUDgzMHhNVkcwN2FtWlZWT2gzQmVtalFvTm9CRUVUeVVHU3N4SzV1eUZWTnJ0ZUIzczBhUVVFUXVtSHdEQ0s2cDd6dElV?oc=5"
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
    "date": "2026-07-15",
    "event": "Newmont Stock Slides 16% in 3 Months: Here's How to Play the Stock - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilAFBVV95cUxPazVCbDFoSDBscmhxTEtxdkxyZ0lHRW5zNVNlb3dSdzRZSi1vWm1kOFBWTzlvRWRmdzFiQ0tJYUNXLUp5TVNUUzJsRUh5dkNkRnlZSFBHSVQyeG1xOTJfM3Z6TkMxQzJLYW85T1M3SEhpaVowYjRGQWhFT09lU19xaGM2d0ozX1dsNEs1VGVfZ3NSM1Nk?oc=5"
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
    "date": "2026-08-13",
    "event": "Newmont Shares Rally 24% in a Month: Buy, Sell or Hold the Stock? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPRXpibXl3VmU1QTNJUzNRbEpqdGVYc2NLa3BWaHhHOGFBWWdIeXRuRE9pNkJFTy1PQVJHYks4N3NYanU3ZE0xbG9RYnJfdVl6Q0RsTzlhUS1oTUhCUktMZm92ZFhHU3BySFFTekxFaGdISXZUcWZFZ2FPVkU2STRqYno5ZU10RWZhZmx2YVBIN3luRmltd1J4d3F3?oc=5"
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
    "date": "2026-08-10",
    "event": "5 Green Days In A Row: Newmont Stock Is Up 21% - Trefis",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMipwFBVV95cUxQbGdsTEVGaTBsOGtQalN3dVJURFdXYWFSYy1MQUFGZFN0VWR5WUVWYkg2MndTczVDU0Z5amE2SHctbDNIYnBlZ09NMGxtVDNZS3E0SmM1TXM0VlNvdU9tbHFpZXJLSUN1Uk9iMF9QYnR0Y0RhZGd0SDlJLURhOUZtdlJITFBQemNETno0OTQ3b0JZSjJ2TW5UcUlxTnZKYzJmTGkxaFVKdw?oc=5"
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
    "date": "2026-06-16",
    "event": "NEM or AEM: Which Is the Better Value Stock Right Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxQLUwzdjNCZkpoamk0NkxRWmZ4YkFpdy1Ycll0Q3Y4eF9RVDI1eWVtSUpxaWFjdXFwdTJreG9hLTZVZ2tDbDMxNXIxMFFtOGFyLW5sRkpQel9rUS1TeWRaMFVWMDNiT01NZVAxQnZmbjl0RDJaUXlJblBjREZWS0haTmtZOHE1bVB2THNFU2c3dUZzbkE2RGc?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-21",
    "event": "Is Rocket Lab (RKLB)’s Record Space Force Deal the Turning Point for Defense Investors?",
    "type": "NEWS",
    "remark": "News via Insider Monkey — Growing geopolitical tensions are fueling a global arms race. According to SIPRI, global military spending hit a record ...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rocket-lab-rklb-record-space-190605798.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-21",
    "event": "Is Kratos Defense Entering the Scale-Up Phase of Defense Modernization?",
    "type": "NEWS",
    "remark": "News via Zacks — KTOS is ramping production as defense demand grows, with a $2.08B backlog and plans for major capacity expansion through...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/kratos-defense-entering-scale-phase-135200808.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-20",
    "event": "Can RTX's Tomahawk Production Ramp-Up Enhance Its Growth Prospects?",
    "type": "NEWS",
    "remark": "News via Zacks — RTX expands Tomahawk production with a $22.9 billion contract, supporting higher output and strengthening its precision-...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/rtxs-tomahawk-production-ramp-enhance-145200333.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-20",
    "event": "How Investors May Respond To RTX (RTX) Winning a US$22.9 Billion Tomahawk Deal and Raising Guidance",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Earlier this month, RTX Corporation’s Raytheon unit secured a US$22.90 billion, seven-year Tomahawk cruise missile contr...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/investors-may-respond-rtx-rtx-042912981.html"
  },
  {
    "stock": "RTX",
    "date": "2026-08-20",
    "event": "Make Your TDG Shares Pay You 9.8% A Year While You Hold Them",
    "type": "NEWS",
    "remark": "News via Trefis — Get paid a real income now on your TransDigm shares, which you keep no matter what the stock does, in exchange for cappi...",
    "url": "https://www.trefis.com/articles/611966/make-your-tdg-shares-pay-you-9-8-a-year-while-you-hold-them/2026-08-19"
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
    "date": "2026-08-19",
    "event": "2 Industrial Stocks I'd Buy Every Day Before RTX",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/18/2-industrial-stocks-id-buy-every-day-before-rtx-co/?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "2 Reasons to Like RTX and 1 to Stay Skeptical",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/2-reasons-rtx-1-stay-152533880.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "RTX Stock Gets a Radar Lock on a $23B Navy Win",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.marketbeat.com/articles/rtx-stock-gets-a-radar-lock-on-a-23b-navy-win/?utm_source=yahoofinance&utm_medium=yahoofinance&.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-19",
    "event": "A New Defense Stock Is Born: Lyntris IPO Set For Wednesday",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/ce3bff6c-95e3-3eab-9c65-b86ac118453d/a-new-defense-stock-is-born%3A.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-19",
    "event": "Honeywell Aerospace Stock Has Fallen Far Enough. Morgan Stanley Says It’s Time to Buy.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/6bc16590-bad9-3638-952f-28526db7b71e/honeywell-aerospace-stock-has.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "RTX, Lockheed, and 7 More Stocks to Consider as Missile Production Rockets Higher",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/7e1e1606-dce4-30a5-b8b4-dfb06152dfb2/rtx%2C-lockheed%2C-and-7-more.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "Is Northrop Grumman Expanding Its Presence in Military Training?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/northrop-grumman-expanding-presence-military-163500650.html?.tsrc=rss"
  },
  {
    "stock": "RTX",
    "date": "2026-08-18",
    "event": "EMBJ or RTX: Which Is the Better Value Stock Right Now?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/embj-rtx-better-value-stock-154001826.html?.tsrc=rss"
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
    "event": "RTX Stock Alert: What to Know as Raytheon Nabs $23 Billion Navy Contract - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxORjZ5dnM4dExWWXBKZC1MMHE1V2w1V3M3YUFNZi1QVXBXb2M3a2k4dmhLY2cwNGdhSk9qd21oZWJLZHR2WGt6NUVxLU5DNmdqZmRNNk4tWXlyNVFWdUJ2TmJqaHQ1b2c3RlR0MXJIMWVzbWxyS3lSb1p4V3ZkYzYzTTlIX0F1ckFDeFpLNGo5RkZ5TG1lNkNUaW5B?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-20",
    "event": "RTX Stock Price Prediction 2025-2026 | RTX Corporation Forecast - 24/7 Wall St.",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiY0FVX3lxTE5zenEtb2NEU25MVVhyQnkxaXYwS1dfQTNQdUttT0pVb3FDUmJIY3AxY0tLRlNWUFFIT3NhOGw5ZVp0c1NsTEtzZ0VkRlZFSjd3RXlCZmM4UHRPQ0RHdkhUWV9CRQ?oc=5"
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
    "date": "2026-08-20",
    "event": "$RTX stock is down 4% today. Here's what we see in our data. - Quiver Quantitative",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMinwFBVV95cUxPNnl1RzVlZ3U1NXQzbThwNmVIb3Jwbnl3OEhXX3hZemdlcUdWb2VoVDlONTdvM0luQ0dIMGdvY015TE5DRHliYndSeHk2QklTTkoxVFNTeDBxSzQzQkxueDZyc25kNlJyRDJNMllvZXRBZjVlSk5Ka01aRmgyczU5NXdTcVRPemFpREU2bzJ5ZzhpY1pOYnd0VnRQNXhqRFE?oc=5"
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
    "date": "2026-08-20",
    "event": "RTX Corp Stock (RTX) Moved Down by 3.28% on Aug 20: What Investors Need To Know - TradingKey",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiigFBVV95cUxPUi1QMktuM1doWl82SXNsa1FmbDdNWHhKYzFmV1otMTF2dkJUNWN4aWxjX3laanVKVG4zX0Vfak9ZdlNKZGk3cFdtVmpuZzR2LVFsV25Rc2R3TENtZFdsZUt3X2RLVzZmd2d4N0pyYWRqbHNlaXVFRjlFOXJaOEJ5WGtEVXdETjJJWEE?oc=5"
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
    "date": "2026-08-17",
    "event": "RTX Stock Rises on Massive $22.9 Billion Tomahawk Contract - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMilgFBVV95cUxPLVppbVJPOVBfY1BjUTB6WS1ZTEpjWFczeVVFQ0JaR3hnYjlIR0N4TTVZdWYzSTdrbHJrRzd1TEVENi04aUJ1dkRKYVN5ZEd3cko0R1FhdjZsTzZQSGxkYUVEdGc5Vjk1dkNwbnJjbkh3cGFhMEdNcXJINlo3enk0SFFCMjE0Mm9TNVpCdWJlMmUtRVZ4emc?oc=5"
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
    "date": "2026-08-06",
    "event": "What Makes RTX (RTX) a Strong Momentum Stock: Buy Now? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxNRzFXSFcxVmJtREFjbjNZekVNcHJWN2NvcHVqbmN3MDlxcVh1TFlDaFlONlBubGZiZFBxejFIeFhWZTFLMU55bzI2Rl9EVzVHQ0JBZXQ2NFdicGJ0dG5BaFVuNkFkSy16dHJoaWc5cktRVXBnNmVZaXBEemlHZVlOTEhNXzlBZE1FN1pjLXltc2R0ajJSM1VNeENR?oc=5"
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
    "date": "2026-08-18",
    "event": "2 Reasons to Like RTX and 1 to Stay Skeptical - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijgFBVV95cUxONFJUcHVWV2V4LTB3Ri00QjdpaWt4bG9LVkVsQkl2TG5JQlZGcnBhWWhvSmdmU2xxcTVCeHQ0MGl3b2lOSHAwdS12YmQyczVtM2NkNWJMZHkyRm41RW5YMGRYb1RKZGdlNUhmalhuS0dtU0wwWDFMOWt6Zm1LYlRwRl9rdEdSVmJFeklwXzl3?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-21",
    "event": "Portfolio Design Labs LLC Buys Shares of 30,917 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixgFBVV95cUxNUkF6VWJmLTBqbnFUalYyNTNSODFUZ0JUNGZ4aUVqbUFDSFFoSmlEWTJ5elVQUGYxS3l3bFk4S1BMdG9GSTlGVEdQbExsVGNKekZ6U05zcHduZFJXMmU1ZnJrVVJqTGJaamNDUEhKX1dMUUdNME4tSnE5OTM4bUhsb3lpQ0xWWHNKQ1VNcWd6eEdtR2lPOFlyc01nc0xxNnhXNzN4WGxvZU5hb2U5d2NjdkZxcVhSaHV5ay01NEp5Z0I5OUE4cWc?oc=5"
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
    "date": "2026-08-21",
    "event": "41,273 Shares in RTX Corporation $RTX Purchased by Mystic Asset Management Inc. - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0wFBVV95cUxOUTRzZU1UV2o5LTBlY3p1M0stTndlVHZQMWw0TEhfRmV6Z1l4UUphRzVtakc4aEZpZnVSTmxxaGhZendwX0N6emdNVk9HbzA2dGJ2Z3NtMl93bXZLeE90WTZiV2szZnRmRXhaSFh3aUVHU3dKMmNkRGE2MEpZYnVzVVFiUkE5cEdyQlpXbnB3NlByNmsyaUJnOWRObFlhbXh4TXhaM1AtTkRqamlTR1RaaGYzdXp0SVdfZVRhNk9LVVAwcXp1NGZkN3JzYzdIUWlYS2dz?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-21",
    "event": "Paralel Advisors LLC Buys Shares of 11,982 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMivwFBVV95cUxQQjk0V1RtTmF3ZVRyZThuNi1naG9mbnNkdlVTdWJfR1Y2dGlmT0xab0NnTGRzNi1NdGlrZjRzZmZQVV9WaUhES04xdGhxakNXbnNmWmNzRzdRNUNnZDZzYnl5Q1d5by1yX09RT3V0RDdsNUMxaGdTTmVFWHFJczBWdEtBNmZKdVh2VEZPRUpTMFI2ZTRpYXdJNU5XbnVIN1kzXzJJNkVpbm51N2FhTUNQR3QzVmxMQ05IaGpfcFV1QQ?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-21",
    "event": "PCM Encore LLC Buys Shares of 8,176 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMitgFBVV95cUxOQmd0bER0WGtZT3JuVUxtcE10SlU3SmlWM3ZYb3pqaWlaNEkzY1lCRElOamZXNEtBZzhtd2s1RnBKcTRqcktCSGtoZ1Q1T2pYb29DSTBmLUZBYUplbHZhTHc0d2pnOExpYnNBY3VURFRIMjNra1MxV2NFdk5QV2FEczFOM1lGWUVVbjAybzJNWGVLVk5Vakh4aFRwMUdjcFNLRzMxd3paTkpaM05CUnBneERBVDctZw?oc=5"
  },
  {
    "stock": "RTX",
    "date": "2026-08-21",
    "event": "MJP Associates Inc. ADV Purchases Shares of 10,318 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiyAFBVV95cUxNZUtFNUJBXzRDdHdIZVktRGdHdG1CdWpTVUhmTlhNZlcwdDgxVGdhdVJlNlpmMi1IWXdUZEYxSUdxOGJwMlVKUXpsWVVLYnByRW9kOGp4M0V1aXRnNlgwR0pUUkxWekRiTzRvWkpsOUtvUWUtQTluSWNsR24xUDg2bWFQbFozaXlvdzFxcGlvenpxcVdEWXhDWHR5RWhBeFBZVkVHZmxmcEMtNV9WczBrb2ZRYUNISnZ0azJ2aGxwQW9tY2QtOEY5cA?oc=5"
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
    "event": "2 Industrial Stocks I'd Buy Every Day Before RTX - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimAFBVV95cUxQUFVGMXFhLWdXRDd3c1dna1pmVm9Pd2E1MGhVSFJ4LTZHbG4wcnAtU3JrakdSdEhNSG13ejVzaEFMLTJKVE92dFNSQ1Y3ZXl0bi1DTnRNbW9HdUVGclNRdDJDbDZtOFRkdlladHluVzFaZlFwUnF0NkdLZURtb2tQclNnMnZNLXgwQzZTMTlWS29rcHQ2dEhPVw?oc=5"
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
    "date": "2026-08-21",
    "event": "Advisors Capital Management LLC Purchases Shares of 392,262 RTX Corporation $RTX - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi1gFBVV95cUxNanFkSXc0Y2ZkclhzUThMenJDN1ZfWjJiZTB4eHo3WjJXdWU5cnEtcC1SM3FzSlI2REhnMmdfQi14N0pPOUJyMFRpMkV0SkFVQjRQbms0NU56Qml4M3d1ekt2b3ZBR09aNWhSa2piTC1lZXhiZmRBT3oya1A1a0NpTTFMOG4yVWZLWnRLVUlSXzBiODRyMnFxWUo2Nkhsd0JxNnZ1YVRCNVpCZGdGVVRSN0poQ2htNUp0Q1loYTVnSUptT2ZFQWw3TGMyZWp5VFJSN0tXNzd3?oc=5"
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
    "stock": "LMT",
    "date": "2026-08-21",
    "event": "Advance Auto Parts vs. Lockheed Martin: Which Stock Is a Better Buy in 2026?",
    "type": "NEWS",
    "remark": "News via Motley Fool — One turnaround story shows recovery despite revenue headwinds; the other leans on government contracts and strong cash f...",
    "url": "https://www.fool.com/coverage/better-buy/2026/08/21/advance-auto-parts-vs-lockheed-martin-which-stock-is-a-better-buy-in-2026/"
  },
  {
    "stock": "LMT",
    "date": "2026-08-21",
    "event": "Rocket Lab Stock's Twelve-Month Gain Hides A Long Slide From Its High",
    "type": "NEWS",
    "remark": "News via Trefis — Rocket Lab's flight rate moved one way over the past year; its share price moved both ways....",
    "url": "https://www.trefis.com/articles/612408/rocket-lab-stocks-twelve-month-gain-hides-a-long-slide-from-its-high/2026-08-21"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "Why Did Lockheed Martin Stock Drop Today?",
    "type": "NEWS",
    "remark": "News via Motley Fool — Lockheed Martin just found a new entry point into the military naval market....",
    "url": "https://www.fool.com/investing/2026/08/20/why-did-lockheed-martin-stock-drop-today/"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "Lockheed Martin (LMT) Completes First Japan ASEV In Indo Pacific Defense Milestone",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Lockheed Martin (NYSE:LMT) has completed the first fully integrated Aegis System Equipped Vessel for Japan, marking a ne...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/lockheed-martin-lmt-completes-first-111452430.html"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "Lockheed Martin (LMT) Stock May Be 24% Undervalued On Japan Defense System News",
    "type": "NEWS",
    "remark": "News via Simply Wall St. — Lockheed Martin stock has nearly doubled over the past five years, yet the current checks still point to a discount, wit...",
    "url": "https://finance.yahoo.com/markets/stocks/articles/lockheed-martin-lmt-stock-may-100831959.html"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "Should Lockheed’s AI Sensing and Space Partnerships Shift the Core Investment Case for LMT?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/lockheed-ai-sensing-space-partnerships-091157560.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-19",
    "event": "Stock-Split Watch: Is Lockheed Martin Next?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://www.fool.com/investing/2026/08/19/stock-split-watch-is-lockheed-martin-next/?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-19",
    "event": "A $1.5 Billion Deal: Why Boeing and Lockheed Stocks Are in Focus",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/1-5-billion-deal-why-121756818.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "Lockheed Wins Slew Of Contracts. Air Force Doles Out $920 Mil Award.",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/m/d4371f9f-542f-372e-8a0f-ff4ee63e9b35/lockheed-wins-slew-of.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-18",
    "event": "Boeing-Lockheed’s ULA triples bond sale to $1.5 billion - report",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/boeing-lockheed-ula-triples-bond-185553491.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "Lockheed Martin (LMT) Wins Fresh Defense Work As Valuation Questions Return",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/markets/stocks/articles/lockheed-martin-lmt-wins-fresh-061217814.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-19",
    "event": "Is Leidos Strengthening Its Position in the Growing AI Market?",
    "type": "NEWS",
    "remark": "News via Yahoo Finance RSS",
    "url": "https://finance.yahoo.com/technology/ai/articles/leidos-strengthening-position-growing-ai-125700215.html?.tsrc=rss"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "Why Did Lockheed Martin Stock Drop Today? - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxQSGpxNGVoNUwtckVHVldzRnY0NnJ0YmtjU1hHcV96YTZrLVdyM3lJem5yWWVIQmlDTzVETUdTNV9nWWt3bFJPdlFXNTdQUWJtdlcwM0Y0LWRtc2NTY1BVeVV6cGJpQ0Q2ZWwzYlNmcTFRSWpVSTgtUHRQQlg5UlpxNG5Vd3FpME1vYWl0dVhZR0tMRWJkMEp2X2FR?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-21",
    "event": "Lockheed Martin (NYSE:LMT) Stock Price Down 1.2% - Here's What Happened - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiuAFBVV95cUxOQ3N2WloyOVRZSEMtRW9oZTJvZUZrbV9rdXozSHIxSW5lbklHbW9iUUU3bVp1aFUyYW1XRzY4NnpWMVdiUTRKSXlzX3FfbGJpd1RDWHlmZWFGTWZwd1hvS210U1otZXIwbl96ZEIxbllMeEpDZE80dXNqVkMxdF9OT0FodFREaVBHTTVndFFRUC1BMWJtRDljN04xc010dG1sSDdTWjVkNXlqSmk1NTFsc0h0aVRpWFJ2?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-21",
    "event": "LMT Stock Gains Premarket: Lockheed Martin Reveals New Counter-Drone Weapon, Cheaper Missile Interceptor - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi-gFBVV95cUxOT2JqXzlSeUZBcUVzVS15MmY3TV9SMWpNcjVReUg1Z3Jqam5uRlRlUkRRMUVjSUVCOFFCMjVRa0FtRXY1akVVVXhpcklWMmhveWlQVWU0ZEx6cHdtRk51eDQxSnQyNlpSSUZuXzZScWRMSjNvTkVIbUVJeEpXOG5tOTcybFBDdVR1a3lvbzVCWE5ZZ1JwWEl4SXcza0IxaS1ldi0yWlJCNmUwMlNnam9hdkdjQ21sWTBqSWZSVDhqN1pxbzRiSnA2UFBoSXAxTUpmY09Pb2dPUzctaE9VbkxYRDRtYzBLTXBGLWliWnlMNlhwSzg5QlMyU3l3?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-21",
    "event": "Lockheed Martin (LMT) Stock Could Be 27% Undervalued At Current Prices - simplywall.st",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0gFBVV95cUxNcFB6LWNTNDFwcUxqeGE3d2V5ZkFsZGtoRmJoZEJzNXZ4a1M1YWNSWVNzU0lIenpyY2ZReVQ0Z3o5N3IwMVVxVURHRWFOTVJ3bTBkbjVKZzNKYlVLaV9VLTNRUFk5SGUybnp5NG1aT29yVURleERmczJheGhYdkNXM2NjN2FvMEpOWlpJUWpMUjBmdkdrMXRBVTZ0YU9SSWZHU2d6dDJOajJfbTM3Q2RVdVN1alllTWpaLUMxc0tUd1NxQTU0el9pY1BkSjVZOEcxSFHSAdcBQVVfeXFMUHhoMkIxazl4ZWpvUnFfVENpMjFoTmpqMHZUYlRPQnNTSG5uZGRFTV9jYUhiRjBoZlctRlRHV3R3LThWRERLME1CUjZKMUNySmo0bjZCRzNfcDZBZnowVU9nemJmc2YtMkdNQTl2N0JGb1ZBMm5Zdy1aQWtIRnpXZXJUTERTTDNpa2ZnX2tfcUo5dXd3TzNOTDc4cXY1SDNyd043MTQwMTFlam5FbXFSallWOVM5V1RMRXNRZldic2VXbWs4RXNJQktCcVZxY3RaWktZSDlZVmc?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-21",
    "event": "Advance Auto Parts vs. Lockheed Martin: Which Stock Is a Better Buy in 2026? - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMixAFBVV95cUxNcHlQOE9DU1E3Zm9EMTlYUDctRkFhbklDY0R1Zlp0c0VpbEtQSm04ZTVIZ2p1bmlhOWF2TjBvNkF6dVBDVEdtaXhKUzQzTlhiMGUyT2NIcGtzQmlKX2Q5UHQycEc3SlBZcGFwTlBfZHRPMHM3QXBRMlFlS2JESHlJYnNuSGlPbmVjc2lKV1F4WndjQTdrR3hfTTczQnhUeVVQSjNMakkyQzhDWTd4cFpLSEpKNHdReHEyOXVsQ2d2bG9DeWtI?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "Lockheed Martin Corp (LMT) Stock Down 3.0% but Still Overvalued -- GF Score: 86/100 - GuruFocus",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiswFBVV95cUxPbzg1UGpzY1JIV250UURwcW5nUnVFTEJMTVhxVHJUcWpZc0d3Y242TGZYLWIxbmEyb1BiamxSbFplWGgxN25WcmdwUzdxTHRFZjYtbERIUjYzWWZUTDF1aUhDdDIxWkZRQUVSTl9rMHhNQ1ZNWEFyN1QzdXlMRFVUTThmZ0ZyV0p6eWJMeFd4bWFFZFdvU1JzSEYzM0I2SUIwU0hNaEFEaWlPYS1wcVUyMUFlQQ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "Lockheed Martin (LMT) Stock May Be 24% Undervalued On Japan Defense System News - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimgFBVV95cUxPQmt6STh2cDBQM0RpclNkb3dLdmV4YWZzcHFBWFdNYlVOR3R0Z1R3Wk9ScE9HZnczX2dwc2FrUmpmeVVVRWRxLW5MUk9hLTN3aUtOb0RfU3VSTV9FTnZQakFWdmxiNUZ6MW9COGpyd1VVZDJ1RHZ6dXlLaVRrX2pKb25WMThDZVRZQjJydFB2cS0wbloxVE15OFVR?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "LMT 260814 495.00C (LMT260814C495000) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4wJBVV95cUxQVzZub2FfOW8taGNOR0J3RXQ3c3B2VTdLVzlzcGMyVzh1Qmo5NzN6ekJqcktnWjR4V2d1SWZiV0JhbU1rX3pmTGMxTmJRMzBjbERRMjNjakdDSGxyX0pxd3hCb2pDOWFIOTVqci12TUd2U09pUzhwR0R3ZFlKRW1qR0VsTS1WTHV3M2Rhc2lTVEllQmZHNGdURzM5RGdSQ0Y1NkZURHNLd0MzUXF0eWxENnVtV3BDV3g1aFpxYWdadHV5cjUzWC10eXIwWHdnS284Z05Na3RwNnVpLUdXQlpOWjdJN284aXplUUdIQ3o1aF8zZ2xObzcyWW10cUFLa1NPeDNYVHM2bm96QWdHZVMxSGN0M1o0LUNNeGpZSUs4UnVXbldDak9tZnlaX2dMaTVPcy1OcUF3Z0tmdk5jejBYaVFaX1ZhQV81dkFIanlldmNwbGpWYkxtRUtYSGFkNlFjMTlz?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "Lockheed Martin (NYSE:LMT) Stock Price Down 3% - Here's Why - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiqgFBVV95cUxObDkzWHAzNHR0Vms1M1d4ZzN4RlFSQWcya0RhRWNFcVNhVlJBcERfR1l6MUplbTYxY0IyTU5RS05EUU9CSXY0cVlSVTNSYzlHR1JsMkNwQXRmcWNoZ29QVzJXTFpGOFIwNXp1N3lQeU1LYl83NTY2LXUyLTZ5aHNfWkhUQ3FIeGxQSE9TczVTYW96LUxaTjJ2U2R5b1Z4N3RXZHlQOW9jOWh4dw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "GM, LMT Stocks Gain Overnight: General Motors, Lockheed Martin Reportedly Working On Weapons Parts Partnership - Stocktwits",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi8gFBVV95cUxPTWYxRUl3VVRfSlF3ZG9UUXpqOEdfOVV1c1RlSHFtMzlWS2hmSWJxWkR3VjNYcEo3UGdlTWwwc2hxaVJUVmt2QUJEamk3aU5MUGdLLWJkamZMTk9qQXRPZWhJSDBWTjZLNndwSUFkd3RET0JSSmh5dmhuQ1BaRndsR2p6Ym9CQTBhWnhBSk9scDBMYlZUdW44MXF5ejlDRzRaM1dYcFNuakFTWGxKc1FOZ2RLRTE5TXBqd200RlhZaGR2aG1RY2dBcXVYbGRxOUtPeThWUEplb2R2UXNWWllKdTl3V1FocUNOTDNGa1RqZWgyZw?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "Why Did Lockheed Martin Stock Drop Today? - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiiwFBVV95cUxQXzMzOUlwRUFJdVVoY0VZSTlmenhybWNtYzR2RlNwcXMxR19uMVhlMEZxcW9BT3R2aHZUUTNWY3BBcTgyYjJNTWxxbEtuS183WE9RaW95eExhM1hWQldJc1hhVDNHekdLeHRDcGF2ZnhRcS1Md1FtU0NkOE1TaXJ3NlJZMnJWeDhHT0xB?oc=5"
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
    "date": "2026-08-21",
    "event": "2,500 Shares in Lockheed Martin Corporation $LMT Purchased by Jupiter Wealth Management LLC - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi5AFBVV95cUxQS0Yyc0d5M2NBMHF2Z0gyR1BRVUFxSDlTSWQ2V3gtVFlPbW5iNjl4YTlHZWxVSkFzMXB6UjNRN2d2MzRINHVvRktVODRCNDYzT1k3R2llVTNWa09PMVJNaHkwMXhrcmFDU0xwNktQZjRVRU1fVjJKNHRZb29SN09Bc0I4SzBsdTB2TmJnQ0IwUmJGbDRQY3ZSX2tqTEtDOTlianV4WUFYZEhwT3poTmRxRGk2MzVSclh5UlYwSy1UbXdSUmUzZW1tclIybDQ2RjBBX2J2aU5sNG43ZVFyN1pwYTBpZnc?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "Stock-Split Watch: Is Lockheed Martin Next? - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMijAFBVV95cUxOTVNGUmFSejNVb1VFVGFqODZnVXZ1ZWZremtpX09KcE5xQzFYTzEzSnhObUYwNjFJeEZkWFRWZ1FtdDhITVFFNnd0T0Ftd0NyVVd4SEJhRkFRWHJaclRmSGVPSkhseG9SR3R0WXJxLVFxcEk1cXRDakRNSGt5Skc0SEQ5TDhLNFNnUUhFeg?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-20",
    "event": "Lockheed Martin (LMT) Wins Fresh Defense Work As Valuation Questions Return - Yahoo Finance",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMimwFBVV95cUxQVTJ3empEd0hJQzhzWVlTS0I4U21WQTEyVWZEaHpmRnhqaEozUGplWHpERGMtVUI0eVhfRVViaEVtY2NFWnFhTjNqZnZRdVFRUlFhRHNYajRESjJtYnZMTmxWVDBiRXhSRUxwNXpqQTZ5MzUxMk9rNnc3OUp5aE1vUmN2aWVwdkZ5WF9pMWduZzZYT2JHaTlPMUpNQQ?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-21",
    "event": "Vise Technologies Inc. Buys New Holdings in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi0AFBVV95cUxNM1pOUXhXNzgwcVhsbXJjdHBVeDkwd2FPai1DaWRBX0Nicl9TMk0wVVJnbDJVc3FVdmJoUGFjV0tGWkpVWS1qUVNGSWFFcFVHNEo1NjFrSmE0bU10NHl6dGlUTEVWeE5aUHBDanFWWlBiWTJwUWFOUERkckNRNTBDOVdfSFRkcHltUUFkVW9lX0JGTHhodGdaQXQya1VrTl96ZC13SlZMZlpXeWJDZ05SMWNRTm1zQy05Rkp5UGVaaFZYRi1jWkJZN21nREhxalp2?oc=5"
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
    "date": "2026-08-21",
    "event": "Allworth Financial LP Takes $14.75 Million Position in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3gFBVV95cUxNMDI2blBJeXBLX2tOaWpxeE11QTdMa3BGSXhyYXVjMGJkUnZZd1VrY1Uyd1ppeVlkaFUyYktHbnZYVEZMZVlFeThnZGh6U1BTR2l0QWh0bkdLSlNoWEpKR3FmVS1leEtKVUlFai1kTV9tMW5oVHE2d1RkbkVmNG5ERzB4RVFwWDJyN2ttUi1RRXBZdFRya29FaU1pVjRtUUFLckt5QktNUDJjM2Z4ci1xVTFZTEJXRUVpSXVXMk9xZ0N0UHRGVFFZRGNyNk1aZ2VxdjdDVVFjbEtvRTd0dmc?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-21",
    "event": "Advisors Capital Management LLC Invests $45.91 Million in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi4gFBVV95cUxQZ2gwUnhHZ3k0bnpRZXpQR0ZBZHlZd2dVc0RXNmNqZnFxU3EwcXVVaWZLWjNLZDJEYjhQTFJCdUQ1ZU1pbkxqV1FMM1EtTGd6emE4U3FKUVNwSnJaZk5pTzVzSVhkTjNqY1lTTFJ2QmhXTU1jRWFuSmw3YzRNV2pzWUdLUnlCQU1JM1JKRkxWenVqQ0hiTTZsSmRZQU10VmpMV3cwTTJwTkRIQlVEcWd1NW5YR3JIOWdyOHdHbzYzYjRWM0JaMkNjNk5USUYwaHNBUFYxamN2TVBqQjB6RTQtSzZR?oc=5"
  },
  {
    "stock": "LMT",
    "date": "2026-08-21",
    "event": "Bank of New York Mellon Corp Acquires New Position in Lockheed Martin Corporation $LMT - MarketBeat",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMi3wFBVV95cUxOSDFfZXFxQ2lBSWk3N3dWLTNkWF95aTdXa0x5b0thdDBUN3NMLWlIblUtRFN1TkRfblBGMkdHbEJWMmpTa2N5UjRpdjBvWU5tMTdIS3FEZUpDX0llb0tqQUIwclF4N2Z2T29WUEFQdVNpd2htNzJYREt6WDRBYjlsQzFlN0J3eUN3djBVSHNmMjNiZWtkcXJtT2cyX0VpRGg1LU9uYkoxOFNGSkZPS095ZkE2MVFEZ1FsQkFIckpPMjd3RDBHcWxaRFVsam5NTXpQOXNNYXdyVHdrVFRicXFJ?oc=5"
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
    "date": "2026-08-04",
    "event": "3 Defense Stocks to Buy in August - The Motley Fool",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiggFBVV95cUxOZEhZRFdWQnMxa0EyMHJUZlJEUXpxNktfQ1h1UEc0Tk1pM3BWbk9XZ3pVSXY4RXJ5emxTU3pUeXRPRFFVaF9DVjdxYU1wTE8zTWUycWRseHdjeXdyVGc3VmlUQWtXTElqMjl5bzAyeWFVc096LVZ3dzBfMUpEa1JmcUxB?oc=5"
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
    "date": "2026-08-18",
    "event": "LMT 260814 637.50P (LMT260814P637500) Stock Options Chain | Quotes & News - Moomoo",
    "type": "NEWS",
    "remark": "News via Google News Feed",
    "url": "https://news.google.com/rss/articles/CBMiX0FVX3lxTE1EMDZlZHZROTNHQWtXNFNsWHNOaFZ5LWtIaGRtUmpZNkh1TmpnQWVaR0szMDJwT1kwbmN4c3NYblREcWUtMllOSjVscnQ0alJwbWJxbGpLQ1Zyc1EtTC1v?oc=5"
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
