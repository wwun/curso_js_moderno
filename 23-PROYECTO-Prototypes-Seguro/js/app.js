
//constructores
function Seguro(marca, year, tipo){    //es necesario crear los constructores para usar prototype
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//realiza la cotización con los datos
//en este caso no se usa arrow function porque no se debe acceder a los datos del objeto
Seguro.prototype.cotizarSeguro = function(){

    let cantidad = 0;
    const base = 2000;
    //1 Americano incrementa el valor en 1.15
    //2 Asiatico incrementa el valor en 1.05
    //3 Europero incrementa el valor en 1.35

    switch(this.marca){
        case '1':
            cantidad = base * 1.15;
            break;
        case '2':
            cantidad = base * 1.05;
            break;
        case '3':
            cantidad = base * 1.35;
            break;
        default:
            break;
    }

    //leer el anio

    cantidad *= (1-((new Date().getFullYear()-this.year)*0.03));
    //cada anio que la diferencia es mayor, el costo va a reducirse en 3%

    //si el seguro es básico, se multiplica por 30%
    //si el seguro es completo, se multiplica por 50%

    switch(this.tipo){
        case 'basico':
            cantidad *= 1.3;
            break;
        case 'completo':
            cantidad *= 1.5;
            break;
        default:
            break;
    }

    return cantidad;
};

function UI(){}

UI.prototype.llenarOpciones = () =>{
    const max = new Date().getFullYear();
    const min = max - 20;

    const selectYear = document.querySelector('#year');

    for(let i=max; i>min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selectYear.appendChild(option);
    }
}

//muestra alertas en pantalla
UI.prototype.mostrarMensaje = (mensaje, tipo) => {
    const div = document.createElement('div');
    
    if(tipo==='error'){
        div.classList.add('mensaje','error');
    }else{
        div.classList.add('mensaje','correcto');
    }

    div.classList.add('mensaje', 'mt-10');
    div.textContent = mensaje;
    
    const formulario = document.querySelector('#cotizar-seguro');
    limpiarContainerPorElemento(formulario, 'mensajeEnPantalla');

    div.id = 'mensajeEnPantalla';
    
    formulario.insertBefore(div, document.querySelector('#resultado'));  //nuevoNodo, nodoDeReferenciaDondeSeVaAInsertar

    setTimeout(() => {
        div.remove();
    }, 3000);
}

UI.prototype.mostrarResultado = ((seguro, total) => {

    const {marca, year, tipo} = seguro;

    let textoMarca;

    switch(marca){
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }
    const div = document.createElement('div');
    div.classList.add('mt-10');
    //textContent cuando no tiene html y innerHTML cuando se quiere agregar un HTML
    div.innerHTML = `
        <p class='header'>Tu resumen</p>
        <p class='font-bold'>Marca: <span class='font-normal'>${textoMarca}</span></p>
        <p class='font-bold'>Anio: <span class='font-normal'>${year}</span></p>
        <p class='font-bold'>Tipo: <span class='font-normal capitalize'>${tipo}</span></p>
        <p class='font-bold'>Total: <span class='font-normal'>${total}</span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');

    eliminarTodosLosElementos(resultadoDiv);

    //mostrar spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div);
    }, 3000);
});

//instancia UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();    //llena los anios
});

addEventListeners();

function addEventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){

    e.preventDefault();

    //leer la marca seleccionada
    const marca = document.querySelector('#marca').value;
    
    //leer el anio seleccionado
    const year = document.querySelector('#year').value;

    //leer el tipo de cobertura
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensaje('todos los campos son obligatorios', 'error');
        return;
    }

    ui.mostrarMensaje('cotizando...', 'exito');

    //instanciar seguro
    const seguro = new Seguro(marca, year, tipo);
    
    //utilizar el prototype que va a cotizar
    const total = seguro.cotizarSeguro();
    ui.mostrarResultado(seguro, total);

}

function limpiarContainerPorElemento(contenedor, idDeElemento){
    const elementos = contenedor.querySelectorAll('div');
    elementos.forEach(element => {
        if(element.id.startsWith('mensajeEnPantalla')){
            element.remove();
        }
    });
}

function eliminarTodosLosElementos(contenedor){
    while(contenedor.firstChild){
        contenedor.removeChild(contenedor.firstChild);
    }
}