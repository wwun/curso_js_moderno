const card = document.querySelector('.card');   //retorn el primero que encuentra

console.log(card);

// se puede tener selectores específicos como los de css
const info = document.querySelector('.premium .info');  //class .info es hijo de .premium en la definición del html qe llama estos scripts

console.log(info);

//seleccionar segundo card de hospedaje
const segundoCard = document.querySelector('.hospedaje .card:nth-child(2)');
console.log(segundoCard);

//seleccionar formulario
const formulario = document.querySelector('#formulario');
console.log(formulario);

//seleccionar elementos HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);