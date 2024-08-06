//variables
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];


//event listeners
eventListeners();

function eventListeners(){
    //cuando el usuario agrega tweet
    formulario.addEventListener('submit', agregarTweet);

    //cuando el documento está listo
    document.addEventListener('DOMContentLoaded', () => {
        tweets = JSON.parse(localStorage.getItem('tweets')) || [];  //si se devuelve null, se asigna un arreglo vacío
    })
}


//funciones

function agregarTweet(e){
    e.preventDefault();

    //textarea donde el usuario escribe
    const tweet = document.querySelector('#tweet').value;

    //validación
    if(tweet===''){
        mostrarError('No puede estar vacío')
        return;
    }

    const tweetObj = {
        id: Date.now(),
        tweet   //es igual a tweet: tweet
    }
    //anade arreglo de tweets
    tweets = [...tweets, tweetObj];

    //una vez agregado se crea el HTML
    crearHTML();

    //reiniciar el formulario
    formulario.reset();
}

//mostrar mensaje de error

function mostrarError(error){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = error;
    mensajeError.classList.add('error');

    //insertalo en el contenido
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mensajeError);

    //elimina la alerta después de 3 segundos
    setTimeout(() => {
        mensajeError.remove();        
    }, 2000);

}

//muestra listado de los tweets

function crearHTML(){
    limpiarHTML();
    if(tweets.length > 0){
        tweets.forEach((tweet) => {
            //agrega botón para eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';

            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }

            //crea HTML
            const li = document.createElement('li');

            li.innerText = tweet.tweet;
            li.appendChild(btnEliminar);

            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}

//agrega los tweets actuales a localStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

//elimina tweet

function borrarTweet(id){
    tweets = tweets.filter(tweet => tweet.id!==id);
    crearHTML();
}

//limpiar HTML

function limpiarHTML(){
    while(listaTweets.firstChild){
        listaTweets.removeChild(listaTweets.firstChild);
    }
}