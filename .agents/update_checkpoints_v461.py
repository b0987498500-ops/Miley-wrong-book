import re

v461_entry = r'''## [v4.61] - 2026-11-16 (自動收錄國中數學等差級數生活應用題考題 Q461：正五邊形排隊陣型每圈人數公差 d＝10 與 6 圈總和 210 人／嚴格照錄原截圖極簡解析（僅 90 字）／排隊點陣圖純白底 4x Lanczos 超清重製，題庫總量達到 565 題！升級數據庫至 v462，快取升級 v4.30)
- **類型**：錯題自動收錄 / 國中數學（數列與級數、等差級數生活應用題、基測經典題、正五邊形排列頂點扣重複、等差級數求和公式、極簡 90 字秒解）
- **主要變更**：
  1. **完整收錄正五邊形排隊等差級數和核心考題（Q461，歸入 2026-11-16 最新週次）**：
     - **Q461** `q_math_regular_pentagon_formation_series_sum_210_461`：
       - **題幹**：如圖，有若干位學生排出正五邊形的隊形，由內而外共排了 6 圈，且學生人數剛好排完。已知最內圈每邊 3 人，往外每圈每邊增加 2 人（即由內向外算起第 2 圈每邊 5 人，第 3 圈每邊 7 人，…）。請問此隊形的學生共有多少人？〔92.基測 II〕
       - **選項**：
         ◉ (A) 210
         ○ (B) 240
         ○ (C) 285
         ○ (D) 630
       - **正解**：**(A) 210**
       - **嚴格照錄原截圖極簡解析（約 90 字）**：
         - 1. 各圈人數（頂點扣重複）：
              第 1 圈 ＝ $3\times 5 - 5 = 10$（人）；第 2 圈 ＝ $5\times 5 - 5 = 20$（人）；第 3 圈 ＝ $7\times 5 - 5 = 30$（人）
              各圈人數成公差 $d = 10$ 之等差數列。
         - 2. 求 6 圈總人數：利用等差級數和公式 $S_6 = \frac{6 \times [2\times 10 + (6-1)\times 10]}{2} = 3 \times 70 = 210$（人）。選 (A)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：1. 正五邊形「頂點重複計算」陷阱：每圈總人數為「每邊人數$\times 5 - 5$（扣除 5 個重複頂點）」，千萬不能算成 $3\times 5 = 15$！2. 列出各圈人數為 10, 20, 30, ...（公差 10），再套用等差級數求和公式 $S_6 = 210$ 人。
  2. **圖文處理原則遵循**：
     - 正五邊形隊列點陣圖經精確裁切、純白底 `#FFFFFF` 淨化與 4x Lanczos 高畫質放大保存至 `assets/questions/q_math_regular_pentagon_formation_series_sum_210_461.png`，支援燈箱縮放檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v462`（`miley_wrong_questions_v462`），題庫總量達到 **565 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.30`，腳本版本標籤升級 `js/data.js?v=462`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.60]
target = "## [v4.60]"
if target in content:
    new_content = content.replace(target, v461_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.61]!")
else:
    print("Target not found!")
