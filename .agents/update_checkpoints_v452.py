import re

v452_entry = r'''## [v4.52] - 2026-11-15 (自動收錄國中九年級幾何圓內接梯形與弦長半徑求圓周角重點考題 Q452：弦長等於半徑聯想正三角形、平行線截等弧求角 ACB＝55 度／嚴格貫徹 100 字內極簡解析準則（僅 85 字）／幾何圖清理劇透輔助線以 300 DPI 超清重製，題庫總量達到 556 題！升級數據庫至 v453，快取升級 v4.21)
- **類型**：錯題自動收錄 / 國中數學（幾何／圓形性質、圓內接梯形、平行線截等弧、弦長等於半徑正三角形、圓周角與弧度換算、極簡 85 字秒解）
- **主要變更**：
  1. **完整收錄圓內接梯形核心考題（Q452，歸入 2026-11-09 最新週次）**：
     - **Q452** `q_math_geo_circle_inscribed_trapezoid_angle_acb_55_452`：
       - **題幹**：如附圖，圓 $O$ 的半徑為 5，梯形 $ABCD$ 為圓內接四邊形。若 $\overline{AD} // \overline{BC}$，$\overline{AD} = 5$，$\angle BDC = 40^\circ$，則 $\angle ACB$ 為多少度？
       - **選項**：○ (A) 65 度 ○ (B) 60 度 ◉ (C) 55 度 ○ (D) 40 度
       - **正解**：**(C) 55 度**
       - **嚴格 100 字內極簡解析（約 85 字）**：
         1. 連接 $\overline{AO}$、$\overline{DO}$：因 $\overline{AD} = \overline{AO} = \overline{DO} = 5$，故 $\triangle AOD$ 為正三角形 $\implies \widehat{AD} = 60^\circ$。
         2. $\widehat{BC} = 2\angle BDC = 80^\circ$。又平行線截等弧（$\overline{AD} // \overline{BC}$），故 $\widehat{AB} = \widehat{CD} = (360^\circ - 80^\circ - 60^\circ) \div 2 = 110^\circ$。
         3. 圓周角 $\angle ACB = \widehat{AB} \div 2 = 55^\circ$。選 (C)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：見弦長等於半徑（$\overline{AD}=r=5$）秒聯想「正三角形（圓心角/弧度為 $60^\circ$）」！再由「平行線截等弧」扣除上下兩弧求得側弧，圓周角即為側弧之一半。
  2. **圖文處理原則遵循**：
     - 依規範主動清理截圖中粉紅虛線輔助線（劇透線條），精確重建圓內接梯形幾何圖形，純白底 `#FFFFFF` 與 300 DPI 超清重製保存至 `assets/questions/q_math_geo_circle_inscribed_trapezoid_angle_acb_55_452.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v453`（`miley_wrong_questions_v453`），題庫總量達到 **556 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.21`，腳本版本標籤升級 `js/data.js?v=453`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.51]
target = "## [v4.51]"
if target in content:
    new_content = content.replace(target, v452_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.52]!")
else:
    print("Target not found!")

