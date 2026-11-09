# -*- coding: utf-8 -*-
import json

q419 = {
    "id": "q_math_stairs_arithmetic_sequence_jia_yi_meeting_419",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "計算粗心",
    "concept": "國中數學／數列與級數／等差數列應用題／樓梯編號與步數植樹問題／公差為負之等差模型",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【起點階數植樹陷阱 —— 甲在第 21 號階只走了 20 步，切勿誤算為 21 步！】\n1. **最高頻失分陷阱（誤算步數）**：\n   - 甲由 1 號階出發，到達第 21 號階只走了 21 － 1 ＝ 20 步！\n   - 若心急誤以為甲走了 21 步，會算出乙往下走了 21 × 2 ＝ 42 階，得出 100 － 42 ＝ 58 號階（誤選 B），非常可惜！\n2. **等差通式項數對應**：\n   - 起點未出發是第 1 項（0 步），走 1 步是第 2 項，走 20 步對應數列的第 21 項；\n   - 通式 aₙ ＝ a₁ ＋ (n－1)d 中，走 20 步代入的公差倍數正是 (21 － 1) ＝ 20 倍公差！",
    "stem": "樓梯有 100 階，由下而上編號從 1 號編到 100 號。甲由 1 號階往上走，每步走一階；乙由 100 號階往下走，每步走 2 階。假設甲、乙兩人每步所用的時間相同，請問當甲到達第 21 號階時，乙在第幾號階？\n\n○ (A) 60 號階\n○ (B) 58 號階\n○ (C) 62 號階\n○ (D) 40 號階",
    "answer": "(A) 60 號階",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：審題並確定步數（植樹問題起點概念）\n- 甲從第 1 號階出發，每步往上走 1 階。\n- 當甲到達第 21 號階時，甲一共前進了：\n  $$21 - 1 = 20 \\text{ 階}$$\n- 因為甲每步走 1 階，所以甲一共走了：\n  $$20 \\div 1 = 20 \\text{ 步}$$\n- ⚠️ **易錯重點**：甲一開始就在 1 號階上，走到 21 號階只走了 20 步，切勿誤以為走了 21 步！\n\n---\n\n#### 第二部：建立乙的等差運動模型\n- 題目已知甲、乙兩人每步所用的時間相同，因此甲走了 20 步時，乙也同樣走了 20 步。\n- 乙從第 100 號階出發，每步往下走 2 階（公差 d ＝ －2）：\n  - **方法一（直接推算步數）**：\n    乙總共往下走的階數為：\n    $$20 \\text{ 步} \\times 2 \\text{ 階/步} = 40 \\text{ 階}$$\n    乙當前所在階數為：\n    $$100 - 40 = 60 \\text{ 號階}$$\n  - **方法二（等差數列通式）**：\n    將起點視為第 1 項 a₁ ＝ 100，走了 20 步對應第 21 項 a₂₁：\n    $$a_{21} = a_1 + (21 - 1) \\times (-2) = 100 + 20 \\times (-2) = 100 - 40 = 60$$\n\n---\n\n#### 第三部：結論\n當甲到達第 21 號階時，乙恰好在 **60 號階**，正確答案選 **(A)**。",
    "diagramUrl": ""
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v421
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v420';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v421';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q419 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    new_entry = "  " + json.dumps(q419, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    replacement = target + new_entry
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q419 to js/data.js and upgraded to v421.")

if __name__ == '__main__':
    main()
