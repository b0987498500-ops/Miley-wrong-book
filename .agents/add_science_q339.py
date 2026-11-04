# -*- coding: utf-8 -*-
import json

q339 = {
    "id": "q_sci_phy_kinetic_energy_scalar_direction_339",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化/功與能／動能為純量（無方向性，僅取決於質量與速率大小，與運動方向無關）",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【能量永遠沒有方向！別把動能當動量！】\n1. **動能是「純量」（Scalar）**：\n   - 能量只有大小，沒有方向！\n   - 只要【質量相同】＋【速率相同】 ➜ 動能必完全相等（$A = B$）！\n2. **會考天王級陷阱 (D) A + B = 0 避坑秘訣**：\n   - ❌ **誤以為向左向右會抵消？**\n   - ❗ **向量 vs. 純量大對決**：\n     - **速度 / 動量**：是向量（有方向性），向左向右相加可以互相抵消為 0。\n     - **動能**：是純量（無方向性，恆為正值 $E_k \\ge 0$），兩個運動物體的動能相加必大於 0，絕不可能抵消！",
    "stem": "如圖所示，光滑平面上有相同質量 A、B 兩物體，各自以相同速率往不同方向前進，請問兩物體的動能關係為何？\n\n○ (A) A > B\n○ (B) A = B\n○ (C) A < B\n○ (D) A + B = 0",
    "answer": "(B) A = B",
    "diagramUrl": "assets/questions/q_sci_phy_kinetic_energy_scalar_direction_339.png",
    "solution": "### 💡 核心考點：動能為純量（無方向性）、動能公式與向量/純量辨析\n\n1. **【正解 (B) 深度破題分析——動能為純量，僅與質量與速率大小有關】**：\n   - **動能的純量本質**：在物理學中，能量（包括動能、位能、熱能等）皆為**純量（Scalar）**，只有數值「大小」，**沒有「方向性」**。\n   - **動能計算公式**：\n     $$E_k = \\frac{1}{2} m v^2$$\n     其中 $m$ 為質量，$v$ 為運動速率（純量純數值，即速度向量的大小）。\n   - **運動方向的數學平方效應**：即使定義向右為正、向左為負，在代入公式計算時速度經由平方運算：\n     $$(+v)^2 = (-v)^2 = v^2$$\n     平方後方向的正負號必然消失，結果恆為正值。\n   - **題幹條件檢驗**：\n     - 質量相同：$m_A = m_B = m$\n     - 速率相同：$v_A = v_B = v$\n     - 故兩物體的動能：\n       $$E_{kA} = \\frac{1}{2} m v^2 = E_{kB} \\implies A = B$$\n   - 因此兩者的動能完全相等，正確答案為 **(B) A = B**。\n\n2. **【其餘干擾選項錯誤點逐一剖析】**：\n   - **(D) A + B = 0 ❌【超高頻嚴重混淆陷阱！】**：\n     許多同學看到「A 物體向左、B 物體向右，方向相反」，直覺誤選相加為 0。這是因為混淆了**「速度（Velocity）」**或**「動量（Momentum, $p = mv$）」**！速度與動量是具備方向性的**向量**，相反方向相加確實會抵消；但**動能是能量純量**，數值永遠 $\\ge 0$，兩物體的動能總和為 $\\frac{1}{2}mv^2 + \\frac{1}{2}mv^2 = mv^2 > 0$，絕不可能抵消為 0！\n   - **(A) 與 (C) ❌**：在光滑平面上，向左或向右運動對稱無偏向，只要質量與速率相同，動能就完全相等，絕無大小差異。\n\n故本題正確答案為 **(B)**。",
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

with open('/Users/bennychen/pCloud Drive/bennychen/0AI_共用資料夾/07_Miley/麥麥錯題網站/js/data.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Replace STORAGE_KEY
text = text.replace("const STORAGE_KEY = 'miley_wrong_questions_v367';", "const STORAGE_KEY = 'miley_wrong_questions_v368';")

# Insert new question into INITIAL_SEED_DATA
marker = 'const INITIAL_SEED_DATA = [\n'
pos = text.find(marker)
if pos == -1:
    print('Error: marker not found')
    exit(1)

insert_pos = pos + len(marker)

q339_str = '  ' + json.dumps(q339, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'

text = text[:insert_pos] + q339_str + text[insert_pos:]

# Update fallback keys in dataManager.init()
text = text.replace("'miley_wrong_questions_v366'", "'miley_wrong_questions_v367', 'miley_wrong_questions_v366'")

with open('/Users/bennychen/pCloud Drive/bennychen/0AI_共用資料夾/07_Miley/麥麥錯題網站/js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully added Q339 to data.js!')

