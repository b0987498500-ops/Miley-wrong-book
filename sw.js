const CACHE_NAME = 'miley-pwa-cache-v1.16';

const ASSETS_TO_CACHE = [
  './',
  'index.html',
  'styles.css',
  'manifest.json',
  'assets/icon-192.png',
  'assets/icon-512.png',
  'assets/z_img_line.png',
  'js/app.js',
  'js/data.js',
  'js/modules/review.js',
  'js/modules/archive.js',
  'js/modules/wisdom.js',
  'js/modules/calendar.js',
  'js/modules/sprint.js',
  'js/modules/upload.js',
  'js/modules/analytics.js'
];

// 安裝 Service Worker 並預先載入核心資源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE).catch(err => console.warn('Cache addAll warning:', err)))
      .then(() => self.skipWaiting())
  );
});

// 啟用 Service Worker 並清除舊版快取
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

// 網路優先策略 (Network-First)：保證題庫永遠為最新，離線時自動退回本地快取
self.addEventListener('fetch', (event) => {
  const url = event.request.url;

  // 僅處理同源 GET 請求
  if (event.request.method !== 'GET' || !url.startsWith(self.location.origin)) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response && response.status === 200) {
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return response;
      })
      .catch(() => {
        // 離線時從快取載入
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === 'navigate') {
            return caches.match('index.html');
          }
        });
      })
  );
});
