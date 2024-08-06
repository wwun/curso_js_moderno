const criptomonedasSelect = document.querySelector('#criptomonedas');
const monedaSelect = document.querySelector('#moneda');
const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');

const objBusqueda = {
    moneda : '',
    criptomoneda : ''
}

//crear promise
const obtenerCriptomonedas = criptomonedas =>  new Promise(resolve => { //es como () => {}
    resolve(criptomonedas);
})

document.addEventListener('DOMContentLoaded', () => {
    consultarCriptomonedas();

    monedaSelect.selectedIndex = 0;
    criptomonedasSelect.selectedIndex = 0;

    criptomonedasSelect.addEventListener('change', leerValor);
    monedaSelect.addEventListener('change', leerValor);

    formulario.addEventListener('submit', submitFormulario);
});

async function consultarCriptomonedas(){
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(resultado => obtenerCriptomonedas(resultado.Data))
    //     .then(criptomonedas => selectCriptomonedas(criptomonedas))
    
    try{
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        const criptomonedas = await obtenerCriptomonedas(resultado.Data);
        selectCriptomonedas(criptomonedas);
    }catch(error){
        console.log(error);
    }
}

function selectCriptomonedas(criptomonedas){
    criptomonedas.forEach(cripto => {
        const {FullName, Name} = cripto.CoinInfo;

        const option = document.createElement('option');
        option.value = Name;
        option.textContent = FullName;
        criptomonedasSelect.appendChild(option);
    })
}

function submitFormulario(e){
    e.preventDefault();

    const {moneda, criptomoneda} = objBusqueda;

    if(moneda === '' || criptomoneda === ''){
        mostrarAlerta('ambos campos son obligatorios');
        return;
    }

    consultarAPI();
}

function leerValor(e){
    objBusqueda[e.target.name] = e.target.value;
}

function mostrarAlerta(mensaje){

    const existeError = document.querySelector('.error');
    console.log('error: ',existeError);

    if(!existeError){
        const divMensaje = document.createElement('div');
        
        divMensaje.textContent = mensaje;
        divMensaje.classList.add('error');
        formulario.appendChild(divMensaje);

        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }
}

async function consultarAPI(){
    const {moneda, criptomoneda} = objBusqueda;
    
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();

    // fetch(url)
    //     .then(respuesta => respuesta.json())
    //     .then(cotizacion => mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda]));

    try{
        const respuesta = await fetch(url);
        const cotizacion = await respuesta.json();
        mostrarCotizacion(cotizacion.DISPLAY[criptomoneda][moneda]);
    }catch(error){
        console.log(error);
    }
}

function mostrarCotizacion(cotizacion){

    limpiarHTML();

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `El precio es: <span>${PRICE}</span>`;

    const precioAlto = document.createElement('p');
    precioAlto.innerHTML = `precio más alto del día: <span>${HIGHDAY}</span>`;

    const precioBajo = document.createElement('p');
    precioBajo.innerHTML = `precio más bajo del día: <span>${LOWDAY}</span>`;

    const ultimasHoras = document.createElement('p');
    ultimasHoras.innerHTML = `variación últimas 24 horas: <span>${CHANGEPCT24HOUR}</span>`;

    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `última actualización: <span>${LASTUPDATE}</span>`;

    resultado.appendChild(precio);
    resultado.appendChild(precioAlto);
    resultado.appendChild(precioBajo);
    resultado.appendChild(ultimasHoras);
    resultado.appendChild(ultimaActualizacion);
}

function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

function mostrarSpinner(){
    limpiarHTML();

    const spinner = document.createElement('div');
    spinner.classList.add('spinner');

    spinner.innerHTML =`
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    `;

    resultado.appendChild(spinner);
}