---
name: pwa_installer_master
description: 全功能 PWA (Progressive Web App) 一鍵安裝與多端適配最佳實踐指南。涵蓋 Android 原生 prompt、iOS Safari 加入主畫面導引、LINE 內嵌瀏覽器防呆穿透、PWA 獨立視窗檢測 (Standalone) 自動隱藏安裝按鈕、以及 Service Worker 網路優先 (Network-First) 快取與秒級自動更新機制。適用於任何 Web 專案快速導入 App 化體驗。
---

# PWA Installer Master (全端 Web App 一鍵安裝與快取管理專業技能)

本技能提供一套標準化、高可靠度且經實戰驗證的 **PWA (Progressive Web App) 安裝與多端適配標準作業規範**。
適用於所有現代 HTML/CSS/JavaScript 網頁專案（如「防失智 1~50 遊戲」、「麥麥錯題本」等），快速賦予網頁如原生 App 般的安裝與離線使用體驗。

---

## 核心功能清單

1. **多端自適應安裝流程 (`triggerPWAInstall`)**：
   - **Android / Chrome / Edge**：自動捕獲 `beforeinstallprompt` 事件，點擊「📲 安裝 App」按鈕觸發原生安裝對話框。
   - **iOS Safari**：自適應彈出圖文引導彈窗，指引使用者點擊底部「分享」按鈕 ➜ 選擇「加入主畫面 ⊞」。
   - **LINE / 微信 / FB 內嵌瀏覽器**：自動檢測並引導跳轉至外部瀏覽器（`openExternalBrowser=1`），避免在內嵌瀏覽器中無法安裝。
2. **安裝狀態偵測與按鈕智慧隱藏 (`updatePWAInstallVisibility`)**：
   - 檢測 `display-mode: standalone`、`navigator.standalone` 或已安裝標記。
   - 當處於獨立 App 視窗模式時，自動為 `<html>` 加入 `.is-pwa-standalone` 樣式類別，並隱藏所有「安裝 App」按鈕，保持介面乾淨。
3. **無縫 Service Worker 生命週期與快取穿透機制 (`sw.js`)**：
   - 採用 **網路優先 (Network-First)** 策略：連線時保證永遠載入伺服器最新代碼；離線時自動退回本地快取。
   - `skipWaiting()` 與 `clients.claim()`：新版本發布時立即接管，自動清除過期快取。
   - 頁面載入時調用 `reg.update()`，強制每次開啟網頁時即時向伺服器拉取最新代碼。

---

## 標準專案檔案結構

```text
專案根目錄/
├── manifest.json            # PWA 應用清單配置
├── sw.js                    # Service Worker 網路優先離線腳本
├── assets/
│   ├── icon-192.png         # 192x192 應用圖示
│   ├── icon-512.png         # 512x512 應用圖示
│   └── z_img_line.png       # LINE 瀏覽器導引示意圖 (選用)
├── index.html               # 引入 manifest、SW 註冊與安裝按鈕/導引彈窗
├── styles.css               # 安裝按鈕樣式、彈窗樣式與 .is-pwa-standalone 隱藏規則
└── app.js                   # PWA 安裝核心邏輯 (triggerPWAInstall)
```

---

## 核心代碼標準模板

### 1. `manifest.json` (標準配置)
```json
{
  "name": "應用完整名稱",
  "short_name": "簡短名稱",
  "start_url": "./?source=pwa",
  "display": "standalone",
  "background_color": "#0f172a",
  "theme_color": "#6366f1",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "assets/icon-192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any maskable"
    },
    {
      "src": "assets/icon-512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any maskable"
    }
  ]
}
```

---

### 2. `sw.js` (網路優先 + 自動版本清理)
```javascript
const CACHE_NAME = 'app-pwa-cache-v1.00';

const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'styles.css',
  'manifest.json',
  'assets/icon-192.png',
  'assets/icon-512.png'
];

// 安裝 Service Worker 並預載核心資產
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE).catch(err => console.warn('PWA cache warning:', err)))
      .then(() => self.skipWaiting())
  );
});

// 啟用 Service Worker 並清除過期舊版快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 網路優先策略 (Network-First)：保證永遠讀取最新內容，離線時自動回退快取
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then((cached) => {
          if (cached) return cached;
          if (event.request.mode === 'navigate') {
            return caches.match('index.html');
          }
        });
      })
  );
});
```

---

### 3. `index.html` 頂部 Head 宣告與即時檢測
```html
<!-- PWA Manifest & Web App Meta -->
<link rel="manifest" href="manifest.json">
<meta name="theme-color" content="#6366f1">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="應用名稱">
<link rel="apple-touch-icon" href="assets/icon-192.png">

<!-- LINE 內嵌防呆與 Standalone 即刻判定腳本 -->
<script>
  (function() {
    try {
      var ua = (navigator.userAgent || '').toLowerCase();
      if (ua.indexOf('line') > -1 && window.location.search.indexOf('openExternalBrowser=1') === -1) {
        var sep = window.location.href.indexOf('?') > -1 ? '&' : '?';
        window.location.href = window.location.href + sep + 'openExternalBrowser=1';
      }
      var isPWA = (window.matchMedia && (
                      window.matchMedia('(display-mode: standalone)').matches ||
                      window.matchMedia('(display-mode: fullscreen)').matches ||
                      window.matchMedia('(display-mode: minimal-ui)').matches
                  )) ||
                  window.navigator.standalone === true ||
                  window.location.search.indexOf('source=pwa') !== -1 ||
                  localStorage.getItem('app_pwa_installed') === 'true';

      if (isPWA) {
        document.documentElement.classList.add('is-pwa-standalone');
      }
    } catch (e) {}

    // Service Worker 註冊與主動更新
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function() {
        navigator.serviceWorker.register('sw.js?v=100').then(function(reg) {
          if (typeof reg.update === 'function') reg.update();
        }).catch(function(err) {
          console.warn('SW register error:', err);
        });
      });
    }
  })();
</script>
```

---

### 4. 前端 JavaScript 安裝觸發器 (`triggerPWAInstall`)
```javascript
// 全域變數捕獲原生 prompt
window.deferredPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  window.deferredPrompt = e;
  updatePWAInstallVisibility();
});

// 更新安裝按鈕能見度
function updatePWAInstallVisibility() {
  const isStandalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
                       window.navigator.standalone === true ||
                       localStorage.getItem('app_pwa_installed') === 'true';

  if (isStandalone) {
    document.documentElement.classList.add('is-pwa-standalone');
  }
}

// 核心安裝點擊處理函數
window.triggerPWAInstall = function() {
  const ua = (navigator.userAgent || '').toLowerCase();
  const isIOS = /ipad|iphone|ipod/.test(ua) && !window.MSStream;

  // 1. Android / Chrome / Edge 原生一鍵安裝
  if (window.deferredPrompt) {
    window.deferredPrompt.prompt();
    window.deferredPrompt.userChoice.then((choice) => {
      if (choice && choice.outcome === 'accepted') {
        localStorage.setItem('app_pwa_installed', 'true');
        document.documentElement.classList.add('is-pwa-standalone');
      }
      window.deferredPrompt = null;
    });
    return;
  }

  // 2. iOS Safari (加入主畫面指引)
  if (isIOS) {
    const iosModal = document.getElementById('iosInstallModal');
    if (iosModal) {
      iosModal.classList.remove('hidden');
    } else {
      alert('📲 請點擊 Safari 底部「分享」按鈕 (帶箭頭方框) ➜ 滑動選擇「加入主畫面 ⊞」即可！');
    }
    return;
  }

  // 3. 一般瀏覽器備援提示
  alert('📲 請點擊瀏覽器右上角「⋮」或設定 ➜ 選擇「安裝應用程式」或「加到主畫面」即可安裝到桌面！');
};

// 監聽成功安裝事件
window.addEventListener('appinstalled', () => {
  localStorage.setItem('app_pwa_installed', 'true');
  document.documentElement.classList.add('is-pwa-standalone');
  window.deferredPrompt = null;
});
```

---

### 5. CSS 樣式與獨立視窗隱藏規則
```css
/* 當應用處於 PWA 獨立桌面/手機 App 視窗模式時，自動隱藏所有安裝按鈕 */
html.is-pwa-standalone #btn-bottom-install,
html.is-pwa-standalone #btn-sidebar-install,
html.is-pwa-standalone .app-bottom-bar {
  display: none !important;
}
```

---

## 部署與發布規範 (Checklist)

1. **HTTPS 必備**：PWA Service Worker 僅能在 HTTPS 協議或 `localhost` 下運行（GitHub Pages 天生支援）。
2. **快取穿透三道防線**：每次版本升級時，同步遞增：
   - `sw.js` 內部的 `CACHE_NAME`（如 `v1.07` $\to$ `v1.08`）。
   - `index.html` 中的 `navigator.serviceWorker.register('sw.js?v=108')`。
   - 靜態 CSS / JS 的 Query String（如 `styles.css?v=155`）。
