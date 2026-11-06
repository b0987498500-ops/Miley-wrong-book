# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_soc_geo_west_asia_divisions_turkey_366",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "地理/西亞地理／西亞重要地理分區地圖判讀、歐亞十字路口（甲土耳其地跨歐亞、基督教與伊斯蘭教文化接觸樞紐）",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【西亞地理分區地圖代號與地緣政治樞紐全圖解！】\n1. **本題各選項國家位置與戰略地位**：\n   - **甲（土耳其）**：位於**安納托利亞高原**，地跨歐、亞兩洲，扼守黑海海峽（博斯普魯斯海峽、達達尼爾海峽），北連東歐基督教文明、南接西亞伊斯蘭教世界，為兩大文化板塊接觸與交流之核心樞紐！\n   - **丁（以色列）**：位於地中海東岸，為猶太人國家，聖城耶路撒冷為猶太教、基督教、伊斯蘭教三大一神教聖地。\n   - **子（伊朗）**：位於**伊朗高原**，古稱波斯，居民為波斯人（印歐語系，非阿拉伯人），宗教以伊斯蘭教什葉派為主。\n   - **癸（葉門）**：位於阿拉伯半島西南角，扼守曼德海峽，控扼紅海進出印度洋之交通要道。\n2. **圖中重要周邊水域代號速記（大考常客）**：\n   - **A**：黑海  |  **B**：地中海  |  **C**：紅海  |  **D**：波斯灣  |  **E**：阿拉伯海（印度洋）",
    "stem": "西亞為人類重要古文明的發源地，也是重要的宗教聖地。在人類活動的歷史上，扮演著重要的角色。附圖為西亞主要的地理分區位置圖。請問：圖中哪一個國家的地理位置正處於西方基督教文化與西亞伊斯蘭教文化接觸地帶，因此地理位置相當重要？\n\n○ (A) 甲\n○ (B) 丁\n○ (C) 子\n○ (D) 癸",
    "answer": "(A) 甲",
    "diagramUrl": "assets/questions/q_soc_geo_west_asia_divisions_turkey_366.png",
    "solution": "### 💡 核心考點：西亞主要地理分區地圖判讀、土耳其歐亞陸橋地緣戰略地位、西方基督教文明與西亞伊斯蘭文明之交會樞紐\n\n1. **【正解 (A) 深度破題分析】**：\n   - **鎖定地圖代號 甲（土耳其）**：\n     - 圖中 **甲** 為**土耳其**，主要領土位於小亞細亞（安納托利亞高原），西北角一小部分領土（東色雷斯）位於歐洲巴爾幹半島，是世界上著名的**「地跨歐亞兩大洲」**國家。\n     - 土耳其扼守連接黑海與地中海的黑海海峽（博斯普魯斯海峽與達達尼爾海峽），自古即為**歐亞大陸陸橋與交通十字路口**。\n     - 在文化歷史上，土耳其西鄰歐洲基督教文化圈，東南緊鄰西亞傳統伊斯蘭教世界，正是西方基督教文化與西亞伊斯蘭教文化接觸、碰撞與交融的第一線接觸地帶，戰略與地緣文化地位無可替代。\n   - 故正確答案選 **(A)**。\n\n2. **【其他選項地理代號與特色深度解析】**：\n   - **(B) 丁（以色列）**：\n     - 位於地中海東南沿岸，為猶太教發源地與猶太人國家，其境內耶路撒冷同為猶太教、基督教、伊斯蘭教聖地，但其地處黎凡特地區核心，並非地跨歐亞兩洲之接觸橋樑。\n   - **(C) 子（伊朗）**：\n     - 位於伊朗高原，東鄰阿富汗（丑），西鄰伊拉克（戊），深居西亞東部，主要文化特徵為波斯文化與伊斯蘭教什葉派，遠離歐洲基督教文化邊界。\n   - **(D) 癸（葉門）**：\n     - 位於阿拉伯半島最南端，面臨亞丁灣與曼德海峽，屬於傳統阿拉伯伊斯蘭教文化區，地理位置遠離西方基督教文化接觸帶。\n\n故本題正確答案為 **(A)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": False,
    "nextReviewDate": "2026-11-06",
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
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v392';", "const STORAGE_KEY = 'miley_wrong_questions_v393';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q366 to js/data.js and upgraded to v393.")
