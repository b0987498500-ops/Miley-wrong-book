import json

q_list = [
    {
        "id": "q_chi_color_words_piao_bi_la_ju_cheng_hui_479",
        "examPeriod": "一段",
        "subject": "國文",
        "errorReason": "觀念不懂",
        "concept": "國文／修辭與詞性／文言顏色詞辨析／「縹」為淺綠色／素 (白)、青 (黑)、丹 (紅) vs 蠟炬成「灰」 (灰燼名詞)",
        "uploadDate": "2026-11-17",
        "mondayDate": "2026-11-16",
        "mondayDates": [
            "2026-11-16"
        ],
        "weekLabel": "2026-11-16 (最新週次)",
        "isGuessedOrUnstable": False,
        "mistakeNote": "💡 易錯筆記：詞性與詞義辨析：(A)「素」是白、(B)「青」是黑、(C)「丹」是紅，皆為顏色詞；(D)「蠟炬成灰」的「灰」是燃燒後的「灰燼」（名詞實物），並非用作形容詞顏色詞！",
        "stem": "「水皆縹碧，千丈見底」句中的「縹」字是指「淺綠色」。下列「 」中的字，何者與顏色無關？\n\n○ (A) 留蚊於「素」帳中\n○ (B) 朝如「青」絲暮成雪\n○ (C) 發妙聲於「丹」脣\n◉ (D) 蠟炬成「灰」淚始乾",
        "answer": "(D) 蠟炬成「灰」淚始乾",
        "explanation": "1. 題幹釋義：「縹」為青白色、淡青綠色，屬於顏色詞。\n2. 選項詞義剖析：\n   - (A) 留蚊於「素」帳中：「素」指白色（沈復《兒時記趣》：白色蚊帳）。\n   - (B) 朝如「青」絲暮成雪：「青」指黑色（李白《將進酒》：黑髮如絲）。\n   - (C) 發妙聲於「丹」脣：「丹」指紅色（曹植《洛神賦》：紅潤嘴脣）。\n   - (D) 蠟炬成「灰」淚始乾：「灰」在此指蠟燭燃燒殆盡後的「灰燼」（名詞實物），並非作為修飾顏色的形容詞。選 (D)。",
        "diagramUrl": ""
    },
    {
        "id": "q_chi_yu_song_yuan_si_shu_zai_zhou_you_hun_ri_dang_wu_480",
        "examPeriod": "一段",
        "subject": "國文",
        "errorReason": "觀念不懂",
        "concept": "國文／文意理解與時間詞／吳均《與宋元思書》「在晝猶昏」時間判定 (白天、白晝正午)／詩詞時間意象對應",
        "uploadDate": "2026-11-17",
        "mondayDate": "2026-11-16",
        "mondayDates": [
            "2026-11-16"
        ],
        "weekLabel": "2026-11-16 (最新週次)",
        "isGuessedOrUnstable": False,
        "mistakeNote": "💡 易錯筆記：切勿被「猶昏」誤導！「在晝猶昏」的客觀時間是「在晝（大白天／正午）」，「猶昏（好像黃昏）」是樹蔭茂密造成的視覺效果。故對應白天正午的 (C)「日當午」，而非傍晚 (A)(D) 或夜晚 (B)！",
        "stem": "吳均《與宋元思書》中「橫柯上蔽，在晝猶昏」所描寫的時刻，與下列何者最接近？\n\n○ (A) 荷笠帶斜陽，青山獨歸遠\n○ (B) 星垂平野闊，月湧大江流\n◉ (C) 鋤禾日當午，汗滴禾下土\n○ (D) 倚杖柴門外，臨風聽暮蟬",
        "answer": "(C) 鋤禾日當午，汗滴禾下土",
        "explanation": "1. 題幹文意：「橫柯上蔽，在晝猶昏」意指橫生的高大樹枝遮蔽天空，即使在「白晝、大白天」（晝），林間也像黃昏一樣昏暗。其所描寫的實際客觀時間為「白晝／正午」。\n2. 選項時間意象剖析：\n   - (A) 荷笠帶「斜陽」：寫夕陽西下的傍晚黃昏。\n   - (B) 「星垂」平野闊，「月湧」大江流：寫群星明月高懸的夜晚、深夜。\n   - (C) 鋤禾「日當午」：寫烈日當空的「正午白晝」，與「在晝」時刻完全相符！\n   - (D) 臨風聽「暮蟬」：寫日暮傍晚時分。選 (C)。",
        "diagramUrl": ""
    }
]

# Build indented json
formatted_items = []
for q in q_list:
    q_str = json.dumps(q, ensure_ascii=False, indent=4)
    formatted_items.append('  ' + q_str.replace('\n', '\n  ') + ',\n')

full_injection = ''.join(formatted_items)

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v472';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v473';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q_list at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + full_injection, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v472')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v473') || localStorage.getItem('miley_wrong_questions_v472')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print(f"Updated js/data.js successfully with {len(q_list)} Chinese questions (Q479, Q480)!")
