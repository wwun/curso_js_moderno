
"use strict";   //exige que se cumplan las reglas para escribir el código y con esto se tiene acceso a los métodos

const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze(producto);    //toma el objeto y lo vuelve inmutable

//producto.disponible = false;  //esto ya no se podría

console.log(producto);  //Object { nombre: "Monitor 20 pulgadas", precio: 300, disponible: true }

console.log(Object.isFrozen(producto)); //true