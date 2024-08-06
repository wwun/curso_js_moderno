const producto = {
    idProducto: 10
}

const weakMap = new WeakMap();

weakMap.set(producto, 'Monitor');

console.log(weakMap);   //WeakMap { {…} → "Monitor" }

console.log(weakMap.has(producto)); //true
console.log(weakMap.get(producto)); //Monitor
console.log(weakMap.delete(producto));  //true

console.log(weakMap);   //WeakMap(0)