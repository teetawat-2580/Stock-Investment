// ─── Stock Analysis View ─────────────────────────────────────
let analysisChart = null;
let activeAnalysisStock = 'AMZN';

function renderAnalysis(container) {
  const stocks = Object.keys(analysisData);

  container.innerHTML = `
    <div class="page-header">
      <div>
        <h2>🔬 Stock Analysis</h2>
        <p>งบการเงินรายไตรมาส — Revenue, Gross Profit, Operating Income</p>
      </div>
    </div>

    <div class="tab-bar">
      ${stocks.map(s => `
        <button class="tab-btn${s === activeAnalysisStock ? ' active' : ''}"
          onclick="switchAnalysisStock('${s}',this)">${s}</button>
      `).join('')}
    </div>

    <div id="analysis-content"></div>
  `;
  renderAnalysisContent(activeAnalysisStock);
}

function switchAnalysisStock(stock, btn) {
  activeAnalysisStock = stock;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderAnalysisContent(stock);
}

function renderAnalysisContent(stock) {
  const container = document.getElementById('analysis-content');
  if (!container) return;
  const data = analysisData[stock];
  if (!data) { container.innerHTML = '<div class="empty">ไม่มีข้อมูล</div>'; return; }

  const metrics = Object.keys(data.metrics);
  const quarters = data.quarters;

  // Choose chart metrics (first 2 or 3)
  const chartMetrics = metrics.filter(m => !m.includes('%')).slice(0, 3);
  const CHART_COLORS = ['#00d4aa','#0099ff','#b388ff','#ffb74d'];

  container.innerHTML = `
    <div class="grid-2" style="margin-bottom:24px">
      <div class="card">
        <div class="card-title">แนวโน้มรายไตรมาส (ล้านเหรียญ)</div>
        <div class="chart-wrap" style="height:280px">
          <canvas id="analysis-chart"></canvas>
        </div>
      </div>
      <div class="card">
        <div class="card-title">Highlights — ${quarters[0]}</div>
        <div style="display:flex;flex-direction:column;gap:14px;margin-top:8px;">
          ${chartMetrics.map((m, i) => {
            const vals = data.metrics[m];
            const latest  = vals[0];
            const prev    = vals[1];
            const change  = prev ? ((latest - prev) / Math.abs(prev) * 100) : 0;
            const pos     = change >= 0;
            return `
              <div>
                <div style="display:flex;justify-content:space-between;align-items:baseline">
                  <span style="font-size:13px;color:var(--text-secondary)">${m}</span>
                  <span class="${pos ? 'pnl-pos' : 'pnl-neg'}" style="font-size:12px">${pos?'▲':'▼'} ${Math.abs(change).toFixed(1)}% QoQ</span>
                </div>
                <div style="font-size:24px;font-weight:800;color:${CHART_COLORS[i]};margin:2px 0">
                  ${stock === 'CRWD' ? '$'+formatNum(latest,0)+'M' : '$'+formatNum(latest,0)+'M'}
                </div>
                <div class="progress-bar" style="height:5px;margin-top:4px">
                  <div class="progress-bar-fill" style="width:${Math.min(100,(latest/Math.max(...vals))*100).toFixed(0)}%;background:${CHART_COLORS[i]}"></div>
                </div>
              </div>`;
          }).join('')}
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-title">ตารางงบการเงินรายไตรมาส (USD M)</div>
      <div class="table-wrap" style="overflow-x:auto;max-height:380px">
        <table>
          <thead>
            <tr>
              <th>Metric</th>
              ${quarters.slice(0,12).map(q => `<th>${q}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${metrics.map(m => {
              const vals = data.metrics[m];
              return `<tr>
                <td style="font-weight:600;white-space:nowrap">${m}</td>
                ${vals.slice(0,12).map((v,i) => {
                  if (m.includes('%')) {
                    const pos = v >= 0;
                    return `<td class="num ${pos ? 'pnl-pos' : 'pnl-neg'}">${v.toFixed(2)}%</td>`;
                  }
                  return `<td class="num">${formatNum(v,0)}</td>`;
                }).join('')}
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  // Draw chart
  const ctx = document.getElementById('analysis-chart').getContext('2d');
  if (analysisChart) analysisChart.destroy();

  const displayQ = quarters.slice(0, 10).reverse();
  analysisChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: displayQ,
      datasets: chartMetrics.map((m, i) => ({
        label: m,
        data: data.metrics[m].slice(0,10).reverse(),
        borderColor: CHART_COLORS[i],
        backgroundColor: CHART_COLORS[i] + '18',
        borderWidth: 2.5,
        pointRadius: 4,
        pointHoverRadius: 7,
        tension: 0.4,
        fill: i === 0
      }))
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: { labels: { color: '#8899bb', font: { family: 'Outfit', size: 12 } } },
        tooltip: {
          backgroundColor: '#10172a',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: $${formatNum(ctx.raw,0)}M`
          }
        }
      },
      scales: {
        x: { ticks: { color: '#4a5a80', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
        y: { ticks: { color: '#4a5a80', callback: v => '$'+formatBigNum(v) }, grid: { color: 'rgba(255,255,255,0.04)' } }
      }
    }
  });
}
