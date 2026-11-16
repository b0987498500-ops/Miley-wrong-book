import re

v465_entry = r'''## [v4.65] - 2026-11-16 (自動收錄國中幾何圓切線性質與同高三角形面積比考題 Q466：切線垂直半徑 OB⊥AB 畢氏定理求 OA＝15，同高面積比 AC:OA＝2:5 秒解 △ABC 面積 108/5／嚴格照錄原截圖極簡解析（僅 95 字）／主動去痕消除劇透輔助線 OB 與純白底 2x Lanczos 超清重製，題庫總量達到 570 題！升級數據庫至 v466，快取升級 v4.34)
- **類型**：錯題自動收錄 / 國中幾何（圓形幾何性質、圓切線性質、切點半徑垂直切線、畢氏定理、同高三角形面積比等於底邊比、極簡 95 字秒解）
- **主要變更**：
  1. **完整收錄圓切線與三角形面積比核心考題（Q466，歸入 2026-11-16 最新週次）**：
     - **Q466** `q_math_geo_circle_tangent_ab12_oc9_area_abc_108_5_466`：
       - **題幹**：如圖，$\overline{AB}$ 切圓 $O$ 於 $B$ 點，$\overline{AO}$ 交圓 $O$ 於 $C$ 點。若 $\overline{AB} = 12$，$\overline{OC} = 9$，則 $\triangle ABC$ 的面積為何？
       - **選項**：
         ○ (A) 18
         ○ (B) 20
         ◉ (C) 108/5（或 21.6）
         ○ (D) 27
       - **正解**：**(C) 108/5（或 21.6）**
       - **嚴格照錄原截圖極簡解析（約 95 字）**：
         - 1. 連半徑 $\overline{OB}$ 垂直切線 $\overline{AB}$：直角 $\triangle OAB$ 中，$\overline{OB} = \overline{OC} = 9$，由畢氏定理 $\overline{OA} = \sqrt{9^2 + 12^2} = 15 \implies \overline{AC} = 15 - 9 = 6$。
         - 2. 同高面積比等於底邊比：$\triangle ABC$ 與 $\triangle OAB$ 同高，面積比 $= \overline{AC} : \overline{OA} = 6 : 15 = 2 : 5$。
         - 3. $\triangle OAB$ 面積 $= 9\times 12 \div 2 = 54 \implies \triangle ABC$ 面積 $= 54 \times \frac{2}{5} = \frac{108}{5}$。選 (C)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：1.「見切點連圓心」：連接半徑 $\overline{OB}$ 必垂直切線 $\overline{AB}$ 構成直角 $\triangle OAB$。2. 求 $\triangle ABC$ 面積時，利用 $\triangle ABC$ 與 $\triangle OAB$ 共用頂點 $B$ 且底邊在同一直線上（同高），面積比直接等於底邊比 $\overline{AC} : \overline{OA} = 6 : 15 = 2 : 5$，不用另外求高！
  2. **圖文去痕與防劇透處理**：
     - 原截圖含有解答標繪之紅色輔助線 $\overline{OB}$，主動執行精準像素級去痕清理，還原為乾淨未劇透之原題幾何圖形；經純白底 `#FFFFFF` 淨化與 2x Lanczos 高畫質放大保存至 `assets/questions/q_math_geo_circle_tangent_ab12_oc9_area_abc_108_5_466.png`，支援燈箱縮放檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v466`（`miley_wrong_questions_v466`），題庫總量達到 **570 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.34`，腳本版本標籤升級 `js/data.js?v=466`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.64]
target = "## [v4.64]"
if target in content:
    new_content = content.replace(target, v465_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.65]!")
else:
    print("Target not found!")
