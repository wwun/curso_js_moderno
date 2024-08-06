//symbols tampoco se ve mucho en código, más en librerías
const sym = Symbol();   //no s crea con new Symbol()
const sym2 = Symbol();

//los symbols no son iguales nunca
if(sym === sym2){
    console.log('son iguales');
}else{
    console.log('son diferentes');
}

console.log(Symbol() === Symbol()); //false

const nombre = Symbol();
const apellido = Symbol();

const persona = {}

//agregar nombre y apellido como llaves del objeto
persona[nombre] = 'William';
persona[apellido] = 'Wun';
persona.tipoCliente = 'Premium';
persona.saldo = 50000;

console.log(persona);   //Object { tipoCliente: "Premium", saldo: 50000, Symbol(): "William", Symbol(): "Wun" }

console.log(persona[nombre]);   //con symbol no se puede hacer persona.nombre, como nombre es un symbol solo se puede acceder a la propiedad del objeto de esa manera

//las propiedades qe utilizan un symbol no son iterables
for(let i in persona){
    console.log(i); //tipoCliente, saldo
}

//definir una descripción del symbol
const nombreCliente = Symbol('nombre del cliente');
const cliente = {};

cliente[nombreCliente] = 'Pedro';

