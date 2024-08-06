(function(){

    let DB;
    const formulario = document.querySelector('#formulario');

    document.addEventListener('DOMContentLoaded', () => {
        conectarDB();

        formulario.addEventListener('submit', validarCliente);
    });

    function conectarDB(){
        const abrirConexion = window.indexedDB.open('crm', 1);

        abrirConexion.onerror = function(){
            console.log('Hubo un error creando la BD...');
        }

        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result;
        }
    }

    function validarCliente(e){
        e.preventDefault();
        
        //leer todos los inputs
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            imprimirAlerta('Los campos no pueden estar vacíos', 'error');
            return;
        }

        //creando el objeto qe se va a guardar

        const cliente = {
            nombre, email, telefono, empresa,    //nombre: nombre, email:email, telefono: telefono, empresa:empresa
            id: Date.now()
        }

        crearNuevoCliente(cliente);

    }

    function crearNuevoCliente(cliente){
        const transaction = DB.transaction(['crm'], 'readwrite');
        const objectStore = transaction.objectStore('crm');
        const addRequest = objectStore.add(cliente);


        addRequest.onerror = function(e){   //Este manejador de errores se activa si hay un problema específico con la solicitud de añadir el objeto. Por ejemplo, si intentas agregar un objeto con una clave que ya existe en el almacén de objetos, addRequest.onerror se activará con un error que dice "Key already exists in the object store", en este caso va a mostrar lo mismo que transaction error porque se ha agergado una restricción en app.js de objectStore.createIndex('email', 'email', {unique: true});
            // console.log(e.target);
            // imprimirAlerta(e.target.error.message, 'error');
        }

        //para addRequest se usaría onsuccess

        transaction.onerror = function(e){  //representa la transacción completa que puede involucrar múltiples operaciones de solicitud (requests) como add, put, delete, etc. en uno o más almacenes de objetos. Este manejador de errores se activa si hay un problema con la transacción en su conjunto. Esto puede ser debido a que una de las operaciones individuales falló (como un add que falló), o podría ser por un problema más amplio que afecta a toda la transacción
            imprimirAlerta('error al guardar en base de datos...', 'error');
        };

        transaction.oncomplete = function(){    //se usa oncomplete por ser una transacion
            imprimirAlerta('Guardado correctamente', 'success');
            console.log(cliente);
            // setTimeout(() => {
            //     window.location.href = 'index.html';
            // }, 3000);
        };
    }

    function imprimirAlerta(mensaje, tipoMensaje){
        if(!document.querySelector('#alerta')){
            const divMensaje = document.createElement('div');

            divMensaje.id = 'alerta';

            divMensaje.innerHTML = `
                <p>${mensaje}</p>
            `;

            divMensaje.classList.add('px-4', 'py-3', 'rounded', 'ma-w-lg', 'mx-auto', 'mt-6', 'text-center', 'border');

            if(tipoMensaje === 'error'){
                divMensaje.classList.add('bg-red-100', 'border-red-400', 'text-red-700');
            }else{
                divMensaje.classList.add('bg-green-100', 'border-green-400', 'text-green-700');
            }

            formulario.appendChild(divMensaje);

            setTimeout(() => {
                divMensaje.remove();
            }, 3000);
        }
    }

})();