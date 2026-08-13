// ─── Price Diff View (5Y Multi-Stock % Performance) ─────────────
let pricediffChart = null;
let selectedDiffStocks = ['JPM', 'AMZN', 'NVDA', 'TSLA', 'GOOGL'];
let pricediffTimeRange = '1Y'; // '1M', '3M', '6M', '1Y', '3Y', '5Y', 'ALL'
let priceDiffSearch = '';

const ALL_DIFF_STOCKS = [
  { symbol: 'JPM',   name: 'JPMorgan Chase & Co.',    type: 'US Stock' },
  { symbol: 'AMZN',  name: 'Amazon.com Inc.',         type: 'US Stock' },
  { symbol: 'NVDA',  name: 'NVIDIA Corporation',      type: 'US Stock' },
  { symbol: 'TSLA',  name: 'Tesla Inc.',              type: 'US Stock' },
  { symbol: 'GOOGL', name: 'Alphabet Inc.',           type: 'US Stock' },
  { symbol: 'BA',    name: 'Boeing Co.',              type: 'US Stock' },
  { symbol: 'BAC',   name: 'Bank of America Corp.',   type: 'US Stock' },
  { symbol: 'V',     name: 'Visa Inc.',               type: 'US Stock' },
  { symbol: 'INTC',  name: 'Intel Corporation',       type: 'US Stock' },
  { symbol: 'CRWD',  name: 'CrowdStrike Holdings',   type: 'US Stock' },
  { symbol: 'NEM',   name: 'Newmont Corporation',     type: 'US Stock' },
  { symbol: 'RTX',   name: 'RTX Corporation',         type: 'US Stock' },
  { symbol: 'LMT',   name: 'Lockheed Martin Corp.',   type: 'US Stock' },
  { symbol: 'QQQM',  name: 'Invesco NASDAQ 100 ETF',  type: 'ETF' },
  { symbol: 'SLV',   name: 'iShares Silver Trust',    type: 'Commodity ETF' }
];

const STOCK_LINE_COLORS = ['#00d4aa', '#0099ff', '#ffb74d', '#b388ff', '#ff4d6d'];

function renderPricediff(container) {
  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>⚡ Price Difference &amp; Historical % Return</h2>
        <p>เปรียบเทียบผลตอบแทนสะสม (%) ของหุ้นสูงสุด 5 ตัวพร้อมกัน ย้อนหลังได้สูงสุด 5 ปี (5Y Performance)</p>
      </div>
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" id="pricediff-search-input" placeholder="ค้นหาชื่อหุ้น..."
          value="${priceDiffSearch}" oninput="onPriceDiffSearch(this.value)">
      </div>
    </div>

    <!-- Multi-Stock Selector & Time Range Card -->
    <div class="card" style="margin-bottom:20px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:12px;">
        <div>
          <div class="card-title" style="margin-bottom:2px">🎯 เลือกหุ้นเปรียบเทียบบนกราฟ (สูงสุด 5 หุ้นพร้อมกัน)</div>
          <p style="font-size:12px;color:var(--text-secondary)">คลิกหุ้นที่ต้องการเลือก/ยกเลิกเลือก (กำลังเลือก ${selectedDiffStocks.length}/5 หุ้น)</p>
        </div>

        <!-- Time Range Selector Buttons -->
        <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
          <span style="font-size:11px;color:var(--text-muted)">ช่วงเวลา:</span>
          <button class="pill${pricediffTimeRange === '1M' ? ' active' : ''}" style="font-size:11px;padding:3px 10px;" onclick="setTimeDiffRange('1M')">1M</button>
          <button class="pill${pricediffTimeRange === '3M' ? ' active' : ''}" style="font-size:11px;padding:3px 10px;" onclick="setTimeDiffRange('3M')">3M</button>
          <button class="pill${pricediffTimeRange === '6M' ? ' active' : ''}" style="font-size:11px;padding:3px 10px;" onclick="setTimeDiffRange('6M')">6M</button>
          <button class="pill${pricediffTimeRange === '1Y' ? ' active' : ''}" style="font-size:11px;padding:3px 10px;" onclick="setTimeDiffRange('1Y')">1Y</button>
          <button class="pill${pricediffTimeRange === '3Y' ? ' active' : ''}" style="font-size:11px;padding:3px 10px;" onclick="setTimeDiffRange('3Y')">3Y</button>
          <button class="pill${pricediffTimeRange === '5Y' ? ' active' : ''}" style="font-size:11px;padding:3px 10px;" onclick="setTimeDiffRange('5Y')">5Y</button>
          <button class="pill${pricediffTimeRange === 'ALL' ? ' active' : ''}" style="font-size:11px;padding:3px 10px;" onclick="setTimeDiffRange('ALL')">ALL</button>
        </div>
      </div>

      <!-- Stock Selector Pills -->
      <div class="pill-group" style="margin-bottom:0">
        ${ALL_DIFF_STOCKS.map(s => {
          const idx = selectedDiffStocks.indexOf(s.symbol);
          const isSelected = idx >= 0;
          const color = isSelected ? STOCK_LINE_COLORS[idx % STOCK_LINE_COLORS.length] : 'var(--text-secondary)';
          return `
            <button class="pill${isSelected ? ' active' : ''}" 
              style="${isSelected ? `background:${color}22;color:${color};border-color:${color};font-weight:700` : ''}"
              onclick="toggleDiffStock('${s.symbol}')">
              ${s.symbol} ${isSelected ? `(#${idx+1})` : ''}
            </button>
          `;
        }).join('')}
      </div>
    </div>

    <!-- Multi-Line Graph with Markers -->
    <div class="card" style="margin-bottom:24px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px;">
        <div class="card-title" style="margin-bottom:0">📈 กราฟเปรียบเทียบผลตอบแทนสะสม % Over Time (Line Chart with Markers)</div>
        <div style="display:flex;gap:12px;align-items:center;font-size:12px;">
          ${selectedDiffStocks.map((sym, i) => `
            <span style="color:${STOCK_LINE_COLORS[i]};font-weight:700">● ${sym}</span>
          `).join('')}
        </div>
      </div>
      <div class="chart-wrap" style="height:320px">
        <canvas id="pricediff-line-chart"></canvas>
      </div>
    </div>

    <!-- Multi-Timeframe Diff Table -->
    <div class="card">
      <div class="card-title" style="margin-bottom:16px;">📋 ตารางเปรียบเทียบการเปลี่ยนแปลงราคาหลายช่วงเวลา (1D, 1M, 1Y, 5Y % Change)</div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Ticker</th>
              <th>ประเภท</th>
              <th style="text-align:right">ราคาปิดล่าสุด ($)</th>
              <th style="text-align:right">1-Day Change (%)</th>
              <th style="text-align:right">1-Month Change (%)</th>
              <th style="text-align:right">1-Year Change (%)</th>
              <th style="text-align:right">5-Year Change (%)</th>
              <th style="text-align:center">TradingView</th>
            </tr>
          </thead>
          <tbody id="pricediff-table-body"></tbody>
        </table>
      </div>
    </div>
  `;

  renderPriceDiffContent();
}

function toggleDiffStock(symbol) {
  const idx = selectedDiffStocks.indexOf(symbol);
  if (idx >= 0) {
    if (selectedDiffStocks.length <= 1) {
      alert("ต้องเลือกอย่างน้อย 1 หุ้นเพื่อแสดงบนกราฟ");
      return;
    }
    selectedDiffStocks.splice(idx, 1);
  } else {
    if (selectedDiffStocks.length >= 5) {
      alert("คุณสามารถเลือกเปรียบเทียบได้สูงสุด 5 หุ้นพร้อมกัน");
      return;
    }
    selectedDiffStocks.push(symbol);
  }
  renderPricediff(document.getElementById('vp-pricediff'));
}

function setTimeDiffRange(range) {
  pricediffTimeRange = range;
  renderPricediff(document.getElementById('vp-pricediff'));
}

function onPriceDiffSearch(q) {
  priceDiffSearch = q;
  renderPriceDiffContent();
}

function getDaysForRange(range) {
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

function renderPriceDiffContent() {
  const q = priceDiffSearch.trim().toLowerCase();

  // 1. Render Multi-Line Chart
  renderMultiLineChart();

  // 2. Render Multi-Timeframe Table
  const tbody = document.getElementById('pricediff-table-body');
  if (!tbody) return;

  const filtered = ALL_DIFF_STOCKS.filter(s =>
    !q || s.symbol.toLowerCase().includes(q) || s.name.toLowerCase().includes(q) || s.type.toLowerCase().includes(q)
  );

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="empty">ไม่พบข้อมูลหุ้นที่ตรงกับการค้นหา</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(s => {
    const pricesObj = (typeof stockPricesData !== 'undefined' && stockPricesData[s.symbol]) ? stockPricesData[s.symbol] : null;
    let latest = null, p1d = null, p1m = null, p1y = null, p5y = null;

    if (pricesObj) {
      const dates = Object.keys(pricesObj).sort();
      const n = dates.length;
      if (n > 0) latest = pricesObj[dates[n - 1]];
      if (n >= 2) p1d = pricesObj[dates[n - 2]];
      if (n >= 22) p1m = pricesObj[dates[n - 22]];
      if (n >= 252) p1y = pricesObj[dates[n - 252]];
      if (n >= 1000) p5y = pricesObj[dates[0]];
    }

    const calcPct = (cur, base) => (cur != null && base != null && base > 0) ? ((cur - base) / base * 100) : null;

    const pct1d = calcPct(latest, p1d);
    const pct1m = calcPct(latest, p1m);
    const pct1y = calcPct(latest, p1y);
    const pct5y = calcPct(latest, p5y);

    const fmtBadge = (pct) => {
      if (pct == null) return '<span style="color:var(--text-muted)">—</span>';
      const isPos = pct >= 0;
      const bClass = isPos ? 'badge-green' : 'badge-red';
      const sign = isPos ? '+' : '';
      return `<span class="badge ${bClass}" style="font-size:11.5px;padding:3px 8px;">${sign}${formatNum(pct, 2)}%</span>`;
    };

    return `
      <tr>
        <td>
          <strong style="color:var(--text-primary);font-size:14px">${s.symbol}</strong>
          <div style="font-size:11px;color:var(--text-muted)">${s.name}</div>
        </td>
        <td><span class="badge badge-gray">${s.type}</span></td>
        <td style="text-align:right" class="num">${latest ? '$' + formatNum(latest, 2) : '—'}</td>
        <td style="text-align:right">${fmtBadge(pct1d)}</td>
        <td style="text-align:right">${fmtBadge(pct1m)}</td>
        <td style="text-align:right">${fmtBadge(pct1y)}</td>
        <td style="text-align:right">${fmtBadge(pct5y)}</td>
        <td style="text-align:center">
          <a href="https://www.tradingview.com/chart/?symbol=${s.symbol}" target="_blank" rel="noopener noreferrer" class="btn-link-action" style="font-size:11px;padding:3px 10px;background:rgba(255,183,77,0.1);color:var(--orange);border-color:rgba(255,183,77,0.3)">
            📈 Chart ↗
          </a>
        </td>
      </tr>
    `;
  }).join('');
}

function renderMultiLineChart() {
  const canvas = document.getElementById('pricediff-line-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (pricediffChart) pricediffChart.destroy();

  if (selectedDiffStocks.length === 0 || typeof stockPricesData === 'undefined') {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  // Find baseline common dates for selected stocks
  const daysLimit = getDaysForRange(pricediffTimeRange);
  const firstStock = selectedDiffStocks[0];
  const firstPrices = stockPricesData[firstStock] || {};
  let allDates = Object.keys(firstPrices).sort();
  if (allDates.length > daysLimit) {
    allDates = allDates.slice(-daysLimit);
  }

  // Build datasets normalized to % change baseline
  const datasets = selectedDiffStocks.map((symbol, i) => {
    const prices = stockPricesData[symbol] || {};
    const stockDates = Object.keys(prices).sort();
    
    // Find initial baseline price for the selected period
    let basePrice = null;
    allDates.forEach(d => {
      if (basePrice == null && prices[d] != null) {
        basePrice = prices[d];
      }
    });

    const dataPoints = allDates.map(d => {
      const p = prices[d];
      if (p == null || basePrice == null || basePrice === 0) return null;
      return roundNum(((p - basePrice) / basePrice) * 100, 2);
    });

    const color = STOCK_LINE_COLORS[i % STOCK_LINE_COLORS.length];

    return {
      label: symbol,
      data: dataPoints,
      borderColor: color,
      backgroundColor: color,
      borderWidth: 2.5,
      pointRadius: 2.5,
      pointHoverRadius: 6,
      tension: 0.2,
      fill: false
    };
  });

  pricediffChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: allDates.map(d => formatDate(d)),
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
              const sign = val >= 0 ? '+' : '';
              return ` ${sym}: ${sign}${val}% return`;
            }
          }
        }
      },
      scales: {
        x: { ticks: { color: '#4a5a80', font: { size: 10 }, maxTicksLimit: 14 }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: {
          ticks: { color: '#4a5a80', callback: v => (v >= 0 ? '+' : '') + v + '%' },
          grid: { color: 'rgba(255,255,255,0.04)' }
        }
      }
    }
  });
}

function roundNum(n, decimals = 2) {
  if (n == null) return null;
  return Number(Math.round(n + 'e' + decimals) + 'e-' + decimals);
}
