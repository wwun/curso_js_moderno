//closures es una forma de acceder a una variable o función desde el exterior
//suelen ir acompanados de scope

//por ejemplo, cómo se imprimiría Wun desde fuera?
// const cliente = 'William';
// function mostrarCliente(){
//     const cliente = 'Wun';
//     console.log(cliente);
// }
// console.log(cliente);   
// mostrarCliente();

const obtenerCliente = () => {
    const nombre = 'Juan';

    function muestraNombre(){
        console.log(nombre);
    }

    return muestraNombre;
}

const cliente = obtenerCliente();

cliente();


//chatgpt
// Un closure (clausura) es una función que recuerda el entorno léxico en el que fue creada, 
// incluso después de que dicha función ha terminado de ejecutarse. En otras palabras, 
// una función interna puede acceder a las variables de su función externa, incluso después de que 
// la función externa haya terminado de ejecutarse

// function makeCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         return count;
//     }
// }
// const counter = makeCounter();
// console.log(counter()); // Output: 1
// console.log(counter()); // Output: 2