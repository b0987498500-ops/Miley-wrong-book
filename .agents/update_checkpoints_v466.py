import re

v466_entry = r'''## [v4.66] - 2026-11-16 (自動收錄國中幾何圓內接三角形與弦心距性質考題 Q467：弦心距垂直平分弦與連半徑求底邊 BC＝4√5、高 AM＝10 秒解面積 20√5／嚴格照錄原截圖極簡解析（僅 95 字）／主動去痕消除劇透輔助線 OB 與純白底 2x Lanczos 超清重製，題庫總量達到 571 題！升級數據庫至 v467，快取升級 v4.35)
- **類型**：錯題自動收錄 / 國中幾何（圓形幾何性質、垂徑定理、弦心距性質、畢氏定理、圓內接三角形面積計算、極簡 95 字秒解）
- **主要變更**：
  1. **完整收錄弦心距與內接三角形面積核心考題（Q467，歸入 2026-11-16 最新週次）**：
     - **Q467** `q_math_geo_circle_inscribed_triangle_chord_om_area_abc_20sqrt5_467`：
       - **題幹**：如圖，$\triangle ABC$ 為圓 $O$ 的內接三角形，$M$ 是 $\overline{BC}$ 的中點。圓 $O$ 的半徑為 6，$\overline{OM} = 4$，求 $\triangle ABC$ 的面積。
       - **選項**：
         ○ (A) $10\sqrt{5}$
         ◉ (B) $20\sqrt{5}$
         ○ (C) $24\sqrt{5}$
         ○ (D) $30\sqrt{5}$
       - **正解**：**(B) $20\sqrt{5}$**
       - **嚴格照錄原截圖極簡解析（約 95 字）**：
         - 1. 弦心距性質求底邊 $\overline{BC}$：$\overline{OM}$ 為弦 $\overline{BC}$ 的弦心距，必垂直平分 $\overline{BC}$。連半徑 $\overline{OB} = 6$，在直角 $\triangle OBM$ 中，由畢氏定理 $\overline{BM} = \sqrt{6^2 - 4^2} = 2\sqrt{5} \implies$ 底邊 $\overline{BC} = 2\overline{BM} = 4\sqrt{5}$。
         - 2. 求高 $\overline{AM}$：$A$、$O$、$M$ 共線，$\triangle ABC$ 的高 $\overline{AM} = \text{半徑 } \overline{OA} + \overline{OM} = 6 + 4 = 10$。
         - 3. 計算面積：$\triangle ABC \text{ 面積} = \text{底} \times \text{高} \div 2 = 4\sqrt{5} \times 10 \div 2 = 20\sqrt{5}$。選 (B)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：1. 弦心距核心性質：圓心到弦中點連線 $\overline{OM}$ 必垂直弦 $\overline{BC}$（垂徑定理）。2. 連半徑 $\overline{OB}$ 構造直角 $\triangle OBM$ 算出半弦長 $\overline{BM} = 2\sqrt{5}$，切莫忘記弦長 $\overline{BC} = 2\overline{BM} = 4\sqrt{5}$！3. 高 $\overline{AM} = \text{半徑 } \overline{OA} (6) + \text{弦心距 } \overline{OM} (4) = 10$。
  2. **圖文去痕與防劇透處理**：
     - 原截圖含有解答標繪之紅色輔助線 $\overline{OB}$ 與頂部延伸紅線，主動執行精準像素級去痕清理，中心點 $O$ 重繪為純黑圓點，還原為乾淨未劇透之原題幾何圖形；經純白底 `#FFFFFF` 淨化與 2x Lanczos 高畫質放大保存至 `assets/questions/q_math_geo_circle_inscribed_triangle_chord_om_area_abc_20sqrt5_467.png`，支援燈箱縮放檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v467`（`miley_wrong_questions_v467`），題庫總量達到 **571 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.35`，腳本版本標籤升級 `js/data.js?v=467`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.65]
target = "## [v4.65]"
if target in content:
    new_content = content.replace(target, v466_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.66]!")
else:
    print("Target not found!")

