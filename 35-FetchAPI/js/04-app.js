const cargarAPIBtn = document.querySelector('#cargarAPI');
cargarAPIBtn.addEventListener('click', cargarDatos);

function cargarDatos(){

    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => console.log(resultado))
        .catch(error => console.log(error))
}