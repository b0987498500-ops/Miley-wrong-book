with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_checkpoint = '''## [v4.36] - 2026-11-11 (自動收錄國中公民我國現行修憲程序流程圖題 Q431：立法院提案通過公告半年後由公民投票複決／修憲三部曲核心考點／流程圖純白底 2x Lanczos 高畫質放大優化，題庫總量達到 535 題！升級數據庫至 v432，快取升級 v4.05)
- **類型**：錯題自動收錄 / 國中公民（憲法與修憲程序、憲法增修條文修憲高門檻、立法院提案與公告半年、自由地區選舉人公民投票複決過關）
- **主要變更**：
  1. **完整收錄修憲程序流程圖考題（Q431，歸入 2026-11-09 最新週次）**：
     - **Q431** `q_soc_civ_constitutional_amendment_procedure_diagram_431`：
       - **題幹**：我國修憲流程，如附圖所示。請問甲、乙兩處應該是？
       - **選項**：○ (A) 甲：司法院大法官、乙：立法院 ○ (B) 甲：立法院、乙：司法院大法官 ◉ (C) 甲：立法院、乙：公民投票 ○ (D) 甲：司法院大法官、乙：公民投票
       - **正解**：**(C) 甲：立法院、乙：公民投票**
       - **深度解析與概念梳理**：
         - 依《憲法增修條文》第 12 條，提出憲法修正案後，由**「立法院」**（甲）表決通過（全體 1/4 提、3/4 出席、3/4 決議）。
         - 公告半年後，交由全體中華民國自由地區選舉人進行**「公民投票」**（乙）複決，有效同意票過選舉人總額半數即通過。故選 (C)。
         - 排雷：司法院大法官職司憲法解釋與憲法訴訟審理，無修憲提案或複決權。
       - **易錯警示筆記**：
         - 💡 易錯筆記（我國修憲三部曲口訣）：
           • 立院提案（高門檻 3/4 通過） ➔ 公告半年 ➔ 公投複決（有效同意票過選舉人總額半數）
           ★ 陷阱警示：國民大會早已廢除，修憲複決權交由全體「公民投票」，絕非交給司法院大法官！
  2. **圖文處理原則遵循**：
     - 修憲流程圖經獨立裁切、純白底 `#FFFFFF` 淨化與 2x Lanczos 高畫質放大保存至 `assets/questions/q_soc_civ_constitutional_amendment_procedure_diagram_431.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v432`（`miley_wrong_questions_v432`），題庫總量達到 **535 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.05`，腳本版本標籤升級 `js/data.js?v=432`。

---

'''

target_idx = -1
for i, line in enumerate(lines):
    if line.startswith('## [v4.35]'):
        target_idx = i
        break

if target_idx != -1:
    lines.insert(target_idx, new_checkpoint)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Inserted [v4.36] at line {target_idx + 1}, total lines: {len(lines)}')
else:
    print('Failed to locate [v4.35]')

