import re

v456_entry = r'''## [v4.56] - 2026-11-15 (自動收錄國中理化功與能滑輪組作功與上升高度考題 Q456：功的原理不省功、輸入功全轉為重力位能求等速上升高度相等甲＝乙＝丙／嚴格照錄原截圖解析（僅 54 字）／滑輪組圖純白底 2x Lanczos 超清重製，題庫總量達到 560 題大里程碑！升級數據庫至 v457，快取升級 v4.25)
- **類型**：錯題自動收錄 / 國中理化（功與能、功的原理不省功、定滑輪 vs 動滑輪 vs 滑輪組、重力位能與上升高度 W＝mgh、極簡 54 字秒解）
- **主要變更**：
  1. **完整收錄滑輪組功與能核心考題（Q456，歸入 2026-11-09 最新週次）**：
     - **Q456** `q_sci_phys_pulleys_work_energy_height_same_456`：
       - **題幹**：如附圖，若三種裝置之力對物體皆作功 800 焦耳後，則物體等速度上升的高度關係為何？（動滑輪重及摩擦力不計）
       - **選項**：○ (A) 甲＞乙＞丙 ◉ (B) 甲＝乙＝丙 ○ (C) 甲＜乙＜丙 ○ (D) 甲＜乙＝丙
       - **正解**：**(B) 甲＝乙＝丙**
       - **嚴格照錄原截圖解析（僅 54 字）**：
         - 動滑輪重及摩擦力不計，所以輸入的功全轉成位能，位能都是 800 焦耳。因為三者物重皆相同（80 kgw），所以上升高度 h 也都相同（甲＝乙＝丙）。選 (B)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：功的原理（使用任何機械絕不省功）！不計摩擦與滑輪重時，輸入功全轉為重力位能（$W = mgh$）；物重相同且作功相同，上升高度必相等（甲＝乙＝丙）。
  2. **圖文處理原則遵循**：
     - 精準裁切甲（定滑輪）、乙（動滑輪）、丙（滑輪組）之對照圖，經純白底 `#FFFFFF` 淨化與 2x Lanczos 高畫質放大保存至 `assets/questions/q_sci_phys_pulleys_work_energy_height_same_456.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v457`（`miley_wrong_questions_v457`），題庫總量達到 **560 題** 大里程碑！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.25`，腳本版本標籤升級 `js/data.js?v=457`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.55]
target = "## [v4.55]"
if target in content:
    new_content = content.replace(target, v456_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.56]!")
else:
    print("Target not found!")

