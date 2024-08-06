const autenticado = true;
const puedePagar = true;

console.log(autenticado && puedePagar ? "Sí está autenticado" : "No no está atenticado");

console.log(autenticado ? puedePagar ? "Sí está autenticado y puede pagar" : "Sí está autenticado pero no puede pagar" : "No no está atenticado");