# -*- coding: utf-8 -*-
import json

q388 = {
    "id": "q_sci_phys_mango_potential_energy_unit_388",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "計算粗心",
    "concept": "力學/功與能／重力位能公式 (U = mgh)／SI 制單位換算 (公克換算公斤：g → kg)／焦耳單位陷阱",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【算焦耳（J）「質量必須先換成公斤（kg）」！別掉入 1000 倍單位陷阱！】\n1. **焦耳（Joule）的 SI 標準制單位定義**：\n   - $1\\text{ J} = 1\\text{ N} \\cdot \\text{m} = 1\\text{ kg} \\cdot \\text{m}^2/\\text{s}^2$。\n   - 質量必須用**公斤（kg）**，高度必須用**公尺（m）**，重力加速度用 $\\text{m/s}^2$！\n2. **公克換公斤（除以 1000）**：\n   - $600\\text{ 公克} = \\frac{600}{1000} = 0.6\\text{ 公斤}$！\n   - 如果直接用 600 代入，會算出 $600 \\times 10 \\times 2 = 12000$，正好掉入誘答選項 (C) 的陷阱！\n3. **標準代入計算**：\n   - $U = mgh = 0.6 \\times 10 \\times 2 = 12\\text{ 焦耳}$，秒殺搞定！",
    "stem": "質量 600 公克的芒果，生長在距離地面 2 公尺的樹上，若重力加速度為 $10\\text{ 公尺／秒}^2$，則芒果對地面具有多少焦耳的重力位能？\n\n○ (A) 12\n○ (B) 24\n○ (C) 12000\n○ (D) 24000",
    "answer": "(A) 12",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：審核單位 —— 焦耳（J）要求使用 SI 標準制\n- 重力位能的計算公式為：\n  $$U = mgh$$\n- 要得到標準能量單位**焦耳（J）**，各物理量的單位必須嚴格符合國際標準制（SI 制）：\n  - 質量 $m$：必須為**公斤（kg）**\n  - 重力加速度 $g$：必須為**公尺／秒$^2$（m/s$^2$）**\n  - 垂直高度 $h$：必須為**公尺（m）**\n\n---\n\n#### 第二部：進行公制單位換算（易錯盲點！）\n- 題目給定芒果質量為 $600\\text{ 公克}$：\n  $$m = 600\\text{ g} = \\frac{600}{1000}\\text{ kg} = 0.6\\text{ kg}$$\n- 距離地面高度：\n  $$h = 2\\text{ m}$$\n- 重力加速度：\n  $$g = 10\\text{ m/s}^2$$\n\n---\n\n#### 第三部：代入數值計算\n$$U = mgh = 0.6\\text{ kg} \\times 10\\text{ m/s}^2 \\times 2\\text{ m} = 12\\text{ J (焦耳)}$$\n\n因此，芒果對地面具有 **$12\\text{ 焦耳}$** 的重力位能，正確答案選 **(A)**。",
    "diagramUrl": ""
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v406
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v405';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v406';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q388 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    replacement = target + "  " + json.dumps(q388, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q388 to js/data.js and upgraded to v406.")

if __name__ == '__main__':
    main()

