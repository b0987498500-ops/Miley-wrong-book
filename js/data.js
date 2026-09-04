/**
 * Smart Wrong Question Review System - Data & LocalStorage Management
 * Manages wrong questions, Ebbinghaus repetition states, tree structure, seed datasets.
 */

const STORAGE_KEY = 'miley_wrong_questions_v24';

// Initial Seed Data - Strictly only the Natural Science wrong question uploaded by user
const INITIAL_SEED_DATA = [
  {
    id: 'q_sci_chem_104_002',
    examPeriod: '二段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: '醋酸鈉飽和溶液與溶解度範圍推算(104年會考題)',
    uploadDate: '2026-08-29',
    mondayDate: '2026-08-24',
    mondayDates: ['2026-08-24'],
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '步驟一：$3\\text{g}$ 醋酸鈉加入 $10\\text{g}$ 水完全溶解（未飽和，濃度 $> \\frac{3}{3+10}=23.1\\%$）；步驟二：再加 $3\\text{g}$（共 $6\\text{g}$）有沉澱（飽和，濃度 $< \\frac{6}{6+10}=37.5\\%$）。故飽和溶液濃度介於 $23.0\\%\\sim 37.5\\%$！',
    stem: '如圖為小怡在 $20\\text{ }^\\circ\\text{C}$ 時進行實驗的步驟示意圖：若溶解醋酸鈉（$\\text{CH}_3\\text{COONa}$）的過程中，溶液溫度均維持 $20\\text{ }^\\circ\\text{C}$，根據實驗結果可知，在 $20\\text{ }^\\circ\\text{C}$ 時飽和的醋酸鈉水溶液，其重量百分濃度會在下列哪一個範圍內？【104.會考】\n\n○ (A) 23.0%~37.5%\n○ (B) 37.5%~47.5%\n○ (C) 47.5%~60.0%\n○ (D) 60.0%~90.0%',
    answer: '(A) 23.0%~37.5%',
    solution: '1. 實驗步驟分析：\n- 步驟一：$3\\text{ g}$ 醋酸鈉加入 $10\\text{ g}$ 水中完全溶解，代表此時尚未達到飽和上限，故 $20\\text{ }^\\circ\\text{C}$ 時飽和濃度必定大於此時濃度：\n  $P_1\\% = \\frac{3}{3+10} \\times 100\\% \\approx 23.1\\%$\n- 步驟二：再加入 $3\\text{ g}$ 醋酸鈉（總共加入 $6\\text{ g}$），結果出現未溶解沉澱，代表已超過飽和上限，故 $20\\text{ }^\\circ\\text{C}$ 時飽和濃度必定小於假定完全溶解時的濃度：\n  $P_2\\% = \\frac{6}{6+10} \\times 100\\% = 37.5\\%$\n\n2. 結論：\n- 飽和醋酸鈉水溶液之重量百分濃度介於 $23.0\\% \\sim 37.5\\%$ 之間。\n- 故選 (A)。',
    diagramUrl: 'assets/questions/q_104_nat_002_diagram.png',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-30'
  }
];

const DELETED_KEYS_STORAGE = 'miley_deleted_question_ids_v24';

class DataManager {
  constructor() {
    this.questions = [];
    this.deletedIds = [];
    this.init();
  }

  loadDeletedIds() {
    try {
      const stored = localStorage.getItem(DELETED_KEYS_STORAGE);
      this.deletedIds = stored ? JSON.parse(stored) : [];
    } catch (e) {
      this.deletedIds = [];
    }
  }

  saveDeletedIds() {
    try {
      localStorage.setItem(DELETED_KEYS_STORAGE, JSON.stringify(this.deletedIds));
    } catch (e) {}
  }

  init() {
    this.loadDeletedIds();

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        this.questions = JSON.parse(stored);
      } catch (e) {
        console.error('Failed to parse localStorage questions, loading seeds', e);
        this.questions = JSON.parse(JSON.stringify(INITIAL_SEED_DATA));
      }
    } else {
      this.questions = JSON.parse(JSON.stringify(INITIAL_SEED_DATA));
    }

    // 1. Filter out any questions user has explicitly deleted
    if (Array.isArray(this.deletedIds) && this.deletedIds.length > 0) {
      this.questions = this.questions.filter(q => !this.deletedIds.includes(q.id));
    }

    // 2. Auto-merge seeds (ONLY for seeds NOT deleted by user!)
    INITIAL_SEED_DATA.forEach(seed => {
      if (this.deletedIds.includes(seed.id)) return; // User deleted this seed, do NOT restore!

      const idx = this.questions.findIndex(q => q.id === seed.id);
      if (idx === -1) {
        this.questions.unshift(JSON.parse(JSON.stringify(seed)));
      } else {
        const existing = this.questions[idx];
        // Preserve user state (isArchived, consecutiveMastered, errorCount, ebbinghausStage, mondayDates, etc.)
        this.questions[idx] = {
          ...seed,
          ...existing,
          diagramUrl: seed.diagramUrl || existing.diagramUrl || ''
        };
      }
    });

    // 3. Ultra-Safety Fallback: If questions array is empty or corrupt, clear deletedIds and force reload seeds!
    if (!Array.isArray(this.questions) || this.questions.length === 0) {
      this.deletedIds = [];
      this.saveDeletedIds();
      this.questions = JSON.parse(JSON.stringify(INITIAL_SEED_DATA));
    }

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
    this.deletedIds = [];
    this.saveDeletedIds();
    this.questions = JSON.parse(JSON.stringify(INITIAL_SEED_DATA));
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

  deleteQuestion(id) {
    if (id && !this.deletedIds.includes(id)) {
      this.deletedIds.push(id);
      this.saveDeletedIds();
    }
    this.questions = this.questions.filter(q => q.id !== id);
    this.save();
  }

  removeQuestionFromWeek(id, targetMonday) {
    const q = this.getById(id);
    if (!q) return null;

    let mondays = Array.isArray(q.mondayDates) && q.mondayDates.length > 0
      ? q.mondayDates
      : [q.mondayDate || '2026-08-24'];

    if (targetMonday && targetMonday !== 'ALL') {
      mondays = mondays.filter(m => m !== targetMonday);
    } else {
      mondays = [];
    }

    if (mondays.length === 0) {
      this.deleteQuestion(id);
      return null;
    } else {
      q.mondayDates = mondays;
      q.mondayDate = mondays[mondays.length - 1];
      this.save();
      return q;
    }
  }

  // Check if a question belongs to a specific Monday date filter
  isQuestionInMonday(q, targetMonday) {
    if (!targetMonday || targetMonday === 'ALL') return true;
    if (!q) return false;
    const mondays = Array.isArray(q.mondayDates) && q.mondayDates.length > 0
      ? q.mondayDates
      : [q.mondayDate || '2026-08-24'];
    return mondays.includes(targetMonday);
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
      
      const currentMonday = q.mondayDate || '2026-08-24';
      if (!Array.isArray(q.mondayDates)) {
        q.mondayDates = [currentMonday];
      }
      const nextMonday = this.getNextMondayDate(currentMonday);
      if (!q.mondayDates.includes(nextMonday)) {
        q.mondayDates.push(nextMonday);
      }
      q.mondayDate = nextMonday;
    }

    this.save();
    return q;
  }

  // Get next Monday date string (YYYY-MM-DD) from current mondayDate (or today)
  getNextMondayDate(currentMondayDateStr) {
    let date;
    if (currentMondayDateStr && !isNaN(Date.parse(currentMondayDateStr))) {
      const parts = currentMondayDateStr.split('-');
      if (parts.length === 3) {
        const year = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const day = parseInt(parts[2], 10);
        date = new Date(year, month, day + 7);
      } else {
        date = new Date(currentMondayDateStr);
        date.setDate(date.getDate() + 7);
      }
    } else {
      date = new Date();
      const day = date.getDay();
      const diff = date.getDate() - day + (day === 0 ? -6 : 1) + 7;
      date.setDate(diff);
    }
    const yyyy = date.getFullYear();
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const dd = String(date.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
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
      const mList = Array.isArray(q.mondayDates) && q.mondayDates.length > 0
        ? q.mondayDates
        : [q.mondayDate || '2026-08-24'];
      
      if (!tree[exam]) tree[exam] = {};

      mList.forEach(monday => {
        if (!tree[exam][monday]) tree[exam][monday] = [];
        if (!tree[exam][monday].includes(q)) {
          tree[exam][monday].push(q);
        }
      });
    });
    return tree;
  }

  // Get sorted unique list of all Monday dates present in dataset (Includes 下週 2026-08-31)
  getAllMondayDates() {
    const mondays = new Set();
    this.questions.forEach(q => {
      if (q.mondayDate) mondays.add(q.mondayDate);
      if (Array.isArray(q.mondayDates)) {
        q.mondayDates.forEach(m => mondays.add(m));
      }
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
