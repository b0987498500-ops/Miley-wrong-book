const CACHE_NAME = 'miley-wrong-book-v5';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './js/data.js',
  './js/app.js',
  './js/modules/review.js',
  './js/modules/wisdom.js',
  './js/modules/card.js',
  './js/modules/calendar.js',
  './js/modules/analytics.js',
  './js/modules/archive.js',
  './js/modules/upload.js',
  './js/modules/sprint.js',
  './manifest.json',
  './assets/icon-192.png',
  './assets/icon-512.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Network-First strategy to ensure latest updates are served immediately
  event.respondWith(
    fetch(event.request)
      .then(networkResponse => {
        if (networkResponse && networkResponse.status === 200 && event.request.method === 'GET') {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request);
      })
  );
});
