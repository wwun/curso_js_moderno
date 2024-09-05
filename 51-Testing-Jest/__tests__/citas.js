import Citas from '../js/classes/Citas';

describe('probar clase Citas', () => {

    const citas = new Citas();

    const id = Date.now();

    test('agregar una nueva cita', () => {
        const citaObj = {
            id,
            mascota: 'Hook',
            propietario: 'William',
            telefono: '7788583949',
            fecha: '10-12-2023',
            hora:'10:30',
            sintomas: 'come'
        };

        citas.agregarCita(citaObj);

        expect(citas).toMatchSnapshot();
    });

    test('actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Nuevo nombre',
            propietario: 'William',
            telefono: '7788583949',
            fecha: '10-12-2023',
            hora:'10:30',
            sintomas: 'come'
        };
        citas.editarCita(citaActualizada);

        expect(citas).toMatchSnapshot();
    });

    test('eliminar cita', () => {
        citas.eliminarCita(id);
        expect(citas).toMatchSnapshot();
    })
});