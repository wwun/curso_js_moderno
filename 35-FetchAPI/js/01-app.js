const cargarTxtBtn = document.querySelector('#cargarTxt');
cargarTxtBtn.addEventListener('click', obtenerDatos);

function obtenerDatos(){

    const url = 'data/datos.txt';

    fetch(url)  //fetch ya maneja los resolve y reject
        .then(respuesta => {
            console.log(respuesta);
            console.log(respuesta.status);
            console.log(respuesta.statusText);
            console.log(respuesta.url);
            console.log(respuesta.type);

            return respuesta.text();
        })
        .then(datos => {
            console.log(datos);
        })
        .catch(error => {   //por ejemplo, si no encuentra el archivo
            console.log(error);
        })
}