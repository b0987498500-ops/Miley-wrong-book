import json

q337 = {
    "id": "q_eng_correlative_not_only_but_also_337",
    "examPeriod": "一段",
    "subject": "英文",
    "errorReason": "觀念不懂",
    "concept": "文法/對等關聯連接詞 not only A but (also) B（also 可省略，但連接詞 but 絕不可省略）",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【not only... but (also)... 超大盲點：誰能省？誰不能省？】\n1. **必備連接詞是 but，副詞 also 可省略**：\n   - 正確公式：not only A **but (also)** B\n   - ✔ **but 可以單獨存在**（省略 also）：not only save money **but** save resources...\n   - ❌ **also 不能單獨存在**（不可省略 but）：not only save money also save...（嚴重文法錯誤！）\n2. **會考常見陷阱 (B) also 避坑秘訣**：\n   - 口訣死背「not only... but also...」，看到選項有 also 就興奮選下去？\n   - 記住：**also 是副詞，沒有連接詞的功能！** 句子要連接兩個動詞片語，**一定要有對等連接詞 but**！",
    "stem": "These green buildings can not only save money ______ save the natural (自然的) resources on Earth.\n\n○ (A) but\n○ (B) also\n○ (C) and\n○ (D) to",
    "answer": "(A) but",
    "diagramUrl": "",
    "solution": "### 💡 核心考點：對等關聯連接詞 not only A but (also) B 之省略規則與詞性功能\n\n1. **【正解 (A) 深度破題分析——but 是不可或缺的對等連接詞】**：\n   - **句型結構剖析**：本題句型為國中英文核心關聯連接詞：\n     $$\\text{not only A but (also) B} \\quad \\text{（不僅 A 而且 B）}$$\n   - **平行對稱**：A 與 B 必須詞性平行對等。句中 A 為原形動詞片語 `save money`，B 亦為原形動詞片語 `save the natural resources`，兩者皆置於助動詞 `can` 之後。\n   - **省略規則（關鍵考點！）**：\n     - 在 `not only A but (also) B` 結構中，**`but` 是「對等連接詞」**，負責串接 A 與 B 兩個片語，**絕對不能省略**！\n     - 而 **`also` 是「副詞」**，扮演修飾與加強語氣的角色，在現代英語中**經常被省略**。\n     - 因此：`not only A but B` 是完全合乎文法且極為常見的標準結構！\n   - 空格處需要一個連接詞來連接前後兩個動詞片語，因此必須填入 **(A) but**。\n\n2. **【其餘干擾選項錯誤點逐一破解】**：\n   - **(B) also ❌【超高頻盲點！】**：許多同學只背誦了口訣「not only... but also...」，看到空格沒有 but 也沒有 also，看到選項 (B) 有 also 就順手選了。但若填入 also，句子會變成 `can not only save money also save...`，**缺少了對等連接詞 but**，兩個動詞片語無法合法連接（run-on 結構），故絕對錯誤！\n   - **(C) and ❌**：英文沒有 `not only... and...` 的搭配用法。若要使用 and，前面的 not only 就必須拿掉，改為單純的 `save money and save...`。\n   - **(D) to ❌**：助動詞 can 後面直接接原形動詞，無需介系詞或不定詞 to。\n\n故本題正確答案為 **(A)**。",
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
text = text.replace("const STORAGE_KEY = 'miley_wrong_questions_v365';", "const STORAGE_KEY = 'miley_wrong_questions_v366';")

# Insert new question into INITIAL_SEED_DATA
marker = 'const INITIAL_SEED_DATA = [\n'
pos = text.find(marker)
if pos == -1:
    print('Error: marker not found')
    exit(1)

insert_pos = pos + len(marker)

q337_str = '  ' + json.dumps(q337, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'

text = text[:insert_pos] + q337_str + text[insert_pos:]

# Update fallback keys in dataManager.init()
text = text.replace("'miley_wrong_questions_v364'", "'miley_wrong_questions_v365', 'miley_wrong_questions_v364'")

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully added Q337 to data.js!')

