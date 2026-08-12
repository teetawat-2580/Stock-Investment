// ─── Currency View ───────────────────────────────────────────
function renderCurrency(container) {
  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>💱 Currency Rates</h2>
        <p>อัตราแลกเปลี่ยนเทียบ 1 USD</p>
      </div>
    </div>

    <div class="kpi-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:24px">
      <div class="kpi-card">
        <span class="kpi-icon">🇹🇭</span>
        <div class="kpi-label">USD/THB</div>
        <div class="kpi-value">33.85</div>
        <div class="kpi-sub">1 USD = 33.85 บาท</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">🇪🇺</span>
        <div class="kpi-label">USD/EUR</div>
        <div class="kpi-value">0.8527</div>
        <div class="kpi-sub">1 USD = €0.8527</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">🇬🇧</span>
        <div class="kpi-label">USD/GBP</div>
        <div class="kpi-value">0.7413</div>
        <div class="kpi-sub">1 USD = £0.7413</div>
      </div>
      <div class="kpi-card">
        <span class="kpi-icon">🇯🇵</span>
        <div class="kpi-label">USD/JPY</div>
        <div class="kpi-value">155.47</div>
        <div class="kpi-sub">1 USD = ¥155.47</div>
      </div>
    </div>

    <div class="card">
      <div class="currency-header">
        <div class="card-title" style="margin-bottom:0">อัตราแลกเปลี่ยนทั้งหมด (${currencyData.length} สกุล)</div>
        <div class="search-box">
          <span class="search-icon">🔍</span>
          <input type="text" id="currency-search" placeholder="ค้นหาสกุลเงิน..." oninput="filterCurrency(this.value)">
        </div>
      </div>
      <div class="table-wrap" style="max-height:500px;overflow-y:auto;margin-top:14px">
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>สกุลเงิน</th>
              <th>1 USD =</th>
              <th>1 หน่วย = USD</th>
              <th>เทียบ THB (1 USD)</th>
            </tr>
          </thead>
          <tbody id="currency-tbody">
            ${renderCurrencyRows(currencyData)}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderCurrencyRows(data) {
  return data.map((c, i) => {
    const thbPerUnit = (c.inv * 33.85).toFixed(4);
    return `
      <tr>
        <td style="color:var(--text-muted)">${i+1}</td>
        <td><strong>${c.name}</strong></td>
        <td class="num">${formatNum(c.per1USD, c.per1USD > 100 ? 2 : 4)}</td>
        <td class="num" style="color:var(--text-secondary)">$${formatNum(c.inv, 6)}</td>
        <td class="num" style="color:var(--accent-1)">฿${thbPerUnit}</td>
      </tr>`;
  }).join('');
}

function filterCurrency(query) {
  const tbody = document.getElementById('currency-tbody');
  if (!tbody) return;
  const filtered = currencyData.filter(c => c.name.toLowerCase().includes(query.toLowerCase()));
  tbody.innerHTML = renderCurrencyRows(filtered);
}
