import re
import json

q461 = {
    "id": "q_math_regular_pentagon_formation_series_sum_210_461",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／數列與級數／等差級數生活應用題／正五邊形排隊陣型（頂點重複扣除）／等差級數求和公式",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：1. 正五邊形「頂點重複計算」陷阱：每圈總人數為「每邊人數×5－5（扣除 5 個重複頂點）」，千萬不能算成 3×5＝15！2. 列出各圈人數為 10, 20, 30, ...（公差 10），再套用等差級數求和公式 S₆ ＝ 210 人。",
    "stem": "如圖，有若干位學生排出正五邊形的隊形，由內而外共排了 6 圈，且學生人數剛好排完。已知最內圈每邊 3 人，往外每圈每邊增加 2 人（即由內向外算起第 2 圈每邊 5 人，第 3 圈每邊 7 人，…）。請問此隊形的學生共有多少人？〔92.基測 II〕\n\n○ (A) 210\n○ (B) 240\n○ (C) 285\n○ (D) 630",
    "answer": "(A) 210",
    "explanation": "1. 各圈人數（頂點扣重複）：\n   第 1 圈 ＝ 3×5－5 ＝ 10（人）；第 2 圈 ＝ 5×5－5 ＝ 20（人）；第 3 圈 ＝ 7×5－5 ＝ 30（人）\n   各圈人數成公差 d ＝ 10 之等差數列。\n2. 求 6 圈總人數：利用等差級數和公式 S₆ ＝ [6 × (2×10 ＋ 5×10)] ÷ 2 ＝ 3 × 70 ＝ 210（人）。選 (A)。",
    "diagramUrl": "assets/questions/q_math_regular_pentagon_formation_series_sum_210_461.png"
}

q_json_str = json.dumps(q461, ensure_ascii=False, indent=4)
q_indented = '  ' + q_json_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v461';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v462';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q461 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v461')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v462') || localStorage.getItem('miley_wrong_questions_v461')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully!")

