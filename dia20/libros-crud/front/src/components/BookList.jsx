import {useState, useEffect} from 'react';

function BookList() {
  const [bookList, setBookList] = useState([]); 

    useEffect ( () => {
      fetchLibros();
    }, []);

    const FetchLibros = async () => {
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
        console.error("tuviste un error")
      }
    }

    const handleEditarLibro = () => {
      console.log("Editar libro con ID: "+libro.id);
    }

     return (
      <>
      <h2>Lista Libros</h2>

      <div className='cardList'>

        {
          bookList.map( libro => (
            div
          ))
        }
      </div>
      </>
    )
  }

  export default BookList