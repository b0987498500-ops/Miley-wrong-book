class App {
  constructor() {
    this.currentTab = 'review';
    this.currentSubjectFilter = null;
    this.currentMondayFilter = null;
    this.init();
  }

  init() {
    try {
      this.lastCheckedDate = window.dataManager ? window.dataManager.getTodayDateStr() : '';
      this.currentMondayFilter = null;

      this.bindNavigation();
      this.bindSidebarToggle();
      this.initSidebarResizer();
      this.bindTopbarToggle();
      this.bindSidebarSubjectFilter();
      this.bindBrandHomeClick();
      this.renderWeeklyMondayBar();
      this.bindThemeToggle();
      this.bindFontSizeControls();
      this.bindResetData();
      this.updateSidebarCounts();
      this.startDailyUpdateTimer();
    } catch (e) {
      console.warn('App core init warning:', e);
    }

    // Initialize Sub-modules safely
    try { if (window.UploadModule) window.UploadModule.init(); } catch (e) { console.error(e); }
    try { if (window.ArchiveModule) window.ArchiveModule.init(); } catch (e) { console.error(e); }
    try { if (window.ReviewModule) window.ReviewModule.init(); } catch (e) { console.error(e); }
    try { if (window.SprintModule) window.SprintModule.init(); } catch (e) { console.error(e); }
    try { if (window.AnalyticsModule) window.AnalyticsModule.init(); } catch (e) { console.error(e); }
    try { if (window.CalendarModule) window.CalendarModule.init(); } catch (e) { console.error(e); }
    try { if (window.WisdomModule) window.WisdomModule.init(); } catch (e) { console.error(e); }

    // Load monster battle home page on launch
    try {
      if (window.ReviewModule) {
        window.ReviewModule.loadReviewQueue(null, null);
      }
    } catch (e) {
      console.error(e);
    }
  }

  startDailyUpdateTimer() {
    // Check every 30 seconds for date changes (midnight cross or date sync)
    setInterval(() => {
      this.checkAndUpdateDailyState();
    }, 30000);

    // Check on tab visibility change or focus
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.checkAndUpdateDailyState();
      }
    });

    window.addEventListener('focus', () => {
      this.checkAndUpdateDailyState();
    });
  }

  checkAndUpdateDailyState() {
    if (!window.dataManager) return;
    const todayStr = window.dataManager.getTodayDateStr();
    if (this.lastCheckedDate !== todayStr) {
      this.lastCheckedDate = todayStr;
      
      // Update calendar header & countdown
      if (window.CalendarModule) {
        window.CalendarModule.updateTopDateDisplay();
        window.CalendarModule.renderCalendar();
      }

      // Re-render weekly Monday chips bar
      const newCurrentMonday = window.dataManager.getCurrentMondayDate();
      if (this.currentMondayFilter && this.currentMondayFilter !== 'ALL') {
        this.currentMondayFilter = newCurrentMonday;
      }

      this.renderWeeklyMondayBar();
      this.refreshAllViews();
    }
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
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
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

  initSidebarResizer() {
    const resizer = document.getElementById('sidebar-resizer');
    const sidebar = document.getElementById('sidebar');
    if (!resizer || !sidebar) return;

    // Restore saved width from localStorage if on desktop
    try {
      const savedWidth = localStorage.getItem('miley_sidebar_width');
      if (savedWidth && window.innerWidth > 1024) {
        const parsed = parseInt(savedWidth, 10);
        if (!isNaN(parsed) && parsed >= 190 && parsed <= 500) {
          document.documentElement.style.setProperty('--sidebar-width', `${parsed}px`);
        }
      }
    } catch (e) {
      console.warn('Could not read sidebar width from localStorage:', e);
    }

    let isResizing = false;
    let startX = 0;
    let startWidth = 280;

    const onPointerMove = (e) => {
      if (!isResizing) return;
      e.preventDefault();

      const clientX = (e.clientX !== undefined) ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      const deltaX = clientX - startX;
      let newWidth = startWidth + deltaX;

      const minWidth = 190;
      const maxWidth = Math.min(500, Math.floor(window.innerWidth * 0.45));
      newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));

      document.documentElement.style.setProperty('--sidebar-width', `${newWidth}px`);
    };

    const onPointerUp = () => {
      if (!isResizing) return;
      isResizing = false;
      document.body.classList.remove('sidebar-resizing');

      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);

      const finalWidth = Math.round(sidebar.getBoundingClientRect().width);
      if (finalWidth >= 190 && finalWidth <= 500) {
        try {
          localStorage.setItem('miley_sidebar_width', finalWidth);
        } catch (e) {
          console.warn('Could not save sidebar width:', e);
        }
      }
    };

    const onPointerDown = (e) => {
      // Only trigger on primary mouse button (0) or touch
      if (e.type === 'mousedown' && e.button !== 0) return;
      if (sidebar.classList.contains('collapsed')) return;
      if (window.innerWidth <= 1024) return;

      isResizing = true;
      startX = (e.clientX !== undefined) ? e.clientX : (e.touches && e.touches[0] ? e.touches[0].clientX : 0);
      startWidth = sidebar.getBoundingClientRect().width;

      document.body.classList.add('sidebar-resizing');

      window.addEventListener('mousemove', onPointerMove, { passive: false });
      window.addEventListener('mouseup', onPointerUp);
      window.addEventListener('touchmove', onPointerMove, { passive: false });
      window.addEventListener('touchend', onPointerUp);
      e.preventDefault();
    };

    resizer.addEventListener('mousedown', onPointerDown);
    resizer.addEventListener('touchstart', onPointerDown, { passive: false });

    // Double click to restore default 280px width
    resizer.addEventListener('dblclick', () => {
      document.documentElement.style.setProperty('--sidebar-width', '280px');
      try {
        localStorage.setItem('miley_sidebar_width', 280);
      } catch (e) {}
    });
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

  startReviewWithFilter(subject = null, monday = null, enableFullscreen = false, targetIndex = null) {
    this.currentSubjectFilter = subject;
    this.currentMondayFilter = monday;

    // Switch to review tab directly
    this.switchTab('review');

    // Load review queue with filter
    if (window.ReviewModule) {
      window.ReviewModule.loadReviewQueue(this.currentSubjectFilter, this.currentMondayFilter, targetIndex);
    }

    // Enter fullscreen review mode only if explicitly requested
    if (enableFullscreen) {
      document.body.classList.add('fullscreen-review-mode');
      const btn = document.getElementById('btn-toggle-fullscreen');
      if (btn) btn.innerHTML = '<i class="fa-solid fa-compress"></i> 退出全螢幕';
    } else {
      document.body.classList.remove('fullscreen-review-mode');
      const btn = document.getElementById('btn-toggle-fullscreen');
      if (btn) btn.innerHTML = '<i class="fa-solid fa-expand"></i> 全螢幕';
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

    const ebbBox = document.querySelector('.ebbinghaus-summary-box');
    if (ebbBox) {
      ebbBox.addEventListener('click', () => {
        subjectBtns.forEach(b => b.classList.remove('active'));
        this.currentSubjectFilter = 'ALL';
        if (window.ArchiveModule) {
          window.ArchiveModule.currentSubject = 'ALL';
        }
        this.startReviewWithFilter('ALL', this.currentMondayFilter || 'ALL', false);
      });
    }
  }

  bindBrandHomeClick() {
    const brandBtn = document.getElementById('brand-logo-btn');
    if (!brandBtn) return;

    brandBtn.addEventListener('click', (e) => {
      // Prevent sidebar toggle button from triggering page reload if toggle button clicked
      if (e.target.closest('#sidebar-toggle-btn')) return;

      this.currentSubjectFilter = null;
      this.currentMondayFilter = null;

      document.querySelectorAll('.sidebar-subject-btn').forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.monday-chip').forEach(c => c.classList.remove('active'));
      
      this.switchTab('review');
      this.renderWeeklyMondayBar();
      if (window.ReviewModule) {
        window.ReviewModule.loadReviewQueue(null, null);
      }
    });
  }

  renderWeeklyMondayBar() {
    try {
      const chipsContainer = document.getElementById('weekly-monday-chips');
      if (!chipsContainer || !window.dataManager) return;

      const mondayDates = typeof window.dataManager.getAllMondayDates === 'function'
        ? window.dataManager.getAllMondayDates()
        : [];
      if (!Array.isArray(mondayDates)) return;

      const currentMonday = typeof window.dataManager.getCurrentMondayDate === 'function'
        ? window.dataManager.getCurrentMondayDate()
        : '';
      const nextMonday = typeof window.dataManager.getNextMondayDate === 'function'
        ? window.dataManager.getNextMondayDate(currentMonday)
        : '';
      let html = '';

      mondayDates.forEach((dateStr) => {
        if (!dateStr || typeof dateStr !== 'string' || !dateStr.includes('-')) return;

        const parts = dateStr.split('-');
        let formattedDate = dateStr;
        if (parts.length === 3) {
          const month = parseInt(parts[1], 10);
          const day = parseInt(parts[2], 10);
          formattedDate = `${month}/${day}`;
        }

        let badgeLabel = formattedDate;
        if (dateStr === currentMonday) {
          badgeLabel = '本週 (' + formattedDate + ')';
        } else if (dateStr === nextMonday) {
          badgeLabel = '下週 (' + formattedDate + ')';
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
    } catch (err) {
      console.error('Error rendering weekly monday bar:', err);
    }
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

  bindFontSizeControls() {
    const FONT_STORAGE_KEY = 'miley_font_scale_level';
    // Font scale levels: 100% (標準), 115% (舒適中大), 130% (清晰大字), 145% (特大), 160% (超大)
    const levels = [
      { scale: 1.0, label: '100%' },
      { scale: 1.15, label: '115%' },
      { scale: 1.30, label: '130%' },
      { scale: 1.45, label: '145%' },
      { scale: 1.60, label: '160%' }
    ];

    let currentIdx = 0;
    const savedLevel = localStorage.getItem(FONT_STORAGE_KEY);
    if (savedLevel !== null && !isNaN(parseInt(savedLevel, 10))) {
      currentIdx = Math.max(0, Math.min(levels.length - 1, parseInt(savedLevel, 10)));
    }

    const applyFontScale = (idx) => {
      currentIdx = Math.max(0, Math.min(levels.length - 1, idx));
      const lvl = levels[currentIdx];
      document.documentElement.style.setProperty('--content-font-scale', lvl.scale);
      localStorage.setItem(FONT_STORAGE_KEY, currentIdx.toString());

      // Update review UI indicator
      const reviewIndicator = document.getElementById('review-font-indicator');
      if (reviewIndicator) reviewIndicator.innerText = lvl.label;
    };

    // Apply initial font scale immediately
    applyFontScale(currentIdx);

    // Review Toolbar Inline Buttons
    const btnReviewInc = document.getElementById('btn-review-font-inc');
    const btnReviewDec = document.getElementById('btn-review-font-dec');
    if (btnReviewInc) {
      btnReviewInc.addEventListener('click', (e) => {
        e.stopPropagation();
        applyFontScale(currentIdx + 1);
      });
    }
    if (btnReviewDec) {
      btnReviewDec.addEventListener('click', (e) => {
        e.stopPropagation();
        applyFontScale(currentIdx - 1);
      });
    }
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
