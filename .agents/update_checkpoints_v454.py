import re

v454_entry = r'''## [v4.54] - 2026-11-15 (自動收錄國中九年級幾何圓內接四邊形與等腰三角形求角 DAO 重點考題 Q454：輔助線連接 AB、圓內接對角互補與等腰底角求角 DAO＝67 度／嚴格貫徹 100 字內極簡解析準則（僅 92 字）／幾何圖清理劇透輔助線以 300 DPI 超清重製，題庫總量達到 558 題！升級數據庫至 v455，快取升級 v4.23)
- **類型**：錯題自動收錄 / 國中數學（幾何／圓形性質、圓內接四邊形對角互補、等腰三角形半徑等長、角的加減運算、極簡 92 字秒解）
- **主要變更**：
  1. **完整收錄圓內接四邊形對角互補核心考題（Q454，歸入 2026-11-09 最新週次）**：
     - **Q454** `q_math_geo_circle_inscribed_quad_angle_dao_67_454`：
       - **題幹**：如附圖，$A$、$B$、$C$、$D$ 為圓 $O$ 上四點。若 $\angle DCB = 58^\circ$，$\angle AOB = 70^\circ$，則 $\angle DAO$ 為多少度？
       - **選項**：○ (A) 60 度 ○ (B) 63 度 ◉ (C) 67 度 ○ (D) 72 度
       - **正解**：**(C) 67 度**
       - **嚴格 100 字內極簡解析（約 92 字）**：
         1. 連接 $\overline{AB}$：圓內接四邊形對角互補，$\angle DAB = 180^\circ - 58^\circ = 122^\circ$。
         2. 在等腰 $\triangle OAB$ 中（$\overline{OA} = \overline{OB}$）：$\angle BAO = (180^\circ - 70^\circ) \div 2 = 55^\circ$。
         3. 兩角相減：$\angle DAO = \angle DAB - \angle BAO = 122^\circ - 55^\circ = 67^\circ$。選 (C)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：連 $\overline{AB}$ 破題！利用圓內接四邊形對角互補得 $\angle DAB = 122^\circ$，再利用半徑等長等腰 $\triangle OAB$ 求底角 $\angle BAO = 55^\circ$，相減即得 $\angle DAO = 67^\circ$。
  2. **圖文處理原則遵循**：
     - 依規範主動清理截圖中解答繪製的粉紅虛線輔助線 $\overline{AB}$（劇透輔助線），精確重建乾淨幾何圖形，純白底 `#FFFFFF` 保存至 `assets/questions/q_math_geo_circle_inscribed_quad_angle_dao_67_454.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v455`（`miley_wrong_questions_v455`），題庫總量達到 **558 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.23`，腳本版本標籤升級 `js/data.js?v=455`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.53]
target = "## [v4.53]"
if target in content:
    new_content = content.replace(target, v454_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.54]!")
else:
    print("Target not found!")
