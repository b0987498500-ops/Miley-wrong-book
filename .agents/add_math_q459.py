import re
import json

q459 = {
    "id": "q_math_diff_squares_series_sum_86_to_1_3741_459",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／乘法公式／平方差公式 a²－b²＝(a＋b)(a－b)／數列與級數／等差級數求和公式／分組化簡妙算",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：1. 看到「平方差交錯相減」，兩兩分組利用 a²－b²＝(a＋b)(a－b)，因相鄰項之差為 1，秒轉化為「1 到 86 連續整數求和」。2. 等差級數和公式：(首項＋末項)×項數 ÷ 2 ＝ (1＋86)×86 ÷ 2 ＝ 3741，切勿硬算平方！",
    "stem": "求 86² － 85² ＋ 84² － 83² ＋ …… ＋ 2² － 1² 之值為何？\n\n○ (A) 3641\n○ (B) 3741\n○ (C) 3781\n○ (D) 3841",
    "answer": "(B) 3741",
    "explanation": "1. 平方差分組：利用 a²－b² ＝ (a＋b)(a－b)，兩兩相鄰項差皆為 1：\n   原式 ＝ (86＋85)×1 ＋ (84＋83)×1 ＋ …… ＋ (2＋1)×1 ＝ 86＋85＋……＋1。\n2. 等差級數求和：利用梯形公式 Sₙ ＝ (1＋86)×86 ÷ 2 ＝ 87×43 ＝ 3741。選 (B)。",
    "diagramUrl": ""
}

q_json_str = json.dumps(q459, ensure_ascii=False, indent=4)
# Add indentation to match data.js format
q_indented = '  ' + q_json_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v459';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v460';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q459 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v459')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v460') || localStorage.getItem('miley_wrong_questions_v459')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    data_content = f.write(data_content)

print("Updated js/data.js successfully!")
