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

  formatMarkdownLinks: function(textStr) {
    if (!textStr) return '';
    // Process markdown links [link title](https://...) into clean, elegant hyperlinks
    const mdLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    return textStr.replace(mdLinkRegex, function(match, labelText, url) {
      const cleanUrl = url.replace(/[.,;)]+$/, '');
      const safeAttr = cleanUrl.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
      const isYoutube = cleanUrl.toLowerCase().includes('youtube.com') || cleanUrl.toLowerCase().includes('youtu.be');
      const icon = isYoutube 
        ? '<i class="fa-brands fa-youtube" style="color: #ef4444; font-size: 1.25rem;"></i>' 
        : '<i class="fa-solid fa-link" style="color: #6366f1; font-size: 1.1rem;"></i>';

      return `<div class="clean-link-item" style="margin: 10px 0;">
        <a href="${safeAttr}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; font-size: 1.08rem; font-weight: bold; display: inline-flex; align-items: center; gap: 8px;">
          ${icon} <span>${labelText}</span>
        </a>
      </div>`;
    });
  },

  formatVideoUrls: function(textStr) {
    if (!textStr) return '';
    
    // Strict Case-Sensitive URL Matching ONLY for raw URLs not already inside an <a> tag
    const urlRegex = /(?<!href="|data-raw-url="|data-url="|">|\[.*?\]\()(https?:\/\/[^\s<"']+)/g;

    return textStr.replace(urlRegex, function(url) {
      const cleanUrl = url.replace(/[.,;)]+$/, '');
      const safeAttr = cleanUrl.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
      const isYoutube = cleanUrl.toLowerCase().includes('youtube.com') || cleanUrl.toLowerCase().includes('youtu.be');
      const label = isYoutube ? '點選看 YouTube' : cleanUrl;
      const icon = isYoutube 
        ? '<i class="fa-brands fa-youtube" style="color: #ef4444; font-size: 1.25rem;"></i>' 
        : '<i class="fa-solid fa-link" style="color: #6366f1; font-size: 1.1rem;"></i>';

      return `<div class="clean-link-item" style="margin: 10px 0;">
        <a href="${safeAttr}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; text-decoration: underline; font-size: 1.08rem; font-weight: bold; display: inline-flex; align-items: center; gap: 8px;">
          ${icon} <span>${label}</span>
        </a>
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
      formattedText = this.formatMarkdownLinks(formattedText);
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
