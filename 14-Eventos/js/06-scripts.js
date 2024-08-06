// Event Bubbling

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('titulo');

cardDiv.addEventListener('click', (e)=>{
    e.stopPropagation();    //evita que este evento también ocurra en los elementos padres
    console.log('click en card');
})

infoDiv.addEventListener('click', ()=>{
    e.stopPropagation();
    console.log('click en info');
})

titulo.addEventListener('click', ()=>{
    e.stopPropagation();
    console.log('click en titulo');
})