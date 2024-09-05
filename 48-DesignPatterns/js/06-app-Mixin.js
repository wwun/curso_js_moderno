//Mixin

class Persona{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

class Cliente{
    constructor(nombre, email){
        this.nombre = nombre;
        this.email = email;
    }
}

const funcionesPersona = {
    mostrarInformacion(){
        console.log(`nombre persona: ${this.nombre} email: ${this.email}`);
    },
    mostrarNombre(){
        console.log(`Mi nombre es ${this.nombre}`);
    }
}

//anadir funcionesPersona a la clas Persona
Object.assign(Persona.prototype, funcionesPersona); //mixin
Object.assign(Cliente.prototype, funcionesPersona); //mixin

const cliente = new Persona('William', 'williamwun@gmail.com');

console.log(cliente);
cliente.mostrarInformacion();
cliente.mostrarNombre();

const cliente2 = new Cliente('Jefferson', 'jfarfan17@gmail.com');

console.log(cliente2);
cliente2.mostrarInformacion();
cliente2.mostrarNombre();

//Uso de prototype:
// prototype se usa para definir propiedades y métodos que serán compartidos entre todas las instancias de un objeto. En este caso, al asignar funcionesPersona al prototipo de Persona y Cliente, todas las instancias de estas clases tendrán acceso a esas funciones.
// Esto es eficiente porque permite que todas las instancias compartan el mismo conjunto de métodos, en lugar de duplicarlos en cada instancia.

//Mixin:
// Al usar Object.assign, estás aplicando un mixin, que es una forma de agregar funcionalidades comunes a múltiples clases. Es un patrón común en JavaScript para reutilizar código entre diferentes clases.
// funcionesPersona puede contener funciones que deberían estar disponibles para todas las instancias de Persona y Cliente. Al agregar estas funciones al prototype, todas las instancias heredan esas funciones sin necesidad de copiar el código en cada instancia