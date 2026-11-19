v483_entry = """## [v4.83] - 2026-11-19 (自動收錄國中九年級數學圓形幾何考題 Q499：圓外兩點割線與圓內接四邊形外角性質／外角定理與圓周角求弧長度數／完整裁切高清幾何圖形／嚴格遵循國中數學 100 字極簡正規推導／題庫總量達到 603 題！升級數據庫至 v485，快取升級 v4.53)
- **類型**：錯題自動收錄 / 國中數學（九年級幾何、圓形幾何、圓內接四邊形、圓外割線交角、三角形外角定理、圓周角與弧長度數推導、極簡 98 字四行正規推導）
- **主要變更**：
  1. **完整收錄圓外點割線與圓內接四邊形核心考題（Q499，歸入 2026-11-16 最新週次）**：
     - **Q499** `q_math_geo_circle_exterior_angles_inscribed_quadrilateral_499`：
       - **題幹**：如右圖，P、R 為圓外兩點，線段 RA 和 線段 RD 交圓於 B、C 兩點，線段 PD 和 線段 PC 交圓於 A、B 兩點，若 ∠P = 30°，∠R = 40°，∠ACD = 70°，則 弧AB 的度數為何？
       - **選項**：
         ○ (A) 48°
         ◉ (B) 50°
         ○ (C) 52°
         ○ (D) 55°
       - **正解**：**(B) 50°**
       - **嚴格遵循 100 字以內極簡正規推導（98 字）**：
         1. 設 ∠ADC = x°，由圓內接四邊形外角得 ∠ABP = x°，△ADR 外角得 ∠BAP = x + 40°。
         2. △ABP 中，(x + 40) + x + 30 = 180 ⇨ x = 55° ⇨ 弧ABC = 110°。
         3. △ACR 外角 ∠ACD = ∠R + ∠CAR ⇨ 70° = 40° + ∠CAR ⇨ ∠CAR = 30° ⇨ 弧BC = 60°。
         4. 弧AB = 弧ABC - 弧BC = 110° - 60° = 50°。選 (B)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：善用圓內接四邊形外角等於內對角（∠ABP = ∠ADC = x°）與三角形外角定理（∠BAP = x + 40°），在 △ABP 中解出 x = 55° 得 弧ABC = 110°；再由 △ACR 外角求出圓周角 ∠CAR = 30°，兩弧相減即得 弧AB = 50°。
  2. **圖表高清處理與幾何保真**：
     - 精確裁切幾何圖形，完全純化去除左側解析文字干擾，以 2x Lanczos 高清升採樣並加上 20px 純白邊框，保存至 `assets/questions/q_math_geo_circle_exterior_angles_inscribed_quadrilateral_499.png`。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v485`（`miley_wrong_questions_v485`），題庫總量達到 **603 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.53`，腳本版本標籤升級 `js/data.js?v=485`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.82]"
assert target in content, "Target ## [v4.82] not found in Checkpoints.md!"

new_content = content.replace(target, v483_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.83!")
