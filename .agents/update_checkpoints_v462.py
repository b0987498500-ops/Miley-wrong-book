import re

v462_entry = r'''## [v4.62] - 2026-11-16 (自動收錄國中數學等差級數生活應用題考題 Q462：運動會趣味競賽折返跑雙程 2n 與 22 顆彈珠總距離 506 公尺／嚴格照錄原截圖極簡解析（僅 80 字）／折返跑站點示意圖純白底 3x Lanczos 超清重製，題庫總量達到 566 題！升級數據庫至 v463，快取升級 v4.31)
- **類型**：錯題自動收錄 / 國中數學（數列與級數、等差級數生活應用題、趣味競賽折返跑、往返雙程距離 2n、偶數等差級數和公式、極簡 80 字秒解）
- **主要變更**：
  1. **完整收錄折返跑等差級數和核心考題（Q462，歸入 2026-11-16 最新週次）**：
     - **Q462** `q_math_shuttle_run_marbles_series_sum_506_462`：
       - **題幹**：如圖，運動會時舉辦趣味競賽，由每班的同學輪流接力，進行折返跑遊戲，每位同學都由起點出發，每一站之間的距離相等。第 1 位同學到第一站取回 1 顆彈珠，第 2 位同學到第二站取回 1 顆彈珠，……，以此類推。若一年 3 班共取回 22 顆彈珠，則他們共跑了多少公尺？
       - **選項**：
         ○ (A) 484 公尺
         ◉ (B) 506 公尺
         ○ (C) 528 公尺
         ○ (D) 550 公尺
       - **正解**：**(B) 506 公尺**
       - **嚴格照錄原截圖極簡解析（約 80 字）**：
         - 設所跑的總距離為 $S$ 公尺。
         - 第 1 位同學跑了 $1\times 2$ 公尺，第 2 位同學跑了 $2\times 2$ 公尺，……，第 22 位同學跑了 $22\times 2$ 公尺。
         - 總距離 $S = 2 + 4 + 6 + \cdots\cdots + 44 = \frac{(2+44)\times 22}{2} = 506$（公尺）。選 (B)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：1. 「折返跑」是往返雙程：到第 $n$ 站取回彈珠，跑的距離是來回雙倍 ＝ $n \times 1\text{ m} \times 2 = 2n$ 公尺，切莫忘記乘 2（去程＋回程）！2. 總距離為偶數等差級數 $2 + 4 + 6 + \cdots\cdots + 44$（共 22 項），利用 $\frac{(2+44)\times 22}{2} = 506$ 公尺。
  2. **圖文處理原則遵循**：
     - 折返跑站點間距示意圖經精確裁切、純白底 `#FFFFFF` 淨化與 3x Lanczos 高畫質放大保存至 `assets/questions/q_math_shuttle_run_marbles_series_sum_506_462.png`，支援燈箱縮放檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v463`（`miley_wrong_questions_v463`），題庫總量達到 **566 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.31`，腳本版本標籤升級 `js/data.js?v=463`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.61]
target = "## [v4.61]"
if target in content:
    new_content = content.replace(target, v462_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.62]!")
else:
    print("Target not found!")
