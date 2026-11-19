v482_entry = """## [v4.82] - 2026-11-19 (自動收錄國中九年級數學圓形幾何考題 Q498：圓內接四邊形平行弦截等弧與等弦對等弧／直徑圓周角與等腰三角形線段長求值／完整裁切高清幾何圖形／嚴格遵循國中數學 100 字極簡正規推導／題庫總量達到 602 題！升級數據庫至 v484，快取升級 v4.52)
- **類型**：錯題自動收錄 / 國中數學（九年級幾何、圓形幾何、圓內接四邊形、平行弦截等弧、等弦對等弧、直徑半圓圓周角、等腰三角形判定與線段求值、極簡 95 字四行正規推導）
- **主要變更**：
  1. **完整收錄圓內接四邊形平行弦核心考題（Q498，歸入 2026-11-16 最新週次）**：
     - **Q498** `q_math_geo_circle_inscribed_quadrilateral_parallel_chords_498`：
       - **題幹**：如右圖，四邊形 ABCD 為圓 O 的圓內接四邊形，線段 AD // 線段 BC，直徑 AE 和 線段 BC 相交於 F 點，線段 AD = 線段 CD = 6，若 ∠B = 70°，則 線段 BF = ？
       - **選項**：
         ◉ (A) 6
         ○ (B) 6√2
         ○ (C) 6√3
         ○ (D) 9√3
       - **正解**：**(A) 6**
       - **嚴格遵循 100 字以內極簡正規推導（95 字）**：
         1. AD // BC 且 AD = CD ⇨ 弧AB = 弧AD = 弧CD。
         2. 圓周角 ∠B = 70° ⇨ 弧ADC = 140° ⇨ 弧AB = 70° ⇨ AB = 6。
         3. 直徑 AE ⇨ 弧BE = 180° - 70° = 110° ⇨ ∠BAE = 55°。
         4. △ABF 中，∠BFA = 180° - 70° - 55° = 55° = ∠BAE ⇨ BF = AB = 6。選 (A)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：牢記「平行弦截等弧」（AD // BC ⇨ 弧AB = 弧CD）與「等弦對等弧」（AD = CD ⇨ 弧AD = 弧CD）；直徑 AE 對應半圓 180°，推得 ∠BAE = ∠BFA = 55° 形成等腰三角形。
  2. **圖表高清處理與幾何保真**：
     - 精確裁切圓 O 幾何圖形，以 2x Lanczos 高清升採樣並加上 20px 純白邊框，保存至 `assets/questions/q_math_geo_circle_inscribed_quadrilateral_parallel_chords_498.png`。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v484`（`miley_wrong_questions_v484`），題庫總量達到 **602 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.52`，腳本版本標籤升級 `js/data.js?v=484`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.81]"
assert target in content, "Target ## [v4.81] not found in Checkpoints.md!"

new_content = content.replace(target, v482_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.82!")
