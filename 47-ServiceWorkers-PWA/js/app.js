//para crear un PWA es necesario tener: 
//un manifest.json qe debe ir también en index
//debe tener un dominio https o ser localhost
//tener registrado event listener de fetch

//cuando trabaja online, trabaja con caché, entonces el usuario en este modo podrá acceder a las páginas qe se agreguen al caché, no se debería agregar todo

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(registrado => { 
        console.log('Se instaló correctamente ', registrado);
        
        //
        if (registrado.waiting) {
            console.log('Nueva versión del Service Worker disponible');
            registrado.waiting.postMessage({ action: 'skipWaiting' });
        }
        //
    })
    .catch(error => console.log('falló la instalación ',error));
}else{
    console.log('service workers no soportado');
}