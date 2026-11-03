# -*- coding: utf-8 -*-
import json

q343 = {
    "id": "q_math_circle_tangents_cm_segment_343",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與切線／切線長性質、母子相似性質（射影定理 OA² = OM × OP）與切點弦垂直中分",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【圓的雙切線＋切點弦經典必背架構！】\n1. **看見切點必連半徑作垂直**：\n   - 連接 $\\overline{OA}$，必有 $\\overline{OA} \\perp \\overline{PA} \\implies \\angle OAP = 90^\\circ$！\n2. **中點條件秒抓半徑與斜邊**：\n   - $C$ 在圓上 $\\implies \\overline{OC} = r$（半徑）。\n   - $C$ 是 $\\overline{OP}$ 中點且 $\\overline{CP} = 3 \\implies \\overline{OC} = r = 3$，斜邊 $\\overline{OP} = 6$！\n3. **母子相似（射影定理）秒求 $\\overline{OM}$**：\n   - 圓的對稱性：$\\overline{OP} \\perp \\overline{AB}$ 於 $M$。\n   - 在直角 $\\triangle OAP$ 中：\n     $$\\overline{OA}^2 = \\overline{OM} \\times \\overline{OP} \\implies 3^2 = \\overline{OM} \\times 6 \\implies \\overline{OM} = \\frac{9}{6} = \\frac{3}{2}$$\n4. **最後一步求 $\\overline{CM}$**：\n   - $\\overline{CM} = \\overline{OC} - \\overline{OM} = 3 - \\frac{3}{2} = \\frac{3}{2}$（即 $M$ 恰為 $\\overline{OC}$ 中點）！",
    "stem": "如圖所示，直線 PA、直線 PB 為圓 O 的兩條切線，A、B 為切點，線段 OP 與圓 O 相交於 C 點，與線段 AB 相交於 M 點。若 C 為線段 OP 的中點，且線段 CP = 3，則線段 CM = ？\n\n○ (A) 1\n○ (B) 3/2\n○ (C) 2\n○ (D) 3√3 / 2",
    "answer": "(B) 3/2",
    "diagramUrl": "assets/questions/q_math_circle_tangents_cm_segment_343.png",
    "solution": "### 💡 核心考點：圓的切線性質、切線長對稱性、直角三角形母子相似性質（射影定理）\n\n1. **【步驟一：由中點條件求出圓半徑與線段 OP 長度】**：\n   - 觀察圖形，$C$ 點為線段 $\\overline{OP}$ 與圓 $O$ 的交點，因此線段 $\\overline{OC}$ 即為圓 $O$ 的半徑：\n     $$\\overline{OC} = r$$\n   - 題幹給定：$C$ 為線段 $\\overline{OP}$ 的中點，且 $\\overline{CP} = 3$。\n   - 故：\n     $$\\overline{OC} = \\overline{CP} = 3 \\implies \\text{圓 } O \\text{ 的半徑 } r = 3$$\n     $$\\overline{OP} = \\overline{OC} + \\overline{CP} = 3 + 3 = 6$$\n\n2. **【步驟二：作輔助線與直角三角形確認】**：\n   - 連接半徑 $\\overline{OA}$。\n   - 根據圓的切線幾何性質：「通過切點的半徑必垂直於切線」：\n     $$\\overline{OA} \\perp \\overline{PA} \\implies \\angle OAP = 90^\\circ$$\n   - 因此 $\\triangle OAP$ 為一個直角三角形，其中：\n     - 直角為 $\\angle OAP = 90^\\circ$\n     - 斜邊 $\\overline{OP} = 6$\n     - 股 $\\overline{OA} = r = 3$\n   - （延伸觀察：因為 $\\frac{\\overline{OA}}{\\overline{OP}} = \\frac{3}{6} = \\frac{1}{2}$，故 $\\triangle OAP$ 為特殊的 $30^\\circ - 60^\\circ - 90^\\circ$ 直角三角形，其中 $\\angle OPA = 30^\\circ$、$\\angle AOP = 60^\\circ$）。\n\n3. **【步驟三：切點弦垂直性質與母子相似（射影定理）】**：\n   - 連接切點弦 $\\overline{AB}$，由圓外一點引兩切線的對稱性（或鳶形 $OAPB$ 的對角線互相垂直）：\n     $$\\overline{OP} \\perp \\overline{AB} \\implies \\angle OMA = 90^\\circ$$\n   - 在直角三角形 $\\triangle OAP$ 中，$\\overline{AM}$ 為斜邊 $\\overline{OP}$ 上的高。\n   - 根據**直角三角形母子相似性質（射影定理）**：\n     $$\\overline{OA}^2 = \\overline{OM} \\times \\overline{OP}$$\n     $$3^2 = \\overline{OM} \\times 6$$\n     $$9 = 6 \\times \\overline{OM} \\implies \\overline{OM} = \\frac{9}{6} = \\frac{3}{2}$$\n\n4. **【步驟四：計算線段 CM 的長度】**：\n   - 因為 $M$ 點落在線段 $\\overline{OC}$ 上（$\\overline{OM} = \\frac{3}{2} < 3$）：\n     $$\\overline{CM} = \\overline{OC} - \\overline{OM} = 3 - \\frac{3}{2} = \\mathbf{\\frac{3}{2}}$$\n   - （$M$ 點恰好亦為半徑 $\\overline{OC}$ 的中點）。\n\n故本題正確答案為 **(B) 3/2**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": False,
    "nextReviewDate": "2026-11-03",
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
text = text.replace("const STORAGE_KEY = 'miley_wrong_questions_v371';", "const STORAGE_KEY = 'miley_wrong_questions_v372';")

# Insert new question into INITIAL_SEED_DATA
marker = 'const INITIAL_SEED_DATA = [\n'
pos = text.find(marker)
if pos == -1:
    print('Error: marker not found')
    exit(1)

insert_pos = pos + len(marker)

q343_str = '  ' + json.dumps(q343, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'

text = text[:insert_pos] + q343_str + text[insert_pos:]

# Update fallback keys in dataManager.init()
text = text.replace("'miley_wrong_questions_v370'", "'miley_wrong_questions_v371', 'miley_wrong_questions_v370'")

with open('/Users/bennychen/pCloud Drive/bennychen/0AI_共用資料夾/07_Miley/麥麥錯題網站/js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully added Q343 to data.js!')
