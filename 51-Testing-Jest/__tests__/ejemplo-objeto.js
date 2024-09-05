const cliente = {
    nombre: 'William Wun',
    balance: 500
};

describe('testing al cliente', () => {
    test('el cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });

    test('es William Wun', () => {
        expect(cliente.nombre).toBe('William Wun');
    });

    test('no es otro cliente', () => {
        expect(cliente.nombre).not.toBe('Juan');
    });

    test('no tiene 500', () => {
        expect(cliente.balance).not.toBe(300);
    })
});