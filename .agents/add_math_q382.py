# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_math_geo_circle_chords_segments_count_382",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓的基本元素定義與計數／弦的個數組合公式 (C(n,2) = n(n-1)/2) 與每一條弦對應兩個弓形 (優弧弓形與劣弧弓形，b = 2a)",
    "uploadDate": "2026-11-07",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【圓的「弦」與「弓形」數量秒殺公式與觀念盲點！】\n1. **「弦」的數量計算（任兩點連一線段）**：\n   - 圓上有 n 個相異點，任選兩點即可連成一條弦！\n   - 公式：**弦的數量 a = n × (n - 1) ÷ 2**。\n   - 10 個點時：a = 10 × 9 ÷ 2 = **45 條弦**。\n2. **「弓形」的定義與數量（超級高頻陷阱！）**：\n   - **定義**：由「一條弦」與這條弦所對應的「圓弧」所圍成的封閉圖形，稱為弓形。\n   - **核心盲點**：每一條弦將圓周分割為兩條弧（一條劣弧、一條優弧，若為直徑則為兩個半圓）。\n   - 因此，**「每一條弦必定對應 2 個弓形」**！\n   - 公式：**弓形數量 b = 2 × a**！\n   - 45 條弦對應：b = 2 × 45 = **90 個弓形**。\n3. **所求合併**：\n   - a + b = 45 + 90 = **135**（切莫忘記弓形有大小兩個，誤以為一弦一弓形只算 45 個）！",
    "stem": "若圓上 10 個點可形成 a 條弦、b 個弓形，則 a + b = ？\n\n○ (A) 135\n○ (B) 125\n○ (C) 90\n○ (D) 85",
    "answer": "(A) 135",
    "diagramUrl": "",
    "solution": "### 💡 核心考點：圓的弦（Chord）數量計算公式、弓形（Circular Segment）的幾何定義與數量對應關係\n\n1. **【第一步：計算圓上 10 個點可連成的「弦數 a」】**：\n   - **弦的幾何定義**：連接圓周上任意相異兩點的線段，稱為該圓的一條「弦」；\n   - 圓周上共有 10 個相異點，任取兩點即可決定唯一一條弦；\n   - 依組合計數原理：\n     a = 10 × (10 - 1) ÷ 2 = (10 × 9) ÷ 2 = 90 ÷ 2 = **45**；\n   - 因此，這 10 個點總共可連成 **45 條弦**（即 **a = 45**）。\n\n2. **【第二步：計算對應產生的「弓形數 b」】**：\n   - **弓形的幾何定義**：由圓的一條「弦」與該弦所對應的「圓弧」所圍成的平面封閉圖形，稱為「弓形」；\n   - 任意一條弦都會將整個圓周分割成兩條圓弧：\n     1. 一條較短的「劣弧」（若該弦為直徑，則為半圓弧）；\n     2. 一條較長的「優弧」（若該弦為直徑，則為另一側半圓弧）；\n   - 這條弦分別與這兩條圓弧圍成 **2 個弓形**（一個小弓形與一個大弓形）；\n   - 由於**每一條弦皆會對應產生 2 個弓形**，因此弓形總數為弦數的 2 倍：\n     b = 2 × a = 2 × 45 = **90**；\n   - 故總共可形成 **90 個弓形**（即 **b = 90**）。\n\n3. **【第三步：計算所求 a + b 的值】**：\n   - a + b = 45 + 90 = **135**。\n\n故本題正確答案為 **(A)**。",
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
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v400';", "const STORAGE_KEY = 'miley_wrong_questions_v401';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q382 to js/data.js and upgraded to v401.")
