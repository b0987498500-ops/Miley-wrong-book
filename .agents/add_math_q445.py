import json
import re

q445 = {
    "id": "q_math_geo_circle_inscribed_quad_external_angles_b_47_445",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／圓內接四邊形性質／外角等於內對角／對角互補／三角形外角與內角和",
    "uploadDate": "2026-11-12",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：圓內接四邊形「外角等於內對角」！由兩外角三角形分別列出兩對角（134°－∠B 與 140°－∠B），相加等於 180° 即可秒殺！",
    "stem": "如附圖，$A$、$B$、$C$、$D$ 為圓上四點，線段 $\\overline{AB}$ 和 $\\overline{CD}$ 的延長線交於圓外一點 $E$，線段 $\\overline{AD}$ 和 $\\overline{BC}$ 的延長線交於圓外一點 $F$。若 $\\angle E = 46^\\circ$，$\\angle F = 40^\\circ$，則 $\\angle B$ 為多少度？\n\n○ (A) 43 度\n○ (B) 47 度\n○ (C) 51 度\n○ (D) 55 度",
    "answer": "(B) 47 度",
    "explanation": "1. 由圓內接四邊形外角等於內對角：在 △EAD 中，∠BCD ＝ 180° － 46° － ∠B ＝ 134° － ∠B。\n2. 同理在 △FCD 中，∠BAD ＝ 180° － 40° － ∠B ＝ 140° － ∠B。\n3. 對角互補：∠BAD ＋ ∠BCD ＝ 180° ⟹ (140° － ∠B) ＋ (134° － ∠B) ＝ 180° ⟹ 2∠B ＝ 94° ⟹ ∠B ＝ 47°。選 (B)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_quad_external_angles_b_47_445.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v446';",
    data_content
)

# Convert Q445 to formatted JS string
q445_json = json.dumps(q445, ensure_ascii=False, indent=2)
q445_str = '\n'.join('  ' + line for line in q445_json.split('\n'))

new_question_str = f"  {q445_str.strip()},"

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

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=446", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.14", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")
