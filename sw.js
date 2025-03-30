const CACHE_NAME = 'multiplication-game-v3';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/icons/icon-32x32.png',
    '/icons/icon-96x96.png',
    '/icons/icon-144x144.png',
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png'
];

// 서비스 워커 설치
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                return cache.addAll(urlsToCache);
            })
    );
});

// 캐시 사용
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
}); 