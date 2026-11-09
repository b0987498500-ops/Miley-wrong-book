# -*- coding: utf-8 -*-
import json

q418 = {
    "id": "q_math_installment_arithmetic_sequence_4400_toy_418",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "國中數學／數列與級數／等差數列應用題／分期付款二元一次聯立方程／首項與第 4 期計算",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【分期付款等差數列 —— 第 4 期公差要加 3d，切勿誤加 4d！】\n1. **公差項數陷阱**：\n   - 第 n 期金額公式為 aₙ ＝ a₁ ＋ (n－1)d；\n   - 最後一期是第 4 期，為 a₁ ＋ 3d，許多同學心急會直覺代成 a₁ ＋ 4d，導致多加了一個公差 200 元而算出 1600 元！\n2. **速解巧妙觀察（分組差等於 4d）**：\n   - (a₃ ＋ a₄) － (a₁ ＋ a₂) ＝ (a₃ － a₁) ＋ (a₄ － a₂) ＝ 2d ＋ 2d ＝ 4d；\n   - 兩組差 2600 － 1800 ＝ 800 ＝ 4d ⟹ d ＝ 200，一眼就能心算公差！\n3. **善用總額 4400 元快速驗算**：\n   - 算完 a₁ ＝ 800 與 a₄ ＝ 1400 後，利用等差級數總和公式：S₄ ＝ 2 × (800 ＋ 1400) ＝ 4400，直接秒驗算，確保萬無一失！",
    "stem": "小胖想買一個價值 4400 元的玩具，但玩具太貴了，老闆答應他可以分期付款。已知小胖一共分 4 期付款，每期付款的金額恰成一個等差數列。第一、二期小胖共付 1800 元，第三、四期共付 2600 元，請問小胖在第一期、最後一期各付了多少錢？\n\n○ (A) 第一期付 800 元，最後一期付 1400 元\n○ (B) 第一期付 700 元，最後一期付 1500 元\n○ (C) 第一期付 800 元，最後一期付 1200 元\n○ (D) 第一期付 900 元，最後一期付 1300 元",
    "answer": "(A) 第一期付 800 元，最後一期付 1400 元",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：設未知數與等差數列各期金額\n- 設第一期付款金額為 a₁ 元，公差為 d 元。\n- 因一共分 4 期付款，各期金額依序為：\n  - 第 1 期：a₁\n  - 第 2 期：a₂ ＝ a₁ ＋ d\n  - 第 3 期：a₃ ＝ a₁ ＋ 2d\n  - 第 4 期（最後一期）：a₄ ＝ a₁ ＋ 3d\n\n---\n\n#### 第二部：列二元一次聯立方程式並求解\n1. 依據「第一、二期共付 1800 元」：\n   $$a_1 + (a_1 + d) = 1800 \\implies 2a_1 + d = 1800 \\quad \\cdots\\cdots ①$$\n2. 依據「第三、四期共付 2600 元」：\n   $$(a_1 + 2d) + (a_1 + 3d) = 2600 \\implies 2a_1 + 5d = 2600 \\quad \\cdots\\cdots ②$$\n3. 將式②減去式①（加減消去法）：\n   $$(2a_1 + 5d) - (2a_1 + d) = 2600 - 1800$$\n   $$4d = 800 \\implies d = 200 \\text{（元）}$$\n4. 將 d ＝ 200 代回式①求解 a₁：\n   $$2a_1 + 200 = 1800 \\implies 2a_1 = 1600 \\implies a_1 = 800 \\text{（元）}$$\n\n---\n\n#### 第三部：計算最後一期（第 4 期）並驗算總額\n- 最後一期（第 4 期）金額：\n  $$a_4 = a_1 + 3d = 800 + 3 \\times 200 = 800 + 600 = 1400 \\text{（元）}$$\n- **驗算總金額**：\n  4 期金額分別為 800、1000、1200、1400 元。\n  $$800 + 1000 + 1200 + 1400 = 4400 \\text{（元）}$$\n  與玩具原價 4400 元完全吻合！\n\n故第一期付 800 元，最後一期付 1400 元，正確答案選 **(A)**。",
    "diagramUrl": ""
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v420
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v419';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v420';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q418 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    new_entry = "  " + json.dumps(q418, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    replacement = target + new_entry
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q418 to js/data.js and upgraded to v420.")

if __name__ == '__main__':
    main()
