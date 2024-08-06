
const metodoPago = 'efectivo';

switch(metodoPago){
    case 'efectivo':
        pagar();
        break;
    default:
        console.log('Aún no se ha seleccionado un método de pago');
        break;
}

function pagar(){
    console.log('Pagaste con efectivo');
}