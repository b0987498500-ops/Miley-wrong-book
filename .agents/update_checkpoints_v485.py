v485_entry = """## [v4.85] - 2026-11-20 (自動收錄國中英語名詞子句考題 Q501：間接問句語序與 happen 不及物動詞用法／臺南復興段考題／純文字題目不放冗餘截圖／照錄原題精簡解析／題庫總量達到 605 題！升級數據庫至 v487，快取升級 v4.55)
- **類型**：錯題自動收錄 / 國中英語（九年級文法、名詞子句、間接問句肯定句語序「疑問詞 + S + V」、不及物動詞 happen 用法「某事發生在某人身上」what happened to sb.、原截圖解析優先精簡照錄）
- **主要變更**：
  1. **完整收錄英語間接問句核心考題（Q501，歸入 2026-11-16 最新週次）**：
     - **Q501** `q_eng_grammar_noun_clause_indirect_question_happen_tainan_fuxing_501`：
       - **題幹**：Does anyone know ________? 【臺南復興】
       - **選項**：
         ◉ (A) how this could happen
         ○ (B) what he happened
         ○ (C) that what happened to him
         ○ (D) what to happen
       - **正解**：**(A) how this could happen**
       - **精簡照錄原題解析**：
         - know 後接間接問句 (疑問詞+S+V)。(A)語序正確；(B)應改 what happened to him；(C)刪 that；(D)改 what happened。選 (A)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：happen 為「不及物動詞」，主詞須為「事情」（如 what happened / this happened），不可用「人」作主詞（如 ✘ he happened）；間接問句不與 that 連用。
  2. **圖文規範遵循**：
     - 純文字題目，嚴格依 SOP `diagramUrl: ""` 設為空字串，不放任何冗餘截圖。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v487`（`miley_wrong_questions_v487`），題庫總量達到 **605 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.55`，腳本版本標籤升級 `js/data.js?v=487`。

---

"""

with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    content = f.read()

target = "## [v4.84]"
assert target in content, "Target ## [v4.84] not found in Checkpoints.md!"

new_content = content.replace(target, v485_entry + target, 1)

with open('Checkpoints.md', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Updated Checkpoints.md successfully with v4.85!")
