
const reproductor = {   //arrow functions
    cancion: '',
    reproducir: id => console.log(`reproduciendo canción`),
    pausar: () => console.log("pausando..."),
    borrar: id => console.log("Borrando canción... ${id}"),
    crearPlaylist: nombre => console.log(`creando playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`reproduciendo ${nombre}`),
    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`anadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = "Norwegian woods";
reproductor.obtenerCancion; //como se utiliza get no se usa paréntesis

reproductor.reproducir(20);
reproductor.pausar();

reproductor.borrar(20);
reproductor.crearPlaylist("playlist");
reproductor.reproducirPlaylist("playlist");