import { useEffect, useState } from 'react'
const Personajes = () => {


    // PARTE UNO: DECLARAR VARIABLES Y HOOKS
    useEffect(() => {
        console.log("El componente se ha montado");
        obtenerDatos()
     }, []);
     const [datos, setDatos] = useState({})

// PARTE DOS: DECLARAR FUNCIONES Y COMPONENTES

const obtenerDatos = async () => {
    console.log("Obteniendo datos")
    const respuestaPersonajes = await fetch ("https://rickandmortyapi.com/api/character")
    const datosJson = await respuestaPersonajes.json()
    
    setDatos(datosJson)
    console.log(datosJson)
    

}


// PARTE TRES RENDERIZAR PANTALLA
    return (
        <h1>Personajes</h1>

        
    )
}

export default Personajes