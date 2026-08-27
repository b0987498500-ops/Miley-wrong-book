/**
 * Module 2: 階層分類與管理 (Hierarchical Archive & Management)
 * Handles Exam -> Monday Date tree navigation, error reason & subject tag filtering,
 * search input, and AI core concept cross-linking across weeks.
 */

window.ArchiveModule = {
  currentExam: 'ALL',
  currentMonday: 'ALL',
  currentSubject: 'ALL',
  currentReason: 'ALL',
  currentConcept: 'ALL',
  searchQuery: '',

  init: function() {
    this.bindEvents();
    this.renderTree();
    this.renderConceptCloud();
    this.renderCards();
  },

  bindEvents: function() {
    const self = this;

    // Subject Filter Chips
    document.querySelectorAll('#subject-filter-chips .chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        document.querySelectorAll('#subject-filter-chips .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        self.currentSubject = chip.dataset.subject;
        self.renderCards();
      });
    });

    // Reason Filter Chips
    document.querySelectorAll('#reason-filter-chips .chip').forEach(chip => {
      chip.addEventListener('click', (e) => {
        document.querySelectorAll('#reason-filter-chips .chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        self.currentReason = chip.dataset.reason;
        self.renderCards();
      });
    });

    // Search Box Input
    const searchInput = document.getElementById('archive-search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        self.searchQuery = e.target.value.trim().toLowerCase();
        self.renderCards();
      });
    }
  },

  renderTree: function() {
    const treeMenu = document.getElementById('tree-menu');
    if (!treeMenu) return;

    const treeData = window.dataManager.getTreeStructure();
    let html = '';

    const examList = ['二段', '一段', '三段'];

    examList.forEach(exam => {
      const mondayMap = treeData[exam] || {};
      const mondays = Object.keys(mondayMap).sort().reverse();
      const totalExamCount = mondays.reduce((acc, m) => acc + mondayMap[m].length, 0);

      html += `
        <div class="tree-node-exam">
          <div class="tree-exam-title" data-exam="${exam}">
            <span><i class="fa-solid fa-folder"></i> ${exam}</span>
            <span class="count-badge">${totalExamCount} 題</span>
          </div>
          <div class="tree-weeks-list">
      `;

      mondays.forEach(monday => {
        const qList = mondayMap[monday];
        html += `
          <div class="tree-week-item" data-exam="${exam}" data-monday="${monday}">
            <i class="fa-regular fa-calendar-minus"></i>
            <span>週一 ${monday} (${qList.length}題)</span>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    treeMenu.innerHTML = html;

    // Bind Tree Clicks
    const self = this;
    treeMenu.querySelectorAll('.tree-exam-title').forEach(el => {
      el.addEventListener('click', () => {
        self.currentExam = el.dataset.exam;
        self.currentMonday = 'ALL';
        self.currentConcept = 'ALL';
        self.updateTitleIndicator(`段考目錄：${self.currentExam}`);
        self.renderCards();
      });
    });

    treeMenu.querySelectorAll('.tree-week-item').forEach(el => {
      el.addEventListener('click', () => {
        treeMenu.querySelectorAll('.tree-week-item').forEach(i => i.classList.remove('active'));
        el.classList.add('active');
        self.currentExam = el.dataset.exam;
        self.currentMonday = el.dataset.monday;
        self.currentConcept = 'ALL';
        
        if (window.app) {
          window.app.startReviewWithFilter(self.currentSubject || 'ALL', self.currentMonday, false);
        }
      });
    });
  },

  renderConceptCloud: function() {
    const cloudEl = document.getElementById('concept-tags-cloud');
    if (!cloudEl) return;

    const concepts = window.dataManager.getConceptCloud();
    let html = '';

    concepts.forEach(({ concept, count }) => {
      const activeClass = this.currentConcept === concept ? 'active' : '';
      html += `
        <button class="concept-tag-btn ${activeClass}" data-concept="${concept}">
          # ${concept} (${count})
        </button>
      `;
    });

    cloudEl.innerHTML = html;

    const self = this;
    cloudEl.querySelectorAll('.concept-tag-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const concept = btn.dataset.concept;
        if (self.currentConcept === concept) {
          self.currentConcept = 'ALL';
          btn.classList.remove('active');
          self.updateTitleIndicator('全部錯題列表');
        } else {
          cloudEl.querySelectorAll('.concept-tag-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          self.currentConcept = concept;
          self.updateTitleIndicator(`AI 概念聚類特訓：#${concept}`);
        }
        self.renderCards();
      });
    });
  },

  updateTitleIndicator: function(text) {
    const titleEl = document.getElementById('archive-current-title');
    if (titleEl) titleEl.innerText = text;
  },

  renderCards: function() {
    const grid = document.getElementById('archive-cards-grid');
    if (!grid) return;

    let list = window.dataManager.getAll();

    // Filters
    if (this.currentExam !== 'ALL') {
      list = list.filter(q => q.examPeriod === this.currentExam);
    }
    if (this.currentMonday !== 'ALL') {
      list = list.filter(q => q.mondayDate === this.currentMonday);
    }
    const isSubjMatch = (qSubj, targetSubj) => {
      if (!targetSubj || targetSubj === 'ALL') return true;
      if (!qSubj) return false;
      if (qSubj === targetSubj) return true;
      const q = String(qSubj).toLowerCase();
      const t = String(targetSubj).toLowerCase();
      if (t === '社會') return q.includes('社會') || q.includes('公民') || q.includes('地理') || q.includes('歷史');
      if (t === '自然/理化' || t === '自然') return q.includes('自然') || q.includes('理化') || q.includes('生物') || q.includes('地科');
      return q.includes(t) || t.includes(q);
    };

    if (this.currentSubject !== 'ALL') {
      list = list.filter(q => isSubjMatch(q.subject, this.currentSubject));
    }
    if (this.currentReason !== 'ALL') {
      list = list.filter(q => q.errorReason === this.currentReason);
    }
    if (this.currentConcept !== 'ALL') {
      list = list.filter(q => q.concept === this.currentConcept);
    }
    if (this.searchQuery) {
      list = list.filter(q => 
        (q.stem && q.stem.toLowerCase().includes(this.searchQuery)) ||
        (q.concept && q.concept.toLowerCase().includes(this.searchQuery)) ||
        (q.mistakeNote && q.mistakeNote.toLowerCase().includes(this.searchQuery))
      );
    }

    const countBadge = document.getElementById('archive-results-count');
    if (countBadge) countBadge.innerText = `${list.length} 題`;

    if (list.length === 0) {
      grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); padding: 40px;">尚未搜尋到符合條件之錯題。</div>`;
      return;
    }

    let html = '';
    list.forEach(q => {
      html += `
        <div class="question-card">
          <div class="qcard-header">
            <div class="qcard-tags">
              <span class="tag-subject">${q.subject}</span>
              <span class="tag-reason">${q.errorReason}</span>
              <span class="tag-concept">#${q.concept}</span>
            </div>
            <span style="font-size: 0.75rem; color: var(--text-muted);">${q.mondayDate}</span>
          </div>

          <div class="qcard-stem" id="card-stem-${q.id}">${q.stem}</div>

          ${q.mistakeNote ? `
            <div class="qcard-yellow-note">
              <i class="fa-solid fa-highlighter"></i> ${q.mistakeNote}
            </div>
          ` : ''}

          <div class="qcard-footer">
            <span>錯誤次數：<strong style="color: var(--accent-danger);">${q.errorCount || 1} 次</strong></span>
            <span>${q.isArchived ? '<span style="color:var(--accent-success);">[已掌握歸檔]</span>' : `艾賓浩斯 W${q.ebbinghausStage}`}</span>
          </div>
        </div>
      `;
    });

    grid.innerHTML = html;

    // Render KaTeX for stems in cards
    list.forEach(q => {
      window.katexUtils.renderText(`card-stem-${q.id}`, q.stem);
    });
  }
};
