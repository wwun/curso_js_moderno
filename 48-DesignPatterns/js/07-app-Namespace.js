//Namespace

const restaurantApp = {};

restaurantApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 25
    },
    {
        platillo: 'Hamburguesa',
        precio: 20
    },
    {
        platillo: 'Hot dog',
        precio: 20
    }
];

restaurantApp.funciones = {
    mostrarMenu: (platillos) => {
        console.log(`bienvenidos a nuestro menú`);

        platillos.forEach( (platillo, index) => {
            console.log(`${index}: ${platillo.platillo} $${platillo.precio}`);
        });
    },
    ordernar: id => {
        console.log(`tu platillo: ${restaurantApp.platillos[id].platillo} se está preparando`)
    },
    agregarPlatillo: (platillo, precio) => {
        const nuevo = {
            platillo,
            precio
        };
        restaurantApp.platillos.push(nuevo);
    }
}



//namespace permite hacer la llamada:
restaurantApp.funciones.ordernar(1);
restaurantApp.funciones.agregarPlatillo('Causa', 30);

const { platillos } = restaurantApp;
restaurantApp.funciones.mostrarMenu(platillos);