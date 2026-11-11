import json
import re

questions = [
    {
        "id": "q_soc_hist_talas_battle_papermaking_transmission_west_441",
        "examPeriod": "一段",
        "subject": "社會",
        "errorReason": "觀念不懂",
        "concept": "國中歷史／唐代對外關係與文化交流／怛羅斯之役（西元751年高仙芝敗於大食）／中國四大發明之造紙術西傳",
        "uploadDate": "2026-11-11",
        "mondayDate": "2026-11-09",
        "mondayDates": ["2026-11-09"],
        "weekLabel": "2026-11-09 (最新週次)",
        "isGuessedOrUnstable": False,
        "mistakeNote": "💡 易錯筆記：怛羅斯之役（751年）被俘工匠西傳的是「造紙術」！火藥與指南針是宋元時期西傳。",
        "stem": "八世紀時，唐朝曾因為在西亞地區的勢力衝突，在怛羅斯與大食帝國發生戰爭。唐軍在這場戰爭中落敗，多名軍人被俘，其中也有熟習某項技術的工匠。阿拉伯人將這些工匠移往撒馬爾罕工作，也輾轉將此技術傳入西方。上述的技術應是指下列何者？\n\n○ (A) 數字系統\n○ (B) 造紙術\n○ (C) 火藥\n○ (D) 印刷術",
        "answer": "(B) 造紙術",
        "explanation": "西元 751 年唐朝與大食（阿拉伯帝國）爆發怛羅斯之役，唐軍戰俘中的工匠將「造紙術」傳至撒馬爾罕並西傳歐洲。故選(B)。",
        "diagramUrl": ""
    },
    {
        "id": "q_soc_hist_islamic_expansion_arabian_peninsula_111_440",
        "examPeriod": "一段",
        "subject": "社會",
        "errorReason": "觀念不懂",
        "concept": "國中歷史／伊斯蘭教興起與阿拉伯帝國擴張／穆罕默德於阿拉伯半島創立／地中海周邊地理位置對照",
        "uploadDate": "2026-11-11",
        "mondayDate": "2026-11-09",
        "mondayDates": ["2026-11-09"],
        "weekLabel": "2026-11-09 (最新週次)",
        "isGuessedOrUnstable": False,
        "mistakeNote": "💡 易錯筆記：伊斯蘭教崛起於七世紀「阿拉伯半島（丙）」！甲為義大利、乙為小亞細亞、丁為尼羅河流域。",
        "stem": "「西元七世紀，伊斯蘭勢力在此地崛起，之後不斷的向外擴張，使得曾受波斯與羅馬文化影響的地區，在習俗、哲學、法律、政治體系上，開始與伊斯蘭文化相互揉合。」上下文中的「此地」，最可能是右圖中甲、乙、丙、丁何地？【111補考】\n\n○ (A) 甲\n○ (B) 乙\n○ (C) 丙\n○ (D) 丁",
        "answer": "(C) 丙",
        "explanation": "七世紀穆罕默德在阿拉伯半島（丙區）創立伊斯蘭教，死後陸續向西亞、北非、伊比利半島擴張。故選(C)。（甲為義大利半島、乙為小亞細亞、丁為埃及）",
        "diagramUrl": "assets/questions/q_soc_hist_islamic_expansion_arabian_peninsula_111_440.png"
    },
    {
        "id": "q_soc_hist_arabic_numerals_origin_india_439",
        "examPeriod": "一段",
        "subject": "社會",
        "errorReason": "觀念不懂",
        "concept": "國中歷史／世界古代文明成就／印度數字系統（包含零的概念）／阿拉伯帝國貿易與文化傳播西傳",
        "uploadDate": "2026-11-11",
        "mondayDate": "2026-11-09",
        "mondayDates": ["2026-11-09"],
        "weekLabel": "2026-11-09 (最新週次)",
        "isGuessedOrUnstable": False,
        "mistakeNote": "💡 易錯筆記：「阿拉伯數字」是「印度人」發明的！只是經由阿拉伯商旅傳入西方，切勿望文生義誤選阿拉伯！",
        "stem": "現在通行世界的阿拉伯數字始創於□□。由於八世紀以後，阿拉伯人建立起暢通的國際貿易路線，也學習各地不同的科學知識與技術，並向外流傳。而這套來自□□的數字系統便是透過阿拉伯人的傳播，流傳至西方。請問：□□應填入下列何者最適當？\n\n○ (A) 中國\n○ (B) 埃及\n○ (C) 蘇美\n○ (D) 印度",
        "answer": "(D) 印度",
        "explanation": "阿拉伯數字起源於印度（發明 1～9 與零的概念），經由阿拉伯人傳播至歐洲，故稱阿拉伯數字。選(D)。",
        "diagramUrl": ""
    },
    {
        "id": "q_soc_hist_christianity_first_schism_eleventh_century_438",
        "examPeriod": "一段",
        "subject": "社會",
        "errorReason": "觀念不懂",
        "concept": "國中歷史／中古歐洲基督教世界／教會第一次大分裂／1054年東西教會大分裂（羅馬公教 vs 希臘正教）",
        "uploadDate": "2026-11-11",
        "mondayDate": "2026-11-09",
        "mondayDates": ["2026-11-09"],
        "weekLabel": "2026-11-09 (最新週次)",
        "isGuessedOrUnstable": False,
        "mistakeNote": "💡 易錯筆記：基督教「第一次大分裂」發生在 1054 年（11 世紀），分裂為西方的羅馬公教與東方的希臘正教！",
        "stem": "基督教創立後，逐漸形成以羅馬主教為領袖的制度，是為教宗。但此後歐洲東部的高層教會人員，因與羅馬爭奪權力及對教義的解釋發生衝突，釀成了「第一次大分裂」。「第一次大分裂」發生於何時？\n\n○ (A) 五世紀\n○ (B) 十一世紀\n○ (C) 十三世紀\n○ (D) 十六世紀",
        "answer": "(B) 十一世紀",
        "explanation": "1054年（十一世紀），羅馬教宗與君士坦丁堡大主教因爭權與教義解釋衝突而分道揚鑣，形成羅馬公教與希臘正教。故選(B)。",
        "diagramUrl": ""
    },
    {
        "id": "q_soc_hist_buddhism_christianity_reform_old_religion_437",
        "examPeriod": "一段",
        "subject": "社會",
        "errorReason": "觀念不懂",
        "concept": "國中歷史／世界三大宗教發展／佛教改革婆羅門教／基督教改革猶太教／宗教教義改革之共同特徵",
        "uploadDate": "2026-11-11",
        "mondayDate": "2026-11-09",
        "mondayDates": ["2026-11-09"],
        "weekLabel": "2026-11-09 (最新週次)",
        "isGuessedOrUnstable": False,
        "mistakeNote": "💡 易錯筆記：佛教（改革婆羅門教主張眾生平等）與基督教（改革猶太教主張神愛世人）皆屬「對舊宗教提出改革」！",
        "stem": "佛教與基督教都是當今流傳最廣的重要宗教。就其形成的背景而言，兩者具有何種共同特徵？\n\n○ (A) 都追求超脫因果報應與輪迴\n○ (B) 兩個宗教皆具有一神論思想\n○ (C) 兩者皆以《古蘭經》為經典\n○ (D) 都對舊有宗教教義提出改革",
        "answer": "(D) 都對舊有宗教教義提出改革",
        "explanation": "兩者皆改革舊宗教：佛教改革婆羅門教種姓與階級制度；基督教改革猶太教狹隘律法。故選(D)。(A)基督教追求天堂永生；(B)僅基督教為一神信仰；(C)《古蘭經》為伊斯蘭教經典。",
        "diagramUrl": ""
    }
]

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v442';",
    data_content
)

# Format questions into JS string
formatted_list = []
for q in questions:
    q_json = json.dumps(q, ensure_ascii=False, indent=2)
    q_str = '\n'.join('  ' + line for line in q_json.split('\n'))
    formatted_list.append(q_str.strip())

new_questions_str = ',\n  '.join(formatted_list) + ','

# Insert into INITIAL_SEED_DATA = [\n
data_content = re.sub(
    r"(const INITIAL_SEED_DATA\s*=\s*\[\s*\n)",
    lambda m: m.group(1) + "  " + new_questions_str + "\n",
    data_content,
    count=1
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully!")

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=442", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.10", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")
