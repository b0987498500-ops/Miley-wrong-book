import json

q493 = {
    "id": "q_soc_geo_usa_agricultural_belts_dairy_liquid_milk_493",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲農業專業化／美國農業帶分佈／酪農帶 (甲，五大湖區與東北部) 液態乳與乳製品出口",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：液態乳＝酪農業產品！甲為東北部及五大湖區「酪農帶」（受惠零關稅液態乳出口）；乙為玉米帶、丙為小麥帶、丁為加州地中海型農業帶。",
    "stem": "新聞報導：「2026年2月，經過多次談判，我國與美國正式簽署『臺美對等貿易協定』（ART），未來美國液態乳進口臺灣將降至零關稅，由於進口成本下降，預期未來美國的液態乳進口量將顯著上升。」附圖是美國的專業化農作帶分布圖，哪一區域的農民將受惠於上述貿易協定，未來可擴大出口市場？\n\n◉ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(A) 甲",
    "explanation": "液態乳為酪農業產品，美國酪農帶主要分布於東北部五大湖區（甲）。選 (A)。",
    "diagramUrl": "assets/questions/q_soc_geo_usa_agricultural_belts_dairy_liquid_milk_493.png"
}

q_str = json.dumps(q493, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v479';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v480';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q493 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v479')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v480') || localStorage.getItem('miley_wrong_questions_v479')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q493!")
