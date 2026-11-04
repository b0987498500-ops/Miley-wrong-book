# -*- coding: utf-8 -*-
import json

q342 = {
    "id": "q_sci_phy_kinetic_energy_newton_law_time_342",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "理化/功與能／動能求末速率（Ek = 1/2 mv²）與牛頓第二定律（F = ma）求運動時間",
    "uploadDate": "2026-11-03",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【動能結合牛頓第二運動定律解題三部曲！】\n1. **解題標準 SOP**：\n   - ① **由動能求末速度**：$E_k = \\frac{1}{2}mv^2 \\implies 360 = \\frac{1}{2}(5)v^2 \\implies v^2 = 144 \\implies v = 12\\text{ m/s}$。\n   - ② **由牛二求加速度**：$F = ma \\implies 10 = 5a \\implies a = 2\\text{ m/s}^2$。\n   - ③ **由速度公式求時間**：$v = v_0 + at \\implies 12 = 0 + 2t \\implies t = 6\\text{ 秒}$！\n2. **常見計算粗心點**：\n   - ❌ 忘記開根號：算到 $v^2 = 144$ 就直接當成速度帶入！\n   - ❌ 漏除以 2：套公式忘了 $\\frac{1}{2}$，誤算 $v^2 = \\frac{360}{5} = 72$！",
    "stem": "質量 5 公斤的物體靜置在光滑的水平面上，受 10 牛頓水平推力，在第幾秒時物體之動能為 360 焦耳？\n\n○ (A) 第 5 秒\n○ (B) 第 6 秒\n○ (C) 第 7 秒\n○ (D) 第 8 秒",
    "answer": "(B) 第 6 秒",
    "diagramUrl": "",
    "solution": "### 💡 核心考點：動能公式（Ek = 1/2 mv²）、牛頓第二定律（F = ma）與等加速度運動整合\n\n1. **【正解 (B) 深度破題分析——標準三步驟推導】**：\n   - **第一步：由動能求出物體的末速率 $v$**：\n     - 題幹給定：物體質量 $m = 5\\,\\text{kg}$，此時動能 $E_k = 360\\,\\text{J}$。\n     - 代入動能公式：\n       $$E_k = \\frac{1}{2} m v^2$$\n       $$360 = \\frac{1}{2} \\times 5 \\times v^2$$\n       $$v^2 = \\frac{360 \\times 2}{5} = \\frac{720}{5} = 144$$\n       $$v = \\sqrt{144} = 12\\,\\text{m/s}$$\n     - 即物體動能為 $360\\,\\text{J}$ 時，末速率為 $12\\,\\text{m/s}$。\n\n   - **第二步：由牛頓第二運動定律求物體的加速度 $a$**：\n     - 水平面光滑（無摩擦力），合力即為推力 $F = 10\\,\\text{N}$。\n     - 根據牛頓第二運動定律：\n       $$F = m \\times a$$\n       $$10 = 5 \\times a \\implies a = \\frac{10}{5} = 2\\,\\text{m/s}^2$$\n\n   - **第三步：由等加速度運動速度公式求出所需時間 $t$**：\n     - 物體原為「靜置」（初速度 $v_0 = 0$）：\n       $$v = v_0 + a \\times t$$\n       $$12 = 0 + 2 \\times t$$\n       $$t = \\frac{12}{2} = 6\\,\\text{秒}$$\n     - 因此在**第 6 秒**時，物體之動能恰好達到 $360\\,\\text{J}$。\n\n2. **【法二：功能定理與位移速算法（驗算法）】**：\n   - 根據功能定理：合力作功等於動能增加量：\n     $$W = F \\times S = \\Delta E_k = 360\\,\\text{J}$$\n     $$S = \\frac{W}{F} = \\frac{360}{10} = 36\\,\\text{m}$$\n   - 初速 $0$、末速 $12\\,\\text{m/s}$，平均速度 $\\bar{v} = \\frac{0 + 12}{2} = 6\\,\\text{m/s}$。\n   - 時間 $t = \\frac{S}{\\bar{v}} = \\frac{36}{6} = 6\\,\\text{秒}$，同樣精確秒殺！\n\n故本題正確答案為 **(B)**。",
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
text = text.replace("const STORAGE_KEY = 'miley_wrong_questions_v370';", "const STORAGE_KEY = 'miley_wrong_questions_v371';")

# Insert new question into INITIAL_SEED_DATA
marker = 'const INITIAL_SEED_DATA = [\n'
pos = text.find(marker)
if pos == -1:
    print('Error: marker not found')
    exit(1)

insert_pos = pos + len(marker)

q342_str = '  ' + json.dumps(q342, ensure_ascii=False, indent=4).replace('\n', '\n  ') + ',\n'

text = text[:insert_pos] + q342_str + text[insert_pos:]

# Update fallback keys in dataManager.init()
text = text.replace("'miley_wrong_questions_v369'", "'miley_wrong_questions_v370', 'miley_wrong_questions_v369'")

with open('/Users/bennychen/pCloud Drive/bennychen/0AI_共用資料夾/07_Miley/麥麥錯題網站/js/data.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Successfully added Q342 to data.js!')

