//variables
const carrito = document.querySelector('#carrito');
const contenederCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito')
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners(){
    console.log('listaCursos ', listaCursos);

    //Cuando se agrega un curso presionando "agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //muestra los cursos
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    })

    //vaciar el carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];

        limpiarHTML();
    });
}

//funciones
function agregarCurso(e){
    e.preventDefault(); //prreviene la acción por defecto que es que se vaya al href="#", en este caso que la pantalla suba hasta la cabecera
    if(e.target.classList.contains('agregar-carrito')){
        const cursoSeleccionado = e.target.parentElement.parentElement; //sube dos elementos, hasta el padre del padre
        console.log('cursoSeleccionado ',cursoSeleccionado);
        leerDatosCurso(cursoSeleccionado);
    }
}

//elimina un curso del carrito
function eliminarCurso(e){
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id');

        //eliminar del arreglo de articulosCarrito por data-id
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

        carritoHTML();  //iterar sobre el carrito y mostrar el HTML
    }
}

// lee el contenido del html al que se le da click y extrae información del curso
function leerDatosCurso(curso){
    console.log(curso);

    //crear un objeto con el contenido del curso actual
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }

    //revisa si un elemento ya existe en el carrito
    const existe = articulosCarrito.some(cursoTemp => cursoTemp.id === infoCurso.id);
    if(existe){
        //actualizamos la cantidad
        const cursos = articulosCarrito.map((curso) => {
            if(curso.id === infoCurso.id){
                curso.cantidad++;
            }
            return curso;
        })
        articulosCarrito = [...cursos];
    }else{
        //agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
        //articulosCarrito.push(infoCurso);

    }

    
    console.log(articulosCarrito);

    carritoHTML();
}

//Muestra el carrito de compras en HTML
function carritoHTML(){

    //limpiar el HTML
    limpiarHTML();

    //recorre el carrito y genera el HTML
    articulosCarrito.forEach((curso) => {
        const {imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement('tr');
        row.innerHTML=`
            <td>
                <img src="${imagen}" width="120">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}"> X </a>
            </td>
        `;

        //agrega el HTML del carrito en el Tbody
        contenederCarrito.appendChild(row);
    })

    //agregar el carrito de compras al storage
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

//elimina los cursos del tbody
function limpiarHTML(){
    //forma lenta
    //contenederCarrito.innerHTML = '';

    while(contenederCarrito.firstChild){
        contenederCarrito.removeChild(contenederCarrito.firstChild);
    }
}