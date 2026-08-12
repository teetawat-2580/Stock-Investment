// ─── Trade Log View ──────────────────────────────────────────
function renderTradelog(container) {
  // Compute simple P&L per stock
  const pnlMap = {};
  tradeLogData.forEach(t => {
    if (!pnlMap[t.name]) pnlMap[t.name] = { buys: [], sells: [] };
    if (t.action === 'BUY')  pnlMap[t.name].buys.push(t.price);
    if (t.action === 'SELL') pnlMap[t.name].sells.push(t.price);
  });

  const totalBuy  = tradeLogData.filter(t => t.action === 'BUY').length;
  const totalSell = tradeLogData.filter(t => t.action === 'SELL').length;
  const stocks    = [...new Set(tradeLogData.map(t => t.name))];

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>📋 Trade Log</h2>
        <p>ประวัติการซื้อ-ขาย ทุกรายการ</p>
      </div>
    </div>

    <div class="kpi-grid" style="grid-template-columns:repeat(4,1fr)">
      <div class="kpi-card">
        <span class="kpi-icon">🧾</span>
        <div class="kpi-label">รายการทั้งหมด</div>
        <div class="kpi-value">${tradeLogData.length}</div>
        <div class="kpi-sub">รายการ</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">🟢</span>
        <div class="kpi-label">ซื้อ (BUY)</div>
        <div class="kpi-value" style="-webkit-text-fill-color:var(--green)">${totalBuy}</div>
        <div class="kpi-sub">รายการ</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">🔴</span>
        <div class="kpi-label">ขาย (SELL)</div>
        <div class="kpi-value" style="-webkit-text-fill-color:var(--red)">${totalSell}</div>
        <div class="kpi-sub">รายการ</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">🏷️</span>
        <div class="kpi-label">หุ้น</div>
        <div class="kpi-value">${stocks.length}</div>
        <div class="kpi-sub">${stocks.join(' · ')}</div>
      </div>
    </div>

    <div class="card" style="margin-bottom:24px">
      <div class="card-title">กำไร/ขาดทุน รายหุ้น (P&L)</div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:8px;">
        ${computePnlCards(pnlMap)}
      </div>
    </div>

    <div class="table-wrap">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>หุ้น</th>
            <th>Action</th>
            <th>วันที่</th>
            <th>ราคา (USD)</th>
          </tr>
        </thead>
        <tbody>
          ${[...tradeLogData].reverse().map((t, i) => `
            <tr>
              <td style="color:var(--text-muted)">${tradeLogData.length - i}</td>
              <td><strong>${t.name}</strong></td>
              <td><span class="badge ${t.action === 'BUY' ? 'badge-green action-buy' : 'badge-red action-sell'}">
                ${t.action === 'BUY' ? '▲' : '▼'} ${t.action}
              </span></td>
              <td>${formatDate(t.date)}</td>
              <td class="num">$${formatNum(t.price, 4)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function computePnlCards(pnlMap) {
  return Object.entries(pnlMap).map(([name, data]) => {
    if (data.sells.length === 0) {
      return `
        <div class="card" style="flex:1;min-width:140px;padding:16px;">
          <div style="font-weight:700;font-size:15px;">${name}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">ยังถือ</div>
          <div style="font-size:13px;color:var(--text-secondary);margin-top:4px;">Avg Buy: $${formatNum(data.buys.reduce((a,b)=>a+b,0)/data.buys.length, 2)}</div>
        </div>`;
    }
    const avgBuy  = data.buys.reduce((a,b)=>a+b,0)  / data.buys.length;
    const avgSell = data.sells.reduce((a,b)=>a+b,0) / data.sells.length;
    const pnl     = avgSell - avgBuy;
    const pnlPct  = (pnl / avgBuy * 100);
    const pos     = pnl >= 0;
    return `
      <div class="card" style="flex:1;min-width:160px;padding:16px;border-color:${pos ? 'rgba(0,230,118,0.2)' : 'rgba(255,77,109,0.2)'}">
        <div style="font-weight:700;font-size:15px;">${name}</div>
        <div class="${pos ? 'pnl-pos' : 'pnl-neg'}" style="font-size:22px;font-weight:800;margin:6px 0;">
          ${pos ? '+' : ''}$${formatNum(pnl, 2)}
        </div>
        <div class="${pos ? 'pnl-pos' : 'pnl-neg'}" style="font-size:13px;">
          ${pos ? '▲' : '▼'} ${Math.abs(pnlPct).toFixed(2)}%
        </div>
        <div style="font-size:11px;color:var(--text-muted);margin-top:6px;">
          Avg Buy: $${formatNum(avgBuy,2)} → Avg Sell: $${formatNum(avgSell,2)}
        </div>
      </div>`;
  }).join('');
}
