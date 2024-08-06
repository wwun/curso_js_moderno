document.addEventListener('visibilitychange', () => {
    if(document.visibilityState === 'visible'){
        console.log('ejecutar la función para reproducir el video...');
    }else{
        console.log('pausar el video');
    }
});