import json
import re

q457 = {
    "id": "q_sci_phys_nail_clipper_compound_levers_457",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化／簡單機械／槓桿原理的組合（指甲刀）／抗力點在中間（省力槓桿）vs 施力點在中間（費力槓桿）／刀刃（斜面）",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：拆解指甲刀：上方壓柄為丙支點、乙抗力、甲施力 ⟹「抗力點在中間」省力槓桿；下方夾片為戊支點、乙施力、丁抗力 ⟹ 費力槓桿；刀口丁為斜面（楔）。",
    "stem": "附圖為指甲刀之示意圖。指甲刀為多種簡單機械的組合體，下列有關機械的敘述，何者錯誤？\n\n○ (A) 在甲處施力造成乙處下壓是支點在中間的槓桿\n○ (B) 在乙處施力造成丁處下壓是施力臂小於抗力臂的槓桿\n○ (C) 丁處刀刃磨鋒利會有省力的效果\n○ (D) 綜合以上多種機械原理，指甲剪是一種省力的機械",
    "answer": "(A) 在甲處施力造成乙處下壓是支點在中間的槓桿",
    "explanation": "(A) 在甲處施力造成乙處下壓，是以丙為支點、乙為抗力點、甲為施力點，屬於「抗力點在中間」的省力槓桿。故 (A) 敘述錯誤，選 (A)。",
    "diagramUrl": "assets/questions/q_sci_phys_nail_clipper_compound_levers_457.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY to v458
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v458';",
    data_content
)

# Convert Q457 to formatted JS string
q457_json = json.dumps(q457, ensure_ascii=False, indent=2)
q457_str = '\n'.join('  ' + line for line in q457_json.split('\n'))

new_question_str = f"  {q457_str.strip()},"

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
