// ─── Events View ─────────────────────────────────────────────
let activeEventSubTab = 'calendar';
let activeEventStock = 'JPM';
let activeLinkStock = 'all';
let linkSearchQuery = '';
let editingEventId = null;
let eventPriceChart = null;

let chartZoomRange = '3M'; // '1M', '3M', '6M', 'ALL', or custom number of days
let customZoomDays = null;
let selectedNewsDate = null;

const DEFAULT_EVENT_STOCKS = ['JPM', 'AMZN', 'NVDA', 'TSLA', 'BA', 'GOOGL', 'BAC', 'V', 'INTC', 'CRWD', 'NEM', 'RTX', 'LMT'];

function getUserEventStocks() {
  try {
    const saved = localStorage.getItem('event_user_stocks');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return [...DEFAULT_EVENT_STOCKS];
}

function setUserEventStocks(stocks) {
  try {
    localStorage.setItem('event_user_stocks', JSON.stringify(stocks));
  } catch (e) {}
}

function getCustomEvents() {
  try {
    const saved = localStorage.getItem('custom_user_events');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) {}
  return [];
}

function saveCustomEvents(events) {
  try {
    localStorage.setItem('custom_user_events', JSON.stringify(events));
  } catch (e) {}
}

function renderEvents(container) {
  const userStocks = getUserEventStocks();
  if (activeEventStock !== 'all' && !userStocks.includes(activeEventStock)) {
    activeEventStock = userStocks[0] || 'JPM';
  }

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>📅 Events & News Timeline</h2>
        <p>เหตุการณ์สำคัญ ข่าวสารพร้อมกราฟราคาหุ้น (News-Correlated Stock Price Graph &amp; Zoom)</p>
      </div>
      <div style="display:flex;gap:10px;align-items:center;">
        <button class="pill active" style="background:var(--accent-grad);color:#000;font-weight:700" onclick="promptAddEventStock()">
          ➕ Add Stock
        </button>
        <button class="pill active" style="background:rgba(0,212,170,0.15);color:var(--accent-1);border-color:var(--accent-1)" onclick="toggleEventNoteForm()">
          ✏️ + บันทึกส่วนตัว (Add Note)
        </button>
      </div>
    </div>

    <!-- Personal Note Input Form (Hidden by default) -->
    <div id="event-note-form-card" class="card" style="display:none;margin-bottom:20px;border-color:var(--accent-1)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <div class="card-title" id="event-form-title" style="margin-bottom:0;color:var(--accent-1)">➕ เพิ่มบันทึกเหตุการณ์ส่วนตัว</div>
        <button class="pill" style="font-size:11px;padding:2px 10px;" onclick="toggleEventNoteForm(false)">✕ ปิด</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px;">
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">ชื่อหุ้น (Ticker):</label>
          <input type="text" id="note-stock-input" placeholder="e.g. JPM, TSLA, NVDA" class="search-box" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">วันที่ (Date):</label>
          <input type="date" id="note-date-input" class="search-box" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">ประเภท (Type):</label>
          <select id="note-type-input" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-family:inherit;">
            <option value="NOTE">NOTE (บันทึกส่วนตัว)</option>
            <option value="NEWS">NEWS (ข่าวสาร)</option>
          </select>
        </div>
      </div>
      <div style="margin-bottom:12px;">
        <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">หัวข้อเหตุการณ์ (Event Title):</label>
        <input type="text" id="note-title-input" placeholder="e.g. ประกาศงบการเงิน Q2, ดอกเบี้ย FED, จุดเข้าซื้อสำคัญ" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
      </div>
      <div style="margin-bottom:14px;">
        <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">หมายเหตุเพิ่มเติม (Remarks / URL):</label>
        <input type="text" id="note-remark-input" placeholder="e.g. แนวรับ 180$, Link หรือรายละเอียดข่าว..." style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
      </div>
      <div style="display:flex;gap:10px;justify-content:flex-end;">
        <button class="pill" onclick="toggleEventNoteForm(false)">ยกเลิก</button>
        <button class="pill active" style="background:var(--accent-1);color:#000;font-weight:700" onclick="saveEventNote()">
          💾 บันทึกข้อมูล
        </button>
      </div>
    </div>

    <div class="tab-bar" style="margin-bottom:20px;">
      <button class="tab-btn${activeEventSubTab === 'calendar' ? ' active' : ''}" onclick="switchEventSubTab('calendar', this)">
        📅 News & Events Timeline
      </button>
      <button class="tab-btn${activeEventSubTab === 'links' ? ' active' : ''}" onclick="switchEventSubTab('links', this)">
        🔗 Sheet EVENT Link & TradingView
      </button>
    </div>

    <div id="events-subtab-container"></div>
  `;

  renderEventSubTabContent();
}

function promptAddEventStock() {
  const symbol = prompt("กรอกชื่อหุ้นที่ต้องการเพิ่มเข้า Event Filter (e.g. AAPL, MSFT, META):");
  if (!symbol) return;
  const cleanSym = symbol.trim().toUpperCase();
  if (!cleanSym) return;

  const userStocks = getUserEventStocks();
  if (!userStocks.includes(cleanSym)) {
    userStocks.push(cleanSym);
    setUserEventStocks(userStocks);
  }
  activeEventStock = cleanSym;
  selectedNewsDate = null;
  renderEvents(document.getElementById('vp-events'));
}

function removeActiveEventStock() {
  const userStocks = getUserEventStocks();
  if (userStocks.length <= 1) {
    alert("ต้องมีอย่างน้อย 1 หุ้นในรายการ");
    return;
  }

  if (confirm(`คุณต้องการลบ ${activeEventStock} ออกจาก Filter หรือไม่?`)) {
    const updated = userStocks.filter(s => s !== activeEventStock);
    setUserEventStocks(updated);
    activeEventStock = updated[0] || 'all';
    selectedNewsDate = null;
    renderEvents(document.getElementById('vp-events'));
  }
}

function switchEventSubTab(tab, btn) {
  activeEventSubTab = tab;
  document.querySelectorAll('.tab-bar .tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderEventSubTabContent();
}

function renderEventSubTabContent() {
  const container = document.getElementById('events-subtab-container');
  if (!container) return;

  if (activeEventSubTab === 'calendar') {
    renderCalendarSubTab(container);
  } else {
    renderLinksSubTab(container);
  }
}

function toggleEventNoteForm(show) {
  const form = document.getElementById('event-note-form-card');
  if (!form) return;

  if (show === undefined) {
    show = form.style.display === 'none';
  }

  if (show) {
    editingEventId = null;
    document.getElementById('event-form-title').textContent = '➕ เพิ่มบันทึกเหตุการณ์ส่วนตัว';
    document.getElementById('note-stock-input').value = activeEventStock !== 'all' ? activeEventStock : '';
    document.getElementById('note-date-input').value = new Date().toISOString().split('T')[0];
    document.getElementById('note-type-input').value = 'NOTE';
    document.getElementById('note-title-input').value = '';
    document.getElementById('note-remark-input').value = '';
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}

function editEventNote(id) {
  const customEvents = getCustomEvents();
  const item = customEvents.find(e => e.id === id);
  if (!item) return;

  editingEventId = id;
  const form = document.getElementById('event-note-form-card');
  if (form) {
    document.getElementById('event-form-title').textContent = '✏️ แก้ไขบันทึกเหตุการณ์';
    document.getElementById('note-stock-input').value = item.stock || '';
    document.getElementById('note-date-input').value = item.date || '';
    document.getElementById('note-type-input').value = item.type || 'NOTE';
    document.getElementById('note-title-input').value = item.event || '';
    document.getElementById('note-remark-input').value = item.remark || '';
    form.style.display = 'block';
  }
}

function deleteEventNote(id) {
  if (confirm("คุณต้องการลบบันทึกเหตุการณ์นี้ใช่หรือไม่?")) {
    let customEvents = getCustomEvents();
    customEvents = customEvents.filter(e => e.id !== id);
    saveCustomEvents(customEvents);
    renderEventSubTabContent();
  }
}

function saveEventNote() {
  const stock = document.getElementById('note-stock-input').value.trim().toUpperCase();
  const date = document.getElementById('note-date-input').value;
  const type = document.getElementById('note-type-input').value;
  const title = document.getElementById('note-title-input').value.trim();
  const remark = document.getElementById('note-remark-input').value.trim();

  if (!stock || !title) {
    alert("กรุณากรอกชื่อหุ้น และ หัวข้อเหตุการณ์");
    return;
  }

  let customEvents = getCustomEvents();

  if (editingEventId) {
    customEvents = customEvents.map(e => {
      if (e.id === editingEventId) {
        return { ...e, stock, date, type, event: title, remark };
      }
      return e;
    });
  } else {
    const newNote = {
      id: 'evt_' + Date.now(),
      stock,
      date: date || new Date().toISOString().split('T')[0],
      type,
      event: title,
      remark,
      isCustom: true
    };
    customEvents.push(newNote);
  }

  saveCustomEvents(customEvents);
  toggleEventNoteForm(false);
  renderEventSubTabContent();
}

// ── 1. Calendar Sub-tab ──────────────────────────────────────
function renderCalendarSubTab(container) {
  const customEvents = getCustomEvents();
  const allEvents = [...customEvents, ...eventsData];
  const userStocks = getUserEventStocks();
  const stocks = ['all', ...userStocks];

  const targetSymbol = (activeEventStock === 'all' ? 'JPM' : activeEventStock).toUpperCase();
  const pricesMap = (typeof stockPricesData !== 'undefined' && stockPricesData[targetSymbol]) ? stockPricesData[targetSymbol] : null;

  container.innerHTML = `
    <!-- Stock Selection & Actions -->
    <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px;flex-wrap:wrap;">
      <div class="pill-group" id="event-filter" style="margin-bottom:0">
        ${stocks.map(s => `
          <button class="pill${s === activeEventStock ? ' active' : ''}" onclick="filterEvents('${s}',this)">
            ${s === 'all' ? 'ทั้งหมด' : s}
          </button>`).join('')}
      </div>
      <div style="display:flex;gap:10px;align-items:center;">
        ${activeEventStock !== 'all' && userStocks.length > 1 ? `
          <button class="pill" style="border-color:rgba(255,77,109,0.3);color:var(--red);font-size:12px;" onclick="removeActiveEventStock()">
            🗑️ ลบ ${activeEventStock}
          </button>
        ` : ''}
        <span class="badge badge-blue">● NEWS (ข่าวสาร)</span>
        <span class="badge badge-purple">● NOTE (บันทึก)</span>
      </div>
    </div>

    <!-- News-Correlated Stock Price Graph & Zoom Controls -->
    <div class="card" id="news-chart-card" style="margin-bottom:24px;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:12px;">
        <div>
          <div class="card-title" style="margin-bottom:2px">📈 กราฟราคาหุ้นสัมพัทธ์กับข่าว — ${targetSymbol}</div>
          <p style="font-size:12px;color:var(--text-secondary)">คลิกจุดราคาบนกราฟเพื่อกรองข่าวสารวันนั้นทันที · ชี้เมาส์เพื่อดูหัวข้อข่าว</p>
        </div>
        
        <!-- Zoom & Range Controls -->
        <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
          <span style="font-size:11px;color:var(--text-muted)">ช่วงเวลา:</span>
          <button class="pill${chartZoomRange === '1M' ? ' active' : ''}" style="font-size:11px;padding:3px 10px;" onclick="setChartZoomRange('1M')">1M</button>
          <button class="pill${chartZoomRange === '3M' ? ' active' : ''}" style="font-size:11px;padding:3px 10px;" onclick="setChartZoomRange('3M')">3M</button>
          <button class="pill${chartZoomRange === '6M' ? ' active' : ''}" style="font-size:11px;padding:3px 10px;" onclick="setChartZoomRange('6M')">6M</button>
          <button class="pill${chartZoomRange === 'ALL' ? ' active' : ''}" style="font-size:11px;padding:3px 10px;" onclick="setChartZoomRange('ALL')">ALL</button>
          <span style="color:var(--border);margin:0 4px">|</span>
          <button class="pill" style="font-size:11px;padding:3px 10px;" onclick="zoomChartFactor(0.7)">🔍 ➕ ซูมเข้า</button>
          <button class="pill" style="font-size:11px;padding:3px 10px;" onclick="zoomChartFactor(1.4)">🔍 ➖ ซูมออก</button>
          <button class="pill" style="font-size:11px;padding:3px 10px;" onclick="resetChartZoom()">🔄 รีเซ็ต</button>
        </div>
      </div>

      <div class="chart-wrap" style="height:280px">
        <canvas id="event-price-chart"></canvas>
      </div>
    </div>

    <!-- Active Date Filter Banner (Shown when user clicks graph point) -->
    ${selectedNewsDate ? `
      <div style="background:rgba(0,212,170,0.12);border:1px solid var(--accent-1);border-radius:var(--radius-sm);padding:12px 18px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;">
        <div style="display:flex;align-items:center;gap:10px;">
          <span style="font-size:18px">🎯</span>
          <div>
            <strong style="color:var(--accent-1);font-size:14px">กำลังกรองข่าวสาร ณ วันที่ ${formatDate(selectedNewsDate)} (${targetSymbol})</strong>
            ${pricesMap && pricesMap[selectedNewsDate] ? `<span style="font-size:12px;color:var(--text-secondary);margin-left:10px">💰 ราคาปิดวันนั้น: $${formatNum(pricesMap[selectedNewsDate],2)}</span>` : ''}
          </div>
        </div>
        <button class="pill active" style="font-size:12px;padding:4px 14px;background:var(--accent-1);color:#000;font-weight:700" onclick="clearSelectedNewsDate()">
          ✕ แสดงข่าวทั้งหมด (ล้างตัวกรอง)
        </button>
      </div>
    ` : ''}

    <!-- Events Timeline -->
    <div class="timeline" id="events-timeline"></div>

    <!-- Data Reference Credit Footer -->
    <div style="margin-top:24px;padding:14px 18px;background:var(--bg-card);border:1px solid var(--border);border-radius:var(--radius);display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:12px;color:var(--text-secondary);">
      <div style="display:flex;align-items:center;gap:8px;">
        <span style="font-size:16px">📌</span>
        <div>
          <strong style="color:var(--text-primary)">Data Reference Credits:</strong>
          <div style="font-size:11px;color:var(--text-muted);margin-top:1px">Yahoo Finance (Live News Feeds &amp; Historical Close Prices) &amp; TradingView Charts</div>
        </div>
      </div>
      <div style="display:flex;gap:10px;flex-wrap:wrap;">
        <a href="https://finance.yahoo.com/quote/${activeEventStock !== 'all' ? activeEventStock : 'JPM'}/news/" target="_blank" rel="noopener noreferrer" class="btn-link-action" style="font-size:11px;padding:4px 12px;">
          🔗 Yahoo Finance News ↗
        </a>
        <a href="https://www.tradingview.com/chart/?symbol=${activeEventStock !== 'all' ? activeEventStock : 'JPM'}" target="_blank" rel="noopener noreferrer" class="btn-link-action" style="font-size:11px;padding:4px 12px;background:rgba(255,183,77,0.1);color:var(--orange);border-color:rgba(255,183,77,0.3)">
          📈 TradingView Chart ↗
        </a>
      </div>
    </div>
  `;

  renderEventPriceChart(activeEventStock);
  renderEventTimeline(activeEventStock);
}

function filterEvents(stock, btn) {
  activeEventStock = stock;
  selectedNewsDate = null; // Clear date filter when switching stock
  document.querySelectorAll('#event-filter .pill').forEach(p => p.classList.remove('active'));
  if (btn) btn.classList.add('active');

  const chartTitle = document.querySelector('#news-chart-card .card-title');
  if (chartTitle) {
    chartTitle.textContent = `📈 กราฟราคาหุ้นสัมพัทธ์กับข่าว — ${stock.toUpperCase()}`;
  }

  renderEventPriceChart(stock);
  renderEventTimeline(stock);
}

function setChartZoomRange(range) {
  chartZoomRange = range;
  customZoomDays = null;
  renderEventPriceChart(activeEventStock);
}

function zoomChartFactor(factor) {
  const targetSymbol = (activeEventStock === 'all' ? 'JPM' : activeEventStock).toUpperCase();
  const pricesMap = (typeof stockPricesData !== 'undefined' && stockPricesData[targetSymbol]) ? stockPricesData[targetSymbol] : null;
  if (!pricesMap) return;

  const totalPoints = Object.keys(pricesMap).length;
  let currentCount = customZoomDays || (chartZoomRange === '1M' ? 22 : (chartZoomRange === '3M' ? 65 : totalPoints));
  let newCount = Math.max(10, Math.min(totalPoints, Math.round(currentCount * factor)));

  customZoomDays = newCount;
  chartZoomRange = 'CUSTOM';
  renderEventPriceChart(activeEventStock);
}

function resetChartZoom() {
  chartZoomRange = '3M';
  customZoomDays = null;
  renderEventPriceChart(activeEventStock);
}

function selectNewsDate(date, symbol) {
  selectedNewsDate = date;
  renderCalendarSubTab(document.getElementById('events-subtab-container'));

  // Scroll to timeline smoothly
  const timelineEl = document.getElementById('events-timeline');
  if (timelineEl) {
    timelineEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function clearSelectedNewsDate() {
  selectedNewsDate = null;
  renderCalendarSubTab(document.getElementById('events-subtab-container'));
}

function renderEventPriceChart(stockFilter) {
  const canvas = document.getElementById('event-price-chart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  if (eventPriceChart) eventPriceChart.destroy();

  const targetSymbol = (stockFilter === 'all' ? 'JPM' : stockFilter).toUpperCase();
  const pricesMap = (typeof stockPricesData !== 'undefined' && stockPricesData[targetSymbol]) ? stockPricesData[targetSymbol] : null;

  if (!pricesMap) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    return;
  }

  const customEvents = getCustomEvents();
  const allEvents = [...customEvents, ...eventsData];
  const stockEvents = allEvents.filter(e => e.stock === targetSymbol);

  // Group news titles by date
  const eventsByDate = {};
  stockEvents.forEach(e => {
    if (!eventsByDate[e.date]) eventsByDate[e.date] = [];
    eventsByDate[e.date].push(e.event);
  });

  let dates = Object.keys(pricesMap).sort();

  // Apply zoom range / slicing
  if (customZoomDays) {
    dates = dates.slice(-customZoomDays);
  } else if (chartZoomRange === '1M') {
    dates = dates.slice(-22);
  } else if (chartZoomRange === '3M') {
    dates = dates.slice(-65);
  }

  const prices = dates.map(d => pricesMap[d]);

  // Point styling for dates with news or selected date
  const pointRadii = dates.map(d => (d === selectedNewsDate ? 8 : (eventsByDate[d] ? 6 : 2)));
  const pointColors = dates.map(d => (d === selectedNewsDate ? '#ffb74d' : (eventsByDate[d] ? '#00d4aa' : 'rgba(0,153,255,0.4)')));
  const pointHoverRadii = dates.map(d => (d === selectedNewsDate ? 10 : (eventsByDate[d] ? 9 : 5)));

  eventPriceChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: dates.map(d => formatDate(d)),
      datasets: [{
        label: `${targetSymbol} Closing Price ($)`,
        data: prices,
        borderColor: '#0099ff',
        backgroundColor: 'rgba(0,153,255,0.1)',
        borderWidth: 2,
        pointRadius: pointRadii,
        pointBackgroundColor: pointColors,
        pointHoverRadius: pointHoverRadii,
        tension: 0.25,
        fill: true
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      onClick: (evt, activeEls) => {
        if (activeEls && activeEls.length > 0) {
          const idx = activeEls[0].index;
          const clickedDate = dates[idx];
          if (clickedDate) {
            selectNewsDate(clickedDate, targetSymbol);
          }
        }
      },
      plugins: {
        legend: { labels: { color: '#8899bb', font: { family: 'Outfit', size: 12 } } },
        tooltip: {
          backgroundColor: '#10172a',
          borderColor: 'rgba(0,212,170,0.3)',
          borderWidth: 1,
          padding: 12,
          callbacks: {
            title: ctx => {
              const idx = ctx[0].dataIndex;
              const dateRaw = dates[idx];
              return `📅 ${formatDate(dateRaw)} — ${targetSymbol} (คลิกเพื่อกรองข่าว)`;
            },
            label: ctx => {
              const idx = ctx.dataIndex;
              const dateRaw = dates[idx];
              const price = prices[idx];
              const lines = [`💰 Close Price: $${formatNum(price, 2)}`];

              const newsList = eventsByDate[dateRaw];
              if (newsList && newsList.length > 0) {
                lines.push('');
                lines.push(`📰 News Published on this day (${newsList.length}):`);
                newsList.forEach(n => {
                  lines.push(` • ${n.length > 70 ? n.substring(0, 70) + '...' : n}`);
                });
              }
              return lines;
            }
          }
        }
      },
      scales: {
        x: { ticks: { color: '#4a5a80', font: { size: 10 }, maxTicksLimit: 12 }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: { ticks: { color: '#4a5a80', callback: v => '$' + v }, grid: { color: 'rgba(255,255,255,0.04)' } }
      }
    }
  });
}

function renderEventTimeline(stockFilter) {
  const tl = document.getElementById('events-timeline');
  if (!tl) return;

  const customEvents = getCustomEvents();
  const allEvents = [...customEvents, ...eventsData];

  let items = allEvents.filter(e => stockFilter === 'all' || e.stock === stockFilter);

  // If a specific date is selected from chart click, filter to that date!
  if (selectedNewsDate) {
    items = items.filter(e => e.date === selectedNewsDate);
  }

  items.sort((a, b) => new Date(b.date) - new Date(a.date));

  tl.innerHTML = items.map(e => {
    const isNews = e.type === 'NEWS';
    const isNote = e.type === 'NOTE' || e.isCustom;
    const stockColors = {
      AMZN: '#ff9900', JPM: '#0052d4', NVDA: '#76b900', CRWD: '#ee3124', SPCX: '#9c27b0',
      BA: '#003399', TSLA: '#e82127', GOOGL: '#4285f4', V: '#1a1f71', NEM: '#eaaa00'
    };
    const color = stockColors[e.stock] || 'var(--accent-1)';
    const badgeClass = isNews ? 'badge-blue' : 'badge-purple';
    const dotColor = isNews ? 'var(--accent-2)' : 'var(--purple)';

    // Lookup stock close price on event date
    let priceSnippet = '';
    if (typeof stockPricesData !== 'undefined' && stockPricesData[e.stock] && stockPricesData[e.stock][e.date]) {
      const p = stockPricesData[e.stock][e.date];
      priceSnippet = `<span class="badge badge-gray" style="font-size:10px">💰 Price: $${formatNum(p,2)}</span>`;
    }

    return `
      <div class="timeline-item">
        <div class="timeline-dot" style="background:${dotColor}"></div>
        <div class="timeline-card"${selectedNewsDate === e.date ? ' style="border-color:var(--accent-1);box-shadow:var(--shadow-glow)"' : ''}>
          <div class="timeline-meta" style="justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
            <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
              <span style="color:${color};font-weight:700">${e.stock}</span>
              <span>${formatDate(e.date)}</span>
              <span class="badge ${badgeClass}" style="font-size:10px">${isNews ? 'NEWS' : 'NOTE'}</span>
              ${priceSnippet}
            </div>
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
              ${e.url ? `
                <a href="${e.url}" target="_blank" rel="noopener noreferrer" class="btn-link-action" style="font-size:11px;padding:3px 10px;">
                  📰 อ่านข่าว ↗
                </a>
              ` : ''}
              <a href="https://www.tradingview.com/chart/?symbol=${e.stock}" target="_blank" rel="noopener noreferrer" class="btn-link-action" style="font-size:11px;padding:3px 10px;background:rgba(255,183,77,0.1);color:var(--orange);border-color:rgba(255,183,77,0.3)">
                📈 Chart ↗
              </a>
              ${e.isCustom ? `
                <button class="pill" style="font-size:10px;padding:2px 8px;" onclick="editEventNote('${e.id}')">✏️</button>
                <button class="pill" style="font-size:10px;padding:2px 8px;color:var(--red);border-color:rgba(255,77,109,0.3);" onclick="deleteEventNote('${e.id}')">🗑️</button>
              ` : ''}
            </div>
          </div>
          <div class="timeline-event" style="margin-top:6px">${e.event}</div>
          ${e.remark ? `<div class="timeline-remark" style="margin-top:6px;font-size:12px;color:var(--text-secondary)">📌 ${e.remark}</div>` : ''}
        </div>
      </div>`;
  }).join('') || '<div class="empty">ไม่มีข่าวหรือเหตุการณ์ในวันที่เลือก</div>';
}

// ── 2. Links Sub-tab ─────────────────────────────────────────
function renderLinksSubTab(container) {
  const allStocks = [...new Set(eventLinksData.map(l => l.stock).filter(Boolean))];
  const stocks = ['all', ...allStocks];

  container.innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:20px;flex-wrap:wrap;">
      <div class="pill-group" id="link-stock-filter" style="margin-bottom:0">
        ${stocks.map(s => `
          <button class="pill${s === activeLinkStock ? ' active' : ''}" onclick="filterLinkStock('${s}',this)">
            ${s === 'all' ? 'ทั้งหมด' : s}
          </button>`).join('')}
      </div>
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" id="link-search-input" placeholder="ค้นหาเหตุการณ์ หรือ รายละเอียด..."
          value="${linkSearchQuery}" oninput="onLinkSearch(this.value)">
      </div>
    </div>

    <div id="event-links-grid" class="grid-2"></div>
  `;

  renderEventLinksContent();
}

function filterLinkStock(stock, btn) {
  activeLinkStock = stock;
  document.querySelectorAll('#link-stock-filter .pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderEventLinksContent();
}

function onLinkSearch(query) {
  linkSearchQuery = query;
  renderEventLinksContent();
}

function renderEventLinksContent() {
  const grid = document.getElementById('event-links-grid');
  if (!grid) return;

  const stockColors = {
    AMZN: '#ff9900', JPM: '#0052d4', NVDA: '#76b900', CRWD: '#ee3124', SPCX: '#9c27b0',
    BA: '#0052d4', LMT: '#00205b', NEM: '#eaaa00', QQQM: '#0072ce', RTX: '#d00000',
    SLV: '#a0a0a0', STX: '#00a4e4', TSLA: '#e82127', TTB: '#0056b3', V: '#1a1f71', WDC: '#0083c8'
  };

  const filtered = eventLinksData.filter(item => {
    const matchStock = activeLinkStock === 'all' || item.stock === activeLinkStock;
    const q = linkSearchQuery.trim().toLowerCase();
    const matchQuery = !q ||
      item.stock.toLowerCase().includes(q) ||
      item.event.toLowerCase().includes(q) ||
      item.purpose.toLowerCase().includes(q) ||
      item.url.toLowerCase().includes(q);
    return matchStock && matchQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="card empty" style="grid-column:1/-1">ไม่พบลิงก์เหตุการณ์</div>`;
    return;
  }

  grid.innerHTML = filtered.map(item => {
    const color = stockColors[item.stock] || 'var(--accent-1)';
    const hasUrl = Boolean(item.url);

    return `
      <div class="event-link-card">
        <div>
          <div class="event-link-header">
            <span class="badge" style="background:${color}22;color:${color};border:1px solid ${color}44">${item.stock || 'General'}</span>
            ${item.purpose && item.purpose !== 'FACT' ? `<span class="badge badge-gray" style="font-size:10px">${item.purpose.length > 25 ? item.purpose.substring(0,25)+'...' : item.purpose}</span>` : ''}
          </div>
          <div class="event-link-title" style="margin-top:8px">${item.event || '—'}</div>
          ${item.purpose && item.purpose !== 'FACT' ? `<div class="event-link-purpose" style="margin-top:6px">💡 ${item.purpose}</div>` : ''}
        </div>
        <div style="margin-top:12px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
          <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
            ${hasUrl ? `
              <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-link-action">
                🔗 เปิดลิงก์ ↗
              </a>
            ` : `
              <span class="badge badge-gray">ไม่มี URL</span>
            `}
            ${item.stock ? `
              <a href="https://www.tradingview.com/chart/?symbol=${item.stock}" target="_blank" rel="noopener noreferrer" class="btn-link-action" style="background:rgba(255,183,77,0.1);color:var(--orange);border-color:rgba(255,183,77,0.3)">
                📈 TradingView Chart ↗
              </a>
            ` : ''}
          </div>
          <span style="font-size:11px;color:var(--text-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px">
            ${hasUrl ? item.url.replace(/^https?:\/\//, '') : ''}
          </span>
        </div>
      </div>
    `;
  }).join('');
}
