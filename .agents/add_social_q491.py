import json

q491 = {
    "id": "q_soc_geo_anglo_vs_latin_america_cultural_division_491",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理／美洲地理概述／美洲人文地理分區／盎格魯美洲 (英語系英國文化) vs 拉丁美洲 (拉丁語系西葡文化)",
    "uploadDate": "2026-11-18",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：美洲兩大分區依據：若依「自然地形/地峽」分為北美洲與南美洲（以巴拿馬地峽為界）；若依「語言與歷史文化」則以美墨邊界（格蘭河）分為「盎格魯美洲（英裔）」與「拉丁美洲（西葡裔）。",
    "stem": "廣大的美洲依據某種指標，可劃分為盎格魯美洲與拉丁美洲，其主要是以下列何者作為劃分依據？\n\n◉ (A) 文化差異\n○ (B) 地形種類\n○ (C) 使用貨幣\n○ (D) 氣候類型",
    "answer": "(A) 文化差異",
    "explanation": "依語言與殖民歷史之「文化差異」劃分：美加為英國英語系（盎格魯），其餘為西葡拉丁語系。選 (A)。",
    "diagramUrl": ""
}

q_str = json.dumps(q491, ensure_ascii=False, indent=4)
q_indented = '  ' + q_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v477';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v478';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q491 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v477')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v478') || localStorage.getItem('miley_wrong_questions_v477')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q491!")
