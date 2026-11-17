import json

q472 = {
    "id": "q_math_geo_circle_diameter_chords_bpd60_abc20_472",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／直徑所對圓周角為直角（∠ADB＝90°）／圓周角與等弦等弧性質（BC＝CD ⟹ ∠CDB＝∠CBD）／外角定理",
    "uploadDate": "2026-11-17",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：直徑考點首選「連接 AD 造直角（∠ADB＝90°）」！看到 BC＝CD 立刻想到等腰 △BCD，利用同弧圓周角 ∠ADC＝x° 與底角 90°－x° 導出頂角 ∠DCB＝2x°，最後由 △PBC 外角 3x＝60° 秒殺。",
    "stem": "如圖，AB 為圓 O 的直徑，C、D 為圓上的兩點，CD 和 AB 相交於 P 點，若 BC ＝ CD，∠BPD ＝ 60°，則 ∠ABC ＝ ？\n\n○ (A) 32°\n○ (B) 25°\n◉ (C) 20°\n○ (D) 18°",
    "answer": "(C) 20°",
    "explanation": "1. 輔助線與直角：連接 AD。因 AB 為直徑，得 ∠ADB ＝ 90°。\n2. 等弦對等角：設 ∠ABC ＝ x°，則同弧 AC 之圓周角 ∠ADC ＝ x°。由 BC ＝ CD 知 △BCD 為等腰三角形，故 ∠DCB ＝ 2x°。\n3. 外角定理：在 △PBC 中，外角 ∠BPD ＝ ∠DCB ＋ ∠ABC ⟹ 60° ＝ 2x° ＋ x° ⟹ x ＝ 20°。選 (C)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_diameter_chords_bpd60_abc20_472.png"
}

q_json_str = json.dumps(q472, ensure_ascii=False, indent=4)
q_indented = '  ' + q_json_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v470';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v471';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q472 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v470')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v471') || localStorage.getItem('miley_wrong_questions_v470')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q472!")
