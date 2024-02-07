console.clear();

console.log("Ejercicio 01")

let mostrarDatos = () => {
    return (`Mi nombre es ${nombre} y mi edad es ${edad}`);
}

// let nombre="Maria";
// let edad=25;


// mostrarDatos(nombre, edad);

console.log(mostrarDatos(nombre, edad))
console.log(mostrarDatos("Juan, 23"))

// DECONSTRUCCTION

// Construir un array 
let diasDeLaSemana = ["Lunes", "Martes", "Miércoles", "..."];

//const texto = mostrarDatos(nombre, edad)
// console.log(texto)

let [dia1, dia2, dia3, dia4] = diasDeLaSemana

console.log("los dias son:", dia1, dia2, dia4);

let Alumno = {
    nombre: "Juan",
    hobbies: ["hobbie1", "hobbie2"],
    edad: 19
}

let {nombre, edad} = Alumno;
console.log("nombre es", hobbies);

