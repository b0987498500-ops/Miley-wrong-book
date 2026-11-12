import json
import re

q444 = {
    "id": "q_soc_civ_parliamentary_system_cabinet_uk_100_444",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／民主國家的政府體制／內閣制之核心特徵（虛位元首、國會多數組閣出任首相、行政立法合一）／以英國為典範",
    "uploadDate": "2026-11-12",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：見「多數黨黨魁任首相、虛位元首（英王）、行政對立法負責」必為「內閣制」（英國）！美國為總統制，我國為雙首長制。",
    "stem": "附圖是小慈用來輔助說明某國家政府體制的圖形，根據其內容判斷，她最可能是在說明下列哪一國家？【100年第2次基測】\n\n○ (A) 北韓\n○ (B) 英國\n○ (C) 美國\n○ (D) 中華民國。",
    "answer": "(B) 英國",
    "explanation": "圖中「國會過半數席位產生首相、虛位元首、內閣對議會負責」為典型「內閣制」特徵，以英國為代表。故選(B)。",
    "diagramUrl": "assets/questions/q_soc_civ_parliamentary_system_cabinet_uk_100_444.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v445';",
    data_content
)

# Convert Q444 to formatted JS string
q444_json = json.dumps(q444, ensure_ascii=False, indent=2)
q444_str = '\n'.join('  ' + line for line in q444_json.split('\n'))

new_question_str = f"  {q444_str.strip()},"

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

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=445", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.13", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")

