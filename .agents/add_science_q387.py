# -*- coding: utf-8 -*-
import json

q387 = {
    "id": "q_sci_phys_gravitational_potential_energy_slope_387",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/功與能／重力位能公式 (U = mgh = 重量 × 垂直高度)／斜面與路徑無關特性／誘答條件干擾辨析",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【重力位能「只看垂直高度」！別被施力 F 與斜面誘答騙了！】\n1. **看清單位！題目給的是「重量 100 牛頓」，而非質量 100 公斤**：\n   - 重力位能公式：$U = mgh = (mg) \\times h$。\n   - 其中的 $mg$ 就是「重量（物體受到的重力，單位為牛頓 N）」！\n   - 既然題目已給重量為 100 N，直接代入 $U = 100 \\times 1 = 100\\text{ J}$，千萬不要再多乘一次重力加速度 $g=9.8$！\n2. **重力位能增加量只看「起終點垂直高度差」**：\n   - 重力是保守力，物體克服重力所儲存的位能，與移動路徑（斜面長度、斜率、施力 F 的大小）完全無關！\n   - 題目中的「施力 F 牛頓」純粹是常見的干擾選項，不需要去算 F 或斜面長度！",
    "stem": "在一無摩擦的斜面上，施力 $F$ 牛頓，將重量 100 牛頓的物體拉上斜面頂端，若斜面頂端距地面 1 公尺高，則該物體重力位能增加多少焦耳？\n\n○ (A) 1\n○ (B) 100\n○ (C) $F$\n○ (D) $100 \\times F$",
    "answer": "(B) 100",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：釐清重力位能的核心定義與物理量\n- **重力位能公式**：\n  $$\\Delta U = mgh$$\n  其中：\n  - $m$ 為物體質量（$\\text{kg}$）\n  - $g$ 為重力加速度（$\\text{m/s}^2$）\n  - $mg$ 便是物體所受的重力大小，即**「重量」**（單位為牛頓 $\\text{N}$）\n  - $h$ 為物體相對於參考面的**「垂直高度」**（單位為公尺 $\\text{m}$）\n\n---\n\n#### 第二部：精準代入數值秒殺計算\n- 題目已知條件：\n  - 物體重量 $W = mg = 100\\text{ 牛頓}$；\n  - 斜面頂端距地面的垂直高度 $h = 1\\text{ 公尺}$。\n- 代入計算：\n  $$\\Delta U = mg \\times h = 100\\text{ N} \\times 1\\text{ m} = 100\\text{ J (焦耳)}$$\n\n---\n\n#### 第三部：為什麼與「施力 $F$」及「斜面長度」無關？\n1. **保守力特性**：重力做功只由起點與終點的垂直位置決定，與斜面傾角、路徑長度完全無關。\n2. **功的原理驗證**：若以力 $F$ 等速沿長度為 $L$ 的無摩擦斜面拉上頂端，外力做功 $W_F = F \\times L$。由斜面省力原理可知 $F = 100 \\times \\frac{h}{L}$，因此外力作功 $W_F = (100 \\times \\frac{h}{L}) \\times L = 100 \\times h = 100\\text{ J}$，正好等於物體增加的重力位能！\n3. 因此無論斜面長度多少，重力位能增加量皆固定為 **$100\\text{ 焦耳}$**，正確答案選 **(B)**。",
    "diagramUrl": ""
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v405
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v404';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v405';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q387 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    replacement = target + "  " + json.dumps(q387, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q387 to js/data.js and upgraded to v405.")

if __name__ == '__main__':
    main()
