
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)    //this hace referencia a las propiedades dentro del objeto
    }
}

console.log( Object.keys( producto));

console.log(Object.values(producto ));

console.log(Object.entries( producto));