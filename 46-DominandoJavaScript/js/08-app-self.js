//self
//es como la variable global de window
self.onload = () => {
    console.log('ventana lista');
}

const producto = {
    precio: 30,
    disponible: true,
    mostrarInfo: function(){
        return `el producto ${self.nombre}`
    }
}

console.log(producto.mostrarInfo());