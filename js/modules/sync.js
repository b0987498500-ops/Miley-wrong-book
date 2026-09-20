/**
 * Smart Wrong Question Review System - Cross-Device Sync Module
 * Enables seamless progress synchronization between mobile phone, tablet, and PC.
 */

window.SyncModule = {
  isInitialized: false,
  STORAGE_SYNC_TIME_KEY: 'miley_last_sync_timestamp',

  init: function() {
    if (this.isInitialized) return;
    this.isInitialized = true;
    this.bindEvents();
  },

  bindEvents: function() {
    // Topbar or Sidebar trigger
    document.getElementById('btn-open-sync-modal')?.addEventListener('click', () => this.openModal());
    document.getElementById('btn-close-sync-modal')?.addEventListener('click', () => this.closeModal());
    document.getElementById('sync-modal-backdrop')?.addEventListener('click', (e) => {
      if (e.target.id === 'sync-modal-backdrop') this.closeModal();
    });

    // Copy Sync Code
    document.getElementById('btn-copy-sync-code')?.addEventListener('click', () => this.copySyncCode());

    // Apply Sync Code
    document.getElementById('btn-apply-sync-code')?.addEventListener('click', () => this.applySyncCode());

    // Export / Import JSON file
    document.getElementById('btn-export-sync-file')?.addEventListener('click', () => this.exportBackupFile());
    document.getElementById('sync-file-input')?.addEventListener('change', (e) => this.handleFileImport(e));

    // Listen to visibility change to check for updates if tab resumes
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.updateSyncBadge();
      }
    });
  },

  openModal: function() {
    const modal = document.getElementById('sync-modal');
    if (!modal) return;
    modal.classList.remove('hidden');
    this.refreshModalStats();
  },

  closeModal: function() {
    const modal = document.getElementById('sync-modal');
    if (modal) modal.classList.add('hidden');
  },

  refreshModalStats: function() {
    const questions = window.dataManager ? window.dataManager.getAll() : [];
    const defeated = questions.filter(q => q.isArchived || (q.consecutiveMastered || 0) > 0).length;
    const total = questions.length;

    const chineseReviewed = questions.filter(q => q.subject === '國文' && (q.consecutiveMastered || 0) > 0).length;
    const chineseTotal = questions.filter(q => q.subject === '國文').length;

    const englishReviewed = questions.filter(q => q.subject === '英文' && (q.consecutiveMastered || 0) > 0).length;
    const englishTotal = questions.filter(q => q.subject === '英文').length;

    const mathReviewed = questions.filter(q => q.subject === '數學' && (q.consecutiveMastered || 0) > 0).length;
    const mathTotal = questions.filter(q => q.subject === '數學').length;

    const statsEl = document.getElementById('sync-stats-summary');
    if (statsEl) {
      statsEl.innerHTML = `
        <div class="sync-stat-row">
          <span>⚔️ 已討伐錯題怪：</span>
          <strong style="color: #fbbf24; font-size: 1.15rem;">${defeated} / ${total} 題</strong>
        </div>
        <div class="sync-subject-tags">
          <span class="sync-tag-item ${chineseReviewed === chineseTotal ? 'complete' : ''}">國文: ${chineseReviewed}/${chineseTotal}</span>
          <span class="sync-tag-item ${englishReviewed === englishTotal ? 'complete' : ''}">英文: ${englishReviewed}/${englishTotal}</span>
          <span class="sync-tag-item">數學: ${mathReviewed}/${mathTotal}</span>
        </div>
      `;
    }

    // Pre-populate the sync code textarea
    const codeArea = document.getElementById('sync-export-code-text');
    if (codeArea) {
      codeArea.value = this.generateSyncSnapshotString();
    }
  },

  // Generates a compact JSON string representing user progress
  generateSyncSnapshotString: function() {
    if (!window.dataManager) return '';
    const questions = window.dataManager.getAll();
    
    // Extract only essential progress states to keep string compact
    const progressList = questions.map(q => ({
      id: q.id,
      m: q.consecutiveMastered || 0,
      s: q.ebbinghausStage || 1,
      r: q.isReviewed || false,
      st: q.reviewStatus || 'unreviewed',
      d: q.lastReviewDecision || null,
      lm: q.lastReviewedMonday || null,
      ld: q.lastReviewedDate || null,
      rms: Array.isArray(q.reviewedMondays) ? q.reviewedMondays : [],
      ec: q.errorCount || 1,
      arc: q.isArchived || false
    }));

    // Favorited wisdom quotes
    let favWisdom = [];
    try {
      const favStr = localStorage.getItem('miley_favorited_wisdom');
      if (favStr) favWisdom = JSON.parse(favStr);
    } catch (e) {}

    const payload = {
      version: '1.09',
      timestamp: Date.now(),
      dateStr: new Date().toISOString().split('T')[0],
      favWisdom: favWisdom,
      progress: progressList
    };

    try {
      return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    } catch (e) {
      return JSON.stringify(payload);
    }
  },

  copySyncCode: function() {
    const code = this.generateSyncSnapshotString();
    if (!code) {
      alert('⚠️ 目前尚無進度可供匯出');
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(() => {
        this.showToast('📋 進度同步碼已複製至剪貼簿！可直接透過 LINE 傳至手機貼上同步！');
      }).catch(() => {
        this.fallbackCopy(code);
      });
    } else {
      this.fallbackCopy(code);
    }
  },

  fallbackCopy: function(code) {
    const codeArea = document.getElementById('sync-export-code-text');
    if (codeArea) {
      codeArea.select();
      document.execCommand('copy');
      this.showToast('📋 進度同步碼已選取並複製！');
    }
  },

  applySyncCode: function() {
    const inputArea = document.getElementById('sync-import-code-text');
    if (!inputArea || !inputArea.value.trim()) {
      alert('請先在下方輸入框貼上從另一台裝置複製的「進度同步碼」！');
      return;
    }

    const rawStr = inputArea.value.trim();
    let payload = null;

    try {
      // Try Base64 decode first
      const decodedStr = decodeURIComponent(escape(atob(rawStr)));
      payload = JSON.parse(decodedStr);
    } catch (e) {
      try {
        payload = JSON.parse(rawStr);
      } catch (e2) {
        alert('❌ 無法解析進度碼，請確認複製的內容是否完整！');
        return;
      }
    }

    if (!payload || !Array.isArray(payload.progress)) {
      alert('❌ 同步碼格式不正確，找不到做題進度資料！');
      return;
    }

    this.mergeProgressPayload(payload);
    inputArea.value = '';
    this.refreshModalStats();
    this.showToast('🎉 進度同步成功！所有裝置做題進度已無縫合併！');
  },

  // Smart Merge: Merges another device's progress without losing either side's work
  mergeProgressPayload: function(payload) {
    if (!window.dataManager || !Array.isArray(payload.progress)) return;

    const localQuestions = window.dataManager.getAll();
    let mergedCount = 0;

    payload.progress.forEach(remote => {
      const localQ = localQuestions.find(q => q.id === remote.id);
      if (!localQ) return;

      // Smart merge: adopt the higher mastery state or reviewed status
      const remoteMastered = remote.m || 0;
      const localMastered = localQ.consecutiveMastered || 0;

      if (remoteMastered > localMastered || remote.r || remote.arc) {
        localQ.consecutiveMastered = Math.max(localMastered, remoteMastered);
        localQ.ebbinghausStage = Math.max(localQ.ebbinghausStage || 1, remote.s || 1);
        localQ.isReviewed = localQ.isReviewed || remote.r;
        localQ.reviewStatus = remote.st || localQ.reviewStatus;
        localQ.lastReviewDecision = remote.d || localQ.lastReviewDecision;
        localQ.isArchived = localQ.isArchived || remote.arc;

        if (remote.lm) localQ.lastReviewedMonday = remote.lm;
        if (remote.ld) localQ.lastReviewedDate = remote.ld;

        if (!Array.isArray(localQ.reviewedMondays)) localQ.reviewedMondays = [];
        if (Array.isArray(remote.rms)) {
          remote.rms.forEach(m => {
            if (!localQ.reviewedMondays.includes(m)) localQ.reviewedMondays.push(m);
          });
        }
        mergedCount++;
      }
    });

    // Merge favorited wisdom
    if (Array.isArray(payload.favWisdom)) {
      try {
        let localFavs = [];
        const stored = localStorage.getItem('miley_favorited_wisdom');
        if (stored) localFavs = JSON.parse(stored);
        payload.favWisdom.forEach(id => {
          if (!localFavs.includes(id)) localFavs.push(id);
        });
        localStorage.setItem('miley_favorited_wisdom', JSON.stringify(localFavs));
        if (window.WisdomModule) {
          window.WisdomModule.favoritedIds = localFavs;
        }
      } catch (e) {}
    }

    // Save and refresh all UI
    window.dataManager.save();
    try {
      localStorage.setItem(this.STORAGE_SYNC_TIME_KEY, String(Date.now()));
    } catch (e) {}

    if (window.app) {
      if (window.app.updateSidebarCounts) window.app.updateSidebarCounts();
      if (window.app.renderWeeklyMondayBar) window.app.renderWeeklyMondayBar();
    }
    if (window.WisdomModule) {
      window.WisdomModule.updateHeaderBadge();
      window.WisdomModule.renderModalContent();
    }
    if (window.ReviewModule && window.ReviewModule.loadReviewQueue) {
      window.ReviewModule.loadReviewQueue();
    }
  },

  exportBackupFile: function() {
    const raw = this.generateSyncSnapshotString();
    if (!raw) return;

    const d = new Date();
    const dateStr = `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}`;
    const filename = `麥麥錯題本_跨裝置進度備份_${dateStr}.json`;

    const blob = new Blob([decodeURIComponent(escape(atob(raw)))], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.showToast('💾 備份檔案下載成功！');
  },

  handleFileImport: function(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const payload = JSON.parse(event.target.result);
        if (payload && Array.isArray(payload.progress)) {
          this.mergeProgressPayload(payload);
          this.refreshModalStats();
          this.showToast('🎉 檔案匯入成功！進度已合併！');
        } else {
          alert('❌ 檔案格式不符合麥麥錯題本進度備份格式！');
        }
      } catch (err) {
        alert('❌ 讀取檔案失敗，請確認檔案為正確的 JSON 備份檔！');
      }
      e.target.value = '';
    };
    reader.readAsText(file);
  },

  updateSyncBadge: function() {
    // Optionally update badge or indicator in header
  },

  showToast: function(msg) {
    if (window.ReviewModule && window.ReviewModule.showToast) {
      window.ReviewModule.showToast(msg);
      return;
    }
    const toast = document.createElement('div');
    toast.style.position = 'fixed';
    toast.style.bottom = '80px';
    toast.style.left = '50%';
    toast.style.transform = 'translateX(-50%)';
    toast.style.background = 'rgba(15, 23, 42, 0.95)';
    toast.style.color = '#38bdf8';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '30px';
    toast.style.border = '1px solid rgba(56, 189, 248, 0.4)';
    toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.5)';
    toast.style.zIndex = '999999';
    toast.style.fontWeight = '700';
    toast.innerText = msg;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.SyncModule.init();
});
