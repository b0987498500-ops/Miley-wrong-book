# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_math_geo_right_triangle_semicircle_tangent_ad_379",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "幾何/圓與切線性質／直角三角形內切半圓、半徑垂直切線 (OE ⊥ AC)、平行線截比例線段與相似三角形 (△AEO ~ △ACB) 計算線段長",
    "uploadDate": "2026-11-07",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【圓切線幾何題必備「三大破題反射神經」！】\n1. **反射動作一：見「切點」必連「圓心與切點」！**\n   - 看到半圓 O 切線段 AC 於 E 點，第一步立即在心中連接輔助線**線段 OE**！\n   - 根據圓切線性質：**圓心到切點的半徑必垂直切線**，即 **線段 OE ⊥ 線段 AC**（且 線段 OE = 半徑 r）。\n2. **反射動作二：同垂同線必平行，秒找相似三角形！**\n   - 已知 ∠C = 90°（線段 BC ⊥ 線段 AC），又 線段 OE ⊥ 線段 AC，兩線同時垂直線段 AC，故 **線段 OE // 線段 BC**！\n   - 產生 **△AEO ～ △ACB（AA 相似）**，對應邊成比例：\n     **線段 OE / 線段 BC = 線段 AO / 線段 AB**！\n3. **反射動作三：精確設半徑 r，線段代換不迷路！**\n   - 畢氏定理求邊長：線段 BC = √(13² - 12²) = 5。\n   - 設半圓半徑為 r，因為 O 為直徑線段 DB 的中點，故 線段 OB = r。\n   - 則 **線段 AO = 線段 AB - 線段 OB = 13 - r**。\n   - 列比例式：r / 5 = (13 - r) / 13 $\\implies$ 13r = 65 - 5r $\\implies$ 18r = 65 $\\implies$ r = 65/18。\n4. **最後防呆陷阱**：\n   - 題目問的是 **線段 AD**，不是半徑 r！\n   - **線段 AD = 線段 AB - 直徑 DB = 13 - 2r = 13 - 2 × (65/18) = 13 - 65/9 = 52/9**（切莫算到 r 就交卷）！",
    "stem": "如附圖，在 △ABC 中，∠C = 90°，D 點在線段 AB 上，以線段 DB 為直徑作半圓 O 切線段 AC 於 E 點。若線段 AC = 12，線段 AB = 13，則線段 AD 的長度為何？",
    "answer": "52/9",
    "diagramUrl": "assets/questions/q_math_geo_right_triangle_semicircle_tangent_ad_379.png",
    "solution": "### 💡 核心考點：畢氏定理求直角三角形邊長、圓切線性質（半徑垂直切線）、平行線截比例線段與相似三角形應用\n\n1. **【第一步：利用畢氏定理求出直角三角形的股長 線段 BC】**：\n   - 在直角 △ABC 中，∠C = 90°，斜邊 線段 AB = 13，一股 線段 AC = 12；\n   - 依畢氏定理：\n     線段 BC = √(線段 AB² - 線段 AC²) = √(13² - 12²) = √(169 - 144) = √25 = 5。\n\n2. **【第二步：連接圓心與切點，推導平行線與相似三角形】**：\n   - 連接圓心 O 與切點 E，形成輔助線 線段 OE；\n   - 根據**圓的切線性質**：圓心到切點的半徑垂直於切線，因此 **線段 OE ⊥ 線段 AC**；\n   - 又已知 ∠C = 90°，即 **線段 BC ⊥ 線段 AC**；\n   - 因為兩條直線（線段 OE 與 線段 BC）同時垂直於同一條直線（線段 AC），所以 **線段 OE // 線段 BC**；\n   - 在 △ABC 中，線段 OE // 線段 BC，可得 **△AEO ～ △ACB**（AA 相似，共用 ∠A，且 ∠AEO = ∠C = 90°）。\n\n3. **【第三步：設半徑 r 並列出比例式求解】**：\n   - 設半圓 O 的半徑為 r（即 線段 OE = r，線段 OD = r，線段 OB = r）；\n   - 因為 O 點在線段 AB 上，所以：\n     線段 AO = 線段 AB - 線段 OB = 13 - r；\n   - 依相似三角形對應邊成比例：\n     線段 OE / 線段 BC = 線段 AO / 線段 AB；\n   - 將已知長度代入比例式：\n     r / 5 = (13 - r) / 13；\n   - 交叉相乘展開：\n     13 × r = 5 × (13 - r)\n     13r = 65 - 5r\n     18r = 65\n     r = 65/18。\n\n4. **【第四步：計算所求線段 AD 的長度】**：\n   - 線段 AD = 線段 AB - 線段 DB；\n   - 因為線段 DB 為半圓直徑，長度為 2r：\n     線段 AD = 13 - 2r\n            = 13 - 2 × (65/18)\n            = 13 - 65/9\n            = 117/9 - 65/9\n            = 52/9。\n\n故本題標準答案為：**52/9**（或寫為帶分數 **5 又 7/9**）。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": False,
    "nextReviewDate": "2026-11-07",
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
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v396';", "const STORAGE_KEY = 'miley_wrong_questions_v397';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q379 to js/data.js and upgraded to v397.")
