import json

q484 = {
    "id": "q_sci_chem_reaction_rate_caco3_hcl_co2_bubbles_484",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化／反應速率／反應快慢之測量方法／氣體產物 (CO₂) 冒出氣泡最易肉眼觀察與定量測量",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：測量反應速率優先選擇「有明顯外觀變化」者！生成物 CO₂ 為氣體，反應時會產生連續氣泡，可直接測量氣體體積或冒泡速率；而鹽酸與氯化鈣皆為無色水溶液，難以用肉眼直接觀察變化。",
    "stem": "已知 CaCO₃ ＋ 2HCl → CaCl₂ ＋ CO₂ ＋ H₂O，欲觀察此反應的快慢，以觀察哪一物質的變化最方便？\n\n◉ (A) CO₂\n○ (B) HCl\n○ (C) CaCO₃\n○ (D) CaCl₂",
    "answer": "(A) CO₂",
    "explanation": "CO₂ 為氣體產物，生成時會冒出氣泡，直接計算氣泡產生速率或收集氣體體積最方便觀察。選 (A)。",
    "diagramUrl": ""
}

q_str = json.dumps(q484, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v475';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v476';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q484 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v475')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v476') || localStorage.getItem('miley_wrong_questions_v475')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q484!")
