
//const diaHoy = new Date();  //las fechas son objetos
const diaHoy = new Date('1-5-2020');  //las fechas son objetosor

let valor = diaHoy;

valor = diaHoy.getFullYear();
valor = diaHoy.getMonth();
valor = diaHoy.getMinutes();
valor = diaHoy.getHours();
valor = diaHoy.getTime();

valor = diaHoy.setFullYear(2010);

Date.now(); // no necesita instanciarse y son los milisegundos desde 1970 hasta el día de hoy