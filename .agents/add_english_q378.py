# -*- coding: utf-8 -*-
import json

question = {
    "id": "q_eng_gram_gerund_subject_jack_o_lantern_378",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/名詞子句結構、動名詞片語 (V-ing) 當子句主詞視為單數與主詞動詞一致性",
    "uploadDate": "2026-11-06",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【動名詞當主詞「單複數判斷」三大黃金鐵則！】\n1. **動名詞片語當主詞，一律視為「單數」**！\n   - **Making a jack-o'-lantern is fun and easy.**（製作南瓜燈這件「事」，動名詞 making 當主詞，動詞必用單數 **is**！）\n   - 千萬不要被後面的名詞牽著鼻子走，哪怕後面是複數名詞，主詞依然是動名詞：\n     - 例如：Making cookies **is** fun.（烤餅乾這件事是單數，即使 cookies 是複數，動詞依然用 **is**！）\n2. **名詞子句結構剖析**：\n   - `You will find that [子句主詞 + 子句動詞 + ...]`\n   - that 裡面是一個完整的子句，需要有「主詞（making a jack-o'-lantern）＋ 動詞（is）」。\n3. **排除常錯干擾項**：\n   - (A) are：誤把主詞當複數；\n   - (C) be：原形動詞不可直接當限定子句的一般動詞；\n   - (D) have been：複數現在完成式，單複數與時態皆錯！",
    "stem": "You will find that making a jack-o'-lantern ________ fun and easy.\n\n○ (A) are\n○ (B) is\n○ (C) be\n○ (D) have been",
    "answer": "(B) is",
    "diagramUrl": "",
    "solution": "### 💡 核心考點：that 引導的名詞子句結構、動名詞（Gerund, V-ing）作主詞時視為第三人稱單數之文法一致性原則\n\n1. **【正解 (B) 深度破題分析】**：\n   - **分析句子層次與名詞子句結構**：\n     - 主要子句：`You will find [that 子句]`（你會發現...）；\n     - 連接詞 `that` 後面引導一個完整的**名詞子句**充當及物動詞 `find` 的受詞；\n     - 子句內部結構：\n       - **主詞（Subject）**：動名詞片語 **`making a jack-o'-lantern`**（製作萬聖節南瓜燈籠這件事）；\n       - **主詞補語（Subject Complement）**：`fun and easy`（既好玩又簡單，形容詞）。\n   - **動名詞當主詞的單複數規則**：\n     - 英文文法中，單一**動名詞（V-ing）或不定詞（to V）片語**充當句子或子句的主詞時，表示「一件事情／一種行為」，在文法上**一律視為「第三人稱單數」**！\n     - 因此，子句中搭配的 be 動詞必須使用現在式單數形態 **`is`**。\n   - 故正確答案選 **(B)**。\n\n2. **【其他錯誤選項深度剖析】**：\n   - **(A) are**：\n     - 複數動詞。部分同學常誤以為主詞是後方的名詞而誤選複數，但動名詞當主詞為單數，不可使用 `are`。\n   - **(C) be**：\n     - 原形動詞。that 子句為一般陳述句，必須有具備時態的限定動詞（is），不可直接填入原形 `be`。\n   - **(D) have been**：\n     - 複數助動詞與時態矛盾。主詞為單數（若用完成式應為 has been），且本句陳述客觀事實與體驗，直接使用現在簡單式 `is` 即可。\n\n故本題正確答案為 **(B)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": False,
    "nextReviewDate": "2026-11-06",
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
content = content.replace("const STORAGE_KEY = 'miley_wrong_questions_v396';", "const STORAGE_KEY = 'miley_wrong_questions_v397';")

# 插入到 INITIAL_SEED_DATA 的開頭
target_str = "const INITIAL_SEED_DATA = [\n"
q_json = json.dumps(question, ensure_ascii=False, indent=2)
q_indented = "\n".join("  " + line for line in q_json.split("\n"))

insertion = target_str + q_indented + ",\n"
new_content = content.replace(target_str, insertion, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully added Q378 to js/data.js and upgraded to v397.")
