// ─── US Stock Fundamentals View ──────────────────────────────
const DEFAULT_FUND_STOCKS = ['JPM', 'AMZN', 'NVDA', 'CRWD'];

function getUserFundStocks() {
  try {
    const saved = localStorage.getItem('user_fund_stocks');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return [...DEFAULT_FUND_STOCKS];
}

function setUserFundStocks(stocks) {
  try {
    localStorage.setItem('user_fund_stocks', JSON.stringify(stocks));
  } catch (e) {}
}

function renderFundamentals(container) {
  const activeStocks = getUserFundStocks();
  const baseCols = stocksData.columns;

  function fmtVal(label, val) {
    if (val == null) return '<span style="color:var(--text-muted)">—</span>';
    if (label === 'Volume') return `<span class="num">${formatBigNum(val)}</span>`;
    if (label === 'Shares Outstanding') return `<span class="num">${formatBigNum(val)}</span>`;
    if (label === 'P/E Ratio') {
      if (val === 0) return '<span style="color:var(--text-muted)">N/A</span>';
      return `<span class="num">${formatNum(val,2)}x</span>`;
    }
    if (label === 'ค่า Beta') return `<span class="num">${formatNum(val,4)}</span>`;
    if (label.includes('ราคา')) return `<span class="num">$${formatNum(val,2)}</span>`;
    return `<span class="num">${formatNum(val,2)}</span>`;
  }

  // Filter metrics according to activeStocks
  const categories = [...new Set(stocksData.metrics.map(m => m.category))];

  let tableRows = '';
  categories.forEach(cat => {
    tableRows += `<tr class="category-row"><td colspan="${activeStocks.length + 1}">🏷️ ${cat}</td></tr>`;
    stocksData.metrics.filter(m => m.category === cat).forEach(m => {
      const desc = stocksData.descriptions[m.label] || '';
      
      const valuesHtml = activeStocks.map(col => {
        const colIdx = baseCols.indexOf(col);
        const val = colIdx >= 0 ? m.values[colIdx] : null;
        return `<td>${fmtVal(m.label, val)}</td>`;
      }).join('');

      tableRows += `<tr>
        <td>
          <div class="tooltip-wrap">
            ${m.label}
            ${desc ? `<span class="tooltip-icon">?</span><span class="tooltip-text">${desc}</span>` : ''}
          </div>
        </td>
        ${valuesHtml}
      </tr>`;
    });
  });

  const priceRow = stocksData.metrics.find(m => m.label === 'ราคาปัจจุบัน');
  const hiRow    = stocksData.metrics.find(m => m.label === 'ราคาสูงสุด 52 สัปดาห์');
  const loRow    = stocksData.metrics.find(m => m.label === 'ราคาต่ำสุด 52 สัปดาห์');

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>📈 US Stock Fundamentals</h2>
        <p>ข้อมูลพื้นฐานหุ้น US — เปรียบเทียบงบการเงินและตัวชี้วัด</p>
      </div>
      <div style="display:flex;gap:10px;align-items:center;">
        <button class="pill active" style="background:var(--accent-grad);color:#000;font-weight:700" onclick="promptAddFundStock()">
          ➕ Add Stock
        </button>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:24px">
      ${activeStocks.map(col => {
        const colIdx = baseCols.indexOf(col);
        const price = colIdx >= 0 ? priceRow?.values[colIdx] : null;
        const hi    = colIdx >= 0 ? hiRow?.values[colIdx] : null;
        const lo    = colIdx >= 0 ? loRow?.values[colIdx] : null;
        const pct   = (price && hi && lo) ? ((price - lo) / (hi - lo) * 100) : null;
        const stockColors = { JPM:'#0052d4', AMZN:'#ff9900', NVDA:'#76b900', CRWD:'#ee3124', VZ:'#cd040b', T:'#00a8e0', TSLA:'#e82127', GOOGL:'#4285f4' };
        const color = stockColors[col] || 'var(--accent-1)';
        return `
          <div class="card" style="padding:16px 20px;position:relative;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
              <span style="font-size:18px;font-weight:800;color:${color}">${col}</span>
              <div style="display:flex;align-items:center;gap:10px;">
                <span style="font-size:22px;font-weight:700">${price ? '$'+formatNum(price,2) : '—'}</span>
                ${activeStocks.length > 1 ? `
                  <button class="pill" style="padding:2px 6px;font-size:10px;color:var(--red);border-color:rgba(255,77,109,0.3)" onclick="removeFundStock('${col}')">🗑️</button>
                ` : ''}
              </div>
            </div>
            ${pct != null ? `
            <div style="font-size:11px;color:var(--text-muted);margin-bottom:4px;display:flex;justify-content:space-between;">
              <span>$${formatNum(lo,2)} (52W Low)</span>
              <span>52W Range</span>
              <span>$${formatNum(hi,2)} (52W High)</span>
            </div>
            <div class="progress-bar" style="height:8px">
              <div class="progress-bar-fill" style="width:${pct.toFixed(1)}%;background:${color}"></div>
            </div>
            <div style="font-size:11px;color:${color};margin-top:4px;text-align:right">${pct.toFixed(1)}% ของ 52W Range</div>
            ` : ''}
          </div>`;
      }).join('')}
    </div>

    <div class="card">
      <div class="card-title">ตารางเปรียบเทียบตัวชี้วัดทางการเงิน</div>
      <div class="table-wrap" style="overflow-x:auto">
        <table class="fund-table">
          <thead>
            <tr>
              <th>ตัวชี้วัด</th>
              ${activeStocks.map(c => `<th>${c}</th>`).join('')}
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
    </div>
  `;
}

function promptAddFundStock() {
  const sym = prompt("กรอกชื่อหุ้น US ที่ต้องการเพิ่มในการเปรียบเทียบ (e.g. TSLA, BA, GOOGL, AAPL):");
  if (!sym) return;
  const clean = sym.trim().toUpperCase();
  if (!clean) return;

  const stocks = getUserFundStocks();
  if (!stocks.includes(clean)) {
    stocks.push(clean);
    setUserFundStocks(stocks);
  }
  renderFundamentals(document.getElementById('vp-fundamentals'));
}

function removeFundStock(symbol) {
  const stocks = getUserFundStocks();
  if (stocks.length <= 1) {
    alert("ต้องมีอย่างน้อย 1 หุ้นในการเปรียบเทียบ");
    return;
  }

  if (confirm(`คุณต้องการลบ ${symbol} ออกจากการเปรียบเทียบใช่หรือไม่?`)) {
    const updated = stocks.filter(s => s !== symbol);
    setUserFundStocks(updated);
    renderFundamentals(document.getElementById('vp-fundamentals'));
  }
}
