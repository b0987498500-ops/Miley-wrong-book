v469_entry = """## [v4.69] - 2026-11-17 (自動收錄國中九年級圓形幾何經典考題組 Q471、Q472：三角形雙高與中點四點共圓圓心角 ∠DME＝70°、圓直徑等弦等腰圓周角 ∠ABC＝20°／精確清除解答紅色與粉紅輔助線還原純淨圖形／極簡正規國中 3 步推導／題庫總量達到 576 題！升級數據庫至 v471，快取升級 v4.39)
- **類型**：錯題自動收錄 / 國中數學（九年級圓形幾何性質、四點共圓判別、圓外角公式、等弦對等弧與等圓周角、直徑所對圓周角為直角、三角形外角定理、去痕去輔助線精緻處理、極簡 3 步推導）
- **主要變更**：
  1. **完整收錄國中圓形幾何核心經典考題組（Q471、Q472，歸入 2026-11-16 最新週次）**：
     - **Q471** `q_math_geo_triangle_altitudes_midpoint_angle_dme_70_471`：
       - **題幹**：如圖，在 △ABC 中，∠A ＝ 55°，M 為 BC 的中點，BD 為 AC 上的高，CE 為 AB 上的高，則 ∠DME ＝ ？
       - **選項**：
         ○ (A) 60°
         ○ (B) 65°
         ○ (C) 68°
         ◉ (D) 70°
       - **正解**：**(D) 70°**
       - **正規國中極簡 3 步推導（約 95 字）**：
         1. 四點共圓：由 ∠BEC ＝ ∠BDC ＝ 90°，知 B、C、D、E 四點共圓，以 BC 為直徑、M 為圓心，故 弧BC ＝ 180°。
         2. 圓外角求弧度：∠A 為圓外角，∠A ＝ ½(弧BC － 弧DE) ⟹ 55° ＝ ½(180° － 弧DE) ⟹ 弧DE ＝ 70°。
         3. 圓心角性質：∠DME 為弧DE 所對的圓心角，故 ∠DME ＝ 弧DE ＝ 70°。選 (D)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：破題神經：看到兩高「∠BEC＝∠BDC＝90°」，立即連結「以 BC 為直徑四點共圓（圓心 M）」！頂角 ∠A 實為割線交於圓外之「圓外角」，利用 ∠A＝½(180°－弧DE) 秒解圓心角 ∠DME＝70°。
       - **圖表精緻處理**：
         - `assets/questions/q_math_geo_triangle_altitudes_midpoint_angle_dme_70_471.png`
         - 徹底清除原解答劇透之粉紅虛線輔助圓，還原 △ABC 原始乾淨幾何圖形，純白背景與高對比 2x Lanczos 銳化。

     - **Q472** `q_math_geo_circle_diameter_chords_bpd60_abc20_472`：
       - **題幹**：如圖，AB 為圓 O 的直徑，C、D 為圓上的兩點，CD 和 AB 相交於 P 點，若 BC ＝ CD，∠BPD ＝ 60°，則 ∠ABC ＝ ？
       - **選項**：
         ○ (A) 32°
         ○ (B) 25°
         ◉ (C) 20°
         ○ (D) 18°
       - **正解**：**(C) 20°**
       - **正規國中極簡 3 步推導（約 98 字）**：
         1. 輔助線與直角：連接 AD。因 AB 為直徑，得 ∠ADB ＝ 90°。
         2. 等弦對等角：設 ∠ABC ＝ x°，則同弧 AC 之圓周角 ∠ADC ＝ x°。由 BC ＝ CD 知 △BCD 為等腰三角形，故 ∠DCB ＝ 2x°。
         3. 外角定理：在 △PBC 中，外角 ∠BPD ＝ ∠DCB ＋ ∠ABC ⟹ 60° ＝ 2x° ＋ x° ⟹ x ＝ 20°。選 (C)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：直徑考點首選「連接 AD 造直角（∠ADB＝90°）」！看到 BC＝CD 立刻想到等腰 △BCD，利用同弧圓周角 ∠ADC＝x° 與底角 90°－x° 導出頂角 ∠DCB＝2x°，最後由 △PBC 外角 3x＝60° 秒殺。
       - **圖表精緻處理**：
         - `assets/questions/q_math_geo_circle_diameter_chords_bpd60_abc20_472.png`
         - 精準剔除原解答粉紅虛線輔助線 AD，嚴密保護綠色弦 CD 與紅色圓周不受磨損，純白背景與高對比 2x Lanczos 銳化。

  2. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v471`（`miley_wrong_questions_v471`），題庫總量達到 **576 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.39`，腳本版本標籤升級 `js/data.js?v=471`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.68]"
assert target in content, "Target ## [v4.68] not found in Checkpoints.md!"

new_content = content.replace(target, v469_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully!")

