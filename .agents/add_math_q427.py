# -*- coding: utf-8 -*-
import json

q427 = {
    "id": "q_math_geo_circle_fold_chord_cod_120_427",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／對摺對稱軸與垂直平分線／弦心距為半徑之一半 (r/2)／30°-60°-90° 特殊角與圓心角 120°",
    "uploadDate": "2026-11-10",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：翻摺圓弧過圓心，弦心距必為半徑之一半（r/2）！由 1 : √3 : 2 直角三角形得半角 60°，圓心角即為 120°。",
    "stem": "如附圖，將一圓先對摺後展開產生摺線 $\\overline{AB}$，再將上半部對摺使摺線 $\\overline{CD}$ 與摺線 $\\overline{AB}$ 平行，且 $\\overline{AB}$ 切圓弧於圓心 $O$，則 $\\widehat{COD}$ 的度數為何？\n\n○ (A) 120 度\n○ (B) 90 度\n○ (C) 60 度\n○ (D) 150 度",
    "answer": "(A) 120 度",
    "explanation": "1. 圓弧向下翻摺切於圓心 O ⟹ 弦 CD 垂直平分半徑 ⟹ 弦心距 OM ＝ r/2。\n2. 連接 OC、OD（半徑 r）。在 Rt△OMC 中，OM : OC ＝ 1 : 2 ⟹ ∠COM ＝ 60°。\n3. 同理 ∠DOM ＝ 60°，故圓心角 ∠COD ＝ 60° ＋ 60° ＝ 120°，弧 COD 亦為 120 度。選 (A)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_fold_chord_cod_120_427.png"
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v428
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v427';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v428';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q427 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    new_entry = "  " + json.dumps(q427, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    replacement = target + new_entry
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q427 to js/data.js and upgraded to v428.")

if __name__ == '__main__':
    main()
