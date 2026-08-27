/**
 * KaTeX Safe Rendering Utility
 * Parses and renders LaTeX expressions in math formulas.
 */

window.katexUtils = {
  renderText: function(elementOrId, textStr) {
    let el = typeof elementOrId === 'string' ? document.getElementById(elementOrId) : elementOrId;
    if (!el) return;

    if (textStr !== undefined && textStr !== null) {
      el.innerHTML = textStr.replace(/\n/g, '<br/>');
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
