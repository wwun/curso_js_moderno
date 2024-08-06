
"use strict";   //exige que se cumplan las reglas para escribir el código y con esto se tiene acceso a los métodos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.seal(producto ); //esto permite que se pueda cambiar las propiedades del objeto pero no se puede agregar propiedades

producto.disponible = false;

console.log(producto.disponible);

console.log(Object.isSealed(producto));