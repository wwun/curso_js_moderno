import { generarId } from "./funciones.js";

let editando = false;

/*
//otra opción a get y set y se debe hacer editando.value = valor en los otros archivos donde se está usando esta variable. la ventaja es que solo se exporta editando, citaObj y no más variables
let editando = {
    value: false
}
*/

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

function setEditando(value) {
    editando = value;
}

function getEditando() {
    return editando;
}

export {
    editando,
    citaObj,
    setEditando,
    getEditando
}