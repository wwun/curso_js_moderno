//Class Pattern
//patrón de diseno de creación

//se deben crear clases para la creacion de todos los objetos

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const persona = new Persona('William', 'williamwun@gmail.com');

console.log(persona);