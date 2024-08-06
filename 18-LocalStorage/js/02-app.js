
const nombre = localStorage.getItem('nombre');
console.log(nombre);

const nombre2 = localStorage.getItem('nombre2');
console.log(nombre);

const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse(productoJSON));  //convierte un string a JSON u objeto

const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse(meses);
console.log(mesesArray);