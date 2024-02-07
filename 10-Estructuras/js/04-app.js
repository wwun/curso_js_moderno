
const dinero = 100;
const totalAPagar = 300;
const tarjeta = true;

if(dinero > totalAPagar){
    console.log('Se puede pagar con efectivo');
}else if(tarjeta){
    console.log('Se puede pagar con tarjeta');
}else{
    console.log('No se puede pagar');
}