import json
import re

q433 = {
    "id": "q_soc_civ_legal_hierarchy_convention_rights_child_act_433",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／法律的基本概念／法規範的位階（憲法、法律、命令）／中央法規標準法命名原則（法、律、條例、通則）",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：見「立法院三讀」或名稱為「法、律、條例、通則」必為法律位階！命令由行政機關訂定。",
    "stem": "我國為與國際接軌，落實聯合國的《兒童權利公約》要求的人權保障。由立法院三讀通過了《兒童權利公約施行法》。請問，下列有關《兒童權利公約施行法》的解釋，何者正確？\n\n○ (A) 擁有憲法級位階，規定原則性的事務\n○ (B) 擁有法律級位階，可實現憲法的精神\n○ (C) 擁有命令級位階，行政機關可以修改\n○ (D) 擁有命令級位階，縣市議會可以修改",
    "answer": "(B) 擁有法律級位階，可實現憲法的精神",
    "explanation": "由立法院三讀通過且名稱為「法」，屬於法律位階（包含法、律、條例、通則），故選(B)。(A)憲法位階僅含憲法本文與增修條文；(C)(D)命令由行政機關發布修改。",
    "diagramUrl": ""
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v434';",
    data_content
)

# Convert Q433 to formatted JS string
q433_json = json.dumps(q433, ensure_ascii=False, indent=2)
q433_str = '\n'.join('  ' + line for line in q433_json.split('\n'))

new_question_str = f"  {q433_str.strip()},"

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

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=434", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.07", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")
