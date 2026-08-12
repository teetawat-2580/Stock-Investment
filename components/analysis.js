// ─── Stock Analysis View ─────────────────────────────────────
let analysisChart = null;
let activeAnalysisStock = 'JPM';
let activeChartMetrics = ['Net Interest Income', 'Revenue', 'Net Income', 'EPS (Diluted)', 'Provision for Loan Losses'];
let analysisSearchQuery = '';

function renderAnalysis(container) {
  const stocks = Object.keys(saAnalysisData);

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>🔬 Stock Analysis (SeekingAlpha Data)</h2>
        <p>งบการเงินรายไตรมาส — ครบถ้วนตาม Sheet JPM SA & JPM SA (Graph)</p>
      </div>
    </div>

    <div class="tab-bar">
      ${stocks.map(s => `
        <button class="tab-btn${s === activeAnalysisStock ? ' active' : ''}"
          onclick="switchAnalysisStock('${s}',this)">${s}</button>
      `).join('')}
    </div>

    <div id="analysis-content"></div>
  `;

  renderAnalysisContent(activeAnalysisStock);
}

function switchAnalysisStock(stock, btn) {
  activeAnalysisStock = stock;
  document.querySelectorAll('.tab-bar .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Set smart default chart metrics per stock
  if (stock === 'JPM' || stock === 'BAC') {
    activeChartMetrics = ['Net Interest Income', 'Revenue', 'Net Income', 'EPS (Diluted)', 'Provision for Loan Losses'];
  } else if (stock === 'AMZN') {
    activeChartMetrics = ['Revenue', 'Gross Profit', 'Operating Income', 'Net Income', 'EPS (Diluted)'];
  } else if (stock === 'NVDA') {
    activeChartMetrics = ['Revenue', 'Gross Profit', 'Operating Income', 'Net Income', 'EPS (Diluted)'];
  } else {
    activeChartMetrics = ['Revenue', 'Gross Profit', 'Operating Income', 'Net Income'];
  }

  renderAnalysisContent(stock);
}

function toggleChartMetric(metric) {
  if (activeChartMetrics.includes(metric)) {
    if (activeChartMetrics.length > 1) {
      activeChartMetrics = activeChartMetrics.filter(m => m !== metric);
    }
  } else {
    if (activeChartMetrics.length < 5) {
      activeChartMetrics.push(metric);
    }
  }
  renderAnalysisChart();
  updateChartPills();
}

function updateChartPills() {
  const stockData = saAnalysisData[activeAnalysisStock];
  if (!stockData) return;
  const availableMetrics = Object.keys(stockData.metrics);

  const pillsContainer = document.getElementById('chart-metric-pills');
  if (!pillsContainer) return;

  pillsContainer.innerHTML = availableMetrics.map(m => {
    const isActive = activeChartMetrics.includes(m);
    return `
      <button class="pill${isActive ? ' active' : ''}" onclick="toggleChartMetric('${m}')">
        ${isActive ? '✓ ' : ''}${m}
      </button>
    `;
  }).join('');
}

function onAnalysisSearch(query) {
  analysisSearchQuery = query.toLowerCase().trim();
  renderAnalysisTable();
}

function renderAnalysisContent(stock) {
  const container = document.getElementById('analysis-content');
  if (!container) return;

  const data = saAnalysisData[stock];
  if (!data) {
    container.innerHTML = '<div class="empty">ไม่มีข้อมูลสำหรับหุ้นนี้</div>';
    return;
  }

  const quarters = data.quarters;

  container.innerHTML = `
    <!-- Top KPI Highlights -->
    <div class="kpi-grid" style="margin-bottom:24px;">
      ${renderSAHighlights(stock, data)}
    </div>

    <!-- Chart Section -->
    <div class="card" style="margin-bottom:24px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:12px;">
        <div>
          <div class="card-title" style="margin-bottom:2px">📊 แนวโน้มรายไตรมาส — ${stock}</div>
          <p style="font-size:12px;color:var(--text-secondary)">คลิกแท็กเพื่อเลือก/ซ่อนตัวชี้วัดบนกราฟ (สูงสุด 5 รายการ)</p>
        </div>
      </div>

      <div class="pill-group" id="chart-metric-pills" style="margin-bottom:16px;"></div>

      <div class="chart-wrap" style="height:320px">
        <canvas id="analysis-chart"></canvas>
      </div>
    </div>

    <!-- Statement Table Section -->
    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:12px;">
        <div>
          <div class="card-title" style="margin-bottom:2px">📋 ตารางงบการเงินรายไตรมาส (20 ไตรมาส)</div>
          <p style="font-size:12px;color:var(--text-secondary)">ข้อมูลย้อนหลัง ${quarters.length} ไตรมาส (SeekingAlpha Data)</p>
        </div>
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" id="sa-search-input" placeholder="ค้นหาตัวชี้วัด (e.g. Revenue, EPS, Dividend)..."
            value="${analysisSearchQuery}" oninput="onAnalysisSearch(this.value)">
        </div>
      </div>

      <div class="table-wrap" style="overflow-x:auto;max-height:550px">
        <div id="sa-table-container"></div>
      </div>
    </div>
  `;

  updateChartPills();
  renderAnalysisChart();
  renderAnalysisTable();
}

function renderSAHighlights(stock, data) {
  const quarters = data.quarters;
  const metrics = data.metrics;
  const latestQ = quarters[0];

  const highlights = [];
  if (metrics['Net Interest Income']) highlights.push({ label: 'Net Interest Income', key: 'Net Interest Income', prefix: '$', suffix: 'M' });
  if (metrics['Revenue']) highlights.push({ label: 'Revenue', key: 'Revenue', prefix: '$', suffix: 'M' });
  if (metrics['Net Income']) highlights.push({ label: 'Net Income', key: 'Net Income', prefix: '$', suffix: 'M' });
  if (metrics['EPS (Diluted)']) highlights.push({ label: 'EPS (Diluted)', key: 'EPS (Diluted)', prefix: '$', suffix: '' });
  if (metrics['Provision for Loan Losses']) highlights.push({ label: 'Provision for Loan Losses', key: 'Provision for Loan Losses', prefix: '$', suffix: 'M' });
  if (metrics['Gross Profit']) highlights.push({ label: 'Gross Profit', key: 'Gross Profit', prefix: '$', suffix: 'M' });
  if (metrics['Operating Income']) highlights.push({ label: 'Operating Income', key: 'Operating Income', prefix: '$', suffix: 'M' });

  // Limit to top 4 cards
  const cards = highlights.slice(0, 4);

  return cards.map(c => {
    const vals = metrics[c.key];
    const latest = vals ? vals[0] : null;
    const prev = vals ? vals[1] : null;
    const change = (latest != null && prev != null && prev !== 0) ? ((latest - prev) / Math.abs(prev) * 100) : null;
    const pos = change != null && change >= 0;

    return `
      <div class="kpi-card">
        <span class="kpi-icon">📈</span>
        <div class="kpi-label">${c.label}</div>
        <div class="kpi-value" style="font-size:24px">
          ${latest != null ? c.prefix + formatNum(latest, c.key.includes('EPS') ? 2 : 0) + c.suffix : '—'}
        </div>
        <div class="kpi-sub" style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
          <span>${latestQ}</span>
          ${change != null ? `
            <span class="${pos ? 'pnl-pos' : 'pnl-neg'}">${pos ? '▲' : '▼'} ${Math.abs(change).toFixed(1)}% QoQ</span>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');
}

function renderAnalysisChart() {
  const canvas = document.getElementById('analysis-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (analysisChart) analysisChart.destroy();

  const data = saAnalysisData[activeAnalysisStock];
  if (!data) return;

  const quarters = data.quarters;
  const numQuarters = Math.min(12, quarters.length);
  const displayQ = quarters.slice(0, numQuarters).reverse();

  const CHART_COLORS = ['#00d4aa', '#0099ff', '#b388ff', '#ffb74d', '#ff4d6d', '#ffd740'];

  const datasets = activeChartMetrics.map((m, i) => {
    const rawVals = data.metrics[m] || [];
    const chartVals = rawVals.slice(0, numQuarters).reverse();
    const color = CHART_COLORS[i % CHART_COLORS.length];
    const isPercent = m.includes('%') || m.includes('YoY') || m.includes('Growth') || m.includes('Rate');

    return {
      label: m,
      data: chartVals,
      borderColor: color,
      backgroundColor: color + '15',
      borderWidth: 2.5,
      pointRadius: 4,
      pointHoverRadius: 7,
      tension: 0.35,
      yAxisID: isPercent ? 'y1' : 'y'
    };
  });

  analysisChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: displayQ,
      datasets: datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { labels: { color: '#8899bb', font: { family: 'Outfit', size: 12 } } },
        tooltip: {
          backgroundColor: '#10172a',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          callbacks: {
            label: ctx => {
              const label = ctx.dataset.label;
              const val = ctx.raw;
              if (val == null) return ` ${label}: —`;
              if (label.includes('%') || label.includes('YoY') || label.includes('Growth') || label.includes('Rate')) {
                return ` ${label}: ${(val * (val < 1 && val > -1 ? 100 : 1)).toFixed(2)}%`;
              }
              if (label.includes('EPS') || label.includes('Dividend')) {
                return ` ${label}: $${formatNum(val, 2)}`;
              }
              return ` ${label}: $${formatNum(val, 0)}M`;
            }
          }
        }
      },
      scales: {
        x: { ticks: { color: '#4a5a80', font: { size: 11 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: { color: '#4a5a80', callback: v => '$' + formatBigNum(v) },
          grid: { color: 'rgba(255,255,255,0.04)' }
        },
        y1: {
          type: 'linear',
          display: datasets.some(d => d.yAxisID === 'y1'),
          position: 'right',
          ticks: { color: '#ffb74d', callback: v => (v * (v < 1 && v > -1 ? 100 : 1)).toFixed(0) + '%' },
          grid: { drawOnChartArea: false }
        }
      }
    }
  });
}

function renderAnalysisTable() {
  const container = document.getElementById('sa-table-container');
  if (!container) return;

  const data = saAnalysisData[activeAnalysisStock];
  if (!data) return;

  const quarters = data.quarters;
  const metricsMap = data.metrics;
  let metricKeys = Object.keys(metricsMap);

  if (analysisSearchQuery) {
    metricKeys = metricKeys.filter(m => m.toLowerCase().includes(analysisSearchQuery));
  }

  if (metricKeys.length === 0) {
    container.innerHTML = '<div class="empty">ไม่พบตัวชี้วัดตรงตามคำค้นหา</div>';
    return;
  }

  const primaryMetrics = [
    'Net Interest Income', 'Revenue', 'Total Non-Interest Income', 'Total Non-Interest Expense',
    'Net Income', 'Net Income to Common', 'EPS (Diluted)', 'Dividend Per Share', 'Gross Profit', 'Operating Income'
  ];

  container.innerHTML = `
    <table class="sa-table">
      <thead>
        <tr>
          <th>Metric (${metricKeys.length})</th>
          ${quarters.map(q => `<th>${q}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${metricKeys.map(m => {
          const vals = metricsMap[m] || [];
          const isPrimary = primaryMetrics.includes(m);
          const isPct = m.includes('%') || m.includes('YoY') || m.includes('Growth') || m.includes('Rate');
          const isEPS = m.includes('EPS') || m.includes('Dividend Per');

          return `
            <tr class="${isPrimary ? 'sa-row-highlight' : ''}">
              <td style="font-weight:${isPrimary ? '700' : '500'}">${m}</td>
              ${quarters.map((_, idx) => {
                const v = vals[idx];
                if (v == null) return '<td class="num" style="color:var(--text-muted)">—</td>';

                if (isPct) {
                  const displayPct = (v < 1 && v > -1 && v !== 0) ? (v * 100) : v;
                  const pos = displayPct >= 0;
                  return `<td class="num ${pos ? 'pnl-pos' : 'pnl-neg'}">${pos ? '+' : ''}${displayPct.toFixed(2)}%</td>`;
                }

                if (isEPS) {
                  return `<td class="num">$${formatNum(v, 2)}</td>`;
                }

                return `<td class="num">${formatNum(v, 0)}</td>`;
              }).join('')}
            </tr>
          `;
        }).join('')}
      </tbody>
    </table>
  `;
}
