//promise

const aplicarDescuento = new Promise((resolve, reject) => { //resolve es cuando es satisfactorio y reject lo contrario
    console.log(`new Promise()`);
    const descuento = true;

    if(descuento){
        resolve('descuento aplicado');
    }else{
        reject('no se pudo aplicar');
    }
});

aplicarDescuento
    .then( (resultado) => { //cuando se obtiene el resolve
        console.log(`then`);
        descuento(resultado);   //este resultado es lo que se ha agregado en resolve, en este caso es un texto
    })
    .catch( (error) => {    //para reject
        console.log(error);
    })

//Hay 3 valores posibles
//fulfilled - el promise se cumplió
//rejected - el promise no se cumplió
//pending - no se ha cumplido y tampoco fue rechazado

function descuento(mensaje){
    console.log(mensaje);
}

//al final los promises son callbacks pero con sintaxis más clara