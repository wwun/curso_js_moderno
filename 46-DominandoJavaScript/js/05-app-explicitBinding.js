//explicit binding
//la pregunta de trabajo es la diferencia entre call, apply y bind

function persona(el1, el2){
    console.log(`Mi nombre es ${this.nombre} y escucho ${el1} y ${el2}`);
}

const informacion = {
    nombre: 'William'
}

const musicaFavorita = ['Salsa', 'Rock'];

//existe en todas las funciones de javasscript call
//esto es como tener una función y unirle valores externos
//en call se necesita pasar cada valor y en el orden que se asigna
persona.call(informacion, musicaFavorita[0], musicaFavorita[1]);

//en apply se le puede pasar un arreglo y asignará por orden
persona.apply(informacion, musicaFavorita);

//se pasan los valores igual que call y crea una nueva función
const nuevaFn = persona.bind(informacion, musicaFavorita[0], musicaFavorita[1]);
nuevaFn();