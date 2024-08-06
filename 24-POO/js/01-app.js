//class declaration
class Cliente {
    constructor(nombre, saldo){ //esta es la manera en la que se crea un constructor
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }

    static bienvenida(){    //no requiere instancia para poder llamarlas
        return `Bienvenido al cajero`;
    }
}

const william = new Cliente('William', 7000);
console.log(william.mostrarInformacion());
//console.log(william.bienvenida());  //esto genera un error porque es un método estático
console.log(Cliente.bienvenida());

//class expression, es lo mismo que class declaration
const Cliente2 = class{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
}

const william2 = Cliente2('William', 7000);