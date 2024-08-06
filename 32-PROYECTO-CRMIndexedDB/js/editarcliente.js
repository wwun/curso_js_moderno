(function(){
    
    let DB;
    let idCliente;
    const formulario = document.querySelector('#formulario');
    
    document.addEventListener('DOMContentLoaded', () =>{
        cargarDatos();

        formulario.addEventListener('submit', guardarCliente);
    });

    function cargarDatos(){

        const params = new URLSearchParams(window.location.search); //
        //window.location.search devuelve la parte de la URL que incluye los parámetros de consulta, comenzando con el signo de interrogación (?)
        //new URLSearchParams(window.location.search) crea un nuevo objeto URLSearchParams que permite trabajar con los parámetros de consulta de una manera fácil y estructurada
        //ew URLSearchParams(window.location.search) devuelve una instancia del objeto URLSearchParams. Este objeto no es un array ni un map, pero proporciona métodos similares para trabajar con los parámetros de la URL
        //get(name): Devuelve el primer valor asociado con el parámetro de nombre dado
        //getAll(name): Devuelve todos los valores asociados con el parámetro de nombre dado console.log(params.getAll('id')); // ["123", "456"]
        //has(name): Devuelve true si el parámetro con el nombre dado existe console.log(params.has('id')); // true
        //set(name, value): Establece el valor del parámetro dado. Si el parámetro ya existe, se actualiza su valor; de lo contrario, se agrega params.set('name', 'Jane'); console.log(params.toString()); // "id=123&name=Jane"
        //append(name, value): Agrega un nuevo valor al parámetro dado sin eliminar los valores existentes params.append('id', '456'); console.log(params.toString()); // "id=123&name=John&id=456"
        //delete(name): Elimina el parámetro con el nombre dado y todos sus valores params.delete('name'); console.log(params.toString()); // "id=123"

        if(params.size>0){    //si tiene parámetros
            idCliente = Number(params.get('id'));   //si no encuentra el parámetro id, devuelve 0
        }        
                
        const conexion = window.indexedDB.open('crm', 1);

        conexion.onerror = function(){
            console.log('error al conectarse a la base de datos...');
        }

        conexion.onsuccess = function(){
            DB = conexion.result;
            
            const transaction = DB.transaction('crm', 'readonly');
            transaction.onerror = function(e){console.log(e.target.error.message); return;}

            const objectStore = transaction.objectStore('crm');
            objectStore.onerror = function(e){console.log(e.target.error.message); return;}

            objectStore.openCursor().onsuccess = function(e){
                const cursor = e.target.result;
                
                if(cursor){
                    
                    const {nombre, email, telefono, empresa, id} = cursor.value;
                    
                    if(idCliente === id){   //idCliente ya se está alamcenando como número para qe se pueda comparar
                        document.querySelector('#nombre').value = nombre;
                        document.querySelector('#email').value = email;
                        document.querySelector('#telefono').value = telefono;
                        document.querySelector('#empresa').value = empresa;
                    }
                    cursor.continue();  //
                }
            }
        }
        
    }

    function guardarCliente(e){
        e.preventDefault();
        
        if(idCliente==='' || DB===undefined){
            console.log('No hay cliente asociado');
            return;
        }
        
        const transaction = DB.transaction(['crm'], 'readwrite');
        transaction.onerror = function(){console.log('error en transaction');};

        const objectStore = transaction.objectStore('crm');

        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;

        if(nombre === '' || email === '' || telefono === '' || empresa === ''){
            console.log('los campos no pueden estar vacíos');
            return;
        }

        const clienteActualizado = {id: idCliente, nombre, email, telefono, empresa};   //idCliente se debe almacenar como número porqe el keyPath del objeto se está creando como número, si se envía string va a devolver un error

        const addRequest = objectStore.put(clienteActualizado);

        addRequest.onsuccess = function(){
            console.log('actualizado con éxito');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 2000);
        }

        addRequest.onerror = function(event){
            console.log(`error: ${event.target.error.message}`);
        }
        
        objectStore.onsuccess = function(){}

        objectStore.onerror = function(event){console.log(`error: ${event.target.error.message}`)};
    }
})();