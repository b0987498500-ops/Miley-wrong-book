import json

q502 = {
    "id": "q_eng_grammar_wh_infinitive_rewrite_where_to_go_jiayi_beixing_502",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文文法／名詞子句簡化／疑問詞 + 不定詞 (wh- + to V) 句型改寫",
    "uploadDate": "2026-11-20",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：名詞子句簡化為「疑問詞 + 不定詞（wh- + to V）」三要件：① 子句主詞與主要子句主詞一致；② 刪除主詞與助動詞 (can/should)；③ 動詞改為不定詞 (to V)。",
    "stem": "依提示改寫句子：【嘉義北興】\nLily isn't sure where she can go after school.（用 wh- 不定詞改寫句子）\n\n◉ (A) Lily isn't sure where to go after school.\n○ (B) Lily isn't sure where she to go after school.\n○ (C) Lily isn't sure what to go after school.\n○ (D) Lily isn't sure where to can go after school.",
    "answer": "(A) Lily isn't sure where to go after school.",
    "explanation": "名詞子句主詞 (she) 與主要子句主詞 (Lily) 一致，且含助動詞 can，可簡化為「疑問詞 + 不定詞 (where to go)」。選 (A)。",
    "diagramUrl": ""
}

q_str = json.dumps(q502, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v487';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v488';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q502 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v487')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v488') || localStorage.getItem('miley_wrong_questions_v487')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q502!")
