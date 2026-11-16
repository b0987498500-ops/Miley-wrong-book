import re
import json

q463 = {
    "id": "q_math_arithmetic_series_max_sum_positive_terms_n33_463",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／數列與級數／等差級數前 n 項和之極值問題（最大值）／一般項 aₙ 正負轉折點判定（aₙ ＞ 0）",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：1. 前 n 項和「最大值」核心觀念：只要項數為正（aₙ ＞ 0），越加越大；一旦變成負數（aₙ ＜ 0），總和就開始減少，故加到「最後一個非負項」為止！2. 解出 n ＞ 33.5 代表第 34 項開始為負數，故取 n ＝ 33 達最大和。",
    "stem": "有一等差級數的首項是 130，公差是 －4，若前 n 項的和為最大，則 n ＝ ？\n\n○ (A) 30\n○ (B) 31\n○ (C) 32\n○ (D) 33",
    "answer": "(D) 33",
    "explanation": "1. 找負數項轉折點：設第 n 項開始小於 0，aₙ ＝ 130 ＋ (n－1)×(－4) ＜ 0 ⟹ －4n ＋ 134 ＜ 0 ⟹ 4n ＞ 134 ⟹ n ＞ 33.5。\n2. 即第 34 項開始為負數，故加到第 33 項的和為最大，n ＝ 33。選 (D)。",
    "diagramUrl": ""
}

q_json_str = json.dumps(q463, ensure_ascii=False, indent=4)
q_indented = '  ' + q_json_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v463';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v464';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q463 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v463')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v464') || localStorage.getItem('miley_wrong_questions_v463')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully!")

