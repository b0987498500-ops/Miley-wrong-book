import json

q496 = {
    "id": "q_soc_geo_usa_hurricane_occurrence_season_august_496",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲天然災害／颶風形成季節／夏秋之際 (8月海水溫度高)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：颶風為北半球熱帶氣旋，需高海溫提供蒸發潛熱，好發於夏、秋之際（7～10月，8月為高峰期）；冬春兩季海溫低不易形成。",
    "stem": "閱讀下列選文，回答第 23～24 題：\n\n　　颶風是一種熱帶氣旋，往往會帶來狂風豪雨等嚴重災情。2025年某月，美國東南方海域上有颶風艾琳生成，且在24小時內迅速增強為5級颶風。其路徑沿著美國東岸北上，雖未直接登陸美國本土，但豪雨以及狂風帶來的巨浪仍對美國東岸地區造成威脅。\n\n23. 由上述推測，此新聞最可能發生於何時？\n\n○ (A) 1月\n○ (B) 4月\n◉ (C) 8月\n○ (D) 11月",
    "answer": "(C) 8月",
    "explanation": "北美洲的颶風災害好發於夏、秋之際。選 (C)。",
    "diagramUrl": ""
}

q497 = {
    "id": "q_soc_geo_usa_hurricane_atlantic_ocean_origin_497",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲天然災害與海域位置／美國東岸濱大西洋 (墨西哥灣與加勒比海颶風)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：美國東南方海域（墨西哥灣、加勒比海）以及美國東岸皆濱臨「大西洋」；美國西岸才濱臨太平洋。",
    "stem": "閱讀下列選文，回答第 23～24 題：\n\n　　颶風是一種熱帶氣旋，往往會帶來狂風豪雨等嚴重災情。2025年某月，美國東南方海域上有颶風艾琳生成，且在24小時內迅速增強為5級颶風。其路徑沿著美國東岸北上，雖未直接登陸美國本土，但豪雨以及狂風帶來的巨浪仍對美國東岸地區造成威脅。\n\n24. 根據上述判斷，颶風艾琳最可能在下列何處海域生成？\n\n○ (A) 北極海\n○ (B) 印度洋\n○ (C) 太平洋\n◉ (D) 大西洋",
    "answer": "(D) 大西洋",
    "explanation": "美國東岸濱大西洋。選 (D)。",
    "diagramUrl": ""
}

q_list = [q496, q497]
q_indented_list = []
for q in q_list:
    q_str = json.dumps(q, ensure_ascii=False, indent=4)
    q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'
    q_indented_list.append(q_indented)

inserted_text = ''.join(q_indented_list)

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v482';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v483';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q496 and q497 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + inserted_text, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v482')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v483') || localStorage.getItem('miley_wrong_questions_v482')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q496 & Q497!")
