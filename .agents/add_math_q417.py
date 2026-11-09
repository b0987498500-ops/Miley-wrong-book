# -*- coding: utf-8 -*-
import json

q417 = {
    "id": "q_math_sequence_linear_rule_am_3m_plus_1_417",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "國中數學／數列與級數／等差數列規律性／首項與公差判讀／通式一般項 a_n = 3n + 1",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【等差數列通式 aₙ ＝ a₁ ＋ (n－1)d —— 小心漏減 1 或誤設為 3m！】\n1. **常見陷阱一：直覺寫 3m**：\n   看到公差是 3 就猜 3m，但若代入 m ＝ 1，會得到 3 × 1 ＝ 3，與題幹首項 4 不符！必須加上常數項修正，即 3m ＋ 1。\n2. **常見陷阱二：公差乘項數忘記減 1**：\n   若誤用公式 aₙ ＝ a₁ ＋ n × d，會算出 4 ＋ 3m，代入 m ＝ 1 會算出 7（跑到第二項去了）。\n3. **秒殺驗算絕招（代入前兩項檢查）**：\n   得出通式 3m ＋ 1 後，快速代入 m ＝ 1 得 4、代入 m ＝ 2 得 7，與表格完全吻合，即可 100% 放心作答！",
    "stem": "下表中的數列隱含某種規律，觀察數列間的關係，完成下表。\n\n| 項數 (n) | 1 | 2 | 3 | 4 | 5 | 6 | … | 20 | … | m |\n| :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n| 數列值 (aₙ) | 4 | 7 | 10 | ① | 16 | 19 | … | ② | … | ③ |\n\n試問表中代號 ①、②、③ 對應的值，下列何者完全正確？\n\n○ (A) ①＝13，②＝61，③＝3m＋1\n○ (B) ①＝13，②＝60，③＝3m\n○ (C) ①＝12，②＝61，③＝4m－1\n○ (D) ①＝14，②＝64，③＝3m＋2",
    "answer": "(A) ①＝13，②＝61，③＝3m＋1",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：觀察相鄰項差值，確認等差規律\n- 觀察表格中已知的各項數值：\n  - 第 1 項 a₁ ＝ 4\n  - 第 2 項 a₂ ＝ 7 ＝ 4 ＋ 3\n  - 第 3 項 a₃ ＝ 10 ＝ 7 ＋ 3\n  - 第 5 項 a₅ ＝ 16\n  - 第 6 項 a₆ ＝ 19 ＝ 16 ＋ 3\n- 後項減前項之差為固定常數：7 － 4 ＝ 10 － 7 ＝ 19 － 16 ＝ 3。\n- 確認此數列為**首項 a₁ ＝ 4、公差 d ＝ 3 的等差數列**。\n\n---\n\n#### 第二部：推導第 n 項（或第 m 項）之通式一般項\n- 根據等差數列通式公式：\n  $$a_n = a_1 + (n - 1) \\times d$$\n- 代入首項 a₁ ＝ 4 與公差 d ＝ 3：\n  $$a_n = 4 + (n - 1) \\times 3 = 4 + 3n - 3 = 3n + 1$$\n- 亦可直接以線性規律觀察：\n  - 第 1 項：1 × 3 ＋ 1 ＝ 4\n  - 第 2 項：2 × 3 ＋ 1 ＝ 7\n  - 第 3 項：3 × 3 ＋ 1 ＝ 10\n  - 規律為：**「項數 × 3 ＋ 1」**。\n\n---\n\n#### 第三部：逐一計算空格 ①、②、③ 之值\n- **求 ① 之值**（第 4 項 a₄）：\n  $$a_4 = 4 \\times 3 + 1 = 12 + 1 = 13$$（或由 a₃ ＋ 3 ＝ 10 ＋ 3 ＝ 13）\n- **求 ② 之值**（第 20 項 a₂₀）：\n  $$a_{20} = 20 \\times 3 + 1 = 60 + 1 = 61$$\n- **求 ③ 之值**（第 m 項 aₘ，以 m 表示）：\n  $$a_m = m \\times 3 + 1 = 3m + 1$$\n\n故 ①＝13，②＝61，③＝3m＋1，正確答案選 **(A)**。",
    "diagramUrl": "assets/questions/q_math_sequence_linear_rule_am_3m_plus_1_417.png"
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v419
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v418';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v419';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q417 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    new_entry = "  " + json.dumps(q417, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    replacement = target + new_entry
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q417 to js/data.js and upgraded to v419.")

if __name__ == '__main__':
    main()
