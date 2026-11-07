# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_math_geo_sector_inscribed_square_area_381",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/扇形與正方形性質／45度扇形內接正方形、等腰直角三角形邊長代換 (OD = CD = x)、連接圓心與弧上點半徑 (OF = 5)、畢氏定理求正方形面積 (x² = 5)",
    "uploadDate": "2026-11-07",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【扇形內接正方形——「45度角與連半徑」三大破題神經！】\n1. **第一神經：抓出 45° 等腰直角三角形！**\n   - 四邊形 CDEF 是正方形，設邊長為 x，則 **線段 CD 垂直 線段 OB** 且 **線段 CD = x**。\n   - 因為 C 點在半徑 線段 OA 上，所以 **∠DOC = ∠AOB = 45°**！\n   - 在直角 △ODC 中，∠DOC = 45°、∠ODC = 90°，必為**等腰直角三角形**，因此 **線段 OD = 線段 CD = x**！\n2. **第二神經：累加底邊長度 線段 OE！**\n   - 正方形邊長 線段 DE = x，所以 **線段 OE = 線段 OD + 線段 DE = x + x = 2x**！\n3. **第三神經：圓上點必連圓心作半徑！**\n   - 看到 **F 點在弧 AB 上**，立即連接輔助線 **線段 OF**，此即為扇形半徑：**線段 OF = 線段 OA = 5**！\n   - 在直角 △OEF 中（線段 FE 垂直 線段 OB），由畢氏定理收網：\n     線段 OF² = 線段 OE² + 線段 FE² $\\implies$ 5² = (2x)² + x² $\\implies$ 25 = 5x² $\\implies$ **x² = 5**！\n4. **大快人心不用開根號**：\n   - 正方形 CDEF 的面積本來就是邊長的平方 **x²**，直接秒答 **5**，完全不需要算出 x = √5！",
    "stem": "如附圖，在扇形 AOB 中，∠AOB = 45°，線段 OA = 5，C 點在線段 OA 上，D、E 兩點在線段 OB 上，F 點在弧 AB 上，則正方形 CDEF 的面積為何？",
    "answer": "5",
    "diagramUrl": "assets/questions/q_math_geo_sector_inscribed_square_area_381.png",
    "solution": "### 💡 核心考點：扇形圓心角與等腰直角三角形性質、圓弧上半徑連線輔助線、直角三角形畢氏定理列式求解面積\n\n1. **【第一步：設正方形邊長，分析等腰直角 △ODC】**：\n   - 設正方形 CDEF 的邊長為 x（x > 0），則 **線段 CD = 線段 DE = 線段 EF = 線段 FC = x**；\n   - 因為四邊形 CDEF 是正方形，且 D、E 兩點在半徑線段 OB 上，所以 **線段 CD ⊥ 線段 OB**，即 ∠ODC = 90°；\n   - 又已知 C 點在半徑線段 OA 上，扇形圓心角 ∠AOB = 45°，故 **∠DOC = 45°**；\n   - 在直角 △ODC 中，兩個銳角皆為 45°，因此 **△ODC 必為等腰直角三角形**；\n   - 由兩股相等可得：\n     **線段 OD = 線段 CD = x**。\n\n2. **【第二步：求出線段 OE 的代數表示式】**：\n   - E 點在半徑線段 OB 上，且 D、E 之間為正方形底邊；\n   - 因此：\n     **線段 OE = 線段 OD + 線段 DE = x + x = 2x**。\n\n3. **【第三步：連接圓心與弧上的頂點 F，形成直角 △OEF】**：\n   - 連接線段 OF；因為 F 點位在扇形弧線 弧 AB 上，所以 **線段 OF 為扇形的半徑**；\n   - 已知扇形半徑 線段 OA = 5，因此 **線段 OF = 5**；\n   - 正方形高 線段 FE 垂直線段 OB，所以在直角 △OEF 中，∠OEF = 90°；\n   - 依據畢氏定理：\n     線段 OF² = 線段 OE² + 線段 FE²；\n   - 將各線段長度代入：\n     5² = (2x)² + x²\n     25 = 4x² + x²\n     25 = 5x²；\n   - 兩邊同除以 5：\n     **x² = 5**。\n\n4. **【第四步：計算正方形 CDEF 的面積】**：\n   - 正方形 CDEF 的面積即為邊長平方 **x²**；\n   - 故正方形面積 = **5**。\n\n故本題標準答案為：**5**。",
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
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v399';", "const STORAGE_KEY = 'miley_wrong_questions_v400';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q381 to js/data.js and upgraded to v400.")
