window.addEventListener('scroll', ()=>{
    // const scrollPX = window.scrollY;
    // console.log(scroll);

    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top<784){
        console.log('El elemento ya está visible');
    }else{
        console.log('Aún no, más scroll');
    }
})