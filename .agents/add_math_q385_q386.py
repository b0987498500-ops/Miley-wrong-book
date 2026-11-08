# -*- coding: utf-8 -*-
import json
import re

# Questions Data for Q385 and Q386
q385 = {
    "id": "q_math_geo_rect_sector_diff_area_385",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與多邊形／扇形與長方形面積差值計算 (同加同減消去法：(甲+丙) - (乙+丙) = 甲 - 乙)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【不規則塗色面積相差問題 ——「同加同減」代數消去法！】\n1. **千萬別陷入死胡同去算個別面積**：\n   - 看到區域甲（不規則弧形）和區域乙（小三角形），很多同學第一反應是去算點 F 坐標或線段長度，這會耗費大量時間且容易算錯！\n2. **破題金鑰匙（引入中間未知區域「丙」）**：\n   - 將四邊形 ABFD 設為區域「丙」；\n   - 觀察整體圖形：\n     - **扇形 ABE（1/4 圓）** 剛好等於「甲 + 丙」；\n     - **長方形 ABCD** 剛好等於「乙 + 丙」。\n3. **兩式直接相減**：\n   - (甲 + 丙) - (乙 + 丙) = 甲 - 乙；\n   - 所求甲與乙的差值，直接轉化為「**扇形面積 - 長方形面積**」，一秒解題！",
    "stem": "如附圖，在長方形 $ABCD$ 中，$\\overline{AB} = 12$，$\\overline{AD} = 6$，若以 $A$ 點為圓心，$\\overline{AB}$ 長為半徑畫 $\\frac{1}{4}$ 圓，交 $\\overline{AD}$ 延長線於 $E$ 點，且 $\\overline{BE}$ 交 $\\overline{CD}$ 於 $F$ 點，則塗色區域甲和區域乙的面積相差多少？\n\n○ (A) $36\\pi - 48$\n○ (B) $36\\pi - 72$\n○ (C) $24\\pi - 18$\n○ (D) $20\\pi - 18$",
    "answer": "(B) 36π - 72",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：引入中間公共區域，化不規則為規則\n- 觀察幾何圖形：\n  - 區域甲與區域乙皆為不規則或位置分散的區塊，但兩者恰好與四邊形 $ABFD$ 拼成我們熟知的規則幾何圖形！\n  - 我們將四邊形 $ABFD$（長方形內部未塗色的區域）設為**區域丙**。\n\n---\n\n#### 第二部：列出規則圖形的面積公式\n1. **$\\frac{1}{4}$ 圓（扇形 $ABE$）的面積**：\n   - 圓心為 $A$，半徑 $r = \\overline{AB} = 12$，圓心角為直角 $90^\\circ$（即 $\\frac{1}{4}$ 圓）；\n   - 面積公式：\n     $$\\text{扇形 } ABE = \\frac{1}{4} \\times \\pi \\times 12^2 = \\frac{1}{4} \\times 144\\pi = 36\\pi$$\n   - 由圖形組合可知：\n     $$\\text{甲面積} + \\text{丙面積} = 36\\pi \\quad \\cdots\\cdots \\text{①}$$\n\n2. **長方形 $ABCD$ 的面積**：\n   - 長 $\\overline{AB} = 12$，寬 $\\overline{AD} = 6$；\n   - 面積公式：\n     $$\\text{長方形 } ABCD = 12 \\times 6 = 72$$\n   - 由圖形組合可知：\n     $$\\text{丙面積} + \\text{乙面積} = 72 \\quad \\cdots\\cdots \\text{②}$$\n\n---\n\n#### 第三部：利用代數消去法求面積差\n將式①與式②相減：\n$$(\\text{甲面積} + \\text{丙面積}) - (\\text{丙面積} + \\text{乙面積}) = \\text{甲面積} - \\text{乙面積}$$\n$$\\text{甲面積} - \\text{乙面積} = 36\\pi - 72$$\n\n故塗色區域甲和區域乙的面積相差為 **$36\\pi - 72$**，正確答案選 **(B)**。",
    "diagramUrl": "assets/questions/q_math_geo_rect_sector_diff_area_385.png"
}

q386 = {
    "id": "q_math_geo_circle_inscribed_square_area_386",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "幾何/圓與正方形／外切正方形與內接正方形／直徑與對角線長度關係／菱形（正方形）對角線乘積面積公式",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【外切正方形 vs 內接正方形「直徑雙重身分」！】\n1. **外切正方形的邊長 = 圓的直徑**：\n   - 正方形 ABCD 邊長為 6，緊緊包覆著圓 O，因此圓 O 的直徑恰好等於邊長 = 6（半徑 r = 3）。\n2. **內接正方形的對角線 = 圓的直徑**：\n   - 正方形 EFGH 的四個頂點都在圓周上，其對角線 $\\overline{EG}$ 與 $\\overline{FH}$ 必通過圓心且為圓的直徑！因此對角線長度 = 6。\n3. **最快秒殺法 —— 菱形面積公式（對角線相乘除以 2）**：\n   - 正方形也是特殊的菱形（對角線等長且互相垂直平分）；\n   - $\\text{面積} = \\frac{1}{2} \\times \\text{對角線}_1 \\times \\text{對角線}_2 = \\frac{1}{2} \\times 6 \\times 6 = 18$！\n   - 無需開根號去算邊長 $3\\sqrt{2}$，直接一步到位！",
    "stem": "如附圖，正方形 $ABCD$ 為圓 $O$ 的外切四邊形，且邊長為 6，圓內有一正方形 $EFGH$，若 $E$、$F$、$G$、$H$ 四點皆在圓上，則正方形 $EFGH$ 的面積為何？\n\n○ (A) $\\frac{27}{4}$\n○ (B) $\\frac{15}{2}$\n○ (C) $12$\n○ (D) $18$",
    "answer": "(D) 18",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：由外切正方形求出圓的直徑\n- 正方形 $ABCD$ 為圓 $O$ 的外切四邊形，圓 $O$ 與正方形四邊相切。\n- 圓心 $O$ 到上下（或左右）兩切點的距離和即為圓的直徑。\n- 因此，圓 $O$ 的直徑等於正方形 $ABCD$ 的邊長：\n  $$\\text{直徑 } d = 6 \\implies \\text{半徑 } r = 3$$\n\n---\n\n#### 第二部：由圓內接正方形找出對角線長\n- 正方形 $EFGH$ 的四個頂點 $E, F, G, H$ 皆在圓 $O$ 上，屬於圓的內接正方形。\n- 連接對角線 $\\overline{EG}$ 與 $\\overline{FH}$：\n  - 由於正方形各內角為 $90^\\circ$（例如 $\\angle EFG = 90^\\circ$），所對應的圓周角為直角，因此對角線 $\\overline{EG}$ 必定為圓的**直徑**！\n  - 同理，對角線 $\\overline{FH}$ 也為圓的**直徑**。\n  - 故對角線長度：\n    $$\\overline{EG} = \\overline{FH} = \\text{直徑 } d = 6$$\n\n---\n\n#### 第三部：計算正方形面積（雙解法秒殺）\n- **解法一（菱形對角線面積法，最推薦、最快）**：\n  - 正方形具有菱形性質，兩條對角線互相垂直且平分；\n  - 正方形面積公式：\n    $$\\text{面積} = \\frac{1}{2} \\times \\text{對角線}_1 \\times \\text{對角線}_2 = \\frac{1}{2} \\times \\overline{EG} \\times \\overline{FH} = \\frac{1}{2} \\times 6 \\times 6 = 18$$\n\n- **解法二（直角三角形邊長法）**：\n  - 在直角三角形 $\\triangle OEF$ 中，$\\overline{OE} = \\overline{OF} = r = 3$，且 $\\angle EOF = 90^\\circ$；\n  - 由畢氏定理，正方形邊長 $\\overline{EF}$ 滿足：\n    $$\\overline{EF}^2 = \\overline{OE}^2 + \\overline{OF}^2 = 3^2 + 3^2 = 9 + 9 = 18$$\n  - 正方形面積就是邊長的平方 $\\overline{EF}^2 = 18$。\n\n故正方形 $EFGH$ 的面積為 **18**，正確答案選 **(D)**。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_square_area_386.png"
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v404
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v403';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v404';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q386 and q385 at the top of INITIAL_SEED_DATA
    # In INITIAL_SEED_DATA, newest is Q386, followed by Q385 (both sorted properly by Q-number in review queue)
    target = "const INITIAL_SEED_DATA = [\n"
    replacement = target + "  " + json.dumps(q386, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n  " + json.dumps(q385, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q385 and Q386 to js/data.js and upgraded to v404.")

if __name__ == '__main__':
    main()
