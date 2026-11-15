import json
import re

q454 = {
    "id": "q_math_geo_circle_inscribed_quad_angle_dao_67_454",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／圓內接四邊形對角互補／等腰三角形（半徑相等）底角求法／角的加減運算",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：連 AB 破題！利用圓內接四邊形對角互補得 ∠DAB＝122°，再利用半徑等長等腰 △OAB 求底角 ∠BAO＝55°，相減即得 ∠DAO＝67°。",
    "stem": "如附圖，$A$、$B$、$C$、$D$ 為圓 $O$ 上四點。若 $\\angle DCB = 58^\\circ$，$\\angle AOB = 70^\\circ$，則 $\\angle DAO$ 為多少度？\n\n○ (A) 60 度\n○ (B) 63 度\n○ (C) 67 度\n○ (D) 72 度",
    "answer": "(C) 67 度",
    "explanation": "1. 連接 AB：圓內接四邊形對角互補，∠DAB ＝ 180° － 58° ＝ 122°。\n2. 在等腰 △OAB 中（OA ＝ OB）：∠BAO ＝ (180° － 70°) ÷ 2 ＝ 55°。\n3. 兩角相減：∠DAO ＝ ∠DAB － ∠BAO ＝ 122° － 55° ＝ 67°。選 (C)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_quad_angle_dao_67_454.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY to v455
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v455';",
    data_content
)

# Convert Q454 to formatted JS string
q454_json = json.dumps(q454, ensure_ascii=False, indent=2)
q454_str = '\n'.join('  ' + line for line in q454_json.split('\n'))

new_question_str = f"  {q454_str.strip()},"

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

