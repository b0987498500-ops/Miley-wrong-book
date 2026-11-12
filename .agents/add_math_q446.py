import json
import re

q446 = {
    "id": "q_math_geo_circle_concyclic_quad_angle_cad_20_446",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／四點共圓判定（對角互補）／圓內接四邊形／同弧所對圓周角相等",
    "uploadDate": "2026-11-12",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：見對角互補（80°＋100°＝180°）必聯想「四點共圓」！再由同弧所對圓周角相等，秒得 ∠CAD＝∠CBD＝20°。",
    "stem": "如附圖，線段 $\\overline{AC}$ 和 $\\overline{BD}$ 為四邊形 $ABCD$ 的對角線。若 $\\angle BAD = 80^\\circ$，$\\angle CBD = 20^\\circ$，$\\angle BDC = 60^\\circ$，則 $\\angle CAD$ 為多少度？\n\n○ (A) 20 度\n○ (B) 30 度\n○ (C) 40 度\n○ (D) 50 度",
    "answer": "(A) 20 度",
    "explanation": "1. 在 △BCD 中，∠BCD ＝ 180° － 20° － 60° ＝ 100°。\n2. 對角互補：∠BAD ＋ ∠BCD ＝ 80° ＋ 100° ＝ 180° ⟹ A、B、C、D 四點共圓。\n3. 同弧所對圓周角相等：∠CAD 與 ∠CBD 對同弧 CD，故 ∠CAD ＝ ∠CBD ＝ 20°。選 (A)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_concyclic_quad_angle_cad_20_446.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v447';",
    data_content
)

# Convert Q446 to formatted JS string
q446_json = json.dumps(q446, ensure_ascii=False, indent=2)
q446_str = '\n'.join('  ' + line for line in q446_json.split('\n'))

new_question_str = f"  {q446_str.strip()},"

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

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=447", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.15", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")

