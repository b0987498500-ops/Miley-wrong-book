v486_entry = """## [v4.86] - 2026-11-20 (自動收錄國中英語名詞子句改寫考題 Q502：間接問句簡化為疑問詞加不定詞 wh- to V／嘉義北興段考題／純文字題目不放冗餘截圖／題庫總量達到 606 題！升級數據庫至 v488，快取升級 v4.56)
- **類型**：錯題自動收錄 / 國中英語（九年級文法、名詞子句簡化、疑問詞加不定詞「wh- + to V」句型改寫、主詞一致與情態助動詞省略原則、極簡詳解）
- **主要變更**：
  1. **完整收錄英語名詞子句改寫核心考題（Q502，歸入 2026-11-16 最新週次）**：
     - **Q502** `q_eng_grammar_wh_infinitive_rewrite_where_to_go_jiayi_beixing_502`：
       - **題幹**：依提示改寫句子：【嘉義北興】
         Lily isn't sure where she can go after school.（用 wh- 不定詞改寫句子）
       - **選項**：
         ◉ (A) Lily isn't sure where to go after school.
         ○ (B) Lily isn't sure where she to go after school.
         ○ (C) Lily isn't sure what to go after school.
         ○ (D) Lily isn't sure where to can go after school.
       - **正解**：**(A) Lily isn't sure where to go after school.**
       - **精簡解析**：
         - 名詞子句主詞 (she) 與主要子句主詞 (Lily) 一致，且含助動詞 can，可簡化為「疑問詞 + 不定詞 (where to go)」。選 (A)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：名詞子句簡化為「疑問詞 + 不定詞（wh- + to V）」三要件：① 子句主詞與主要子句主詞一致；② 刪除主詞與助動詞 (can/should)；③ 動詞改為不定詞 (to V)。
  2. **圖文規範遵循**：
     - 純文字題目，嚴格依 SOP `diagramUrl: ""` 設為空字串，不放任何冗餘截圖。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v488`（`miley_wrong_questions_v488`），題庫總量達到 **606 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.56`，腳本版本標籤升級 `js/data.js?v=488`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.85]"
assert target in content, "Target ## [v4.85] not found in Checkpoints.md!"

new_content = content.replace(target, v486_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.86!")
