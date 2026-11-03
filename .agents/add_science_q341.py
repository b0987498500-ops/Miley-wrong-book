# -*- coding: utf-8 -*-
import json

q341 = {
    "id": "q_sci_phy_braking_friction_work_kinetic_energy_341",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化/功與能／功能定理求煞車摩擦力作負功（時速 km/h 轉 m/s 與動能減少量 W = ΔEk = -6.75 × 10⁵ J）",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【煞車作功兩大天王級致命陷阱！】\n1. **陷阱一：時速忘記換算成公尺/秒（m/s）！**\n   - 算能量（焦耳 J）必須用 MKS 國際標準制：公尺（m）、公斤（kg）、秒（s）！\n   - 時速換算口訣：【時速除以 3.6】 ➜ $108\\text{ km/h} \\div 3.6 = 30\\text{ m/s}$！\n   - ❌ 誤直接拿 108 代入計算，數字暴增百倍直接全錯！\n2. **陷阱二：忘記煞車是作「負功」！**\n   - 摩擦阻力方向與運動方向相反（夾角 $180^\\circ$），煞車是消耗動能，故作【負功】！\n   - $W = \\Delta E_k = E_{k\\text{末}} - E_{k\\text{初}} = 0 - \\frac{1}{2}mv^2 < 0$，答案必帶負號！",
    "stem": "想要使一輛時速 108 公里、質量為 1500 公斤，沿著直線行駛的小汽車停下來，請問煞車時摩擦力作功多少焦耳？\n\n○ (A) -6.75 × 10⁵\n○ (B) -8.25 × 10⁵\n○ (C) -4.50 × 10⁵\n○ (D) -2.15 × 10⁵",
    "answer": "(A) -6.75 × 10⁵",
    "diagramUrl": "",
    "solution": "### 💡 核心考點：功能定理求阻力作功、時速與公尺每秒單位換算、負功概念\n\n1. **【正解 (A) 深度破題分析——三步驟邏輯解題】**：\n   - **第一步：單位換算（km/h 轉換為 m/s）**：\n     物理公式中能量的單位是**焦耳（J）**，長度與速度必須統一為 MKS 國際制單位（公尺 $\\text{m}$ 與秒 $\\text{s}$）：\n     $$v = 108\\,\\text{km/h} = \\frac{108 \\times 1000\\,\\text{m}}{3600\\,\\text{s}} = \\frac{108}{3.6} = 30\\,\\text{m/s}$$\n   - **第二步：功能定理（Work-Energy Theorem）應用**：\n     - 汽車停下來時，末速度 $v_2 = 0\\,\\text{m/s}$，故末動能 $E_{k2} = 0$。\n     - 汽車煞車前具有的初動能為：\n       $$E_{k1} = \\frac{1}{2} m v^2 = \\frac{1}{2} \\times 1500 \\times 30^2$$\n       $$E_{k1} = 750 \\times 900 = 675000\\,\\text{J} = 6.75 \\times 10^5\\,\\text{J}$$\n   - **第三步：求煞車摩擦力作功**：\n     - 根據功能定理，外力（煞車摩擦力）所作的功等於動能的變化量：\n       $$W_f = \\Delta E_k = E_{k2} - E_{k1} = 0 - 6.75 \\times 10^5 = \\mathbf{-6.75 \\times 10^5\\,\\text{J}}$$\n     - 故正確答案為 **(A) -6.75 × 10⁵**。\n\n2. **【物理意涵剖析：負號代表什麼？】**：\n   - 汽車向前方前進，煞車摩擦阻力的方向指向後方，施力方向與位移方向相反（方向夾角為 $180^\\circ$），因此摩擦力作**負功**。\n   - 負功代表摩擦阻力將汽車原本擁有的 $6.75 \\times 10^5\\,\\text{J}$ 機械動能**奪走並轉換為熱能**散失到環境中，使汽車順利停下。\n\n3. **【常見錯誤陷阱剖析】**：\n   - ❌ **未將時速換算為 m/s**：直接以 $108$ 計算，將得出荒謬的數值。\n   - ❌ **忘記負號**：誤以為功只看數值大小，忽視阻力作負功使動能減少的核心概念。\n\n故本題正確答案為 **(A)**。",
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
text = text.replace("const STORAGE_KEY = 'miley_wrong_questions_v369';", "const STORAGE_KEY = 'miley_wrong_questions_v370';")

# Insert new question into INITIAL_SEED_DATA
marker = 'const INITIAL_SEED_DATA = [\n'
pos = text.find(marker)
if pos == -1:
    print('Error: marker not found')
    exit(1)

insert_pos = pos + len(marker)

q341_str = '  ' + json.dumps(q341, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'

text = text[:insert_pos] + q341_str + text[insert_pos:]

# Update fallback keys in dataManager.init()
text = text.replace("'miley_wrong_questions_v368'", "'miley_wrong_questions_v369', 'miley_wrong_questions_v368'")

with open('/Users/bennychen/pCloud Drive/bennychen/0AI_共用資料夾/07_Miley/麥麥錯題網站/js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully added Q341 to data.js!')
