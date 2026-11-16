import re
import json

q466 = {
    "id": "q_math_geo_circle_tangent_ab12_oc9_area_abc_108_5_466",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／切線性質（圓心到切點半徑垂直切線 OB⊥AB）／直角三角形畢氏定理／同高三角形面積比等於底邊比",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：1.「見切點連圓心」：連接半徑 OB 必垂直切線 AB 構成直角 △OAB。2. 求 △ABC 面積時，利用 △ABC 與 △OAB 共用頂點 B 且底邊在同一直線上（同高），面積比直接等於底邊比 AC : OA ＝ 6 : 15 ＝ 2/5，不用另外求高！",
    "stem": "如圖，AB 切圓 O 於 B 點，AO 交圓 O 於 C 點。若 AB ＝ 12，OC ＝ 9，則 △ABC 的面積為何？\n\n○ (A) 18\n○ (B) 20\n◉ (C) 108/5（或 21.6）\n○ (D) 27",
    "answer": "(C) 108/5（或 21.6）",
    "explanation": "1. 連半徑 OB 垂直切線 AB：直角 △OAB 中，OB＝OC＝9，由畢氏定理 OA ＝ √(9²＋12²) ＝ 15 ⟹ AC ＝ 15－9 ＝ 6。\n2. 同高面積比等於底邊比：△ABC 與 △OAB 同高，面積比 ＝ AC : OA ＝ 6 : 15 ＝ 2 : 5。\n3. △OAB 面積 ＝ 9×12÷2 ＝ 54 ⟹ △ABC 面積 ＝ 54 × (2/5) ＝ 108/5。選 (C)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_tangent_ab12_oc9_area_abc_108_5_466.png"
}

q_json_str = json.dumps(q466, ensure_ascii=False, indent=4)
q_indented = '  ' + q_json_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v465';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v466';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q466 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v465')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v466') || localStorage.getItem('miley_wrong_questions_v465')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully!")
