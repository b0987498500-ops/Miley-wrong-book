# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_math_circle_parallel_tangents_radius_348",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與切線／平行切線梯形直徑 AD=2r、切線長性質（BC=AB+CD=5）與直角梯形畢氏定理求半徑 r=√6",
    "uploadDate": "2026-11-04",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【平行切線必出「直徑」與「直角梯形」！更有母子相似 3 秒暗黑秒殺公式！】\n1. **隱藏幾何條件（直徑確認）**：\n   - 因為 $AB \\parallel CD$，且兩線分別切圓於 $A, D$，半徑垂直切線（$OA \\perp AB$、$OD \\perp CD$）。\n   - 故 $A, O, D$ 三點共線，線段 $AD$ 即為圓 $O$ 的直徑，長度為 $2r$！\n2. **切線長等長轉移（斜邊長）**：\n   - 自 $B$ 引切線：$BE = AB = 3$。\n   - 自 $C$ 引切線：$CE = CD = 2$。\n   - 斜腰 $BC = BE + CE = 3 + 2 = 5$！\n3. **法一：作垂線直角三角形畢氏定理（正規破題）**：\n   - 自 $C$ 作垂線垂直 $AB$ 於 $H$，$AH = CD = 2$，$BH = AB - AH = 3 - 2 = 1$。\n   - 直角腰 $CH = AD = 2r$。\n   - 在 $\\triangle BHC$ 中：$(2r)^2 + 1^2 = 5^2 \\implies 4r^2 = 24 \\implies r^2 = 6 \\implies r = \\sqrt{6}$！\n4. **法二：母子相似暗黑秒殺公式（3 秒速算 ⚡）**：\n   - 連接 $OB, OC$，$OB$ 與 $OC$ 分別為兩同側內角之角平分線，故 $\\angle BOC = 90^\\circ$！\n   - 半徑 $OE \\perp BC$ 為斜邊上的高！\n   - 由直角三角形母子相似射影定理：\n     $$r^2 = OE^2 = BE \\times CE = 3 \\times 2 = 6 \\implies r = \\sqrt{6}$$！\n   - 看到平行切線夾切線，半徑平方直接等於兩平行切線長之積：$r^2 = AB \\times CD$！超級大招！",
    "stem": "如圖所示，線段 AB、BC、CD 分別與圓 O 相切於 A、E、D 三點，且 AB // CD。若 AB = 3，CD = 2，則圓 O 的半徑 r 為何？\n\n○ (A) 2\n○ (B) √5\n○ (C) √6\n○ (D) 3",
    "answer": "(C) √6",
    "diagramUrl": "assets/questions/q_math_circle_parallel_tangents_radius_348.png",
    "solution": "### 💡 核心考點：平行線圓切線性質、切線長定理、直角梯形輔助線畢氏定理、直角三角形母子相似性質\n\n1. **【正解 (C) 深度破題分析——法一：梯形輔助線畢氏定理（正規考場作法）】**：\n   - **第一步：確認線段 AD 為圓 O 的直徑**\n     - 因為 $\\overline{AB} \\parallel \\overline{CD}$，且兩直線分別切圓 $O$ 於 $A$、$D$ 兩點。\n     - 根據圓的切線性質：半徑垂直切線，即 $\\overline{OA} \\perp \\overline{AB}$，$\\overline{OD} \\perp \\overline{CD}$。\n     - 因為兩平行線間的垂直線段必互相平行且共線，故 $A$、$O$、$D$ 三點共線。\n     - 線段 $\\overline{AD}$ 為圓 $O$ 的直徑，長度為 $\\overline{AD} = 2r$（且四邊形 $ABCD$ 為直角梯形，$\\angle A = \\angle D = 90^\\circ$）。\n\n   - **第二步：利用切線長性質求出斜腰 BC**\n     - 自圓外同一點對圓所作的兩切線段等長：\n       - 自 $B$ 點出發的切線長：$$\\overline{BE} = \\overline{AB} = 3$$\n       - 自 $C$ 點出發的切線長：$$\\overline{CE} = \\overline{CD} = 2$$\n     - 故斜邊 $\\overline{BC}$ 的總長度為：\n       $$\\overline{BC} = \\overline{BE} + \\overline{CE} = 3 + 2 = 5$$\n\n   - **第三步：作直角梯形高線，利用畢氏定理求半徑 r**\n     - 自較短底端點 $C$ 向下底 $\\overline{AB}$ 作垂線，垂足為 $H$（即 $\\overline{CH} \\perp \\overline{AB}$）。\n     - 則四邊形 $AHCD$ 為矩形：\n       - $\\overline{AH} = \\overline{CD} = 2$\n       - 直角腰 $\\overline{CH} = \\overline{AD} = 2r$\n     - 計算直角三角形 $\\triangle BHC$ 的底邊 $\\overline{BH}$：\n       $$\\overline{BH} = \\overline{AB} - \\overline{AH} = 3 - 2 = 1$$\n     - 在直角三角形 $\\triangle BHC$ 中（$\\angle BHC = 90^\\circ$），由畢氏定理：\n       $$\\overline{CH}^2 + \\overline{BH}^2 = \\overline{BC}^2$$\n       $$(2r)^2 + 1^2 = 5^2$$\n       $$4r^2 + 1 = 25$$\n       $$4r^2 = 24$$\n       $$r^2 = 6 \\implies r = \\mathbf{\\sqrt{6}}$$\n\n2. **【法二：極速秒殺暗黑公式——直角三角形母子相似射影定理（3 秒破題 ⚡）】**：\n   - 連接圓心 $O$ 與頂點 $B$、$C$，以及切點 $E$：\n     - $OB$ 平分 $\\angle ABE$，$OC$ 平分 $\\angle DCE$。\n     - 因為 $\\overline{AB} \\parallel \\overline{CD}$，同側內角互補：\n       $$\\angle ABE + \\angle DCE = 180^\\circ$$\n     - 兩角的一半相加：\n       $$\\angle OBE + \\angle OCE = \\frac{1}{2}(\\angle ABE + \\angle DCE) = \\frac{1}{2}(180^\\circ) = 90^\\circ$$\n     - 三角形內角和 $180^\\circ$，故：\n       $$\\angle BOC = 180^\\circ - (\\angle OBE + \\angle OCE) = 180^\\circ - 90^\\circ = 90^\\circ$$\n       即 $\\triangle OBC$ 為以 $\\angle BOC$ 為直角的直角三角形！\n   - 又半徑 $\\overline{OE} \\perp \\overline{BC}$，$\\overline{OE} = r$ 為直角三角形斜邊上的高。\n   - 根據直角三角形母子相似射影定理（高的平方等於斜邊兩分段之積）：\n     $$\\overline{OE}^2 = \\overline{BE} \\times \\overline{CE}$$\n     $$r^2 = 3 \\times 2 = 6$$\n     $$r = \\mathbf{\\sqrt{6}}$$\n   - **大招口訣**：凡是兩平行切線夾切線，**半徑平方必等於兩切線長之積**（$$r^2 = \\overline{AB} \\times \\overline{CD}$$），直接心算 $3 \\times 2 = 6 \\implies r = \\sqrt{6}$！\n\n故本題正確答案為 **(C)**。",
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
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v376';", "const STORAGE_KEY = 'miley_wrong_questions_v377';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q348 to js/data.js and upgraded to v377.")

