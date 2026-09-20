# 麥麥錯題網站 Checkpoint 歷史紀錄

- **專案名稱**：麥麥錯題網站 (Miley Wrong Question Review Book)
- **GitHub 倉庫**：https://github.com/b0987498500-ops/Miley-wrong-book
- **線上網站網址 (GitHub Pages)**：https://b0987498500-ops.github.io/Miley-wrong-book/

## [v1.01] - 2026-09-20 (版面與題庫同步優化)
- **類型**：UI 排版體驗優化 / 題庫週次資料一致性同步
- **主要變更**：
  1. **安裝 App 按鈕移至底端列與側邊欄底部**：
     - 將「📲 安裝App」按鈕從頂端 Header 移出，新增常駐於頁面最底部的 `.app-bottom-bar`，並在側邊欄底部輔助保留安裝入口，徹底避免佔據頂端列導覽空間與影響頂部排版美觀。
     - 手機與電腦在以 App (standalone) 開啟時，自動完全隱藏底端列與側邊欄安裝按鈕。
  2. **同步 2026-09-14 數學題數至 24 題**：
     - 將 5 題於 9/10 上傳之進階幾何題目（`_017` 至 `_021`）在 `INITIAL_SEED_DATA` 中補齊 `"2026-09-14"` 週次複習標籤，並於 `DataManager.init()` 中加入種子資料 `mondayDates` 自動合併補丁。
     - 升級 `STORAGE_KEY` 至 `v130`，確保 GitHub Pages 線上網站與本機端選取 9/14 時顯示之數學總題數一致為 24 題（2026-09-07 亦維持完整 21 題）。
  3. **網址參數規範確認**：
     - 確認手機與外部連線只需訪問標準乾淨網址 `https://b0987498500-ops.github.io/Miley-wrong-book/`，無需附加任何時間戳或版本參數即可享有最新版本快取與功能。

---

## [v1.00] - 2026-09-20 (穩定版發布)
- **類型**：功能大版本升級 / 跨裝置行動端適配
- **主要變更**：
  1. **同步推送 45 個積累 Commits 至 GitHub**：將先前新增之各學科錯題全數發布至 GitHub Pages 線上網站。
  2. **全面導入 PWA「📲 安裝App」機制**：
     - 參考 `01_里長辦公室/防失智遊戲/1_50遊戲` 架構，在頂端列設置「📲 安裝App」專屬按鈕。
     - 支援 Android/Chrome 一鍵安裝至手機桌面，iOS Safari「加入主畫面」圖文引導彈窗，LINE 內嵌瀏覽器防呆引導。
     - 升級 `sw.js` 採用 Network-First 離線快取，已安裝或 standalone 模式下自動智慧隱藏安裝按鈕。
  3. **深度優化手機版 RWD（響應式排版）**：
     - 手機螢幕下側邊欄自動收合為抽屜模式/頂部橫向快捷滑動條。
     - 題目卡片內距與上一題/下一題導覽按鈕改進，觸控區加大至 48px，徹底解決桌機版大卡片在手機螢幕上邊界溢出問題。
     - KaTeX 數學公式與長選項支援手機自適應折行與水平滾動防破版。
  4. **正式套用 Checkpoint 制度與管理 Skill (`checkpoint_master`)**：
     - 建立 `.agents/config.json` 與 `Checkpoints.md`。
     - 更新 `AGENTS.md`：要求每次新增錯題或修改程式後，一律同時 commit 並 push 至 GitHub，保障線上網站即時更新。
