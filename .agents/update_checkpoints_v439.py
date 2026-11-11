with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_checkpoint = r'''## [v4.39] - 2026-11-11 (自動收錄國中九年級幾何圓內角與等分圓弧重點考題 Q434：五等分圓弧求圓周角 AFC＝48 度／嚴格貫徹 100 字極簡解析準則／幾何圓圖純白底 2x Lanczos 高畫質放大優化，題庫總量達到 538 題！升級數據庫至 v435，快取升級 v4.08)
- **類型**：錯題自動收錄 / 國中數學（幾何／圓形性質、等分圓弧、圓內角定理平角互補 72 度、圓周角等於所對弧度數一半、極簡 75 字推導）
- **主要變更**：
  1. **完整收錄圓弧等分與圓內角核心考題（Q434，歸入 2026-11-09 最新週次）**：
     - **Q434** `q_math_geo_circle_inscribed_interior_angle_afc_48_434`：
       - **題幹**：如附圖，圓上 $B$、$C$、$D$、$E$ 四點將 $\widehat{ACF}$ 分成五等分，$P$ 為 $\overline{AE}$、$\overline{CF}$ 的交點，若 $\angle CPE = 108^\circ$，則 $\angle AFC$ 為多少度？
       - **選項**：○ (A) 36 度 ○ (B) 42 度 ◉ (C) 48 度 ○ (D) 54 度
       - **正解**：**(C) 48 度**
       - **嚴格 100 字內極簡解析（約 75 字）**：
         1. 設每等分弧為 $r^\circ \implies$ 弧 $AC = 2r^\circ$，弧 $EF = r^\circ$。
         2. $\angle APC = 180^\circ - 108^\circ = 72^\circ$。
         3. 由圓內角定理：$\angle APC = (\text{弧 } AC + \text{弧 } EF) \div 2 \implies 72^\circ = (2r^\circ + r^\circ) \div 2 \implies r = 48^\circ$。
         4. 故圓周角 $\angle AFC = \text{弧 } AC \div 2 = r = 48^\circ$。選 (C)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：五等分得 5 段等弧 $r$！$P$ 為圓內交點，平角互補得圓內角 $72^\circ$，由圓內角定理 $(2r+r)/2=72^\circ$ 即可秒求 $r=48^\circ$。
  2. **圖文處理原則遵循**：
     - 幾何圓圖經純白底 `#FFFFFF` 淨化、筆跡去痕、重新裁切與 2x Lanczos 高畫質放大保存至 `assets/questions/q_math_geo_circle_inscribed_interior_angle_afc_48_434.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v435`（`miley_wrong_questions_v435`），題庫總量達到 **538 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.08`，腳本版本標籤升級 `js/data.js?v=435`。

---

'''

target_idx = -1
for i, line in enumerate(lines):
    if line.startswith('## [v4.38]'):
        target_idx = i
        break

if target_idx != -1:
    lines.insert(target_idx, new_checkpoint)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Inserted [v4.39] at line {target_idx + 1}, total lines: {len(lines)}')
else:
    print('Failed to locate [v4.38]')
