/**
 * Wisdom Treasury Module (名言佳句與學習心理學寶庫)
 * Unlocks 1 quote/insight for every 10 defeated mistake questions.
 * Supports unread red notification badge, heart favorites, real-time sync, and locked/unlocked views.
 */

window.WisdomModule = {
  activeTab: 'all',
  favoritedIds: [],

  // Curated database of milestone items (10, 20, 30 ... 200+ questions)
  items: [
    {
      id: 'w_10',
      requiredCount: 10,
      category: '🧠 學習心理學',
      title: '蔡格尼克效應 (Zeigarnik Effect)',
      content: '未完成的任務會在腦海中保持中度的緊張狀態。遇到難題卡關時適度休息，大腦會在背景默默繼續思考解法！',
      author: '心理學家 Bluma Zeigarnik'
    },
    {
      id: 'w_20',
      requiredCount: 20,
      category: '📜 勵志金句',
      title: '卓越源於習慣',
      content: '「卓越不是一種單一的行為，而是一種持續的習慣。我們重複做的事情決定了我們是誰。」',
      author: '亞里斯多德 (Aristotle)'
    },
    {
      id: 'w_30',
      requiredCount: 30,
      category: '🧠 學習心理學',
      title: '費曼學習法 (Feynman Technique)',
      content: '真正理解一個概念的最高境界，是用最白話的語言講給不懂的人聽。當你能講得清清楚楚，觀念才真正屬於你。',
      author: '諾貝爾物理學獎得主 理查·費曼'
    },
    {
      id: 'w_40',
      requiredCount: 40,
      category: '📜 勵志金句',
      title: '勇往直前的勇氣',
      content: '「成功不是終點，失敗也非致命；唯有持續勇敢前行的勇氣才是永恆。」',
      author: '溫斯頓·邱吉爾 (Winston Churchill)'
    },
    {
      id: 'w_50',
      requiredCount: 50,
      category: '🧠 學習心理學',
      title: '成長型思維 (Growth Mindset)',
      content: '大腦具有神經可塑性！遇到錯題並非代表你不聰明，而是大腦神經元正在建立新的記憶連結與學習迴路。',
      author: '史丹佛大學心理學教授 Carol Dweck'
    },
    {
      id: 'w_60',
      requiredCount: 60,
      category: '📜 勵志金句',
      title: '積累的力量',
      content: '「水滴石穿，非力使然，恆也。持續累積的小勝利，最終會引爆巨大的進步突破！」',
      author: '羅馬詩人 奧維德 (Ovid)'
    },
    {
      id: 'w_70',
      requiredCount: 70,
      category: '🧠 學習心理學',
      title: '提取練習效應 (Testing Effect)',
      content: '相較於一遍又一遍重讀筆記，憑記憶進行主動「測驗與回想」，能使長時記憶形成率提升 200% 以上！',
      author: '認知心理學導論'
    },
    {
      id: 'w_80',
      requiredCount: 80,
      category: '📜 勵志金句',
      title: '相信時光的複利',
      content: '「星光不問趕路人，時光不負有心人。你做過的每一道錯題，都是替未來的考場鋪路。」',
      author: '名言佳句'
    },
    {
      id: 'w_90',
      requiredCount: 90,
      category: '🧠 學習心理學',
      title: '交替學習法 (Interleaving)',
      content: '在同一次複習中交替練習不同科目或不同題型，比單一題型刷題能大幅增強大腦對問題特徵的辨識與遷移能力！',
      author: '認知學習科學'
    },
    {
      id: 'w_100',
      requiredCount: 100,
      category: '📜 勵志金句',
      title: '百題斬·大滿貫王者',
      content: '「恭喜達成討伐 100 題錯題怪的偉大里程碑！你已經具備無堅不摧的錯題消化力與學習韌性！」',
      author: '麥麥錯題本 榮譽勳章'
    },
    {
      id: 'w_110',
      requiredCount: 110,
      category: '🧠 學習心理學',
      title: '分散復習法 (Spaced Repetition)',
      content: '將複習拉長成多個時間點（如1天、3天、7天），能有效防止艾賓浩斯遺忘曲線的陡降，讓短期記憶鞏固為永久記憶。',
      author: '認知心理學'
    },
    {
      id: 'w_120',
      requiredCount: 120,
      category: '📜 勵志金句',
      title: '日日更新的勇氣',
      content: '「每日釐清一道錯題，勝過漫無目的地刷百道題目。真正的進步發生在直視盲點的瞬間。」',
      author: '學習名言'
    },
    {
      id: 'w_130',
      requiredCount: 130,
      category: '🧠 學習心理學',
      title: '雙重編碼理論 (Dual Coding)',
      content: '當大腦同時處理視覺圖形與文字解說時，會分別在視覺與言語系統建立雙重記憶軌道，理解與保留效果加倍！',
      author: 'Allan Paivio 雙重編碼學說'
    },
    {
      id: 'w_140',
      requiredCount: 140,
      category: '📜 勵志金句',
      title: '穿透黑暗的光芒',
      content: '「不積跬步，無以至千里；不積小流，無以成江海。每一筆防錯筆記都是通往高分的基石。」',
      author: '荀子《勸學》'
    },
    {
      id: 'w_150',
      requiredCount: 150,
      category: '🧠 學習心理學',
      title: '後設認知 (Metacognition)',
      content: '後設認知就是「對自己的思考進行思考」。知道自己「哪裡懂、哪裡不懂」，是頂尖高手的核心特質。',
      author: 'John Flavell 心理學理論'
    },
    {
      id: 'w_160',
      requiredCount: 160,
      category: '📜 勵志金句',
      title: '堅韌不拔',
      content: '「山銳則不高，水深則不流。在安靜沉澱中攻克一道道難題，你的實力早已今非昔比。」',
      author: '勵志名言'
    },
    {
      id: 'w_170',
      requiredCount: 170,
      category: '🧠 學習心理學',
      title: '自我解釋效應 (Self-Explanation)',
      content: '解題時嘗試在心中對自己說明「這一步為什麼這樣算」，能促使大腦深度連結先前知識，顯著提升理解深度。',
      author: 'Chi et al. 學習科學研究'
    },
    {
      id: 'w_180',
      requiredCount: 180,
      category: '📜 勵志金句',
      title: '堅持的複利',
      content: '「時間不會辜負每一個默默努力的人。今天解決的每一個錯題，明天都會成為你的護城河。」',
      author: '學習格言'
    },
    {
      id: 'w_190',
      requiredCount: 190,
      category: '🧠 學習心理學',
      title: '耶基斯-多德森法則 (Yerkes-Dodson Law)',
      content: '中等程度的焦慮與緊張能激發最佳的學習與考試表現。相信自己，適度緊張是身體在為你加油！',
      author: 'Yerkes & Dodson 心理定律'
    },
    {
      id: 'w_200',
      requiredCount: 200,
      category: '📜 勵志金句',
      title: '二百題討伐宗師',
      content: '「討伐 200 題成就達成！你已經將錯題轉化為浩瀚的智慧知識庫，無畏任何考試挑戰！」',
      author: '麥麥錯題本 宗師勳章'
    }
  ],

  init: function() {
    this.loadFavorites();
    this.bindEvents();
    this.updateHeaderBadge();
  },

  loadFavorites: function() {
    try {
      const stored = localStorage.getItem('miley_favorited_wisdom');
      this.favoritedIds = stored ? JSON.parse(stored) : [];
    } catch (e) {
      this.favoritedIds = [];
    }
  },

  saveFavorites: function() {
    try {
      localStorage.setItem('miley_favorited_wisdom', JSON.stringify(this.favoritedIds));
    } catch (e) {}
  },

  toggleFavorite: function(id) {
    const idx = this.favoritedIds.indexOf(id);
    if (idx === -1) {
      this.favoritedIds.push(id);
    } else {
      this.favoritedIds.splice(idx, 1);
    }
    this.saveFavorites();
    this.renderModalContent();
  },

  getDefeatedCount: function() {
    if (!window.dataManager) return 0;
    const allQuestions = window.dataManager.getAll();
    return allQuestions.filter(q => q.isArchived || (q.consecutiveMastered || 0) > 0).length;
  },

  // Returns all currently unlocked items (supports dynamic generation for N > 200)
  getUnlockedItems: function() {
    const defeated = this.getDefeatedCount();
    const unlocked = [];

    // 1. Check fixed items array
    this.items.forEach(item => {
      if (defeated >= item.requiredCount) {
        unlocked.push(item);
      }
    });

    // 2. Dynamic generator for defeated >= 210, 220, 230... if user passes max pre-defined items
    if (defeated >= 210) {
      const maxDefinedCount = this.items[this.items.length - 1].requiredCount;
      const extraTiers = Math.floor((defeated - maxDefinedCount) / 10);
      for (let i = 1; i <= extraTiers; i++) {
        const req = maxDefinedCount + i * 10;
        const templateIdx = (i - 1) % this.items.length;
        const refItem = this.items[templateIdx];
        unlocked.push({
          id: `w_dyn_${req}`,
          requiredCount: req,
          category: refItem.category,
          title: `${refItem.title} (${req}題進階紀念)`,
          content: refItem.content,
          author: refItem.author
        });
      }
    }

    return unlocked;
  },

  // Get favorited IDs that belong ONLY to currently unlocked items
  getValidUnlockedFavorites: function() {
    const unlocked = this.getUnlockedItems();
    const unlockedIds = unlocked.map(item => item.id);
    return this.favoritedIds.filter(id => unlockedIds.includes(id));
  },

  getUnlockedItemsCount: function() {
    return this.getUnlockedItems().length;
  },

  getSeenWisdomCount: function() {
    try {
      const stored = localStorage.getItem('miley_seen_wisdom_count');
      return stored ? parseInt(stored, 10) : 0;
    } catch (e) {
      return 0;
    }
  },

  setSeenWisdomCount: function(count) {
    try {
      localStorage.setItem('miley_seen_wisdom_count', String(count));
    } catch (e) {}
  },

  getUnreadCount: function() {
    const totalUnlocked = this.getUnlockedItemsCount();
    const seenCount = this.getSeenWisdomCount();
    return Math.max(0, totalUnlocked - seenCount);
  },

  updateHeaderBadge: function() {
    const badgeEl = document.getElementById('wisdom-unlocked-badge');
    if (badgeEl) {
      const unread = this.getUnreadCount();
      if (unread > 0) {
        badgeEl.innerText = unread;
        badgeEl.style.display = 'inline-flex';
      } else {
        badgeEl.style.display = 'none';
      }
    }
  },

  bindEvents: function() {
    const self = this;

    const btn = document.getElementById('btn-open-wisdom-modal');
    const popover = document.getElementById('wisdom-popover');
    const closeBtn = document.getElementById('btn-close-wisdom-popover');

    // Toggle popover on button click
    btn?.addEventListener('click', (e) => {
      e.stopPropagation();
      self.togglePopover();
    });

    // Close on close button click
    closeBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      self.closePopover();
    });

    // Prevent click inside popover from closing it
    popover?.addEventListener('click', (e) => {
      e.stopPropagation();
    });

    // Close popover when clicking anywhere outside
    document.addEventListener('click', () => {
      self.closePopover();
    });

    // Tabs inside Popover
    document.querySelectorAll('.wisdom-tab-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        e.stopPropagation();
        document.querySelectorAll('.wisdom-tab-btn').forEach(t => t.classList.remove('active'));
        b.classList.add('active');
        self.activeTab = b.dataset.wisdomTab;
        self.renderModalContent();
      });
    });
  },

  togglePopover: function() {
    const popover = document.getElementById('wisdom-popover');
    if (!popover) return;
    if (popover.classList.contains('hidden')) {
      this.openPopover();
    } else {
      this.closePopover();
    }
  },

  openPopover: function() {
    const popover = document.getElementById('wisdom-popover');
    if (!popover) return;
    
    // Check if there are unread (new unseen) unlocked items before updating seen count
    const unread = this.getUnreadCount();

    // Mark all currently unlocked items as seen when user opens treasury!
    const totalUnlocked = this.getUnlockedItemsCount();
    this.setSeenWisdomCount(totalUnlocked);
    this.updateHeaderBadge();

    this.renderModalContent();
    popover.classList.remove('hidden');

    // Trigger celebratory fireworks when opening with new unseen quotes!
    if (unread > 0) {
      this.triggerFireworks();
    }
  },

  triggerFireworks: function() {
    // 1. Show celebration toast banner
    this.showCelebrationBanner();

    // 2. HTML5 Canvas Fireworks Animation
    let canvas = document.getElementById('wisdom-fireworks-canvas');
    if (!canvas) {
      canvas = document.createElement('canvas');
      canvas.id = 'wisdom-fireworks-canvas';
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100vw';
      canvas.style.height = '100vh';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '99999';
      document.body.appendChild(canvas);
    }
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#f59e0b', '#ec4899', '#3b82f6', '#10b981', '#8b5cf6', '#ef4444', '#facc15', '#6366f1'];
    let particles = [];

    function createExplosion(x, y) {
      const particleCount = 70 + Math.floor(Math.random() * 40);
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 / particleCount) * i + (Math.random() - 0.5) * 0.4;
        const speed = 4 + Math.random() * 9;
        particles.push({
          x: x,
          y: y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 2.5 + Math.random() * 3.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          decay: 0.012 + Math.random() * 0.016,
          gravity: 0.14
        });
      }
    }

    // Launch staggered fireworks bursts
    const launchPoints = [
      { x: window.innerWidth * 0.3, y: window.innerHeight * 0.38, delay: 0 },
      { x: window.innerWidth * 0.7, y: window.innerHeight * 0.32, delay: 180 },
      { x: window.innerWidth * 0.5, y: window.innerHeight * 0.25, delay: 350 },
      { x: window.innerWidth * 0.2, y: window.innerHeight * 0.28, delay: 520 },
      { x: window.innerWidth * 0.8, y: window.innerHeight * 0.4, delay: 700 }
    ];

    launchPoints.forEach(pt => {
      setTimeout(() => {
        createExplosion(pt.x, pt.y);
      }, pt.delay);
    });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.98;
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(idx, 1);
        } else {
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 12;
          ctx.shadowColor = p.color;
          ctx.fill();
          ctx.restore();
        }
      });

      if (particles.length > 0) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    animate();

    // 3. Trigger canvas-confetti bursts if library loaded
    if (typeof confetti === 'function') {
      confetti({ particleCount: 90, spread: 80, origin: { y: 0.55 } });
      setTimeout(() => confetti({ particleCount: 60, angle: 60, spread: 60, origin: { x: 0, y: 0.6 } }), 200);
      setTimeout(() => confetti({ particleCount: 60, angle: 120, spread: 60, origin: { x: 1, y: 0.6 } }), 400);
    }
  },

  showCelebrationBanner: function() {
    let banner = document.getElementById('wisdom-celebration-toast');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'wisdom-celebration-toast';
      banner.className = 'wisdom-celebration-toast';
      banner.innerHTML = `
        <div class="toast-content">
          <span class="toast-icon">🎆</span>
          <div>
            <div class="toast-title">🎉 恭喜解鎖全新金句與學習心理學秘笈！</div>
            <div class="toast-sub">持續討伐錯題怪，成就更優秀的自己！</div>
          </div>
        </div>
      `;
      document.body.appendChild(banner);
    }

    banner.classList.add('show');
    setTimeout(() => {
      banner.classList.remove('show');
    }, 4200);
  },

  closePopover: function() {
    const popover = document.getElementById('wisdom-popover');
    if (popover) popover.classList.add('hidden');
  },

  renderModalContent: function() {
    const defeated = this.getDefeatedCount();
    const unlockedItems = this.getUnlockedItems();
    const unlockedCount = unlockedItems.length;
    const validFavs = this.getValidUnlockedFavorites();

    // Real-time Stats update
    const statDefeatedEl = document.getElementById('wisdom-stat-defeated');
    if (statDefeatedEl) statDefeatedEl.innerText = defeated;

    const statUnlockedEl = document.getElementById('wisdom-stat-unlocked');
    if (statUnlockedEl) statUnlockedEl.innerText = unlockedCount;

    const statFavEl = document.getElementById('wisdom-stat-favorites');
    if (statFavEl) statFavEl.innerText = `${validFavs.length} 心`;

    const favCountEl = document.getElementById('wisdom-fav-count');
    if (favCountEl) favCountEl.innerText = validFavs.length;

    // Render Cards Container
    const container = document.getElementById('wisdom-cards-container');
    if (!container) return;

    let html = '';

    // Render ONLY unlocked cards!
    unlockedItems.forEach(item => {
      const isFav = validFavs.includes(item.id);

      if (this.activeTab === 'fav' && !isFav) return;

      const favIcon = isFav ? '<i class="fa-solid fa-heart" style="color: #ef4444;"></i>' : '<i class="fa-regular fa-heart"></i>';
      const favClass = isFav ? 'active' : '';

      html += `
        <div class="wisdom-card unlocked glass-panel">
          <div class="wisdom-card-header">
            <span class="wisdom-badge-tier"><i class="fa-solid fa-trophy"></i> 討伐 ${item.requiredCount} 題解鎖</span>
            <span class="wisdom-category">${item.category}</span>
            <button class="wisdom-fav-btn ${favClass}" data-id="${item.id}" title="${isFav ? '取消收藏' : '收藏此金句'}">
              ${favIcon}
            </button>
          </div>
          <h4 class="wisdom-title">${item.title}</h4>
          <p class="wisdom-content">${item.content}</p>
          <div class="wisdom-author">—— ${item.author}</div>
        </div>
      `;
    });

    if (!html) {
      if (this.activeTab === 'fav') {
        html = `
          <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
            <i class="fa-regular fa-heart" style="font-size: 3rem; margin-bottom: 12px; opacity: 0.4;"></i>
            <p>目前尚無收藏的金句，點選卡片右上角愛心即可收藏！</p>
          </div>
        `;
      } else {
        html = `
          <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
            <i class="fa-solid fa-wand-magic-sparkles" style="font-size: 3rem; margin-bottom: 12px; opacity: 0.4; color: #f59e0b;"></i>
            <p style="font-size: 1rem; font-weight: 600; color: var(--text-main);">目前尚未獲得金句秘笈</p>
            <p style="margin-top: 6px; font-size: 0.88rem; opacity: 0.8;">每討伐 10 題錯題怪即可自動獲得 1 篇名言佳句或心理學小知識！</p>
          </div>
        `;
      }
    }

    container.innerHTML = html;

    // Bind Favorite Buttons inside Modal
    const self = this;
    container.querySelectorAll('.wisdom-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        self.toggleFavorite(id);
      });
    });
  }
};
