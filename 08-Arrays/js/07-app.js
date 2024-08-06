
const carrito = [];

const producto = {
    nombre: 'Monitor',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 30
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);

console.table(carrito);

carrito.pop();  //en arreglo es con pop, en objeto con delete

console.table(carrito);

carrito.shift();    //elimina el primer elemento

console.table(carrito);

carrito.slice(0, 1);    //posición, número de elementos

console.table(carrito);