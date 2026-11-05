# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_math_square_inscribed_semicircle_tangent_357",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與切線／正方形內切半圓切線長性質（AT=AB=a, TP=PC=x）與直角三角形畢氏定理求線段比值",
    "uploadDate": "2026-11-05",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【正方形內切半圓「兩大隱藏切點」與「畢氏定理設元法」！】\n1. **隱藏的直角切點（最容易被忽略的幾何條件）**：\n   - 因為正方形四個角皆為 $90^\\circ$，即 $\\angle B = 90^\\circ$、$\\angle C = 90^\\circ$。\n   - 以線段 $BC$ 為直徑作半圓，則半徑垂直直徑兩端點的垂直線！\n   - 這意味著：**邊線 $AB$ 與邊線 $CD$ 本身就是半圓的兩條切線**，**$B$ 點與 $C$ 點就是切點**！\n2. **切線長性質等長代換（化繁為簡）**：\n   - 自 $A$ 點出發對半圓引切線：$\\overline{AT} = \\overline{AB} = a$（正方形邊長）！\n   - 自 $P$ 點出發對半圓引切線：$\\overline{TP} = \\overline{PC} = x$！\n3. **在直角三角形 △ADP 中列畢氏定理**：\n   - 斜邊 $\\overline{AP} = a + x$。\n   - 兩股：$\\overline{AD} = a$，$\\overline{PD} = a - x$。\n   - $$(a + x)^2 = (a - x)^2 + a^2$$\n   - 快速展開相消：$$(a+x)^2 - (a-x)^2 = a^2 \\implies 4ax = a^2 \\implies a = 4x$$！\n   - 所求比值：$$\\frac{\\overline{AT}}{\\overline{TP}} = \\frac{a}{x} = \\frac{4x}{x} = \\mathbf{4}$$！",
    "stem": "如圖所示，在正方形 ABCD 中，以線段 BC 為直徑作半圓 O，P 點在線段 CD 上，線段 AP 切半圓 O 於 T 點，則線段 AT : 線段 TP 的比值為何？\n\n○ (A) 2\n○ (B) 3\n○ (C) 4\n○ (D) 5",
    "answer": "(C) 4",
    "diagramUrl": "assets/questions/q_math_square_inscribed_semicircle_tangent_357.png",
    "solution": "### 💡 核心考點：正方形垂直性質、圓外一點切線長性質、直角三角形畢氏定理與乘法公式消去法\n\n1. **【正解 (C) 深度破題分析——三步驟完整推導】**：\n   - **第一步：找出半圓的三條切線與切點**\n     - 四邊形 $ABCD$ 為正方形，設其邊長為 $a$（$a > 0$），即：\n       $$\\overline{AB} = \\overline{BC} = \\overline{CD} = \\overline{AD} = a$$\n     - 題目給定以 $\\overline{BC}$ 為直徑作半圓 $O$。\n     - 因為正方形的內角為直角：\n       - $\\angle B = 90^\\circ \\implies \\overline{AB} \\perp \\overline{BC}$，故直線 $AB$ 為半圓 $O$ 的切線，$B$ 為切點。\n       - $\\angle C = 90^\\circ \\implies \\overline{CD} \\perp \\overline{BC}$，故直線 $CD$ 為半圓 $O$ 的切線，$C$ 為切點。\n       - 題幹又說明線段 $\\overline{AP}$ 切半圓於 $T$ 點。\n\n   - **第二步：利用「自圓外一點作兩切線段等長」性質代換未知數**\n     - 自頂點 $A$ 向半圓引出的兩切線段等長：\n       $$\\overline{AT} = \\overline{AB} = a$$\n     - 自 $P$ 點向半圓引出的兩切線段等長：\n       設 $\\overline{TP} = \\overline{PC} = x$（$x > 0$）\n     - 此時線段長度表示如下：\n       - 斜邊 $\\overline{AP} = \\overline{AT} + \\overline{TP} = a + x$\n       - 直角三角形股長 $\\overline{AD} = a$\n       - 直角三角形股長 $\\overline{PD} = \\overline{CD} - \\overline{PC} = a - x$\n\n   - **第三步：在直角三角形 △ADP 中建立畢氏定理方程式**\n     - 因為 $\\angle D = 90^\\circ$，由畢氏定理：\n       $$\\overline{AP}^2 = \\overline{PD}^2 + \\overline{AD}^2$$\n       $$(a + x)^2 = (a - x)^2 + a^2$$\n     - 展開兩側括號（亦可移項利用平方差公式 $(a+x)^2 - (a-x)^2 = 4ax$）：\n       $$a^2 + 2ax + x^2 = a^2 - 2ax + x^2 + a^2$$\n     - 兩邊消去相同項 $a^2 + x^2$：\n       $$2ax = a^2 - 2ax$$\n       $$4ax = a^2$$\n     - 因為邊長 $a > 0$，兩邊同除以 $a$：\n       $$a = 4x$$\n     - 計算題目所求之比值：\n       $$\\text{比值} = \\frac{\\overline{AT}}{\\overline{TP}} = \\frac{a}{x} = \\frac{4x}{x} = \\mathbf{4}$$\n\n   - 故正確答案選 **(C) 4**。\n\n2. **【解題核心口訣】**：\n   - 看到正方形邊夾直徑，**左右兩邊必定都是切線**；\n   - 頂點 $A$ 切線長為邊長 $a$，$P$ 點切線長為殘段 $x$；\n   - 畢氏定理平方差展開 $4ax = a^2$，直接秒求 $a = 4x$，比值必為 4！\n\n故本題正確答案為 **(C)**。",
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
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v385';", "const STORAGE_KEY = 'miley_wrong_questions_v386';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q357 to js/data.js and upgraded to v386.")
