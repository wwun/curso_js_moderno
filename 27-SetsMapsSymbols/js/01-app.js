//set son poco usados en código pero son parte de entrevistas

const carrito = new Set();  //almacena valores qe no pueden ser duplicados

carrito.add('camisa');   //solo almacena valores como un arreglo y no llave valor como map
carrito.add('Disco #1');
carrito.add('Disco #2');
carrito.add('Disco #3');

carrito.delete('Disco #3'); //devuelve true o false, si no se puede borrar o no existe = false

carrito.add('camisa');  //esto no se va a agregar porque ya existe. Es case sensitive

console.log(carrito.has('Guitarra')); //false

console.log(carrito.size);

//carrito.clear();  //borra todo el carrito

carrito.forEach( (producto) => {
    console.log(producto);  //Set(3) [ "camisa", "Disco #1", "Disco #2" ]
});

carrito.forEach( (producto, index) => {
    console.log(index); //como no es llave valor, va a imprimir lo mismo
});

console.log(carrito);   //Set [ "camisa", "Disco #1" ]

const numeros = [10, 20, 30, 40, 50, 10, 20];

const noDuplicados = new Set(numeros);

console.log(noDuplicados);  //Set(5) [ 10, 20, 30, 40, 50 ]