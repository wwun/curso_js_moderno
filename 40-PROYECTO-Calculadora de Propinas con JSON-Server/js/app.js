//json-server --watch "/media/wwun/Windows/Users/willi/OneDrive - Universidad Peruana de Ciencias/ucw/javascript/Curso+JS+Moderno/Curso JS Moderno/40-PROYECTO-Calculadora de Propinas con JSON-Server/db.json" --port 4000
//El comando que has mencionado sirve para iniciar un servidor JSON utilizando json-server, una herramienta que permite crear una API RESTful basada en un archivo JSON

let cliente = {
    mesa: '',
    hora: '',
    pedido: []
};

const categorias = {
    1: "Comida",
    2: "Bebidas",
    3: "Postres"
}

const btnGuardarCliente = document.querySelector('#guardar-cliente');

btnGuardarCliente.addEventListener('click', guardarCliente);

function guardarCliente(){
    console.log('desde la función');
    const mesa = document.querySelector('#mesa').value;
    const hora = document.querySelector('#hora').value;

    //revisar campos vacíos
    const camposVacios = [mesa, hora].some(campo => campo === '');

    if(camposVacios){

        const existeAlerta = document.querySelector('.invalid-feedback');

        if(!existeAlerta){
            const alerta = document.createElement('DIV');
            alerta.classList.add('invalid-feedback', 'd-block', 'text-center');
            alerta.textContent = 'todos los campos son obligatorios';
            document.querySelector('.modal-body form').appendChild(alerta);

            setTimeout(() => {
                alerta.remove();
            }, 3000);
        }
        return;
    }
    
    //asignar datos del formulario al cliente, ver el orden de las variables
    cliente = {...cliente, mesa, hora}
    
    //ocultar modal de bootstrap
    const modalFormulario = document.querySelector('#formulario');
    const modalBootstrap = bootstrap.Modal.getInstance(modalFormulario);
    modalBootstrap.hide();  //método de bootstrap para ocultar

    //mostrar las secciones que han sido etiquetadas con d-none
    mostrarSecciones();

    //obtener platillos de la api de JSON-Server
    obtenerPlatillos();
}

function mostrarSecciones(){
    const seccionesOcultas = document.querySelectorAll('.d-none');  //hay más una sección oculta
    seccionesOcultas.forEach(seccion => seccion.classList.remove('d-none'));    //elimina las clases del elemento para mostrarse
}

function obtenerPlatillos(){
    const url = 'http://localhost:4000/platillos';
    
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(resultado => mostrarPlatillos(resultado))
        .catch(error => console.log(error))
}

function mostrarPlatillos(platillos){
    const contenido = document.querySelector('#platillos .contenido');
    platillos.forEach(platillo => {
        const row = document.createElement('DIV');
        row.classList.add('row', 'py-3', 'border-top');

        const nombre = document.createElement('DIV');
        nombre.classList.add('col-md-4');
        nombre.textContent = platillo.nombre;

        const precio = document.createElement('DIV');
        precio.classList.add('col-md-3', 'fw-bold');
        precio.textContent = `$${platillo.precio}`;

        const categoria = document.createElement('DIV');
        categoria.classList.add('col-md-3');
        categoria.textContent = `${categorias[platillo.categoria]}`;

        const inputCantidad = document.createElement('INPUT');
        inputCantidad.type = 'number';
        inputCantidad.min = 0;
        inputCantidad.value = 0;
        inputCantidad.id = `producto-${platillo.id}`;
        inputCantidad.classList.add('form-control');

        //detectar cantidad y platillo que se agrega
        inputCantidad.onchange = function(){
            const cantidad = parseInt(inputCantidad.value);
            agregarPlatillo({...platillo, cantidad});  //v315
        }

        const agregar = document.createElement('DIV');
        agregar.classList.add('col-md-2');
        agregar.appendChild(inputCantidad);

        row.appendChild(nombre);
        row.appendChild(precio);
        row.appendChild(categoria);
        row.appendChild(agregar);

        contenido.appendChild(row);
    })
    
}

function agregarPlatillo(producto){
    //extrar el pedido actual
    let {pedido} = cliente; //obtiene una copia del pedido
    
    //revisar que la cantidad sea mayor a cero
    if(producto.cantidad>0){
        //comprueba si el elemento existe en el array
        if(pedido.some(articulo => articulo.id === producto.id)){
            const pedidoActualizado = pedido.map(articulo => {
                if(articulo.id === producto.id){
                    articulo.cantidad = producto.cantidad;
                }
                return articulo;
            });
            //se asigna el nuevo array
            cliente.pedido = [...pedidoActualizado];
        }else{
            cliente.pedido = [...pedido, producto]; //actualiza el cliente global
        }
    }else{
        //eliminar elementos cuando la cantidad es cero
        const resultado = pedido.filter(articulo => articulo.id !== producto.id);
        cliente.pedido = [...resultado];
    }

    limpiarHTML();

    if(cliente.pedido.length){
        //mostrar el resument
        actualizarResumen();
    }else{
        mensajePedidoVacio();
    }
    
}

function actualizarResumen(){
    const contenido = document.querySelector('#resumen .contenido');

    const resumen = document.createElement('DIV');
    resumen.classList.add('col-md-6', 'card', 'py-2', 'px-3', 'shadow');

    const mesa = document.createElement('P');
    mesa.textContent = 'Mesa: ';
    mesa.classList.add('fw-bold');

    const mesaSpan = document.createElement('SPAN');
    mesaSpan.textContent = cliente.mesa;
    mesaSpan.classList.add('fw-normal');

    const hora = document.createElement('P');
    hora.textContent = 'Hora: ';
    hora.classList.add('fw-bold');

    const horaSpan = document.createElement('SPAN');
    horaSpan.textContent = cliente.hora;
    horaSpan.classList.add('fw-normal');

    mesa.appendChild(mesaSpan);
    hora.appendChild(horaSpan);

    const heading = document.createElement('H3');
    heading.textContent = 'Platillos consumidos';
    heading.classList.add('my-4', 'text-center');

    const grupo = document.createElement('UL');
    grupo.classList.add('list-group');

    const {pedido} = cliente;
    pedido.forEach(articulo => {
        const {nombre, cantidad, precio, id} = articulo;

        const lista = document.createElement('LI');
        lista.classList.add('list-group-item');

        const nombreEl = document.createElement('H4');
        nombreEl.classList.add('my-4');
        nombreEl.textContent = nombre;

        //cantidad del artículo
        const cantidadEl = document.createElement('P');
        cantidadEl.classList.add('fw-bold');
        cantidadEl.textContent = 'Cantidad: ';
        
        const cantidadValor = document.createElement('SPAN');
        cantidadValor.classList.add('fw-normal');
        cantidadValor.textContent = cantidad;

        //precio del artículo
        const precioEl = document.createElement('P');
        precioEl.classList.add('fw-bold');
        precioEl.textContent = 'Precio: ';
        
        const precioValor = document.createElement('SPAN');
        precioValor.classList.add('fw-normal');
        precioValor.textContent = `$${precio}`;

        //subtotal del artículo
        const subtotalEl = document.createElement('P');
        subtotalEl.classList.add('fw-bold');
        subtotalEl.textContent = 'Subtotal: ';
        
        const subtotalValor = document.createElement('SPAN');
        subtotalValor.classList.add('fw-normal');
        subtotalValor.textContent = calcularSubtotal(precio,cantidad);

        //boton para eliminar
        const btnEliminar = document.createElement('BUTTON');
        btnEliminar.classList.add('btn', 'btn-danger');
        btnEliminar.textContent = 'eliminar del pedido';

        //funcion para eliminar el pedido
        btnEliminar.onclick = function(){
            eliminarProducto(id);
        }

        //agregar valores a sus contenedores
        cantidadEl.appendChild(cantidadValor);
        precioEl.appendChild(precioValor);
        subtotalEl.appendChild(subtotalValor);

        //agregar elementos a li
        lista.appendChild(nombreEl);
        lista.appendChild(cantidadEl);
        lista.appendChild(precioEl);
        lista.appendChild(subtotalEl);
        lista.appendChild(btnEliminar);

        //agregar lista al grupo inicial
        grupo.appendChild(lista);
    });

    resumen.appendChild(heading);
    resumen.appendChild(mesa);
    resumen.appendChild(hora);
    resumen.appendChild(grupo);

    contenido.appendChild(resumen);

    //mostrar formulario de propinas
    formularioPropinas();
}

function limpiarHTML(){
    const contenido = document.querySelector('#resumen .contenido');

    while(contenido.firstChild){
        contenido.removeChild(contenido.firstChild);
    }
}

function calcularSubtotal(precio, cantidad){
    return `$ ${precio*cantidad}`;
}

function eliminarProducto(id){
    const {pedido} = cliente;
    const resultado = pedido.filter(articulo => articulo.id !== id);
    cliente.pedido = [...resultado];

    limpiarHTML();
    
    if(cliente.pedido.length){
        //mostrar el resument
        actualizarResumen();
    }else{
        mensajePedidoVacio();
    }

    //el producto se eliminó, por lo tanto regresamos la cantidad a cero en el formulario
    const productoEliminado = `#producto-${id}`;
    const inputEliminado = document.querySelector(productoEliminado);
    inputEliminado.value = 0;
}

function mensajePedidoVacio(){
    const contenido = document.querySelector('#resumen .contenido');

    const texto = document.createElement('P');
    texto.classList.add('text-center');
    texto.textContent = 'anade los elementos del pedido';
    
    contenido.appendChild(texto);
}

function formularioPropinas(){
    const contenido = document.querySelector('#resumen .contenido');

    const formulario = document.createElement('DIV');
    formulario.classList.add('col-md-6', 'formulario');

    const divFormulario = document.createElement('H3');
    divFormulario.classList.add('card', 'py-2', 'px-3', 'shadow');

    const heading = document.createElement('H3');
    heading.classList.add('my-4', 'text-center');
    heading.textContent = 'propina';

    //radio button
    const radio10 = document.createElement('INPUT');
    radio10.type = 'radio';
    radio10.name = 'propina';
    radio10.value = '10';
    radio10.classList.add('form-check-input');
    radio10.onclick = calcularPropina;

    const radio10Label = document.createElement('LABEL');
    radio10Label.textContent = '10%';
    radio10Label.classList.add('form-check-label');

    const radio10Div = document.createElement('DIV');
    radio10Div.classList.add('form-check');

    radio10Div.appendChild(radio10);
    radio10Div.appendChild(radio10Label);

    //radio button
    const radio25 = document.createElement('INPUT');
    radio25.type = 'radio';
    radio25.name = 'propina';   //este name debe ser el mismo que el de 25 para que se seleccione uno u otro
    radio25.value = '25';
    radio25.classList.add('form-check-input');
    radio25.onclick = calcularPropina;

    const radio25Label = document.createElement('LABEL');
    radio25Label.textContent = '25%';
    radio25Label.classList.add('form-check-label');

    const radio25Div = document.createElement('DIV');
    radio25Div.classList.add('form-check');

    radio25Div.appendChild(radio25);
    radio25Div.appendChild(radio25Label);

    //radio button
    const radio50 = document.createElement('INPUT');
    radio50.type = 'radio';
    radio50.name = 'propina';   //este name debe ser el mismo que el de 25 para que se seleccione uno u otro
    radio50.value = '50';
    radio50.classList.add('form-check-input');
    radio50.onclick = calcularPropina;

    const radio50Label = document.createElement('LABEL');
    radio50Label.textContent = '50%';
    radio50Label.classList.add('form-check-label');

    const radio50Div = document.createElement('DIV');
    radio50Div.classList.add('form-check');

    radio50Div.appendChild(radio50);
    radio50Div.appendChild(radio50Label);

    //agrega al DIV principal
    divFormulario.appendChild(heading);
    divFormulario.appendChild(radio10Div);
    divFormulario.appendChild(radio25Div);
    divFormulario.appendChild(radio50Div);
    
    //agregar al formulario
    formulario.appendChild(divFormulario);

    contenido.appendChild(formulario);
}

function calcularPropina(){
    console.log('calculaaaaaando');
    const {pedido} = cliente;
    let subtotal = 0;

    //calcular subtotal a pagar
    pedido.forEach(articulo => {
        subtotal += articulo.cantidad * articulo.precio;
    });

    //seleccionar radio button con la propina del cliente
    const propinaSeleccionada = document.querySelector('[name="propina"]:checked').value;

    //calcular la propina
    const propina = ((subtotal * parseInt(propinaSeleccionada)) / 100);

    //calcular total a pagar
    const total = subtotal + propina;

    mostrarTotalHTML(subtotal, total, propina);
}

function mostrarTotalHTML(subtotal, total, propina){

    const divTotales = document.createElement('DIV');
    divTotales.classList.add('total-pagar');

    //subtotal
    const subtotalParrafo = document.createElement('P');
    subtotalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    subtotalParrafo.textContent = 'subtotal consumo: ';

    const subtotalSpan = document.createElement('SPAN');
    subtotalSpan.classList.add('fw-normal');
    subtotalSpan.textContent = `$${subtotal}`;

    subtotalParrafo.appendChild(subtotalSpan);

    //propina
    const propinaParrafo = document.createElement('P');
    propinaParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    propinaParrafo.textContent = 'propina: ';

    const propinaSpan = document.createElement('SPAN');
    propinaSpan.classList.add('fw-normal');
    propinaSpan.textContent = `$${propina}`;

    propinaParrafo.appendChild(propinaSpan);

    //total
    const totalParrafo = document.createElement('P');
    totalParrafo.classList.add('fs-4', 'fw-bold', 'mt-2');
    totalParrafo.textContent = 'total: ';

    const totalSpan = document.createElement('SPAN');
    totalSpan.classList.add('fw-normal');
    totalSpan.textContent = `$${total}`;

    totalParrafo.appendChild(totalSpan);

    //eliminar el último resultado
    const totalPagarDiv = document.querySelector('.total-pagar');
    if(totalPagarDiv){
        totalPagarDiv.remove();
    }

    divTotales.appendChild(subtotalParrafo);
    divTotales.appendChild(propinaParrafo);
    divTotales.appendChild(totalParrafo);

    const formulario = document.querySelector('#formulario > div');
    formulario.appendChild(divTotales);
}