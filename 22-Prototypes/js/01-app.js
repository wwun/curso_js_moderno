
//esta sintaxis es de object literal
const cliente = {
    nombre: 'Juan',
    saldo: 500
}

console.log(cliente);

//esta es la sintaxis de object constructor
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const juan = new Cliente('Juan', 500);

console.log(juan);







//cada objeto tiene un proto