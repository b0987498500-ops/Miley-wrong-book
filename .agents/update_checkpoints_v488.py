v488_entry = """## [v4.88] - 2026-11-20 (自動收錄國中英語名詞子句考題 Q504：if 是否引導間接問句肯定句語序與三單主詞動詞一致性 goes／純文字題目不放冗餘截圖／題庫總量達到 608 題！升級數據庫至 v490，快取升級 v4.58)
- **類型**：錯題自動收錄 / 國中英語（九年級文法、名詞子句、if / whether 表示「是否」引導間接問句、肯定直述語序 S + V 絕不倒裝、第三人稱單數主詞搭配現在式動詞 goes、極簡詳解）
- **主要變更**：
  1. **完整收錄英語 if 間接問句核心考題（Q504，歸入 2026-11-16 最新週次）**：
     - **Q504** `q_eng_grammar_noun_clause_if_whether_subject_verb_agreement_goes_504`：
       - **題幹**：I'm not sure if ________ to the temple every weekend.
       - **選項**：
         ○ (A) my grandmother go
         ◉ (B) my grandmother goes
         ○ (C) my grandmother does go
         ○ (D) does my grandmother go
       - **正解**：**(B) my grandmother goes**
       - **精簡解析**：
         - if（是否）引導名詞子句，須用直述肯定語序 (S + V)。主詞 my grandmother 為第三人稱單數，動詞 go 須變為 goes。選 (B)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：間接問句兩大核心原則：① 絕不倒裝（不可用助動詞倒裝 ✘ does S go）；② 主詞與動詞時態一致（主詞為三單時，動詞切勿漏掉 -es ✘ go ➔ ✔ goes）。
  2. **圖文規範遵循**：
     - 純文字題目，嚴格依 SOP `diagramUrl: ""` 設為空字串，不放任何冗餘截圖。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v490`（`miley_wrong_questions_v490`），題庫總量達到 **608 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.58`，腳本版本標籤升級 `js/data.js?v=490`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.87]"
assert target in content, "Target ## [v4.87] not found in Checkpoints.md!"

new_content = content.replace(target, v488_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.88!")
