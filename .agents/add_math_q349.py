# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_math_circle_parallel_chords_distance_349",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "審題不清",
    "concept": "幾何/圓與弦心距／平行弦距離求法（同側相減 OM - ON = 3、異側相加 OM + ON = 21 經典雙解）與畢氏定理",
    "uploadDate": "2026-11-04",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【平行弦距離考題第一大陷阱：題目「沒給圖或沒限定方位」必定有雙解！】\n1. **考場最慘痛失分陷阱（只算一種情況）**：\n   - 很多同學算完同側得到 3，或者算完異側得到 21，就直接在選項中單選 (A) 或 (B)，慘遭扣分！\n   - 請死死記住：**「圓內兩平行弦」若題目沒有明確說明在圓心的同側或異側，必定要同時討論「同側」與「異側」兩種情況！**\n2. **直角三角形快速心算（3:4:5 放大三倍＝9, 12, 15）**：\n   - 圓心到弦的垂直線段（弦心距）必平分該弦：\n     - 弦 $AB = 18 \\implies$ 半弦長 $= 9$。半徑 $= 15$。由畢氏定理：弦心距 $OM = \\sqrt{15^2 - 9^2} = 12$。\n     - 弦 $CD = 24 \\implies$ 半弦長 $= 12$。半徑 $= 15$。由畢氏定理：弦心距 $ON = \\sqrt{15^2 - 12^2} = 9$。\n3. **兩弦距離雙解公式**：\n   - **同側時**：兩平行線距離等於兩弦心距之差：$$OM - ON = 12 - 9 = 3$$\n   - **異側時**：兩平行線距離等於兩弦心距之和：$$OM + ON = 12 + 9 = 21$$\n   - 故完整正解必為 **3 或 21**！",
    "stem": "圓 O 的半徑為 15，線段 AB、CD 為圓內兩平行弦，若 AB = 18，CD = 24，則兩弦的距離為何？\n\n○ (A) 3\n○ (B) 21\n○ (C) 3 或 21\n○ (D) 6 或 18",
    "answer": "(C) 3 或 21",
    "diagramUrl": "assets/questions/q_math_circle_parallel_chords_distance_349.png",
    "solution": "### 💡 核心考點：垂徑定理（弦心距平分弦）、直角三角形畢氏定理（弦心距長度）、圓內平行弦位置討論（同側相減與異側相加）\n\n1. **【正解 (C) 深度破題分析——兩步驟完整推導】**：\n   - **第一階段：利用垂徑定理與畢氏定理分別求出兩弦的弦心距**\n     - 自圓心 $O$ 分別向兩弦作垂線：\n       - 作 $\\overline{OM} \\perp \\overline{AB}$ 於 $M$ 點\n       - 作 $\\overline{ON} \\perp \\overline{CD}$ 於 $N$ 點\n     - 根據圓的垂徑定理（垂直於弦的直徑必平分該弦）：\n       - $\\overline{AM} = \\frac{1}{2}\\overline{AB} = \\frac{18}{2} = 9$\n       - $\\overline{CN} = \\frac{1}{2}\\overline{CD} = \\frac{24}{2} = 12$\n     - 連接半徑 $\\overline{OA} = 15$、$\\overline{OC} = 15$：\n       - 在直角三角形 $\\triangle OAM$ 中（$\\angle OMA = 90^\\circ$）：\n         $$\\overline{OM} = \\sqrt{\\overline{OA}^2 - \\overline{AM}^2} = \\sqrt{15^2 - 9^2} = \\sqrt{225 - 81} = \\sqrt{144} = \\mathbf{12}$$\n         （即常見的直角三角形邊長比例 $3 : 4 : 5$ 放大 3 倍，邊長為 $9, 12, 15$）\n       - 在直角三角形 $\\triangle OCN$ 中（$\\angle ONC = 90^\\circ$）：\n         $$\\overline{ON} = \\sqrt{\\overline{OC}^2 - \\overline{CN}^2} = \\sqrt{15^2 - 12^2} = \\sqrt{225 - 144} = \\sqrt{81} = \\mathbf{9}$$\n         （邊長同樣為 $9, 12, 15$ 的直角三角形）\n\n   - **第二階段：分類討論兩平行弦的相對位置（同側 vs 異側）**\n     - 因為題目僅說明 $\\overline{AB} \\parallel \\overline{CD}$，並未限定兩弦在圓心的哪一側，因此必須討論以下兩種情況：\n     - **情況一：兩弦在圓心 $O$ 的【同側】（如圖 a）**\n       - 兩平行線之間的距離即為兩垂線段的長度差：\n         $$\\text{兩弦距離} = \\overline{OM} - \\overline{ON} = 12 - 9 = \\mathbf{3}$$\n     - **情況二：兩弦在圓心 $O$ 的【異側】（如圖 b）**\n       - 圓心 $O$ 介於兩平行弦之間，兩平行線之間的距離為兩垂線段的長度總和：\n         $$\\text{兩弦距離} = \\overline{OM} + \\overline{ON} = 12 + 9 = \\mathbf{21}$$\n     - 綜合上述兩種情形，兩平行弦 $\\overline{AB}$ 與 $\\overline{CD}$ 的距離可能為 **3 或 21**。\n\n   - 故正確答案選 **(C) 3 或 21**。\n\n2. **【解題速記口訣】**：\n   - 垂徑出弦心距，勾股定理算高；\n   - 圓內平行兩弦，**同側相減得 3、異側相加得 21**，審題切勿漏解！\n\n故本題正確答案為 **(C)**。",
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
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v377';", "const STORAGE_KEY = 'miley_wrong_questions_v378';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q349 to js/data.js and upgraded to v378.")

