// ─── Dashboard / Portfolio View ──────────────────────────────
let portfolioChart = null;

function renderDashboard(container) {
  const total = portfolioData.holdings.reduce((s, h) => s + h.totalTHB, 0);
  const positions = portfolioData.holdings.length;
  const topHolding = [...portfolioData.holdings].sort((a,b) => b.totalTHB - a.totalTHB)[0];

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
    </div>

    <div class="kpi-grid">
      <div class="kpi-card">
        <span class="kpi-icon">💰</span>
        <div class="kpi-label">มูลค่ารวม (THB)</div>
        <div class="kpi-value" id="kpi-total">฿0</div>
        <div class="kpi-sub">ณ วันที่ ${formatDate(portfolioData.lastUpdated)}</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">📦</span>
        <div class="kpi-label">จำนวนสินทรัพย์</div>
        <div class="kpi-value">${positions}</div>
        <div class="kpi-sub">กระจายใน ${[...new Set(portfolioData.holdings.map(h=>h.type))].length} ประเภท</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">🏆</span>
        <div class="kpi-label">สินทรัพย์ใหญ่สุด</div>
        <div class="kpi-value">${topHolding.name}</div>
        <div class="kpi-sub">${formatNum(topHolding.portPct, 2)}% ของพอร์ต</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">🌏</span>
        <div class="kpi-label">หุ้น US (USD)</div>
        <div class="kpi-value">3</div>
        <div class="kpi-sub">AMZN · NVDA · CRWD</div>
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
        <div class="card-title">รายละเอียดพอร์ต</div>
        <div class="table-wrap" style="max-height:400px;overflow-y:auto;">
          <table>
            <thead>
              <tr>
                <th>สินทรัพย์</th>
                <th>ประเภท</th>
                <th>มูลค่า (THB)</th>
                <th>สัดส่วน</th>
                <th>Treasury</th>
              </tr>
            </thead>
            <tbody>
              ${portfolioData.holdings.map((h, i) => `
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
                  <td>${h.treasuryStock ? '<span class="badge badge-teal">✓ Treasury</span>' : '<span class="badge badge-gray">—</span>'}</td>
                </tr>
                ${h.remark ? `<tr><td colspan="5" style="font-size:12px;color:var(--text-muted);padding:4px 14px 10px;">${h.remark}</td></tr>` : ''}
                ${h.interestCondition ? `<tr><td colspan="5" style="font-size:12px;color:var(--accent-1);padding:4px 14px 10px;">💡 ${h.interestCondition}</td></tr>` : ''}
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  // Animate KPI counter
  animateCount(document.getElementById('kpi-total'), total, (v) => '฿' + formatNum(v, 0));

  // Draw donut chart
  const ctx = document.getElementById('portfolio-donut').getContext('2d');
  if (portfolioChart) portfolioChart.destroy();
  portfolioChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: portfolioData.holdings.map(h => h.name),
      datasets: [{
        data: portfolioData.holdings.map(h => h.totalTHB),
        backgroundColor: COLORS,
        borderWidth: 2,
        borderColor: 'rgba(16,23,42,0.8)',
        hoverBorderColor: '#fff',
        hoverOffset: 8
      }]
    },
    options: {
      cutout: '65%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ฿${formatNum(ctx.raw, 0)} (${formatNum(ctx.raw/total*100,1)}%)`
          }
        }
      },
      animation: { duration: 900, easing: 'easeInOutQuart' }
    }
  });

  // Custom legend
  const legend = document.getElementById('donut-legend');
  legend.innerHTML = portfolioData.holdings.map((h, i) => `
    <div class="legend-item">
      <div class="legend-dot" style="background:${COLORS[i % COLORS.length]}"></div>
      <span>${h.name}</span>
    </div>
  `).join('');
}

function animateCount(el, target, fmt) {
  if (!el) return;
  const start = performance.now();
  const duration = 1200;
  function tick(now) {
    const t = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - t, 3);
    el.textContent = fmt(target * ease);
    if (t < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}
