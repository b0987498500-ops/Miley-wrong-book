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
    diagramUrl: 'assets/questions/q_118_ice_thermal_equilibrium_graph.png',
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
    diagramUrl: 'assets/questions/q_bio_stem_cross_section.png',
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
    diagramUrl: 'assets/questions/q_bio_lung_gas_exchange.png',
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
    diagramUrl: 'assets/questions/q_phy_linlin_xt_graph.png',
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
    diagramUrl: 'assets/questions/q_phy_motion_xt_graph.png',
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
    diagramUrl: 'assets/questions/q_phy_car_vt_graph.png',
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
    diagramUrl: 'assets/questions/q_phy_ahan_vt_graph.png',
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
