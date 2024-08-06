function iniciarApp(){

    const selectCategorias = document.querySelector('#categorias');
    const resultado = document.querySelector('#resultado');    

    if(selectCategorias){
        selectCategorias.addEventListener('change', seleccionarCategoria);
        obtenerCategorias();
    }

    const favoritosDiv = document.querySelector('.favoritos');
    if(favoritosDiv){
        obtenerFavoritos();
    }

    const modal = new bootstrap.Modal('#modal', {});    

    function obtenerCategorias(){

    const url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
    fetch(url)
        .then(respuesta =>  respuesta.json()) //return es tácit
        .then(resultado =>  mostrarCategorias(resultado.categories))
    }

    function mostrarCategorias(categorias = []){
        categorias.forEach(elementoCategoria => {
            
            const { strCategory } = elementoCategoria;
            
            const option = document.createElement('OPTION');
            option.value = strCategory;
            option.textContent = strCategory;
            
            selectCategorias.appendChild(option);
        });
    }

    function seleccionarCategoria(e){
        const categoria = e.target.value;

        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`;

        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetas(resultado.meals))
    }

    function mostrarRecetas(recetas = []){

        limpiarHTML(resultado);

        const heading = document.createElement('H2');
        heading.classList.add('text-center', 'text-black', 'my-5');
        heading.textContent = recetas.length ? 'Resultados' : 'No hay resultados';
        resultado.appendChild(heading);

        recetas.forEach(receta => {
            
            const {idMeal, strMeal, strMealThumb} = receta;

            const recetaContenedor = document.createElement('DIV');
            recetaContenedor.classList.add('col-md-4');

            const recetaCard = document.createElement('DIV');
            recetaCard.classList.add('card', 'mb-4');

            const recetaImagen = document.createElement('IMG');
            recetaImagen.classList.add('card-img-top');
            recetaImagen.alt = `imagen de la receta ${strMeal ?? receta.titulo}`;
            recetaImagen.src = strMealThumb ?? receta.img;  //si no existe, que se agregue lo que hay en localStorage

            const recetaCardBody = document.createElement('DIV');
            recetaCardBody.classList.add('card-body');

            const recetaHeading = document.createElement('H3');
            recetaHeading.classList.add('card-title', 'mb-3');
            recetaHeading.textContent = strMeal ?? receta.titulo;

            const recetaButton = document.createElement('BUTTON');
            recetaButton.classList.add('btn', 'btn-danger', 'w-100');
            recetaButton.textContent = 'ver receta';
            //recetaButton.dataset.bsTarget = '#modal';   //estas son propiedades de bootstrap, establece el objetivo del botón, especificando el ID del modal que se debe mostrar cuando se haga clic en el botón
            //recetaButton.dataset.bsToggle = 'modal';    ////estas son propiedades de bootstrap, esta línea indica que el botón debe activar un modal. Bootstrap reconoce el atributo data-bs-toggle="modal" como una instrucción para abrir un modal
            recetaButton.onclick = function(){  //al hacer el function(){} lo que se está haciendo es ponerlo como callback, va a esperar que se cree onclick para luego ejecutar la función
                seleccionarReceta(idMeal ?? receta.id);
            } 

            recetaCardBody.appendChild(recetaHeading);
            recetaCardBody.appendChild(recetaButton);

            recetaCard.appendChild(recetaImagen);
            recetaCard.appendChild(recetaCardBody);

            recetaContenedor.appendChild(recetaCard);

            resultado.appendChild(recetaContenedor);
        })
    }

    function limpiarHTML(selector){
        while(selector.firstChild){
            selector.removeChild(selector.firstChild);
        }
    }

    function mostrarRecetaModal(receta){
        const {idMeal, strInstructions, strMeal, strMealThumb} = receta;

        const modalTitle = document.querySelector('.modal .modal-title');
        const modalBody = document.querySelector('.modal .modal-body');

        modalTitle.textContent = strMeal;

        modalBody.innerHTML = `
            <img class="img-fluid" src="${strMealThumb}" alt="receta ${strMeal}" />
            <h3 class="my-3">Instrucciones</h3>
            <p>${strInstructions}</p>
            <h3 class="my-3">Ingredientes y cantidades</h3>
        `;

        //mostrar ingredientes y cantidades

        const listGroup = document.createElement('UL');
        listGroup.classList.add('list-group');
        
        for(let i=1; i<=20; i++){
            if(receta[`strIngredient${i}`] !== ''){
                
                const ingrediente = receta[`strIngredient${i}`];
                const cantidad = receta[`strMeasure${i}`];

                const ingredienteLi = document.createElement('LI');
                ingredienteLi.classList.add('list-group-item');
                ingredienteLi.textContent = `${ingrediente} - ${cantidad}`;

                listGroup.appendChild(ingredienteLi);
            }
        }

        modalBody.appendChild(listGroup);

        const modalFooter = document.querySelector('.modal-footer');
        limpiarHTML(modalFooter);

        //boton cerrar favorito
        const btnFavorito = document.createElement('BUTTON');
        btnFavorito.classList.add('btn', 'btn-danger', 'col');

        //const existeEnStorage = existeStorage(idMeal);

        btnFavorito.textContent = existeStorage(idMeal) ? 'eliminar favorito' : 'Guardar favorito';
        
        //almacenar en local Storage
        btnFavorito.onclick = function(){
            if(!existeStorage(idMeal)){
                agregarFavorito({
                    id: idMeal,
                    titulo: strMeal,
                    img: strMealThumb
                });
                btnFavorito.textContent = 'eliminar favorito';
                mostrarToast('agregado correctamente');
            }else{
                eliminarStorage(idMeal);
                btnFavorito.textContent = 'Guardar favorito';
                mostrarToast('eliminado correctamente');
            }
            
        }
        
        const btnCerrarModal = document.createElement('BUTTON');
        btnCerrarModal.classList.add('btn', 'btn-secondary', 'col');
        btnCerrarModal.textContent = 'Cerrar';
        btnCerrarModal.onclick = function(){
            modal.hide();
        }

        modalFooter.appendChild(btnFavorito);
        modalFooter.appendChild(btnCerrarModal);
        
        modal.show();
    }

    function seleccionarReceta(id){
        const url = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(resultado => mostrarRecetaModal(resultado.meals[0]))
    }

    function agregarFavorito(receta){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];  //El operador ?? en JavaScript es el operador de coalescencia nula. Se utiliza para proporcionar un valor predeterminado cuando el valor a la izquierda es null o undefined
        favoritos.push(receta);
        localStorage.setItem('favoritos', JSON.stringify(favoritos));
    }

    function existeStorage(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        return encontrado = favoritos.some(elementoReceta => {
            return elementoReceta.id === id;
        });
    }

    function eliminarStorage(id){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        const favoritosEliminado = favoritos.filter(elementoFavorito => elementoFavorito.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(favoritosEliminado));
    }

    function mostrarToast(mensaje){
        const toastDiv = document.querySelector('#toast');
        const toastBody = document.querySelector('.toast-body');
        const toast = new bootstrap.Toast(toastDiv);
        toastDiv.textContent = mensaje;
        toast.show();
    }

    function obtenerFavoritos(){
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) ?? [];
        if(favoritos.length){
            mostrarRecetas(favoritos);
            return;
        }

        const noFavoritos = document.createElement('P');
        noFavoritos.textContent = 'No hay favoritos para mostrar';
        noFavoritos.classList.add('fs-4', 'text-center', 'font-bold', 'mt-5');
        favoritosDiv.appendChild(noFavoritos);
    }
}

document.addEventListener('DOMContentLoaded', iniciarApp);