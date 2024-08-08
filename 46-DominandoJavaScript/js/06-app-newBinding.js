//new binding

function Auto(modelo, color){
    this.modelo = modelo;
    this.color = color;
}

//cada vez que se crea un objeto, se tiene acceso al modelo proque se asigna
const auto = new Auto('Camaro', 'blanco');
console.log(color);

//window bindging
window.color = 'azul';

//javascript primero busca en las variables como const y luego en las variables de window
function hola(){
    console.log(color);
}

hola();