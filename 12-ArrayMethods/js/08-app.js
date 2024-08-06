const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.push('Agosto');   //esto modifica el arreglo original
console.log(meses);

//spread operator
const meses2 = [...meses, 'Agosto'];    //esto no modifica el arreglo original

console.log(meses2);

const producto = { producto: 'Disco duro', precio: 300};

const carrito2 = [...carrito, producto];

console.log(carrito2);