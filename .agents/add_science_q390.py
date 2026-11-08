# -*- coding: utf-8 -*-
import json

q390 = {
    "id": "q_sci_phys_vertical_throw_kinetic_potential_height_390",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "計算粗心",
    "concept": "力學/功與能／力學能守恆定律／鉛直上拋最高點 (初動能全數轉為重力位能：K = mgh)／小數巧算技巧",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【鉛直上拋最高點「動能全部變位能」！善用小數巧算免除繁雜長除法！】\n1. **力學能守恆核心模型**：\n   - 不計空氣阻力時，拋出時的初動能 $K = 96.04\\text{ J}$，在抵達最高點速度為 0 時，會**100% 轉化為重力位能**！\n   - 列式：$K = mgh \\implies 96.04 = 2 \\times 9.8 \\times h$。\n2. **看到 19.6 與 96.04 的「速算秒殺技」**：\n   - 分母為 $2 \\times 9.8 = 19.6$；\n   - 估算：$19.6 \\times 5 = 98$；\n   - $98 - 96.04 = 1.96$（正好是 19.6 的 0.1 倍）；\n   - 因此 $h = 5 - 0.1 = 4.9\\text{ 公尺}$，無需辛苦列直式長除法！",
    "stem": "將質量為 2 公斤的物體，垂直向上拋時其動能為 96.04 焦耳，若不計空氣阻力，則由拋點算起，物體可上升多少公尺？\n\n○ (A) 29.4\n○ (B) 19.6\n○ (C) 9.8\n○ (D) 4.9",
    "answer": "(D) 4.9",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：應用力學能守恆定律\n- 在不計空氣阻力的情況下，物體在空中僅受重力作用，系統的**力學能（動能＋重力位能）守恆**：\n  $$E_{\\text{初}} = E_{\\text{末}}$$\n- 以拋出點為重力位能的基準面（$U_{\\text{初}} = 0$）：\n  - 初狀態（剛拋出時）：動能 $K_{\\text{初}} = 96.04\\text{ 焦耳}$，位能 $U_{\\text{初}} = 0$\n  - 末狀態（最高點時）：瞬間速度為 $0$，故動能 $K_{\\text{末}} = 0$，此時全部能量轉化為重力位能 $U_{\\text{末}} = mgh$\n\n---\n\n#### 第二部：列出等式\n$$K_{\\text{初}} = U_{\\text{末}}$$\n$$96.04 = mgh$$\n已知：\n- 質量 $m = 2\\text{ 公斤}$\n- 重力加速度 $g = 9.8\\text{ 公尺／秒}^2$\n代入得：\n$$96.04 = 2 \\times 9.8 \\times h$$\n$$96.04 = 19.6 \\times h$$\n\n---\n\n#### 第三部：求解上升高度 $h$（小數巧算）\n$$h = \\frac{96.04}{19.6}$$\n- **速算思維**：\n  觀察 $19.6 \\times 5 = 98$，而 $98 - 96.04 = 1.96 = 19.6 \\times 0.1$。\n  因此：\n  $$h = \\frac{98 - 1.96}{19.6} = 5 - 0.1 = 4.9\\text{ 公尺}$$\n\n故物體由拋點算起可上升 **$4.9\\text{ 公尺}$**，正確答案選 **(D)**。",
    "diagramUrl": ""
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v408
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v407';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v408';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q390 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    replacement = target + "  " + json.dumps(q390, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q390 to js/data.js and upgraded to v408.")

if __name__ == '__main__':
    main()
