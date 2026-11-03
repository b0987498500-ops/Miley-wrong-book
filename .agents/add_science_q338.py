# -*- coding: utf-8 -*-
import json

q338 = {
    "id": "q_sci_phy_kinetic_energy_definition_338",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化/功與能／動能的定義、功能定理與決定變因（質量與速率）",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【動能三大秒殺特徵！】\n1. **動能本質：因運動而具有的能量**：\n   - 靜止物體受外力作功 ➜ 跑起來具有末速率 ➜ 獲得「動能」！\n2. **決定變因兩大天王**：\n   - **質量 $m$**：動能與質量成正比（同速時，質量愈大動能愈大）。\n   - **末速率 $v$**：動能與速率的【平方】成正比（同質量時，車速 2 倍，動能變 4 倍）！\n3. **常見位能混淆排查**：\n   - 重力位能：取決於「高度位置」與質量（$U = mgh$）。\n   - 彈性位能：取決於彈簧「形變量」與彈性常數（$U = \\frac{1}{2}kx^2$）。",
    "stem": "施力對靜止物體作功，使其產生的運動變化，此數值大小與物體末速率及物體質量均有關。上述所描述的物理量為下列何者？\n\n○ (A) 動能\n○ (B) 重力位能\n○ (C) 彈性位能\n○ (D) 化學能",
    "answer": "(A) 動能",
    "diagramUrl": "",
    "solution": "### 💡 核心考點：動能（Kinetic Energy）的物理定義、功能定理與決定變因\n\n1. **【正解 (A) 深度破題分析——動能的本質與決定因素】**：\n   - **物理定義**：物體因「運動」而具有的能量，稱為**動能（Kinetic Energy，$E_k$）**。\n   - **功能定理（Work-Energy Theorem）**：\n     當外力對一個原為靜止的物體施力作功（$W = F \\times S$）時，外力所作的淨功會轉換為物體的運動動能（$W = \\Delta E_k$），使物體從靜止加速達到末速率 $v$。\n   - **決定動能大小的兩大變因**：\n     1. **質量（$m$）**：當末速率相同時，質量愈大的物體動能愈大，動能與物體質量成**正比**（$E_k \\propto m$）。\n     2. **末速率（$v$）**：當質量相同時，速率愈快的物體動能愈大，動能與末速率的**平方成正比**（$E_k \\propto v^2$）。\n     - 綜合公式為：$$E_k = \\frac{1}{2} m v^2$$\n   - 題幹所述「施力對靜止物體作功，使其產生的運動變化，此數值大小與物體末速率及物體質量均有關」，完全符合**動能**的物理定義，故選 **(A)**。\n\n2. **【其餘選項錯誤點逐一剖析】**：\n   - **(B) 重力位能 ❌**：物體因處於重力場中的「相對高度位置」而儲存的能量（$U = mgh$），取決於質量與垂直高度，與物體當前的運動速度無關。\n   - **(C) 彈性位能 ❌**：彈性物體因發生「形變（伸長或壓縮）」而儲存的能量，取決於彈性體的形變量，而非物體的末速率。\n   - **(D) 化學能 ❌**：儲存於物質化學鍵中的能量（如燃燒、電池反應），與巨觀機械運動的末速率無關。\n\n故本題正確答案為 **(A)**。",
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
text = text.replace("const STORAGE_KEY = 'miley_wrong_questions_v366';", "const STORAGE_KEY = 'miley_wrong_questions_v367';")

# Insert new question into INITIAL_SEED_DATA
marker = 'const INITIAL_SEED_DATA = [\n'
pos = text.find(marker)
if pos == -1:
    print('Error: marker not found')
    exit(1)

insert_pos = pos + len(marker)

q338_str = '  ' + json.dumps(q338, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'

text = text[:insert_pos] + q338_str + text[insert_pos:]

# Update fallback keys in dataManager.init()
text = text.replace("'miley_wrong_questions_v365'", "'miley_wrong_questions_v366', 'miley_wrong_questions_v365'")

with open('/Users/bennychen/pCloud Drive/bennychen/0AI_共用資料夾/07_Miley/麥麥錯題網站/js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully added Q338 to data.js!')
