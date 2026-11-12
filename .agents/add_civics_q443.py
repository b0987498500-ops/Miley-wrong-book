import json
import re

q443 = {
    "id": "q_soc_civ_constitution_stability_news_referendum_443",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／憲法之最高性、原則性與固定性／修憲門檻與憲法之固定性／公民投票複決之選舉人法定資格",
    "uploadDate": "2026-11-12",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：修憲門檻極高（需立院 3/4 決議 ＋ 965萬公投同意票）體現憲法的「固定性」！憲法修正案由「立法院」提出，非行政院。",
    "stem": "附圖是小平看到的一則新聞快訊。根據圖中內容及我國憲政體制、法律規範判斷，下列哪一項敘述完全正確？\n\n○ (A) 圖中內容凸顯出《憲法》的固定性\n○ (B) 該憲法修正案應該是由行政院提出\n○ (C) 受監護宣告者依法享有此次投票權\n○ (D) 具有我國國民身分即可行使複決權",
    "answer": "(A) 圖中內容凸顯出《憲法》的固定性",
    "explanation": "修憲門檻極高且繁複，呈現出《憲法》修改困難的「固定性」特色，故選(A)。(B)修憲案由立法院提出；(C)(D)投票需符合法定選舉人資格（年滿20歲、未受監護宣告）。",
    "diagramUrl": "assets/questions/q_soc_civ_constitution_stability_news_referendum_443.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v444';",
    data_content
)

# Convert Q443 to formatted JS string
q443_json = json.dumps(q443, ensure_ascii=False, indent=2)
q443_str = '\n'.join('  ' + line for line in q443_json.split('\n'))

new_question_str = f"  {q443_str.strip()},"

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

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=444", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.12", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")
