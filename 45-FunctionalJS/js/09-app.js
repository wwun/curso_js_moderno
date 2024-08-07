//currying
const suma = (a,b,c) => a + b + c;

const parcial = a => (b, c) => suma(a,b,c);

//una manera de llamarlo
const primerNumero = parcial(5);
console.log("parcial(5): ", primerNumero);

const resultado = primerNumero(4,3);
console.log("primerNumero(4,3): ",resultado);

const parcial2 = a => b => c => suma(a,b,c);

//otra manera de llamarlo
const primerNumero2 = parcial(5);
const segundoNumero2 = primerNumero(4);
const resultado2 = segundoNumero(3);

console.log(resultado2);

//otra manera de llamarlo
const resuladoParcial = parcial(5)(4)(3);   //pregunta de trabajo
console.log(resuladoParcial);

//chatgpt
// currying es una técnica de transformación de funciones que convierte una función con múltiples 
// argumentos en una secuencia de funciones unarias (funciones que toman un solo argumento)

// function curry(f) {
//     return function(a) {
//         return function(b) {
//             return f(a, b);
//         }
//     }
// }
// function add(a, b) {
//     return a + b;
// }
// const curriedAdd = curry(add);
// console.log(curriedAdd(1)(2)); // Output: 3