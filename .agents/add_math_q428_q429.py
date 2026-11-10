import json
import re
import subprocess

# Load questions data
q428 = {
    "id": "q_math_geo_circle_inscribed_rotate_bad_60_428",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／圓周角與所對圓弧度數／全等旋轉變換與等弦對等弧／圓周角求角度",
    "uploadDate": "2026-11-10",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：弦 AE ＝ AB 必得等弧（100°）！由整圓 360° 扣除兩弧得弧 BE，再由圓周角為弧之一半（80°）扣除 ∠EAD（20°）即得正解。",
    "stem": "如附圖，$\\triangle ABC$ 為圓內接三角形，其中 $\\angle BAC = 20^\\circ$，$\\angle B = 30^\\circ$。若將 $\\triangle ABC$ 旋轉至 $\\triangle ADE$，則 $\\angle BAD$ 為多少度？\n\n○ (A) 50 度\n○ (B) 60 度\n○ (C) 70 度\n○ (D) 80 度",
    "answer": "(B) 60 度",
    "explanation": "1. 弧 BC ＝ 2∠A ＝ 40°，弧 AC ＝ 2∠B ＝ 60° ⟹ 弧 AB ＝ 40° ＋ 60° ＝ 100°。\n2. 旋轉後弦 AE ＝ AB ⟹ 弧 AE ＝ 100°，得弧 BE ＝ 360° － 200° ＝ 160°。\n3. 圓周角 ∠BAE ＝ 160° ÷ 2 ＝ 80°。故 ∠BAD ＝ ∠BAE － ∠EAD ＝ 80° － 20° ＝ 60°。選 (B)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_inscribed_rotate_bad_60_428.png"
}

q429 = {
    "id": "q_math_geo_circle_semicircle_fold_chord_bac_18_429",
    "examPeriod": "一段",
    "subject": "數學",
    "errorReason": "觀念不懂",
    "concept": "國中幾何／圓形幾何性質／半圓弧度 180°／沿弦對摺對稱圓弧／共線角同角對應圓周角與所對弧相等",
    "uploadDate": "2026-11-10",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 易錯筆記：A、D、B 共線使 ∠BAC 與 ∠CAD 為同一角！兩等圓中同圓周角所對弧相等，故弧 BC ＝ 弧 CD ＝ k，再用半圓 180° 即可秒殺。",
    "stem": "如附圖，線段 $\\overline{AB}$ 為半圓 $O$ 的直徑，$C$ 點在圓 $O$ 上，將 $\\widehat{AC}$ 沿 $\\overline{AC}$ 對摺後，與 $\\overline{AB}$ 交於 $D$ 點。已知 $\\widehat{AD} : \\widehat{CD} = 3 : 1$，則 $\\angle BAC$ 為多少度？\n\n○ (A) 18 度\n○ (B) 24 度\n○ (C) 30 度\n○ (D) 36 度",
    "answer": "(A) 18 度",
    "explanation": "1. 設翻摺弧 CD ＝ k°、AD ＝ 3k°，則弧 AC ＝ 3k° ＋ k° ＝ 4k°。\n2. A、D、B 共線 ⟹ ∠BAC 與 ∠CAD 為同角。因圓周角等於所對弧之一半，得弧 BC ＝ 弧 CD ＝ k°。\n3. 直徑半圓弧 ＝ 4k° ＋ k° ＝ 5k° ＝ 180° ⟹ k ＝ 36°。\n4. 故圓周角 ∠BAC ＝ 36° ÷ 2 ＝ 18°。選 (A)。",
    "diagramUrl": "assets/questions/q_math_geo_circle_semicircle_fold_chord_bac_18_429.png"
}

with open('js/data.js', 'r', encoding='utf-8') as f:
    data_content = f.read()

# Update STORAGE_KEY
data_content = re.sub(
    r"const STORAGE_KEY\s*=\s*['\"]miley_wrong_questions_v\d+['\"];",
    "const STORAGE_KEY = 'miley_wrong_questions_v430';",
    data_content
)

# Convert Q429 and Q428 to JS formatted string
q429_json = json.dumps(q429, ensure_ascii=False, indent=2)
q428_json = json.dumps(q428, ensure_ascii=False, indent=2)

# Indent by 2 spaces
q429_str = '\n'.join('  ' + line for line in q429_json.split('\n'))
q428_str = '\n'.join('  ' + line for line in q428_json.split('\n'))

new_questions_str = f"  {q429_str.strip()},\n  {q428_str.strip()},"

# Insert into INITIAL_SEED_DATA = [\n
data_content = re.sub(
    r"(const INITIAL_SEED_DATA\s*=\s*\[\s*\n)",
    lambda m: m.group(1) + new_questions_str + "\n",
    data_content,
    count=1
)

with open('js/data.js', 'w', encoding='utf-8') as f:
    f.write(data_content)

print("Updated js/data.js successfully!")

# Update index.html
with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

html = re.sub(r"js/data\.js\?v=\d+", "js/data.js?v=430", html)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)
print("Updated index.html successfully!")

# Update sw.js
with open('sw.js', 'r', encoding='utf-8') as f:
    sw = f.read()

sw = re.sub(r"miley-pwa-cache-v[\d\.]+", "miley-pwa-cache-v4.03", sw)
with open('sw.js', 'w', encoding='utf-8') as f:
    f.write(sw)
print("Updated sw.js successfully!")
