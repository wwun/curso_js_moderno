const paises = [];

const nuevoPais = pais => new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve('El resultado de resolve');
    }, 3000);
});

/*
Sería como poner esto solo qe este no funciona por las llaves:

const nuevoPais = ((pais) => {new Promise(resolve => {
    setTimeout(() => {
        paises.push(pais);
        resolve('El resultado de resolve');
    }, 3000);
});});

*/

nuevoPais('Alemania')
    .then(resultado => {
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Francia');
    })
    .then(resultado => {    //el resultado del return anterior
        console.log(resultado);
        console.log(paises);
        return nuevoPais('Inglaterra');
    })
    .then(resultado => {    //el resultado del return anterior
        console.log(resultado);
        console.log(paises);
    });