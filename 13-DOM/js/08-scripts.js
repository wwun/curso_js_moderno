const navegacion = document.querySelector('.navegacion');

console.log(navegacion);

console.log(navegacion.childNodes); //los espacios en blancos también son considerados elementos

console.log(navegacion.children); //solo muestran los elementos html

console.log(navegacion.children[0].nodeName);

console.log(navegacion.children[0].nodeType);

console.log(navegacion.firstElementChild);

console.log(navegacion.lastElementChild);

const card = document.querySelector('.card');

card.children[1].children[1].textContent = 'Nuevo heading desde traversing de DOM';

console.log(card.children[1].children[1].textContent);

card.children[0].src = 'img/hacer3.jpg';

console.log(card.children[0]);

console.log(card.parentNode);   //toma los espacios en blanco

console.log(card.parentElement.parentElement.parentElement);

console.log(card.nextElementSibling);   //muestra los hermanos

console.log(card.nextElementSibling.nextElementSibling);

const ultimoCard = document.querySelector('.card:nht-child(4');

console.log(ultimoCard.previousElementSibling);