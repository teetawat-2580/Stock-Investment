// ─── Dashboard / Portfolio View ──────────────────────────────
let portfolioChart = null;
let editingHoldingId = null;

function getUserHoldings() {
  try {
    const saved = localStorage.getItem('user_portfolio_holdings');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return [...portfolioData.holdings];
}

function saveUserHoldings(holdings) {
  try {
    localStorage.setItem('user_portfolio_holdings', JSON.stringify(holdings));
  } catch (e) {}
}

function renderDashboard(container) {
  const holdings = getUserHoldings();
  const total = holdings.reduce((s, h) => s + (Number(h.totalTHB) || 0), 0);
  const positions = holdings.length;

  // Recalculate percentages
  holdings.forEach(h => {
    h.portPct = total > 0 ? ((Number(h.totalTHB) || 0) / total) * 100 : 0;
  });

  const sortedHoldings = [...holdings].sort((a,b) => b.totalTHB - a.totalTHB);
  const topHolding = sortedHoldings[0] || { name: '—', portPct: 0 };

  const COLORS = [
    '#00d4aa','#0099ff','#b388ff','#ffb74d','#ff4d6d',
    '#ffd740','#69f0ae','#40c4ff','#ea80fc','#ff6e40'
  ];

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>📊 Portfolio Overview</h2>
        <p>อัปเดตล่าสุด: ${formatDate(portfolioData.lastUpdated)} &nbsp;·&nbsp; ${positions} สินทรัพย์</p>
      </div>
      <button class="pill active" style="background:var(--accent-grad);color:#000;font-weight:700" onclick="toggleHoldingForm()">
        ➕ เพิ่มสินทรัพย์ (Add Holding)
      </button>
    </div>

    <!-- Add/Edit Holding Form Card -->
    <div id="holding-form-card" class="card" style="display:none;margin-bottom:20px;border-color:var(--accent-1)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <div class="card-title" id="holding-form-title" style="margin-bottom:0;color:var(--accent-1)">➕ เพิ่มสินทรัพย์ในพอร์ต</div>
        <button class="pill" style="font-size:11px;padding:2px 10px;" onclick="toggleHoldingForm(false)">✕ ปิด</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px;">
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">ชื่อสินทรัพย์ (Asset Name):</label>
          <input type="text" id="h-name-input" placeholder="e.g. JPM, AMZN, SCB, ทองคำ" class="search-box" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">ประเภท (Category):</label>
          <input type="text" id="h-type-input" placeholder="e.g. หุ้น US, หุ้นไทย, เงินฝาก" class="search-box" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">มูลค่ารวม (THB):</label>
          <input type="number" id="h-val-input" placeholder="e.g. 50000" class="search-box" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
        </div>
      </div>
      <div style="margin-bottom:14px;">
        <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">หมายเหตุ (Remark):</label>
        <input type="text" id="h-remark-input" placeholder="e.g. ถือระยะยาว, ปันผล 4%" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
      </div>
      <div style="display:flex;gap:10px;justify-content:flex-end;">
        <button class="pill" onclick="toggleHoldingForm(false)">ยกเลิก</button>
        <button class="pill active" style="background:var(--accent-1);color:#000;font-weight:700" onclick="saveHolding()">
          💾 บันทึกสินทรัพย์
        </button>
      </div>
    </div>

    <div class="kpi-grid">
      <div class="kpi-card">
        <span class="kpi-icon">💰</span>
        <div class="kpi-label">มูลค่ารวม (THB)</div>
        <div class="kpi-value" id="kpi-total">฿${formatNum(total, 0)}</div>
        <div class="kpi-sub">ณ วันที่ ${formatDate(portfolioData.lastUpdated)}</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">📦</span>
        <div class="kpi-label">จำนวนสินทรัพย์</div>
        <div class="kpi-value">${positions}</div>
        <div class="kpi-sub">กระจายใน ${[...new Set(holdings.map(h=>h.type))].length} ประเภท</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">🏆</span>
        <div class="kpi-label">สินทรัพย์ใหญ่สุด</div>
        <div class="kpi-value">${topHolding.name}</div>
        <div class="kpi-sub">${formatNum(topHolding.portPct, 2)}% ของพอร์ต</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">🌏</span>
        <div class="kpi-label">หุ้น US / ETFs</div>
        <div class="kpi-value">${holdings.filter(h => h.type.includes('US') || h.type.includes('หุ้น')).length}</div>
        <div class="kpi-sub">US &amp; Asset Holdings</div>
      </div>
    </div>

    <div class="portfolio-layout">
      <div class="card">
        <div class="card-title">การกระจายพอร์ต</div>
        <div class="donut-wrap" style="height:300px">
          <canvas id="portfolio-donut"></canvas>
          <div class="donut-center">
            <div class="dc-label">รวมทั้งหมด</div>
            <div class="dc-value">฿${formatNum(total,0)}</div>
          </div>
        </div>
        <div class="legend" id="donut-legend"></div>
      </div>

      <div class="card">
        <div class="card-title">รายละเอียดพอร์ต (จัดการสินทรัพย์)</div>
        <div class="table-wrap" style="max-height:450px;overflow-y:auto;">
          <table>
            <thead>
              <tr>
                <th>สินทรัพย์</th>
                <th>ประเภท</th>
                <th>มูลค่า (THB)</th>
                <th>สัดส่วน</th>
                <th style="text-align:center">จัดการ</th>
              </tr>
            </thead>
            <tbody>
              ${holdings.map((h, i) => `
                <tr>
                  <td><span style="display:inline-flex;align-items:center;gap:8px;">
                    <span style="width:10px;height:10px;border-radius:50%;background:${COLORS[i % COLORS.length]};flex-shrink:0"></span>
                    <strong>${h.name}</strong>
                  </span></td>
                  <td><span class="badge badge-gray">${h.type}</span></td>
                  <td class="num">฿${formatNum(h.totalTHB, 2)}</td>
                  <td>
                    <div class="progress-bar-wrap">
                      <div class="progress-bar"><div class="progress-bar-fill" style="width:${h.portPct}%;background:${COLORS[i % COLORS.length]}"></div></div>
                      <span class="num" style="min-width:44px;text-align:right;color:${COLORS[i % COLORS.length]}">${formatNum(h.portPct,1)}%</span>
                    </div>
                  </td>
                  <td style="text-align:center">
                    <div style="display:flex;gap:4px;justify-content:center;">
                      <button class="pill" style="font-size:10px;padding:2px 8px;" onclick="editHolding('${h.id || h.name}')">✏️</button>
                      <button class="pill" style="font-size:10px;padding:2px 8px;color:var(--red);border-color:rgba(255,77,109,0.3);" onclick="deleteHolding('${h.id || h.name}')">🗑️</button>
                    </div>
                  </td>
                </tr>
                ${h.remark ? `<tr><td colspan="5" style="font-size:12px;color:var(--text-muted);padding:4px 14px 10px;">${h.remark}</td></tr>` : ''}
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  renderPortfolioDonut(holdings, COLORS);
}

function toggleHoldingForm(show) {
  const form = document.getElementById('holding-form-card');
  if (!form) return;
  if (show === undefined) show = form.style.display === 'none';
  if (show) {
    editingHoldingId = null;
    document.getElementById('holding-form-title').textContent = '➕ เพิ่มสินทรัพย์ในพอร์ต';
    document.getElementById('h-name-input').value = '';
    document.getElementById('h-type-input').value = 'หุ้น US';
    document.getElementById('h-val-input').value = '';
    document.getElementById('h-remark-input').value = '';
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}

function editHolding(idOrName) {
  const holdings = getUserHoldings();
  const item = holdings.find(h => (h.id || h.name) === idOrName);
  if (!item) return;

  editingHoldingId = item.id || item.name;
  const form = document.getElementById('holding-form-card');
  if (form) {
    document.getElementById('holding-form-title').textContent = '✏️ แก้ไขข้อมูลสินทรัพย์';
    document.getElementById('h-name-input').value = item.name || '';
    document.getElementById('h-type-input').value = item.type || 'หุ้น US';
    document.getElementById('h-val-input').value = item.totalTHB || 0;
    document.getElementById('h-remark-input').value = item.remark || '';
    form.style.display = 'block';
  }
}

function deleteHolding(idOrName) {
  if (confirm("คุณต้องการลบสินทรัพย์นี้ออกจากพอร์ตใช่หรือไม่?")) {
    let holdings = getUserHoldings();
    holdings = holdings.filter(h => (h.id || h.name) !== idOrName);
    saveUserHoldings(holdings);
    renderDashboard(document.getElementById('vp-dashboard'));
  }
}

function saveHolding() {
  const name = document.getElementById('h-name-input').value.trim();
  const type = document.getElementById('h-type-input').value.trim();
  const val = parseFloat(document.getElementById('h-val-input').value) || 0;
  const remark = document.getElementById('h-remark-input').value.trim();

  if (!name || val <= 0) {
    alert("กรุณากรอกชื่อสินทรัพย์และมูลค่า (THB)");
    return;
  }

  let holdings = getUserHoldings();

  if (editingHoldingId) {
    holdings = holdings.map(h => {
      if ((h.id || h.name) === editingHoldingId) {
        return { ...h, name, type: type || 'สินทรัพย์', totalTHB: val, remark };
      }
      return h;
    });
  } else {
    const newItem = {
      id: 'h_' + Date.now(),
      name,
      type: type || 'สินทรัพย์',
      totalTHB: val,
      remark
    };
    holdings.push(newItem);
  }

  saveUserHoldings(holdings);
  toggleHoldingForm(false);
  renderDashboard(document.getElementById('vp-dashboard'));
}

function renderPortfolioDonut(holdings, COLORS) {
  const canvas = document.getElementById('portfolio-donut');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (portfolioChart) portfolioChart.destroy();

  portfolioChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: holdings.map(h => h.name),
      datasets: [{
        data: holdings.map(h => h.totalTHB),
        backgroundColor: COLORS.slice(0, holdings.length),
        borderWidth: 2,
        borderColor: '#151f38',
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '72%',
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#10172a',
          borderColor: 'rgba(0,212,170,0.3)',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            label: ctx => ` ${ctx.label}: ฿${formatNum(ctx.raw, 0)} (${formatNum(holdings[ctx.dataIndex].portPct, 1)}%)`
          }
        }
      }
    }
  });

  const legend = document.getElementById('donut-legend');
  if (legend) {
    legend.innerHTML = holdings.map((h, i) => `
      <div class="legend-item">
        <div class="legend-dot" style="background:${COLORS[i % COLORS.length]}"></div>
        <span>${h.name} (${formatNum(h.portPct, 1)}%)</span>
      </div>
    `).join('');
  }
}
