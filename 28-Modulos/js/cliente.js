//los módulos son más usados en librerías

// (function () {  //mantiene las variables localmente en el archivo
//     console.log('desde un IIFE');
//     const nombreCliente = 'William';
// })();

// console.log(nombreCliente); //Uncaught ReferenceError: nombreCliente is not defined

export const nombreCliente = 'William'; //se debe agregar type="module en el archivo index que importa este js"
export const ahorro = 200000;

export function mostrarInformacion(nombre, ahorro){
    return `Cliente: ${nombre} - ahorro: ${ahorro}`;
}

export function tieneSaldo(ahorro){
    if(ahorro>0){
        console.log("Sí tiene saldo");
    }else{
        console.log("No tiene saldo");
    }
}

export class Cliente{
    constructor(nombre, ahorro){
        this.nombre=nombre,
        this.ahorro=ahorro
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre} - ahorro: ${this.ahorro}`;
    }
}

export default function nuevaFuncion(){ //no puede haber dos export default
    console.log('Este es export por default');
}