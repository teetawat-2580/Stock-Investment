// ─── Watch List View ─────────────────────────────────────────
function renderWatchlist(container) {
  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>👁️ Watch List</h2>
        <p>รายชื่อหุ้นที่ติดตาม — จัดกลุ่มตามกลยุทธ์</p>
      </div>
    </div>

    <div class="pill-group" id="wl-filter">
      <button class="pill active" onclick="filterWatchlist('all',this)">ทั้งหมด</button>
      <button class="pill" onclick="filterWatchlist('US',this)">🇺🇸 US</button>
      <button class="pill" onclick="filterWatchlist('TH',this)">🇹🇭 TH</button>
      <button class="pill" onclick="filterWatchlist('buyTheDip',this)">Buy the Dip</button>
      <button class="pill" onclick="filterWatchlist('treasury',this)">Treasury</button>
      <button class="pill" onclick="filterWatchlist('inspectOnly',this)">Inspect Only</button>
    </div>

    <div class="table-wrap">
      <table id="watchlist-table">
        <thead>
          <tr>
            <th>หุ้น</th>
            <th>กลุ่ม</th>
            <th>XD Date</th>
            <th>กลยุทธ์</th>
          </tr>
        </thead>
        <tbody id="watchlist-body"></tbody>
      </table>
    </div>
  `;
  renderWatchlistRows('all');
}

function renderWatchlistRows(filter) {
  const tbody = document.getElementById('watchlist-body');
  if (!tbody) return;

  const items = focusListData.filter(item => {
    if (filter === 'all') return true;
    if (filter === 'US' || filter === 'TH') return item.group === filter;
    return item[filter];
  });

  tbody.innerHTML = items.map(item => {
    const tags = [];
    if (item.buyTheDip)   tags.push('<span class="badge badge-blue">🎯 Buy the Dip</span>');
    if (item.treasury)    tags.push('<span class="badge badge-teal">🏛️ Treasury</span>');
    if (item.inspectOnly) tags.push('<span class="badge badge-orange">🔍 Inspect Only</span>');
    if (item.buyHold)     tags.push('<span class="badge badge-green">💎 Buy & Hold</span>');
    if (item.swing)       tags.push('<span class="badge badge-purple">⚡ Swing Trade</span>');
    if (tags.length === 0) tags.push('<span class="badge badge-gray">—</span>');

    const groupBadge = item.group === 'US'
      ? '<span class="badge badge-blue">🇺🇸 US</span>'
      : '<span class="badge badge-orange">🇹🇭 TH</span>';

    return `
      <tr>
        <td><strong style="font-size:15px;">${item.name}</strong></td>
        <td>${groupBadge}</td>
        <td>${item.xdDate ? `<span class="badge badge-yellow">📅 ${formatDate(item.xdDate)}</span>` : '<span style="color:var(--text-muted)">—</span>'}</td>
        <td style="display:flex;gap:6px;flex-wrap:wrap;padding-top:12px;">${tags.join('')}</td>
      </tr>`;
  }).join('') || '<tr><td colspan="4" class="empty">ไม่มีข้อมูล</td></tr>';
}

function filterWatchlist(filter, btn) {
  document.querySelectorAll('#wl-filter .pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderWatchlistRows(filter);
}
