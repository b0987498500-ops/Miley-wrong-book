/**
 * Module 5: 學習數據與反饋 (Learning Analytics & Feedback)
 * Error Reason Distribution Chart (Chart.js Pie/Doughnut), Top 3 Concept Weaknesses Ranking
 * with direct "立即專項練習" cross-link shortcut.
 */

window.AnalyticsModule = {
  chartInstance: null,

  init: function() {
    this.bindEvents();
    this.renderChart();
    this.renderTopWeaknesses();
  },

  bindEvents: function() {
    const self = this;
    const timeSelect = document.getElementById('analytics-time-select');
    if (timeSelect) {
      timeSelect.addEventListener('change', () => {
        self.renderChart();
        self.renderTopWeaknesses();
      });
    }
  },

  renderChart: function() {
    const canvas = document.getElementById('error-reason-chart');
    if (!canvas || !window.Chart) return;

    const timeFilter = document.getElementById('analytics-time-select')?.value || '二段';
    let questions = window.dataManager.getAll();

    if (timeFilter !== 'ALL') {
      questions = questions.filter(q => q.examPeriod === timeFilter);
    }

    const reasons = ['計算粗心', '觀念不懂', '題目看錯', '公式忘記'];
    const counts = reasons.map(r => questions.filter(q => q.errorReason === r).length);

    if (this.chartInstance) {
      this.chartInstance.destroy();
    }

    const ctx = canvas.getContext('2d');
    this.chartInstance = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: reasons,
        datasets: [{
          data: counts,
          backgroundColor: [
            '#3b82f6', // 計算粗心 (Blue)
            '#ef4444', // 觀念不懂 (Red)
            '#f59e0b', // 題目看錯 (Amber)
            '#ec4899'  // 公式忘記 (Pink)
          ],
          borderWidth: 2,
          borderColor: '#111827'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              color: '#cbd5e1',
              font: { family: "'Noto Sans TC', sans-serif", size: 12 }
            }
          }
        }
      }
    });

    // Chart Insight Summary Text
    const maxIdx = counts.indexOf(Math.max(...counts));
    const mainReason = maxIdx >= 0 ? reasons[maxIdx] : '無';
    const totalErr = counts.reduce((a, b) => a + b, 0);
    const mainPercent = totalErr > 0 ? Math.round((counts[maxIdx] / totalErr) * 100) : 0;

    const insightEl = document.getElementById('chart-insights');
    if (insightEl) {
      insightEl.innerHTML = `
        <i class="fa-solid fa-lightbulb" style="color: var(--accent-warning);"></i>
        <strong>數據分析診斷：</strong>此期間共記錄 ${totalErr} 次失分，其中以「<strong style="color:var(--accent-danger);">${mainReason}</strong>」佔比最高 (${mainPercent}%)。建議針對對應主題加強觀念特訓與題意審讀！
      `;
    }
  },

  renderTopWeaknesses: function() {
    const listEl = document.getElementById('top-weakness-list');
    if (!listEl) return;

    const timeFilter = document.getElementById('analytics-time-select')?.value || '二段';
    let questions = window.dataManager.getAll();

    if (timeFilter !== 'ALL') {
      questions = questions.filter(q => q.examPeriod === timeFilter);
    }

    // Rank concepts by error frequency & errorCount sum
    const conceptStats = {};
    questions.forEach(q => {
      if (!q.concept) return;
      if (!conceptStats[q.concept]) {
        conceptStats[q.concept] = { concept: q.concept, subject: q.subject, count: 0, totalErrorCount: 0 };
      }
      conceptStats[q.concept].count += 1;
      conceptStats[q.concept].totalErrorCount += (q.errorCount || 1);
    });

    const sorted = Object.values(conceptStats).sort((a, b) => b.totalErrorCount - a.totalErrorCount).slice(0, 3);

    if (sorted.length === 0) {
      listEl.innerHTML = `<p style="color: var(--text-muted); text-align: center; padding: 20px;">尚無弱點統計數據。</p>`;
      return;
    }

    let html = '';
    sorted.forEach((item, index) => {
      html += `
        <div class="weakness-item">
          <div class="rank-badge">#${index + 1}</div>
          <div class="weakness-info">
            <div class="weakness-name">${item.concept}</div>
            <div class="weakness-meta">${item.subject} • 累積失分 ${item.totalErrorCount} 次 (${item.count} 題錯題)</div>
          </div>
          <div class="weakness-action">
            <button class="btn-practice-concept" data-concept="${item.concept}">
              <i class="fa-solid fa-bullseye"></i> 立即專項練習
            </button>
          </div>
        </div>
      `;
    });

    listEl.innerHTML = html;

    // Bind "立即專項練習" buttons to switch to Archive view with concept filter
    listEl.querySelectorAll('.btn-practice-concept').forEach(btn => {
      btn.addEventListener('click', () => {
        const concept = btn.dataset.concept;
        if (window.ArchiveModule) {
          window.ArchiveModule.currentConcept = concept;
          window.ArchiveModule.updateTitleIndicator(`AI 概念聚類特訓：#${concept}`);
          window.ArchiveModule.renderCards();
        }
        if (window.app) window.app.switchTab('archive');
      });
    });
  }
};
