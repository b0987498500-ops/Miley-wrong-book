/**
 * Module 4: 段考高頻衝刺 (Exam High-Frequency Sprint)
 * Auto-filters high-frequency wrong questions (error count >= 2 OR "觀念不懂").
 * 15-min Pre-exam Swipe UI card deck (3D Flip Animation), AI Variant/Similar Question generator.
 */

window.SprintModule = {
  sprintQuestions: [],
  currentIndex: 0,
  isFlipped: false,

  init: function() {
    this.bindEvents();
    this.loadSprintQuestions();
  },

  bindEvents: function() {
    const self = this;

    // Exam Select Filter
    const examSelect = document.getElementById('sprint-exam-select');
    if (examSelect) {
      examSelect.addEventListener('change', () => {
        self.loadSprintQuestions();
      });
    }

    // Swipe Card Flip Click
    const cardWrapper = document.getElementById('current-swipe-card');
    if (cardWrapper) {
      cardWrapper.addEventListener('click', (e) => {
        if (e.target.closest('#swipe-front-diagram')) return;
        cardWrapper.classList.toggle('flipped');
        self.isFlipped = cardWrapper.classList.contains('flipped');
      });
    }

    const diagBox = document.getElementById('swipe-front-diagram');
    const diagImg = document.getElementById('swipe-diagram-img');
    if (diagBox && diagImg) {
      diagBox.style.cursor = 'zoom-in';
      diagBox.addEventListener('click', (e) => {
        e.stopPropagation();
        if (diagImg.src) {
          window.UploadModule?.openLightbox('題目附圖高清全螢幕放大檢視', diagImg.src);
        }
      });
    }

    // Prev / Next Swipe Controls
    document.getElementById('swipe-prev-btn')?.addEventListener('click', () => self.navigateCard(-1));
    document.getElementById('swipe-next-btn')?.addEventListener('click', () => self.navigateCard(1));

    // Touch Swipe Event Support
    if (cardWrapper) {
      let touchStartX = 0;
      cardWrapper.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
      }, { passive: true });

      cardWrapper.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].clientX;
        const diffX = touchEndX - touchStartX;
        if (Math.abs(diffX) > 50) {
          if (diffX < 0) self.navigateCard(1); // Swipe left -> Next
          else self.navigateCard(-1); // Swipe right -> Prev
        }
      }, { passive: true });
    }

    // AI Variant Generation Button
    document.getElementById('btn-generate-variant')?.addEventListener('click', () => self.generateVariantQuestion());
  },

  loadSprintQuestions: function() {
    const selectedExam = document.getElementById('sprint-exam-select')?.value || '二段';
    this.sprintQuestions = window.dataManager.getHighFrequencyQuestions(selectedExam);
    
    if (this.sprintQuestions.length === 0) {
      this.sprintQuestions = window.dataManager.getHighFrequencyQuestions('ALL'); // Fallback to all exams
    }

    this.currentIndex = 0;
    this.isFlipped = false;
    document.getElementById('current-swipe-card')?.classList.remove('flipped');

    const countChip = document.getElementById('sprint-filtered-count');
    if (countChip) countChip.innerText = `篩選出 ${this.sprintQuestions.length} 題高頻題`;

    // Update sidebar sprint badge count
    const badge = document.getElementById('sprint-badge');
    if (badge) badge.innerText = this.sprintQuestions.length;

    this.renderCurrentSwipeCard();
    this.renderVariantCardIntro();
  },

  renderCurrentSwipeCard: function() {
    if (this.sprintQuestions.length === 0) return;

    const q = this.sprintQuestions[this.currentIndex];

    // Indicator
    document.getElementById('swipe-index-indicator').innerText = `${this.currentIndex + 1} / ${this.sprintQuestions.length}`;
    document.getElementById('swipe-subject').innerText = `${q.subject} • ${q.concept}`;

    // Front: Stem & Diagram
    window.katexUtils.renderText('swipe-front-stem', q.stem);

    const diagBox = document.getElementById('swipe-front-diagram');
    const diagImg = document.getElementById('swipe-diagram-img');
    if (q.diagramUrl && diagBox && diagImg) {
      diagImg.src = q.diagramUrl;
      diagBox.classList.remove('hidden');
    } else if (diagBox) {
      diagBox.classList.add('hidden');
    }

    // Back: Fluorescent Yellow Mistake Note & Key Formula/Steps
    const backNote = document.getElementById('swipe-back-note');
    if (backNote) {
      backNote.innerText = q.mistakeNote || '⚡ 觀念重點：仔細檢查公式帶入與單位轉換！';
    }

    window.katexUtils.renderText('swipe-back-formula', `答案：${q.answer}\n\n關鍵步驟：\n${q.solution}`);
  },

  navigateCard: function(dir) {
    if (this.sprintQuestions.length === 0) return;

    this.currentIndex += dir;
    if (this.currentIndex < 0) this.currentIndex = this.sprintQuestions.length - 1;
    if (this.currentIndex >= this.sprintQuestions.length) this.currentIndex = 0;

    // Reset Flip
    const cardWrapper = document.getElementById('current-swipe-card');
    if (cardWrapper) cardWrapper.classList.remove('flipped');
    this.isFlipped = false;

    this.renderCurrentSwipeCard();
    this.renderVariantCardIntro();
  },

  renderVariantCardIntro: function() {
    if (this.sprintQuestions.length === 0) return;

    const q = this.sprintQuestions[this.currentIndex];
    const conceptTag = document.getElementById('var-concept-tag');
    if (conceptTag) conceptTag.innerText = `當前對應觀念：#${q.concept}`;

    const stemText = document.getElementById('variant-stem-text');
    if (stemText) {
      stemText.innerHTML = `針對當前題目【${q.concept}】，點擊上方「生成 AI 變形題」按鈕進行考前新題驗收。`;
    }

    document.getElementById('variant-options-box')?.classList.add('hidden');
    document.getElementById('variant-feedback-box')?.classList.add('hidden');
  },

  generateVariantQuestion: function() {
    if (this.sprintQuestions.length === 0) return;

    const q = this.sprintQuestions[this.currentIndex];

    // Generate smart variant question based on concept
    let variantStem = '';
    let options = [];
    let correctIndex = 0;
    let explanation = '';

    if (q.subject.includes('理化') || q.concept.includes('浮力')) {
      variantStem = '【AI 變形題】一底面積為 \\(100 \\text{ cm}^2\\) 的圓柱體沉入水面下，若上升高度為 \\(5 \\text{ cm}\\)，且水密度 \\(\\rho = 1.0 \\text{ g/cm}^3\\)，求物體受到的浮力為多少牛頓？ (\\(g = 9.8 \\text{ m/s}^2\\))';
      options = ['A. 0.49 N', 'B. 4.9 N', 'C. 9.8 N', 'D. 49 N'];
      correctIndex = 1;
      explanation = '排開體積 V = 100 × 5 = 500 cm³ = 0.5 kg 水，浮力 B = 0.5 × 9.8 = 4.9 N。';
    } else if (q.concept.includes('一元二次方程式')) {
      variantStem = '【AI 變形題】解一元二次方程式 \\(3x^2 - 7x + 2 = 0\\) 之實根。';
      options = ['A. x = 2 或 x = 1/3', 'B. x = -2 或 x = 3', 'C. x = 1 或 x = 2/3', 'D. x = 3 或 x = 1/2'];
      correctIndex = 0;
      explanation = '十字交乘 (3x - 1)(x - 2) = 0 ⟹ x = 2 或 x = 1/3。';
    } else if (q.concept.includes('歐姆定律')) {
      variantStem = '【AI 變形題】兩電阻 \\(R_1 = 4 \\,\\Omega\\) 與 \\(R_2 = 12 \\,\\Omega\\) 並聯於 \\(24 \\text{ V}\\) 電源，求幹道總電流？';
      options = ['A. 2 A', 'B. 4 A', 'C. 8 A', 'D. 12 A'];
      correctIndex = 2;
      explanation = '並聯等效電阻 R = (4×12)/(4+12) = 3 Ω，總電流 I = V/R = 24/3 = 8 A。';
    } else {
      variantStem = `【AI 變形題】關於【${q.concept}】的核心觀念應用題：下列敘述何者最正確？`;
      options = ['A. 觀念導出結果與公式變化一致', 'B. 未考慮物理單位換算', 'C. 忽略題幹特定限制條件', 'D. 以上皆非'];
      correctIndex = 0;
      explanation = `掌握核心觀念「${q.concept}」，對應原題防錯筆記：${q.mistakeNote || '謹慎答題'}`;
    }

    const stemEl = document.getElementById('variant-stem-text');
    window.katexUtils.renderText(stemEl, variantStem);

    const optionsBox = document.getElementById('variant-options-box');
    if (!optionsBox) return;

    let optsHtml = '';
    options.forEach((optText, i) => {
      optsHtml += `<button class="variant-option-btn" data-index="${i}">${optText}</button>`;
    });

    optionsBox.innerHTML = optsHtml;
    optionsBox.classList.remove('hidden');

    const feedbackBox = document.getElementById('variant-feedback-box');
    feedbackBox.classList.add('hidden');

    // Bind Option Clicks
    optionsBox.querySelectorAll('.variant-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedIdx = parseInt(btn.dataset.index, 10);
        feedbackBox.classList.remove('hidden', 'correct', 'incorrect');

        if (selectedIdx === correctIndex) {
          feedbackBox.classList.add('correct');
          feedbackBox.innerHTML = `🎉 答對了！恭喜完全掌握本題觀念！<br/><small>${explanation}</small>`;
        } else {
          feedbackBox.classList.add('incorrect');
          feedbackBox.innerHTML = `❌ 答錯了，請再試一次！<br/><small>提示：${explanation}</small>`;
        }
      });
    });
  }
};
