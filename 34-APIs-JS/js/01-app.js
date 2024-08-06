const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification    //api de javaScript
        .requestPermission()    //se notifica qe se pide permiso para enviar notificaciones
        .then( resultado => {
            console.log(`el resultado es: ${resultado}`);   //granted si se acepta el permiso, sino denied
        })
});

const verNotificacion = document.querySelector('#verNotificacion');

verNotificacion.addEventListener('click', () => {
    if(Notification.permission === 'granted'){
        console.log('permission granted');
        const notificacion = new Notification('esta es la notificacion',{
            icon: 'img/ccj.png',
            body: 'Código con Juan'
        });

        notificacion.onclick = function(){
            window.open('https://www.codigoconjuan.com');
        }
    }
});