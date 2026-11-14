import re

v449_entry = r'''## [v4.49] - 2026-11-14 (自動收錄 112 年會考理化生活素養考題 Q449：口腔酸鹼值平衡與嚼食無糖口香糖 pH 值折線圖變化判讀／嚴格落實自然科 100 字內極簡解析準則（僅 78 字）／官方原卷圖表整合純白底 300 DPI 超清重製，題庫總量達到 553 題！升級數據庫至 v450，快取升級 v4.18)
- **類型**：錯題自動收錄 / 國中理化（酸鹼反應與水溶液 pH 值、唾液分泌與酸鹼平衡緩衝、會考圖表生活素養、極簡 78 字秒解）
- **主要變更**：
  1. **完整收錄 112 會考口腔 pH 值生活素養考題（Q449，歸入 2026-11-09 最新週次）**：
     - **Q449** `q_sci_chem_chewing_gum_saliva_ph_balance_112cap_449`：
       - **題幹**：下列為某牌口香糖廣告的說明：人體口腔中的環境接近中性，在用餐後一段時間會變酸，而增加蛀牙機率。除了每日正確刷牙外，在餐後嚼食無糖口香糖，可刺激唾液分泌，有效「平衡」口中酸性。此廣告搭配了兩張圖用以輔助說明，一張為附圖（唾液量隨時間變化），另一張圖最可能為下列何者？【112.會考】
       - **選項**：
         ○ (A) 牙齒表面 pH 值用餐後由 7 上升至 9.5，嚼食口香糖後下降
         ○ (B) 牙齒表面 pH 值用餐後由 5 上升至 7.5，嚼食口香糖後下降
         ◉ (C) 牙齒表面 pH 值用餐後由 7 下降至約 4.5（變酸），開始嚼食口香糖後回升至 7（平衡酸性）
         ○ (D) 牙齒表面 pH 值用餐後由 6.5 下降至 5，嚼食口香糖後上升至 9（變鹼）
       - **正解**：**(C)**
       - **嚴格 100 字內極簡解析（約 78 字）**：
         1. 口腔平時接近中性（$\text{pH} \approx 7$）。
         2. 用餐後環境變酸 $\implies \text{pH}$ 值下降（小於 7）。
         3. 嚼食口香糖刺激唾液分泌平衡酸性 $\implies \text{pH}$ 值回升至接近中性（7 附近）。符合此變化趨勢者僅 (C)。選 (C)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：掌握「中性 $\text{pH}\approx 7 \longrightarrow$ 用餐變酸 $\text{pH}$ 下降 $\longrightarrow$ 嚼口香糖平衡 $\text{pH}$ 回升至 7」三部曲，由起點、轉折點與終點秒殺折線圖！
  2. **圖文處理原則遵循**：
     - 由 112 年會考官方試題高清提取圖(十八)（唾液分泌量曲線）與 (A)~(D) 四大候選折線圖，重組為對照示意圖，經純白底 `#FFFFFF` 淨化、去痕與 300 DPI 超清重製保存至 `assets/questions/q_sci_chem_chewing_gum_saliva_ph_balance_112cap_449.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v450`（`miley_wrong_questions_v450`），題庫總量達到 **553 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.18`，腳本版本標籤升級 `js/data.js?v=450`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.48]
target = "## [v4.48]"
if target in content:
    new_content = content.replace(target, v449_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.49]!")
else:
    print("Target not found!")
