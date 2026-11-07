# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_math_geo_square_circle_tangent_radius_ratio_380",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與弦心距、切線性質／正方形內切弦圓、弦心距垂直平分弦、連半徑建構直角三角形 (OB² = OM² + BM²) 求半徑與邊長比值 (r : a = 5 : 8)",
    "uploadDate": "2026-11-07",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【圓與多邊形綜合幾何——「建構直角三角形」必殺三部曲！】\n1. **第一步：切線性質與平行邊距離**\n   - 線段 AD 切圓 O 於 E 點 $\\implies$ 半徑 線段 OE 垂直 線段 AD，長度為 r。\n   - 正方形對邊平行（線段 AD // 線段 BC），自圓心作垂線 線段 OM 垂直弦 線段 BC，則 **E、O、M 三點必共線**！\n   - 線段 EM 即為正方形兩對邊的垂直距離，長度等於邊長 a，因此**弦心距 線段 OM = a - r**！\n2. **第二步：垂徑定理（弦心距平分弦）**\n   - 圓心到弦的垂線平分弦，M 為線段 BC 的中點 $\\implies$ **線段 BM = a/2**。\n3. **第三步：連半徑構建直角三角形，畢氏定理列式！**\n   - 連接圓心 O 與弦端點 B，**線段 OB 即為半徑 r**！\n   - 在直角 △OBM 中由畢氏定理：\n     r² = (a - r)² + (a/2)²\n     r² = a² - 2ar + r² + a²/4 $\\implies$ 2ar = (5/4)a² $\\implies$ r = (5/8)a。\n   - 故 **r : a = 5 : 8**（比值為 5/8）！",
    "stem": "如附圖，正方形 ABCD 的邊長為 a，圓 O 的半徑為 r，線段 AD 切圓 O 於 E 點，線段 BC 為圓 O 的弦，則 r : a 的比為何？",
    "answer": "5 : 8",
    "diagramUrl": "assets/questions/q_math_geo_square_circle_tangent_radius_ratio_380.png",
    "solution": "### 💡 核心考點：圓切線垂直半徑、正方形平行邊距離、垂徑定理（弦心距垂直平分弦）、畢氏定理方程式求解\n\n1. **【第一步：利用切線性質與平行線，求出弦心距 線段 OM】**：\n   - 已知線段 AD 切圓 O 於 E 點，根據圓的切線性質：圓心到切點的連線垂直切線，因此 **線段 OE ⊥ 線段 AD**，且 **線段 OE = r**；\n   - 自圓心 O 作垂線垂直弦線段 BC 於 M 點（即 **線段 OM ⊥ 線段 BC**）；\n   - 因為正方形 ABCD 的對邊平行（線段 AD // 線段 BC），所以過圓心 O 垂直於線段 AD 與線段 BC 的直線重合，即 **E、O、M 三點共線**；\n   - 線段 EM 恰好為正方形兩平行邊之間的距離，其長度等於正方形邊長 a，即 **線段 EM = a**；\n   - 因此，圓心 O 到弦線段 BC 的弦心距為：\n     **線段 OM = 線段 EM - 線段 OE = a - r**。\n\n2. **【第二步：利用垂徑定理，求出線段 BM 的長度】**：\n   - 根據**垂徑定理**：垂直於弦的直徑（或半徑／弦心距）必平分該弦；\n   - 由於 線段 OM ⊥ 線段 BC，所以 M 點為弦線段 BC 的中點；\n   - 已知正方形底邊 線段 BC = a，故：\n     **線段 BM = a / 2**。\n\n3. **【第三步：連接圓心與端點，利用直角三角形畢氏定理列式】**：\n   - 連接線段 OB，因為 B 點在圓周上，所以 **線段 OB 為圓半徑，長度為 r**；\n   - 在直角 △OBM 中，∠OMB = 90°，由畢氏定理：\n     線段 OB² = 線段 OM² + 線段 BM²；\n   - 代入各線段代數式：\n     r² = (a - r)² + (a / 2)²；\n   - 展開兩邊：\n     r² = (a² - 2ar + r²) + a² / 4；\n   - 兩邊消去 r²：\n     0 = a² - 2ar + a² / 4\n     2ar = a² + a² / 4\n     2ar = (5/4)a²；\n   - 因為邊長 a > 0，兩邊同除以 a：\n     2r = (5/4)a\n     r = (5/8)a。\n\n4. **【第四步：計算所求比例 r : a】**：\n   - r : a = ((5/8)a) : a = 5/8 : 1 = **5 : 8**。\n\n故本題標準答案為：**5 : 8**（比值為 **5/8**）。",
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
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v398';", "const STORAGE_KEY = 'miley_wrong_questions_v399';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q380 to js/data.js and upgraded to v399.")
