
function descargarNuevosClientes(){
    return new Promise(resolve => {
        console.log('descargando clientes');

        setTimeout(() => {
            resolve('los clientes fueron descargados');
        }, 5000);
    })
}

function descargarNuevosPedidos(){
    return new Promise(resolve => {
        console.log('descargando pedidos');

        setTimeout(() => {
            resolve('los pedidos fueron descargados');
        }, 3000);
    })
}

const app = async() => {
    try{
        //esto no sería la manera más eficiente sin son consultas independientes que puedan ejecutarse en paralelo
        // const clientes = await descargarNuevosClientes();
        // console.log(clientes);

        // const pedidos = await descargarNuevosPedidos();
        // console.log(pedidos);

        const respuesta = await Promise.all([descargarNuevosClientes(), descargarNuevosPedidos()]);
        console.log(respuesta[0]);
        console.log(respuesta[1]);
    }catch(error){
        console.log(error);
    }
}