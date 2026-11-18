v474_entry = """## [v4.74] - 2026-11-18 (自動收錄國中理化反應速率測量經典考題 Q484：碳酸鈣與鹽酸反應氣體產物 CO₂ 冒泡最易觀察／精確照錄原截圖極簡解析／遵循純文字規範不放圖／題庫總量達到 588 題！升級數據庫至 v476，快取升級 v4.44)
- **類型**：錯題自動收錄 / 國中自然（理化科、化學反應速率、反應快慢之測量條件、氣體產物氣泡觀察與收集、極簡 46 字解析）
- **主要變更**：
  1. **完整收錄反應速率觀測核心考題（Q484，歸入 2026-11-16 最新週次）**：
     - **Q484** `q_sci_chem_reaction_rate_caco3_hcl_co2_bubbles_484`：
       - **題幹**：已知 CaCO₃ ＋ 2HCl → CaCl₂ ＋ CO₂ ＋ H₂O，欲觀察此反應的快慢，以觀察哪一物質的變化最方便？
       - **選項**：
         ◉ (A) CO₂
         ○ (B) HCl
         ○ (C) CaCO₃
         ○ (D) CaCl₂
       - **正解**：**(A) CO₂**
       - **嚴格照錄原截圖極簡解析（46 字）**：
         - CO₂ 為氣體產物，生成時會冒出氣泡，直接計算氣泡產生速率或收集氣體體積最方便觀察。選 (A)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：測量反應速率優先選擇「有明顯外觀變化」者！生成物 CO₂ 為氣體，反應時會產生連續氣泡，可直接測量氣體體積或冒泡速率；而鹽酸與氯化鈣皆為無色水溶液，難以用肉眼直接觀察變化。
  2. **圖文規範遵循**：
     - 純文字題目，嚴格依 SOP `diagramUrl: ""` 設為空字串，不放任何冗餘截圖。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v476`（`miley_wrong_questions_v476`），題庫總量達到 **588 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.44`，腳本版本標籤升級 `js/data.js?v=476`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.73]"
assert target in content, "Target ## [v4.73] not found in Checkpoints.md!"

new_content = content.replace(target, v474_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.74!")

