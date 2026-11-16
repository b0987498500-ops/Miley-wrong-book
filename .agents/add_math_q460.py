import re
import json

q460 = {
    "id": "q_math_arithmetic_series_odd_even_terms_diff_a1_64_460",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／數列與級數／等差數列性質／奇數項與偶數項之差求公差（5d）／首項 a₁ 計算",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：1. 兩式對齊相減法：(a₂＋a₄＋a₆＋a₈＋a₁₀) － (a₁＋a₃＋a₅＋a₇＋a₉) ＝ 5d ＝ 220 － 240 ＝ －20 ⟹ 公差 d ＝ －4（注意負號！）。2. 代回奇數項和 5a₁ ＋ 20d ＝ 240 即可秒解 a₁ ＝ 64。",
    "stem": "一個等差級數的第 n 項為 aₙ，若 a₁ ＋ a₃ ＋ a₅ ＋ a₇ ＋ a₉ ＝ 240，a₂ ＋ a₄ ＋ a₆ ＋ a₈ ＋ a₁₀ ＝ 220，則首項 a₁ 之值為何？\n\n○ (A) 56\n○ (B) 60\n○ (C) 64\n○ (D) 68",
    "answer": "(C) 64",
    "explanation": "1. 偶數項減奇數項求公差：(a₂＋a₄＋a₆＋a₈＋a₁₀) － (a₁＋a₃＋a₅＋a₇＋a₉) ＝ 5d ＝ 220 － 240 ＝ －20 ⟹ d ＝ －4。\n2. 求首項 a₁：奇數項和 ＝ 5a₁ ＋ 20d ＝ 240 ⟹ 5a₁ ＋ 20(－4) ＝ 240 ⟹ 5a₁ ＝ 320 ⟹ a₁ ＝ 64。選 (C)。",
    "diagramUrl": ""
}

q_json_str = json.dumps(q460, ensure_ascii=False, indent=4)
q_indented = '  ' + q_json_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v460';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v461';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q460 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v460')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v461') || localStorage.getItem('miley_wrong_questions_v460')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully!")

