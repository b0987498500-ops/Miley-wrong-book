# 麥麥錯題網站 Checkpoint 歷史紀錄

- **專案名稱**：麥麥錯題網站 (Miley Wrong Question Review Book)
- **GitHub 倉庫**：https://github.com/b0987498500-ops/Miley-wrong-book
- **線上網站網址 (GitHub Pages)**：https://b0987498500-ops.github.io/Miley-wrong-book/

## [v1.86] - 2026-10-05 (自動收錄 5 道國二數學與英文經典錯題：雙重平方根估算、過去進行被動語態、倒數有理化、帶分數根號體積與乘法公式平方根，升級數據庫至 v197)
- **類型**：國二數學與英文錯題自動收錄 / 平方根與根號運算 / 過去進行被動語態 / 數據庫升級 v197 / 快取升級 v1.64
- **主要變更**：
  1. **收錄 5 道國二數學與英文重點錯題**：
     - `q_math_sqrt_double_root_estimation_108`（數學）：P 是 $\sqrt{169}$ 的正平方根估算（$3 < P < 4$），正解 **(C)**。
     - `q_eng_past_continuous_passive_museum_109`（英文）：When I visited there 時態與過去進行被動語態（was being built），正解 **(A)**。
     - `q_math_sqrt_reciprocal_rationalization_comparison_110`（數學）：根號減法倒數有理化比較大小（$A < B < C$），正解 **(D)**。
     - `q_math_sqrt_cuboid_volume_height_111`（數學）：長方體體積與帶分數根號化簡求高（$rac{\sqrt{6}}{2}$），正解 **(A)**。
     - `q_math_sqrt_mixed_fraction_algebraic_identity_112`（數學）：帶分數結合平方差公式求平方根（$\pm rac{122}{11}$），正解 **(B)**。
  2. **純淨排版與週次編配**：
     - 歸檔至 `2026-10-05` (最新週次)。全數採純淨繁體中文標準排版，`diagramUrl: ""`。
  3. **數據庫與快取升級**：
     - 升級 `STORAGE_KEY` 至 `v197`，`sw.js` 快取版本更新至 `v1.64`，`index.html` 更新至 `v=197`。

---

## [v1.85] - 2026-10-05 (自動收錄 1 道國二數學二次平方根經典陷阱題「P 是 √169 的正平方根」與 YouTube 影音解題連結，升級題庫數據庫至 v197)
- **類型**：國二數學錯題自動收錄 / 雙重根號正平方根陷阱 / YouTube 影音解題教學連結 / 數據庫升級 v197
- **主要變更**：
  1. **收錄國二數學二次平方根錯題一道 (`q_math_sqrt_positive_square_root_trap_108`)**：
     - **題幹**：已知 P 是 $\sqrt{169}$ 的正平方根，則下列關於 P 值的敘述何者正確？
     - **破題關鍵與正解**：先求底數化簡 $\sqrt{169} = 13$，再求 $13$ 的正平方根 $P = \sqrt{13}$；由 $3^2 = 9 < 13 < 16 = 4^2$ 可知 $3 < P < 4$（$P \approx 3.605$）。正解為 **(C)**。
     - **影音解題教學連結**：於詳解中嵌入 YouTube 解題影片網址 `https://www.youtube.com/watch?v=0euMlPb_D68`。
  2. **純淨排版與週次編配**：
     - 歸檔至 `2026-10-05` (最新週次)。純文字題目，無須額外圖片，`diagramUrl: ""`。
  3. **數據庫與快取升級**：
     - 升級 `STORAGE_KEY` 至 `v197`，`sw.js` 快取版本更新至 `v1.63`。

---

