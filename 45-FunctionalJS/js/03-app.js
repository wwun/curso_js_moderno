const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

// const resultado = carrito.filter(producto => {
//     return producto.precio > 400;
// });

// con higher order functions
//funciones que pueden hacer al menos una de las siguientes cosas:
// 1. Tomar una o más funciones como argumentos.
// 2. Devolver una función como resultado

const mayor400 = producto => {
    return producto.precio > 400;
}

const resultado = carrito.filter(mayor400); //se le está pasando una función, no como la primera opción que se le pasa un arreglo

console.log(resultado);

//ejemplo de chatgpt
// function higherOrder(fn) {
//     return function(x) {
//         return fn(x);
//     }
// }
// const addOne = higherOrder(function(x) {
//     return x + 1;
// });
// console.log(addOne(5)); // Output: 6