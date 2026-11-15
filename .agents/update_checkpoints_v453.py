import re

v453_entry = r'''## [v4.53] - 2026-11-15 (自動收錄國中九年級幾何四點共圓判定與對角線夾角考題 Q453：對角互補判定四點共圓、同弧圓周角相等與外角定理求角 DEC＝75 度／嚴格貫徹 100 字內極簡解析準則（僅 85 字）／幾何圖清理劇透輔助圓以 300 DPI 超清重製，題庫總量達到 557 題！升級數據庫至 v454，快取升級 v4.22)
- **類型**：錯題自動收錄 / 國中數學（幾何／圓形性質、四點共圓判定、對角互補 180 度、同弧所對圓周角相等、三角形外角定理、極簡 85 字秒解）
- **主要變更**：
  1. **完整收錄四點共圓判定核心考題（Q453，歸入 2026-11-09 最新週次）**：
     - **Q453** `q_math_geo_quad_concyclic_diagonals_angle_dec_75_453`：
       - **題幹**：如附圖，在四邊形 $ABCD$ 中，$\overline{AC}$、$\overline{BD}$ 兩對角線相交於 $E$ 點。若 $\angle ABD = 40^\circ$，$\angle ADB = 30^\circ$，$\angle DBC = 45^\circ$，$\angle BDC = 65^\circ$，則 $\angle DEC$ 為多少度？
       - **選項**：○ (A) 65 度 ○ (B) 70 度 ◉ (C) 75 度 ○ (D) 80 度
       - **正解**：**(C) 75 度**
       - **嚴格 100 字內極簡解析（約 85 字）**：
         1. 對角互補：$\angle B + \angle D = (40^\circ + 45^\circ) + (30^\circ + 65^\circ) = 180^\circ \implies A、B、C、D$ 四點共圓。
         2. 同弧圓周角相等：$\angle ACB = \angle ADB = 30^\circ$。
         3. 三角形外角定理：在 $\triangle EBC$ 中，$\angle DEC = \angle DBC + \angle ACB = 45^\circ + 30^\circ = 75^\circ$。選 (C)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：見對角相加為 180°（$85^\circ + 95^\circ = 180^\circ$）必聯想「四點共圓」！由同弧圓周角得 $\angle ACB = 30^\circ$，再利用 $\triangle EBC$ 外角定理秒殺 $\angle DEC = 75^\circ$。
  2. **圖文處理原則遵循**：
     - 依規範主動清理截圖中粉紅虛線輔助圓（劇透輔助線），以高解析度向量精準重構原始乾淨四邊形幾何圖形，純白底 `#FFFFFF` 保存至 `assets/questions/q_math_geo_quad_concyclic_diagonals_angle_dec_75_453.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v454`（`miley_wrong_questions_v454`），題庫總量達到 **557 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.22`，腳本版本標籤升級 `js/data.js?v=454`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.52]
target = "## [v4.52]"
if target in content:
    new_content = content.replace(target, v453_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.53]!")
else:
    print("Target not found!")
