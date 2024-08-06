const primerEnlace = document.querySelector('a');

console.log(primerEnlace);

primerEnlace.remove();  //elimina el elemento por sí mismo

console.log(primerEnlace);

//eliminar desde el padre

const navegacion = document.querySelector('.navegacion');

console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]); //elimina el elemento por posición