# -*- coding: utf-8 -*-
import json
import re

updates = {
    "q_math_geo_circle_diameter_secant_angle_equality_426": {
        "explanation": "1. 連接 CD。由「同弧所對圓周角相等」知 ∠ADC ＝ ∠ABC ＝ ∠CAD。\n2. AD 為直徑 ⟹ 直徑圓周角 ∠ACD ＝ 90°，故 △ACD 為等腰直角三角形（45°-45°-90°）。\n3. 斜邊 AD ＝ 3，由邊長比 1 : 1 : √2 得股長 AC ＝ 3 ÷ √2 ＝ (3/2)√2。選 (A)。",
        "mistakeNote": "💡 易錯筆記：見直徑必連出直角 90°！同弧得兩底角相等，△ACD 為等腰直角三角形，由斜邊求股長記住除以 √2。"
    },
    "q_math_geo_circle_diameter_secant_bc_425": {
        "explanation": "1. 在 Rt△AOB 中，∠A ＝ 30°、OB ＝ 4 ⟹ 斜邊 AB ＝ 8，半徑 AO ＝ 4√3，直徑 AD ＝ 8√3。\n2. 連接 CD，因 AD 為直徑 ⟹ ∠ACD ＝ 90°。\n3. 在 Rt△ACD 中，AC ＝ AD × cos 30° ＝ 8√3 × (√3/2) ＝ 12。\n4. 故 BC ＝ AC － AB ＝ 12 － 8 ＝ 4。選 (A)。",
        "mistakeNote": "💡 易錯筆記：見直徑必連直徑圓周角 90°；題目問的是截線段 BC ＝ AC － AB，切勿算出 AB ＝ 8 就急著選。"
    },
    "q_math_geometric_sequence_first_term_plus_minus_one_420": {
        "explanation": "1. a₆ ÷ a₄ ＝ r² ⟹ r² ＝ 32 ÷ 8 ＝ 4 ⟹ 公比 r ＝ ±2（開根號必加正負號）。\n2. 由 a₄ ＝ a₁ × r³ ＝ 8：\n   - 當 r ＝ 2 時：a₁ × 8 ＝ 8 ⟹ a₁ ＝ 1；\n   - 當 r ＝ －2 時：a₁ × (－8) ＝ 8 ⟹ a₁ ＝ －1。\n3. 故首項 a₁ ＝ ±1。選 (A)。",
        "mistakeNote": "💡 易錯筆記：等比公比平方開根號必加「±」！負公比（奇正偶負或交錯）亦合題意，切勿漏解負值。"
    },
    "q_math_stairs_arithmetic_sequence_jia_yi_meeting_419": {
        "explanation": "1. 甲由 1 號階走到 21 號階，共走了 21 － 1 ＝ 20 步（起點是 1 號，勿誤算為 21 步）。\n2. 乙每步時間相同亦走 20 步，每步往下走 2 階，共向下移動 20 × 2 ＝ 40 階。\n3. 乙當前所在階數 ＝ 100 － 40 ＝ 60 號階。選 (A)。",
        "mistakeNote": "💡 易錯筆記：植樹起點陷阱！甲在 1 號階走到 21 號階只移動 20 步，誤算為 21 步會算出 58 階。"
    },
    "q_math_installment_arithmetic_sequence_4400_toy_418": {
        "explanation": "1. 設首期 a₁，公差 d：\n   - 2a₁ ＋ d ＝ 1800 ……①\n   - 2a₁ ＋ 5d ＝ 2600 ……②\n2. ②－① 得 4d ＝ 800 ⟹ d ＝ 200，代入①得 a₁ ＝ 800（第一期）。\n3. 最後一期 a₄ ＝ a₁ ＋ 3d ＝ 800 ＋ 3(200) ＝ 1400 元。選 (A)。",
        "mistakeNote": "💡 易錯筆記：最後一期是第 4 期，為 a₁ ＋ 3d，切勿誤加成 4d 而多算了一個公差。"
    },
    "q_math_sequence_linear_rule_am_3m_plus_1_417": {
        "explanation": "1. 由相鄰項差值知首項 a₁ ＝ 4，公差 d ＝ 7 － 4 ＝ 3。\n2. 通式 aₙ ＝ 4 ＋ (n － 1) × 3 ＝ 3n ＋ 1。\n3. 依序代入求值：\n   - ① 為 a₄ ＝ 3(4) ＋ 1 ＝ 13；\n   - ② 為 a₂₀ ＝ 3(20) ＋ 1 ＝ 61；\n   - ③ 為 aₘ ＝ 3m ＋ 1。選 (A)。",
        "mistakeNote": "💡 易錯筆記：通式是 a₁ ＋ (n－1)d ＝ 3n ＋ 1，切勿直覺猜 3n，代入 n ＝ 1 驗算即可確認。"
    },
    "q_math_geo_circle_inscribed_square_area_386": {
        "explanation": "1. 外切正方形邊長為 6 ⟹ 圓直徑 d ＝ 6。\n2. 內接正方形 EFGH 的對角線即為圓的直徑，故對角線長 ＝ 6。\n3. 利用正方形（菱形）對角線乘積面積公式：\n   面積 ＝ (1/2) × 6 × 6 ＝ 18。選 (D)。",
        "mistakeNote": "💡 易錯筆記：內接正方形對角線等於圓直徑，直接用「對角線相乘除以 2」秒殺，無需開根號算邊長。"
    },
    "q_math_geo_rect_sector_diff_area_385": {
        "explanation": "1. 將中間空白四邊形設為丙。\n2. 扇形 ABE 面積 ＝ 甲 ＋ 丙 ＝ (1/4) × π × 12² ＝ 36π。\n3. 長方形 ABCD 面積 ＝ 乙 ＋ 丙 ＝ 12 × 6 ＝ 72。\n4. 兩式相減：甲 － 乙 ＝ 36π － 72。選 (B)。",
        "mistakeNote": "💡 易錯筆記：不規則面積相差問題用「同加同減消去法」，轉化為「扇形面積 － 長方形面積」一秒搞定。"
    },
    "q_math_geo_point_circle_position_distance_384": {
        "explanation": "1. 算點 P 到圓心 O 的距離：\n   d ＝ √[(3 － (－1))² ＋ (－1 － (－4))²] ＝ √(4² ＋ 3²) ＝ 5。\n2. 因距離 d ＝ 5 剛好等於半徑 r ＝ 5，故點 P 在圓上。選 (B)。",
        "mistakeNote": "💡 易錯筆記：點與圓位置看「距離 d 與半徑 r」：d ＞ r 在圓外、d ＝ r 在圓上、d ＜ r 在圓內。"
    }
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v427
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v426';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v427';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Update each question block
    for qid, fields in updates.items():
        pos = content.find(f'"{qid}"')
        if pos == -1:
            print(f"Warning: {qid} not found!")
            continue

        end_pos = content.find('"diagramUrl"', pos)
        if end_pos == -1:
            end_pos = content.find('}', pos)

        block = content[pos:end_pos]

        new_note_json = json.dumps(fields["mistakeNote"], ensure_ascii=False)
        new_exp_json = json.dumps(fields["explanation"], ensure_ascii=False)

        # Replace mistakeNote using lambda to avoid escape interpolation
        block = re.sub(
            r'"mistakeNote":\s*"[^"\\]*(?:\\.[^"\\]*)*"',
            lambda m: f'"mistakeNote": {new_note_json}',
            block
        )

        # Replace explanation using lambda to avoid escape interpolation
        block = re.sub(
            r'"explanation":\s*"[^"\\]*(?:\\.[^"\\]*)*"',
            lambda m: f'"explanation": {new_exp_json}',
            block
        )

        content = content[:pos] + block + content[end_pos:]
        print(f"Updated {qid}")

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully updated js/data.js and upgraded to v427.")

if __name__ == '__main__':
    main()
