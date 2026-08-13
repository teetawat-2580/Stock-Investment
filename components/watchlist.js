// ─── Watch List View ─────────────────────────────────────────
let activeWlFilter = 'all';
let editingWlId = null;

function getUserWatchlist() {
  try {
    const saved = localStorage.getItem('user_watchlist_items');
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {}
  return [...focusListData];
}

function saveUserWatchlist(items) {
  try {
    localStorage.setItem('user_watchlist_items', JSON.stringify(items));
  } catch (e) {}
}

function renderWatchlist(container) {
  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>👁️ Watch List</h2>
        <p>รายชื่อหุ้นที่ติดตาม — จัดกลุ่มตามกลยุทธ์ (Add / Edit / Remove Supported)</p>
      </div>
      <button class="pill active" style="background:var(--accent-grad);color:#000;font-weight:700" onclick="toggleWlForm()">
        ➕ เพิ่มหุ้นใน Watch List
      </button>
    </div>

    <!-- Add/Edit Watchlist Item Form -->
    <div id="wl-form-card" class="card" style="display:none;margin-bottom:20px;border-color:var(--accent-1)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
        <div class="card-title" id="wl-form-title" style="margin-bottom:0;color:var(--accent-1)">➕ เพิ่มหุ้นใน Watch List</div>
        <button class="pill" style="font-size:11px;padding:2px 10px;" onclick="toggleWlForm(false)">✕ ปิด</button>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;margin-bottom:12px;">
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">ชื่อหุ้น (Ticker):</label>
          <input type="text" id="wl-name-input" placeholder="e.g. NVDA, JPM, KBANK" class="search-box" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">ตลาด (Group):</label>
          <select id="wl-group-input" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);font-family:inherit;">
            <option value="US">🇺🇸 US Stock</option>
            <option value="TH">🇹🇭 TH Stock</option>
          </select>
        </div>
        <div>
          <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:4px">วัน XD (XD Date):</label>
          <input type="date" id="wl-xd-input" class="search-box" style="width:100%;padding:8px 12px;background:var(--bg-base);border:1px solid var(--border);border-radius:var(--radius-sm);color:var(--text-primary);">
        </div>
      </div>

      <div style="margin-bottom:14px;">
        <label style="font-size:11px;color:var(--text-muted);display:block;margin-bottom:6px">กลยุทธ์การลงทุน (Strategy Tags):</label>
        <div style="display:flex;gap:12px;flex-wrap:wrap;font-size:12px;">
          <label style="display:inline-flex;align-items:center;gap:4px;cursor:pointer;"><input type="checkbox" id="wl-tag-dip"> 🎯 Buy the Dip</label>
          <label style="display:inline-flex;align-items:center;gap:4px;cursor:pointer;"><input type="checkbox" id="wl-tag-treasury"> 🏛️ Treasury</label>
          <label style="display:inline-flex;align-items:center;gap:4px;cursor:pointer;"><input type="checkbox" id="wl-tag-inspect"> 🔍 Inspect Only</label>
          <label style="display:inline-flex;align-items:center;gap:4px;cursor:pointer;"><input type="checkbox" id="wl-tag-hold"> 💎 Buy &amp; Hold</label>
          <label style="display:inline-flex;align-items:center;gap:4px;cursor:pointer;"><input type="checkbox" id="wl-tag-swing"> ⚡ Swing Trade</label>
        </div>
      </div>

      <div style="display:flex;gap:10px;justify-content:flex-end;">
        <button class="pill" onclick="toggleWlForm(false)">ยกเลิก</button>
        <button class="pill active" style="background:var(--accent-1);color:#000;font-weight:700" onclick="saveWlItem()">
          💾 บันทึกข้อมูล
        </button>
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
            <th style="text-align:center">จัดการ</th>
          </tr>
        </thead>
        <tbody id="watchlist-body"></tbody>
      </table>
    </div>
  `;
  renderWatchlistRows(activeWlFilter);
}

function renderWatchlistRows(filter) {
  const tbody = document.getElementById('watchlist-body');
  if (!tbody) return;

  const items = getUserWatchlist().filter(item => {
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
        <td><div style="display:flex;gap:6px;flex-wrap:wrap;">${tags.join('')}</div></td>
        <td style="text-align:center">
          <div style="display:flex;gap:4px;justify-content:center;">
            <button class="pill" style="font-size:10px;padding:2px 8px;" onclick="editWlItem('${item.name}')">✏️</button>
            <button class="pill" style="font-size:10px;padding:2px 8px;color:var(--red);border-color:rgba(255,77,109,0.3);" onclick="deleteWlItem('${item.name}')">🗑️</button>
          </div>
        </td>
      </tr>`;
  }).join('') || '<tr><td colspan="5" class="empty">ไม่มีข้อมูล</td></tr>';
}

function filterWatchlist(filter, btn) {
  activeWlFilter = filter;
  document.querySelectorAll('#wl-filter .pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  renderWatchlistRows(filter);
}

function toggleWlForm(show) {
  const form = document.getElementById('wl-form-card');
  if (!form) return;
  if (show === undefined) show = form.style.display === 'none';

  if (show) {
    editingWlId = null;
    document.getElementById('wl-form-title').textContent = '➕ เพิ่มหุ้นใน Watch List';
    document.getElementById('wl-name-input').value = '';
    document.getElementById('wl-group-input').value = 'US';
    document.getElementById('wl-xd-input').value = '';
    document.getElementById('wl-tag-dip').checked = false;
    document.getElementById('wl-tag-treasury').checked = false;
    document.getElementById('wl-tag-inspect').checked = false;
    document.getElementById('wl-tag-hold').checked = false;
    document.getElementById('wl-tag-swing').checked = false;
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
}

function editWlItem(name) {
  const items = getUserWatchlist();
  const item = items.find(i => i.name === name);
  if (!item) return;

  editingWlId = name;
  const form = document.getElementById('wl-form-card');
  if (form) {
    document.getElementById('wl-form-title').textContent = '✏️ แก้ไข Watch List';
    document.getElementById('wl-name-input').value = item.name || '';
    document.getElementById('wl-group-input').value = item.group || 'US';
    document.getElementById('wl-xd-input').value = item.xdDate || '';
    document.getElementById('wl-tag-dip').checked = Boolean(item.buyTheDip);
    document.getElementById('wl-tag-treasury').checked = Boolean(item.treasury);
    document.getElementById('wl-tag-inspect').checked = Boolean(item.inspectOnly);
    document.getElementById('wl-tag-hold').checked = Boolean(item.buyHold);
    document.getElementById('wl-tag-swing').checked = Boolean(item.swing);
    form.style.display = 'block';
  }
}

function deleteWlItem(name) {
  if (confirm(`คุณต้องการลบ ${name} ออกจาก Watch List ใช่หรือไม่?`)) {
    let items = getUserWatchlist();
    items = items.filter(i => i.name !== name);
    saveUserWatchlist(items);
    renderWatchlistRows(activeWlFilter);
  }
}

function saveWlItem() {
  const name = document.getElementById('wl-name-input').value.trim().toUpperCase();
  const group = document.getElementById('wl-group-input').value;
  const xdDate = document.getElementById('wl-xd-input').value;

  const buyTheDip = document.getElementById('wl-tag-dip').checked;
  const treasury = document.getElementById('wl-tag-treasury').checked;
  const inspectOnly = document.getElementById('wl-tag-inspect').checked;
  const buyHold = document.getElementById('wl-tag-hold').checked;
  const swing = document.getElementById('wl-tag-swing').checked;

  if (!name) {
    alert("กรุณากรอกชื่อหุ้น");
    return;
  }

  let items = getUserWatchlist();

  if (editingWlId) {
    items = items.map(i => {
      if (i.name === editingWlId) {
        return { name, group, xdDate, buyTheDip, treasury, inspectOnly, buyHold, swing };
      }
      return i;
    });
  } else {
    items.push({ name, group, xdDate, buyTheDip, treasury, inspectOnly, buyHold, swing });
  }

  saveUserWatchlist(items);
  toggleWlForm(false);
  renderWatchlistRows(activeWlFilter);
}
