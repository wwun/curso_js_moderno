
sumar();    //esto sí se puede por el hoistig donde se registran todas las funciones con este tipo de declaración de función
function sumar(){
    console.log(2+2);
}

//Expresión de función

const sumar2 = function(){
    console.log(3 + 3);
}
sumar2();   //esto no se puede llamar antes de declararlo porque el hoistig ha declarado sumar2 en la primera pasada pero aún no tiene lo de la función