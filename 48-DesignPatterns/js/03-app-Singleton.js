//Singleton

let instancia = null;

class Persona{
    constructor(nombre, email){
        if(!instancia){
            this.nombre = nombre;
            this.email = email;
            instancia = this;   //
        }else{
            return instancia;
        }
    }
}

const persona = new Persona('William', 'williamwun@gmail.com');

console.log(persona);

//ahora esto no permite crear una segunda instancia del objeto

const persona2 = new Persona('Jefferson', 'jfarfan17@gmail.com');

console.log(persona2);