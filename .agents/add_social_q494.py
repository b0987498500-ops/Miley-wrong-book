import json

q494 = {
    "id": "q_soc_geo_usa_traditional_manufacturing_belt_steel_494",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲工業發展／美國三大工業區／東北部五大湖傳統工業區 (甲，煤鐵原料豐富、傳統鋼鐵與汽車重工業中心)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：甲區為五大湖及東北部傳統製造業帶，鄰近阿帕拉契山煤礦與蘇必略湖鐵礦，具水運與原料優勢，為傳統鋼鐵與汽車重工業中心；石化多在墨西哥灣，航空在西雅圖，高科技在矽谷。",
    "stem": "美國雖然自1950年代起，第三級產業已取代工業成為主要產業，但仍是全球工業的領導者。美國工業分布具明顯區域專業化特徵，附圖是美國主要工業區與礦產分布圖，下列關於甲區工業發展優勢的敘述，何者正確？\n\n◉ (A) 原料豐富，傳統鋼鐵中心\n○ (B) 富油氣資源，石化工業發達\n○ (C) 飛機製造中心，航空工業著稱\n○ (D) 科技資訊業重鎮，科技人才充足",
    "answer": "(A) 原料豐富，傳統鋼鐵中心",
    "explanation": "甲位煤鐵產地，原料充足、具五大湖與聖羅倫斯河水運等優勢，發展傳統鋼鐵、汽車工業(重工業)。選 (A)。",
    "diagramUrl": "assets/questions/q_soc_geo_usa_traditional_manufacturing_belt_steel_494.png"
}

q_str = json.dumps(q494, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v480';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v481';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q494 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v480')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v481') || localStorage.getItem('miley_wrong_questions_v480')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q494!")
