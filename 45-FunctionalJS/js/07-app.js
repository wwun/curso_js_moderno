//sintaxis poco común entre programadores
const obtenerCliente = () => () => console.log('William');  //función que retorna otra función

const fn = obtenerCliente();

fn();