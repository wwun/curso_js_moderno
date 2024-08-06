const ciudades = ['Londres', 'New York', 'Madrid', 'Paris'];
const ordenes = new Set([123, 231, 131, 102]);
const datos = new Map();

datos.set('nombre', 'Juan');
datos.set('profesion', 'Desarrollador Web');


//entries iterator
for(let entry of ciudades.entries()){
    console.log(entry); //Array [ 0, "Londres" ]  Array [ 1, "New York" ] Array [ 2, "Madrid" ]   Array [ 3, "Paris" ]
}

for(let entry of ordenes.entries()){    //ordenes es set y no tiene llave y valor
    console.log(entry); //Array [ 123, 123 ]  Array [ 231, 231 ] Array [ 131, 131 ]   Array [ 102, 102 ]
}

for(let entry of datos.entries()){
    console.log(entry);
}

//values iterator
for(let value of ciudades.values()){
    console.log(value); //Londres, New York, Madrid, Paris
}
//imprime los valoes para ordenes y datos sin ninguna diferencia

//keys iterator
for(let value of ciudades.keys()){
    console.log(value); //0, 1, 2, 3
}

//Default
for(let ciudad of ciudades){
    console.log(ciudad);    //Londres, New York, Madrid, Paris
}

for(let orden of ordenes){
    console.log(orden); //123, 231, 131, 102
}

for(let dato of datos){
    console.log(dato);  //Array [ "nombre", "Juan" ], Array [ "profesion", "Desarrollador Web" ]
}