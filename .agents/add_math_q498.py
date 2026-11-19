import json

q498 = {
    "id": "q_math_geo_circle_inscribed_quadrilateral_parallel_chords_498",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何／圓形／平行弦截等弧與等弦對等弧／圓周角與直徑半圓弧度／等腰三角形邊長性質",
    "uploadDate": "2026-11-19",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：牢記「平行弦截等弧」（AD // BC ⇨ 弧AB = 弧CD）與「等弦對等弧」（AD = CD ⇨ 弧AD = 弧CD）；直徑 AE 對應半圓 180°，推得 ∠BAE = ∠BFA = 55° 形成等腰三角形。",
    "stem": "如右圖，四邊形 ABCD 為圓 O 的圓內接四邊形，線段 AD // 線段 BC，直徑 AE 和 線段 BC 相交於 F 點，線段 AD = 線段 CD = 6，若 ∠B = 70°，則 線段 BF = ？\n\n◉ (A) 6\n○ (B) 6√2\n○ (C) 6√3\n○ (D) 9√3",
    "answer": "(A) 6",
    "explanation": "1. AD // BC 且 AD = CD ⇨ 弧AB = 弧AD = 弧CD。\n2. 圓周角 ∠B = 70° ⇨ 弧ADC = 140° ⇨ 弧AB = 70° ⇨ AB = 6。\n3. 直徑 AE ⇨ 弧BE = 180° - 70° = 110° ⇨ ∠BAE = 55°。\n4. △ABF 中，∠BFA = 180° - 70° - 55° = 55° = ∠BAE ⇨ BF = AB = 6。選 (A)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_quadrilateral_parallel_chords_498.png"
}

q_str = json.dumps(q498, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v483';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v484';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q498 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v483')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v484') || localStorage.getItem('miley_wrong_questions_v483')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q498!")
