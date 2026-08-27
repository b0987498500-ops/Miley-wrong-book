/**
 * A4 Dual PDF Export Utility (測驗卷 / 解答卷)
 * Generates structured printable A4 HTML views and downloads PDF via jsPDF & html2canvas or window.print.
 */

window.pdfExportUtils = {
  exportTestPaper: function(questions) {
    const container = document.getElementById('pdf-export-container');
    if (!container) return;

    let html = `
      <div style="font-family: 'Noto Sans TC', sans-serif; color: #000; padding: 20px; background: #fff;">
        <h2 class="pdf-header-title">【週末日常複習測驗卷】（純題目 - 手寫計算卷）</h2>
        <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
          <span>姓名：_________________</span>
          <span>日期：${new Date().toISOString().split('T')[0]}</span>
          <span>得分：_________________</span>
        </div>
    `;

    questions.forEach((q, index) => {
      html += `
        <div class="pdf-question-item">
          <div class="pdf-question-num">第 ${index + 1} 題【${q.subject} - ${q.concept}】</div>
          <div style="font-size: 15px; line-height: 1.6;">${q.stem}</div>
          <div class="pdf-space-box" style="margin-top: 12px; height: 120px; border: 1px dashed #999; border-radius: 4px; padding: 8px; font-size: 12px; color: #888;">
            【草稿計算區】
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;

    // Render KaTeX in PDF container
    if (window.katexUtils) {
      window.katexUtils.renderText(container);
    }

    this.downloadPdf(container, `麥麥錯題_週末測驗卷_${new Date().toISOString().split('T')[0]}.pdf`);
  },

  exportAnswerPaper: function(questions) {
    const container = document.getElementById('pdf-export-container');
    if (!container) return;

    let html = `
      <div style="font-family: 'Noto Sans TC', sans-serif; color: #000; padding: 20px; background: #fff;">
        <h2 class="pdf-header-title" style="color: #4f46e5;">【週末日常複習解答卷】（標準答案與防錯提醒）</h2>
        <div style="display: flex; justify-content: space-between; font-size: 14px; margin-bottom: 20px; border-bottom: 1px solid #ccc; padding-bottom: 10px;">
          <span>對答與解題分析</span>
          <span>產出日期：${new Date().toISOString().split('T')[0]}</span>
        </div>
    `;

    questions.forEach((q, index) => {
      html += `
        <div class="pdf-question-item" style="border-bottom: 1px solid #eee; padding-bottom: 16px;">
          <div class="pdf-question-num">第 ${index + 1} 題【${q.subject} - ${q.concept}】（失分原因：${q.errorReason}）</div>
          
          <!-- FLUORESCENT YELLOW HIGHLIGHT NOTE IN PDF -->
          <div class="pdf-yellow-note-box">
            ⚡ 個人防錯備忘筆記：${q.mistakeNote || '無特記備忘'}
          </div>

          <div style="margin-top: 10px; font-size: 14px;">
            <strong style="color: #059669;">標準答案：</strong> ${q.answer}
          </div>
          <div style="margin-top: 6px; font-size: 14px; line-height: 1.5; background: #f9fafb; padding: 10px; border-radius: 4px;">
            <strong>詳細解題步驟：</strong><br/>
            ${q.solution ? q.solution.replace(/\n/g, '<br/>') : ''}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    container.innerHTML = html;

    if (window.katexUtils) {
      window.katexUtils.renderText(container);
    }

    this.downloadPdf(container, `麥麥錯題_解答對答卷_${new Date().toISOString().split('T')[0]}.pdf`);
  },

  downloadPdf: function(element, filename) {
    if (window.html2canvas && window.jspdf) {
      const { jsPDF } = window.jspdf;
      
      html2canvas(element, { scale: 2, useCORS: true }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        pdf.save(filename);
      }).catch(err => {
        console.error('PDF export fallback:', err);
        window.print();
      });
    } else {
      window.print();
    }
  }
};
