/**
 * Smart Wrong Question Review System - Data & LocalStorage Management
 * Manages wrong questions, Ebbinghaus repetition states, tree structure, seed datasets.
 */

const STORAGE_KEY = 'miley_wrong_questions_v108';

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
  },
  {
    "id": "q_math_polynomial_expansion_coeff_abs_023",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "乘法公式：多項式完全平方式展開、負號變號技巧與一次項係數對照求絕對值",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "兩大易錯陷阱：\n1.【提負號變號法】：$(-7x - a)^2 = [-(7x + a)]^2 = (7x + a)^2 = 49x^2 + 14ax + a^2$。\n2.【係數對照與雙解討論】：對照 $49x^2 - bx + 9$ 得 $a^2 = 9 \\implies a = \\pm 3$；一次項 $+14a = -b \\implies b = -14a$。\n  - 若 $a = 3 \\implies b = -42 \\implies a + b = -39 \\implies |a + b| = 39$\n  - 若 $a = -3 \\implies b = 42 \\implies a + b = 39 \\implies |a + b| = 39$\n無論哪一種情況，$|a + b|$ 恆為 39！",
    "stem": "若 $(-7x - a)^2 = 49x^2 - bx + 9$，則 $|a + b|$ 之值為何？\n\n○ (A) 18\n○ (B) 24\n○ (C) 39\n○ (D) 45",
    "answer": "(C) 39",
    "diagramUrl": "",
    "solution": "1. **步驟一：展開左式（善用提負號平方技巧）**：\n   括號內兩項皆為負號，提出負號後平方：\n   $$(-7x - a)^2 = [-(7x + a)]^2 = (7x + a)^2$$\n   利用和的平方公式 $(A + B)^2 = A^2 + 2AB + B^2$ 展開：\n   $$(7x + a)^2 = (7x)^2 + 2 \\cdot (7x) \\cdot a + a^2 = \\mathbf{49x^2 + 14ax + a^2}$$\n\n2. **步驟二：對照多項式各項係數**：\n   已知 $49x^2 + 14ax + a^2 = 49x^2 - bx + 9$：\n   - 常數項相等：$a^2 = 9 \\implies a = 3 \\text{ 或 } a = -3$\n   - 一次項相等：$+14a = -b \\implies b = -14a$\n\n3. **步驟三：分類討論計算 $|a + b|$**：\n   - **情況 ①**：若 $a = 3$，則 $b = -14 \\times 3 = -42$\n     $$a + b = 3 + (-42) = -39 \\implies |a + b| = |-39| = \\mathbf{39}$$\n   - **情況 ②**：若 $a = -3$，則 $b = -14 \\times (-3) = 42$\n     $$a + b = (-3) + 42 = 39 \\implies |a + b| = |39| = \\mathbf{39}$$\n   - 結論：無論 $a$ 是 $3$ 或 $-3$，$|a + b|$ 的值恆為 **39**。\n\n故選 **(C)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-14"
  },
  {
    "id": "q_math_mixed_fraction_diff_squares_024",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "乘法公式：帶分數平方差公式速算、正純小數/真分數借位分離",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "兩大關鍵核心：\n1.【平均中心點基準數】：$24\\frac{9}{10} = 25 - \\frac{1}{10}$、$25\\frac{1}{10} = 25 + \\frac{1}{10}$，平方差得 $25^2 - (\\frac{1}{10})^2 = 625 - \\frac{1}{100}$。\n2.【⚠️ 最易扣分陷阱（向整數借 1）】：題目規定 $0 < b < 1$（$b$ 必須為正純小數/正真分數），不能寫 $a=625, b=-\\frac{1}{100}$！必須向 625 借 1：$625 - \\frac{1}{100} = 624 + (1 - \\frac{1}{100}) = 624 + \\frac{99}{100}$，故 $a = 624$！",
    "stem": "$24\\frac{9}{10} \\times 25\\frac{1}{10} = a + b$，若 $a$ 為正整數且 $0 < b < 1$，則 $a =$ ？",
    "answer": "624",
    "diagramUrl": "",
    "solution": "1. **尋找基準整數，套用平方差公式**：\n   觀察兩帶分數的平均中心為 $25$：\n   $$24\\frac{9}{10} = 25 - \\frac{1}{10}$$\n   $$25\\frac{1}{10} = 25 + \\frac{1}{10}$$\n   套用平方差公式 $(A - B)(A + B) = A^2 - B^2$：\n   $$24\\frac{9}{10} \\times 25\\frac{1}{10} = \\left(25 - \\frac{1}{10}\\right)\\left(25 + \\frac{1}{10}\\right) = 25^2 - \\left(\\frac{1}{10}\\right)^2 = 625 - \\frac{1}{100}$$\n\n2. **滿足 $a$ 為正整數且 $0 < b < 1$ 的關鍵拆解**：\n   $\\because b$ 必須介於 $0$ 與 $1$ 之間（正真分數），若取 $a=625$，則 $b=-\\frac{1}{100} < 0$ 不合！\n   因此需向整數 $625$ **「借 1」** 轉化為正小數：\n   $$625 - \\frac{1}{100} = 624 + \\left(1 - \\frac{1}{100}\\right) = \\mathbf{624} + \\mathbf{\\frac{99}{100}}$$\n   - 正整數部分：$a = \\mathbf{624}$\n   - 純小數部分：$b = \\frac{99}{100}$（滿足 $0 < \\frac{99}{100} < 1$）\n\n故填 **624**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-14"
  },
  {
    "id": "q_math_bittest_diff_squares_compare_025",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "解題技巧不足",
    "concept": "乘法公式：歷屆基測經典題——平方差公式展開與公因數基準比較法",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "秒殺思維：千萬不要硬乘出六位數！\n1. 套用平方差 $(A+B)(A-B)$。\n2. 統一基準數 804：\n  - (A) $750 \\times 804$\n  - (B) $900 \\times 804$\n  - (C) $1600 \\times 402 = 800 \\times 804$\n  - (D) $1610 \\times 402 = 805 \\times 804$\n大家都有 $\\times 804$，比較係數 $900 > 805 > 800 > 750$，一眼秒殺 (B)！",
    "stem": "下列四個式子，哪一個值最大？〔96.基測 II〕\n\n○ (A) $777^2 - 27^2$\n○ (B) $852^2 - 48^2$\n○ (C) $1001^2 - 599^2$\n○ (D) $1006^2 - 604^2$",
    "answer": "(B) $852^2 - 48^2$",
    "diagramUrl": "",
    "solution": "1. **利用平方差公式 $A^2 - B^2 = (A + B)(A - B)$ 展開各選項**：\n   - **(A)** $(777 + 27)(777 - 27) = \\mathbf{750} \\times \\mathbf{804}$\n   - **(B)** $(852 + 48)(852 - 48) = \\mathbf{900} \\times \\mathbf{804}$\n   - **(C)** $(1001 + 599)(1001 - 599) = 1600 \\times 402$\n     巧妙借 $2$ 給 $402$ 統一基準：\n     $$= (800 \\times 2) \\times 402 = \\mathbf{800} \\times \\mathbf{804}$$\n   - **(D)** $(1006 + 604)(1006 - 604) = 1610 \\times 402$\n     同樣借 $2$ 給 $402$：\n     $$= (805 \\times 2) \\times 402 = \\mathbf{805} \\times \\mathbf{804}$$\n\n2. **同乘基準數 804，直接比係數大小**：\n   因為四個式子皆化為「$\\text{某數} \\times 804$」，直接比較前面的因數：\n   $$\\mathbf{900} > 805 > 800 > 750$$\n   因此 (B) 的值最大。\n\n故選 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-14"
  },
  {
    "id": "q_math_diff_squares_plus_minus_trap_026",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "乘法公式：平方差求未知數、負數平方正負雙解陷阱",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "⚠️ 超級大陷阱：\n題目只給 $2000^2 - a^2 = b$，完全沒有限制 $a > 0$！\n$a^2 = 36 \\implies a = \\pm 6$（正負 6 都要寫！）。\n求 $b$ 時用 $2000^2 - 36 = 4000000 - 36 = 3999964$ 秒殺，千萬不要硬筆算直式乘法！",
    "stem": "若 $1994 \\times 2006 = 2000^2 - a^2 = b$，則 $a =$ ？；$b =$ ？",
    "answer": "$a = \\pm 6$；$b = 3999964$",
    "diagramUrl": "",
    "solution": "1. **步驟一：以 2000 為中心套用平方差公式**：\n   $$1994 = 2000 - 6$$\n   $$2006 = 2000 + 6$$\n   $$1994 \\times 2006 = (2000 - 6)(2000 + 6) = 2000^2 - 6^2$$\n\n2. **步驟二：求 $a$ 之值（注意正負雙解陷阱）**：\n   對照式子 $2000^2 - a^2 = 2000^2 - 6^2$：\n   $$a^2 = 6^2 = 36$$\n   ⚠️ **關鍵注意**：題目未限定 $a$ 為正數，而 $6^2 = 36$ 且 $(-6)^2 = 36$：\n   $$\\mathbf{a = \\pm 6} \\quad (\\text{或寫 } 6 \\text{ 或 } -6)$$\n\n3. **步驟三：求 $b$ 之值**：\n   $$b = 2000^2 - 36 = 4,000,000 - 36 = \\mathbf{3,999,964}$$\n\n故答：$a = \\pm 6$；$b = 3999964$。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-14"
  },
  {
    "id": "q_math_overlapping_squares_area_027",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "解題技巧不足",
    "concept": "乘法公式：重疊正方形面積求法、平方差公式消去分數技巧",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "極致美感平方差題：\n1. 面積公式：大正方形 + 小正方形 - 重疊部分 = $30^2 + (22\\frac{1}{2})^2 - (7\\frac{1}{2})^2$。\n2. 後兩項平方差分數全消：$(22\\frac{1}{2} + 7\\frac{1}{2})(22\\frac{1}{2} - 7\\frac{1}{2}) = 30 \\times 15$。\n3. 提公因數 30：$30(30 + 15) = 30 \\times 45 = 1350$（平方公分）！整題不需任何分數計算！",
    "stem": "如右圖，將兩張大小不同的正方形紙張重疊，如果重疊部分是一個邊長為 $7\\frac{1}{2}$ 公分的正方形，已知原來兩正方形的邊長分別是 $30$ 公分、$22\\frac{1}{2}$ 公分，則重疊後的圖形其面積為多少平方公分？\n\n○ (A) 1250\n○ (B) 1350\n○ (C) 1400\n○ (D) 1450",
    "answer": "(B) 1350",
    "diagramUrl": "assets/questions/q_math_overlapping_squares_area_022.png",
    "solution": "1. **步驟一：依重疊面積原理列出幾何算式**：\n   重疊後圖形總面積等於「兩正方形面積和減去重複計算的重疊面積」：\n   $$\\text{總面積} = 30^2 + \\left(22\\frac{1}{2}\\right)^2 - \\left(7\\frac{1}{2}\\right)^2$$\n\n2. **步驟二：觀察後兩項，套用平方差公式神速化簡**：\n   千萬不要硬算分數平方！將後兩項結合為 $A^2 - B^2 = (A + B)(A - B)$：\n   $$\\left(22\\frac{1}{2}\\right)^2 - \\left(7\\frac{1}{2}\\right)^2 = \\left(22\\frac{1}{2} + 7\\frac{1}{2}\\right)\\left(22\\frac{1}{2} - 7\\frac{1}{2}\\right)$$\n   - 和：$22.5 + 7.5 = \\mathbf{30}$（分數直接相加變為整數！）\n   - 差：$22.5 - 7.5 = \\mathbf{15}$\n   故後兩項平方差即為：$30 \\times 15$！\n\n3. **步驟三：提出公因數 30，心算秒殺答案**：\n   原算式改寫為：\n   $$30^2 + 30 \\times 15 = 30 \\times (30 + 15) = 30 \\times 45 = \\mathbf{1350}\\text{ (平方公分)}$$\n\n故選 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-14"
  },
  {
    "id": "q_math_triangle_midpoint_trisect_df_028",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段與相似形：三角形兩邊中點連線定理之雙重嵌套應用",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【關鍵破題思路 — 尋找隱藏的「中點連線」】：\n看到「三等分點」與「中點」，馬上聯想「中點連線平行且長度為底邊一半」！\n本題有兩個嵌套的三角形：\n1. 先看 $\\triangle AEC$：$D$ 為 $\\overline{AE}$ 中點、$F$ 為 $\\overline{AC}$ 中點 $\\implies \\overline{DF} \\parallel \\overline{CE}$ 且 $\\overline{DF} = \\frac{1}{2}\\overline{EC}$。\n2. 再看 $\\triangle BDF$：$E$ 為 $\\overline{BD}$ 中點，且 $\\overline{EP} \\parallel \\overline{DF} \\implies P$ 為 $\\overline{BF}$ 中點，$\\overline{EP} = \\frac{1}{2}\\overline{DF}$。\n3. 設未知數貫穿兩式：設 $\\overline{DF} = x \\implies \\overline{EP} = \\frac{1}{2}x$。\n   則整段 $\\overline{EC} = \\overline{EP} + \\overline{PC} = \\frac{1}{2}x + 3$。\n   由第一式 $x = \\frac{1}{2}(\\frac{1}{2}x + 3)$，輕鬆解出 $x = 2$！",
    "stem": "如圖，在 $\\triangle ABC$ 中，$D$、$E$ 將 $\\overline{AB}$ 三等分（即 $\\overline{AD} = \\overline{DE} = \\overline{EB}$），$F$ 為 $\\overline{AC}$ 中點。連接 $\\overline{DF}$ 與 $\\overline{EC}$，$\\overline{BF}$ 與 $\\overline{EC}$ 相交於 $P$ 點。若 $\\overline{CP} = 3$，則 $\\overline{DF} = $ ？",
    "answer": "2",
    "diagramUrl": "assets/questions/q_math_triangle_midpoint_trisect_df_028.png",
    "solution": "1. **步驟一：觀察 $\\triangle AEC$，找出第一組中點連線**：\n   - 因 $D$、$E$ 三等分 $\\overline{AB}$，故 $\\overline{AD} = \\overline{DE}$，即 $D$ 為 $\\overline{AE}$ 的中點。\n   - 題目已知 $F$ 為 $\\overline{AC}$ 的中點（$\\overline{AF} = \\overline{FC}$）。\n   - 根據**三角形兩邊中點連線定理**：\n     $$\\overline{DF} \\parallel \\overline{EC} \\quad \\text{且} \\quad \\overline{DF} = \\frac{1}{2}\\overline{EC}$$\n\n2. **步驟二：觀察 $\\triangle BDF$，找出第二組中點連線**：\n   - 同樣由三等分可知 $\\overline{DE} = \\overline{EB}$，即 $E$ 為 $\\overline{BD}$ 的中點。\n   - 因為由步驟一已證得 $\\overline{DF} \\parallel \\overline{EC}$，而 $P$ 在 $\\overline{EC}$ 上，所以 $\\overline{EP} \\parallel \\overline{DF}$。\n   - 在 $\\triangle BDF$ 中，過一邊中點 $E$ 作底邊 $\\overline{DF}$ 的平行線，必平分另一邊 $\\overline{BF}$（即 $P$ 為 $\\overline{BF}$ 中點），且：\n     $$\\overline{EP} = \\frac{1}{2}\\overline{DF}$$\n\n3. **步驟三：設未知數列方程式求解**：\n   - 設所求 $\\overline{DF} = x$。\n   - 由步驟二可得：\n     $$\\overline{EP} = \\frac{1}{2}\\overline{DF} = \\frac{1}{2}x$$\n   - 整段線段 $\\overline{EC} = \\overline{EP} + \\overline{CP}$，題目已知 $\\overline{CP} = 3$：\n     $$\\overline{EC} = \\frac{1}{2}x + 3$$\n   - 代回步驟一的關係式 $\\overline{DF} = \\frac{1}{2}\\overline{EC}$：\n     $$x = \\frac{1}{2}\\left(\\frac{1}{2}x + 3\\right)$$\n   - 兩邊同乘以 $2$：\n     $$2x = \\frac{1}{2}x + 3$$\n   - 移項化簡：\n     $$\\frac{3}{2}x = 3 \\implies x = 3 \\times \\frac{2}{3} = \\mathbf{2}$$\n\n因此，$\\overline{DF} = \\mathbf{2}$。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-14"
  },
  {
    "id": "q_soc_persian_zoroastrianism_map_029",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "西亞古文明：波斯帝國之發源地（伊朗高原）與祆教（拜火教）善惡二元論信仰特色",
    "uploadDate": "2026-09-14",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【地理位置與宗教速記關鍵】：\n1. 關鍵特徵識別：「崇拜光明、以火為尊、善惡對立」= 祆教（拜火教 / 瑣羅亞斯德教）。\n2. 附圖文明發源地對照：\n   - 甲（巴爾幹半島/希臘）：古希臘文明（多神信仰、宙斯、民主哲學）。\n   - 乙（尼羅河流域/埃及）：古埃及文明（太陽神拉、金字塔、木乃伊與來世觀）。\n   - 丙（兩河流域/美索不達米亞）：蘇美、巴比倫、亞述等（多神信仰、吉爾伽美什史詩）。\n   - 丁（伊朗高原/波斯）：波斯帝國發源核心，創立並盛行祆教！\n3. 趣味連結：金庸小說《倚天屠龍記》中張無忌統領的「明教（摩尼教）」，正是起源於波斯、承襲拜火與光明善惡對立觀念的宗教！",
    "stem": "無忌信仰的宗教其特色是崇拜光明、以火為尊，並講究善惡的對立。請問：無忌所信仰的宗教應該源自於附圖中何處？\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(D) 丁",
    "diagramUrl": "assets/questions/q_soc_persian_zoroastrianism_map_029.png",
    "solution": "1. **步驟一：由宗教特色判斷宗教種類**：\n   - 題目提及：「**崇拜光明、以火為尊、講究善惡對立**」。\n   - 此為古代波斯人創立的宗教——**祆（ㄒㄧㄢ）教**（又稱**拜火教**、**瑣羅亞斯德教**）。\n   - 其核心教義為「光明善神（阿胡拉·馬茲達）」與「黑暗惡神（阿里曼）」的善惡二元對立，並相信世界末日會有最後審判，善人升天堂、惡人下地獄（對後來的猶太教、基督教、伊斯蘭教產生深遠影響）。\n\n2. **步驟二：判讀地圖代號地理位置**：\n   - **甲**：**巴爾幹半島（希臘）**，為古希臘愛琴文明、城邦文明發源地。\n   - **乙**：**尼羅河流域（埃及）**，為古埃及文明，崇拜太陽神與冥王，相信靈魂不滅。\n   - **丙**：**兩河流域（美索不達米亞平原）**，底格里斯河與幼發拉底河，蘇美、巴比倫文明發源地。\n   - **丁**：**伊朗高原（波斯）**，此處即為古波斯人興起之地，也是**祆教**的發源核心！\n\n3. **步驟三：總結**：\n   - 祆教盛行並發源於**伊朗高原（丁）**，故正確答案選 **(D)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-14"
  },
  {
    "id": "q_bio_cancer_cell_division_mitosis_030",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "細胞分裂（有絲分裂）之染色體行為與姐妹染色分體分離",
    "uploadDate": "2026-09-15",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【體細胞增生 vs. 產生配子關鍵對比】：\n1. 癌細胞是大腸的「體細胞」異常增生，進行的是「細胞分裂（有絲分裂）」，絕非產生生殖細胞的「減數分裂」！\n2. 細胞分裂過程：染色體複製 1 次，分裂 1 次。後期是著絲點分開，「姐妹染色分體」分別移向兩端。\n3. 母細胞有 2 對（4 條，2長2短）染色體，故分裂時兩端各自分配到完整的 4 條（2長2短）單分體，子細胞染色體數目與母細胞完全相同（2n → 2n）！\n4. 選項陷阱：(A) 圖是減數分裂第一次分裂後期（同源染色體分離，每端僅 1長1短）；(B) 圖才是細胞分裂（姐妹染色分體分離，每端均有 2長2短）！",
    "stem": "癌細胞的特性是細胞的生長不受調節，進而不斷進行「細胞分裂」而增生。若大腸內之癌細胞的 2 對染色體如圖所示，則當此癌細胞增生時，會出現下列哪一種分裂形式？\n\n○ (A) 分裂時同源染色體分離，每側分配 1 長 1 短之二分體\n○ (B) 分裂時姐妹染色分體分離，每側分配 2 長 2 短共 4 條染色體",
    "answer": "(B)",
    "diagramUrl": "assets/questions/q_bio_cancer_cell_division_001.png",
    "solution": "1. **步驟一：確認分裂類型**：\n   - 癌細胞是大腸「體細胞」的病變增生，題目也特別註明進行「細胞分裂（有絲分裂）」，而不是生殖細胞形成的「減數分裂」。\n\n2. **步驟二：分析母細胞染色體數目與形態**：\n   - 母細胞內有 **2 對（共 4 條）** 染色體（2 條較長、2 條較短）。\n\n3. **步驟三：分析細胞分裂各階段特徵**：\n   - **染色體複製**：每條染色體複製成由兩條姐妹染色分體組成的二分體。\n   - **後期分離**：著絲點分裂，**姐妹染色分體分離**並分別移向細胞兩端。\n   - **分配結果**：細胞兩端各自分配到完整的 2 對染色體（**2 長 + 2 短，共 4 條**），維持子細胞與母細胞相同的染色體套數（$2n \\to 2n$）。\n\n4. **步驟四：各選項判讀**：\n   - **(A)**：兩端各只有 1 長 1 短，且染色體為「X」形二分體，此為**減數分裂第一階段（同源染色體分離）**，錯誤。\n   - **(B)**：兩端各有 2 長 2 短（共 4 條分開的染色體），正是**細胞分裂（有絲分裂）後期姐妹染色分體分離**的特徵，故為正解。\n\n正確答案選 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-15"
  },
  {
    "id": "q_bio_sexual_reproduction_characteristics_031",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "有性生殖與無性生殖之特徵比較、受精方式與染色體套數變化",
    "uploadDate": "2026-09-15",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【有性生殖 vs. 無性生殖核心判斷】：\n1. 配子產生方式：必須先經過「減數分裂」（2n → 1n）形成配子（精卵），非細胞分裂！\n2. 受精地點：分為「體內受精」（如鳥類、哺乳類）與「體外受精」（如魚類、兩生類），並非都在雌性體內！\n3. 遺傳變異（關鍵正解）：因精卵隨機結合，基因重新組合，故「子代遺傳特性與親代不同」，有利適應多變環境！\n4. 染色體套數：親代為雙套（2n），配子單套（1n），受精後子代又恢復雙套（2n），故親代與子代的染色體套數是「相同」的！",
    "stem": "關於有性生殖的敘述，下列何者正確？\n\n○ (A) 需先經細胞分裂產生配子\n○ (B) 雌雄配子的結合，都在雌性體內進行\n○ (C) 子代的遺傳特性與親代不同\n○ (D) 親代的染色體套數與子代不同",
    "answer": "(C) 子代的遺傳特性與親代不同",
    "diagramUrl": "",
    "solution": "○ 詳細解析：\n\n1. **選項逐一檢驗**：\n   - **(A) 錯誤**：產生配子（精子、卵子）需經過**減數分裂**（染色體數目減半，$2n \\to 1n$），而非一般細胞分裂。\n   - **(B) 錯誤**：雌雄配子結合稱為「受精」，分為**體內受精**（如哺乳類、鳥類、爬蟲類）與**體外受精**（如多數魚類、兩生類），並非全部都在體內。\n   - **(C) 正確**：有性生殖結合了雙親的遺傳物質，且減數分裂與受精過程具有基因重組，使得**子代的遺傳特性與親代不同**（具有個別差異，利於演化與適應環境變異）。\n   - **(D) 錯誤**：親代為雙套（$2n$），形成的配子為單套（$1n$）；受精卵結合後恢復為雙套（$2n$），因此**親代與子代的染色體套數相同**。\n\n2. **重點結論**：\n   - 正確答案為 **(C)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-15"
  },
  {
    "id": "q_bio_meiosis_chimpanzee_chromosomes_032",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "審題不清",
    "concept": "減數分裂之複製次數、分裂次數與配子染色體數目（單套不成對）",
    "uploadDate": "2026-09-15",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【減數分裂兩大最易失分盲點】：\n1.【複製次數陷阱】：減數分裂雖然「連續分裂 2 次」，但「染色體只複製 1 次」！絕不是分裂兩次就複製兩次！\n2.【「條」vs.「對」陷阱（必考！）】：配子（精子、卵子）為「單套（$1n$）」，裡面的染色體皆已分離獨立，沒有同源染色體成雙成對！黑猩猩體細胞 $2n = 48$ 條（24 對），減數分裂後精子含 $1n = 24$「條」，絕不能說成「12 對」！",
    "stem": "已知黑猩猩的體細胞有 48 條染色體，當雄性黑猩猩體內行減數分裂產生精子時，有關染色體的敘述，下列何者正確？\n\n○ (A) 染色體複製 1 次，精子內含 24 條染色體\n○ (B) 染色體複製 2 次，精子內含 48 條染色體\n○ (C) 染色體複製 1 次，精子內含 12 對染色體\n○ (D) 染色體複製 2 次，精子內含 24 對染色體",
    "answer": "(A) 染色體複製 1 次，精子內含 24 條染色體",
    "diagramUrl": "",
    "solution": "○ 詳細解析：\n\n1. **黑猩猩染色體基本分析**：\n   - 黑猩猩為雙倍體生物，**體細胞**（雙套 $2n$）含有 **48 條染色體（24 對）**。\n\n2. **減數分裂特徵**：\n   - **複製次數**：染色體**僅複製 1 次**。\n   - **分裂次數**：連續**分裂 2 次**（第一次分裂同源染色體分離，第二次分裂姐妹染色分體分離）。\n   - **結果**：形成 4 個子細胞（精子），每個精子含有**單套（$1n$）**染色體，數目減半為 **24 條**。\n\n3. **選項盲點逐一檢視**：\n   - **(A) 正確**：染色體複製 1 次，形成的精子含有體細胞一半的染色體（$48 \\div 2 = 24$ 條）。\n   - **(B) 錯誤**：染色體只複製 1 次，不是 2 次；精子染色體數為 24 條，非 48 條。\n   - **(C) 錯誤**：精子是**單套（$1n$）**，染色體單獨存在，**不成對**！不能稱作「12 對」，應為「24 條」。\n   - **(D) 錯誤**：複製僅 1 次，且精子為單套，不成對。\n\n故正確答案為 **(A)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-15"
  },
  {
    "id": "q_math_triangle_midpoint_perimeter_area_033",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "三角形中點連線段性質：相似比、周長比與面積比（4倍）",
    "uploadDate": "2026-09-15",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【中點三角形兩大核心比例關係】：\n1.【周長比等於邊長比（2倍）】：中點連線段長度為第三邊的一半，故 $\\triangle ABC$ 各邊長皆為 $\\triangle DEF$ 的 2 倍，周長 $= 24 \\times 2 = 48$！\n2.【⚠️ 最易扣分盲點：面積比是邊長比的平方（4倍）】：相似形面積比為對應邊長比的平方（$2^2 = 4$ 倍）！三邊中點相連將大三角形分成 4 個面積相等的小三角形，故 $\\triangle ABC$ 面積 $= 24 \\times 4 = 96$，絕不能誤乘 2！",
    "stem": "若 $D$、$E$、$F$ 為 $\\triangle ABC$ 三邊中點，且 $\\triangle DEF$ 的三邊長分別為 $6$、$8$、$10$，則 $\\triangle ABC$ 的周長為何？$\\triangle ABC$ 的面積為何？",
    "answer": "周長為 48，面積為 96",
    "diagramUrl": "",
    "solution": "○ 詳細解題步驟：\n\n1. **步驟一：由中點連線段性質求邊長比與周長**：\n   - 設 $D, E, F$ 為 $\\triangle ABC$ 三邊中點。\n   - 由三角形中點連線段定理：連接兩邊中點的線段平行於第三邊且長度等於第三邊的一半。\n     $$\\overline{DE} = \\frac{1}{2}\\overline{AC}, \\quad \\overline{EF} = \\frac{1}{2}\\overline{AB}, \\quad \\overline{DF} = \\frac{1}{2}\\overline{BC}$$\n   - 因此 $\\triangle ABC$ 的三邊長分別為 $\\triangle DEF$ 三邊長的 $2$ 倍：\n     $$2 \\times 6 = 12, \\quad 2 \\times 8 = 16, \\quad 2 \\times 10 = 20$$\n   - $\\triangle ABC$ 的周長為：\n     $$\\text{周長} = 12 + 16 + 20 = 48$$\n     （亦可由周長比等於邊長比直接計算：$(6 + 8 + 10) \\times 2 = 24 \\times 2 = 48$）。\n\n2. **步驟二：判斷 $\\triangle DEF$ 形狀並計算面積**：\n   - 檢驗 $\\triangle DEF$ 的三邊長 $6, 8, 10$：\n     $$6^2 + 8^2 = 36 + 64 = 100 = 10^2$$\n   - 滿足畢氏定理，故 $\\triangle DEF$ 為以 $6$ 和 $8$ 為兩股的**直角三角形**。\n   - $\\triangle DEF$ 的面積為：\n     $$\\text{面積}_{\\triangle DEF} = \\frac{1}{2} \\times 6 \\times 8 = 24$$\n\n3. **步驟三：利用面積比求 $\\triangle ABC$ 的面積**：\n   - 相似三角形的面積比等於對應邊長比的平方：\n     $$\\frac{\\text{面積}_{\\triangle ABC}}{\\text{面積}_{\\triangle DEF}} = \\left(\\frac{2}{1}\\right)^2 = 4$$\n   - $\\triangle ABC$ 的面積為：\n     $$\\text{面積}_{\\triangle ABC} = 4 \\times 24 = 96$$\n\n標準答案：周長為 **48**，面積為 **96**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-15"
  },
  {
    "id": "q_math_triangle_midpoint_ratio_ae_ef_034",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "解題技巧不足",
    "concept": "三角形中點與平行線輔助線：中點連線段逆用與比例線段（求線段比 AE : EF）",
    "uploadDate": "2026-09-15",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【解題關鍵：作平行線輔助線轉化中點比例】：\n1.【構造輔助線破題】：遇到交錯的兩條線段與中點，過已知中點 $D$ 作與截線平行的輔助線 $\\overline{DG} \\parallel \\overline{AF}$，交 $\\overline{BC}$ 於 $G$！\n2.【兩次利用中點連線性質轉化】：\n   - 在 $\\triangle AFC$ 中：$D$ 為 $\\overline{AC}$ 中點，$\\overline{DG} \\parallel \\overline{AF} \\implies \\overline{DG} = \\frac{1}{2} \\overline{AF}$。\n   - 在 $\\triangle BDG$ 中：$E$ 為 $\\overline{BD}$ 中點，$\\overline{EF} \\parallel \\overline{DG} \\implies \\overline{EF} = \\frac{1}{2} \\overline{DG} = \\frac{1}{4} \\overline{AF}$。\n3.【最後求比例】：$\\overline{AE} = \\overline{AF} - \\overline{EF} = \\frac{3}{4} \\overline{AF}$，故 $\\overline{AE} : \\overline{EF} = \\frac{3}{4} : \\frac{1}{4} = 3 : 1$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$E$ 分別為 $\\overline{AC}$、$\\overline{BD}$ 的中點，連接 $\\overline{AE}$，並延長 $\\overline{AE}$ 交 $\\overline{BC}$ 於 $F$ 點，則 $\\overline{AE} : \\overline{EF} = ?$ \n\n（點擊附圖可放大檢視幾何圖形與輔助線構造）",
    "answer": "3 : 1",
    "diagramUrl": "assets/questions/q_math_triangle_midpoint_ratio_ae_ef_034.png",
    "solution": "○ 詳細解題步驟：\n\n1. **步驟一：作輔助線（構造中點平行線）**：\n   - 過點 $D$ 作 $\\overline{DG} \\parallel \\overline{AF}$，交 $\\overline{BC}$ 於 $G$ 點。\n\n2. **步驟二：在 $\\triangle AFC$ 中分析**：\n   - $\\because D$ 為 $\\overline{AC}$ 的中點，且 $\\overline{DG} \\parallel \\overline{AF}$（同位角相等，$\\triangle CDG \\sim \\triangle CAF$）。\n   - 由三角形中點連線性質：\n     $$\\overline{DG} = \\frac{1}{2}\\overline{AF}, \\quad \\overline{CG} = \\overline{GF}$$\n\n3. **步驟三：在 $\\triangle BDG$ 中分析**：\n   - $\\because E$ 為 $\\overline{BD}$ 的中點，且 $\\overline{EF} \\parallel \\overline{DG}$（$\\because \\overline{AF} \\parallel \\overline{DG}$ 且 $E, F$ 分別在 $\\overline{AF}$ 及其直線上）。\n   - 由三角形中點連線段性質：\n     $$\\overline{EF} = \\frac{1}{2}\\overline{DG} = \\frac{1}{2} \\times \\left(\\frac{1}{2}\\overline{AF}\\right) = \\frac{1}{4}\\overline{AF}$$\n     （且 $\\overline{BF} = \\overline{FG}$，可得 $\\overline{BF} : \\overline{FG} : \\overline{GC} = 1 : 1 : 1$）。\n\n4. **步驟四：計算線段比 $\\overline{AE} : \\overline{EF}$**：\n   - 已知整段 $\\overline{AF}$ 中，$\\overline{EF} = \\frac{1}{4}\\overline{AF}$：\n     $$\\overline{AE} = \\overline{AF} - \\overline{EF} = \\overline{AF} - \\frac{1}{4}\\overline{AF} = \\frac{3}{4}\\overline{AF}$$\n   - 兩線段長度比為：\n     $$\\overline{AE} : \\overline{EF} = \\left(\\frac{3}{4}\\overline{AF}\\right) : \\left(\\frac{1}{4}\\overline{AF}\\right) = 3 : 1$$\n\n○ **速解小技巧（孟氏定理 Menelaus's Theorem）**：\n   以 $\\triangle BCD$ 與截線 $A-E-F$ 套用孟氏定理：\n   $$\\frac{\\overline{BF}}{\\overline{FC}} \\times \\frac{\\overline{CA}}{\\overline{AD}} \\times \\frac{\\overline{DE}}{\\overline{EB}} = 1$$\n   由前面中點比例得 $\\overline{BF} : \\overline{FC} = 1 : 2$，$\\frac{\\overline{CA}}{\\overline{AD}} = \\frac{2}{1}$，$\\frac{\\overline{DE}}{\\overline{EB}} = 1$。\n   再以 $\\triangle BDG$ 截線計算，亦可瞬間得出 $\\overline{AE} : \\overline{EF} = 3 : 1$！\n\n標準答案為 **3 : 1**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-15"
  },
  {
    "id": "q_bio_fern_vegetative_reproduction_035",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "蕨類植物的地下莖營養器官繁殖與無性生殖特性",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【蕨類繁殖與無性生殖三大核心考點與盲點對照】：\n1.【乙構造是「地下莖」（營養器官）】：蕨類在地面上常見的是羽狀複葉，埋在土壤中的橫走部分為「地下莖」（營養器官），下方長出不定根。利用乙截段長出丙植株，屬於「營養器官繁殖（無性生殖）」。\n2.【無性生殖 vs 有性生殖機制對照】：\n   - 分裂方式：僅經過「細胞分裂（有絲分裂）」，絕不經過「減數分裂」與受精作用！\n   - 遺傳特性：不考慮突變下，丙植株的基因型與親代甲植株完全相同，無法增加「遺傳多樣性」（基因多樣性）！\n3.【⚠️ 陷阱選項 (C) 偷換概念】：蕨類植物是「孢子繁殖」的維管束植物，屬於「無花植物」（不開花、不結種子），根本沒有花朵！看到「花朵顏色基因型」直接排除！",
    "stem": "附圖是小林繁殖校園蕨類植物的過程示意圖，根據此圖，在不考慮突變的情況下，從圖中乙構造置入培養土中到丙植株成長的過程，下列敘述何者正確？\n\n（點擊附圖可放大檢視蕨類地下莖繁殖示意圖）\n\n○ (A) 此繁殖過程須經過減數分裂\n○ (B) 丙植株是由營養器官所形成\n○ (C) 丙植株的花朵顏色基因型與甲植株相同\n○ (D) 有利於增加此種蕨類植物的遺傳多樣性",
    "answer": "(B) 丙植株是由營養器官所形成",
    "diagramUrl": "assets/questions/q_bio_fern_vegetative_reproduction_035.png",
    "solution": "○ 詳細破題解析：\n\n1. **圖意判讀與構造確認**：\n   - 甲植株為蕨類植物，其地上部分為羽狀複葉，土壤橫向生長之構造「乙」為**地下莖**（莖屬於營養器官，植物的根、莖、葉皆為營養器官）。\n   - 將乙截取一段置入培養土中，經一段時間長成丙植株，此過程為利用地下莖發育成新個體，屬於**營養器官繁殖**，為**無性生殖**的一種。\n\n2. **各選項逐一剖析**：\n   - **(A) 錯誤**：無性生殖過程是由體細胞透過**細胞分裂（有絲分裂）**增殖與分化產生新植株，**不須經過減數分裂**（減數分裂僅發生於形成配子或孢子的有性生殖/生活史特定階段）。\n   - **(B) 正確**：乙構造為地下莖，屬於植物的**營養器官**，因此丙植株是由營養器官所繁殖形成。\n   - **(C) 錯誤**：蕨類植物屬於**無花植物**（以孢子繁殖，不開花、不產生種子），因此**不會開花**，更無花朵顏色基因型可言。\n   - **(D) 錯誤**：無性生殖過程中未涉及雌雄配子結合與遺傳物質重組，在不考慮突變的情況下，丙植株的基因型與親代甲植株完全相同，**無法增加遺傳多樣性**（若環境劇烈改變，所有個體可能同時面臨滅絕風險）。\n\n標準答案為 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-16"
  },
  {
    "id": "q_bio_platypus_oviparous_mammal_036",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "卵生哺乳類（鴨嘴獸、針鼴）之生殖發育、呼吸方式與卵黃養分比較",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【哺乳類三大類群生殖方式與卵大小核心考點】：\n1.【哺乳類生殖三大類群對照】：\n   -「單孔目（卵生）」：鴨嘴獸、針鼴。體內受精、體外卵生孵化，無胎盤、無乳頭（分泌乳汁供幼獸舔食）。受精卵在母體外發育，胚胎所需養分「完全由卵黃提供」，因此【卵較大、含大量卵黃】！\n   -「有袋類（胎生但無真正胎盤）」：袋鼠、無尾熊。幼獸早產，爬入育兒袋吸吮乳頭長大。\n   -「真獸類（胎盤類）」：人類、犬、鯨等。受精卵著床於子宮，藉由「胎盤與臍帶」由母體持續供應養分，因此【卵極小、幾乎不含卵黃】！\n2.【⚠️ 卵的大小本質比較】：卵生動物（如鴨嘴獸、鳥類、爬蟲類）的卵因必須自帶胚胎發育全程所需的全部養分，故卵大、卵黃極多；而胎生動物（如無尾熊、人）的胚胎由母體持續補給，故卵極小！\n3.【⚠️ 呼吸器官陷阱】：鴨嘴獸是「哺乳類」，終生皆用「肺」呼吸，絕非兩生類的變態發育（用鰓呼吸）！",
    "stem": "鴨嘴獸為澳洲產的一種特有的動物，關於此動物的敘述，下列何者正確？\n\n○ (A) 鴨嘴獸為一種有袋的哺乳類動物，胎盤發育不完全\n○ (B) 喜歡棲息在河川中，幼時用鰓呼吸，成體用肺呼吸\n○ (C) 鴨嘴獸受精卵發育時所需的養分由母親提供\n○ (D) 鴨嘴獸的卵較無尾熊大",
    "answer": "(D) 鴨嘴獸的卵較無尾熊大",
    "diagramUrl": "",
    "solution": "○ 詳細破題解析：\n\n1. **鴨嘴獸的生物分類與生理特徵**：\n   - 鴨嘴獸（Platypus）屬於脊椎動物門哺乳綱**單孔目**，是極少數現存的**卵生哺乳類**（另一代表為針鼴）。\n   - 雖然會產卵，但母體腹部有乳腺（無明顯乳頭），幼獸孵化後會舔食母獸腹部毛皮滲出的乳汁。\n   - 鴨嘴獸為恆溫動物、用**肺呼吸**，並非兩生類，終生均不具有鰓。\n\n2. **各選項逐一剖析**：\n   - **(A) 錯誤**：鴨嘴獸為「**卵生哺乳類**」，沒有育兒袋，也沒有胎盤；有育兒袋、胎盤發育不完全者為「**有袋類**」（如袋鼠、無尾熊）。\n   - **(B) 錯誤**：鴨嘴獸雖長年在水中覓食、棲息於水域環境，但身為哺乳動物，**終生皆以肺呼吸**，潛水時閉氣，幼體亦無鰓。\n   - **(C) 錯誤**：鴨嘴獸為卵生，受精卵產出體外孵化，胚胎發育所需的養分**完全由卵內的卵黃提供**，而非由母體血液直接供應。\n   - **(D) 正確**：\n     - 鴨嘴獸為**卵生**，受精卵產出後獨立在外界發育，必須仰賴卵內的卵黃提供胚胎發育所需的全部養分，故**卵徑較大、富含卵黃**。\n     - 無尾熊為**胎生**哺乳類（有袋類），其卵只需提供受精初期極微量的養分，受精後胚胎即由母體提供養分（進入育兒袋吸乳長大），故**卵非常微小**。\n     - 因此鴨嘴獸的卵遠比無尾熊的卵大。\n\n標準答案為 **(D)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-16"
  },
  {
    "id": "q_bio_animal_reproductive_behavior_seahorse_037",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "動物的求偶、生殖行為與育幼方式（海馬雄性育兒囊、蛙類鳴叫、鳥類飾羽與育幼）",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【動物求偶、生殖行為與育幼關鍵易混淆盲點】：\n1.【⚠️ 海馬的「育兒囊」在雄海馬身上（極高頻考點）】：海馬是罕見由「雄性」負責懷孕育幼的動物！交配時雌海馬將卵產在「雄海馬」下腹部的育兒囊中，由雄海馬受精、孵化並產出小海馬，絕非雌海馬！\n2.【求偶行為對照】：\n   - 青蛙：由「雄蛙」鼓起鳴囊發出鳴叫聲，目的為吸引雌蛙前來假交配。\n   - 白鷺鷥（鳥類）：繁殖期雄鳥長出特殊的繁殖羽（如頭後飾羽、背部蓑羽），展現健康體態以吸引雌鳥。\n3.【育幼行為對照】：五色鳥、燕子等親鳥啄食昆蟲回巢餵食幼鳥，屬於親代撫育（育幼行為），可大幅提高幼體存活率。",
    "stem": "雷老師請四位同學觀察動物生殖行為後，發表所觀察到的有趣經驗，哪一位同學的敘述與真實的動物行為有異？\n\n○ (A) 奈特：夜間在草叢中看到小雨蛙鼓起鳴囊鳴叫，以吸引雌蛙\n○ (B) 筱菲：在春夏繁殖季到來時，用望遠鏡看到雄白鷺鷥頭部的後方有2～3根長飾羽，以吸引雌性\n○ (C) 宗史：看到五色鳥將小蟲啄回樹洞巢中餵食幼鳥\n○ (D) 美佳：雌海馬的下腹前方有個育兒囊，這是放卵、孵化及產子的地方",
    "answer": "(D) 美佳：雌海馬的下腹前方有個育兒囊，這是放卵、孵化及產子的地方",
    "diagramUrl": "",
    "solution": "○ 詳細破題解析：\n\n1. **各選項動物生殖與育幼行為逐一剖析**：\n   - **(A) 敘述正確**：雄蛙具有鳴囊（通常位於咽喉兩側或下頜），在繁殖季節會藉由充氣鳴叫來宣示領域並吸引雌蛙進行假交配。\n   - **(B) 敘述正確**：許多鳥類在春夏繁殖季節會換上鮮豔或具特殊裝飾的「繁殖羽」（婚羽），例如雄白鷺鷥頭後方會長出 2～3 根細長如絲的飾羽，用於求偶炫耀以吸引雌鳥。\n   - **(C) 敘述正確**：五色鳥常於枯木上鑿洞築巢，幼鳥孵化後親鳥會捕捉小昆蟲回樹洞巢中餵食，屬於典型的**育幼行為**。\n   - **(D) 敘述錯誤（與真實行為有異，為本題正解）**：\n     - 海馬屬於硬骨魚類，其最著名的生殖特徵為**由雄性懷胎育兒**。\n     - 具有「育兒囊」（孵卵囊）的是**雄海馬**而非雌海馬！交配時雌海馬會將成熟卵子排入雄海馬腹部的育兒囊中，在囊內受精、吸取母體與雄性囊壁提供的養分發育，最後由**雄海馬**產出孵化成熟的小海馬。\n\n標準答案為 **(D)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-16"
  },
  {
    "id": "q_bio_flower_structure_haploid_gametes_038",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "開花植物（被子植物）的花朵構造與減數分裂產生單套 (n) 生殖細胞部位（花藥與胚珠）",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【花朵構造與染色體套數（單套 n vs 雙套 2n）超高頻考點】：\n1.【單套 (n) 生殖細胞的產生部位（僅兩處！）】：\n   -「甲（雄蕊花藥）」：內含花粉囊，經【減數分裂】產生單套 ($n$) 的花粉粒（內含精細胞）。\n   -「丙（雌蕊胚珠）」：位於子房內部，經【減數分裂】產生單套 ($n$) 的卵細胞（雌配子）。\n2.【其餘皆為母體雙套 (2n) 體細胞組織】：\n   - 乙（柱頭/花柱）：接收花粉並引導花粉管生長，為 $2n$。\n   - 丁（花瓣）：吸引昆蟲傳粉，為 $2n$。\n   - 戊（子房壁）：將來發育成果皮/果肉，為母體 $2n$ 組織！\n   - 己（花萼）：保護花蕾，為 $2n$。\n3.【⚠️ 常見易錯陷阱】：很多同學誤選「戊（子房）」，注意子房是母體組織（雙套 $2n$），只有子房裡面的「丙（胚珠）」才能產生單套卵細胞！",
    "stem": "阿民觀察花的構造，然後畫出一張如附圖示意圖，請問圖中哪兩個部位可產生單套染色體的細胞？\n\n（點擊附圖可放大檢視花朵剖面構造與各代號部位）\n\n○ (A) 乙己\n○ (B) 甲丁\n○ (C) 乙戊\n○ (D) 甲丙",
    "answer": "(D) 甲丙",
    "diagramUrl": "assets/questions/q_bio_flower_structure_haploid_gametes_038.png",
    "solution": "○ 詳細破題解析：\n\n1. **圖中各代號構造精確判讀**：\n   - **甲**：雄蕊頂端的**花藥**（Anther），內含花粉囊。\n   - **乙**：雌蕊的**柱頭與花柱**（Stigma & Style），負責黏附花粉與引導花粉管萌發。\n   - **丙**：雌蕊子房內部的**胚珠**（Ovule）。\n   - **丁**：**花瓣**（Petal），組成花冠吸引傳粉昆蟲。\n   - **戊**：雌蕊基部膨大的**子房**（Ovary）。\n   - **己**：花朵最外層的**花萼**（Sepal），花苞期具保護功能。\n\n2. **單套染色體細胞（生殖細胞）的產生機制**：\n   - 植物體細胞染色體為雙套（$2n$），只有在製造**生殖細胞（配子）**時，才在特定生殖器官中進行**減數分裂**，產生染色體套數減半的單套細胞（$n$）：\n     - **甲（花藥）**：花粉囊中的花粉母細胞進行減數分裂，產生單套（$n$）的**花粉粒**（內含雄配子：精細胞）。\n     - **丙（胚珠）**：胚珠內部的大孢子母細胞進行減數分裂，發育產生單套（$n$）的**卵細胞**（雌配子）。\n   - **乙、丁、戊、己**皆由母體體細胞有絲分裂構成，染色體套數皆為雙套（$2n$）。\n     - 特別注意：**戊（子房）**受精後發育為果實，果肉與果皮皆來自母體子房壁，為雙套（$2n$），不可與內部產生卵細胞的「丙（胚珠）」混淆。\n\n因此能產生單套染色體細胞的部位為 **甲、丙**，標準答案為 **(D)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-16"
  },
  {
    "id": "q_math_triangle_ratio_abe_abc_039",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "等高三角形之底邊比等於面積比：連續比例轉化（求 △ABE 與 △ABC 面積比）",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【等高三角形「連乘比例」拆解心法】：\n1.【第一層大三角形切割】：由同高性質，底邊比即面積比。$\\overline{BD} : \\overline{CD} = 3 : 4 \\implies \\overline{BD} : \\overline{BC} = 3 : 7$，故 $\\triangle ABD$ 佔全部的 $\\frac{3}{7}$！\n2.【第二層小三角形切割】：在 $\\triangle ABD$ 內，頂點為 $B$，底邊為 $\\overline{AD}$。$\\overline{AE} : \\overline{DE} = 2 : 3 \\implies \\overline{AE} : \\overline{AD} = 2 : 5$，故 $\\triangle ABE$ 佔 $\\triangle ABD$ 的 $\\frac{2}{5}$！\n3.【兩層連乘得出答案】：$\\triangle ABE = \\frac{2}{5} \\times \\frac{3}{7} \\triangle ABC = \\frac{6}{35} \\triangle ABC$，比值即為 $6 : 35$！注意不要將分母誤加或比值顛倒！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$D$、$F$ 分別在 $\\overline{BC}$、$\\overline{AC}$ 上，$\\overline{AD}$、$\\overline{BF}$ 交於 $E$ 點，若 $\\overline{BD} : \\overline{CD} = 3 : 4$，$\\overline{AE} : \\overline{DE} = 2 : 3$，則 $\\triangle ABE$ 與 $\\triangle ABC$ 的面積比為何？\n\n（點擊附圖可放大檢視幾何圖形）\n\n○ (A) 5 : 12\n○ (B) 3 : 10\n○ (C) 6 : 35\n○ (D) 7 : 20",
    "answer": "(C) 6 : 35",
    "diagramUrl": "assets/questions/q_math_triangle_ratio_abe_abc_039.png",
    "solution": "○ 詳細解題步驟：\n\n1. **步驟一：分析大三角形的底邊分割與面積比**：\n   - 在 $\\triangle ABC$ 中，線段 $\\overline{AD}$ 將 $\\triangle ABC$ 分割為 $\\triangle ABD$ 與 $\\triangle ACD$。\n   - 兩者頂點同為 $A$，高相等，面積比等於底邊長度比：\n     $$\\frac{\\triangle ABD \\text{ 面積}}{\\triangle ABC \\text{ 面積}} = \\frac{\\overline{BD}}{\\overline{BC}} = \\frac{3}{3 + 4} = \\frac{3}{7}$$\n     即 $\\triangle ABD \\text{ 面積} = \\frac{3}{7} \\triangle ABC \\text{ 面積}$。\n\n2. **步驟二：在 $\\triangle ABD$ 內部進行二次面積分割**：\n   - 在 $\\triangle ABD$ 中，線段 $\\overline{BE}$ 將其分割為 $\\triangle ABE$ 與 $\\triangle BDE$。\n   - 兩者頂點同為 $B$，高相等，底邊在同一條直線 $\\overline{AD}$ 上：\n     $$\\frac{\\triangle ABE \\text{ 面積}}{\\triangle ABD \\text{ 面積}} = \\frac{\\overline{AE}}{\\overline{AD}} = \\frac{2}{2 + 3} = \\frac{2}{5}$$\n     即 $\\triangle ABE \\text{ 面積} = \\frac{2}{5} \\triangle ABD \\text{ 面積}$。\n\n3. **步驟三：連乘比例求出面積比**：\n   - 代入 $\\triangle ABD$ 的比例關係：\n     $$\\triangle ABE \\text{ 面積} = \\frac{2}{5} \\times \\left(\\frac{3}{7} \\triangle ABC \\text{ 面積}\\right) = \\frac{6}{35} \\triangle ABC \\text{ 面積}$$\n   - 故兩者面積比為：\n     $$\\triangle ABE \\text{ 面積} : \\triangle ABC \\text{ 面積} = 6 : 35$$\n\n標準答案為 **(C)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-16"
  },
  {
    "id": "q_math_parallel_segments_triangle_area_040",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截比例線段與同高/同底三角形面積轉換（求 △BDE 面積）",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【平行線截線段比例與面積方程解題關鍵】：\n1.【平行線兩大面積性質】：\n   - 性質一（平行線截比例）：$\\overline{DE} \\parallel \\overline{BC} \\implies \\frac{\\overline{AD}}{\\overline{DB}} = \\frac{\\overline{AE}}{\\overline{EC}}$。\n   - 性質二（同底等高面積相等）：$\\triangle BDE$ 與 $\\triangle CDE$ 底同為 $\\overline{DE}$ 且平行線間高相等，故面積相等！\n2.【設未知數列方程】：\n   設 $\\triangle BDE$ 面積 $= x$。\n   - 在 $\\triangle ABE$ 中（頂點 $E$）：$\\frac{\\overline{AD}}{\\overline{DB}} = \\frac{\\triangle ADE}{\\triangle BDE} = \\frac{9}{x}$。\n   - 在 $\\triangle ABC$ 中看底邊 $\\overline{AC}$（頂點 $B$）：$\\frac{\\triangle ABE}{\\triangle BCE} = \\frac{\\overline{AE}}{\\overline{EC}}$。\n   - 因為 $\\frac{\\overline{AE}}{\\overline{EC}} = \\frac{\\overline{AD}}{\\overline{DB}} = \\frac{9}{x}$，且 $\\triangle ABE = 9 + x$、$\\triangle BCE = 40$：\n     $$\\frac{9 + x}{40} = \\frac{9}{x} \\implies x^2 + 9x - 360 = 0 \\implies (x - 15)(x + 24) = 0$$\n   - 面積為正，故 $x = 15$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$\\overline{DE} \\parallel \\overline{BC}$，若 $\\triangle ADE$ 的面積為 $9$，$\\triangle BCE$ 的面積為 $40$，則 $\\triangle BDE$ 的面積為何？\n\n（點擊附圖可放大檢視幾何圖形）\n\n○ (A) 15\n○ (B) 20\n○ (C) 27\n○ (D) 35",
    "answer": "(A) 15",
    "diagramUrl": "assets/questions/q_math_parallel_segments_triangle_area_040.png",
    "solution": "○ 詳細解題步驟：\n\n1. **步驟一：設未知數並利用等高三角形列線段比**：\n   - 設 $\\triangle BDE$ 的面積為 $x$（$x > 0$）。\n   - 觀察 $\\triangle ADE$ 與 $\\triangle BDE$，兩者皆以點 $E$ 為頂點，底邊 $\\overline{AD}$ 與 $\\overline{BD}$ 在同一條直線上（高相等）：\n     $$\\frac{\\overline{AD}}{\\overline{BD}} = \\frac{\\triangle ADE \\text{ 面積}}{\\triangle BDE \\text{ 面積}} = \\frac{9}{x}$$\n\n2. **步驟二：利用平行線截比例線段性質轉移至另一邊**：\n   - 已知 $\\overline{DE} \\parallel \\overline{BC}$，根據平行線截比例線段性質：\n     $$\\frac{\\overline{AE}}{\\overline{EC}} = \\frac{\\overline{AD}}{\\overline{BD}} = \\frac{9}{x}$$\n\n3. **步驟三：利用頂點 $B$ 與底邊 $\\overline{AC}$ 列面積比例方程**：\n   - 觀察 $\\triangle ABE$ 與 $\\triangle BCE$，兩者頂點同為 $B$，底邊 $\\overline{AE}$ 與 $\\overline{EC}$ 在同一條直線上：\n     $$\\frac{\\triangle ABE \\text{ 面積}}{\\triangle BCE \\text{ 面積}} = \\frac{\\overline{AE}}{\\overline{EC}}$$\n   - 其中 $\\triangle ABE \\text{ 面積} = \\triangle ADE \\text{ 面積} + \\triangle BDE \\text{ 面積} = 9 + x$。\n   - 題目給定 $\\triangle BCE \\text{ 面積} = 40$。\n   - 代入線段比建立方程式：\n     $$\\frac{9 + x}{40} = \\frac{9}{x}$$\n\n4. **步驟四：解一元二次方程式**：\n   - 交叉相乘展開：\n     $$x(9 + x) = 9 \\times 40$$\n     $$x^2 + 9x = 360$$\n     $$x^2 + 9x - 360 = 0$$\n   - 因式分解十字交乘（尋找兩數乘積為 $-360$，相差為 $9$：$24 \\times 15 = 360$）：\n     $$(x + 24)(x - 15) = 0$$\n   - 解得 $x = 15$ 或 $x = -24$（負不合）。\n   - 因此 $\\triangle BDE$ 的面積為 **15**。\n\n標準答案為 **(A)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-16"
  },
  {
    "id": "q_math_parallel_angle_bisector_perimeter_041",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "平行線截角平分線之等腰三角形性質與相似三角形邊長比例（求 △ADE 周長）",
    "uploadDate": "2026-09-16",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「平行線 + 角平分線 $\\to$ 必出等腰三角形」幾何秒殺模型】：\n1.【破題關鍵】：\n   - $\\overline{BD}$ 是角平分線：$\\angle 1 = \\angle 2$\n   - $\\overline{DE} \\parallel \\overline{BC}$（內錯角相等）：$\\angle 2 = \\angle 3$\n   - $\\implies \\angle 1 = \\angle 3 \\implies \\triangle EBD$ 為等腰三角形，$\\overline{EB} = \\overline{ED}$！\n2.【列比例求長度】：\n   設 $\\overline{EB} = \\overline{ED} = x$，則 $\\overline{AE} = 12 - x$。\n   由相似形 $\\frac{\\overline{AE}}{\\overline{AB}} = \\frac{\\overline{DE}}{\\overline{BC}} \\implies \\frac{12 - x}{12} = \\frac{x}{4} \\implies x = 3$！\n3.【求周長速算絕招】：\n   - 方法一（各邊相加）：$\\overline{AE} = 9$、$\\overline{AD} = 9$、$\\overline{DE} = 3$，周長 $= 9 + 9 + 3 = 21$！\n   - 方法二（相似比 $\\times$ 原周長）：相似比 $= \\frac{9}{12} = \\frac{3}{4}$，原周長 $= 12 + 12 + 4 = 28$，$\\triangle ADE$ 周長 $= 28 \\times \\frac{3}{4} = 21$！",
    "stem": "如右圖，在 $\\triangle ABC$ 中，$\\overline{AB} = \\overline{AC} = 12$，$\\overline{BC} = 4$，$\\overline{BD}$ 為 $\\angle ABC$ 的角平分線，且 $\\overline{DE} \\parallel \\overline{BC}$，則 $\\triangle ADE$ 的周長為何？\n\n（點擊附圖可放大檢視幾何圖形）\n\n○ (A) 24\n○ (B) 21\n○ (C) 19\n○ (D) 18",
    "answer": "(B) 21",
    "diagramUrl": "assets/questions/q_math_parallel_angle_bisector_perimeter_041.png",
    "solution": "○ 詳細解題步驟：\n\n1. **步驟一：識別「平行線 + 角平分線」導出等腰三角形**：\n   - 已知 $\\overline{BD}$ 平分 $\\angle ABC$，故 $\\angle EBD = \\angle DBC$。\n   - 又已知 $\\overline{DE} \\parallel \\overline{BC}$，由兩平行線內錯角相等得：\n     $$\\angle EDB = \\angle DBC$$\n   - 因此 $\\angle EBD = \\angle EDB$，可知 $\\triangle EBD$ 為**等腰三角形**，兩腰相等：\n     $$\\overline{EB} = \\overline{ED}$$\n\n2. **步驟二：設未知數並利用相似三角形列比例式求邊長**：\n   - 設 $\\overline{EB} = \\overline{ED} = x$。\n   - 則 $\\overline{AE} = \\overline{AB} - \\overline{EB} = 12 - x$。\n   - 由 $\\overline{DE} \\parallel \\overline{BC}$，可知 $\\triangle ADE \\sim \\triangle ABC$（$AA$ 相似），對應邊成比例：\n     $$\\frac{\\overline{AE}}{\\overline{AB}} = \\frac{\\overline{DE}}{\\overline{BC}}$$\n   - 代入已知數據：\n     $$\\frac{12 - x}{12} = \\frac{x}{4}$$\n   - 兩邊同乘以 12：\n     $$12 - x = 3x \\implies 4x = 12 \\implies x = 3$$\n   - 故得 $\\overline{DE} = 3$，$\\overline{AE} = 12 - 3 = 9$。\n\n3. **步驟三：求 $\\triangle ADE$ 的周長**：\n   - 因為原三角形 $\\overline{AB} = \\overline{AC} = 12$ 為等腰三角形，且 $\\overline{DE} \\parallel \\overline{BC}$，故 $\\triangle ADE$ 亦為等腰三角形，$\\overline{AD} = \\overline{AE} = 9$。\n   - $\\triangle ADE$ 的周長為：\n     $$\\text{周長} = \\overline{AE} + \\overline{AD} + \\overline{DE} = 9 + 9 + 3 = 21$$\n   - **【速算法（相似形周長比等於對應邊長比）】**：\n     $\\triangle ABC$ 周長 $= 12 + 12 + 4 = 28$。\n     對應邊長比 $= \\frac{\\overline{AE}}{\\overline{AB}} = \\frac{9}{12} = \\frac{3}{4}$。\n     $$\\triangle ADE \\text{ 周長} = 28 \\times \\frac{3}{4} = 21$$\n\n標準答案為 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-16"
  },
  {
    "id": "q_bio_animal_reproduction_fertilization_042",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "動物生殖方式：受精環境（體內/體外受精）與卵生/胎生之辨析及特例",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【動物生殖觀念核心盲點陷阱——絕對詞「均/皆」破解指南】：\n1. 看到「水中動物均為體外受精」❌：水生哺乳類（鯨魚、海豚）以及鯊魚、部分魟魚都是【體內受精】！\n2. 看到「卵生動物均為體外受精」❌：爬蟲類（蛇、龜）、鳥類（雞、麻雀）、昆蟲以及鴨嘴獸都是【體內受精＋卵生】！\n3. 看到「可行有性生殖者均不進行無性生殖」❌：水螅平時行【出芽生殖（無性）】，逆境時會產生精卵進行【有性生殖】！\n4. 看到「有性生殖均需水為媒介」❌：只有【體外受精】需要水為媒介；體內受精動物靠母體生殖道分泌液體，不依賴外界水！\n5. 【唯一正確的全稱敘述】：適應陸地生活的動物為防止精子脫水，【均為體內受精】！",
    "stem": "小巍列出關於動物生殖方式的五個想法，下列哪些是正確的？\n(甲) 適應陸地生活的動物均為體內受精；\n(乙) 動物在進行有性生殖時，精、卵均需以水為媒介受精；\n(丙) 水中的動物均為體外受精；\n(丁) 可行有性生殖的動物均不會進行無性生殖；\n(戊) 卵生的動物可為體內受精或體外受精。\n\n○ (A) (甲)(戊)\n○ (B) (乙)(丁)\n○ (C) (甲)(丙)(戊)\n○ (D) (乙)(丙)(丁)(戊)",
    "answer": "(A) (甲)(戊)",
    "diagramUrl": "",
    "solution": "○ 詳細觀念解析：\n\n1. **(甲) 敘述正確**：\n   - 陸生動物（如昆蟲、爬蟲類、鳥類、哺乳類）生活在陸地乾燥環境，精子若暴露於空氣中極易脫水死亡，因此**必須透過交配將精子直接送入雌性體內**，在濕潤的生殖道內完成受精，故適應陸地生活的動物**均為體內受精**。\n\n2. **(乙) 敘述錯誤**：\n   - 「以水為媒介」僅適用於**體外受精**的動物（如多數魚類、兩生類），牠們將精卵直接排入水中，精子藉由水游向卵。\n   - **體內受精**的動物（如爬蟲類、鳥類、哺乳類），精子在母體生殖器官的分泌液中游動，**不需要外界的水作為媒介**。\n\n3. **(丙) 敘述錯誤**：\n   - 生活在水中的動物**不一定**均為體外受精。\n   - 例如：生活在水中的**哺乳類**（鯨魚、海豚、海牛）以及**軟骨魚類**（鯊魚、魟魚）均進行**體內受精**。\n\n4. **(丁) 敘述錯誤**：\n   - 自然界中許多生物**兼具無性生殖與有性生殖**的能力。\n   - 例如：**水螅**在環境適宜、養分充足時進行「出芽生殖（無性）」；而在環境惡劣或季節交替時，則會形成睪丸與卵巢產生精卵進行「有性生殖」以度過逆境。\n   - 渦蟲、海葵、蚜蟲等亦具備雙女生殖/無性與有性交替的能力。\n\n5. **(戊) 敘述正確**：\n   - 卵生動物的受精方式有兩種：\n     - **體外受精 ＋ 卵生**：如硬骨魚類、青蛙、蟾蜍。\n     - **體內受精 ＋ 卵生**：如昆蟲、爬蟲類（蛇、蜥蜴、龜）、鳥類（雞、鴨、企鵝），以及原始哺乳動物（鴨嘴獸、針鼴）。\n   - 故卵生動物可為體內受精或體外受精。\n\n綜合以上分析，正確的說法只有 **(甲)(戊)**，標準答案為 **(A)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_bio_egg_structure_043",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "鳥類卵生生殖：未受精蛋內部構造（胚盤、卵黃、繫帶、蛋白、蛋殼、氣室）與來源器官（卵巢 vs 輸卵管）辨析",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「一顆蛋到底是不是一個細胞？」生物常考大陷阱】：\n1.【真正屬於一個「卵細胞」的只有蛋黃部分（含胚盤）】：\n   - A（胚盤）：含有「細胞核」及少許細胞質，受精後胚胎發育的起點。\n   - B（卵黃／蛋黃）：屬於卵細胞的「細胞質」，儲存發育所需的主要營養。\n   - 卵黃表面薄膜：卵細胞的「細胞膜」。\n   👉 只有 A 與 B 是由【卵巢】製造產生的真正卵細胞！\n2.【輸卵管分泌包裹的保護／輔助構造】：\n   - 卵細胞受精（若有）後下移通過輸卵管時，由【輸卵管壁】依序分泌分泌物包裹上去：\n     - C（繫帶）：濃稠蛋白質扭結而成，將卵黃固定於中央，防止滾動震盪。\n     - D（蛋白）：提供水分、養分與緩衝保護。\n     - E（蛋殼）：碳酸鈣硬殼，保護防脫水，具氣孔以供氣體交換。\n     - F（氣室）：在蛋的「鈍端」，由內外兩層殼膜分離形成，供胚胎呼吸。\n3.【新鮮度判斷】：\n   - 蛋存放越久，蛋白水分經由蛋殼氣孔蒸發，氣室 F 就【越大】；因此「氣室越小＝蛋越新鮮」！",
    "stem": "如右圖為未受精蛋的內部構造，則下列敘述何者錯誤？\n\n（點擊附圖可放大檢視蛋的內部構造示意圖）\n\n○ (A) 細胞核位於 A\n○ (B) 要判斷蛋是否新鮮可由 F 處得之\n○ (C) C 部分可固定卵細胞的位置\n○ (D) 由卵巢所分泌的部位是 F、D",
    "answer": "(D) 由卵巢所分泌的部位是 F、D",
    "diagramUrl": "assets/questions/q_bio_egg_structure_043.png",
    "solution": "○ 構造名稱與對應功能對照表：\n\n| 代號 | 構造名稱 | 產生器官來源 | 主要功能與特性 |\n| :---: | :---: | :---: | :--- |\n| **A** | **胚盤** | **卵巢**（卵細胞一部份） | 內含**細胞核**。受精後由此處開始進行細胞分裂發育為胚胎。 |\n| **B** | **卵黃**（蛋黃） | **卵巢**（卵細胞一部份） | 為卵細胞的**細胞質**，富含脂質與蛋白質，為胚胎發育最主要的營養來源。 |\n| **C** | **繫帶** | **輸卵管**分泌 | 由濃稠的蛋白質扭結而成，將卵黃固定在蛋的中央，使胚盤朝上並緩衝震動。 |\n| **D** | **蛋白**（卵白） | **輸卵管**分泌 | 提供胚胎水分、養分，並具備緩衝與保護作用。 |\n| **E** | **卵殼**（蛋殼） | **輸卵管**分泌 | 含有碳酸鈣硬殼，具保護防脫水功能，表面有許多微小氣孔可透氣。 |\n| **F** | **氣室** | **輸卵管**形成之殼膜分離處 | 位於蛋的「鈍端」，提供胚胎發育初期呼吸所需之氧氣。蛋存放越久，水分蒸發使**氣室越大**。 |\n\n○ 各選項詳細分析：\n- **(A) 正確**：胚盤（A）為細胞核所在位置，若未受精則染色體為單套（$n$）。\n- **(B) 正確**：氣室（F）的大小可做為判斷新鮮度的指標。剛生下的蛋氣室極小，存放時間越長，蛋白中的水分經由蛋殼氣孔蒸發，氣室便會逐漸擴大。\n- **(C) 正確**：繫帶（C）懸吊固定卵細胞（蛋黃），避免蛋滾動時卵黃碰撞蛋殼受損。\n- **(D) 錯誤**：由**卵巢**產生的部位只有真正屬於卵細胞的 **A（胚盤／細胞核）** 與 **B（蛋黃／細胞質）**！而 **F（氣室）**、**D（蛋白）**、**C（繫帶）**、**E（蛋殼）** 皆為卵細胞通過**輸卵管**時由管壁分泌包裹形成。故 (D) 敘述錯誤，為本題所求。\n\n標準答案為 **(D)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_bio_strawberry_fruit_reproduction_044",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "被子植物有性生殖：花朵構造與發育對應（子房發育為果實、胚珠發育為種子、草莓瘦果與假果特性）〔112會考〕",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「草莓到底吃的是果實還是花托？」生物常考生活陷阱】：\n1.【破題秒殺金律（定義永遠不變）】：\n   - 【子房】發育 $\\to$ 必為【果實】！\n   - 【胚珠】發育 $\\to$ 必為【種子】！\n   👉 題目開宗明義寫「$*$ 構造是由草莓的【子房】發育而成」，直接鎖定【果實】！\n2.【草莓的生物學真實結構（聚合果／假果）】：\n   - 我們平時吃下肚、紅潤酸甜多汁的部分：是由【花托】膨大發育而來的，稱為「假果」！\n   - 草莓表面上一粒粒像黑芝麻的小顆粒（$*$）：不是種子，而是由各個獨立雌蕊的【子房】發育而成的【瘦果（真正的果實）】！\n   - 剝開每一粒瘦果（小黑點）裡面包裹著的，才是由【胚珠】發育而成的【真正種子】！",
    "stem": "圖(一)為草莓花朵構造及其發育的示意圖，已知草莓是由花托處膨大而來，若圖(二)中的 $*$ 構造是由草莓的子房發育而成，則此 $*$ 構造應稱為下列何者？【112.會考】\n\n（點擊附圖可放大檢視草莓花朵構造及其發育示意圖）\n\n○ (A) 胚珠\n○ (B) 種子\n○ (C) 果實\n○ (D) 花粉",
    "answer": "(C) 果實",
    "diagramUrl": "assets/questions/q_bio_strawberry_fruit_reproduction_044.png",
    "solution": "○ 詳細解題觀念剖析：\n\n1. **基本發育對應關係（植物生殖黃金法則）**：\n   - 被子植物在完成傳粉與受精作用後：\n     - **子房** $\\to$ 發育為 **果實**（提供保護、協助散播）。\n     - **胚珠** $\\to$ 發育為 **種子**（內含受精卵發育成的胚與提供養分的胚乳或子葉）。\n     - **受精卵** $\\to$ 發育為 **胚**（新植物體幼體）。\n     - **花瓣、雄蕊** $\\to$ 通常枯萎脫落。\n\n2. **題意鎖定破題**：\n   - 題目明確指出：『若圖(二)中的 $*$ 構造是由草莓的**子房**發育而成』。\n   - 根據上述生物學定義，凡是由「子房」發育而成的構造，其名稱即為**果實**，故此 $*$ 構造即為果實（選 **(C)**）。\n\n3. **草莓的特殊構造補充（會考跨章節熱門題）**：\n   - 一朵草莓花中央的花托上長著許多密密麻麻的「離生雌蕊」（如圖一所示）。\n   - 受精後，**花托**迅速膨大肉質化，變為我們日常食用鮮紅多汁的部分（非子房發育，生物學上稱為「假果」）。\n   - 花托上密生的一顆顆雌蕊，其**子房**各自發育為一粒粒細小的**瘦果**（如圖二的 $*$ 構造，屬於聚合瘦果）。\n   - 每一粒小瘦果內部才包含著一粒由**胚珠**發育而成的**種子**。\n\n正確答案為 **(C)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_bio_animal_classification_tree_045",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "脊椎動物門檢索分類：體溫調節（內溫vs外溫）、受精方式（體內vs體外）、呼吸器官與生殖方式（卵生vs胎生）〔110會考〕",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「生物分類檢索表」會考滿分破解口訣——先標「綱別與四大特徵」】：\n1.【五種臺灣特有生物特徵全剖析】：\n   - 臺灣鈍頭蛇（爬蟲綱）：外溫、體內受精、卵生、肺呼吸\n   - 臺北樹蛙（兩生綱）：外溫、體外受精、卵生、成體用肺與皮膚呼吸\n   - 臺灣馬口魚（硬骨魚綱）：外溫、體外受精、卵生、鰓呼吸\n   - 臺灣藍鵲（鳥綱）：內溫（恆溫）、體內受精、卵生、肺與氣囊呼吸\n   - 臺灣野兔（哺乳綱）：內溫（恆溫）、體內受精、胎生、肺呼吸\n2.【倒推檢索節點依據（非黑即白二分法）】：\n   - 甲節點：上組（蛇、蛙、魚）全為【外溫動物】；下組（藍鵲、野兔）全為【內溫動物】 $\\implies$ 甲是「體溫是否恆定（內溫／外溫）」！\n   - 乙節點：上支【臺灣鈍頭蛇（體內受精）】；下支【臺北樹蛙、臺灣馬口魚（體外受精）】 $\\implies$ 乙是「是否為體內受精」！（直接秒殺選 B）\n   - 丙節點：樹蛙與馬口魚全都是【卵生】，故丙不可能為「是否卵生」，而是「呼吸器官（肺vs鰓）」或「生活環境」！\n   - 丁節點：藍鵲與野兔全都是【體內受精】，故丁不可能為「是否體內受精」，而是「生殖方式（卵生vs胎生）」！",
    "stem": "小杰將五種臺灣特有種生物進行分類，如右圖所示，甲、乙、丙、丁分別代表不同的分類依據，關於甲、乙、丙、丁的敘述，下列何者最合理？【110.會考】（註：臺灣藍鵲為一種鳥類）\n\n（點擊附圖可放大檢視生物分類檢索樹狀圖）\n\n○ (A) 甲：是否為卵生動物\n○ (B) 乙：是否為體內受精\n○ (C) 丙：是否為卵生動物\n○ (D) 丁：是否為體內受精",
    "answer": "(B) 乙：是否為體內受精",
    "diagramUrl": "assets/questions/q_bio_animal_classification_tree_045.png",
    "solution": "○ 五種臺灣特有種動物所屬分類群與核心生理特徵對照表：\n\n| 動物名稱 | 所屬分類群 | 體溫調節（內溫/外溫） | 受精方式（體內/體外） | 生殖方式（卵生/胎生） | 主要呼吸器官 |\n| :--- | :---: | :---: | :---: | :---: | :---: |\n| **臺灣鈍頭蛇** | 爬蟲綱 | **外溫**（變溫） | **體內受精** | 卵生 | 肺 |\n| **臺北樹蛙** | 兩生綱 | **外溫**（變溫） | **體外受精** | 卵生 | 幼體鰓；成體肺與皮膚 |\n| **臺灣馬口魚** | 硬骨魚綱 | **外溫**（變溫） | **體外受精** | 卵生 | 鰓 |\n| **臺灣藍鵲** | 鳥綱 | **內溫**（恆溫） | **體內受精** | 卵生 | 肺（輔以氣囊） |\n| **臺灣野兔** | 哺乳綱 | **內溫**（恆溫） | **體內受精** | **胎生** | 肺 |\n\n○ 檢索樹狀分支節點（甲、乙、丙、丁）逐一推論：\n1. **甲節點**：\n   - 將「臺灣鈍頭蛇、臺北樹蛙、臺灣馬口魚」與「臺灣藍鵲、臺灣野兔」區分開來。\n   - 前三者均為**外溫動物**，後兩者均為**內溫動物**。\n   - 故甲的分類依據應為：**「是否為內溫動物（體溫是否恆定）」**。\n   - 鈍頭蛇、樹蛙、馬口魚、藍鵲均為卵生，只有野兔為胎生，故甲無法以「是否卵生」來二分，選項 (A) 不合理。\n\n2. **乙節點**：\n   - 將「臺灣鈍頭蛇」與「臺北樹蛙、臺灣馬口魚」區分開來。\n   - 鈍頭蛇（爬蟲類）為**體內受精**；樹蛙（兩生類）與馬口魚（魚類）皆為**體外受精**。\n   - 故乙的分類依據應為：**「是否為體內受精」**，選項 **(B) 最合理**。\n\n3. **丙節點**：\n   - 將「臺北樹蛙」與「臺灣馬口魚」區分開來。\n   - 兩者皆為**外溫動物、體外受精、卵生**。\n   - 差異在於呼吸器官（成體樹蛙用**肺與皮膚**；馬口魚用**鰓**）或生活環境（陸生/水生）。\n   - 兩者皆為卵生，故丙絕不可能為「是否為卵生」，選項 (C) 不合理。\n\n4. **丁節點**：\n   - 將「臺灣藍鵲」與「臺灣野兔」區分開來。\n   - 兩者皆為**內溫動物、體內受精**。\n   - 差異在於生殖方式：藍鵲為**卵生**；野兔為**胎生**。\n   - 故丁的分類依據應為：**「是否為卵生（或是否為胎生）」**。\n   - 兩者皆為體內受精，無法以「是否體內受精」區分，選項 (D) 不合理。\n\n綜合以上推論，最合理之敘述為 **(B) 乙：是否為體內受精**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_bio_fruitfly_gamete_combinations_046",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "細胞分裂與遺傳：減數分裂同源染色體分離與自由配合（配子染色體組合數計算 2^n）",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「配子最多具有幾種染色體組合？」秒殺公式與陷阱】：\n1.【破題公式】：配子染色體組合數 $= 2^n$（其中 $n$ 為「同源染色體的對數」或「配子中的染色體條數」）！\n   - 本題配子具有 4 條染色體（$n = 4$ 對同源染色體） $\\implies 2^4 = 16$ 種！\n2.【常犯陷阱】：\n   - ❌ 誤算成 $2 \\times 4 = 8$（混淆乘法與指數）。\n   - ❌ 誤算成 $4^2 = 16$（雖然本題數字湊巧相同，但若遇到人體 23 對染色體，公式是 $2^{23}$ 種高達 838 萬種，不可用底數錯誤的算式）！",
    "stem": "已知果蠅的配子內具有 4 條染色體，如附圖的甲細胞，而乙細胞為其一般體細胞。\n(1) 果蠅生殖母細胞進行減數分裂時，所產生的配子最多具有幾種染色體的組合？\n\n（點擊附圖可放大檢視甲、乙細胞之染色體型態示意圖）\n\n○ (A) 32\n○ (B) 16\n○ (C) 4\n○ (D) 1",
    "answer": "(B) 16",
    "diagramUrl": "assets/questions/q_bio_fruitfly_chromosome_set_046.png",
    "solution": "○ 詳細解題觀念與計算步驟：\n\n1. **判讀染色體套數與對數**：\n   - 題目說明「甲細胞為配子，具有 4 條染色體」，且圖中 4 條染色體大小形狀皆不同（不成對），故為**單套（$n = 4$）**。\n   - 「乙細胞為一般體細胞」，共有 8 條染色體，且大小形狀兩兩成對，故為**雙套（$2n = 8$）**，即具有 **$4$ 對同源染色體**。\n\n2. **減數分裂同源染色體分離與自由配合（獨立分配）**：\n   - 生殖母細胞（$2n$）在減數分裂第一次分裂時，**同源染色體彼此分離**，分別進入不同的子細胞。\n   - 每一對同源染色體的分離是獨立的，每對同源染色體中究竟是哪一條（來自父方或母方）進入同一個配子，皆有 $2$ 種獨立等可能的選擇。\n   - 果蠅體細胞具有 $4$ 對同源染色體，根據乘法原理：\n     $$\\text{配子染色體組合數} = 2 \\times 2 \\times 2 \\times 2 = 2^4 = 16 \\text{ 種}$$\n\n標準答案為 **(B) 16**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_bio_fruitfly_gamete_somatic_comparison_047",
    "examPeriod": "一段",
    "subject": "自然/生物",
    "errorReason": "觀念不懂",
    "concept": "染色體套數與對數辨析：配子（單套/不成對/0對）與體細胞（雙套/成對）之觀念陷阱",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「套數」vs「對數」生物月考特級大陷阱】：\n1. 看到「乙的對數是甲的兩倍」立刻打 ❌！\n   - 配子（甲）只有單套，染色體【不成對】（0 對）！\n   - 只有【套數（2N 是 1N 的兩倍）】或【總條數（8 條是 4 條的兩倍）】才是兩倍！\n2. 只要配子出現「成對」或「對數」的描述，一律為重大觀念錯誤！",
    "stem": "已知果蠅的配子內具有 4 條染色體，如附圖的甲細胞，而乙細胞為其一般體細胞。\n(2) 有關甲、乙兩細胞的敘述，下列何者錯誤？\n\n（點擊附圖可放大檢視甲、乙細胞之染色體型態示意圖）\n\n○ (A) 甲細胞為 1N，乙細胞為 2N\n○ (B) 乙細胞形成的過程中，複製染色體會進行分離\n○ (C) 乙細胞染色體的對數是甲細胞的兩倍\n○ (D) 生殖母細胞減數分裂後會產生四個甲細胞",
    "answer": "(C) 乙細胞染色體的對數是甲細胞的兩倍",
    "diagramUrl": "assets/questions/q_bio_fruitfly_chromosome_set_046.png",
    "solution": "○ 各選項深度觀念剖析：\n\n- **(A) 甲細胞為 1N，乙細胞為 2N**：**正確**。\n  甲為配子（精子或卵），同源染色體已分離，故為單套（$1N = 4$ 條）；乙為體細胞，具成對同源染色體，為雙套（$2N = 8$ 條）。\n\n- **(B) 乙細胞形成的過程中，複製染色體會進行分離**：**正確**。\n  乙為一般體細胞，是由受精卵進行「細胞分裂（有絲分裂）」增殖而來。細胞分裂的過程中，染色體複製一次、分裂一次，在分裂後期**複製的同胞染色體（姐妹染色單體）會互相分離**進入兩個子細胞。\n\n- **(C) 乙細胞染色體的對數是甲細胞的兩倍**：**錯誤（為本題所求）**。\n  - **核心文字陷阱**：\n    - 乙細胞（體細胞）有 8 條染色體，共 **4 對**同源染色體。\n    - 甲細胞（配子）只有 4 條染色體，每條皆單獨存在、**根本不成對（對數為 0 對）**！\n    - 因此，乙的「**條數**」是甲的兩倍（$8$ 條 vs $4$ 條），乙的「**套數**」是甲的兩倍（$2N$ vs $1N$），但**絕不能說「對數是甲的兩倍」**（因為甲根本沒有成對的同源染色體）！\n\n- **(D) 生殖母細胞減數分裂後會產生四個甲細胞**：**正確**。\n  一個雙套（$2N$）的生殖母細胞經過減數分裂（連續分裂兩次），最終會形成 $4$ 個單套（$1N$）的配子（精子或卵／極體）。\n\n故錯誤的敘述為 **(C)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_math_marathon_constant_speed_ratio_048",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "比與比例式應用：三人賽跑定速問題（相同時間所跑路程比等於速率比之同時間路程推求）",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「定速路跑差距」常見直覺致命錯誤】：\n1. ❌【超大陷阱】：直接相減 $4 - 2.5 = 1.5$ 公里！\n   - 錯因剖析：威利跑剩下 $2.5$ 公里到達終點需要花時間！在這段時間內妙麗「並不是停在原地」，她也在繼續往前跑！\n2. ✅【破題秒殺黃金準則】：\n   - 「定速運動中，相同時間內所跑的【距離比】＝【速率比】」！\n   - 當洛基跑完 10 公里時：\n     - 妙麗跑了 $10 - 4 = 6$ 公里\n     - 威利跑了 $10 - 2.5 = 7.5$ 公里\n     - 兩人速率比：$\\text{妙麗} : \\text{威利} = 6 : 7.5 = 4 : 5$！\n   - 當威利抵達終點跑完 10 公里時，妙麗跑了 $10 \\times \\frac{4}{5} = 8$ 公里。\n   - 故妙麗離終點還差 $10 - 8 = 2$ 公里！",
    "stem": "洛基、妙麗和威利三人參加 2024 年新北萬金石 10 公里馬拉松路跑，假設全程三人維持一定速率，當洛基抵達終點時，妙麗和威利離終點分別還差 4 公里及 2.5 公里，則當威利抵達終點時，妙麗離終點還差多少公里？\n\n○ (A) 1.5 公里\n○ (B) 2 公里\n○ (C) 2.5 公里\n○ (D) 3 公里",
    "answer": "(B) 2 公里",
    "diagramUrl": "",
    "solution": "○ 詳細解題觀念與算式步驟：\n\n1. **計算「洛基到達終點時」，妙麗與威利各自已跑的距離**：\n   - 全程共 $10$ 公里。\n   - 當洛基抵達終點時（洛基跑了 $10$ 公里）：\n     - 妙麗離終點還差 $4$ 公里 $\\implies$ 妙麗跑了 $10 - 4 = 6$ 公里。\n     - 威利離終點還差 $2.5$ 公里 $\\implies$ 威利跑了 $10 - 2.5 = 7.5$ 公里。\n\n2. **求出妙麗與威利的「速率比（距離比）」**：\n   - 因為全程三人皆維持「一定速率」，在相同時間內，所跑的距離與速率成正比：\n     $$v_{\\text{妙}} : v_{\\text{威}} = 6 : 7.5 = 12 : 15 = 4 : 5$$\n   - 即：威利每跑 $5$ 公里，妙麗在此相同時間內跑 $4$ 公里。\n\n3. **計算「威利抵達終點時」，妙麗所跑的總距離**：\n   - 當威利抵達終點時，威利總共跑了 $10$ 公里。\n   - 設此時妙麗總共跑了 $x$ 公里，列出比例式：\n     $$\\frac{\\text{妙麗跑的距離}}{\\text{威利跑的距離}} = \\frac{x}{10} = \\frac{4}{5}$$\n     $$5x = 40 \\implies x = 8 \\text{ (公里)}$$\n\n4. **求妙麗離終點還差的距離**：\n   $$\\text{距離終點} = 10 - 8 = 2 \\text{ (公里)}$$\n\n標準答案為 **2 公里**（選 **(B)**）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_math_rectangle_area_ratio_049",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "連比例與面積分割應用：大長方形面積依比例分配秒殺求局部面積差",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「長方形切割面積比」秒殺破題法——別傻傻設邊長未知數】：\n1.【直觀秒殺大絕招（整體比例分配）】：\n   - 甲、乙、丙剛好完整拼成整個大長方形 $ABCD$！\n   - 大長方形總面積 $= \\overline{AB} \\times \\overline{AD} = 12 \\times 21 = 252$！\n   - 總份數 $= 3 + 1 + 5 = 9$ 份 $\\implies$ 每 $1$ 份面積 $= \\frac{252}{9} = 28$！\n   - 甲佔 3 份、丙佔 5 份，相差 $5 - 3 = 2$ 份！\n   - 所求面積差 $= 2 \\times 28 = 56$（心算 10 秒得出正解）！\n2.【常見徒勞彎路】：\n   - 設邊長未知數去解聯立方程，既費時又極容易計算錯誤。記住：「求面積差且已有各塊比例時，直接按總面積比例分配最快！」",
    "stem": "如右圖，$\\overline{EF}$、$\\overline{GH}$ 將長方形 $ABCD$ 分成面積比為 $3 : 1 : 5$ 的甲、乙、丙三個長方形。已知 $\\overline{AB} = 12$，$\\overline{AD} = 21$，則甲、丙兩個長方形的面積相差為何？\n\n（點擊附圖可放大檢視長方形分割圖形）\n\n○ (A) 56\n○ (B) 64\n○ (C) 48\n○ (D) 42",
    "answer": "(A) 56",
    "diagramUrl": "assets/questions/q_math_rectangle_area_ratio_049.png",
    "solution": "○ 詳細解題觀念與秒殺算式：\n\n1. **方法一：總面積比例分配法（最推薦，神速秒殺）**：\n   - 觀察圖形，甲、乙、丙三個小長方形完整拼成大長方形 $ABCD$。\n   - 計算大長方形 $ABCD$ 的總面積：\n     $$\\text{總面積} = \\overline{AB} \\times \\overline{AD} = 12 \\times 21 = 252$$\n   - 已知甲、乙、丙的面積比為 $3 : 1 : 5$，總份數為：\n     $$\\text{總份數} = 3 + 1 + 5 = 9 \\text{ 份}$$\n   - 計算每一份對應的面積值：\n     $$\\text{每份面積} = \\frac{252}{9} = 28$$\n   - 題目所求為「甲、丙兩長方形的面積差」：\n     - 丙佔 5 份，甲佔 3 份，兩者相差 $5 - 3 = 2$ 份。\n     - 故面積差為：\n       $$\\text{面積差} = 2 \\times 28 = 56$$\n\n2. **方法二：分別求出各塊面積後相減（驗算）**：\n   - 甲的面積 $= 252 \\times \\frac{3}{9} = 84$\n   - 乙的面積 $= 252 \\times \\frac{1}{9} = 28$\n   - 丙的面積 $= 252 \\times \\frac{5}{9} = 140$\n   - 甲、丙面積相差：\n     $$140 - 84 = 56$$\n\n3. **幾何邊長驗證（鞏固觀念）**：\n   - 甲的高 $\\overline{AE} = \\frac{84}{12} = 7$。\n   - 乙、丙共用的高 $= 21 - 7 = 14$。\n   - 乙的底 $\\overline{CH} = \\frac{28}{14} = 2$。\n   - 丙的底 $\\overline{HD} = \\frac{140}{14} = 10$。\n   - 總底長 $\\overline{CD} = 2 + 10 = 12 = \\overline{AB}$，數據完美吻合！\n\n標準答案為 **56**（選 **(A)**）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_math_gear_turn_inverse_ratio_050",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "連比例與反比應用：嚙合齒輪之齒數與轉動圈數成反比",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「齒輪嚙合圈數比」最常見致命盲點】：\n1. ❌【絕對不能寫正比】：誤寫為 $60 : 50 : 40 = 6 : 5 : 4$（大錯特錯）！\n2. ✅【核心物理機制】：齒輪相互接合時，轉過的【總齒數】一定完全相同！\n   $$\\text{總齒數} = \\text{齒數} \\times \\text{轉動圈數} = \\text{定值}$$ \n   故「齒數」與「圈數」成【反比】！齒數越多的齒輪轉得越慢、圈數越少！\n3.【反比化簡技巧】：\n   $60x = 50y = 40z \\implies 6x = 5y = 4z$。\n   $$x : y : z = \\frac{1}{6} : \\frac{1}{5} : \\frac{1}{4} = 10 : 12 : 15$$（同乘最小公倍數 60）！",
    "stem": "甲、乙、丙三個齒輪由左而右緊密接合，甲有 60 齒、乙有 50 齒、丙有 40 齒，若甲、乙、丙同時轉動，則三個齒輪同一時間轉動圈數比為何？\n\n○ (A) 10 : 12 : 15\n○ (B) 6 : 5 : 4\n○ (C) 15 : 12 : 10\n○ (D) 4 : 5 : 6",
    "answer": "(A) 10 : 12 : 15",
    "diagramUrl": "",
    "solution": "○ 詳細解題觀念與算式步驟：\n\n1. **分析物理機制：嚙合齒輪轉過的總齒數必相同**：\n   - 因為甲、乙、丙三個齒輪相互緊密接合，齒與齒一對一推動，在相同時間內，每個齒輪轉過的「總齒數」必然相等。\n   - 總齒數公式：\n     $$\\text{總齒數} = \\text{齒數} \\times \\text{轉動圈數}$$\n   - 因此，當總齒數固定時，**齒數與轉動圈數成「反比」**。\n\n2. **列出等式求連比**：\n   - 設甲、乙、丙在同一時間內轉動的圈數分別為 $x$、$y$、$z$ 圈。\n   - 由總齒數相同可得：\n     $$60 \\times x = 50 \\times y = 40 \\times z$$\n   - 各項同除以 10：\n     $$6x = 5y = 4z$$\n\n3. **利用倒數求最簡整數比**：\n   - 由 $6x = 5y = 4z$，可知 $x : y : z$ 等於係數的倒數比：\n     $$x : y : z = \\frac{1}{6} : \\frac{1}{5} : \\frac{1}{4}$$\n   - 取分母 $6, 5, 4$ 的最小公倍數 $[6, 5, 4] = 60$，各項同乘以 60：\n     $$x : y : z = \\left(\\frac{1}{6} \\times 60\\right) : \\left(\\frac{1}{5} \\times 60\\right) : \\left(\\frac{1}{4} \\times 60\\right) = 10 : 12 : 15$$\n\n標準答案為 **10 : 12 : 15**（選 **(A)**）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_math_wire_squares_area_sum_051",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算錯誤",
    "concept": "連比例應用：鐵線剪段圍成正方形之周長比、邊長比與面積和計算",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「鐵線圍成正方形面積和」解題關鍵與易錯陷阱】：\n1.【周長與邊長轉換】：鐵線剪成的長度是「周長」，正方形周長要【除以 4】才是「邊長」！千萬別直接拿鐵線長度去平方！\n2.【一步步穩扎穩打】：\n   - 總份數 $= 3 + 4 + 5 = 12$ 份 $\\implies$ 每份長度 $= \\frac{96}{12} = 8$ 公分。\n   - 三段周長分別為：$24$、$32$、$40$ 公分。\n   - 三正方形邊長分別為：$6$、$8$、$10$ 公分（勾股數組，邊長比也是 $3:4:5$）！\n   - 面積和 $= 6^2 + 8^2 + 10^2 = 36 + 64 + 100 = 200$ 平方公分！\n3.【速算巧思】：邊長比 $= 3 : 4 : 5$，每份邊長 $= \\frac{8}{4} = 2$ 公分 $\\implies$ 面積和 $= (3^2 + 4^2 + 5^2) \\times 2^2 = 50 \\times 4 = 200$！",
    "stem": "有一鐵線全長 96 公分，若按 $3 : 4 : 5$ 的比例剪成 3 段，每段均圍成一個正方形，則此三個正方形的面積和為多少平方公分？\n\n○ (A) 200\n○ (B) 192\n○ (C) 216\n○ (D) 240",
    "answer": "(A) 200",
    "diagramUrl": "",
    "solution": "○ 詳細解題步驟：\n\n1. **步驟一：求出三段鐵線的長度（即三個正方形的周長）**：\n   - 鐵線總長 $= 96$ 公分，按 $3 : 4 : 5$ 剪成三段。\n   - 總比例份數：\n     $$\\text{總份數} = 3 + 4 + 5 = 12 \\text{ 份}$$\n   - 每 $1$ 份的長度：\n     $$\\text{每份長度} = \\frac{96}{12} = 8 \\text{ (公分)}$$\n   - 三段鐵線的長度（三個正方形的周長）：\n     - 第一段周長 $= 3 \\times 8 = 24$ 公分\n     - 第二段周長 $= 4 \\times 8 = 32$ 公分\n     - 第三段周長 $= 5 \\times 8 = 40$ 公分\n\n2. **步驟二：由周長求各正方形的邊長**：\n   - 正方形邊長 $= \\frac{\\text{周長}}{4}$：\n     - 第一個正方形邊長 $= \\frac{24}{4} = 6$ 公分\n     - 第二個正方形邊長 $= \\frac{32}{4} = 8$ 公分\n     - 第三個正方形邊長 $= \\frac{40}{4} = 10$ 公分\n\n3. **步驟三：求三個正方形的面積和**：\n   $$\\text{面積和} = 6^2 + 8^2 + 10^2 = 36 + 64 + 100 = 200 \\text{ (平方公分)}$$\n\n○ 速算方法（比例平方倍數法）：\n   - 周長比 $= 3 : 4 : 5 \\implies$ 邊長比亦為 $3 : 4 : 5$。\n   - 每個比例份數對應的邊長為 $\\frac{8}{4} = 2$ 公分。\n   - 面積和 $= (3^2 + 4^2 + 5^2) \\times 2^2 = (9 + 16 + 25) \\times 4 = 50 \\times 4 = 200$ 平方公分。\n\n標準答案為 **200** 平方公分（選 **(A)**）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_math_clothing_production_ratio_workdays_052",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "連比例與工作工時應用：利用工時比設比例常數計算每天總產能與訂單所需天數",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「連比例工程工時」破題秒殺大招】：\n1.【比例常數法（最穩健清晰）】：\n   看到「時間比為 1 : 2 : 3」，立刻設各別工時為 $r, 2r, 3r$（$r > 0$）！\n   - 每天固定產能總工時 $= 4(r) + 3(2r) + 2(3r) = 16r$。\n   - 新訂單各 8 件總工時 $= 8(r + 2r + 3r) = 48r$。\n   - 所需工作天數 $= \\frac{48r}{16r} = 3$ 個工作天！\n2.【特值速算法（令 r = 1 秒殺）】：\n   因為計算完工天數時比例常數 $r$ 必定於分子分母相約消去，可直接假設一件上衣耗時 1 小時、長褲 2 小時、外套 3 小時：\n   - 每天總工時 $= 4(1) + 3(2) + 2(3) = 16$ 小時。\n   - 訂單總工時 $= 8 \\times (1 + 2 + 3) = 48$ 小時。\n   - 天數 $= \\frac{48}{16} = 3$ 天！",
    "stem": "已知該店每天的總工作時間固定，製作 1 件上衣、1 件長褲與 1 件外套所需的時間比為 1 : 2 : 3，且每天的產能剛好可以完成 4 件上衣、3 件長褲與 2 件外套。若今天店家接到一張訂單，需要訂製上衣、長褲與外套各 8 件，在產能可自由調配的情況下，這張訂單至少需要多少個工作天才能全數完工？\n\n○ (A) 3 個工作天\n○ (B) 4 個工作天\n○ (C) 5 個工作天\n○ (D) 6 個工作天",
    "answer": "(A) 3 個工作天",
    "diagramUrl": "",
    "solution": "○ 詳細解題觀念與算式步驟：\n\n1. **步驟一：設比例常數表示單件衣物所需工時**：\n   - 已知製作 1 件上衣、1 件長褲、1 件外套所需時間比為 $1 : 2 : 3$。\n   - 設製作 1 件上衣需 $r$ 單位時間、1 件長褲需 $2r$ 單位時間、1 件外套需 $3r$ 單位時間（其中 $r > 0$）。\n\n2. **步驟二：計算每天固定產能的「總工時」**：\n   - 每天產能剛好可完成 4 件上衣、3 件長褲與 2 件外套：\n     $$\\text{每天總工時} = 4 \\times r + 3 \\times (2r) + 2 \\times (3r)$$\n     $$= 4r + 6r + 6r = 16r$$\n\n3. **步驟三：計算新訂單所需的「總工時」**：\n   - 訂單需要上衣、長褲、外套各 8 件：\n     $$\\text{訂單總工時} = 8 \\times r + 8 \\times (2r) + 8 \\times (3r)$$\n     $$= 8 \\times (r + 2r + 3r) = 8 \\times 6r = 48r$$\n\n4. **步驟四：求完成訂單至少所需的工作天數**：\n   $$\\text{所需天數} = \\frac{\\text{訂單總工時}}{\\text{每天總工時}} = \\frac{48r}{16r} = 3 \\text{ (天)}$$\n\n標準答案為 **3 個工作天**（選 **(A)**）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_math_ice_shop_revenue_ratio_053",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "連比例應用：固定成本相同時之各月營業額連比化簡",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「相同固定成本」求連比破題關鍵】：\n1.【核心等式】：固定成本皆相同，設為 $K$（或 $1$）：\n   $$\\frac{1}{4}a = \\frac{2}{5}b = \\frac{2}{3}c = K$$\n2.【求連比（倒數比）】：\n   $$a : b : c = \\frac{1}{\\frac{1}{4}} : \\frac{1}{\\frac{2}{5}} : \\frac{1}{\\frac{2}{3}} = 4 : \\frac{5}{2} : \\frac{3}{2}$$\n   同乘以 2 得最簡整數比：$8 : 5 : 3$！\n3.【常見陷阱】：\n   ❌ 誤把分數直接當成比值：寫成 $\\frac{1}{4} : \\frac{2}{5} : \\frac{2}{3} = 15 : 24 : 40$！\n   記住：所佔「比例越小」的月份（如 7 月只佔 $\\frac{1}{4}$），代表其「總營業額越大」！",
    "stem": "右圖為清涼冰店 7 月到 9 月的營業額長條圖，若每個月的固定成本皆相同，分別占當月總營業額的 $\\frac{1}{4}$、$\\frac{2}{5}$、$\\frac{2}{3}$。\n(1) 7 月到 9 月的營業額比為多少？\n\n（點擊附圖可放大檢視營業額長條圖）\n\n○ (A) 8 : 5 : 3\n○ (B) 4 : 5 : 3\n○ (C) 15 : 24 : 40\n○ (D) 3 : 5 : 8",
    "answer": "(A) 8 : 5 : 3",
    "diagramUrl": "assets/questions/q_math_ice_shop_bar_chart_053.png",
    "solution": "○ 詳細解題觀念與步驟：\n\n1. **步驟一：依題意列出固定成本等式**：\n   - 設 7 月、8 月、9 月的總營業額分別為 $a$ 萬元、$b$ 萬元、$c$ 萬元。\n   - 已知每個月的固定成本皆相同，且分別占當月總營業額的 $\\frac{1}{4}$、$\\frac{2}{5}$、$\\frac{2}{3}$：\n     $$\\frac{1}{4}a = \\frac{2}{5}b = \\frac{2}{3}c$$\n\n2. **步驟二：利用倒數比求營業額連比**：\n   - 由等式可求出 $a : b : c$：\n     $$a : b : c = \\frac{1}{\\frac{1}{4}} : \\frac{1}{\\frac{2}{5}} : \\frac{1}{\\frac{2}{3}} = 4 : \\frac{5}{2} : \\frac{3}{2}$$\n   - 各項同乘以分母 2，化為最簡整數比：\n     $$a : b : c = (4 \\times 2) : \\left(\\frac{5}{2} \\times 2\\right) : \\left(\\frac{3}{2} \\times 2\\right) = 8 : 5 : 3$$\n\n故 7 月到 9 月的營業額比為 **8 : 5 : 3**（選 **(A)**）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_math_ice_shop_fixed_cost_054",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "連比例應用：由營業額總和與連比推求個別營業額及固定成本",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「求固定成本」計算步驟與單位陷阱】：\n1.【設比例常數 $r$ 求各月營業額】：\n   - 營業額比為 $8 : 5 : 3$，設為 $8r, 5r, 3r$。\n   - 總和 $8r + 5r + 3r = 16r = 64 \\implies r = 4$（萬元）。\n2.【求固定成本】：\n   - 7 月營業額 $= 8 \\times 4 = 32$ 萬元 $\\implies$ 固定成本 $= 32 \\times \\frac{1}{4} = 8$ 萬元！\n   - 驗算 8 月：$20 \\times \\frac{2}{5} = 8$ 萬元！\n   - 驗算 9 月：$12 \\times \\frac{2}{3} = 8$ 萬元！三個月完全一致！\n3.【注意題目問的是「固定成本」而不是「某月份營業額」】！",
    "stem": "右圖為清涼冰店 7 月到 9 月的營業額長條圖，若每個月的固定成本皆相同，分別占當月總營業額的 $\\frac{1}{4}$、$\\frac{2}{5}$、$\\frac{2}{3}$。\n(2) 承 (1)，若 7 月到 9 月的營業額總和為 64 萬元，則每個月的固定成本為多少元？\n\n（點擊附圖可放大檢視營業額長條圖）\n\n○ (A) 8 萬元（80,000 元）\n○ (B) 10 萬元（100,000 元）\n○ (C) 12 萬元（120,000 元）\n○ (D) 16 萬元（160,000 元）",
    "answer": "(A) 8 萬元（80,000 元）",
    "diagramUrl": "assets/questions/q_math_ice_shop_bar_chart_053.png",
    "solution": "○ 詳細解題觀念與步驟：\n\n1. **步驟一：設比例常數表示各月營業額**：\n   - 由第 (1) 小題已知 7 月到 9 月營業額比為 $8 : 5 : 3$。\n   - 設 7 月、8 月、9 月營業額分別為 $8r$ 萬元、$5r$ 萬元、$3r$ 萬元（其中 $r \\neq 0$）。\n\n2. **步驟二：利用營業額總和求出 $r$**：\n   - 7 月到 9 月營業額總和為 64 萬元：\n     $$8r + 5r + 3r = 64 \\implies 16r = 64 \\implies r = 4$$\n\n3. **步驟三：求各月營業額並計算固定成本**：\n   - 7 月營業額 $= 8r = 8 \\times 4 = 32$（萬元）。\n   - 8 月營業額 $= 5r = 5 \\times 4 = 20$（萬元）。\n   - 9 月營業額 $= 3r = 3 \\times 4 = 12$（萬元）。\n   - 計算每個月的固定成本（任選一月計算即可）：\n     $$\\text{固定成本} = \\frac{1}{4} \\times 32 = \\mathbf{8} \\text{ (萬元)} = \\mathbf{80,000} \\text{ (元)}$$\n   - 驗算：\n     - 8 月固定成本 $= 20 \\times \\frac{2}{5} = 8$ 萬元。\n     - 9 月固定成本 $= 12 \\times \\frac{2}{3} = 8$ 萬元。\n     - 三個月固定成本完全相符！\n\n標準答案為 **8 萬元（80,000 元）**（選 **(A)**）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
  },
  {
    "id": "q_soc_geo_mediterranean_climate_italy_055",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "世界氣候分佈：溫帶地中海型氣候之特徵（夏乾冬雨、西風帶與副熱帶高壓交替）與威尼斯冬季水患應用",
    "uploadDate": "2026-09-17",
    "mondayDate": "2026-09-14",
    "mondayDates": [
      "2026-09-14"
    ],
    "weekLabel": "2026-09-14 (本週最新題)",
    "isGuessedOrUnstable": true,
    "mistakeNote": "【「地中海型氣候」會考秒殺黃金口訣——「夏乾冬雨」】：\n1.【氣候成因與季節特徵】：\n   - 夏季（6～8 月）：行星風系北移，受【副熱帶高氣壓帶】籠罩下沉氣流影響 $\\to$ 炎熱、乾燥少雨（夏乾）。\n   - 冬季（11～2 月）：行星風系南移，受【盛行西風帶】由海洋吹向陸地及鋒面氣旋影響 $\\to$ 溫和多雨（冬雨）！\n2.【地理情境破題】：\n   - 義大利（威尼斯、羅馬等）位於南歐地中海沿岸，屬地中海型氣候。\n   - 題幹明確提示「威尼斯正值雨季，地勢低窪易積水」，必為【冬季】！\n   - 選項 (A) 5月（春末）、(B) 7月（盛夏乾季）、(C) 9月（初秋）、(D) 12月（冬季雨季），故秒選 (D)！",
    "stem": "猛虎旅行社在行程出發前告知團員：尊敬的旅客大家好：本次旅行團將前往義大利，進行 12 天的旅行。此時威尼斯正值雨季，由於地勢低窪容易積水，請做好準備。請問：該旅行團出發的日期最可能為下列何者？\n\n○ (A) 5月8日\n○ (B) 7月19日\n○ (C) 9月30日\n○ (D) 12月6日",
    "answer": "(D) 12月6日",
    "diagramUrl": "",
    "solution": "○ 詳細解題觀念與背景剖析：\n\n1. **判斷義大利所屬氣候類型**：\n   - 義大利位於南歐、地中海北岸，屬於典型的**溫帶地中海型氣候**。\n\n2. **地中海型氣候之成因與降水特徵**：\n   - **夏季（約 6～8 月）**：氣壓帶與風系隨太陽直射點北移，受到**副熱帶高壓帶**下沉氣流籠罩，氣候**炎熱乾燥、萬里無雲（夏乾）**。\n   - **冬季（約 11～2 月）**：氣壓帶與風系南移，副熱帶高壓退去，迎受來自大西洋的**盛行西風帶**吹拂，且鋒面氣旋活動頻繁，帶來豐沛降水，氣候**溫和濕潤多雨（冬雨）**。\n\n3. **威尼斯高水位水患（Acqua Alta）之季節**：\n   - 威尼斯地處亞得里亞海頂端之潟湖，由於地勢低窪，每逢**冬季雨季**，在西風吹拂、海潮高漲與氣壓偏低的共同作用下，極易發生海水倒灌與街區淹水積水現象。\n\n4. **選項日期比對分析**：\n   - (A) 5月8日：北半球春末初夏，副熱帶高壓逐漸北移，降水偏少。\n   - (B) 7月19日：北半球盛夏，副熱帶高壓完全籠罩，為全年最炎熱乾燥之乾季。\n   - (C) 9月30日：北半球初秋。\n   - (D) 12月6日：**北半球冬季**，正值盛行西風帶籠罩之典型雨季，符合題幹所述。\n\n故最可能的出發日期為 **(D) 12月6日**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-17"
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
      stored = localStorage.getItem('miley_wrong_questions_v107') ||
               localStorage.getItem('miley_wrong_questions_v106') ||
               localStorage.getItem('miley_wrong_questions_v105') ||
               localStorage.getItem('miley_wrong_questions_v104') ||
               localStorage.getItem('miley_wrong_questions_v103') ||
               localStorage.getItem('miley_wrong_questions_v102') ||
               localStorage.getItem('miley_wrong_questions_v101') ||
               localStorage.getItem('miley_wrong_questions_v100') ||
               localStorage.getItem('miley_wrong_questions_v99') ||
               localStorage.getItem('miley_wrong_questions_v98') ||
               localStorage.getItem('miley_wrong_questions_v97') ||
               localStorage.getItem('miley_wrong_questions_v96') ||
               localStorage.getItem('miley_wrong_questions_v95') ||
               localStorage.getItem('miley_wrong_questions_v94') ||
               localStorage.getItem('miley_wrong_questions_v93') ||
               localStorage.getItem('miley_wrong_questions_v92') ||
               localStorage.getItem('miley_wrong_questions_v91') ||
               localStorage.getItem('miley_wrong_questions_v90') ||
               localStorage.getItem('miley_wrong_questions_v89') ||
               localStorage.getItem('miley_wrong_questions_v88') ||
               localStorage.getItem('miley_wrong_questions_v87') ||
               localStorage.getItem('miley_wrong_questions_v86') ||
               localStorage.getItem('miley_wrong_questions_v85') ||
               localStorage.getItem('miley_wrong_questions_v84') ||
               localStorage.getItem('miley_wrong_questions_v83') ||
               localStorage.getItem('miley_wrong_questions_v82') ||
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
      this.questions = this.questions.filter(q => q && (q.mondayDate >= '2026-09-07' || (Array.isArray(q.mondayDates) && q.mondayDates.some(m => m >= '2026-09-07'))));
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
