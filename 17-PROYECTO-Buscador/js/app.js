
//variables
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

const resultado = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;

//generar un objeto con la búsqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

//eventos
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos); //muestra los autos al cargar

    //lena las opciones de anios
    llenarSelect();
});

//Eventlistener para los select de búsqueda
marca.addEventListener('change', (e) => {   //change es el evento cuando cambia select
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', (e) => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change', (e) => {
    datosBusqueda.minimo = e.target.value;
    filtrarAuto();
});

maximo.addEventListener('change', (e) => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', (e) => {
    datosBusqueda.puertas = parseInt(e.target.value);
    filtrarAuto();
});

transmision.addEventListener('change', (e) => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', (e) => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
    console.log(datosBusqueda);
});

//funciones
function mostrarAutos(autos){
    limpiarHTML();  //elimina el HTML previo
    autos.forEach((auto) => {
        const {marca, modelo, year, puertas, transmision, precio, color} = auto;
        const autoHTML = document.createElement('P');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión ${transmision} - Precio: 
            ${precio} - Color: ${color}
        `;

        //insertar el html
        resultado.appendChild(autoHTML);
    });
}

//limpiar HTML
function limpiarHTML(){
    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}

//genera los anios de select
function llenarSelect(){
    for(let i=max; i>=min; i--){
        const opcion = document.createElement('OPTION');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);
    }
}

//función que filtra con base en la búsqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor);    //filter normalmente se usa con un arrowfunction pero ahora se está usando una función de alto orden, una función que llama otra función
                                                                        //filter crea un nuevo array que incluye solo los elementos para los cuales la función callback devolvió
                                                                        //filter soporta chaining
    if(resultado.length){
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){

    limpiarHTML();

    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No resultado';
    resultado.appendChild(noResultado);
}

function filtrarMarca(auto){
    const {marca} = datosBusqueda;
    if(datosBusqueda.marca){    //si el usuario ha seleccionado una marca, datosBusqueda tiene valores y hay con qué comparar
        return auto.marca === marca;    //devuelve true si auto.marca coincide con datosBusqueda.marca, lo que significa que este auto pasará el filtro
    }
    return auto;    //Para mayor claridad y evitar comportamientos inesperados, podemos ajustar la función filtrarMarca para que siempre devuelva un booleano. Además, si datosBusqueda.marca no tiene un valor, podemos devolver true para incluir todos los autos en ese caso
    //no aplica devolver false por defecto porque si no se ha seleccionado nada se debe mostrar todos los autos
}

function filtrarYear(auto){
    const {year} = datosBusqueda;
    if(year){
        return auto.year === year;
    }
    return auto;
}

function filtrarMinimo(auto){
    const {minimo} = datosBusqueda;
    if(minimo){
        return auto.precio >= minimo;
    }
    return auto;
}

function filtrarMaximo(auto){
    const {maximo} = datosBusqueda;
    if(maximo){
        return auto.precio <= maximo;
    }
    return auto;
}

function filtrarPuertas(auto){
    const {puertas} = datosBusqueda;
    if(puertas){
        return auto.puertas === puertas;
    }
    return auto   
}

function filtrarTransmision(auto){
    const {transmision} = datosBusqueda;
    if(transmision){
        return auto.transmision === transmision;
    }
    return auto
}

function filtrarColor(auto){
    const {color} = datosBusqueda;
    if(color){
        return auto.color === color;
    }
    return auto
}