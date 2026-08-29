/**
 * KaTeX Safe Rendering Utility & Link/Table Formatter
 * Strict Case-Preserving URL Formatter: Preserves exact case sensitivity (l vs I) for YouTube Video IDs.
 * Formats URLs into copyable text boxes with a 1-click copy button, and formats pipe tables into styled HTML tables.
 */

window.katexUtils = {
  copyFromInput: function(btnEl) {
    if (!btnEl) return;
    const inputEl = btnEl.previousElementSibling;
    if (!inputEl) return;

    // Read the exact literal URL string without modifying letter case (l vs I)
    const exactUrl = inputEl.getAttribute('data-raw-url') || inputEl.value;
    if (!exactUrl) return;

    const self = this;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(exactUrl).then(() => {
        self.showCopySuccess(btnEl);
      }).catch(() => {
        self.fallbackCopy(exactUrl, btnEl);
      });
    } else {
      this.fallbackCopy(exactUrl, btnEl);
    }
  },

  fallbackCopy: function(urlStr, btnEl) {
    try {
      const tempInput = document.createElement('textarea');
      tempInput.value = urlStr; // Preserves exact case
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      this.showCopySuccess(btnEl);
    } catch (e) {
      console.warn('Copy fallback failed', e);
    }
  },

  showCopySuccess: function(btnEl) {
    if (btnEl) {
      const originalHtml = btnEl.innerHTML;
      btnEl.innerHTML = '<i class="fa-solid fa-check"></i> 已複製！';
      btnEl.style.background = '#10b981';
      btnEl.style.color = '#ffffff';
      setTimeout(() => {
        btnEl.innerHTML = originalHtml;
        btnEl.style.background = '';
        btnEl.style.color = '';
      }, 2000);
    }

    const existingToast = document.querySelector('.url-copy-toast');
    if (existingToast) existingToast.remove();

    const toast = document.createElement('div');
    toast.className = 'url-copy-toast';
    toast.innerHTML = '<i class="fa-solid fa-check-circle" style="color: #34d399;"></i> 網址已複製（維持原大小寫）！可直接貼上至 Chrome 瀏覽器';
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
  },

  formatVideoUrls: function(textStr) {
    if (!textStr) return '';
    
    // Strict Case-Sensitive URL Matching
    const urlRegex = /(https?:\/\/[^\s<]+)/g;

    return textStr.replace(urlRegex, function(url) {
      // PRESERVE EXACT CASE of the original URL (do NOT call toLowerCase on cleanUrl)
      const cleanUrl = url.replace(/[.,;)]+$/, '');
      const isYoutube = cleanUrl.toLowerCase().includes('youtube.com') || cleanUrl.toLowerCase().includes('youtu.be');
      const label = isYoutube ? '🎬 名師影音解題網址' : '🔗 參考網址';

      // HTML escape quotes for data attribute while strictly maintaining exact character cases
      const safeAttr = cleanUrl.replace(/"/g, '&quot;').replace(/'/g, '&#39;');

      return `<div class="solution-url-copy-box">
        <div class="url-label"><i class="${isYoutube ? 'fa-brands fa-youtube' : 'fa-solid fa-link'}" style="color: ${isYoutube ? '#ef4444' : '#6366f1'};"></i> ${label}：</div>
        <div class="url-input-group">
          <input type="text" class="url-text-input" value="${safeAttr}" data-raw-url="${safeAttr}" readonly onclick="this.select();" title="點擊全選網址">
          <button type="button" class="btn-copy-url" onclick="event.stopPropagation(); window.katexUtils.copyFromInput(this)">
            <i class="fa-regular fa-copy"></i> 複製網址
          </button>
        </div>
      </div>`;
    });
  },

  formatTables: function(textStr) {
    if (!textStr) return '';
    
    const lines = textStr.split('<br/>');
    let inTable = false;
    let tableHtml = '';
    let resultLines = [];

    lines.forEach(line => {
      const trimmed = line.trim();
      if (trimmed.includes('|') && trimmed.split('|').length >= 3) {
        const cells = trimmed.split('|').map(c => c.trim());
        if (!inTable) {
          inTable = true;
          tableHtml = '<div class="table-wrapper"><table class="katex-formatted-table"><thead><tr>';
          cells.forEach(cell => {
            tableHtml += `<th>${cell}</th>`;
          });
          tableHtml += '</tr></thead><tbody>';
        } else {
          tableHtml += '<tr>';
          cells.forEach(cell => {
            tableHtml += `<td>${cell}</td>`;
          });
          tableHtml += '</tr>';
        }
      } else {
        if (inTable) {
          inTable = false;
          tableHtml += '</tbody></table></div>';
          resultLines.push(tableHtml);
          tableHtml = '';
        }
        resultLines.push(line);
      }
    });

    if (inTable) {
      tableHtml += '</tbody></table></div>';
      resultLines.push(tableHtml);
    }

    return resultLines.join('<br/>');
  },

  renderText: function(elementOrId, textStr) {
    let el = typeof elementOrId === 'string' ? document.getElementById(elementOrId) : elementOrId;
    if (!el) return;

    if (textStr !== undefined && textStr !== null) {
      let formattedText = String(textStr).replace(/\n/g, '<br/>');
      formattedText = this.formatTables(formattedText);
      formattedText = this.formatVideoUrls(formattedText);
      el.innerHTML = formattedText;
    }

    // Trigger KaTeX auto-render if loaded
    if (window.renderMathInElement) {
      try {
        window.renderMathInElement(el, {
          delimiters: [
            { left: '$$', right: '$$', display: true },
            { left: '\\(', right: '\\)', display: false },
            { left: '\\[', right: '\\]', display: true },
            { left: '$', right: '$', display: false }
          ],
          throwOnError: false
        });
      } catch (e) {
        console.warn('KaTeX render warning:', e);
      }
    }
  }
};
