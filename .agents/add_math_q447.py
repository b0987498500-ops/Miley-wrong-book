import json
import re

q447 = {
    "id": "q_math_geo_circle_inscribed_quad_angle_cad_52_447",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／圓內接四邊形／同弧所對圓周角相等／三角形內角和 180 度",
    "uploadDate": "2026-11-12",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：圓內接四邊形對角線夾角，對同弧（CD 弧）之圓周角必相等（∠CAD＝∠CBD）！先由 △BCD 內角和算得 ∠CBD＝52° 即可秒殺。",
    "stem": "如附圖，四邊形 $ABCD$ 為圓內接四邊形，線段 $\\overline{AC}$ 和 $\\overline{BD}$ 為對角線。若 $\\angle BCD = 70^\\circ$，$\\angle BDC = 58^\\circ$，則 $\\angle CAD$ 為多少度？\n\n○ (A) 48 度\n○ (B) 52 度\n○ (C) 58 度\n○ (D) 70 度",
    "answer": "(B) 52 度",
    "explanation": "1. 在 △BCD 中，∠CBD ＝ 180° － 70° － 58° ＝ 52°。\n2. 同弧所對圓周角相等：∠CAD 與 ∠CBD 對同弧 CD，故 ∠CAD ＝ ∠CBD ＝ 52°。選 (B)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_quad_angle_cad_52_447.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY to v448
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v448';",
    data_content
)

# Convert Q447 to formatted JS string
q447_json = json.dumps(q447, ensure_ascii=False, indent=2)
q447_str = '\n'.join('  ' + line for line in q447_json.split('\n'))

new_question_str = f"  {q447_str.strip()},"

# Insert into INITIAL_SEED_DATA = [\n
data_content = re.sub(
    r"(const INITIAL_SEED_DATA\s*=\s*\[\s*\n)",
    lambda m: m.group(1) + new_question_str + "\n",
    data_content,
    count=1
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully!")
