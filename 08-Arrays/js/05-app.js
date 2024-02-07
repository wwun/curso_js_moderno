
const carrito = [];

const producto = {
    nombre: 'Monitor',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

//forma imperativa modificando la variable original
carrito.push(producto);
carrito.push(producto2);

console.table(carrito);