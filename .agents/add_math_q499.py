import json

q499 = {
    "id": "q_math_geo_circle_exterior_angles_inscribed_quadrilateral_499",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何／圓形／圓內接四邊形外角性質／三角形外角定理／圓周角與弧度推導",
    "uploadDate": "2026-11-19",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：善用圓內接四邊形外角等於內對角（∠ABP = ∠ADC = x°）與三角形外角定理（∠BAP = x + 40°），在 △ABP 中解出 x = 55° 得 弧ABC = 110°；再由 △ACR 外角求出圓周角 ∠CAR = 30°，兩弧相減即得 弧AB = 50°。",
    "stem": "如右圖，P、R 為圓外兩點，線段 RA 和 線段 RD 交圓於 B、C 兩點，線段 PD 和 線段 PC 交圓於 A、B 兩點，若 ∠P = 30°，∠R = 40°，∠ACD = 70°，則 弧AB 的度數為何？\n\n○ (A) 48°\n◉ (B) 50°\n○ (C) 52°\n○ (D) 55°",
    "answer": "(B) 50°",
    "explanation": "1. 設 ∠ADC = x°，由圓內接四邊形外角得 ∠ABP = x°，△ADR 外角得 ∠BAP = x + 40°。\n2. △ABP 中，(x + 40) + x + 30 = 180 ⇨ x = 55° ⇨ 弧ABC = 110°。\n3. △ACR 外角 ∠ACD = ∠R + ∠CAR ⇨ 70° = 40° + ∠CAR ⇨ ∠CAR = 30° ⇨ 弧BC = 60°。\n4. 弧AB = 弧ABC - 弧BC = 110° - 60° = 50°。選 (B)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_exterior_angles_inscribed_quadrilateral_499.png"
}

q_str = json.dumps(q499, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v484';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v485';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q499 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v484')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v485') || localStorage.getItem('miley_wrong_questions_v484')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q499!")
