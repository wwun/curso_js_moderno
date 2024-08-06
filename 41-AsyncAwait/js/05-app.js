
const url = 'http://picsum.photos/list';

document.addEventListener('DOMContentLoaded', obtenerDatos);

function obtenerDatos(){    //promises
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error));
}

async function obtenerDatos(){
    try{
        const respuesta = await fetch(url); //.then(respuesta => respuesta.json())
        const resultado = await respuesta.json();   //.then(resultado => console.log(resultado))    en este caso es doble await porque se debe esperar uno para ejecutar el otro
        console.log(resultado);
    }catch(error){
        console.log(error);
    }
}