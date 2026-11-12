with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_checkpoint = r'''## [v4.44] - 2026-11-12 (自動收錄國中公民政府體制內閣制考題 Q444：國會多數組閣出任首相、虛位元首之英國內閣制／嚴格落實社會科極簡原圖解析準則（僅48字）／體制示意圖純白底 2x Lanczos 高畫質放大優化，題庫總量達到 548 題！升級數據庫至 v445，快取升級 v4.13)
- **類型**：錯題自動收錄 / 國中公民（民主國家的政府體制、內閣制之核心特徵、多數黨組閣出任首相、行政立法合一、虛位元首與英國典範）
- **主要變更**：
  1. **完整收錄內閣制核心體制考題（Q444，歸入 2026-11-09 最新週次）**：
     - **Q444** `q_soc_civ_parliamentary_system_cabinet_uk_100_444`：
       - **題幹**：附圖是小慈用來輔助說明某國家政府體制的圖形，根據其內容判斷，她最可能是在說明下列哪一國家？【100年第2次基測】
       - **選項**：○ (A) 北韓 ◉ (B) 英國 ○ (C) 美國 ○ (D) 中華民國。
       - **正解**：**(B) 英國**
       - **原圖精準極簡解析（48 字）**：
         - 圖中「國會過半數席位產生首相、虛位元首、內閣對議會負責」為典型「內閣制」特徵，以英國為代表。故選 (B)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：見「多數黨黨魁任首相、虛位元首（英王）、行政對立法負責」必為「內閣制」（英國）！美國為總統制，我國為雙首長制。
  2. **圖文處理原則遵循**：
     - 政府體制圓餅示意圖經純白底 `#FFFFFF` 淨化、筆跡去痕、重新裁切與 2x Lanczos 高畫質放大保存至 `assets/questions/q_soc_civ_parliamentary_system_cabinet_uk_100_444.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v445`（`miley_wrong_questions_v445`），題庫總量達到 **548 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.13`，腳本版本標籤升級 `js/data.js?v=445`。

---

'''

target_idx = -1
for i, line in enumerate(lines):
    if line.startswith('## [v4.43]'):
        target_idx = i
        break

if target_idx != -1:
    lines.insert(target_idx, new_checkpoint)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Inserted [v4.44] at line {target_idx + 1}, total lines: {len(lines)}')
else:
    print('Failed to locate [v4.43]')

