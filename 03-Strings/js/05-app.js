const producto = 'Monitor 20 pulgadas';

console.log(producto);
console.log(`replace: ${producto.replace(' pulgadas', '"')}`);
console.log(`replace: ${producto.replace('Monitor', 'Monitor curvo')}`);

console.log(`slice(0, 10): ${producto.slice(0, 10)}`);  //devuelve una cadena nueva
console.log(`slice(8): ${producto.slice(8)}`);
console.log(`slice(2,1): ${producto.slice(2,1)}`);

console.log(`substring(0, 10): ${producto.substring(0, 10)}`);  //devuelve subconjunto de la cadena
console.log(`substring(2, 1): ${producto.substring(2,1)}`);

const usuario = "William";
console.log(`charAt(0): ${usuario.charAt(0)}`);