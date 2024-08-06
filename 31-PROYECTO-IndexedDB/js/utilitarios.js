export function eliminarElemento(arreglo, id){
    const arregloTemporal = [];
    for(let i=0, j=0; i<arreglo.length; i++){
        if(arreglo[i].id !== id){
            arregloTemporal[j] = arreglo[j];
            j++;
        }
    }
    return arregloTemporal;
}