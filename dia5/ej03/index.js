
console.clear()

let Alumno = {
    nombre: "Jesus",
    edad: 23
}

let FelizCumple = (props) => {

    let {nombre, edad} = props;
       const nuevaEdad = edad +1;

    

    console.log(`Feliz cumple ${nombre}, ahora tienes ${nuevaEdad} \n`)
    return ([nuevaEdad, "datos guardados"])
}
    let [edad, msg]= FelizCumple(Alumno)
    console.log(msg, " y la edad es:", edad)



//  ej03: Crea una función llamada "FelizCumple" que tome un objeto de alumno, deconstruya sus propiedades para obtener nombre y edad, incremente la edad en uno, imprima un mensaje de cumpleaños y devuelva un array con la nueva edad y un mensaje de "datos guardados".