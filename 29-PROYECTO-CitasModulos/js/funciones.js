import Notificacion from "./classes/Notificacion.js ";
import AdminCitas from "./classes/AdminCitas.js";
import { setEditando, citaObj, getEditando } from "./variables.js";
import { mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario, formularioInput } from "./selectores.js"

const citas = new AdminCitas();

export function datosCita(e){
    citaObj[e.target.name] = e.target.value;
}

export function submitCita(e){
    e.preventDefault();
    
    /////////////////////////////////////////////
    if(Object.values(citaObj).some(valor => valor.trim()==='')){    //revisa todos los valores del objeto y verficia si alguno tiene un campo vacío
        new Notificacion({texto : 'Todos los campos son obligatorios', tipo : 'error'});
        return;
    }

    if(telefono<=0 || !isNaN(telefono)){
        return;
    }

    if(getEditando()){
        citas.editarCita({...citaObj});
    }else{
        citas.agregarCita({...citaObj});

        new Notificacion({
            texto: 'Paciente Registrado',
            tipo: 'exito'
        });
    }

    formulario.reset();
    reiniciarObjetoCita();
    formularioInput.value = 'Guardar Cita';
}

export function reiniciarObjetoCita(){ 
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

export function generarId(){
    return Math.random().toString(36).substring(2) + Date.now();
}

export function cargarEdicion(e, elementoCita){ 
    ///////////////////////////////
    Object.assign(citaObj, elementoCita);

    mascotaInput.value = elementoCita.mascota;
    propietarioInput.value = elementoCita.propietario;
    telefonoInput.value = elementoCita.telefono;
    fechaInput.value = elementoCita.fecha;
    horaInput.value = elementoCita.hora;
    sintomasInput.value = elementoCita.sintomas;

    setEditando(true);

    formularioInput.value = 'Guardar cambios';
}