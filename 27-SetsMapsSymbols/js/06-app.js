function crearIterador(carrito){
    let i=0;

    return{ //esta función qe retorna una función, retorna en otra variable el resultado.
        siguiente: () => {
            const fin = (i>=carrito.length);
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin,
                valor
            }
        }
    }
}

const carrito = ['Producto', 'Producto 2', 'Producto 3', 'Producto Nuevo'];

const recorrerCarrito = crearIterador(carrito); //recibe la función resultado

console.log(recorrerCarrito.siguiente());   //Object { fin: false, valor: "Producto" }
console.log(recorrerCarrito.siguiente());   //Object { fin: false, valor: "Producto 2" }
console.log(recorrerCarrito.siguiente());   //Object { fin: false, valor: "Producto 3" }
console.log(recorrerCarrito.siguiente());   //Object { fin: false, valor: "Producto Nuevo" }
console.log(recorrerCarrito.siguiente());   //Object { fin: true, valor: undefined }