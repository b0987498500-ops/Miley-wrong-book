# -*- coding: utf-8 -*-
import json

q389 = {
    "id": "q_sci_phys_energy_conservation_friction_dissipation_389",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/功與能／能量守恆定律 (總能量永不變)／力學能不守恆 vs 總能量守恆／摩擦耗散與能源退化 (可利用的能量愈來愈少)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【「力學能不守恆」≠「總能量不守恆」！能源退化核心必考！】\n1. **「總能量」永遠守恆（宇宙最高鐵則！）**：\n   - 無論是否有摩擦力或空氣阻力，轉換前與轉換後的**「能量總和永遠不變」**！\n   - 選項 (A) 說守恆不成立、(B) 說總和變少、(D) 說總能增加，通通大錯特錯！\n2. **摩擦力做負功：力學能轉為熱能**：\n   - 摩擦力存在時，動能與位能組成的「力學能」減少了，但減少的力學能 100% 轉換成了「熱能」散逸到空氣與物體中。\n3. **為什麼還要節約能源？（能源退化）**：\n   - 既然總能量守恆，為什麼人類還會缺電、缺能源？\n   - 因為散失到環境中的熱能高度分散、混亂，無法被輕易重新回收做功，也就是**「可利用的有效能量愈來愈少」**！",
    "stem": "如果有摩擦力存在時，在能量的轉移過程中，下列何項敘述正確？\n\n○ (A) 能量守恆不再成立\n○ (B) 轉換後能量總和變少\n○ (C) 可利用的能愈來愈少\n○ (D) 熱能愈來愈多，總能也增加",
    "answer": "(C) 可利用的能愈來愈少",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：堅定觀念 —— 能量守恆定律「永不失效」\n- **能量守恆定律**是自然界最基本的守恆定律之一：\n  - 能量既不能被創造，也不能被消滅；它只能從一種形式轉化為另一種形式，或從一個物體轉移到另一個物體。\n  - **在能量轉移與轉換的全部過程中，系統與環境的「能量總和恆定不變」！**\n  - 因此：\n    - (A) 能量守恆不再成立 $\\implies$ 錯誤！守恆永遠成立。\n    - (B) 轉換後能量總和變少 $\\implies$ 錯誤！總能保持不變。\n    - (D) 總能也增加 $\\implies$ 錯誤！總能不會憑空增加。\n\n---\n\n#### 第二部：辨析「力學能」與「熱能」的轉換關係\n- 當系統存在摩擦力或阻力時：\n  $$\\text{減少的力學能（動能＋位能）} = \\text{摩擦力做功產生的熱能}$$ \n- 雖然「力學能」減少了（力學能不守恆），但轉化出的「熱能」加上殘餘的力學能，總能量依然分毫不差！\n\n---\n\n#### 第三部：什麼是「能源退化」？（為什麼選 C）\n- **高品質能量 $\\to$ 低品質能量**：\n  - 電能、化學能、力學能屬於易於被操控做功的「高品質能量」。\n  - 摩擦產生的熱能會迅速散發至廣闊的周遭空氣中，變得極度分散、混亂。\n- 這些耗散於環境中的低溫熱能，在技術上極難再次被收集用來驅動機器運轉。\n- 因此，在能量轉移與轉換的過程中，**「可利用的有效能量必定愈來愈少」**（這也是全球倡導節約能源的核心科學原因），正確答案選 **(C)**。",
    "diagramUrl": ""
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v407
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v406';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v407';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q389 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    replacement = target + "  " + json.dumps(q389, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q389 to js/data.js and upgraded to v407.")

if __name__ == '__main__':
    main()

