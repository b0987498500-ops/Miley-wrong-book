/**
 * Smart Wrong Question Review System - Data & LocalStorage Management
 * Manages wrong questions, Ebbinghaus repetition states, tree structure, seed datasets.
 */

const STORAGE_KEY = 'miley_wrong_questions_v13';

// Initial Seed Data with real LaTeX, diagram samples, and mistake prevention notes
const INITIAL_SEED_DATA = [
  {
    id: 'q_eng_guitar_001',
    examPeriod: '二段',
    subject: '英文',
    errorReason: '觀念不懂',
    concept: '冠詞用法(play + the + 樂器)',
    uploadDate: '2026-08-24',
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '演奏樂器一定要加定冠詞 the！如 play the guitar、play the piano；球類運動則不加冠詞，如 play basketball！',
    stem: 'My brother likes music a lot. He always plays ______ before he goes to bed.\n\n○ (A) the guitar\n○ (B) guitar\n○ (C) a guitar\n○ (D) guitars',
    answer: '(A) the guitar',
    solution: '1. 本題考查「演奏樂器」前必須冠上定冠詞 the 的英文文法規則。\n2. 在英文中表達「彈奏/演奏樂器」時，動詞固定搭配為 play + the + 樂器名稱（例如：play the guitar 彈吉他、play the piano 彈鋼琴）。\n3. 比較提醒：若為「球類/運動」則完全不加定冠詞，例如 play basketball（打籃球）、play baseball（打棒球）。\n4. 故空格中應填入 the guitar，答案選擇 (A)。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-25'
  },
  {
    id: 'q_math_coord_001',
    examPeriod: '二段',
    subject: '數學',
    errorReason: '觀念不懂',
    concept: '一次函數與直線方程式(y軸截距)',
    uploadDate: '2026-08-24',
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '直線方程式 y = mx + k 與 y 軸的交點座標為 (0, k)！觀察 y 軸上的交點高低即可比較 k 的大小關係。',
    stem: '如圖，直線 \\(L_1\\)、\\(L_2\\)、\\(L_3\\) 分別為方程式 \\(y = x + a\\)、\\(y = -x + b\\)、\\(y = c\\) 的圖形，下列有關 \\(a\\)、\\(b\\)、\\(c\\) 大小關係的敘述何者正確？【93 年第 2 次基測】\n\n○ (A) a > b > c\n○ (B) b > a > c\n○ (C) b > c > a\n○ (D) a > c > b',
    answer: '(A) a > b > c',
    solution: '1. 直線 \\(L_1 : y = x + a\\) 與 y 軸的交點為 \\((0, a)\\)。\n2. 直線 \\(L_2 : y = -x + b\\) 與 y 軸的交點為 \\((0, b)\\)。\n3. 直線 \\(L_3 : y = c\\) 與 y 軸的交點為 \\((0, c)\\)。\n4. 觀察圖中 y 軸上交點的高度位置：\\(L_1\\) 的交點最高（在最上方），其次為 \\(L_2\\)，最下方為 \\(L_3\\)。\n5. 故可知 \\(a > b > c\\)，答案選擇 (A)。',
    diagramUrl: 'assets/questions/q_math_coord_001_diagram.png',
    errorCount: 2,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-25'
  },
  {
    id: 'q_math_sim_001',
    examPeriod: '二段',
    subject: '數學',
    errorReason: '觀念不懂',
    concept: 'AA相似三角形與對應邊成比例',
    uploadDate: '2026-08-24',
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: 'AA 相似三角形對應邊成比例！注意 \\(\\overline{AB} = \\overline{AD} + \\overline{DB} = 9 + 3 = 12\\)，不要誤將 \\(\\overline{AD}\\) 當作 \\(\\overline{AB}\\)！',
    stem: '如圖，\\(\\angle BCD = \\angle BAC\\)，若已知 \\(\\overline{AD} = 9\\)，\\(\\overline{DB} = 3\\)，則 \\(\\overline{BC} = ?\\)\n\n○ (A) 4\n○ (B) 5\n○ (C) 6\n○ (D) 7',
    answer: '(C) 6',
    solution: '1. 在 \\(\\Delta ACB\\) 與 \\(\\Delta CDB\\) 中，因為 \\(\\angle BCD = \\angle BAC\\)，且 \\(\\angle B = \\angle B\\)（共用角），故 \\(\\Delta ACB \\sim \\Delta CDB\\)（AA 相似性質）。\n2. 由相似三角形對應邊成比例：\\(\\overline{AB} : \\overline{BC} = \\overline{BC} : \\overline{DB}\\)。\n3. 其中 \\(\\overline{AB} = \\overline{AD} + \\overline{DB} = 9 + 3 = 12\\)。\n4. 代入比例式：\\(12 : \\overline{BC} = \\overline{BC} : 3 \\implies \\overline{BC}^2 = 12 \\times 3 = 36\\)。\n5. 解得 \\(\\overline{BC} = 6\\)。',
    diagramUrl: 'assets/questions/q_math_sim_001_diagram.png',
    errorCount: 2,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-25'
  },
  {
    id: 'q_001',
    examPeriod: '二段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: '連通管原理與浮力',
    uploadDate: '2026-08-24', // Monday of current week
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '記得液體密度要換算成 kg/m³！物體沉底時排開液體體積等於物體體積，V排 × ρ水 × g！',
    stem: '如圖所示，一底面積為 \\(50 \\text{ cm}^2\\) 的圓柱體沉入水中，若液面高度上升 \\(4 \\text{ cm}\\)，且水密度 \\(\\rho = 1.0 \\text{ g/cm}^3\\)，求圓柱體所受之浮力 \\(B\\) 為多少牛頓？ (\\(g = 9.8 \\text{ m/s}^2\\))',
    answer: '浮力 B = 1.96 N',
    solution: '1. 排開液體體積 \\(V_{\\text{排}} = 50 \\text{ cm}^2 \\times 4 \\text{ cm} = 200 \\text{ cm}^3\\)。\n2. 排開液體質量 \\(m_{\\text{液}} = 200 \\text{ g} = 0.2 \\text{ kg}\\)。\n3. 由阿基米德原理：浮力 \\(B = 0.2 \\text{ kg} \\times 9.8 \\text{ m/s}^2 = 1.96 \\text{ N}\\)。',
    diagramUrl: '',
    errorCount: 3,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-25'
  },
  {
    id: 'q_002',
    examPeriod: '二段',
    subject: '數學',
    errorReason: '計算粗心',
    concept: '一元二次方程式公式解',
    uploadDate: '2026-08-24',
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: false,
    mistakeNote: '判別式 b² - 4ac 算錯正負號！當 2a 做分母時別忘了把 -b 放在最前面！',
    stem: '求一元二次方程式 \\(2x^2 - 5x + 1 = 0\\) 的兩實根。',
    answer: 'x = \\frac{5 \\pm \\sqrt{17}}{4}',
    solution: '1. 代入公式解 \\(x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\)。\n2. \\(a=2, b=-5, c=1\\)。\n3. \\(b^2 - 4ac = (-5)^2 - 4(2)(1) = 25 - 8 = 17\\)。\n4. 故 \\(x = \\frac{5 \\pm \\sqrt{17}}{4}\\)。',
    diagramUrl: '',
    errorCount: 2,
    ebbinghausStage: 1,
    consecutiveMastered: 1,
    isArchived: false,
    nextReviewDate: '2026-08-25'
  },
  {
    id: 'q_003',
    examPeriod: '二段',
    subject: '自然/理化',
    errorReason: '公式忘記',
    concept: '歐姆定律與電路串並聯',
    uploadDate: '2026-08-17',
    mondayDate: '2026-08-17',
    weekLabel: '2026-08-17 (上週)',
    isGuessedOrUnstable: true,
    mistakeNote: '並聯電阻公式是 1/R = 1/R1 + 1/R2，不能直接相加！相加的是串聯！',
    stem: '將兩電阻 \\(R_1 = 6 \\,\\Omega\\) 與 \\(R_2 = 3 \\,\\Omega\\) 並聯後接在 \\(12 \\text{ V}\\) 的電源上，求總電流 \\(I\\) 為多少安培？',
    answer: 'I = 6 A',
    solution: '1. 並聯等效電阻 \\(\\frac{1}{R} = \\frac{1}{6} + \\frac{1}{3} = \\frac{1}{2} \\implies R = 2 \\,\\Omega\\)。\n2. 由歐姆定律 \\(V = I \\cdot R \\implies I = \\frac{V}{R} = \\frac{12}{2} = 6 \\text{ A}\\)。',
    diagramUrl: '',
    errorCount: 2,
    ebbinghausStage: 2,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-25'
  },
  {
    id: 'q_004',
    examPeriod: '一段',
    subject: '英文',
    errorReason: '題目看錯',
    concept: '關係代名詞與關係副詞',
    uploadDate: '2026-08-10',
    mondayDate: '2026-08-10',
    weekLabel: '2026-08-10',
    isGuessedOrUnstable: false,
    mistakeNote: '先行詞表示地點且後面子句完整時要用 where，若後面缺主詞受詞則用 which！',
    stem: 'This is the school ______ my father studied 30 years ago.',
    answer: 'where',
    solution: '後方子句 "my father studied 30 years ago" 為完整句子（study可作自動詞），表地點關係故選 where。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 4,
    consecutiveMastered: 2,
    isArchived: true,
    nextReviewDate: '2026-09-01'
  },
  {
    id: 'q_005',
    examPeriod: '二段',
    subject: '數學',
    errorReason: '觀念不懂',
    concept: '三角函數正弦定理',
    uploadDate: '2026-08-24',
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '正弦定理 \\(\\frac{a}{\\sin A} = 2R\\)，外接圓半徑是 R 不是 2R！注意對角對邊關係。',
    stem: '在 \\(\\Delta ABC\\) 中，已知 \\(\\angle A = 60^\\circ\\)，其外接圓半徑 \\(R = 4\\)，求對邊 \\(a = \\overline{BC}\\) 之長度。',
    answer: 'a = 4\\sqrt{3}',
    solution: '1. 由正弦定理 \\(\\frac{a}{\\sin A} = 2R\\)。\n2. \\(a = 2R \\cdot \\sin A = 2 \\times 4 \\times \\sin 60^\\circ = 8 \\times \\frac{\\sqrt{3}}{2} = 4\\sqrt{3}\\)。',
    diagramUrl: '',
    errorCount: 3,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-25'
  }
];

class DataManager {
  constructor() {
    this.questions = [];
    this.init();
  }

  init() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        this.questions = JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse localStorage questions, loading seeds', e);
        this.questions = [...INITIAL_SEED_DATA];
      }
    } else {
      this.questions = [...INITIAL_SEED_DATA];
    }

    // Force migration & auto-merge of seeds into dataset
    INITIAL_SEED_DATA.forEach(seed => {
      const idx = this.questions.findIndex(q => q.id === seed.id);
      if (idx === -1) {
        this.questions.unshift(seed);
      } else {
        this.questions[idx] = seed;
      }
    });

    this.save();
  }

  save() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.questions));
    } catch (e) {
      console.warn('LocalStorage save failed (QuotaExceededError), cleaning heavy diagram images...', e);
      // Clean oversized base64 images safely without corrupting JSON
      this.questions.forEach(q => {
        if (q.diagramUrl && q.diagramUrl.length > 80000) {
          q.diagramUrl = ''; // fallback to pure text presentation to free storage
        }
      });
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.questions));
      } catch (e2) {
        console.error('Critical: LocalStorage is full even after cleaning images.', e2);
        alert('⚠️ 瀏覽器儲存空間 (LocalStorage) 已滿！建議在側邊欄重置資料或清理歷史紀錄。');
      }
    }
  }

  resetToSeed() {
    this.questions = [...INITIAL_SEED_DATA];
    this.save();
  }

  getAll() {
    return this.questions;
  }

  getById(id) {
    return this.questions.find(q => q.id === id);
  }

  addQuestion(qData) {
    const id = 'q_' + Date.now();
    const uploadDate = qData.uploadDate || new Date().toISOString().split('T')[0];
    const mondayDate = this.getMondayDate(uploadDate);
    const weekLabel = `${mondayDate} (上傳週期)`;

    const newQuestion = {
      id,
      examPeriod: qData.examPeriod || '二段',
      subject: qData.subject || '自然/理化',
      errorReason: qData.errorReason || '觀念不懂',
      concept: qData.concept || '通用觀念',
      uploadDate,
      mondayDate,
      weekLabel,
      isGuessedOrUnstable: qData.isGuessedOrUnstable || false,
      mistakeNote: qData.mistakeNote || '',
      stem: qData.stem || '',
      answer: qData.answer || '',
      solution: qData.solution || '',
      diagramUrl: qData.diagramUrl || '',
      errorCount: qData.isGuessedOrUnstable ? 2 : 1,
      ebbinghausStage: 1,
      consecutiveMastered: 0,
      isArchived: false,
      nextReviewDate: uploadDate
    };

    this.questions.unshift(newQuestion);
    this.save();
    return newQuestion;
  }

  updateQuestionMastery(id, isMastered) {
    const q = this.getById(id);
    if (!q) return null;

    if (isMastered) {
      q.consecutiveMastered = (q.consecutiveMastered || 0) + 1;
      if (q.consecutiveMastered >= 2) {
        q.isArchived = true; // Formal archive after 2 consecutive mastered
      } else {
        // Increment Ebbinghaus stage
        q.ebbinghausStage = Math.min((q.ebbinghausStage || 1) * 2, 4);
      }
    } else {
      q.consecutiveMastered = 0;
      q.errorCount = (q.errorCount || 0) + 1;
      q.ebbinghausStage = 1; // Reset Ebbinghaus repetition cycle to 1st week
    }

    this.save();
    return q;
  }

  // Get Monday date string (YYYY-MM-DD) for any date
  getMondayDate(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDay();
    const diff = date.getDate() - day + (day === 0 ? -6 : 1); // Adjust when day is Sunday
    const monday = new Date(date.setDate(diff));
    return monday.toISOString().split('T')[0];
  }

  // Get High Frequency Sprint Questions: errorCount >= 2 OR errorReason == '觀念不懂'
  getHighFrequencyQuestions(examPeriod = 'ALL') {
    return this.questions.filter(q => {
      const matchExam = examPeriod === 'ALL' || q.examPeriod === examPeriod;
      const isHighFreq = q.errorCount >= 2 || q.errorReason === '觀念不懂' || q.isGuessedOrUnstable;
      return matchExam && isHighFreq;
    });
  }

  // Get Active Pending Review Questions (Not yet formally archived)
  getPendingReviewQuestions() {
    return this.questions.filter(q => !q.isArchived);
  }

  // Get Tree Structure: Exam -> Monday Date (Includes current and next week folders)
  getTreeStructure() {
    const tree = {};
    const currentMonday = '2026-08-24';
    const nextMonday = '2026-08-31';

    tree['二段'] = {
      [currentMonday]: [],
      [nextMonday]: []
    };

    this.questions.forEach(q => {
      const exam = q.examPeriod || '二段';
      const monday = q.mondayDate || '2026-08-24';
      
      if (!tree[exam]) tree[exam] = {};
      if (!tree[exam][monday]) tree[exam][monday] = [];
      tree[exam][monday].push(q);
    });
    return tree;
  }

  // Get sorted unique list of all Monday dates present in dataset (Includes 下週 2026-08-31)
  getAllMondayDates() {
    const mondays = new Set();
    this.questions.forEach(q => {
      if (q.mondayDate) mondays.add(q.mondayDate);
    });
    mondays.add('2026-08-24');
    mondays.add('2026-08-31'); // 下週
    return Array.from(mondays).sort();
  }

  // Get Concept Cloud
  getConceptCloud() {
    const conceptMap = {};
    this.questions.forEach(q => {
      if (q.concept) {
        conceptMap[q.concept] = (conceptMap[q.concept] || 0) + 1;
      }
    });
    return Object.entries(conceptMap).map(([concept, count]) => ({ concept, count }));
  }

  // ==================== CALENDAR EVENTS STORAGE ====================
  getCalendarEvents() {
    const CALENDAR_STORAGE_KEY = 'miley_study_calendar_events_v1';
    const INITIAL_CALENDAR_EVENTS = [
      { id: 'ce_1', date: '2026-09-01', type: 'exam', title: '🎯 自然/理化第一次段考' },
      { id: 'ce_2', date: '2026-08-28', type: 'plan', title: '📖 複習數學一元二次方程式錯題' },
      { id: 'ce_3', date: '2026-08-30', type: 'review', title: '⏰ 英文關聯代詞錯題抽認卡考驗' }
    ];

    const stored = localStorage.getItem(CALENDAR_STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (e) {
        return [...INITIAL_CALENDAR_EVENTS];
      }
    } else {
      localStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(INITIAL_CALENDAR_EVENTS));
      return [...INITIAL_CALENDAR_EVENTS];
    }
  }

  saveCalendarEvents(events) {
    const CALENDAR_STORAGE_KEY = 'miley_study_calendar_events_v1';
    localStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(events));
  }

  addCalendarEvent(eventData) {
    const events = this.getCalendarEvents();
    const newEvent = {
      id: 'ce_' + Date.now(),
      date: eventData.date,
      type: eventData.type || 'plan',
      title: eventData.title || '學習事項'
    };
    events.push(newEvent);
    this.saveCalendarEvents(events);
    return newEvent;
  }

  deleteCalendarEvent(id) {
    let events = this.getCalendarEvents();
    events = events.filter(e => e.id !== id);
    this.saveCalendarEvents(events);
  }
}

// Global Singleton DataInstance
window.dataManager = new DataManager();
