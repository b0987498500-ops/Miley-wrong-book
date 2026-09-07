/**
 * Smart Wrong Question Review System - Data & LocalStorage Management
 * Manages wrong questions, Ebbinghaus repetition states, tree structure, seed datasets.
 */

const STORAGE_KEY = 'miley_wrong_questions_v48';

// Initial Seed Data - Multi-Subject Multi-Week Dataset for Miley
const INITIAL_SEED_DATA = [
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
      "mistakeNote": "重心 $G$ 將三角形面積三等分：$\\triangle ABG = \\frac{1}{3} \\triangle ABC$；內心 $I$ 到三邊等距（垂直高為內切圓半徑 $r$），故各小三角形面積與底邊長成正比：$\\triangle ABI = \\frac{4}{15} \\triangle ABC$、$\\triangle BCI = \\frac{5}{15} \\triangle ABC$！本題題意選項對應 $\\triangle ABG : \\triangle ABI = 5 : 4$！",
      "stem": "$\\triangle ABC$ 中，$\\overline{AB} = 4$、$\\overline{BC} = 5$、$\\overline{AC} = 6$，$I$ 是內心，$G$ 是重心，則 $\\triangle ABG$ 與 $\\triangle BCI$ 的面積比為何？\n\n○ (A) 5 : 4\n○ (B) 4 : 5\n○ (C) 2 : 3\n○ (D) 1 : 1",
      "answer": "(A) 5 : 4",
      "diagramUrl": "",
      "solution": "1. **幾何輔助解析圖**：\n![三角形重心與內心幾何圖](assets/questions/q_math_triangle_incenter_centroid_001.png)\n\n2. **核心觀念與面積分配性質**：\n- **重心 $G$ 面積均分性質**：\n  重心為三中線交點，將原三角形面積等分為 3 份面積相等的小三角形，故：\n  $$\\triangle ABG = \\frac{1}{3} \\triangle ABC$$\n- **內心 $I$ 邊長正比性質**：\n  內心到三邊之垂直距離均為內切圓半徑 $r$。\n  連接內心至各頂點所得之各小三角形面積與底邊長成正比：\n  $$\\triangle ABC = \\triangle ABI + \\triangle BCI + \\triangle CAI = \\frac{(4 + 5 + 6) \\times r}{2} = \\frac{15r}{2}$$\n  $$\\triangle ABI = \\frac{4}{15} \\triangle ABC$$\n  $$\\triangle BCI = \\frac{5}{15} \\triangle ABC = \\frac{1}{3} \\triangle ABC$$\n\n3. **比值計算與原題詳解剖析**：\n- 教材標準解答對應 $\\triangle ABG : \\triangle ABI$（印刷題幹筆誤，原解析採 $\\triangle ABI$）：\n  $$\\triangle ABG : \\triangle ABI = \\frac{1}{3} : \\frac{4}{15} = \\frac{5}{15} : \\frac{4}{15} = 5 : 4$$\n- 若依字面求 $\\triangle ABG : \\triangle BCI$，則為 $\\frac{1}{3} : \\frac{1}{3} = 1 : 1$（即選項 D）。\n- 本題依教材官方答案選 **(A) 5 : 4**。\n\n4. **結論**：正確答案選 **(A)**。",
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
      "mistakeNote": "多席次選舉「確定當選」最嚴苛門檻：應選名額為 $N$ 人，最不利情境為有 $N+1$ 人平分票數！門檻公式為：得票數 $x > \\frac{\\text{總有效票}}{N + 1}$。本題 $\\frac{12300}{2 + 1} = 4100$，票數為整數且須嚴格大於，故至少 4101 票！",
      "stem": "花田村要選村民代表，共有 5 位候選人，從中要選出 2 位，若開出有效票共 12300 張，則候選人至少應得多少票才可確定當選？\n\n○ (A) 4100\n○ (B) 4101\n○ (C) 4102\n○ (D) 4103",
      "answer": "(B) 4101",
      "diagramUrl": "",
      "solution": "1. **列不等式嚴謹分析**：\n- 設候選人得 $x$ 票。\n- 本次選舉應選出 2 位村民代表，最激烈的競爭情境為：\n  有 3 位候選人（前 2 位當選人與第 3 位落選頭）票數極度接近或平手。\n- 若 3 人平分所有選票，每人得到：\n  $$\\frac{12300}{2 + 1} = \\frac{12300}{3} = 4100 \\text{ 票}$$\n- 若某位候選人剛好得 4100 票，可能出現前 3 名皆各得 4100 票（$4100 \\times 3 = 12300$），此時 3 人同票同列，無法確定保證獲得 2 個席位之一。\n- 因此，得票數必須嚴格大於 4100 票才能「確定當選」：\n  $$x > 4100$$\n- 因為得票數必為正整數，故 $x \\ge 4101$。\n\n2. **速算公式**：\n- 最低確定當選門檻票數：\n  $$x > \\frac{\\text{總有效票數}}{\\text{應選名額} + 1}$$\n  $$x > \\frac{12300}{2 + 1} = 4100 \\implies x \\ge 4101 \\text{ 票}$$\n\n3. **結論**：候選人至少應得 **4101** 票才可確定當選，選 **(B)**。",
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
      "mistakeNote": "利用「全部總和 - 取出的 48 數總和 = 未取的數字」！計算帶分數乘法時善用乘法分配律：$48 \\times 49\\frac{5}{12} = 48 \\times 49 + 48 \\times \\frac{5}{12} = 2352 + 20 = 2372$，又快又準確！",
      "stem": "已知 $1 \\sim 99$ 中有 49 個偶數，從這 49 個偶數中取出 48 個數，其平均數為 $49\\frac{5}{12}$，則未取的數字為何？【98.基測 I】\n\n○ (A) 20\n○ (B) 28\n○ (C) 72\n○ (D) 78",
      "answer": "(D) 78",
      "diagramUrl": "",
      "solution": "1. **計算全部 49 個偶數之總和**：\n- $1 \\sim 99$ 中的偶數為 $2, 4, 6, \\dots, 98$，為等差數列，項數 $n = 49$，首項 $a_1 = 2$，末項 $a_{49} = 98$。\n- 根據等差級數求和公式：\n  $$S_{49} = \\frac{49 \\times (2 + 98)}{2} = \\frac{49 \\times 100}{2} = 49 \\times 50 = 2450$$\n\n2. **計算取出 48 個數之總和**：\n- 取出的 48 個數平均數為 $49\\frac{5}{12} = 49 + \\frac{5}{12}$。\n- 48 個數之總和為：\n  $$\\text{總和} = 48 \\times \\left(49 + \\frac{5}{12}\\right) = 48 \\times 49 + 48 \\times \\frac{5}{12}$$\n  $$48 \\times 49 = 48 \\times (50 - 1) = 2400 - 48 = 2352$$\n  $$48 \\times \\frac{5}{12} = 4 \\times 5 = 20$$\n  $$\\text{總和} = 2352 + 20 = 2372$$\n\n3. **反求未取之數字**：\n- 未取的數字即為全部總和減去取出的總和：\n  $$\\text{未取的數字} = 2450 - 2372 = 78$$\n\n4. **結論**：未取的數字為 **78**，正確答案選 **(D)**。",
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
      "mistakeNote": "若 $\\frac{1}{x} : \\frac{2}{y} : \\frac{3}{z} = 3 : 4 : 5$，取倒數時注意分子係數移項：$x : \\frac{y}{2} : \\frac{z}{3} = \\frac{1}{3} : \\frac{1}{4} : \\frac{1}{5}$，故 $x : y : z = \\frac{1}{3} : \\frac{2}{4} : \\frac{3}{5} = \\frac{1}{3} : \\frac{1}{2} : \\frac{3}{5}$！同乘最小公倍數 30 得 $10 : 15 : 18$！",
      "stem": "若 $\\frac{1}{x} : \\frac{2}{y} : \\frac{3}{z} = 3 : 4 : 5$，則 $x : y : z = ?$",
      "answer": "10 : 15 : 18",
      "diagramUrl": "",
      "solution": "1. **利用連比例設參數或倒數關係求解**：\n- **方法一（倒數法）**：\n  已知 $\\frac{1}{x} : \\frac{2}{y} : \\frac{3}{z} = 3 : 4 : 5$。\n  各項取倒數可得：\n  $$x : \\frac{y}{2} : \\frac{z}{3} = \\frac{1}{3} : \\frac{1}{4} : \\frac{1}{5}$$\n  第二項乘以 2，第三項乘以 3：\n  $$x : y : z = \\frac{1}{3} : \\left(\\frac{1}{4} \\times 2\\right) : \\left(\\frac{1}{5} \\times 3\\right) = \\frac{1}{3} : \\frac{1}{2} : \\frac{3}{5}$$\n\n- **方法二（設參數法）**：\n  設 $\\frac{1}{x} = 3k$、$\\frac{2}{y} = 4k$、$\\frac{3}{z} = 5k$（$k \\ne 0$）。\n  則：\n  $$x = \\frac{1}{3k}, \\quad y = \\frac{2}{4k} = \\frac{1}{2k}, \\quad z = \\frac{3}{5k}$$\n  $$x : y : z = \\frac{1}{3} : \\frac{1}{2} : \\frac{3}{5}$$\n\n2. **化為最簡整數比**：\n- 分母 3、2、5 的最小公倍數 $[3, 2, 5] = 30$。\n- 各項同乘以 30：\n  $$x : y : z = \\left(\\frac{1}{3} \\times 30\\right) : \\left(\\frac{1}{2} \\times 30\\right) : \\left(\\frac{3}{5} \\times 30\\right) = 10 : 15 : 18$$\n\n3. **結論**：$x : y : z = 10 : 15 : 18$。",
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
      "mistakeNote": "連比例求值標準 SOP：令 $x+3=4r$、$y-2=2r$、$z=3r$，將 $x, y, z$ 均以 $r$ 表示後代入總和條件求得 $r=5$。注意目標為 $x - y = (4r-3) - (2r+2) = 2r - 5 = 10 - 5 = 5$！",
      "stem": "若 $(x + 3) : (y - 2) : z = 4 : 2 : 3$，且 $x + y + z = 44$，則 $x - y = ?$",
      "answer": "5",
      "diagramUrl": "",
      "solution": "1. **設參數法解題**：\n- 由連比例式 $(x + 3) : (y - 2) : z = 4 : 2 : 3$，可設：\n  $$x + 3 = 4r \\implies x = 4r - 3$$\n  $$y - 2 = 2r \\implies y = 2r + 2$$\n  $$z = 3r \\quad (r \\ne 0)$$\n\n2. **代入總和條件解出參數 $r$**：\n- 已知 $x + y + z = 44$：\n  $$(4r - 3) + (2r + 2) + 3r = 44$$\\n  $$(4r + 2r + 3r) + (-3 + 2) = 44$$\n  $$9r - 1 = 44$$\n  $$9r = 45 \\implies r = 5$$\n\n3. **求目標式 $x - y$ 之值**：\n- 將 $x, y$ 表示為 $r$：\n  $$x - y = (4r - 3) - (2r + 2) = 4r - 3 - 2r - 2 = 2r - 5$$\n- 將 $r = 5$ 代入：\n  $$x - y = 2(5) - 5 = 10 - 5 = 5$$\n- *(驗算：$x = 4(5)-3 = 17$，$y = 2(5)+2 = 12$，$z = 3(5) = 15$；$17 + 12 + 15 = 44$ 符合！$x - y = 17 - 12 = 5$)*\n\n4. **結論**：$x - y = 5$。",
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
      "mistakeNote": "等高矩形面積比等於底邊長之比！乙與丙等寬同底，面積比 4:5 故 $DG:GC = 4:5$，總高為 $9y$；甲與 (乙+丙) 等高，故底邊 $AE:ED = 3:9 = 1:3$，總寬為 $4x$。周長 $2(4x+9y)=34$，限制長寬為整數只有 $x=2, y=1$ 一組正整數解！",
      "stem": "如圖，在長方形 $ABCD$ 中，$\\overline{EF}$、$\\overline{GH}$ 將長方形 $ABCD$ 分割成甲、乙、丙三個長方形區域，若甲、乙、丙的面積比為 $3 : 4 : 5$，且長方形 $ABCD$ 的周長為 34，甲、乙、丙的長、寬皆為整數，則甲、乙、丙的周長比為何？",
      "answer": "11 : 10 : 11",
      "diagramUrl": "assets/questions/q_math_rect_area_ratio_perimeter_006.png",
      "solution": "1. **由面積比求出長寬線段比值**：\n- 設甲面積為 $3r$，乙面積為 $4r$，丙面積為 $5r$（$r > 0$）。\n- **觀察乙與丙**：共用橫向邊長 $\\overline{ED}$（即 $\\overline{HG}$），面積比等於垂直高之比：\n  $$\\overline{DG} : \\overline{GC} = 4r : 5r = 4 : 5$$\n  令 $\\overline{DG} = 4y$、$\\overline{GC} = 5y$，則大長方形垂直高 $\\overline{CD} = \\overline{AB} = 4y + 5y = 9y$。\n- **觀察甲與 (乙+丙)**：\n  甲的高為 $\\overline{AB} = 9y$；(乙+丙) 構成的組合長方形高亦為 $9y$。\n  兩者高相同，面積比等於橫向寬度比：\n  $$\\overline{AE} : \\overline{ED} = \\text{面積(甲)} : \\text{面積(乙+丙)} = 3r : (4r + 5r) = 3 : 9 = 1 : 3$$\n  令 $\\overline{AE} = x$、$\\overline{ED} = 3x$，則大長方形水平長度 $\\overline{AD} = \\overline{BC} = x + 3x = 4x$。\n\n2. **利用周長條件與整數性質求解**：\n- 長方形 $ABCD$ 周長為 34：\n  $$2 \\times (\\overline{AD} + \\overline{CD}) = 34 \\implies 4x + 9y = 17$$\n- 題目註明「甲、乙、丙的長、寬皆為整數」，故 $x, y$ 必為正整數（$x, y \\in \\mathbb{N}$）：\n  - 若 $y = 1$：$4x + 9(1) = 17 \\implies 4x = 8 \\implies x = 2$（符合正整數解！）\n  - 若 $y \\ge 2$：$9y \\ge 18 > 17$，無正數解。\n  因此唯一整數解為：$x = 2, \\; y = 1$。\n\n3. **計算各區域尺寸與周長比**：\n- 各線段具體長度：\n  $\\overline{AE} = 2$、$\\overline{ED} = 6$、$\\overline{DG} = 4$、$\\overline{GC} = 5$、$\\overline{AB} = 9$。\n- **長方形甲**：寬 2，長 9 $\\implies$ 周長 $= 2 \\times (2 + 9) = 22$\n- **長方形乙**：長 6，寬 4 $\\implies$ 周長 $= 2 \\times (6 + 4) = 20$\n- **長方形丙**：長 6，寬 5 $\\implies$ 周長 $= 2 \\times (6 + 5) = 22$\n- **周長比**：\n  $$\\text{甲周長} : \\text{乙周長} : \\text{丙周長} = 22 : 20 : 22 = 11 : 10 : 11$$\n\n4. **結論**：甲、乙、丙的周長比為 **11 : 10 : 11**。",
      "errorCount": 1,
      "ebbinghausStage": 1,
      "consecutiveMastered": 0,
      "isArchived": false,
      "nextReviewDate": "2026-09-07"
  },
  {
      "id": "q_sci_bio_organism_hierarchy_001",
      "examPeriod": "一段",
      "subject": "自然/生物",
      "errorReason": "觀念不懂",
      "concept": "生物體的個體組成層次差異（動物 vs. 植物）",
      "uploadDate": "2026-09-07",
      "mondayDate": "2026-09-07",
      "mondayDates": [
          "2026-09-07"
      ],
      "weekLabel": "2026-09-07 (最新週次)",
      "isGuessedOrUnstable": true,
      "mistakeNote": "動植物個體組成層次對比：動物為「細胞 → 組織 → 器官 → 器官系統 → 個體」；植物為「細胞 → 組織 → 器官 → 個體」，植物缺少「器官系統」層次，因此植物的組成層次比動物少一個層級！",
      "stem": "關於章魚和松樹在個體組成層次的差異，下列何者正確？\n\n○ (A) 兩者沒有差異\n○ (B) 章魚沒有器官系統層次\n○ (C) 松樹僅有一種器官系統\n○ (D) 松樹的層次較少",
      "answer": "(D) 松樹的層次較少",
      "diagramUrl": "",
      "solution": "1. **動植物個體組成層次的核心差異**：\n- **動物（章魚為軟體動物）**：\n  具有完整的五大組成層次：\n  $$\\text{細胞} \\rightarrow \\text{組織} \\rightarrow \\text{器官} \\rightarrow \\text{器官系統} \\rightarrow \\text{個體}$$\n  （例如消化系統、循環系統、神經系統等）。\n- **植物（松樹為裸子植物）**：\n  僅有四大組成層次：\n  $$\\text{細胞} \\rightarrow \\text{組織} \\rightarrow \\text{器官} \\rightarrow \\text{個體}$$\n  **植物「沒有」器官系統層次**！植物的器官直接分工協調構成個體（營養器官：根、莖、葉；繁殖器官：毬果/花、果實、種子）。\n\n2. **選項逐一剖析**：\n- **(A) 錯誤**：兩者層次不同，動物多了器官系統。\n- **(B) 錯誤**：章魚為動物，具有器官系統層次。\n- **(C) 錯誤**：松樹為植物，完全沒有器官系統層次，而非僅有一種。\n- **(D) 正確**：松樹（植物）比章魚（動物）少了器官系統層次，故松樹的層次較少。\n\n3. **結論**：正確答案選 **(D)**。",
      "errorCount": 1,
      "ebbinghausStage": 1,
      "consecutiveMastered": 0,
      "isArchived": false,
      "nextReviewDate": "2026-09-07"
  },
  {
      "id": "q_sci_phy_position_description_002",
      "examPeriod": "一段",
      "subject": "自然/理化",
      "errorReason": "觀念不懂",
      "concept": "物體位置之精確描述三要素（參考點、方向、距離）",
      "uploadDate": "2026-09-07",
      "mondayDate": "2026-09-07",
      "mondayDates": [
          "2026-09-07"
      ],
      "weekLabel": "2026-09-07 (最新週次)",
      "isGuessedOrUnstable": true,
      "mistakeNote": "物理學中描述位置必須完整具備「三要素」：基準點（參考點）、方向、距離，三者缺一不可！例如「小威在小東（基準點）右邊（方向）50公尺處（距離）」即為完整描述！",
      "stem": "下列何者對位置的描述最正確？\n\n○ (A) 小惠位於小強的東方\n○ (B) 小強距離小東 100 公尺處\n○ (C) 小東在北方 150 公尺\n○ (D) 小威在小東右邊 50 公尺處",
      "answer": "(D) 小威在小東右邊 50 公尺處",
      "diagramUrl": "",
      "solution": "1. **描述空間位置的三要素**：\n物理學中要精確標定一個物體的位置，必須同時明確交代：\n- **基準點（參考點）**：以何處為原點。\n- **方向**：朝向何方（如東、西、南、北、左、右、前、後等）。\n- **距離**：相隔多遠（具有量值與單位）。\n\n2. **檢視各選項完整性**：\n- **(A) 錯誤**：基準點為小強，方向為東方，但**缺乏距離**。\n- **(B) 錯誤**：基準點為小東，距離為 100 公尺，但**缺乏方向**。\n- **(C) 錯誤**：方向為北方，距離為 150 公尺，但**缺乏基準點**（從何處向北？）。\n- **(D) 正確**：基準點為「小東」，方向為「右邊」，距離為「50 公尺」，三要素完整俱全！\n\n3. **結論**：正確答案選 **(D)**。",
      "errorCount": 1,
      "ebbinghausStage": 1,
      "consecutiveMastered": 0,
      "isArchived": false,
      "nextReviewDate": "2026-09-07"
  },
  {
      "id": "q_sci_phy_round_trip_average_speed_003",
      "examPeriod": "一段",
      "subject": "自然/理化",
      "errorReason": "計算錯誤",
      "concept": "往返平均速率之計算（總路徑長除以總時間）",
      "uploadDate": "2026-09-07",
      "mondayDate": "2026-09-07",
      "mondayDates": [
          "2026-09-07"
      ],
      "weekLabel": "2026-09-07 (最新週次)",
      "isGuessedOrUnstable": true,
      "mistakeNote": "平均速率絕對不是速度相加除以 2（10+30）/2 = 20 是大陷阱！平均速率定義是「總路徑長 / 總時間」！因為上山速度慢、花費時間較多，整體平均速率會被拉低為 15 公里/小時！",
      "stem": "小光騎自行車上山，若上山時平均速率為 10 公里／小時，下山時平均速率為 30 公里／小時，則往返一趟的平均速率為下列何者？\n\n○ (A) 0 公里／小時\n○ (B) 10 公里／小時\n○ (C) 15 公里／小時\n○ (D) 20 公里／小時",
      "answer": "(C) 15 公里／小時",
      "diagramUrl": "",
      "solution": "1. **平均速率核心定義**：\n$$\\text{平均速率} = \\frac{\\text{總路徑長}}{\\text{總時間}}$$\n*(切記：平均速率「不可」直接將上山與下山速率相加除以 2，因為兩段路程所花費的時間不相等！)*\n\n2. **嚴謹計算步驟**：\n- 設單程（上山）路徑長為 $S$ 公里，則往返總路徑長為 $2S$ 公里。\n- **上山所花時間**：$t_{\\text{上}} = \\frac{S}{10} \\text{ 小時}$。\n- **下山所花時間**：$t_{\\text{下}} = \\frac{S}{30} \\text{ 小時}$。\n- **總時間**：\n  $$t_{\\text{總}} = \\frac{S}{10} + \\frac{S}{30} = \\frac{3S + S}{30} = \\frac{4S}{30} = \\frac{2S}{15} \\text{ 小時}$$\n- **往返平均速率**：\n  $$v_{\\text{平均}} = \\frac{2S}{t_{\\text{總}}} = \\frac{2S}{\\frac{2S}{15}} = 2S \\times \\frac{15}{2S} = 15 \\text{ (公里／小時)}$$\n\n3. **延伸調和平均數速算公式**：\n- 若等距離往返速率分別為 $v_1$ 與 $v_2$，則往返平均速率為兩者的調和平均數：\n  $$v = \\frac{2v_1 v_2}{v_1 + v_2} = \\frac{2 \\times 10 \\times 30}{10 + 30} = \\frac{600}{40} = 15 \\text{ (公里／小時)}$$\n\n4. **結論**：正確答案選 **(C)**。",
      "errorCount": 1,
      "ebbinghausStage": 1,
      "consecutiveMastered": 0,
      "isArchived": false,
      "nextReviewDate": "2026-09-07"
  },
  {
      "id": "q_sci_phy_car_vt_displacement_004",
      "examPeriod": "一段",
      "subject": "自然/理化",
      "errorReason": "觀念不懂",
      "concept": "等加速度運動 v-t 圖與梯形面積求位移",
      "uploadDate": "2026-09-07",
      "mondayDate": "2026-09-07",
      "mondayDates": [
          "2026-09-07"
      ],
      "weekLabel": "2026-09-07 (最新週次)",
      "isGuessedOrUnstable": true,
      "mistakeNote": "v-t 圖之斜率代表「加速度 a」，曲線下方所圍面積代表「位移」！第 2 秒至第 4 秒之位移對應高為 2 秒的梯形面積：[(v₂ + v₄) × Δt] / 2 = [(6 + 12) × 2] / 2 = 18m！",
      "stem": "如圖為甲車的速度（$v$）與時間（$t$）關係圖，試問第 2 秒到第 4 秒間甲車移動的位移大小為下列何者？\n\n○ (A) 75m\n○ (B) 37.5m\n○ (C) 36m\n○ (D) 18m",
      "answer": "(D) 18m",
      "diagramUrl": "assets/questions/q_sci_phy_car_vt_displacement_007.png",
      "solution": "1. **求甲車之加速度 $a$**：\n- 由 $v-t$ 圖可知，直線通過原點 $(0, 0)$，在 $t = 5\\text{ s}$ 時速度達到 $v = 15\\text{ m/s}$。\n- 甲車做等加速度直線運動，其加速度為：\n  $$a = \\frac{\\Delta v}{\\Delta t} = \\frac{15 - 0}{5 - 0} = 3 \\text{ m/s}^2$$\n\n2. **計算第 2 秒與第 4 秒的瞬時速度**：\n- 由等加速度速度公式 $v = v_0 + at$：\n  $$v_2 = 0 + 3 \\times 2 = 6 \\text{ m/s}$$\n  $$v_4 = 0 + 3 \\times 4 = 12 \\text{ m/s}$$\n\n3. **利用 $v-t$ 圖梯形面積求位移**：\n- $v-t$ 圖中，曲線與時間軸所圍成的面積即代表「位移大小」。\n- 第 2 秒到第 4 秒（時間間隔 $\\Delta t = 4 - 2 = 2\\text{ s}$）所圍成的圖形為一梯形：\n  - 上底（初速）$= v_2 = 6\\text{ m/s}$\n  - 下底（末速）$= v_4 = 12\\text{ m/s}$\n  - 高（時間差）$= \\Delta t = 2\\text{ s}$\n- 計算梯形面積：\n  $$\\text{位移} = \\frac{(v_2 + v_4) \\times \\Delta t}{2} = \\frac{(6 + 12) \\times 2}{2} = 18 \\text{ m}$$\n\n4. **結論**：第 2 秒到第 4 秒間甲車移動的位移為 **18m**，正確答案選 **(D)**。",
      "errorCount": 1,
      "ebbinghausStage": 1,
      "consecutiveMastered": 0,
      "isArchived": false,
      "nextReviewDate": "2026-09-07"
  },
  {
      "id": "q_math_ratio_fraction_param_linear_007",
      "examPeriod": "一段",
      "subject": "數學",
      "errorReason": "計算錯誤",
      "concept": "連比例式之分數型參數 r 假設法與三元一次式求值",
      "uploadDate": "2026-09-07",
      "mondayDate": "2026-09-07",
      "mondayDates": [
          "2026-09-07"
      ],
      "weekLabel": "2026-09-07 (最新週次)",
      "isGuessedOrUnstable": true,
      "mistakeNote": "連比連等式令參數 $r$：設 $\\frac{x+3}{2} = \\frac{y-1}{4} = \\frac{z+1}{5} = r$，得 $x=2r-3, y=4r+1, z=5r-1$。代入 $2z-x-y=180$ 時去括號務必變號：$2(5r-1) - (2r-3) - (4r+1) = 4r = 180 \\implies r=45$！最後求 $x+y+z = 11r - 3 = 492$！",
      "stem": "若 $\\frac{x+3}{2} = \\frac{y-1}{4} = \\frac{z+1}{5}$，且 $2z - x - y = 180$，則 $x + y + z = ?$\n\n○ (A) 485\n○ (B) 490\n○ (C) 492\n○ (D) 495",
      "answer": "(C) 492",
      "diagramUrl": "",
      "solution": "1. **設參數 $r$ 解題**：\n- 令分數連等式為 $r$（$r \\ne 0$）：\n  $$\\frac{x+3}{2} = \\frac{y-1}{4} = \\frac{z+1}{5} = r$$\n- 分別將 $x, y, z$ 用 $r$ 表示：\n  $$x + 3 = 2r \\implies x = 2r - 3$$\n  $$y - 1 = 4r \\implies y = 4r + 1$$\n  $$z + 1 = 5r \\implies z = 5r - 1$$\n\n2. **代入條件式 $2z - x - y = 180$ 解 $r$**：\n- 將 $x, y, z$ 的代數式代入，注意括號去負號：\n  $$2(5r - 1) - (2r - 3) - (4r + 1) = 180$$\n  $$(10r - 2) - 2r + 3 - 4r - 1 = 180$$\n  $$(10r - 2r - 4r) + (-2 + 3 - 1) = 180$$\n  $$4r + 0 = 180 \\implies 4r = 180 \\implies r = 45$$\n\n3. **求目標式 $x + y + z$ 之值**：\n- 先化簡代數總和式：\n  $$x + y + z = (2r - 3) + (4r + 1) + (5r - 1) = 11r - 3$$\n- 將 $r = 45$ 代入計算：\n  $$x + y + z = 11 \\times 45 - 3 = 495 - 3 = 492$$\n- *(驗算：$x = 2(45)-3 = 87$，$y = 4(45)+1 = 181$，$z = 5(45)-1 = 224$；$2z - x - y = 448 - 87 - 181 = 180$ 符合！$87 + 181 + 224 = 492$ 符合！)*\n\n4. **結論**：正確答案選 **(C)**。",
      "errorCount": 1,
      "ebbinghausStage": 1,
      "consecutiveMastered": 0,
      "isArchived": false,
      "nextReviewDate": "2026-09-07"
  },
  {
      "id": "q_math_ratio_partnership_profit_weighted_008",
      "examPeriod": "一段",
      "subject": "數學",
      "errorReason": "審題不清",
      "concept": "正比與乘積連比例應用：合夥投資紅利按「金額 × 期間」加權分配",
      "uploadDate": "2026-09-07",
      "mondayDate": "2026-09-07",
      "mondayDates": [
          "2026-09-07"
      ],
      "weekLabel": "2026-09-07 (最新週次)",
      "isGuessedOrUnstable": true,
      "mistakeNote": "合夥紅利依「投資金額 × 投資期間」之乘積成正比分配！紅利比為 $(7 \\times 5) : 5x : (11 \\times 11) = 35 : 5x : 121$。由乙分得 50000 解得比值參數 $x=8$。注意題目最後問的是「乙的投資期間為多少個月」，總期間 2 年為 24 個月，乙的月份為 $24 \\times \\frac{8}{5+8+11} = 8$ 個月！",
      "stem": "若甲、乙、丙三人合夥投資，期末的紅利為 245000 元，投資期間為兩年，協議期末的紅利分配按投資金額和投資期間的乘積來分配，若甲、乙、丙在此期間的投資金額比為 $7 : 5 : 11$，投資期間比為 $5 : x : 11$，若乙在兩年後可分配紅利 50000 元，則乙的投資期間為多少個月？\n\n○ (A) 8\n○ (B) 4\n○ (C) 3\n○ (D) 2.5",
      "answer": "(A) 8",
      "diagramUrl": "",
      "solution": "1. **建立紅利加權分配連比例式**：\n- 題目約定：紅利分配按「投資金額 $\\times$ 投資期間」的乘積來分配。\n- 甲、乙、丙之分配紅利比為：\n  $$\\text{紅利比} = (7 \\times 5) : (5 \\times x) : (11 \\times 11) = 35 : 5x : 121$$\n- 三人分配的紅利總份數為：\n  $$35 + 5x + 121 = 156 + 5x$$\n\n2. **利用乙分配到的紅利求出 $x$**：\n- 總紅利為 245000 元，乙分得 50000 元：\n  $$245000 \\times \\frac{5x}{35 + 5x + 121} = 50000$$\n- 兩邊同除以 5000：\n  $$49 \\times \\frac{5x}{156 + 5x} = 10$$\n  $$49 \\times 5x = 10 \\times (156 + 5x)$$\n  $$245x = 1560 + 50x$$\n  $$195x = 1560 \\implies x = \\frac{1560}{195} = 8$$\n\n3. **計算乙的投資期間（以「月」為單位）**：\n- 投資總期間為「兩年」，即 $2 \\times 12 = 24 \\text{ 個月}$。\n- 依三人投資期間比 $5 : x : 11 = 5 : 8 : 11$，期間總比值為：\n  $$5 + 8 + 11 = 24$$\n- 故乙的投資期間佔其中的 $\\frac{8}{24}$：\n  $$\\text{乙的投資月數} = 24 \\times \\frac{8}{5 + 8 + 11} = 24 \\times \\frac{8}{24} = 8 \\text{ (個月)}$$\n\n4. **結論**：乙的投資期間為 **8 個月**，正確答案選 **(A)**。",
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
      const idx = this.questions.findIndex(q => q && q.id === seed.id);
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

    // Strictly purge questions before 2026-09-07 as requested by user
    if (Array.isArray(this.questions)) {
      this.questions = this.questions.filter(q => q && (q.mondayDate === '2026-09-07' || (Array.isArray(q.mondayDates) && q.mondayDates.includes('2026-09-07'))));
    }

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
