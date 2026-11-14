import json
import re

q449 = {
    "id": "q_sci_chem_chewing_gum_saliva_ph_balance_112cap_449",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "國中理化／酸鹼反應／水溶液 pH 值意義與中和／唾液緩衝與酸鹼平衡／圖表判讀與會考生活素養題",
    "uploadDate": "2026-11-14",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：掌握「中性 pH≈7 ⟶ 用餐變酸 pH 下降 ⟶ 嚼口香糖平衡 pH 回升至 7」三部曲，由起點、轉折點與終點秒殺折線圖！",
    "stem": "下列為某牌口香糖廣告的說明：人體口腔中的環境接近中性，在用餐後一段時間會變酸，而增加蛀牙機率。除了每日正確刷牙外，在餐後嚼食無糖口香糖，可刺激唾液分泌，有效「平衡」口中酸性。此廣告搭配了兩張圖用以輔助說明，一張為附圖（唾液量隨時間變化），另一張圖最可能為下列何者？【112.會考】\n\n○ (A) 牙齒表面 pH 值用餐後由 7 上升至 9.5，嚼食口香糖後下降\n○ (B) 牙齒表面 pH 值用餐後由 5 上升至 7.5，嚼食口香糖後下降\n○ (C) 牙齒表面 pH 值用餐後由 7 下降至約 4.5（變酸），開始嚼食口香糖後回升至 7（平衡酸性）\n○ (D) 牙齒表面 pH 值用餐後由 6.5 下降至 5，嚼食口香糖後上升至 9（變鹼）",
    "answer": "(C) 牙齒表面 pH 值用餐後由 7 下降至約 4.5（變酸），開始嚼食口香糖後回升至 7（平衡酸性）",
    "explanation": "1. 口腔平時接近中性（pH ≈ 7）。\n2. 用餐後環境變酸 ⟹ pH 值下降（小於 7）。\n3. 嚼食口香糖刺激唾液分泌平衡酸性 ⟹ pH 值回升至接近中性（7 附近）。符合此變化趨勢者僅 (C)。選 (C)。",
    "diagramUrl": "assets/questions/q_sci_chem_chewing_gum_saliva_ph_balance_112cap_449.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY to v450
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v450';",
    data_content
)

# Convert Q449 to formatted JS string
q449_json = json.dumps(q449, ensure_ascii=False, indent=2)
q449_str = '\n'.join('  ' + line for line in q449_json.split('\n'))

new_question_str = f"  {q449_str.strip()},"

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
