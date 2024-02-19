import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from 'react';

function App() {
  // Estado para almacenar la lista de usuarios
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Crear un controlador de aborto para cancelar la petición si es necesario
    let controller = new AbortController();

    // Opciones para la petición fetch
    const opciones = {
      method: 'GET', // Método de la petición
      headers: {
        'Content-Type': 'application/json', // Tipo de contenido
      },
      signal: controller.signal, // Para abortar la petición si es necesario
    };

    // Realizar la petición a la API
    fetch('https://jsonplaceholder.typicode.com/users', opciones)
      .then(response => response.json()) // Convertir la respuesta a formato JSON
      .then(data => {
        console.log(data);

        // Actualizar el estado con la lista de usuarios obtenida
        setUsuarios(data);
      })
      .catch(err => {
        console.log(err); // Manejar errores en la petición
      })
      .finally(() => {
        console.log("Terminó la promesa");
        controller.abort(); // Abortar la petición y cerrar el controlador
      });

    // Cleanup de efecto: Abortar la petición si el componente se desmonta
    return () => controller.abort();
  }, []); // El efecto se ejecuta solo una vez al montar el componente (dependencias vacías)

  return (
    <>
      <h1>Llamada a usuarios</h1>
      <ul>
        {/* Mapear la lista de usuarios para renderizar elementos de lista */}
        {usuarios.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
