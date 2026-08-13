// ─── Trade Log View ──────────────────────────────────────────
let editingTradeId = null;

function getUserTradeLog() {
  try {
    const saved = localStorage.getItem('user_tradelog_entries');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return [...tradeLogData];
}

function saveUserTradeLog(entries) {
  try {
    localStorage.setItem('user_tradelog_entries', JSON.stringify(entries));
  } catch (e) {}
}

function renderTradelog(container) {
  const trades = getUserTradeLog();

  // Compute simple P&L per stock
  const pnlMap = {};
  trades.forEach(t => {
    if (!pnlMap[t.name]) pnlMap[t.name] = { buys: [], sells: [] };
    if (t.action === 'BUY')  pnlMap[t.name].buys.push(Number(t.price));
    if (t.action === 'SELL') pnlMap[t.name].sells.push(Number(t.price));
  });

  const totalBuy  = trades.filter(t => t.action === 'BUY').length;
  const totalSell = trades.filter(t => t.action === 'SELL').length;
  const stocks    = [...new Set(trades.map(t => t.name))];

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>📋 Trade Log</h2>
        <p>ประวัติการซื้อ-ขาย ทุกรายการ (Add / Edit / Delete Supported)</p>
      </div>
      <button class="pill active" style="background:var(--accent-grad);color:#000;font-weight:700" onclick="toggleTradeForm()">
        ➕ เพิ่มรายการซื้อ-ขาย (Add Trade)
      </button>
    </div>

    <!-- Add/Edit Trade Form -->
    <div id="trade-form-card" class="card" style="display:none;margin-bottom:20px;border-color:var(--accent-1)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <div class="card-title" id="trade-form-title" style="margin-bottom:0;color:var(--accent-1)">➕ เพิ่มรายการซื้อ-ขาย</div>
        <button class="pill" style="font-size:11px;padding:2px 10px;" onclick="toggleTradeForm(false)">✕ ปิด</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:12px;margin-bottom:12px;">
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">ชื่อหุ้น (Ticker):</label>
          <input type="text" id="tr-name-input" placeholder="e.g. JPM, NVDA, AMZN" class="search-box" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">ประเภท (Action):</label>
          <select id="tr-action-input" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-family:inherit;">
            <option value="BUY">🟢 BUY (ซื้อ)</option>
            <option value="SELL">🔴 SELL (ขาย)</option>
          </select>
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">ราคา ($ USD):</label>
          <input type="number" step="0.0001" id="tr-price-input" placeholder="e.g. 185.50" class="search-box" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">วันที่ (Date):</label>
          <input type="date" id="tr-date-input" class="search-box" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
        </div>
      </div>
      <div style="display:flex;gap:10px;justify-content:flex-end;">
        <button class="pill" onclick="toggleTradeForm(false)">ยกเลิก</button>
        <button class="pill active" style="background:var(--accent-1);color:#000;font-weight:700" onclick="saveTradeEntry()">
          💾 บันทึกรายการ
        </button>
      </div>
    </div>

    <div class="kpi-grid" style="grid-template-columns:repeat(4,1fr)">
      <div class="kpi-card">
        <span class="kpi-icon">🧾</span>
        <div class="kpi-label">รายการทั้งหมด</div>
        <div class="kpi-value">${trades.length}</div>
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
      <div class="card-title">กำไร/ขาดทุน รายหุ้น (P&amp;L)</div>
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
            <th style="text-align:center">จัดการ</th>
          </tr>
        </thead>
        <tbody>
          ${[...trades].reverse().map((t, i) => {
            const tradeId = t.id || `${t.name}_${t.date}_${t.price}_${i}`;
            return `
              <tr>
                <td style="color:var(--text-muted)">${trades.length - i}</td>
                <td><strong>${t.name}</strong></td>
                <td><span class="badge ${t.action === 'BUY' ? 'badge-green action-buy' : 'badge-red action-sell'}">
                  ${t.action === 'BUY' ? '▲' : '▼'} ${t.action}
                </span></td>
                <td>${formatDate(t.date)}</td>
                <td class="num">$${formatNum(t.price, 4)}</td>
                <td style="text-align:center">
                  <div style="display:flex;gap:4px;justify-content:center;">
                    <button class="pill" style="font-size:10px;padding:2px 8px;" onclick="editTradeEntry('${tradeId}')">✏️</button>
                    <button class="pill" style="font-size:10px;padding:2px 8px;color:var(--red);border-color:rgba(255,77,109,0.3);" onclick="deleteTradeEntry('${tradeId}')">🗑️</button>
                  </div>
                </td>
              </tr>
            `;
          }).join('')}
        </tbody>
      </table>
    </div>
  `;
}

function computePnlCards(pnlMap) {
  return Object.entries(pnlMap).map(([name, data]) => {
    if (data.buys.length === 0 && data.sells.length === 0) return '';
    if (data.sells.length === 0) {
      const avgB = data.buys.reduce((a,b)=>a+b,0)/data.buys.length;
      return `
        <div class="card" style="flex:1;min-width:140px;padding:16px;">
          <div style="font-weight:700;font-size:15px;">${name}</div>
          <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">ยังถือ (Holding)</div>
          <div style="font-size:13px;color:var(--text-secondary);margin-top:4px;">Avg Buy: $${formatNum(avgB, 2)}</div>
        </div>`;
    }
    const avgBuy  = data.buys.length > 0 ? (data.buys.reduce((a,b)=>a+b,0)  / data.buys.length) : 0;
    const avgSell = data.sells.length > 0 ? (data.sells.reduce((a,b)=>a+b,0) / data.sells.length) : 0;
    const pnl     = avgSell - avgBuy;
    const pnlPct  = avgBuy > 0 ? (pnl / avgBuy * 100) : 0;
    const pos     = pnl >= 0;

    return `
      <div class="card" style="flex:1;min-width:160px;padding:16px;">
        <div style="font-weight:700;font-size:15px;display:flex;justify-content:space-between;">
          <span>${name}</span>
          <span style="font-size:12px;color:${pos?'var(--green)':'var(--red)'}">${pos?'+':''}${formatNum(pnlPct,2)}%</span>
        </div>
        <div style="font-size:12px;color:var(--text-muted);margin-top:4px;">P&amp;L per Share</div>
        <div style="font-size:16px;font-weight:800;margin-top:4px;color:${pos?'var(--green)':'var(--red)'}">
          ${pos?'+':''}$${formatNum(pnl,2)}
        </div>
      </div>`;
  }).join('');
}

function toggleTradeForm(show) {
  const form = document.getElementById('trade-form-card');
  if (!form) return;
  if (show === undefined) show = form.style.display === 'none';

  if (show) {
    editingTradeId = null;
    document.getElementById('trade-form-title').textContent = '➕ เพิ่มรายการซื้อ-ขาย';
    document.getElementById('tr-name-input').value = '';
    document.getElementById('tr-action-input').value = 'BUY';
    document.getElementById('tr-price-input').value = '';
    document.getElementById('tr-date-input').value = new Date().toISOString().split('T')[0];
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}

function editTradeEntry(tradeId) {
  const trades = getUserTradeLog();
  const item = trades.find((t, i) => (t.id || `${t.name}_${t.date}_${t.price}_${i}`) === tradeId);
  if (!item) return;

  editingTradeId = tradeId;
  const form = document.getElementById('trade-form-card');
  if (form) {
    document.getElementById('trade-form-title').textContent = '✏️ แก้ไขรายการซื้อ-ขาย';
    document.getElementById('tr-name-input').value = item.name || '';
    document.getElementById('tr-action-input').value = item.action || 'BUY';
    document.getElementById('tr-price-input').value = item.price || 0;
    document.getElementById('tr-date-input').value = item.date || '';
    form.style.display = 'block';
  }
}

function deleteTradeEntry(tradeId) {
  if (confirm("คุณต้องการลบรายการซื้อ-ขายนี้ใช่หรือไม่?")) {
    let trades = getUserTradeLog();
    trades = trades.filter((t, i) => (t.id || `${t.name}_${t.date}_${t.price}_${i}`) !== tradeId);
    saveUserTradeLog(trades);
    renderTradelog(document.getElementById('vp-tradelog'));
  }
}

function saveTradeEntry() {
  const name = document.getElementById('tr-name-input').value.trim().toUpperCase();
  const action = document.getElementById('tr-action-input').value;
  const price = parseFloat(document.getElementById('tr-price-input').value) || 0;
  const date = document.getElementById('tr-date-input').value;

  if (!name || price <= 0) {
    alert("กรุณากรอกชื่อหุ้น และ ราคา ($)");
    return;
  }

  let trades = getUserTradeLog();

  if (editingTradeId) {
    trades = trades.map((t, i) => {
      if ((t.id || `${t.name}_${t.date}_${t.price}_${i}`) === editingTradeId) {
        return { ...t, name, action, price, date: date || new Date().toISOString().split('T')[0] };
      }
      return t;
    });
  } else {
    trades.push({
      id: 'tr_' + Date.now(),
      name,
      action,
      price,
      date: date || new Date().toISOString().split('T')[0]
    });
  }

  saveUserTradeLog(trades);
  toggleTradeForm(false);
  renderTradelog(document.getElementById('vp-tradelog'));
}
