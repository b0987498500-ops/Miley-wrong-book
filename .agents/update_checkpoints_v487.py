v487_entry = """## [v4.87] - 2026-11-20 (自動收錄國中英語名詞子句考題 Q503：疑問代名詞 what 作介系詞受詞／be surprised at 情緒形容詞用法／純文字題目不放冗餘截圖／題庫總量達到 607 題！升級數據庫至 v489，快取升級 v4.57)
- **類型**：錯題自動收錄 / 國中英語（九年級文法、名詞子句、疑問代名詞 what 於子句內作介系詞受詞、be surprised at 固定搭配介系詞、極簡詳解）
- **主要變更**：
  1. **完整收錄英語名詞子句介系詞受詞核心考題（Q503，歸入 2026-11-16 最新週次）**：
     - **Q503** `q_eng_grammar_noun_clause_what_preposition_object_surprised_at_503`：
       - **題幹**：I have no idea what ________.
       - **選項**：
         ○ (A) Kevin feels surprised
         ○ (B) Kevin is surprising to
         ◉ (C) Kevin is surprised at
         ○ (D) Kevin surprised
       - **正解**：**(C) Kevin is surprised at**
       - **精簡解析**：
         - 「對……感到驚訝」為 be surprised at。what 在子句中作介系詞 at 的受詞，整句為 I have no idea what Kevin is surprised at.（我不知道凱文在驚訝什麼）。選 (C)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：what 在間接問句中作代名詞，子句內必須有受詞空缺供其歸位！(A) 缺少介系詞 at，what 無處可放；牢記「be surprised at + 事物」，句末不可遺漏介系詞 at。
  2. **圖文規範遵循**：
     - 純文字題目，嚴格依 SOP `diagramUrl: ""` 設為空字串，不放任何冗餘截圖。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v489`（`miley_wrong_questions_v489`），題庫總量達到 **607 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.57`，腳本版本標籤升級 `js/data.js?v=489`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.86]"
assert target in content, "Target ## [v4.86] not found in Checkpoints.md!"

new_content = content.replace(target, v487_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.87!")
