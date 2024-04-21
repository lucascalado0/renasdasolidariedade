var cacheName = 'RenasDaSolidariedade'

self.addEventListener('install', event => {
    
    self.skipWaiting();
    event.waitUntil(
        caches.open(cacheName)
            .then(cache => cache.addAll([
                'index.html',
                'page2.html',
                'generic.html',
                'forms.html',

                './assets/css/main.css',
                './assets/css/noscript.css',
                './assets/css/fontawesome-all.min.css',

                './assets/js/breakpoints.min.js',
                './assets/js/browser.min.js',
                './assets/js/jquery.min.js',
                './assets/js/jquery.scrollex.min.js',
                './assets/js/jquery.scrolly.min.js',
                './assets/js/main.js',
                './assets/js/util.js',
                './assets/js/whatWeb.js',
                './assets/js/consultaCep.js',

                './assets/sass/base/_page.scss',
                './assets/sass/base/_reset.scss',
                './assets/sass/base/_typography.scss',

                './assets/sass/components/_actions.scss',
                './assets/sass/components/_box.scss',
                './assets/sass/components/_button.scss',
                './assets/sass/components/_form.scss',
                './assets/sass/components/_icon.scss',
                './assets/sass/components/_icons.scss',
                './assets/sass/components/_image.scss',
                './assets/sass/components/_list.scss',
                './assets/sass/components/_pagination.scss',
                './assets/sass/components/_row.scss',
                './assets/sass/components/_section.scss',
                './assets/sass/components/_table.scss',

                './assets/sass/layout/_footer.scss',
                './assets/sass/layout/_header.scss',
                './assets/sass/layout/_intro.scss',
                './assets/sass/layout/_main.scss',
                './assets/sass/layout/_nav.scss',
                './assets/sass/layout/_navPanel.scss',
                './assets/sass/layout/_wrapper.scss',

                './assets/sass/libs/_breakpoints.scss',
                './assets/sass/libs/_fixed-grid.scss',
                './assets/sass/libs/_functions.scss',
                './assets/sass/libs/_mixins.scss',
                './assets/sass/libs/_vars.scss',
                './assets/sass/libs/_vendor.scss',
                    
                './assets/sass/main.scss',
                './assets/sass/noscript.scss',

                './assets/webfonts/fa-brands-400.eot',
                './assets/webfonts/fa-brands-400.svg',
                './assets/webfonts/fa-brands-400.ttf',
                './assets/webfonts/fa-brands-400.woff',
                './assets/webfonts/fa-brands-400.woff2',
                './assets/webfonts/fa-regular-400.eot',
                './assets/webfonts/fa-regular-400.svg',
                './assets/webfonts/fa-regular-400.ttf',
                './assets/webfonts/fa-regular-400.woff',
                './assets/webfonts/fa-regular-400.woff2',
                './assets/webfonts/fa-solid-900.eot',
                './assets/webfonts/fa-solid-900.svg',
                './assets/webfonts/fa-solid-900.ttf',
                './assets/webfonts/fa-solid-900.woff',
                './assets/webfonts/fa-solid-900.woff2',



                '/images/bg.jpg',
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
                './images/cartinhaThayla.jpg'
            ]))
    );
});

self.addEventListener('message', function (event){
    if (event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});

self.addEventListener('fetch', function (event){
    event.respondWith(async function(){
        try {
            return await fetch(event.request);
        } catch (err) {
            return caches.match(event.request);
        }
    }());

    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if(response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});


