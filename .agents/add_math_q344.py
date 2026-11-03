# -*- coding: utf-8 -*-
import json

q344 = {
    "id": "q_math_circle_tangents_equilateral_radius_344",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與切線／切線長性質（PA = PB）、正三角形邊角性質與 30°-60°-90° 直角三角形三角比求圓半徑",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【切線長＋正三角形求半徑秒殺心法！】\n1. **看清角度對稱性**：\n   - $\\triangle PAB$ 為正三角形 $\\implies \\angle APB = 60^\\circ$、切線長 $\\overline{PA} = \\overline{PB} = 6$。\n   - 連線 $\\overline{OP}$ 為角平分線 $\\implies \\angle APO = 30^\\circ$！\n2. **抓準 30°-60°-90° 的長股與短股**：\n   - 半徑垂直切線：$\\overline{OA} \\perp \\overline{PA} \\implies \\angle OAP = 90^\\circ$。\n   - $\\angle APO = 30^\\circ$ 的對邊是【半徑 $\\overline{OA}$（短股）】！\n   - 切線 $\\overline{PA} = 6$ 是【長股（對 $60^\\circ$）】！\n   - 短股與長股比為 $1 : \\sqrt{3}$：\n     $$r = \\frac{6}{\\sqrt{3}} = 2\\sqrt{3}$$\n3. **常見致命陷阱**：\n   - ❌ 誤以為切線 6 是短股，算出 $6\\sqrt{3}$！\n   - ❌ 誤把弦 $\\overline{AB} = 6$ 當作直徑算出半徑 3！",
    "stem": "若圓 O 外一點 P 對圓作切線段 PA、PB，且 △PAB 為正三角形，線段 AB = 6，則此圓 O 的半徑為多少？\n\n○ (A) 2\n○ (B) 2√3\n○ (C) 3√3\n○ (D) 4√3",
    "answer": "(B) 2√3",
    "diagramUrl": "",
    "solution": "### 💡 核心考點：切線長性質、正三角形內角、30°-60°-90° 特殊直角三角形邊長比\n\n1. **【步驟一：由切線長性質與正三角形求出切線長與角度】**：\n   - 根據**切線長性質**：自圓外一點 $P$ 對圓 $O$ 所作的兩條切線段等長：\n     $$\\overline{PA} = \\overline{PB}$$\n   - 題幹給定 $\\triangle PAB$ 為**正三角形**，且邊長 $\\overline{AB} = 6$：\n     $$\\overline{PA} = \\overline{PB} = \\overline{AB} = 6$$\n     且正三角形之三個內角皆為 $60^\\circ$：\n     $$\\angle APB = 60^\\circ$$\n\n2. **【步驟二：作輔助線並利用對稱性求出角 APO】**：\n   - 連接圓心 $O$ 與圓外點 $P$。\n   - 由圓外一點引兩切線的對稱性，線段 $\\overline{OP}$ 必平分 $\\angle APB$：\n     $$\\angle APO = \\frac{1}{2} \\angle APB = \\frac{1}{2} \\times 60^\\circ = 30^\\circ$$\n\n3. **【步驟三：利用切線垂直性質建立直角三角形】**：\n   - 連接切點半徑 $\\overline{OA}$。\n   - 根據圓的切線幾何性質：「通過切點的半徑必垂直於切線」：\n     $$\\overline{OA} \\perp \\overline{PA} \\implies \\angle OAP = 90^\\circ$$\n   - 在直角三角形 $\\triangle OAP$ 中：\n     - $\\angle OAP = 90^\\circ$\n     - $\\angle APO = 30^\\circ$\n     - 故 $\\angle AOP = 180^\\circ - 90^\\circ - 30^\\circ = 60^\\circ$\n   - 此直角三角形為典型的 **$30^\\circ - 60^\\circ - 90^\\circ$ 特殊直角三角形**！\n\n4. **【步驟四：利用特殊邊長比求圓半徑】**：\n   - 在 $30^\\circ - 60^\\circ - 90^\\circ$ 直角三角形中，三邊長比例為：\n     $$\\text{短股} (30^\\circ \\text{ 對邊}) : \\text{長股} (60^\\circ \\text{ 對邊}) : \\text{斜邊} (90^\\circ \\text{ 對邊}) = 1 : \\sqrt{3} : 2$$\n   - 在 $\\triangle OAP$ 中：\n     - 長股為切線段 $\\overline{PA} = 6$\n     - 短股為半徑 $\\overline{OA} = r$\n     - 根據比例關係：\n       $$\\frac{\\overline{OA}}{\\overline{PA}} = \\frac{1}{\\sqrt{3}} \\implies \\frac{r}{6} = \\frac{1}{\\sqrt{3}}$$\n       $$r = \\frac{6}{\\sqrt{3}} = \\frac{6 \\times \\sqrt{3}}{\\sqrt{3} \\times \\sqrt{3}} = \\frac{6\\sqrt{3}}{3} = \\mathbf{2\\sqrt{3}}$$\n\n故本題正確答案為 **(B) 2√3**。",
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
text = text.replace("const STORAGE_KEY = 'miley_wrong_questions_v372';", "const STORAGE_KEY = 'miley_wrong_questions_v373';")

# Insert new question into INITIAL_SEED_DATA
marker = 'const INITIAL_SEED_DATA = [\n'
pos = text.find(marker)
if pos == -1:
    print('Error: marker not found')
    exit(1)

insert_pos = pos + len(marker)

q344_str = '  ' + json.dumps(q344, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'

text = text[:insert_pos] + q344_str + text[insert_pos:]

# Update fallback keys in dataManager.init()
text = text.replace("'miley_wrong_questions_v371'", "'miley_wrong_questions_v372', 'miley_wrong_questions_v371'")

with open('/Users/bennychen/pCloud Drive/bennychen/0AI_共用資料夾/07_Miley/麥麥錯題網站/js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully added Q344 to data.js!')
