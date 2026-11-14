import json
import re

q448 = {
    "id": "q_sci_chem_butterfly_pea_indicator_color_gradient_448",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "國中理化／酸鹼反應與指示劑／天然指示劑（蝶豆花）／密度分層與漸層變色／酸鹼性顏色判斷",
    "uploadDate": "2026-11-14",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：先看清位置箭頭方向！甲為最上層蝶豆花原汁（中性呈藍色），乙為檸檬汁層（酸性呈紅紫色），故甲至乙漸層必為「由藍變紅紫」。",
    "stem": "【表(一)】\n| 酸鹼性 | 蝶豆花原汁顏色 |\n| :---: | :---: |\n| 酸性 | 紅紫色 |\n| 中性 | 藍色 |\n| 鹼性 | 黃綠色 |\n\n如附圖(二)所示，試管中由上而下依序分層注入蝶豆花原汁、檸檬汁與果糖糖漿。關於圖(二)試管中由甲至乙範圍內的顏色漸層變化，下列何者正確？\n\n○ (A) 由藍色變成紅紫色\n○ (B) 由紅紫色變成藍色\n○ (C) 由藍色變成黃綠色\n○ (D) 由黃綠色變成藍色",
    "answer": "(A) 由藍色變成紅紫色",
    "explanation": "蝶豆花中性呈現藍色，遇到檸檬汁（酸性）呈現紅紫色。由上層甲（蝶豆花原汁）至下層乙（檸檬汁層），顏色漸層為由藍色變成紅紫色。選 (A)。",
    "diagramUrl": "assets/questions/q_sci_chem_butterfly_pea_indicator_color_gradient_448.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY to v449
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v449';",
    data_content
)

# Convert Q448 to formatted JS string
q448_json = json.dumps(q448, ensure_ascii=False, indent=2)
q448_str = '\n'.join('  ' + line for line in q448_json.split('\n'))

new_question_str = f"  {q448_str.strip()},"

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
