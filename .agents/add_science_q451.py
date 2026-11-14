import json
import re

q451 = {
    "id": "q_sci_phys_chem_calcium_oxide_heat_water_specific_heat_451",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化／化學反應熱（氧化鈣加水放熱）／熱量計算（H＝msΔT）／比熱與相變潛熱（冰熔化熱）",
    "uploadDate": "2026-11-15",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：水在 0°C 以下為冰，由 －20°C 升至 80°C 跨越相變，必計入冰熔化熱；且 1 公升水質量為 1000 克，切勿漏算質量與相變！",
    "stem": "近期開戰的烏俄戰爭，造成不少的人員傷亡、糧食短缺，有民眾在網路上就建議：可帶速食調理包、氧化鈣化學物質，當肚子餓時，可將氧化鈣和水反應產生熟石灰（為一種鹼性物質），並放出大量的熱讓水沸騰，再來加熱速食調理包，補充食物短缺的問題。試問關於氧化鈣和水的反應過程中，何者敘述錯誤？\n\n○ (A) 熟石灰的學名應為氫氧化鈣\n○ (B) 此反應屬於放熱反應\n○ (C) 以沸騰的水加熱速食調理包，主要是利用水的比熱大，溫度變化小的特性\n○ (D) 若要用 1 公升的水使其溫度由 $-20^\\circ\\text{C}$ 上升至 $80^\\circ\\text{C}$，需要 100 卡",
    "answer": "(D) 若要用 1 公升的水使其溫度由 $-20^\\circ\\text{C}$ 上升至 $80^\\circ\\text{C}$，需要 100 卡",
    "explanation": "(D) 除了溫度變化的熱量外，還要考慮冰熔化成水所吸收的熔化熱（且 1 公升水為 1000 克，所需熱量遠大於 100 卡）。故 (D) 敘述錯誤，選 (D)。",
    "diagramUrl": ""
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY to v452
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v452';",
    data_content
)

# Convert Q451 to formatted JS string
q451_json = json.dumps(q451, ensure_ascii=False, indent=2)
q451_str = '\n'.join('  ' + line for line in q451_json.split('\n'))

new_question_str = f"  {q451_str.strip()},"

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
