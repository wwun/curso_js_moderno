// Un generador es una función que puede ser pausada y reanudada, y se define usando 
// function* (una función generadora). Al llamar a una función generadora, no se ejecuta 
// el código de inmediato; en su lugar, se devuelve un objeto iterador. Este iterador 
// tiene un método next() que se utiliza para avanzar en la ejecución del generador 
// hasta el próximo yield.

function *crearGenerador(){ //el generado se crea con *
    yield 1;
    yield 'William';
    yield 3+3;
    yield true;
}

const iterador = crearGenerador();  //Aquí, iterador es un objeto de tipo Generator. No ejecuta el cuerpo de la función generadora de inmediato, sino que devuelve un iterador que controlará la ejecución del generador
//el valor suspended es porque el iterador no carga el siguiente valor sino que se pone en modo suspendido hasta que sea llamado nuevamente
console.log(iterador);  //Generator {<suspended>}   //La primera llamada a next() ejecuta el generador hasta el primer yield. Retorna un objeto con dos propiedades:
//value: El valor generado (1 en este caso).
//done: Indica si el generador ha terminado (false porque aún hay más valores por generar).
console.log(iterador.next());   //Object { value: 1, done: false }  //el iterador despierta, devuelve el objeto y se vuelve a suspender
console.log(iterador.next().value); //William
console.log(iterador.next().done);  
console.log(iterador);  //Generator {<suspended>}
//el iterador finaliza con un estado <close>

//generador para carrito de compra
function *generadorCarrito(carrito){
    for(let i=0; i<carrito.length; i++){
        yield carrito[i];
    }
}

const carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

const iteradorCarrito = generadorCarrito(carrito);

console.log(iteradorCarrito.next());    //Object { value: "Producto 1", done: false }
console.log(iteradorCarrito.next());    //Object { value: "Producto 2", done: false }
console.log(iteradorCarrito.next());    //Object { value: "Producto 3", done: false }
console.log(iteradorCarrito.next());    //Object { value: undefined, done: true }