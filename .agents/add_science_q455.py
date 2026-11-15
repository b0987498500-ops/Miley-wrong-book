import json
import re

q455 = {
    "id": "q_sci_phys_simple_machine_scissors_blade_inclined_plane_455",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "國中理化／簡單機械／斜面的應用（刀刃、楔、螺絲）／審題陷阱（整把剪刀為槓桿 vs 刀刃刃口為斜面）",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：審題陷阱！整把剪刀本體操作為「槓桿」，但若特指「刀刃刃口（刀鋒）」則是利用劈（楔）的「斜面」原理省力切割，切勿看太快選錯！",
    "stem": "剪刀的刃口是哪一種形式的機械？\n\n○ (A) 槓桿\n○ (B) 輪軸\n○ (C) 滑輪\n○ (D) 斜面",
    "answer": "(D) 斜面",
    "explanation": "剪刀的刃口是斜面（楔）的應用。選 (D)。",
    "diagramUrl": ""
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY to v456
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v456';",
    data_content
)

# Convert Q455 to formatted JS string
q455_json = json.dumps(q455, ensure_ascii=False, indent=2)
q455_str = '\n'.join('  ' + line for line in q455_json.split('\n'))

new_question_str = f"  {q455_str.strip()},"

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
