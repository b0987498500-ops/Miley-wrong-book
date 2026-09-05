/**
 * Smart Wrong Question Review System - Data & LocalStorage Management
 * Manages wrong questions, Ebbinghaus repetition states, tree structure, seed datasets.
 */

const STORAGE_KEY = 'miley_wrong_questions_v31';

// Initial Seed Data - Multi-Subject Multi-Week Dataset for Miley
const INITIAL_SEED_DATA = [
  {
    id: 'q_sci_chem_104_002',
    examPeriod: '二段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: '醋酸鈉飽和溶液與溶解度範圍推算(104年會考題)',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
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
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_math_002',
    examPeriod: '二段',
    subject: '數學',
    errorReason: '計算粗心',
    concept: '一元二次方程式公式解',
    uploadDate: '2026-09-04',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: false,
    mistakeNote: '判別式 $b^2 - 4ac$ 算錯正負號！當 $2a$ 做分母時別忘了把 $-b$ 放在最前面！',
    stem: '求一元二次方程式 $2x^2 - 5x + 1 = 0$ 的兩實根解為下列何者？\n\n○ (A) $x = \\frac{-5 \\pm \\sqrt{17}}{4}$\n○ (B) $x = \\frac{5 \\pm \\sqrt{17}}{4}$\n○ (C) $x = \\frac{5 \\pm \\sqrt{33}}{4}$\n○ (D) $x = \\frac{-5 \\pm \\sqrt{33}}{4}$',
    answer: '(B) x = \\frac{5 \\pm \\sqrt{17}}{4}',
    solution: '1. 一元二次方程式 $ax^2 + bx + c = 0$ 之公式解為 $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$。\n2. 帶入係數 $a = 2, b = -5, c = 1$：\n   $-b = -(-5) = 5$\n   $b^2 - 4ac = (-5)^2 - 4(2)(1) = 25 - 8 = 17$\n3. 故 $x = \\frac{5 \\pm \\sqrt{17}}{2(2)} = \\frac{5 \\pm \\sqrt{17}}{4}$，正確答案選 (B)。',
    diagramUrl: '',
    errorCount: 2,
    ebbinghausStage: 1,
    consecutiveMastered: 1,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_sci_003',
    examPeriod: '二段',
    subject: '自然/理化',
    errorReason: '公式忘記',
    concept: '歐姆定律與電路串並聯',
    uploadDate: '2026-08-26',
    mondayDate: '2026-08-24',
    mondayDates: ['2026-08-24'],
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '並聯電阻公式是 $1/R = 1/R_1 + 1/R_2$，不能直接相加！相加的是串聯！',
    stem: '將兩電阻 $R_1 = 6\\,\\Omega$ 與 $R_2 = 3\\,\\Omega$ 並聯後接在 $12\\text{ V}$ 的電源上，求總電流 $I$ 為多少安培？\n\n○ (A) 2 A\n○ (B) 4 A\n○ (C) 6 A\n○ (D) 8 A',
    answer: '(C) 6 A',
    solution: '1. 計算並聯總等效電阻：\n   $\\frac{1}{R} = \\frac{1}{R_1} + \\frac{1}{R_2} = \\frac{1}{6} + \\frac{1}{3} = \\frac{3}{6} = \\frac{1}{2} \\implies R = 2\\,\\Omega$\n2. 根據歐姆定律 $V = I \\cdot R$：\n   $I = \\frac{V}{R} = \\frac{12}{2} = 6\\text{ A}$，正確答案選 (C)。',
    diagramUrl: '',
    errorCount: 2,
    ebbinghausStage: 2,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_eng_004',
    examPeriod: '一段',
    subject: '英文',
    errorReason: '題目看錯',
    concept: '關係代名詞與關係副詞',
    uploadDate: '2026-08-19',
    mondayDate: '2026-08-17',
    mondayDates: ['2026-08-17'],
    weekLabel: '2026-08-17 (第 2 週)',
    isGuessedOrUnstable: false,
    mistakeNote: '先行詞表示地點且後面子句完整時要用 where，若後面缺主詞受詞則用 which！',
    stem: 'This is the school ______ my father studied 30 years ago.\n\n○ (A) where\n○ (B) which\n○ (C) what\n○ (D) who',
    answer: '(A) where',
    solution: '後方關係子句 "my father studied 30 years ago" 為文法結構完整的子句（study 此處作不及物動詞），先行詞 the school 表地點，故應填入關係副詞 where。正確答案選 (A)。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 4,
    consecutiveMastered: 2,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_math_005',
    examPeriod: '二段',
    subject: '數學',
    errorReason: '觀念不懂',
    concept: '三角函數正弦定理',
    uploadDate: '2026-08-28',
    mondayDate: '2026-08-24',
    mondayDates: ['2026-08-24'],
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '正弦定理 $\\frac{a}{\\sin A} = 2R$，外接圓半徑是 R 不是 2R！注意對角對邊關係。',
    stem: '在 $\\Delta ABC$ 中，已知 $\\angle A = 60^\\circ$，其外接圓半徑 $R = 4$，求對邊 $a = \\overline{BC}$ 之長度為多少？\n\n○ (A) $2\\sqrt{3}$\n○ (B) $4$\n○ (C) $6$\n○ (D) $4\\sqrt{3}$',
    answer: '(D) a = 4\\sqrt{3}',
    solution: '1. 由正弦定理可知 $\\frac{a}{\\sin A} = 2R$。\n2. 移項求對邊 $a$：\n   $a = 2R \\cdot \\sin A = 2 \\times 4 \\times \\sin 60^\\circ = 8 \\times \\frac{\\sqrt{3}}{2} = 4\\sqrt{3}$\n3. 正確答案選 (D)。',
    diagramUrl: '',
    errorCount: 3,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_chi_006',
    examPeriod: '二段',
    subject: '國文',
    errorReason: '粗心心急',
    concept: '成語典故與成語辨析',
    uploadDate: '2026-09-02',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: false,
    mistakeNote: '「貽笑大方」是指被識家大老所笑，不可寫成「遺笑大方」！',
    stem: '下列文句「」內的成語，何者使用最為恰當？\n\n○ (A) 他的歌聲極為動聽，真可謂「貽笑大方」\n○ (B) 小明文章寫得極佳，可謂「胸無點墨」\n○ (C) 這位專家的演講精彩萬分，吸引了「座無虛席」的聽眾\n○ (D) 他在學術界研究多年，成果豐碩，絕非「信口開河」',
    answer: '(D) 他在學術界研究多年，成果豐碩，絕非「信口開河」',
    solution: '(A)「貽笑大方」指被專家學者所嘲笑，為負面詞彙，不可形容歌聲動聽。\n(B)「胸無點墨」指沒學問，與文章寫得極佳矛盾。\n(C)「座無虛席」形容賓客眾多，座椅沒有空著，不能直接修飾聽眾。\n(D)「信口開河」指隨口亂說，加上「絕非」使用完全正確，故選 (D)。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 1,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_soc_007',
    examPeriod: '二段',
    subject: '社會',
    errorReason: '記憶模糊',
    concept: '台灣歷史與日治時期經濟發展',
    uploadDate: '2026-08-27',
    mondayDate: '2026-08-24',
    mondayDates: ['2026-08-24'],
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '日治時期「工業日本，農業台灣」政策改為「工業台灣，農業南洋」是在 1930 年代戰爭時期！',
    stem: '日治時期台灣總督府在 1930 年代興建日月潭水力發電所，主要目的是為了配合下列哪一項政策的推動？\n\n○ (A) 農業台灣，工業日本\n○ (B) 工業台灣，農業南洋\n○ (C) 皇民化運動\n○ (D) 開拓南洋貿易',
    answer: '(B) 工業台灣，農業南洋',
    solution: '1930 年代因應中日戰爭爆發，日本總督府推動台灣工業化與軍需物資發展，將原本的「工業日本，農業台灣」轉變為「工業台灣，農業南洋」，興建日月潭水力發電所即為提供電力基礎建設。正確答案選 (B)。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 2,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_sci_optics_115',
    examPeriod: '二段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: '凸透鏡成像與幻燈片投影機成像原理',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '幻燈片放在 1 倍到 2 倍焦距之間（f < P < 2f），成倒立放大實像在 2 倍焦距外（Q > 2f）！故像距 Q 大於物距 P 大於焦距 f，大小關係為 Q > P > f。',
    stem: '幻燈片的投影機是利用凹面鏡將強光源所發出的光線，反射至聚光器，再使光線通過幻燈片，然後射到凸透鏡，經凸透鏡折射成清晰的像在屏幕上，如圖為幻燈片的投影機內透鏡排列方式（未依實際距離大小比例繪圖），及屏幕之關係圖。試回答下列問題：\n\n幻燈片與凸透鏡的距離為 P cm，凸透鏡的焦距為 f cm，屏幕與凸透鏡的距離為 Q cm，則 P、f、Q 三者大小關係為何？\n\n○ (A) f > P > Q\n○ (B) Q > P > f\n○ (C) P > f > Q\n○ (D) P > Q > f',
    answer: '(B) Q > P > f',
    solution: '1. 物距分析（P）：\n- 投影機欲在屏幕上投射出清晰放大的實像，物體（幻燈片）必須放置在凸透鏡的「1 倍焦距與 2 倍焦距之間」（$f < P < 2f$），故 $P > f$。\n\n2. 像距分析（Q）：\n- 當物體在 $f \\sim 2f$ 之間時，經凸透鏡折射後會成「倒立放大實像」於鏡後「2 倍焦距外」（$Q > 2f$）。\n- 比較物距與像距：因為成放大像，故像距大於物距，即 $Q > P$。\n\n3. 綜合比較：\n- 綜合以上可知：$Q > P > f$，正確選項選 (B)。',
    diagramUrl: 'assets/questions/q_115_slide_projector_diagram.png',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_sci_optics_116',
    examPeriod: '二段',
    subject: '自然/理化',
    errorReason: '計算粗心',
    concept: '凸透鏡物距與像距數據推算焦距範圍',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '當物距 p = 像距 q = 2f 時成等大實像。由表中數據 p=35 時 q=29.5 (p>q)，當 p=25 時 q=44.4 (p<q)，故 2f 必然介於 29.5~35 之間，推得焦距 14.75 < f < 17.5，選 (C) 16cm。',
    stem: '凸透鏡成像實驗，物距透鏡 $p\\text{ cm}$ 時，調整屏距透鏡為 $q\\text{ cm}$ 時可得清晰像，數據如表所示，則此凸透鏡的焦距最有可能為下列何者？\n\n<table style="width:100%; border-collapse:collapse; margin:10px 0; text-align:center; border:1px solid rgba(255,255,255,0.2); font-size:0.9rem;"><thead><tr style="background:rgba(99,102,241,0.2);"><th style="border:1px solid rgba(255,255,255,0.2); padding:6px;">p (公分)</th><th style="border:1px solid rgba(255,255,255,0.2); padding:6px;">80</th><th style="border:1px solid rgba(255,255,255,0.2); padding:6px;">60</th><th style="border:1px solid rgba(255,255,255,0.2); padding:6px;">40</th><th style="border:1px solid rgba(255,255,255,0.2); padding:6px;">35</th><th style="border:1px solid rgba(255,255,255,0.2); padding:6px;">25</th></tr></thead><tbody><tr><td style="border:1px solid rgba(255,255,255,0.2); padding:6px; font-weight:bold;">q (公分)</td><td style="border:1px solid rgba(255,255,255,0.2); padding:6px;">20</td><td style="border:1px solid rgba(255,255,255,0.2); padding:6px;">21.8</td><td style="border:1px solid rgba(255,255,255,0.2); padding:6px;">26.7</td><td style="border:1px solid rgba(255,255,255,0.2); padding:6px;">29.5</td><td style="border:1px solid rgba(255,255,255,0.2); padding:6px;">44.4</td></tr></tbody></table>\n\n○ (A) 24cm\n○ (B) 20cm\n○ (C) 16cm\n○ (D) 12cm',
    answer: '(C) 16cm',
    solution: '1. 成像原理與等大像交界：\n- 當物體放在 2 倍焦距上（物距 $p = 2f$）時，成像亦在 2 倍焦距上（像距 $q = 2f$），此時 $p = q$。\n- 當物距 $p > 2f$ 時，像距 $q < 2f$（物距大於像距，即 $p > q$）。\n- 當物距 $f < p < 2f$ 時，像距 $q > 2f$（物距小於像距，即 $p < q$）。\n\n2. 數據表範圍過濾：\n- 觀察表中數據：\n  - 當 $p = 35$ 時，$q = 29.5$（$p > q$）\n  - 當 $p = 25$ 時，$q = 44.4$（$p < q$）\n- 由此可知 $p = q = 2f$ 的交界點必定落在 $p = 35$ 與 $p = 25$ 之間，其對應的等大像距離範圍落在 $29.5\\text{ cm} \\sim 35\\text{ cm}$ 之間。\n\n3. 焦距 $f$ 範圍計算：\n  $$29.5 < 2f < 35$$\n  $$14.75\\text{ cm} < f < 17.5\\text{ cm}$$\n\n4. 選項比對：\n- 僅 (C) $16\\text{ cm}$ 介於 $14.75 \\sim 17.5\\text{ cm}$ 之間，故正確答案選 (C)。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_sci_optics_117',
    examPeriod: '二段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: '透鏡折射光路圖與焦距判定 (113年會考第36題)',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '焦點定義：自焦點發射的光線經凸透鏡折射後必平行於主軸！圖(B)中 P 點距透鏡 10 cm，折射後光線平行主軸，故 P 點即為焦點，透鏡焦距最可能為 10 cm。',
    stem: '已知下列各選項的示意圖，表示由透鏡主軸上 $P$ 點發射的光線，經過透鏡後的偏折情形，則哪一個選項中透鏡的焦距最有可能為 $10\\text{ cm}$？【113.會考】\n\n○ (A) 圖 (A)\n○ (B) 圖 (B)\n○ (C) 圖 (C)\n○ (D) 圖 (D)',
    answer: '(B)',
    solution: '1. 凸透鏡三大基本光路與焦點定義：\n- **規則一**：平行於主軸的光線，經凸透鏡折射後會通過鏡後焦點。\n- **規則二（光路可逆性）**：自焦點發射（或通過焦點）的光線，經凸透鏡折射後會「平行於主軸」發散/射出。\n- **規則三**：通過鏡心的光線，直線穿過不偏折。\n\n2. 分析選項 (B) 的圖示：\n- 圖中 $P$ 點位於透鏡主軸上，距離透鏡為 $10\\text{ cm}$。\n- 自 $P$ 點發出的多條光線，經過透鏡折射後，全部「平行於主軸」前進。\n- 根據上述規則二，這代表 $P$ 點恰好就是該凸透鏡的「焦點」！\n- 因為 $P$ 點到透鏡鏡心的距離為 $10\\text{ cm}$，故該透鏡之焦距 $f$ 恰好為 $10\\text{ cm}$。\n\n3. 其他選項分析：\n- **(A)** 折射光線呈現發散，其後方延長虛線會聚於透鏡左側 $20\\text{ cm}$ 處，此為凹透鏡，虛焦點為 $20\\text{ cm}$（焦距 $f = 20\\text{ cm}$），不符合 $10\\text{ cm}$ 的要求。\n- **結論**：正確答案選 (B)。\n\n4. 影音解說連結：\nhttps://www.youtube.com/watch?v=-bhnwXIVzXw',
    diagramUrl: 'assets/questions/q_117_lens_focal_length_diagram.png',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  }
];

const DELETED_KEYS_STORAGE = 'miley_deleted_question_ids_v31';

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
    if (stored !== null) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          this.questions = parsed;
        } else {
          this.questions = JSON.parse(JSON.stringify(INITIAL_SEED_DATA));
        }
      } catch (e) {
        console.error('Failed to parse localStorage questions, loading seeds', e);
        this.questions = JSON.parse(JSON.stringify(INITIAL_SEED_DATA));
      }
    } else {
      // First time user visit ONLY: Initialize with demo seeds
      this.questions = JSON.parse(JSON.stringify(INITIAL_SEED_DATA));
      this.save();
    }

    // Auto-sync any newly added system seed questions if not deleted and not present
    INITIAL_SEED_DATA.forEach(seed => {
      if (Array.isArray(this.deletedIds) && this.deletedIds.includes(seed.id)) return;
      const exists = this.questions.some(q => q.id === seed.id);
      if (!exists) {
        this.questions.push(JSON.parse(JSON.stringify(seed)));
      }
    });

    // Sanitize & auto-repair legacy or corrupt date values without overriding user edits
    if (Array.isArray(this.questions)) {
      this.questions.forEach(q => {
        if (!q.uploadDate || typeof q.uploadDate !== 'string') {
          q.uploadDate = this.getTodayDateStr();
        }
        if (!q.mondayDate || typeof q.mondayDate !== 'string' || !q.mondayDate.includes('-')) {
          q.mondayDate = this.getMondayDate(q.uploadDate);
        }
        if (!Array.isArray(q.mondayDates) || q.mondayDates.length === 0 || q.mondayDates.some(m => !m || typeof m !== 'string' || !m.includes('-'))) {
          q.mondayDates = [q.mondayDate];
        }
      });
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
    const uploadDate = qData.uploadDate || this.getTodayDateStr();
    const mondayDate = this.getMondayDate(uploadDate);
    const mondayDates = [mondayDate];
    const weekLabel = `${mondayDate} (上傳週期)`;

    const newQuestion = {
      id,
      examPeriod: qData.examPeriod || '二段',
      subject: qData.subject || '自然/理化',
      errorReason: qData.errorReason || '觀念不懂',
      concept: qData.concept || '通用觀念',
      uploadDate,
      mondayDate,
      mondayDates,
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
      : [q.mondayDate || this.getCurrentMondayDate()];

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
      : [q.mondayDate || this.getCurrentMondayDate()];
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
      
      const currentMonday = q.mondayDate || this.getCurrentMondayDate();
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

  // Get local date string YYYY-MM-DD for today
  getTodayDateStr() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const da = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${da}`;
  }

  // Get Monday date string (YYYY-MM-DD) for any date string or Date object
  getMondayDate(dateInput) {
    let d;
    if (!dateInput) {
      d = new Date();
    } else if (typeof dateInput === 'string') {
      const parts = dateInput.split('T')[0].split('-');
      if (parts.length === 3) {
        d = new Date(parseInt(parts[0], 10), parseInt(parts[1], 10) - 1, parseInt(parts[2], 10));
      } else {
        d = new Date(dateInput);
      }
    } else if (dateInput instanceof Date) {
      d = new Date(dateInput.getTime());
    } else {
      d = new Date();
    }

    if (isNaN(d.getTime())) d = new Date();

    const day = d.getDay(); // 0 is Sunday, 1 is Monday...
    const diff = d.getDate() - day + (day === 0 ? -6 : 1);
    const monday = new Date(d.getFullYear(), d.getMonth(), diff);

    const yyyy = monday.getFullYear();
    const mm = String(monday.getMonth() + 1).padStart(2, '0');
    const dd = String(monday.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  getCurrentMondayDate() {
    return this.getMondayDate(new Date());
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
    const currentMonday = this.getCurrentMondayDate();
    const nextMonday = this.getNextMondayDate(currentMonday);

    tree['二段'] = {
      [currentMonday]: [],
      [nextMonday]: []
    };

    this.questions.forEach(q => {
      const exam = q.examPeriod || '二段';
      const fallbackM = q.mondayDate || this.getCurrentMondayDate();
      const mList = Array.isArray(q.mondayDates) && q.mondayDates.length > 0
        ? q.mondayDates
        : [fallbackM];
      
      if (!tree[exam]) tree[exam] = {};

      mList.forEach(monday => {
        if (!monday || typeof monday !== 'string' || !monday.includes('-')) return;
        if (!tree[exam][monday]) tree[exam][monday] = [];
        if (!tree[exam][monday].includes(q)) {
          tree[exam][monday].push(q);
        }
      });
    });
    return tree;
  }

  getAllMondayDates() {
    const mondays = new Set();
    const currentM = this.getCurrentMondayDate();
    const nextM = currentM ? this.getNextMondayDate(currentM) : null;

    if (currentM && typeof currentM === 'string' && currentM.includes('-')) mondays.add(currentM);
    if (nextM && typeof nextM === 'string' && nextM.includes('-')) mondays.add(nextM);

    this.questions.forEach(q => {
      if (q && q.mondayDate && typeof q.mondayDate === 'string' && q.mondayDate.includes('-')) {
        mondays.add(q.mondayDate);
      }
      if (q && Array.isArray(q.mondayDates)) {
        q.mondayDates.forEach(m => {
          if (m && typeof m === 'string' && m.includes('-')) {
            mondays.add(m);
          }
        });
      }
    });
    return Array.from(mondays).filter(m => m && typeof m === 'string' && m.includes('-')).sort();
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
    const CALENDAR_STORAGE_KEY = 'miley_study_calendar_events_v2';

    // Purge legacy v1 demo events if present
    if (localStorage.getItem('miley_study_calendar_events_v1')) {
      localStorage.removeItem('miley_study_calendar_events_v1');
    }

    const stored = localStorage.getItem(CALENDAR_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        return [];
      }
    }
    
    localStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify([]));
    return [];
  }

  saveCalendarEvents(events) {
    const CALENDAR_STORAGE_KEY = 'miley_study_calendar_events_v2';
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
