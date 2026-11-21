import json

q506 = {
    "id": "q_soc_civ_local_government_special_municipality_merger_legislative_yuan_506",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "公民／地方制度法與法規位階／法律修訂權責在立法院／直轄市改制程序與山地原住民區自治",
    "uploadDate": "2026-11-21",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：《地方制度法》屬立法院制定的「中央法律」，地方議會只能制定「自治條例」，無權修訂《地方制度法》；縣市合併改制為直轄市由內政部報請行政院核定即可。",
    "stem": "根據我國《地方制度法》規定：縣（市）擬改制為直轄市，縣（市）政府得擬訂改制計畫，經縣（市）議會同意後，由內政部報請行政院核定之。若此項提案通過，新竹縣當地具有泰雅與賽夏兩大族群文化的五峰鄉，將配合修改選舉制度。\n關於這則政壇新聞，從法律角度來看，哪一項分析是錯誤的？\n\n◉ (A) 須由地方議會通過《地方制度法》的修正案才生效\n○ (B) 五峰鄉將選出「山地原住民區」的區長與區民代表\n○ (C) 若改革完成，將同時減少一個縣政府與一個市政府\n○ (D) 改制後的直轄市長候選人，年齡至少須年滿30歲",
    "answer": "(A) 須由地方議會通過《地方制度法》的修正案才生效",
    "explanation": "《地方制度法》的修訂權責機關為立法院。選 (A)。",
    "diagramUrl": ""
}

q_str = json.dumps(q506, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v491';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v492';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q506 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v491')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v492') || localStorage.getItem('miley_wrong_questions_v491')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q506!")
