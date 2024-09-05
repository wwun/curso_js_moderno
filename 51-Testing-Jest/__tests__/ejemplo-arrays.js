const carrito = ['producto 1', 'producto 2', 'producto 3'];

describe('testing al carrito de compras', () => {
    test('probar qe el array tenga 3 elementos', () => {
        expect(carrito).toHaveLength(3);
    });
    
    test('verificar qe el carrito no este vacio', () => {
        expect(carrito).not.toHaveLength(0);
    });
});