import re

v458_entry = r'''## [v4.58] - 2026-11-15 (自動收錄國中理化簡單機械輪軸原理與作功考題 Q458：釣竿捲線器省力輪軸施力 40N 與作功 1500J／嚴格照錄原截圖解析（僅 65 字）／釣竿捲線器示意圖純白底 2x Lanczos 超清重製，題庫總量達到 562 題！升級數據庫至 v459，快取升級 v4.27)
- **類型**：錯題自動收錄 / 國中理化（簡單機械、輪軸原理、省力輪軸、功的原理 W＝F×S、使用機械不省功、極簡 65 字秒解）
- **主要變更**：
  1. **完整收錄釣竿捲線器輪軸作功核心考題（Q458，歸入 2026-11-09 最新週次）**：
     - **Q458** `q_sci_phys_fishing_rod_wheel_axle_work_1500j_458`：
       - **題幹**：如附圖，阿康使用附有捲線器的釣竿釣魚。捲線器的線軸半徑為 4 cm，手搖捲軸手把半徑為 10 cm。如果魚掙扎時的平均施力為 100 牛頓，釣線捲了大約 15 公尺，則請問阿康平均施力多少牛頓？大約作了多少功？
       - **選項**：
         ○ (A) 80 牛頓，100 焦耳
         ○ (B) 40 牛頓，600 焦耳
         ○ (C) 80 牛頓，3000 焦耳
         ◉ (D) 40 牛頓，1500 焦耳
       - **正解**：**(D) 40 牛頓，1500 焦耳**
       - **嚴格照錄原截圖解析（約 65 字）**：
         - 1. 輪軸平衡：阿康施力在輪（10 cm）、抗力在軸（4 cm），$F_{康} \times 10 = 100 \times 4 \implies F_{康} = 40$ 牛頓。
         - 2. 作功：$W = F_{魚} \times S = 100\text{ N} \times 15\text{ m} = 1500$ 焦耳（使用機械不省功）。選 (D)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：1. 輪軸施力在輪（10 cm）、抗力在軸（4 cm）為省力輪軸（40 N）。2. 作功直接算抗力作功 $W = 100\text{ N} \times 15\text{ m} = 1500\text{ J}$，使用機械不省功！
  2. **圖文處理原則遵循**：
     - 裁切釣竿與捲線器線軸、捲軸半徑標示圖，經純白底 `#FFFFFF` 淨化與 2x Lanczos 高畫質放大保存至 `assets/questions/q_sci_phys_fishing_rod_wheel_axle_work_1500j_458.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v459`（`miley_wrong_questions_v459`），題庫總量達到 **562 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.27`，腳本版本標籤升級 `js/data.js?v=459`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.57]
target = "## [v4.57]"
if target in content:
    new_content = content.replace(target, v458_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.58]!")
else:
    print("Target not found!")
