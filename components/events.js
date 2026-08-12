// ─── Events View ─────────────────────────────────────────────
let activeEventStock = 'all';

function renderEvents(container) {
  const stocks = ['all', ...new Set(eventsData.map(e => e.stock))];

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>📅 Events Calendar</h2>
        <p>เหตุการณ์สำคัญ — ผลประกอบการ, Prime Day, IPO, ข่าวตลาด</p>
      </div>
    </div>

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
      AMZN: '#ff9900', JPM: '#0052d4', NVDA: '#76b900', CRWD: '#ee3124', SPCX: '#9c27b0'
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
