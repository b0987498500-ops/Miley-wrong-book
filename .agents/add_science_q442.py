import json
import re

q442 = {
    "id": "q_sci_phys_bottle_opener_lever_resistance_middle_442",
    "examPeriod": "一段",
    "subject": "自然",
    "errorReason": "觀念不懂",
    "concept": "國中理化／簡單機械與功／槓桿原理／開瓶器之三點位置（支點、抗力點、施力點）／抗力點在中間之省力槓桿",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：開瓶器前端頂住瓶蓋頂部為「支點」，中間勾住瓶蓋邊緣為「抗力點」，手握把柄為「施力點」！抗力點在中間必為「省力費時」槓桿！",
    "stem": "如圖使用「開瓶器打開瓶蓋」時，下列敘述何者正確？\n\n○ (A) 開瓶器是個省時的工具\n○ (B) 手的施力比瓶蓋的抗力大\n○ (C) 開瓶器是支點在中間的槓桿\n○ (D) 開瓶器是抗力點在中間的槓桿。",
    "answer": "(D) 開瓶器是抗力點在中間的槓桿。",
    "explanation": "抗力點在支點與施力點之間，是一種省力的槓桿。故選(D)。",
    "diagramUrl": "assets/questions/q_sci_phys_bottle_opener_lever_resistance_middle_442.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v443';",
    data_content
)

# Convert Q442 to formatted JS string
q442_json = json.dumps(q442, ensure_ascii=False, indent=2)
q442_str = '\n'.join('  ' + line for line in q442_json.split('\n'))

new_question_str = f"  {q442_str.strip()},"

# Insert into INITIAL_SEED_DATA = [\n
data_content = re.sub(
    r"(const INITIAL_SEED_DATA\s*=\s*\[\s*\n)",
    lambda m: m.group(1) + new_question_str + "\n",
    data_content,
    count=1
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully!")

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=443", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.11", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")

