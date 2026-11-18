import json

q495 = {
    "id": "q_soc_geo_north_america_climate_san_francisco_mediterranean_495",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲氣候分區／溫帶地中海型氣候／舊金山 (夏乾冬雨、夏季日照長降水少)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：6～8月（夏季）日照長、降水天數為 0，11～3月（冬季）降水天數多，典型「夏乾冬雨」地中海型氣候，對應加州舊金山（C）。西雅圖為溫帶海洋性、紐奧良為夏雨型暖溫帶。",
    "stem": "附圖是北美洲某一城市各月分日照時數與降水天數的資料，請按照圖中顯示的資訊判斷，該城市應為下列何者？\n\n○ (A) 美國西北部的西雅圖\n○ (B) 墨西哥灣沿岸的紐奧良\n◉ (C) 美國西南部沿海的舊金山\n○ (D) 洛磯山脈東側的拉斯維加斯",
    "answer": "(C) 美國西南部沿海的舊金山",
    "explanation": "6～8月日照長且降水天數少（夏乾冬雨），為溫帶地中海型氣候，選舊金山 (C)。",
    "diagramUrl": "assets/questions/q_soc_geo_north_america_climate_san_francisco_mediterranean_495.png"
}

q_str = json.dumps(q495, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v481';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v482';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q495 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v481')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v482') || localStorage.getItem('miley_wrong_questions_v481')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q495!")
