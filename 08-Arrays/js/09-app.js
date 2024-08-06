
const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Tele', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]

for(let i=0; i<carrito.length; i++){
    console.log(`${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

carrito.forEach( function(producto){    //función foreach, a cada elemento se le está asignando el nombre producto
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
});