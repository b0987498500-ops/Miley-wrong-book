import re

v450_entry = r'''## [v4.50] - 2026-11-14 (自動收錄國中理化酸鹼中和與制酸劑胃脹氣副作用考題 Q450：碳酸氫鈉碰胃酸產二氧化碳須搭配防脹氣藥物／嚴格採用原截圖解析且控制在 75 字內／純文字與 Markdown 表格零死角純淨排版，題庫總量達到 554 題！升級數據庫至 v451，快取升級 v4.19)
- **類型**：錯題自動收錄 / 國中理化（酸鹼中和與生活應用、制酸劑成分碳酸氫鈉 vs 氫氧化鎂、碳酸氫根遇酸產氣、極簡 72 字秒解）
- **主要變更**：
  1. **完整收錄制酸劑成分與副作用核心考題（Q450，歸入 2026-11-09 最新週次）**：
     - **Q450** `q_sci_chem_antacid_nahco3_gas_bloating_co2_450`：
       - **題幹**：
         人類的胃在消化蛋白質時會分泌胃酸，但胃酸分泌過多時會傷害胃黏膜，此時通常會以弱鹼性物質作為制酸劑來中和胃酸。

         宏偉設計實驗檢驗市售制酸劑成效：
         - 實驗一：各取 1 克制酸劑溶於 100 mL 水中，以 pH 計測定 pH 值。
         - 實驗二：取 0.01 M 的 HCl 模擬胃酸，加入酚酞指示劑滴定 1 克制酸劑，記錄消耗的 HCl 體積。

         已知 A、B 兩牌制酸劑主要成分為 $\text{NaHCO}_3$（碳酸氫鈉），C、D 兩牌主要成分為 $\text{Mg(OH)}_2$（氫氧化鎂），結果如下表：

         | 制酸劑品牌 | pH 值 | 用去 HCl 毫升數 |
         | :---: | :---: | :---: |
         | A 牌 | 8.3 | 20 mL |
         | B 牌 | 8.5 | 25 mL |
         | C 牌 | 8.2 | 41 mL |
         | D 牌 | 8.4 | 50 mL |

         通常制酸劑除了制酸外，有些成分可能引起脹氣的副作用，需要搭配防脹氣藥物服用。請問在上述四牌制酸劑中，哪些須搭配防脹氣藥物服用？
       - **選項**：○ (A) A 牌、C 牌 ○ (B) B 牌、D 牌 ◉ (C) A 牌、B 牌 ○ (D) C 牌、D 牌
       - **正解**：**(C) A 牌、B 牌**
       - **嚴格照錄原截圖解析（約 72 字）**：
         - 以 $\text{NaHCO}_3$（碳酸氫鈉）為主成分的制酸劑，遇到胃酸（$\text{HCl}$）會反應產生 $\text{CO}_2$ 氣體，容易造成腸胃道脹氣，因此 A 牌與 B 牌制酸劑需要搭配防脹氣藥物使用。選 (C)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：碳酸氫鈉（$\text{NaHCO}_3$）遇胃酸（$\text{HCl}$）中和必產生 $\text{CO}_2$ 氣體造成脹氣；而氫氧化鎂（$\text{Mg(OH)}_2$）中和只產水，不產氣體。
  2. **圖文處理原則遵循**：
     - 純文字與數據表格題目，無額外示意圖，`diagramUrl: ""` 設為空字串，以結構化 Markdown 表格呈現，達到零符號亂碼最高標準。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v451`（`miley_wrong_questions_v451`），題庫總量達到 **554 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.19`，腳本版本標籤升級 `js/data.js?v=451`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.49]
target = "## [v4.49]"
if target in content:
    new_content = content.replace(target, v450_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.50]!")
else:
    print("Target not found!")

