function descargarClientes(){
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if(!error){
                resolve('el listado de clientes se descargó correctamente');
            }else{
                reject('error en la conexión');
            }
        }, 3000);
    })
}

async function ejecutar(){  //function declaration
    try{
        //async y await los valores se asignan a una variable
        //async es la función padre
        console.log(1+1);
        const respuesta = await descargarClientes();    //con esto va a esperar a que se ejecute el promise
        console.log(2+2);
        console.log(respuesta);
    }catch(error){  //reject se vería acá
        console.log(error);
    }
}

ejecutar();