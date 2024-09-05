//los snapshot son datos qe se almacenan en un string para poder compararlo
//npm test t -- -u

const cliente = {
    nombre: 'William Wun',
    balance: 500,
    tipo: 'premium'
}

describe('testing al cliente', () => {
    test('es William Wun', () => {
        expect(cliente).toMatchSnapshot();  //crea una carpeta __snapshots__ con lo qe convierte jest   npm t -- -u actualiza los snapshot cuando se cambian los valores de la prueba
    });
});