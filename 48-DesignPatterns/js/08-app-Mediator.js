//Mediator

function Vendedor(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Vendedor.prototype = {
    oferta: (articulo, precio) => {
        console.log(`tenemos el siguiente artículo ${articulo}, iniciamos con un precio de ${precio}`);
    },
    vendido: (comprador) => {
        console.log(`vendido a ${comprador}`);
    }
}

function Comprador(nombre){
    this.nombre = nombre;
    this.sala = null;
}

Comprador.prototype = {
    oferta: (cantidad, comprador) => {
        console.log(`${comprador.nombre} : ${cantidad}`);
    }
}

function Subasta(){
    let compradores = {};

    return{
        registrar: (usuario) => {
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}



const william = new Comprador('William');
const pablo = new Comprador('Pablo');
const vendedor = new Vendedor('Vendedor de autos');
const subasta = new Subasta();

//mediador que comunica ambos objetos, ambos objetos usan subasta
subasta.registrar(william);
subasta.registrar(pablo);
subasta.registrar(vendedor);

vendedor.oferta('Mustang 66', 300);

console.log(`aquiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii`);
william.oferta(350, william);
pablo.oferta(450, pablo);
william.oferta(750, william);

vendedor.vendido('William');