import json
import re

q435 = {
    "id": "q_soc_hist_spain_iberian_roman_islamic_rule_435",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中歷史與地理／歐洲歷史文化發展／伊比利半島／西班牙之羅馬文化與伊斯蘭文化交融",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：西班牙位於伊比利半島，曾受羅馬帝國統治與阿拉伯人（伊斯蘭教政權）統治近八百年！",
    "stem": "背包客阿福正在準備歐洲旅遊的行前資料，看到一篇介紹說：「在歷史上，這個國家曾被羅馬帝國及伊斯蘭教政權統治過，所以它是一個具有多種文化特色的國家。」依此推斷，阿福最可能要到下列哪一個國家旅遊？\n\n○ (A) 英國\n○ (B) 法國\n○ (C) 義大利\n○ (D) 西班牙",
    "answer": "(D) 西班牙",
    "explanation": "伊比利半島曾先後受到羅馬帝國及伊斯蘭勢力的統治，西班牙即位於伊比利半島。故選(D)。",
    "diagramUrl": ""
}

q436 = {
    "id": "q_soc_geo_world_religion_buddhism_origin_india_113_436",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中地理與歷史／世界宗教分佈與發源地／佛教起源於古印度／南亞與東南亞佛教國家比例判讀",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：柬埔寨、泰國、斯里蘭卡等皆信奉「佛教」！佛教起源於南亞「印度（丙）」，絕非起源於東亞或東南亞。",
    "stem": "下表呈現五個國家2010年某宗教信徒占該國總人口數的比例，根據內容判斷，此宗教的發源地最可能位於下圖中甲、乙、丙、丁何處？【113會考】\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
    "answer": "(C) 丙",
    "explanation": "表中柬埔寨、泰國、緬甸、不丹、斯里蘭卡均為信仰佛教為主的國家。佛教起源於南亞印度（丙區），故選(C)。（甲為中國、乙為中南半島、丁為阿拉伯半島）",
    "diagramUrl": "assets/questions/q_soc_geo_world_religion_buddhism_origin_india_113_436.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v437';",
    data_content
)

# Convert Q436 and Q435 to formatted JS strings
q436_json = json.dumps(q436, ensure_ascii=False, indent=2)
q435_json = json.dumps(q435, ensure_ascii=False, indent=2)

q436_str = '\n'.join('  ' + line for line in q436_json.split('\n'))
q435_str = '\n'.join('  ' + line for line in q435_json.split('\n'))

new_questions_str = f"  {q436_str.strip()},\n  {q435_str.strip()},"

# Insert into INITIAL_SEED_DATA = [\n
data_content = re.sub(
    r"(const INITIAL_SEED_DATA\s*=\s*\[\s*\n)",
    lambda m: m.group(1) + new_questions_str + "\n",
    data_content,
    count=1
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully!")

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=437", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.09", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")
