import re
import json

q471 = {
    "id": "q_math_geo_triangle_altitudes_midpoint_angle_dme_70_471",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／四點共圓判別（直角對直徑）／圓外角公式 ∠A＝½(弧BC－弧DE)／圓心角 ∠DME＝弧DE",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：破題神經：看到兩高「∠BEC＝∠BDC＝90°」，立即連結「以 BC 為直徑四點共圓（圓心 M）」！頂角 ∠A 實為割線交於圓外之「圓外角」，利用 ∠A＝½(180°－弧DE) 秒解圓心角 ∠DME＝70°。",
    "stem": "如圖，在 △ABC 中，∠A ＝ 55°，M 為 BC 的中點，BD 為 AC 上的高，CE 為 AB 上的高，則 ∠DME ＝ ？\n\n○ (A) 60°\n○ (B) 65°\n○ (C) 68°\n◉ (D) 70°",
    "answer": "(D) 70°",
    "explanation": "1. 四點共圓：由 ∠BEC ＝ ∠BDC ＝ 90°，知 B、C、D、E 四點共圓，以 BC 為直徑、M 為圓心，故 弧BC ＝ 180°。\n2. 圓外角求弧度：∠A 為圓外角，∠A ＝ ½(弧BC － 弧DE) ⟹ 55° ＝ ½(180° － 弧DE) ⟹ 弧DE ＝ 70°。\n3. 圓心角性質：∠DME 為弧DE 所對的圓心角，故 ∠DME ＝ 弧DE ＝ 70°。選 (D)。",
    "diagramUrl": "assets/questions/q_math_geo_triangle_altitudes_midpoint_angle_dme_70_471.png"
}

q_json_str = json.dumps(q471, ensure_ascii=False, indent=4)
q_indented = '  ' + q_json_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v469';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v470';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q471 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v469')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v470') || localStorage.getItem('miley_wrong_questions_v469')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q471!")

