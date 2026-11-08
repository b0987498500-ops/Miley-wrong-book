# -*- coding: utf-8 -*-
import json

q392 = {
    "id": "q_sci_phys_skier_slope_energy_loss_392",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "審題不清",
    "concept": "力學/功與能／力學能轉換與守恆／靜止狀態動能為零 (P 點與 Q 點動能皆為 0)／斜面摩擦耗散與重力位能差值／審題陷阱 (何者錯誤)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【看到「靜止」和「恰好停止」，動能一律等於 0！】\n1. **「靜止」與「停止」代表速度為 0，動能必為 0**：\n   - 題幹：「從 P 點**靜止**開始滑下」 $\\implies v_P = 0 \\implies K_P = 0$；\n   - 題幹：「滑至 Q 點**恰好停止**」 $\\implies v_Q = 0 \\implies K_Q = 0$；\n   - 兩點動能**完全相等（皆為 0）**！選項 (C) 說「P 點動能小於 Q 點動能」是嚴重錯誤，題目問何者錯誤，故秒選 (C)！\n2. **為什麼肯定有摩擦力？**：\n   - 若無摩擦力，力學能守恆，物體滑到對面山坡的高度必須與 P 點**等高**；\n   - 圖示中 Q 點明顯比 P 點矮，卻已經停下來了，代表減少的重力位能被**摩擦力轉化為熱能散失**了，因此滑雪過程必定受到摩擦力！",
    "stem": "如附圖，一個滑雪者從 P 點靜止開始滑下山坡，在途中不轉彎也不煞車，滑至 Q 點恰好停止，則下列敘述何者錯誤？\n\n○ (A) 對地面而言，P 點的重力位能大於 Q 點的重力位能\n○ (B) 滑雪過程中，該滑雪者受到摩擦力作用\n○ (C) P 點的動能小於 Q 點的動能\n○ (D) 滑雪過程中，遵守能量守恆定律",
    "answer": "(C) P 點的動能小於 Q 點的動能",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：抓取關鍵字「靜止」與「停止」，秒殺動能比較\n- **動能公式**：\n  $$K = \\frac{1}{2} m v^2$$\n- 題幹條件分析：\n  - 滑雪者從 P 點「**靜止**開始滑下」：表示初速度 $v_P = 0$，故 P 點的動能 $K_P = 0$。\n  - 滑至 Q 點「**恰好停止**」：表示末速度 $v_Q = 0$，故 Q 點的動能 $K_Q = 0$。\n- **結論**：P 點與 Q 點的動能**相等，皆為 0**（$K_P = K_Q = 0$）。\n- 因此，選項 (C) 敘述「P 點的動能小於 Q 點的動能」是**錯誤的**，題目要求選出錯誤者，故選 **(C)**！\n\n---\n\n#### 第二部：由圖示高度驗證 (A) 重力位能\n- **重力位能公式**：\n  $$U = mgh$$\n- 觀察題目附圖可知：\n  - P 點距離地面的垂直高度明顯大於 Q 點距地面的垂直高度（$h_P > h_Q$）；\n  - 同一滑雪者質量相同，故 P 點的重力位能必然大於 Q 點的重力位能（$U_P > U_Q$），選項 (A) 敘述正確。\n\n---\n\n#### 第三部：由能量轉化驗證 (B) 摩擦力與 (D) 能量守恆\n1. **驗證選項 (B)**：\n   - 若完全無摩擦阻力，力學能守恆，滑雪者滑上對面山坡時，最高點應能到達與 P 點相同的高度（$h_Q = h_P$）。\n   - 但實際上滑雪者在高度較低的 Q 點就停住了，代表力學能減少了（$U_P - U_Q > 0$），減少的力學能轉化為摩擦生熱，故過程中**必定受到摩擦力作用**，選項 (B) 敘述正確。\n2. **驗證選項 (D)**：\n   - 能量守恆定律是自然界的普遍規律：減少的重力位能完全轉化為摩擦產生的熱能，總能量守恆，選項 (D) 敘述正確。",
    "diagramUrl": "assets/questions/q_sci_phys_skier_slope_energy_loss_392.png"
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v410
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v409';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v410';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q392 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    replacement = target + "  " + json.dumps(q392, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q392 to js/data.js and upgraded to v410.")

if __name__ == '__main__':
    main()

