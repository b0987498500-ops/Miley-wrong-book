/**
 * Learning Flashcards Module (翻轉填空學習卡)
 * Allows users to choose a subject and practice fill-in-the-blank cards with 3D flip card animations.
 * Supports 「已擊敗」 / 「未擊敗」 mastery status and feedback buttons.
 */

window.CardModule = {
  currentSubject: null,
  currentIndex: 0,
  isFlipped: false,
  cards: [],

  // Default pre-populated seed learning flashcards across all subjects
  defaultCards: [
    // 國文
    {
      id: 'c_zh_1',
      subject: '國文',
      question: '「青青子衿，悠悠我心。但為君故，沉吟至今。」語出《詩經·鄭風·短歌行》，其中「衿」字的正確讀音為 <span class="blank-highlight">____</span>。',
      answer: 'ㄐㄧㄣ (jīn)',
      explanation: '衿，古代衣服的領子；引申指有才學的青青年華學子。',
      isDefeated: false
    },
    {
      id: 'c_zh_2',
      subject: '國文',
      question: '朱自清《荷塘月色》中描繪荷塘波紋的經典句子：「葉子與花也有一絲的顫動，霎時傳過荷塘的另一邊，葉子本是緊緊相挨著，這便宛然有了一道<span class="blank-highlight">____</span>的波痕。」',
      answer: '凝碧',
      explanation: '「凝碧」形容深綠而沉靜的光澤，將動靜相襯的荷塘夜景摹寫得極具畫意。',
      isDefeated: false
    },
    // 英文
    {
      id: 'c_en_1',
      subject: '英文',
      question: 'She was so absorbed <span class="blank-highlight">____</span> her reading that she didn\'t notice me coming into the room.',
      answer: 'in',
      explanation: '「be absorbed in...」為固定介系詞搭配，意為「沉浸於.../專心致志於...」。',
      isDefeated: false
    },
    {
      id: 'c_en_2',
      subject: '英文',
      question: 'The teacher strongly recommended that every student <span class="blank-highlight">____</span> (have) a notebook for collecting wrong questions.',
      answer: 'have',
      explanation: '建議/要求動詞 (suggest, recommend, insist) + that + S + (should) + 原形動詞。',
      isDefeated: false
    },
    // 數學
    {
      id: 'c_math_1',
      subject: '數學',
      question: '對於一元二次方程式 ax² + bx + c = 0 (a≠0)，根據韋達定理，其兩根之和 x₁ + x₂ = <span class="blank-highlight">____</span>。',
      answer: '-b / a',
      explanation: '韋達定理（根與係數關係）：兩根之和為 -b/a，兩根之積為 c/a。',
      isDefeated: false
    },
    {
      id: 'c_math_2',
      subject: '數學',
      question: '直角三角形中，兩直角邊長分別為 a 與 b，斜邊長為 c，則畢氏定理的關係式為 <span class="blank-highlight">____</span>。',
      answer: 'a² + b² = c²',
      explanation: '商高定理（畢氏定理）：直角三角形兩直角邊的平方和等於斜邊平方。',
      isDefeated: false
    },
    // 自然/理化
    {
      id: 'c_sci_1',
      subject: '自然/理化',
      question: '牛頓第二運動定律運動公式為 F = m × a，其中作用力 F 的 SI 國際標準單位為 <span class="blank-highlight">____</span>。',
      answer: '牛頓 (N) 或 kg·m/s²',
      explanation: '1 牛頓定義為使 1 kg 質量的物體產生 1 m/s² 加速度所需的力。',
      isDefeated: false
    },
    {
      id: 'c_sci_2',
      subject: '自然/理化',
      question: '植物進行光合作用時，暗反應（碳反應）發生於葉綠體的 <span class="blank-highlight">____</span> 中，將二氧化碳轉化為葡萄糖。',
      answer: '基質',
      explanation: '光反應發生於葉綠體「華層膜/基粒」，暗反應（碳反應）則發生於「基質」。',
      isDefeated: false
    },
    // 社會
    {
      id: 'c_soc_1',
      subject: '社會',
      question: '台灣地理中，亞熱帶與熱帶氣候分界線的「北回歸線」，其精確緯度值為北緯 <span class="blank-highlight">____</span> 度。',
      answer: '23.5',
      explanation: '北回歸線（北緯 23.5°）穿過台灣嘉義水上、花蓮瑞穗與豐濱。',
      isDefeated: false
    },
    {
      id: 'c_soc_2',
      subject: '社會',
      question: '依據中華民國憲法，人民享有四大參政權，分別為：選舉、罷免、<span class="blank-highlight">____</span>、複決。',
      answer: '創制',
      explanation: '參政權四大項（選、罷、創、複），其中創制與複決屬於直接民權的體現。',
      isDefeated: false
    }
  ],

  init: function() {
    this.loadCardsFromStorage();
    this.bindEvents();
  },

  loadCardsFromStorage: function() {
    try {
      const stored = localStorage.getItem('miley_learning_cards_v1');
      if (stored) {
        this.cards = JSON.parse(stored);
      } else {
        this.cards = [...this.defaultCards];
        this.saveCardsToStorage();
      }
    } catch (e) {
      this.cards = [...this.defaultCards];
    }
  },

  saveCardsToStorage: function() {
    try {
      localStorage.setItem('miley_learning_cards_v1', JSON.stringify(this.cards));
    } catch (e) {}
  },

  addCard: function(cardData) {
    const newCard = {
      id: 'c_' + Date.now(),
      subject: cardData.subject || '國文',
      question: cardData.question || '',
      answer: cardData.answer || '',
      explanation: cardData.explanation || '',
      isDefeated: false
    };
    this.cards.push(newCard);
    this.saveCardsToStorage();
    if (this.currentSubject === newCard.subject || !this.currentSubject) {
      this.renderCardStage();
    }
    return newCard;
  },

  markCardMastery: function(isDefeated) {
    const list = this.getFilteredCards();
    if (list.length === 0) return;
    const card = list[this.currentIndex];
    card.isDefeated = isDefeated;
    this.saveCardsToStorage();
    this.renderCardStage();

    // Toast notification
    const existingToast = document.querySelector('.card-toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'card-toast';
    toast.innerHTML = isDefeated 
      ? '<i class="fa-solid fa-trophy" style="color: #fbbf24;"></i> 已標記為【已擊敗】！'
      : '<i class="fa-solid fa-rotate-left" style="color: #ef4444;"></i> 標記為【未擊敗】，需加強特訓！';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 1800);
  },

  bindEvents: function() {
    const self = this;

    // Subject Filter Chip Buttons inside Card Module
    document.querySelectorAll('.card-subject-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.card-subject-chip').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const subj = btn.dataset.subject;
        self.selectSubject(subj);
      });
    });

    // Flip Card Click Handler
    const cardContainer = document.getElementById('flip-card-container');
    if (cardContainer) {
      cardContainer.addEventListener('click', () => {
        self.toggleFlip();
      });
    }

    // Prev / Next Navigation Arrows
    document.getElementById('card-prev-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      self.prevCard();
    });

    document.getElementById('card-next-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      self.nextCard();
    });

    // Flip Button explicitly
    document.getElementById('btn-flip-card')?.addEventListener('click', (e) => {
      e.stopPropagation();
      self.toggleFlip();
    });

    // Keyboard Navigation (Left / Right arrow & Space to flip)
    document.addEventListener('keydown', (e) => {
      const cardView = document.getElementById('view-card');
      if (!cardView || !cardView.classList.contains('active')) return;

      if (e.key === 'ArrowLeft') {
        self.prevCard();
      } else if (e.key === 'ArrowRight') {
        self.nextCard();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        self.toggleFlip();
      }
    });
  },

  selectSubject: function(subject) {
    this.currentSubject = subject === 'ALL' ? null : subject;
    this.currentIndex = 0;
    this.isFlipped = false;

    const welcomePanel = document.getElementById('card-subject-welcome');
    const stagePanel = document.getElementById('card-stage-panel');

    if (!this.currentSubject) {
      if (welcomePanel) welcomePanel.classList.remove('hidden');
      if (stagePanel) stagePanel.classList.add('hidden');
    } else {
      if (welcomePanel) welcomePanel.classList.add('hidden');
      if (stagePanel) stagePanel.classList.remove('hidden');
      this.renderCardStage();
    }
  },

  getFilteredCards: function() {
    if (!this.currentSubject) return this.cards;
    return this.cards.filter(c => c.subject === this.currentSubject);
  },

  renderCardStage: function() {
    const list = this.getFilteredCards();
    const container = document.getElementById('flip-card-container');

    if (!container) return;

    if (list.length === 0) {
      container.innerHTML = `
        <div class="flip-card-front glass-panel" style="justify-content: center; align-items: center;">
          <i class="fa-solid fa-folder-open" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 12px;"></i>
          <h3 style="color: var(--text-main);">目前尚無【${this.currentSubject}】的填空學習卡</h3>
          <p style="color: var(--text-muted); margin-top: 6px;">可將學習卡內容發送於對話中，AI 將自動為您歸檔新增！</p>
        </div>
      `;
      return;
    }

    if (this.currentIndex >= list.length) this.currentIndex = 0;
    const card = list[this.currentIndex];

    // Reset flip state
    this.isFlipped = false;
    container.classList.remove('flipped');

    // Update Counter & Subject Title
    const titleEl = document.getElementById('card-stage-title');
    if (titleEl) titleEl.innerText = `${card.subject} 填空學習卡`;

    const indexEl = document.getElementById('card-counter-display');
    if (indexEl) indexEl.innerText = `卡片 ${this.currentIndex + 1} / ${list.length}`;

    const statusBadgeHtml = card.isDefeated
      ? `<span class="mastery-status mastered"><i class="fa-solid fa-check"></i> 已擊敗</span>`
      : `<span class="mastery-status unmastered"><i class="fa-solid fa-circle-exclamation"></i> 未擊敗</span>`;

    // Render Front & Back Content
    container.innerHTML = `
      <div class="flip-card-inner">
        <!-- Front Side (題目) -->
        <div class="flip-card-front">
          <div class="card-side-header">
            <span class="card-badge-subj"><i class="fa-solid fa-tag"></i> ${card.subject}</span>
            ${statusBadgeHtml}
          </div>

          <div class="card-body-content">
            <div class="card-question-text">${card.question}</div>
          </div>

          <div class="card-side-footer">
            <span class="flip-hint-badge"><i class="fa-solid fa-rotate"></i> 點擊卡片翻轉查看答案與解析 (Space)</span>
          </div>
        </div>

        <!-- Back Side (答案與解析) -->
        <div class="flip-card-back">
          <div class="card-side-header">
            <span class="card-badge-subj" style="background: rgba(16, 185, 129, 0.2); color: #34d399;"><i class="fa-solid fa-check"></i> ${card.subject}</span>
            ${statusBadgeHtml}
          </div>

          <div class="card-body-content">
            <div class="card-answer-box">
              <span class="answer-label">【填空解答】</span>
              <div class="answer-highlight">${card.answer}</div>
            </div>
            ${card.explanation ? `<div class="card-explanation-text"><strong>💡 重點觀念與解析：</strong><br>${card.explanation}</div>` : ''}

            <!-- Mastery Action Feedback Buttons -->
            <div class="card-feedback-group" style="display: flex; gap: 12px; margin-top: 16px; width: 100%; justify-content: center;">
              <button type="button" class="btn-card-feedback btn-unmastered" onclick="event.stopPropagation(); window.CardModule.markCardMastery(false)">
                <i class="fa-solid fa-xmark"></i> 未擊敗
              </button>
              <button type="button" class="btn-card-feedback btn-mastered" onclick="event.stopPropagation(); window.CardModule.markCardMastery(true)">
                <i class="fa-solid fa-check"></i> 已擊敗
              </button>
            </div>
          </div>

          <div class="card-side-footer">
            <span class="flip-hint-badge"><i class="fa-solid fa-rotate"></i> 點擊再次翻轉回題目</span>
          </div>
        </div>
      </div>
    `;
  },

  toggleFlip: function() {
    const container = document.getElementById('flip-card-container');
    if (!container) return;
    this.isFlipped = !this.isFlipped;
    if (this.isFlipped) {
      container.classList.add('flipped');
    } else {
      container.classList.remove('flipped');
    }
  },

  prevCard: function() {
    const list = this.getFilteredCards();
    if (list.length === 0) return;
    this.currentIndex = (this.currentIndex - 1 + list.length) % list.length;
    this.renderCardStage();
  },

  nextCard: function() {
    const list = this.getFilteredCards();
    if (list.length === 0) return;
    this.currentIndex = (this.currentIndex + 1) % list.length;
    this.renderCardStage();
  }
};
