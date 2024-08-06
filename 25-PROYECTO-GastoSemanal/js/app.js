//variables y selectores
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

let presupuesto;


//eventos
eventListeners();

function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    document.addEventListener('submit', agregarGasto);
}


//clases
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos, gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce((total, gasto) => {
            return total + gasto.cantidad; //el total se va calculando con los valores de cantidad que pertenecen a gasto, se inicializa en 0
        }, 0);
        this.restante = this.presupuesto - gastado;

        /*
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);    //sin llaves
        this.restante = this.presupuesto - gastado;
        */
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter( (gasto) => {
            return gasto.id !== id;
        });

        this.calcularRestante();
    }
}

class UI{
    insertarPresupuesto(objetoPresupuesto){
        const {presupuesto, restante} = objetoPresupuesto;
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        const divPrevio = document.querySelector('.primario #mensajeDeAlerta');
        if(divPrevio)
            divPrevio.remove();
        
        const divMensaje = document.createElement('div');

        divMensaje.id = 'mensajeDeAlerta';
        divMensaje.textContent = mensaje;
        divMensaje.classList.add('text-center', 'alert');
        
        switch(tipo){
            case 'error':
                divMensaje.classList.add('alert-danger');
                break;
            default:
                divMensaje.classList.add('alert-success');
                break;
        }

        document.querySelector('.primario').insertBefore(divMensaje, formulario);

        setTimeout(() => {
            divMensaje.remove();
        },3000);
    }

    mostrarGastos(gastos){

        this.limpiarHTML();

        //iterar sobre los gastos
        gastos.forEach((gasto) => {
            const {cantidad, nombre, id} = gasto;

            //crear un li
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';  //classList reporta qué clases hay y se agrega con .add y .remove classList es de tipo DOMTokenList y Proporciona métodos para manipular las clases de un elemento de manera individual, className reporta las clases que hay y se puede utilizar = '' className es de tipo string y Se usa para obtener o establecer todas las clases de un elemento como una sola cadena de texto
            //nuevoGasto.setAttribute('data-id', id); //agrega la propiedad data-id <li class="list-group-item d-flex j…ween align-items-center" data-id="1720551044008">
            //se recomienda ahora usar
            nuevoGasto.setAttribute.id = id;    //hace lo mismo que nuevoGasto.setAttribute('data-id', id)
            
            //agregar el HTml del gasto
            nuevoGasto.innerHTML = `${nombre} <span class = "badge badge-primary badge-pill">$ ${cantidad}</span>          
            `;
            
            //botón para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger', 'borrar-gasto');   //ver la diferencia de cómo se agrega con className y con classList
            btnBorrar.textContent = 'Borrar';
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }

            nuevoGasto.appendChild(btnBorrar);

            gastoListado.appendChild(nuevoGasto);
        });
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    limpiarHTML(){
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    comprobarPresupuesto(objPresupuesto){
        const {presupuesto, restante} = objPresupuesto;

        const restanteDiv = document.querySelector('.restante');

        //comprobar 25%
        if((presupuesto/4)>restante){
            restanteDiv.classList.remove('alert-success', 'alert-warning');
            restanteDiv.classList.add('alert-danger');
        } else if((presupuesto/2)>restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
        }

        if(restante<=0){
            ui.imprimirAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

const ui = new UI();


//funciones

function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('Cuál es tu presupuesto?');

    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario<=0){
        window.location.reload();
        //Number(variable) //convierte tipos de datos a enteros o variables, si son letras se genera NaN
        //parseInt(variable)    //solo convierte a entero y si no se puede devuelve null
    }
    
    presupuesto = new Presupuesto(presupuestoUsuario);

    ui.insertarPresupuesto(presupuesto);
    
}

function agregarGasto(e){
    e.preventDefault();

    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if(nombre === '' || cantidad === ''){
        ui.imprimirAlerta('ambos campos son obligatorios', 'error');
        return;
    } else if(cantidad<=0 || isNaN(cantidad)){
        ui.imprimirAlerta('cantidad no válidad', 'error');
        return;
    }

    //generar gasto
    const gasto = {nombre, cantidad, id:Date.now()}    //esto es lo contrario a destructuring, une nombre y cantidad a gasto y se lec conoce como object literal enhancement
    //es lo mismo a poner
    /*
        const gasto = {
            nombre : nombre,    //como son iguales solo se puede poner nombre,
            cantidad : cantidad,
            id : Date.now()
        }
     */

    //anade nuevo gasto
    presupuesto.nuevoGasto(gasto);
    
    ui.imprimirAlerta('gasto agregado correctamente');

    //imprimir los gastos
    const {gastos, restante} = presupuesto;
    
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    formulario.reset();
}

function eliminarGasto(id){
    presupuesto.eliminarGasto(id);

    const {gastos, restante} = presupuesto;

    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
}