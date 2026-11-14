import re

v447_entry = r'''## [v4.47] - 2026-11-12 (自動收錄國中九年級幾何圓內接四邊形對角線圓周角重點考題 Q447：同弧所對圓周角相等秒解角 CAD＝52 度／嚴格貫徹 100 字極簡解析準則（僅66字）／幾何圖純白底 2x Lanczos 高畫質放大優化，題庫總量達到 551 題！升級數據庫至 v448，快取升級 v4.16)
- **類型**：錯題自動收錄 / 國中數學（幾何／圓形性質、圓內接四邊形、同弧所對圓周角相等、三角形內角和、極簡 66 字秒解）
- **主要變更**：
  1. **完整收錄圓內接四邊形圓周角核心考題（Q447，歸入 2026-11-09 最新週次）**：
     - **Q447** `q_math_geo_circle_inscribed_quad_angle_cad_52_447`：
       - **題幹**：如附圖，四邊形 $ABCD$ 為圓內接四邊形，線段 $\overline{AC}$ 和 $\overline{BD}$ 為對角線。若 $\angle BCD = 70^\circ$，$\angle BDC = 58^\circ$，則 $\angle CAD$ 為多少度？
       - **選項**：○ (A) 48 度 ◉ (B) 52 度 ○ (C) 58 度 ○ (D) 70 度
       - **正解**：**(B) 52 度**
       - **嚴格 100 字內極簡解析（約 66 字）**：
         1. 在 $\triangle BCD$ 中，$\angle CBD = 180^\circ - 70^\circ - 58^\circ = 52^\circ$。
         2. 同弧所對圓周角相等：$\angle CAD$ 與 $\angle CBD$ 對同弧 $\widehat{CD}$，故 $\angle CAD = \angle CBD = 52^\circ$。選 (B)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：圓內接四邊形對角線夾角，對同弧（CD 弧）之圓周角必相等（$\angle CAD = \angle CBD$）！先由 $\triangle BCD$ 內角和算得 $\angle CBD = 52^\circ$ 即可秒殺。
  2. **圖文處理原則遵循**：
     - 幾何圖經純白底 `#FFFFFF` 淨化、筆跡去痕、重新裁切與 2x Lanczos 高畫質放大保存至 `assets/questions/q_math_geo_circle_inscribed_quad_angle_cad_52_447.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v448`（`miley_wrong_questions_v448`），題庫總量達到 **551 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.16`，腳本版本標籤升級 `js/data.js?v=448`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.46]
target = "## [v4.46]"
if target in content:
    new_content = content.replace(target, v447_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.47]!")
else:
    print("Target not found!")

