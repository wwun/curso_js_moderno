
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//const nombre = producto.nombre;
//console.log(nombre);

//destructuring object
const {nombre} = producto;  //extrae de un objeto y crea una variable con el mismo nombre al mismo tiempo
const {precio, disponible} = producto;
console.log(nombre);    //Monitor 20 pulgadas
console.log(disponible);    //true