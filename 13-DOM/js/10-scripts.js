const enlace = document.createElement('a');

//agregando texto
enlace.textContent = "Nuevo Enlace";

//agregando href
enlace.href = "/nuevo-enlace";

console.log(enlace);

enlace.target="_blank";

enlace.setAttribute('data-enlace', 'nuevo-enlace');

enlace.classList.add('alguna-clase')

enlace.onclick = miFuncion;

//seleccionar navegación
const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace); //agrega el elemento al final de los otros hijos
//viendo los hijos y sus posiciones
console.log(navegacion.children);
//insertando entre posiciones
navegacion.insertBefore(enlace, navegacion.children[1]);

function miFuncion(){
    //alert('Diste click');
}

//Crear card
const parrafo1 = document.createElement('P');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');


const parrafo2 = document.createElement('P');
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('P');
parrafo3.textContent = '$800 por persona';
parrafo3.classList.add('Precio');

//crear div con la clase info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.alt = "Texto alternativo";

//crear card
const card = document.createElement('div');
card.classList.add('card');

//asignar la imagen
card.appendChild(imagen);

//asignar info
card.appendChild(info);

console.log(card);

//insertar en html
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);