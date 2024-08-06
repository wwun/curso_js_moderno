import { eliminarElemento } from "./utilitarios.js";

//selectores
const mascotaInput = document.querySelector('#mascota');
const propietarioInput = document.querySelector('#propietario');
const telefonoInput = document.querySelector('#telefono');
const fechaInput = document.querySelector('#fecha');
const horaInput = document.querySelector('#hora');
const sintomasInput = document.querySelector('#sintomas');

const formulario = document.querySelector('#nueva-cita');
const formularioInput = document.querySelector('#nueva-cita button[type="submit"]');

const contenedorCitas = document.querySelector('#citas');

let editando = false;
let DB;
let citas;

//Objetos
const citaObj = {
    id: generarId(),
    mascota: '',
    propietario: '',
    telefono: '',
    fecha: '',
    hora: '',
    sintomas: ''
}

//clases

class Notificacion{
    constructor({texto, tipo}){
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }
    mostrar(){
        const alerta = document.createElement('DIV');
        
        alerta.classList.add('text-center', 'text-white', 'p-2', 'my-5', 'font-weight-bold', 'text-sm', 'alert');

        const alertaPrevia = document.querySelector('.alert');
        ///////////////////
        alertaPrevia?.remove(); //if(alertaPrevia){
        
        this.tipo === 'error' ? alerta.classList.add('bg-danger') : alerta.classList.add('bg-success');

        alerta.textContent = this.texto;

        //formulario.parentElement.insertBefore(alerta, formulario);
        formulario.insertBefore(alerta, formulario.childNodes[2]);  //formulario.insertBefore(alerta, formulario.children[1]);  //childNodes returns child nodes (element nodes, text nodes, and comment nodes). children returns child elements (not text and comment nodes)

        //quitar después de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

class AdminCitas{
    constructor(){
        this.citas = [];
    }
    agregarCita(cita){
        this.citas.push(cita);
    }
    editarCita(citaActualizada){
        //este no se ha cambiado porque es la única funcionalidad que carga los datos desde lo que se tiene en memoria, cuando se agrega, se guarda lo edita y se elimina se trabaja directamente con IndexDB
        this.citas = this.citas.map( elementoCita => elementoCita.id === citaActualizada.id ? citaActualizada : elementoCita);

        const transaction = DB.transaction(['citas'], 'readwrite');
        const objectStore = transaction.objectStore('citas');
        objectStore.put(citaActualizada);

        this.mostrarCita();
        editando = false;
    }
    eliminarCita(id){
        
        this.citas = eliminarCita(this.citas, id);
        
    }
    mostrarCita(){

        //queda pendiente que los objetos se carguen a la lista citas
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        console.log('contenedorCitas: ',contenedorCitas.firstChild);

        //leer el contenido desde la base de datos
        const objectStore = DB.transaction('citas').objectStore('citas'); //const objectStore = DB.transaction(['citas'], 'readonly').objectStore('citas'); //es lo mismo (por defecto es readonly) y puede ir sin paréntesis [citas]
        objectStore.openCursor().onsuccess = function(e){   //openCursor es un iterador, es como el forEach pero IndexDB
            
            const cursor = e.target.result;
            
            if(cursor){

                const elementoCita = cursor.value;  //si se pone cursor.value dentro de btnEditar.addEventListener va a enviar undefined, ese valor va a estar vacío, este valor se debe almacenar en una variable
                //Es como si el alcance fuera solo para este método sin incluir a los métodos que hay dentro de este mismo

                const {id, mascota, propietario, telefono, fecha, hora, sintomas} = cursor.value;                
                
                const divCita = document.createElement('div');
                divCita.classList.add('mx-5', 'my-3', 'bg-white', 'shadow', 'px-5', 'py-3', 'rounded');

                // Crear el elemento para el nombre de la mascota
                const mascotaInputTmp = document.createElement('p');
                mascotaInputTmp.classList.add('fw-normal', 'mb-3', 'text-dark');
                mascotaInputTmp.innerHTML = `<span class="fw-bold text-uppercase">Paciente: </span> ${mascota}`;

                // Crear el elemento para el propietario
                const propietarioInputTmp = document.createElement('p');
                propietarioInputTmp.classList.add('fw-normal', 'mb-3', 'text-dark');
                propietarioInputTmp.innerHTML = `<span class="fw-bold text-uppercase">Propietario: </span> ${propietario}`;

                // Crear el elemento para el email
                const telefonoInputTmp = document.createElement('p');
                telefonoInputTmp.classList.add('fw-normal', 'mb-3', 'text-dark');
                telefonoInputTmp.innerHTML = `<span class="fw-bold text-uppercase">E-mail: </span> ${telefono}`;

                // Crear el elemento para la fecha
                const fechaInputTmp = document.createElement('p');
                fechaInputTmp.classList.add('fw-normal', 'mb-3', 'text-dark');
                fechaInputTmp.innerHTML = `<span class="fw-bold text-uppercase">Fecha: </span> ${fecha}`;

                // Crear el elemento para la hora
                const horaInputTmp = document.createElement('p');
                horaInputTmp.classList.add('fw-normal', 'mb-3', 'text-dark');
                horaInputTmp.innerHTML = `<span class="fw-bold text-uppercase">Hora: </span> ${hora}`;

                // Crear el elemento para los síntomas
                const sintomasInputTmp = document.createElement('p');
                sintomasInputTmp.classList.add('fw-normal', 'mb-3', 'text-dark');
                sintomasInputTmp.innerHTML = `<span class="fw-bold text-uppercase">Síntomas: </span> ${sintomas}`;

                const contenedorBotones = document.createElement('div');
                contenedorBotones.classList.add('d-flex', 'gap-2');

                const btnEditar = document.createElement('button');
                btnEditar.id = 'btnEditar';
                btnEditar.classList.add('btn', 'btn-primary', 'd-flex', 'align-items-center', 'gap-2');
                btnEditar.innerHTML = `Editar <svg fill="none" class="bi bi-pencil-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"> <path d="M12.854.146a.5.5 0 0 1 .354.854l-9.49 9.49-.715.715H2.5v-1.086l.715-.715 9.49-9.49a.5.5 0 0 1 .354-.146zm-1 1.5-9.5 9.5H2v-.354l9.5-9.5.354-.354z"/> </svg>`;

                const btnEliminar = document.createElement('button');
                btnEliminar.id = 'btnEliminar';
                btnEliminar.classList.add('btn', 'btn-danger', 'd-flex', 'align-items-center', 'gap-2');
                btnEliminar.innerHTML = `Eliminar <svg fill="none" class="bi bi-trash-fill" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"> <path d="M2.5 1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v1H2.5V1zm1 3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4zm3.5 1a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V5zm3 0a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V5z"/> </svg>`;

                contenedorBotones.appendChild(btnEditar);
                contenedorBotones.appendChild(btnEliminar);

                // Agregar los elementos al div de la cita
                divCita.appendChild(mascotaInputTmp);
                divCita.appendChild(propietarioInputTmp);
                divCita.appendChild(telefonoInputTmp);
                divCita.appendChild(fechaInputTmp);
                divCita.appendChild(horaInputTmp);
                divCita.appendChild(sintomasInputTmp);
                divCita.appendChild(contenedorBotones);
                
                // Agregar el div de la cita al contenedor
                contenedorCitas.appendChild(divCita);

                //////////////////////////////////////////
                btnEditar.addEventListener('click', function(e){
                    cargarEdicion(e, elementoCita);
                });

                //////////////////////////////////////////
                btnEliminar.addEventListener('click', function(e){
                    eliminarCita(e, elementoCita.id);
                });


                /*
                Usa una función de flecha (=>) cuando necesitas que this se refiera al contexto en el que la función fue definida, como es el caso de métodos de una clase (this.eliminarCita).
                Usa una función tradicional (function) cuando necesitas que this se refiera al elemento al que se añadió el evento, o si no necesitas referenciar this en absoluto.
                */

                cursor.continue();
            }
        };
    }
}

//eventos

// document.addEventListener('DOMContentLoaded', (e) => {
//     formulario.reset();
// });

window.onload = () => {
    formulario.reset();
    eventListeners();
    citas = new AdminCitas();
    crearDB();  //aqí se cargará la info para ser mostrada también
}

//eventListeners();

function eventListeners(){
    mascotaInput.addEventListener('change', datosCita);

    propietarioInput.addEventListener('change', datosCita);

    telefonoInput.addEventListener('change', datosCita);

    fechaInput.addEventListener('change', datosCita);

    horaInput.addEventListener('change', datosCita);

    sintomasInput.addEventListener('change', datosCita);

    formulario.addEventListener('submit', submitCita);
}

//funciones

console.log('citas: ',citas);

function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}



function submitCita(e){
    e.preventDefault();
    
    /////////////////////////////////////////////
    if(Object.values(citaObj).some(valor => valor.trim()==='')){    //revisa todos los valores del objeto y verficia si alguno tiene un campo vacío
        new Notificacion({texto : 'Todos los campos son obligatorios', tipo : 'error'});
        return;
    }

    if(telefono<=0 || !isNaN(telefono)){
        return;
    }

    if(editando){
        citas.editarCita({...citaObj});
    }else{
        citas.agregarCita({...citaObj});

        //DB
        //if(DB.objectStoreNames.contains('citas')){}
        const transaction = DB.transaction(['citas'], 'readwrite');
        //console.log('transaction value: ', transaction);

        const objectStore = transaction.objectStore('citas');
        //console.log('objectStore value: ', objectStore);

        objectStore.add(citaObj);

        transaction.oncomplete = function(){
            //console.log('cita agregada');

            new Notificacion({
                texto: 'Paciente Registrado',
                tipo: 'exito'
            });
        }
        //Fin DB
        citas.mostrarCita();
    }

    formulario.reset();
    reiniciarObjetoCita();
    formularioInput.value = 'Guardar Cita';
}

function reiniciarObjetoCita(){
    // citaObj.id = generarId();
    // citaObj.mascota = '';
    // citaObj.propietario = '';
    // citaObj.telefono = '';
    // citaObj.fecha = '';
    // citaObj.hora = '';
    // citaObj.sintomas = '';

    //otra manera

    Object.assign(citaObj, {
        id: generarId(),
        mascota: '',
        propietario: '',
        telefono: '',
        fecha: '',
        hora: '',
        sintomas: ''
    });
}

function generarId(){
    return Math.random().toString(36).substring(2) + Date.now();
}

function cargarEdicion(e, elementoCita){
    ///////////////////////////////
    Object.assign(citaObj, elementoCita);
    
    mascotaInput.value = elementoCita.mascota;
    propietarioInput.value = elementoCita.propietario;
    telefonoInput.value = elementoCita.telefono;
    fechaInput.value = elementoCita.fecha;
    horaInput.value = elementoCita.hora;
    sintomasInput.value = elementoCita.sintomas;

    editando = true;

    formularioInput.value = 'Guardar cambios';
}

function eliminarCita(e, id){
    const transaction = DB.transaction(['citas'], 'readwrite');
    const objectStore = transaction.objectStore('citas');
    objectStore.delete(id);

    eliminarElemento(citas.citas, id);

    objectStore.oncomplete = () => {
        console.log('Eliminado correctamente');
        citas.mostrarCita();
    }

    objectStore.onerror = () => {
        console.log('Hubo un error al eliminar');
    }

    citas.mostrarCita();
    
}

function crearDB(){
    const crearDB = window.indexedDB.open('citas', 1);

    crearDB.onerror = function(){
        console.log('Hubo un error al crear la base de datos');
    }

    crearDB.onsuccess = function(){
        console.log('DB creada');        
        DB = crearDB.result;    //asigna la base de datos creada a una variable global
        citas.mostrarCita();
    }

    crearDB.onupgradeneeded = function(e){
        const db = e.target.result; 

        const objectStore = db.createObjectStore('citas', {
            keyPath: 'id',  //cómo se va a hacer las búsqedas o acceder a
            autoIncrement: true
        });

        objectStore.createIndex('mascota', 'mascota', {unique: false});
        objectStore.createIndex('propietario', 'propietario', {unique: false});
        objectStore.createIndex('telefono', 'telefono', {unique: false});
        objectStore.createIndex('fecha', 'fecha', {unique: false});
        objectStore.createIndex('hora', 'hora', {unique: false});
        objectStore.createIndex('sintomas', 'sintomas', {unique: false});
        objectStore.createIndex('id', 'id', {unique: true});

        console.log('DB creada');
    }
}