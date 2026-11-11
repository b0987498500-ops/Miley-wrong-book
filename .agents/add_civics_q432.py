import json
import re

q432 = {
    "id": "q_soc_civ_recall_representative_political_rights_civil_exam_432",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／人民之基本權利與義務／參政權（選舉、罷免、創制、複決、應考試、服公職）／四種基本權利辨析（平等、自由、受益、參政）",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：罷免與應考試服公職皆屬「參政權」！訴願與受教為「受益權」，遷徙為「自由權」。",
    "stem": "小光認為自己所屬選區內的民意代表，違背了競選時所提出的政見，於是發動連署提案罷免該位民意代表。上述小光行使的人民基本權利類型與下列何者最類似？【103年會考】\n\n○ (A) 對於政府行政處分提出訴願\n○ (B) 參加國家考試擔任公務人員\n○ (C) 依照個人需求遷移居住地點\n○ (D) 接受國民義務教育完成學業。",
    "answer": "(B) 參加國家考試擔任公務人員",
    "explanation": "罷免與應考試服公職，都是屬於人民的參政權。(A)訴願是受益權；(C)往來遷徙是自由權；(D)接受國民義務教育是受益權。",
    "diagramUrl": ""
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v433';",
    data_content
)

# Convert Q432 to formatted JS string
q432_json = json.dumps(q432, ensure_ascii=False, indent=2)
q432_str = '\n'.join('  ' + line for line in q432_json.split('\n'))

new_question_str = f"  {q432_str.strip()},"

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

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=433", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.06", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")

