import yfinance as yf
import json
import os

print("Updating Stock Analysis data from Yahoo Finance...")

tickers = ['JPM', 'AMZN', 'NVDA', 'CRWD', 'BAC', 'TSLA', 'BA', 'SLV', 'QQQM', 'V', 'NEM', 'RTX', 'LMT', 'INTC', 'GOOGL']

# Load existing analysis data from data/analysis.js
js_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'analysis.js')
with open(js_path, "r", encoding="utf-8") as f:
    js_text = f.read()

json_part = js_text.split("const saAnalysisData = ")[1].split(";\nconst analysisData =")[0]
existing_data = json.loads(json_part)

# Yahoo metric to SA metric mapping
metric_map = {
    'Total Revenue': 'Revenue',
    'Operating Revenue': 'Revenue',
    'Net Interest Income': 'Net Interest Income',
    'Interest Income': 'Interest Income on Loans',
    'Interest Expense': 'Interest Paid on Deposits',
    'Net Income': 'Net Income',
    'Net Income Common Stockholders': 'Net Income to Common',
    'Pretax Income': 'Pretax Income',
    'Tax Provision': 'Income Tax Expense',
    'Diluted EPS': 'EPS (Diluted)',
    'Basic EPS': 'EPS (Basic)',
    'Salaries And Wages': 'Salaries and Employee Benefits',
    'Selling General And Administration': 'Selling, General & Administrative',
    'Other Non Interest Expense': 'Other Non-Interest Expense',
    'Diluted Average Shares': 'Diluted Shares Outstanding',
    'Basic Average Shares': 'Basic Shares Outstanding',
    'Gross Profit': 'Gross Profit',
    'Operating Income': 'Operating Income'
}

def date_to_quarter(date_str, symbol):
    parts = date_str.split('-')
    year = int(parts[0])
    month = int(parts[1])
    q_num = (month - 1) // 3 + 1
    if symbol in ['NVDA', 'CRWD']:
        return f"Q{q_num} FY{str(year)[2:]}"
    return f"Q{q_num} {year}"

for symbol in tickers:
    try:
        t = yf.Ticker(symbol)
        stmt = t.quarterly_income_stmt
        if stmt is None or stmt.empty:
            # Handle ETFs or assets without standard income statements (e.g. SLV, QQQM)
            if symbol not in existing_data:
                existing_data[symbol] = {
                    "quarters": ["Q2 2026", "Q1 2026", "Q4 2025", "Q3 2025"],
                    "metrics": {
                        "Revenue": [None, None, None, None],
                        "Net Income": [None, None, None, None]
                    }
                }
            continue
            
        stock_dict = existing_data.get(symbol, {"quarters": [], "metrics": {
            "Revenue": [],
            "Gross Profit": [],
            "Operating Income": [],
            "Net Income": [],
            "EPS (Diluted)": []
        }})
        existing_quarters = stock_dict["quarters"]
        existing_metrics = stock_dict["metrics"]
        
        for col in reversed(stmt.columns): # process oldest to newest
            date_str = str(col.date())
            q_name = date_to_quarter(date_str, symbol)
            
            if q_name not in existing_quarters:
                print(f"Adding new quarter {q_name} ({date_str}) for {symbol} from Yahoo Finance!")
                existing_quarters.insert(0, q_name)
                
                for mname in existing_metrics:
                    existing_metrics[mname].insert(0, None)
                    
                for yf_metric, sa_metric in metric_map.items():
                    if yf_metric in stmt.index:
                        val = stmt.loc[yf_metric, col]
                        if val == val and val is not None:
                            val_float = float(val)
                            if 'EPS' in sa_metric or 'Per Share' in sa_metric:
                                final_val = round(val_float, 2)
                            elif abs(val_float) >= 100000:
                                final_val = round(val_float / 1000000.0, 2)
                            else:
                                final_val = round(val_float, 2)
                                
                            if sa_metric not in existing_metrics:
                                existing_metrics[sa_metric] = [None] * len(existing_quarters)
                            existing_metrics[sa_metric][0] = final_val

        existing_data[symbol] = stock_dict

    except Exception as e:
        print(f"Error processing Yahoo data for {symbol}: {e}")

new_js_text = "const saAnalysisData = " + json.dumps(existing_data, indent=2, ensure_ascii=False) + ";\n"
new_js_text += "const analysisData = saAnalysisData;\n"

with open(js_path, "w", encoding="utf-8") as f:
    f.write(new_js_text)

print("Successfully updated data/analysis.js with Yahoo Finance latest data!")
