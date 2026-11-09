# -*- coding: utf-8 -*-
import json

q424 = {
    "id": "q_sci_physics_simple_machines_work_principle_definition_424",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "自然/理化／簡單機械定義與功能／功的原理（使用任何機械絕不省功）／省力省時與操作方便之辨析",
    "uploadDate": "2026-11-09",
    "mondayDate": "2026-11-09",
    "mondayDates": ["2026-11-09"],
    "weekLabel": "2026-11-09 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【理化功與能最高鐵律 ——「使用任何機械，絕對不可能省功！」】\n1. **最高頻觀念陷阱（混淆省力與省功）**：\n   - 很多同學誤以為「用機械比較輕鬆」就是省功，大錯特錯！\n   - 「省力」必定「費距離（費時）」，例如施力減半但推動距離加倍，總功 W ＝ F × S 依然保持不變！\n2. **三類機械功能對照**：\n   - **省力機械**：施力臂 ＞ 抗力臂，省力但費距離（如開瓶器、獨輪推車、動滑輪）；\n   - **費力機械**：施力臂 ＜ 抗力臂，費力但省距離／便於操作（如鑷子、筷子、釣竿）；\n   - **改變方向**：施力臂 ＝ 抗力臂，不省力也不省距離（如定滑輪）。\n3. **黃金口訣**：\n   - 「省力必費距，省距必費力；方向可改變，天理不省功！」",
    "stem": "下列關於「機械」的敘述，何者完全正確？\n\n○ (A) 機械就是一種省力的裝置\n○ (B) 機械就是一種省功的裝置\n○ (C) 機械就是槓桿、滑輪和斜面的總稱\n○ (D) 只要能幫助人類作功的裝置都可稱為機械",
    "answer": "(D) 只要能幫助人類作功的裝置都可稱為機械",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：理解「機械」的廣義定義\n- 凡是能夠協助人類傳遞能量、改變受力大小、方向或運動速度，進而幫助人類作功的各種裝置或工具，皆可統稱為**機械**。\n\n---\n\n#### 第二部：逐一剖析各選項之盲點\n- **(A) 錯誤（機械不一定省力）**：\n  - 機械有的省力（如動滑輪、拔釘器、斜面），但必然費距離；\n  - 有的費力但能省距離或操作靈活（如筷子、鑷子、釣竿、掃帚）；\n  - 有的既不省力也不費力，僅用來改變施力方向以方便施力（如旗桿頂部的定滑輪）。\n  - 因此，「機械必定是省力裝置」之說法不正確。\n- **(B) 錯誤（功的原理：使用任何機械絕不可能省功！）**：\n  - 根據**功的原理**（能量守恆定律），在理想無摩擦阻力的情況下，輸入功等於輸出功（W_入 ＝ W_出）；\n  - 若考量摩擦力與機械重量，輸入功甚至必定大於輸出功（部分能量轉換為熱能散失）。\n  - **世界上絕無任何機械可以省功**！\n- **(C) 錯誤（範圍過於狹隘）**：\n  - 槓桿、滑輪、斜面僅為基礎簡單機械中的幾種；機械還涵蓋輪軸、螺旋、齒輪，乃至複雜的鐘錶機芯（如陀飛輪）與各類複合發動機，並非僅限於此三者。\n- **(D) 正確**：\n  - 凡能幫助人類傳遞力量、使作功更有效率或更便利的裝置，皆可稱為機械。\n\n---\n\n#### 第三部：結論\n正確敘述為 **(D)**。",
    "diagramUrl": ""
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v424
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v423';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v424';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q424 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    new_entry = "  " + json.dumps(q424, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    replacement = target + new_entry
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q424 to js/data.js and upgraded to v424.")

if __name__ == '__main__':
    main()
