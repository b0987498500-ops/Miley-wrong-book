import re
import json

q467 = {
    "id": "q_math_geo_circle_inscribed_triangle_chord_om_area_abc_20sqrt5_467",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／弦心距性質（垂直平分弦）／畢氏定理求弦長 BC＝4√5／圓內接三角形面積計算",
    "uploadDate": "2026-11-16",
    "mondayDate": "2026-11-16",
    "mondayDates": [
        "2026-11-16"
    ],
    "weekLabel": "2026-11-16 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：1. 弦心距核心性質：圓心到弦中點連線 OM 必垂直弦 BC（垂徑定理）。2. 連半徑 OB 構造直角 △OBM 算出半弦長 BM＝2√5，切莫忘記弦長 BC＝2BM＝4√5！3. 高 AM ＝ 半徑 OA (6) ＋ 弦心距 OM (4) ＝ 10。",
    "stem": "如圖，△ABC 為圓 O 的內接三角形，M 是 BC 的中點。圓 O 的半徑為 6，OM ＝ 4，求 △ABC 的面積。\n\n○ (A) 10√5\n◉ (B) 20√5\n○ (C) 24√5\n○ (D) 30√5",
    "answer": "(B) 20√5",
    "explanation": "1. 弦心距性質求底邊 BC：OM 為弦 BC 的弦心距，必垂直平分 BC。連半徑 OB ＝ 6，在直角 △OBM 中，由畢氏定理 BM ＝ √(6²－4²) ＝ 2√5 ⟹ 底邊 BC ＝ 2BM ＝ 4√5。\n2. 求高 AM：A、O、M 共線，△ABC 的高 AM ＝ 半徑 OA ＋ OM ＝ 6 ＋ 4 ＝ 10。\n3. 計算面積：△ABC 面積 ＝ 底 × 高 ÷ 2 ＝ 4√5 × 10 ÷ 2 ＝ 20√5。選 (B)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_triangle_chord_om_area_abc_20sqrt5_467.png"
}

q_json_str = json.dumps(q467, ensure_ascii=False, indent=4)
q_indented = '  ' + q_json_str.replace('\n', '\n  ') + ',\n'

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
old_key = "const STORAGE_KEY = 'miley_wrong_questions_v466';"
new_key = "const STORAGE_KEY = 'miley_wrong_questions_v467';"
assert old_key in data_content, "Old STORAGE_KEY not found!"
data_content = data_content.replace(old_key, new_key, 1)

# Insert q467 at top of INITIAL_SEED_DATA
marker = "const INITIAL_SEED_DATA = [\n"
assert marker in data_content, "INITIAL_SEED_DATA marker not found!"
data_content = data_content.replace(marker, marker + q_indented, 1)

# Update init() fallback check
fallback_pattern = "localStorage.getItem('miley_wrong_questions_v466')"
if fallback_pattern in data_content:
    replacement = "localStorage.getItem('miley_wrong_questions_v467') || localStorage.getItem('miley_wrong_questions_v466')"
    data_content = data_content.replace(fallback_pattern, replacement, 1)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully!")
