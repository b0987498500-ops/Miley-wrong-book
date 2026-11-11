import json
import re

q434 = {
    "id": "q_math_geo_circle_inscribed_interior_angle_afc_48_434",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／等分圓弧／圓內角定理／圓周角與所對弧度數",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：五等分得 5 段等弧 r！P 為圓內交點，平角互補得圓內角 72°，由圓內角定理 (2r＋r)/2＝72° 即可秒求 r＝48°。",
    "stem": "如附圖，圓上 $B$、$C$、$D$、$E$ 四點將 $\\widehat{ACF}$ 分成五等分，$P$ 為 $\\overline{AE}$、$\\overline{CF}$ 的交點，若 $\\angle CPE = 108^\\circ$，則 $\\angle AFC$ 為多少度？\n\n○ (A) 36 度\n○ (B) 42 度\n○ (C) 48 度\n○ (D) 54 度",
    "answer": "(C) 48 度",
    "explanation": "1. 設每等分弧為 r° ⟹ 弧 AC ＝ 2r°，弧 EF ＝ r°。\n2. ∠APC ＝ 180° － 108° ＝ 72°。\n3. 由圓內角定理：∠APC ＝ (弧 AC ＋ 弧 EF) ÷ 2 ⟹ 72° ＝ (2r° ＋ r°) ÷ 2 ⟹ r ＝ 48°。\n4. 故圓周角 ∠AFC ＝ 弧 AC ÷ 2 ＝ r ＝ 48°。選 (C)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_interior_angle_afc_48_434.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v435';",
    data_content
)

# Convert Q434 to formatted JS string
q434_json = json.dumps(q434, ensure_ascii=False, indent=2)
q434_str = '\n'.join('  ' + line for line in q434_json.split('\n'))

new_question_str = f"  {q434_str.strip()},"

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

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=435", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.08", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")

