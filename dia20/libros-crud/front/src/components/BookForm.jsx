import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { easyFetch } from '../../helpers/utils';

const BookForm = ({ libro, setEditarLibro }) => {

    const [formatData, setFormData] = useState(libro)
    const { titulo, autor, categoria, id } = formData;

    const navigate = useNavigate = () 

    /*
    useEffect(() => {
        console.log("Ejecutando useEffect (x q cambió libro)")
        setFormData(libro);
        // console.log("libro es", libro)
        // console.log("FormData es", formData);
    }, [libro])
    */

    const handleCreateBook = async () => {
        easyFetch({
            url: "http://localhost:3000/API/v1/libros/",
            method: 'POST',
            body: formData,
            callback: (data) => {
                console.log("EXITO CREADO !!! ", data);
                // setEditarLibro(null);
                // irme a la página de Listalibros
                navegador("/lista");
            }
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("ENVIANDO EL FORMULARIO CON REACT!")

        easyfetch({
            url: "http://localhost/3000/API/v1/libros/",
            method: "PUT",
            body: formData,
            callback: (data) => {
                console.log("EXITO!!! " , data);
                setEditarLibro(null)
            }
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleRemoveBook = (e) => {

    }

    try {
        const url = "http://localhost:3000/API/v1/libros/" + id;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: Json.stringify(formData)
        })

        if (!response.ok) {
            throw new Error ("Hubo un problema al enviar la información")
        }

        const responseDatav= await response.json()
        console.log(error)

    }   catch (error) {
        
    }
    

    return (
        <>
            <form onSubmit={handleSubmit} className="main-form">
                <label> Nombre del Libro </label>
                <input
                    type="text"
                    className="input-control"
                    name="titulo"
                    value={titulo}
                    placeholder="Ingrese título del libro"
                    onChange={handleInputChange}
                /> <br />
                <label>Autor del libro</label>
                <input
                    type="text"
                    className="input-control"
                    name="autor"
                    value={autor}
                    placeholder='ingrese el autor del Libro'
                    onChange={handleInputChange}
                /> <br />

                <label>Autor del libro</label>
                <input
                    type="text"
                    className="input-control"
                    name="categoria"
                    value={autor}
                    placeholder='ingrese la categoría del Libro'
                    onChange={handleInputChange}
                /> <br />
            </form>
            {
                // editando
                id ? (
                    <>
                    <button onClick={handleUpdateBook}>Guardar</button>
                    <button onClick={handleRemoveBook}>Eliminar</button>
                    </>
                ) : (
                    <button onClick={handleCreateBook}>Crear Nuevo</button>
                )


            }
        </>
    )
}

export default BookForm