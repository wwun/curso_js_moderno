//las funciones deben tomar una entrada y tener una salida
//no se permite la modificación de datos
//separa funciones de datos
//first class functions (pregunta de trabajo): crea funciones que parecen cualqier variable
//existen lenguajes funcionales, javascrpt no es un lenguaje funcional

const suma = function(a, b){
    return a + b;
}

const resultado = suma;

console.log(resultado(10, 20));