import json
import re

q456 = {
    "id": "q_sci_phys_pulleys_work_energy_height_same_456",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化／功與能／功的原理（使用簡單機械不省功）／滑輪與滑輪組／重力位能與等速上升高度（W＝mgh）",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：功的原理（使用任何機械絕不省功）！不計摩擦與滑輪重時，輸入功全轉為重力位能（W＝mgh）；物重相同且作功相同，上升高度必相等（甲＝乙＝丙）。",
    "stem": "如附圖，若三種裝置之力對物體皆作功 800 焦耳後，則物體等速度上升的高度關係為何？（動滑輪重及摩擦力不計）\n\n○ (A) 甲＞乙＞丙\n○ (B) 甲＝乙＝丙\n○ (C) 甲＜乙＜丙\n○ (D) 甲＜乙＝丙",
    "answer": "(B) 甲＝乙＝丙",
    "explanation": "動滑輪重及摩擦力不計，所以輸入的功全轉成位能，位能都是 800 焦耳。因為三者物重皆相同，所以上升高度 h 也都相同（甲＝乙＝丙）。選 (B)。",
    "diagramUrl": "assets/questions/q_sci_phys_pulleys_work_energy_height_same_456.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY to v457
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v457';",
    data_content
)

# Convert Q456 to formatted JS string
q456_json = json.dumps(q456, ensure_ascii=False, indent=2)
q456_str = '\n'.join('  ' + line for line in q456_json.split('\n'))

new_question_str = f"  {q456_str.strip()},"

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
