with open('Checkpoints.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_checkpoint = r'''## [v4.46] - 2026-11-12 (自動收錄國中九年級幾何四點共圓判定與圓周角重點考題 Q446：對角互補判定四點共圓、同弧所對圓周角相等求角 CAD＝20 度／嚴格落實 100 字極簡解析準則（僅75字）／幾何圖純白底 2x Lanczos 高畫質放大優化，題庫總量達到 550 題大里程碑！升級數據庫至 v447，快取升級 v4.15)
- **類型**：錯題自動收錄 / 國中數學（幾何／圓形性質、四點共圓判定、對角互補 180 度、同弧所對圓周角相等、極簡 75 字秒解）
- **主要變更**：
  1. **完整收錄四點共圓判定核心考題（Q446，歸入 2026-11-09 最新週次）**：
     - **Q446** `q_math_geo_circle_concyclic_quad_angle_cad_20_446`：
       - **題幹**：如附圖，線段 $\overline{AC}$ 和 $\overline{BD}$ 為四邊形 $ABCD$ 的對角線。若 $\angle BAD = 80^\circ$，$\angle CBD = 20^\circ$，$\angle BDC = 60^\circ$，則 $\angle CAD$ 為多少度？
       - **選項**：◉ (A) 20 度 ○ (B) 30 度 ○ (C) 40 度 ○ (D) 50 度
       - **正解**：**(A) 20 度**
       - **嚴格 100 字內極簡解析（約 75 字）**：
         1. 在 $\triangle BCD$ 中，$\angle BCD = 180^\circ - 20^\circ - 60^\circ = 100^\circ$。
         2. 對角互補：$\angle BAD + \angle BCD = 80^\circ + 100^\circ = 180^\circ \implies A、B、C、D$ 四點共圓。
         3. 同弧所對圓周角相等：$\angle CAD$ 與 $\angle CBD$ 對同弧 $\widehat{CD}$，故 $\angle CAD = \angle CBD = 20^\circ$。選 (A)。
       - **精煉易錯警示筆記**：
         - 💡 易錯筆記：見對角互補（$80^\circ+100^\circ=180^\circ$）必聯想「四點共圓」！再由同弧所對圓周角相等，秒得 $\angle CAD=\angle CBD=20^\circ$。
  2. **圖文處理原則遵循**：
     - 幾何圖經純白底 `#FFFFFF` 淨化、筆跡去痕、重新裁切與 2x Lanczos 高畫質放大保存至 `assets/questions/q_math_geo_circle_concyclic_quad_angle_cad_20_446.png`，支援燈箱放大檢視。
  3. **數據庫升級與快取更新**：
     - 數據庫版本升級至 `v447`（`miley_wrong_questions_v447`），題庫總量達到 **550 題** 大里程碑！
     - Service Worker 快取升級為 `miley-pwa-cache-v4.15`，腳本版本標籤升級 `js/data.js?v=447`。

---

'''

target_idx = -1
for i, line in enumerate(lines):
    if line.startswith('## [v4.45]'):
        target_idx = i
        break

if target_idx != -1:
    lines.insert(target_idx, new_checkpoint)
    with open('Checkpoints.md', 'w', encoding='utf-8') as f:
        f.writelines(lines)
    print(f'Inserted [v4.46] at line {target_idx + 1}, total lines: {len(lines)}')
else:
    print('Failed to locate [v4.45]')

