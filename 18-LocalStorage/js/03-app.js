
localStorage.removeItem('nombre');

//actualizar registro
const mesesArray = JSON.parse(localStorage.getItem('meses'));
console.log(mesesArray);
mesesArray.push('Nuevo mes');
localStorage.setItem('meses', mesesArray);

//localStorage.clear();