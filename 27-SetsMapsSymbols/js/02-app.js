//weakSet

const weakSet = new WeakSet();  //solo aceptan objetos

const cliente = {
    nombre: 'William',
    saldo: 100
}

weakSet.add(cliente);
//weakSet.add('William'); //esto genera error porque no es un objeto

console.log(weakSet.has(cliente));  //true o false

console.log('eliminando: ', weakSet.delete(cliente));   //true o false

console.log('size: ',weakSet.size);  //size no existe en weakSet

//no se puede usar foreach porque no son iterables

console.log(weakSet);