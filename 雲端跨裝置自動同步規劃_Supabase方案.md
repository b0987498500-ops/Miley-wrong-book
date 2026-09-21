# 麥麥錯題網站：跨載具雲端無縫同步規劃方案 (方案 A - Supabase)

- **建立時間**：2026-09-21
- **選定架構**：方案 A —— Supabase 輕量雲端資料庫（無感自動同步）
- **目標載具**：手機（外出複習）、電腦（家中大螢幕複習）、平板等多端設備

---

## 📌 一、問題核心與需求背景 (The "Q")

### 1. 現狀情境
- 錯題網站目前部署在 **GitHub Pages** 靜態伺服器。
- 麥麥用手機連上公開網址進行錯題複習，點擊「**未擊敗**」後，系統會依艾賓浩斯週期**自動推算並排入下週一**（例如 2026-09-28）。

### 2. 面臨痛點
- **單機 LocalStorage 隔離**：GitHub Pages 為純靜態託管，做題記錄只存在當前手機的瀏覽器暫存中。
- **跨裝置不同步**：手機複習完、推到下週的題目，回家打開電腦時，電腦端完全不知道手機做過了什麼，兩邊題庫與排程不同步。
- **期望體驗**：不要手動複製貼上進度碼，希望能**「在手機上隨手做題，回家電腦一開就自動 100% 同步」**。

---

## 💡 二、選定解決方案剖析 (The "A")

### 為什麼選定「方案 A (Supabase)」而非「方案 B (GitHub API)」？
1. **真即時 vs 需手動點按**：
   - GitHub API (方案 B) 本質是 Git Commit，每次寫入都會觸發網站重新部署且連續按容易發生 `409 Conflict` 衝突，因此必須在做完一整輪後「手動按一下同步按鈕」。
   - Supabase (方案 A) 是標準 PostgreSQL 雲端資料庫，點擊「未擊敗/已擊敗」當下，背景在 **0.05 秒內發送不到 1KB 的請求默默存檔**，完全無感、無需手動按鈕。
2. **多端即時推播 (Realtime)**：
   - 電腦開著網頁時，手機一做完題目，電腦端的進度條、完成題數與火車可以即時連動。
3. **成本與額度**：
   - Supabase 免費層提供 500MB 資料庫空間（錯題進度資料僅約數十 KB，使用量不到 0.01%），永久免費零維護。

---

## 🛠️ 三、下午執行步驟與工作清單 (Action Items)

下午接續開工時，只需依照以下 5 個步驟即可在 15～20 分鐘內完全搞定：

### ✅ 步驟 1：登入 Supabase 建立免費專案（耗時約 2 分鐘）
- [ ] 前往 [Supabase 官網](https://supabase.com/)。
- [ ] 點擊「Sign in」$\to$ **使用 GitHub 帳號一鍵授權登入**（免設密碼）。
- [ ] 點擊「New Project」，建立一個專案：
  - Name：`miley-wrong-book`
  - Database Password：自行設定一組密碼（請先記下備用）。
  - Region：選擇 `Northeast Asia (Tokyo)` 或 `Southeast Asia (Singapore)` 速度最快。
  - Pricing Plan：選擇 **Free Plan**。

### ✅ 步驟 2：取得 API 金鑰並提供給助理（耗時約 1 分鐘）
- [ ] 專案建立後，在左側選單進入 **Project Settings** $\to$ **API**。
- [ ] 複製以下兩個資訊貼在對話中：
  1. **Project URL**（例：`https://abcdefg.supabase.co`）
  2. **Project API Anon Key**（一串 `anon` 公開金鑰，可安全放在前端）

### ✅ 步驟 3：建立資料表（助理可提供一鍵 SQL 貼上執行）
- [ ] 在 Supabase 左側點擊 **SQL Editor**。
- [ ] 貼上以下語法並點擊「Run」：
  ```sql
  create table if not exists user_sync_progress (
    id text primary key,
    device_name text,
    last_updated timestamptz default now(),
    progress_data jsonb not null
  );
  
  -- 開啟公開匿名讀寫權限（方便個人錯題網站免登入讀寫）
  alter table user_sync_progress enable row level security;
  create policy "Allow anon access" on user_sync_progress for all using (true) with check (true);
  ```

### ✅ 步驟 4：前端程式碼整合（助理全自動完成）
- [ ] 建立 `js/modules/supabase_sync.js` 模組。
- [ ] 在 `js/data.js` 的 `updateQuestionMastery` 與批次更新中，自動觸發非同步輕量雲端同步。
- [ ] 網頁啟動時（`init()`），自動比對雲端 `last_updated` 時間戳記，自動智慧合併遠端最新進度。
- [ ] 介面頂部增設一個綠色「☁️ 雲端已即時同步」狀態小膠囊。

### ✅ 步驟 5：實地測試與 GitHub 推送上線
- [ ] 手機打開 GitHub Pages 網站做 1~2 題並按「未擊敗」。
- [ ] 電腦重新整理網頁，確認下週複習隊列立刻出現該題。
- [ ] Git commit & push origin main，更新 Checkpoints.md，完工存檔！

---

## 📞 下午開工指令
下午您隨時打開電腦，只需在對話中回覆：  
> **「我們開始來做 Supabase 雲端同步吧！」**

助理就會立刻引導您完成第 1~2 步的兩組金鑰取得，並自動將整套雲端連線與前端智慧合併系統建置完畢！
