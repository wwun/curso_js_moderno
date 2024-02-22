const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// console.log(encabezado.innerText);  //no encuentra un texto con visibility: hidden del css
// console.log(encabezado.textContent);
// console.log(encabezado.innerHTML);  //carga el html

const nuevoHeading = 'Nuevo heading';
document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';