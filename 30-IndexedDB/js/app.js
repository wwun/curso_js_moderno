//la diferencia con localStorage es qe IndexedDB puede almacenar strings, booleans y archivos
//cualqier tipo de dato es soportado
//localStorage es buena solución para alamcenar poca información como carrito de compras abandonado o un webToken

let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB(){
    //crear base de datos v1.0
    let crmDB = window.indexedDB.open('crm', 1);    //nombre de la base de datos creada, versión de base de datos
    //1 es la versión de la base de datos. Si incrementas este número, se activará el evento onupgradeneeded, que permite actualizar la estructura de la base de datos (como añadir o modificar object stores e índices)

    crmDB.onerror = function() {    //onerror es una función de indexedDB
        console.log('Hubo un error en el momento de crear la BD');
    }

    crmDB.onsuccess = function(){
        console.log('Base de datos creada');
        DB = crmDB.result;
    }

    // onsuccess se usa para manejar el éxito de una solicitud específica. se debe usar onsuccess para manejar la apertura exitosa de la base de datos por ejemplo o cuando se agrega un objeto a un ObjectStore de una transaction: DB.transaction(['crm'], 'readwrite').objectStore('crm').add(cliente)
    // oncomplete se usa para manejar el éxito de una transacción completa. Por ejemplo en DB.transaction(['crm'], 'readwrite')

    crmDB.onupgradeneeded = function(e){    //se ejecuta cuando:    1. La base de datos se abre por primera vez. 2. La versión de la base de datos se incrementa
        console.log('Este método se crea una sola vez cuando la BD se ha creado');
        const db = e.target.result;

        const objectStore = db.createObjectStore('crm', {   //objectStore es lo qe permite crear las columnas
            KeyPath: 'crm',
            autoIncrement: true
        });
        //db.createObjectStore('citas', { keyPath: 'id' }): Crea un nuevo object store llamado 'crm' con una clave primaria (keyPath) llamada 'crm' (acá debe ir el id). La clave primaria es un campo que identifica de manera única cada entrada en el object store

        //definir las columnas
        objectStore.createIndex('nombre', 'nombre', {unique: false});
        objectStore.createIndex('email', 'email', {unique: true});
        objectStore.createIndex('telefono', 'telefono', {unique: true});

        //objectStore.createIndex('nombre', 'nombre', { unique: false }): Crea un índice en el object store 'citas' para el campo 'nombre'. Los índices permiten búsquedas rápidas en los datos. En este caso, el índice no es único, lo que significa que varios registros pueden tener el mismo valor en el campo 'nombre'
        //En IndexedDB, no existen columnas de la misma manera que en bases de datos relacionales como SQL. Sin embargo, puedes pensar en createIndex como una forma de crear índices que te permiten buscar datos más rápidamente por ciertos campos
    }

}

function crearCliente(){

    let transaction = DB.transaction(['crm'], 'readwrite'); //(db, modo)
    //Esta línea crea una transacción en la base de datos DB. Las transacciones en IndexedDB son necesarias para realizar operaciones de lectura y escritura en los datos.
    //'crm': Es el nombre del object store (almacén de objetos) en el que quieres realizar la transacción. Un object store es similar a una tabla en una base de datos SQL, pero puede almacenar objetos JavaScript.
    //'readwrite': Es el modo de la transacción. En este caso, es de lectura/escritura, lo que significa que puedes leer y modificar datos en el object store
    //Si se desea realizar una transacción en modo "readwrite" debería utilizar el parámetro entre corchetes para especificar los object stores en los que se desea realizar la transacción
    //devuelve { mode: "readwrite", durability: "default", db: IDBDatabase, error: null, onabort: null, oncomplete: null, onerror: null, objectStoreNames: DOMStringList(1) ['crm'] }
    //puede ir sin [], y ser solo 'crm'
    //los valores pueden ser: readonly: Solo lectura. readwrite: Lectura y escritura. versionchange: Para cambiar la versión de la base de datos

    transaction.oncomplete = function(){    //oncomplete es para transaction
        console.log('Transacción completada');
    }
    transaction.onerror = function(){
        console.log('Error en la transacción');
    }

    const objectStore = transaction.objectStore('crm');
    //Esta línea obtiene una referencia al object store llamado 'crm' a partir de la transacción creada anteriormente. Con esta referencia, puedes realizar operaciones CRUD (crear, leer, actualizar, eliminar) en los datos almacenados en ese object store
    //devuelve algo como {name: "crm", keyPath: "crm", indexNames: DOMStringList(3), transaction: IDBTransaction, autoIncrement: true}
    //el nombre 'crm' debe ser el mismo que con el que se crea la transaction

    const nuevoCliente = {
        telefono: 8900909800,
        nombre: 'William',
        email: 'williamwun@gmail.com'
    }

    const peticion = objectStore.add(nuevoCliente); //agrega a la base de datos, put para actualizar, delete para eliminar
    //Esta línea agrega un nuevo objeto (nuevoCliente) al object store 'crm'
}