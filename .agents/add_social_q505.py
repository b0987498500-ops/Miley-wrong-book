import json

q505 = {
    "id": "q_soc_civ_local_government_county_administered_city_councilor_puzi_505",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "公民／地方自治組織／地方民意代表／縣轄市 (嘉義縣朴子市) 市民代表會之「市民代表」",
    "uploadDate": "2026-11-20",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：嘉義縣朴子市為「縣轄市」，其立法機關地方民意代表為「市民代表」（非市議員）；縣長為行政首長非民意代表，市議員為直轄市/市（省轄市）民意代表，立委為中央民意代表。",
    "stem": "居住在嘉義縣朴子市的宏達，因覺得住家周遭的路燈照明不足，讓經常工作晚歸的他感到危險，於是向當地的地方民意代表陳情，希望能獲得相關單位的重視。根據上述內容判斷，宏達所陳情的對象最可能是下列何者？〔102.試辦會考〕\n\n○ (A) 縣長\n○ (B) 市議員\n○ (C) 立法委員\n◉ (D) 市民代表",
    "answer": "(D) 市民代表",
    "explanation": "文中提到嘉義縣朴子市當地的地方民意代表，因此可知是市民代表。選 (D)。",
    "diagramUrl": ""
}

q_str = json.dumps(q505, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v490';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v491';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q505 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v490')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v491') || localStorage.getItem('miley_wrong_questions_v490')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q505!")
