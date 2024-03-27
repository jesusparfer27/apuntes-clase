// Expresiones regulares (RegEx)

//  en vez de usar "ejemplo" las regex utilizan /ejemplo/

const regex1 =/juan/
const texto="Mi nombre es Juan";

// Flags
const regex2=/juan/i;// no diferencia mayusculas de minúsculas
const regex3=/juan/g;// obtiene todos los resultado en vez del primero.
const regex4=/juan/m;// es para nuscar en multiples lineas (separadas con \n o enter)
const regex5=/juan/mgi; // son combinables

//  Metacaracteres $ ^  .  \w  \s
const regex6=/^juan/gm; // busca mi string al principio de cada linea
const regex7=/Mundo$/gm; //busca mi string al final de cada linea
const regex8= /Ju.n/gm; // "Ju" seguido de cualquier caracter, seguido de "n"
const regex9=/\w/gm; //"\w" busca cualquier caracter alfanumerico (letras y numeros)
const regex10=/\{3}/gm; // buscar todas las cadenas alanúmerics de al menos 3 carácteres
const regex11=/\{3,}/gm; // buscar todas las cadenas alfanúmericas de al menos 3 carácteres agrupadas en palabras completas
const regex12=/\s/gm; // busca cualquier caracter de espacio en blanco

// Tanto \s como \w tienen sus inversos en Mayúsculas

// Agrupación []
const regex13=/[aeiou]rbol/gm; // buscar palabras como "arbol", "erbol", "irbol", "orbol", "urbol"
const regex14=/[a-z]rbol/gm; // agrupo rango de letras de la "a" a la "z"
const regex15=/^Hola[a-zA-Z0-9]/gm; // combino distintos rangos a-z , A-Z, 0-9

const encontrados = texto.match(regex3);
console.log(encontrados);

const isEncontrado = texto.test(regex3); // devuelve true o false si encontró un match
console.log(isEncontrado); //true /false