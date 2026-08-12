// ──────────────────────────────────────────────
//  app.js  —  Router + Initialization
// ──────────────────────────────────────────────

const VIEWS = [
  { id: 'dashboard',    label: 'Dashboard',        icon: '📊', section: 'OVERVIEW' },
  { id: 'watchlist',    label: 'Watch List',        icon: '👁️', section: 'OVERVIEW' },
  { id: 'tradelog',     label: 'Trade Log',         icon: '📋', section: 'OVERVIEW' },
  { id: 'events',       label: 'Events',            icon: '📅', section: 'OVERVIEW' },
  { id: 'fundamentals', label: 'US Fundamentals',   icon: '📈', section: 'ANALYSIS' },
  { id: 'analysis',     label: 'Stock Analysis',    icon: '🔬', section: 'ANALYSIS' },
  { id: 'currency',     label: 'Currency',          icon: '💱', section: 'TOOLS'    }
];

let currentView = 'dashboard';

// ── Build Sidebar ──────────────────────────────
function buildSidebar() {
  const sidebar = document.getElementById('sidebar');
  let html = `
    <div class="sidebar-logo">
      <div class="logo-icon">📈</div>
      <div class="logo-text">
        <h1>Stock Tracker</h1>
        <span>2026 Portfolio</span>
      </div>
    </div>`;

  let lastSection = '';
  VIEWS.forEach(v => {
    if (v.section !== lastSection) {
      html += `<div class="nav-section-label">${v.section}</div>`;
      lastSection = v.section;
    }
    html += `
      <div class="nav-item${v.id === currentView ? ' active' : ''}" data-view="${v.id}" onclick="navigateTo('${v.id}')">
        <span class="nav-icon">${v.icon}</span>
        <span class="nav-label">${v.label}</span>
      </div>`;
  });
  sidebar.innerHTML = html;
}

// ── Build View Containers ──────────────────────
function buildViewContainers() {
  const view = document.getElementById('view');
  view.innerHTML = VIEWS.map(v =>
    `<div class="view-page${v.id === currentView ? ' active' : ''}" id="vp-${v.id}"></div>`
  ).join('');
}

// ── Navigate ───────────────────────────────────
function navigateTo(viewId) {
  if (currentView === viewId) return;

  document.querySelectorAll('.view-page').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));

  currentView = viewId;
  document.getElementById(`vp-${viewId}`).classList.add('active');
  document.querySelector(`[data-view="${viewId}"]`).classList.add('active');

  // Update topbar title
  const v = VIEWS.find(x => x.id === viewId);
  document.getElementById('topbar-title').textContent = v.label;

  // Render the view
  renderView(viewId);
}

// ── Render dispatcher ──────────────────────────
function renderView(viewId) {
  const container = document.getElementById(`vp-${viewId}`);
  switch(viewId) {
    case 'dashboard':    renderDashboard(container);    break;
    case 'watchlist':    renderWatchlist(container);    break;
    case 'tradelog':     renderTradelog(container);     break;
    case 'events':       renderEvents(container);       break;
    case 'fundamentals': renderFundamentals(container); break;
    case 'analysis':     renderAnalysis(container);     break;
    case 'currency':     renderCurrency(container);     break;
  }
}

// ── Date helper ────────────────────────────────
function formatDate(dateStr) {
  if (!dateStr) return '—';
  const d = new Date(dateStr);
  return d.toLocaleDateString('th-TH', { year: 'numeric', month: 'short', day: 'numeric' });
}

function formatNum(n, decimals = 2) {
  if (n == null) return '—';
  return Number(n).toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
}

function formatBigNum(n) {
  if (n == null) return '—';
  if (n >= 1e9) return (n/1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n/1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n/1e3).toFixed(1) + 'K';
  return String(n);
}

// ── Init ───────────────────────────────────────
function init() {
  buildSidebar();
  buildViewContainers();
  renderView(currentView);

  // Live clock
  function updateClock() {
    const now = new Date();
    const opts = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    document.getElementById('topbar-date').textContent = now.toLocaleString('th-TH', opts);
  }
  updateClock();
  setInterval(updateClock, 60000);
}

document.addEventListener('DOMContentLoaded', init);
