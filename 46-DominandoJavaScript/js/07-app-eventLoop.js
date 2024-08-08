//event loop
//se hace una tarea a la vez
//muestra el orden de ejecución

console.log('Primero');

setTimeout(() => {
    console.log('segundo');
}, 0);

console.log('tercero');

setTimeout(() => {
    console.log('cuarto');
}, 0);

new Promise(function(resolve){
    resolve('desconocido');
}).then(console.log);

console.log('ultimo');

function hola(){
    console.log('hola');
}

// Primero
// Tercero
// Ultimo
// hola
// desconocido
// segundo
// cuarto