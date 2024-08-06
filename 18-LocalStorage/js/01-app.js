//todo se almacena como string

const producto = {
    nombre: "Monitor 24 pulgadas",
    precio: 300
}

const productoString = JSON.stringify(producto);    //convierte un objeto a un string
localStorage.setItem('producto', productoString);
console.log(productoString);

const meses = ['Enero', 'Febrero', 'Marzo'];
const mesesString = JSON.stringify(meses);
localStorage.setItem('meses', mesesString);


localStorage.setItem('nombre', 'Juan');

sessionStorage.setItem('nombre', 'Juan');