import re

v451_entry = r'''## [v4.51] - 2026-11-15 (自動收錄國中理化熱量與生石灰加熱生活應用考題 Q451：氧化鈣加水放熱、水比熱大保溫特性、冰熔化熱與熱量計算錯誤判斷／嚴格採用原截圖解析且控制在 70 字內／純文字零符號亂碼排版，題庫總量達到 555 題！升級數據庫至 v452，快取升級 v4.20)
- **類型**：錯題自動收錄 / 國中理化（化學反應熱、氧化鈣加水放熱、水的比熱特性、熱量計算 H＝msΔT、冰熔化熱相變潛熱、極簡 60 字秒解）
- **主要變更**：
  1. **完整收錄氧化鈣反應與熱量計算核心考題（Q451，歸入 2026-11-09 最新週次）**：
     - **Q451** `q_sci_phys_chem_calcium_oxide_heat_water_specific_heat_451`：
       - **題幹**：近期開戰的烏俄戰爭，造成不少的人員傷亡、糧食短缺，有民眾在網路上就建議：可帶速食調理包、氧化鈣化學物質，當肚子餓時，可將氧化鈣和水反應產生熟石灰（為一種鹼性物質），並放出大量的熱讓水沸騰，再來加熱速食調理包，補充食物短缺的問題。試問關於氧化鈣和水的反應過程中，何者敘述錯誤？
       - **選項**：
         ○ (A) 熟石灰的學名應為氫氧化鈣
         ○ (B) 此反應屬於放熱反應
         ○ (C) 以沸騰的水加熱速食調理包，主要是利用水的比熱大，溫度變化小的特性
         ◉ (D) 若要用 1 公升的水使其溫度由 $-20^\circ\text{C}$ 上升至 $80^\circ\text{C}$，需要 100 卡
       - **正解**：**(D)**
       - **嚴格照錄原截圖解析（約 60 字）**：
         - (D) 除了溫度變化的熱量外，還要考慮冰熔化成水所吸收的熔化熱（且 1 公升水為 1000 克，所需熱量遠大於 100 卡）。故 (D) 敘述錯誤，選 (D)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：水在 $0^\circ\text{C}$ 以下為冰，由 $-20^\circ\text{C}$ 升至 $80^\circ\text{C}$ 跨越相變，必計入冰熔化熱；且 1 公升水質量為 1000 克，切勿漏算質量與相變！
  2. **圖文處理原則遵循**：
     - 本題為純文字考題，無幾何或實驗實質圖形，`diagramUrl: ""` 設為空字串，以零符號亂碼標準繁體中文呈現。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v452`（`miley_wrong_questions_v452`），題庫總量達到 **555 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.20`，腳本版本標籤升級 `js/data.js?v=452`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.50]
target = "## [v4.50]"
if target in content:
    new_content = content.replace(target, v451_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.51]!")
else:
    print("Target not found!")

