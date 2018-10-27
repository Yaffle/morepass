// https://serviceworke.rs/strategy-network-or-cache_service-worker_doc.html
'use strict';

const CACHE_NAME = 'cache-2018-10-27T16:05:31.928Z';

self.addEventListener('install', function (event) {
  event.waitUntil(precache());
});

self.addEventListener('fetch', function (event) {
  event.respondWith(fromCache(event.request));
});

function precache() {
  return caches.open(CACHE_NAME).then(function (cache) {
    return cache.addAll([
      './',
    ]);
  });
}

function fromCache(request) {
  return caches.open(CACHE_NAME).then(function (cache) {
    return cache.match(request);
  });
}
