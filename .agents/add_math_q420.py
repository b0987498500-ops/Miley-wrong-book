# -*- coding: utf-8 -*-
import json

q420 = {
    "id": "q_math_geometric_sequence_first_term_plus_minus_one_420",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "國中數學／數列與級數／等比數列一般項公式／公比偶數次方正負雙解討論／首項求值 a₁ ＝ ±1",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【等比公比平方開根號 —— 必加「正負號（±）」！】\n1. **最大失分陷阱（漏掉負公比）**：\n   - 看到 r² ＝ 4，很多同學反射性只寫 r ＝ 2，因而算出首項只有 1（誤選 B），白白失分！\n   - 當公比 r ＝ －2 時（數列為：－1，2，－4，8，－16，32），第 4 項仍為 8，第 6 項亦為 32，完全符合題幹！\n2. **破題黃金口訣**：\n   - 「兩項間隔偶數項，比值 r² 開根號必有正負雙解！」\n   - 奇數項次符號由首項決定，公比為負時偶數次方仍為正，計算時切勿遺漏負根。",
    "stem": "已知一個等比數列的第 4 項為 8，第 6 項為 32，則此數列的首項為何？\n\n○ (A) ± 1\n○ (B) 1\n○ (C) ± 2\n○ (D) 2",
    "answer": "(A) ± 1",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：利用已知兩項求公比平方\n- 根據等比數列一般項公式：\n  $$a_n = a_1 \\times r^{n-1}$$\n- 比較第 6 項與第 4 項之比：\n  $$\\frac{a_6}{a_4} = \\frac{a_1 \\times r^5}{a_1 \\times r^3} = r^2$$\n- 代入已知數值 a₄ ＝ 8、a₆ ＝ 32：\n  $$r^2 = \\frac{32}{8} = 4$$\n\n---\n\n#### 第二部：開根號進行正負討論（關鍵核心：切勿漏負號！）\n- 因 r² ＝ 4，解方程式得公比有兩種可能：\n  $$r = 2 \\quad \\text{或} \\quad r = -2$$\n- ⚠️ **觀念檢驗**：等比數列的公比可以是負數，當公比為負時，數列會呈現正負交替出現；因為第 4 項與第 6 項同為正數（差了兩項），公比正負皆符合條件！\n\n---\n\n#### 第三部：分別代入求首項 a₁\n根據 a₄ ＝ a₁ × r³ ＝ 8 分別求解：\n1. **當 r ＝ 2 時**：\n   $$8 = a_1 \\times 2^3 \\implies 8 = a_1 \\times 8 \\implies a_1 = 1$$\n2. **當 r ＝ －2 時**：\n   $$8 = a_1 \\times (-2)^3 \\implies 8 = a_1 \\times (-8) \\implies a_1 = -1$$\n\n綜合上述，此等比數列的首項為 **± 1**，正確答案選 **(A)**。",
    "diagramUrl": ""
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v422
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v421';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v422';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q420 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    new_entry = "  " + json.dumps(q420, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    replacement = target + new_entry
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q420 to js/data.js and upgraded to v422.")

if __name__ == '__main__':
    main()
