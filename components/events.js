// ─── Events View ─────────────────────────────────────────────
let activeEventSubTab = 'calendar';
let activeEventStock = 'all';
let activeLinkStock = 'all';
let linkSearchQuery = '';
let editingEventId = null;

// ── Custom Events (Local Storage) ─────────────────────────────
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
  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>📅 Events & News Timeline</h2>
        <p>เหตุการณ์สำคัญ ข่าวสารจาก Yahoo Finance / TradingView และบันทึกส่วนตัว</p>
      </div>
      <button class="pill active" style="background:var(--accent-grad);color:#000;font-weight:700" onclick="toggleEventNoteForm()">
        ✏️ + เพิ่มบันทึกเหตุการณ์ (Add Note)
      </button>
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
    document.getElementById('note-stock-input').value = '';
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
  const stocks = ['all', ...new Set(allEvents.map(e => e.stock))];

  container.innerHTML = `
    <div style="display:flex;align-items:center;gap:16px;margin-bottom:20px;flex-wrap:wrap;">
      <div class="pill-group" id="event-filter" style="margin-bottom:0">
        ${stocks.map(s => `
          <button class="pill${s === activeEventStock ? ' active' : ''}" onclick="filterEvents('${s}',this)">
            ${s === 'all' ? 'ทั้งหมด' : s}
          </button>`).join('')}
      </div>
      <div style="display:flex;gap:10px;align-items:center;margin-left:auto;">
        <span class="badge badge-blue">● NEWS (ข่าวสาร)</span>
        <span class="badge badge-purple">● NOTE (บันทึก)</span>
      </div>
    </div>

    <div class="timeline" id="events-timeline"></div>
  `;

  renderEventTimeline(activeEventStock);
}

function renderEventTimeline(stockFilter) {
  const tl = document.getElementById('events-timeline');
  if (!tl) return;

  const customEvents = getCustomEvents();
  const allEvents = [...customEvents, ...eventsData];

  const items = allEvents
    .filter(e => stockFilter === 'all' || e.stock === stockFilter)
    .sort((a, b) => new Date(b.date) - new Date(a.date));

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

    return `
      <div class="timeline-item">
        <div class="timeline-dot" style="background:${dotColor}"></div>
        <div class="timeline-card">
          <div class="timeline-meta" style="justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
            <div style="display:flex;gap:10px;align-items:center;">
              <span style="color:${color};font-weight:700">${e.stock}</span>
              <span>${formatDate(e.date)}</span>
              <span class="badge ${badgeClass}" style="font-size:10px">${isNews ? 'NEWS' : 'NOTE'}</span>
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
