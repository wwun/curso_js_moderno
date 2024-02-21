const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//every, retorna true cuando todos los valores cumplen con las condiciones
const resultado = carrito.every(producto => producto.precio > 1000);
console.log(resultado);

const resultado2 = carrito.some(producto => carrito.precio < 50);
console.log(resultado2);