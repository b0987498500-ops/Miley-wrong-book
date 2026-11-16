import json
import re

q458 = {
    "id": "q_sci_phys_fishing_rod_wheel_axle_work_1500j_458",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化／簡單機械／輪軸原理（省力輪軸）／功與能量轉換（W＝F×S）／使用機械不省功",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：1. 輪軸施力在輪（10 cm）、抗力在軸（4 cm）為省力輪軸（40 N）。2. 作功直接算抗力作功 W＝100 N×15 m＝1500 J，使用機械不省功！",
    "stem": "如附圖，阿康使用附有捲線器的釣竿釣魚。捲線器的線軸半徑為 4 cm，手搖捲軸手把半徑為 10 cm。如果魚掙扎時的平均施力為 100 牛頓，釣線捲了大約 15 公尺，則請問阿康平均施力多少牛頓？大約作了多少功？\n\n○ (A) 80 牛頓，100 焦耳\n○ (B) 40 牛頓，600 焦耳\n○ (C) 80 牛頓，3000 焦耳\n○ (D) 40 牛頓，1500 焦耳",
    "answer": "(D) 40 牛頓，1500 焦耳",
    "explanation": "1. 輪軸平衡：阿康施力在輪（10 cm）、抗力在軸（4 cm），F康 × 10 ＝ 100 × 4 ⟹ F康 ＝ 40 牛頓。\n2. 作功：W ＝ F魚 × S ＝ 100 N × 15 m ＝ 1500 焦耳（使用機械不省功）。選 (D)。",
    "diagramUrl": "assets/questions/q_sci_phys_fishing_rod_wheel_axle_work_1500j_458.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY to v459
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v459';",
    data_content
)

# Convert Q458 to formatted JS string
q458_json = json.dumps(q458, ensure_ascii=False, indent=2)
q458_str = '\n'.join('  ' + line for line in q458_json.split('\n'))

new_question_str = f"  {q458_str.strip()},"

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

