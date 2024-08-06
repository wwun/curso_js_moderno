document.addEventListener('DOMContentLoaded', function(){

    const email = {
        email: '',
        cc: '',
        asunto: '',
        mensaje: ''
    }

    //Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputCc = document.querySelector('#cc');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');

    //Asignar eventos
    //blur es el evento cuando se abandona un campo
    inputEmail.addEventListener('blur', validar);   //si se pone los paréntesis se estaría llamando a la función, solo con el nombre solo se llama cuando se ejecute el evento
    inputCc.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);  //se puede utilizar input
    inputMensaje.addEventListener('blur', validar);

    formulario.addEventListener('submit', enviarEmail);

    btnReset.addEventListener('click', function(e){
        e.preventDefault();

        resetFormulario();
    });

    //Funciones

    function enviarEmail(e){
        e.preventDefault();
        spinner.classList.add('flex');
        spinner.classList.remove('hidden');

        setTimeout(()=>{
            spinner.classList.remove('flex');
            spinner.classList.add('hidden');

            resetFormulario();

            //crear alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm', 'uppercase');
            alertaExito.textContent = 'Mensaje enviado correctamente';

            formulario.appendChild(alertaExito);

            setTimeout(()=>{
                alertaExito.remove();   
            }, 3000);
        }, 3000);
    }

    function validar(e){
        //console.log(`======= ${e.target.id}`);
        if(e.target.id==='cc'){
            if(e.target.value.trim()!=''){
                validarEmail(e.target.value);
                email[e.target.id] = e.target.value.trim().toLowerCase();
            }
            return;
        }

        if(e.target.value.trim() === ''){
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if(!validarEmail(e.target.value) && e.target.id==="email"){
            mostrarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarALerta(e.target.parentElement);

        //asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        //comprobar el objeto email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia){
        
        limpiarALerta(referencia);

        //Generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        //inyectar el error al formulario
        referencia.appendChild(error);  //agrega un hijo al final de los que ya tiene
        //formulario.innerHTML = error;   //esto reemplaza todo el contenido de formulario
    }

    function limpiarALerta(referencia){
        //Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(){
        if(email.cc=='')    email.cc='valorTemporal';
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
            if(email.cc=='valorTemporal')    email.cc='';
            return;
        }
        btnSubmit.classList.remove('opacity-50');
        btnSubmit.disabled = false;
    }

    function resetFormulario(){
        email.email = "";
        email.cc = "";
        email.asunto = "";
        email.mensaje = "";
        //reinicia el objeto
        formulario.reset();
        comprobarEmail();
    }
});