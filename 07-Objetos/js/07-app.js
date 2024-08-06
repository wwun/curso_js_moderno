
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

//las propiedades de un objeto sí se pueden cambiar así la variable sea const
producto.disponible = false;

console.log(producto);