//Constructor Pattern
//son como las clases abstractas

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente extends Persona{
    constructor(nombre, email){
        super(nombre, email);
        this.empresa = empresa;
    }
}

const persona = new Persona('William', 'williamwun@gmail.com');
console.log(persona);

const cliente = new Cliente('Jefferson', 'jfarfan17@gmail.com', 'Schalke 04');
console.log(cliente);