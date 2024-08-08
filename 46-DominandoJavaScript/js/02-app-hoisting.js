//hoisting, contexto de js en la que primero se registran las funciones y en la segunda se ejecutan

//function declaration
//en la primera fase se registra la llamada y en la segunda se manda a llamr, por eso se puede llamar antes de declararl
obtenerCliente('William');
function obtenerCliente(nombre){
    console.log(`El nombre del cliente es ${nombre}`);
}


//con function expression
//esto genera error, en la primera registra la función, en la segunda llama a la función pero aún no ha sido asignada a la variable
obtenerCliente2('Wun');
const obtenerCliente2 = function (nombre){
    console.log(`El nombre del cliente es ${nombre}`);
}