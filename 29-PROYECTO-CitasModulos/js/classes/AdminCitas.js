import { contenedorCitas } from "../selectores.js";
import { cargarEdicion } from "../funciones.js";
import { setEditando } from "../variables.js";


export default class AdminCitas{
    constructor(){
        this.citas = [];
    }
    agregarCita(cita){
        this.citas.push(cita);
        this.mostrarCita();
    }
    editarCita(citaActualizada){
        this.citas = this.citas.map( elementoCita => elementoCita.id === citaActualizada.id ? citaActualizada : elementoCita);
        this.mostrarCita();
        setEditando(false);
    }
    eliminarCita(id){
        console.log('id ',id);
        this.citas = this.citas.filter(cita => cita.id !== id)
        this.mostrarCita();
    }
    mostrarCita(){
        while(contenedorCitas.firstChild){
            contenedorCitas.removeChild(contenedorCitas.firstChild);
        }

        this.citas.forEach(elementoCita => {
            const divCita = document.createElement('div');
            divCita.classList.add('mx-5', 'my-3', 'bg-white', 'shadow', 'px-5', 'py-3', 'rounded');

            // Crear el elemento para el nombre de la mascota
            const mascota = document.createElement('p');
            mascota.classList.add('fw-normal', 'mb-3', 'text-dark');
            mascota.innerHTML = `<span class="fw-bold text-uppercase">Paciente: </span> ${elementoCita.mascota}`;

            // Crear el elemento para el propietario
            const propietario = document.createElement('p');
            propietario.classList.add('fw-normal', 'mb-3', 'text-dark');
            propietario.innerHTML = `<span class="fw-bold text-uppercase">Propietario: </span> ${elementoCita.propietario}`;

            // Crear el elemento para el email
            const telefono = document.createElement('p');
            telefono.classList.add('fw-normal', 'mb-3', 'text-dark');
            telefono.innerHTML = `<span class="fw-bold text-uppercase">E-mail: </span> ${elementoCita.telefono}`;

            // Crear el elemento para la fecha
            const fecha = document.createElement('p');
            fecha.classList.add('fw-normal', 'mb-3', 'text-dark');
            fecha.innerHTML = `<span class="fw-bold text-uppercase">Fecha: </span> ${elementoCita.fecha}`;

            // Crear el elemento para la hora
            const hora = document.createElement('p');
            hora.classList.add('fw-normal', 'mb-3', 'text-dark');
            hora.innerHTML = `<span class="fw-bold text-uppercase">Hora: </span> ${elementoCita.hora}`;

            // Crear el elemento para los síntomas
            const sintomas = document.createElement('p');
            sintomas.classList.add('fw-normal', 'mb-3', 'text-dark');
            sintomas.innerHTML = `<span class="fw-bold text-uppercase">Síntomas: </span> ${elementoCita.sintomas}`;

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
            divCita.appendChild(mascota);
            divCita.appendChild(propietario);
            divCita.appendChild(telefono);
            divCita.appendChild(fecha);
            divCita.appendChild(hora);
            divCita.appendChild(sintomas);
            divCita.appendChild(contenedorBotones);
            
            // Agregar el div de la cita al contenedor
            contenedorCitas.appendChild(divCita);

            //////////////////////////////////////////
            btnEditar.addEventListener('click', function(e){
                cargarEdicion(e, {...elementoCita});
            });

            //también puede ser así
            // btnEditar.addEventListener('click', (e) => {
            //     cargarEdicion(e, {...elementoCita});
            // });

            //////////////////////////////////////////
            btnEliminar.addEventListener('click', (e) => {
                this.eliminarCita(elementoCita.id);
            });


            /*
            Usa una función de flecha (=>) cuando necesitas que this se refiera al contexto en el que la función fue definida, como es el caso de métodos de una clase (this.eliminarCita).
            Usa una función tradicional (function) cuando necesitas que this se refiera al elemento al que se añadió el evento, o si no necesitas referenciar this en absoluto.
            */
        });
    }
}