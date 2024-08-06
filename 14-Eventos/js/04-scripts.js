const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault(); //para la acción de un evento para realizar otras tareas
    console.log('Buscando');
    console.log(e.target.action);
}