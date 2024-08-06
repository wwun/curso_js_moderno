document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {       //api nativa de javascript
        if(entries[0].isIntersecting){
            console.log('ya está visible');
        }
    });

    observer.observe(document.querySelector('.premium'));   //devuelve si los elementos definidos están visibles en la página web, para probarlo, ejecutar viaje.html y hacer scroll con la consola visible
})