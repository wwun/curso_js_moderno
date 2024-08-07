(function(){

    let DB;
    const listadoClientes = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', () => {
        crearDB();

        if(window.indexedDB.open('crm', 1)){
            obtenerClientes();
        }

        listadoClientes.addEventListener('click', eliminarCliente);
    });

    //crea la base de datos de indexDB
    function crearDB(){
        const crearDB = window.indexedDB.open('crm', 1);

        crearDB.onerror = function(){
            console.log('Hubo un error creando la base de datos...');
        };

        crearDB.onsuccess = function(){     //para crear la bd es onsuccess
            console.log('base de datos creada');
            DB = crearDB.result;
        };

        crearDB.onupgradeneeded = function(e){   //función qe se ejecuta una sola vez
            const db = e.target.result;

            const objectStore = db.createObjectStore('crm', {
                keyPath: 'id',
                autoIncrement: true
            })

            objectStore.createIndex('nombre', 'nombre', {unique: false});
            objectStore.createIndex('email', 'email', {unique: true});
            objectStore.createIndex('telefono', 'telefono', {unique: false});
            objectStore.createIndex('empresa', 'empresa', {unique: false});
            objectStore.createIndex('id', 'id', {unique: true});

            console.log('DB creada');
        };
    }

    function obtenerClientes(){
        //abrir conexión
        const abrirConexion = window.indexedDB.open('crm', 1);
        
        abrirConexion.onerror = function(){
            console.log('hubo un error');
        }

        abrirConexion.onsuccess = function(){
            DB = abrirConexion.result;

            const objectStore = DB.transaction(['crm'], 'readonly').objectStore('crm');
            
            objectStore.openCursor().onsuccess = function(e){
                const cursor = e.target.result;
                if(cursor){
                    const {nombre, email, telefono, empresa, id} = cursor.value;
                    
                    listadoClientes.innerHTML += `
                    <tr>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                            <p class="text-sm leading-5 font-medium text-gray-700 text-lg  font-bold"> ${nombre} </p>
                            <p class="text-sm leading-10 text-gray-700"> ${email} </p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 ">
                            <p class="text-gray-700">${telefono}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200  leading-5 text-gray-700">    
                            <p class="text-gray-600">${empresa}</p>
                        </td>
                        <td class="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5">
                            <a href="editar-cliente.html?id=${id}" class="text-teal-600 hover:text-teal-900 mr-5">Editar</a>
                            <a href="#" data-cliente="${id}" class="text-red-600 hover:text-red-900 eliminar">Eliminar</a>
                        </td>
                    </tr>`;

                    cursor.continue();
                }
            }

            objectStore.onerror = function(){
                console.log('error cargando la base de datos');
            }
        }        
    }

    function eliminarCliente(e){
        if(e.target.classList.contains('eliminar')){
            const idEliminar = Number(e.target.dataset.cliente);    //esta es la manera en la qe se accede a los datos personalizados, el botón eliminar está redirigiendo con data-cliente="${id}", por eso va cliente
            const confirmar = confirm('Confirmas tu intención de eliminar este cliente?');

            if(confirmar){
                const transaction = DB.transaction(['crm'], 'readwrite');
                const objectStore = transaction.objectStore('crm').delete(idEliminar);

                transaction.oncomplete = function(){
                    console.log('eliminado!!!');
                    e.target.parentElement.parentElement.remove();
                }

                transaction.onerror = function(event){
                    console.log(`hubo un error ${event.target.error.message}`);
                }
            }
        }
    }
})();   //IFI crea las variables de forma local