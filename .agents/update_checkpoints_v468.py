import re

v468_entry = r'''## [v4.68] - 2026-11-16 (自動收錄國中公民分工與交易考題 Q470：大賣場採購智利進口葡萄涉及跨國買賣為國際貿易／嚴格照錄原截圖極簡解析（僅 40 字）／純文字無圖題遵循規範不放圖，題庫總量達到 574 題！升級數據庫至 v469，快取升級 v4.37)
- **類型**：錯題自動收錄 / 國中社會（公民科、全球化與國際貿易、分工與交易、國際分工 vs 國際貿易辨析、極簡 40 字秒解）
- **主要變更**：
  1. **完整收錄國際貿易與分工辨析核心考題（Q470，歸入 2026-11-16 最新週次）**：
     - **Q470** `q_soc_civ_division_of_labor_trade_international_trade_grape_470`：
       - **題幹**：根據分工與交易的概念判斷，下列何者涉及國際貿易？
       - **選項**：
         ○ (A) 育筑請家人到市區的法式餐廳用餐慶祝父親節
         ○ (B) 俊成與班上美國留學生一起合作討論專題報告
         ○ (C) 服飾品牌在中國生產布料，在越南負責製作成品
         ◉ (D) 建銘在國內大賣場任職，負責採購智利進口葡萄
       - **正解**：**(D) 建銘在國內大賣場任職，負責採購智利進口葡萄**
       - **嚴格照錄原截圖極簡解析（僅 40 字）**：
         - (A)屬於國內市場交易；(B)屬於分工；(C)屬於國際分工；(D)跨國買賣進口商品屬於國際貿易。選 (D)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：概念辨析：(C)「跨國不同階段生產」屬於國際分工；(D)「跨國買賣商品、進口貨物」才屬於國際貿易！
  2. **圖文處理原則遵循**：
     - 純文字題目，依規範 `diagramUrl: ""` 設為空字串，不放贅圖。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v469`（`miley_wrong_questions_v469`），題庫總量達到 **574 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.37`，腳本版本標籤升級 `js/data.js?v=469`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.67]
target = "## [v4.67]"
if target in content:
    new_content = content.replace(target, v468_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.68]!")
else:
    print("Target not found!")

