
iniciarApp();

function iniciarApp(){
    console.log("Iniciando App");
    segundaFuncion();
}

function segundaFuncion(){
    console.log("Desde la segunda función");
    usuarioAutenticado('William');
}

function usuarioAutenticado(nombre){
    console.log("Autenticando Usuario");
    console.log(`Usuario autenticado exitosamente ${nombre}`);
}