import nuevaFuncion, { nombreCliente, ahorro, mostrarInformacion, tieneSaldo, Cliente } from "./cliente.js";    //la funciones por default van fuera

nuevaFuncion();

console.log(nombreCliente);
console.log(ahorro);

console.log(mostrarInformacion(nombreCliente, ahorro));

tieneSaldo(ahorro);

const cliente = new Cliente(nombreCliente, ahorro);
console.log('Cliente ', cliente.mostrarInformacion());

import {Empresa} from './empresa.js';
const empresa = new Empresa('Código con Juan', 100, 'Aprendizaje en línea');
console.log(empresa.mostrarInformacion());