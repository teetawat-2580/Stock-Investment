// ─── US Stock Fundamentals View ──────────────────────────────
function renderFundamentals(container) {
  const cols = stocksData.columns;

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

  // Group by category
  const categories = [...new Set(stocksData.metrics.map(m => m.category))];

  let tableRows = '';
  categories.forEach(cat => {
    tableRows += `<tr class="category-row"><td colspan="${cols.length + 1}">🏷️ ${cat}</td></tr>`;
    stocksData.metrics.filter(m => m.category === cat).forEach(m => {
      const desc = stocksData.descriptions[m.label] || '';
      tableRows += `<tr>
        <td>
          <div class="tooltip-wrap">
            ${m.label}
            ${desc ? `<span class="tooltip-icon">?</span><span class="tooltip-text">${desc}</span>` : ''}
          </div>
        </td>
        ${m.values.map((v, i) => `<td>${fmtVal(m.label, v)}</td>`).join('')}
      </tr>`;
    });
  });

  // Price bar visual
  const priceRow = stocksData.metrics.find(m => m.label === 'ราคาปัจจุบัน');
  const hiRow    = stocksData.metrics.find(m => m.label === 'ราคาสูงสุด 52 สัปดาห์');
  const loRow    = stocksData.metrics.find(m => m.label === 'ราคาต่ำสุด 52 สัปดาห์');

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>📈 US Stock Fundamentals</h2>
        <p>ข้อมูลพื้นฐานหุ้น US — ณ ต้นปี 2026</p>
      </div>
    </div>

    <div class="grid-2" style="margin-bottom:24px">
      ${cols.map((col, i) => {
        const price = priceRow?.values[i];
        const hi    = hiRow?.values[i];
        const lo    = loRow?.values[i];
        const pct   = (price && hi && lo) ? ((price - lo) / (hi - lo) * 100) : null;
        const stockColors = { JPM:'#0052d4', AMZN:'#ff9900', NVDA:'#76b900', CRWD:'#ee3124', VZ:'#cd040b', T:'#00a8e0' };
        const color = stockColors[col] || 'var(--accent-1)';
        return `
          <div class="card" style="padding:16px 20px">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
              <span style="font-size:18px;font-weight:800;color:${color}">${col}</span>
              <span style="font-size:22px;font-weight:700">${price ? '$'+formatNum(price,2) : '—'}</span>
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
      <div class="card-title">ตารางเปรียบเทียบ</div>
      <div class="table-wrap" style="overflow-x:auto">
        <table class="fund-table">
          <thead>
            <tr>
              <th>ตัวชี้วัด</th>
              ${cols.map(c => `<th>${c}</th>`).join('')}
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
    </div>
  `;
}
