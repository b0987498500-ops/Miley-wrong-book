v480_entry = """## [v4.80] - 2026-11-18 (自動收錄國中地理北美洲氣候資料判讀考題 Q495：舊金山夏乾冬雨溫帶地中海型氣候判讀／夏季日照長降水少／完整裁切高解析日照時數與降水天數圖表／嚴格遵守社會科 50 字以內極簡解析／題庫總量達到 599 題！升級數據庫至 v482，快取升級 v4.50)
- **類型**：錯題自動收錄 / 國中社會（地理科、世界地理、美洲地理、北美氣候分區、溫帶地中海型氣候、各月份日照時數與降水天數氣候圖判讀、極簡 38 字解析）
- **主要變更**：
  1. **完整收錄北美洲氣候資料判讀核心考題（Q495，歸入 2026-11-16 最新週次）**：
     - **Q495** `q_soc_geo_north_america_climate_san_francisco_mediterranean_495`：
       - **題幹**：附圖是北美洲某一城市各月分日照時數與降水天數的資料，請按照圖中顯示的資訊判斷，該城市應為下列何者？
       - **選項**：
         ○ (A) 美國西北部的西雅圖
         ○ (B) 墨西哥灣沿岸的紐奧良
         ◉ (C) 美國西南部沿海的舊金山
         ○ (D) 洛磯山脈東側的拉斯維加斯
       - **正解**：**(C) 美國西南部沿海的舊金山**
       - **嚴格遵循 50 字以內極簡解析（38 字）**：
         - 6～8月日照長且降水天數少（夏乾冬雨），為溫帶地中海型氣候，選舊金山 (C)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：6～8月（夏季）日照長、降水天數為 0，11～3月（冬季）降水天數多，典型「夏乾冬雨」地中海型氣候，對應加州舊金山（C）。西雅圖為溫帶海洋性、紐奧良為夏雨型暖溫帶。
  2. **圖表高清處理與去痕規範**：
     - 精確裁切「各月份日照時數（折線）與降水天數（長條）」統計圖，完整保留雙 Y 軸單位標籤（小時、天）與月份軸，經 2x Lanczos 高清升採樣並加上 20px 純白邊框，保存至 `assets/questions/q_soc_geo_north_america_climate_san_francisco_mediterranean_495.png`。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v482`（`miley_wrong_questions_v482`），題庫總量達到 **599 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.50`，腳本版本標籤升級 `js/data.js?v=482`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.79]"
assert target in content, "Target ## [v4.79] not found in Checkpoints.md!"

new_content = content.replace(target, v480_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.80!")
