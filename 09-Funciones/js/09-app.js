
const reproductor = {   //crear funciones en un objeto
    reproducir: function(id){
        console.log(`reproduciendo canción`);
    },
    pausar: function(){
        console.log("pausando...");
    },
    borrar: function(id){
        console.log("Borrando canción... ${id}");
    },
    crearPlaylist: function(nombre){
        console.log(`creando playlist de ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`reproduciendo ${nombre}`);
    }
}

reproductor.reproducir(20);
reproductor.pausar();

reproductor.borrar(20);
reproductor.crearPlaylist("playlist");
reproductor.reproducirPlaylist("playlist");