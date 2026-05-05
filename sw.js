importScripts('https://cdn.webpushr.com/sw-server.min.js');
const cacheName = 'ahmed-abdelkader-v1';
const assets = [
  '/',
  'index.html',
  'thmanyahserifdisplay-Black.otf'
];

// تثبيت الخدمة وتخزين الملفات الأساسية
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// تشغيل التطبيق وجلب البيانات
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cacheRes => {
      return cacheRes || fetch(e.request);
    })
  );
});
