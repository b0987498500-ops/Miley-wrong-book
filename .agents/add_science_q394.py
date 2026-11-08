# -*- coding: utf-8 -*-
import json

q394 = {
    "id": "q_sci_phys_vertical_throw_energy_force_accel_394",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/運動與能量／鉛直上拋全過程 (速度減慢動能減少、高度增加位能增加)／最高點受力陷阱 (速度為零但合力依然是向下重力 mg ≠ 0)／重力加速度恆定",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【最高點「速度為零」≠「合力為零」！國中會考超高頻地雷！】\n1. **速度為零不等於合力為零**：\n   - 球在最高點瞬間雖然停了下來（$v = 0$），但它依然受地球向下的「重力（$mg$）」吸引！\n   - 所以最高點的**合力 = 重力（不為零）**，**加速度 = $g$ 向下（不為零）**！\n   - 如果合力為零，球就會永遠停在空中不會掉下來了！選項 (B) 是最常誤選的大陷阱！\n2. **上升過程能量此消彼長**：\n   - 愈飛愈高 $\\implies$ 高度 $h$ 增加 $\\implies$ 重力位能**逐漸增加**（(A) 錯誤）；\n   - 愈飛愈慢 $\\implies$ 速率 $v$ 減小 $\\implies$ 動能**逐漸減少**（(C) 正確！）；\n3. **地表重力加速度固定不變**：\n   - 上升過程重力加速度 $g = 9.8\\text{ m/s}^2$ 始終朝下且大小固定，絕不會變大（(D) 錯誤）。",
    "stem": "將球垂直上拋，球在上拋的過程中，下列敘述何者正確？\n\n○ (A) 球在上升過程中，重力位能逐漸減少\n○ (B) 球到達最高點的瞬間，所受合力為零\n○ (C) 球在上升過程中，動能逐漸減少\n○ (D) 球在上升過程中，重力加速度逐漸變大",
    "answer": "(C) 球在上升過程中，動能逐漸減少",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：分析球在上升過程中的運動與能量（鎖定正解 C）\n- **動能分析**：\n  - 球被向上拋出後，受到向下的重力作用，加速度方向與運動方向相反，使球向上做「等加速度減速運動」。\n  - 速率 $v$ 隨時間逐漸減小，直到最高點瞬間減為 $0$。\n  - 根據動能公式 $K = \\frac{1}{2}mv^2$，速率變慢，故**動能逐漸減少**，選項 (C) 敘述完全正確！\n- **重力位能分析**：\n  - 重力位能公式為 $U = mgh$。\n  - 上升過程中高度 $h$ 持續增加，因此**重力位能逐漸增加**（動能轉化為位能），選項 (A) 敘述錯誤。\n\n---\n\n#### 第二部：破解最高頻陷阱 —— 最高點瞬間的受力與加速度（排除 B）\n- 很多同學會直覺認為「最高點停下來了，所以合力為零」，這是嚴重的物理迷思！\n- **受力分析**：\n  - 在飛行過程中（包含最高點瞬間），物體始終只受一個力 —— 向下的**「重力（$W = mg$）」**。\n  - 因此最高點的合力 $F_{\\text{合}} = mg \\neq 0$，方向向下。\n- **牛頓第二定律檢驗**：\n  - $a = \\frac{F_{\\text{合}}}{m} = g = 9.8\\text{ m/s}^2 \\neq 0$。\n  - 正是因為有向下的合力與加速度，球在下一個瞬間才會開始加速向下掉落！\n  - 若最高點合力為零，依牛頓第一定律球將靜止漂浮在空中，顯然不合常理。故選項 (B) 錯誤。\n\n---\n\n#### 第三部：檢驗選項 (D) 重力加速度大小\n- 在接近地表的範圍內，地球引力場視為均勻引力場。\n- 不論球是正在上升、處於最高點或正在落下，其**重力加速度皆維持固定常數（$g \\approx 9.8\\text{ m/s}^2$ 向下）**，並不會隨高度變大，故選項 (D) 錯誤。",
    "diagramUrl": ""
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v412
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v411';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v412';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q394 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    replacement = target + "  " + json.dumps(q394, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q394 to js/data.js and upgraded to v412.")

if __name__ == '__main__':
    main()
