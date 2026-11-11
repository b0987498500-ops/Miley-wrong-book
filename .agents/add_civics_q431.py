import json
import re

q431 = {
    "id": "q_soc_civ_constitutional_amendment_procedure_diagram_431",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／憲法與修憲程序／憲法增修條文修憲高門檻／立法院提案通過與公告半年／公民投票複決門檻",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記（我國修憲三部曲口訣）：\n• 立院提案（高門檻 3/4 通過） ➔ 公告半年 ➔ 公投複決（有效同意票過選舉人總額半數）\n★ 陷阱警示：國民大會早已廢除，修憲複決權交由全體「公民投票」，絕非交給司法院大法官！",
    "stem": "我國修憲流程，如附圖所示。請問甲、乙兩處應該是？\n\n○ (A) 甲：司法院大法官、乙：立法院\n○ (B) 甲：立法院、乙：司法院大法官\n○ (C) 甲：立法院、乙：公民投票\n○ (D) 甲：司法院大法官、乙：公民投票",
    "answer": "(C) 甲：立法院、乙：公民投票",
    "explanation": "1. 我國現行《憲法增修條文》第 12 條規定之修憲程序：\n   • 提案通過（甲）：由立法院立法委員提案並經立法院表決通過（全體 1/4 提議、3/4 出席、出席 3/4 決議）。故甲為「立法院」。\n   • 公告半年：立法院通過憲法修正案後，公告半年。\n   • 投票複決（乙）：公告期滿 3 個月內，交由中華民國自由地區選舉人投票複決。故乙為「公民投票」。選 (C)。\n2. 選項排雷：司法院大法官職司「解釋憲法」與「審理違憲政黨解散、正副總統彈劾」，並無修憲審理或複決權。",
    "diagramUrl": "assets/questions/q_soc_civ_constitutional_amendment_procedure_diagram_431.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v432';",
    data_content
)

# Convert Q431 to formatted JS string
q431_json = json.dumps(q431, ensure_ascii=False, indent=2)
q431_str = '\n'.join('  ' + line for line in q431_json.split('\n'))

new_question_str = f"  {q431_str.strip()},"

# Insert into INITIAL_SEED_DATA = [\n
data_content = re.sub(
    r"(const INITIAL_SEED_DATA\s*=\s*\[\s*\n)",
    lambda m: m.group(1) + new_question_str + "\n",
    data_content,
    count=1
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully!")

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=432", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.05", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")
