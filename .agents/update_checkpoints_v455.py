import re

v455_entry = r'''## [v4.55] - 2026-11-15 (自動收錄國中理化簡單機械核心審題陷阱考題 Q455：剪刀刃口屬於斜面／楔之應用／嚴格照錄原截圖解析（僅 18 字）／純文字零符號亂碼標準排版，題庫總量達到 559 題！升級數據庫至 v456，快取升級 v4.24)
- **類型**：錯題自動收錄 / 國中理化（簡單機械、斜面與楔之應用、刀刃剖面、剪刀本體槓桿 vs 刃口斜面審題陷阱、極簡 18 字秒解）
- **主要變更**：
  1. **完整收錄簡單機械核心審題陷阱考題（Q455，歸入 2026-11-09 最新週次）**：
     - **Q455** `q_sci_phys_simple_machine_scissors_blade_inclined_plane_455`：
       - **題幹**：剪刀的刃口是哪一種形式的機械？
       - **選項**：○ (A) 槓桿 ○ (B) 輪軸 ○ (C) 滑輪 ◉ (D) 斜面
       - **正解**：**(D) 斜面**
       - **嚴格照錄原截圖解析（僅 18 字）**：
         - 剪刀的刃口是斜面（楔）的應用。選 (D)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：審題陷阱！整把剪刀本體操作為「槓桿」，但若特指「刀刃刃口（刀鋒）」則是利用劈（楔）的「斜面」原理省力切割，切勿看太快選錯！
  2. **圖文處理原則遵循**：
     - 本題為純文字考題，無幾何或圖表，`diagramUrl: ""` 設為空字串，以零符號亂碼標準繁體中文呈現。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v456`（`miley_wrong_questions_v456`），題庫總量達到 **559 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.24`，腳本版本標籤升級 `js/data.js?v=456`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.54]
target = "## [v4.54]"
if target in content:
    new_content = content.replace(target, v455_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.55]!")
else:
    print("Target not found!")
