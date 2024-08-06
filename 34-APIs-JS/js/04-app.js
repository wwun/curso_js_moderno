const abrirBtn = document.querySelector('#abrir-pantalla-completa');
const salirBtn = document.querySelector('#salir-pantalla-completa');

abrirBtn.addEventListener('click', abrirPantallaCompleta);

salirBtn.addEventListener('click', salirPantallaCompleta);

function abrirPantallaCompleta(){
    document.documentElement.requestFullscreen();   //documentElement trae todo el html
}

function salirPantallaCompleta(){
    document.exitFullscreen();
}