const pendientes = ['tarea', 'comer', 'proyecto', 'estudiar javascript'];

pendientes.forEach( (pendiente, index) => {
    console.log(`${index} : ${pendiente}`); //lista cada elemento de pendientes
})

/*
0 : tarea
1 : comer
2 : proyecto
3 : estudiar javascript
*/

const carrito= [
    {nombre: "Monitor 27 pulgadas", precio: 500},
    {nombre: "television", precio: 100},
    {nombre: "Tablet", precio: 200, descuento: true},
    {nombre: "Audifonos", precio: 300},
    {nombre: "Teclado", precio: 700}
]

carrito.forEach(producto => console.log(producto.nombre));

carrito.map(producto => console.log(producto.nombre));  //map crea un arreglo nuevo

const nuevoArreglo = carrito.forEach(producto => producto.nombre);
const nuevoArreglo2 = carrito.map(producto => producto.nombre);

console.log(nuevoArreglo);
//undefined


console.log(nuevoArreglo2);
/*
Array(5) [ "Monitor 27 pulgadas", "television", "Tablet", "Audifonos", "Teclado" ]
*/