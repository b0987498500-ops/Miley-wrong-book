/**
 * Interactive Study & Exam Calendar Module (學習進度與window.CalendarModule = {
  currentYear: new Date().getFullYear(),
  currentMonth: new Date().getMonth(),
  selectedDateStr: '',

  getTodayDateStr: function() {
    const d = new Date();
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const da = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${da}`;
  },

  init: function() {
    const today = new Date();
    this.currentYear = today.getFullYear();
    this.currentMonth = today.getMonth();
    this.selectedDateStr = this.getTodayDateStr();

    this.bindEvents();
    this.renderCalendar();
    this.updateTopDateDisplay();
  },

  updateTopDateDisplay: function() {
    const displayEl = document.getElementById('current-date-display');
    if (!displayEl) return;
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    const days = ['週日', '週一', '週二', '週三', '週四', '週五', '週六'];
    const dayOfWeek = days[d.getDay()];
    displayEl.innerText = `${year}-${month}-${day} (${dayOfWeek})`;
  },

  bindEvents: function() {
    const self = this;
    const triggerBtn = document.getElementById('calendar-trigger-btn');
    const popover = document.getElementById('calendar-popover');

    if (triggerBtn && popover) {
      triggerBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        popover.classList.toggle('show');
        if (popover.classList.contains('show')) {
          self.renderCalendar();
        }
      });

      document.addEventListener('click', (e) => {
        if (!popover.contains(e.target) && !triggerBtn.contains(e.target)) {
          popover.classList.remove('show');
        }
      });
    }

    // Month Navigation
    document.getElementById('cal-prev-month-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      self.currentMonth--;
      if (self.currentMonth < 0) {
        self.currentMonth = 11;
        self.currentYear--;
      }
      self.renderCalendar();
    });

    document.getElementById('cal-next-month-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      self.currentMonth++;
      if (self.currentMonth > 11) {
        self.currentMonth = 0;
        self.currentYear++;
      }
      self.renderCalendar();
    });

    // Add Event Modal Triggers
    document.getElementById('cal-add-event-btn')?.addEventListener('click', (e) => {
      e.stopPropagation();
      self.openAddModal(self.selectedDateStr);
    });

    document.getElementById('btn-close-cal-modal')?.addEventListener('click', () => self.closeAddModal());
    document.getElementById('btn-cancel-cal-modal')?.addEventListener('click', () => self.closeAddModal());
    document.getElementById('btn-save-cal-modal')?.addEventListener('click', () => self.saveAddModal());
  },

  formatDateStr: function(y, m, d) {
    const mm = String(m).padStart(2, '0');
    const dd = String(d).padStart(2, '0');
    return `${y}-${mm}-${dd}`;
  },

  renderCalendar: function() {
    this.renderHeader();
    this.renderDaysGrid();
    this.renderCountdown();
    this.renderSelectedDayEvents(this.selectedDateStr);
  },

  renderHeader: function() {
    const label = document.getElementById('cal-month-label');
    if (label) {
      label.innerText = `${this.currentYear} 年 ${this.currentMonth + 1} 月`;
    }
  },

  renderCountdown: function() {
    const textEl = document.getElementById('cal-countdown-text');
    const headerSubtextEl = document.getElementById('header-study-plan-subtext');
    if (!window.dataManager) return;

    const events = window.dataManager.getCalendarEvents();
    const todayStr = this.getTodayDateStr();
    
    // Future exams sorted by date
    const futureExams = events
      .filter(e => e.type === 'exam' && e.date >= todayStr)
      .sort((a, b) => a.date.localeCompare(b.date));

    // Future plans / reviews sorted by date
    const futurePlans = events
      .filter(e => (e.type === 'plan' || e.type === 'review') && e.date >= todayStr)
      .sort((a, b) => a.date.localeCompare(b.date));

    if (futureExams.length > 0) {
      const target = futureExams[0];
      const d1 = new Date(todayStr);
      const d2 = new Date(target.date);
      const diffDays = Math.ceil((d2 - d1) / (1000 * 60 * 60 * 24));
      const countdownMsg = `距離「${target.title.replace('🎯 ', '')}」倒數 ${diffDays} 天！`;
      
      if (textEl) textEl.innerText = countdownMsg;
      if (headerSubtextEl) headerSubtextEl.innerText = `🎯 ${target.title.replace('🎯 ', '')} (倒數 ${diffDays} 天)`;
    } else if (futurePlans.length > 0) {
      const targetPlan = futurePlans[0];
      if (textEl) textEl.innerText = `近期進度：${targetPlan.title}`;
      if (headerSubtextEl) headerSubtextEl.innerText = `${targetPlan.title}`;
    } else {
      if (textEl) textEl.innerText = `目前尚無近期段考標記，點擊「+」立即安排！`;
      if (headerSubtextEl) headerSubtextEl.innerText = `📖 點擊標記學習目標`;
    }
  },

  renderDaysGrid: function() {
    const grid = document.getElementById('cal-days-grid');
    if (!grid || !window.dataManager) return;

    const events = window.dataManager.getCalendarEvents();
    const eventDatesMap = {};
    events.forEach(e => {
      if (!eventDatesMap[e.date]) eventDatesMap[e.date] = [];
      eventDatesMap[e.date].push(e);
    });

    const firstDayIndex = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const totalDays = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const todayStr = this.getTodayDateStr();

    let html = '';

    // Empty cells before month start
    for (let i = 0; i < firstDayIndex; i++) {
      html += `<div class="cal-day-cell empty"></div>`;
    }

    // Days cells
    for (let day = 1; day <= totalDays; day++) {
      const dateStr = this.formatDateStr(this.currentYear, this.currentMonth + 1, day);
      const isToday = (dateStr === todayStr);
      const isSelected = (dateStr === this.selectedDateStr);
      const dayEvents = eventDatesMap[dateStr] || [];

      let dotsHtml = '';
      if (dayEvents.length > 0) {
        dotsHtml = `<div class="cal-event-dots">`;
        dayEvents.forEach(ev => {
          dotsHtml += `<span class="dot dot-${ev.type}"></span>`;
        });
        dotsHtml += `</div>`;
      }

      html += `
        <div class="cal-day-cell ${isToday ? 'is-today' : ''} ${isSelected ? 'is-selected' : ''}" data-date="${dateStr}">
          <span class="day-number">${day}</span>
          ${dotsHtml}
        </div>
      `;
    }

    grid.innerHTML = html;

    // Bind Day Cell Click
    const self = this;
    grid.querySelectorAll('.cal-day-cell:not(.empty)').forEach(cell => {
      cell.addEventListener('click', (e) => {
        e.stopPropagation();
        const dateStr = cell.dataset.date;
        self.selectedDateStr = dateStr;
        self.renderDaysGrid();
        self.renderSelectedDayEvents(dateStr);
      });
    });
  },

  renderSelectedDayEvents: function(dateStr) {
    const titleEl = document.getElementById('cal-selected-day-title');
    const listEl = document.getElementById('cal-events-list');
    if (!titleEl || !listEl || !window.dataManager) return;

    const parts = dateStr.split('-');
    const formattedTitle = `${parseInt(parts[1], 10)}月${parseInt(parts[2], 10)}日 安排事項`;
    titleEl.innerText = formattedTitle;

    const events = window.dataManager.getCalendarEvents().filter(e => e.date === dateStr);

    if (events.length === 0) {
      listEl.innerHTML = `
        <div class="no-events-hint">
          <span>當日無標記事項，點擊「+」安排新進度</span>
        </div>
      `;
      return;
    }

    let html = '';
    events.forEach(ev => {
      let icon = '📖';
      let typeName = '學習進度';
      if (ev.type === 'exam') { icon = '🎯'; typeName = '段考標記'; }
      else if (ev.type === 'review') { icon = '⏰'; typeName = '複習提醒'; }

      html += `
        <div class="cal-event-item type-${ev.type}">
          <div class="event-info">
            <span class="event-type-badge">${typeName}</span>
            <span class="event-title">${ev.title}</span>
          </div>
          <button class="cal-event-del-btn" data-id="${ev.id}" title="刪除事項">
            <i class="fa-solid fa-trash-can"></i>
          </button>
        </div>
      `;
    });

    listEl.innerHTML = html;

    // Bind delete buttons
    const self = this;
    listEl.querySelectorAll('.cal-event-del-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.dataset.id;
        window.dataManager.deleteCalendarEvent(id);
        self.renderCalendar();
      });
    });
  },

  openAddModal: function(dateStr) {
    const modal = document.getElementById('modal-add-calendar-event');
    const dateInput = document.getElementById('cal-input-date');
    const titleInput = document.getElementById('cal-input-title');

    if (modal && dateInput) {
      dateInput.value = dateStr || this.selectedDateStr;
      if (titleInput) titleInput.value = '';
      modal.classList.remove('hidden');
    }
  },

  closeAddModal: function() {
    document.getElementById('modal-add-calendar-event')?.classList.add('hidden');
  },

  saveAddModal: function() {
    const dateVal = document.getElementById('cal-input-date')?.value;
    const typeVal = document.getElementById('cal-input-type')?.value;
    const titleVal = document.getElementById('cal-input-title')?.value?.trim();

    if (!dateVal || !titleVal) {
      alert('請輸入標記日期與事項名稱！');
      return;
    }

    window.dataManager.addCalendarEvent({
      date: dateVal,
      type: typeVal,
      title: titleVal
    });

    this.closeAddModal();
    this.renderCalendar();
  }
};

// Auto Init on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  window.CalendarModule.init();
});
