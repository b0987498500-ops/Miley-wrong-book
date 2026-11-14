import json
import re

q450 = {
    "id": "q_sci_chem_antacid_nahco3_gas_bloating_co2_450",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "國中理化／酸鹼中和與生活應用／制酸劑成分（碳酸氫鈉 vs 氫氧化鎂）／碳酸氫根遇酸產生二氧化碳／胃脹氣副作用",
    "uploadDate": "2026-11-14",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：碳酸氫鈉（NaHCO3）遇胃酸（HCl）中和必產生 CO2 氣體造成脹氣；而氫氧化鎂（Mg(OH)2）中和只產水，不產氣體。",
    "stem": "人類的胃在消化蛋白質時會分泌胃酸，但胃酸分泌過多時會傷害胃黏膜，此時通常會以弱鹼性物質作為制酸劑來中和胃酸。\n\n宏偉設計實驗檢驗市售制酸劑成效：\n- 實驗一：各取 1 克制酸劑溶於 100 mL 水中，以 pH 計測定 pH 值。\n- 實驗二：取 0.01 M 的 HCl 模擬胃酸，加入酚酞指示劑滴定 1 克制酸劑，記錄消耗的 HCl 體積。\n\n已知 A、B 兩牌制酸劑主要成分為 $\\text{NaHCO}_3$（碳酸氫鈉），C、D 兩牌主要成分為 $\\text{Mg(OH)}_2$（氫氧化鎂），結果如下表：\n\n| 制酸劑品牌 | pH 值 | 用去 HCl 毫升數 |\n| :---: | :---: | :---: |\n| A 牌 | 8.3 | 20 mL |\n| B 牌 | 8.5 | 25 mL |\n| C 牌 | 8.2 | 41 mL |\n| D 牌 | 8.4 | 50 mL |\n\n通常制酸劑除了制酸外，有些成分可能引起脹氣的副作用，需要搭配防脹氣藥物服用。請問在上述四牌制酸劑中，哪些須搭配防脹氣藥物服用？\n\n○ (A) A 牌、C 牌\n○ (B) B 牌、D 牌\n○ (C) A 牌、B 牌\n○ (D) C 牌、D 牌",
    "answer": "(C) A 牌、B 牌",
    "explanation": "以 NaHCO3（碳酸氫鈉）為主成分的制酸劑，遇到胃酸（HCl）會反應產生 CO2 氣體，容易造成腸胃道脹氣，因此 A 牌與 B 牌制酸劑需要搭配防脹氣藥物使用。選 (C)。",
    "diagramUrl": ""
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY to v451
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v451';",
    data_content
)

# Convert Q450 to formatted JS string
q450_json = json.dumps(q450, ensure_ascii=False, indent=2)
q450_str = '\n'.join('  ' + line for line in q450_json.split('\n'))

new_question_str = f"  {q450_str.strip()},"

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

