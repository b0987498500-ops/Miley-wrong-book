import json

q336 = {
    "id": "q_eng_either_or_gerund_subject_is_fun_336",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/對等連接詞 Either A or B 就近原則＋動名詞片語作主詞視為單數＋事物當主詞使用 be fun 結構",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【Either A or B 與 fun 的兩大秒殺陷阱！】\n1. **陷阱一：看到 movies 就選 are？**\n   - 主詞核心是「動名詞片語 watching online movies（看電影這件事）」！\n   - 動名詞片語當主詞，不管受詞是單數還是複數，一律視為【單數】！\n2. **陷阱二：看到 fun 就選 has / have？**\n   - 「人」當主詞 ➜ 人 have/has fun（玩得很開心）\n   - 「事物/活動」當主詞 ➜ 事物 is fun（某件事很有趣、很好玩）！\n   - 本題主詞是活動（看漫畫/看電影），必須用 be 動詞 is！",
    "stem": "Either reading comic books or watching online movies ______ a lot of fun.\n\n○ (A) is\n○ (B) are\n○ (C) has\n○ (D) have",
    "answer": "(A) is",
    "diagramUrl": "",
    "solution": "### 💡 核心考點：Either A or B 就近原則、動名詞主詞單數概念與 be fun 句型\n\n1. **【正解 (A) 深度破題分析——三步驟邏輯拆解】**：\n   - **步驟一：Either A or B 的就近原則（Proximity Principle）**：\n     當對等連接詞片語 `Either A or B`（不是 A 就是 B / 兩者之一）作為主詞時，動詞形式由**最靠近動詞的主詞 B** 決定。\n     - 主詞 A：`reading comic books`\n     - 主詞 B：`watching online movies`（靠近動詞）\n   - **步驟二：動名詞片語作主詞一律視為「單數」**：\n     主詞 B 為動名詞片語 `watching online movies`。動名詞的核心是動作本身（看電影這件事），**無論動詞後面所接的受詞名詞是單數還是複數（movies 雖然是複數），動名詞片語作為主詞一律視為「第三人稱單數」**！故動詞必須使用單數形（排除 are 與 have）。\n   - **步驟三：辨析 be fun 與 have fun 的主詞差異**：\n     - **have fun（玩得高興、享樂）**：主詞必須是**「人」**（例如：We had a lot of fun at the party.）。\n     - **be (a lot of) fun（很有趣、很好玩）**：主詞通常為**「事物或活動」**（例如：Playing basketball is fun.）。\n     - 本題主詞為「看漫畫或看線上電影（活動）」，因此必須使用 **be 動詞 is**，表達這項活動「很有樂趣」，故選 **(A)**。\n\n2. **【其餘干擾選項錯誤點逐一破解】**：\n   - **(B) are ❌【視覺陷阱】**：眼睛看到空格前緊鄰的 `movies` 就誤判為複數名詞，忽略了真正的主詞是動名詞 `watching`（看電影這件事為單數）。\n   - **(C) has ❌【混淆 have fun】**：雖然 has 是單數，但 `have fun` 的主詞必須是「有意識的人」，事物活動無法主動擁有樂趣，不可說 `Watching movies has fun`。\n   - **(D) have ❌**：既錯在複數動詞，又錯在主詞為非人事物不可用 have fun。\n\n故本題正確答案為 **(A)**。",
    "errorCount": 1,
    "ebbinghausStage": 1,
    "consecutiveMastered": 0,
    "isArchived": False,
    "nextReviewDate": "2026-11-03",
    "isReviewed": False,
    "reviewStatus": "unreviewed",
    "lastReviewDecision": None,
    "lastReviewedMonday": None,
    "lastReviewedDate": None,
    "reviewedMondays": []
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace STORAGE_KEY
text = text.replace("const STORAGE_KEY = 'miley_wrong_questions_v364';", "const STORAGE_KEY = 'miley_wrong_questions_v365';")

# Insert new question into INITIAL_SEED_DATA
marker = 'const INITIAL_SEED_DATA = [\n'
pos = text.find(marker)
if pos == -1:
    print('Error: marker not found')
    exit(1)

insert_pos = pos + len(marker)

q336_str = '  ' + json.dumps(q336, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'

text = text[:insert_pos] + q336_str + text[insert_pos:]

# Update fallback keys in dataManager.init()
text = text.replace("'miley_wrong_questions_v363'", "'miley_wrong_questions_v364', 'miley_wrong_questions_v363'")

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully added Q336 to data.js!')

