
const carrito = [];

const producto = {
    nombre: 'Monitor',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

let resultado;

//forma declarativa
resultado = [...carrito, producto];

resultado = [...resultado, producto2];
//resultado.push(producto2);

console.table(resultado);