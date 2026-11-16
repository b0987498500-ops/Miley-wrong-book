import json

q464 = {
    "id": "q_math_func_def_table_one_to_many_not_func_464",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／函數與其圖形／函數的基本定義／表格對應判別／一對多不是函數",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：牢記函數三大判別金律：1.「多對一」是函數（如 A 選項四個不同的 x 對應同一個 y＝0，是常數函數）。2.「一對多」絕不是函數（如 B 選項中 x＝1 同時對應 y＝－1 與 y＝2）！",
    "stem": "x、y 兩變數的關係如圖（下列四個選項中的對應關係），則何者 y 不是 x 的函數？\n\n○ (A) x：1, 2, 3, 4 分別對應 y：0, 0, 0, 0\n◉ (B) x：1, 2, 3, 1 分別對應 y：－1, 3, 4, 2\n○ (C) x：－1, 0, 1, 2 分別對應 y：－1, 0, 1, 2\n○ (D) x：1, 2, 3, 4 分別對應 y：3, 4, 5, 6",
    "answer": "(B) x：1, 2, 3, 1 分別對應 y：－1, 3, 4, 2",
    "explanation": "1. 函數定義：每一個 x 只能對應「唯一確定」的一個 y（一對一或多對一均為函數，但絕不可一對多）。\n2. (B) 選項中當 x ＝ 1 時，同時對應到 y ＝ －1 與 y ＝ 2 兩個不同的 y 值（一對多），故 y 不是 x 的函數。選 (B)。",
    "diagramUrl": ""
}

q465 = {
    "id": "q_math_func_def_exam_score_seat_number_one_to_many_465",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中數學／函數與其圖形／函數的基本定義／生活實例對應關係判別／分數與座號一對多",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：判斷「y 是否為 x 的函數」關鍵看自變數 x 能否唯一決定 y！例如「學生 (x) 對導師 (y)」是一人一位導師（多對一，是函數）；但「考試分數 (x) 對座號 (y)」可能同分數有多人，是「一對多」（不是函數）。",
    "stem": "下列何種關係，y 不一定是 x 的函數？\n\n○ (A) 平年中，每個月份（x）對應天數（y）\n○ (B) 每個正方形的邊長（x）對應其面積（y）\n○ (C) 本校各班的學生（x）對應其導師（y）\n◉ (D) 本班數學考試的分數（x）對應學生的座號（y）",
    "answer": "(D) 本班數學考試的分數（x）對應學生的座號（y）",
    "explanation": "1. 函數定義要求每一個輸入值 x 只能對應「唯一確定」的一個輸出值 y。\n2. (D) 中同一個考試分數（x）可能有多位同學考取，例如考 80 分的同學不一定只有一人，會出現同一個分數對應多個座號的情形（一對多），故 y 不一定是 x 的函數。選 (D)。",
    "diagramUrl": ""
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v464';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v465';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Format JSON
str464 = '  ' + json.dumps(q464, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'
str465 = '  ' + json.dumps(q465, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'

# Insert q464 then q465 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + str464 + str465, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v464')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v465') || localStorage.getItem('miley_wrong_questions_v464')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully with Q464 and Q465!")

