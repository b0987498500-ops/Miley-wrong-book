with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_checkpoint = '''## [v4.35] - 2026-11-11 (徹底解決平板全螢幕上下滑動誤退出問題：移除 fullscreenchange 自動解除全螢幕複習模式邏輯、確保唯有使用者主動點擊「退出全螢幕」按鈕或桌機按 ESC 才退出，CSS 新增 overscroll-behavior-y contain 防下拉彈跳手勢；自動收錄國中公民正副總統彈劾程序會考題 Q430，題庫總量達到 534 題！升級數據庫至 v431，快取升級 v4.04)
- **類型**：核心體驗優化 / 平板全螢幕手勢防誤退出 / 觸控上下滑動保持沉浸模式 / 錯題自動收錄 / 國中公民（中央政府組織與職權、正副總統彈劾與罷免程序、立法院提案與大法官憲法法庭審理、公投複決罷免區辨）
- **主要變更**：
  1. **平板全螢幕複習防誤退出體驗重構**：
     - **使用者核心痛點**：平板在全螢幕複習卡片時，上下滑動看題目或選項會觸發瀏覽器原生解除全螢幕，導致 `fullscreenchange` 錯誤強制將 `fullscreen-review-mode` 移除、突然彈回普通模式跳出側邊欄。
     - **架構優化**：
       - 徹底移除 `fullscreenchange` 事件對 `fullscreen-review-mode` 的自動清除，全螢幕沉浸模式完全以頁面狀態為準。
       - 嚴格鎖定退出路徑：只有在使用者親自點擊「退出全螢幕」按鈕，或桌機上有實體鍵盤按下 `ESC` 鍵時，才退出全螢幕。
       - `styles.css` 的 `body.fullscreen-review-mode` 加上 `overscroll-behavior-y: contain !important;`，有效阻斷平板上下滑動到底或到頂時觸發瀏覽器系統下拉手勢。
  2. **自動收錄 1 道國中公民會考核心題（Q430，歸入 2026-11-09 最新週次）**：
     - **Q430** `q_soc_civ_president_impeachment_grand_justice_trial_430`：
       - **題幹**：根據我國《憲法》及增修條文的相關規定，若要對總統、副總統進行彈劾，必須先由立法院提案通過後，再經何種程序才可完成？〔102.試辦會考〕
       - **選項**：◉ (A) 大法官審理 ○ (B) 監察院表決 ○ (C) 公民投票複決 ○ (D) 最高法院判決
       - **正解**：**(A) 大法官審理**
       - **深度解析與選項辨析**：
         - 依《憲法增修條文》，正副總統彈劾由立法院全體立法委員 1/2 以上提議、2/3 以上決議通過，聲請司法院大法官組成憲法法庭審理。
         - (B) 監察院僅彈劾一般公務員，無權彈劾正副總統；(C) 公民投票複決用於正副總統「罷免案」及憲法修正案；(D) 最高法院為終審法院，無彈劾審理權。
       - **易錯警示筆記**：
         - 💡 易錯筆記（彈劾 vs 罷免口訣）：
           • 彈劾（違法失職）＝ 立法院提案 ＋「大法官審理」（憲法法庭判決）
           • 罷免（政治無能）＝ 立法院提案 ＋「公民投票複決」
           ★ 陷阱警示：監察院「絕對不能」彈劾正副總統！
       - 純文字題目不放冗餘截圖（`diagramUrl: ""`），零奇怪符號純淨排版。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v431`（`miley_wrong_questions_v431`），題庫總量達到 **534 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.04`，腳本版本標籤升級 `js/data.js?v=431`。

---

'''

target_idx = -1
for i, line in enumerate(lines):
    if line.startswith('## [v4.34]'):
        target_idx = i
        break

if target_idx != -1:
    lines.insert(target_idx, new_checkpoint)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Inserted [v4.35] at line {target_idx + 1}, total lines: {len(lines)}')
else:
    print('Failed to locate [v4.34]')
