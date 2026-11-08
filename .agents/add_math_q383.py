# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_math_geo_three_circles_overlap_area_383",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "幾何/扇形與弓形面積／三等圓互過圓心重疊面積（勒洛三角形）、邊長為半徑的正三角形、扇形與弓形面積分割法 (正三角形 + 3 個弓形 或 3 個扇形 - 2 個正三角形)",
    "uploadDate": "2026-11-07",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【三圓互過圓心重疊「勒洛三角形」兩大秒殺法！】\n1. **看透圖形本質——「正三角形 ＋ 3 個弓形」**：\n   - 三圓半徑皆為 5 且互過圓心，連接三圓心得到的 **△ABC 為邊長 5 的正三角形**（每個內角皆為 60°）！\n   - 正三角形面積公式：**(√3 / 4) × 邊長²** = (√3 / 4) × 25 = **25√3 / 4**。\n2. **解法一：【割補組合法（正三角形 ＋ 3 個弓形）】**：\n   - 60° 扇形面積 = π × 5² × (60 / 360) = **25π / 6**。\n   - 1 個弓形面積 = 扇形 - 正三角形 = **25π / 6 - 25√3 / 4**。\n   - 所求 = 正三角形 ＋ 3 × 弓形面積\n          = 25√3 / 4 + 3 × (25π / 6 - 25√3 / 4)\n          = 25√3 / 4 + 25π / 2 - 75√3 / 4\n          = **25π / 2 - 25√3 / 2**！\n3. **解法二：【容斥速算法（3 扇形 - 2 正三角形）】**：\n   - 把三個 60° 扇形相加，中間的正三角形被重複算了 3 次（多算了 2 次），而周圍三個弓形剛好各算 1 次！\n   - **所求面積 = 3 個扇形面積 - 2 個正三角形面積**\n                = 3 × (25π / 6) - 2 × (25√3 / 4)\n                = **25π / 2 - 25√3 / 2**（兩行收工秒殺！）",
    "stem": "如附圖，圓 A、圓 B、圓 C 三個半徑皆為 5 的等圓重疊，則重疊區域的面積為何？\n\n○ (A) 15π/2 + 4√3\n○ (B) 10π + 15√3/4\n○ (C) 25π/2 - 25√3/2\n○ (D) 15/2 - 15√3/2",
    "answer": "(C) 25π/2 - 25√3/2",
    "diagramUrl": "assets/questions/q_math_geo_three_circles_overlap_area_383.png",
    "solution": "### 💡 核心考點：正三角形邊長與面積公式、扇形面積公式、弓形面積割補計算與容斥原理應用\n\n1. **【正解 (C) 深度破題分析】**：\n   - **幾何特徵拆解**：\n     - 圓 A、圓 B、圓 C 的半徑皆為 R = 5，且三圓兩兩互過彼此的圓心；\n     - 連接三圓圓心線段 AB、線段 BC、線段 CA，長度皆等於圓半徑 5，即 **線段 AB = 線段 BC = 線段 CA = 5**；\n     - 因此 **△ABC 為邊長為 5 的正三角形**，其三個內角皆為 60°。\n\n2. **【解法一：基本割補法（正三角形面積 ＋ 3 個弓形面積）】**：\n   - **正三角形 △ABC 的面積**：\n     正三角形面積 = (√3 / 4) × 邊長² = (√3 / 4) × 5² = **25√3 / 4**。\n   - **一個 60° 扇形面積**：\n     扇形面積 = π × R² × (圓心角 / 360°) = π × 5² × (60° / 360°) = **25π / 6**。\n   - **一個弓形面積（扇形扣除正三角形）**：\n     弓形面積 = 扇形面積 - △ABC 面積 = **25π / 6 - 25√3 / 4**。\n   - **重疊區域總面積**：\n     重疊區域由中央的正三角形 △ABC 與外圍 3 個完全相同的弓形組合而成：\n     所求面積 = 正三角形面積 ＋ 3 × 弓形面積\n              = 25√3 / 4 + 3 × (25π / 6 - 25√3 / 4)\n              = 25√3 / 4 + 75π / 6 - 75√3 / 4\n              = 25π / 2 + (25√3 / 4 - 75√3 / 4)\n              = 25π / 2 - 50√3 / 4\n              = **25π / 2 - 25√3 / 2**。\n\n3. **【解法二：排容速算法（3 個扇形面積總和 - 2 個正三角形面積）】**：\n   - 以點 A、點 B、點 C 為圓心所作的三個 60° 扇形面積總和為：\n     3 × (25π / 6) = 25π / 2；\n   - 在這三個扇形疊加的過程中，外圍的三個弓形各自被覆蓋了 1 次，而中央的正三角形 △ABC 被三個扇形共同覆蓋了 3 次（即多算了 2 次）；\n   - 因此，只要減去多算的 2 個正三角形面積即可求得重疊區域面積：\n     所求面積 = 3 個扇形面積 - 2 × △ABC 面積\n              = 25π / 2 - 2 × (25√3 / 4)\n              = **25π / 2 - 25√3 / 2**。\n\n故本題正確答案為 **(C)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": False,
    "nextReviewDate": "2026-11-07",
    "isReviewed": False,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": None,
    "lastReviewedMonday": None,
    "lastReviewedDate": None,
    "reviewedMondays": []
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 升級 STORAGE_KEY
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v401';", "const STORAGE_KEY = 'miley_wrong_questions_v402';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q383 to js/data.js and upgraded to v402.")

