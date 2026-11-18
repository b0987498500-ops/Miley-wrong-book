v479_entry = """## [v4.79] - 2026-11-18 (自動收錄國中地理美國工業區與礦產分佈考題 Q494：五大湖與東北部傳統製造業重鎮／鄰近煤鐵原料產地發展鋼鐵與汽車工業／完整裁切高對比工業礦產地圖／嚴格遵守社會科 50 字以內極簡解析／題庫總量達到 598 題！升級數據庫至 v481，快取升級 v4.49)
- **類型**：錯題自動收錄 / 國中社會（地理科、世界地理、美洲地理、美國區域專業化、三大工業區分佈、東北部五大湖傳統工業區優勢、極簡 47 字解析）
- **主要變更**：
  1. **完整收錄美國工業發展優勢核心考題（Q494，歸入 2026-11-16 最新週次）**：
     - **Q494** `q_soc_geo_usa_traditional_manufacturing_belt_steel_494`：
       - **題幹**：美國雖然自1950年代起，第三級產業已取代工業成為主要產業，但仍是全球工業的領導者。美國工業分布具明顯區域專業化特徵，附圖是美國主要工業區與礦產分布圖，下列關於甲區工業發展優勢的敘述，何者正確？
       - **選項**：
         ◉ (A) 原料豐富，傳統鋼鐵中心
         ○ (B) 富油氣資源，石化工業發達
         ○ (C) 飛機製造中心，航空工業著稱
         ○ (D) 科技資訊業重鎮，科技人才充足
       - **正解**：**(A) 原料豐富，傳統鋼鐵中心**
       - **嚴格遵循 50 字以內極簡解析（47 字）**：
         - 甲位煤鐵產地，原料充足、具五大湖與聖羅倫斯河水運等優勢，發展傳統鋼鐵、汽車工業(重工業)。選 (A)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：甲區為五大湖及東北部傳統製造業帶，鄰近阿帕拉契山煤礦與蘇必略湖鐵礦，具水運與原料優勢，為傳統鋼鐵與汽車重工業中心；石化多在墨西哥灣，航空在西雅圖，高科技在矽谷。
  2. **圖表高清處理與去痕規範**：
     - 精確裁切美國主要工業區與礦產分佈地圖，去除右側檢視器按鈕殘影，以 2x Lanczos 高清升採樣並加上 20px 純白邊框，保存至 `assets/questions/q_soc_geo_usa_traditional_manufacturing_belt_steel_494.png`。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v481`（`miley_wrong_questions_v481`），題庫總量達到 **598 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.49`，腳本版本標籤升級 `js/data.js?v=481`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.78]"
assert target in content, "Target ## [v4.78] not found in Checkpoints.md!"

new_content = content.replace(target, v479_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.79!")
