# -*- coding: utf-8 -*-
import json
import re

question = {
    "id": "q_math_circle_inscribed_trapezoid_de_347",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與切線／切線長性質（四邊形內切圓）與平行相似三角形周長比求線段 DE",
    "uploadDate": "2026-11-04",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【切線長轉移 + 相似形周長比是圓形切線與三角形組合題的黃金公式！】\n1. **第一步（求切線長 AN）**：\n   - 四邊形 $DBCE$ 內切圓 $O$，切點為 $M, N, P, Q$。\n   - 根據自圓外同一點向圓作切線段等長：\n     - $A$ 點向圓引切線段：$\\overline{AN} = \\overline{AQ} = x$。\n     - $B$ 點向圓引切線段：$\\overline{BP} = \\overline{BN} = y$。\n     - $C$ 點向圓引切線段：$\\overline{CP} = \\overline{CQ} = z$。\n   - $\\triangle ABC$ 周長 $= (x+y) + (y+z) + (x+z) = 2(x+y+z) = 16 \\implies x+y+z = 8$。\n   - 因為 $\\overline{BC} = y+z = 4$，所以 $\\overline{AN} = x = 8 - 4 = 4$！\n2. **第二步（切線長巧妙替換，求小三角形 △ADE 周長）**：\n   - 頂點 $D$ 向圓引切線：$\\overline{DM} = \\overline{DN}$；頂點 $E$ 向圓引切線：$\\overline{EM} = \\overline{EQ}$。\n   - 關鍵替換：$\\overline{DE} = \\overline{DM} + \\overline{ME} = \\overline{DN} + \\overline{EQ}$！\n   - $\\triangle ADE$ 周長 $= \\overline{AD} + \\overline{DE} + \\overline{AE} = \\overline{AD} + (\\overline{DN} + \\overline{EQ}) + \\overline{AE} = (\\overline{AD} + \\overline{DN}) + (\\overline{AE} + \\overline{EQ}) = \\overline{AN} + \\overline{AQ} = 4 + 4 = 8$！\n3. **第三步（平行相似形，對應邊比等於周長比）**：\n   - 因為 $\\overline{DE} \\parallel \\overline{BC}$，所以 $\\triangle ADE \\sim \\triangle ABC$（$AA$ 相似）。\n   - 對應邊比等於周長比：$\\overline{DE} : \\overline{BC} = \\triangle ADE \\text{ 周長} : \\triangle ABC \\text{ 周長} = 8 : 16 = 1 : 2$。\n   - $\\overline{DE} = \\frac{1}{2} \\overline{BC} = \\frac{1}{2} \\times 4 = 2$！",
    "stem": "如圖所示，在 △ABC 中，D、E 兩點分別在線段 AB、AC 上，DE // BC，若圓 O 內切於四邊形 DBCE，M、N、P、Q 為切點。若 △ABC 周長（AB + BC + CA）= 16，BC = 4，則線段 DE 之長為何？\n\n○ (A) 1\n○ (B) 2\n○ (C) 3\n○ (D) 4",
    "answer": "(B) 2",
    "diagramUrl": "assets/questions/q_math_circle_inscribed_trapezoid_de_347.png",
    "solution": "### 💡 核心考點：圓外切四邊形切線長性質、線段等長代換、平行線相似三角形性質\n\n1. **【正解 (B) 深度破題分析——三步驟完整推導】**：\n   - **第一階段：利用切線長性質求線段 AN 的長度**\n     - 四邊形 $DBCE$ 為圓 $O$ 的外切四邊形，切點分別為 $M$（在 $\\overline{DE}$ 上）、$N$（在 $\\overline{AB}$ 上）、$P$（在 $\\overline{BC}$ 上）、$Q$（在 $\\overline{AC}$ 上）。\n     - 根據「自圓外一點對圓所作的兩切線段等長」性質：\n       - 自頂點 $B$ 引出的切線長：$$\\overline{BP} = \\overline{BN} = y$$\n       - 自頂點 $C$ 引出的切線長：$$\\overline{CP} = \\overline{CQ} = z$$\n       - 連接邊線延伸，$A$ 點至兩側切點：$$\\overline{AN} = \\overline{AQ} = x$$\n     - 觀察 $\\triangle ABC$ 的三邊長：\n       $$\\overline{AB} = \\overline{AN} + \\overline{BN} = x + y$$\n       $$\\overline{BC} = \\overline{BP} + \\overline{CP} = y + z = 4$$\n       $$\\overline{CA} = \\overline{AQ} + \\overline{CQ} = x + z$$\n     - 已知 $\\triangle ABC$ 周長為 16：\n       $$\\overline{AB} + \\overline{BC} + \\overline{CA} = (x + y) + (y + z) + (x + z) = 2(x + y + z) = 16$$\n       $$\\implies x + y + z = 8$$\n     - 將 $\\overline{BC} = y + z = 4$ 代入：\n       $$\\overline{AN} = x = (x + y + z) - (y + z) = 8 - 4 = \\mathbf{4}$$\n       （這就是第 (1) 問的解答）\n\n   - **第二階段：利用切線長代換求 △ADE 的周長**\n     - $D$ 點在圓外，對圓引切線段 $\\overline{DM}$ 與 $\\overline{DN}$，故：$$\\overline{DM} = \\overline{DN}$$\n     - $E$ 點在圓外，對圓引切線段 $\\overline{EM}$ 與 $\\overline{EQ}$，故：$$\\overline{EM} = \\overline{EQ}$$\n     - 因此底邊 $\\overline{DE}$ 可拆解為兩段切線長之和：\n       $$\\overline{DE} = \\overline{DM} + \\overline{EM} = \\overline{DN} + \\overline{EQ}$$\n     - 計算頂端小三角形 $\\triangle ADE$ 的周長：\n       $$\\triangle ADE \\text{ 周長} = \\overline{AD} + \\overline{DE} + \\overline{AE}$$\n       $$= \\overline{AD} + (\\overline{DN} + \\overline{EQ}) + \\overline{AE}$$\n       $$= (\\overline{AD} + \\overline{DN}) + (\\overline{AE} + \\overline{EQ})$$\n       $$= \\overline{AN} + \\overline{AQ}$$\n     - 由第一階段已知 $\\overline{AN} = \\overline{AQ} = 4$，故：\n       $$\\triangle ADE \\text{ 周長} = 4 + 4 = \\mathbf{8}$$\n\n   - **第三階段：利用相似三角形對應邊與周長成正比求線段 DE**\n     - 因為 $\\overline{DE} \\parallel \\overline{BC}$，同位角相等（$\\angle ADE = \\angle B$，$\\angle AED = \\angle C$）：\n       $$\\triangle ADE \\sim \\triangle ABC \\quad (AA \\text{ 相似性質})$$\n     - 相似三角形的對應邊比等於其周長比：\n       $$\\frac{\\overline{DE}}{\\overline{BC}} = \\frac{\\triangle ADE \\text{ 周長}}{\\triangle ABC \\text{ 周長}}$$\n     - 代入已知數據：\n       $$\\frac{\\overline{DE}}{4} = \\frac{8}{16} = \\frac{1}{2}$$\n       $$\\overline{DE} = 4 \\times \\frac{1}{2} = \\mathbf{2}$$\n   - 故正確答案選 **(B) 2**。\n\n2. **【解題核心技巧】**：\n   - 圓外切梯形/四邊形切線長：折線段 $\\overline{DE}$ 展開等於兩切線殘段 $\\overline{DN} + \\overline{EQ}$，使小三角形周長直接等於兩側大切線長之和 $\\overline{AN} + \\overline{AQ}$！\n   - 平行出相似，周長比即對應邊長比，秒算答案！\n\n故本題正確答案為 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": False,
    "nextReviewDate": "2026-11-04",
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
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v375';", "const STORAGE_KEY = 'miley_wrong_questions_v376';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
# 為 q_json 加 2 個空格縮排
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q347 to js/data.js and upgraded to v376.")

