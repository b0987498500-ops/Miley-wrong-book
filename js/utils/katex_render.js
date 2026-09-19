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

  formatMarkdownImages: function(textStr) {
    if (!textStr) return '';
    const mdImgRegex = /!\[([^\]]*)\]\(([^)]+)\)/g;
    return textStr.replace(mdImgRegex, function(match, altText, src) {
      const cleanSrc = src.trim();
      return `<div class="solution-diagram-card" style="text-align: center; margin: 16px 0 20px 0;">
        <div style="display: inline-block; background: #ffffff; padding: 12px; border-radius: 12px; box-shadow: 0 4px 16px rgba(0,0,0,0.12); border: 1px solid rgba(226, 232, 240, 0.8); max-width: 100%;">
          <img src="${cleanSrc}" alt="${altText}" style="max-width: 100%; height: auto; display: block; border-radius: 8px;">
          ${altText ? `<div style="margin-top: 8px; font-size: 0.82rem; color: #64748b; font-weight: 500;"><i class="fa-solid fa-shapes" style="color: #f59e0b; margin-right: 6px;"></i>${altText}</div>` : ''}
        </div>
      </div>`;
    });
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
    if (!textStr || !textStr.includes('|')) return textStr;
    
    const lines = textStr.split('<br/>');
    let inTable = false;
    let tableHtml = '';
    let resultLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      let trimmed = line.trim();

      // Check if this line is a table separator row: e.g. | :---: | --- |
      const isSeparator = trimmed.startsWith('|') && trimmed.endsWith('|') &&
        trimmed.slice(1, -1).split('|').length >= 2 &&
        trimmed.slice(1, -1).split('|').every(c => /^:?-+:?$/.test(c.trim()));

      // Check if this line looks like a table row: starts with '|', ends with '|', at least 2 columns
      const isCandidateTableRow = trimmed.startsWith('|') && trimmed.endsWith('|') &&
        trimmed.slice(1, -1).split('|').length >= 2;

      if (isSeparator) {
        // Skip separator row
        continue;
      }

      if (isCandidateTableRow) {
        const cells = trimmed.slice(1, -1).split('|').map(c => c.trim());

        if (!inTable) {
          // To start a table, the next line MUST be a separator row!
          const nextTrimmed = (i + 1 < lines.length) ? lines[i + 1].trim() : '';
          const nextIsSeparator = nextTrimmed.startsWith('|') && nextTrimmed.endsWith('|') &&
            nextTrimmed.slice(1, -1).split('|').length >= 2 &&
            nextTrimmed.slice(1, -1).split('|').every(c => /^:?-+:?$/.test(c.trim()));

          if (nextIsSeparator) {
            inTable = true;
            tableHtml = '<div class="table-wrapper"><table class="katex-formatted-table"><thead><tr>';
            cells.forEach(cell => {
              tableHtml += `<th>${cell}</th>`;
            });
            tableHtml += '</tr></thead><tbody>';
          } else {
            // Not a markdown table header (no separator row immediately after)
            resultLines.push(line);
          }
        } else {
          // Inside an active table body
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
    }

    if (inTable) {
      tableHtml += '</tbody></table></div>';
      resultLines.push(tableHtml);
    }

    return resultLines.join('<br/>');
  },

  isCleanTextModeActive: function() {
    return true; // 系統永久標準：文字永遠保持純淨清晰、零奇怪代碼與符號
  },

  setCleanTextMode: function(active) {
    // 系統永久內建標準，不提供關閉
  },

  repairMathDelimiters: function(text) {
    if (!text || typeof text !== 'string') return text;
    // Auto-repair unclosed single '$' if odd number
    const count = (text.match(/(?<!\\)\$/g) || []).length;
    if (count % 2 !== 0) {
      text = text + '$';
    }
    return text;
  },

  cleanMathGarble: function(textStr) {
    if (!textStr || typeof textStr !== 'string') return '';
    let s = textStr;
    // 1. Line segments: \overline{AB} -> <span class="math-overline">AB</span>
    s = s.replace(/\\overline\{([^}]+)\}/g, '<span class="math-overline">$1</span>');
    // 2. Geometry shapes
    s = s.replace(/\\triangle\s*([A-Za-z0-9]+)?/g, '△$1');
    s = s.replace(/\\angle\s*([A-Za-z0-9]+)?/g, '∠$1');
    // 3. Fractions: \frac{a}{b} -> (a / b)
    s = s.replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1 / $2)');
    // 4. Common operators and math symbols
    s = s.replace(/\\times/g, '×')
         .replace(/\\div/g, '÷')
         .replace(/\\pm/g, '±')
         .replace(/\\pi/g, 'π')
         .replace(/\\degree/g, '°')
         .replace(/\\neq/g, '≠')
         .replace(/\\leq/g, '≤')
         .replace(/\\geq/g, '≥')
         .replace(/\\implies/g, '⟹')
         .replace(/\\iff/g, '⟺')
         .replace(/\\dots/g, '…')
         .replace(/\\cdots/g, '…')
         .replace(/\\cdot/g, '·')
         .replace(/\\perp/g, '⊥')
         .replace(/\\parallel/g, '//')
         .replace(/\\text\{([^}]+)\}/g, '$1')
         .replace(/\\mathbf\{([^}]+)\}/g, '$1');
    // 5. Remove orphan delimiters and dangling backslashes
    s = s.replace(/\$\$/g, '').replace(/\$/g, '');
    s = s.replace(/\\([a-zA-Z]+)/g, '$1');
    return s;
  },

  postCleanGarbleInElement: function(el) {
    if (!el || typeof document === 'undefined') return;
    try {
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, {
        acceptNode: function(node) {
          if (node.parentElement && (
            node.parentElement.closest('.katex') ||
            node.parentElement.closest('.fc-fill-in-input') ||
            node.parentElement.tagName === 'SCRIPT' ||
            node.parentElement.tagName === 'STYLE'
          )) {
            return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      });

      const nodesToReplace = [];
      while (walker.nextNode()) {
        const node = walker.currentNode;
        if (node.nodeValue && (
          node.nodeValue.includes('\\overline') ||
          node.nodeValue.includes('\\frac') ||
          node.nodeValue.includes('\\triangle') ||
          node.nodeValue.includes('\\angle') ||
          node.nodeValue.includes('\\times') ||
          node.nodeValue.includes('\\div') ||
          node.nodeValue.includes('\\pm') ||
          node.nodeValue.includes('\\sim') ||
          node.nodeValue.includes('\\cong') ||
          node.nodeValue.includes('\\implies') ||
          node.nodeValue.includes('\\dots') ||
          node.nodeValue.includes('\\cdot') ||
          node.nodeValue.includes('$$') ||
          node.nodeValue.includes('$')
        )) {
          nodesToReplace.push(node);
        }
      }

      nodesToReplace.forEach(node => {
        const cleaned = this.cleanMathGarble(node.nodeValue);
        if (cleaned !== node.nodeValue && node.parentNode) {
          const span = document.createElement('span');
          span.innerHTML = cleaned;
          node.parentNode.replaceChild(span, node);
        }
      });
    } catch (e) {
      console.warn('postCleanGarbleInElement warning:', e);
    }
  },

  renderText: function(elementOrId, textStr) {
    let el = typeof elementOrId === 'string' ? document.getElementById(elementOrId) : elementOrId;
    if (!el) return;

    if (textStr !== undefined && textStr !== null) {
      let formattedText = String(textStr);
      if (formattedText.includes('569X')) {
        formattedText = formattedText.split('569X\\frac').join('$-\\frac').split('569X').join('-$');
      }
      if (formattedText.includes('20474')) {
        formattedText = formattedText.split('20474').join('$$');
      }

      // Repair delimiters before KaTeX
      formattedText = this.repairMathDelimiters(formattedText);

      formattedText = formattedText.replace(/\n/g, '<br/>');
      formattedText = this.formatTables(formattedText);
      formattedText = this.formatMarkdownImages(formattedText);
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
          throwOnError: false,
          strict: false
        });
      } catch (e) {
        console.warn('KaTeX render warning:', e);
      }
    }

    // Post-render Anti-Garble Sweep: Clean any remaining raw LaTeX
    this.postCleanGarbleInElement(el);
  }
};
