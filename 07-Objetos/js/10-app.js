
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true
}

const medidas = {
    peso: '1kg',
    medida: '1m'
}

console.log(producto);
console.log(medidas);

const resultado = Object.assign(producto, medidas); //une los objetos

console.log(resultado); //Object { nombre: "Monitor 20 pulgadas", precio: 300, disponible: true, peso: "1kg", medida: "1m" }

//Spread Operator
const resultado2 = { ...producto, ...medidas};  //... es para copiar las variables. Aquí se está uniendo los dos objetos
console.log(resultado2);    //Object { nombre: "Monitor 20 pulgadas", precio: 300, disponible: true, peso: "1kg", medida: "1m" }