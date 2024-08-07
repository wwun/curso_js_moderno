//composition, alternativa a las clases, escribe una función que se puede usar en diferentees objetos sin necesidad de usar clases
//la tendencia es usar esto

const obtenerNombre = info => ({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
})

const guardarEmail = info => ({
    agregarEmail(email){
        console.log(`Guardando email en: ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = info => ({
    mostrarEmail(){
        console.log(`Correo: ${info.email}`);
    }
})

const obtenerEmpresa = info => ({
    mostrarEmpresa(){
        console.log(`Empresa: ${info.empresa}`);
    }
})

function Cliente(nombre, email, empresa){
    let info = {
        nombre, email, empresa
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}

const obtenerPuesto = info => ({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
})

function Empleado(nombre, email, puesto){
    let info = { nombre, email, puesto}
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('William', null, "Software Architeture");
cliente.mostrarNombre();
cliente.agregarEmail('williamwun@gmail.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();


console.log('=========================')


const empleado = Empleado('Pedro', null, 'Programador');
empleado.mostrarNombre();
empleado.agregarEmail('empleado@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();

//chatgpt
// composition (composición) es una técnica en la que se combinan múltiples funciones para 
// producir una nueva función. La salida de una función se convierte en la entrada de la siguiente

// const compose = (f, g) => x => f(g(x));

// const add5 = x => x + 5;
// const multiply3 = x => x * 3;

// const add5AndMultiply3 = compose(multiply3, add5);

// console.log(add5AndMultiply3(2)); // Output: 21 (2 + 5 = 7, 7 * 3 = 21)