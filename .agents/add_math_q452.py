import json
import re

q452 = {
    "id": "q_math_geo_circle_inscribed_trapezoid_angle_acb_55_452",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／圓內接梯形（平行線截等弧）／正三角形與圓心角／圓周角與弧度換算",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：見弦長等於半徑（AD＝r＝5）秒聯想「正三角形（圓心角/弧度為 60°）」！再由「平行線截等弧」扣除上下兩弧求得側弧，圓周角即為側弧之一半。",
    "stem": "如附圖，圓 $O$ 的半徑為 5，梯形 $ABCD$ 為圓內接四邊形。若 $\\overline{AD} // \\overline{BC}$，$\\overline{AD} = 5$，$\\angle BDC = 40^\\circ$，則 $\\angle ACB$ 為多少度？\n\n○ (A) 65 度\n○ (B) 60 度\n○ (C) 55 度\n○ (D) 40 度",
    "answer": "(C) 55 度",
    "explanation": "1. 連接 AO、DO：因 AD ＝ AO ＝ DO ＝ 5，故 △AOD 為正三角形 ⟹ 弧AD ＝ 60°。\n2. 弧BC ＝ 2∠BDC ＝ 80°。又平行線截等弧（AD // BC），故 弧AB ＝ 弧CD ＝ (360° － 80° － 60°) ÷ 2 ＝ 110°。\n3. 圓周角 ∠ACB ＝ 弧AB ÷ 2 ＝ 55°。選 (C)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_trapezoid_angle_acb_55_452.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY to v453
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v453';",
    data_content
)

# Convert Q452 to formatted JS string
q452_json = json.dumps(q452, ensure_ascii=False, indent=2)
q452_str = '\n'.join('  ' + line for line in q452_json.split('\n'))

new_question_str = f"  {q452_str.strip()},"

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

