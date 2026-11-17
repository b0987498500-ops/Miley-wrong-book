import json

q470 = {
    "id": "q_soc_civ_division_of_labor_trade_international_trade_grape_470",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／全球化與國際貿易／分工與交易概念／國際分工 vs 國際貿易（跨國買賣商品）之辨析",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：概念辨析：(C)「跨國不同階段生產」屬於國際分工；(D)「跨國買賣商品、進口貨物」才屬於國際貿易！",
    "stem": "根據分工與交易的概念判斷，下列何者涉及國際貿易？\n\n○ (A) 育筑請家人到市區的法式餐廳用餐慶祝父親節\n○ (B) 俊成與班上美國留學生一起合作討論專題報告\n○ (C) 服飾品牌在中國生產布料，在越南負責製作成品\n◉ (D) 建銘在國內大賣場任職，負責採購智利進口葡萄",
    "answer": "(D) 建銘在國內大賣場任職，負責採購智利進口葡萄",
    "explanation": "(A)屬於國內市場交易；(B)屬於分工；(C)屬於國際分工；(D)跨國買賣進口商品屬於國際貿易。選 (D)。",
    "diagramUrl": ""
}

q_json_str = json.dumps(q470, ensure_ascii=False, indent=4)
q_indented = '  ' + q_json_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v468';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v469';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q470 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v468')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v469') || localStorage.getItem('miley_wrong_questions_v468')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q470!")

