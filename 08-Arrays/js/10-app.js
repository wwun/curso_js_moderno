
const carrito = [
    {nombre: 'Monitor', precio: 500},
    {nombre: 'Tele', precio: 100},
    {nombre: 'Tablet', precio: 200},
    {nombre: 'Audifonos', precio: 300},
    {nombre: 'Teclado', precio: 400},
    {nombre: 'Celular', precio: 700}
]

//map crea un arreglo nuevo a diferencia de foreach y la función es la misma, recorre los elementos

const nuevoArregloMap = carrito.map( function(producto){    //función map, a cada elemento se le está asignando el nombre producto
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

const nuevoArregloFore = carrito.forEach( function(producto){    //función foreach, a cada elemento se le está asignando el nombre producto
    return `${producto.nombre} - Precio: ${producto.precio}`;
});

console.log(`nuevoArregloMap: `);
console.table(nuevoArregloMap); //este arreglo sí está lleno

console.log(`nuevoArregloFore: `);
console.table(nuevoArregloFore);