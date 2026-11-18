import json

q492 = {
    "id": "q_soc_geo_usa_wheat_belt_commercial_agriculture_features_492",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲農業特徵／美國大平原小麥帶／商業性穀物農業特色 (大面積單一作物、高度機械化、市場導向)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：美國中部小麥帶屬於典型「商業性穀物農業」（大農場、單一作物、高度機械化、產品售入市場）；「結合畜牧產業」屬於玉米帶的「混合農業」，題幹文句並未提及任何畜牧活動。",
    "stem": "「美國中部地區地勢平坦，夏季氣候溼熱，小麥的種植面積廣，農民主要用大型機械收割，農產不僅自足，同時亦足以供應市場。」由上述無法推判此區農業活動具有哪項特色？\n\n○ (A) 高度機械化\n◉ (B) 多結合畜牧產業\n○ (C) 具有商業性色彩\n○ (D) 大規模種單一作物",
    "answer": "(B) 多結合畜牧產業",
    "explanation": "小麥區具高度機械化、大面積單一作物及商業性市場供應特徵，文中並無提及結合畜牧活動。選 (B)。",
    "diagramUrl": ""
}

q_str = json.dumps(q492, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v478';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v479';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q492 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v478')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v479') || localStorage.getItem('miley_wrong_questions_v478')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q492!")
