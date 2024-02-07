console.clear()

console.log("Ejercicio 02")

let Alumno = {
    nombre: "Dolores",
    edad: 39
}

let mostrarDatos = (props) => {
let {nombre, edad} = props
        return (`Mi nombre es ${nombre} y mi edad es ${edad}`)

}

console.log(mostrarDatos(Alumno))