const nombreCache = 'apv-v1';
const archivos = [
    './',
    './index.html',
    './error.html',
    './css/bootstrap.css',
    './css/styles.css',
    './js/app.js',
    './js/apv.js'
];

//cuando se instala el service worker
self.addEventListener('install', e => {
    console.log('instalado el service worker');
    e.waitUntil(    //se espera hasta qe se descargue todos los archivos
        caches.open(nombreCache)
            .then( cache => {
                console.log('cacheando');
                return cache.addAll(archivos); //si fuera un archivo sería solo add, con esto se agrega al caché
            })
    )
});

//activar el service worker
self.addEventListener('activate', e => {
    console.log('service worker activado');

    e.waitUntil(
        caches.keys()
            .then( keys => {    //los keys vienen a ser los cache storage qe se van creando a medida qe cambiamos de versión
                console.log(keys);

                return Promise.all(
                    keys.filter(key => key !== nombreCache)
                        .map(key => {
                            console.log('Eliminando caché antigua', key);
                            return caches.delete(key);
                        })    //borra los demás
                );
            })
            .then(() => {
                return self.clients.claim(); // Reclama el control inmediato de las páginas
            })
    )
})

//evento fetch para descargar archivos estáticos
self.addEventListener('fetch', e => {
    console.log('Fetch ',e);

    e.respondWith(

        fetch(e.request)
            .then(cacheResponse => {
                if (cacheResponse) {
                    return cacheResponse; // Si está en caché, devolverlo
                }

                // Si no está en caché, buscar en la red y luego agregarlo a la caché
                return fetch(e.request).then(networkResponse => {
                    return caches.open(nombreCache).then(cache => {
                        cache.put(e.request, networkResponse.clone()); // Almacenar la respuesta en la caché
                        return networkResponse; // Devolver la respuesta de la red
                    });
                }).catch(() => caches.match('/error.html')); // En caso de error, mostrar la página de error
            })
    
    );
});