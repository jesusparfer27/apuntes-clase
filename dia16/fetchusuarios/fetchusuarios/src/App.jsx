import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'


function App() {

  const [usuarios, setUsuarios] = useState([])

    useEffect( () => {
     
      let controller = new AbortController();

      const opciones = {
          method: 'GET', // GET, POST, PUT, DELETE, etc
          headers: {
              'Content-Type': 'application/json'
          },
          signal: controller.signal, // para abortar la petición
      }
      fetch('https://jsonplaceholder.typicode.com/users', opciones)
          .then(response => response.json())
          .then(data => {
              console.log(data);

              setUsuarios(data)

          


          })
          .catch( (err )=> {
              console.log(err)
          })
          .finally(() => {
              console.log("Terminó la promesa");
              controller.abort(); // cierra el puerto en nuestro backend (se cierra automáticamente a los 30 segundos)
          })
    
  }, [])


  return (
    <>
      <h1>Llamada a usuarios</h1>
      <ul>
        {
        
        
        
        
        usuarios.map( user => (
           <li key={user.id}>{user.name}</li>
           ))
        
        
        
        
        
        } 
      </ul>
    </>
  )
}


export default App
