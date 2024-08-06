for(let i=0; i<10; i++){
    if(i%2 === 0)
        console.log(`${i} es par`)
    else
        console.log(`${i} es impar`)
}

const carrito= [
    {nomber: "Monitor 27 pulgadas", precio: 500},
    {nomber: "television", precio: 100},
    {nomber: "Tablet", precio: 200},
    {nomber: "Audifonos", precio: 300},
    {nomber: "Teclado", precio: 700}
]

for(let i=0; i< carrito.length; i++){
    console.log(carrito[i].nombre);
}