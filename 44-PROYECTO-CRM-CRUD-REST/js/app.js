// 1. instalar node.js
// 2. npm install -g json-server  //instala json server
// 3. json-server --watch db.json --port 4000   //inicia json server, si se usa un path que tiene espacios, debe ir entre ""

//validación de campos vacíos: Object.values(cliente).every(input => input!='');

//fetch para envío de datos

//uso de dataset

//obtener parámetros de una URL: const parametrosURL = new URLSearchParams(window.location.search); parametros.get('id');

//input type hidden

import { obtenerClientes, eliminarCliente } from './API.js';

(function(){
    const listado = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', mostrarClientes);

    listado.addEventListener('click', confirmarEliminar);

    async function mostrarClientes(){
        const clientes = await obtenerClientes();

        clientes.forEach(cliente => {
            const { nombre, email, telefono, empresa, id } = cliente;

            console.log(cliente);

            const row = document.createElement('tr');
            row.innerHTML += `
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
            `;

            listado.appendChild(row);
        })
    }

    function confirmarEliminar(e) {
        if(e.target.classList.contains('eliminar')){

            const clienteId = e.target.dataset.cliente; //accede a <a href="#" data-cliente="${id}"
            
            const confirmar = confirm('deseas eliminar el registro?');
            if(confirmar){
                eliminarCliente(clienteId);
            }
        }
    }
})();