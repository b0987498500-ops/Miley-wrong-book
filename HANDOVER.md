# 麥麥錯題網站開發交接備忘錄與跨電腦作業指引 (HANDOVER.md)

本文件專為使用者及新電腦上的 AI 助理（Antigravity / Cursor / Claude Code 等）準備，旨在實現**零秒無縫接軌**、避免跨裝置同步踩坑，並清楚列出專案架構、開發規範與待修復 Bug 清單。

---

## 📌 專案快速總覽

- **線上正式版 (GitHub Pages)**：https://b0987498500-ops.github.io/Miley-wrong-book/
- **GitHub 原始碼倉庫**：https://github.com/b0987498500-ops/Miley-wrong-book.git
- **當前版本**：`v5.45`
- **當前題庫總數**：**684 題**（覆蓋自然/生物、理化、數學、國文、社會公民/歷史/地理）
- **核心技術棧**：原生純淨 HTML5 + Vanilla JavaScript (ES6+ 模組化) + Tailwind CSS + PWA (Service Worker 網路優先/自動更新快取) + KaTeX (數學公式即時淨化渲染)

---

## ⚠️ 跨電腦操作前置動作（避坑指南）

本專案同時位於 **pCloud 雲端資料夾** 與 **Git 倉庫** 中。為了防止雙向雲端同步造成 `.git` 鎖死或檔案衝突，請遵循以下步驟：

### 推薦操作模式：Git 主導（最安全穩定）
1. **在新電腦上開啟終端機**，移動到該專案資料夾。
2. **第一步（先檢查狀態）**：
   ```bash
   git status
   ```
   - 若顯示乾淨，執行拉取最新版本：
     ```bash
     git pull origin main
     ```
   - 若 pCloud 同步殘留了暫存檔或 modified，先比對確認無誤後 `git checkout .` 清理乾淨再 pull。
3. **本地伺服器啟動（必備）**：
   因網站包含 Service Worker、模組化 JS (`import`) 與圖片載入，請**勿**直接用瀏覽器雙擊開啟 `file://.../index.html`。請在專案根目錄執行：
   ```bash
   python3 -m http.server 8000
   ```
   瀏覽器開啟：`http://localhost:8000`

---

## 📂 專案核心目錄與模組職責

```text
麥麥錯題網站/
├── index.html              # 主頁面結構、學習號列車進度條、彈窗燈箱
├── sw.js                   # PWA Service Worker (管理快取快照與更新)
├── Checkpoints.md          # 歷史版本快照紀錄 (SemVer v1.00 ~ v5.45)
├── AGENTS.md               # AI 助理核心作業守則 (收錄題目SOP、字數、FIFO順序)
├── HANDOVER.md             # 本交接文件
├── assets/
│   ├── icons/              # PWA 圖標 (favicon, apple-touch-icon 等)
│   └── questions/          # 題目題目幾何圖形、圖表裁切原圖 (點擊燈箱檢視)
└── js/
    ├── data.js             # 核心題庫 INITIAL_SEED_DATA、LocalStorage 遷移與相容鏈
    ├── app.js              # 全域入口控制器、複習排程器、答題事件分配
    ├── utils/
    │   ├── katex_render.js # 符號淨化與 KaTeX 渲染管線 (徹底去除奇怪符號)
    │   └── pdf_export.js   # 錯題單鍵列印/PDF 匯出工具
    └── modules/
        ├── practice.js     # 複習卡片渲染、選項點選、答案與解析動態收合
        ├── train_progress.js# 學習號列車動態軌道進度條與站點連動
        ├── upload.js       # 手動收錄題目表單與圖片處理
        └── sync.js         # 雲端同步與備份機制
```

---

## 🛠️ 開發與自動收錄規範核心摘要（詳見 `AGENTS.md`）

在新電腦上指示 AI 修改或收錄題目時，請確保 AI 遵守以下四大鋼鐵準則：

1. **各科解析精簡與逐選項說明準則（使用者特別要求）**：
   - 每個選項 `(A)(B)(C)(D)` 都必須有其判定與對錯原因，**絕不能只複製答案**。
   - 總字數嚴格控制在 **50～100 字**之內，條理清晰、10 秒內抓到重點。
2. **純淨繁體中文排版（零奇怪符號）**：
   - 嚴禁未渲染的 LaTeX 代碼（如 `\overline{...}`、`\frac{...}`、`$`、`\triangle`）。
   - 純文字題目不留空白截圖（`diagramUrl: ""`），具實質圖表題目裁切至 `assets/questions/`。
3. **隊列自然順序（FIFO 原則）**：
   - 依收錄時間最早在前、越晚越在後排序；
   - 複習過程中「已複習題」歸入前半段，「未複習題」排在後半段待攻克。
4. **版本發布與 GitHub 即刻同步**：
   - 每次修復 Bug 或加題，升級 `js/data.js` 的 `STORAGE_KEY`（如 `v554` ➔ `v555`）與 `sw.js` 的快取版本。
   - 執行 `git commit` 並立即執行 **`git push origin main`**，維持線上版 100% 同步。

---

## 📋 待完善 / 待修復的已知 Bug 與優化清單 (Backlog)

當您在另一台電腦開啟時，可以直接對 AI 助理說：
> 「請閱讀 `HANDOVER.md`，我們現在要來解決其中的【項目名稱】問題。」

1. **【Bug 1：複習隊列順序與跳題邏輯】**
   - **現象**：在特定篩選條件或點擊「先跳過，晚點做」時，題目順序偶爾未嚴格按「先收錄在前、後收錄在後」推移，或跳題後卡片序號未能即時平滑更新。
   - **檢查模組**：`js/modules/practice.js` 中的 `getReviewQueue()` 與 `skipCurrentQuestion()`。
2. **【Bug 2：學習號列車進度條跳站判定】**
   - **現象**：當作答「已擊敗」或「未擊敗」切換時，列車軌道完成站點有時會出現中途空站，或未按已完成比例平滑停靠在當前題。
   - **檢查模組**：`js/modules/train_progress.js` 的 `updateTrainUI()`。
3. **【Bug 3：PWA 離線快取更新偶發延遲】**
   - **現象**：部分行動裝置在 GitHub Pages 更新後需手動強制重整兩次才能載入最新題目。
   - **檢查模組**：`sw.js` 的 `skipWaiting` 與 `clients.claim()` 機制，確保 Service Worker 能秒級接管。
4. **【Bug 4：手機端燈箱圖片與點擊區域適配】**
   - **現象**：某些長圖或寬圖在窄螢幕手機上點開燈箱時，關閉按鈕可能被遮擋或圖片超出螢幕邊緣。
   - **檢查模組**：`index.html` 中的燈箱 CSS 彈窗容器樣式。

---

## 💡 新電腦 AI 開場指令（複製即可用）

到達新電腦並開啟 Antigravity / IDE 後，直接在對話框貼上這句話：

> **「我已經切換到另一台電腦。請先確認本地 Git 是否與 origin/main 同步，並仔細閱讀 `HANDOVER.md` 與 `AGENTS.md`。我準備要修復網站中的 Bug，請確認就緒後向我回報當前專案狀態。」**
