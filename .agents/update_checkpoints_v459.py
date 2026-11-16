import re

v459_entry = r'''## [v4.59] - 2026-11-16 (自動收錄國中數學平方差公式與等差級數求和考題 Q459：86²－85²＋……＋2²－1² 平方差化簡分組求和 3741／嚴格照錄原截圖極簡解析（僅 85 字）／純文字無圖題遵循規範不放圖，題庫總量達到 563 題！升級數據庫至 v460，快取升級 v4.28)
- **類型**：錯題自動收錄 / 國中數學（乘法公式、平方差公式 a²－b²＝(a＋b)(a－b)、等差級數求和公式、分組化簡妙算、極簡 85 字秒解）
- **主要變更**：
  1. **完整收錄平方差分組與等差級數和核心考題（Q459，歸入 2026-11-16 最新週次）**：
     - **Q459** `q_math_diff_squares_series_sum_86_to_1_3741_459`：
       - **題幹**：求 86² － 85² ＋ 84² － 83² ＋ …… ＋ 2² － 1² 之值為何？
       - **選項**：
         ○ (A) 3641
         ◉ (B) 3741
         ○ (C) 3781
         ○ (D) 3841
       - **正解**：**(B) 3741**
       - **嚴格照錄原截圖極簡解析（約 85 字）**：
         - 1. 平方差分組：利用 $a^2 - b^2 = (a+b)(a-b)$，兩兩相鄰項差皆為 1：
              原式 ＝ $(86+85)\times 1 + (84+83)\times 1 + \cdots\cdots + (2+1)\times 1 = 86+85+\cdots\cdots+1$。
         - 2. 等差級數求和：利用梯形公式 $S_n = (1+86)\times 86 \div 2 = 87\times 43 = 3741$。選 (B)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：1. 看到「平方差交錯相減」，兩兩分組利用 $a^2-b^2=(a+b)(a-b)$，因相鄰項之差為 1，秒轉化為「1 到 86 連續整數求和」。2. 等差級數和公式：$(\text{首項}+\text{末項})\times\text{項數} \div 2 = (1+86)\times 86 \div 2 = 3741$，切勿硬算平方！
  2. **圖文處理原則遵循**：
     - 純代數文字題目，依規範 `diagramUrl: ""` 設為空字串，不放贅圖。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v460`（`miley_wrong_questions_v460`），題庫總量達到 **563 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.28`，腳本版本標籤升級 `js/data.js?v=460`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.58]
target = "## [v4.58]"
if target in content:
    new_content = content.replace(target, v459_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.59]!")
else:
    print("Target not found!")
