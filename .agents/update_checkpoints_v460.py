import re

v460_entry = r'''## [v4.60] - 2026-11-16 (自動收錄國中數學等差級數奇偶項差求首項考題 Q460：奇數項和 240、偶數項和 220 對齊相減求公差 d＝－4 秒解 a₁＝64／嚴格照錄原截圖極簡解析（僅 85 字）／純文字無圖題遵循規範不放圖，題庫總量達到 564 題！升級數據庫至 v461，快取升級 v4.29)
- **類型**：錯題自動收錄 / 國中數學（數列與級數、等差級數性質、奇數項與偶數項相減求公差 5d、首項 a₁ 計算、極簡 85 字秒解）
- **主要變更**：
  1. **完整收錄等差數列奇偶項相減核心考題（Q460，歸入 2026-11-16 最新週次）**：
     - **Q460** `q_math_arithmetic_series_odd_even_terms_diff_a1_64_460`：
       - **題幹**：一個等差級數的第 $n$ 項為 $a_n$，若 $a_1 + a_3 + a_5 + a_7 + a_9 = 240$，$a_2 + a_4 + a_6 + a_8 + a_{10} = 220$，則首項 $a_1$ 之值為何？
       - **選項**：
         ○ (A) 56
         ○ (B) 60
         ◉ (C) 64
         ○ (D) 68
       - **正解**：**(C) 64**
       - **嚴格照錄原截圖極簡解析（約 85 字）**：
         - 1. 偶數項減奇數項求公差：$(a_2+a_4+a_6+a_8+a_{10}) - (a_1+a_3+a_5+a_7+a_9) = 5d = 220 - 240 = -20 \implies d = -4$。
         - 2. 求首項 $a_1$：奇數項和 $= 5a_1 + 20d = 240 \implies 5a_1 + 20(-4) = 240 \implies 5a_1 = 320 \implies a_1 = 64$。選 (C)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：1. 兩式對齊相減法：$(a_2+a_4+a_6+a_8+a_{10}) - (a_1+a_3+a_5+a_7+a_9) = 5d = 220 - 240 = -20 \implies$ 公差 $d = -4$（注意負號！）。2. 代回奇數項和 $5a_1 + 20d = 240$ 即可秒解 $a_1 = 64$。
  2. **圖文處理原則遵循**：
     - 純代數文字題目，依規範 `diagramUrl: ""` 設為空字串，不放贅圖。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v461`（`miley_wrong_questions_v461`），題庫總量達到 **564 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.29`，腳本版本標籤升級 `js/data.js?v=461`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.59]
target = "## [v4.59]"
if target in content:
    new_content = content.replace(target, v460_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.60]!")
else:
    print("Target not found!")

