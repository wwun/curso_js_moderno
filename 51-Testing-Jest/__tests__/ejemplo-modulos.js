import { suma } from '../js/funciones.js';    //import no existe en jest pero para usarlo se usa babel


describe('suma de 2 numeros', () => {
    test('suma 10 y 20, debe dar como resultado 30', () => {
        expect(suma(10,20)).toBe(30);
    });
});