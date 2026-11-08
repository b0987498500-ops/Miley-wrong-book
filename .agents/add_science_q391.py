# -*- coding: utf-8 -*-
import json

q391 = {
    "id": "q_sci_phys_rough_slope_mechanical_energy_loss_391",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "力學/功與能／粗糙斜面能量轉換／摩擦力作負功轉化為熱能／力學能不守恆 (動能必小於減少的位能)／審題陷阱 (何者錯誤)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【看到「粗糙斜面」立刻提高警覺！摩擦力必分走熱能！】\n1. **看清關鍵字「粗糙」與「何者錯誤」**：\n   - 粗糙代表必定有摩擦力存在！摩擦力與運動方向相反，必定作負功。\n   - 題目問的是「**何者錯誤**」，千萬別選到了敘述正確的選項！\n2. **動能無法完全接收位能**：\n   - 光滑斜面：減少的位能 $19.6\\text{ J} = $ 增加的動能；\n   - **粗糙斜面**：減少的位能 = 增加的動能 + 摩擦產生的熱能；\n   - 因此底部的動能**必定小於 $19.6\\text{ 焦耳}$**，不可能剛好等於 $19.6\\text{ 焦耳}$！選項 (C) 敘述錯誤，故為正解！",
    "stem": "在粗糙斜面上質量為 1 公斤的小木塊，由靜止開始下滑，木塊原先距底端之垂直高度為 2 公尺。則下列敘述，何者錯誤？（$g = 9.8\\text{ m/s}^2$）\n\n○ (A) 滑至底部時，木塊的位能減少了 19.6 焦耳\n○ (B) 摩擦力作負功\n○ (C) 到達底部時，木塊的動能為 19.6 焦耳\n○ (D) 動能與位能的和在此過程中並不守恆",
    "answer": "(C) 到達底部時，木塊的動能為 19.6 焦耳",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：逐一檢視各選項的物理意義\n- **(A) 位能減少量**：\n  - 重力位能只取決於垂直高度差：\n    $$\\Delta U = mgh = 1\\text{ kg} \\times 9.8\\text{ m/s}^2 \\times 2\\text{ m} = 19.6\\text{ 焦耳}$$\n  - 木塊自 2 公尺高處滑到底部，位能確實減少了 $19.6\\text{ 焦耳}$，(A) 正確。\n\n- **(B) 摩擦力做功**：\n  - 木塊下滑方向沿斜面向下，而動摩擦力方向沿斜面向上，受力與位移方向相反（夾角 $180^\\circ$），故摩擦力作**負功**，(B) 正確。\n\n---\n\n#### 第二部：核心矛盾破題 —— 為什麼 (C) 錯誤？\n- **能量轉換關係式**：\n  在粗糙斜面上運動時，滿足：\n  $$\\text{減少的重力位能} = \\text{增加的動能} + \\text{摩擦產生的熱能}$$ \n  $$19.6\\text{ J} = K_{\\text{底}} + Q_{\\text{熱}}$$ \n- 因為斜面粗糙，$Q_{\\text{熱}} > 0$，因此木塊到達底部時的動能必定為：\n  $$K_{\\text{底}} = 19.6 - Q_{\\text{熱}} < 19.6\\text{ 焦耳}$$\n- 只有在「完全光滑無摩擦」的理想斜面上，底部的動能才會剛好是 $19.6\\text{ 焦耳}$。\n- 因此 (C) 敘述「木塊的動能為 19.6 焦耳」是**錯誤的**，題目要求選出錯誤項，故選 **(C)**。\n\n---\n\n#### 第三部：檢驗 (D) 力學能是否守恆\n- 「動能與位能的和」即為**力學能**。\n- 因為摩擦力做非保守力負功，部分力學能轉換成了熱能散逸，所以力學能並不守恆，(D) 敘述正確。",
    "diagramUrl": ""
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v409
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v408';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v409';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q391 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    replacement = target + "  " + json.dumps(q391, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q391 to js/data.js and upgraded to v409.")

if __name__ == '__main__':
    main()
