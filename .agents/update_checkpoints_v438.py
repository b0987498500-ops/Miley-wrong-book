with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_checkpoint = '''## [v4.38] - 2026-11-11 (自動收錄國中公民法規範位階重點考題 Q433：立法院三讀通過施行法屬法律位階／落實社會科 50 字精簡原圖解析準則／純文字純淨繁體中文排版，題庫總量達到 537 題！升級數據庫至 v434，快取升級 v4.07)
- **類型**：錯題自動收錄 / 國中公民（法律的基本概念、法規範的位階、憲法與法律及命令區辨、立法院三讀立法程序、法規命名原則法/律/條例/通則）
- **主要變更**：
  1. **完整收錄法律位階判斷核心題（Q433，歸入 2026-11-09 最新週次）**：
     - **Q433** `q_soc_civ_legal_hierarchy_convention_rights_child_act_433`：
       - **題幹**：我國為與國際接軌，落實聯合國的《兒童權利公約》要求的人權保障。由立法院三讀通過了《兒童權利公約施行法》。請問，下列有關《兒童權利公約施行法》的解釋，何者正確？
       - **選項**：○ (A) 擁有憲法級位階，規定原則性的事務 ◉ (B) 擁有法律級位階，可實現憲法的精神 ○ (C) 擁有命令級位階，行政機關可以修改 ○ (D) 擁有命令級位階，縣市議會可以修改
       - **正解**：**(B) 擁有法律級位階，可實現憲法的精神**
       - **落實社會科極簡解析（約 65 字，依循原圖核心說明）**：
         - 由立法院三讀通過且名稱為「法」，屬於法律位階（包含法、律、條例、通則），故選 (B)。(A) 憲法位階僅含憲法本文與增修條文；(C)(D) 命令由行政機關發布修改。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：見「立法院三讀」或名稱為「法、律、條例、通則」必為法律位階！命令由行政機關訂定。
       - 純文字題目不放冗餘截圖（`diagramUrl: ""`），零奇怪符號純淨繁體中文排版。
  2. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v434`（`miley_wrong_questions_v434`），題庫總量達到 **537 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.07`，腳本版本標籤升級 `js/data.js?v=434`。

---

'''

target_idx = -1
for i, line in enumerate(lines):
    if line.startswith('## [v4.37]'):
        target_idx = i
        break

if target_idx != -1:
    lines.insert(target_idx, new_checkpoint)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Inserted [v4.38] at line {target_idx + 1}, total lines: {len(lines)}')
else:
    print('Failed to locate [v4.37]')
