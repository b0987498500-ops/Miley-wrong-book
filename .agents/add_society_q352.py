# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_soc_geo_date_palm_climate_352",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/西亞與北非／熱帶乾燥氣候特徵、綠洲農業指標作物椰棗（棗椰樹）與西亞北非氣候連帶性",
    "uploadDate": "2026-11-05",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【椰棗 vs 油棕 vs 橄欖——三大常考世界經濟作物秒殺法！】\n1. **抓緊題幹關鍵字：「熱帶乾燥地區」＋「西亞」**：\n   - 西亞與北非地理環境高度相似（副熱帶高壓籠罩、東北信風吹拂），形成全球最大片連綿的熱帶沙漠氣候區（撒哈拉沙漠與阿拉伯沙漠）。\n   - **椰棗（棗椰樹）**：耐高溫、耐乾旱、耐鹽鹼，是「熱帶乾燥氣候／綠洲農業」的標誌性作物！全球最主要產地就是**西亞與北非**！\n2. **常見棕櫚與果樹陷阱大辨析（考場必考）**：\n   - **椰棗（棗椰）** $\\rightarrow$ **西亞、北非**（熱帶乾燥氣候、綠洲農業、耐旱極強）。\n   - **油棕** $\\rightarrow$ **東南亞（馬來西亞、印尼）**、西非幾內亞灣（熱帶雨林氣候、高溫多雨、熱帶栽培業提煉棕櫚油）。\n   - **橄欖／柑橘／葡萄** $\\rightarrow$ **南歐（地中海沿岸）**（地中海型氣候、夏乾冬雨、園藝農業）。\n   - **咖啡／香蕉** $\\rightarrow$ **中美洲、南美洲熱帶**（熱帶栽培業）。",
    "stem": "棗椰樹屬於棕櫚科植物，主要分布在熱帶乾燥地區，其果實稱為椰棗，既可作糧食，又是製糖的原料。全球有上億棵棗椰樹，其中前兩大分布區為西亞和甲地區，椰棗也成為這些地區重要的出口農產品。上述甲地區最可能為下列何者？【112 年會考】\n\n○ (A) 北非\n○ (B) 南歐\n○ (C) 中美洲\n○ (D) 東南亞",
    "answer": "(A) 北非",
    "diagramUrl": "",
    "solution": "### 💡 核心考點：熱帶乾燥氣候分布範圍、綠洲農業與耐旱指標作物椰棗的生態習性\n\n1. **【正解 (A) 深度破題分析】**：\n   - **題目關鍵線索分析**：\n     - **氣候環境**：題幹明確指稱棗椰樹「主要分布在熱帶乾燥地區」。\n     - **已知產區**：全球第一大產區為「西亞」。\n     - **推論甲地區**：必須與西亞具有相同的「熱帶乾燥（沙漠）氣候」特徵。\n   - **西亞與北非的氣候同質性**：\n     - 北非（涵蓋埃及、阿爾及利亞、摩洛哥、利比亞、突尼西亞等）受副熱帶高氣壓帶常年籠罩與信風影響，擁有世界最大的撒哈拉沙漠，為典型的**熱帶沙漠氣候**。\n     - 在自然地理與人文地理學上，「西亞與北非」常被合併視為同一個地理大區（乾燥氣候、伊斯蘭教、阿拉伯文化、綠洲農業與盛產石油）。\n     - 棗椰樹極耐酷熱、乾旱與鹽鹼，是北非與西亞綠洲地區最主要且最重要的經濟作物與主食來源。因此全球前兩大棗椰樹分布區即為**西亞與北非**。\n   - 故正確答案選 **(A) 北非**。\n\n2. **【其他選項氣候與作物特徵辨析】**：\n   - **(B) 南歐**：\n     - 主要為**溫帶地中海型氣候**（夏乾冬雨），典型經濟作物為耐旱木本果樹如**橄欖、葡萄、柑橘、無花果**，並非熱帶乾燥氣候下的椰棗。\n   - **(C) 中美洲**：\n     - 主要屬於**熱帶雨林氣候、熱帶莽原氣候**，降水豐富且濕潤，典型經濟作物為熱帶栽培業的**咖啡、香蕉、甘蔗**。\n   - **(D) 東南亞**：\n     - 主要屬於**熱帶雨林氣候與熱帶季風氣候**，全年高溫多雨，最著名的棕櫚科作物為生產棕櫚油的**油棕**以及**椰子**，而非生長於乾燥氣候的棗椰。\n\n故本題正確答案為 **(A)**。",
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
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v380';", "const STORAGE_KEY = 'miley_wrong_questions_v381';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q352 to js/data.js and upgraded to v381.")

