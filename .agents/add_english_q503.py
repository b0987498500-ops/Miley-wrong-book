import json

q503 = {
    "id": "q_eng_grammar_noun_clause_what_preposition_object_surprised_at_503",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文文法／名詞子句／疑問代名詞 what 作介系詞受詞／情緒動詞與形容詞 (be surprised at)",
    "uploadDate": "2026-11-20",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：what 在間接問句中作代名詞，子句內必須有受詞空缺供其歸位！(A) 缺少介系詞 at，what 無處可放；牢記「be surprised at + 事物」，句末不可遺漏介系詞 at。",
    "stem": "I have no idea what ________.\n\n○ (A) Kevin feels surprised\n○ (B) Kevin is surprising to\n◉ (C) Kevin is surprised at\n○ (D) Kevin surprised",
    "answer": "(C) Kevin is surprised at",
    "explanation": "「對……感到驚訝」為 be surprised at。what 在子句中作介系詞 at 的受詞，整句為 I have no idea what Kevin is surprised at.（我不知道凱文在驚訝什麼）。選 (C)。",
    "diagramUrl": ""
}

q_str = json.dumps(q503, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v488';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v489';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q503 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v488')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v489') || localStorage.getItem('miley_wrong_questions_v488')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q503!")
