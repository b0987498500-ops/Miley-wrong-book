v478_entry = """## [v4.78] - 2026-11-18 (自動收錄國中地理美國專業化農業帶考題 Q493：臺美貿易協定零關稅液態乳受惠區／東北部五大湖區酪農帶／完整裁切高對比農業帶地圖／嚴格遵守社會科 50 字以內極簡解析／題庫總量達到 597 題！升級數據庫至 v480，快取升級 v4.48)
- **類型**：錯題自動收錄 / 國中社會（地理科、世界地理、美洲地理、美國農業專業化分區、酪農帶 vs 玉米帶 vs 小麥帶 vs 地中海型農業帶、時事臺美對等貿易協定 ART、極簡 38 字解析）
- **主要變更**：
  1. **完整收錄美國農業帶與時事貿易核心考題（Q493，歸入 2026-11-16 最新週次）**：
     - **Q493** `q_soc_geo_usa_agricultural_belts_dairy_liquid_milk_493`：
       - **題幹**：新聞報導：「2026年2月，經過多次談判，我國與美國正式簽署『臺美對等貿易協定』（ART），未來美國液態乳進口臺灣將降至零關稅，由於進口成本下降，預期未來美國的液態乳進口量將顯著上升。」附圖是美國的專業化農作帶分布圖，哪一區域的農民將受惠於上述貿易協定，未來可擴大出口市場？
       - **選項**：
         ◉ (A) 甲
         ○ (B) 乙
         ○ (C) 丙
         ○ (D) 丁
       - **正解**：**(A) 甲**
       - **嚴格遵循 50 字以內極簡解析（38 字）**：
         - 液態乳為酪農業產品，美國酪農帶主要分布於東北部五大湖區（甲）。選 (A)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：液態乳＝酪農業產品！甲為東北部及五大湖區「酪農帶」（受惠零關稅液態乳出口）；乙為玉米帶、丙為小麥帶、丁為加州地中海型農業帶。
  2. **圖表高清處理與去痕規範**：
     - 精確裁切美國農業帶分佈地圖，去除頂部觀看器放大鏡殘影，以 2x Lanczos 高清升採樣並加上 20px 純白邊框，保存至 `assets/questions/q_soc_geo_usa_agricultural_belts_dairy_liquid_milk_493.png`。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v480`（`miley_wrong_questions_v480`），題庫總量達到 **597 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.48`，腳本版本標籤升級 `js/data.js?v=480`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.77]"
assert target in content, "Target ## [v4.77] not found in Checkpoints.md!"

new_content = content.replace(target, v478_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.78!")
