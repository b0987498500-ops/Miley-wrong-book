import json
import re

q430 = {
    "id": "q_soc_civ_president_impeachment_grand_justice_trial_430",
    "examPeriod": "一段",
    "subject": "社會",
    "errorReason": "觀念不懂",
    "concept": "國中公民／中央政府職權／總統與副總統之彈劾與罷免／立法院提案與憲法法庭大法官審理／公投複決與罷免之區辨",
    "uploadDate": "2026-11-11",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記（彈劾 vs 罷免口訣）：\n• 彈劾（違法失職）＝ 立法院提案 ＋「大法官審理」（憲法法庭判決）\n• 罷免（政治無能）＝ 立法院提案 ＋「公民投票複決」\n★ 陷阱警示：監察院「絕對不能」彈劾正副總統！",
    "stem": "根據我國《憲法》及增修條文的相關規定，若要對總統、副總統進行彈劾，必須先由立法院提案通過後，再經何種程序才可完成？〔102.試辦會考〕\n\n○ (A) 大法官審理\n○ (B) 監察院表決\n○ (C) 公民投票複決\n○ (D) 最高法院判決",
    "answer": "(A) 大法官審理",
    "explanation": "1. 正副總統彈劾程序：由「立法院」提案（全體立法委員 1/2 以上提議、2/3 以上決議通過），聲請「司法院大法官」組成憲法法庭審理，經判決成立即解職。故選 (A)。\n2. 選項辨析：(B) 監察院僅能彈劾一般公務員與文武百官，不得彈劾正副總統；(C)「公民投票複決」是用於「正副總統罷免案」及「立法院提出的憲法修正案」；(D) 最高法院職司一般民刑事終審，無權審理彈劾案。",
    "diagramUrl": ""
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v431';",
    data_content
)

# Convert Q430 to formatted JS string
q430_json = json.dumps(q430, ensure_ascii=False, indent=2)
q430_str = '\n'.join('  ' + line for line in q430_json.split('\n'))

new_question_str = f"  {q430_str.strip()},"

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

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=431", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.04", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")
