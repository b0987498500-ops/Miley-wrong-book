with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_checkpoint = r'''## [v4.40] - 2026-11-11 (自動雙收錄國中社會科重點考題 Q435 與 Q436：伊比利半島西班牙之羅馬與伊斯蘭政權統治／113會考地理世界宗教佛教發源地古印度判讀／嚴格落實社會科極簡原圖解析準則／表格地圖純白底 2x Lanczos 高畫質放大優化，題庫總量達到 540 題！升級數據庫至 v437，快取升級 v4.09)
- **類型**：錯題自動收錄 / 國中社會（歷史／地理、伊比利半島與西班牙羅馬及伊斯蘭文化交融、113年教育會考地理題、世界宗教分布、中南半島與南亞佛教國家、佛教發源地古印度）
- **主要變更**：
  1. **完整收錄 2 道社會科重點考題（Q435、Q436，歸入 2026-11-09 最新週次）**：
     - **Q435** `q_soc_hist_spain_iberian_roman_islamic_rule_435`：
       - **題幹**：背包客阿福正在準備歐洲旅遊的行前資料，看到一篇介紹說：「在歷史上，這個國家曾被羅馬帝國及伊斯蘭教政權統治過，所以它是一個具有多種文化特色的國家。」依此推斷，阿福最可能要到下列哪一個國家旅遊？
       - **選項**：○ (A) 英國 ○ (B) 法國 ○ (C) 義大利 ◉ (D) 西班牙
       - **正解**：**(D) 西班牙**
       - **原圖極簡解析（39 字）**：
         - 伊比利半島曾先後受到羅馬帝國及伊斯蘭勢力的統治，西班牙即位於伊比利半島。故選 (D)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：西班牙位於伊比利半島，曾受羅馬帝國統治與阿拉伯人（伊斯蘭教政權）統治近八百年！
       - 純文字題目不放冗餘截圖（`diagramUrl: ""`），零奇怪符號純淨繁體中文排版。
     - **Q436** `q_soc_geo_world_religion_buddhism_origin_india_113_436`：
       - **題幹**：下表呈現五個國家2010年某宗教信徒占該國總人口數的比例，根據內容判斷，此宗教的發源地最可能位於下圖中甲、乙、丙、丁何處？【113會考】
       - **選項**：○ (A) 甲 ○ (B) 乙 ◉ (C) 丙 ○ (D) 丁
       - **正解**：**(C) 丙**
       - **原圖精準解析（68 字）**：
         - 表中柬埔寨、泰國、緬甸、不丹、斯里蘭卡均為信仰佛教為主的國家。佛教起源於南亞印度（丙區），故選 (C)。（甲為中國、乙為中南半島、丁為阿拉伯半島）
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：柬埔寨、泰國、斯里蘭卡等皆信奉「佛教」！佛教起源於南亞「印度（丙）」，絕非起源於東亞或東南亞。
  2. **圖文處理原則遵循**：
     - 表格與亞洲地圖經純白底 `#FFFFFF` 淨化、筆跡去痕、重新裁切與 2x Lanczos 高畫質放大保存至 `assets/questions/q_soc_geo_world_religion_buddhism_origin_india_113_436.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v437`（`miley_wrong_questions_v437`），題庫總量達到 **540 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.09`，腳本版本標籤升級 `js/data.js?v=437`。

---

'''

target_idx = -1
for i, line in enumerate(lines):
    if line.startswith('## [v4.39]'):
        target_idx = i
        break

if target_idx != -1:
    lines.insert(target_idx, new_checkpoint)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Inserted [v4.40] at line {target_idx + 1}, total lines: {len(lines)}')
else:
    print('Failed to locate [v4.39]')
