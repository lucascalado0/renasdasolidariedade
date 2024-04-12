var cacheName = 'RenasDaSolidariedade-v1';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll([
                './index.html',
                './page2.html',
                './generic.html',
                './assets/css/main.css',
                './assets/css/noscript.css',
                './assets/css/fontaawesome-all.min.css',
                './assets/js/breakpoint.min.js',
                './assets/js/browser.min.js',
                './assets/js/jquery.min.js',
                './assets/js/jquery.scrollex.min.js',
                './assets/js/jquery.scrolly.min.js',
                './assets/js/main.js',
                './assets/js/util.js',
                './images/bg.jpg',
                './images/rena1.jpg',
                './images/cartaAna.jpeg',
                './images/cartaJoaoLucas.jpg',
                './images/cartinhaAnaBeatriz.jpg',
                './images/cartinhaAnaJulya.jpg',
                './images/cartinhaArmando.jpg',
                './images/cartinhaArthur.png',
                './images/cartinhaBrenda.jpg',
                './images/cartinhaHelena.jpg',
                './images/cartinhaLuisa.jpg',
                './images/cartinhaPatricia.jpg',
                './images/cartinhaRobson.jpg',
                './images/cartinhaThayla.jpg',
            ]);
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }

            // Clone the request to make a network request
            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(function(response) {
                // Check if we received a valid response
                if(!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                // Clone the response to cache it
                var responseToCache = response.clone();

                caches.open(cacheName).then(function(cache) {
                    cache.put(event.request, responseToCache);
                });

                return response;
            });
        })
    );
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cache) {
                    return cache !== cacheName;
                }).map(function(cache) {
                    return caches.delete(cache);
                })
            );
        })
    );
});

self.addEventListener('message', function(event) {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});