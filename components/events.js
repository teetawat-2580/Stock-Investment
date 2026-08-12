// ─── Events View ─────────────────────────────────────────────
let activeEventSubTab = 'calendar';
let activeEventStock = 'all';
let activeLinkStock = 'all';
let linkSearchQuery = '';

function renderEvents(container) {
  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>📅 Events & Links</h2>
        <p>เหตุการณ์สำคัญ และ ลิงก์ข้อมูลทางการ (Sheet EVENT Link)</p>
      </div>
    </div>

    <div class="tab-bar" style="margin-bottom:20px;">
      <button class="tab-btn${activeEventSubTab === 'calendar' ? ' active' : ''}" onclick="switchEventSubTab('calendar', this)">
        📅 Events Calendar
      </button>
      <button class="tab-btn${activeEventSubTab === 'links' ? ' active' : ''}" onclick="switchEventSubTab('links', this)">
        🔗 Sheet EVENT Link
      </button>
    </div>

    <div id="events-subtab-container"></div>
  `;

  renderEventSubTabContent();
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

// ── 1. Calendar Sub-tab ──────────────────────────────────────
function renderCalendarSubTab(container) {
  const stocks = ['all', ...new Set(eventsData.map(e => e.stock))];

  container.innerHTML = `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;flex-wrap:wrap;">
      <div class="pill-group" id="event-filter" style="margin-bottom:0">
        ${stocks.map(s => `
          <button class="pill${s === activeEventStock ? ' active' : ''}" onclick="filterEvents('${s}',this)">
            ${s === 'all' ? 'ทั้งหมด' : s}
          </button>`).join('')}
      </div>
      <div style="display:flex;gap:10px;align-items:center;margin-left:auto;">
        <span class="badge badge-teal">● FACT</span>
        <span class="badge badge-orange">● EST</span>
      </div>
    </div>

    <div class="timeline" id="events-timeline"></div>
  `;

  renderEventTimeline(activeEventStock);
}

function renderEventTimeline(stockFilter) {
  const tl = document.getElementById('events-timeline');
  if (!tl) return;

  const items = eventsData
    .filter(e => stockFilter === 'all' || e.stock === stockFilter)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  tl.innerHTML = items.map(e => {
    const isFact = e.type === 'FACT';
    const stockColors = {
      AMZN: '#ff9900', JPM: '#0052d4', NVDA: '#76b900', CRWD: '#ee3124', SPCX: '#9c27b0', BA: '#003399', TSLA: '#e82127'
    };
    const color = stockColors[e.stock] || 'var(--accent-1)';
    return `
      <div class="timeline-item">
        <div class="timeline-dot ${isFact ? 'fact' : 'est'}" style="background:${isFact ? 'var(--accent-1)' : 'var(--orange)'}"></div>
        <div class="timeline-card">
          <div class="timeline-meta">
            <span style="color:${color};font-weight:700">${e.stock}</span>
            <span>${formatDate(e.date)}</span>
            <span class="badge ${isFact ? 'badge-teal' : 'badge-orange'}" style="font-size:10px">${e.type}</span>
          </div>
          <div class="timeline-event">${e.event}</div>
          ${e.remark ? `<div class="timeline-remark">📌 ${e.remark}</div>` : ''}
        </div>
      </div>`;
  }).join('') || '<div class="empty">ไม่มีเหตุการณ์</div>';
}

function filterEvents(stock, btn) {
  activeEventStock = stock;
  document.querySelectorAll('#event-filter .pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderEventTimeline(stock);
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
        <div style="margin-top:12px;display:flex;align-items:center;justify-content:space-between">
          ${hasUrl ? `
            <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="btn-link-action">
              🔗 เปิดลิงก์ ↗
            </a>
          ` : `
            <span class="badge badge-gray">ไม่มี URL</span>
          `}
          <span style="font-size:11px;color:var(--text-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px">
            ${hasUrl ? item.url.replace(/^https?:\/\//, '') : ''}
          </span>
        </div>
      </div>
    `;
  }).join('');
}
