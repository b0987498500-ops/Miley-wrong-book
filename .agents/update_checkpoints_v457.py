import re

v457_entry = r'''## [v4.57] - 2026-11-15 (自動收錄國中理化簡單機械組合與指甲刀槓桿原理考題 Q457：指甲刀壓柄為抗力點在中間之省力槓桿判讀／嚴格照錄原截圖解析（僅 48 字）／指甲刀示意圖純白底 2x Lanczos 超清重製，題庫總量達到 561 題！升級數據庫至 v458，快取升級 v4.26)
- **類型**：錯題自動收錄 / 國中理化（簡單機械、複合槓桿、指甲刀機械結構、省力槓桿 vs 費力槓桿、刀口斜面、極簡 48 字秒解）
- **主要變更**：
  1. **完整收錄指甲刀複合機械核心考題（Q457，歸入 2026-11-09 最新週次）**：
     - **Q457** `q_sci_phys_nail_clipper_compound_levers_457`：
       - **題幹**：附圖為指甲刀之示意圖。指甲刀為多種簡單機械的組合體，下列有關機械的敘述，何者錯誤？
       - **選項**：
         ◉ (A) 在甲處施力造成乙處下壓是支點在中間的槓桿
         ○ (B) 在乙處施力造成丁處下壓是施力臂小於抗力臂的槓桿
         ○ (C) 丁處刀刃磨鋒利會有省力的效果
         ○ (D) 綜合以上多種機械原理，指甲剪是一種省力的機械
       - **正解**：**(A) 在甲處施力造成乙處下壓是支點在中間的槓桿**
       - **嚴格照錄原截圖解析（約 48 字）**：
         - (A) 在甲處施力造成乙處下壓，是以丙為支點、乙為抗力點、甲為施力點，屬於「抗力點在中間」的省力槓桿。故 (A) 敘述錯誤，選 (A)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：拆解指甲刀：上方壓柄為丙支點、乙抗力、甲施力 $\implies$「抗力點在中間」省力槓桿；下方夾片為戊支點、乙施力、丁抗力 $\implies$ 費力槓桿；刀口丁為斜面（楔）。
  2. **圖文處理原則遵循**：
     - 精準裁切指甲刀甲、乙、丙、丁、戊結構示意圖，經純白底 `#FFFFFF` 淨化與 2x Lanczos 高畫質放大保存至 `assets/questions/q_sci_phys_nail_clipper_compound_levers_457.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v458`（`miley_wrong_questions_v458`），題庫總量達到 **561 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.26`，腳本版本標籤升級 `js/data.js?v=458`。

---

'''

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before ## [v4.56]
target = "## [v4.56]"
if target in content:
    new_content = content.replace(target, v457_entry + target, 1)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Checkpoints.md updated successfully with [v4.57]!")
else:
    print("Target not found!")
