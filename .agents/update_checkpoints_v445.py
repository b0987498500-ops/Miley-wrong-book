with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_checkpoint = r'''## [v4.45] - 2026-11-12 (自動收錄國中九年級幾何圓內接四邊形與外角重點考題 Q445：雙外角三角形推導角 B＝47 度／嚴格貫徹 100 字內極簡解析準則（僅88字）／幾何圓圖純白底 2x Lanczos 高畫質放大優化，題庫總量達到 549 題！升級數據庫至 v446，快取升級 v4.14)
- **類型**：錯題自動收錄 / 國中數學（幾何／圓形性質、圓內接四邊形性質、外角等於內對角、對角互補 180 度、極簡 3 步推導角 B＝47度）
- **主要變更**：
  1. **完整收錄圓內接四邊形雙外角核心考題（Q445，歸入 2026-11-09 最新週次）**：
     - **Q445** `q_math_geo_circle_inscribed_quad_external_angles_b_47_445`：
       - **題幹**：如附圖，$A$、$B$、$C$、$D$ 為圓上四點，線段 $\overline{AB}$ 和 $\overline{CD}$ 的延長線交於圓外一點 $E$，線段 $\overline{AD}$ 和 $\overline{BC}$ 的延長線交於圓外一點 $F$。若 $\angle E = 46^\circ$，$\angle F = 40^\circ$，則 $\angle B$ 為多少度？
       - **選項**：○ (A) 43 度 ◉ (B) 47 度 ○ (C) 51 度 ○ (D) 55 度
       - **正解**：**(B) 47 度**
       - **嚴格 100 字內極簡解析（約 88 字）**：
         1. 由圓內接四邊形外角等於內對角：在 $\triangle EAD$ 中，$\angle BCD = 180^\circ - 46^\circ - \angle B = 134^\circ - \angle B$。
         2. 同理在 $\triangle FCD$ 中，$\angle BAD = 180^\circ - 40^\circ - \angle B = 140^\circ - \angle B$。
         3. 對角互補：$\angle BAD + \angle BCD = 180^\circ \implies (140^\circ - \angle B) + (134^\circ - \angle B) = 180^\circ \implies 2\angle B = 94^\circ \implies \angle B = 47^\circ$。選 (B)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：圓內接四邊形「外角等於內對角」！由兩外角三角形分別列出兩對角（$134^\circ-\angle B$ 與 $140^\circ-\angle B$），相加等於 $180^\circ$ 即可秒殺！
  2. **圖文處理原則遵循**：
     - 幾何圓圖經純白底 `#FFFFFF` 淨化、答案筆跡去痕、重新裁切與 2x Lanczos 高畫質放大保存至 `assets/questions/q_math_geo_circle_inscribed_quad_external_angles_b_47_445.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v446`（`miley_wrong_questions_v446`），題庫總量達到 **549 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.14`，腳本版本標籤升級 `js/data.js?v=446`。

---

'''

target_idx = -1
for i, line in enumerate(lines):
    if line.startswith('## [v4.44]'):
        target_idx = i
        break

if target_idx != -1:
    lines.insert(target_idx, new_checkpoint)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Inserted [v4.45] at line {target_idx + 1}, total lines: {len(lines)}')
else:
    print('Failed to locate [v4.44]')
