const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;

//filter crea un nuevo arreglo con todos los valores que cumplen con la condición
resultado = carrito.filter( producto => producto.precio > 400);

resultado = carrito.filter( producto => producto.precio < 600);

resultado = carrito.filter( producto => producto.nombre !== 'Audifonos');

console.log(resultado);



//filter se utiliza para crear un nuevo array con todos los elementos que pasan una prueba (la función de callback proporcionada)