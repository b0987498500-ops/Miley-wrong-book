v484_entry = """## [v4.84] - 2026-11-19 (自動收錄國中九年級數學圓形幾何考題 Q500：兩相交圓半徑等腰三角形與對稱性推導／圓心角與圓周角度數求值／主動去痕純化輔助線／嚴格遵循國中數學 100 字極簡正規推導／題庫總量達到 604 題！升級數據庫至 v486，快取升級 v4.54)
- **類型**：錯題自動收錄 / 國中數學（九年級幾何、圓形幾何、兩圓相交、等腰三角形同圓半徑等長、全等對稱性、圓心角與圓周角關係、主動消除解答輔助線還原純淨原題圖形、極簡 95 字四行正規推導）
- **主要變更**：
  1. **完整收錄兩圓相交圓心角圓周角核心考題（Q500，歸入 2026-11-16 最新週次）**：
     - **Q500** `q_math_geo_intersecting_circles_inscribed_angle_p_500`：
       - **題幹**：如右圖，圓 O 與圓 A 相交於 B、C 兩點，P 為圓 O 上一點，若 ∠ABO = 70°，則 ∠P = ？
       - **選項**：
         ◉ (A) 40°
         ○ (B) 45°
         ○ (C) 52°
         ○ (D) 70°
       - **正解**：**(A) 40°**
       - **嚴格遵循 100 字以內極簡正規推導（95 字）**：
         1. 在圓 O 中，半徑 OA = OB ⇨ ∠BAO = ∠ABO = 70°。
         2. 圓心角 ∠AOB = 180° - 2 × 70° = 40°。
         3. 由對稱性（△ABO ≅ △ACO）得 ∠AOC = ∠AOB = 40° ⇨ 弧BAC = 80°。
         4. 圓周角 ∠P = 1/2 弧BAC = 1/2 × 80° = 40°。選 (A)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：A 點在圓 O 上，故 OA = OB 均為圓 O 半徑，△OAB 為等腰三角形；由對稱性得 弧BAC = 40° + 40° = 80°，圓周角 ∠P 為所對弧度數的一半（40°）。
  2. **圖表高清處理與去痕輔助線還原**：
     - 精確裁切兩圓幾何圖形，主動消除解答解析所繪製的粉紅虛線輔助線（OA、OC、AC），還原為未劇透的乾淨原始題圖，經 2x Lanczos 高清升採樣並加上 20px 純白邊框，保存至 `assets/questions/q_math_geo_intersecting_circles_inscribed_angle_p_500.png`。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v486`（`miley_wrong_questions_v486`），題庫總量達到 **604 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.54`，腳本版本標籤升級 `js/data.js?v=486`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.83]"
assert target in content, "Target ## [v4.83] not found in Checkpoints.md!"

new_content = content.replace(target, v484_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.84!")
