with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_checkpoint = r'''## [v4.43] - 2026-11-12 (自動收錄國中公民憲法特性考題 Q443：修憲高門檻體現憲法固定性／嚴格落實社會科極簡原圖解析準則（僅68字）／新聞快訊電視圖純白底 2x Lanczos 高畫質放大優化，題庫總量達到 547 題！升級數據庫至 v444，快取升級 v4.12)
- **類型**：錯題自動收錄 / 國中公民（憲法之最高性、原則性與固定性、修憲門檻與憲法固定性、憲法修正案由立法院提出、公民投票複決之選舉人法定資格）
- **主要變更**：
  1. **完整收錄憲法固定性與修憲程序核心考題（Q443，歸入 2026-11-09 最新週次）**：
     - **Q443** `q_soc_civ_constitution_stability_news_referendum_443`：
       - **題幹**：附圖是小平看到的一則新聞快訊。根據圖中內容及我國憲政體制、法律規範判斷，下列哪一項敘述完全正確？
       - **選項**：◉ (A) 圖中內容凸顯出《憲法》的固定性 ○ (B) 該憲法修正案應該是由行政院提出 ○ (C) 受監護宣告者依法享有此次投票權 ○ (D) 具有我國國民身分即可行使複決權
       - **正解**：**(A) 圖中內容凸顯出《憲法》的固定性**
       - **原圖精準極簡解析（68 字）**：
         - 修憲門檻極高且繁複，呈現出《憲法》修改困難的「固定性」特色，故選 (A)。(B) 修憲案由立法院提出；(C)(D) 投票需符合法定選舉人資格（年滿20歲、未受監護宣告）。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：修憲門檻極高（需立院 3/4 決議 ＋ 965萬公投同意票）體現憲法的「固定性」！憲法修正案由「立法院」提出，非行政院。
  2. **圖文處理原則遵循**：
     - 新聞快訊電視圖經純白底 `#FFFFFF` 淨化、筆跡去痕、重新裁切與 2x Lanczos 高畫質放大保存至 `assets/questions/q_soc_civ_constitution_stability_news_referendum_443.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v444`（`miley_wrong_questions_v444`），題庫總量達到 **547 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.12`，腳本版本標籤升級 `js/data.js?v=444`。

---

'''

target_idx = -1
for i, line in enumerate(lines):
    if line.startswith('## [v4.42]'):
        target_idx = i
        break

if target_idx != -1:
    lines.insert(target_idx, new_checkpoint)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Inserted [v4.43] at line {target_idx + 1}, total lines: {len(lines)}')
else:
    print('Failed to locate [v4.42]')

