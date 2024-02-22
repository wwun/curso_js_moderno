const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

// btnFlotante.addEventListener('click', () => {   //si alguien da click, se ejecutará el código dentro del arrowfunction
//     console.log('Diste click en el botón');
// });

btnFlotante.addEventListener('click', mostrarOcultarFooter);    //no es necesario poner el paréntesis para la llamada del método

function mostrarOcultarFooter(){
    if(footer.classList.contains('activo')){
        footer.classList.remove('activo');
        this.classList.remove('activo');    //this hace referencia al elemento que mandó a ejecutar la función mostrarOcultarFooter()
        this.textContent = 'Idioma y Moneda';
    }else{
        footer.classList.add('activo');
        btnFlotante.classList.add('activo');
        this.textContent = 'X Cerrar';
    }
    console.log('Diste click en el botón');
}