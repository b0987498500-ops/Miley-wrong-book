# -*- coding: utf-8 -*-
import json

q346 = {
    "id": "q_math_circle_inscribed_tangents_cf_bd_346",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與切線／三角形內切圓切線長性質（CF - BD = AC - AB = 9 - 7 = 2）與半周長速算",
    "uploadDate": "2026-11-04",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【三角形內切圓切線長超狂「秒殺技巧」！】\n1. **標準解法（半周長 $s$ 綜合法）**：\n   - 切線長等長：$\\overline{AD}=\\overline{AF}=x$，$\\overline{BD}=\\overline{BE}=y$，$\\overline{CE}=\\overline{CF}=z$。\n   - 半周長 $s = \\frac{7 + 8 + 9}{2} = 12$。\n   - $\\overline{CF} = s - \\overline{AB} = 12 - 7 = 5$（半周長扣掉對邊 $c$）。\n   - $\\overline{BD} = s - \\overline{AC} = 12 - 9 = 3$（半周長扣掉對邊 $b$）。\n   - $\\overline{CF} - \\overline{BD} = 5 - 3 = 2$！\n2. **三秒必殺暗黑技巧（兩邊直接相減）**：\n   - 注意觀察：$\\overline{AC} = x + z$，$\\overline{AB} = x + y$！\n   - 兩邊相減：$\\overline{AC} - \\overline{AB} = (x + z) - (x + y) = z - y = \\overline{CF} - \\overline{BD}$！\n   - 答案直接就是：$\\overline{AC} - \\overline{AB} = 9 - 7 = 2$！連半周長都不用算！\n3. **題幹干擾條件排查**：\n   - 題目給的「圓 $O$ 半徑為 $\\sqrt{5}$」是算面積用的，求線段差完全用不到，千萬別被干擾！",
    "stem": "如圖所示，△ABC 的三邊分別切圓 O 於 D、E、F 三點。若線段 AB = 7，線段 BC = 8，線段 AC = 9，圓 O 的半徑為 √5，則線段 CF - 線段 BD 之值為何？\n\n○ (A) 1\n○ (B) 2\n○ (C) 3\n○ (D) 4",
    "answer": "(B) 2",
    "diagramUrl": "assets/questions/q_math_circle_inscribed_tangents_cf_bd_346.png",
    "solution": "### 💡 核心考點：三角形內切圓切線長性質、半周長公式與快速相消法\n\n1. **【正解 (B) 深度破題分析——法一：切線長設未知數與半周長法（正規解法）】**：\n   - **切線長性質**：自圓外一點對同一個圓所作的兩條切線段長度相等。\n     - 自頂點 $A$ 引出的切線長：$$\\overline{AD} = \\overline{AF} = x$$\n     - 自頂點 $B$ 引出的切線長：$$\\overline{BD} = \\overline{BE} = y$$\n     - 自頂點 $C$ 引出的切線長：$$\\overline{CE} = \\overline{CF} = z$$\n   - **建立三角形周長方程式**：\n     $$\\overline{AB} + \\overline{BC} + \\overline{AC} = (x + y) + (y + z) + (x + z) = 2(x + y + z)$$\n     $$7 + 8 + 9 = 2(x + y + z) = 24$$\n     $$x + y + z = 12 \\quad (\\text{即三角形半周長 } s = 12)$$\n   - **分別求出線段 CF 與 BD**：\n     - 求 $\\overline{CF} = z$：\n       $$\\overline{CF} = (x + y + z) - (x + y) = 12 - \\overline{AB} = 12 - 7 = 5$$\n     - 求 $\\overline{BD} = y$：\n       $$\\overline{BD} = (x + y + z) - (x + z) = 12 - \\overline{AC} = 12 - 9 = 3$$\n   - **計算所求線段差**：\n     $$\\overline{CF} - \\overline{BD} = 5 - 3 = \\mathbf{2}$$\n   - 故正確答案選 **(B) 2**。\n\n2. **【法二：極速秒殺相消法（3 秒破題 ⚡）】**：\n   - 題目要求計算 $\\overline{CF} - \\overline{BD}$，即 $z - y$：\n   - 觀察含有 $z$ 與 $y$ 的兩邊：\n     $$\\overline{AC} = \\overline{AF} + \\overline{CF} = x + z = 9$$\n     $$\\overline{AB} = \\overline{AD} + \\overline{BD} = x + y = 7$$\n   - 兩式直接相減：\n     $$\\overline{AC} - \\overline{AB} = (x + z) - (x + y) = z - y = \\overline{CF} - \\overline{BD}$$\n     $$\\overline{CF} - \\overline{BD} = 9 - 7 = \\mathbf{2}$$\n   - 瞬間消去公共切線長 $x$，無需計算半周長與各邊分段，直接秒殺！\n\n3. **【題幹干擾條件說明】**：\n   - 題目給定「圓 $O$ 半徑為 $\\sqrt{5}$」，原本是用於計算第 (2) 小題三角形面積（$\\Delta = r \\times s = \\sqrt{5} \\times 12 = 12\\sqrt{5}$）；但在計算第 (1) 小題的線段長度差時為多餘條件，不受其影響。\n\n故本題正確答案為 **(B)**。",
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

with open('/Users/bennychen/pCloud Drive/bennychen/0AI_共用資料夾/07_Miley/麥麥錯題網站/js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace STORAGE_KEY
text = text.replace("const STORAGE_KEY = 'miley_wrong_questions_v374';", "const STORAGE_KEY = 'miley_wrong_questions_v375';")

# Insert new question into INITIAL_SEED_DATA
marker = 'const INITIAL_SEED_DATA = [\n'
pos = text.find(marker)
if pos == -1:
    print('Error: marker not found')
    exit(1)

insert_pos = pos + len(marker)

q346_str = '  ' + json.dumps(q346, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'

text = text[:insert_pos] + q346_str + text[insert_pos:]

# Update fallback keys in dataManager.init()
text = text.replace("'miley_wrong_questions_v373'", "'miley_wrong_questions_v374', 'miley_wrong_questions_v373'")

with open('/Users/bennychen/pCloud Drive/bennychen/0AI_共用資料夾/07_Miley/麥麥錯題網站/js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully added Q346 to data.js!')
