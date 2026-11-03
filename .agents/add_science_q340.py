# -*- coding: utf-8 -*-
import json

q340 = {
    "id": "q_sci_phy_work_energy_theorem_luggage_340",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化/功與能／功能定理（合力作功等於動能增加量：W合力 = ΔEk）與摩擦力作負功",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【功能定理秒殺密碼：求動能增加量，直接算合力作功！】\n1. **核心金律：$W_{\\text{合力}} = \\Delta E_k$**：\n   - 物體動能增加多少？直接等於「所有外力的合力所作的功」！\n   - 推力 5 N，摩擦阻力 4 N ➜ 合力 $F_{\\text{合}} = 5 - 4 = 1\\text{ N}$。\n   - 合力作功 $W_{\\text{合力}} = 1\\text{ N} \\times 10\\text{ m} = 10\\text{ J}$ ➜ 動能增加 $10\\text{ J}$，三秒秒殺！\n2. **避開題幹多餘數據陷阱（別被 20 kg 帶偏）**：\n   - 質量 20 kg 不需要代入 $E_k = \\frac{1}{2}mv^2$ 苦算加速度與末速，直接功能定理最快！\n3. **常見混淆選項排查**：\n   - ❌ 誤算推力作功：$5 \\times 10 = 50\\text{ J}$。\n   - ❌ 誤算摩擦力作功：$4 \\times 10 = 40\\text{ J}$（轉化為熱能摩擦耗損）。",
    "stem": "小雄以 5 N 的水平力推質量為 20 kg 的行李箱，行李箱水平移動了 10 m，並具有動能，假設行李箱原來靜止，且在移動時它與水平地面間的摩擦力為 4 N，則在小雄推動行李箱 10 m 之後，行李箱的動能增加了多少？〔95.基測 II〕\n\n○ (A) 10 J\n○ (B) 20 J\n○ (C) 30 J\n○ (D) 40 J",
    "answer": "(A) 10 J",
    "diagramUrl": "",
    "solution": "### 💡 核心考點：功能定理（Work-Energy Theorem）、外力與摩擦力合力作功計算\n\n1. **【正解 (A) 深度破題分析——法一：功能定理（最快秒殺法）】**：\n   - **功能定理核心定律**：\n     「外力對物體所作的**淨功（合力作功）**，等於該物體的**動能變化量（動能增加量）**」：\n     $$W_{\\text{合力}} = \\Delta E_k$$\n   - **第一步：求水平方向合力**：\n     - 小雄水平推力向右：$F_{\\text{推}} = 5\\,\\text{N}$\n     - 地面摩擦阻力向左：$f = 4\\,\\text{N}$\n     - 水平方向所受合力為：\n       $$F_{\\text{合}} = F_{\\text{推}} - f = 5 - 4 = 1\\,\\text{N}$$\n   - **第二步：求合力作功**：\n     - 移動距離為 $S = 10\\,\\text{m}$：\n       $$W_{\\text{合力}} = F_{\\text{合}} \\times S = 1\\,\\text{N} \\times 10\\,\\text{m} = 10\\,\\text{J}$$\n   - **第三步：求動能增加量**：\n     - 根據功能定理，行李箱動能增加量即為合力作功：\n       $$\\Delta E_k = W_{\\text{合力}} = 10\\,\\text{J}$$\n     - 故選 **(A) 10 J**。\n\n2. **【法二：能量守恆與作功代數和法（概念驗算）】**：\n   - **小雄外力輸入之總能量（外力作功）**：\n     $$W_{\\text{外力}} = F_{\\text{推}} \\times S = 5 \\times 10 = 50\\,\\text{J}$$\n   - **摩擦力作負功（轉化為熱能散失）**：\n     $$W_{\\text{摩擦}} = f \\times S = 4 \\times 10 = 40\\,\\text{J}$$\n   - **行李箱實際獲得之動能**：\n     $$\\Delta E_k = W_{\\text{外力}} - W_{\\text{摩擦}} = 50 - 40 = 10\\,\\text{J}$$\n\n3. **【題幹干擾資訊剖析】**：\n   - 題幹給出的行李箱質量 $20\\,\\text{kg}$ 為**多餘干擾條件**。若利用牛頓第二運動定律求加速度 $a = \\frac{F_{\\text{合}}}{m} = \\frac{1}{20} = 0.05\\,\\text{m/s}^2$，再由運動學公式求末速 $v^2 = 2aS = 2 \\times 0.05 \\times 10 = 1$，最後計算動能 $E_k = \\frac{1}{2}mv^2 = \\frac{1}{2} \\times 20 \\times 1 = 10\\,\\text{J}$，雖然答案相同但繁瑣耗時，掌握**功能定理**可直接三秒秒殺！\n\n故本題正確答案為 **(A)**。",
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
text = text.replace("const STORAGE_KEY = 'miley_wrong_questions_v368';", "const STORAGE_KEY = 'miley_wrong_questions_v369';")

# Insert new question into INITIAL_SEED_DATA
marker = 'const INITIAL_SEED_DATA = [\n'
pos = text.find(marker)
if pos == -1:
    print('Error: marker not found')
    exit(1)

insert_pos = pos + len(marker)

q340_str = '  ' + json.dumps(q340, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'

text = text[:insert_pos] + q340_str + text[insert_pos:]

# Update fallback keys in dataManager.init()
text = text.replace("'miley_wrong_questions_v367'", "'miley_wrong_questions_v368', 'miley_wrong_questions_v367'")

with open('/Users/bennychen/pCloud Drive/bennychen/0AI_共用資料夾/07_Miley/麥麥錯題網站/js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully added Q340 to data.js!')
