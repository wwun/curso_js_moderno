//implicit binding
//se debe definir dónde encontrar los valores

const usuario = {
    nombre: 'William',
    edad: 37,
    informacion(){
        //si se pone ${nombre} y edad no va a mostrar un error porque no sabe dónde encontrar los valores
        //se debe agregar this
        console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`); //console.log(`Mi nombre es ${nombre} y mi edad es ${edad}`);
    },
    mascota: {
        nombre: 'Hook',
        edad: 1,
        informacion(){
            //va a mostrar esta edad y no la de usuario
            console.log(`Mi nombre es ${this.nombre} y mi edad es ${this.edad}`);
        }
    }
}

usuario.informacion();
usuario.mascota.informacion();