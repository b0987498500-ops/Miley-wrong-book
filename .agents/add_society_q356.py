# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_soc_geo_hydroelectric_power_arabian_peninsula_356",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/自然環境與能源／水力發電兩大自然條件（豐沛水量＋地勢落差）與阿拉伯半島沙漠無常流河特徵",
    "uploadDate": "2026-11-05",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【水力發電「黃金雙要素」——水量大＋落差大！】\n1. **水力發電天然兩大必要條件（缺一不可）**：\n   - **條件一：水量充沛且穩定**（年降水量豐沛，河流長年有充足逕流）。\n   - **條件二：地勢起伏落差大**（山高谷深、水流湍急，重力位能才能高效轉化為電能）。\n2. **秒殺排除法——「連河都沒有，怎麼發水電？」**：\n   - **阿拉伯半島**：\n     - 受副熱帶高氣壓常年籠罩，全境大多為「熱帶沙漠氣候」，年降水量少於 250 公釐，極度乾旱！\n     - 地表「**無常年性常流河**」（多為只有暴雨時才有水的時令河／乾河谷 wadi）！\n     - 地形以古老平緩的高原和沙漠為主，完全不具備水力發電的任何自然基礎，最不適合！\n3. **其他三個地區全具備「暴雨／多雨＋板塊高山」的水電絕佳條件**：\n   - **日本本州東部**：季風迎風多雨＋板塊造山帶河短流急。\n   - **印尼蘇門答臘**：赤道熱帶雨林高溫多雨＋火山造山山脈。\n   - **紐西蘭南島西部**：西風迎風坡強烈地形雨（年雨量可達數千毫米）＋南阿爾卑斯山冰河高地。",
    "stem": "若僅根據一地的自然環境判斷，不考慮當地政府的財政狀況與環保政策。下列哪個地區，最不適合開發水力發電資源？\n\n○ (A) 阿拉伯半島\n○ (B) 日本本州島東部\n○ (C) 印尼蘇門答臘\n○ (D) 紐西蘭南島西部",
    "answer": "(A) 阿拉伯半島",
    "diagramUrl": "",
    "solution": "### 💡 核心考點：水力發電之自然區位條件（降水量與地形高低落差）、阿拉伯半島熱帶沙漠氣候與水系特徵\n\n1. **【正解 (A) 深度破題分析】**：\n   - **水力發電的本質與自然條件**：\n     - 水力發電是利用水流的「重力位能」推動水輪機轉化為電能。\n     - 決定水力發電潛能的兩大自然關鍵要素為：\n       1. **流量（水量）**：降水必須豐富且河川逕流量充足穩定；\n       2. **水頭（落差）**：地勢高低起伏顯著，河川坡度陡峭、水流湍急。\n   - **檢視 (A) 阿拉伯半島**：\n     - **氣候條件**：全半島位於副熱帶高氣壓帶與乾燥信風吹拂帶，屬於典型的**熱帶沙漠氣候**，終年酷熱乾燥，年降水量多在 100～200 公釐以下。\n     - **水系與地形條件**：地表水資源極端貧乏，全境幾乎**沒有任何常流性的河流（無常流河）**，只有偶發暴雨才會短暫出現的乾河谷（Wadi）。地形整體屬於古老平緩地塊，地勢落差有限。\n     - 水量與落差兩大條件皆不具備，因此在四個選項中**最不適合開發水力發電**。\n   - 故正確答案選 **(A)**。\n\n2. **【其他選項水力發電優越條件分析】**：\n   - **(B) 日本本州島東部**：\n     - 屬於溫帶／副熱帶季風氣候，夏秋受颱風及夏季季風影響降水豐沛；且日本列島位於板塊交界處，山脈高聳陡峭，河川呈現「河短流急」特性，水力發電資源豐富。\n   - **(C) 印尼蘇門答臘**：\n     - 橫跨赤道，全境為典型的**熱帶雨林氣候**，全年降水極為豐沛；島嶼西部有高聳的巴里桑山脈縱貫，地勢落差大，具備優良的水力資源。\n   - **(D) 紐西蘭南島西部**：\n     - 常年位於盛行西風帶的迎風坡，受南阿爾卑斯山脈強烈抬升作用，形成充沛的地形雨（年降水量可高達 4000～8000 公釐）；高山冰河峽灣地形落差懸殊，是世界上著名的水力發電大國。\n\n故本題正確答案為 **(A)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": False,
    "nextReviewDate": "2026-11-05",
    "isReviewed": False,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": None,
    "lastReviewedMonday": None,
    "lastReviewedDate": None,
    "reviewedMondays": []
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 升級 STORAGE_KEY
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v384';", "const STORAGE_KEY = 'miley_wrong_questions_v385';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q356 to js/data.js and upgraded to v385.")

