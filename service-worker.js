var cacheName = 'RenasDaSolidariedade'

self.addEventListener('install', event => {
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll ([
                './index.html',

                './page2.html',

                './generic.html',

                './assets/css/main.css',

                './assets/css/noscript.css',

                './assets/css/fontaawesome-all.min.css',

                './assets/js/breakpoint.min.js',

                './assets/js/browser.min.js',

                './assets/js/jquery.min.js',

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
                './cartinhaArmando.jpg',
                './images/cartinhaArthur.png',
                './images/cartinhaBrenda.jpg',
                './images/cartinhaHelena.jpg',
                './images/cartinhaLuisa.jpg',
                './images/cartinhaPatricia.jpg',
                './images/cartinhaRobson.jpg',
                './images/cartinhathayla.jpg',
            ]))
    );

});

self.addEventListener('message', function (event){
    if (event.data.action === 'skipWaiting') {
       self.skipWaiting();
    }
});

self.addEventListener('fetch', function (event){
    event.respondWith(async function() {
        try {
            return await fetch (event.request);
        } catch (err) {
            return caches.match(event.request);
        }
    }());

    event.respondWith(
        caches.match(event.request)
            .then(function (response){
                if(response){
                    return response;
                }
                return fetch(event.request);
            })
    );
});