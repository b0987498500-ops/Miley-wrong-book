import json

q500 = {
    "id": "q_math_geo_intersecting_circles_inscribed_angle_p_500",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何／圓形／兩圓相交性質／等腰三角形（同圓半徑等長）／圓心角與圓周角度數關係",
    "uploadDate": "2026-11-19",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：A 點在圓 O 上，故 OA = OB 均為圓 O 半徑，△OAB 為等腰三角形；由對稱性得 弧BAC = 40° + 40° = 80°，圓周角 ∠P 為所對弧度數的一半（40°）。",
    "stem": "如右圖，圓 O 與圓 A 相交於 B、C 兩點，P 為圓 O 上一點，若 ∠ABO = 70°，則 ∠P = ？\n\n◉ (A) 40°\n○ (B) 45°\n○ (C) 52°\n○ (D) 70°",
    "answer": "(A) 40°",
    "explanation": "1. 在圓 O 中，半徑 OA = OB ⇨ ∠BAO = ∠ABO = 70°。\n2. 圓心角 ∠AOB = 180° - 2 × 70° = 40°。\n3. 由對稱性（△ABO ≅ △ACO）得 ∠AOC = ∠AOB = 40° ⇨ 弧BAC = 80°。\n4. 圓周角 ∠P = 1/2 弧BAC = 1/2 × 80° = 40°。選 (A)。",
    "diagramUrl": "assets/questions/q_math_geo_intersecting_circles_inscribed_angle_p_500.png"
}

q_str = json.dumps(q500, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v485';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v486';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q500 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v485')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v486') || localStorage.getItem('miley_wrong_questions_v485')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q500!")
