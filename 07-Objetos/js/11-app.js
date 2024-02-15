
const producto = {
    nombre: "Monitor 20 pulgadas",
    codigo: "00001",
    precio: 300,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)    //this hace referencia a las propiedades dentro del objeto
    }
}

const producto2 = {
    nombre: "Tablet",
    precio: 3000,
    disponible: true,
    mostrarInfo: function(){
        console.log(`El producto: ${this.nombre} tiene un precio de ${this.precio}`)    //this hace referencia a las propiedades dentro del objeto
    }
}

producto.mostrarInfo(); //El producto: Monitor 20 pulgadas tiene un precio de 300
console.log({...producto, ...producto2});   //Object { nombre: "Tablet", codigo: "00001", precio: 3000, disponible: true, mostrarInfo: mostrarInfo() }