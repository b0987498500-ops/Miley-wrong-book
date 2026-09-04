class App {
  constructor() {
    this.currentTab = 'review';
    this.currentSubjectFilter = null;
    this.currentMondayFilter = null;
    this.init();
  }

  init() {
    this.bindNavigation();
    this.bindSidebarToggle();
    this.bindTopbarToggle();
    this.bindSidebarSubjectFilter();
    this.bindBrandHomeClick();
    this.renderWeeklyMondayBar();
    this.bindThemeToggle();
    this.bindResetData();
    this.updateSidebarCounts();

    // Initialize Sub-modules
    if (window.UploadModule) window.UploadModule.init();
    if (window.ArchiveModule) window.ArchiveModule.init();
    if (window.ReviewModule) window.ReviewModule.init();
    if (window.SprintModule) window.SprintModule.init();
    if (window.AnalyticsModule) window.AnalyticsModule.init();
    if (window.WisdomModule) window.WisdomModule.init();
    if (window.CardModule) window.CardModule.init();

    // Show Interactive Battle Arena Welcome Screen on Homepage launch
    if (window.ReviewModule) window.ReviewModule.loadReviewQueue(null, null);
  }

  bindNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        const tab = item.dataset.tab;
        this.switchTab(tab);
      });
    });
  }

  bindSidebarToggle() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    const topbarTriggerBtn = document.getElementById('topbar-sidebar-trigger');

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        const isCollapsed = sidebar.classList.contains('collapsed');
        toggleBtn.setAttribute('title', isCollapsed ? '展開側邊欄' : '收合側邊欄');
      });
    }

    if (topbarTriggerBtn && sidebar) {
      topbarTriggerBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
      });
    }
  }

  bindTopbarToggle() {
    const topHeader = document.getElementById('top-header');
    const toggleBtn = document.getElementById('topbar-toggle-btn');

    if (toggleBtn && topHeader) {
      toggleBtn.addEventListener('click', () => {
        topHeader.classList.toggle('collapsed');
        const isCollapsed = topHeader.classList.contains('collapsed');
        toggleBtn.setAttribute('title', isCollapsed ? '展開頂部欄' : '收合頂部欄');
      });
    }
  }

  startReviewWithFilter(subject = null, monday = null, enableFullscreen = false) {
    this.currentSubjectFilter = subject;
    this.currentMondayFilter = monday;

    // Switch to review tab directly
    this.switchTab('review');

    // Load review queue with filter
    if (window.ReviewModule) {
      window.ReviewModule.loadReviewQueue(this.currentSubjectFilter, this.currentMondayFilter);
    }

    // Enter fullscreen review mode only if explicitly requested
    if (enableFullscreen) {
      document.body.classList.add('fullscreen-review-mode');
      const btn = document.getElementById('btn-toggle-fullscreen');
      if (btn) btn.innerHTML = '<i class="fa-solid fa-compress"></i> 退出全螢幕';
    } else {
      document.body.classList.remove('fullscreen-review-mode');
      const btn = document.getElementById('btn-toggle-fullscreen');
      if (btn) btn.innerHTML = '<i class="fa-solid fa-expand"></i> 全螢幕專注大畫面';
    }
  }

  bindSidebarSubjectFilter() {
    const subjectBtns = document.querySelectorAll('.sidebar-subject-btn');
    subjectBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        subjectBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const subject = btn.dataset.subject;
        this.currentSubjectFilter = subject;

        // Sync with ArchiveModule subject filter chip if present
        if (window.ArchiveModule) {
          window.ArchiveModule.currentSubject = subject;
        }

        // Direct jump into Review Mode (Standard view first, let user choose fullscreen)
        this.startReviewWithFilter(subject, this.currentMondayFilter || 'ALL', false);
      });
    });
  }

  bindBrandHomeClick() {
    const brandBtn = document.getElementById('brand-logo-btn');
    if (!brandBtn) return;

    brandBtn.addEventListener('click', (e) => {
      // Prevent sidebar toggle button from triggering page reload if toggle button clicked
      if (e.target.closest('#sidebar-toggle-btn')) return;

      if (window.location.protocol === 'file:') {
        // Reset state safely under file:// protocol without triggering origin warnings
        this.currentSubjectFilter = null;
        this.currentMondayFilter = null;
        document.querySelectorAll('.sidebar-subject-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.monday-chip').forEach(c => c.classList.remove('active'));
        this.switchTab('review');
        if (window.ReviewModule) window.ReviewModule.loadReviewQueue(null, null);
      } else {
        window.location.reload();
      }
    });
  }

  renderWeeklyMondayBar() {
    const chipsContainer = document.getElementById('weekly-monday-chips');
    if (!chipsContainer || !window.dataManager) return;

    const mondayDates = window.dataManager.getAllMondayDates();
    let html = '';

    mondayDates.forEach((dateStr) => {
      const parts = dateStr.split('-');
      let formattedDate = dateStr;
      if (parts.length === 3) {
        const month = parseInt(parts[1], 10);
        const day = parseInt(parts[2], 10);
        formattedDate = `${month}/${day}`;
      }

      let badgeLabel = formattedDate;
      if (dateStr === '2026-08-24') {
        badgeLabel = '本週';
      } else if (dateStr === '2026-08-31') {
        badgeLabel = '下週';
      }

      const isActive = dateStr === this.currentMondayFilter ? 'active' : '';

      html += `
        <button class="monday-chip ${isActive}" data-monday="${dateStr}">
          <i class="fa-regular fa-calendar-check"></i> ${badgeLabel}
        </button>
      `;
    });

    chipsContainer.innerHTML = html;

    // Bind Monday Chips click events -> Direct Jump to Review Mode!
    chipsContainer.querySelectorAll('.monday-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        chipsContainer.querySelectorAll('.monday-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        const monday = chip.dataset.monday;
        this.currentMondayFilter = monday;

        if (window.ArchiveModule) {
          window.ArchiveModule.currentMonday = monday;
        }

        // Direct jump into Review Mode (Standard view first, let user choose fullscreen)
        this.startReviewWithFilter(this.currentSubjectFilter || 'ALL', monday, false);
      });
    });
  }

  switchTab(tabId) {
    this.currentTab = tabId;

    // Update Nav Buttons Active State
    document.querySelectorAll('.nav-item').forEach(item => {
      if (item.dataset.tab === tabId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update Tab Views Visibility
    document.querySelectorAll('.tab-view').forEach(view => {
      if (view.id === `view-${tabId}`) {
        view.classList.add('active');
      } else {
        view.classList.remove('active');
      }
    });

    // Page Titles Update
    const titles = {
      review: { title: '麥麥錯題本', sub: '' },
      card: { title: '翻轉填空學習卡', sub: '選擇科目進行重點填空特訓，點擊卡片自由 3D 翻轉觀看解答與記憶點' },
      upload: { title: '錯題上傳與處理', sub: '' },
      archive: { title: '階層分類與樹狀目錄管理', sub: '段考 ➔ 週一日期樹狀歸檔、標籤與 AI 概念聚類' },
      sprint: { title: '段考高頻衝刺與隨身卡', sub: '錯誤≥2次高頻題篩選、15分鐘 Swipe UI 隨身卡、AI 變形題驗收' },
      analytics: { title: '學習數據與盲點分析', sub: '失分原因佔比統計與 Top 3 核心概念弱點排行榜' }
    };

    if (titles[tabId]) {
      const pageTitleEl = document.getElementById('page-title');
      const pageSubEl = document.getElementById('page-subtitle');
      if (pageTitleEl) pageTitleEl.innerText = titles[tabId].title;
      if (pageSubEl) {
        pageSubEl.innerText = titles[tabId].sub;
        pageSubEl.style.display = titles[tabId].sub ? 'block' : 'none';
      }
    }

    // Refresh specific module data when switching to it
    if (tabId === 'archive' && window.ArchiveModule) {
      window.ArchiveModule.renderTree();
      window.ArchiveModule.renderConceptCloud();
      window.ArchiveModule.renderCards();
    } else if (tabId === 'review' && window.ReviewModule) {
      window.ReviewModule.loadReviewQueue(this.currentSubjectFilter, this.currentMondayFilter);
    } else if (tabId === 'sprint' && window.SprintModule) {
      window.SprintModule.loadSprintQuestions();
    } else if (tabId === 'analytics' && window.AnalyticsModule) {
      window.AnalyticsModule.renderChart();
      window.AnalyticsModule.renderTopWeaknesses();
    }

    this.updateSidebarCounts();
  }

  bindThemeToggle() {
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (!toggleBtn) return;

    toggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      const isLight = document.body.classList.contains('light-theme');
      toggleBtn.innerHTML = isLight ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    });
  }

  bindResetData() {
    const resetBtn = document.getElementById('reset-data-btn');
    if (!resetBtn) return;

    resetBtn.addEventListener('click', () => {
      if (confirm('確定要重置為預設示範錯題資料嗎？現有修改將會被覆蓋。')) {
        window.dataManager.resetToSeed();
        this.renderWeeklyMondayBar();
        this.refreshAllViews();
        alert('已成功重置種子錯題資料！');
      }
    });
  }

  updateSidebarCounts() {
    let pendingQuestions = window.dataManager.getPendingReviewQuestions();
    if (this.currentMondayFilter && this.currentMondayFilter !== 'ALL') {
      pendingQuestions = pendingQuestions.filter(q => window.dataManager.isQuestionInMonday(q, this.currentMondayFilter));
    }
    const dueCountEl = document.getElementById('due-review-count');
    if (dueCountEl) dueCountEl.innerText = pendingQuestions.length;

    const sprintQuestions = window.dataManager.getHighFrequencyQuestions('ALL');
    const sprintBadge = document.getElementById('sprint-badge');
    if (sprintBadge) sprintBadge.innerText = sprintQuestions.length;

    // Filter questions by currently selected Monday week filter
    let targetQuestions = window.dataManager.getAll();
    if (this.currentMondayFilter && this.currentMondayFilter !== 'ALL') {
      targetQuestions = targetQuestions.filter(q => window.dataManager.isQuestionInMonday(q, this.currentMondayFilter));
    }

    const isSubjMatch = (qSubj, targetSubj) => {
      if (!targetSubj || targetSubj === 'ALL') return true;
      if (!qSubj) return false;
      const q = String(qSubj).trim();
      const t = String(targetSubj).trim();
      if (q === t) return true;
      if (t === '國文') return q === '國文' || q.includes('國文');
      if (t === '英文') return q === '英文' || q.includes('英文');
      if (t === '數學') return q === '數學' || q.includes('數學');
      if (t === '社會') return q.includes('社會') || q.includes('公民') || q.includes('地理') || q.includes('歷史');
      if (t === '自然/理化' || t === '自然') return q.includes('自然') || q.includes('理化') || q.includes('生物') || q.includes('地科');
      return q === t;
    };

    const subjectCounts = {
      'ALL': targetQuestions.length,
      '國文': targetQuestions.filter(q => isSubjMatch(q.subject, '國文')).length,
      '英文': targetQuestions.filter(q => isSubjMatch(q.subject, '英文')).length,
      '數學': targetQuestions.filter(q => isSubjMatch(q.subject, '數學')).length,
      '自然/理化': targetQuestions.filter(q => isSubjMatch(q.subject, '自然/理化')).length,
      '社會': targetQuestions.filter(q => isSubjMatch(q.subject, '社會')).length
    };

    document.querySelectorAll('.sidebar-subject-btn').forEach(btn => {
      const subj = btn.dataset.subject;
      let badge = btn.querySelector('.subj-count-badge');
      if (!badge) {
        badge = document.createElement('span');
        badge.className = 'subj-count-badge';
        btn.appendChild(badge);
      }
      badge.innerText = `${subjectCounts[subj] || 0}題`;
    });

    if (window.WisdomModule) {
      window.WisdomModule.updateHeaderBadge();
    }
  }

  refreshAllViews() {
    if (window.ArchiveModule) {
      window.ArchiveModule.renderTree();
      window.ArchiveModule.renderConceptCloud();
      window.ArchiveModule.renderCards();
    }
    if (window.ReviewModule) window.ReviewModule.loadReviewQueue(this.currentSubjectFilter, this.currentMondayFilter);
    if (window.SprintModule) window.SprintModule.loadSprintQuestions();
    if (window.AnalyticsModule) {
      window.AnalyticsModule.renderChart();
      window.AnalyticsModule.renderTopWeaknesses();
    }
    this.updateSidebarCounts();
  }
}

// Global App Initialization on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new App();
});
