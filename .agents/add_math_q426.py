# -*- coding: utf-8 -*-
import json

q426 = {
    "id": "q_math_geo_circle_diameter_secant_angle_equality_426",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／同弧所對圓周角相等 (∠ADC ＝ ∠ABC)／直徑所對圓周角為直角 (∠ACD ＝ 90°)／等腰直角三角形邊長比 (1 : 1 : √2)",
    "uploadDate": "2026-11-10",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【圓幾何「同弧圓周角相等」＋「直徑圓周角 90°」黃金組合拳！】\n1. **破題條件反射（見等角找同弧）**：\n   - 看到 ∠ABC ＝ ∠CAD，且 B 與 D 都在圓周上，立刻觀察：∠ABC 與 ∠ADC 都對著弧 AC！\n   - 一秒串連 ∠ADC ＝ ∠ABC ＝ ∠CAD，直接證得 △ACD 兩底角相等！\n2. **直徑隱含直角**：\n   - 看到「AD 是直徑」，立刻連接 CD 得 ∠ACD ＝ 90°；\n   - 兩底角相等加上頂角 90°，立即鎖定等腰直角三角形（45°-45°-90°）！\n3. **計算陷阱（斜邊求股長是「除以 √2」）**：\n   - 等腰直角三角形中斜邊最長，由斜邊求股長要除以 √2：3 ÷ √2 ＝ (3/2)√2，切勿心急乘成 3√2（誤選 C）！",
    "stem": "如附圖，線段 $\\overline{AD}$ 為圓 $O$ 的直徑，$\\overline{BC}$、$\\overline{AB}$、$\\overline{AC}$ 為圓內的三條弦。若 $\\overline{AD} = 3$，且 $\\angle ABC = \\angle CAD$，則弦 $\\overline{AC}$ 的長度為何？\n\n○ (A) (3/2)√2\n○ (B) (3/2)√3\n○ (C) 3√2\n○ (D) 3/2",
    "answer": "(A) (3/2)√2",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：觀察圓周角與同弧性質\n- 四點 $A, B, C, D$ 皆在圓 $O$ 上。\n- 觀察弧 $\\widehat{AC}$：\n  - 圓周角 $\\angle ABC$ 所對的弧為 $\\widehat{AC}$；\n  - 若連接 $\\overline{CD}$，則圓周角 $\\angle ADC$ 所對的弧亦為 $\\widehat{AC}$！\n- 根據**圓周角定理**（同弧所對的圓周角相等）：\n  $$\\angle ADC = \\angle ABC$$\n\n---\n\n#### 第二部：結合題意條件，確認等腰關係\n- 題目已知條件：$\\angle ABC = \\angle CAD$。\n- 結合第一部結論，可得：\n  $$\\angle CAD = \\angle ADC$$\n- 這代表在 $\\triangle ACD$ 中，兩底角相等，因此 $\\triangle ACD$ 為**等腰三角形**（$\\overline{AC} = \\overline{CD}$）。\n\n---\n\n#### 第三部：利用「直徑圓周角為直角」，秒殺求值\n- 題目給定 $\\overline{AD}$ 為圓 $O$ 的直徑：\n  - 根據直徑所對的圓周角為直角之幾何性質，連接 $\\overline{CD}$ 後必有：\n    $$\\angle ACD = 90^\\circ$$\n- 因此，$\\triangle ACD$ 不僅是等腰三角形，更是**等腰直角三角形**（$45^\\circ - 45^\\circ - 90^\\circ$）！\n- 其中斜邊為直徑 $\\overline{AD} = 3$，兩股長相等（$\\overline{AC} = \\overline{CD}$）。\n- 根據等腰直角三角形邊長比 $1 : 1 : \\sqrt{2}$：\n  $$\\overline{AC} = \\frac{\\overline{AD}}{\\sqrt{2}} = \\frac{3}{\\sqrt{2}} = \\frac{3\\sqrt{2}}{2}$$\n\n故弦 $\\overline{AC}$ 的長度為 **$\\frac{3}{2}\\sqrt{2}$**，正確答案選 **(A)**。",
    "diagramUrl": "assets/questions/q_math_geo_circle_diameter_secant_angle_equality_426.png"
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v426
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v425';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v426';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q426 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    new_entry = "  " + json.dumps(q426, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    replacement = target + new_entry
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q426 to js/data.js and upgraded to v426.")

if __name__ == '__main__':
    main()
