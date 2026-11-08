# -*- coding: utf-8 -*-
import json

q393 = {
    "id": "q_sci_phys_bouncing_ball_energy_conservation_loss_393",
    "examPeriod": "一段",
    "subject": "自然/理化",
    "errorReason": "觀念不懂",
    "concept": "力學/功與能／能量守恆定律 (全宇宙總能量恆定不變)／球體碰撞非彈性耗散 (力學能轉為熱能與聲能)／能源退化／審題陷阱 (何者錯誤)",
    "uploadDate": "2026-11-08",
    "mondayDate": "2026-11-02",
    "mondayDates": ["2026-11-02"],
    "weekLabel": "2026-11-02 (最新週次)",
    "isGuessedOrUnstable": False,
    "mistakeNote": "💡 **易錯警示筆記**：【反彈高度變矮「只是力學能變少」，「總能量依然絕對守恆」！】\n1. **「力學能不守恆」≠「總能量不守恆」**：\n   - 球彈不回原高度，是因為碰撞時形變摩擦轉化出了「熱能」和「聲響」；\n   - 球的力學能（動能＋位能）確實變少了，但減少的力學能 100% 變成了環境中的熱能與聲能！\n2. **宇宙基本鐵則 —— 能量守恆永遠成立**：\n   - 只要不是核反應（質能互換），所有物理與化學過程的「總能量永遠守恆」！\n   - 選項 (B) 說「能量不守恆」必定是錯誤的，題目問「何者錯誤」，故秒選 (B)！\n3. **能源退化的本質**：\n   - 散失到空氣與地面的熱能和聲音無法輕易被重新回收推動球體跳躍，這就是「轉換成沒有用的能量了」，(A) 敘述完全正確！",
    "stem": "一個球自高處自由落下，與地面碰撞後又彈回，理想情況下應彈至原來之高度，但實際遠比原來高度為小，下列敘述何者錯誤？\n\n○ (A) 有部分能量轉換成沒有用的能量了\n○ (B) 能量不守恆\n○ (C) 能量守恆\n○ (D) 球與地面碰撞時，部分能量變成熱能。",
    "answer": "(B) 能量不守恆",
    "explanation": "### 【破題關鍵三部曲】\n\n#### 第一部：鎖定物理最高鐵則 —— 能量守恆定律永遠成立\n- **能量守恆定律**：\n  - 能量既不能無中生有，也不能被完全消滅，只能由一種形式轉變為另一種形式。\n  - **在包含球、地面及周遭空氣的整個系統中，能量總和恆定不變！**\n  - 因此：\n    - 選項 (C)「能量守恆」是**正確的**。\n    - 選項 (B)「能量不守恆」是**錯誤的**。\n  - 題目要求選出錯誤的敘述，因此**直接秒殺選 (B)**！\n\n---\n\n#### 第二部：為什麼球實際反彈的高度遠比原來小？\n1. **理想情況（完全彈性碰撞）**：\n   - 沒有任何阻力與能量耗散，落下時減少的重力位能全部轉為動能，碰撞後動能又全部轉為重力位能，故能彈回原高度（力學能守恆）。\n2. **實際情況（非完全彈性碰撞）**：\n   - 球在接觸地面瞬間發生劇烈形變與摩擦，部分力學能轉變成了**「熱能」**（球與地面微幅升溫）與**「聲能」**（發出咚的碰撞聲）。\n   - 因此球所保有的力學能減少了，反彈高度必定比原高度小。\n   - 故選項 (D)「球與地面碰撞時，部分能量變成熱能」敘述正確。\n\n---\n\n#### 第三部：理解「能源退化」（驗證選項 A）\n- 碰撞時耗散到周遭環境中的熱能與聲波，極度分散於空氣與地面中，無法再被輕易回收聚集轉化為球體上升的機械功。\n- 這種「高品質的力學能轉變為無法再次有效利用的低品質熱能」的現象稱為**能源退化**。\n- 因此選項 (A)「有部分能量轉換成沒有用的能量了」敘述正確。",
    "diagramUrl": ""
}

def main():
    data_path = 'js/data.js'
    with open(data_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Update STORAGE_KEY to v411
    old_key = "const STORAGE_KEY = 'miley_wrong_questions_v410';"
    new_key = "const STORAGE_KEY = 'miley_wrong_questions_v411';"
    assert old_key in content, "old_key not found in data.js"
    content = content.replace(old_key, new_key, 1)

    # 2. Insert q393 at the top of INITIAL_SEED_DATA
    target = "const INITIAL_SEED_DATA = [\n"
    replacement = target + "  " + json.dumps(q393, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",\n"
    assert target in content, "target not found in data.js"
    content = content.replace(target, replacement, 1)

    with open(data_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print("Successfully added Q393 to js/data.js and upgraded to v411.")

if __name__ == '__main__':
    main()

