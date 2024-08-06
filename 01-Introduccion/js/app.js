const nombre = prompt("Cuál es tu nombre?")
document.querySelector('.contenido').innerHTML = `${nombre}, Hola!`;

/*
Diferencias entre . y #

    Selector de Clase (.):
        Sintaxis: .nombreDeClase
        Descripción: Selecciona elementos que tienen la clase especificada.
        Ejemplo: document.querySelector('.restante') seleccionará el primer elemento en el documento que tenga la clase restante.

    Selector de ID (#):
        Sintaxis: #id
        Descripción: Selecciona el elemento que tiene el ID especificado. Los IDs deben ser únicos dentro de un documento HTML.
        Ejemplo: document.querySelector('#restante') seleccionará el elemento que tiene el ID restante.

¿Por qué a veces se usa punto y otras veces #?

    Clase (.): Se utiliza cuando deseas seleccionar uno o varios elementos que comparten una clase común. Por ejemplo, si deseas aplicar estilos o comportamientos a múltiples elementos.
    ID (#): Se utiliza cuando deseas seleccionar un único elemento específico en el documento. Los IDs deben ser únicos, por lo que este selector es más restrictivo y asegura que solo un elemento será seleccionado.

Uso directo del nombre del elemento

Sí, se puede seleccionar directamente por el nombre del elemento, sin ningún símbolo previo:

    Nombre de elemento:
        Sintaxis: element
        Descripción: Selecciona todos los elementos de ese tipo en el documento.
        Ejemplo: document.querySelector('div') seleccionará el primer div en el documento.

Otros símbolos que pueden preceder al nombre

Además de los selectores de clase (.) e ID (#), CSS y querySelector permiten otros tipos de selectores:

    Selector de atributo ([atributo]):
        Sintaxis: [atributo], [atributo="valor"]
        Descripción: Selecciona elementos que tienen un atributo específico o un atributo con un valor específico.
        Ejemplo: document.querySelector('[data-role]') seleccionará el primer elemento con el atributo data-role.

    Selector de pseudo-clase (:pseudo-clase):
        Sintaxis: :pseudo-clase
        Descripción: Selecciona elementos en un estado específico.
        Ejemplo: document.querySelector('a:hover') seleccionará el primer enlace que está siendo apuntado por el puntero del ratón.

    Selector de descendencia (elemento1 elemento2):
        Sintaxis: elemento1 elemento2
        Descripción: Selecciona todos los elemento2 que son descendientes de elemento1.
        Ejemplo: document.querySelector('div span') seleccionará el primer span que es descendiente de un div.

    Selector de hijo directo (elemento1 > elemento2):
        Sintaxis: elemento1 > elemento2
        Descripción: Selecciona todos los elemento2 que son hijos directos de elemento1.
        Ejemplo: document.querySelector('div > p') seleccionará el primer p que es hijo directo de un div.

Conclusión

    .: Para seleccionar por clase.
    #: Para seleccionar por ID.
    Nombre de elemento: Para seleccionar por tipo de elemento.
    Otros selectores: Para más especificidad, como atributos, pseudo-clases, relaciones jerárquicas
*/