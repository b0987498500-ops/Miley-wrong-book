---
name: checkpoint_master
description: 自動化 Checkpoint 快照管理、SemVer 版本號標籤 (v1.00/v1.01/v2.00)、規則提純歸檔、自動同步推送至 GitHub 與一鍵秒級快照復原工具。
---

# Checkpoint 制度與管理 Skill (checkpoint_master)

本 Skill 定義麥麥錯題網站專用的 Checkpoint 機制，包含：
1. **GitHub 雲端網站即時同步**：每次完成題目新增、排版調整或功能修正，必須同時執行 `git commit` 與 `git push origin main`，確保 GitHub Pages 線上網站永遠與本機最新進度保持完全同步。
2. **標準版本號規範**：日常增量為小版（`v1.01`、`v1.02` 等），功能大更新或穩定版進位為整數版（`v2.00`）。
3. **規則提純與日誌追蹤**：詳細異動記錄於 `Checkpoints.md`，廢棄規則移至 `.agents/archive_rules/`。
4. **一鍵秒級快照復原**：可使用 `git restore --source=[Tag/Commit] .` 瞬間還原歷史版本。

---

## 1. 專案配置規範 (`.agents/config.json`)

```json
{
  "projectName": "麥麥錯題網站",
  "mainRepository": {
    "account": "b0987498500-ops",
    "remoteName": "origin",
    "branch": "main",
    "url": "https://github.com/b0987498500-ops/Miley-wrong-book.git"
  },
  "checkpointLogPath": "Checkpoints.md",
  "archiveRulesPath": ".agents/archive_rules/",
  "versionFormat": "vX.XX"
}
```

---

## 2. 核心執行流程

### 流程一：建立快照並同步推送至 GitHub Pages
1. 執行 `git add .`
2. 執行 `git commit -m "checkpoint: [vX.XX] - [變更簡述]"`
3. 更新 `Checkpoints.md` 記錄版本與變更內容。
4. 執行 `git push origin main --tags` 推送至 GitHub，觸發 GitHub Pages 網站自動更新。
