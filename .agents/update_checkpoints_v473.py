v473_entry = """## [v4.73] - 2026-11-17 (自動收錄國中地理 111 會考美國氣候分區與世界國家對照考題 Q483：臺灣副熱帶季風夏雨對照美國東南部丁處夏雨型暖溫帶／精確裁剪純淨地圖圖表／嚴格遵守社會科 50 字以內極簡解析／題庫總量達到 587 題！升級數據庫至 v475，快取升級 v4.43)
- **類型**：錯題自動收錄 / 國中社會（地理科、世界氣候類型、美國地理、美國氣候分區特徵、臺灣季風氣候特徵對比、極簡 43 字解析）
- **主要變更**：
  1. **完整收錄 111 會考美國氣候分區經典考題（Q483，歸入 2026-11-16 最新週次）**：
     - **Q483** `q_soc_geo_usa_climate_zones_taiwan_ding_111cap_483`：
       - **題幹**：美國具有多樣化的氣候類型，附圖是將美國各區域與世界上其他國家的氣候特徵相比，把具有類似氣候特徵的國家標示在該區域上。臺灣最可能標示在圖中甲、乙、丙、丁何處？〔111會考〕
       - **選項**：
         ○ (A) 甲
         ○ (B) 乙
         ○ (C) 丙
         ◉ (D) 丁
       - **正解**：**(D) 丁**
       - **嚴格遵循 50 字以內極簡解析（43 字）**：
         - 臺灣屬夏雨溫暖之副熱帶季風氣候，與美國東南部丁區（夏雨型暖溫帶氣候）最相符。選 (D)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：臺灣為「夏雨集中、溫暖潮濕」的副熱帶季風氣候，對照美國東南部丁處（墨西哥灣與佛羅里達沿岸之「夏雨型暖溫帶氣候」）；甲為溫帶海洋性、乙為乾燥草原、丙為溫帶大陸性。
       - **圖表精緻處理**：`assets/questions/q_soc_geo_usa_climate_zones_taiwan_ding_111cap_483.png`，精準裁剪美國氣候分區外框地圖，純白背景與 2x Lanczos 銳化處理。
  2. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v475`（`miley_wrong_questions_v475`），題庫總量達到 **587 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.43`，腳本版本標籤升級 `js/data.js?v=475`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.72]"
assert target in content, "Target ## [v4.72] not found in Checkpoints.md!"

new_content = content.replace(target, v473_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.73!")
