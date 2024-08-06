const nav = document.querySelector('.navegacion');

//registrar un evento
nav.addEventListener('mouseout', () => {
    console.log('saliendo de la navegacion');
    
    nav.style.backgroundColor = 'transparent';
})

nav.addEventListener('click', () => {
    console.log('Entrando en la navegación');

    nav.style.backgroundColor = 'white';
})

//mousedown - similiar al click
//click
//dbclick = dobleclick
//mouseup = cuando se suelta el mouse