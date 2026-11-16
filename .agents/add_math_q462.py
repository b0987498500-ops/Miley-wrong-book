import re
import json

q462 = {
    "id": "q_math_shuttle_run_marbles_series_sum_506_462",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／數列與級數／等差級數生活應用題／趣味競賽折返跑（往返雙程距離 2n）／等差級數求和公式",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：1. 「折返跑」是往返雙程：到第 n 站取回彈珠，跑的距離是來回雙倍 ＝ n × 1 m × 2 ＝ 2n 公尺，切莫忘記乘 2（去程＋回程）！2. 總距離為偶數等差級數 2 ＋ 4 ＋ 6 ＋ …… ＋ 44（共 22 項），利用 (2＋44)×22 ÷ 2 ＝ 506 公尺。",
    "stem": "如圖，運動會時舉辦趣味競賽，由每班的同學輪流接力，進行折返跑遊戲，每位同學都由起點出發，每一站之間的距離相等。第 1 位同學到第一站取回 1 顆彈珠，第 2 位同學到第二站取回 1 顆彈珠，……，以此類推。若一年 3 班共取回 22 顆彈珠，則他們共跑了多少公尺？\n\n○ (A) 484 公尺\n○ (B) 506 公尺\n○ (C) 528 公尺\n○ (D) 550 公尺",
    "answer": "(B) 506 公尺",
    "explanation": "設所跑的總距離為 S 公尺。\n第 1 位同學跑了 1×2 公尺，第 2 位同學跑了 2×2 公尺，……，第 22 位同學跑了 22×2 公尺。\n總距離 S ＝ 2 ＋ 4 ＋ 6 ＋ …… ＋ 44 ＝ (2＋44)×22 ÷ 2 ＝ 506（公尺）。選 (B)。",
    "diagramUrl": "assets/questions/q_math_shuttle_run_marbles_series_sum_506_462.png"
}

q_json_str = json.dumps(q462, ensure_ascii=False, indent=4)
q_indented = '  ' + q_json_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v462';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v463';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q462 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v462')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v463') || localStorage.getItem('miley_wrong_questions_v462')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully!")

