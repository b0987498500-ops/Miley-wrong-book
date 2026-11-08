# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_math_geo_point_circle_position_distance_384",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/點與圓的位置關係／坐標平面兩點距離公式 (d = √[(x₂-x₁)²+(y₂-y₁)²]) 與半徑比較 (d > r 圓外、d = r 圓上、d < r 圓內)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【點與圓位置關係判定「三大黃金法則」！】\n1. **判定準則（看「點到圓心距離 d」與「半徑 r」的大小關係）**：\n   - **d > r** $\\implies$ 點在**圓外**；\n   - **d = r** $\\implies$ 點在**圓上**；\n   - **d < r** $\\implies$ 點在**圓內**。\n2. **坐標平面兩點距離公式（負負得正易錯！）**：\n   - 圓心 O(-1, -4)，點 P(3, -1)。\n   - x 軸差值：3 - (-1) = 3 + 1 = **4**；\n   - y 軸差值：-1 - (-4) = -1 + 4 = **3**；\n   - 距離 d = √(4² + 3²) = √(16 + 9) = √25 = **5**！\n3. **結論秒殺**：\n   - 距離 d = 5，剛好等於半徑 r = 5，因此點 P 必定**「在圓上」**！",
    "stem": "在坐標平面上，圓 O 的半徑為 5，圓心 O 的坐標為 (-1, -4)，則點 P(3, -1) 與圓的位置關係為何？\n\n○ (A) 在圓外\n○ (B) 在圓上\n○ (C) 在圓內\n○ (D) 無法確定",
    "answer": "(B) 在圓上",
    "diagramUrl": "",
    "solution": "### 💡 核心考點：平面直角坐標系兩點距離公式、點與圓位置關係（圓內、圓上、圓外）的幾何判定準則\n\n1. **【正解 (B) 深度破題分析】**：\n   - **點與圓的位置關係判定準則**：\n     設圓心為 O，半徑為 r，平面上任意一點為 P，該點到圓心的距離記為 d = 線段 OP：\n     1. 若 **d > r**：點 P 在**圓外**（點到圓心的距離大於半徑）；\n     2. 若 **d = r**：點 P 在**圓上**（點到圓心的距離等於半徑）；\n     3. 若 **d < r**：點 P 在**圓內**（點到圓心的距離小於半徑）。\n\n2. **【第一步：利用兩點距離公式計算線段 OP 的長度】**：\n   - 已知圓心 O 的坐標為 (-1, -4)，點 P 的坐標為 (3, -1)；\n   - 依兩點距離公式：\n     線段 OP = √[(x₂ - x₁)² + (y₂ - y₁)²]\n             = √[{3 - (-1)}² + {-1 - (-4)}²]\n             = √[(3 + 1)² + (-1 + 4)²]\n             = √(4² + 3²)\n             = √(16 + 9)\n             = √25\n             = 5。\n\n3. **【第二步：比較距離與圓的半徑】**：\n   - 已知圓 O 的半徑 r = 5；\n   - 因為點 P 到圓心 O 的距離 線段 OP = 5 = r；\n   - 點到圓心的距離恰好等於圓的半徑，因此點 P **在圓上**。\n\n故本題正確答案為 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": False,
    "nextReviewDate": "2026-11-08",
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
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v402';", "const STORAGE_KEY = 'miley_wrong_questions_v403';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q384 to js/data.js and upgraded to v403.")

