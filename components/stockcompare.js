// ─── Stock Compare Component (Multi-Stock Performance & Correlation Analysis) ─────────────
let compareChart = null;
let gridCharts = {};
let selectedCompareStocks = ['NVDA', 'AMZN', 'GOOGL', 'JPM', 'QQQM'];
let compareTimeRange = '1Y'; // '1M', '3M', '6M', '1Y', '3Y', '5Y', 'ALL'
let compareMode = 'cumulative'; // 'cumulative', 'rebased', 'grid', 'correlation'
let compareSearch = '';

const COMPARE_STOCK_LIST = [
  { symbol: 'JPM',   name: 'JPMorgan Chase & Co.',    type: 'US Stock', category: 'Financials' },
  { symbol: 'AMZN',  name: 'Amazon.com Inc.',         type: 'US Stock', category: 'Tech/Retail' },
  { symbol: 'NVDA',  name: 'NVIDIA Corporation',      type: 'US Stock', category: 'Semiconductors' },
  { symbol: 'TSLA',  name: 'Tesla Inc.',              type: 'US Stock', category: 'Automotive/EV' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.',           type: 'US Stock', category: 'Tech/Search' },
  { symbol: 'BA',    name: 'Boeing Co.',              type: 'US Stock', category: 'Aerospace' },
  { symbol: 'BAC',   name: 'Bank of America Corp.',   type: 'US Stock', category: 'Financials' },
  { symbol: 'V',     name: 'Visa Inc.',               type: 'US Stock', category: 'Payments' },
  { symbol: 'INTC',  name: 'Intel Corporation',       type: 'US Stock', category: 'Semiconductors' },
  { symbol: 'CRWD',  name: 'CrowdStrike Holdings',   type: 'US Stock', category: 'Cybersecurity' },
  { symbol: 'NEM',   name: 'Newmont Corporation',     type: 'US Stock', category: 'Gold Mining' },
  { symbol: 'RTX',   name: 'RTX Corporation',         type: 'US Stock', category: 'Defense' },
  { symbol: 'LMT',   name: 'Lockheed Martin Corp.',   type: 'US Stock', category: 'Defense' },
  { symbol: 'QQQM',  name: 'Invesco NASDAQ 100 ETF',  type: 'ETF',      category: 'Index ETF' },
  { symbol: 'SLV',   name: 'iShares Silver Trust',    type: 'Commodity',category: 'Commodities' }
];

const COMPARE_COLORS = [
  '#00d4aa', '#0099ff', '#ffb74d', '#b388ff', '#ff4d6d',
  '#00e676', '#ffd740', '#e040fb', '#1de9b6', '#ff9100'
];

// Presets for quick selection
const STOCK_PRESETS = [
  { label: '🚀 Tech & Growth', stocks: ['NVDA', 'AMZN', 'GOOGL', 'TSLA', 'CRWD'] },
  { label: '🏦 Financials & Payments', stocks: ['JPM', 'BAC', 'V'] },
  { label: '🛡️ Defense & Gold', stocks: ['RTX', 'LMT', 'NEM', 'BA'] },
  { label: '⚖️ vs QQQM Benchmark', stocks: ['QQQM', 'NVDA', 'JPM', 'AMZN'] }
];

function renderStockCompare(container) {
  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>⚖️ Stock Comparison &amp; Relationship Analysis</h2>
        <p>เปรียบเทียบกราฟราคา ผลตอบแทนสะสม (%) และความสัมพันธ์ (Correlation Matrix) ระหว่างหุ้นหลายตัวพร้อมกัน</p>
      </div>
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" id="stockcompare-search-input" placeholder="ค้นหาชื่อหุ้น/หมวดหมู่..."
          value="${compareSearch}" oninput="onStockCompareSearch(this.value)">
      </div>
    </div>

    <!-- Stock Selection & Preset Card -->
    <div class="card" style="margin-bottom:20px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:12px;">
        <div>
          <div class="card-title" style="margin-bottom:2px">🎯 เลือกหุ้นสำหรับเปรียบเทียบ (กำลังเลือก ${selectedCompareStocks.length} หุ้น)</div>
          <p style="font-size:12px;color:var(--text-secondary)">คลิกปุ่มเพื่อเลือก/ยกเลิกเลือก หรือเลือกจากหมวดหมู่ด่วน (Presets)</p>
        </div>

        <!-- Time Range Selector Buttons -->
        <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
          <span style="font-size:11px;color:var(--text-muted)">ช่วงเวลา:</span>
          ${['1M','3M','6M','1Y','3Y','5Y','ALL'].map(r => `
            <button class="pill${compareTimeRange === r ? ' active' : ''}" style="font-size:11px;padding:3px 10px;" onclick="setCompareTimeRange('${r}')">${r}</button>
          `).join('')}
        </div>
      </div>

      <!-- Presets -->
      <div style="display:flex;gap:8px;margin-bottom:14px;flex-wrap:wrap;align-items:center;">
        <span style="font-size:11px;color:var(--text-muted);margin-right:2px;">ชุดหุ้นแนะนำ:</span>
        ${STOCK_PRESETS.map(p => `
          <button class="btn-link-action" style="font-size:11.5px;padding:4px 10px;background:rgba(0,153,255,0.08);color:var(--accent-2);border-color:rgba(0,153,255,0.25)"
            onclick="applyStockPreset(['${p.stocks.join("','")}'])">
            ${p.label}
          </button>
        `).join('')}
        <button class="btn-link-action" style="font-size:11.5px;padding:4px 10px;background:rgba(255,255,255,0.05);color:var(--text-secondary);border-color:var(--border)"
          onclick="selectAllCompareStocks()">
          Select All
        </button>
        <button class="btn-link-action" style="font-size:11.5px;padding:4px 10px;background:rgba(255,77,109,0.08);color:var(--red);border-color:rgba(255,77,109,0.25)"
          onclick="clearCompareStocks()">
          Clear
        </button>
      </div>

      <!-- Stock Pills -->
      <div class="pill-group" style="margin-bottom:0">
        ${COMPARE_STOCK_LIST.map(s => {
          const idx = selectedCompareStocks.indexOf(s.symbol);
          const isSelected = idx >= 0;
          const color = isSelected ? COMPARE_COLORS[idx % COMPARE_COLORS.length] : 'var(--text-secondary)';
          return `
            <button class="pill${isSelected ? ' active' : ''}" 
              style="${isSelected ? `background:${color}22;color:${color};border-color:${color};font-weight:700` : ''}"
              onclick="toggleCompareStock('${s.symbol}')">
              ${s.symbol} ${isSelected ? `(#${idx+1})` : ''}
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- KPI Performance Insights Grid -->
    <div id="compare-kpi-grid" class="kpi-grid" style="margin-bottom:20px;"></div>

    <!-- Mode Selector Tab Bar -->
    <div class="tab-bar">
      <button class="tab-btn${compareMode === 'cumulative' ? ' active' : ''}" onclick="setCompareMode('cumulative')">
        📈 Cumulative % Return (Normalized)
      </button>
      <button class="tab-btn${compareMode === 'rebased' ? ' active' : ''}" onclick="setCompareMode('rebased')">
        📊 Rebased Price Index (Base 100)
      </button>
      <button class="tab-btn${compareMode === 'grid' ? ' active' : ''}" onclick="setCompareMode('grid')">
        🔲 Side-by-Side Mini Charts
      </button>
      <button class="tab-btn${compareMode === 'correlation' ? ' active' : ''}" onclick="setCompareMode('correlation')">
        🔗 Correlation Heatmap &amp; Matrix
      </button>
    </div>

    <!-- Dynamic Content Area -->
    <div id="compare-content-area" style="margin-bottom:24px;"></div>

    <!-- Multi-Stock Detailed Metrics Table -->
    <div class="card">
      <div class="card-title" style="margin-bottom:16px;">📋 ตารางเปรียบเทียบสถิติและผลตอบแทนเชิงลึก (Detailed Metrics Table)</div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>หมวดหมู่</th>
              <th style="text-align:right">ราคาล่าสุด ($)</th>
              <th style="text-align:right">ผลตอบแทน ${compareTimeRange} (%)</th>
              <th style="text-align:right">ราคาสูงสุด (${compareTimeRange})</th>
              <th style="text-align:right">ราคาต่ำสุด (${compareTimeRange})</th>
              <th style="text-align:right">Volatility (Std Dev %)</th>
              <th style="text-align:right">Correlation vs QQQM</th>
              <th style="text-align:center">TradingView</th>
            </tr>
          </thead>
          <tbody id="compare-table-body"></tbody>
        </table>
      </div>
    </div>
  `;

  renderCompareAll();
}

function toggleCompareStock(symbol) {
  const idx = selectedCompareStocks.indexOf(symbol);
  if (idx >= 0) {
    if (selectedCompareStocks.length <= 1) {
      alert("ต้องเลือกอย่างน้อย 1 หุ้นเพื่อแสดงการเปรียบเทียบ");
      return;
    }
    selectedCompareStocks.splice(idx, 1);
  } else {
    if (selectedCompareStocks.length >= 10) {
      alert("สามารถเลือกเปรียบเทียบได้สูงสุด 10 หุ้นพร้อมกัน");
      return;
    }
    selectedCompareStocks.push(symbol);
  }
  renderStockCompare(document.getElementById('vp-stockcompare'));
}

function applyStockPreset(stocks) {
  selectedCompareStocks = [...stocks];
  renderStockCompare(document.getElementById('vp-stockcompare'));
}

function selectAllCompareStocks() {
  selectedCompareStocks = COMPARE_STOCK_LIST.map(s => s.symbol);
  renderStockCompare(document.getElementById('vp-stockcompare'));
}

function clearCompareStocks() {
  selectedCompareStocks = ['NVDA', 'AMZN'];
  renderStockCompare(document.getElementById('vp-stockcompare'));
}

function setCompareTimeRange(range) {
  compareTimeRange = range;
  renderStockCompare(document.getElementById('vp-stockcompare'));
}

function setCompareMode(mode) {
  compareMode = mode;
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  renderStockCompare(document.getElementById('vp-stockcompare'));
}

function onStockCompareSearch(q) {
  compareSearch = q;
  renderCompareTable();
}

function getCompareDaysLimit(range) {
  switch (range) {
    case '1M': return 22;
    case '3M': return 65;
    case '6M': return 125;
    case '1Y': return 252;
    case '3Y': return 756;
    case '5Y': return 1254;
    default:   return 1254;
  }
}

function getCommonStockData() {
  if (typeof stockPricesData === 'undefined' || selectedCompareStocks.length === 0) return { dates: [], dataMap: {} };

  const daysLimit = getCompareDaysLimit(compareTimeRange);
  const firstSym = selectedCompareStocks[0];
  const firstPrices = stockPricesData[firstSym] || {};
  let dates = Object.keys(firstPrices).sort();
  if (dates.length > daysLimit) dates = dates.slice(-daysLimit);

  const dataMap = {};
  selectedCompareStocks.forEach(sym => {
    const prices = stockPricesData[sym] || {};
    dataMap[sym] = dates.map(d => prices[d] != null ? prices[d] : null);
  });

  return { dates, dataMap };
}

function renderCompareAll() {
  renderCompareKPIs();
  renderCompareMainArea();
  renderCompareTable();
}

// ── Render KPIs ──────────────────────────────────────
function renderCompareKPIs() {
  const container = document.getElementById('compare-kpi-grid');
  if (!container) return;

  const { dates, dataMap } = getCommonStockData();
  if (dates.length === 0) {
    container.innerHTML = '';
    return;
  }

  const perfList = selectedCompareStocks.map(sym => {
    const arr = dataMap[sym] || [];
    const firstP = arr.find(v => v != null);
    const lastP = arr[arr.length - 1];
    const pct = (firstP && lastP) ? ((lastP - firstP) / firstP * 100) : 0;
    return { symbol: sym, pct, lastP, firstP };
  }).sort((a, b) => b.pct - a.pct);

  const top = perfList[0];
  const worst = perfList[perfList.length - 1];
  const avgReturn = perfList.reduce((acc, p) => acc + p.pct, 0) / perfList.length;

  container.innerHTML = `
    <div class="kpi-card">
      <div class="kpi-label">🏆 Top Performer (${compareTimeRange})</div>
      <div class="kpi-value" style="color:var(--green)">${top ? top.symbol : '—'}</div>
      <div class="kpi-sub" style="color:var(--green);font-weight:700">
        ${top ? (top.pct >= 0 ? '+' : '') + formatNum(top.pct, 2) + '%' : '—'}
      </div>
      <div class="kpi-icon">🚀</div>
    </div>

    <div class="kpi-card">
      <div class="kpi-label">📉 Lowest Performer (${compareTimeRange})</div>
      <div class="kpi-value" style="color:${worst && worst.pct >= 0 ? 'var(--green)' : 'var(--red)'}">${worst ? worst.symbol : '—'}</div>
      <div class="kpi-sub" style="font-weight:700;color:${worst && worst.pct >= 0 ? 'var(--green)' : 'var(--red)'}">
        ${worst ? (worst.pct >= 0 ? '+' : '') + formatNum(worst.pct, 2) + '%' : '—'}
      </div>
      <div class="kpi-icon">📉</div>
    </div>

    <div class="kpi-card">
      <div class="kpi-label">📊 Average Group Return</div>
      <div class="kpi-value">${(avgReturn >= 0 ? '+' : '') + formatNum(avgReturn, 2)}%</div>
      <div class="kpi-sub">เฉลี่ยของ ${selectedCompareStocks.length} หุ้นที่เลือก</div>
      <div class="kpi-icon">⚖️</div>
    </div>

    <div class="kpi-card">
      <div class="kpi-label">📅 Selected Timeframe</div>
      <div class="kpi-value" style="font-size:22px;">${dates[0]} → ${dates[dates.length-1]}</div>
      <div class="kpi-sub">รวม ${dates.length} วันทำการ</div>
      <div class="kpi-icon">🗓️</div>
    </div>
  `;
}

// ── Main Content Area (Chart, Grid, Correlation) ─────
function renderCompareMainArea() {
  const area = document.getElementById('compare-content-area');
  if (!area) return;

  if (compareMode === 'grid') {
    renderSideBySideGrid(area);
  } else if (compareMode === 'correlation') {
    renderCorrelationMatrix(area);
  } else {
    // cumulative or rebased line chart
    area.innerHTML = `
      <div class="card">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
          <div class="card-title" style="margin-bottom:0">
            ${compareMode === 'cumulative' ? '📈 Cumulative Return % Over Time (Starts at 0%)' : '📊 Rebased Stock Price Index (Base = 100)'}
          </div>
          <div style="display:flex;gap:10px;align-items:center;font-size:12px;flex-wrap:wrap;">
            ${selectedCompareStocks.map((sym, i) => `
              <span style="color:${COMPARE_COLORS[i % COMPARE_COLORS.length]};font-weight:700">● ${sym}</span>
            `).join('')}
          </div>
        </div>
        <div class="chart-wrap" style="height:360px">
          <canvas id="compare-main-canvas"></canvas>
        </div>
      </div>
    `;
    renderMainLineChart();
  }
}

// ── Render Main Line Chart (% Cumulative or Base 100) 
function renderMainLineChart() {
  const canvas = document.getElementById('compare-main-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (compareChart) compareChart.destroy();

  const { dates, dataMap } = getCommonStockData();
  if (dates.length === 0) return;

  const datasets = selectedCompareStocks.map((symbol, i) => {
    const prices = dataMap[symbol] || [];
    const firstValidPrice = prices.find(p => p != null && p > 0) || 1;

    const dataPoints = prices.map(p => {
      if (p == null) return null;
      if (compareMode === 'cumulative') {
        return roundNum(((p - firstValidPrice) / firstValidPrice) * 100, 2);
      } else {
        // Rebased 100
        return roundNum((p / firstValidPrice) * 100, 2);
      }
    });

    const color = COMPARE_COLORS[i % COMPARE_COLORS.length];

    return {
      label: symbol,
      data: dataPoints,
      borderColor: color,
      backgroundColor: color,
      borderWidth: 2.2,
      pointRadius: dates.length > 100 ? 0 : 2,
      pointHoverRadius: 6,
      tension: 0.25,
      fill: false
    };
  });

  compareChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates.map(d => formatDate(d)),
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
          borderColor: 'rgba(0,212,170,0.3)',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            title: ctx => `📅 ${ctx[0].label}`,
            label: ctx => {
              const sym = ctx.dataset.label;
              const val = ctx.raw;
              const idx = ctx.dataIndex;
              const origPrice = dataMap[sym] ? dataMap[sym][idx] : null;
              const pStr = origPrice != null ? ` ($${formatNum(origPrice, 2)})` : '';
              if (compareMode === 'cumulative') {
                const sign = val >= 0 ? '+' : '';
                return ` ${sym}: ${sign}${val}% return${pStr}`;
              } else {
                return ` ${sym}: ${val} pts (Index Base 100)${pStr}`;
              }
            }
          }
        }
      },
      scales: {
        x: { ticks: { color: '#4a5a80', font: { size: 10 }, maxTicksLimit: 14 }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: {
          ticks: {
            color: '#4a5a80',
            callback: v => compareMode === 'cumulative' ? ((v >= 0 ? '+' : '') + v + '%') : (v + ' pts')
          },
          grid: { color: 'rgba(255,255,255,0.04)' }
        }
      }
    }
  });
}

// ── Render Side-by-Side Mini Charts Grid ─────────────
function renderSideBySideGrid(container) {
  const { dates, dataMap } = getCommonStockData();
  if (dates.length === 0) return;

  container.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(320px, 1fr));gap:16px;">
      ${selectedCompareStocks.map((symbol, i) => {
        const prices = dataMap[symbol] || [];
        const validPrices = prices.filter(p => p != null);
        const firstP = validPrices[0] || 0;
        const lastP = validPrices[validPrices.length - 1] || 0;
        const pct = firstP > 0 ? ((lastP - firstP) / firstP * 100) : 0;
        const isPos = pct >= 0;
        const color = COMPARE_COLORS[i % COMPARE_COLORS.length];

        return `
          <div class="card" style="padding:16px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <div>
                <strong style="font-size:16px;color:${color}">${symbol}</strong>
                <span class="badge ${isPos ? 'badge-green' : 'badge-red'}" style="margin-left:6px;">
                  ${isPos ? '+' : ''}${formatNum(pct, 2)}%
                </span>
              </div>
              <div style="font-weight:700;font-size:15px;" class="num">$${formatNum(lastP, 2)}</div>
            </div>
            <div class="chart-wrap" style="height:170px;">
              <canvas id="grid-canvas-${symbol}"></canvas>
            </div>
          </div>
        `;
      }).join('')}
    </div>
  `;

  // Destroy previous grid charts
  Object.keys(gridCharts).forEach(k => {
    if (gridCharts[k]) gridCharts[k].destroy();
  });
  gridCharts = {};

  // Render individual mini line chart for each stock
  selectedCompareStocks.forEach((symbol, i) => {
    const canvas = document.getElementById(`grid-canvas-${symbol}`);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const prices = dataMap[symbol] || [];
    const color = COMPARE_COLORS[i % COMPARE_COLORS.length];

    gridCharts[symbol] = new Chart(ctx, {
      type: 'line',
      data: {
        labels: dates.map(d => formatDate(d)),
        datasets: [{
          label: symbol,
          data: prices,
          borderColor: color,
          backgroundColor: color + '15',
          borderWidth: 2,
          pointRadius: 0,
          pointHoverRadius: 5,
          tension: 0.2,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: ctx => `${symbol}: $${formatNum(ctx.raw, 2)}`
            }
          }
        },
        scales: {
          x: { display: false },
          y: { ticks: { color: '#4a5a80', font: { size: 9 } }, grid: { color: 'rgba(255,255,255,0.03)' } }
        }
      }
    });
  });
}

// ── Render Pearson Correlation Matrix ───────────────
function renderCorrelationMatrix(container) {
  const { dates, dataMap } = getCommonStockData();
  const stocks = selectedCompareStocks;

  if (stocks.length < 2) {
    container.innerHTML = `
      <div class="card empty">
        ⚠️ กรุณาเลือกอย่างน้อย 2 หุ้นเพื่อคำนวณ Correlation Matrix
      </div>
    `;
    return;
  }

  // Calculate daily returns array for each stock
  const returnsMap = {};
  stocks.forEach(sym => {
    const prices = dataMap[sym] || [];
    const returns = [];
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] != null && prices[i-1] != null && prices[i-1] > 0) {
        returns.push((prices[i] - prices[i-1]) / prices[i-1]);
      } else {
        returns.push(0);
      }
    }
    returnsMap[sym] = returns;
  });

  // Calculate Pearson correlation between stock A and B
  function calcCorrelation(arrA, arrB) {
    const n = Math.min(arrA.length, arrB.length);
    if (n === 0) return 0;
    const meanA = arrA.reduce((a, b) => a + b, 0) / n;
    const meanB = arrB.reduce((a, b) => a + b, 0) / n;

    let num = 0, denA = 0, denB = 0;
    for (let i = 0; i < n; i++) {
      const diffA = arrA[i] - meanA;
      const diffB = arrB[i] - meanB;
      num += diffA * diffB;
      denA += diffA * diffA;
      denB += diffB * diffB;
    }
    if (denA === 0 || denB === 0) return 0;
    return num / (Math.sqrt(denA) * Math.sqrt(denB));
  }

  // Build matrix
  const matrix = {};
  let maxCorrPair = { a: '', b: '', val: -1 };
  let minCorrPair = { a: '', b: '', val: 2 };

  stocks.forEach(s1 => {
    matrix[s1] = {};
    stocks.forEach(s2 => {
      if (s1 === s2) {
        matrix[s1][s2] = 1.0;
      } else {
        const r = calcCorrelation(returnsMap[s1], returnsMap[s2]);
        matrix[s1][s2] = r;

        // track pairs (avoid duplicates)
        if (s1 < s2) {
          if (r > maxCorrPair.val) maxCorrPair = { a: s1, b: s2, val: r };
          if (r < minCorrPair.val) minCorrPair = { a: s1, b: s2, val: r };
        }
      }
    });
  });

  // Cell style helper
  function getCorrBadge(r, isSelf) {
    if (isSelf) return `<span class="badge badge-gray" style="font-weight:700">1.00</span>`;
    const formatted = (r >= 0 ? '+' : '') + formatNum(r, 2);
    if (r >= 0.70) return `<span class="badge badge-green" style="font-size:12px;padding:4px 9px;">${formatted} 🔥</span>`;
    if (r >= 0.30) return `<span class="badge badge-blue" style="font-size:12px;padding:4px 9px;">${formatted}</span>`;
    if (r >= -0.30) return `<span class="badge badge-yellow" style="font-size:12px;padding:4px 9px;">${formatted} ⚖️</span>`;
    return `<span class="badge badge-red" style="font-size:12px;padding:4px 9px;">${formatted} ❄️</span>`;
  }

  container.innerHTML = `
    <div class="card" style="margin-bottom:16px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:12px;">
        <div>
          <div class="card-title" style="margin-bottom:2px">🔗 Correlation Heatmap (ค่าความสัมพันธ์ของราคาหุ้น)</div>
          <p style="font-size:12px;color:var(--text-secondary)">
            คำนวณจาก Pearson Correlation Coefficient ($r$) ของผลตอบแทนรายวันในช่วงเวลา <strong>${compareTimeRange}</strong>
          </p>
        </div>

        <div style="display:flex;gap:8px;font-size:11px;flex-wrap:wrap;">
          <span class="badge badge-green">High Corr (&ge; +0.70)</span>
          <span class="badge badge-blue">Mod Corr (+0.30 to +0.69)</span>
          <span class="badge badge-yellow">Uncorrelated (-0.29 to +0.29)</span>
          <span class="badge badge-red">Inverse (&le; -0.30)</span>
        </div>
      </div>

      <!-- Highlights -->
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px;">
        <div style="background:rgba(0,230,118,0.06);border:1px solid rgba(0,230,118,0.2);border-radius:var(--radius-sm);padding:12px;">
          <div style="font-size:11px;color:var(--green);font-weight:700;text-transform:uppercase">🔥 Most Correlated Pair (เคลื่อนไหวทิศทางเดียวกันมากที่สุด)</div>
          <div style="font-size:16px;font-weight:800;margin-top:4px;">
            ${maxCorrPair.a || '—'} ↔ ${maxCorrPair.b || '—'} : <span style="color:var(--green)">+${formatNum(maxCorrPair.val, 2)}</span>
          </div>
        </div>

        <div style="background:rgba(255,215,64,0.06);border:1px solid rgba(255,215,64,0.2);border-radius:var(--radius-sm);padding:12px;">
          <div style="font-size:11px;color:var(--yellow);font-weight:700;text-transform:uppercase">⚖️ Best Diversification Pair (ช่วยกระจายความเสี่ยงพอร์ตได้ดีที่สุด)</div>
          <div style="font-size:16px;font-weight:800;margin-top:4px;">
            ${minCorrPair.a || '—'} ↔ ${minCorrPair.b || '—'} : <span style="color:var(--yellow)">${formatNum(minCorrPair.val, 2)}</span>
          </div>
        </div>
      </div>

      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Stock</th>
              ${stocks.map(s => `<th style="text-align:center">${s}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${stocks.map(s1 => `
              <tr>
                <td><strong style="color:var(--text-primary);font-size:14px">${s1}</strong></td>
                ${stocks.map(s2 => `
                  <td style="text-align:center">
                    ${getCorrBadge(matrix[s1][s2], s1 === s2)}
                  </td>
                `).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ── Render Detailed Metrics Table ────────────────────
function renderCompareTable() {
  const tbody = document.getElementById('compare-table-body');
  if (!tbody) return;

  const q = compareSearch.trim().toLowerCase();
  const filtered = COMPARE_STOCK_LIST.filter(s =>
    !q || s.symbol.toLowerCase().includes(q) || s.name.toLowerCase().includes(q) || s.category.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="9" class="empty">ไม่พบข้อมูลหุ้นที่ตรงกับการค้นหา</td></tr>`;
    return;
  }

  const { dates, dataMap } = getCommonStockData();
  const qqqmPrices = (typeof stockPricesData !== 'undefined' && stockPricesData['QQQM']) ? stockPricesData['QQQM'] : null;

  tbody.innerHTML = filtered.map(s => {
    const pricesObj = (typeof stockPricesData !== 'undefined' && stockPricesData[s.symbol]) ? stockPricesData[s.symbol] : null;
    let latest = null, firstPeriodP = null, maxP = null, minP = null, volPct = null, corrQQQM = null;

    if (pricesObj) {
      const stockDates = Object.keys(pricesObj).sort();
      const limit = getCompareDaysLimit(compareTimeRange);
      const periodDates = stockDates.length > limit ? stockDates.slice(-limit) : stockDates;

      if (periodDates.length > 0) {
        latest = pricesObj[periodDates[periodDates.length - 1]];
        firstPeriodP = pricesObj[periodDates[0]];

        const periodPrices = periodDates.map(d => pricesObj[d]).filter(v => v != null);
        if (periodPrices.length > 0) {
          maxP = Math.max(...periodPrices);
          minP = Math.min(...periodPrices);

          // Daily returns volatility
          const dailyReturns = [];
          for (let i = 1; i < periodPrices.length; i++) {
            dailyReturns.push((periodPrices[i] - periodPrices[i-1]) / periodPrices[i-1]);
          }
          if (dailyReturns.length > 0) {
            const mean = dailyReturns.reduce((a, b) => a + b, 0) / dailyReturns.length;
            const variance = dailyReturns.reduce((a, b) => a + Math.pow(b - mean, 2), 0) / dailyReturns.length;
            volPct = Math.sqrt(variance) * 100;
          }
        }
      }
    }

    const retPct = (latest != null && firstPeriodP != null && firstPeriodP > 0)
      ? ((latest - firstPeriodP) / firstPeriodP * 100) : null;

    const fmtBadge = (pct) => {
      if (pct == null) return '<span style="color:var(--text-muted)">—</span>';
      const isPos = pct >= 0;
      const bClass = isPos ? 'badge-green' : 'badge-red';
      const sign = isPos ? '+' : '';
      return `<span class="badge ${bClass}" style="font-size:12px;padding:3px 8px;">${sign}${formatNum(pct, 2)}%</span>`;
    };

    return `
      <tr>
        <td>
          <strong style="color:var(--text-primary);font-size:14px">${s.symbol}</strong>
          <div style="font-size:11px;color:var(--text-muted)">${s.name}</div>
        </td>
        <td><span class="badge badge-blue">${s.category}</span></td>
        <td style="text-align:right" class="num">${latest ? '$' + formatNum(latest, 2) : '—'}</td>
        <td style="text-align:right">${fmtBadge(retPct)}</td>
        <td style="text-align:right" class="num">${maxP ? '$' + formatNum(maxP, 2) : '—'}</td>
        <td style="text-align:right" class="num">${minP ? '$' + formatNum(minP, 2) : '—'}</td>
        <td style="text-align:right" class="num">${volPct != null ? formatNum(volPct, 2) + '%' : '—'}</td>
        <td style="text-align:right">
          <span class="badge badge-purple">${s.symbol === 'QQQM' ? '1.00 (Benchmark)' : 'Active'}</span>
        </td>
        <td style="text-align:center">
          <a href="https://www.tradingview.com/chart/?symbol=${s.symbol}" target="_blank" rel="noopener noreferrer"
            class="btn-link-action" style="font-size:11px;padding:3px 10px;background:rgba(255,183,77,0.1);color:var(--orange);border-color:rgba(255,183,77,0.3)">
            📈 Chart ↗
          </a>
        </td>
      </tr>
    `;
  }).join('');
}
