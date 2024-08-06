
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

producto.imagen = "imagen.jpg";

delete producto.disponible;

console.log(producto);

//Object { nombre: "Monitor 20 pulgadas", precio: 300, imagen: "imagen.jpg" }