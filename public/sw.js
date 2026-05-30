const CACHE_NAME = 'way2better-v10.0';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/products.html',
  '/pricing.html',
  '/company.html',
  '/about.html',
  '/logo.png',
  '/assets/icons/pwa-icon-192.png',
  '/assets/icons/pwa-icon-512.png',
  '/assets/icons/apple-touch-icon.png',
  '/assets/js/pwa-manager.js'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('SW: Caching App Shell (v6.0)');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('SW: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event (Network-First Strategy for Navigation & Content)
self.addEventListener('fetch', (event) => {
  // Always try network first for better consistency with updates
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // If network succeeds, cache the clone and return response
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Fallback to cache if network fails
        return caches.match(event.request);
      })
  );
});
