import { formulario } from '../selectores.js'

export default class Notificacion{
    constructor({texto, tipo}){
        this.texto = texto;
        this.tipo = tipo;

        this.mostrar();
    }
    mostrar(){
        const alerta = document.createElement('DIV');
        
        alerta.classList.add('text-center', 'text-white', 'p-2', 'my-5', 'font-weight-bold', 'text-sm', 'alert');

        const alertaPrevia = document.querySelector('.alert');
        ///////////////////
        alertaPrevia?.remove(); //if(alertaPrevia){
        
        this.tipo === 'error' ? alerta.classList.add('bg-danger') : alerta.classList.add('bg-success');

        alerta.textContent = this.texto;

        //formulario.parentElement.insertBefore(alerta, formulario);
        formulario.insertBefore(alerta, formulario.childNodes[2]);  //formulario.insertBefore(alerta, formulario.children[1]);  //childNodes returns child nodes (element nodes, text nodes, and comment nodes). children returns child elements (not text and comment nodes)

        //quitar después de 5 segundos
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}