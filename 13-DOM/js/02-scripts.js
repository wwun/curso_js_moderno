//seleccionar elementos por su clase

const header = document.getElementsByClassName('header');   //las clases como se tienen definidas en el html

console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores);

//si una clase no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste);
