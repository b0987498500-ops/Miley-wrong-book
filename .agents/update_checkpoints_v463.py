import re

v463_entry = r'''## [v4.63] - 2026-11-16 (自動收錄國中數學等差級數最大值極值考題 Q463：首項 130、公差－4，一般項轉折點 aₙ＜0 得 n＞33.5 秒解前 33 項和為最大／嚴格照錄原截圖極簡解析（僅 75 字）／純文字無圖題遵循規範不放圖，題庫總量達到 567 題！升級數據庫至 v464，快取升級 v4.32)
- **類型**：錯題自動收錄 / 國中數學（數列與級數、等差級數前 n 項和之極值問題最大值、一般項 aₙ 正負轉折點判定、不等式求解、極簡 75 字秒解）
- **主要變更**：
  1. **完整收錄等差級數和最大值極值核心考題（Q463，歸入 2026-11-16 最新週次）**：
     - **Q463** `q_math_arithmetic_series_max_sum_positive_terms_n33_463`：
       - **題幹**：有一等差級數的首項是 130，公差是 －4，若前 $n$ 項的和為最大，則 $n =$ ？
       - **選項**：
         ○ (A) 30
         ○ (B) 31
         ○ (C) 32
         ◉ (D) 33
       - **正解**：**(D) 33**
       - **嚴格照錄原截圖極簡解析（約 75 字）**：
         - 1. 找負數項轉折點：設第 $n$ 項開始小於 0，$a_n = 130 + (n-1)\times(-4) < 0 \implies -4n + 134 < 0 \implies 4n > 134 \implies n > 33.5$。
         - 2. 即第 34 項開始為負數，故加到第 33 項的和為最大，取 $n = 33$。選 (D)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：1. 前 $n$ 項和「最大值」核心觀念：只要項數為正（$a_n > 0$），越加越大；一旦變成負數（$a_n < 0$），總和就開始減少，故加到「最後一個非負項」為止！2. 解出 $n > 33.5$ 代表第 34 項開始為負數，故取 $n = 33$ 達最大和。
  2. **圖文處理原則遵循**：
     - 純代數文字題目，依規範 `diagramUrl: ""` 設為空字串，不放贅圖。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v464`（`miley_wrong_questions_v464`），題庫總量達到 **567 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.32`，腳本版本標籤升級 `js/data.js?v=464`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.62]
target = "## [v4.62]"
if target in content:
    new_content = content.replace(target, v463_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.63]!")
else:
    print("Target not found!")

