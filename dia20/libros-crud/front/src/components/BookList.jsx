import { useState, useEffect } from 'react';

function BookList() {
  import { useState, useEffect } from 'react'

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetchLibros();
  }, []);

  const FetchLibros = async () => {
    /*
    try {
      const url= "http://localhost:3000/API/v1/libros";
      const response=await fetch(url)

      if(!response.ok){
        throw new Error("Error al obtener los libros")
      }

      const jsonData = await response.json()

      setBookList(jsonData.data)
    }

    catch(error) {
      console.error("tuviste un error: " +error)
    }
  }

  const handleEditarLibro = (libro) => {
    console.log("Editar libro con ID: "+libro.id);
    setEditarLibro(libro)
    */
  }


  return (
      <>
      <h2>Lista Libros</h2>

      <div className='cardList'>

        {
          bookList.map(libro => (
            <div className='card' key={libro.id}>
              <h3>{libro.titulo}</h3>
              <strong>Autor:</strong> {libro.categoria}
              <button onClick={() => handleEditarLibro(libro)} Editar></button>

            </div>
          ))
        }
      </>
      )








      export default BookList;