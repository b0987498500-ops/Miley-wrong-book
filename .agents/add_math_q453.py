import json
import re

q453 = {
    "id": "q_math_geo_quad_concyclic_diagonals_angle_dec_75_453",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／四點共圓判定（對角互補）／同弧所對圓周角相等／三角形外角定理",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：見對角相加為 180°（85°＋95°＝180°）必聯想「四點共圓」！由同弧圓周角得 ∠ACB＝30°，再利用 △EBC 外角定理秒殺 ∠DEC＝75°。",
    "stem": "如附圖，在四邊形 $ABCD$ 中，$\\overline{AC}$、$\\overline{BD}$ 兩對角線相交於 $E$ 點。若 $\\angle ABD = 40^\\circ$，$\\angle ADB = 30^\\circ$，$\\angle DBC = 45^\\circ$，$\\angle BDC = 65^\\circ$，則 $\\angle DEC$ 為多少度？\n\n○ (A) 65 度\n○ (B) 70 度\n○ (C) 75 度\n○ (D) 80 度",
    "answer": "(C) 75 度",
    "explanation": "1. 對角互補：∠B ＋ ∠D ＝ (40° ＋ 45°) ＋ (30° ＋ 65°) ＝ 180° ⟹ A、B、C、D 四點共圓。\n2. 同弧圓周角相等：∠ACB ＝ ∠ADB ＝ 30°。\n3. 三角形外角定理：在 △EBC 中，∠DEC ＝ ∠DBC ＋ ∠ACB ＝ 45° ＋ 30° ＝ 75°。選 (C)。",
    "diagramUrl": "assets/questions/q_math_geo_quad_concyclic_diagonals_angle_dec_75_453.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY to v454
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v454';",
    data_content
)

# Convert Q453 to formatted JS string
q453_json = json.dumps(q453, ensure_ascii=False, indent=2)
q453_str = '\n'.join('  ' + line for line in q453_json.split('\n'))

new_question_str = f"  {q453_str.strip()},"

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

