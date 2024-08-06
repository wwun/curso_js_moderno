
const carrito = [];

const producto = {
    nombre: 'Monitor',
    precio: 400
}

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

const producto3 = {
    nombre: 'Teclado',
    precio: 30
}

//Destructuring

const numeros = [10, 20, 30, 40, 50];

const [primero] = numeros;  //está tomando la primera posición. Se hace por posición

console.log(primero);

const [, , c] = numeros;    //no crea variables para las dos primeras

console.log(c);

const [p, s, ...t] = numeros;

console.log(t);