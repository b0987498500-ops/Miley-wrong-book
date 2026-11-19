import json

q501 = {
    "id": "q_eng_grammar_noun_clause_indirect_question_happen_tainan_fuxing_501",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文文法／名詞子句／間接問句語序 (疑問詞 + S + V)／happen 不及物動詞用法",
    "uploadDate": "2026-11-20",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：happen 為「不及物動詞」，主詞須為「事情」（如 what happened / this happened），不可用「人」作主詞（如 ✘ he happened）；間接問句不與 that 連用。",
    "stem": "Does anyone know ________? 【臺南復興】\n\n◉ (A) how this could happen\n○ (B) what he happened\n○ (C) that what happened to him\n○ (D) what to happen",
    "answer": "(A) how this could happen",
    "explanation": "know 後接間接問句 (疑問詞+S+V)。(A)語序正確；(B)應改 what happened to him；(C)刪 that；(D)改 what happened。選 (A)。",
    "diagramUrl": ""
}

q_str = json.dumps(q501, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v486';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v487';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q501 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v486')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v487') || localStorage.getItem('miley_wrong_questions_v486')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q501!")
