import re

v448_entry = r'''## [v4.48] - 2026-11-14 (自動收錄國中理化酸鹼指示劑與漸層變色考題 Q448：蝶豆花指示劑中性藍遇酸變紅紫、由上至下試管甲乙顏色漸層變化判斷／嚴格採用原截圖解析且控制在 60 字內／圖表整合純白底 2x Lanczos 超清重製，題庫總量達到 552 題！升級數據庫至 v449，快取升級 v4.17)
- **類型**：錯題自動收錄 / 國中理化（酸鹼反應與指示劑、天然指示劑蝶豆花、密度分層、漸層變色判讀、極簡 58 字秒解）
- **主要變更**：
  1. **完整收錄蝶豆花指示劑變色核心考題（Q448，歸入 2026-11-09 最新週次）**：
     - **Q448** `q_sci_chem_butterfly_pea_indicator_color_gradient_448`：
       - **題幹**：
         【表(一)】
         | 酸鹼性 | 蝶豆花原汁顏色 |
         | :---: | :---: |
         | 酸性 | 紅紫色 |
         | 中性 | 藍色 |
         | 鹼性 | 黃綠色 |

         如附圖(二)所示，試管中由上而下依序分層注入蝶豆花原汁、檸檬汁與果糖糖漿。關於圖(二)試管中由甲至乙範圍內的顏色漸層變化，下列何者正確？
       - **選項**：◉ (A) 由藍色變成紅紫色 ○ (B) 由紅紫色變成藍色 ○ (C) 由藍色變成黃綠色 ○ (D) 由黃綠色變成藍色
       - **正解**：**(A) 由藍色變成紅紫色**
       - **嚴格依循圖片原解析優先原則（僅 58 字）**：
         - 蝶豆花中性呈現藍色，遇到檸檬汁（酸性）呈現紅紫色。由上層甲（蝶豆花原汁）至下層乙（檸檬汁層），顏色漸層為由藍色變成紅紫色。選 (A)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：先看清位置箭頭方向！甲為最上層蝶豆花原汁（中性呈藍色），乙為檸檬汁層（酸性呈紅紫色），故甲至乙漸層必為「由藍變紅紫」。
  2. **圖文處理原則遵循**：
     - 將表(一)與圖(二)重新整合成雙欄標準示意圖，經純白底 `#FFFFFF` 淨化、筆跡去痕、重新裁切與 2x Lanczos 高畫質放大保存至 `assets/questions/q_sci_chem_butterfly_pea_indicator_color_gradient_448.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v449`（`miley_wrong_questions_v449`），題庫總量達到 **552 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.17`，腳本版本標籤升級 `js/data.js?v=449`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.47]
target = "## [v4.47]"
if target in content:
    new_content = content.replace(target, v448_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.48]!")
else:
    print("Target not found!")
