/**
 * Module 3: 週末日常複習 (Weekend Routine Review & Flashcard Mode)
 * Fullscreen Flashcard Test UI, Screen Calculation Scratchpad, Fluorescent Yellow Top Note,
 * Ebbinghaus spaced repetition mechanism (1W, 2W, 4W & 2x Mastered Archive Rule), A4 Dual PDF Export.
 */

window.ReviewModule = {
  activeQuestions: [],
  currentIndex: 0,
  isAnswerRevealed: false,
  selectedChoice: null,
  hasInteractiveOptions: false,
  currentOptionsMap: null,
  scratchCanvas: null,
  scratchCtx: null,
  isScratchDrawing: false,
  scratchHistory: [],

  init: function() {
    this.bindEvents();
    this.bindWelcomeEvents();
    this.initScratchpad();
    this.loadReviewQueue(null, null);
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

    const diagContainer = document.getElementById('fc-diagram-container');
    const diagImg = document.getElementById('fc-diagram-img');
    if (diagContainer && diagImg) {
      diagContainer.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (diagImg.src) {
          window.UploadModule?.openLightbox('題目附圖高清全螢幕放大檢視', diagImg.src);
        }
      });
    }

    const mainCard = document.getElementById('main-flashcard');
    if (mainCard) {
      mainCard.addEventListener('click', (e) => {
        if (e.target.closest('#fc-diagram-container') || 
            e.target.closest('.fc-interactive-options') || 
            e.target.closest('.fc-option-card') || 
            e.target.closest('.card-action-bar') || 
            e.target.closest('button') || 
            e.target.closest('input') || 
            e.target.closest('textarea')) return;
        if (!self.hasInteractiveOptions && !self.isAnswerRevealed) {
          self.revealAnswer();
        }
      });
    }

    // Interactive Choice Button & Retry Button
    document.getElementById('fc-check-answer-btn')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      self.checkAnswer();
    });

    document.getElementById('btn-retry-question')?.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      self.retryQuestion();
    });

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
        btn.innerHTML = isFullscreen ? '<i class="fa-solid fa-compress"></i> 退出全螢幕' : '<i class="fa-solid fa-expand"></i> 全螢幕';
      }
    });

    // Keep fullscreen UI state in sync when user exits via ESC key
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement && document.body.classList.contains('fullscreen-review-mode')) {
        document.body.classList.remove('fullscreen-review-mode');
        const btn = document.getElementById('btn-toggle-fullscreen');
        if (btn) {
          btn.innerHTML = '<i class="fa-solid fa-expand"></i> 全螢幕';
        }
      }
    });

    // Global Keyboard Shortcuts for Fullscreen Flashcard Review
    document.addEventListener('keydown', (e) => {
      // Ignore if typing in text inputs or textareas
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      // Only handle if in review tab
      if (!document.getElementById('view-review')?.classList.contains('active')) return;

      if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key) && !self.isAnswerRevealed && self.hasInteractiveOptions) {
        self.selectChoice(e.key.toUpperCase());
      } else if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        if (!self.isAnswerRevealed) {
          if (self.hasInteractiveOptions) {
            self.checkAnswer();
          } else {
            self.revealAnswer();
          }
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

    // Similar Question Interactive Challenge Modal Actions
    document.getElementById('btn-generate-similar-q')?.addEventListener('click', () => self.openSimilarQuestionModal());
    document.getElementById('btn-close-similar-modal')?.addEventListener('click', () => self.closeSimilarQuestionModal());
    document.getElementById('btn-dismiss-similar-question')?.addEventListener('click', () => self.dismissSimilarQuestion());
    document.getElementById('btn-refresh-similar-question')?.addEventListener('click', () => self.refreshSimilarQuestion());
    document.getElementById('btn-add-similar-to-wrong-book')?.addEventListener('click', () => self.addSimilarQuestionToWrongBook());
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
    if (mondayFilter !== undefined) {
      this.currentMondayFilter = mondayFilter;
    }

    const welcomeStage = document.getElementById('review-welcome-stage');
    const cardContainer = document.getElementById('review-card-container');
    const reviewHeader = document.querySelector('.review-header');

    if (reviewHeader) reviewHeader.classList.remove('hidden');

    const isUnselected = !this.currentSubjectFilter && !this.currentMondayFilter;
    if (isUnselected) {
      if (welcomeStage) welcomeStage.classList.remove('hidden');
      if (cardContainer) cardContainer.classList.add('hidden');
      this.renderWelcomeHero();
      return;
    }

    // Filters are selected -> show flashcard review container!
    if (welcomeStage) welcomeStage.classList.add('hidden');
    if (cardContainer) cardContainer.classList.remove('hidden');

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
    this.scrollToCardTop();
  },

  nextQuestion: function() {
    if (this.activeQuestions.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % this.activeQuestions.length;
    this.renderCurrentCard();
    this.scrollToCardTop();
  },

  scrollToCardTop: function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const mainContent = document.querySelector('.main-content');
    if (mainContent) mainContent.scrollTo({ top: 0, behavior: 'smooth' });
    const mainCard = document.getElementById('main-flashcard');
    if (mainCard) {
      mainCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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

  extractOptions: function(stem) {
    if (!stem || typeof stem !== 'string') return { hasOptions: false, stemMain: stem, options: null };

    let optStartIdx = stem.indexOf('○ (A)');
    if (optStartIdx === -1) optStartIdx = stem.indexOf('(A)');
    if (optStartIdx === -1) optStartIdx = stem.indexOf('○(A)');
    
    if (optStartIdx === -1) {
      return { hasOptions: false, stemMain: stem, options: null };
    }

    const stemMain = stem.substring(0, optStartIdx).trim();
    const optionsPart = stem.substring(optStartIdx).trim();

    // Regex to match (A), (B), (C), (D) or ○ (A)
    const regex = /(?:○\s*)?\(?([A-D])\)?[\s\.、]*(.*?)(?=(?:○\s*)?\(?[A-D]\)?[\s\.、]*|$)/gs;
    const matches = [...optionsPart.matchAll(regex)];

    if (matches && matches.length >= 2) {
      const opts = {};
      matches.forEach(m => {
        const letter = m[1].toUpperCase();
        const text = (m[2] || '').trim();
        if (letter && text) {
          opts[letter] = text;
        }
      });

      if (Object.keys(opts).length >= 2) {
        return { hasOptions: true, stemMain: stemMain, options: opts };
      }
    }

    return { hasOptions: false, stemMain: stem, options: null };
  },

  selectChoice: function(choice) {
    if (this.isAnswerRevealed) return;
    this.selectedChoice = choice;

    const cards = document.querySelectorAll('.fc-option-card');
    cards.forEach(card => {
      const c = card.getAttribute('data-choice');
      if (c === choice) {
        card.classList.add('selected');
        card.setAttribute('aria-checked', 'true');
      } else {
        card.classList.remove('selected');
        card.setAttribute('aria-checked', 'false');
      }
    });

    // Hide any previous warning banner
    const banner = document.getElementById('fc-check-result-banner');
    if (banner && banner.classList.contains('banner-warning')) {
      banner.classList.add('hidden');
    }

    // Dynamic button update
    const checkBtn = document.getElementById('fc-check-answer-btn');
    if (checkBtn) {
      checkBtn.classList.add('ready-to-check');
      checkBtn.innerHTML = `<i class="fa-solid fa-circle-check"></i> 對答案 (已選 ${choice})`;
    }
  },

  checkAnswer: function() {
    if (this.isAnswerRevealed) return;

    const q = this.activeQuestions[this.currentIndex];
    if (!q) return;

    // Check if fill-in question without multiple choice options
    if (!this.hasInteractiveOptions) {
      this.revealAnswer();
      return;
    }

    if (!this.selectedChoice) {
      const banner = document.getElementById('fc-check-result-banner');
      if (banner) {
        banner.className = 'fc-check-result-banner banner-warning';
        banner.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> <span>請先點選一個選項 (A / B / C / D) 再對答案喔！</span>';
        banner.classList.remove('hidden');
      }
      const optsContainer = document.getElementById('fc-interactive-options');
      if (optsContainer) {
        optsContainer.classList.add('shake-animation');
        setTimeout(() => optsContainer.classList.remove('shake-animation'), 600);
      }
      return;
    }

    // Extract target letter from standard answer
    const ansMatch = (q.answer || '').match(/\(([A-D])\)/i) || (q.answer || '').match(/^([A-D])(?:\b|[^\w])/i);
    const targetLetter = ansMatch ? ansMatch[1].toUpperCase() : null;

    const userChoice = this.selectedChoice.toUpperCase();
    const isCorrect = (targetLetter && userChoice === targetLetter);

    // Style option cards
    const cards = document.querySelectorAll('.fc-option-card');
    cards.forEach(card => {
      const choice = card.getAttribute('data-choice');
      const badgeSlot = card.querySelector('.fc-option-badge-slot');

      if (choice === userChoice) {
        if (isCorrect) {
          card.classList.add('is-correct');
          if (badgeSlot) badgeSlot.innerHTML = '<span class="fc-status-pill pill-correct"><i class="fa-solid fa-check"></i> 答對了！</span>';
        } else {
          card.classList.add('is-wrong');
          if (badgeSlot) badgeSlot.innerHTML = '<span class="fc-status-pill pill-wrong"><i class="fa-solid fa-xmark"></i> 妳選的</span>';
        }
      }

      if (!isCorrect && choice === targetLetter) {
        card.classList.add('is-actual-target');
        if (badgeSlot) badgeSlot.innerHTML = '<span class="fc-status-pill pill-target"><i class="fa-solid fa-check"></i> 正確答案</span>';
      }
    });

    // Show result banner
    const banner = document.getElementById('fc-check-result-banner');
    if (banner) {
      if (isCorrect) {
        banner.className = 'fc-check-result-banner banner-correct';
        banner.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>太棒了，答對了！🎉 正確答案是 <strong>(${targetLetter})</strong></span>`;
      } else {
        banner.className = 'fc-check-result-banner banner-wrong';
        banner.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> <span>這題答錯囉！妳選擇了 <strong>(${userChoice})</strong>，正確答案是 <strong>(${targetLetter || q.answer})</strong></span>`;
      }
      banner.classList.remove('hidden');
    }

    // Reveal answer and solutions
    this.revealAnswer(isCorrect);
  },

  retryQuestion: function() {
    this.isAnswerRevealed = false;
    this.selectedChoice = null;

    // Reset banner
    const banner = document.getElementById('fc-check-result-banner');
    if (banner) {
      banner.className = 'fc-check-result-banner hidden';
      banner.innerHTML = '';
    }

    // Reset option cards
    const cards = document.querySelectorAll('.fc-option-card');
    cards.forEach(card => {
      card.classList.remove('selected', 'is-correct', 'is-wrong', 'is-actual-target');
      card.setAttribute('aria-checked', 'false');
      const badgeSlot = card.querySelector('.fc-option-badge-slot');
      if (badgeSlot) badgeSlot.innerHTML = '';
    });

    // Reset split container & hide answer
    document.querySelector('.card-grid-split')?.classList.remove('has-answer');
    document.getElementById('fc-answer-container')?.classList.add('hidden');

    // Reset buttons
    if (this.hasInteractiveOptions) {
      const checkBtn = document.getElementById('fc-check-answer-btn');
      if (checkBtn) {
        checkBtn.classList.remove('hidden', 'ready-to-check');
        checkBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> 對答案';
      }
      const revealBtn = document.getElementById('fc-reveal-btn');
      if (revealBtn) {
        revealBtn.classList.remove('hidden');
        revealBtn.classList.add('btn-reveal-secondary');
        revealBtn.innerHTML = '<i class="fa-solid fa-eye"></i> 直接看解析';
      }
    } else {
      document.getElementById('fc-check-answer-btn')?.classList.add('hidden');
      const revealBtn = document.getElementById('fc-reveal-btn');
      if (revealBtn) {
        revealBtn.classList.remove('hidden', 'btn-reveal-secondary');
        revealBtn.innerHTML = '<i class="fa-solid fa-eye"></i> 查看解析';
      }
    }
    document.getElementById('fc-feedback-btns')?.classList.add('hidden');

    // Reset fill-in inputs if any
    const fillInputs = document.querySelectorAll('.fc-fill-in-input');
    fillInputs.forEach(inp => {
      inp.disabled = false;
      inp.classList.remove('input-correct', 'input-wrong', 'input-revealed');
      inp.value = '';
    });
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

    // Reset state & result banner
    this.selectedChoice = null;
    this.isAnswerRevealed = false;
    this.currentOptionsMap = null;

    const banner = document.getElementById('fc-check-result-banner');
    if (banner) {
      banner.className = 'fc-check-result-banner hidden';
      banner.innerHTML = '';
    }

    // Separate Stem Text & Options
    const optExtraction = this.extractOptions(q.stem);
    this.hasInteractiveOptions = optExtraction.hasOptions;
    let stemMain = optExtraction.stemMain;

    // Interactive Fill-in-the-Blank Slot Converter (Line-by-line & Question-Number Aware)
    let slotIndex = 0;
    const stemLines = stemMain.split('\n');
    const processedLines = stemLines.map(line => {
      // Never convert instruction / header lines into fill-in inputs
      const isInstruction = /^\s*(【|請依|請在|請寫出|說明|注意事項)/.test(line);
      if (isInstruction) return line;

      // Extract item number if present (e.g. "2.", "8.", "10.")
      const numMatch = line.match(/^\s*(\d+)[\.。、\s]/);
      const qNum = numMatch ? numMatch[1] : '';

      return line.replace(/【[　\s]*】/g, function() {
        slotIndex++;
        const qAttr = qNum ? `data-qnum="${qNum}"` : '';
        return `<span class="fill-in-box-wrapper">【<input type="text" class="fc-fill-in-input" data-slot="${slotIndex}" ${qAttr} maxlength="4" placeholder="寫字" autocomplete="off" autocorrect="off">】</span>`;
      });
    });
    const interactiveStem = processedLines.join('\n');

    // 1. Render Top Stem Text
    window.katexUtils.renderText('fc-stem-text', interactiveStem);

    // 2. Render Middle Diagram Image (Moved UP right below stem text, ABOVE options!)
    const diagContainer = document.getElementById('fc-diagram-container');
    const diagImg = document.getElementById('fc-diagram-img');
    if (q.diagramUrl && diagContainer && diagImg) {
      diagImg.src = q.diagramUrl;
      diagContainer.classList.remove('hidden');
    } else if (diagContainer) {
      diagContainer.classList.add('hidden');
    }

    // 3. Render Interactive Options (or fallback)
    const optionsTextEl = document.getElementById('fc-options-text');
    if (this.hasInteractiveOptions && optionsTextEl) {
      this.currentOptionsMap = optExtraction.options;
      const letters = Object.keys(optExtraction.options).sort();
      let html = '<div class="fc-interactive-options" id="fc-interactive-options" role="radiogroup" aria-label="選擇題選項">';
      letters.forEach(letter => {
        html += `
          <div class="fc-option-card" data-choice="${letter}" tabindex="0" role="radio" aria-checked="false">
            <div class="fc-option-indicator">
              <span class="fc-option-pill">${letter}</span>
            </div>
            <div class="fc-option-content" id="fc-opt-text-${letter}"></div>
            <div class="fc-option-badge-slot"></div>
          </div>
        `;
      });
      html += '</div>';
      optionsTextEl.innerHTML = html;

      // Render KaTeX for each option
      letters.forEach(letter => {
        window.katexUtils.renderText(`fc-opt-text-${letter}`, optExtraction.options[letter]);
      });

      // Bind click on option cards
      const self = this;
      optionsTextEl.querySelectorAll('.fc-option-card').forEach(card => {
        card.addEventListener('click', (e) => {
          e.stopPropagation();
          const choice = card.getAttribute('data-choice');
          self.selectChoice(choice);
        });
      });

      // Show "對答案" button and secondary "直接看解析"
      const checkBtn = document.getElementById('fc-check-answer-btn');
      if (checkBtn) {
        checkBtn.classList.remove('hidden', 'ready-to-check');
        checkBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> 對答案';
      }
      const revealBtn = document.getElementById('fc-reveal-btn');
      if (revealBtn) {
        revealBtn.classList.remove('hidden');
        revealBtn.classList.add('btn-reveal-secondary');
        revealBtn.innerHTML = '<i class="fa-solid fa-eye"></i> 直接看解析';
      }
    } else if (optionsTextEl) {
      optionsTextEl.innerHTML = '';
      
      const checkBtn = document.getElementById('fc-check-answer-btn');
      if (checkBtn) {
        const hasFillIn = stemMain.includes('fc-fill-in-input') || q.stem.includes('【');
        if (hasFillIn) {
          checkBtn.classList.remove('hidden', 'ready-to-check');
          checkBtn.innerHTML = '<i class="fa-solid fa-circle-check"></i> 對答案';
        } else {
          checkBtn.classList.add('hidden');
        }
      }
      const revealBtn = document.getElementById('fc-reveal-btn');
      if (revealBtn) {
        revealBtn.classList.remove('hidden', 'btn-reveal-secondary');
        revealBtn.innerHTML = '<i class="fa-solid fa-eye"></i> 查看解析';
      }
    }

    // Reset Split Container Class
    document.querySelector('.card-grid-split')?.classList.remove('has-answer');

    // Hide Answer Container initially
    document.getElementById('fc-answer-container').classList.add('hidden');
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

  revealAnswer: function(isCorrect) {
    this.isAnswerRevealed = true;
    this.updateProgressDisplay();
    
    const splitGrid = document.querySelector('.card-grid-split');
    if (splitGrid) splitGrid.classList.add('has-answer');

    const ansContainer = document.getElementById('fc-answer-container');
    if (ansContainer) ansContainer.classList.remove('hidden');

    // If opened via "直接看解析" without answering, highlight target option
    if (this.hasInteractiveOptions && isCorrect === undefined) {
      const q = this.activeQuestions[this.currentIndex];
      const ansMatch = (q.answer || '').match(/\(([A-D])\)/i) || (q.answer || '').match(/^([A-D])(?:\b|[^\w])/i);
      const targetLetter = ansMatch ? ansMatch[1].toUpperCase() : null;
      if (targetLetter) {
        const cards = document.querySelectorAll('.fc-option-card');
        cards.forEach(card => {
          if (card.getAttribute('data-choice') === targetLetter) {
            card.classList.add('is-actual-target');
            const badgeSlot = card.querySelector('.fc-option-badge-slot');
            if (badgeSlot) badgeSlot.innerHTML = '<span class="fc-status-pill pill-target"><i class="fa-solid fa-check"></i> 正確答案</span>';
          }
        });
      }
    }

    // Auto-check and reveal fill-in inputs against target characters
    const q = this.activeQuestions[this.currentIndex];
    const fillInputs = document.querySelectorAll('.fc-fill-in-input');
    if (fillInputs.length > 0 && q && q.answer) {
      // Build question number mapping (e.g. { '2': '鍪', '8': '悠', '9': '休', '10': '闋' })
      const answerLines = q.answer.split('\n');
      const numToCharMap = {};
      answerLines.forEach(aLine => {
        const nMatch = aLine.match(/^\s*(\d+)[\.。、\s]/);
        const charMatch = aLine.match(/【([^】]+)】/);
        if (nMatch && charMatch) {
          numToCharMap[nMatch[1]] = charMatch[1].trim();
        }
      });

      const fallbackChars = (q.answer.match(/【([^】]+)】/g) || []).map(s => s.replace(/【|】/g, '').trim());

      fillInputs.forEach((inp, idx) => {
        inp.disabled = true;
        const val = inp.value.trim();
        const qNum = inp.getAttribute('data-qnum');
        const expected = (qNum && numToCharMap[qNum]) ? numToCharMap[qNum] : fallbackChars[idx];

        if (expected) {
          if (val && val === expected) {
            inp.classList.add('input-correct');
          } else if (val) {
            inp.classList.add('input-wrong');
            inp.title = `您的作答：${val}，正確答案：${expected}`;
          } else {
            inp.value = expected;
            inp.classList.add('input-revealed');
          }
        }
      });
    }

    // Hide buttons
    document.getElementById('fc-check-answer-btn')?.classList.add('hidden');
    document.getElementById('fc-reveal-btn')?.classList.add('hidden');

    // Show feedback buttons
    const fbBtns = document.getElementById('fc-feedback-btns');
    if (fbBtns) {
      fbBtns.classList.remove('hidden');
      const btnMastered = document.getElementById('btn-mark-mastered');
      const btnUnmastered = document.getElementById('btn-mark-unmastered');
      if (btnMastered && btnUnmastered) {
        btnMastered.classList.remove('pulse-recommend');
        btnUnmastered.classList.remove('pulse-recommend');
        if (isCorrect === true) {
          btnMastered.classList.add('pulse-recommend');
        } else if (isCorrect === false) {
          btnUnmastered.classList.add('pulse-recommend');
        }
      }
    }
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

    const currentMonday = window.app?.currentMondayFilter || q.mondayDate || (window.dataManager?.getCurrentMondayDate() || '2026-08-31');
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
  },

  /* ==================== SIMILAR QUESTION INTERACTIVE CHALLENGE MODULE ==================== */
  currentSimilarQuestion: null,
  similarQuestionAnswered: false,
  similarQuestionAdded: false,
  similarQuestionOffset: 0,

  openSimilarQuestionModal: function() {
    const q = this.activeQuestions[this.currentIndex];
    if (!q) {
      this.showToast('⚠️ 請先選擇上方科目或週次進入錯題卡片！');
      return;
    }

    this.similarQuestionOffset = 0;
    this.generateAndShowSimilarQuestion(q);
    
    const modal = document.getElementById('modal-similar-question');
    if (modal) {
      modal.classList.remove('hidden');
    }
  },

  closeSimilarQuestionModal: function() {
    document.getElementById('modal-similar-question')?.classList.add('hidden');
  },

  dismissSimilarQuestion: function() {
    this.closeSimilarQuestionModal();
    this.showToast('✨ 太棒了！本題觀念練習完畢，繼續衝刺！');
  },

  refreshSimilarQuestion: function() {
    const q = this.activeQuestions[this.currentIndex];
    if (!q) return;
    this.similarQuestionOffset++;
    this.generateAndShowSimilarQuestion(q);
    this.showToast('🔄 已為您更換另一題同觀念類似題！');
  },

  generateAndShowSimilarQuestion: function(q) {
    this.similarQuestionAnswered = false;
    this.similarQuestionAdded = false;

    const sq = this.getSimilarQuestionData(q, this.similarQuestionOffset);
    this.currentSimilarQuestion = sq;
    this.renderSimilarQuestionUI(sq);
  },

  renderSimilarQuestionUI: function(sq) {
    // 1. Concept Tag
    const conceptEl = document.getElementById('sq-modal-concept');
    if (conceptEl) conceptEl.innerText = sq.concept || '核心觀念自我強化';

    // 2. Question Stem
    window.katexUtils.renderText('sq-stem-text', sq.stem);

    // 3. Reset Options Grid
    const optGrid = document.getElementById('sq-options-grid');
    if (optGrid) {
      optGrid.innerHTML = '';
      sq.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'similar-opt-btn';
        btn.innerHTML = `<span style="font-weight: 700; color: var(--accent-warning); min-width: 28px;">${['(A)', '(B)', '(C)', '(D)'][idx]}</span> <span>${optText}</span>`;
        btn.addEventListener('click', () => this.handleSimilarOptionClick(idx));
        optGrid.appendChild(btn);
      });
    }

    // 4. Reset Solution Box
    const solBox = document.getElementById('sq-solution-box');
    if (solBox) solBox.classList.add('hidden');

    const resultBanner = document.getElementById('sq-result-banner');
    if (resultBanner) {
      resultBanner.className = 'sq-result-banner';
      resultBanner.innerHTML = '';
    }

    // 5. Reset Footer Buttons
    const addBtn = document.getElementById('btn-add-similar-to-wrong-book');
    if (addBtn) {
      addBtn.innerHTML = '<i class="fa-solid fa-bookmark"></i> 加入錯題本';
      addBtn.classList.remove('btn-secondary');
      addBtn.classList.add('btn-primary', 'btn-accent-glow');
    }
  },

  handleSimilarOptionClick: function(chosenIdx) {
    if (this.similarQuestionAnswered) return;
    this.similarQuestionAnswered = true;

    const sq = this.currentSimilarQuestion;
    if (!sq) return;

    const optButtons = document.querySelectorAll('#sq-options-grid .similar-opt-btn');
    optButtons.forEach(btn => btn.disabled = true);

    const isCorrect = (chosenIdx === sq.correctIndex);

    // Style the chosen option
    if (optButtons[chosenIdx]) {
      optButtons[chosenIdx].classList.add(isCorrect ? 'opt-correct' : 'opt-incorrect');
    }

    // Always highlight the correct option
    if (!isCorrect && optButtons[sq.correctIndex]) {
      optButtons[sq.correctIndex].classList.add('opt-correct');
    }

    // Result banner
    const resultBanner = document.getElementById('sq-result-banner');
    if (resultBanner) {
      if (isCorrect) {
        resultBanner.className = 'sq-result-banner banner-correct';
        resultBanner.innerHTML = '<i class="fa-solid fa-circle-check" style="font-size: 1.2rem;"></i> 🎉 太棒了，完全答對！核心觀念已透徹掌握！';
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.6 }
          });
        }
      } else {
        resultBanner.className = 'sq-result-banner banner-incorrect';
        resultBanner.innerHTML = '<i class="fa-solid fa-circle-xmark" style="font-size: 1.2rem;"></i> 💡 差一點點！這題有小陷阱，別灰心，快看下方詳解！';
      }
    }

    // Reveal Solution
    const solBox = document.getElementById('sq-solution-box');
    if (solBox) solBox.classList.remove('hidden');

    const ansEl = document.getElementById('sq-correct-answer');
    if (ansEl) ansEl.innerText = sq.correctAnswer;

    window.katexUtils.renderText('sq-explanation-text', sq.explanation);

    // Scroll to solution smoothly
    solBox?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  },

  addSimilarQuestionToWrongBook: function() {
    if (this.similarQuestionAdded) {
      this.showToast('ℹ️ 此類似題剛才已成功加入錯題本囉！');
      return;
    }

    const sq = this.currentSimilarQuestion;
    if (!sq) return;

    const currentQ = this.activeQuestions[this.currentIndex] || {};

    const fullStem = sq.stem + '\n\n' + sq.options.map((opt, i) => `${['(A)', '(B)', '(C)', '(D)'][i]} ${opt}`).join('\n');

    window.dataManager.addQuestion({
      examPeriod: currentQ.examPeriod || '一段',
      subject: sq.subject || currentQ.subject || '國文',
      errorReason: '觀念不懂',
      concept: sq.concept || currentQ.concept || '核心觀念強化',
      stem: fullStem,
      answer: sq.correctAnswer,
      solution: sq.explanation,
      mistakeNote: sq.mistakeNote || (`【類似題自主練習】${sq.concept}：${sq.correctAnswer}`),
      isGuessedOrUnstable: true,
      uploadDate: window.dataManager.getTodayDateStr()
    });

    this.similarQuestionAdded = true;

    // Refresh app views
    if (window.app) {
      if (typeof window.app.renderWeeklyMondayBar === 'function') window.app.renderWeeklyMondayBar();
      if (typeof window.app.updateSidebarCounts === 'function') window.app.updateSidebarCounts();
      if (typeof window.app.renderDashboardStats === 'function') window.app.renderDashboardStats();
    }

    const addBtn = document.getElementById('btn-add-similar-to-wrong-book');
    if (addBtn) {
      addBtn.innerHTML = '<i class="fa-solid fa-check"></i> 已加入錯題本';
      addBtn.classList.remove('btn-accent-glow');
    }

    this.showToast('🎉 已成功將此類似題加入本週錯題本！可在清單中進行複習。');
    setTimeout(() => {
      this.closeSimilarQuestionModal();
    }, 1200);
  },

  /* Curated Similar Question Generator Pool */
  getSimilarQuestionData: function(q, offset = 0) {
    const concept = (q.concept || '').toLowerCase();
    const stem = (q.stem || '').toLowerCase();
    const subject = q.subject || '國文';

    // 1. 闋與闕 / 詞的體制
    if (concept.includes('闋') || concept.includes('闕') || concept.includes('體制') || stem.includes('闋') || stem.includes('闕')) {
      const bank = [
        {
          concept: '國文 - 詞的體制、闋與闕的形音義分辨、詞牌與詞題',
          subject: '國文',
          stem: '關於宋詞體制與文字用詞，下列敘述何者完全正確？',
          options: [
            '詞以「闕」為計算篇數或片數的單位，例如「一闕詞」為最正統寫法',
            '「闋」本義為樂曲終止，引申為歌曲一首或詞的一篇、上半闋或下半闋',
            '詞牌名必須與詞的內容題材完全相符，不可偏離',
            '詞的押韻規則比律詩更嚴格，全首詞絕對不能換韻'
          ],
          correctIndex: 1,
          correctAnswer: '(B) 「闋」本義為樂曲終止，引申為歌曲一首或詞的一篇、上半闋或下半闋',
          explanation: '1. **正字與量詞分辨**：\n計算詞的篇數與段落，正字為「**闋**」（門部，音ㄑㄩㄝˋ），例如「一闋詞」、「上闋」、「下闋」。「一闕詞」為常見訛誤通假字（「闕」本指宮殿門樓或缺漏）。\n2. **詞牌與詞題**：\n「詞牌」是曲調與格律格式（如《念奴嬌》），「詞題」才是具體內容（如《赤壁懷古》），兩者不一定相關。\n3. **押韻規定**：\n律詩多一韻到底，詞則依詞牌曲調允許平仄互換押韻（如《菩薩蠻》）。故選 **(B)**。',
          mistakeNote: '正字為「闋」（門部，樂終），「闕」是宮闕或缺漏！'
        },
        {
          concept: '國文 - 「闋」與「闕」字義精準辨析',
          subject: '國文',
          stem: '下列文句中的「闋」與「闕」字，何者使用完全正確？',
          options: [
            '他在台上深情朗誦了一闕辛棄疾的詞作',
            '紫禁城宮闋巍峨，氣勢磅礡壯麗',
            '《水調歌頭》上闋寫中秋飲酒賞月，下闋抒發思親懷抱',
            '古代臣子入朝晉見，須於宮闋外肅立恭候'
          ],
          correctIndex: 2,
          correctAnswer: '(C) 《水調歌頭》上闋寫中秋飲酒賞月，下闋抒發思親懷抱',
          explanation: '1. (A) 詞的計量單位應作「一**闋**」。\n2. (B)、(D) 宮殿門樓城牆應作「宮**闕**」（門部闕）。\n3. (C) 詞的上下分段正字作「上**闋**」、「下**闋**」（或稱上片、下片），使用完全正確！選 **(C)**。',
          mistakeNote: '「上闋/下闋」、「一闋詞」用「闋」；「宮闕」、「城闕」、「付之闕如」用「闕」！'
        }
      ];
      return bank[offset % bank.length];
    }

    // 2. 李煜與辛棄疾 / 詞風
    if (concept.includes('李煜') || concept.includes('辛棄疾') || concept.includes('詞風') || stem.includes('李煜') || stem.includes('辛棄疾')) {
      const bank = [
        {
          concept: '國文 - 南唐李煜與南宋辛棄疾詞風及境遇差異',
          subject: '國文',
          stem: '南唐後主李煜與南宋辛棄疾皆為詞壇名家，關於兩人詞風與身世境遇之比較，下列何者正確？',
          options: [
            '李煜詞風始終蒼涼悲壯，充滿抗敵報國之壯志',
            '辛棄疾為豪放派代表，詞中常抒發抗金救國之抱負與壯志難酬的悲憤',
            '辛棄疾詞風以柔美婉約著稱，從不提及軍旅兵戈',
            '李煜因亡國入宋後，詞作題材更加偏向宮廷享樂生活'
          ],
          correctIndex: 1,
          correctAnswer: '(B) 辛棄疾為豪放派代表，詞中常抒發抗金救國之抱負與壯志難酬的悲憤',
          explanation: '1. **李煜**：前後期風格截然不同。亡國前描寫江南宮廷奢靡生活，風格柔靡綺麗；亡國降宋後身為階下囚，詞風轉為深沉悲愴，血淚交織（如「剪不斷，理還亂」）。\n2. **辛棄疾**：南宋豪放派巨擘，力主抗金北伐，作品題材廣泛，豪邁悲壯，常用軍事典故（如「醉裡挑燈看劍，夢回吹角連營」）。故選 **(B)**。',
          mistakeNote: '李煜由奢入悲，辛棄疾豪放報國、壯志難酬！'
        },
        {
          concept: '國文 - 豪放派與婉約派詞風辨析',
          subject: '國文',
          stem: '宋代詞風分為「豪放派」與「婉約派」，下列詞人配對與代表風格何者完全正確？',
          options: [
            '蘇軾、辛棄疾 —— 婉約派代表，擅長書寫深閨離愁',
            '柳永、李清照 —— 豪放派代表，常以北伐抗戰入詞',
            '辛棄疾 —— 豪放派，詞風激昂慷慨，氣勢磅礡',
            '周邦彥 —— 豪放派，詞風縱放不羈'
          ],
          correctIndex: 2,
          correctAnswer: '(C) 辛棄疾 —— 豪放派，詞風激昂慷慨，氣勢磅礡',
          explanation: '1. 蘇軾、辛棄疾並稱「蘇辛」，為**豪放派**代表。\n2. 柳永、李清照、周邦彥、晏殊為**婉約派**代表。\n3. 故正確者為 **(C)**。',
          mistakeNote: '豪放派：蘇軾、辛棄疾；婉約派：柳永、李清照、周邦彥！'
        }
      ];
      return bank[offset % bank.length];
    }

    // 3. 近體詩與詞比較
    if (concept.includes('近體詩') || concept.includes('律詩') || concept.includes('絕句') || concept.includes('長短句')) {
      const bank = [
        {
          concept: '國文 - 近體詩（律詩、絕句）與詞之韻律、句數與體制綜合比較',
          subject: '國文',
          stem: '比較近體詩（唐詩）與宋詞的文學體制，下列何者說明完全正確？',
          options: [
            '律詩與詞每句字數皆必須完全整齊一致',
            '詞又稱「長短句」或「詩餘」，依詞牌規定字數與平仄，可視詞調換韻',
            '律詩首聯與尾聯必須強制嚴格對仗',
            '詞調名稱（詞牌）即為本首詞唯一不可變更的抒情主題'
          ],
          correctIndex: 1,
          correctAnswer: '(B) 詞又稱「長短句」或「詩餘」，依詞牌規定字數與平仄，可視詞調換韻',
          explanation: '1. (A) 律詩字數整齊（五言或七言），詞每句字數依詞牌長短不齊，故名長短句。\n2. (B) 正確！詞依詞牌填詞，可依調換韻。\n3. (C) 律詩必須對仗的是「頷聯（三四句）」與「頸聯（五六句）」，首聯與尾聯通常不對仗。\n4. (D) 詞牌僅規定曲調格式，內容由詞題或作者自定。故選 **(B)**。',
          mistakeNote: '律詩字數整齊＋頷頸對仗＋一韻到底；詞長短句＋依調填詞＋可換韻！'
        }
      ];
      return bank[offset % bank.length];
    }

    // 4. 三角形重心與內心
    if (concept.includes('重心') || concept.includes('內心') || concept.includes('外心') || stem.includes('重心') || stem.includes('內心')) {
      const bank = [
        {
          concept: '數學 - 三角形重心與內心之面積性質與比值計算',
          subject: '數學',
          stem: '$\\triangle ABC$ 中，$\\overline{AB} = 6$、$\\overline{BC} = 8$、$\\overline{AC} = 10$。若 $G$ 為重心，$I$ 為內心，則 $\\triangle BCG$ 與 $\\triangle ACI$ 的面積比為何？',
          options: [
            '4 : 5',
            '1 : 1',
            '5 : 4',
            '3 : 5'
          ],
          correctIndex: 0,
          correctAnswer: '(A) 4 : 5',
          explanation: '1. **重心面積性質**：\n重心 $G$ 將三角形三等分，故 $\\triangle BCG = \\frac{1}{3} \\triangle ABC$。\n2. **內心面積性質**：\n內心到三邊垂直距離均為內切圓半徑 $r$。周長 $= 6 + 8 + 10 = 24$。\n小三角形面積與對應底邊長成正比：\n$$\\triangle ACI = \\frac{\\overline{AC}}{\\text{周長}} \\times \\triangle ABC = \\frac{10}{24} \\triangle ABC = \\frac{5}{12} \\triangle ABC$$\n3. **比值計算**：\n$$\\triangle BCG : \\triangle ACI = \\frac{1}{3} : \\frac{5}{12} = \\frac{4}{12} : \\frac{5}{12} = 4 : 5$$\n故選 **(A)**。',
          mistakeNote: '重心面積均分為 1/3；內心小三角形面積與底邊長成正比！'
        },
        {
          concept: '數學 - 三角形重心與三中線面積分割性質',
          subject: '數學',
          stem: '若 $\\triangle ABC$ 之面積為 36，$G$ 為重心，$D, E, F$ 分別為三邊中點，則四邊形 $AFGE$ 的面積為何？',
          options: [
            '9',
            '12',
            '18',
            '6'
          ],
          correctIndex: 1,
          correctAnswer: '(B) 12',
          explanation: '1. 重心 $G$ 與三頂點及三邊中點連線，將原三角形等分為 6 個面積相等的小三角形：\n   $$\\text{每一小塊面積} = \\frac{36}{6} = 6$$\n2. 四邊形 $AFGE$ 由 $\\triangle AFG$ 與 $\\triangle AEG$ 兩個小三角形組成：\n   $$\\text{面積} = 6 + 6 = 12$$\n故正確答案選 **(B) 12**。',
          mistakeNote: '三中線交於重心，將三角形面積六等分！四邊形佔其中兩小塊（1/3）！'
        }
      ];
      return bank[offset % bank.length];
    }

    // 5. 不等式當選門檻
    if (concept.includes('不等式') || concept.includes('當選') || concept.includes('門檻') || stem.includes('當選')) {
      const bank = [
        {
          concept: '數學 - 一元一次不等式應用：複數候選人確定當選之最低得票數門檻',
          subject: '數學',
          stem: '某校舉辦學生自治會代表選舉，共有 6 位候選人角逐 3 個當選名額。本次開出的有效票共計 16000 張，若不考慮廢票，候選人至少需獲得多少票才能「確定當選」？',
          options: [
            '4000 票',
            '4001 票',
            '5334 票',
            '2667 票'
          ],
          correctIndex: 1,
          correctAnswer: '(B) 4001 票',
          explanation: '1. **核心公式**：\n最低確定當選門檻票數：\n$$x > \\frac{\\text{總有效票數}}{\\text{應選名額 } N + 1}$$\n2. 本題應選 3 人，最激烈平手情境為 4 人平分選票：\n$$\\frac{16000}{3 + 1} = \\frac{16000}{4} = 4000 \\text{ 票}$$\n3. 若得 4000 票，可能 4 人同票而無法保證在前 3 名，因此必須嚴格大於 4000 票，正整數 $x \\ge 4001$ 票！故選 **(B)**。',
          mistakeNote: '確定當選門檻分母是「應選名額 + 1」，算出來要嚴格大於（整數 + 1 票）！'
        },
        {
          concept: '數學 - 不等式當選門檻之應用速算',
          subject: '數學',
          stem: '某社團要選出 2 位幹部，共有 4 位候選人。若有效票共有 15000 張，則候選人至少應得幾票才必定當選？',
          options: [
            '5000 票',
            '5001 票',
            '7501 票',
            '3751 票'
          ],
          correctIndex: 1,
          correctAnswer: '(B) 5001 票',
          explanation: '1. 應選 2 人，最不利情境為有 3 人平分所有票數：\n   $$\\frac{15000}{2 + 1} = 5000 \\text{ 票}$$\n2. 票數必須嚴格大於 5000 票才能保證當選，故至少需 **5001 票**。選 **(B)**。',
          mistakeNote: '門檻公式：總票數 / (應選名額 + 1)，整數嚴格大於故加 1！'
        }
      ];
      return bank[offset % bank.length];
    }

    // 6. 算術平均數與中位數
    if (concept.includes('平均數') || concept.includes('中位數') || stem.includes('中位數')) {
      const bank = [
        {
          concept: '數學 - 算術平均數、中位數與未知數反推計算',
          subject: '數學',
          stem: '有一組由小到大排列的 7 個整數：$2, 4, 6, x, 12, 16, 20$。若這組資料的中位數等於算術平均數，則整數 $x$ 之值為何？',
          options: [
            '8',
            '9',
            '10',
            '11'
          ],
          correctIndex: 2,
          correctAnswer: '(C) 10',
          explanation: '1. 7 個由小到大排列的整數，中位數為第 4 個數，即中位數 $= x$。\n2. 7 個數之總和 $= 2 + 4 + 6 + x + 12 + 16 + 20 = 60 + x$。\n3. 算術平均數 $= \\frac{60 + x}{7}$。\n4. 依題意中位數等於平均數：\n$$x = \\frac{60 + x}{7} \\implies 7x = 60 + x \\implies 6x = 60 \\implies x = 10$$\n檢查：$x=10$ 介於 6 與 12 之間，符合遞增順序！故選 **(C)**。',
          mistakeNote: '由小到大排好找中位數，再依平均數定義列方程式求解！'
        }
      ];
      return bank[offset % bank.length];
    }

    // 7. 浮力與阿基米德原理
    if (concept.includes('浮力') || concept.includes('阿基米德') || concept.includes('沉浮') || stem.includes('浮力')) {
      const bank = [
        {
          concept: '自然/理化 - 浮力原理（阿基米德原理）、物體沉浮條件與液體密度',
          subject: '自然/理化',
          stem: '將一質量為 300 g、體積為 $400\\text{ cm}^3$ 的木塊投入水中，木塊靜止浮在水面上。若改將此木塊投入密度為 $0.8\\text{ g/cm}^3$ 的油中，則木塊在油中所受的浮力為多少 gw？',
          options: [
            '240 gw',
            '300 gw',
            '320 gw',
            '400 gw'
          ],
          correctIndex: 1,
          correctAnswer: '(B) 300 gw',
          explanation: '1. 木塊密度 $D = \\frac{M}{V} = \\frac{300\\text{ g}}{400\\text{ cm}^3} = 0.75\\text{ g/cm}^3$。\n2. 油的密度為 $0.8\\text{ g/cm}^3$。因木塊密度 $0.75 < 0.8$，木塊在油中依然為**浮體**！\n3. **浮體定律**：浮體所受之浮力必等於物體自身重量（$B = W$）！\n$$\\text{浮力 } B = 300\\text{ gw}$$\n故選 **(B) 300 gw**（切勿直接拿排開體積公式盲目計算，浮體直接看物重！）。',
          mistakeNote: '只要是浮體，浮力就等於物重！沉體才看排開液體重！'
        }
      ];
      return bank[offset % bank.length];
    }

    // 8. 牛頓第二運動定律與摩擦力
    if (concept.includes('牛頓') || concept.includes('加速度') || concept.includes('摩擦力') || stem.includes('牛頓')) {
      const bank = [
        {
          concept: '自然/理化 - 牛頓第二運動定律與摩擦力計算',
          subject: '自然/理化',
          stem: '一質量為 5 kg 的物體靜置於水平粗糙地面上，物體與地面間的動摩擦力為 10 N。若施加一水平向右外力 30 N 持續推動該物體，則該物體產生的加速度大小為多少 $\\text{m/s}^2$？',
          options: [
            '2 m/s²',
            '4 m/s²',
            '6 m/s²',
            '8 m/s²'
          ],
          correctIndex: 1,
          correctAnswer: '(B) 4 m/s²',
          explanation: '1. **求水平方向合力**：\n水平向右推力 30 N，向左動摩擦力 10 N：\n$$F_{\\text{合力}} = 30\\text{ N} - 10\\text{ N} = 20\\text{ N}$$\n2. **套用牛頓第二運動定律 $F = ma$**：\n$$a = \\frac{F_{\\text{合力}}}{m} = \\frac{20\\text{ N}}{5\\text{ kg}} = 4\\text{ m/s}^2$$\n故正確答案選 **(B) 4 m/s²**。',
          mistakeNote: '先求合力（扣除動摩擦力），再代入 F = ma！'
        }
      ];
      return bank[offset % bank.length];
    }

    // Default Dynamic Concept Question Generator
    return {
      concept: q.concept || '核心概念綜合理解與陷阱辨析',
      subject: subject,
      stem: `【觀念變通延伸檢測】\n針對題目涉及之核心重點「${q.concept || '本題考點'}」，下列對於題意觀念之推論與分析，何者最為正確且能避免常見解題陷阱？`,
      options: [
        `只須死記公式數值，不須理會題目給予之邊界條件與題意定義`,
        `應先判斷核心定義與關鍵條件（如正負符號、單位換算或正字用法），方可準確推導`,
        `看到類似選項就直接依直覺猜測最常見的答案`,
        `題目給予的輔助條件通常是多餘的，直接套用簡化公式即可`
      ],
      correctIndex: 1,
      correctAnswer: '(B) 應先判斷核心定義與關鍵條件，方可準確推導',
      explanation: `1. **核心概念解析**：\n本題核心為「${q.concept || '觀念釐清'}」。\n2. **原題關鍵盲點剖析**：\n${q.mistakeNote || '解題時務必確認定義細節，避免落入常見粗心陷阱！'}\n3. **結論**：解題首重先審清關鍵定義與限制條件，故選 **(B)**。`,
      mistakeNote: `記住：審題時抓住核心定義與限制條件，是破解陷阱題的關鍵！`
    };
  }
};
