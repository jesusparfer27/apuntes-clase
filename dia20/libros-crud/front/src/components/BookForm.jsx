import { useState, useEffect } from 'react'

const BookForm = ({ libro }) => {

    const [formatData, setFormData] = useState(libro)
    const { titulo, autor, categoria, id } = formData;

    useEffect(() => {
        setFormData(libro);
        // console.log("libro es", libro)
        // console.log("FormData es", formData);
    }, [libro])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("ENVIANDO EL FORMULARIO CON REACT!")
    }

    try {
        const url = "http://localhost:3000/API/v1/libros/" + id;
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                'content-Type': 'apple'
            },
            body:Json.stringify(form)
        })
            if (!response.ok) {
                throw new Error
            }
        
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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
                />
                <label>Autor del libro</label>
                <input
                    type="text"
                    className="input-control"
                    name="autor"
                    value={autor}
                    placeholder='ingrese el autor del Libro'
                    onChange={handleInputChange}
                /> <br />

                <button type="submit">Guardar</button>
            </form>
        </>
    )
}

export default BookForm