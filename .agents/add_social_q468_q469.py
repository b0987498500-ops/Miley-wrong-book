import json

q468 = {
    "id": "q_soc_civ_tariff_belize_shrimp_price_drop_115cap_468",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／全球化與國際貿易／關稅政策與進口成本／零關稅對國內市場價格與供應來源之影響",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：零關稅降低進口成本、增加商品供應，使市場售價下跌；宏國白蝦恢復課稅使進口成本增加、進口量大跌，宏國對我國出超減少、國內白蝦競爭程度下降。",
    "stem": "「我國原本由宏都拉斯進口大量白蝦，但2023年與該國斷交後，我國恢復對該國產品課徵關稅，部分進口業者的營運遭受衝擊，進口量大幅下滑。我國官員受訪時提及，2025年將開放貝里斯的白蝦零關稅進口至我國，以增加商品供應來源。」僅根據上述內容判斷，關於此二項進口政策變化產生的個別影響，下列何項推論最合理？〔115會考〕\n\n◉ (A) 受到對貝里斯政策的影響，我國市場上白蝦的售價下降\n○ (B) 受到對貝里斯政策的影響，貝里斯的貿易出超金額下降\n○ (C) 受到對宏都拉斯政策的影響，宏都拉斯的貿易出超金額上升\n○ (D) 受到對宏都拉斯政策的影響，我國白蝦市場的競爭程度上升",
    "answer": "(A) 受到對貝里斯政策的影響，我國市場上白蝦的售價下降",
    "explanation": "零關稅進口使業者進口成本降低、國內供應來源增加，白蝦售價可能因此下降。選 (A)。",
    "diagramUrl": ""
}

q469 = {
    "id": "q_soc_civ_international_trade_commodity_price_decision_469",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／全球化與國際貿易／廠商進出口決策依據／商品國內外價格差異與獲利誘因",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：國際貿易的核心決策指標為「商品價格」（自低價國進口、向高價國出口賺取價差），品質與技術非最直接的決策判定空格。",
    "stem": "各國廠商從事進出口貿易時，大多都基於 ______，決定是否進口或出口某項商品。上述空格應填入下列何者？\n\n◉ (A) 商品價格\n○ (B) 商品品質\n○ (C) 生產技術\n○ (D) 廠商競爭",
    "answer": "(A) 商品價格",
    "explanation": "廠商從事進出口以獲利為導向，主要依國內外「商品價格」之價差決定是否進出口。選 (A)。",
    "diagramUrl": ""
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v467';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v468';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Format JSON
str468 = '  ' + json.dumps(q468, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'
str469 = '  ' + json.dumps(q469, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'

# Insert q468 then q469 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + str468 + str469, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v467')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v468') || localStorage.getItem('miley_wrong_questions_v467')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q468 and Q469!")
