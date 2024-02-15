
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)    //this hace referencia a las propiedades dentro del objeto
    }
}

console.log( Object.keys( producto));   //Array(4) [ "nombre", "precio", "disponible", "mostrarInfo" ]

console.log(Object.values(producto ));  //Array(4) [ "Monitor 20 pulgadas", 300, true, mostrarInfo() ]

console.log(Object.entries( producto)); //Array(4) [ (2) […], (2) […], (2) […], (2) […] ]