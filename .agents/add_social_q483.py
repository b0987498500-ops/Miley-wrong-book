import json

q483 = {
    "id": "q_soc_geo_usa_climate_zones_taiwan_ding_111cap_483",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／世界氣候與美國地理／美國氣候分區與世界國家對照／臺灣副熱帶季風氣候（夏雨溫暖）對照美國東南部夏雨型暖溫帶氣候 (丁)",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：臺灣為「夏雨集中、溫暖潮濕」的副熱帶季風氣候，對照美國東南部丁處（墨西哥灣與佛羅里達沿岸之「夏雨型暖溫帶氣候」）；甲為溫帶海洋性、乙為乾燥草原、丙為溫帶大陸性。",
    "stem": "美國具有多樣化的氣候類型，附圖是將美國各區域與世界上其他國家的氣候特徵相比，把具有類似氣候特徵的國家標示在該區域上。臺灣最可能標示在圖中甲、乙、丙、丁何處？〔111會考〕\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n◉ (D) 丁",
    "answer": "(D) 丁",
    "explanation": "臺灣屬夏雨溫暖之副熱帶季風氣候，與美國東南部丁區（夏雨型暖溫帶氣候）最相符。選 (D)。",
    "diagramUrl": "assets/questions/q_soc_geo_usa_climate_zones_taiwan_ding_111cap_483.png"
}

q_str = json.dumps(q483, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v474';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v475';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q483 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v474')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v475') || localStorage.getItem('miley_wrong_questions_v474')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q483!")

