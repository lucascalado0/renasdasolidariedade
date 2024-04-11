var cacheName = 'RenasDaSolidariedade'

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => {
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

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cache => cache !== cacheName)
                    .map(cache => caches.delete(cache))
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            
            if (response) {
                return response;
            }


            let fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(response => {

                if (!response || response.status !== 200 || response.type !== 'basic') {
                    return response;
                }

                let responseToCache = response.clone();

                caches.open(cacheName).then(cache => {
                    cache.put(event.request, responseToCache);
                });

                return response;
            });
        })
    );
});

self.addEventListener('message', event => {
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});