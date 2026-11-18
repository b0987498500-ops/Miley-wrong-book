v477_entry = """## [v4.77] - 2026-11-18 (自動收錄國中地理美國中部農業特色考題 Q492：小麥帶商業性穀物農業大面積機械化生產／未結合畜牧產業／遵循純文字規範不放圖／嚴格遵守社會科 50 字以內極簡解析／題庫總量達到 596 題！升級數據庫至 v479，快取升級 v4.47)
- **類型**：錯題自動收錄 / 國中社會（地理科、世界地理、美洲地理、美國中部農業專業化、商業性穀物農業 vs 混合農業特色辨析、極簡 47 字解析）
- **主要變更**：
  1. **完整收錄美國中部農業特徵核心考題（Q492，歸入 2026-11-16 最新週次）**：
     - **Q492** `q_soc_geo_usa_wheat_belt_commercial_agriculture_features_492`：
       - **題幹**：「美國中部地區地勢平坦，夏季氣候溼熱，小麥的種植面積廣，農民主要用大型機械收割，農產不僅自足，同時亦足以供應市場。」由上述無法推判此區農業活動具有哪項特色？
       - **選項**：
         ○ (A) 高度機械化
         ◉ (B) 多結合畜牧產業
         ○ (C) 具有商業性色彩
         ○ (D) 大規模種單一作物
       - **正解**：**(B) 多結合畜牧產業**
       - **嚴格遵循 50 字以內極簡解析（47 字）**：
         - 小麥區具高度機械化、大面積單一作物及商業性市場供應特徵，文中並無提及結合畜牧活動。選 (B)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：美國中部小麥帶屬於典型「商業性穀物農業」（大農場、單一作物、高度機械化、產品售入市場）；「結合畜牧產業」屬於玉米帶的「混合農業」，題幹文句並未提及任何畜牧活動。
  2. **圖文規範遵循**：
     - 純文字題目，嚴格依 SOP `diagramUrl: ""` 設為空字串，不放任何冗餘截圖。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v479`（`miley_wrong_questions_v479`），題庫總量達到 **596 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.47`，腳本版本標籤升級 `js/data.js?v=479`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.76]"
assert target in content, "Target ## [v4.76] not found in Checkpoints.md!"

new_content = content.replace(target, v477_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.77!")
