//class declaration
class Cliente { //clase padre
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

//herencia
class Empresa extends Cliente{  //clase hija
    constructor(nombre, saldo, telefono, categoria){
        /*
        //si se ponen estas opciones dará un error, hay que usar super()
        this.nombre = nombre;
        this.saldo = saldo;
        */
        super(nombre, saldo);
        this.telefono = telefono;
        this.categoria = categoria;
    }

    static bienvenida(){    //esto reescribe el de la clase padre
        return `Bienvenido al cajero de empresas`;
    }
}

const william = new Cliente('William', 7000);
const empresa = new Empresa('William Wun', 8500, 7788583949, 'Senior');

console.log(empresa.mostrarInformacion());
console.log(william);

console.log(Cliente.bienvenida());
console.log(Empresa.bienvenida());