
function sumar(a, b){
    return a + b;
}

const resultado = sumar(2, 3);

console.log(resultado);



let total = 0;

function agregarCarrito(precio){
    return total+=precio;
}

function calcularImpuesto(total){
    return total*1.15;
}

agregarCarrito(300);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar es de: ${totalPagar}`)

console.log(total);