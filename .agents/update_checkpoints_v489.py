v489_entry = """## [v4.89] - 2026-11-20 (自動收錄國中公民地方自治考題 Q505：嘉義縣朴子市縣轄市地方民意代表市民代表／102 試辦會考題／純文字題目不放冗餘截圖／照錄原題精簡 36 字解析／題庫總量達到 609 題！升級數據庫至 v491，快取升級 v4.59)
- **類型**：錯題自動收錄 / 國中社會（公民科、地方自治、地方民意代表、縣轄市市民代表會市民代表、原截圖解析優先精簡照錄）
- **主要變更**：
  1. **完整收錄地方民意代表核心考題（Q505，歸入 2026-11-16 最新週次）**：
     - **Q505** `q_soc_civ_local_government_county_administered_city_councilor_puzi_505`：
       - **題幹**：居住在嘉義縣朴子市的宏達，因覺得住家周遭的路燈照明不足，讓經常工作晚歸的他感到危險，於是向當地的地方民意代表陳情，希望能獲得相關單位的重視。根據上述內容判斷，宏達所陳情的對象最可能是下列何者？〔102.試辦會考〕
       - **選項**：
         ○ (A) 縣長
         ○ (B) 市議員
         ○ (C) 立法委員
         ◉ (D) 市民代表
       - **正解**：**(D) 市民代表**
       - **精簡照錄原題解析（36 字）**：
         - 文中提到嘉義縣朴子市當地的地方民意代表，因此可知是市民代表。選 (D)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：嘉義縣朴子市為「縣轄市」，其立法機關地方民意代表為「市民代表」（非市議員）；縣長為行政首長非民意代表，市議員為直轄市/市（省轄市）民意代表，立委為中央民意代表。
  2. **圖文規範遵循**：
     - 純文字題目，嚴格依 SOP `diagramUrl: ""` 設為空字串，不放任何冗餘截圖。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v491`（`miley_wrong_questions_v491`），題庫總量達到 **609 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.59`，腳本版本標籤升級 `js/data.js?v=491`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.88]"
assert target in content, "Target ## [v4.88] not found in Checkpoints.md!"

new_content = content.replace(target, v489_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.89!")
