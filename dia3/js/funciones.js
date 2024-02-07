// Bloque de constantes con nombres de las variables
// Asignamos una constante con el nombre 'cuadros'. ("document.querySelectorAll") es un método que cogerá de mi archivo index.html todos los elementos con la clase .cuadro (Lista de nodos querySelectorAll)
const cuadros = document.querySelectorAll(".cuadro");
// Asignamos una constante con el nombre 'controles' que será igual al método document.querySelectorAll y que selecciona todos los elementos input. 
const controles = document.querySelectorAll("input");
// Asignamos una constante con el nombre 'codigoColor'. Esta vez 'document.querySelector("p")' Agarra solamente un nodo ('p') por no tener 'all' al final del método.
const codigoColor = document.querySelector("p");

/*
Este bloque representa una función
Crea una variable y le asigna el nombre código
'for' es un ciclo y en este caso está agrupando una variable con el nombre 'i' que a su vez tiene el valor de cero y es menor que la longitud del objeto arguments.
i++ es un operador de incremento.
dentro de las llaves llama a la variable codigo y le inserta un prototipo push para añadir una cadena al final del array:
    - El método Number(arguments[i]) convierte el valor del argumento en un numero. Se compara con 16 asignandole un valor menor a la variable 'i'.
    - Se aprecian dos textos tipo string que de ser verdadero la operación anterior devolverá el valor 0, de lo contrario el espacio se quedará en blanco
    - El segundo parámetro contiene un método que transforma el argumento con el valor 'i' en un numero y .toString transforma el valor anterior en una string hexadecimal
Return es una sentencia que finaliza la ejecución de la función y especifica un valor para ser devuelo a quien llama a la función.
El prototipo join 
*/  
function hexadecimal(r,g,b){
    let codigo = [];
    for(let i = 0; i < arguments.length; i++){
        codigo.push((Number(arguments[i]) < 16 ? "0" : "") + Number(arguments[i]).toString(16));
    }
    return `#${codigo.join("")}`;
}



/*
Controles es la constante que asignamos al comienzo del código que agarraba todos los elementos 'input', la concatenamos con el prototipo forEach que se le asignará la función a cada uno de los parámetros
Le concatenan al parámetro 'control' un evento que dentro se ejecutará una función a las variables cuadros y codigoColor.
    - La primera parte de la primera linea de la función agarra el primer elemento de la variable cuadros que se referirá al primer elemento con clase 'cuadro'. 
    El style.backgroundColor cogerá el color de la función hexadecimal. 'controles[0].value' representa el color rojo,  'controles[1].value' representa el color verde,  'controles[2].value' representa el color azul
    - codigoColor en este caso son los elementos 'p', innerHTML es una propiedad que tiene como función cambiar el elemento 'p' a los valores de la funcion 'r,g,b'.
    - La constante 'cuadros' representa la clase '.cuadro' del DOM.
    - 
    */
controles.forEach(function(control,indice){
    control.addEventListener("input",function(){
        cuadros[0].style.backgroundColor = hexadecimal(controles[0].value,controles[1].value,controles[2].value);
        
        codigoColor.innerHTML = hexadecimal(controles[0].value,controles[1].value,controles[2].value);

        cuadros[indice + 1].style.backgroundColor = hexadecimal(indice == 0 ? control.value : 0, indice == 1 ? control.value : 0,indice == 2 ? control.value : 0);

    });
});

/**
 * Dado el siguiente código realizar:
 
Comentar cada una de las líneas JS, las tags <section> del html, y la hoja de estilos CSS
Agregar un botón general de "Guardar Color" para que cada vez que lo presione, se almacene en un array el color seleccionado.
Agregar una lista que vaya mostrando cada uno de los colores guardados mostrando su código RGB y un circulo relleno con ese color. 
Agregar un EventListener de Click a cada item de la lista para que los sliders y cuadros se carguen con el color seleccionado.
Agregar un botón general de "Borrar Lista" para quitar todos los colores guardados
Permitir almacenar un máximo de 10 colores borrando los colores mas viejos
Agregar un botón de "Borrar" a cada item de la lista para eliminar dicho item del array.

 */






