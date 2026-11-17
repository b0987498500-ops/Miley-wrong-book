import json

q_list = [
    {
        "id": "q_chi_yu_song_yuan_si_shu_heng_ke_han_shu_echo_481",
        "examPeriod": "一段",
        "subject": "國文",
        "errorReason": "觀念不懂",
        "concept": "國文／篇章結構與前後呼應／吳均《與宋元思書》「橫柯上蔽，在晝猶昏」與「夾岸高山，皆生寒樹」之文意呼應",
        "uploadDate": "2026-11-17",
        "mondayDate": "2026-11-16",
        "mondayDates": [
            "2026-11-16"
        ],
        "weekLabel": "2026-11-16 (最新週次)",
        "isGuessedOrUnstable": False,
        "mistakeNote": "💡 易錯筆記：章法前後呼應：「橫柯上蔽」的「柯」是樹枝，寫樹葉枝幹交錯蔽日；前文「夾岸高山，皆生寒樹」正是寫兩岸山壁茂密長青的樹林，兩者景物因果緊密相扣！",
        "stem": "《與宋元思書》文末作者所描述的「橫柯上蔽，在晝猶昏；疏條交映，有時見日。」與文中哪一句相呼應？\n\n○ (A) 風煙俱淨，天山共色\n○ (B) 從流飄蕩，任意東西\n◉ (C) 夾岸高山，皆生寒樹\n○ (D) 好鳥相鳴，嚶嚶成韻",
        "answer": "(C) 夾岸高山，皆生寒樹",
        "explanation": "1. 題幹釋義：「橫柯上蔽，在晝猶昏；疏條交映，有時見日」描寫富春江兩岸林木茂密、枝枒交錯遮蔽天日的景象。\n2. 前後呼應分析：\n   - 樹木之所以如此茂密，正是呼應前文「夾岸高山，皆生寒樹」中兩岸高山上長滿常綠樹木的描寫。\n   - (A) 寫江天澄澈的開闊全景；(B) 寫乘舟順流飄蕩的閒適心境；(D) 寫林間鳥鳴的清脆聲韻。故與林木遮天直接呼應者為 (C)。選 (C)。",
        "diagramUrl": ""
    },
    {
        "id": "q_chi_epistolary_yu_song_yuan_si_shu_letter_format_482",
        "examPeriod": "一段",
        "subject": "國文",
        "errorReason": "觀念不懂",
        "concept": "國文／應用文／書信格式與平輩稱謂／提稱語 (足下)、祝候語 (敬請惠安)、末啟詞 (弟 吳均 敬啟)",
        "uploadDate": "2026-11-17",
        "mondayDate": "2026-11-16",
        "mondayDates": [
            "2026-11-16"
        ],
        "weekLabel": "2026-11-16 (最新週次)",
        "isGuessedOrUnstable": False,
        "mistakeNote": "💡 易錯筆記：平輩書信三要素口訣：提稱用語用「足下／閣下」；祝候安好用「敬請 惠安／大安／台安」；自稱末啟詞用「敬啟／謹啟／頓首」！切記「如晤／手書」只用於晚輩、「尊前／叩請／叩上」只用於父母長輩。",
        "stem": "根據書信的繕寫格式，如果想為《與宋元思書》（吳均寄給平輩好友宋元思的書信）一文加上書信用語，下列寫法何者完全正確？\n\n○ (A) 提稱語：元思如晤／祝候語：恭請 誨安／自稱與末啟詞：弟 吳均 手書\n◉ (B) 提稱語：元思足下／祝候語：敬請 惠安／自稱與末啟詞：弟 吳均 敬啟\n○ (C) 提稱語：元思知之／祝候語：叩請 福安／自稱與末啟詞：弟 吳均 敬上\n○ (D) 提稱語：元思尊前／祝候語：順頌 時綏／自稱與末啟詞：弟 吳均 叩上",
        "answer": "(B) 提稱語：元思足下／祝候語：敬請 惠安／自稱與末啟詞：弟 吳均 敬啟",
        "explanation": "1. 關係判定：吳均寫信給好友宋元思，為「平輩（朋友）」之間的往來書信。\n2. 選項逐一審查：\n   - (A) 錯誤。「如晤」用於長輩對晚輩；「誨安」用於師長；「手書」用於長輩。\n   - (B) 完全正確！「足下」為平輩提稱語；「敬請 惠安」為平輩祝候語；「弟 吳均 敬啟」為平輩自稱與末啟詞。\n   - (C) 錯誤。「知之」用於晚輩；「叩請 福安」用於祖父母、父母尊長；「敬上」用於長輩。\n   - (D) 錯誤。「尊前」用於父母尊長；「叩上」用於祖父母、父母尊長。選 (B)。",
        "diagramUrl": "assets/questions/q_chi_epistolary_yu_song_yuan_si_shu_letter_format_482.png"
    }
]

formatted_items = []
for q in q_list:
    q_str = json.dumps(q, ensure_ascii=False, indent=4)
    formatted_items.append('  ' + q_str.replace('\n', '\n  ') + ',\n')

full_injection = ''.join(formatted_items)

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v473';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v474';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q_list at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + full_injection, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v473')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v474') || localStorage.getItem('miley_wrong_questions_v473')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print(f"Updated js/data.js successfully with {len(q_list)} Chinese questions (Q481, Q482)!")
