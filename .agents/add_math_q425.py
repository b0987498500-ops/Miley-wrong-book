# -*- coding: utf-8 -*-
import json

q425 = {
    "id": "q_math_geo_circle_diameter_secant_bc_425",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／直徑所對圓周角為直角 (90°)／30°-60°-90° 特殊直角三角形邊長比 (1 : √3 : 2)／相似形與垂徑定理",
    "uploadDate": "2026-11-10",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【幾何圓直徑必連「直徑圓周角 90°」—— 善用 30°-60°-90° 特殊直角三角形！】\n1. **破題條件反射（見直徑找直角）**：\n   - 看到「AD 為圓直徑」，立刻連接圓上一點 C 作出 CD，直徑所對圓周角 ∠ACD ＝ 90° 瞬間完成直角三角形！\n2. **審題陷阱（問 BC 而非 AB 或 AC）**：\n   - 許多同學算出 AB ＝ 8 或全弦長 AC ＝ 12，心急直接作答；\n   - 務必看清題目所求為截線段 BC ＝ AC － AB ＝ 12 － 8 ＝ 4。\n3. **秒殺備用大招 ——「垂徑定理」**：\n   - 過圓心 O 作 OM ⊥ AC 於 M，在 Rt△AOM 中，AM ＝ AO × cos 30° ＝ 4√3 × (√3/2) ＝ 6；\n   - 由垂徑定理知 M 平分弦 AC，故 AC ＝ 2 × 6 ＝ 12，直接扣減 AB ＝ 8 即得 BC ＝ 4，秒殺解題！",
    "stem": "如附圖，線段 $\\overline{AD}$ 為圓 $O$ 的直徑，$\\overline{AC}$ 為圓內一弦，$\\angle CAD = 30^\\circ$，$\\overline{OB} \\perp \\overline{AD}$。若 $\\overline{OB} = 4$，則線段 $\\overline{BC}$ 的長度為何？\n\n○ (A) 4\n○ (B) 4√3\n○ (C) 6\n○ (D) 8",
    "answer": "(A) 4",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：在直角 $\\triangle AOB$ 中求出半徑與 $\\overline{AB}$\n- 因 $\\overline{OB} \\perp \\overline{AD}$，故 $\\angle AOB = 90^\\circ$。\n- 在直角三角形 $\\triangle AOB$ 中：\n  - $\\angle OAB = \\angle CAD = 30^\\circ$\n  - 對邊 $\\overline{OB} = 4$\n  - 根據 $30^\\circ - 60^\\circ - 90^\\circ$ 特殊直角三角形邊長比 $1 : \\sqrt{3} : 2$：\n    - 斜邊 $\\overline{AB} = 2 \\times \\overline{OB} = 2 \\times 4 = 8$\n    - 鄰邊 $\\overline{AO} = \\sqrt{3} \\times \\overline{OB} = 4\\sqrt{3}$\n- 因 $O$ 為圓心，故圓的半徑 $r = \\overline{AO} = 4\\sqrt{3}$，直徑 $\\overline{AD} = 2r = 8\\sqrt{3}$。\n\n---\n\n#### 第二部：連接輔助線求出全弦長 $\\overline{AC}$\n- **方法一（直徑圓周角法，最推薦）**：\n  - 連接 $\\overline{CD}$，因 $\\overline{AD}$ 為直徑，其所對的圓周角 $\\angle ACD = 90^\\circ$。\n  - 在直角三角形 $\\triangle ACD$ 中：\n    - 斜邊為直徑 $\\overline{AD} = 8\\sqrt{3}$\n    - $\\angle CAD = 30^\\circ$\n    - 鄰邊 $\\overline{AC} = \\overline{AD} \\times \\cos 30^\\circ = 8\\sqrt{3} \\times \\frac{\\sqrt{3}}{2} = 8 \\times \\frac{3}{2} = 12$\n- **方法二（相似三角形比例法）**：\n  - $\\triangle ABO \\sim \\triangle ADC$（$AA$ 相似性質，$\\angle A = \\angle A$、$\\angle AOB = \\angle ACD = 90^\\circ$）；\n  - $\\overline{AB} : \\overline{AD} = \\overline{AO} : \\overline{AC} \\implies 8 : 8\\sqrt{3} = 4\\sqrt{3} : \\overline{AC} \\implies \\overline{AC} = 12$。\n\n---\n\n#### 第三部：線段相減求出 $\\overline{BC}$\n由點 $B$ 在弦 $\\overline{AC}$ 上可知：\n$$\\overline{BC} = \\overline{AC} - \\overline{AB} = 12 - 8 = 4$$\n\n故線段 $\\overline{BC}$ 的長度為 **4**，正確答案選 **(A)**。",
    "diagramUrl": "assets/questions/q_math_geo_circle_diameter_secant_bc_425.png"
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v425
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v424';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v425';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q425 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    new_entry = "  " + json.dumps(q425, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    replacement = target + new_entry
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q425 to js/data.js and upgraded to v425.")

if __name__ == '__main__':
    main()
