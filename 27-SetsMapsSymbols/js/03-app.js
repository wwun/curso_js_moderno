const cliente = new Map();

cliente.set('nombre', 'Karen');
cliente.set('tipo', 'Premium');
cliente.set('saldo', 3000);
cliente.set(true, true);

console.log(cliente);   //Map(3) { nombre → "Karen", tipo → "Premium", saldo → 3000, true → true }

console.log(cliente);
console.log(cliente.size);
console.log(cliente.has('nombre2'));

console.log(cliente.get('nombre')); //Karen

cliente.delete('saldo');

console.log(cliente.has('saldo'));  //false

cliente.clear();    //limpia

const paciente = new Map ([['nombre', 'paciente'], ['cuarto', 'no definido']]);

paciente.set('dr', 'Dr Asignado');

console.log(paciente);  //Map(3) { nombre → "paciente", cuarto → "no definido", dr → "Dr Asignado" }

paciente.forEach((datos, index) => {    //no es necesario index
    console.log(index); //imprime las llaves
    console.log(datos); //imprime los valores
});