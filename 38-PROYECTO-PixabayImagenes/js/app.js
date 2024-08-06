//hecho con tw
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');
const paginacionDiv = document.querySelector('#paginacion');

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
    formulario.addEventListener('submit', validarFormulario);
}

function validarFormulario(e){
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value;
    if(terminoBusqueda===''){
        mostrarAlerta('agrega un término de búsqueda');
        return;
    }

    buscarImagenes();
}

function mostrarAlerta(mensaje){

    const existeAlerta = document.querySelector('.bg-red-100');

    if(!existeAlerta){
        const alerta = document.createElement('p');
        alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
            <strong class="font-bold">Error</strong>
            <span class="block sm:inline">${mensaje}</span>
        `;

        formulario.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function buscarImagenes(){
    
    const terminoBusqueda = document.querySelector('#termino').value;
    
    const key = '45147782-33b097ae135f3eaba977b25d3';
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => {
            totalPaginas = calcularPaginas(resultado.totalHits);
            mostrarImagenes(resultado.hits)
        })
}

//generador qe registra la cantidad de elementos de acuerdo a las páginas
function *crearPaginador(){
    for(let i=1; i<=totalPaginas; i++){
        yield i;
    }
}

function calcularPaginas(total){
    return parseInt(Math.ceil(total/registrosPorPagina));
}

function mostrarImagenes(imagenes){

    while(resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }

    imagenes.forEach(elementoImagen => {
        const {previewURL, likes, views, largeImageURL} = elementoImagen;

        resultado.innerHTML += `
            <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
                <div class="bg-white">
                    <img class="w-full" src="${previewURL}">
                    <div class="p-4">
                        <p>${likes} <span>Me gusta</span></p>
                        <p>${views} <span>veces vista</span></p>


                        <a 
                            class="block w-full bg-blue-800 hover:bg-blue-500 text-white uppercase font-bold text-center rounded mt-5 p-1"
                            href="${largeImageURL}" target="_blank" rel="noopener no referrer">
                            Ver Imagen
                        </a>
                    </div>
                </div>
            </div>
        `;

    });

    while(paginacionDiv.firstChild){
        paginacionDiv.removeChild(paginacionDiv.firstChild);
    }

    imprimirPaginador();

}

function imprimirPaginador(){
    iterador = crearPaginador();

    while(true){
        const {value, done} = iterador.next();  //El iterador no empieza con el valor 1 automáticamente. Para obtener el primer valor de 1 del iterador, necesitas llamar al método next()
        
        //si se llega al final ya no se ejecuta nada
        if(done){
            return;
        }

        //genera un botón por cada elemento en el generador
        const boton = document.createElement('a');
        boton.href = '#';   //no va a llevar a ningún lado
        boton.dataset.pagina = value;
        boton.textContent = value;  //muestra los números
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-4', 'py-1', 'mr-2', 'font-bold', 'mb-3', 'uppercase', 'rounded');

        boton.onclick = () => {
            paginaActual = value;
            buscarImagenes();
        }

        paginacionDiv.appendChild(boton);
    }
}