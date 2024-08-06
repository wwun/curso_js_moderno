import {mascotaInput, propietarioInput, telefonoInput, fechaInput, horaInput, sintomasInput, formulario } from "./selectores.js"
import {datosCita, submitCita } from "./funciones.js"

//eventos

document.addEventListener('DOMContentLoaded', (e) => {
    formulario.reset();
});

mascotaInput.addEventListener('change', datosCita);

propietarioInput.addEventListener('change', datosCita);

telefonoInput.addEventListener('change', datosCita);

fechaInput.addEventListener('change', datosCita);

horaInput.addEventListener('change', datosCita);

sintomasInput.addEventListener('change', datosCita);

formulario.addEventListener('submit', submitCita);

