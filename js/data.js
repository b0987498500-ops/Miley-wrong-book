/**
 * Smart Wrong Question Review System - Data & LocalStorage Management
 * Manages wrong questions, Ebbinghaus repetition states, tree structure, seed datasets.
 */

const STORAGE_KEY = 'miley_wrong_questions_v43';

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
    stem: '已知下列各選項的示意圖，表示由透鏡主軸上 $P$ 點發射的光線，經過透鏡後的偏折情形，則哪一個選項中透鏡的焦距最有可能為 $10\\text{ cm}$？【113.會考】',
    answer: '(B)',
    solution: '1. 凸透鏡三大基本光路與焦點定義：\n- **規則一**：平行於主軸的光線，經凸透鏡折射後會通過鏡後焦點。\n- **規則二（光路可逆性）**：自焦點發射（或通過焦點）的光線，經凸透鏡折射後會「平行於主軸」發散/射出。\n- **規則三**：通過鏡心的光線，直線穿過不偏折。\n\n2. 分析選項 (B) 的圖示：\n- 圖中 $P$ 點位於透鏡主軸上，距離透鏡為 $10\\text{ cm}$。\n- 自 $P$ 點發出的多條光線，經過透鏡折射後，全部「平行於主軸」前進。\n- 根據上述規則二，這代表 $P$ 點恰好就是該凸透鏡的「焦點」！\n- 因為 $P$ 點到透鏡鏡心的距離為 $10\\text{ cm}$，故該透鏡之焦距 $f$ 恰好為 $10\\text{ cm}$。\n\n3. 其他選項分析：\n- **(A)** 折射光線呈現發散，其後方延長虛線會聚於透鏡左側 $20\\text{ cm}$ 處，此為凹透鏡，虛焦點為 $20\\text{ cm}$（焦距 $f = 20\\text{ cm}$），不符合 $10\\text{ cm}$ 的要求。\n- **結論**：正確答案選 (B)。\n\n[點選看 YouTube](https://www.youtube.com/watch?v=-bhnwXIVzXw)',
    diagramUrl: 'assets/questions/q_117_lens_focal_length_diagram.png',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_sci_heat_118',
    examPeriod: '二段',
    subject: '自然/理化',
    errorReason: '計算粗心',
    concept: '冰塊熔化與熱平衡計算',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '冰塊熔化質量守恆：20g 冰化成 20g 水（20mL），液面上升 40mL 代表有 2 顆冰塊！冰塊由 -20°C 到完全熔化為 0°C 水共需 36.4 分鐘（吸熱 2×36.4×50 = 3640 卡），再利用「飲料放熱 ＝ 冰水升溫吸熱 ＋ 熔化吸熱」列式求得平衡溫度 T = 10°C。',
    stem: '曉華準備了一杯 $500\\text{ 毫升}、20\\text{ }^\\circ\\text{C}$，密度為 $1.01\\text{ 公克／立方公分}$，且比熱為 $0.8$ 的飲料，再丟入數顆冰塊，過一陣子後冰塊完全熔化，曉華發現飲料水位上升到 $540\\text{ 毫升}$。（假設水與飲料的體積有加成性）已知冰塊溫度為 $-20\\text{ }^\\circ\\text{C}$，每顆冰塊質量為 $20\\text{ 公克}$，且每顆冰塊隨時間熔化成水的溫度變化如圖，冰塊密度為 $0.9\\text{ 公克／立方公分}$。不計熱能散失，試算最後達熱平衡時，飲料溫度為何？\n\n○ (A) 13°C\n○ (B) 5°C\n○ (C) 15°C\n○ (D) 10°C',
    answer: '(D) 10°C',
    solution: '1. **判斷丟入冰塊的顆數**：\n- 每顆冰塊質量為 $20\\text{ g}$，熔化成水後質量守恆仍為 $20\\text{ g}$。\n- 水的密度為 $1.0\\text{ g/cm}^3$，故每顆冰塊熔化後體積為 $20\\text{ cm}^3 = 20\\text{ mL}$。\n- 飲料水位從 $500\\text{ mL}$ 增加到 $540\\text{ mL}$，體積增加 $\\Delta V = 540 - 500 = 40\\text{ mL}$。\n- 故丟入冰塊顆數為：$\\frac{40\\text{ mL}}{20\\text{ mL/顆}} = 2\\text{ 顆}$（總質量 $M = 2 \\times 20 = 40\\text{ g}$）。\n\n2. **根據加熱圖計算每顆冰塊熔化吸熱量**：\n- 加熱熱源功率為每分鐘提供 $50\\text{ cal}$（$50\\text{ cal/min}$）。\n- 由溫度－時間變化圖可知，每顆冰塊從 $-20\\text{ }^\\circ\\text{C}$ 升溫並完全熔化成 $0\\text{ }^\\circ\\text{C}$ 的水，總共歷時 $36.4\\text{ 分鐘}$。\n- 每顆冰塊吸熱量：$Q_1 = 36.4 \\times 50 = 1820\\text{ cal}$。\n- 兩顆冰塊完全熔化為 $0\\text{ }^\\circ\\text{C}$ 水總吸熱量：$Q_{\\text{熔}} = 2 \\times 1820 = 3640\\text{ cal}$。\n\n3. **列熱平衡方程式求末溫 $T$**：\n- 設熱平衡後之末溫為 $T\\text{ }^\\circ\\text{C}$。\n- **飲料放熱**：\n  - 飲料質量 $m_{\\text{飲}} = 500\\text{ mL} \\times 1.01\\text{ g/cm}^3 = 505\\text{ g}$。\n  - 飲料比熱 $s = 0.8\\text{ cal/(g}\\cdot^\\circ\\text{C)}$，初溫 $20\\text{ }^\\circ\\text{C}$。\n  - 放熱量 $H_{\\text{放}} = 505 \\times 0.8 \\times (20 - T) = 404 \\times (20 - T)$。\n- **冰塊吸熱**：\n  - 熔化成 $0\\text{ }^\\circ\\text{C}$ 水已吸收 $3640\\text{ cal}$。\n  - 兩顆熔化後的 $40\\text{ g}$ 水由 $0\\text{ }^\\circ\\text{C}$ 升溫至 $T\\text{ }^\\circ\\text{C}$（水的比熱為 $1.0$）：\n    $H_{\\text{水升溫}} = 40 \\times 1 \\times (T - 0) = 40T$。\n  - 總吸熱量 $H_{\\text{吸}} = 3640 + 40T$。\n- **能量守恆（放熱 ＝ 吸熱）**：\n  $$404 \\times (20 - T) = 3640 + 40T$$\n  $$8080 - 404T = 3640 + 40T$$\n  $$4440 = 444T \\implies T = 10\\text{ }^\\circ\\text{C}$$\n\n4. **結論**：達熱平衡時飲料溫度為 $10\\text{ }^\\circ\\text{C}$，正確答案選 **(D)**。',
    diagramUrl: 'assets/questions/q_118_ice_thermal_equilibrium_graph.png?v=32',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_soc_geo_119',
    examPeriod: '二段',
    subject: '社會/地理',
    errorReason: '觀念不懂',
    concept: '臺灣東西向地形剖面與縣市地形判斷',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '地形剖面由西向東：西側海平面（0m）依序為海岸平原、苗栗丘陵，東端攀升至雪山山脈（2500m以上高山），呈現「西低東高」，符合苗栗縣地形！宜蘭為西高東低，台北為中間低平之盆地，彰化最高僅八卦台地（約400m）。',
    stem: '附圖是臺灣某縣市境內，沿「東西向」所繪製的地形剖面圖。根據其地形起伏特色判斷，此剖面圖所在的縣市應為下列何者？\n（本圖東西兩端，距離 56.6 公里。）\n\n○ (A) 臺北市\n○ (B) 宜蘭縣\n○ (C) 彰化縣\n○ (D) 苗栗縣',
    answer: '(D) 苗栗縣',
    solution: '1. **觀察剖面圖之地勢特徵**：\n- **西側**：海拔接近 $0\\text{ 公尺}$，為西部的濱海平原。\n- **中間**：海拔逐漸升高至數百公尺，為丘陵與山麓地帶。\n- **東側**：海拔急劇攀升，東界達到 $2,500\\text{ 公尺}$ 以上的高山山脈。\n- **整體趨勢**：呈現顯著的「**西低東高**」，且東西寬度約 $56.6\\text{ 公里}$。\n\n2. **各選項縣市地形比對**：\n- **(A) 臺北市**：主要為「臺北盆地」，地勢特徵為**四周高、中間低平**（盆底海拔多在 $20\\text{ 公尺}$ 以下），絕非自西向東一路攀升至 $2,500\\text{ 公尺}$。\n- **(B) 宜蘭縣**：位於臺灣東北部，東臨太平洋（東側為海平線 $0\\text{ 公尺}$），西背雪山山脈與中央山脈，地勢呈現「**西高東低**」，與本圖完全相反。\n- **(C) 彰化縣**：全境地形平坦，主要為彰化平原，東部邊界為八卦台地（最高海拔僅約 $400\\text{ 公尺}$ 左右），縣境內絕無 $2,000\\text{ 公尺}$ 以上之崇山峻嶺。\n- **(D) 苗栗縣**：苗栗縣西臨臺灣海峽（海拔 $0\\text{ 公尺}$），境內由西向東依次為海岸平原、苗栗丘陵，東側深入雪山山脈（泰安鄉界臨雪山主峰、大霸尖山等，海拔高達 $2,500\\sim 3,800\\text{ 公尺}$），完全吻合圖中「西側為海、東側為兩千五百公尺以上高山」之剖面特徵！\n\n3. **結論**：正確答案選 **(D)**。',
    diagramUrl: 'assets/questions/q_119_taiwan_elevation_profile.png',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_stem_cross_section_001',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '木本植物莖橫切面與年輪構造',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '年輪由「木質部」因季節生長差異堆疊而成，形成層在木質部外側向內分裂，越內圈形成時間越早。玉米為單子葉草本植物，維管束為散生排列，不具形成層與年輪。',
    stem: '附圖為某植物莖的橫切面及局部放大圖，若乙為樹皮，則下列相關敘述何者正確？\n\n○ (A) 此植物可能為玉米\n○ (B) 玉米莖的橫切面與此圖不同\n○ (C) 甲₁ 及甲₂ 部位是由韌皮部堆疊而產生\n○ (D) 甲₁ 形成時間較甲₂ 為晚',
    answer: '(B) 玉米莖的橫切面與此圖不同',
    solution: '1. **年輪的成因與組成**：\n- 植物莖橫切面上的環狀紋路（年輪）是由「**木質部**」在四季氣候不同、細胞生長速率與大小相異所形成（春夏細胞大壁薄顏色淺、秋冬細胞小壁厚顏色深）。\n- 形成層向內分裂產生木質部，向外分裂產生韌皮部。因此越靠內圈（甲₁）越早形成，越靠外圈（甲₂）越晚形成。\n\n2. **各選項分析**：\n- **(A)** 圖中有明顯環狀排列與年輪，為多年生雙子葉木本植物；玉米為單子葉草本植物，不具年輪。\n- **(B) 正確**。玉米莖的維管束為「散生排列」，且無形成層與年輪，橫切面與此圖截然不同。\n- **(C)** 甲₁ 及甲₂ 皆為「木質部」堆疊產生，並非韌皮部（韌皮部位於形成層外側、樹皮乙內）。\n- **(D)** 甲₁ 位於更內圈，形成時間較甲₂ 為「早」。\n\n3. **結論**：正確答案選 **(B)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_digestive_enzyme_002',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '消化液酵素專一性與纖維素',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '人體消化液（唾液、胃液、胰液、腸液）中沒有任何酵素能分解纖維素！唾液分解澱粉，胃液分解蛋白質，胰液可分解澱粉、蛋白質與脂質。',
    stem: '取甲、乙、丙 3 支試管，先加入等量的物質 X，再依序分別加入足量人體的唾液、胃液、胰液，並調整各試管的 pH 值及溫度等條件，使其適合各消化液中的酵素作用。靜置足夠的反應時間後，結果 3 支試管內物質 X 的含量皆沒有變化，推論下列 4 種物質中，何者最可能為物質 X？\n\n○ (A) 澱粉\n○ (B) 脂質\n○ (C) 蛋白質\n○ (D) 纖維素',
    answer: '(D) 纖維素',
    solution: '1. **人體主要消化酵素功能**：\n- **唾液**：含唾液澱粉酶，可將澱粉初步分解為麥芽糖。\n- **胃液**：含胃蛋白酶（在強酸環境下作用），可將蛋白質初步分解。\n- **胰液**：含胰澱粉酶、胰蛋白酶、胰脂肪酶，可全面分解澱粉、蛋白質與脂質。\n\n2. **物質 X 的性質分析**：\n- 物質 X 在唾液、胃液、胰液中皆完全「沒有被分解」，含量保持不變。\n- 若物質 X 為澱粉，會被唾液與胰液分解；若為脂質，會被胰液分解；若為蛋白質，會被胃液與胰液分解。\n- 人體消化系統中**不具備分解纖維素的酵素**，故纖維素無法被人體唾液、胃液、胰液分解。\n\n3. **結論**：正確答案選 **(D)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_microscope_choice_003',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '複式顯微鏡與解剖顯微鏡之適用',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '複式顯微鏡適合觀察微小、薄且透光的標本（如花粉粒形狀、口腔皮膜細胞）。解剖顯微鏡倍率較低、成像具立體感，適合觀察不透光的表面特徵或活體運動。',
    stem: '下列實驗活動，何者應使用複式顯微鏡觀察較適合？\n\n○ (A) 觀察花粉粒的形狀\n○ (B) 觀察一穗玉米中玉米的數目\n○ (C) 觀察商品上的條碼數字\n○ (D) 觀察蟑螂步足的擺動方式',
    answer: '(A) 觀察花粉粒的形狀',
    solution: '1. **複式顯微鏡與解剖顯微鏡的比較**：\n- **複式顯微鏡**：放大倍率高（約 $40\\sim 1000$ 倍），使用透射光，觀察標本必須切得極薄或能透光，成像為倒立放大的虛像。適合觀察細胞、組織切片、花粉粒、微生物等細微細胞級構造。\n- **解剖顯微鏡（立體顯微鏡）**：放大倍率較低（約數倍至數十倍），使用反射光，標本不需透光，成像為正立立體像，操作空間大。適合解剖動植物標本、觀察小型昆蟲表面外型或運動動態。\n\n2. **各選項分析**：\n- **(A)** 花粉粒極其微小（數十微米），需透光高倍率放大才能看清表面雕紋與形狀，最適宜使用複式顯微鏡。\n- **(B)** 玉米數目肉眼或放大鏡即可計數。\n- **(C)** 商品條碼肉眼即可辨識，無需高倍複式顯微鏡。\n- **(D)** 觀察蟑螂步足擺動需觀察立體活體動態，解剖顯微鏡更為適合。\n\n3. **結論**：正確答案選 **(A)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_org_level_tissue_004',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '生物組成層次（組織 vs 器官）',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '葉脈是維管束（含木質部與韌皮部），屬於「輸導組織」！瓜子（種子）、梨子（果實）、馬鈴薯（塊莖）都是植物的「器官」。',
    stem: '（甲）瓜子；（乙）葉脈；（丙）梨子；（丁）馬鈴薯。請問上列哪些在個體組成的層次上屬於「組織」？\n\n○ (A) 甲丁\n○ (B) 乙丙\n○ (C) 丙\n○ (D) 乙',
    answer: '(D) 乙',
    solution: '1. **植物體的組成層次**：\n- 細胞 $\\to$ 組織 $\\to$ 器官 $\\to$ 個體（植物沒有器官系統層次）。\n\n2. **分析題幹各構造**：\n- **（甲）瓜子**：為植物的「種子」，負責繁殖後代，屬於**生殖器官**。\n- **（乙）葉脈**：為葉片中的維管束，由導管、篩管等細胞構成，負責水分與養分的運輸，屬於**輸導組織**。\n- **（丙）梨子**：為植物的「果實」，保護種子，屬於**生殖器官**。\n- **（丁）馬鈴薯**：為植物的地下「塊莖」，儲藏養分，屬於**營養器官**。\n\n3. **結論**：屬於「組織」層次的僅有乙，正確答案選 **(D)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_circulatory_heart_005',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '血液循環路徑與心臟腔室順序',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '口服藥物經小腸吸收經靜脈回流，必定「先右心再左心」！順序：上/下大靜脈 $\\to$ 右心房(丙) $\\to$ 右心室(丁) $\\to$ 肺循環 $\\to$ 左心房(甲) $\\to$ 左心室(乙) $\\to$ 主動脈。',
    stem: '「大雄得了流行性感冒，吃了醫生開的藥後，感覺舒服了點。」此藥物流經心臟各腔室的順序應為何？\n甲：左心房；乙：左心室；丙：右心房；丁：右心室。\n\n○ (A) 甲乙丙丁\n○ (B) 乙甲丁丙\n○ (C) 丙丁甲乙\n○ (D) 丁丙乙甲',
    answer: '(C) 丙丁甲乙',
    solution: '1. **口服藥物在人體內的循環路徑**：\n- 藥物由消化道（小腸）吸收進入微血管後，經肝門靜脈 $\\to$ 肝臟 $\\to$ 肝靜脈 $\\to$ 下大靜脈回到心臟。\n- **進入心臟第一站**：下大靜脈將血液送入「**右心房（丙）**」。\n- **心臟內部流動與肺循環**：\n  1. **右心房（丙）**收縮，血液流入**右心室（丁）**。\n  2. **右心室（丁）**收縮，經肺動脈將含藥血液打入肺部微血管。\n  3. 經肺靜脈回流至**左心房（甲）**。\n  4. **左心房（甲）**流入**左心室（乙）**。\n  5. **左心室（乙）**收縮，將充氧且含藥的血液打入主動脈，輸送到全身各組織器官發揮藥效。\n\n2. **結論**：流經心臟腔室的正確順序為 **丙 $\\to$ 丁 $\\to$ 甲 $\\to$ 乙**。正確答案選 **(C)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_girdling_tree_006',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '雙子葉木本莖維管束與環狀剝皮致死順序',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '環狀剝皮剝掉的是韌皮部（樹皮內側），葉片光合產物無法向下運送（丁） $\\to$ 根細胞餓死（乙） $\\to$ 根無法吸水，水分運送受阻（丙） $\\to$ 葉片缺水枯死（甲）。',
    stem: '（甲）葉細胞枯死；（乙）根細胞死亡；（丙）水分運送受阻；（丁）養分運送受阻。\n上列為雙子葉木本莖的主幹經環狀剝皮後，造成植物死亡的過程，依序排列正確者應為下列何者？\n\n○ (A) （甲）（乙）（丙）（丁）\n○ (B) （乙）（丙）（甲）（丁）\n○ (C) （丁）（丙）（乙）（甲）\n○ (D) （丁）（乙）（丙）（甲）',
    answer: '(D) （丁）（乙）（丙）（甲）',
    solution: '1. **環狀剝皮受損構造**：\n- 雙子葉木本植物莖由外向內：樹皮（含外層保護組織與韌皮部） $\\to$ 形成層 $\\to$ 木質部。\n- 環狀剝皮會將形成層外側的「**韌皮部**」全部剝除，而深層的「木質部」一開始並未受損。\n\n2. **連鎖生理反應時序分析**：\n- **步驟 1（丁）**：韌皮部負責運送葉片光合作用合成的有機養分（蔗糖等）。韌皮部被切斷後，養分無法向下運輸至根部，即**養分運送受阻**。\n- **步驟 2（乙）**：根部細胞深埋土壤中無法進行光合作用，需要地上部供應養分；失去養分來源後，根細胞缺乏能量代謝，逐漸耗竭而**根細胞死亡**。\n- **步驟 3（丙）**：根細胞死亡後失去吸收水分與無機鹽的功能，且根壓與主動運輸喪失，造成植物**水分運送受阻**。\n- **步驟 4（甲）**：地上部枝葉因缺水無法維持膨壓與光合作用，最終**葉細胞枯死**，整株植物枯亡。\n\n3. **結論**：正確致死順序為 **（丁）$\\to$（乙）$\\to$（丙）$\\to$（甲）**。正確答案選 **(D)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_taxis_tropism_007',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '動物趨性與植物向性概念辨析',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '植物因生長素分布不均產生的單向生長反應稱為「向性」（如向光性）；動物受環境刺激產生的全體定向移動稱為「趨性」（如趨光性、趨化性）。',
    stem: '下列關於趨性的描述，何者錯誤？\n\n○ (A) 植物對於光線、溫度等環境刺激，所產生趨向或背離的反應稱為趨性\n○ (B) 趨性屬於一種本能行為\n○ (C) 蛾類會展現正趨光行為\n○ (D) 有些動物具有正趨光行為，有些具有負趨光行為',
    answer: '(A) 植物對於光線、溫度等環境刺激，所產生趨向或背離的反應稱為趨性',
    solution: '1. **趨性（Taxis）與向性（Tropism）的本質差異**：\n- **趨性**：**動物**（或具有游動能力的微小單細胞生物）受到環境單向刺激時，整個個體發生朝向（正趨性）或背向（負趨性）刺激源的**位移運動**。這是神經系統控制的先天性本能行為。\n- **向性**：**植物**受單向刺激（如單側光、地心引力、水分）引發兩側生長素濃度差異，導致兩側生長速率不均而發生的**局部彎曲生長**（如植物莖的向光性、根的向地性）。\n\n2. **各選項分析**：\n- **(A) 錯誤**：植物產生的反應稱為「**向性**」，而非趨性。\n- **(B) 正確**：趨性是動物先天的、遺傳性的本能行為。\n- **(C) 正確**：飛蛾撲火即為典型的正趨光行為。\n- **(D) 正確**：草履蟲、飛蛾具正趨光性；渦蟲、蟑螂、蚯蚓具負趨光性（避光）。\n\n3. **結論**：錯誤敘述為 **(A)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_alveoli_gas_exchange_008',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '肺泡氣體交換與吸氣呼吸運動',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '吸氣時胸腔擴大，肋骨上提、橫膈「收縮下降」！氣體交換以擴散作用進行：肺泡(甲)氧氣高於微血管(乙)，微血管(乙)二氧化碳高於肺泡(甲)。',
    stem: '附圖表示人體肺部的氣體交換示意圖（甲為肺泡，乙為微血管），下列敘述何者錯誤？\n\n○ (A) 氧氣濃度：甲 > 乙\n○ (B) 甲構造充滿氣體時，橫膈的位置是上升的\n○ (C) 乙最後離開肺臟會流入肺靜脈\n○ (D) 二氧化碳濃度：甲 < 乙',
    answer: '(B) 甲構造充滿氣體時，橫膈的位置是上升的',
    solution: '1. **圖示判讀**：\n- 構造**甲**為肺泡腔，構造**乙**為包覆在肺泡表面的微血管。\n- 氣體以**擴散作用**進行交換：吸入新鮮空氣使肺泡內 $O_2$ 濃度高於微血管，故 $O_2$ 由甲擴散到乙；身體代謝產生的 $CO_2$ 在微血管中濃度高於肺泡，故 $CO_2$ 由乙擴散到甲。\n\n2. **各選項分析**：\n- **(A) 正確**：肺泡（甲）之氧氣濃度高於缺氧血液（乙），擴散驅動力甲 > 乙。\n- **(B) 錯誤**：甲構造充滿氣體代表**吸氣狀態**。吸氣時肋間肌收縮使肋骨上提、**橫膈肌收縮而使橫膈下降**，胸腔體積擴大、胸內壓小於大氣壓，空氣灌入肺部。呼氣時橫膈才放鬆上升。\n- **(C) 正確**：乙微血管充氧後匯集成肺靜脈，將充氧血輸送回左心房。\n- **(D) 正確**：微血管（乙）帶來組織產生的二氧化碳，濃度高於肺泡空氣（甲），故甲 < 乙。\n\n3. **結論**：錯誤敘述選 **(B)**。',
    diagramUrl: 'assets/questions/q_bio_lung_gas_exchange.png?v=35',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_endocrine_hormone_009',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '內分泌腺體之激素運送與抽血檢驗',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '內分泌腺無導管，激素直接分泌釋入微血管並隨「血液循環」運送全身，故檢驗性腺或內分泌是否正常應由「靜脈抽取血液」檢驗。',
    stem: '步美最近月經週期紊亂且併發嚴重經痛，醫生認為可能是性腺分泌失調所造成，此時醫生若想知道步美的性腺分泌是否正常，應該使用什麼方法檢驗？\n\n○ (A) 直接穿刺卵巢，抽取其內的激素做檢查\n○ (B) 由靜脈抽取血液做檢查\n○ (C) 收集尿液做檢查\n○ (D) 收集糞便做檢查',
    answer: '(B) 由靜脈抽取血液做檢查',
    solution: '1. **內分泌腺與外分泌腺的區別**：\n- **外分泌腺**：具有導管，分泌物經導管排放至體外或消化道管腔（如唾腺、汗腺、皮脂腺）。\n- **內分泌腺**：**沒有導管**，腺體細胞產生的激素（荷爾蒙）直接擴散進入周圍微血管網，**藉由血液循環**送達全身特定受體細胞發揮生理效應（如卵巢分泌雌激素、黃體素）。\n\n2. **檢驗方式分析**：\n- 卵巢分泌的性激素會迅速進入全身血液循環中。\n- 醫生若要評估性腺激素分泌濃度與週期曲線，最標準、微創且精準的方法就是**從手臂靜脈抽取血液樣本進行檢驗**。\n- 穿刺卵巢 (A) 為侵入性極高且不必要的危險手術；尿液 (C) 與糞便 (D) 主要為代謝廢物，無法精確即時反映血液中性激素的活性血中濃度。\n\n3. **結論**：正確答案選 **(B)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_brain_cerebrum_learning_010',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '神經系統中樞：大腦功能（記憶、學習與思考）',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '老鼠辨認捕鼠器陷阱、學習避開危險是靠大腦的「記憶與學習」能力！大腦掌管感覺、記憶、思考與意識行為。',
    stem: '「每到夏天，總會有蟑螂、老鼠肆虐，為了環境整潔，有時必須採取捕鼠的行動，而捕鼠的方式要不斷推陳出新，因為同一種方法用久了效果會變差。」這種現象與老鼠何部位的發達程度有關？\n\n○ (A) 大腦\n○ (B) 小腦\n○ (C) 腦幹\n○ (D) 脊髓',
    answer: '(A) 大腦',
    solution: '1. **人體及哺乳動物腦部構造與功能**：\n- **大腦**：是高級神經活動中心，主管**意識、感覺、思考、學習、記憶與自主運動**。\n- **小腦**：主管肌肉運動的協調性與維持**身體平衡**。\n- **腦幹**：又稱「生命中樞」，控制呼吸、心跳、血壓等維持生命的自律反射，以及咳嗽、打噴嚏、吞嚥等頭部反射。\n- **脊髓**：為中樞神經與周圍神經的傳導橋樑，主管軀幹與四肢的無意識反射（如膝跳反射、縮手反射）。\n\n2. **老鼠行為解析**：\n- 老鼠對同一種捕鼠陷阱產生警覺、能記住同伴遇害的線索並改變取食行為，屬於**經驗學習與記憶**的表現，這正是**大腦**所負責的功能。\n\n3. **結論**：正確答案選 **(A)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_biosphere_range_011',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '地球生物圈的垂直範圍（海平面±10公里）',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '生物圈範圍以海平面為基準，垂直向上約 10 公里、向下約 10 公里（±10 公里），總厚度約 20 公里。',
    stem: '生物生活在地球的生物圈，若以海平面為零，垂直以上為「+」，垂直以下為「-」，則目前所知生物圈的範圍是在多少公里之間？\n\n○ (A) ±10\n○ (B) ±1000\n○ (C) ±10000\n○ (D) ±100000',
    answer: '(A) ±10',
    solution: '1. **生物圈的定義與範圍**：\n- 生物圈（Biosphere）是指地球表面有生物生存的區域總稱。\n- 包括水圈的全部、大氣圈的底部（對流層）以及岩石圈的表層。\n\n2. **垂直界限數值**：\n- 以海平面為 $0$：\n  - **垂直向上（+）**：約達海平面以上 $10\\text{ 公里}$（約一萬公尺高空，鳥類或高山耐寒植物、微生物極限）。\n  - **垂直向下（-）**：約達海平面以下 $10\\text{ 公里}$（約一萬公尺深的馬里亞納海溝底棲生物，以及地殼淺層的嗜極微生物）。\n- 因此目前所知生物圈垂直分布界限約在海平面上下各 $10\\text{ 公里}$（即 $\\pm 10\\text{ 公里}$），總厚度約為 $20\\text{ 公里}$。\n\n3. **結論**：正確答案選 **(A)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_transpiration_cooling_012',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '植物蒸散作用調節體溫與運送水分',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '蒸散作用水分汽化帶走熱量，能有效調節植物體溫；蒸散拉力是「水分與無機鹽」上升的原動力（非養分）；氣孔開閉由「保衛細胞」調節。',
    stem: '有關「蒸散作用」的敘述，下列何者正確？\n\n○ (A) 可調節植物的溫度\n○ (B) 蒸散作用是植物體內養分運送的原動力\n○ (C) 夜晚氣孔會打開，以利蒸散作用進行\n○ (D) 氣孔的大小是由表皮細胞調節',
    answer: '(A) 可調節植物的溫度',
    solution: '1. **蒸散作用（Transpiration）之功能**：\n- 水分從氣孔散失到大氣時，會吸收大量的「汽化熱」，能有效帶走葉片熱量，降低植物葉溫，**防止高溫灼傷細胞，達到調節植物體溫的效果**。\n- 蒸散作用產生的巨大拉力，是植物體內**水分與無機鹽**由根部向莖、葉等高處向上運送的主要驅動力。\n\n2. **各選項分析**：\n- **(A) 正確**：水分蒸發吸熱可調節植物體溫。\n- **(B) 錯誤**：蒸散作用是「**水分**」上升的原動力，養分運送是依靠韌皮部的壓力流或主動運輸。\n- **(C) 錯誤**：大部分植物氣孔在「**白天打開**」（配合光合作用攝取二氧化碳），夜晚通常關閉以減少水分流失。\n- **(D) 錯誤**：氣孔大小是由「**保衛細胞**」吸水膨脹或失水萎縮來調節控制，普通表皮細胞不具備調節氣孔開閉的功能。\n\n3. **結論**：正確答案選 **(A)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_sensory_cerebrum_smell_013',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '感覺的形成與主觀感受中樞（大腦）',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '感覺受器（鼻子）只負責接受刺激並傳導神經衝動；產生「覺得香或臭」的主觀感覺與情感認知，完全是由「大腦」所產生！',
    stem: '人們對榴槤的特殊氣味會有不同感受，有些人覺得香，有些人覺得臭，而不同感受主要由下列哪一部位所產生？\n\n○ (A) 鼻子\n○ (B) 腦幹\n○ (C) 大腦\n○ (D) 小腦',
    answer: '(C) 大腦',
    solution: '1. **感覺的產生歷程**：\n- **受器（如鼻腔黏膜嗅覺細胞）**：接收化學氣味分子刺激，轉換為神經衝動。\n- **感覺神經**：將神經衝動傳導至中樞神經。\n- **大腦皮質感覺區（大腦）**：將傳入的訊號加以整合、分析與認知解讀，**最終形成嗅覺感受**。\n\n2. **主觀體驗的本質**：\n- 鼻子只是物理化學刺激的受器，無法思考或產生喜惡。\n- 每個人之所以對榴槤味道有「覺得香」或「覺得臭」截然不同的主觀情緒與認知感受，完全是大腦根據過往記憶、神經迴路與認知評價所做出的主觀判定。\n\n3. **結論**：不同感受是由 **大腦 (C)** 所產生。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_nervous_system_struct_014',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '神經系統架構（中樞神經與周圍神經）',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '中樞神經包含「腦（大腦、小腦、腦幹）與脊髓」；周圍神經包含「腦神經 12 對、脊神經 31 對」！神經是成對算，不能算條。',
    stem: '關於人體神經系統的敘述，下列何者正確？\n\n○ (A) 神經系統主要由中樞神經和周圍神經構成\n○ (B) 中樞神經是指大腦、小腦和腦幹\n○ (C) 腦神經有 12 條，脊神經有 31 條\n○ (D) 人體的脊神經是指脊髓',
    answer: '(A) 神經系統主要由中樞神經和周圍神經構成',
    solution: '1. **人體神經系統的架構劃分**：\n- **中樞神經系統 (CNS)**：由**腦**（含大腦、小腦、腦幹）和**脊髓**組成，負責指令分析與整合中心。\n- **周圍神經系統 (PNS)**：由**腦神經**（12 對）與**脊神經**（31 對）組成，負責中樞與全身感覺受器、效應器之間的訊息傳遞。\n\n2. **各選項分析**：\n- **(A) 正確**：神經系統兩大支柱即為中樞神經與周圍神經。\n- **(B) 錯誤**：中樞神經除了腦部（大腦、小腦、腦幹），還包括「**脊髓**」。\n- **(C) 錯誤**：人體神經纖維是成對對稱分布的，腦神經有 **12 對**（24 條），脊神經有 **31 對**（62 條），單位為「對」而非「條」。\n- **(D) 錯誤**：脊髓屬於中樞神經；由脊髓向兩側分出、通往軀幹四肢的神經才是「脊神經」（屬於周圍神經）。\n\n3. **結論**：正確答案選 **(A)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_bio_org_level_octopus_pine_015',
    examPeriod: '一段',
    subject: '自然/生物',
    errorReason: '觀念不懂',
    concept: '動植物組成層次比較（植物無器官系統）',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '動物組成層次：細胞 $\\to$ 組織 $\\to$ 器官 $\\to$ 器官系統 $\\to$ 個體；植物組成層次：細胞 $\\to$ 組織 $\\to$ 器官 $\\to$ 個體（植物沒有器官系統層次，層次較動物少）！',
    stem: '關於章魚和松樹在個體組成層次的差異，下列何者正確？\n\n○ (A) 兩者沒有差異\n○ (B) 章魚沒有器官系統層次\n○ (C) 松樹僅有一種器官系統\n○ (D) 松樹的層次較少',
    answer: '(D) 松樹的層次較少',
    solution: '1. **動植物個體組成層次比較**：\n- **動物（如章魚）**：細胞 $\\to$ 組織 $\\to$ 器官 $\\to$ **器官系統** $\\to$ 個體（共有 5 個層次）。章魚擁有發達的神經系統、循環系統、消化系統等。\n- **植物（如松樹）**：細胞 $\\to$ 組織 $\\to$ 器官（根、莖、葉、花、果實、種子） $\\to$ 個體（共有 4 個層次）。植物**沒有器官系統**這一層次。\n\n2. **各選項分析**：\n- **(A)** 兩者組成層次有明顯差異。\n- **(B)** 章魚為軟體動物，具有完整的器官系統。\n- **(C)** 植物（松樹）完全沒有器官系統層次，並非「僅有一種」。\n- **(D) 正確**：松樹比章魚缺少了「器官系統」這個層次，因此松樹的組成層次較少。\n\n3. **結論**：正確答案選 **(D)**。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_phy_kinematics_xt_distance_001',
    examPeriod: '一段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: '位置-時間圖 (x-t) 與路徑長計算',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '路徑長是實際走過的路程總和，只加絕對值不分正負！0~3秒走 10m，3~6秒靜止走 0m，6~8秒走 15m，總路徑長 = 10 + 0 + 15 = 25m。',
    stem: '琳琳沿直線運動的情形如右圖所示，全部過程中所經過的路徑長為多少公尺？\n\n○ (A) 5\n○ (B) 10\n○ (C) 15\n○ (D) 25',
    answer: '(D) 25',
    diagramUrl: 'assets/questions/q_phy_linlin_xt_graph.png?v=35',
    solution: '1. **基本觀念區別**：\n- **位移（Displacement）**：僅看末位置與初位置的差值 $\\Delta x = x_f - x_i$，具方向性（可正可負）。\n- **路徑長（Distance / 路程）**：物體運動時「實際走過的所有軌跡長度」，永遠為正值，將各分段運動的距離絕對值相加。\n\n2. **根據圖形分段計算琳琳走過的路徑**：\n- **$0\\sim 3\\text{ 秒}$**：位置從 $x = 5\\text{ m}$ 走到 $x = 15\\text{ m}$，移動距離：$|15 - 5| = 10\\text{ 公尺}$。\n- **$3\\sim 6\\text{ 秒}$**：位置一直維持在 $x = 15\\text{ m}$（水平線代表靜止不動），移動距離：$0\\text{ 公尺}$。\n- **$6\\sim 8\\text{ 秒}$**：位置從 $x = 15\\text{ m}$ 走回原點 $x = 0\\text{ m}$，移動距離：$|0 - 15| = 15\\text{ 公尺}$。\n\n3. **全部過程總路徑長**：\n- $L = 10 + 0 + 15 = 25\\text{ 公尺}$。\n\n4. **結論**：正確答案選 **(D)**。',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_phy_kinematics_xt_speed_vel_002',
    examPeriod: '一段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: 'x-t 圖瞬時速率、平均速率與平均速度計算',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: 'x-t 圖斜率代表速度：第3秒斜率 (4-2)/4 = 0.5 m/s；0~6秒路徑長 2+4=6m，平均速率 6/6 = 1 m/s；位移 0-2 = -2m，平均速度 -2/6 = -1/3 m/s。',
    stem: '某物體運動時的位置與時間關係圖如右，則：\n(1) 在第 3 秒瞬間的速率是多少公尺/秒？\n(2) 在 0~6 秒之間，物體的平均速率是多少公尺/秒？\n(3) 在 0~6 秒之間，物體運動的平均速度是多少公尺/秒？\n\n○ (A) (1) 0.5 m/s；(2) 1 m/s；(3) -1/3 m/s\n○ (B) (1) 0.5 m/s；(2) 0.5 m/s；(3) 1/3 m/s\n○ (C) (1) 1 m/s；(2) 1 m/s；(3) -2/3 m/s\n○ (D) (1) 2 m/s；(2) 0.5 m/s；(3) 0 m/s',
    answer: '(A) (1) 0.5 m/s；(2) 1 m/s；(3) -1/3 m/s',
    diagramUrl: 'assets/questions/q_phy_motion_xt_graph.png?v=35',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_phy_kinematics_roundtrip_speed_003',
    examPeriod: '一段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: '往返平均速率之調和平均計算',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '來回距離相等時，平均速率為調和平均數：2v1v2 / (v1 + v2) = 2×10×30 / (10 + 30) = 600 / 40 = 15 km/h，切勿直接取算術平均 (10+30)/2=20！',
    stem: '小光騎自行車上山，若上山時平均速率為 $10\\text{ 公里/小時}$，下山時平均速率為 $30\\text{ 公里/小時}$，則往返一趟的平均速率為下列何者？\n\n○ (A) 0 公里/小時\n○ (B) 10 公里/小時\n○ (C) 15 公里/小時\n○ (D) 20 公里/小時',
    answer: '(C) 15 公里/小時',
    diagramUrl: '',
    solution: '1. **定義平均速率公式**：\n- 平均速率 $= \\frac{\\text{總路徑長}}{\\text{總時間}}$。\n\n2. **推導計算過程**：\n- 設單程山路長度為 $S\\text{ 公里}$，則來回往返總路程為 $2S\\text{ 公里}$。\n- 上山所耗時間：$t_1 = \\frac{S}{10}\\text{ 小時}$。\n- 下山所耗時間：$t_2 = \\frac{S}{30}\\text{ 小時}$。\n- 往返全程總時間：\n  $$t_{\\text{總}} = t_1 + t_2 = \\frac{S}{10} + \\frac{S}{30} = \\frac{3S + S}{30} = \\frac{4S}{30} = \\frac{2S}{15}\\text{ 小時}$$\n- 往返平均速率：\n  $$\\bar{v} = \\frac{2S}{t_{\\text{總}}} = \\frac{2S}{\\frac{2S}{15}} = 2S \\times \\frac{15}{2S} = 15\\text{ 公里/小時}$$\n\n3. **常見迷思澄清**：\n- 若誤將兩速度直接取平均 $\\frac{10 + 30}{2} = 20\\text{ km/h}$ 則為錯誤！因為上山速度慢、花費的時間是下山的 3 倍，慢速所佔時間權重較大，因此平均速率必然偏向慢速側。\n\n4. **結論**：正確答案選 **(C)**。',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_phy_reference_point_pos_004',
    examPeriod: '一段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: '物體位置描述的三要素（參考點、方向、距離）',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '描述物體位置的三大要素缺一不可：(1) 基準點 (2) 方向 (3) 距離。「小威在小東(基準點) 右邊(方向) 50公尺處(距離)」三要素齊備。',
    stem: '下列何者對位置的描述最正確？\n\n○ (A) 小惠位於小強的東方\n○ (B) 小強距離小東 100 公尺處\n○ (C) 小東在北方 150 公尺\n○ (D) 小威在小東右邊 50 公尺處',
    answer: '(D) 小威在小東右邊 50 公尺處',
    diagramUrl: '',
    solution: '1. **位置描述的三大要素**：\n- 在物理學中，要精準且毫無歧義地描述一個物體在空間中的位置，必須同時具備以下三個要素：\n  1. **基準點（參考點）**：以何處為原點起點。\n  2. **方向**：朝向何方（東、西、南、北、前、後、左、右等）。\n  3. **距離**：相距多遠（數值與單位，如公尺、公里）。\n\n2. **檢視各選項**：\n- **(A)**「小惠位於小強的東方」：有基準點（小強）、方向（東方），但**缺少距離**。\n- **(B)**「小強距離小東 100 公尺處」：有基準點（小東）、距離（100公尺），但**缺少方向**（可在半徑100公尺圓周上任意處）。\n- **(C)**「小東在北方 150 公尺」：有方向（北方）、距離（150公尺），但**缺少基準點**（是以誰的北方？）。\n- **(D)**「小威在小東（基準點）右邊（方向）50 公尺處（距離）」：三要素完整無缺，描述最正確。\n\n3. **結論**：正確答案選 **(D)**。',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_phy_vt_trapezoid_disp_005',
    examPeriod: '一段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: 'v-t 圖之面積代表位移（梯形面積）',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: 'v-t 圖圖形與時間軸所圍面積即為位移！第4秒速度為12，加速度a=12/4=3，第2秒速度為6。第2~4秒梯形面積 = (6 + 12) × 2 / 2 = 18m。',
    stem: '右圖為甲車的速度（$v$）與時間（$t$）關係圖，試問第 2 秒到第 4 秒間甲車移動的位移大小為下列何者？\n\n○ (A) 75 m\n○ (B) 37.5 m\n○ (C) 36 m\n○ (D) 18 m',
    answer: '(D) 18 m',
    diagramUrl: 'assets/questions/q_phy_car_vt_graph.png?v=35',
    solution: '1. **基本物理原理**：\n- 速度－時間關係圖（$v-t$ 圖）中，線段與時間軸（$t$ 軸）所圍成的**封閉幾何圖形面積即代表物體的位移（Displacement）**。\n\n2. **求出各時間點的瞬時速度**：\n- 圖中為一條通過原點 $(0, 0)$ 與 $(4, 12)$ 的斜直線，表示甲車由靜止開始做等加速度直線運動。\n- 加速度 $a = \\frac{12 - 0}{4 - 0} = 3\\text{ m/s}^2$。\n- 當 $t = 2\\text{ 秒}$ 時，速度 $v_2 = a \\times t = 3 \\times 2 = 6\\text{ m/s}$。\n- 當 $t = 4\\text{ 秒}$ 時，速度 $v_4 = 12\\text{ m/s}$。\n\n3. **計算 $2\\sim 4\\text{ 秒}$ 的梯形面積（位移）**：\n- 上底為 $v_2 = 6\\text{ m/s}$，下底為 $v_4 = 12\\text{ m/s}$，高為時間差 $\\Delta t = 4 - 2 = 2\\text{ s}$。\n- 位移 $\\Delta x = \\frac{(6 + 12) \\times 2}{2} = 18\\text{ 公尺}$。\n\n4. **結論**：第 2 秒至第 4 秒間甲車位移為 $18\\text{ m}$，正確答案選 **(D)**。',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_phy_vt_direction_accel_006',
    examPeriod: '一段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: 'v-t 圖正負方向與速率增減（向東漸快）',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '向西為正向，向東即為負值（時間軸下方）！速率愈來愈快代表曲線「遠離時間軸」，丙區間速度為負且向下遠離時間軸，符合「向東速度愈來愈快」。',
    stem: '右圖為阿翰的運動速度（$v$）與時間（$t$）的關係圖。若他一開始的運動方向是向著西方，則下列哪一段期間，他的速度愈來愈快且向著東方？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁',
    answer: '(C) 丙',
    diagramUrl: 'assets/questions/q_phy_ahan_vt_graph.png?v=35',
    solution: '1. **定義正負方向與速率特徵**：\n- 題目明確設定阿翰一開始運動方向向「西方」。圖中初期甲區間的速度 $v > 0$（位於時間軸上方），因此**以西方為正向（+），以東方為負向（-）**。\n- 「向著東方」：代表運動方向向負向，速度值必須為負數（$v < 0$），即圖形需位於**時間軸下方**（丙與丁區間）。\n- 「速度愈來愈快」：代表速率（速度的量值 $|v|$）持續增加。在 $v-t$ 圖上，無論在時間軸上方或下方，只要**曲線持續遠離時間軸（水平橫軸）**，即代表速率加快。\n\n2. **逐一分析各區間**：\n- **甲區間**：$v > 0$ 且遠離時間軸 $\\implies$ 向西加速。\n- **乙區間**：$v > 0$ 但朝時間軸靠攏 $\\implies$ 向西減速。\n- **丙區間**：$v < 0$（向東）且圖線朝下方遠離時間軸（$|v|$ 變大） $\\implies$ **向東速度愈來愈快（向東加速）**！\n- **丁區間**：$v < 0$（向東）但圖線朝時間軸靠攏（$|v|$ 變小） $\\implies$ 向東減速。\n\n3. **結論**：符合條件的區間為丙，正確答案選 **(C)**。',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  },
  {
    id: 'q_phy_position_table_disp_007',
    examPeriod: '一段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: '位置-時間數據表之位移與路徑長分析',
    uploadDate: '2026-09-05',
    mondayDate: '2026-08-31',
    mondayDates: ['2026-08-31'],
    weekLabel: '2026-08-31 (本週)',
    isGuessedOrUnstable: true,
    mistakeNote: '位移只由末位置減初位置決定：0秒在 0m，50秒也在 0m，位移為 0 - 0 = 0m！每10秒才測一次，中間10秒過程是否折返無法得知，故路徑長與折返次數皆無法確認。',
    stem: '下表為阿翰在一直線跑道上慢跑熱身過程中位置與時間的關係紀錄，據此可確認下列哪一項結果？\n\n| 時間（秒） | 0 | 10 | 20 | 30 | 40 | 50 |\n| :--- | :---: | :---: | :---: | :---: | :---: | :---: |\n| 位置（公尺） | 0 | 28 | -10 | -42 | 10 | 0 |\n\n○ (A) 0~20 秒內的路徑長為 10 公尺\n○ (B) 0~20 秒內的路徑長為 66 公尺\n○ (C) 0~50 秒內的位移為 0 公尺\n○ (D) 0~50 秒內共計折返 3 次',
    answer: '(C) 0~50 秒內的位移為 0 公尺',
    diagramUrl: '',
    solution: '1. **位移的精準定義**：\n- 位移（Displacement）定義為：$$\\Delta x = x_{\\text{末}} - x_{\\text{初}}$$\n- 只取決於運動的「起始位置」與「終止位置」，與中間過程經歷的路徑或有無折返完全無關。\n- 查表可知：$t = 0\\text{ s}$ 時初位置 $x_0 = 0\\text{ m}$；$t = 50\\text{ s}$ 時末位置 $x_{50} = 0\\text{ m}$。\n- 因此 $0\\sim 50\\text{ 秒}$ 內的位移為：$$\\Delta x = 0 - 0 = 0\\text{ 公尺}$$\n- 此項推論 $100\\%$ 成立，毫無疑問！\n\n2. **其他選項為何無法確認**：\n- 表格紀錄是以每隔 $10\\text{ 秒}$ 的間隔進行抽樣取樣。\n- 在兩個時間點之間（例如 $0\\sim 10\\text{ 秒}$ 或 $10\\sim 20\\text{ 秒}$ 的這 10 秒內），阿翰是否曾中途轉向、前進後退或跑過更遠的距離，表格中完全沒有提供連續紀錄。\n- 因此我們無法精準計算實際走過的路徑長（A、B 選項無法確認），也無法知道他在兩次紀錄之間是否發生了額外的折返（D 選項折返次數無法確認）。\n\n3. **結論**：據此紀錄唯一可 $100\\%$ 確認的結果為 **(C)**。',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-09-05'
  }
,
  {
    id: "q_soc_geo_terrain_profile_001",
    examPeriod: "一段",
    subject: "社會/地理",
    errorReason: "觀念不懂",
    concept: "臺灣東西向地形剖面與縣市地形起伏判讀",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "剖面由西向東高度從 0 攀升至 2500 公尺以上，東西跨度約 56 公里。苗栗縣西臨臺灣海峽，東部包含雪山山脈（大霸尖山、雪山群峰），完全吻合！",
    stem: "附圖是臺灣某縣市境內，沿「東西向」所繪製的地形剖面圖。根據其地形起伏特色判斷，此剖面圖所在的縣市應為下列何者？\n\n○ (A) 臺北市\n○ (B) 宜蘭縣\n○ (C) 彰化縣\n○ (D) 苗栗縣\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=bjVUtUlgTqA)",
    answer: "(D) 苗栗縣",
    diagramUrl: "assets/questions/q_soc_geo_terrain_profile_001.png?v=36",
    solution: "1. **圖形地形特徵解讀**：\n- 剖面圖由西向東延伸，距離約 56.6 公里。\n- 西端起點高度接近 0 公尺（海平面），東端山脈峰頂突破 2,500 公尺。\n\n2. **逐一比對各縣市地形**：\n- **(A) 臺北市**：為盆地地形，周圍最高峰七星山僅約 1,120 公尺，無 2,500 公尺之高山。\n- **(B) 宜蘭縣**：東側臨太平洋，若沿東西向切，應是「西高東低、東臨大海」，與圖中「西低東高」相反。\n- **(C) 彰化縣**：全境為彰化平原與八卦台地，八卦台地最高點僅約 400 公尺。\n- **(D) 苗栗縣**：西面臨臺灣海峽（海平面 0 m），向東歷經苗栗丘陵，東界為雪山山脈主脊（雪山主峰 3,886 m、大霸尖山 3,492 m 等），東西跨度約 50 多公里，完全相符！\n\n3. **結論**：正確答案選 **(D)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_geo_solar_terms_002",
    examPeriod: "一段",
    subject: "社會/地理",
    errorReason: "觀念不懂",
    concept: "二十四節氣時間判讀與梅雨（鋒面雨）成因",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "立夏、小滿落在陽曆 5 月，正值臺灣梅雨期。此時降雨主因為北方冷氣團與南方暖氣團交會形成的「梅雨滯留鋒面」，故降雨主因選 (B) 冷暖空氣交會形成鋒面！",
    stem: "「立夏小滿，雨水相趕」這句諺語是形容臺灣每年逢立夏、小滿二節氣時，經常下雨，雨水紛至。根據附表二十四節氣的時間判斷，此時降雨的最主要成因為下列何者？\n\n○ (A) 潮濕空氣受地形的抬升\n○ (B) 冷暖空氣交會形成鋒面\n○ (C) 日照強烈導致對流旺盛\n○ (D) 來自海洋的熱帶性低壓\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=bjVUtUlgTqA)",
    answer: "(B) 冷暖空氣交會形成鋒面",
    diagramUrl: "assets/questions/q_soc_geo_solar_terms_005.png?v=38",
    solution: "1. **節氣時間判斷**：\n- 根據附表，陽曆 5 月至 7 月所包含的第一、二個節氣即為「立夏」與「小滿」（約陽曆 5 月上旬至中旬）。\n\n2. **氣候降雨成因解析**：\n- 每年 5~6 月為臺灣典型的梅雨期。此時北方冷氣團與南方暖空氣勢力相持不下，在臺灣上空交會形成滯留鋒面，造成連續陰雨，雨水相接紛至。\n- 故此時降雨最主要成因為**冷暖空氣交會形成鋒面**。\n\n3. **各選項分析**：\n- **(A) 潮濕空氣受地形抬升**：地形雨（如東北季風遇中央山脈或迎風坡）。\n- **(B) 冷暖空氣交會形成鋒面**：鋒面雨（梅雨滯留鋒面），完全正確！\n- **(C) 日照強烈導致對流旺盛**：對流雨（如夏季午後西北雨/雷陣雨）。\n- **(D) 來自海洋的熱帶性低壓**：颱風雨（夏秋熱帶氣旋帶來之豪雨）。\n\n4. **結論**：正確答案選 **(B)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_geo_zhuluo_river_003",
    examPeriod: "一段",
    subject: "社會/地理",
    errorReason: "觀念不懂",
    concept: "臺灣南部河川季節流量變化大（荒溪型河川）",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "冬春乾季水少架竹橋通行，夏秋雨季水漲漂去改設渡船，反映南部河川「洪枯水位落差極大」的荒溪型河川特徵！",
    stem: "《諸羅縣志》記載：「……為縣治往郡必由之路。舊時冬春架竹為之，上覆以土；夏秋水漲漂去，設渡以濟行人。」上文是描述臺灣某地過去在冬春時，會架起簡易的竹橋以利通行，夏秋時則因竹橋會遭沖毀遂改以渡船代之。上述不同季節的過溪方式，與當地河川的何種特色關係最密切？【105年會考】\n\n○ (A) 坡陡流急\n○ (B) 泥沙含量偏高\n○ (C) 流向多為東西向\n○ (D) 屬於荒溪型河川\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=bjVUtUlgTqA)",
    answer: "(D) 屬於荒溪型河川",
    diagramUrl: "",
    solution: "1. **文言文本解讀**：\n- 冬春兩季：降雨稀少，溪流水量淺，可架竹橋覆土行走。\n- 夏秋兩季：梅雨與颱風帶來豪雨，溪水暴漲將竹橋沖毀，改用渡船接駁行人。\n\n2. **核心地理概念**：\n- 臺灣西南部氣候呈現「夏雨冬乾」，乾濕季雨量極端懸殊。\n- 河川在雨季洪水滔滔、在乾季幾近枯竭見底，流量季節變化極為顯著，稱為**「荒溪型河川」**。\n\n3. **結論**：冬橋夏渡之成因為荒溪型河川特性，正確答案選 **(D)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_geo_weather_stations_rain_004",
    examPeriod: "一段",
    subject: "社會/地理",
    errorReason: "觀念不懂",
    concept: "臺灣降水空間分布與迎風坡地形雨判讀",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "臺灣東北部（如基隆、新北東北角一帶）冬季面迎東北季風，迎風坡地形雨豐沛，夏秋又有颱風與對流雨，年降水量為全臺之冠！乙測站（25.13°N, 121.74°E）位於臺灣東北部迎風面，故年降水量最多！",
    stem: "臺灣本島的經緯度約介於 22°N～25°N，120°E～122°E 之間，降水的空間分布受到地形及季風的影響而有顯著差異。附表為本島四個氣象測站的資料，根據各測站位置及地形判斷，何者的年降水量可能最多？【112年會考】\n\n| 測站 | 緯度 | 經度 | 高度（m） |\n| :---: | :---: | :---: | :---: |\n| 甲 | 23.98°N | 121.61°E | 16.0 |\n| 乙 | 25.13°N | 121.74°E | 26.7 |\n| 丙 | 22.99°N | 120.20°E | 40.8 |\n| 丁 | 23.95°N | 120.59°E | 34.0 |\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=rBrKF9lroJU)",
    answer: "(B) 乙",
    diagramUrl: "",
    solution: "1. **各測站地理位置比對**：\n- **甲**（23.98°N, 121.61°E，16.0m）：花蓮沿海平原（東部）。\n- **乙**（25.13°N, 121.74°E，26.7m）：臺灣東北部（基隆/東北角沿海，緯度突破 25°N，經度約 121.74°E）。\n- **丙**（22.99°N, 120.20°E，40.8m）：臺南沿海平原（南部）。\n- **丁**（23.95°N, 120.59°E，34.0m）：彰化沿海平原（中部）。\n\n2. **分析臺灣年降水量空間分布**：\n- 臺灣東北部（基隆、東北角、宜蘭迎風坡）在冬季面迎強勁濕潤的**東北季風**，產生豐沛的地形雨（如基隆「雨港」、平溪火燒寮年雨量達數千毫米）。\n- 夏季亦有颱風與午後對流雨，為全臺降雨日數最多、年降水量最豐沛的區域。\n- 四個測站中，**乙測站**位於東北角迎風坡面，年降水量最可能為最多！\n\n3. **結論**：正確答案選 **(B)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_geo_debris_flow_sign_005",
    examPeriod: "一段",
    subject: "社會/地理",
    errorReason: "觀念不懂",
    concept: "土石流災害警告標示牌與臺灣行政區地形特徵",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "土石流警示標示牌多設置於坡度陡峭、山區溪流沖積扇等易崩塌區域。南投縣全境皆為丘陵與高山，為全臺灣唯一不臨海的內陸山地縣份，土石流潛勢溪流最多！",
    stem: "附圖為某種災害的警告標示牌，用來提醒民眾提高警覺。根據臺灣行政區的地形特色判斷，此種標示牌在下列哪個縣（市）最多？【105年會考】\n\n○ (A) 彰化縣\n○ (B) 雲林縣\n○ (C) 南投縣\n○ (D) 新竹市\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=ehNyQQV9rAo)",
    answer: "(C) 南投縣",
    diagramUrl: "assets/questions/q_soc_geo_hazard_sign_003.png?v=36",
    solution: "1. **辨識警告標示牌意涵**：\n- 標示牌描繪山坡崩落、泥砂巨石夾帶奔流之圖像，並註明「危險！土石流注意」，代表**土石流災害警告標示牌**。\n\n2. **土石流發生條件與地形關聯**：\n- 土石流需要：**陡峭地形坡度**、**破碎豐富土石材料**、**豐沛集中降水**。\n- 選項中南投縣全境由中央山脈、雪山山脈、玉山山脈等高聳山系與丘陵構成，地形起伏最劇烈，土石流潛勢溪流數量全臺第一。\n\n3. **結論**：土石流警告標示牌以南投縣數量最多，正確答案選 **(C)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_geo_district_office_route_006",
    examPeriod: "一段",
    subject: "社會/地理",
    errorReason: "觀念不懂",
    concept: "臺灣行政區劃層級：直轄市設「區」，縣轄市/鄉/鎮設「市/鄉/鎮公所」",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "「區公所」只有在『直轄市』（六都）或市（基隆、新竹、嘉義）才設有！丙路線僅經過彰化縣與雲林縣（非直轄市，內部行政單位為鎮公所、鄉公所、市公所），完全沒有區公所！",
    stem: "附圖是小芬蒐集區公所戳章的旅遊路線示意圖，她發現自己在其中一段路線中，沒有蒐集到任何一個區公所的戳章。根據圖中內容判斷，上述路線最可能是甲、乙、丙、丁中的何者？【110年會考補考】\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=Gq115_MhSYE)",
    answer: "(C) 丙",
    diagramUrl: "assets/questions/q_soc_geo_district_office_002.png?v=41",
    solution: "1. **公所體系法制概念**：\n- **直轄市**（六都）及市（基隆市、新竹市、嘉義市）下轄之行政區域為**「區」**，設**「區公所」**。\n- **縣**（如彰化縣、雲林縣）下轄為**「鄉、鎮、縣轄市」**，設鄉公所、鎮公所、市公所，**不**設區公所。\n\n2. **路線行經分析**：\n- 甲（新北/桃園）、乙（苗栗/臺中）、丁（臺南/高雄）皆包含直轄市，皆設有區公所。\n- 丙路線橫跨**彰化縣**與**雲林縣**，全線皆為縣轄鄉鎮市，完全沒有任何區公所。\n\n3. **結論**：未蒐集到區公所戳章之路線為丙，正確答案選 **(C)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_geo_southwest_salt_pan_007",
    examPeriod: "一段",
    subject: "社會/地理",
    errorReason: "觀念不懂",
    concept: "臺灣西南沿海曬鹽景觀、沙岸環境與荒溪型河川特色",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "附圖照片為七股/北門「曬鹽鹽田」景觀！西南沿海曬鹽具備日照充足、秋冬雨量少蒸發旺盛等優勢。該地區河川受西南季風降水影響，冬夏季節河川洪枯變化大，屬於荒溪型河川！",
    stem: "附圖為臺灣某地區的海岸產業活動景觀。該地區的自然環境，具有下列哪項特色？\n\n○ (A) 位於東北季風的迎風坡，冬季時常陰雨綿綿\n○ (B) 冬夏季節河川洪枯變化大，屬於荒溪型河川\n○ (C) 瀕臨太平洋且黑潮流經，氣候較溫暖且濕潤\n○ (D) 地處臺灣最廣的丘陵地區，等高線分布密集\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=DCcXWdN7Qfo)",
    answer: "(B) 冬夏季節河川洪枯變化大，屬於荒溪型河川",
    diagramUrl: "assets/questions/q_soc_geo_coastal_salt_pan_006.png?v=41",
    solution: "1. **圖示解讀**：\n- 圖片為臺灣西南沿海之**曬鹽鹽田景觀**（如七股、北門、布袋）。\n\n2. **西南沿海環境特色比對**：\n- 西南沿海為沙岸平原，冬季受中央山脈阻擋東北季風，降水少、日照長、蒸發量大，適宜曬鹽。\n- 該區域河川夏季暴雨成洪、冬季枯竭見底，洪枯落差懸殊，為典型的**荒溪型河川**。\n\n3. **結論**：正確答案選 **(B)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_geo_poster_community_fishery_008",
    examPeriod: "一段",
    subject: "社會/地理",
    errorReason: "觀念不懂",
    concept: "高齡少子化沿海漁村的產業轉型與社區總體營造",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "海報地方特色指出「居民共同運用本地產品舉辦料理競賽、形成海產市集帶來大批遊客成為知名景點」，這正是居民凝聚向心力、推動地方創生的「社區發展成果豐碩」！",
    stem: "附圖是小月在參與課堂活動時所製作的海報，根據海報內容判斷，下列哪一現象最可能在小月的家鄉出現？\n\n○ (A) 以小家庭型態為主\n○ (B) 居民多為原住民族\n○ (C) 社區發展成果豐碩\n○ (D) 外來人口比例頗高\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(C) 社區發展成果豐碩",
    diagramUrl: "assets/questions/q_soc_geo_poster_fishery_007.png?v=40",
    solution: "1. **海報內容關鍵訊息提取**：\n- **人口結構**：居民多為老人及幼童，年輕人多在外地工作，顯示青壯年人口外流，以隔代教養或高齡家庭為主，並非小家庭（核心家庭）型態。\n- **產業類型**：以養殖漁業、魚塭為主，屬於臺灣典型的西南沿海漢人漁村聚落，並非原住民族群。\n- **地方特色**：居民共同運用在地漁產舉辦料理競賽、營造海產市集吸引大量觀光客，展現了居民高度的凝聚力與地方創生成效，屬於**「社區發展成果豐碩」**！\n\n2. **選項剖析**：\n- **(A) 錯誤**：年輕人多在外工作，以隔代或留守高齡為主，非小家庭（父母與未婚子女）型態。\n- **(B) 錯誤**：由沿海養殖漁業及魚塭型態推斷，居民多為漢人聚落，非原住民族群。\n- **(C) 正確**：居民主動組織料理賽與海產市集帶動觀光，具體展現社區營造與發展的豐碩成果！\n- **(D) 錯誤**：年輕人外移嚴重，人口以流出為主，非外來人口比例高。\n\n3. **結論**：正確答案選 **(C)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_his_land_rent_salt_001",
    examPeriod: "一段",
    subject: "社會/歷史",
    errorReason: "觀念不懂",
    concept: "日治時期臺灣土地利用：西南沿海地租調查與鹽田分布",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "表中此項土地利用幾乎全部分布在「臺南州」（3943甲）與「嘉義」（2306甲），以及高雄、彰化沿海，全臺合計 7054 甲，正是日治時期西南沿海官營與專賣的「鹽田」！",
    stem: "附表為日治後期全臺灣某項土地利用方式的地租調查資料，根據表中資料判斷，該項土地利用方式最可能為下列何者？【109年會考】\n\n| 稅務官署別 | 面積（甲） | 地租（円） |\n| :--- | :---: | :---: |\n| 臺南州稅務課 | 3,943 | 8,138 |\n| 嘉義稅務出張所 | 2,306 | 5,963 |\n| 高雄州稅務課 | 530 | 1,058 |\n| 彰化稅務出張所 | 275 | 247 |\n| **全臺灣合計** | **7,054** | **15,406** |\n*註：円為日圓*\n\n○ (A) 林地\n○ (B) 茶園\n○ (C) 溫泉\n○ (D) 鹽田\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=tKVbYuaozlk)",
    answer: "(D) 鹽田",
    diagramUrl: "",
    solution: "1. **分析空間分布數據**：\n- 臺南州稅務課（3,943 甲）與嘉義稅務出張所（2,306 甲）合計占全臺面積近 90%。\n- 高雄州（530 甲）與彰化（275 甲）次之。臺北州、新竹州、臺中州等中北部內陸地區全無此項地租！\n\n2. **產業區位特性比對**：\n- **(A) 林地**：應廣布於全島山區（宜蘭、花蓮、新竹、臺中等山林）。\n- **(B) 茶園**：日治時期茶葉重鎮在新竹州、臺北州（文山、大溪、龍潭）丘陵坡地。\n- **(C) 溫泉**：北投、陽明山、礁溪等中北部與東部火山地熱區。\n- **(D) 鹽田**：臺灣傳統鹽場高度集中於臺南、嘉義及高雄等西南沿海灘地。\n\n3. **結論**：該土地利用方式為鹽田，正確答案選 **(D)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_his_women_rights_ink_002",
    examPeriod: "一段",
    subject: "社會/歷史",
    errorReason: "觀念不懂",
    concept: "二十世紀女性權益演進與婦女地位改變因素",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "圖中圍繞「女權運動、普選權運動、戰時男性勞動力短缺、女性享有投票權、家庭用品電器化、教育機會增加、家庭規模縮減」，全都是促成「改變婦女地位的因素」！",
    stem: "如圖是小郁翻閱相關書籍所看到的部分內容。由於墨漬遮蔽了若干文字，請協助小郁判斷，下列何者最可能是遮蔽處的內容？【95年第1次基測】\n\n○ (A) 改變婦女地位的因素\n○ (B) 縮小貧富差距的原因\n○ (C) 改善社會福利的背景\n○ (D) 強化性別分工的條件\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=DCcXWdN7Qfo)",
    answer: "(A) 改變婦女地位的因素",
    diagramUrl: "assets/questions/q_soc_his_women_rights_ink_002.png?v=41",
    solution: "1. **歸納圖中各分支核心內涵**：\n- 兩次世界大戰期間男性參軍導致勞動力缺乏，女性走出家庭進入工廠；\n- 科技發展（洗衣機、吸塵器等電器化）大幅縮短家務勞動時間；\n- 女性接受高等教育與就業機會增加；\n- 女權運動爭取到普選投票權與身體自主權。\n\n2. **總結主題概念**：\n- 這些政治、經濟與科技演變共同推動了女性獨立自決，是二十世紀「改變婦女地位的重要因素」。\n\n3. **結論**：正確答案選 **(A)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_aging_ratio_001",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "高齡化社會（7%）、高齡社會（14%）與超高齡社會（20%）判讀",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "老年人口佔比：7%為「高齡化社會」、14%為「高齡社會」、20%為「超高齡社會」。乙國在 2020 年老年人口約 6%~7%，即將正式跨入高齡化社會，因此有迫切獎勵生育需求！",
    stem: "附圖是甲、乙、丙、丁四個國家的老年人口比例。其中的某國為防止國家在近幾年快速進入高齡化階段，提出政策規定：「凡女性 35 歲前生育二胎，可獲得『媽媽禮』育嬰用品。」請問：該國最有可能是圖中何者？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=EMLJ13IYS_0)",
    answer: "(B) 乙",
    diagramUrl: "assets/questions/q_soc_civ_aging_ratio_001.png?v=41",
    solution: "1. **世界衛生組織（WHO）高齡社會三階段指標**：\n- **高齡化社會（Aging society）**：65 歲以上老年人口達總人口 **7%**。\n- **高齡社會（Aged society）**：老年人口達 **14%**。\n- **超高齡社會（Super-aged society）**：老年人口達 **20%**。\n\n2. **各國曲線狀態研判**：\n- 甲國：老年人口已逼近 20%（即將成為超高齡社會）。\n- 乙國：老年人口比例目前約 6% 左右，曲線迅速上升即將突破 7%，處於「防止快速進入高齡化階段」的關鍵期，符合題意！\n- 丙、丁國：老年人口比率仍維持在低檔（約 2%~3%）。\n\n3. **結論**：正確答案選 **(B)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_low_birth_social_increase_002",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "人口成長途徑：自然增加（出生-死亡）與社會增加（移入-移出）",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "題目明確要求「透過『社會增加』方向提高國民人數」！公立托育是鼓勵生育（自然增加）；而「鼓勵各國人才歸化入籍」是外國人口移入取得國籍，屬於社會增加！",
    stem: "臺灣少子女化危機惡化的速度超乎想像，面對人口負成長的人口懸崖，有學者認為政府過往提出的相關政策已是緩不濟急，或許可以透過社會增加的方向，思考提高國民人數的對策。根據上述內容判斷，下列何項對策與該學者的意見最相符？【112年會考】\n\n○ (A) 提高外籍移工僱用人數\n○ (B) 鼓勵各國人才歸化入籍\n○ (C) 推動老人長期照護政策\n○ (D) 增加公立幼兒托育中心\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=EMLJ13IYS_0)",
    answer: "(B) 鼓勵各國人才歸化入籍",
    diagramUrl: "",
    solution: "1. **理解人口增長二大構成要素**：\n- **自然增加**：出生率減死亡率（$\\text{出生} - \\text{死亡}$）。\n- **社會增加**：遷入率減遷出率（$\\text{移入} - \\text{移出}$）。\n\n2. **對策分析**：\n- (A) 提高外籍移工僱用人數：移工通常居留工作後返國，並未取得我國國籍，不能算作「提高國民人數」。\n- (B) **鼓勵各國人才歸化入籍**：吸引外籍優秀專業人才入籍成為我國合法國民，直接增加「社會移入人口」，提高國民人數！\n- (C) 老人長照：屬於社會福利照護，與增加人口無直接關係。\n- (D) 增加公托幼兒中心：旨在提高生育意願，屬於「自然增加」政策，非題幹要求的「社會增加」。\n\n3. **結論**：正確答案選 **(B)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_id_letter_map_003",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "身分證英文代碼與 2010 年五都升格/縣市合併改制",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "2010年縣市合併改制停發的代碼：原臺中縣(L)、原臺南縣(R)、原高雄縣(S)停發，分別併入B、D、E；而新竹縣(J)並未合併改制，仍獨立存在發行中！注意本題選項看誰仍存在！",
    stem: "現行中華民國身分證統一編號的首碼為大寫的英文字母，代表初次登記時的戶籍地。2010 年行政區合併改制後，部分縣的代碼因而停止發行。附圖是行政區合併前的地圖與部分縣的英文代碼，下列哪一英文代碼還有可能出現在 2018 年新生兒的身分證統一編號中？【107年會考】\n\n○ (A) J\n○ (B) L\n○ (C) R\n○ (D) S\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=gypHVoHmoDM)",
    answer: "(A) J",
    diagramUrl: "assets/questions/q_soc_civ_id_letter_map_005.png?v=41",
    solution: "1. **2010 年五都升格合併改制歷史背景**：\n- 臺中縣市合併升格為臺中市：原臺中縣代碼 **L 停發**（統一改為 B）。\n- 臺南縣市合併升格為臺南市：原臺南縣代碼 **R 停發**（統一改為 D）。\n- 高雄縣市合併：原高雄縣代碼 **S 停發**（統一改為 E）。\n\n2. **分析新竹縣狀態**：\n- 新竹縣（代碼 **J**）與新竹市（代碼 O）並未合併，新竹縣依然為獨立之縣級行政區，代碼 **J 持續正常發行**，故 2018 年出生的新生兒仍可能被編配 J。\n\n3. **結論**：正確答案選 **(A)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_mrt_guide_dignity_004",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "無障礙公共服務、人性尊嚴維護與實質平等保障",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "提供預約引導與視障專用候車椅，是給予身心障礙者合理的無障礙輔助，保障弱勢族群安全與出行的自主性，體現憲法對「人性尊嚴與身心障礙者實質權利」的維護！",
    stem: "新聞報導：臺北捷運公司提供兩項新服務措施：「預約引導」與「視障等候椅」。這兩項貼心服務，除了讓視障旅客「安心地」自車站出入口接受導引，進入車站，亦能「安全、舒適」坐在專用座椅上候車或等候導引服務，同時呼籲其他旅客不要占用該專用椅。我們可以怎麼評價這兩項新服務措施？\n\n○ (A) 維護人性尊嚴與權利\n○ (B) 破除性別歧視與偏見\n○ (C) 包容多元文化與差異\n○ (D) 鼓勵志願服務與結社\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=DCcXWdN7Qfo)",
    answer: "(A) 維護人性尊嚴與權利",
    diagramUrl: "",
    solution: "1. **政策目標核心價值**：\n- 視障旅客在龐大複雜的捷運網絡中面臨較高的行動風險。\n- 提供專人導引與專用候車椅，消弭環境障礙，確保身心障礙者能有尊嚴、安全且平等地享有搭乘大眾運輸的權益，符合**「維護人性尊嚴與保障身障者基本權利」**（實質平等原則）。\n\n2. **其他選項辨析**：\n- (B) 與性別平權無關；(C) 視障屬於生理障礙輔助，非文化差異；(D) 此為捷運官方推行之便民無障礙措施，非民間志願結社。\n\n3. **結論**：正確答案選 **(A)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_organ_transplant_kinship_005",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "民法親屬關係分類：配偶、血親、姻親（血親的配偶）",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "甲與丙是兄妹（旁系血親二親等）；丙與乙結婚後，乙是「甲之血親（妹妹）的配偶」，依民法屬於「姻親」！因此甲能合法接受乙捐贈器官！",
    stem: "媒體曾報導一件器官移植捐贈的特殊案例：「甲因肝衰竭住院急需換肝，經媒體報導後，有善心人士乙願意捐贈肝臟，但依據我國《人體器官移植條例》規定，年滿 18 歲的捐贈者必須與被捐贈者具有親屬關係。因此甲的妹妹——丙為了救治哥哥，竟和丈夫離婚，然後與乙再婚，以符合資格完成捐贈。」依據上述內容及我國現行法律規範判斷，下列敘述何者正確？\n\n○ (A) 甲和丙屬於直系血親關係\n○ (B) 丙和乙結婚後互為旁系血親\n○ (C) 甲能接受乙器官移植是因有姻親關係\n○ (D) 文中器官捐贈依據的法規屬命令位階\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(C) 甲能接受乙器官移植是因有姻親關係",
    diagramUrl: "",
    solution: "1. **釐清民法親屬身分關係**：\n- **甲與丙**：同一父母所生之兄妹，為**「旁系血親」**二親等（非直系血親）。\n- **丙與乙**：男女依法辦理結婚登記，身分為**「配偶」**（配偶獨立於血親與姻親之外，互為配偶關係）。\n- **甲與乙**：乙是甲的妹妹（血親）的丈夫（配偶），即**「血親之配偶」**，法律上屬於**「姻親」**（旁系姻親二親等）。因此具備親屬關係，符合器官移植資格！\n\n2. **法規範位階檢視**：\n- 《人體器官移植條例》名稱為「條例」，由立法院制定、總統公布，屬於**「法律」位階**，非行政命令。\n\n3. **結論**：正確敘述為 **(C)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_morakot_cooperation_006",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "原住民族傳統共工互助、友善農耕與社區營造精神",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "族人組成「共耕隊」回舊部落復耕、不噴農藥友善農耕、部落蔬果店共同行銷，凝聚族人力量維繫生存，充分體現「生態永續」與「共工互助」的傳統原民文化精神！",
    stem: "2009 年，莫拉克颱風重創南臺灣，多處山區的原住民部落被迫遷村。因為颱風破壞了部落，這些原住民離開原鄉，搬遷到集合式的永久屋居住。但是，部分永久屋的生活機能缺乏，沒有足夠的耕地，謀生困難。缺乏公共活動空間，也讓原民文化的傳承面臨危機。因此，新來義部落發展協會申請了「部落活力計畫」。號召族人，組成「共耕隊」回舊部落農地復耕。並堅持以不噴農藥的友善耕作法，孕育無毒蔬果。再透過部落蔬果店共同行銷，不僅凝聚部落成員的力量，也維持部落生存的穩定。上述事例，最能體現原住民族傳統文化的何種精神？\n\n○ (A) 以部落會議共同決定部落事務\n○ (B) 以實作教育傳承部落傳統信仰\n○ (C) 改變產業結構以維繫部落生存\n○ (D) 重視生態永續與共工互助生活\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(D) 重視生態永續與共工互助生活",
    diagramUrl: "",
    solution: "1. **提煉文本行動要點**：\n- **環境面向**：堅持不用農藥、友善環境之有機耕作法，涵養土地，體現**生態永續**。\n- **社會組織面向**：號召族人組建「共耕隊」、開設「共同行銷蔬果店」、凝聚成員向心力，體現原住民族悠久的**「共工共構、互助共享」**社會傳統。\n\n2. **其他選項分析**：\n- (A) 題幹重點在農作生產與行銷，並未著墨部落會議議事運作。\n- (B) 共耕重在災後經濟生計與團結，非宗教信仰傳承。\n- (C) 傳統上原住民本即為集體耕作共享，此舉乃傳承與復興傳統互助，非顛覆傳統改變產業結構。\n\n3. **結論**：正確答案選 **(D)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_class_meeting_agenda_007",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "會議規範程序：提案附署、討論、先提名先表決與秩序問題",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "未經充分討論就直接表決，違反了正當議事程序，屬於議事規則秩序被破壞的「秩序問題」！另外，表決原則為「先提名先表決」！",
    stem: "附表是某個國中召開班會的實況紀錄，同學們在討論「班服樣式」：\n\n| 會議步驟 | 會議紀錄內容 |\n| :---: | :--- |\n| 步驟一 | 班長事先向全班提出提案「班服以黑熊為主題」，已有3位同學附署成立 |\n| 步驟二 | 會議中同學提議增加「以石虎為主題」之動議，並獲附議成立 |\n| 步驟三 | 主席直接裁定：「大家不要再發言討論了，現在直接表決黑熊案！」 |\n\n針對上述會議實況，同學若欲提出異議，下列哪一項主張最符合《會議規範》之規定？\n\n○ (A) 步驟一的討論主題應為動議，無須附署即可成立\n○ (B) 步驟二屬於臨時動議，必須在所有提案表決後方能提出\n○ (C) 步驟三表決順序應以會議中最新提出的石虎案為第一優先\n○ (D) 步驟三未經充分討論即逕行表決，同學可提出秩序問題要求依程序討論\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(D) 步驟三未經充分討論即逕行表決，同學可提出秩序問題要求依程序討論",
    diagramUrl: "",
    solution: "1. **會議規範程序關鍵原則**：\n- **提案 vs 動議**：事先以書面提出者為「提案」，須一人提議、一人以上附署（共二人以上）；會議進行中臨時提出者為「動議」，須一人提議、一人以上附議（共二人以上）。步驟一與步驟二皆合法成立。\n- **討論充分原則**：動議成立後必須先開放正反方發言討論，主席不得無故剝奪討論權直接進行表決。\n- **表決順序**：除修正案優先於原案外，同類動議採**「先提名、先表決」**。\n\n2. **權宜問題 vs 秩序問題**：\n- **權宜問題**：針對會議現場人身權益、環境（噪音、通風、燈光、侮辱等）。\n- **秩序問題**：針對**議事程序、會議規則被違反**（如未討論就表決、發言超時不處理等）。主席違反議事程序時，與會者應提出「秩序問題」予以糾正！\n\n3. **結論**：正確答案選 **(D)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_domestic_violence_order_008",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "家庭暴力防治法、民事保護令核發機關與法律隔離效力",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "保護令是司法處分，唯一有權「核發民事保護令」的機關是『地方法院』！警察局負責執行保護令與協助聲請，但無權裁定核發！",
    stem: "我國為防治家庭暴力採行了不少措施，如設置婦幼保護專線、協助安置被害人等。若子女對父母親有言語或肢體等暴力行為，根據我國法律規定，如欲達成法律上的隔離效力，可供受害者尋求協助的機關，及此機關所能採行的因應作為，下列配對組合何者正確？【109年會考】\n\n○ (A) 地方法院、核發保護令\n○ (B) 警察機關、核發保護令\n○ (C) 地方政府社會局、判處徒刑\n○ (D) 衛生福利部、提起公訴\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(A) 地方法院、核發保護令",
    diagramUrl: "",
    solution: "1. **家庭暴力防治法之保護令制度**：\n- 法律上若欲限制加害人靠近受害人住所、命加害人遷出（達成隔離效力），受害人必須取得**「民事保護令」**（包括通常、暫時、緊急保護令）。\n- 保護令涉及限制人民之自由權利，基於司法權獨立保障，**唯一有權裁定核發保護令的機關為「地方法院」**！\n\n2. **其他機關職權辨正**：\n- 警察機關：可協助被害人向法院「聲請」保護令、受理報案並執行保護令，但**無權**自行核發。\n- 社會局：負責庇護安置、社工訪視，無刑罰權。\n- 檢察官：代表國家偵查犯罪並「提起公訴」，衛福部為行政主管機關無起訴權。\n\n3. **結論**：正確答案選 **(A)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_female_unemployed_gender_009",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "女性勞動力參與統計、家務性別分工與性別平權觀念",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "統計表顯示 25~44 歲女性未就業原因壓倒性高居前兩名的是「料理家務」與「照顧未滿12歲子女」（佔超過70%），反映家務與育兒重擔仍落在女性身上，家庭性別平權觀念有待加強！",
    stem: "甲國女性的就業率，長期以來皆大幅低於全國平均值，因此該國政府調查女性勞動人口中未就業者的原因，附表是調查結果中的部分統計資料。關於此資料的解讀，下列何者最適當？【112年會考】\n\n| 年齡（歲） | 想工作而未找工作 | 照顧未滿 12 歲兒童 | 料理家務 | 照顧老人/病患 | 其他 |\n| :---: | :---: | :---: | :---: | :---: | :---: |\n| 15~24 | 28.5% | 1.2% | 15.3% | 0.5% | 54.5% |\n| 25~44 | 4.8% | 46.2% | 38.1% | 2.1% | 8.8% |\n| 45~64 | 2.1% | 2.5% | 68.4% | 15.2% | 11.8% |\n\n○ (A) 青壯年女性普遍缺乏就業意願與工作能力\n○ (B) 政府應優先提供銀髮族高齡重返職場訓練\n○ (C) 家務與托育勞動仍高度由女性承擔，性別平權有待落實\n○ (D) 提高高等教育女性就學率即可徹底解決女性未就業問題\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(C) 家務與托育勞動仍高度由女性承擔，性別平權有待落實",
    diagramUrl: "",
    solution: "1. **解讀各年齡層未就業主因**：\n- 25~44 歲為主要育兒及就業黃金期，女性未就業原因中，「照顧未滿 12 歲兒童」高達 **46.2%**，「料理家務」達 **38.1%**，兩者合計超過 **84%**！\n- 45~64 歲「料理家務」高達 **68.4%**，照顧長輩病患達 **15.2%**。\n\n2. **性別平權意涵**：\n- 數據顯示女性勞動力流失的主要癥結並非不想工作，而是承擔了家庭內大部分的「無酬家務與照護勞動」，顯示傳統「男主外、女主內」的刻板性別分工依然深固，家庭性別平權與公托托老支持亟待落實。\n\n3. **結論**：正確答案選 **(C)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_meeting_rules_comic_010",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "內政部《會議規範》：權宜問題（人身/環境）與秩序問題（議事程序）",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "口訣分清：『權宜顧人身與環境（吵鬧、通風、冷氣），秩序顧程序與議程（表決、提案、發言超時）』！乙提出權宜問題處理喧嘩吵鬧，丁提出秩序問題處理議事程序，兩人皆正確！",
    stem: "附圖中甲、乙、丙、丁哪兩位同學的發言符合《會議規範》的規定？【107年會考】\n\n○ (A) 甲、丁\n○ (B) 乙、丙\n○ (C) 甲、丙\n○ (D) 乙、丁\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(D) 乙、丁",
    diagramUrl: "assets/questions/q_soc_civ_meeting_rules_comic_004.png?v=41",
    solution: "1. **《會議規範》權宜問題 vs 秩序問題的核心分工**：\n- **權宜問題（Question of Privilege）**：\n  - 涉及與會人員**人身權益、安全、健康、尊嚴及會場客觀環境**（如噪音喧嘩、光線不足、空氣不流通、惡意侮辱言論）。\n  - 乙主張「場內喧嘩干擾開會，提權宜問題要求肅靜」完全符合！\n- **秩序問題（Point of Order）**：\n  - 涉及**議事規則、程序違反**（如未依議程進行、表決程序不合法、未獲主席許可發言等）。\n  - 丁主張「開會程序應先進行提案討論，提秩序問題要求回歸議程」完全符合！\n\n2. **甲與丙的錯誤**：\n- 甲將議事程序誤列為權宜問題；丙將環境喧嘩誤列為秩序問題。\n\n3. **結論**：符合規定的同學為乙、丁，正確答案選 **(D)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_school_rights_complaint_011",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "校園學生權利保障與教師輔導管教正當救濟程序",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "學校教師對學生的管教措施若侵害學習權、受教育權與身體自主權，救濟管道是向學校提起「學生申訴評議委員會」，不服再提訴願與行政訴訟，絕不可能交由「轄區警察局」來決定處置！",
    stem: "有一個校園學生權益申訴案例：小峰是個國一學生，由於他上課很愛捉弄鄰座同學，老師就安排他把桌椅搬到走廊上，單獨坐著上課。小峰的爸爸向校方反應後，校方就與該班導師溝通。可是，導師堅持讓小峰坐在走廊上課，不肯讓他回教室。小峰的爸爸認為，導師的做法明顯影響小峰的權益。最後，校方依《教師輔導與管教學生辦法》處置……。請問：關於這個案例，下列哪一種觀點「並不符合」學生權利概念？\n\n○ (A) 老師將小峰桌椅搬至走廊隔離處置，侵害了其受教育權與受尊重之權利\n○ (B) 家長向校方反應要求回教室，是為了維護學生的受教育權\n○ (C) 校方成立小組進行協調與調查，是為了落實正當程序原則\n○ (D) 關於走廊罰坐處置是否合法的爭議，最後處置應由轄區的警察局來決定\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(D) 關於走廊罰坐處置是否合法的爭議，最後處置應由轄區的警察局來決定",
    diagramUrl: "",
    solution: "1. **學生基本權利與管教界線**：\n- 罰坐在走廊上課將學生孤立於班級之外，剝奪教室學習與受教品質，侵害學生受教權，並對學生造成羞辱與心理傷害。\n\n2. **校園爭議處理管轄機關**：\n- 校園內之輔導管教與學生獎懲爭議屬於**校園自治與行政救濟範疇**。\n- 應由學校之**「學生申訴評議委員會（申評會）」**進行審議與救濟；如對申訴決定不服，可循教育行政系統提起再申訴、行政訴訟。\n- 警察機關職司刑事偵查與社會治安維護，無權介入校園內部輔導管教裁量。\n\n3. **結論**：(D) 觀點顯屬荒謬錯誤，正確答案選 **(D)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_disadvantaged_justice_012",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "現代公民德性：關懷處境不利群體、實質平等與捍衛社會正義",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "圖中對比「過去：處境不利群體被忽視排擠在後方」與「現在及未來：主動讓處境不利群體獲得優先照顧與平臺」，旨在透過制度性補償促進實質平等，即為公民「捍衛社會正義」之展現！",
    stem: "請根據圖中內容判斷，下列何者為下圖所欲表達且更應受到重視的現代公民德性？\n\n○ (A) 尊重友善包容\n○ (B) 促進族群融合\n○ (C) 遵守多數民主\n○ (D) 捍衛社會正義\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(D) 捍衛社會正義",
    diagramUrl: "assets/questions/q_soc_civ_disadvantaged_justice_002.png?v=41",
    solution: "1. **圖形哲學隱喻（Equality vs Equity / Justice）**：\n- 形式平等（單純齊頭式平等）無法消除弱勢族群因先天或社會結構導致的弱勢地位。\n- 真正的**社會正義（Social Justice）**與**實質平等**，要求社會對處境不利群體給予合理的制度性扶助與資源傾斜（如無障礙設施、低收入補助、原住民保障等），以消弭不平等。\n\n2. **公民德性對應**：\n- 公民不僅要遵守法規，更應積極關懷弱勢、監督體制、推動資源合理分配，此即現代公民必備的**「捍衛社會正義」**德性。\n\n3. **結論**：正確答案選 **(D)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_wuxia_meeting_democracy_013",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "民主社會核心原則：少數服從多數、程序正義、法治國原則（禁私力救濟）",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "符合現代民主社會原則的情節：甲（每門派只有一票，平等表決權）、丙（共同討論抵禦外敵，公眾參與公共事務）。而乙（私刑就地正法）與丁（拒絕政府合法逮捕令）均違反法治國原則！共2項！",
    stem: "武俠小說是華人文化的獨特小說類型，幾乎每部小說都會出現「武林大會」的情節。假設某小說中的武林大會出現下列情節：\n\n- 甲、選舉武林盟主時，每個門派只有一票，票票等值。\n- 乙、各大門派共同決定將抓到的邪教壞人就地正法處死。\n- 丙、眾人共同開會討論如何抵禦外敵入侵的防衛策略。\n- 丁、各大門派集體拒絕接受官府發布的合法逮捕令。\n\n請問共有幾項情節「符合」現代民主社會的原則？\n\n○ (A) 4 項\n○ (B) 3 項\n○ (C) 2 項\n○ (D) 1 項\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(C) 2 項",
    diagramUrl: "",
    solution: "1. **逐項檢視是否符合現代民主法治原則**：\n- **甲、每門派一票**：符合民主選舉「平等、普遍、公平表決」精神。**（符合）**\n- **乙、就地正法**：現代法治國家禁止「私力救濟」與私刑，即使罪大惡極也必須經過司法機關的正當法律程序審判。**（不符合）**\n- **丙、共同討論防禦外敵**：公民集會參與公共事務、以理性質詢協商凝聚共識。**（符合）**\n- **丁、拒絕官府逮捕令**：政府合法核發之令狀具有公權力效力，拒絕執行違反法律秩序與守法精神。**（不符合）**\n\n2. **總結**：僅甲、丙 2 項符合現代民主原則，正確答案選 **(C)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_bunun_hunting_law_014",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "多元文化主義：原住民族傳統風俗習慣與國家現代法律體系之衝突",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "布農族傳統狩獵是生活自用與文化祭儀，但現代國家《槍砲彈藥刀械管制條例》與《野生動物保育法》常將獵人判罪，正反映「原住民傳統風俗習慣與國家實定法律之間存在規範衝突」！",
    stem: "史前文化博物館舉辦「當代布農狩獵文化的意涵與挑戰」講座，附圖是該講座的引言。根據引言內容所述，下列說明何者正確？\n\n○ (A) 原住民狩獵文化在當前臺灣社會已屬於主流文化\n○ (B) 說明了原住民族傳統風俗習慣與現代實定法律之間仍存在規範衝突\n○ (C) 臺灣主流社會已建立對原住民狩獵文化的全面包容與完全理解\n○ (D) 該講座的舉辦不利於原住民族狩獵傳統與文化的正面傳承\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(B) 說明了原住民族傳統風俗習慣與現代實定法律之間仍存在規範衝突",
    diagramUrl: "assets/questions/q_soc_civ_bunun_hunting_quote_006.png?v=41",
    solution: "1. **引言內容核心論點**：\n- 布農獵人堅守自足、不濫殺的倫理，但在現代國家法制架構下，自製獵槍與狩獵保育類野生動物常遭起訴判刑。\n- 引言明白指出「狩獵文化和現行法律依然時常衝突，迄今還沒有達成共識」，直接印證**非主流文化的傳統風俗與主流現代法律規範之扞格**。\n\n2. **多元文化與憲法價值**：\n- 憲法增修條文規定國家應尊重與維護原住民族文化，司法與立法正逐步透過大法官釋字（如釋字第 803 號）尋求文化保障與生態保育之衡平。\n\n3. **結論**：正確答案選 **(B)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_traffic_banner_socialization_015",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "社會規範（道德/法律）與社會化歷程之內化機制",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "校園交通安全標語宣導「開車不快騎車不鑽、禮讓行人」，是透過價值宣導讓用路人將尊重生命的安全意識「內化為自發行為」，正是標準的「藉由宣導社會規範達成社會化」！",
    stem: "附圖是校園中交通安全週的標語，張貼此標語的目的最可能是下列何者？【109年會考補考】\n\n○ (A) 因應全球化所造成的犯罪問題\n○ (B) 藉由宣導社會規範達成社會化\n○ (C) 推動社會運動來解決文化衝突\n○ (D) 透過社會團體來促成制度變遷\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(B) 藉由宣導社會規範達成社會化",
    diagramUrl: "assets/questions/q_soc_civ_traffic_banner_007.png?v=41",
    solution: "1. **社會化（Socialization）之內涵**：\n- 個人在社會互動過程中，學習並內化社會所認同的價值、規範與行為準則，進而成為健全社會成員的歷程。\n\n2. **標語宣導之功能**：\n- 交通標語並非具強制力的刑法條文，而是屬於道德與守法意識的倫理呼籲。\n- 學校透過展示標語向學生及公眾宣導「禮讓」與「安全駕駛」之社會規範，促使個人將規則內化為良好習慣，達成社會化目標。\n\n3. **結論**：正確答案選 **(B)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_handicapped_bakery_group_016",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "公益性社會團體類型判讀（身心障礙者庇護工場）",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "提供心智障礙者（喜憨兒、唐氏症等）工作訓練場所與工作機會、學得烘焙一技之長，最知名的公益社會團體即為『喜憨兒文教基金會（喜憨兒烘焙屋）』！華山基金會是以三失老人（失能失智失依）為主！",
    stem: "阿喜向朋友介紹自己參加的社會團體時，提到：「……主要在提供心智障礙者一個有效的工作訓練場所及工作機會，讓他們能學得一技之長。」根據內容判斷，他最可能參加下列何種團體？\n\n○ (A) 華山基金會\n○ (B) 社區志工隊\n○ (C) 喜憨兒烘焙屋\n○ (D) 社區發展協會\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(C) 喜憨兒烘焙屋",
    diagramUrl: "",
    solution: "1. **各社會團體宗旨分析**：\n- **(A) 華山基金會**：服務核心為「三失老人」（失能、失智、失依老人），提供免費到宅訪視與長者照護。\n- **(B) 社區志工隊**：主要負責社區巡守、清潔環境、交通維護等地方公共服務。\n- **(C) 喜憨兒文教基金會（喜憨兒烘焙屋）**：由心智障礙者家長創辦，創設庇護工場與烘焙餐廳，專門培訓心智障礙青年習得烘焙、包裝、門市服務技能，獲得工作尊嚴與自立生活！完全吻合題幹！\n- **(D) 社區發展協會**：以特定社區居民為主體，推展社區總體營造、藝文活動與地方福利。\n\n2. **結論**：正確答案選 **(C)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_docent_volunteer_justice_017",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "羅爾斯正義論：自由原則、公平機會均等原則與差異原則",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "國家公園與博物館培訓導覽義工熱心解說，向所有參觀民眾無差別提供專業導覽，讓每個人不論貧富貴賤都能公平享有充實參觀與理解文化的權利，體現了「自由原則（平等自由權）」！",
    stem: "在國家公園、博物館或各地名勝古蹟，常見受過訓練的義工，熱心地為參觀民眾進行解說及導覽。請問：這種義工行為是實踐哪一種公平正義的原則？\n\n○ (A) 自由原則，因為給大家公平且充分的參觀與文化探索權利\n○ (B) 機會均等原則，因為每個人都可以報名當義工\n○ (C) 差異原則，因為他們只為特定弱勢群體進行解說\n○ (D) 義工沒有全面服務所有人，不算實踐公平正義原則\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(A) 自由原則，因為給大家公平且充分的參觀與文化探索權利",
    diagramUrl: "",
    solution: "1. **羅爾斯（John Rawls）正義論三大原則層次**：\n- **第一原則（平等的自由原則）**：每個人都擁有平等的權利去享有最廣泛的基本自由體系（如言論自由、參觀文化場館的知性權利）。義工熱心為所有人導覽，實踐了保障大眾平等享受文化資源之自由權。\n- **第二原則前半（公平機會均等原則）**：任何地位職位向所有人開放。\n- **第二原則後半（差異原則）**：制度應優先使處境最不利者獲益。\n\n2. **選項除錯**：\n- (B) 義工服務目的在於回饋參觀群眾，非探討義工本身的甄選錄取機會。\n- (C) 題幹明言為「參觀民眾（全體大眾）」導覽，非僅限特定弱勢。\n- (D) 志願服務提供公共財，屬於促進社會公平正義之善行。\n\n3. **結論**：正確答案選 **(A)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_rural_school_difference_018",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "偏鄉教育資源分配、受教權保障與正義論之「差異原則」",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "偏鄉學童處於地理與社會處境最不利地位。若僅以經濟投資效益考量廢校，將侵害其基本受教權。依羅爾斯正義論的「差異原則」，公共政策應給予處境最不利者最大利益補償，故偏鄉小學存廢應考慮差異原則！",
    stem: "附圖是阿里閱讀某報導的部分內容：「有人認為偏遠地區的小學，全校僅有數名學童，每年每人花費的教育成本高達百萬元，不符合經濟投資效益，應該採取廢校或與他校合併的做法。但教育問題的決策，是否僅止於數值的計算，孩子們的學習權在哪裡？」根據內容判斷，作者的觀點最主要是基於下列何者的考量？\n\n○ (A) 強制廢校或合併，違反自由原則\n○ (B) 偏鄉小學的存廢，應該考慮到差異原則\n○ (C) 每年每人花費百萬元教育經費，是不合理的利益分配\n○ (D) 應該把資源花費在更有效益的偏鄉建設上\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(B) 偏鄉小學的存廢，應該考慮到差異原則",
    diagramUrl: "",
    solution: "1. **剖析作者核心批判**：\n- 商業市場講求「成本效益比（投入少、產出多）」，但教育屬於基本人權。\n- 偏鄉孩子受限於地理阻隔與交通貧弱，是整體社會中「處境最不利群體」。\n\n2. **連結正義論差異原則（Difference Principle）**：\n- 差異原則強調：當社會資源進行不平等分配時，必須能夠**「讓處境最不利的成員獲得最大的利益補償」**。\n- 政府即使投入更高的人均成本在偏鄉維持學校，正是為了彌補地理劣勢，落實教育實質平等。\n\n3. **結論**：作者主張保障孩子學習權，乃基於差異原則，正確答案選 **(B)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_childcare_subsidy_deprivation_019",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "社會福利排富條款、公民網路參與政策與「相對剝奪感」",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "育兒津貼調高但設有嚴格排富門檻，繳納高額稅金卻因所得略超標而無法領取津貼的家庭，在心理上會產生自己付出多卻未獲相應福利的「相對剝奪感」！",
    stem: "行政院宣布自 2022 年起育兒津貼會從原先的每月 3,500 元提高到 5,000 元，但是仍維持家戶所得超過規定的門檻者不具有領取此津貼的資格。對此，引起未符合資格的民眾到公共政策網路參與平臺，提案優化育兒排富政策，然而政府的回應是經費不足以支應，讓提案者認為現今的政策難以有效增加生育率。根據上文判斷，下列敘述何者正確？\n\n○ (A) 民眾是為了爭取基本生存權而提案\n○ (B) 公共網路提案獲得覆議即必定能強制改變政府決策\n○ (C) 現行排富政策乃是落實機會均等原則\n○ (D) 提案者未獲補助感受到了心理上的相對剝奪感\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(D) 提案者未獲補助感受到了心理上的相對剝奪感",
    diagramUrl: "",
    solution: "1. **專有名詞與選項剖析**：\n- **(A) 錯誤**：育兒津貼屬於提升生育意願之「社會福利/津貼」，非維持生命存活之生存權（如緊急急難救助）。\n- **(B) 錯誤**：公共政策網路參與平臺成案後，政府各部會須依法「研擬並公開回覆」，但政府可依財政預算評估不予採納，並非必定改變政策。\n- **(C) 錯誤**：排富條款是依家戶收入進行差別對待，屬於「差異原則/實質平等考量」，非齊頭式的機會均等。\n- **(D) 正確**：所得剛好超過排富門檻的中產家長，自覺同樣辛苦撫養孩子、承擔沉重稅負卻被排除在福利之外，產生與他人比較後的**「相對剝奪感（Relative Deprivation）」**！\n\n2. **結論**：正確答案選 **(D)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
    id: "q_soc_civ_referendum_group_voluntary_020",
    examPeriod: "一段",
    subject: "社會/公民",
    errorReason: "觀念不懂",
    concept: "志願結社（Voluntary Association）特徵與團體分類",
    uploadDate: "2026-09-06",
    mondayDate: "2026-08-24",
    mondayDates: ["2026-08-24"],
    weekLabel: "2026-08-24 (暑假複習)",
    isGuessedOrUnstable: true,
    mistakeNote: "志願結社四大特徵：民間性、志願性、自主性、非營利性。學生自發組織成立的學生社團、環保學生團體均屬於民間自發成立的「志願性團體」！選項(D)稱學生團體為非志願團體顯屬錯誤！",
    stem: "請從文中對於環保團體、學生團體與公民投票工作小組的敘述判斷，下列何者「錯誤」？\n\n○ (A) 公投工作小組具志願結社特徵的組織性\n○ (B) 各團體皆具有志願結社特徵中的民間性\n○ (C) 各團體皆屬於以推動議題與任務等工作取向為主的團體\n○ (D) 學生團體因成員皆為在校學生，故屬於一非志願團體\n\n🎬 [點選看 YouTube 解題影片](https://www.youtube.com/watch?v=p1poacaYT-g)",
    answer: "(D) 學生團體因成員皆為在校學生，故屬於一非志願團體",
    diagramUrl: "",
    solution: "1. **志願結社（Voluntary Association）核心要件**：\n- **非公營/民間性**：非政府公權力機構設立。\n- **志願性**：依個人自由意志自由加入與退出，無法律強制約束。\n- **自主性**：由成員自治管理、自訂章程。\n- **非營利性**：盈餘不向成員分配利潤。\n\n2. **檢驗選項 (D)**：\n- 學生自主成立之環保社、權益小組、自治會，學生享有自由決定是否參與之權利，並非依法強制編配（非志願團體例如：家庭、監獄、軍隊徵兵等）。\n- 故學生團體屬於典型的**志願性團體**，選項 (D) 敘述錯誤！\n\n3. **結論**：錯誤敘述選 **(D)**。",
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: "2026-09-06"
  },
  {
      "id": "q_math_triangle_incenter_centroid_001",
      "examPeriod": "一段",
      "subject": "數學",
      "errorReason": "觀念不懂",
      "concept": "三角形重心與內心之面積性質與比值計算",
      "uploadDate": "2026-09-07",
      "mondayDate": "2026-09-07",
      "mondayDates": [
          "2026-09-07"
      ],
      "weekLabel": "2026-09-07 (最新週次)",
      "isGuessedOrUnstable": true,
      "mistakeNote": "重心 G 將三角形面積三等分：△ABG = 1/3 △ABC；內心 I 到三邊等距（高為內切圓半徑 r），故各分塊三角形面積與底邊長成正比：△ABI = 4/15 △ABC、△BCI = 5/15 △ABC！本題題意選項對應 △ABG : △ABI = 5 : 4！",
      "stem": "如圖，$\triangle ABC$ 中，$\\overline{AB}=4$、$\\overline{BC}=5$、$\\overline{AC}=6$，$ 是內心，$ 是重心，則 $\triangle ABG$ 與 $\triangle BCI$ 的面積比為何？\n\n○ (A) 5 : 4\n○ (B) 4 : 5\n○ (C) 2 : 3\n○ (D) 1 : 1",
      "answer": "(A) 5 : 4",
      "diagramUrl": "assets/questions/q_math_triangle_incenter_centroid_001.png",
      "solution": "1. **題意解析與核心概念**：\n- **重心 $ 面積均分性質**：重心為三中線交點，將三角形面積等分為 3 等份，故：\n  13097\triangle ABG = \frac{1}{3} \triangle ABC13097\n- **內心 $ 邊長正比性質**：內心到三邊之垂直距離均為內切圓半徑 $。\n  連接內心至各頂點所得之各小三角形面積與底邊長成正比：\n  13097\triangle ABC = \triangle ABI + \triangle BCI + \triangle CAI = \frac{(4+5+6)r}{2} = \frac{15r}{2}13097\n  13097\triangle ABI = \frac{4}{15} \triangle ABC13097\n  13097\triangle BCI = \frac{5}{15} \triangle ABC = \frac{1}{3} \triangle ABC13097\n\n2. **比值計算與原題詳解剖析**：\n- 素材標準解答對應 $\triangle ABG : \triangle ABI$（印刷題幹筆誤，原解題採 $\triangle ABI$）：\n  13097\triangle ABG : \triangle ABI = \frac{1}{3} : \frac{4}{15} = \frac{5}{15} : \frac{4}{15} = 5 : 413097\n- 若字面求 $\triangle ABG : \triangle BCI$，則為 $\frac{1}{3} : \frac{1}{3} = 1 : 1$（即選項 D）。\n- 本題依教材官方答案選 **(A) 5 : 4**。\n\n3. **結論**：正確答案選 **(A)**。",
      "errorCount": 1,
      "ebbinghausStage": 1,
      "consecutiveMastered": 0,
      "isArchived": false,
      "nextReviewDate": "2026-09-07"
  },
  {
      "id": "q_math_inequality_election_threshold_002",
      "examPeriod": "一段",
      "subject": "數學",
      "errorReason": "審題不清",
      "concept": "一元一次不等式應用：複數候選人確定當選之最低得票數門檻",
      "uploadDate": "2026-09-07",
      "mondayDate": "2026-09-07",
      "mondayDates": [
          "2026-09-07"
      ],
      "weekLabel": "2026-09-07 (最新週次)",
      "isGuessedOrUnstable": true,
      "mistakeNote": "多席次選舉「確定當選」最嚴苛門檻：當選人數為 N，則與第 N+1 名（落選頭）競爭。門檻公式為 x > 總有效票 / (應選名額 + 1)！本題 12300 / (2 + 1) = 4100，票數須為整數且嚴格大於，故至少 4101 票！",
      "stem": "花田村要選村民代表，共有 5 位候選人，從中要選出 2 位，若開出有效票共 12300 張，則候選人至少應得多少票才可確定當選？\n\n○ (A) 4100\n○ (B) 4101\n○ (C) 4102\n○ (D) 4103",
      "answer": "(B) 4101",
      "diagramUrl": "",
      "solution": "1. **列不等式嚴謹分析**：\n- 設某位候選人得 $ 票。\n- 本次選舉「應選 2 位」，最激烈的競爭情境為：\n  前兩名均為當選人，而第 3 名（落選頭）得票盡可能最高。\n- 若前兩名當選人各得 $ 票，則其餘未當選的 3 位候選人合計最多獲得：\n  13097(12300 - 2x) \text{ 票}13097\n- 其中落選頭（第 3 名）能獲得的最高票數為其平均值：\n  13097\frac{12300 - 2x}{3} \text{ 票}13097\n- 該候選人若要「確定當選」，其得票數 $ 必須嚴格大於落選頭的最高可能得票：\n  13097x > \frac{12300 - 2x}{3}13097\n  130973x > 12300 - 2x13097\n  130975x > 1230013097\n  13097x > 2460 \\quad \text{（當只選1位時的考慮）}13097\n\n- **正規複數選區當選臨界值推導**：\n  若考慮自身為當選 2 人之一，自身得 $ 票，另 1 名當選人得票極高或極低，最不利情境為有另外 2 人票數與自己完全平手並列第 2 名：\n  即 3 個人平分票數時無法選出前 2 名，故：\n  13097x > \frac{\text{總有效票數}}{\text{應選席次} + 1} = \frac{12300}{2 + 1} = \frac{12300}{3} = 410013097\n- 若得 4100 票，有可能前 3 名皆各得 4100 票（ \times 3 = 12300$），導致 3 人同票同列無法確定保證 2 個席位。\n- 因此得票數必須嚴格大於 4100 票，即  \\ge 4101$ 票！\n\n2. **結論**：至少應得 **4101** 票才可確定當選，選 **(B)**。",
      "errorCount": 1,
      "ebbinghausStage": 1,
      "consecutiveMastered": 0,
      "isArchived": false,
      "nextReviewDate": "2026-09-07"
  },
  {
      "id": "q_math_arithmetic_mean_missing_num_003",
      "examPeriod": "一段",
      "subject": "數學",
      "errorReason": "計算錯誤",
      "concept": "等差級數求和與帶分數平均數反求未取數 (98基測I)",
      "uploadDate": "2026-09-07",
      "mondayDate": "2026-09-07",
      "mondayDates": [
          "2026-09-07"
      ],
      "weekLabel": "2026-09-07 (最新週次)",
      "isGuessedOrUnstable": true,
      "mistakeNote": "利用「全部總和 - 取出的 48 數總和 = 未取的數字」！計算帶分數乘法時利用分配律：48 × 49(5/12) = 48 × 49 + 48 × (5/12) = 2352 + 20 = 2372，計算快速又不易出錯！",
      "stem": "已知  \\sim 99$ 中有 49 個偶數，從這 49 個偶數中取出 48 個數，其平均數為 \frac{5}{12}$，則未取的數字為何？【98.基測 I】\n\n○ (A) 20\n○ (B) 28\n○ (C) 72\n○ (D) 78",
      "answer": "(D) 78",
      "diagramUrl": "",
      "solution": "1. **計算全部 49 個偶數之總和**：\n-  \\sim 99$ 中的偶數為 , 4, 6, \\dots, 98$，為等差數列，項數  = 49$，首項  = 2$，末項 {49} = 98$。\n- 根據等差級數求和公式：\n  13097S_{49} = \frac{49 \times (2 + 98)}{2} = \frac{49 \times 100}{2} = 49 \times 50 = 245013097\n\n2. **計算取出 48 個數之總和**：\n- 平均數為 \frac{5}{12} = 49 + \frac{5}{12}$。\n- 48 個數之總和為：\n  13097\text{總和} = 48 \times \\left(49 + \frac{5}{12}\right) = 48 \times 49 + 48 \times \frac{5}{12}13097\n  1309748 \times 49 = 48 \times (50 - 1) = 2400 - 48 = 235213097\n  1309748 \times \frac{5}{12} = 4 \times 5 = 2013097\n  13097\text{取出總和} = 2352 + 20 = 237213097\n\n3. **反求未取之數**：\n- 未取的數字即為兩總和之差：\n  13097\text{未取數字} = 2450 - 2372 = 7813097\n\n4. **結論**：未取的數字為 **78**，正確答案選 **(D)**。",
      "errorCount": 1,
      "ebbinghausStage": 1,
      "consecutiveMastered": 0,
      "isArchived": false,
      "nextReviewDate": "2026-09-07"
  },
  {
      "id": "q_math_ratio_reciprocal_simplification_004",
      "examPeriod": "一段",
      "subject": "數學",
      "errorReason": "觀念不懂",
      "concept": "連比例式之倒數化簡與最簡整數比",
      "uploadDate": "2026-09-07",
      "mondayDate": "2026-09-07",
      "mondayDates": [
          "2026-09-07"
      ],
      "weekLabel": "2026-09-07 (最新週次)",
      "isGuessedOrUnstable": true,
      "mistakeNote": "若 1/x : 2/y : 3/z = 3 : 4 : 5，取倒數時注意係數移項：x : (y/2) : (z/3) = 1/3 : 1/4 : 1/5，故 x : y : z = 1/3 : (2/4) : (3/5) = 1/3 : 1/2 : 3/5！再同乘以公倍數 30 得 10 : 15 : 18！",
      "stem": "若 $\frac{1}{x} : \frac{2}{y} : \frac{3}{z} = 3 : 4 : 5$，則  : y : z = ?$",
      "answer": "10 : 15 : 18",
      "diagramUrl": "",
      "solution": "1. **利用連比例設參數或倒數關係求解**：\n- **方法一（倒數法）**：\n  已知 $\frac{1}{x} : \frac{2}{y} : \frac{3}{z} = 3 : 4 : 5$。\n  取各項倒數可得：\n  13097x : \frac{y}{2} : \frac{z}{3} = \frac{1}{3} : \frac{1}{4} : \frac{1}{5}13097\n  將第二項同乘 2，第三項同乘 3：\n  13097x : y : z = \frac{1}{3} : \\left(\frac{1}{4} \times 2\right) : \\left(\frac{1}{5} \times 3\right) = \frac{1}{3} : \frac{1}{2} : \frac{3}{5}13097\n\n- **方法二（設參數法）**：\n  設 $\frac{1}{x} = 3k$，$\frac{2}{y} = 4k$，$\frac{3}{z} = 5k$（ \ne 0$）。\n  則  = \frac{1}{3k}$， = \frac{2}{4k} = \frac{1}{2k}$， = \frac{3}{5k}$。\n  13097x : y : z = \frac{1}{3} : \frac{1}{2} : \frac{3}{5}13097\n\n2. **化為最簡整數比**：\n- 分母 3、2、5 的最小公倍數 5 = 30$。\n- 各項同乘以 30：\n  13097x : y : z = \\left(\frac{1}{3} \times 30\right) : \\left(\frac{1}{2} \times 30\right) : \\left(\frac{3}{5} \times 30\right) = 10 : 15 : 1813097\n\n3. **結論**： : y : z = \\mathbf{10 : 15 : 18}$。",
      "errorCount": 1,
      "ebbinghausStage": 1,
      "consecutiveMastered": 0,
      "isArchived": false,
      "nextReviewDate": "2026-09-07"
  },
  {
      "id": "q_math_ratio_linear_substitution_005",
      "examPeriod": "一段",
      "subject": "數學",
      "errorReason": "計算錯誤",
      "concept": "連比例式之參數 r 假設法與三元一次式求值",
      "uploadDate": "2026-09-07",
      "mondayDate": "2026-09-07",
      "mondayDates": [
          "2026-09-07"
      ],
      "weekLabel": "2026-09-07 (最新週次)",
      "isGuessedOrUnstable": true,
      "mistakeNote": "連比例求值標準 SOP：令 x+3=4r, y-2=2r, z=3r，將 x, y, z 均用 r 表示後代入總和條件求出 r=5。注意最後求的是 x - y，別忘了括號 (4r-3) - (2r+2) = 2r - 5！",
      "stem": "若  : (y - 2) : z = 4 : 2 : 3$，且  + y + z = 44$，則  - y = ?$",
      "answer": "5",
      "diagramUrl": "",
      "solution": "1. **設參數法解題**：\n- 由連比例式  : (y - 2) : z = 4 : 2 : 3$，\n  可設：\n  13097x + 3 = 4r \\implies x = 4r - 313097\n  13097y - 2 = 2r \\implies y = 2r + 213097\n  13097z = 3r \\quad (r \ne 0)13097\n\n2. **代入總和條件解出參數 *：\n- 已知  + y + z = 44$：\n  13097(4r - 3) + (2r + 2) + 3r = 4413097\n  13097(4r + 2r + 3r) + (-3 + 2) = 4413097\n  130979r - 1 = 4413097\n  130979r = 45 \\implies r = 513097\n\n3. **求目標式  - y$ 之值**：\n- 將 , y$ 表示為 $：\n  13097x - y = (4r - 3) - (2r + 2) = 4r - 3 - 2r - 2 = 2r - 513097\n- 將  = 5$ 代入：\n  13097x - y = 2(5) - 5 = 10 - 5 = 513097\n- *(驗算： = 4(5)-3 = 17$， = 2(5)+2 = 12$， = 3(5) = 15$；+12+15 = 44$ 符合！ - y = 17 - 12 = 5$)*\n\n4. **結論**： - y = \\mathbf{5}$。",
      "errorCount": 1,
      "ebbinghausStage": 1,
      "consecutiveMastered": 0,
      "isArchived": false,
      "nextReviewDate": "2026-09-07"
  },
  {
      "id": "q_math_rect_area_ratio_perimeter_006",
      "examPeriod": "一段",
      "subject": "數學",
      "errorReason": "觀念不懂",
      "concept": "矩形面積分割連比例與二元一次不定方程式整數解之周長比",
      "uploadDate": "2026-09-07",
      "mondayDate": "2026-09-07",
      "mondayDates": [
          "2026-09-07"
      ],
      "weekLabel": "2026-09-07 (最新週次)",
      "isGuessedOrUnstable": true,
      "mistakeNote": "等高矩形面積比等於底邊長之比！乙與丙等寬同底，面積比 4:5 故 DG:GC = 4:5，總高為 9y；甲與 (乙+丙) 等高，故底邊 AE:ED = 3:9 = 1:3，總寬為 4x。周長 2(4x+9y)=34，限制長寬為整數只有 x=2, y=1 一組正整數解！",
      "stem": "如圖，在長方形 $ 中，$\\overline{EF}$、$\\overline{GH}$ 將長方形 $ 分割成甲、乙、丙三個長方形區域，若甲、乙、丙的面積比為  : 4 : 5$，且長方形 $ 的周長為 34，甲、乙、丙的長、寬皆為整數，則甲、乙、丙的周長比為何？",
      "answer": "11 : 10 : 11",
      "diagramUrl": "assets/questions/q_math_rect_area_ratio_perimeter_006.png",
      "solution": "1. **由面積比求出長寬線段比值**：\n- 設甲面積為 r$，乙面積為 r$，丙面積為 r$（ > 0$）。\n- **觀察乙與丙**：共用橫向邊長 $\\overline{ED}$（即 $\\overline{HG}$），面積比等於垂直高之比：\n  13097\\overline{DG} : \\overline{GC} = 4r : 5r = 4 : 513097\n  令 $\\overline{DG} = 4y$、$\\overline{GC} = 5y$，則大長方形垂直高 $\\overline{CD} = \\overline{AB} = 4y + 5y = 9y$。\n- **觀察甲與 (乙+丙)**：\n  甲的高為 $\\overline{AB} = 9y$；(乙+丙) 構成的組合長方形高亦為 y$。\n  兩者高相同，面積比等於橫向寬度比：\n  13097\\overline{AE} : \\overline{ED} = \text{面積(甲)} : \text{面積(乙+丙)} = 3r : (4r + 5r) = 3 : 9 = 1 : 313097\n  令 $\\overline{AE} = x$、$\\overline{ED} = 3x$，則大長方形水平長度 $\\overline{AD} = \\overline{BC} = x + 3x = 4x$。\n\n2. **利用周長條件與整數性質求解**：\n- 長方形 $ 周長為 34：\n  130972 \times (\\overline{AD} + \\overline{CD}) = 34 \\implies 4x + 9y = 1713097\n- 題目註明「甲、乙、丙的長、寬皆為整數」，故 , y$ 必為正整數（, y \\in \\mathbb{N}$）：\n  - 若  = 1$：x + 9(1) = 17 \\implies 4x = 8 \\implies x = 2$（符合正整數解！）\n  - 若  \\ge 2$：y \\ge 18 > 17$，無正數解。\n  因此唯一整數解為： = 2,\\; y = 1$。\n\n3. **計算各區域尺寸與周長比**：\n- 各線段具體長度：\n  $\\overline{AE} = 2$，$\\overline{ED} = 6$，$\\overline{DG} = 4$，$\\overline{GC} = 5$，$\\overline{AB} = 9$。\n- **長方形甲**：寬 2，長 9 $\\implies$ 周長  2 \times (2 + 9) = 22$\n- **長方形乙**：長 6，寬 4 $\\implies$ 周長  2 \times (6 + 4) = 20$\n- **長方形丙**：長 6，寬 5 $\\implies$ 周長  2 \times (6 + 5) = 22$\n- **周長比**：\n  13097\text{甲周長} : \text{乙周長} : \text{丙周長} = 22 : 20 : 22 = 11 : 10 : 1113097\n\n4. **結論**：甲、乙、丙的周長比為 $\\mathbf{11 : 10 : 11}$。",
      "errorCount": 1,
      "ebbinghausStage": 1,
      "consecutiveMastered": 0,
      "isArchived": false,
      "nextReviewDate": "2026-09-07"
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

    // Auto-sync any newly added system seed questions or seed content updates
    INITIAL_SEED_DATA.forEach(seed => {
      if (Array.isArray(this.deletedIds) && this.deletedIds.includes(seed.id)) return;
      const idx = this.questions.findIndex(q => q.id === seed.id);
      if (idx === -1) {
        this.questions.push(JSON.parse(JSON.stringify(seed)));
      } else {
        // Sync latest text, solution & links from INITIAL_SEED_DATA while preserving user stats
        this.questions[idx].stem = seed.stem;
        this.questions[idx].solution = seed.solution;
        this.questions[idx].concept = seed.concept;
        this.questions[idx].mistakeNote = seed.mistakeNote;
        this.questions[idx].diagramUrl = seed.diagramUrl;
        this.questions[idx].answer = seed.answer;
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
