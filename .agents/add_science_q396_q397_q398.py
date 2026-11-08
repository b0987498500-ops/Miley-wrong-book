# -*- coding: utf-8 -*-
import json

diag_path = "assets/questions/q_sci_phys_spring_block_collision_396.png"

q396 = {
    "id": "q_sci_phys_spring_block_collision_min_kinetic_396",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/功與能／力學能守恆／彈簧壓縮極限 (壓縮至最短長度時瞬間靜止速率為零動能最小為 0)／動能與彈力位能互換",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【壓縮至最短長度瞬間「速度降為零」！動能最小為 0！】\n1. **物體壓縮彈簧全過程能量轉換**：\n   - 未觸及彈簧時：只有動能 900 焦耳（動能最大）；\n   - 撞擊並壓縮彈簧時：彈簧施力向右阻擋，物體減速，動能逐漸轉為彈力位能；\n   - **壓縮至最短長度（最大形變量）時**：物體無法再前進，速度瞬間降為 0，此時**動能最小（等於 0 焦耳）**！\n2. **秒殺口訣**：彈簧壓最扁、速度變為零、動能最小為 0、彈力位能最大！",
    "stem": "【題組】質量為 2 公斤的物體，在光滑無摩擦的水平面上，以 900 焦耳的動能撞向一彈簧，如附圖所示，撞擊後彈簧再將物體彈回，若過程中無熱能散失，試回答下列問題：\n\n(1) 下列何時物體的動能最小？\n\n○ (A) 物體未觸及彈簧時\n○ (B) 物體剛觸及彈簧時\n○ (C) 物體撞擊彈簧並將彈簧壓縮至最短長度時\n○ (D) 彈簧反彈物體，物體剛離開彈簧時",
    "answer": "(C) 物體撞擊彈簧並將彈簧壓縮至最短長度時",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：分析物體撞擊彈簧的減速過程\n- 物體以初動能 $900\\text{ 焦耳}$ 向左運動。\n- 剛觸及彈簧後，彈簧被壓縮產生向右的彈力，此彈力與物體的運動方向相反（做負功），使物體持續做減速運動，速率 $v$ 逐漸變小。\n\n---\n\n#### 第二部：鎖定動能最小的極限瞬間（壓縮至最短）\n- 當彈簧被壓縮到「最短長度」（即彈簧的最大壓縮量）的瞬間，物體向左的速度剛好減為 $0$（瞬間靜止）。\n- 根據動能公式：\n  $$K = \\frac{1}{2}mv^2$$\n  此時 $v = 0$，故**動能最小，剛好等於 $0\\text{ 焦耳}$**！\n\n---\n\n#### 第三部：檢驗其他選項\n- (A) 未觸及彈簧時：動能最大，為 $900\\text{ 焦耳}$。\n- (B) 剛觸及彈簧時：彈簧尚未被壓縮，動能仍為 $900\\text{ 焦耳}$。\n- (D) 剛離開彈簧時：彈簧恢復原長，彈力位能全部釋放轉回動能，動能又恢復為 $900\\text{ 焦耳}$。\n- 因此動能最小的時刻為**「壓縮至最短長度時」**，正確答案選 **(C)**。",
    "diagramUrl": diag_path
}

q397 = {
    "id": "q_sci_phys_spring_block_max_potential_energy_397",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/功與能／力學能守恆定律／動能完全轉化為彈力位能 (初動能 900J = 最大彈力位能 900J)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【光滑水平面無能量耗散 —— 動能減少多少，彈力位能就增加多少！】\n1. **力學能守恆鐵則**：\n   - 全程只有彈力做功，無摩擦阻力與熱能散失，滿足：\n     $$\\text{動能 } K + \\text{彈力位能 } U_s = 900\\text{ 焦耳}$$\n2. **動能最小時（K = 0）**：\n   - 彈力位能 $U_s = 900 - 0 = 900\\text{ 焦耳}$！初動能全部 100% 儲存在彈簧中！",
    "stem": "【題組】質量為 2 公斤的物體，在光滑無摩擦的水平面上，以 900 焦耳的動能撞向一彈簧，如附圖所示，撞擊後彈簧再將物體彈回，若過程中無熱能散失，試回答下列問題：\n\n(2) 當物體動能最小時，彈簧的彈力位能為多少焦耳？\n\n○ (A) 0\n○ (B) 30\n○ (C) 450\n○ (D) 900",
    "answer": "(D) 900",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：應用力學能守恆定律\n- 題目明確指出：\n  1. 水平面「光滑無摩擦」；\n  2. 過程中「無熱能散失」。\n- 系統在整個撞擊與反彈過程中，**總力學能守恆**：\n  $$E = \\text{動能 } K + \\text{彈力位能 } U_s = \\text{定值}$$\n\n---\n\n#### 第二部：確定初始總力學能\n- 物體在尚未壓縮彈簧前：\n  - 初動能 $K_{\\text{初}} = 900\\text{ 焦耳}$\n  - 彈簧未形變，彈力位能 $U_{\\text{初}} = 0$\n- 因此系統總力學能為：\n  $$E = 900 + 0 = 900\\text{ 焦耳}$$\n\n---\n\n#### 第三部：求解動能最小時的彈力位能\n- 由第 (1) 小題可知，當彈簧被壓縮至最短長度時，物體瞬間靜止，動能最小（$K = 0\\text{ 焦耳}$）。\n- 由力學能守恆：\n  $$K + U_s = 900$$\n  $$0 + U_s = 900 \\implies U_s = 900\\text{ 焦耳}$$\n\n因此，當物體動能最小時，彈簧的彈力位能為 **$900\\text{ 焦耳}$**，正確答案選 **(D)**。",
    "diagramUrl": diag_path
}

q398 = {
    "id": "q_sci_phys_spring_block_kinetic_at_500j_398",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "計算粗心",
    "concept": "力學/功與能／力學能守恆定律／動能與彈力位能任意時刻總和恆定 (K + Us = 900J)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【任意時刻動能＋彈力位能＝900 焦耳！直接相減秒殺！】\n1. **力學能守恆的核心公式**：\n   - 無摩擦水平碰撞中：$\\text{動能 } K + \\text{彈力位能 } U_s = 900\\text{ 焦耳}$。\n2. **秒殺計算**：\n   - 已知此時彈力位能 $U_s = 500\\text{ J}$；\n   - 動能 $K = 900 - 500 = 400\\text{ 焦耳}$！無需去求彈簧伸長量或彈性常數 $k$！",
    "stem": "【題組】質量為 2 公斤的物體，在光滑無摩擦的水平面上，以 900 焦耳的動能撞向一彈簧，如附圖所示，撞擊後彈簧再將物體彈回，若過程中無熱能散失，試回答下列問題：\n\n(3) 當物體被彈簧彈回而彈簧的彈力位能大小為 500 焦耳時，請問此時物體的動能是多少焦耳？\n\n○ (A) 0\n○ (B) 400\n○ (C) 500\n○ (D) 900",
    "answer": "(B) 400",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：建立能量守恆方程式\n- 在光滑水平面上，物體與彈簧相互作用過程中無摩擦阻力與熱能耗散，物體的動能與彈簧的彈力位能相互轉換，但**兩者之和始終保持不變**：\n  $$\\text{動能 } K + \\text{彈力位能 } U_s = \\text{總力學能 } E$$\n\n---\n\n#### 第二部：代入總力學能與已知位能\n- 已知系統的總力學能為 $900\\text{ 焦耳}$：\n  $$K + U_s = 900$$\n- 題幹給定此時彈簧的彈力位能為：\n  $$U_s = 500\\text{ 焦耳}$$\n\n---\n\n#### 第三部：求解此時物體的動能\n$$K = 900 - U_s = 900 - 500 = 400\\text{ 焦耳}$$\n\n因此，此時物體的動能為 **$400\\text{ 焦耳}$**，正確答案選 **(B)**。",
    "diagramUrl": diag_path
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v414
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v413';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v414';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q398, q397, q396 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    replacement = target + "  " + json.dumps(q398, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n  " + json.dumps(q397, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n  " + json.dumps(q396, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q396, Q397, Q398 to js/data.js and upgraded to v414.")

if __name__ == '__main__':
    main()
