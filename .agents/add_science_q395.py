# -*- coding: utf-8 -*-
import json

q395 = {
    "id": "q_sci_phys_bungee_jumping_energy_395",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/功與能／高空彈跳全過程受力與能量轉換／彈力位能 (最低點伸長量最大位能最大)／速率先增後減分析 (平衡點合力為零速率最大)／回彈加速度方向",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【高空彈跳全過程精闢拆解 —— 速率何時最大？何時減速？】\n1. **落下全過程三階段受力與速率變化（必考！）**：\n   - **原長自由落體段**：繩未伸長，只受重力，$F_{\\text{合}} = mg$ 向下，人向下加速。\n   - **伸長但彈力小於重力段**：繩開始拉長，$F_s < mg$，$F_{\\text{合}}$ 依然向下，**人繼續加速（速率繼續變快！）**。\n   - **平衡點（$F_s = mg$）**：合力為零，**此時速率達到最大值**！\n   - **彈力大於重力段至最低點**：$F_s > mg$，合力轉為向上，**人開始減速，直到最低點速度為 0**！\n   - 結論：落下過程速率是**「先變快、後變慢」**，絕非「愈來愈快」（(A) 錯誤）！\n2. **最低點的彈力位能**：\n   - 彈力位能 $U_s = \\frac{1}{2}kx^2$；\n   - 第一次到達最低點時，繩索拉伸到極限（伸長量 $x$ 最大），因此**彈力位能達到最大值**（(C) 正確！）。\n3. **回彈開始時的加速度**：\n   - 最低點時向上彈力遠大於重力，$F_{\\text{合}}$ 向上，故**加速度方向向上**，人向上加速運動（(B) 錯誤）。",
    "stem": "如附圖，高空彈跳是利用彈性繩索一端綁在高處平臺上（平臺的高度通常是數十至數百公尺），另一端綁著身體，然後挑戰者從高臺一躍而下。當挑戰者躍下時，藉由彈力及重力作用使人上下來回振盪，經過數次振盪後，挑戰者的上下振盪會停止。下列關於高空彈跳的敘述，何者正確？\n\n○ (A) 在挑戰者自跳下至最低點的過程中，速率愈來愈快\n○ (B) 在挑戰者回彈過程的加速度仍為向下\n○ (C) 挑戰者第一次落下至最低點時，彈力位能最大\n○ (D) 到最後靜止時，彈力位能全部轉為重力位能",
    "answer": "(C) 挑戰者第一次落下至最低點時，彈力位能最大",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：分析挑戰者自高臺躍下至最低點的運動與能量（排除 A，鎖定 C）\n- **落下全過程四部曲拆解**：\n  1. **繩索鬆弛段（原長以內）**：\n     - 繩索尚未被拉長，挑戰者只受向下的重力作用，向下做自由落體加速度運動，速率持續增加。\n  2. **繩索開始拉伸至平衡點（$mg > F_{\\text{彈}}$）**：\n     - 繩索伸長量為 $x$，產生向上的彈力 $F_{\\text{彈}} = kx$。\n     - 此時重力仍大於向上彈力，合力方向依然朝下（$F_{\\text{合}} = mg - kx > 0$）。\n     - 加速度依然向下，因此挑戰者的**向下速率仍然在持續變快**！\n  3. **平衡位置（$mg = F_{\\text{彈}}$）**：\n     - 向上彈力剛好等於向下重力，合力為零，加速度為零，此時**挑戰者的下降速率達到全程最大值**！\n  4. **超過平衡位置至最低點（$mg < F_{\\text{彈}}$）**：\n     - 繩索進一步被劇烈拉長，向上彈力大於重力，合力方向轉為朝上（$F_{\\text{合}} = kx - mg > 0$ 向下減速）。\n     - 加速度轉為向上，挑戰者的向下速率開始減慢，直到**最低點瞬間速度降為 $0$**。\n- **結論**：\n  - 下降過程中，挑戰者的速率是**「先變快、再變慢」**，並非愈來愈快，選項 (A) 敘述錯誤。\n  - 在最低點時，繩索被拉伸至最大長度（伸長量 $x$ 達到最大值），根據彈力位能公式 $U_s = \\frac{1}{2}kx^2$，此時**彈力位能最大**，選項 **(C)** 敘述完全正確！\n\n---\n\n#### 第二部：分析挑戰者回彈過程的受力與加速度（排除 B）\n- 挑戰者到達最低點後開始向上回彈：\n  - 剛開始回彈時，繩索處於極度拉長狀態，向上彈力遠大於重力（$F_{\\text{彈}} > mg$）。\n  - 合力方向朝上，根據牛頓第二運動定律 $F_{\\text{合}} = ma$，**加速度方向朝上**，使人向上加速回彈。\n  - 當人上升超過平衡點後，彈力小於重力，加速度才轉為向下。\n  - 因此回彈初期的加速度方向為**「向上」**，選項 (B) 稱「仍為向下」錯誤。\n\n---\n\n#### 第三部：分析多次振盪後最後靜止時的狀態（排除 D）\n- 由於空氣阻力與繩索內部纖維摩擦做負功，部分力學能持續轉化為熱能散失。\n- 當振盪完全停止時，挑戰者靜止懸掛在繩索下端的平衡位置（$kx = mg$）：\n  - 此時挑戰者相對於地面仍有高度，故保有**重力位能**；\n  - 彈性繩索依然被拉長（伸長量 $x = \\frac{mg}{k} > 0$），故依然保有**彈力位能**；\n  - 損失的力學能轉化為了散失在空氣中的熱能。\n  - 並非「彈力位能全部轉為重力位能」，選項 (D) 敘述錯誤。",
    "diagramUrl": "assets/questions/q_sci_phys_bungee_jumping_energy_395.png"
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v413
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v412';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v413';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q395 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    replacement = target + "  " + json.dumps(q395, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q395 to js/data.js and upgraded to v413.")

if __name__ == '__main__':
    main()

