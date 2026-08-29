const CACHE_NAME = 'miley-wrong-book-v1';
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
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
