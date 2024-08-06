
const producto = {
    nombre: "Monitor 20 pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medidas: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

const {nombre, informacion, informacion : {fabricacion : {pais}}} = producto;

//console.log(medida);  //Uncaught ReferenceError: medida is not defined
console.log(informacion);  //Object { medidas: {…}, fabricacion: {…} }
console.log(pais);  //China