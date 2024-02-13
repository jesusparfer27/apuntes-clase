import { useState } from 'react'
import Episodios from './components/Episodios'
import Lugares from './components/Lugares'
import Personajes from './components/Personajes'
import './App.css'

// const episodios = useState("Episodios")
// const lugares = useState("Lugares")
// const personajes = useState("Pesonajes")

function App() {
   const [paginaActual, setPaginaActual] = useState("Personajes")

//let paginaActual = "personajes";

const fetchData = async () => {

}


  return (
    <>
    <h1>Rick and Morty</h1>
    <nav>
      <ul>
      <button className='boton-api' onClick={
        () => {
          setPaginaActual("Episodios")
        // Cargar sección episodios
        }
       
      }>episodios</button>
      <button className='boton-api' onClick={
        () => {
          setPaginaActual("Lugares")
        // Cargar sección episodios
        }
       
      }>lugares</button>
      <button className='boton-api'onClick={
        () => {
          setPaginaActual("Personajes")
        // Cargar sección episodios
        }
       
      } >personajes</button>
      </ul>
      </nav>
{/* Mi sección */}



{paginaActual == "Personajes" && <Personajes />}
{paginaActual == "Episodios" && <Episodios />}
{paginaActual == "Lugares" && <Lugares />}


    </>
  )
}

export default App

// async() await (url./)

/**
   * Imprimir la seccion Home
   * Imprimir la seccion Contacto
   * Imprimir la seccion Acerca de
   */ 

/*
  <nav>
      <ul>
      <button className={`item ${paginaActual==="home" ? "active":""}`} onClick={()=> setPaginaActual("home")}>
        Home
      </button>
      <button className={paginaActual === "acerca" ? "active": "" }onClick={()=> setPaginaActual("acerca")}>
        Acerca
      </button>
      <button className={paginaActual === "contacto" ? "active": ""}onClick={()=> setPaginaActual("contacto")}>
        Contacto
      </button>
      </ul>
    </nav>
    {paginaActual==="Home" && <Home />}
    {paginaActual==="Contacto" && <Contacto />}
    {paginaActual==="Acerca" && <Acerca />}
    */
