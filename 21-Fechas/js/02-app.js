const diaHoy = new Date();

//moment js es una de las librerías más usadas para fechas

moment.locale('es');

console.log(moment().format('MMMM DD YYYY'));   //dependiendo del formato que se requiera se va agregando

console.log(moment().format('LLLL', diaHoy));   //viernes 20 de Enero de 2023

console.log(moment().add(3, 'days').calendar());    //le agrega 3 días a la fecha de hoy