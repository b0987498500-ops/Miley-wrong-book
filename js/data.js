/**
 * Smart Wrong Question Review System - Data & LocalStorage Management
 * Manages wrong questions, Ebbinghaus repetition states, tree structure, seed datasets.
 */

const STORAGE_KEY = 'miley_wrong_questions_v66';

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
    "solution": "1. 7 個數由小到大排列，中位數即為第 4 個數 $= x$。\n2. 總和 $= 2 + 4 + 6 + x + 12 + 16 + 20 = 60 + x$。\n3. 依題意中位數等於平均數：$x = \\frac{60 + x}{7} \\implies 6x = 60 \\implies x = 10$。\n故選 **(C)**。",
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
    "solution": "1. 設 $x : y : z = \\frac{1}{2} : \\frac{1}{3} : \\frac{1}{4}$。\n2. 同乘公倍數 12 化為最簡整數比：$x : y : z = 6 : 4 : 3$。\n3. 代入所求算式即可求得正確比值，選 **(A)**。",
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
    "solution": "1. 設參數 $x = 2r, y = 3r, z = 4r$ ($r \\ne 0$)。\n2. 代入分子與分母，$r$ 互相抵消即可求得純數值，選 **(B)**。",
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
    "solution": "1. 依面積比與邊長比列出方程式，設比例參數 $r$。\n2. 由長寬皆為正整數條件求出整數解，計算周長比為 $5 : 4$，選 **(C)**。",
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
    "solution": "- **植物組成**：細胞 $\\to$ 組織 $\\to$ 器官 $\\to$ 個體（**缺乏器官系統**）。\n- **動物組成**：細胞 $\\to$ 組織 $\\to$ 器官 $\\to$ **器官系統** $\\to$ 個體。\n- 植物無「器官系統」層次，選 **(C)**。",
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
    "solution": "- 描述位置三大要素：**參考點、方向、距離**。\n- 題幹包含校門口（參考點）、東方（方向）、100 公尺（距離），敘述最完整，選 **(A)**。",
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
    "solution": "1. 平均速率 $= \\frac{\\text{總路程}}{\\text{總時間}}$。\n2. 單程設為 $S$，往返總路程為 $2S$：\n   $$v = \\frac{2S}{\\frac{S}{60} + \\frac{S}{40}} = \\frac{2}{\\frac{1}{60} + \\frac{1}{40}} = 48 \\text{ km/h}$$\n故選 **(B)**。",
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
    "solution": "1. $v-t$ 圖中，曲線與時間軸所圍**面積即為位移**。\n2. 梯形面積 $= \\frac{(6 + 10) \\times 20}{2} = 160 \\text{ m}$，選 **(B)**。",
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
    "solution": "1. 令 $\\frac{x}{3} = \\frac{y}{4} = \\frac{z}{5} = r$，得 $x=3r, y=4r, z=5r$。\n2. 代入方程式求得 $r=2$，進而得出 $x+y+z = 24$，選 **(D)**。",
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
    "solution": "1. 紅利按「投資金額 $\\times$ 投資時間」成正比分配。\n2. 甲、乙權重比 $= (20 \\times 12) : (30 \\times 8) = 240 : 240 = 1 : 1$。\n3. 兩人分得利潤相同，選 **(A)**。",
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
    "solution": "- **(A) 錯誤**：啟事載明「親洽」，應親至現場，不可直接郵寄。\n- **(B) 正解**：大專畢業且具兩年以上工作經驗者符合要求，選 **(B)**。\n- **(C)(D) 錯誤**：工作時間與薪資待遇皆有明確限制，與選項不符。",
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
    "solution": "- **(A) 措**：「弗措」通「弗錯」，放置、停息之意。\n- **(B) 衿**：「青青子衿」通「衣領（襟）」。\n- **(C) 繁**：「甚蕃」通「繁多（繁）」。\n- **(D) 正解**：「咨」與「茲」古義不同，非通假字，選 **(D)**。",
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
    "solution": "- **(A) 正解**：「楓華萬千」借「楓」諧音「風」，為**諧音雙關**，選 **(A)**。\n- **(B)(C)(D)** 分別為排比、擬人與對偶，未使用諧音。",
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
    "solution": "- **(A)(B)(D) 錯誤**：《論語》為孔子弟子及再傳弟子記錄編纂，非孔子親撰；篇名取自首句二至三字，無特定微言大義。\n- **(C) 正解**：孔子打破階級，主張「有教無類」，普及教育，選 **(C)**。",
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
    "mistakeNote": "正三角形核心幾何性質：「三邊長皆相等」！由 x - 3y = 4x + y = 5x - 1$ 列出二元一次聯立方程式，整理得 $\\begin{cases} 2x - 4y = 0 \\implies x = 2y \\ 4x + y = 5x - 1 \\implies x - y = 1 \\end{cases}$，代入即可秒解  = 1, x = 2$！最後題目問的是  + y = 2 + 1 = 3$，切勿只算到 $ 或 $ 就急著選答案！",
    "stem": "如圖為一個正三角形，若 x - 3y$、x + y$、x - 1$ 分別表示三邊的長，則  + y = ?$\n\n○ (A) 2\n○ (B) 3\n○ (C) 4\n○ (D) 5",
    "answer": "(B) 3",
    "diagramUrl": "assets/questions/q_math_equilateral_triangle_linear_system_009.png",
    "solution": "1. 正三角形三邊長相等：$2x+y = 3x-y = x+2y-1$。\n2. 解聯立得 $x=3, y=1$，三邊長皆為 7，選 **(B)**。",
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
    "mistakeNote": "注意縱軸單位為「百萬元」！折線圖實線為「狠郝賺」、虛線圈為「泰匯賺」。下半年總營業額：泰匯賺  41 + 43 + 59 + 45 + 40 + 58 = 286$ 百萬元；狠郝賺  53 + 38 + 72 + 89 + 58 + 36 = 346$ 百萬元。兩家差額  346 - 286 = 60$ 百萬元  6000$ 萬元！故泰匯賺比狠郝賺少 6000 萬元，選 (C)！",
    "stem": "如圖為泰匯賺與狠郝賺兩家科技公司下半年來每個月的營業額分配折線圖，請問下列敘述何者正確？\n\n○ (A) 泰匯賺平均每月營業額超過 5000 萬元\n○ (B) 狠郝賺平均每月營業額超過 6000 萬元\n○ (C) 泰匯賺公司下半年的營業額比狠郝賺公司少 6000 萬元\n○ (D) 泰匯賺公司下半年的營業額比狠郝賺公司少 3000 萬元",
    "answer": "(C) 泰匯賺公司下半年的營業額比狠郝賺公司少 6000 萬元",
    "diagramUrl": "assets/questions/q_math_line_chart_revenue_comparison_010.png",
    "solution": "- 讀取折線圖：甲店月平均 12 萬，乙店月平均 15 萬。\n- 乙店全年總營業額高於甲店 36 萬元，選 **(B)**。",
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
    "mistakeNote": "設特價時沐浴乳一瓶 $ 元、香皂一塊 $ 元。特價花費： + 2y = 156$；恢復原價多了 20% 即原價為 .2x$；此時為香皂的 8 倍：.2x = 8y \\implies x = \\frac{20}{3}y$。代入消去求得  = 18$ 元！注意特價與原價為 (1 + 0.2) = 1.2x$！",
    "stem": "志玲趁商店折扣時，買了一瓶沐浴乳和兩塊香皂共花了 156 元，後來沐浴乳恢復原價，價格較特價時多了 20%，而香皂價格不變，此時沐浴乳價格為香皂單價的 8 倍，則香皂一塊多少元？\n\n○ (A) 12\n○ (B) 16\n○ (C) 18\n○ (D) 20",
    "answer": "(C) 18",
    "diagramUrl": "",
    "solution": "1. 設香皂定價 $x$ 元、沐浴乳定價 $y$ 元。\n2. 依打折條件：$0.8(x+y) = 280$，$x+0.7y = 260$。\n3. 解聯立得 $x=50, y=300$，選 **(C)**。",
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
    "mistakeNote": "最簡分數定義：分子與分母的最大公因數為 1（互質）！注意質數倍數陷阱：=2\\times 31$ 與 =3\\times 31$ 有公因數 31；=19^2$ 與 19 有公因數 19；$ 各數位和為 6 可被 33 約分！(B) =3^4, 121=11^2$，質因數 3 與 11 互質，為最簡分數！",
    "stem": "下列何者是最簡分數？\n\n○ (A) 569X\\frac{62}{93}$\n○ (B) $\\frac{81}{121}$\n○ (C) 569X\\frac{19}{361}$\n○ (D) $\\frac{33}{111111}$",
    "answer": "(B) $\\frac{81}{121}$",
    "diagramUrl": "",
    "solution": "1. 最簡分數判定條件：分子與分母**互質**（最大公因數為 1）。\n2. $105 = 3 \\times 5 \\times 7$。\n3. 選項中與 105 互質者為 16（因數僅有 2），選 **(A)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": false,
    "nextReviewDate": "2026-09-07"
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
    "stem": "【國字注音寫字填空測驗】\n請依題幹注音在各題括號中寫出正確國字（可於框內鍵入，或點擊上方「草稿區」手寫練習）：\n\n2. 兜 ㄇㄠˋ 【　　】\n8. 一 ㄧㄡ 然神往 【　　】\n9. ㄒㄧㄡ 戚與共 【　　】\n10. 一 ㄑㄩㄝˋ 詞 【　　】",
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
      stored = localStorage.getItem('miley_wrong_questions_v65') ||
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
