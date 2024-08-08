//coercion
//conversión automática o implícita de valores de un tipo a otro

const numero1 = 20;
const numero2 = "40";

console.log(numero1+numero2);   //60, coerción implícita, se convierte automáticamente de texto a número para realizar la operación

console.log(numero1+Number(numero2));   //60, coerción explícita, se usa una función para hacer la conversión
console.log(numero1.toString());
const pedido = [1,2,3,4];
console.log(pedido.toString());
console.log(JSON.stringify(pedido));