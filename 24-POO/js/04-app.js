class Cliente { //clase padre

    #nombre;    //convierte la propiedad nombre en privada

    constructor(nombre, saldo){ //esta es la manera en la que se crea un constructor
        this.#nombre = nombre;  //se agrega el símbolo # para poder acceder a él
        this.saldo = saldo;
    }

    mostrarInformacion(){
        return `Cliente: ${this.#nombre}, tu saldo es de: ${this.saldo}`;
    }

    static bienvenida(){    //no requiere instancia para poder llamarlas
        return `Bienvenido al cajero`;
    }

    //para acceder a las variables privadas se utilizan los getters y setters también
    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }
}

const william = new Cliente('william', 9200);
console.log(william);
//console.log(william.#nombre); //esto no se puede hacer
console.log(william.mostrarInformacion());  //a diferencia del anterior, se está llamando a la propiedad privada desde la clase
william.setNombre('William');
console.log('getNombre(): ',william.getNombre());