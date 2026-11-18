v476_entry = """## [v4.76] - 2026-11-18 (自動收錄國中地理美洲人文地理分區考題 Q491：盎格魯美洲與拉丁美洲以文化差異劃分／遵循純文字規範不放圖／嚴格遵守社會科 50 字以內極簡解析／題庫總量達到 595 題！升級數據庫至 v478，快取升級 v4.46)
- **類型**：錯題自動收錄 / 國中社會（地理科、世界地理、美洲分區依據、盎格魯美洲 vs 拉丁美洲文化與語言差異、極簡 45 字解析）
- **主要變更**：
  1. **完整收錄美洲地理分區核心考題（Q491，歸入 2026-11-16 最新週次）**：
     - **Q491** `q_soc_geo_anglo_vs_latin_america_cultural_division_491`：
       - **題幹**：廣大的美洲依據某種指標，可劃分為盎格魯美洲與拉丁美洲，其主要是以下列何者作為劃分依據？
       - **選項**：
         ◉ (A) 文化差異
         ○ (B) 地形種類
         ○ (C) 使用貨幣
         ○ (D) 氣候類型
       - **正解**：**(A) 文化差異**
       - **嚴格遵循 50 字以內極簡解析（45 字）**：
         - 依語言與殖民歷史之「文化差異」劃分：美加為英國英語系（盎格魯），其餘為西葡拉丁語系。選 (A)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：美洲兩大分區依據：若依「自然地形/地峽」分為北美洲與南美洲（以巴拿馬地峽為界）；若依「語言與歷史文化」則以美墨邊界（格蘭河）分為「盎格魯美洲（英裔）」與「拉丁美洲（西葡裔）」。
  2. **圖文規範遵循**：
     - 純文字題目，嚴格依 SOP `diagramUrl: ""` 設為空字串，不放任何冗餘截圖。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v478`（`miley_wrong_questions_v478`），題庫總量達到 **595 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.46`，腳本版本標籤升級 `js/data.js?v=478`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.75]"
assert target in content, "Target ## [v4.75] not found in Checkpoints.md!"

new_content = content.replace(target, v476_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.76!")

