import json

q504 = {
    "id": "q_eng_grammar_noun_clause_if_whether_subject_verb_agreement_goes_504",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "英文文法／名詞子句／if (是否) 引導間接問句語序 (S + V) 與三單現在式動詞 (goes)",
    "uploadDate": "2026-11-20",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：間接問句兩大核心原則：① 絕不倒裝（不可用助動詞倒裝 ✘ does S go）；② 主詞與動詞時態一致（主詞為三單時，動詞切勿漏掉 -es ✘ go ➔ ✔ goes）。",
    "stem": "I'm not sure if ________ to the temple every weekend.\n\n○ (A) my grandmother go\n◉ (B) my grandmother goes\n○ (C) my grandmother does go\n○ (D) does my grandmother go",
    "answer": "(B) my grandmother goes",
    "explanation": "if（是否）引導名詞子句，須用直述肯定語序 (S + V)。主詞 my grandmother 為第三人稱單數，動詞 go 須變為 goes。選 (B)。",
    "diagramUrl": ""
}

q_str = json.dumps(q504, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v489';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v490';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q504 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v489')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v490') || localStorage.getItem('miley_wrong_questions_v489')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q504!")
