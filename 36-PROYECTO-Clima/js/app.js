const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', buscarClima);
});

function buscarClima(e){
    e.preventDefault();

    const pais = document.querySelector('#pais').value;
    const ciudad = document.querySelector('#ciudad').value;

    if(ciudad === '' || pais === ''){
        mostrarError('ambos países son obligatorios');
        return;
    }

    consultarAPI(pais, ciudad);
}

function mostrarError(mensaje){

    if(!document.querySelector('#alerta')){

        const alerta = document.createElement('div');
        alerta.id = 'alerta';
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');
        alerta.innerHTML = `
            <strong class="font-bold">Error</strong>
            <span class="block">${mensaje}</span>
        `;
        container.appendChild(alerta);
        setTimeout(() => {
            alerta.remove();
        }, 3000);

    }
}

function consultarAPI(pais, ciudad){
    const appId = 'f17006ce2d06ac66f69498495c7db1b7';
    const url = `
    https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}&units=metric
    `;

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML();
            console.log(datos);
            if(datos.cod === "404"){
                mostrarError('Ciudad no encontrada');
                return;
            }

            //imprime la respuesta en el html
            mostrarClima(datos);
        })
        .catch(error => console.log(error));
}

function mostrarClima(datos){
    const {name, main: {temp, temp_max, temp_min}} = datos;

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-2xl');

    const actual = document.createElement('p');
    actual.innerHTML = `${parseInt(temp)} &#8451;`;
    actual.classList.add('font-bold', 'text-6xl');

    const max = document.createElement('p');
    max.innerHTML = `Max: ${parseInt(temp_max)} &#8451;`;
    max.classList.add('text-xl');

    const min = document.createElement('p');
    min.innerHTML = `Min: ${parseInt(temp_min)} &#8451;`;
    min.classList.add('text-xl');

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(actual);
    resultadoDiv.appendChild(max);
    resultadoDiv.appendChild(min);

    resultado.appendChild(resultadoDiv);
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}