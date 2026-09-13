/**
 * Smart Wrong Question Review System - Data & LocalStorage Management
 * Manages wrong questions, Ebbinghaus repetition states, tree structure, seed datasets.
 */

const STORAGE_KEY = 'miley_wrong_questions_v83';

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
    "solution": "1. **重心性質**：重心 $G$ 將面積三等分，$\\triangle ABG = \\frac{1}{3} \\triangle ABC$。\n2. **內心性質**：各小三角形面積與底邊長成正比，周長 $= 4+5+6 = 15$：\n   $$\\triangle ABI = \\frac{4}{15} \\triangle ABC$$\n3. **面積比**：\n   $$\\triangle ABG : \\triangle ABI = \\frac{1}{3} : \\frac{4}{15} = 5 : 4$$\n故選 **(A)**。",
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
    "solution": "1. **當選門檻公式**：得票數 $x > \\frac{\\text{總有效票數}}{\\text{應選名額} + 1}$。\n2. 應選 2 人，平分票數為 $\\frac{12300}{2 + 1} = 4100$ 票。\n3. 得票數須嚴格大於 4100 票，故至少需 **4101 票**，選 **(B)**。",
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
    "solution": "○ 算式步驟\n\n1. 計算 49 個偶數的總和：\n   這 49 個偶數為 $2, 4, 6, \\dots, 98$，為等差數列。\n   $$\\text{總和} = \\frac{(2 + 98) \\times 49}{2} = 50 \\times 49 = 2450$$\n\n2. 計算取出的 48 個數之總和：\n   $$\\text{取出的總和} = 48 \\times 49\\frac{5}{12} = 48 \\times \\left(49 + \\frac{5}{12}\\right)$$\n   $$= 48 \\times 49 + 48 \\times \\frac{5}{12} = 2352 + 20 = 2372$$\n\n3. 求未取的數字：\n   $$\\text{未取的數} = 2450 - 2372 = 78$$\n\n○ 速算小技巧\n   將兩式相減時，直接利用分配律提出 49：\n   $$\\text{未取的數} = 50 \\times 49 - 48 \\times \\left(49 + \\frac{5}{12}\\right)$$\n   $$= (50 - 48) \\times 49 - 48 \\times \\frac{5}{12} = 98 - 20 = 78$$\n\n正確選項為 (D)。",
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
    "solution": "○ 詳細解題步驟：\n\n1. **利用比例常數設式**：\n   設 $\\frac{1}{x} = 3k$、$\\frac{2}{y} = 4k$、$\\frac{3}{z} = 5k$（其中 $k \\neq 0$）。\n\n2. **分別求出 $x$、$y$、$z$**：\n   - 求 $x$：由 $\\frac{1}{x} = 3k \\implies x = \\frac{1}{3k}$\n\n   - 求 $y$：由 $\\frac{2}{y} = 4k \\implies y = \\frac{2}{4k} = \\frac{1}{2k}$\n\n   - 求 $z$：由 $\\frac{3}{z} = 5k \\implies z = \\frac{3}{5k}$\n\n3. **求連比並化為最簡整數比**：\n   $$x : y : z = \\frac{1}{3k} : \\frac{1}{2k} : \\frac{3}{5k} = \\frac{1}{3} : \\frac{1}{2} : \\frac{3}{5}$$\n   各項同乘以分母最小公倍數 $30$：\n   $$x : y : z = \\left(\\frac{1}{3} \\times 30\\right) : \\left(\\frac{1}{2} \\times 30\\right) : \\left(\\frac{3}{5} \\times 30\\right) = 10 : 15 : 18$$\n\n標準答案為 $10 : 15 : 18$。",
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
    "solution": "○ 詳細解題步驟：\n\n1. **依比例設參數 $r$**：\n   依題意 $(x + 3) : (y - 2) : z = 4 : 2 : 3$，令：\n   - $x + 3 = 4r \\implies x = 4r - 3$\n\n   - $y - 2 = 2r \\implies y = 2r + 2$\n\n   - $z = 3r$\n\n   （其中 $r \\neq 0$）\n\n2. **代入總和條件求 $r$**：\n   已知 $x + y + z = 44$，將各項代入：\n   $$(4r - 3) + (2r + 2) + 3r = 44$$\n   $$9r - 1 = 44 \\implies 9r = 45 \\implies r = 5$$\n\n3. **求出 $x - y$ 之值**：\n   - 代入 $x, y$ 的表示式：\n     $$x - y = (4r - 3) - (2r + 2) = 2r - 5$$\n   - 代入 $r = 5$：\n     $$x - y = 2 \\times 5 - 5 = 10 - 5 = 5$$\n   - （亦可分別求出各數值：$x = 17$、$y = 12$、$z = 15$，得 $x - y = 17 - 12 = 5$）\n\n標準答案為 **5**。",
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
    "solution": "這題的核心概念就是利用「面積比」推「長寬比」，再湊出整數邊長：\n\n○ 第一步：看邊長比例\n- 乙和丙共用底邊，面積比 4 : 5 ⟹ 高的比為 4 : 5（整塊大長方形的高共 9 份）。\n- 甲和（乙+丙）高相同，面積比為 3 : (4 + 5) = 3 : 9 = 1 : 3 ⟹ 底邊長比為 1 : 3（整塊大長方形的底共 4 份）。\n\n○ 第二步：求出實際數字\n- 大長方形周長 34 ⟹ 長加寬 = 17。\n- 也就是：$9 \\times (\\text{高的每份}) + 4 \\times (\\text{底的每份}) = 17$。\n- 因為邊長都是整數，只有一種組合符合：\n  * 高的每份是 1（大長方形高 = 9）\n  * 底的每份是 2（大長方形底 = 8）\n\n○ 第三步：算各自周長\n- 甲（寬 2、高 9）：周長 $= (2 + 9) \\times 2 = 22$\n- 乙（底 6、高 4）：周長 $= (6 + 4) \\times 2 = 20$\n- 丙（底 6、高 5）：周長 $= (6 + 5) \\times 2 = 22$\n\n周長比為 $22 : 20 : 22 = 11 : 10 : 11$。",
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
    "solution": "○ 詳細解析：\n\n1. **生物體之個體組成層次對比**：\n   - **動物（章魚）**：\n     細胞 $\\to$ 組織 $\\to$ 器官 $\\to$ **器官系統** $\\to$ 個體（共 5 個層次）。\n   - **植物（松樹）**：\n     細胞 $\\to$ 組織 $\\to$ 器官 $\\to$ 個體（共 4 個層次，**植物缺少「器官系統」層次**）。\n\n2. **選項分析**：\n   - (A) 兩者有層次上的顯著差異。\n   - (B) 章魚為軟體動物，具有循環系統、神經系統等器官系統。\n   - (C) 植物體完全沒有器官系統層次。\n   - (D) 松樹缺少器官系統，層次較章魚少一個層級，為正解。\n\n正確答案選 **(D)**。",
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
    "solution": "○ 詳細解析：\n\n1. **描述物體位置的三大必備要素**：\n   - ① **參考點（基準點）**：以何處為位置起點。\n   - ② **方向**：相對於參考點的方位（如東、西、左、右）。\n   - ③ **距離**：距離參考點多遠（附帶明確單位）。\n   三要素缺一不可，才能精確定位物體。\n\n2. **逐一檢驗選項**：\n   - **(A)「小惠位於小強的東方」**：有參考點（小強）、方向（東方），但**缺少距離**。\n   - **(B)「小強距離小東 100 公尺處」**：有參考點（小東）、距離（100 公尺），但**缺少方向**。\n   - **(C)「小東在北方 150 公尺」**：有方向（北方）、距離（150 公尺），但**缺少參考點**（以誰為基準？）。\n   - **(D)「小威在小東右邊 50 公尺處」**：包含參考點（小東）、方向（右邊）、距離（50 公尺），三要素最齊全完整。\n\n正確答案選 **(D)**。",
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
    "solution": "○ 詳細解題步驟：\n\n1. **核心定義**：\n   $$\\text{平均速率} = \\frac{\\text{總路徑長}}{\\text{總時間}}$$\n   （注意：平均速率**不能**直接將兩速度相加除以 2，因為上山時間與下山時間並不相同！）\n\n2. **設未知數並計算時間**：\n   - 設單程山路長度為 $S$ 公里，往返總路程為 $2S$ 公里。\n   - 上山所耗時間：$t_1 = \\frac{S}{10}$ 小時。\n   - 下山所耗時間：$t_2 = \\frac{S}{30}$ 小時。\n   - 往返總時間：\n     $$t = t_1 + t_2 = \\frac{S}{10} + \\frac{S}{30} = \\frac{3S + S}{30} = \\frac{4S}{30} = \\frac{2S}{15} \\text{ 小時}$$\n\n3. **計算全程平均速率**：\n   $$v = \\frac{2S}{\\frac{2S}{15}} = 2S \\times \\frac{15}{2S} = \\mathbf{15} \\text{ 公里／小時}$$\n\n正確答案選 **(C)**。",
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
    "solution": "○ 詳細解題步驟：\n\n1. **$v-t$ 圖的核心物理意義**：\n   - 曲線的斜率代表**加速度 $a$**。\n   - 曲線與時間軸所圍成的**面積即為位移大小**。\n\n2. **求甲車的運動關係式**：\n   - 由圖可知直線通過原點 $(0, 0)$，在第 5 秒時速度達到 $15 \\text{ m/s}$。\n   - 加速度：$a = \\frac{15 - 0}{5} = 3 \\text{ m/s}^2$。\n   - 速度方程式：$v(t) = 3t$。\n\n3. **求第 2 秒與第 4 秒之瞬時速度**：\n   - 第 2 秒時速度：$v_2 = 3 \\times 2 = 6 \\text{ m/s}$\n   - 第 4 秒時速度：$v_4 = 3 \\times 4 = 12 \\text{ m/s}$\n\n4. **計算第 2 秒至第 4 秒間的位移（梯形面積）**：\n   - 時間間隔：$\\Delta t = 4 - 2 = 2 \\text{ 秒}$\n   - 位移：\n     $$\\text{位移} = \\frac{(v_2 + v_4) \\times \\Delta t}{2} = \\frac{(6 + 12) \\times 2}{2} = \\mathbf{18} \\text{ m}$$\n\n正確答案選 **(D)**。",
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
    "solution": "這題用「設參數 $k$」來解最不容易出錯：\n\n○ **第一步：設參數表示 $x, y, z$**\n  令 $\\frac{x+3}{2} = \\frac{y-1}{4} = \\frac{z+1}{5} = k$，則：\n  - $x = 2k - 3$\n  - $y = 4k + 1$\n  - $z = 5k - 1$\n\n○ **第二步：代入已知條件求 $k$**\n  已知 $2z - x - y = 180$：\n  $$2(5k - 1) - (2k - 3) - (4k + 1) = 180$$\n\n  展開括號（特別注意負號變號）：\n  $$(10k - 2) - 2k + 3 - 4k - 1 = 180$$\n  $$(10k - 2k - 4k) + (-2 + 3 - 1) = 180$$\n  $$4k + 0 = 180$$\n  $$k = 45$$\n\n○ **第三步：計算 $x + y + z$**\n  將 $x, y, z$ 加起來：\n  $$x + y + z = (2k - 3) + (4k + 1) + (5k - 1)$$\n  $$= (2k + 4k + 5k) + (-3 + 1 - 1)$$\n  $$= 11k - 3$$\n\n  代入 $k = 45$：\n  $$x + y + z = 11 \\times 45 - 3 = 495 - 3 = \\mathbf{492}$$\n\n正確答案為 **(C)**。\n\n> 💡 **易錯點提醒**：在算 $11k - 3$ 時，如果只算了 $11 \\times 45 = 495$，或是常數項移項時正負號弄錯，就很容易選到 490 或 495 喔！",
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
    "solution": "○ 詳細解題步驟：\n\n1. **計算合夥紅利分配權重**：\n   - 協議紅利按「投資金額 $\\times$ 投資期間」之乘積成正比分配。\n   - 投資金額比：甲 : 乙 : 丙 $= 7 : 5 : 11$\n   - 投資期間比：甲 : 乙 : 丙 $= 5 : x : 11$\n   - 各人分配比例權重：\n     - 甲：$7 \\times 5 = 35$\n     - 乙：$5 \\times x = 5x$\n     - 丙：$11 \\times 11 = 121$\n   - 總權重份數：$35 + 5x + 121 = 156 + 5x$\n\n2. **列方程式求 $x$**：\n   - 總紅利為 245000 元，乙分得 50000 元：\n     $$\\frac{5x}{156 + 5x} = \\frac{50000}{245000} = \\frac{10}{49}$$\n   - 交叉相乘：\n     $$49 \\times 5x = 10 \\times (156 + 5x)$$\n     $$245x = 1560 + 50x$$\n     $$195x = 1560 \\implies x = 8$$\n\n3. **求乙的投資期間（月份）**：\n   - 投資總期間為 2 年，即 $2 \\times 12 = 24$ 個月。\n   - 期間比為 $5 : x : 11 = 5 : 8 : 11$，總份數 $= 5 + 8 + 11 = 24$ 份。\n   - 每份剛好對應 $24 \\div 24 = 1$ 個月。\n   - 因此乙的投資期間為 $8 \\times 1 = \\mathbf{8}$ 個月。\n\n正確答案選 **(A)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
  },
  {
    "id": "q_chinese_applied_recruitment_notice_001",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "審題不清",
    "concept": "應用文閱讀理解：徵才啟事之條件篩選與關鍵詞義（親洽）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "審題關鍵詞：「親洽」！「親」為「親自」，「洽」為「接洽、商談」。「親洽」指有意應徵者必須本人親自前往面試或辦理，不能委託他人代為報名，故選 (B) 不可委託報名！注意「男生須役畢」並非限定只招男性，女性亦具應徵資格；「相關科系」指財經商管相關，非外文系；「需有經驗」為必備門檻！",
    "stem": "有關如圖的啟事，下列敘述何者正確？\n\n○ (A) 美麗是女性，不具應徵資格\n○ (B) 不可委託報名\n○ (C) 英文學系畢業者，有資格應徵\n○ (D) 不論有無經驗，只要符合條件，都可能錄用",
    "answer": "(B) 不可委託報名",
    "diagramUrl": "assets/questions/q_chinese_applied_recruitment_notice_001.png",
    "solution": "○ 詳細題目解析：\n\n依據【徵才啟事】內容逐條比對選項：\n\n- **(A) 錯誤**：啟事載明「男生須役畢」，意指男性應徵者必須服完兵役，並未排除女性，故女性亦具應徵資格。\n- **(B) 正確（正解）**：啟事註明「意者請攜履歷及自傳**親洽**」。「親洽」指必須**本人親自前往面試洽談**，不可委託他人代為報名。\n- **(C) 錯誤**：啟事要求「大學相關科系畢業（如財金、經濟等），需有經驗」；「具外文能力者」僅為**優先錄取之加分條件**，非指外文系畢業即可應徵。\n- **(D) 錯誤**：啟事明訂「需有經驗」，無經驗者不予錄用。\n\n正確答案選 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
  },
  {
    "id": "q_chinese_compound_words_qian_mo_002",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "詞彙結構辨析：合義複詞（阡陌）vs. 聯綿詞（邂逅、蟋蟀、囫圇）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "「合義複詞」由兩個具獨立意義的單詞組合而成，拆開後各自成詞且意思不同！「阡」指東西向的田間小路，「陌」指南北向的小路，合稱「阡陌」指田間小路或田界！而 (乙)邂逅、(丙)蟋蟀、(丁)囫圇 均為「聯綿詞」，必須雙字合為一個語素，拆開後各字沒有個別獨立意義或意義與原詞無關，不可分割！",
    "stem": "「自從那天在(甲)阡陌交織的田中，偶然(乙)邂逅一群悠遊於朦朧夜色的美麗螢火蟲，及引吭高歌的(丙)蟋蟀。讀書一向(丁)囫圇吞棗的他，開始認真的閱讀相關資料，想要更了解那群提燈的小精靈與夜間音樂家。」\n上文中畫線處的詞，何者拆開後仍各自成詞，且意義不同？【91年第1次基測】\n\n○ (A) (甲)\n○ (B) (乙)\n○ (C) (丙)\n○ (D) (丁)",
    "answer": "(A) (甲)",
    "diagramUrl": "",
    "solution": "- **(A) 合義複詞（正解）**：「阡」（南北田埂）＋「陌」（東西田埂），兩字皆有獨立意義，選 **(A)**。\n- **(B)(C)(D) 聯綿詞**：「邂逅」、「蟋蟀」、「囫圇」單字不可拆開解釋，純為雙音節記錄聲音。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
  },
  {
    "id": "q_chinese_phonetic_loan_interchangeable_003",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "通假字與古今字義辨析（錯/措、襟/衿、蕃/繁 vs. 咨/茲）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "注意通假字與嘆詞的分辨！「咨」爾多士的「咨」（ㄗ）是「嘆詞」，相當於「啊、嗟」，用以呼告眾人；而「茲」（ㄗ）是「指示代詞」，意思是「此、這」（如念茲在茲），兩者詞性與字義截然不同，替換後意思完全改變！其餘三項皆為古文常見通假字：錯通「措」（安放）、襟通「衿」（衣服的胸襟領口）、蕃通「繁」（繁多）。",
    "stem": "下列文句「　」中的字，何者替換後意義改變？【92年第2次基測】\n\n○ (A) 民安所「錯」其手足——措\n○ (B) 「咨」爾多士，為民前鋒——茲\n○ (C) 夜夜夜半啼，聞者淚沾「襟」——衿\n○ (D) 水陸草木之花，可愛者甚「蕃」——繁",
    "answer": "(B) 「咨」爾多士，為民前鋒——茲",
    "diagramUrl": "",
    "solution": "○ 詳細解析：\n\n題幹要求找出替換後**意義改變**（非通假字）的選項：\n\n- **(A) 民安所「錯」其手足 ➔ 措（意義不變）**：\n  出自《史記·張釋之列傳》。「錯」通「措」，安放、放置之意。\n\n- **(B) 「咨」爾多士，為民前鋒 ➔ 茲（意義改變，正解）**：\n  - 「咨」是**嘆詞**，相當於「嗟、啊」，用以呼告眾人。\n  - 「茲」是**指示代名詞**，意為「此、這」（如念茲在茲）。\n  兩者字義與詞性截然不同，替換後意思完全改變，故選 **(B)**。\n\n- **(C) 夜夜夜半啼，聞者淚沾「襟」 ➔ 衿（意義不變）**：\n  出自白居易〈慈烏夜啼〉。「襟」通「衿」，皆指衣服胸前的交領部位。\n\n- **(D) 水陸草木之花，可愛者甚「蕃」 ➔ 繁（意義不變）**：\n  出自周敦頤〈愛蓮說〉。「蕃」通「繁」，繁多之意。\n\n正確答案選 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
  },
  {
    "id": "q_chinese_rhetoric_pun_homophone_004",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "修辭手法辨析：諧音雙關（楓華萬千 ↔ 風華萬千）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "「諧音雙關」口訣：「借字取音，一語雙關」！題目例子「搖蓮」取「遙憐」之音，為著名樂府詩雙關手法。選項 (B) 的奧萬大以賞楓聞名，文案「楓華萬千」巧妙借用成語「風華萬千」的同音字「楓」，既指楓葉美景，又形容風采華麗，是極為標準的諧音雙關！(C)「氣蓋山河」原為成語「氣蓋山河」或「氣壯山河/氣蓋世」，並無音近轉字雙關。",
    "stem": "「諧音雙關」是一種利用「同音字或音近字造成雙重意義」的修辭，例如：「風吹荷葉動，何夜不搖蓮。」句中的「搖蓮」二字兼有「遙憐」的意思。下列四則新聞「　」中的詞語，何者也使用了相同的技巧？【109年會考補考】\n\n○ (A) 「日傳意外」！日本 鹿兒島發現八頭擱淺鯨魚\n○ (B) 時序入秋，旅行社推出奧萬大「楓華萬千」的賞楓專案\n○ (C) 棒球場上，為了幫球員打氣，球迷們搖旗吶喊，聲勢「氣蓋山河」\n○ (D) 網路發達，人們在家中就能和世界溝通，可謂：人在一方，「網連世界」。",
    "answer": "(B) 時序入秋，旅行社推出奧萬大「楓華萬千」的賞楓專案",
    "diagramUrl": "",
    "solution": "○ 詳細解析：\n\n題幹說明「諧音雙關」為利用同音或音近之字造成字面與深層雙重意涵：\n\n- **(A)「日傳意外」**：指日本傳出意外，為平實敘述，無諧音雙關。\n- **(B)「楓華萬千」（正解）**：奧萬大以賞楓聞名，旅行社巧妙借用成語「**風**華萬千」之音，改為「**楓**華萬千」，兼指楓紅美景與風采華麗，為標準的**諧音雙關**，故選 **(B)**。\n- **(C)「氣蓋山河」**：借自「氣蓋世」之誇飾成語，極言聲勢雄壯，非諧音雙關。\n- **(D)「網連世界」**：依字面意思敘述網路互聯，非諧音雙關。\n\n正確答案選 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
  },
  {
    "id": "q_chinese_literature_confucius_analects_005",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國學常識：孔子生平教育思想（有教無類 vs. 因材施教）與《論語》成書體例（作者非孔子自作、篇名由來、四書地位）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "注意孔子與《論語》的高頻辨析陷阱！\n1. 《論語》作者並非孔子親筆著作！而是由「孔子弟子及再傳弟子」輯錄編纂而成！(B) 錯誤在於作者不能寫「孔子」。\n2. 孟子（戰國中期）與荀子（戰國末期）皆生於孔子死後數百年，絕非孔子的親授學生！(C) 錯誤。\n3. 「不分貧富貴賤，人人皆有受教育權利」稱為「有教無類」；依學生資質個性給予不同指導才是「因材施教」！(D) 混淆觀念。",
    "stem": "下列四位學生對於孔子與《論語》的敘述及理解，何者正確？\n\n○ (A) 琪琪\n○ (B) 旻旻\n○ (C) 安安\n○ (D) 楚楚",
    "answer": "(A) 琪琪",
    "diagramUrl": "assets/questions/q_chinese_literature_confucius_analects_005.png",
    "solution": "○ 詳細對照解析：\n\n檢視四位學生對孔子與《論語》的表格筆記：\n\n- **(A) 琪琪（完全正確，正解）**：\n  - 孔子：生於春秋末期魯國，創立儒家學派。\n  - 《論語》：全書共二十篇，首篇為〈學而〉，末篇為〈堯曰〉，敘述完全正確，選 **(A)**。\n\n- **(B) 旻旻（錯誤）**：\n  - 《論語》是由「**孔子弟子及再傳弟子**」記錄編輯而成，**作者不包含孔子本人**！\n\n- **(C) 安安（錯誤）**：\n  - 孟子（戰國中期）與荀子（戰國末期）皆出生於孔子逝世多年之後，**絕非孔子的親授學生**！\n\n- **(D) 楚楚（錯誤）**：\n  - 授業不分貧富貴賤稱為「**有教無類**」；依學生個別資質能力指導才是「**因材施教**」，概念顛倒！\n\n正確答案選 **(A)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
  },
  {
    "id": "q_math_equilateral_triangle_linear_system_009",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算錯誤",
    "concept": "正三角形三邊長相等性質與二元一次聯立方程式求解",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "正三角形核心幾何性質：「三邊長皆相等」！由 $6x - 3y = 4x + y = 5x - 1$ 列出二元一次聯立方程式，整理得 $\\begin{cases} 2x - 4y = 0 \\implies x = 2y \\\\ 4x + y = 5x - 1 \\implies x - y = 1 \\end{cases}$，代入即可秒解 $y = 1, x = 2$！最後題目問的是 $x + y = 2 + 1 = 3$，切勿只算到 $x$ 或 $y$ 就急著選答案！",
    "stem": "如圖為一個正三角形，若 $6x - 3y$、$4x + y$、$5x - 1$ 分別表示三邊的長，則 $x + y = ?$\n\n○ (A) 2\n○ (B) 3\n○ (C) 4\n○ (D) 5",
    "answer": "(B) 3",
    "diagramUrl": "assets/questions/q_math_equilateral_triangle_linear_system_009.png",
    "solution": "○ 詳細解題步驟：\n\n1. **依正三角形「三邊等長」列聯立方程式**：\n   正三角形三邊長皆相等，故：\n   $$6x - 3y = 4x + y = 5x - 1$$\n\n2. **聯立求解 $x$ 與 $y$**：\n   - 由前兩邊相等：\n     $$6x - 3y = 4x + y \\implies 2x - 4y = 0 \\implies x = 2y \\quad \\cdots\\cdots ①$$\n   - 由後兩邊相等：\n     $$4x + y = 5x - 1 \\implies 5x - 4x - y = 1 \\implies x - y = 1 \\quad \\cdots\\cdots ②$$\n   - 將 ① 式代入 ② 式：\n     $$2y - y = 1 \\implies y = 1$$\n   - 代回 ① 式求 $x$：\n     $$x = 2(1) = 2$$\n\n3. **檢驗三邊長並求 $x + y$**：\n   - 各邊長為：\n     - 左邊：$6(2) - 3(1) = 12 - 3 = 9$\n     - 右邊：$4(2) + 1 = 8 + 1 = 9$\n     - 底邊：$5(2) - 1 = 10 - 1 = 9$\n     （三邊皆為 9，完全正確！）\n   - 題目所求：\n     $$x + y = 2 + 1 = \\mathbf{3}$$\n\n正確答案選 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
  },
  {
    "id": "q_math_line_chart_revenue_comparison_010",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "折線圖統計資料判讀、月平均計算與兩組數據總額比較",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "注意縱軸單位為「百萬元」！折線圖實線為「狠郝賺」、虛線圈為「泰匯賺」。下半年總營業額：泰匯賺 $41 + 43 + 59 + 45 + 40 + 58 = 286$ 百萬元；狠郝賺 $53 + 38 + 72 + 89 + 58 + 36 = 346$ 百萬元。兩家差額 $346 - 286 = 60$ 百萬元 $= 6000$ 萬元！故泰匯賺比狠郝賺少 6000 萬元，選 (C)！",
    "stem": "如圖為泰匯賺與狠郝賺兩家科技公司下半年來每個月的營業額分配折線圖，請問下列敘述何者正確？\n\n○ (A) 泰匯賺平均每月營業額超過 5000 萬元\n○ (B) 狠郝賺平均每月營業額超過 6000 萬元\n○ (C) 泰匯賺公司下半年的營業額比狠郝賺公司少 6000 萬元\n○ (D) 泰匯賺公司下半年的營業額比狠郝賺公司少 3000 萬元",
    "answer": "(C) 泰匯賺公司下半年的營業額比狠郝賺公司少 6000 萬元",
    "diagramUrl": "assets/questions/q_math_line_chart_revenue_comparison_010.png",
    "solution": "○ 詳細解題步驟：\n\n1. **讀取折線圖兩家公司各月營業額（單位：百萬元）**：\n   - **狠郝賺**（實線黑點）：\n     - 7月：53、8月：38、9月：72、10月：89、11月：58、12月：36\n     - 下半年總營業額 $= 53 + 38 + 72 + 89 + 58 + 36 = 346$ 百萬元\n     - 月平均營業額 $= 346 \\div 6 \\approx 57.67$ 百萬元\n   - **泰匯賺**（虛線圓圈）：\n     - 7月：41、8月：43、9月：59、10月：45、11月：40、12月：58\n     - 下半年總營業額 $= 41 + 43 + 59 + 45 + 40 + 58 = 286$ 百萬元\n     - 月平均營業額 $= 286 \\div 6 \\approx 47.67$ 百萬元\n\n2. **逐一檢驗各選項**：\n   - **(A) 錯誤**：泰匯賺平均每月約 4767 萬元，未超過 5000 萬元。\n   - **(B) 錯誤**：狠郝賺平均每月約 5767 萬元，未超過 6000 萬元。\n   - **(C) 正解**：兩家總營業額差額為：\n     $$346 - 286 = 60 \\text{ 百萬元} = 6000 \\text{ 萬元}$$\n     因此泰匯賺公司下半年總營業額比狠郝賺公司少 6000 萬元。\n   - **(D) 錯誤**：差額為 6000 萬元，非 3000 萬元。\n\n正確答案選 **(C)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
  },
  {
    "id": "q_math_discount_soap_lotion_linear_system_011",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "百分率調價應用題與二元一次聯立方程式建模求解",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "設特價時沐浴乳一瓶 $x$ 元、香皂一塊 $y$ 元。特價花費：$x + 2y = 156$；恢復原價多了 20% 即原價為 $1.2x$；此時為香皂的 8 倍：$1.2x = 8y \\implies x = \\frac{20}{3}y$。代入消去求得 $y = 18$ 元！注意特價與原價為 $(1 + 0.2)x = 1.2x$！",
    "stem": "志玲趁商店折扣時，買了一瓶沐浴乳和兩塊香皂共花了 156 元，後來沐浴乳恢復原價，價格較特價時多了 20%，而香皂價格不變，此時沐浴乳價格為香皂單價的 8 倍，則香皂一塊多少元？\n\n○ (A) 12\n○ (B) 16\n○ (C) 18\n○ (D) 20",
    "answer": "(C) 18",
    "diagramUrl": "",
    "solution": "○ 詳細解題步驟：\n\n1. **設未知數**：\n   設特價時沐浴乳一瓶 $x$ 元、香皂一塊 $y$ 元。\n\n2. **依題意列出二元一次聯立方程式**：\n   - 特價時買 1 瓶沐浴乳和 2 塊香皂花了 156 元：\n     $$x + 2y = 156 \\quad \\cdots\\cdots ①$$\n   - 沐浴乳恢復原價較特價多 20%，即原價為：\n     $$x \\times (1 + 20\\%) = 1.2x$$\n   - 此時沐浴乳價格為香皂單價的 8 倍（香皂價格不變）：\n     $$1.2x = 8y \\implies x = \\frac{8}{1.2}y = \\frac{20}{3}y \\quad \\cdots\\cdots ②$$\n\n3. **代入求解香皂單價 $y$**：\n   - 將 ② 式代入 ① 式：\n     $$\\frac{20}{3}y + 2y = 156$$\n     $$\\frac{26}{3}y = 156$$\n     $$y = 156 \\times \\frac{3}{26} = 6 \\times 3 = 18$$\n\n4. **驗算**：\n   - 香皂一塊 18 元，沐浴乳特價 $x = \\frac{20}{3} \\times 18 = 120$ 元。\n   - 特價花費：$120 + 2 \\times 18 = 156$ 元（符合！）。\n   - 原價花費：$120 \\times 1.2 = 144$ 元，且 $144 \\div 18 = 8$ 倍（符合！）。\n\n香皂一塊為 **18 元**，正確答案選 **(C)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
  },
  {
    "id": "q_math_fraction_simplest_coprime_012",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算錯誤",
    "concept": "質因數分解、最大公因數求法與最簡分數判定（分子分母互質）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "最簡分數定義：分子與分母的最大公因數為 1（互質）！注意質數倍數陷阱：62 與 93 有公因數 31；19 與 361 有公因數 19；111111 各位數字和為 6 可被 33 約分！(B) 81 = 3^4, 121 = 11^2，質因數 3 與 11 互質，為最簡分數！",
    "stem": "下列何者是最簡分數？\n\n○ (A) $-\\frac{62}{93}$\n○ (B) $\\frac{81}{121}$\n○ (C) $-\\frac{19}{361}$\n○ (D) $\\frac{33}{111111}$",
    "answer": "(B) $\\frac{81}{121}$",
    "diagramUrl": "",
    "solution": "1. **最簡分數的定義**：\n- 分數的分子與分母（不看負號）互質，即最大公因數為 1 時，稱為**最簡分數**。\n\n2. **逐一檢驗各選項之因數分解與約分**：\n- **(A) $-\\frac{62}{93}$（非最簡分數）**：\n  $62 = 2 \\times 31$\n  $93 = 3 \\times 31$\n  $\\gcd(62, 93) = 31 \\ne 1$\n  可約分：$-\\frac{62}{93} = -\\frac{2}{3}$。\n- **(B) $\\frac{81}{121}$（最簡分數，正確）**：\n  $81 = 3^4$\n  $121 = 11^2$\n  81 的質因數只有 3；121 的質因數只有 11。\n  $\\gcd(81, 121) = 1$\n  分子與分母互質，無法再約分，為**最簡分數**。\n- **(C) $-\\frac{19}{361}$（非最簡分數）**：\n  $361 = 19^2 = 19 \\times 19$\n  $\\gcd(19, 361) = 19 \\ne 1$\n  可約分：$-\\frac{19}{361} = -\\frac{1}{19}$。\n- **(D) $\\frac{33}{111111}$（非最簡分數）**：\n  分子 $33 = 3 \\times 11$\n  分母 111111 各位數字和為 $1+1+1+1+1+1 = 6$（為 3 的倍數），且 $111111 = 33 \\times 3367$\n  可約分：$\\frac{33}{111111} = \\frac{1}{3367}$。\n\n3. **結論**：最簡分數為 **(B) $\\frac{81}{121}$**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
  },
  {
    "id": "q_math_triangle_angle_bisector_af_013",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "直角三角形商高定理、斜邊上的高與內角平分線性質",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "直角三角形斜邊上的高 $\\overline{AD} = \\frac{\\text{兩股相乘}}{\\text{斜邊}} = \\frac{3 \\times 4}{5} = \\frac{12}{5}$；再由畢氏定理求得 $\\overline{BD} = \\frac{16}{5}$。接著在 $\\triangle ABD$ 中，$\\overline{BF}$ 為角平分線，利用內角平分線性質：$\\overline{AF} : \\overline{FD} = \\overline{AB} : \\overline{BD} = 4 : \\frac{16}{5} = 5 : 4$，得 $\\overline{AF} = \\overline{AD} \\times \\frac{5}{5+4} = \\frac{4}{3}$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$\\angle BAC = 90^\\circ$，$\\overline{AD} \\perp \\overline{BC}$，$\\overline{BE}$ 為 $\\angle ABC$ 的角平分線，且交 $\\overline{AC}$ 於 $E$ 點，$\\overline{AD}$ 和 $\\overline{BE}$ 的交點為 $F$。若 $\\overline{AB} = 4$，$\\overline{AC} = 3$，則 $\\overline{AF} = ?$",
    "answer": "$\\frac{4}{3}$",
    "diagramUrl": "assets/questions/q_math_triangle_angle_bisector_af_013.png",
    "solution": "1. **利用畢氏定理求斜邊 $\\overline{BC}$**：\n   $\\because \\overline{AB} = 4, \\overline{AC} = 3$\n   $\\therefore \\overline{BC} = \\sqrt{3^2 + 4^2} = 5$\n\n2. **求斜邊上的高 $\\overline{AD}$ 與底段 $\\overline{BD}$**：\n   - 由面積相等（兩股積 = 斜邊 $\\times$ 高）：\n     $\\overline{AD} = \\frac{3 \\times 4}{5} = \\frac{12}{5}$\n   - 在直角 $\\triangle ABD$ 中，由畢氏定理：\n     $\\overline{BD} = \\sqrt{4^2 - \\left(\\frac{12}{5}\\right)^2} = \\sqrt{\\frac{400 - 144}{25}} = \\sqrt{\\frac{256}{25}} = \\frac{16}{5}$\n\n3. **利用角平分線性質求 $\\overline{AF}$**：\n   - 在 $\\triangle ABD$ 中，$\\overline{BF}$ 為 $\\angle ABD$ 的角平分線，交 $\\overline{AD}$ 於 $F$：\n     $\\therefore \\overline{AF} : \\overline{FD} = \\overline{AB} : \\overline{BD} = 4 : \\frac{16}{5} = 5 : 4$\n   - 故 $\\overline{AF} = \\overline{AD} \\times \\frac{5}{5 + 4} = \\frac{12}{5} \\times \\frac{5}{9} = \\frac{4}{3}$。\n\n4. **結論**：$\\overline{AF} = \\mathbf{\\frac{4}{3}}$。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-09"
  },
  {
    "id": "q_math_triangle_angle_bisector_ad_014",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "三角形角平分線全等性質（SAS）與同高三角形面積比等於底邊比",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "連接 $\\overline{DE}$，利用 $\\overline{BE}$ 為角平分線及 $\\overline{BC} = \\overline{BD} = 6$，證出 $\\triangle BDE \\cong \\triangle BCE$ (SAS)，得 $\\angle BDE = \\angle C = 90^\\circ$ 且兩者面積相等！由 $\\triangle ABC$ 面積是 $\\triangle ADE$ 的 4 倍，推得 $\\triangle ADE$ 面積與 $\\triangle BDE$ 面積比為 $2 : 3$。因同高（$\\overline{DE}$），底邊比 $\\overline{AD} : \\overline{BD} = 2 : 3$，即可求出 $\\overline{AD} = 4$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$\\angle C = 90^\\circ$，$\\overline{BE}$ 平分 $\\angle ABC$，$D$ 為斜邊 $\\overline{AB}$ 上一點。若 $\\overline{BC} = \\overline{BD} = 6$，$\\triangle ABC$ 面積是 $\\triangle ADE$ 面積的 4 倍，則 $\\overline{AD} =$ ______。",
    "answer": "4",
    "diagramUrl": "assets/questions/q_math_triangle_angle_bisector_ad_014.png",
    "solution": "1. **連接 $\\overline{DE}$，證明 $\\triangle BDE \\cong \\triangle BCE$**：\n   - $\\overline{BC} = \\overline{BD} = 6$（已知）\n   - $\\angle DBE = \\angle CBE$（$\\overline{BE}$ 平分 $\\angle ABC$）\n   - $\\overline{BE} = \\overline{BE}$（公用邊）\n   - 由 **SAS 全等性質**：$\\triangle BDE \\cong \\triangle BCE$。\n   - 因此 $\\angle BDE = \\angle C = 90^\\circ$（即 $\\overline{DE} \\perp \\overline{AB}$），且兩三角形面積相等：\n     $\\text{Area}(\\triangle BDE) = \\text{Area}(\\triangle BCE)$\n\n2. **分析面積比例關係**：\n   - 全體面積：\n     $\\text{Area}(\\triangle ABC) = \\text{Area}(\\triangle ADE) + \\text{Area}(\\triangle BDE) + \\text{Area}(\\triangle BCE)$\n     $= \\text{Area}(\\triangle ADE) + 2 \\times \\text{Area}(\\triangle BDE)$\n   - 題目已知 $\\text{Area}(\\triangle ABC) = 4 \\times \\text{Area}(\\triangle ADE)$：\n     $4 \\times \\text{Area}(\\triangle ADE) = \\text{Area}(\\triangle ADE) + 2 \\times \\text{Area}(\\triangle BDE)$\n     $\\implies 3 \\times \\text{Area}(\\triangle ADE) = 2 \\times \\text{Area}(\\triangle BDE)$\n     $\\implies \\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle BDE)} = \\frac{2}{3}$\n\n3. **利用同高三角形面積比求 $\\overline{AD}$**：\n   - $\\triangle ADE$ 與 $\\triangle BDE$ 在邊 $\\overline{AB}$ 上以 $D$ 為分界，且高均為 $\\overline{DE}$（$\\because \\overline{DE} \\perp \\overline{AB}$）：\n     $\\frac{\\overline{AD}}{\\overline{BD}} = \\frac{\\text{Area}(\\triangle ADE)}{\\text{Area}(\\triangle BDE)} = \\frac{2}{3}$\n   - 已知 $\\overline{BD} = 6$：\n     $\\frac{\\overline{AD}}{6} = \\frac{2}{3} \\implies \\overline{AD} = 6 \\times \\frac{2}{3} = 4$\n\n4. **結論**：$\\overline{AD} = \\mathbf{4}$。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-09"
  },
  {
    "id": "q_math_parallel_ratio_proof_015",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段性質與兩組平行線比例傳遞證明",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "遇到兩組平行線時，尋找共同比例中間橋樑（$\\overline{AE} : \\overline{AC}$）！在 $\\triangle ABC$ 中，$\\overline{DE} // \\overline{BC} \\implies \\overline{AE} : \\overline{AC} = \\overline{AD} : \\overline{AB}$；在 $\\triangle ADC$ 中，$\\overline{EF} // \\overline{CD} \\implies \\overline{AE} : \\overline{AC} = \\overline{AF} : \\overline{AD}$。兩式相等得 $\\overline{AD} : \\overline{AB} = \\overline{AF} : \\overline{AD} \\implies \\overline{AD}^2 = \\overline{AF} \\times \\overline{AB}$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$F$ 兩點在 $\\overline{AB}$ 上，$E$ 點在 $\\overline{AC}$ 上。若 $\\overline{DE} // \\overline{BC}$，$\\overline{EF} // \\overline{CD}$，試說明 $\\overline{AD}^2 = \\overline{AF} \\times \\overline{AB}$。",
    "answer": "見詳細說明（利用 $\\overline{AE} : \\overline{AC}$ 為橋樑推導得 $\\overline{AD}^2 = \\overline{AF} \\times \\overline{AB}$）",
    "diagramUrl": "assets/questions/q_math_parallel_ratio_proof_015.png",
    "solution": "**【詳細證明步驟】**\n\n1. **第一組平行線（在 $\\triangle ABC$ 中）**：\n   - $\\because \\overline{DE} // \\overline{BC}$\n   - 由平行線截比例線段性質：\n     $\\overline{AE} : \\overline{AC} = \\overline{AD} : \\overline{AB} \\quad \\cdots\\cdots ①$\n\n2. **第二組平行線（在 $\\triangle ADC$ 中）**：\n   - $\\because \\overline{EF} // \\overline{CD}$\n   - 由平行線截比例線段性質：\n     $\\overline{AE} : \\overline{AC} = \\overline{AF} : \\overline{AD} \\quad \\cdots\\cdots ②$\n\n3. **利用等量公理綜合 ①、② 兩式**：\n   - 兩式左邊皆為 $\\overline{AE} : \\overline{AC}$，故右邊亦相等：\n     $\\overline{AD} : \\overline{AB} = \\overline{AF} : \\overline{AD}$\n   - 交叉相乘（內項積等於外項積）：\n     $\\overline{AD} \\times \\overline{AD} = \\overline{AF} \\times \\overline{AB}$\n     $\\therefore \\mathbf{\\overline{AD}^2 = \\overline{AF} \\times \\overline{AB}}$（得證）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-09"
  },
  {
    "id": "q_math_parallel_ratio_calc_016",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算錯誤",
    "concept": "平行線截比例線段性質、比例中項求長度與相似三角形對應邊比",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "1. 由兩組平行線性質可知 $\\overline{AD}^2 = \\overline{AF} \\times \\overline{AB}$，代入 $6^2 = \\overline{AF} \\times 9 \\implies \\overline{AF} = 4$！\n2. 求底邊 $\\overline{BC}$ 時需用「小三角形邊比大三角形邊」：$\\overline{AD} : \\overline{AB} = \\overline{DE} : \\overline{BC} \\implies 6 : 9 = 8 : \\overline{BC} \\implies \\overline{BC} = 12$！切勿誤用 $\\overline{BD}$ 作比！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$F$ 兩點在 $\\overline{AB}$ 上，$E$ 點在 $\\overline{AC}$ 上。若 $\\overline{DE} // \\overline{BC}$，$\\overline{EF} // \\overline{CD}$，其中 $\\overline{AD} = 6$，$\\overline{AB} = 9$，$\\overline{DE} = 8$，則 $\\overline{AF}$、$\\overline{BC}$ 的長分別為何？",
    "answer": "$\\overline{AF} = 4$、$\\overline{BC} = 12$",
    "diagramUrl": "assets/questions/q_math_parallel_ratio_calc_016.png",
    "solution": "1. **利用兩組平行線之比例性質求 $\\overline{AF}$**：\n   - $\\because \\overline{DE} // \\overline{BC}$ 且 $\\overline{EF} // \\overline{CD}$\n   - 由上題證明結論：\n     $\\overline{AD}^2 = \\overline{AF} \\times \\overline{AB}$\n   - 將已知數值 $\\overline{AD} = 6$、$\\overline{AB} = 9$ 代入：\n     $6^2 = \\overline{AF} \\times 9$\n     $36 = 9\\overline{AF} \\implies \\mathbf{\\overline{AF} = 4}$\n\n2. **利用平行線對應邊比求 $\\overline{BC}$**：\n   - $\\because \\overline{DE} // \\overline{BC}$\n   - 在 $\\triangle ADE$ 與 $\\triangle ABC$ 中，對應邊成比例：\n     $\\overline{AD} : \\overline{AB} = \\overline{DE} : \\overline{BC}$\n   - 代入數值 $\\overline{AD} = 6$、$\\overline{AB} = 9$、$\\overline{DE} = 8$：\n     $6 : 9 = 8 : \\overline{BC}$\n     $2 : 3 = 8 : \\overline{BC}$\n     $2 \\times \\overline{BC} = 24 \\implies \\mathbf{\\overline{BC} = 12}$\n\n3. **結論**：\n   $\\mathbf{\\overline{AF} = 4}，\\mathbf{\\overline{BC} = 12}$。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-09"
  },
  {
    "id": "q_math_parallel_ext_bisector_df_017",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段性質、外角平分線與等腰三角形邊長轉換",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "核心關鍵在於將 $\\overline{DF}$ 拆成 $\\overline{DE} + \\overline{EF}$！\n1. $\\overline{DE} // \\overline{BC} \\implies \\overline{DE} : \\overline{BC} = \\overline{AD} : \\overline{AB} = 1 : (1+3) = 1 : 4$，得 $\\overline{DE} = 16 \\times \\frac{1}{4} = 4$。\n2. 因 $\\overline{DF} // \\overline{BG}$，內錯角 $\\angle EFC = \\angle FCG$；又 $\\overline{CF}$ 為角平分線 $\\implies \\angle ECF = \\angle FCG$。兩底角相等故 $\\triangle ECF$ 為等腰三角形，$\\overline{EF} = \\overline{CE} = 10$！\n3. $\\overline{DF} = 4 + 10 = 14$！",
    "stem": "如右圖，$\\triangle ABC$ 中，$D$、$E$ 兩點分別在 $\\overline{AB}$、$\\overline{AC}$ 上，且 $\\overline{DE} // \\overline{BC}$，$\\overline{CF}$ 平分 $\\angle ACG$，交 $\\overline{DE}$ 延長線於 $F$ 點。若 $\\overline{AD} : \\overline{DB} = 1 : 3$，$\\overline{BC} = 16$，$\\overline{CE} = 10$，則 $\\overline{DF} =$ ______。",
    "answer": "14",
    "diagramUrl": "assets/questions/q_math_parallel_ext_bisector_df_017.png",
    "solution": "1. **利用平行線比例求 $\\overline{DE}$**：\n   - $\\because \\overline{AD} : \\overline{DB} = 1 : 3$\n   - $\\therefore \\overline{AD} : \\overline{AB} = 1 : (1 + 3) = 1 : 4$\n   - 又 $\\overline{DE} // \\overline{BC}$，在 $\\triangle ADE$ 與 $\\triangle ABC$ 中：\n     $\\overline{DE} : \\overline{BC} = \\overline{AD} : \\overline{AB} = 1 : 4$\n   - 代入 $\\overline{BC} = 16$：\n     $\\overline{DE} = 16 \\times \\frac{1}{4} = 4$\n\n2. **利用平行線內錯角與角平分線證明等腰 $\\triangle ECF$ 求 $\\overline{EF}$**：\n   - $\\because \\overline{DF} // \\overline{BG}$（$F$ 在 $\\overline{DE}$ 延長線上，$G$ 在 $\\overline{BC}$ 延長線上）\n   - 由內錯角相等：$\\angle EFC = \\angle FCG$\n   - 又已知 $\\overline{CF}$ 平分外角 $\\angle ACG$：$\\angle ECF = \\angle FCG$\n   - 因此 $\\angle EFC = \\angle ECF$\n   - 故 $\\triangle ECF$ 為等腰三角形，兩腰長相等：\n     $\\overline{EF} = \\overline{CE} = 10$\n\n3. **計算線段長度 $\\overline{DF}$**：\n   - $\\overline{DF} = \\overline{DE} + \\overline{EF} = 4 + 10 = 14$\n\n4. **結論**：$\\overline{DF} = \\mathbf{14}$。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-09"
  },
  {
    "id": "q_math_triangle_cevian_area_ratio_018",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "三角形同高面積比等於底邊比與共頂點分割三角形面積比例推導",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "同高三角形面積比等於底邊比！\n1. 由 $\\overline{AO} : \\overline{OD} = 1 : 1$，得 $\\triangle AOB = \\triangle BOD = a$、$\\triangle AOC = \\triangle COD = b$。\n2. 底邊 $\\overline{BD} : \\overline{BC} = 3 : 7 \\implies \\overline{BD} : \\overline{CD} = 3 : (7-3) = 3 : 4$。\n3. $\\triangle ABD : \\triangle ADC = 2a : 2b = 3 : 4 \\implies a : b = 3 : 4$。\n4. 設 $a = 3r, b = 4r$，則 $\\triangle AOB : \\triangle BOC : \\triangle AOC = a : (a+b) : b = 3r : (3r+4r) : 4r = 3 : 7 : 4$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$E$、$F$ 分別為三邊上的一點，$O$ 為 $\\overline{AD}$、$\\overline{BE}$、$\\overline{CF}$ 的交點。若 $\\overline{AO} : \\overline{OD} = 1 : 1$，$BD : BC = 3 : 7$，則 $\\triangle AOB$、$\\triangle BOC$、$\\triangle AOC$ 的面積比為何？",
    "answer": "3 : 7 : 4",
    "diagramUrl": "assets/questions/q_math_triangle_cevian_area_ratio_018.png",
    "solution": "1. **利用 $\\overline{AO} : \\overline{OD} = 1 : 1$ 設未知數**：\n   - $\\because \\overline{AO} : \\overline{OD} = 1 : 1$\n   - 在 $\\triangle ABD$ 中，同高且底等長：\n     $\\text{Area}(\\triangle AOB) = \\text{Area}(\\triangle BOD) = a$\n   - 在 $\\triangle ACD$ 中，同高且底等長：\n     $\\text{Area}(\\triangle AOC) = \\text{Area}(\\triangle COD) = b$\n\n2. **利用底邊比求 $a$ 與 $b$ 的比例**：\n   - $\\because \\overline{BD} : \\overline{BC} = 3 : 7$\n   - $\\therefore \\overline{BD} : \\overline{CD} = 3 : (7 - 3) = 3 : 4$\n   - $\\triangle ABD$ 與 $\\triangle ADC$ 擁有共同頂點 $A$ 與同高：\n     $\\text{Area}(\\triangle ABD) : \\text{Area}(\\triangle ADC) = \\overline{BD} : \\overline{CD} = 3 : 4$\n   - 即 $(a + a) : (b + b) = 2a : 2b = a : b = 3 : 4$\n   - 令 $a = 3r$，$b = 4r$（其中 $r > 0$）\n\n3. **計算三塊三角形面積比**：\n   - $\\text{Area}(\\triangle AOB) = a = 3r$\n   - $\\text{Area}(\\triangle BOC) = \\text{Area}(\\triangle BOD) + \\text{Area}(\\triangle COD) = a + b = 3r + 4r = 7r$\n   - $\\text{Area}(\\triangle AOC) = b = 4r$\n   - 故面積比為：\n     $$\\text{Area}(\\triangle AOB) : \\text{Area}(\\triangle BOC) : \\text{Area}(\\triangle AOC) = 3r : 7r : 4r = 3 : 7 : 4$$\n\n4. **結論**：面積比為 **$3 : 7 : 4$**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-09"
  },
  {
    "id": "q_math_rhombus_angle_bisector_be_019",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "菱形幾何性質（對角線平分內角）、三角形內角平分線性質與相似形邊長比",
    "uploadDate": "2026-09-10",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "看到菱形內接於三角形，秒用兩大幾何利器！\n1.【秒殺法・內角平分線】：菱形對角線平分對角，故連接 $\\overline{AE}$ 即為 $\\angle BAC$ 之角平分線！由角平分線定理：$\\overline{BE} : \\overline{EC} = \\overline{AB} : \\overline{AC} = 14 : 10 = 7 : 5$，直接求得 $\\overline{BE} = 12 \\times \\frac{7}{7+5} = 7$！\n2.【相似形法】：設菱形邊長為 $x$，由 $\\overline{DE} // \\overline{AC}$ 知 $\\triangle BDE \\sim \\triangle BAC$，$\\frac{x}{10} = \\frac{14-x}{14} \\implies x = \\frac{35}{6}$，再由 $\\overline{BE} = 12 \\times \\frac{x}{10} = 7$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$E$、$F$ 分別為三邊上的一點，若四邊形 $ADEF$ 為菱形，$\\overline{AB} = 14$，$\\overline{BC} = 12$，$\\overline{AC} = 10$，則 $\\overline{BE} =$ ______。",
    "answer": "7",
    "diagramUrl": "assets/questions/q_math_rhombus_angle_bisector_be_019.png",
    "solution": "1. **方法一：利用菱形對角線為角平分線（秒殺技巧）**：\n   - $\\because$ 四邊形 $ADEF$ 為菱形，四邊等長且對角線平分各對角。\n   - 若連接對角線 $\\overline{AE}$，則 $\\overline{AE}$ 必平分頂角 $\\angle BAC$，即 $\\overline{AE}$ 為 $\\triangle ABC$ 中 $\\angle A$ 的**內角平分線**。\n   - 依據**三角形內角平分線性質**：\n     $$\\overline{BE} : \\overline{EC} = \\overline{AB} : \\overline{AC}$$\n   - 代入已知邊長 $\\overline{AB} = 14$、$\\overline{AC} = 10$：\n     $$\\overline{BE} : \\overline{EC} = 14 : 10 = 7 : 5$$\n   - 已知底邊全長 $\\overline{BC} = 12$，可直接求出 $\\overline{BE}$：\n     $$\\overline{BE} = \\overline{BC} \\times \\frac{7}{7 + 5} = 12 \\times \\frac{7}{12} = \\mathbf{7}$$\n\n2. **方法二：利用平行線與相似三角形（標準幾何推導）**：\n   - 設菱形邊長為 $x$，則 $\\overline{AD} = \\overline{DE} = \\overline{EF} = \\overline{AF} = x$。\n   - $\\because$ 菱形對邊平行，$\\overline{DE} // \\overline{AC}$。\n   - 在 $\\triangle ABC$ 中，$\\triangle BDE \\sim \\triangle BAC$，對應邊成比例：\n     $$\\frac{\\overline{DE}}{\\overline{AC}} = \\frac{\\overline{BD}}{\\overline{BA}}$$\n   - 其中 $\\overline{BD} = \\overline{AB} - \\overline{AD} = 14 - x$，代入方程式：\n     $$\\frac{x}{10} = \\frac{14 - x}{14}$$\n   - 交叉相乘求 $x$：\n     $$14x = 10(14 - x) \\implies 14x = 140 - 10x \\implies 24x = 140 \\implies x = \\frac{35}{6}$$\n   - 再利用對應底邊比例：\n     $$\\frac{\\overline{BE}}{\\overline{BC}} = \\frac{\\overline{DE}}{\\overline{AC}} = \\frac{35/6}{10} = \\frac{7}{12}$$\n   - 得 $\\overline{BE} = 12 \\times \\frac{7}{12} = \\mathbf{7}$。\n\n3. **結論**：$\\overline{BE} = \\mathbf{7}$。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-10"
  },
  {
    "id": "q_math_parallel_lines_trapezoid_ef_cf_020",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段性質、平行輔助線分割（平行四邊形＋相似三角形）與梯形比例求長",
    "uploadDate": "2026-09-10",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "兩大考點重點歸納：\n1.【平行線截比例線段】：直線 $L_1 // L_2 // L_3$ 時，截線左右對應段成比例：$\\overline{AB} : \\overline{BC} = \\overline{DE} : \\overline{EF} \\implies 12 : 18 = 10 : \\overline{EF} \\implies \\overline{EF} = 15$！\n2.【梯形內部橫線求解（兩種方法）】：\n  - 方法一（作平行線分割）：作 $\\overline{AG} // \\overline{DF}$，右側成平行四邊形得 $\\overline{HE} = \\overline{GF} = 20$，左側三角形底邊 $\\overline{BH} = 30 - 20 = 10$。由 $\\triangle ABH \\sim \\triangle ACG$ 得 $\\frac{10}{\\overline{CG}} = \\frac{12}{12+18} = \\frac{2}{5} \\implies \\overline{CG} = 25$。總長 $\\overline{CF} = 25 + 20 = 45$！\n  - 方法二（秒殺分點公式）：中間線長 $\\overline{BE} = \\frac{18 \\times \\overline{AD} + 12 \\times \\overline{CF}}{12 + 18} \\implies 30 = \\frac{360 + 12\\overline{CF}}{30} \\implies \\overline{CF} = 45$！",
    "stem": "如右圖，直線 $L_1 // L_2 // L_3$，若 $\\overline{AB} = 12$，$\\overline{BC} = 18$，$\\overline{DE} = 10$，$\\overline{AD} = 20$，$\\overline{BE} = 30$，則：\n(1) $\\overline{EF} = ?$\n(2) $\\overline{CF} = ?$",
    "answer": "(1) 15；(2) 45",
    "diagramUrl": "assets/questions/q_math_parallel_lines_trapezoid_ef_cf_020.png",
    "solution": "1. **第 (1) 小題：利用「平行線截等比例線段性質」求 $\\overline{EF}$**：\n   - $\\because L_1 // L_2 // L_3$\n   - 兩截線被三平行線所截出的線段長成比例：\n     $$\\overline{AB} : \\overline{BC} = \\overline{DE} : \\overline{EF}$$\n   - 將題目已知數值代入：\n     $$12 : 18 = 10 : \\overline{EF}$$\n     $$2 : 3 = 10 : \\overline{EF}$$\n     $$2 \\times \\overline{EF} = 30 \\implies \\mathbf{\\overline{EF} = 15}$$\n\n2. **第 (2) 小題：作平行輔助線（平行四邊形 ＋ 相似三角形法）求 $\\overline{CF}$**：\n   - **作輔助線**：過 $A$ 點作 $\\overline{AG} // \\overline{DF}$，分別交直線 $L_2$ 於 $H$ 點、交直線 $L_3$ 於 $G$ 點。\n   - **利用平行四邊形對邊等長**：\n     四邊形 $ADHE$ 與四邊形 $ADGF$ 皆為平行四邊形，故對邊等長：\n     $$\\overline{HE} = \\overline{AD} = 20，\\quad \\overline{GF} = \\overline{AD} = 20$$\n   - **計算小三角形底邊 $\\overline{BH}$**：\n     已知整段 $\\overline{BE} = 30$：\n     $$\\overline{BH} = \\overline{BE} - \\overline{HE} = 30 - 20 = 10$$\n   - **利用 $\\triangle ABH \\sim \\triangle ACG$ 求底邊 $\\overline{CG}$**：\n     在 $\\triangle ACG$ 中，$\\because \\overline{BH} // \\overline{CG}$，由對應邊成比例：\n     $$\\frac{\\overline{BH}}{\\overline{CG}} = \\frac{\\overline{AB}}{\\overline{AC}} = \\frac{\\overline{AB}}{\\overline{AB} + \\overline{BC}}$$\n     $$\\frac{10}{\\overline{CG}} = \\frac{12}{12 + 18} = \\frac{12}{30} = \\frac{2}{5}$$\n     $$2 \\times \\overline{CG} = 50 \\implies \\overline{CG} = 25$$\n   - **計算總長 $\\overline{CF}$**：\n     $$\\overline{CF} = \\overline{CG} + \\overline{GF} = 25 + 20 = \\mathbf{45}$$\n\n3. **第 (2) 小題秒殺技巧：梯形比例分點公式（驗算法）**：\n   - 中間橫線長度等於「交叉相乘加權平均」：\n     $$\\overline{BE} = \\frac{\\overline{BC} \\times \\overline{AD} + \\overline{AB} \\times \\overline{CF}}{\\overline{AB} + \\overline{BC}}$$\n     $$30 = \\frac{18 \\times 20 + 12 \\times \\overline{CF}}{12 + 18} = \\frac{360 + 12\\overline{CF}}{30}$$\n     $$900 = 360 + 12\\overline{CF} \\implies 12\\overline{CF} = 540 \\implies \\mathbf{\\overline{CF} = 45}$$\n\n4. **結論**：\n   (1) $\\mathbf{\\overline{EF} = 15}$；(2) $\\mathbf{\\overline{CF} = 45}$。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-10"
  },
  {
    "id": "q_chinese_part_of_speech_comparison_006",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "文法修辭：詞性辨析（形容詞、副詞、動詞、名詞之句中功能）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "判別詞性看修飾對象！修飾名詞為形容詞，修飾動詞為副詞。(C)「風流人物」之風流修飾名詞人物（形容詞）；「風流倜儻」之風流為形容詞，兩者皆為形容詞！(A)「蜿蜒」的小路（形）／「蜿蜒」的穿梭（副）。(B)「泛泛」論說（副）／「泛泛」之輩（形）。(D)極力「阿諛」（動）／臣子的「阿諛」（名）。",
    "stem": "以下「　」內詞語的詞性，何者兩兩相同？\n\n○ (A) 遠處的山腰上，有許多「蜿蜒」的小路／新店溪是一條靈蛇，「蜿蜒」的穿梭於谷壑\n○ (B) 目前媒體多半「泛泛」論說，不夠深入／看他相貌平凡，但有實力，非「泛泛」之輩\n○ (C) 諸葛亮是稱霸三國時的「風流」人物／他的性格「風流」倜儻，能言善道，交遊廣闊\n○ (D) 為了博得長官的好印象，他極力「阿諛」／唐太宗厭惡臣子的「阿諛」，大力重用魏徵",
    "answer": "(C) 諸葛亮是稱霸三國時的「風流」人物／他的性格「風流」倜儻，能言善道，交遊廣闊",
    "diagramUrl": "",
    "solution": "- **(A) 形／副**：「蜿蜒」小路（形）／「蜿蜒」穿梭（副）。\n- **(B) 副／形**：「泛泛」論說（副）／「泛泛」之輩（形）。\n- **(C) 形／形（正解）**：「風流」人物（形）／性格「風流」（形），詞性相同，選 **(C)**。\n- **(D) 動／名**：極力「阿諛」（動）／臣子的「阿諛」（名）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
  },
  {
    "id": "q_chinese_rhetoric_rhetorical_question_007",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "修辭手法：設問法三類辨析（疑問、提問／自問自答、激問／反問）",
    "uploadDate": "2026-09-07",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "設問修辭三大分類口訣：1.【疑問（懸問）】：心中有疑，答案不知（如「寒梅著花未？」）。2.【提問】：自問自答，答案在後（如「問君何能爾？心遠地自偏」、「飄飄何所似？天地一沙鷗」）。3.【激問（反問）】：明知故問，答案在問題反面，語氣強烈肯定（如「不亦君子乎？ ⇒ 當然是君子！」）。故 (C) 為標準反問！",
    "stem": "下列文句，何者使用了「反問」的語氣？\n\n○ (A) 來日綺窗前，寒梅著花未\n○ (B) 問君何能爾？心遠地自偏\n○ (C) 人不知而不慍，不亦君子乎\n○ (D) 飄飄何所似？天地一沙鷗",
    "answer": "(C) 人不知而不慍，不亦君子乎",
    "diagramUrl": "",
    "solution": "- **(A) 疑問**：寒梅著花未？（心中真不知，求解答）。\n- **(B) 提問**：問君何能爾？心遠地自偏（自問自答）。\n- **(C) 激問/反問（正解）**：不亦君子乎？（答案在反面，強烈肯定「確實是君子」），選 **(C)**。\n- **(D) 提問**：飄飄何所似？天地一沙鷗（自問自答）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
  },
  {
    "id": "q_chinese_song_ci_famous_quotes_008",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "名句活用：南唐兩宋詞作情境辨析（秦觀〈鵲橋仙〉、馮延巳〈謁金門〉、辛棄疾〈醜奴兒〉）",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "注意詞作名句典故與文意搭配！1.「兩情若是長久時」出自秦觀〈鵲橋仙〉（兩情若是久長時，又豈在朝朝暮暮），指真情不因短暫時空分離而褪色，用以安慰出國遠距男友完全正確（✔）。2.「吹皺一池春水」出自馮延巳〈謁金門〉（干卿底事之典），比喻「事不關己而好管閒事」，不能用在寫作無病呻吟！小說被退稿因閱歷不足強作感慨，宜改用辛棄疾〈醜奴兒〉「為賦新詞強說愁」。",
    "stem": "【今朝話名句】下列題目皆使用了南唐兩宋詞作中的經典名句，請依據各題文意，判斷何者使用「最恰當」？\n\n○ (A) 即將出國的洛詩安慰男友：「兩情若是長久時，何必在乎一時的分離？我們還能隨時視訊，別擔心。」\n○ (B) S君的小說被出版社退稿，主要是閱歷不夠、體悟不深，寫作常「吹皺一池春水」，以致作品不受青睞",
    "answer": "(A) 即將出國的洛詩安慰男友：「兩情若是長久時，何必在乎一時的分離？我們還能隨時視訊，別擔心。」",
    "diagramUrl": "",
    "solution": "- **(A) 恰當（正解）**：秦觀〈鵲橋仙〉「兩情若是久長時，又豈在朝朝暮暮」，指真情經得起時空分離考驗，安慰出國男友語境貼切，選 **(A)**。\n- **(B) 誤用**：「吹皺一池春水」出自馮延巳〈謁金門〉，比喻**事不關己而好管閒事**，不可用於形容寫作缺乏歷練；應改為辛棄疾「為賦新詞強說愁」。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-08"
  },
  {
    "id": "q_chinese_homophone_que_que_characters_009",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國字注音與寫字測驗：辛棄疾名句與常考成語（兜鍪、悠然神往、休戚與共、一闋詞）",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【國字注音常考陷阱筆記】：\n2. 兜【鍪】（矛＋攴＋金，古代頭盔）；\n8. 【悠】然神往（攸＋心，神思嚮往，非「幽」）；\n9. 【休】戚與共（休是喜慶，戚是憂患，非「修」）；\n10. 一【闋】詞（門＋癸，計算詞的單位，切勿誤寫為「闕」）！",
    "stem": "【國字注音寫字填空測驗】\n請依題幹注音在各題括號中寫出正確國字（可於框內鍵入，或點擊上方「草稿區」手寫練習）：\n\n2. 兜 ㄇㄡˊ 【　　】\n8. 一 ㄧㄡ 然神往 【　　】\n9. ㄒㄧㄡ 戚與共 【　　】\n10. 一 ㄑㄩㄝˋ 詞 【　　】",
    "answer": "2. 【鍪】（兜鍪）\n8. 【悠】（悠然神往）\n9. 【休】（休戚與共）\n10. 【闋】（一闋詞）",
    "diagramUrl": "assets/questions/q_chinese_fill_in_characters_009_test.png",
    "solution": "![考卷紅字答案照](assets/questions/q_chinese_fill_in_characters_009_answer.png)\n\n- **2. 【鍪】**：金部（上矛＋攴、下金），古代頭盔；辛棄疾「年少萬兜鍪」借指戰士。\n- **8. 【悠】**：心部（攸＋心），心神嚮往（非「幽」）。\n- **9. 【休】**：人部，休是喜慶、戚是憂患（非「修」）。\n- **10. 【闋】**：門部（門＋癸），計算詞的單位（量詞）；**切勿誤寫為宮殿城樓的「闕」**！",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-08"
  },
  {
    "id": "q_chinese_classical_verse_comparison_010",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "古典韻文體制大比較：古詩、樂府詩、近體詩（絕句與律詩）、詞之全面統整",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "國文會考韻文四大天王必背對照：1.【句數字數】：古詩（多五七言，不限句）、樂府（多雜言，不限句）、絕句（4句/20或28字）、律詩（8句/40或56字）、詞（長短句，依詞牌小令≤58字、中調59~90字、長調≥91字）。2.【對仗】：律詩「頷聯(第二聯)與頸聯(第三聯)」必對仗！其餘（古詩、樂府、絕句）皆不限。3.【押韻】：古詩、樂府可換韻；近體詩一韻到底絕不可換韻（偶數句必押平聲韻，首句可押可不押）；詞依詞牌而定。4.【朝代別名】：古詩（漢魏六朝/古風）、樂府（漢魏南北朝）、近體詩（唐代/今體詩）、詞（宋代成熟/詩餘、長短句、曲子詞、樂府）。故 (B) 正確！",
    "stem": "關於我國古典韻文「古詩、樂府詩、近體詩、詞」的體制特徵比較，下列敘述何者「完全正確」？\n\n○ (A) 句數與字數：古詩與樂府詩皆無句數限制；近體詩絕句四句、律詩八句；詞則字數固定為五言或七言\n○ (B) 押韻規定：古詩與樂府詩皆可換韻；近體詩偶數句押韻、一韻到底不可換韻；詞則須依各詞牌規定押韻\n○ (C) 對仗要求：近體詩之絕句與律詩皆規定必須嚴格對仗；古詩與樂府詩則完全不限\n○ (D) 發展與別名：古詩盛行於唐代，別名「長短句」；詞成熟於兩宋，別名「今體詩」或「古風」",
    "answer": "(B) 押韻規定：古詩與樂府詩皆可換韻；近體詩偶數句押韻、一韻到底不可換韻；詞則須依各詞牌規定押韻",
    "diagramUrl": "",
    "solution": "- **(A) 錯誤**：詞為「長短句」，字數依詞牌而定，非固定五七言。\n- **(B) 完全正確（正解）**：古詩、樂府可換韻；近體詩一韻到底不可換韻；詞則依各詞牌規定押韻，選 **(B)**。\n- **(C) 錯誤**：絕句不限對仗；律詩僅「頷聯、頸聯」必對仗。\n- **(D) 錯誤**：古詩別名「古風」；詞別名「長短句、詩餘」。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-08"
  },
  {
    "id": "q_chinese_liyu_xinqiji_dialogue_011",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "詞人生平、風格與詞壇稱號辨析（李煜「詞中之聖／詞中之帝」vs 辛棄疾「愛國詞人」）",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "詞家頭銜張冠李戴大陷阱！南唐後主李煜為亡國降臣，被王國維評為「詞中之帝」，後世尊為「詞中之聖」；南宋辛棄疾力主抗金北伐收復神州，為名震千古的「愛國詞人」！(B) 選項將兩人的稱號顛倒替換（張冠李戴），因此對話不適當！其餘(A)(C)(D)對兩人詞風、亡國/報國處境、名句引用完全吻合。",
    "stem": "在「古畫動起來」展覽中，透過AI技術讓李煜、辛棄疾進行跨時代對話。依據兩人生平及作品的特色，下列對話內容，何者「不適當」？\n\n○ (A) 李煜：「稼軒居士，您知道嗎？後人讀詞，常說我前期的詞婉約清麗，而您則是擅長創作豪情萬千、氣勢雄渾的詞作。」\n○ (B) 辛棄疾：「閣下說的沒錯，您曾為國君，詞作都是真情流露，被稱為「愛國詞人」。我的詞作多為憂國傷時之作，被稱為「詞中之聖」。」\n○ (C) 李煜：「我以「亡國之痛」成就婉約詞的極致，而您則以「報國無門」寫出豪放詞的高峰。」\n○ (D) 辛棄疾：「舉例來說，您的作品虞美人以「春花秋月何時了，往事知多少」，表達對故國的懷念；而我的南鄉子 登京口北固亭有懷 則以「何處望神州？滿眼風光北固樓」抒發山河變色的慨嘆。」",
    "answer": "(B) 辛棄疾：「閣下說的沒錯，您曾為國君，詞作都是真情流露，被稱為「愛國詞人」。我的詞作多為憂國傷時之作，被稱為「詞中之聖」。」",
    "diagramUrl": "",
    "solution": "- **(A)(C)(D) 對話皆適當**：李煜前期婉約清麗，以「亡國之痛」成婉約詞極致；辛棄疾豪邁雄渾，以「報國無門」成豪放詞高峰。\n- **(B) 不適當（正解）**：稱號張冠李戴！李煜為五代國君，降宋後抒發亡國血淚，被尊為**「詞中之帝／詞中之聖」**；辛棄疾一生抗金北伐，被譽為**「愛國詞人」**。選項將兩人稱號顛倒，選 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-08"
  },
  {
    "id": "q_chinese_xinqiji_doumou_rhetoric_012",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "修辭技巧辨析：辛棄疾〈南鄉子〉「兜鍪」借代 vs 譬喻",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "題幹「兜鍪」借代戰士。(A)五斗米借代官俸；(B)孤帆借代船隻；(C)「恰似」為譬喻（未用借代）；(D)桑梓借代家鄉。",
    "stem": "辛棄疾南鄉子這闋詞中，以「兜鍪」借代為戰士。以下何者未使用相同的修辭技巧？\n\n○ (A) 吾不能為五斗米折腰\n○ (B) 孤帆遠影碧山盡\n○ (C) 恰似一江春水向東流\n○ (D) 令我生心憶桑梓。",
    "answer": "(C) 恰似一江春水向東流",
    "diagramUrl": "",
    "solution": "- **題幹「兜鍪」**：借代戰士（修辭為**借代**）。\n- **(A) 借代**：「五斗米」借代微薄官俸。\n- **(B) 借代**：「孤帆」借代船隻。\n- **(C) 譬喻（正解）**：「恰似」為喻詞，將愁緒比作春水，為譬喻（**未用借代**），選 **(C)**。\n- **(D) 借代**：「桑梓」借代家鄉、故鄉。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-08"
  },
  {
    "id": "q_chinese_youyou_polysemy_013",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "一詞多義辨析：辛棄疾名句「悠悠」與各文句涵義比較",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "「悠悠」多義：(A)憂思長久；(B)從容徐緩；(C)高遠、遙遠貌（正解）；(D)眾多凡俗（眾人之口）。",
    "stem": "下列各項「悠悠」，何者是表示遙遠的意思？\n\n○ (A)「悠悠」我心\n○ (B)「悠悠」南行\n○ (C)「悠悠」蒼天\n○ (D) 杜「悠悠」之口。",
    "answer": "(C)「悠悠」蒼天",
    "diagramUrl": "",
    "solution": "- **(A)** 憂思長久貌（《詩經》「悠悠我心」）。\n- **(B)** 從容徐緩、閒適慢行貌。\n- **(C) 正解**：高遠、遙遠貌（出自《詩經·黍離》「悠悠蒼天，此何人哉」），選 **(C)**。\n- **(D)** 眾多、凡俗貌（指世俗眾人之口）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-08"
  },
  {
    "id": "q_chinese_word_meaning_evolution_014",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "詞語古今義與時空演變辨析（滾滾、千古、了了、風光）",
    "uploadDate": "2026-09-08",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "(A)皆指翻湧紛擾貌（相同）；(B)流傳久遠／去世輓辭；(C)聰明／明白；(D)風景／榮耀。",
    "stem": "詞語的意思有時會因應時空的不同而有所改變，下列「　」中的詞語，何組意思相同？\n\n○ (A) 黃沙「滾滾」／遠離「滾滾」紅塵\n○ (B)「千古」流傳／恭弔陳老太太「千古」\n○ (C) 小時「了了」／他對此事不甚「了了」\n○ (D)「風光」明媚／她在運動會上獨占「風光」。",
    "answer": "(A) 黃沙「滾滾」／遠離「滾滾」紅塵",
    "diagramUrl": "",
    "solution": "- **(A) 意思相同（正解）**：皆指翻湧、紛擾繁盛貌，選 **(A)**。\n- **(B) 不同**：流傳久遠年代／哀悼死者之輓辭（去世）。\n- **(C) 不同**：聰明伶俐／明白清楚、理解。\n- **(D) 不同**：風景景緻／榮耀光彩體面。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-08"
  },
  {
    "id": "q_chinese_syntax_inversion_007",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "古典詩詞倒裝句修辭判斷（辛棄疾《清平樂·村居》）",
    "uploadDate": "2026-09-09",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "辛棄疾《清平樂·村居》中的「白髮誰家翁媼」，正常語序應為「誰家白髮翁媼」（定語修飾語前置倒裝），因詞牌格律平仄與押韻（好、媼、草、老）需求而倒裝！其他選項皆為自然常規語序。",
    "stem": "下列文句，何者使用「倒裝」句法？\n\n○ (A) 樓上晴天碧四垂，樓前芳草接天涯\n○ (B) 新筍已成堂下竹，落花都上燕巢泥\n○ (C) 醉裡吳音相媚好，白髮誰家翁媼\n○ (D) 最喜小兒亡賴，溪頭臥剝蓮蓬。",
    "answer": "(C) 醉裡吳音相媚好，白髮誰家翁媼",
    "diagramUrl": "",
    "solution": "1. **(C) 正確（使用「倒裝」）**：\n   - 出處：辛棄疾《清平樂·村居》。\n   - 原句：「白髮誰家翁媼」，還原正常語序為**「誰家白髮翁媼」**（那是哪一家的白髮老爺爺老奶奶呢？）。\n   - 倒裝原因：為配合詞牌格律與押韻（好、媼），並將「白髮」特徵前置突出老人形象，屬於**修飾語（定語）倒裝**。\n\n2. **其他選項分析（皆為正常語序，無倒裝）**：\n   - **(A) 樓上晴天碧四垂，樓前芳草接天涯**：出自周邦彥《浣溪沙》，晴空蔚藍四垂、芳草連綿天際，為標準主謂賓敘述，無倒裝。\n   - **(B) 新筍已成堂下竹，落花都上燕巢泥**：出自周邦彥《浣溪沙》，新筍長成翠竹、殘花混入燕泥，為順應時序變化之自然敘述，無倒裝。\n   - **(D) 最喜小兒亡賴，溪頭臥剝蓮蓬**：出自辛棄疾《清平樂·村居》，承前省略主語「小兒」，依動作順序敘述，無倒裝。\n\n3. **結論**：正確答案選 **(C)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-09"
  },
  {
    "id": "q_chinese_homophone_shape_wu_015",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文會考核心字形辨析：形似同音成語（趨之若『鶩』vs. 好高『騖』遠、嘆『惋』、企『盼』）",
    "uploadDate": "2026-09-11",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "1. 趨之若「鶩」是「鳥部」（像野鴨爭食搶翻天）！\n2. 好高「騖」遠是「馬部」（像野馬奔馳不知返，比喻不切實際）！\n3. 嘆「惋」是「忄心部」（心裡惋惜哀傷）。\n4. 企「盼」是「目部」（轉動眼睛踮起腳盼望）。",
    "stem": "下列文句「　」中的成語與詞語，何者字形【完全正確】？\n\n○ (A) 這項新推出的限量公仔引發搶購熱潮，各路收藏家趨之若「騖」\n○ (B) 做學問應當腳踏實地循序漸進，切忌好高「鶩」遠、不切實際\n○ (C) 面對英年早逝的抗疫英雄，全國民眾無不深感痛心嘆「惋」\n○ (D) 離鄉背井求學多年，他日夜企「叛」著能早日返鄉與家人團聚。",
    "answer": "(C) 面對英年早逝的抗疫英雄，全國民眾無不深感痛心嘆「惋」",
    "diagramUrl": "",
    "solution": "1. **(C) 正確（正解）**：\n   - 痛心嘆「惋」：**惋**（忄心部），音 ㄨㄢˇ，指感嘆、惋惜悲痛。\n\n2. **其他選項除錯與字形辨析**：\n   - **(A) 趨之若「騖」❌** 應改為**「鶩」**。\n     - 「鶩」為**鳥部**，本義為野鴨。像成群野鴨爭搶食物般奔向目標，形容許多人爭相搶奪或前往。\n   - **(B) 好高「騖」遠❌** 應改為**「騖」**。\n     - 「騖」為**馬部**，本義為縱馬奔馳。比喻不切實際，一味追求過高過遠的目標。\n   - **(D) 企「叛」❌** 應改為**「盼」**。\n     - 「盼」為**目部**，本義是轉動眼睛看，引申為盼望、期望。「企盼」即踮起腳尖殷切盼望。\n\n★ **秒記口訣**：\n- 🦆 **鴨子搶食（鳥部）** ➔ 趨之若**鶩**\n- 🐎 **野馬奔馳（馬部）** ➔ 好高**騖**遠、馳**騁**\n- 👁️ **眼睛期盼（目部）** ➔ 企**盼**\n- ❤️ **心中哀痛（心部）** ➔ 嘆**惋**",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-11"
  },
  {
    "id": "q_chinese_phonetics_stroke_you_que_016",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文會考核心字音辨析：成語與常考字音（生死『攸』關、付之『闕』如、『矢』口否認、『矇』混過關）",
    "uploadDate": "2026-09-11",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "1. 生死「攸」關：音 ㄧㄡ（關係、所繫），非 ㄒㄧㄡ。\n2. 付之「闕」如：音 ㄑㄩㄝ（一聲陰平），通「缺」，非 ㄐㄩㄝˊ 也非 ㄑㄩㄝˋ！\n3. 「矢」口否認：音 ㄕˇ（三聲上聲），像發誓般堅決否定，非 ㄕˋ。\n4. 「矇」混過關：教育部標準音 ㄇㄥ（一聲陰平），欺瞞矇蔽之意，非 ㄇㄥˊ。",
    "stem": "下列文句「　」中字的讀音，何者標示【完全正確】？\n\n○ (A) 這次手術關係到病患的性命，可謂生死「攸」關／ㄧㄡ\n○ (B) 這份研究報告的核心實驗數據付之「闕」如，難以令人信服／ㄐㄩㄝˊ\n○ (C) 面對警方的鐵證與監視錄影，嫌犯依然「矢」口否認犯行／ㄕˋ\n○ (D) 他想靠小聰明在重要證照考場中「矇」混過關，當場被監考官識破／ㄇㄥˊ。",
    "answer": "(A) 這次手術關係到病患的性命，可謂生死「攸」關／ㄧㄡ",
    "diagramUrl": "",
    "solution": "1. **(A) 正確（正解）**：\n   - 生死「攸」關：讀音為 **ㄧㄡ**。「攸」為所、關係之意，比喻生死存亡緊密相扣，關係重大。\n\n2. **其他選項讀音除錯**：\n   - **(B) 付之「闕」如 ❌**：讀音應為 **ㄑㄩㄝ**（陰平一聲），不可讀作 ㄐㄩㄝˊ 或 ㄑㄩㄝˋ！\n     - 「闕」通「缺」，指殘缺空缺。「付之闕如」指缺漏不備、未有著落。\n   - **(C) 「矢」口否認 ❌**：讀音應為 **ㄕˇ**（上聲三聲），不可讀作 ㄕˋ！\n     - 「矢」本義為箭，引申為立誓、堅決如箭直射直言，形容一口咬定、堅決否定。\n   - **(D) 「矇」混過關 ❌**：教育部標準音為 **ㄇㄥ**（陰平一聲），不可讀作 ㄇㄥˊ！\n     - 「矇」在此指欺騙、遮蔽真相（如矇混過關、矇騙欺瞞皆讀 ㄇㄥ；而「濛濛細雨」讀 ㄇㄥˊ；「啟蒙教育」讀 ㄇㄥˊ）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-11"
  },
  {
    "id": "q_chinese_character_spelling_kan_zhen_fu_017",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "記憶混淆",
    "concept": "國文會考核心字形辨析：同音字與部首精選（『勘』測、『斟』酌、『俘』虜、『幽』暗、『綿』薄之力）",
    "uploadDate": "2026-09-11",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "1. 「勘」測是「力部」（查考校核用力測量），不是土部「堪」。\n2. 「斟」酌是「斗部」（衡量容量），斟酌損益、滿斟皆同字。\n3. 「俘」虜是「亻人部」（抓獲的戰俘），不是水部「浮」。\n4. 「幽」暗是「幺部」（幽閉昏暗深邃），與生死「攸」關（攸）不同！\n5. 「綿」薄之力多作「糹（綿）」，亦可通「木（棉）」，指微薄之力。",
    "stem": "下列各組文句「　」中的注音，寫成國字後何者字形【兩兩相同】？\n\n○ (A) 工程團隊實地「ㄎㄢ」測地形／連番受挫，情況「ㄎㄢ」慮\n○ (B) 凡事多加「ㄓㄣ」酌再作決定／為遠道而來的貴賓滿「ㄓㄣ」美酒\n○ (C) 兩軍交戰大獲全勝並生「ㄈㄨˊ」敵將／池塘水面上「ㄈㄨˊ」萍飄動\n○ (D) 此案事關重大、生死「ㄧㄡ」關／山間曲徑「ㄧㄡ」深、環境靜謐。",
    "answer": "(B) 凡事多加「ㄓㄣ」酌再作決定／為遠道而來的貴賓滿「ㄓㄣ」美酒",
    "diagramUrl": "",
    "solution": "1. **(B) 字形完全相同（正解）**：\n   - 凡事多加「斟」酌：**斟**（斗部，反覆衡量權衡，語出《出師表》「斟酌損益」）。\n   - 滿「斟」美酒：**斟**（斗部，倒酒、注入液體）。兩者國字皆為「斟」，選 **(B)**。\n\n2. **其他選項辨析**：\n   - **(A) 勘 vs. 堪（不同）**：\n     - 實地「勘」測：**勘**（力部，審查、校核踏勘）。\n     - 情況「堪」慮：**堪**（土部，能、可以承受）。\n   - **(C) 俘 vs. 浮（不同）**：\n     - 生「俘」敵將：**俘**（亻人部，戰爭中捕獲的敵軍人犯）。\n     - 「浮」萍飄動：**浮**（氵水部，浮在水面）。\n   - **(D) 攸 vs. 幽（不同）**：\n     - 生死「攸」關：**攸**（攸部，所、所繫關聯）。\n     - 曲徑「幽」深：**幽**（幺部，昏暗、深遠靜謐）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-11"
  },
  {
    "id": "q_chinese_idiom_comprehensive_13_018",
    "examPeriod": "一段",
    "subject": "國文",
    "errorReason": "觀念不懂",
    "concept": "國文一段段考常考字音字形：13大考點全景檢測（攸、幽、鶩、騖、矢、矇、惋、綿、闕、勘、斟、俘、盼）",
    "uploadDate": "2026-09-11",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "13大核心字音字形考點對照表：\n17. 企「盼」：目部\n32. 付之「闕」如：ㄑㄩㄝ\n33. 「勘」測：力部\n34. 「斟」酌：斗部\n37. 生死「攸」關：ㄧㄡ\n38. 「幽」暗：幺部\n40. 趨之若「鶩」：鳥部\n41. 好高「騖」遠：馬部\n43. 「矢」口否認：ㄕˇ\n45. 「矇」混過關：ㄇㄥ\n47. 嘆「惋」：心部\n48. 「綿（棉）」薄之力：ㄇㄧㄢˊ\n50. 「俘」虜：人部",
    "stem": "段考複習時，小麥整理了本次國文段考卷中的13大核心字音字形考點，下列哪一位同學的筆記【完全正確】？\n\n○ (A) 麥麥：「好高ㄠˋ遠」與「趨之若ㄠˋ」都是追求目標的意思，所以底下的部首都是「馬」部\n○ (B) 晨晨：企「ㄆㄢˋ」寫作「盼」（目部）；感嘆嘆「ㄨㄢˇ」寫作「惋」（心部），部首掌握得完全正確\n○ (C) 涵涵：「付之闕如」的「闕」讀作「ㄑㄩㄝˋ」，意思是指古代宮門外的觀樓\n○ (D) 欣欣：「矢口否認」的「矢」讀作「ㄕˋ」，意思是發誓說謊話。",
    "answer": "(B) 晨晨：企「ㄆㄢˋ」寫作「盼」（目部）；感嘆嘆「ㄨㄢˇ」寫作「惋」（心部），部首掌握得完全正確",
    "diagramUrl": "",
    "solution": "1. **(B) 正確（正解）**：\n   - 企「盼」：寫作「盼」（目部，轉眼盼望）。\n   - 嘆「惋」：寫作「惋」（忄心部，惋惜驚嘆）。兩者用字與部首皆完全正確，選 **(B)**。\n\n2. **其他選項除錯**：\n   - **(A) 錯誤**：\n     - 趨之若「鶩」：是**「鳥部」**（野鴨成群搶食）。\n     - 好高「騖」遠：才是**「馬部」**（狂馬奔馳，比喻不切實際）。兩者部首截然不同！\n   - **(C) 錯誤**：\n     - 「付之闕如」的「闕」讀作 **ㄑㄩㄝ**（陰平一聲），在此通「缺」，指殘缺空缺，非宮闕之意。\n   - **(D) 錯誤**：\n     - 「矢口否認」的「矢」讀作 **ㄕˇ**（上聲三聲，非ㄕˋ），本義如箭射出直言，引申為一口咬定、立誓堅決否定。\n\n---\n### 📖 段考精選 13 題考點速查對照表：\n| 題號 | 題目考點 | 正確字音／字形 | 核心部首與字義重點 |\n| :---: | :--- | :---: | :--- |\n| **17** | 企「ㄆㄢˋ」 | **盼** | **目部**（翹首期盼） |\n| **32** | 付之「闕」如 | **ㄑㄩㄝ** | **門部**（通「缺」，缺漏不備） |\n| **33** | 「ㄎㄢ」測 | **勘** | **力部**（校核、踏勘審視） |\n| **34** | 「ㄓㄣ」酌 | **斟** | **斗部**（反覆衡量、倒酒） |\n| **37** | 生死「攸」關 | **ㄧㄡ** | **攸部**（所、關係） |\n| **38** | 「ㄧㄡ」暗 | **幽** | **幺部**（深邃昏暗幽靜） |\n| **40** | 趨之若「ㄠˋ」 | **鶩** | **鳥部**（野鴨搶食爭奪） |\n| **41** | 好高「ㄠˋ」遠 | **騖** | **馬部**（野馬狂奔、不切實際） |\n| **43** | 「矢」口否認 | **ㄕˇ** | **矢部**（如箭直言、一口咬定） |\n| **45** | 「矇」混過關 | **ㄇㄥ** | **目部**（矇蔽、欺瞞真相） |\n| **47** | 嘆「ㄨㄢˇ」 | **惋** | **忄部**（惋惜悲嘆） |\n| **48** | 「ㄇㄧㄢˊ」薄之力 | **綿／棉** | **糸部／木部**（自謙力量微小） |\n| **50** | 「ㄈㄨˊ」虜 | **俘** | **亻部**（擒獲戰俘） |",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-11"
  },
  {
    "id": "q_math_parallel_reciprocal_sum_proof_021",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段與相似形：梯形內平行線倒數和定理（Crossed Ladders Theorem）",
    "uploadDate": "2026-09-11",
    "mondayDate": "2026-09-07",
    "mondayDates": [
      "2026-09-07"
    ],
    "weekLabel": "2026-09-07 (最新週次)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "梯形對角線交點之平行線倒數和證明：利用兩個三角形相似比截線，將兩式相加分母同為 BD，分子相加剛好等於 BD (=1)，最後同除以 EF 即得證！",
    "stem": "如右圖，$\\overline{AB} // \\overline{EF} // \\overline{CD}$，$\\overline{AD}$、$\\overline{BC}$ 相交於 $E$ 點，$F$ 點在 $\\overline{BD}$ 上，試說明：\n$$\\frac{1}{\\overline{AB}} + \\frac{1}{\\overline{CD}} = \\frac{1}{\\overline{EF}}$$",
    "answer": "依平行線截比例線段與相似三角形性質完成四步驟推導說明（詳見下方說明）",
    "diagramUrl": "assets/questions/q_math_parallel_reciprocal_sum_proof_021.png",
    "solution": "【四步驟完整推導說明】\n\n**步驟一**：\n在 $\\triangle BCD$ 中，因為 $\\overline{EF} // \\overline{CD}$，\n由平行線截比例線段與相似三角形性質（$\\triangle BEF \\sim \\triangle BCD$）：\n$$\\frac{\\overline{EF}}{\\overline{CD}} = \\frac{\\overline{BF}}{\\overline{BD}} \\quad \\cdots\\cdots ①$$\n\n**步驟二**：\n在 $\\triangle DAB$ 中，因為 $\\overline{EF} // \\overline{AB}$，\n由平行線截比例線段與相似三角形性質（$\\triangle DEF \\sim \\triangle DAB$）：\n$$\\frac{\\overline{EF}}{\\overline{AB}} = \\frac{\\overline{DF}}{\\overline{BD}} \\quad \\cdots\\cdots ②$$\n\n**步驟三**：\n將 $①$ 式與 $②$ 式兩式相加：\n$$\\frac{\\overline{EF}}{\\overline{AB}} + \\frac{\\overline{EF}}{\\overline{CD}} = \\frac{\\overline{DF}}{\\overline{BD}} + \\frac{\\overline{BF}}{\\overline{BD}} = \\frac{\\overline{DF} + \\overline{BF}}{\\overline{BD}}$$\n因為 $F$ 點在線段 $\\overline{BD}$ 上，所以 $\\overline{DF} + \\overline{BF} = \\overline{BD}$：\n$$\\Rightarrow \\frac{\\overline{EF}}{\\overline{AB}} + \\frac{\\overline{EF}}{\\overline{CD}} = \\frac{\\overline{BD}}{\\overline{BD}} = 1$$\n\n**步驟四**：\n等號兩邊同除以 $\\overline{EF}$（即同乘以 $\\frac{1}{\\overline{EF}}$）：\n$$\\Rightarrow \\frac{1}{\\overline{AB}} + \\frac{1}{\\overline{CD}} = \\frac{1}{\\overline{EF}}$$\n★ **得證！**",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-11"
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

    let stored = localStorage.getItem(STORAGE_KEY);
    if (stored === null) {
      stored = localStorage.getItem('miley_wrong_questions_v82') ||
               localStorage.getItem('miley_wrong_questions_v81') ||
               localStorage.getItem('miley_wrong_questions_v80') ||
               localStorage.getItem('miley_wrong_questions_v79') ||
               localStorage.getItem('miley_wrong_questions_v78') ||
               localStorage.getItem('miley_wrong_questions_v76') ||
               localStorage.getItem('miley_wrong_questions_v75') ||
               localStorage.getItem('miley_wrong_questions_v74') ||
               localStorage.getItem('miley_wrong_questions_v73') ||
               localStorage.getItem('miley_wrong_questions_v72') ||
               localStorage.getItem('miley_wrong_questions_v71') ||
               localStorage.getItem('miley_wrong_questions_v70') ||
               localStorage.getItem('miley_wrong_questions_v69') ||
               localStorage.getItem('miley_wrong_questions_v68') ||
               localStorage.getItem('miley_wrong_questions_v67') ||
               localStorage.getItem('miley_wrong_questions_v66') ||
               localStorage.getItem('miley_wrong_questions_v65') ||
               localStorage.getItem('miley_wrong_questions_v64') ||
               localStorage.getItem('miley_wrong_questions_v63') ||
               localStorage.getItem('miley_wrong_questions_v62') ||
               localStorage.getItem('miley_wrong_questions_v61') ||
               localStorage.getItem('miley_wrong_questions_v60') ||
               localStorage.getItem('miley_wrong_questions_v59') ||
               localStorage.getItem('miley_wrong_questions_v58') ||
               localStorage.getItem('miley_wrong_questions_v57');
    }
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

    // Comprehensive split-join cleaner to purge any legacy 569X or 20474 corruption
    const cleanCorruptText = (text) => {
      if (typeof text !== 'string') return text;
      let s = text;
      if (s.includes('569X')) {
        s = s.split('569X\\frac').join('$-\\frac')
             .split('569X').join('-$');
      }
      if (s.includes('20474')) {
        s = s.split('20474').join('$$');
      }
      return s;
    };

    if (Array.isArray(this.questions)) {
      this.questions.forEach(q => {
        if (!q) return;
        ['stem', 'solution', 'concept', 'mistakeNote', 'answer'].forEach(field => {
          if (q[field]) q[field] = cleanCorruptText(q[field]);
        });
      });
    }

    // Auto-sync any newly added system seed questions or seed content updates
    INITIAL_SEED_DATA.forEach(seed => {
      if (Array.isArray(this.deletedIds) && this.deletedIds.includes(seed.id)) return;
      const idx = this.questions.findIndex(q => q && (q.id === seed.id || (q.stem && seed.stem && q.stem.includes('下列何者是最簡分數') && seed.stem.includes('下列何者是最簡分數'))));
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
