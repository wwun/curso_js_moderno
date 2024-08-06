
const usuario = false;
const puedePagar = false;

if(usuario || puedePagar){
    console.log('Sí puede pagar');
}else if(puedePagar && !usuario){
    console.log('No puede comprar');
}else if(!usuario){
    console.log('Inicia sesión o crea una cuenta');
}