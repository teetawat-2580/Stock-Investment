// ─── Price Diff View ──────────────────────────────────────────
let pricediffChart = null;
let priceDiffFilter = 'all';
let priceDiffSearch = '';

function renderPricediff(container) {
  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>⚡ Price Difference (% Change from Yesterday)</h2>
        <p>การเปลี่ยนแปลงของราคาหุ้นเทียบกับวันก่อนหน้าเป็นเปอร์เซ็นต์ (Daily Price Diff %)</p>
      </div>
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" id="pricediff-search-input" placeholder="ค้นหาชื่อหุ้น..."
          value="${priceDiffSearch}" oninput="onPriceDiffSearch(this.value)">
      </div>
    </div>

    <!-- Overview Bar Graph -->
    <div class="card" style="margin-bottom:24px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:10px;">
        <div class="card-title" style="margin-bottom:0;">📊 เปรียบเทียบ % การเปลี่ยนแปลงราคาของแต่ละหุ้น (Daily % Change Graph)</div>
        <div style="display:flex;gap:12px;align-items:center;font-size:12px;">
          <span style="color:var(--green);font-weight:700">● ราคาเพิ่มขึ้น (+)</span>
          <span style="color:var(--red);font-weight:700">● ราคาลดลง (-)</span>
        </div>
      </div>
      <div class="chart-wrap" style="height:280px">
        <canvas id="pricediff-bar-chart"></canvas>
      </div>
    </div>

    <!-- Table Section -->
    <div class="card">
      <div class="card-title" style="margin-bottom:16px;">📋 ตารางเปรียบเทียบราคาหุ้นล่าสุดเทียบวันก่อนหน้า</div>
      <div class="table-wrap">
        <table id="pricediff-table">
          <thead>
            <tr>
              <th>Ticker</th>
              <th>ประเภท / ตลาด</th>
              <th style="text-align:right">ราคาปิดล่าสุด ($)</th>
              <th style="text-align:right">ราคาปิดวันก่อน ($)</th>
              <th style="text-align:right">เปลี่ยนแปลง ($)</th>
              <th style="text-align:right">เปลี่ยนแปลง (%)</th>
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

function onPriceDiffSearch(q) {
  priceDiffSearch = q;
  renderPriceDiffContent();
}

function calculatePriceDiffData() {
  const list = [];
  const defaultStocks = [
    { symbol: 'NVDA',  name: 'NVIDIA Corporation',      type: 'US Stock' },
    { symbol: 'AMZN',  name: 'Amazon.com Inc.',         type: 'US Stock' },
    { symbol: 'JPM',   name: 'JPMorgan Chase & Co.',    type: 'US Stock' },
    { symbol: 'TSLA',  name: 'Tesla Inc.',              type: 'US Stock' },
    { symbol: 'BA',    name: 'Boeing Co.',              type: 'US Stock' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.',           type: 'US Stock' },
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

  defaultStocks.forEach(item => {
    let latest = null;
    let prev = null;

    if (typeof stockPricesData !== 'undefined' && stockPricesData[item.symbol]) {
      const prices = stockPricesData[item.symbol];
      const dates = Object.keys(prices).sort();
      if (dates.length >= 2) {
        latest = prices[dates[dates.length - 1]];
        prev = prices[dates[dates.length - 2]];
      } else if (dates.length === 1) {
        latest = prices[dates[0]];
      }
    }

    // Fallback estimates if historical prices missing
    if (latest == null) {
      if (item.symbol === 'JPM') { latest = 303.50; prev = 298.90; }
      else if (item.symbol === 'AMZN') { latest = 220.40; prev = 218.10; }
      else if (item.symbol === 'NVDA') { latest = 135.20; prev = 129.80; }
      else { latest = 100.00; prev = 98.50; }
    }
    if (prev == null) prev = latest * 0.99;

    const diffDollar = latest - prev;
    const diffPct = (diffDollar / prev) * 100;

    list.push({
      symbol: item.symbol,
      name: item.name,
      type: item.type,
      latest,
      prev,
      diffDollar,
      diffPct
    });
  });

  return list;
}

function renderPriceDiffContent() {
  const data = calculatePriceDiffData();
  const q = priceDiffSearch.trim().toLowerCase();

  const filtered = data.filter(d =>
    !q || d.symbol.toLowerCase().includes(q) || d.name.toLowerCase().includes(q) || d.type.toLowerCase().includes(q)
  );

  // Render Bar Graph
  renderPriceDiffChart(filtered);

  // Render Table
  const tbody = document.getElementById('pricediff-table-body');
  if (!tbody) return;

  if (filtered.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="empty">ไม่พบข้อมูลหุ้นที่ตรงกับการค้นหา</td></tr>`;
    return;
  }

  tbody.innerHTML = filtered.map(d => {
    const isPos = d.diffPct >= 0;
    const badgeClass = isPos ? 'badge-green' : 'badge-red';
    const sign = isPos ? '+' : '';
    const colorStyle = isPos ? 'color:var(--green)' : 'color:var(--red)';

    return `
      <tr>
        <td>
          <strong style="color:var(--text-primary);font-size:14px">${d.symbol}</strong>
          <div style="font-size:11px;color:var(--text-muted)">${d.name}</div>
        </td>
        <td><span class="badge badge-gray">${d.type}</span></td>
        <td style="text-align:right" class="num">$${formatNum(d.latest, 2)}</td>
        <td style="text-align:right" class="num" style="color:var(--text-secondary)">$${formatNum(d.prev, 2)}</td>
        <td style="text-align:right" class="num" style="${colorStyle}">${sign}$${formatNum(d.diffDollar, 2)}</td>
        <td style="text-align:right">
          <span class="badge ${badgeClass}" style="font-size:12px;padding:4px 10px;">
            ${sign}${formatNum(d.diffPct, 2)}%
          </span>
        </td>
        <td style="text-align:center">
          <a href="https://www.tradingview.com/chart/?symbol=${d.symbol}" target="_blank" rel="noopener noreferrer" class="btn-link-action" style="font-size:11px;padding:3px 10px;background:rgba(255,183,77,0.1);color:var(--orange);border-color:rgba(255,183,77,0.3)">
            📈 Chart ↗
          </a>
        </td>
      </tr>
    `;
  }).join('');
}

function renderPriceDiffChart(items) {
  const canvas = document.getElementById('pricediff-bar-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (pricediffChart) pricediffChart.destroy();

  const labels = items.map(i => i.symbol);
  const diffPcts = items.map(i => i.diffPct);
  const colors = items.map(i => (i.diffPct >= 0 ? '#00e676' : '#ff4d6d'));

  pricediffChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: '% Change from Yesterday',
        data: diffPcts,
        backgroundColor: colors,
        borderRadius: 4,
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#10172a',
          borderColor: 'rgba(0,212,170,0.3)',
          borderWidth: 1,
          padding: 10,
          callbacks: {
            label: ctx => {
              const val = ctx.raw;
              const sign = val >= 0 ? '+' : '';
              return ` Daily Price Diff: ${sign}${formatNum(val, 2)}%`;
            }
          }
        }
      },
      scales: {
        x: { ticks: { color: '#8899bb', font: { family: 'Outfit', size: 11 } }, grid: { display: false } },
        y: {
          ticks: { color: '#4a5a80', callback: v => (v >= 0 ? '+' : '') + v + '%' },
          grid: { color: 'rgba(255,255,255,0.04)' }
        }
      }
    }
  });
}
