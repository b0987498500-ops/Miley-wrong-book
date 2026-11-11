with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_checkpoint = r'''## [v4.42] - 2026-11-11 (自動收錄國中理化簡單機械槓桿原理考題 Q442：開瓶器抗力點在中間為省力槓桿／嚴格落實自然科原圖極簡解析準則（僅27字，一句話照錄）／開瓶器插圖純白底 2x Lanczos 高畫質放大優化，題庫總量達到 546 題！升級數據庫至 v443，快取升級 v4.11)
- **類型**：錯題自動收錄 / 國中自然（理化／簡單機械與功、槓桿原理、支點抗力點施力點位置判別、開瓶器抗力點在中間之省力槓桿）
- **主要變更**：
  1. **完整收錄槓桿原理開瓶器核心考題（Q442，歸入 2026-11-09 最新週次）**：
     - **Q442** `q_sci_phys_bottle_opener_lever_resistance_middle_442`：
       - **題幹**：如圖使用「開瓶器打開瓶蓋」時，下列敘述何者正確？
       - **選項**：○ (A) 開瓶器是個省時的工具 ○ (B) 手的施力比瓶蓋的抗力大 ○ (C) 開瓶器是支點在中間的槓桿 ◉ (D) 開瓶器是抗力點在中間的槓桿。
       - **正解**：**(D) 開瓶器是抗力點在中間的槓桿。**
       - **原圖極簡解析（27 字，一句話照錄）**：
         - 抗力點在支點與施力點之間，是一種省力的槓桿。故選 (D)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：開瓶器前端頂住瓶蓋頂部為「支點」，中間勾住瓶蓋邊緣為「抗力點」，手握把柄為「施力點」！抗力點在中間必為「省力費時」槓桿！
  2. **圖文處理原則遵循**：
     - 開瓶器撬蓋插圖經純白底 `#FFFFFF` 淨化、筆跡去痕、重新裁切與 2x Lanczos 高畫質放大保存至 `assets/questions/q_sci_phys_bottle_opener_lever_resistance_middle_442.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v443`（`miley_wrong_questions_v443`），題庫總量達到 **546 題**！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.11`，腳本版本標籤升級 `js/data.js?v=443`。

---

'''

target_idx = -1
for i, line in enumerate(lines):
    if line.startswith('## [v4.41]'):
        target_idx = i
        break

if target_idx != -1:
    lines.insert(target_idx, new_checkpoint)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Inserted [v4.42] at line {target_idx + 1}, total lines: {len(lines)}')
else:
    print('Failed to locate [v4.41]')
