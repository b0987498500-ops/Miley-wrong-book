/**
 * Smart Wrong Question Review System - Data & LocalStorage Management
 * Manages wrong questions, Ebbinghaus repetition states, tree structure, seed datasets.
 */

const STORAGE_KEY = 'miley_wrong_questions_v18';

// Initial Seed Data with real LaTeX, diagram samples, and mistake prevention notes
const INITIAL_SEED_DATA = [
  {
    id: 'q_sci_chem_103_001',
    examPeriod: '二段',
    subject: '自然/理化',
    errorReason: '計算錯誤',
    concept: '食鹽水溶解度與飽和溶液過濾混合濃度計算(103年會考題)',
    uploadDate: '2026-08-29',
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '過濾後只保留已溶解的食鹽！甲、乙兩杯過濾後均達到飽和，飽和溶液混合後依然是飽和溶液，濃度即為飽和濃度 36/(36+100) × 100% ≈ 26.5%！',
    stem: '已知室溫時，食鹽的溶解度為 $36\\text{ g}/100\\text{ g}$ 水。小梅在室溫下分別配製甲、乙兩杯食鹽水溶液，各杯內加入的食鹽與水之質量如表所示。小梅將兩杯食鹽水溶液過濾後混合成一杯，若過程中水的蒸發量不計，此杯混合溶液的重量百分濃度約為多少？【103年會考】\n\n燒杯 | 食鹽(g) | 水(g)\n甲 | 24 | 60\n乙 | 36 | 80\n\n○ (A) 26.5%\n○ (B) 30.0%\n○ (C) 36.0%\n○ (D) 42.9%',
    answer: '(A) 26.5%',
    solution: '1. 觀念解析與溶解度計算：\n- 已知室溫下食鹽溶解度為 $36\\text{ g} / 100\\text{ g}$ 水。\n- 甲杯：$60\\text{ g}$ 水最多可溶解 $60 \\times \\frac{36}{100} = 21.6\\text{ g}$ 食鹽，過濾後僅保留 $21.6\\text{ g}$（飽和）。\n- 乙杯：$80\\text{ g}$ 水最多可溶解 $80 \\times \\frac{36}{100} = 28.8\\text{ g}$ 食鹽，過濾後僅保留 $28.8\\text{ g}$（飽和）。\n\n2. 混合濃度計算：\n- 甲、乙兩杯過濾後均為飽和溶液，兩者混合後仍為飽和溶液。\n- 重量百分濃度 $P\\% = \\frac{36}{36+100} \\times 100\\% \\approx 26.5\\%$。\n- 故選 (A)。\n\n3. 名師影音解題教學影片：\nhttps://www.youtube.com/watch?v=gjnDtTaeF4w',
    diagramUrl: 'assets/questions/q_103_nat_001_table.png',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-30'
  },
  {
    id: 'q_sci_chem_104_002',
    examPeriod: '二段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: '醋酸鈉飽和溶液與溶解度範圍推算(104年會考題)',
    uploadDate: '2026-08-29',
    mondayDate: '2026-08-24',
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
  },
  {
    id: 'q_sci_bio_107_003',
    examPeriod: '二段',
    subject: '自然/理化',
    errorReason: '觀念不懂',
    concept: '細胞滲透作用與體積變化與莫耳濃度換算(107年會考題)',
    uploadDate: '2026-08-29',
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '甲杯濃度為 $0.5\\text{ M} \\approx 17.1\\%$，乙杯濃度為 $0.5\\%$（甲 $>$ 乙）。小袋丙置於乙中形狀不變（丙 $\\approx$ 乙），置於甲中萎縮（水滲出，甲 $>$ 丙）。故甲最大，乙與丙相近（甲 $>$ 乙 $\\approx$ 丙）！',
    stem: '曉營進行滲透作用的實驗，其步驟和說明如圖所示：已知水可以自由進出兩小袋的薄膜而蔗糖不行，結果其中一杯內的小袋保持原形狀且體積幾乎不變，另一杯內的小袋形狀萎縮且體積變小。若各溶液的密度均約為 $1\\text{ g/cm}^3$，則步驟一中甲、乙和丙三種溶液濃度的關係，應為下列何者？（$1\\text{莫耳}$的蔗糖質量為 $342\\text{ g}$）【107.會考】\n\n○ (A) 乙最小，甲與丙相近\n○ (B) 乙最大，甲與丙相近\n○ (C) 甲最小，乙與丙相近\n○ (D) 甲最大，乙與丙相近',
    answer: '(D) 甲最大，乙與丙相近',
    solution: '1. 溶液濃度單位換算：\n- 假設溶液密度約為 $1\\text{ g/cm}^3$，則 $1\\text{ L} = 1000\\text{ mL} = 1000\\text{ g}$。\n- 甲杯：$0.5\\text{ M}$ 蔗糖溶液代表 $1\\text{ L}$ 中含有 $0.5\\text{ mol} \\times 342\\text{ g/mol} = 171\\text{ g}$ 蔗糖。\n- 重量百分濃度 $P_{\\text{甲}}\\% = \\frac{171}{1000} \\times 100\\% = 17.1\\%$\n- 乙杯：重量百分濃度 $P_{\\text{乙}}\\% = 0.5\\%$\n- 故濃度大小：甲 $>$ 乙。\n\n2. 滲透作用與體積變化分析：\n- 水分子由低濃度向高濃度滲透。\n- 丙袋放入乙杯時，形狀與體積保持不變，說明丙與乙濃度相等（丙 $\\approx$ 乙）。\n- 丙袋放入甲杯時，形狀萎縮且體積變小，說明水由丙袋滲出至甲杯，故甲杯濃度高於丙袋（甲 $>$ 丙）。\n\n3. 綜合比較：\n- 濃度大小關係：甲 $>$ 乙 $\\approx$ 丙，故選 (D)。\n\n4. 名師影音解題教學影片：\nhttps://www.youtube.com/watch?v=xRfvRVY1M8U',
    diagramUrl: 'assets/questions/q_107_nat_003_diagram.png',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-30'
  },
  {
    id: 'q_soc_civ_110_001',
    examPeriod: '二段',
    subject: '社會',
    errorReason: '觀念不懂',
    concept: '地方政府與直轄市行政區劃(110年會考補考題)',
    uploadDate: '2026-08-28',
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '區公所屬於直轄市（六都）政府的派出單位！彰化縣與雲林縣屬於縣，下設鄉、鎮、縣轄市公所，沒有「區公所」！',
    stem: '附圖是小芬蒐集區公所戳章的旅遊路線示意圖，她發現自己在其中一段路線中，沒有蒐集到任何一個區公所的戳章。根據圖中內容判斷，上述路線最可能是甲、乙、丙、丁中的何者？【110年會考補考】\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁。',
    answer: '(C) 丙',
    solution: '1. 觀念解析：\n區公所屬於直轄市政府的派出單位，僅在直轄市（六都：臺北市、新北市、桃園市、臺中市、臺南市、高雄市）設置。\n2. 路線判讀：\n- 甲路線：經過新北市、臺北市等直轄市區公所。\n- 乙路線：經過臺中市直轄市區公所。\n- 丙路線：僅經過彰化縣及雲林縣，兩者皆為「縣」，下設鄉、鎮、市公所，完全沒有經過直轄市，故無法蒐集到區公所戳章。\n- 丁路線：經過臺南市、高雄市等直轄市區公所。\n3. 名師影音解題教學影片：\nhttps://www.youtube.com/watch?v=Gq115_MhSYE',
    diagramUrl: 'assets/questions/q_110_civics_district_office_diagram.png',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-29'
  },
  {
    id: 'q_soc_geo_112_001',
    examPeriod: '二段',
    subject: '社會',
    errorReason: '觀念不懂',
    concept: '臺灣氣候與地形降水(112年會考題)',
    uploadDate: '2026-08-24',
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '乙測站位於臺灣東北角迎風面（基隆/宜蘭一帶），受冬季東北季風與夏季颱風、地形抬升影響，年降水量為全臺最多！',
    stem: '臺灣本島的經緯度約介於 22°N ~ 25°N, 120°E ~ 122°E 之間，降水的空間分布受到地形及季風的影響而有顯著差異。附表為本島四個氣象測站的資料，根據各測站位置及地形判斷，何者的年降水量可能最多？【112 年會考】\n\n測站 | 緯度 | 經度 | 高度(m)\n甲 | 23.98°N | 121.61°E | 16.0\n乙 | 25.13°N | 121.74°E | 26.7\n丙 | 22.99°N | 120.20°E | 40.8\n丁 | 23.95°N | 120.59°E | 34.0\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁',
    answer: '(B) 乙',
    solution: '1. 分析測站位置：\n- 乙測站緯度為 25.13°N，經度為 121.74°E，位於臺灣東北角（基隆/宜蘭海岸一帶）。\n2. 降水量因素分析：\n- 臺灣東北角地位於迎風面，冬季迎東北季風，夏季受西南季風與颱風地形抬升影響，全年多雨，年降水總量為四個測站中最多者。\n3. 名師影音解題教學影片：\nhttps://www.youtube.com/watch?v=rBrKF9lroJU',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-25'
  },
  {
    id: 'q_soc_geo_105_002',
    examPeriod: '二段',
    subject: '社會',
    errorReason: '觀念不懂',
    concept: '臺灣自然災害與土石流地形分布(105年會考題)',
    uploadDate: '2026-08-24',
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '土石流好發於坡度陡峭、起伏較大的丘陵與山地地形！彰化、雲林多平原，新竹市多平緩台地，故南投縣山地地形比例最高！',
    stem: '附圖為某種災害的警告標示牌，用來提醒民眾提高警覺。根據臺灣行政區的地形特色判斷，此種標示牌在下列哪個縣（市）最多？【105年會考】\n\n○ (A) 彰化縣\n○ (B) 雲林縣\n○ (C) 南投縣\n○ (D) 新竹市。',
    answer: '(C) 南投縣',
    solution: '1. 題目概念分析：\n土石流是指泥、沙、礫石等和水的混合物在豪雨期間沿坡面向下滑動的情形，多分布在起伏較大的丘陵或山地區域。\n2. 行政區地形判讀：\n選項中的行政區以南投縣的全境山地與丘陵地形比例最高，故此類警告標示牌數量最多。\n3. 名師影音解題教學影片：\nhttps://www.youtube.com/watch?v=ehNyQQV9rAo',
    diagramUrl: 'assets/questions/q_soc_geo_105_002_diagram.png',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-25'
  },
  {
    id: 'q_chi_idiom_001',
    examPeriod: '二段',
    subject: '國文',
    errorReason: '字音字形錯誤',
    concept: '常見錯別字與成語字形辨析(趨之若鶩)',
    uploadDate: '2026-08-24',
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '「趨之若鶩」的「鶩」是野鴨（鳥部），非鶺鴒或鶖鳥！比喻眾人爭相前往趨附，含貶義。',
    stem: '下列各組「」中的成語，何者字形完全正確？\n\n○ (A) 趨之若鶩 / 穿鑿附會\n○ (B) 趨之若騖 / 穿鑿附會\n○ (C) 趨之若鶩 / 穿鑿赴會\n○ (D) 趨之若鶖 / 穿鑿附會',
    answer: '(A) 趨之若鶩 / 穿鑿附會',
    solution: '1. 「趨之若鶩」：「鶩」音 ㄨˋ，指野鴨。像野鴨一般成群爭相前往，比喻眾人爭相前去趨附（多含貶義）。常誤寫為「騖」（馬奔跑）或「鶖」。\n2. 「穿鑿附會」：「附會」指強行牽合，不可寫作「赴會」。\n3. 故正確選項為 (A)。',
    diagramUrl: '',
    errorCount: 2,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-25'
  },
  {
    id: 'q_chi_rhetoric_001',
    examPeriod: '二段',
    subject: '國文',
    errorReason: '觀念不懂',
    concept: '修辭法辨析(借代與轉化)',
    uploadDate: '2026-08-24',
    mondayDate: '2026-08-24',
    weekLabel: '2026-08-24 (第 1 週)',
    isGuessedOrUnstable: true,
    mistakeNote: '「黃髮垂髫」中「黃髮」借代老人，「垂髫」借代幼童；「巾幗」借代女性，「須眉」借代男子！',
    stem: '下列詩句「」中的詞語，何者借代對象的說明「不正確」？\n\n○ (A) 何以解憂？唯有「杜康」➔ 借代為美酒\n○ (B) 臣本布衣，躬耕於南陽 ➔ 「布衣」借代平民\n○ (C) 渡頭餘落日，墟里上「孤煙」➔ 借代為戰火煙硝\n○ (D) 巾幗不讓須眉 ➔ 「巾幗」借代女性，「須眉」借代男子',
    answer: '(C) 渡頭餘落日，墟里上「孤煙」➔ 借代為戰火煙硝',
    solution: '1. (A) 「杜康」相傳為造酒始祖，此處借代為美酒。正確。\n2. (B) 「布衣」指平民百姓穿的布衣，借代為平民。正確。\n3. (C) 王維《歸嵩山作》中「墟里上孤煙」，「孤煙」指村落中炊煙袊袊升起，非戰火煙硝。故 (C) 說明不正確。\n4. (D) 「巾幗」為古代女性頭飾借代女性；「須眉」指鬍鬚眉毛借代男子。正確。\n5. 故答案選擇 (C)。',
    diagramUrl: '',
    errorCount: 1,
    ebbinghausStage: 1,
    consecutiveMastered: 0,
    isArchived: false,
    nextReviewDate: '2026-08-25'
  },
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

const DELETED_KEYS_STORAGE = 'miley_deleted_question_ids_v17';

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
