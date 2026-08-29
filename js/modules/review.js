/**
 * Module 3: 週末日常複習 (Weekend Routine Review & Flashcard Mode)
 * Fullscreen Flashcard Test UI, Screen Calculation Scratchpad, Fluorescent Yellow Top Note,
 * Ebbinghaus spaced repetition mechanism (1W, 2W, 4W & 2x Mastered Archive Rule), A4 Dual PDF Export.
 */

window.ReviewModule = {
  activeQuestions: [],
  currentIndex: 0,
  isAnswerRevealed: false,
  scratchCanvas: null,
  scratchCtx: null,
  isScratchDrawing: false,
  scratchHistory: [],

  init: function() {
    this.bindEvents();
    this.bindWelcomeEvents();
    this.initScratchpad();
    this.loadReviewQueue();
  },

  bindEvents: function() {
    const self = this;

    // Prev / Next Navigation Arrows
    document.getElementById('fc-prev-btn')?.addEventListener('click', () => self.prevQuestion());
    document.getElementById('fc-next-btn')?.addEventListener('click', () => self.nextQuestion());

    // See Explanation Yellow Button & Card Body Click
    const revealBtn = document.getElementById('fc-reveal-btn');
    if (revealBtn) {
      revealBtn.onclick = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        self.revealAnswer();
      };
      revealBtn.addEventListener('click', (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        self.revealAnswer();
      });
    }

    const mainCard = document.getElementById('main-flashcard');
    if (mainCard) {
      mainCard.addEventListener('click', (e) => {
        if (!self.isAnswerRevealed && !e.target.closest('button')) {
          self.revealAnswer();
        }
      });
    }

    // Feedback Buttons (Mastered / Unmastered)
    document.getElementById('btn-mark-unmastered')?.addEventListener('click', () => self.handleFeedback(false));
    document.getElementById('btn-mark-mastered')?.addEventListener('click', () => self.handleFeedback(true));

    // Delete Question From Current Week Only
    document.getElementById('btn-delete-this-week')?.addEventListener('click', (e) => {
      e.stopPropagation();
      self.deleteCurrentQuestionFromWeek();
    });

    // PDF Export Dropdown Actions
    const pdfMainBtn = document.getElementById('export-pdf-main-btn');
    const pdfMenu = document.getElementById('pdf-dropdown-menu');

    if (pdfMainBtn && pdfMenu) {
      pdfMainBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        pdfMenu.classList.toggle('show');
      });

      document.addEventListener('click', () => pdfMenu.classList.remove('show'));
    }

    document.getElementById('export-pdf-test-paper')?.addEventListener('click', () => {
      window.pdfExportUtils.exportTestPaper(self.activeQuestions);
    });

    document.getElementById('export-pdf-answer-paper')?.addEventListener('click', () => {
      window.pdfExportUtils.exportAnswerPaper(self.activeQuestions);
    });

    // Fullscreen Toggle Button Action
    document.getElementById('btn-toggle-fullscreen')?.addEventListener('click', () => {
      document.body.classList.toggle('fullscreen-review-mode');
      const isFullscreen = document.body.classList.contains('fullscreen-review-mode');
      
      if (isFullscreen) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen().catch(() => {});
        }
      } else {
        if (document.exitFullscreen && document.fullscreenElement) {
          document.exitFullscreen().catch(() => {});
        }
      }

      const btn = document.getElementById('btn-toggle-fullscreen');
      if (btn) {
        btn.innerHTML = isFullscreen ? '<i class="fa-solid fa-compress"></i> 退出全螢幕' : '<i class="fa-solid fa-expand"></i> 全螢幕專注大畫面';
      }
    });

    // Global Keyboard Shortcuts for Fullscreen Flashcard Review
    document.addEventListener('keydown', (e) => {
      // Ignore if typing in text inputs or textareas
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      // Only handle if in review tab
      if (!document.getElementById('view-review')?.classList.contains('active')) return;

      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        if (!self.isAnswerRevealed) {
          self.revealAnswer();
        }
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        self.prevQuestion();
      } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        self.nextQuestion();
      } else if (e.key === '1') {
        if (self.isAnswerRevealed) self.handleFeedback(false);
      } else if (e.key === '2') {
        if (self.isAnswerRevealed) self.handleFeedback(true);
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        const scratchOverlay = document.getElementById('scratchpad-overlay');
        if (scratchOverlay?.classList.contains('hidden')) {
          self.openScratchpad();
        } else {
          self.closeScratchpad();
        }
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        document.getElementById('btn-toggle-fullscreen')?.click();
      }
    });

    // Scratchpad Modal Toggle
    document.getElementById('toggle-scratchpad-btn')?.addEventListener('click', () => self.openScratchpad());
    document.getElementById('scratch-close-btn')?.addEventListener('click', () => self.closeScratchpad());
    document.getElementById('scratch-clear-btn')?.addEventListener('click', () => self.clearScratchpad());
    document.getElementById('scratch-undo-btn')?.addEventListener('click', () => self.undoScratchpad());
  },

  motivationalQuotes: [
    '✨ 每一道弄懂的錯題，都是離滿分更近一步的勳章！戰勝盲點，未來的你會感謝現在堅持的自己 🚀',
    '🔥 錯題是最好的老師！今天搞懂一個觀念，明天考試就多拿幾分 💪',
    '🌟 勇敢面對盲點，把不懂變精通！你的每一次複習，都在為夢想積蓄能量 💡',
    '🚀 堅持是世界上最棒的超能力！把錯題變成得分點，你遠比想像中更優秀 ✨',
    '🎯 弄懂一道錯題，勝過盲目做十題！專注當下，每一刻進步都算數 🔥'
  ],

  updateMotivationalQuote: function() {
    const mottoEl = document.getElementById('review-motto-text');
    if (mottoEl) {
      const idx = Math.floor(Math.random() * this.motivationalQuotes.length);
      mottoEl.innerHTML = `<i class="fa-solid fa-quote-left" style="font-size: 0.75rem; margin-right: 4px; opacity: 0.6;"></i> ${this.motivationalQuotes[idx]}`;
    }
  },

  currentSubjectFilter: null,
  currentMondayFilter: null,

  loadReviewQueue: function(subjectFilter = null, mondayFilter = null) {
    if (subjectFilter !== undefined) this.currentSubjectFilter = subjectFilter;
    if (mondayFilter !== undefined) this.currentMondayFilter = mondayFilter;

    // Check if both filters are unselected/null -> Show Battle Arena Welcome Screen!
    const isUnselected = !this.currentSubjectFilter && !this.currentMondayFilter;

    const welcomeStage = document.getElementById('review-welcome-stage');
    const cardContainer = document.getElementById('review-card-container');
    const reviewHeader = document.querySelector('.review-header');

    if (isUnselected) {
      if (welcomeStage) welcomeStage.classList.remove('hidden');
      if (cardContainer) cardContainer.classList.add('hidden');
      if (reviewHeader) reviewHeader.classList.add('hidden');
      this.renderWelcomeHero();
      return;
    }

    // Filters are selected -> show flashcard review container!
    if (welcomeStage) welcomeStage.classList.add('hidden');
    if (cardContainer) cardContainer.classList.remove('hidden');
    if (reviewHeader) reviewHeader.classList.remove('hidden');

    const targetSubject = this.currentSubjectFilter || 'ALL';
    const targetMonday = this.currentMondayFilter || 'ALL';

    let list = window.dataManager.getAll();

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

    if (targetSubject && targetSubject !== 'ALL') {
      list = list.filter(q => isSubjMatch(q.subject, targetSubject));
    }

    if (targetMonday && targetMonday !== 'ALL' && targetMonday !== 'undefined') {
      list = list.filter(q => window.dataManager.isQuestionInMonday(q, targetMonday));
    }

    this.activeQuestions = list;
    this.currentIndex = 0;
    this.updateMotivationalQuote();
    this.renderCurrentCard();
  },

  renderWelcomeHero: function() {
    const allQuestions = window.dataManager.getAll();
    const defeatedCount = allQuestions.filter(q => q.isArchived || (q.consecutiveMastered || 0) > 0).length;

    const countEl = document.getElementById('defeated-monsters-count');
    if (countEl) countEl.innerText = defeatedCount;

    const rateEl = document.getElementById('mastery-rate-badge');
    if (rateEl) {
      const total = allQuestions.length || 1;
      const pct = Math.round((defeatedCount / total) * 100);
      rateEl.innerHTML = `<i class="fa-solid fa-shield-halved"></i> 討伐率 ${pct}% (${defeatedCount}/${allQuestions.length}題)`;
    }
  },

  bindWelcomeEvents: function() {
    const attackBtn = document.getElementById('btn-attack-monster');
    const monsterChar = document.getElementById('monster-character');
    
    const doAttack = () => {
      const slashFx = document.getElementById('battle-slash-fx');
      const dmgPopup = document.getElementById('damage-popup');
      const hpFill = document.getElementById('monster-hp-fill');

      if (monsterChar) {
        monsterChar.classList.remove('hit-shake');
        void monsterChar.offsetWidth;
        monsterChar.classList.add('hit-shake');
      }

      if (slashFx) {
        slashFx.classList.remove('active');
        void slashFx.offsetWidth;
        slashFx.classList.add('active');
      }

      if (dmgPopup) {
        const damages = ['CRITICAL -9999!', 'SWORD SLASH -5800!', 'CONCEPT HIT -8888!', 'PERFECT! -12000!'];
        const randomDmg = damages[Math.floor(Math.random() * damages.length)];
        dmgPopup.innerText = randomDmg;
      }

      if (hpFill) {
        const currentHp = Math.max(10, Math.floor(Math.random() * 60) + 20);
        hpFill.style.width = `${currentHp}%`;
      }
    };

    if (attackBtn) attackBtn.addEventListener('click', doAttack);
    if (monsterChar) monsterChar.addEventListener('click', doAttack);
  },

  prevQuestion: function() {
    if (this.activeQuestions.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + this.activeQuestions.length) % this.activeQuestions.length;
    this.renderCurrentCard();
  },

  nextQuestion: function() {
    if (this.activeQuestions.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.activeQuestions.length;
    this.renderCurrentCard();
  },

  updateProgressDisplay: function() {
    if (this.activeQuestions.length === 0) {
      document.getElementById('review-current-index').innerText = `題目 0 / 0`;
      document.getElementById('review-progress-fill').style.width = `0%`;
      return;
    }

    const completed = this.isAnswerRevealed ? (this.currentIndex + 1) : this.currentIndex;
    const total = this.activeQuestions.length;
    const fillPercent = Math.min((completed / total) * 100, 100);

    document.getElementById('review-current-index').innerText = `題目 ${completed} / ${total}`;
    document.getElementById('review-progress-fill').style.width = `${fillPercent}%`;
  },

  renderCurrentCard: function() {
    const mainCard = document.getElementById('main-flashcard');
    if (!mainCard) return;

    if (this.activeQuestions.length === 0) {
      this.updateProgressDisplay();
      const activeSubj = (this.currentSubjectFilter && this.currentSubjectFilter !== 'ALL') ? this.currentSubjectFilter : '全部科目';
      
      const subjEl = document.getElementById('fc-subject');
      if (subjEl) subjEl.innerText = activeSubj;
      
      const reasonEl = document.getElementById('fc-reason');
      if (reasonEl) reasonEl.innerText = '尚無數據';
      
      const conceptEl = document.getElementById('fc-concept');
      if (conceptEl) conceptEl.innerText = '# 尚無錯題';
      
      const badgeEl = document.getElementById('fc-mastery-badge');
      if (badgeEl) {
        badgeEl.className = 'mastery-status unmastered';
        badgeEl.innerText = '未擊敗 (0 次)';
      }
      
      const stageEl = document.getElementById('review-ebbinghaus-stage');
      if (stageEl) stageEl.innerText = '艾賓浩斯週期: 第 - 週次';

      const stemTextEl = document.getElementById('fc-stem-text');
      if (stemTextEl) {
        stemTextEl.innerHTML = `
          <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
            <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 12px; opacity: 0.5;"></i>
            <h3>此科目 (${activeSubj}) / 週次目前尚無錯題數據</h3>
            <p style="margin-top: 8px; font-size: 0.9rem;">您可以切換其它科目或點擊上方切換其它週次！</p>
          </div>
        `;
      }

      const optionsTextEl = document.getElementById('fc-options-text');
      if (optionsTextEl) optionsTextEl.innerHTML = '';

      document.getElementById('fc-diagram-container')?.classList.add('hidden');
      document.getElementById('fc-answer-container')?.classList.add('hidden');
      document.getElementById('fc-reveal-btn')?.classList.add('hidden');
      document.getElementById('fc-feedback-btns')?.classList.add('hidden');
      
      const noteTextEl = document.getElementById('fc-mistake-note-text');
      if (noteTextEl) noteTextEl.innerText = '尚無防錯筆記';

      return;
    }

    const q = this.activeQuestions[this.currentIndex];
    this.isAnswerRevealed = false;

    // Update Progress Bar & Counter (0 / Total before answer reveal)
    this.updateProgressDisplay();
    document.getElementById('review-ebbinghaus-stage').innerText = `艾賓浩斯週期: 第 ${q.ebbinghausStage || 1} 週次`;

    // Meta Tags & Mastery
    document.getElementById('fc-subject').innerText = q.subject;
    document.getElementById('fc-reason').innerText = q.errorReason;
    document.getElementById('fc-concept').innerText = `# ${q.concept}`;
    
    const badgeEl = document.getElementById('fc-mastery-badge');
    if (badgeEl) {
      const isMastered = (q.consecutiveMastered || 0) > 0 || q.isArchived;
      if (isMastered) {
        badgeEl.className = 'mastery-status mastered';
        badgeEl.innerHTML = `<i class="fa-solid fa-check"></i> 已擊敗`;
      } else {
        const times = q.errorCount || 1;
        badgeEl.className = 'mastery-status unmastered';
        badgeEl.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> 未擊敗 (${times} 次)`;
      }
    }

    // Separate Stem Text & Options for Middle Diagram Placement
    let stemMain = q.stem;
    let optionsText = '';

    const optionIndex = q.stem.indexOf('○ (A)');
    if (optionIndex !== -1) {
      stemMain = q.stem.substring(0, optionIndex).trim();
      optionsText = q.stem.substring(optionIndex).trim();
    } else {
      const optionIndexAlt = q.stem.indexOf('(A)');
      if (optionIndexAlt !== -1) {
        stemMain = q.stem.substring(0, optionIndexAlt).trim();
        optionsText = q.stem.substring(optionIndexAlt).trim();
      }
    }

    // 1. Render Top Stem Text
    window.katexUtils.renderText('fc-stem-text', stemMain);

    // 2. Render Middle Diagram Image (Moved UP right below stem text, ABOVE options!)
    const diagContainer = document.getElementById('fc-diagram-container');
    const diagImg = document.getElementById('fc-diagram-img');
    if (q.diagramUrl && diagContainer && diagImg) {
      diagImg.src = q.diagramUrl;
      diagContainer.classList.remove('hidden');
    } else if (diagContainer) {
      diagContainer.classList.add('hidden');
    }

    // 3. Render Bottom Options Text
    window.katexUtils.renderText('fc-options-text', optionsText);

    // Reset Split Container Class
    document.querySelector('.card-grid-split')?.classList.remove('has-answer');

    // Hide Answer Container initially
    document.getElementById('fc-answer-container').classList.add('hidden');
    document.getElementById('fc-reveal-btn').classList.remove('hidden');
    document.getElementById('fc-feedback-btns').classList.add('hidden');

    // Set Fluorescent Yellow Mistake Note (AT THE VERY TOP)
    const noteTextEl = document.getElementById('fc-mistake-note-text');
    if (noteTextEl) {
      noteTextEl.innerText = q.mistakeNote || '無自訂防錯筆記（建議在上傳錯題時錄入防錯口訣）';
    }

    // Render Answer & Steps
    document.getElementById('fc-std-answer').innerText = q.answer;
    window.katexUtils.renderText('fc-solution-steps', q.solution);
  },

  revealAnswer: function() {
    this.isAnswerRevealed = true;
    this.updateProgressDisplay();
    
    const splitGrid = document.querySelector('.card-grid-split');
    if (splitGrid) splitGrid.classList.add('has-answer');

    const ansContainer = document.getElementById('fc-answer-container');
    if (ansContainer) ansContainer.classList.remove('hidden');

    const revealBtn = document.getElementById('fc-reveal-btn');
    if (revealBtn) revealBtn.classList.add('hidden');

    const fbBtns = document.getElementById('fc-feedback-btns');
    if (fbBtns) fbBtns.classList.remove('hidden');
  },

  handleFeedback: function(isMastered) {
    const q = this.activeQuestions[this.currentIndex];
    const updatedQ = window.dataManager.updateQuestionMastery(q.id, isMastered);

    if (!isMastered && updatedQ) {
      const nextDate = updatedQ.mondayDate;
      const parts = nextDate.split('-');
      const formatted = parts.length === 3 ? `${parseInt(parts[1], 10)}/${parseInt(parts[2], 10)}` : nextDate;
      this.showToast(`📌 已將此題移至下週 (${formatted}) 重新複習！`);
    }

    if (window.app && window.app.renderWeeklyMondayBar) {
      window.app.renderWeeklyMondayBar();
    }

    // Advance to next card
    this.currentIndex++;
    if (this.currentIndex >= this.activeQuestions.length) {
      alert('🎉 恭喜！已完成本次週末線上抽認卡複習測驗！');
      this.loadReviewQueue(window.app?.currentSubjectFilter, window.app?.currentMondayFilter);
    } else {
      this.renderCurrentCard();
    }

    // Update global sidebar badge
    if (window.app) window.app.updateSidebarCounts();
  },

  deleteCurrentQuestionFromWeek: function() {
    if (this.activeQuestions.length === 0) return;
    const q = this.activeQuestions[this.currentIndex];
    if (!q) return;

    const currentMonday = window.app?.currentMondayFilter || q.mondayDate || '2026-08-24';
    const parts = currentMonday.split('-');
    const formattedWeek = parts.length === 3 ? `${parseInt(parts[1], 10)}/${parseInt(parts[2], 10)}` : currentMonday;

    if (confirm(`確定要將此題僅從 ${formattedWeek} 週次中刪除嗎？\n（若此題包含其它週次，其它週次將不受影響）`)) {
      window.dataManager.removeQuestionFromWeek(q.id, currentMonday);
      this.showToast(`🗑️ 已從 ${formattedWeek} 週次清單中移除此題！`);

      if (window.app) {
        if (window.app.renderWeeklyMondayBar) window.app.renderWeeklyMondayBar();
        if (window.app.updateSidebarCounts) window.app.updateSidebarCounts();
      }

      this.loadReviewQueue(window.app?.currentSubjectFilter, currentMonday);
    }
  },

  showToast: function(message) {
    let toast = document.getElementById('ux-toast-message');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'ux-toast-message';
      toast.className = 'ux-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fa-solid fa-calendar-plus" style="color: #f59e0b;"></i> ${message}`;
    toast.classList.add('show');
    clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2500);
  },

  scratchColor: '#ef4444',
  scratchSize: 3,

  /* Screen Calculation Scratchpad (Transparent Overlay Canvas) */
  initScratchpad: function() {
    const overlay = document.getElementById('scratchpad-overlay');
    const canvas = document.getElementById('scratchpad-canvas');
    if (!canvas || !overlay) return;

    this.scratchCanvas = canvas;
    this.scratchCtx = canvas.getContext('2d');

    const self = this;
    let drawing = false;

    // Color Pickers
    const colorDots = overlay.querySelectorAll('.color-dot');
    colorDots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        colorDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        self.scratchColor = dot.dataset.color;
      });
    });

    const customColorInput = document.getElementById('scratch-color-custom');
    if (customColorInput) {
      customColorInput.addEventListener('input', (e) => {
        self.scratchColor = e.target.value;
        colorDots.forEach(d => d.classList.remove('active'));
      });
    }

    // Size Pickers
    const sizeDots = overlay.querySelectorAll('.size-dot');
    sizeDots.forEach(dot => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        sizeDots.forEach(d => d.classList.remove('active'));
        dot.classList.add('active');
        self.scratchSize = parseInt(dot.dataset.size, 10);
      });
    });

    const startDraw = (e) => {
      drawing = true;
      self.saveScratchState();
      draw(e);
    };

    const stopDraw = () => {
      if (drawing) {
        drawing = false;
        self.scratchCtx.beginPath();
      }
    };

    const draw = (e) => {
      if (!drawing) return;
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
      const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

      self.scratchCtx.lineWidth = self.scratchSize;
      self.scratchCtx.lineCap = 'round';
      self.scratchCtx.lineJoin = 'round';
      self.scratchCtx.strokeStyle = self.scratchColor;

      self.scratchCtx.lineTo(x, y);
      self.scratchCtx.stroke();
      self.scratchCtx.beginPath();
      self.scratchCtx.moveTo(x, y);
    };

    canvas.onmousedown = startDraw;
    canvas.onmouseup = stopDraw;
    canvas.onmousemove = draw;
    canvas.onmouseleave = stopDraw;

    canvas.ontouchstart = startDraw;
    canvas.ontouchend = stopDraw;
    canvas.ontouchmove = draw;
  },

  openScratchpad: function() {
    const overlay = document.getElementById('scratchpad-overlay');
    if (!overlay) return;

    overlay.classList.remove('hidden');
    this.scratchCanvas.width = window.innerWidth;
    this.scratchCanvas.height = window.innerHeight;

    // Default to bright red if light theme
    if (document.body.classList.contains('light-theme')) {
      this.scratchColor = '#ef4444';
    } else {
      this.scratchColor = '#3b82f6';
    }

    // Keep background 100% transparent
    this.scratchCtx.clearRect(0, 0, this.scratchCanvas.width, this.scratchCanvas.height);
    this.scratchHistory = [];
    this.saveScratchState();
  },

  closeScratchpad: function() {
    document.getElementById('scratchpad-overlay')?.classList.add('hidden');
  },

  clearScratchpad: function() {
    if (this.scratchCanvas && this.scratchCtx) {
      this.scratchCtx.clearRect(0, 0, this.scratchCanvas.width, this.scratchCanvas.height);
      this.saveScratchState();
    }
  },

  saveScratchState: function() {
    if (!this.scratchCtx) return;
    try {
      this.scratchHistory.push(this.scratchCtx.getImageData(0, 0, this.scratchCanvas.width, this.scratchCanvas.height));
      if (this.scratchHistory.length > 10) this.scratchHistory.shift();
    } catch(e) {
      console.warn('Scratch state save note:', e);
    }
  },

  undoScratchpad: function() {
    if (this.scratchHistory.length > 1) {
      this.scratchHistory.pop();
      const state = this.scratchHistory[this.scratchHistory.length - 1];
      this.scratchCtx.putImageData(state, 0, 0);
    } else if (this.scratchHistory.length === 1) {
      this.scratchCtx.clearRect(0, 0, this.scratchCanvas.width, this.scratchCanvas.height);
    }
  }
};
