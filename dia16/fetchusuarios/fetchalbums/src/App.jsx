import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React, { useState, useEffect } from 'react';

function App() {

  const [albums, setAlbum] = useState([]);

  useEffect (() => {
    let controller = new AbortController();

    const opciones = {
      method: 'GET',
      headers: {
        'content-Type' : 'application/Json',
      },
      signal: controller.signal,
    };

    fetch ('https://jsonplaceholder.typicode.com/albums', opciones)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      setAlbum(data);
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      console.log("Terminó la promesa");
      controller.abort();
    });

    return () => controller.abort();
  }, [])

  return (
    <>
      <h1>Llamada a album</h1>
      <ul>
        {albums.map(album => (
        <li key={album.id}>{album.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App
