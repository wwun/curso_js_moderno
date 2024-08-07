const url = 'http://localhost:4000/clientes';

//cuando se crea un nuevo cliente
export const nuevoCliente = async (cliente) => {
    console.log(cliente);

    try{
        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(cliente),    //se envía como string o como objeto
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    }catch(error){
        console.log(error);
    }
}

//obtiene todos los clientes
export const obtenerClientes = async () => {
    try{
        const resultado = await fetch(url); //por defecto usa GET
        const clientes = await resultado.json();
        return clientes;
    }catch(error){
        console.log(error);
    }
}

export const eliminarCliente = async id => {
    try{
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        });
    }catch(error){
        console.log(error);
    }
}

//obtener cliente por id
export const obtenerCliente = async id => {
    try{
        const resultado = await fetch(`${url}/${id}`);
        const cliente = await resultado.json();
        return cliente;
    }catch(error){
        console.log(error);
    }
}

//actualizar registro
export const editarCliente = async (cliente) => {
    try{
        await fetch(`${url}/${cliente.id}`, {
            method: 'PUT',
            body: JSON.stringify(cliente),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        window.location.href = 'index.html';
    }catch(error){
        console.log(error);
    }
}