/**
 * Smart Wrong Question Review System - Cross-Device Sync Module
 * Enables seamless, automatic real-time progress synchronization via Supabase Cloud Database.
 * Also supports manual sync code (LINE) and JSON file export/import as offline fallbacks.
 */

window.SyncModule = {
  isInitialized: false,
  STORAGE_SYNC_TIME_KEY: 'miley_last_sync_timestamp',
  isSyncing: false,
  pushDebounceTimer: null,
  lastSyncSuccessTime: null,
  SYNC_POLL_INTERVAL_MS: 60000, // 60 秒定時輪詢 (僅前景畫面執行)

  // Supabase Cloud Configuration
  SUPABASE_CONFIG: {
    url: 'https://gkablmvucuvokkebmaeq.supabase.co',
    anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrYWJsbXZ1Y3V2b2trZWJtYWVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk5ODQzNzcsImV4cCI6MjEwNTU2MDM3N30.t9cqObH7T4m7s-N4yoApsPnlMxnAJe6V_12K6mXvMnw',
    syncDocId: 'miley_primary_sync'
  },

  init: function() {
    if (this.isInitialized) return;
    this.isInitialized = true;
    this.bindEvents();

    // 啟動時自動自 Supabase 雲端拉取最新進度並智慧融合
    setTimeout(() => {
      this.pullFromCloud(false);
    }, 600);

    // 每 60 秒定期在背景自動檢查雲端是否有更新
    setInterval(() => {
      if (document.visibilityState === 'visible' && !this.isSyncing) {
        this.pullFromCloud(false);
      }
    }, this.SYNC_POLL_INTERVAL_MS);
  },

  bindEvents: function() {
    // Topbar & Sidebar triggers
    document.getElementById('btn-open-sync-modal')?.addEventListener('click', () => this.openModal());
    document.getElementById('btn-sidebar-sync')?.addEventListener('click', () => this.openModal());
    document.getElementById('btn-header-cloud-sync')?.addEventListener('click', () => this.openModal());
    document.getElementById('btn-cloud-sync-status')?.addEventListener('click', () => this.openModal());
    document.getElementById('btn-wisdom-sync')?.addEventListener('click', () => this.openModal());

    document.getElementById('btn-close-sync-modal')?.addEventListener('click', () => this.closeModal());
    document.getElementById('sync-modal-backdrop')?.addEventListener('click', (e) => {
      if (e.target.id === 'sync-modal-backdrop') this.closeModal();
    });

    // Cloud Manual Trigger (立即對齊)
    document.getElementById('btn-force-cloud-sync')?.addEventListener('click', () => {
      this.pullFromCloud(true);
    });

    // Copy Sync Code
    document.getElementById('btn-copy-sync-code')?.addEventListener('click', () => this.copySyncCode());

    // Apply Sync Code
    document.getElementById('btn-apply-sync-code')?.addEventListener('click', () => this.applySyncCode());

    // Export / Import JSON file
    document.getElementById('btn-export-sync-file')?.addEventListener('click', () => this.exportBackupFile());
    document.getElementById('sync-file-input')?.addEventListener('change', (e) => this.handleFileImport(e));

    // 當瀏覽器標籤頁重新切換回前景時，自動向雲端檢查更新
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible' && !this.isSyncing) {
        this.pullFromCloud(false);
      }
    });

    window.addEventListener('focus', () => {
      if (!this.isSyncing) {
        this.pullFromCloud(false);
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
    const pct = total > 0 ? Math.round((defeated / total) * 100) : 0;

    const subjectsMap = {};
    questions.forEach(q => {
      const subj = q.subject || '未分類';
      if (!subjectsMap[subj]) subjectsMap[subj] = { total: 0, defeated: 0 };
      subjectsMap[subj].total++;
      if (q.isArchived || (q.consecutiveMastered || 0) > 0) {
        subjectsMap[subj].defeated++;
      }
    });

    const tagsHtml = Object.keys(subjectsMap).map(subj => {
      const s = subjectsMap[subj];
      const isDone = s.defeated === s.total && s.total > 0;
      return `<span class="sync-tag-item ${isDone ? 'complete' : ''}"><b>${subj}</b> ${s.defeated}/${s.total}</span>`;
    }).join('');

    const statsEl = document.getElementById('sync-stats-summary');
    if (statsEl) {
      statsEl.innerHTML = `
        <div class="sync-stat-header">
          <div class="sync-stat-title"><i class="fa-solid fa-dragon" style="color: #fbbf24;"></i> 錯題怪討伐總進度</div>
          <div class="sync-stat-count"><strong style="color: #fbbf24; font-size: 1.15rem;">${defeated}</strong> / ${total} 題 <span class="sync-stat-pct">(${pct}%)</span></div>
        </div>
        <div class="sync-progress-bar-track">
          <div class="sync-progress-bar-fill" style="width: ${pct}%;"></div>
        </div>
        <div class="sync-subject-tags">
          ${tagsHtml}
        </div>
      `;
    }

    // 更新最後同步時間
    const timeEl = document.getElementById('modal-cloud-last-sync-time');
    if (timeEl) {
      if (this.lastSyncSuccessTime) {
        const d = new Date(this.lastSyncSuccessTime);
        timeEl.innerText = `最後同步時間：${d.toLocaleTimeString()}`;
      } else {
        timeEl.innerText = `最後同步時間：已連線準備完畢`;
      }
    }

    // Pre-populate the sync code textarea
    const codeArea = document.getElementById('sync-export-code-text');
    if (codeArea) {
      codeArea.value = this.generateSyncSnapshotString();
    }
  },

  // ==================== SUPABASE CLOUD SYNC CORE ====================

  /**
   * 安排非同步推送到 Supabase（防抖 Debounce 600ms）
   */
  scheduleCloudPush: function() {
    if (this.pushDebounceTimer) {
      clearTimeout(this.pushDebounceTimer);
    }
    this.updateSyncBadge('同步中...', true);
    this.pushDebounceTimer = setTimeout(() => {
      this.pushToCloud();
    }, 600);
  },

  /**
   * 將本地完整進度自動推送到 Supabase
   */
  pushToCloud: async function() {
    if (!this.SUPABASE_CONFIG.url || !this.SUPABASE_CONFIG.anonKey) return;
    this.isSyncing = true;
    this.updateSyncBadge('同步中...', true);

    const payload = this.generateSyncSnapshotPayload();
    if (!payload) {
      this.isSyncing = false;
      this.updateSyncBadge('雲端已同步', false);
      return;
    }

    try {
      const response = await fetch(`${this.SUPABASE_CONFIG.url}/rest/v1/user_sync_progress`, {
        method: 'POST',
        headers: {
          'apikey': this.SUPABASE_CONFIG.anonKey,
          'Authorization': `Bearer ${this.SUPABASE_CONFIG.anonKey}`,
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify({
          id: this.SUPABASE_CONFIG.syncDocId,
          device_name: navigator.userAgent.includes('Mobile') ? 'Mobile' : 'Desktop',
          last_updated: new Date().toISOString(),
          progress_data: payload
        })
      });

      if (response.ok || response.status === 201 || response.status === 204) {
        this.lastSyncSuccessTime = Date.now();
        localStorage.setItem(this.STORAGE_SYNC_TIME_KEY, String(payload.timestamp));
        this.updateSyncBadge('雲端已同步', false);
        this.refreshModalStats();
        console.log('✅ [Supabase] 錯題與週次進度成功推播至雲端！', new Date().toLocaleTimeString());
      } else {
        console.warn('⚠️ [Supabase] 雲端推播回應非 200:', response.status);
        this.updateSyncBadge('待重新同步', false);
      }
    } catch (err) {
      console.warn('⚠️ [Supabase] 雲端推播連線異常 (稍候自動重試):', err);
      this.updateSyncBadge('暫存本機', false);
    } finally {
      this.isSyncing = false;
    }
  },

  /**
   * 自 Supabase 雲端拉取最新進度並智慧合併
   */
  pullFromCloud: async function(isManual = false) {
    if (!this.SUPABASE_CONFIG.url || !this.SUPABASE_CONFIG.anonKey) return;
    this.isSyncing = true;
    this.updateSyncBadge('同步中...', true);

    try {
      const response = await fetch(
        `${this.SUPABASE_CONFIG.url}/rest/v1/user_sync_progress?id=eq.${this.SUPABASE_CONFIG.syncDocId}&select=*`,
        {
          headers: {
            'apikey': this.SUPABASE_CONFIG.anonKey,
            'Authorization': `Bearer ${this.SUPABASE_CONFIG.anonKey}`
          }
        }
      );

      if (!response.ok) {
        console.warn('⚠️ [Supabase] 雲端拉取狀態異常:', response.status);
        this.updateSyncBadge('離線模式', false);
        return;
      }

      const rows = await response.json();
      if (Array.isArray(rows) && rows.length > 0 && rows[0].progress_data) {
        const remotePayload = rows[0].progress_data;
        const remoteTime = remotePayload.timestamp || 0;
        const localTime = parseInt(localStorage.getItem(this.STORAGE_SYNC_TIME_KEY) || '0', 10);

        // 權威檢查：即使時間戳相同，若雲端含有本地尚未記錄的單題刪除或週次刪除，強制進行合併與清理
        const localDeleted = window.dataManager?.deletedIds || [];
        const localRemovedMap = window.dataManager?.removedMondaysMap || {};
        const hasNewDeletions = (Array.isArray(remotePayload.deletedIds) && remotePayload.deletedIds.some(id => !localDeleted.includes(id))) ||
                                (remotePayload.removedMondaysMap && typeof remotePayload.removedMondaysMap === 'object' && Object.keys(remotePayload.removedMondaysMap).some(id => {
                                  const localList = localRemovedMap[id] || [];
                                  return Array.isArray(remotePayload.removedMondaysMap[id]) && remotePayload.removedMondaysMap[id].some(m => !localList.includes(m));
                                }));

        if (isManual || remoteTime > localTime || hasNewDeletions) {
          const mergedCount = this.mergeProgressPayload(remotePayload);
          this.lastSyncSuccessTime = Date.now();
          localStorage.setItem(this.STORAGE_SYNC_TIME_KEY, String(remoteTime || Date.now()));
          this.updateSyncBadge('雲端已同步', false);

          if (isManual) {
            this.showToast('🎉 已與雲端完成雙向對齊！');
          } else if (mergedCount > 0) {
            this.showToast(`☁️ 已自雲端無縫同步 ${mergedCount} 題最新進度！`);
          }

          // 若本地原有部分額外做題進度，在合併完成後推回雲端確保兩端聯集完整
          this.scheduleCloudPush();
        } else {
          // 本地時間較新或相同
          this.lastSyncSuccessTime = Date.now();
          this.updateSyncBadge('雲端已同步', false);
          if (isManual) {
            this.showToast('✨ 本地已是最新進度，與雲端 100% 一致！');
          }
        }
      } else {
        // 雲端尚無進度記錄，主動將本機進度首次推上雲端
        this.pushToCloud();
      }
    } catch (err) {
      console.warn('⚠️ [Supabase] 雲端拉取連線失敗 (暫存本機):', err);
      this.updateSyncBadge('暫存本機', false);
    } finally {
      this.isSyncing = false;
      this.refreshModalStats();
    }
  },

  /**
   * 更新頁面所有雲端同步狀態標籤與圖示
   */
  updateSyncBadge: function(text, isSpinning) {
    const headerChip = document.getElementById('btn-header-cloud-sync');
    const headerText = document.getElementById('header-cloud-sync-text');
    const headerIcon = document.getElementById('header-cloud-sync-icon');

    const modalBadge = document.getElementById('modal-cloud-status-badge');

    if (headerChip) {
      if (isSpinning) {
        headerChip.classList.add('syncing');
      } else {
        headerChip.classList.remove('syncing');
      }
    }

    if (headerText) headerText.innerText = text;

    if (headerIcon) {
      if (isSpinning) {
        headerIcon.className = 'fa-solid fa-arrows-rotate fa-spin';
        headerIcon.style.color = '#38bdf8';
      } else if (text.includes('已同步')) {
        headerIcon.className = 'fa-solid fa-cloud-check';
        headerIcon.style.color = '#10b981';
      } else {
        headerIcon.className = 'fa-solid fa-cloud';
        headerIcon.style.color = '#fbbf24';
      }
    }

    if (modalBadge) {
      if (isSpinning) {
        modalBadge.innerHTML = `<span style="color: #38bdf8;">🔄 雲端同步傳輸中...</span>`;
      } else if (text.includes('已同步')) {
        modalBadge.innerHTML = `<span style="color: #34d399;">🟢 連線正常 ‧ 雲端已即時同步</span>`;
      } else {
        modalBadge.innerHTML = `<span style="color: #fbbf24;">🟡 離線暫存 ‧ 連網自動同步</span>`;
      }
    }
  },

  // ==================== PAYLOAD GENERATION & SMART MERGE ====================

  /**
   * 產生完整的進度 Payload 物件（包含週次排程、艾賓浩斯與做題狀態）
   */
  generateSyncSnapshotPayload: function() {
    if (!window.dataManager) return null;
    const questions = window.dataManager.getAll();

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
      arc: q.isArchived || false,
      md: q.mondayDate || null,
      mds: Array.isArray(q.mondayDates) ? q.mondayDates : [],
      rh: Array.isArray(q.reviewHistory) ? q.reviewHistory : []
    }));

    let favWisdom = [];
    try {
      const favStr = localStorage.getItem('miley_favorited_wisdom');
      if (favStr) favWisdom = JSON.parse(favStr);
    } catch (e) {}

    return {
      version: '1.14',
      timestamp: Date.now(),
      dateStr: new Date().toISOString().split('T')[0],
      favWisdom: favWisdom,
      deletedIds: Array.isArray(window.dataManager.deletedIds) ? window.dataManager.deletedIds : [],
      removedMondaysMap: window.dataManager.removedMondaysMap || {},
      progress: progressList
    };
  },

  generateSyncSnapshotString: function() {
    const payload = this.generateSyncSnapshotPayload();
    if (!payload) return '';
    try {
      return btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    } catch (e) {
      return JSON.stringify(payload);
    }
  },

  /**
   * 智慧進度合併 (Smart Merge)：
   * 確保手機與電腦兩端成果「只增不減」，同時支援單題刪除與週次刪除之雙向真實對齊，防禦歷史週次死灰復燃
   */
  mergeProgressPayload: function(payload) {
    if (!window.dataManager || !Array.isArray(payload.progress)) return 0;

    // 0a. 同步全域刪除清單 (deletedIds) 並立即自本地資料中濾除
    if (Array.isArray(payload.deletedIds)) {
      payload.deletedIds.forEach(id => {
        if (id && !window.dataManager.deletedIds.includes(id)) {
          window.dataManager.deletedIds.push(id);
        }
      });
      window.dataManager.saveDeletedIds();
      window.dataManager.questions = window.dataManager.questions.filter(q => q && !window.dataManager.deletedIds.includes(q.id));
    }

    // 0b. 同步週次刪除對照表 (removedMondaysMap)
    if (payload.removedMondaysMap && typeof payload.removedMondaysMap === 'object') {
      if (!window.dataManager.removedMondaysMap) window.dataManager.removedMondaysMap = {};
      Object.keys(payload.removedMondaysMap).forEach(id => {
        const remoteList = payload.removedMondaysMap[id];
        if (Array.isArray(remoteList)) {
          if (!Array.isArray(window.dataManager.removedMondaysMap[id])) {
            window.dataManager.removedMondaysMap[id] = [];
          }
          remoteList.forEach(m => {
            if (!window.dataManager.removedMondaysMap[id].includes(m)) {
              window.dataManager.removedMondaysMap[id].push(m);
            }
          });
        }
      });
      window.dataManager.saveRemovedMondaysMap();
    }

    // 0c. 依據 removedMondaysMap 強制剔除本地與遠端已刪除的週次
    const rmMap = window.dataManager.removedMondaysMap || {};
    window.dataManager.questions.forEach(q => {
      if (!q) return;
      const removedList = rmMap[q.id];
      if (Array.isArray(removedList) && removedList.length > 0 && Array.isArray(q.mondayDates)) {
        q.mondayDates = q.mondayDates.filter(m => !removedList.includes(m));
      }
    });

    // 若題目已無剩餘任何週次，將其正式加入全域刪除
    window.dataManager.questions = window.dataManager.questions.filter(q => {
      if (!q) return false;
      if (Array.isArray(q.mondayDates) && q.mondayDates.length === 0) {
        if (!window.dataManager.deletedIds.includes(q.id)) {
          window.dataManager.deletedIds.push(q.id);
          window.dataManager.saveDeletedIds();
        }
        return false;
      }
      return true;
    });

    const localQuestions = window.dataManager.getAll();
    let mergedCount = 0;

    payload.progress.forEach(remote => {
      const localQ = localQuestions.find(q => q.id === remote.id);
      if (!localQ) return;

      const remoteMastered = remote.m || 0;
      const localMastered = localQ.consecutiveMastered || 0;

      let hasUpdate = false;

      // 1. 掌握度與艾賓浩斯狀態以高者為準
      if (remoteMastered > localMastered) {
        localQ.consecutiveMastered = remoteMastered;
        localQ.ebbinghausStage = Math.max(localQ.ebbinghausStage || 1, remote.s || 1);
        hasUpdate = true;
      }

      // 2. 複習狀態與歷史合併
      if (remote.r && !localQ.isReviewed) {
        localQ.isReviewed = true;
        localQ.reviewStatus = remote.st || 'reviewed';
        hasUpdate = true;
      }

      if (remote.arc && !localQ.isArchived) {
        localQ.isArchived = true;
        hasUpdate = true;
      }

      if (remote.d && !localQ.lastReviewDecision) {
        localQ.lastReviewDecision = remote.d;
      }

      if (remote.lm) localQ.lastReviewedMonday = remote.lm;
      if (remote.ld) localQ.lastReviewedDate = remote.ld;

      // 3. 已複習週次清單聯集 (reviewedMondays)
      if (!Array.isArray(localQ.reviewedMondays)) localQ.reviewedMondays = [];
      if (Array.isArray(remote.rms)) {
        remote.rms.forEach(m => {
          if (!localQ.reviewedMondays.includes(m)) {
            localQ.reviewedMondays.push(m);
            hasUpdate = true;
          }
        });
      }

      // 4. 下週排程 (mondayDates) 雙向對齊：跳過任何已在 removedMondaysMap 中的週次，防止刪除之週次死灰復燃！
      if (!Array.isArray(localQ.mondayDates)) localQ.mondayDates = [];
      const removedForThisQ = rmMap[localQ.id] || [];
      if (Array.isArray(remote.mds)) {
        remote.mds.forEach(m => {
          if (!localQ.mondayDates.includes(m) && !removedForThisQ.includes(m)) {
            localQ.mondayDates.push(m);
            hasUpdate = true;
          }
        });
      }
      if (remote.md && !removedForThisQ.includes(remote.md)) {
        localQ.mondayDate = remote.md;
      }

      // 5. 做題歷史紀錄合併
      if (!Array.isArray(localQ.reviewHistory)) localQ.reviewHistory = [];
      if (Array.isArray(remote.rh)) {
        remote.rh.forEach(rhItem => {
          const exists = localQ.reviewHistory.some(h => h.timestamp === rhItem.timestamp || (h.date === rhItem.date && h.monday === rhItem.monday && h.isMastered === rhItem.isMastered));
          if (!exists) {
            localQ.reviewHistory.push(rhItem);
            hasUpdate = true;
          }
        });
      }

      if (hasUpdate) mergedCount++;
    });

    // 6. 收藏的名言金句合併
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

    // 儲存並即時更新頁面所有元件（火車、側邊欄、題庫隊列）
    window.dataManager.save();

    if (window.app) {
      if (window.app.updateSidebarCounts) window.app.updateSidebarCounts();
      if (window.app.renderWeeklyMondayBar) window.app.renderWeeklyMondayBar();
    }
    if (window.WisdomModule) {
      window.WisdomModule.updateHeaderBadge();
      window.WisdomModule.renderModalContent();
    }
    if (window.ReviewModule && typeof window.ReviewModule.loadReviewQueue === 'function') {
      const activeSubj = window.ReviewModule.currentSubjectFilter || window.app?.currentSubjectFilter;
      const activeMon = window.ReviewModule.currentMondayFilter || window.app?.currentMondayFilter;
      const activeIdx = window.ReviewModule.currentIndex;
      if (activeSubj || activeMon) {
        window.ReviewModule.loadReviewQueue(activeSubj, activeMon, activeIdx);
      }
    }

    return mergedCount;
  },

  // ==================== MANUAL CODE & FILE EXPORT/IMPORT (FALLBACK) ====================

  copySyncCode: function() {
    const code = this.generateSyncSnapshotString();
    if (!code) {
      alert('⚠️ 目前尚無進度可供匯出');
      return;
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(code).then(() => {
        this.showToast('📋 進度同步碼已複製！可傳至手機備用！');
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
      alert('請先在下方輸入框貼上「進度同步碼」！');
      return;
    }

    const rawStr = inputArea.value.trim();
    let payload = null;

    try {
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
    this.scheduleCloudPush();
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
          this.scheduleCloudPush();
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
