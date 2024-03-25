import { useEffect, useState } from "react"
import { easyFetch } from "../../helpers/utils"
import { useNavigate } from "react-router-dom"

const BookForm = ({ libro_info, setEditarLibro }) => {

    const [formData, setFormData] = useState(libro_info)

    const { id, libro, autor, precio } = formData
    console.log("FORM DATA", formData)
    const navigate = useNavigate()

    // useEffect(()=>{
    //     setFormData(libro)
    // },[libro])

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log("Entrando al form con react")


    //     /*
    //     if(id){



    //         try{

    //             const url = "http://localhost:3000/API/v1/libros/"+id;
    //             const respose = await fetch(url, {
    //                 method: "PUT",
    //                 headers: {"Content-Type": "application/json"},
    //                 body: JSON.stringify(formData)

    //             })

    //             if(!respose.ok){
    //                 throw new Error("ERROR al enviar")
    //             }

    //             const resposeData = await respose.json()
    //             console.log(resposeData)


    //         }catch(error){
    //             console.log(error)
    //         }

    //     }else{
    //         try{

    //             const url = "http://localhost:3000/API/v1/libros/";
    //             const respose = await fetch(url, {
    //                 method: "POST",
    //                 headers: {"Content-Type": "application/json"},
    //                 body: JSON.stringify(formData)

    //             })

    //             if(!respose.ok){
    //                 throw new Error("ERROR al enviar")
    //             }

    //             const resposeData = await respose.json()
    //             console.log(resposeData)


    //         }catch(error){
    //             console.log(error)
    //         }
    //     }*/

    // }

    const handleCreateBook = async () => {
        easyFetch({
            url: "http://localhost:3000/API/v1/libros/",
            method: "POST",
            body: formData,
            callback: (data) => {
                console.log("creado con exito!", data)
                navigate("/lista")
            }
        })
    }


    const handleRemoveBook = async () => {

        easyFetch({
            url: "http://localhost:3000/API/v1/libros/" + id,
            method: "DELETE",
            //body: formData,
            callback: (data) => {
                console.log(" borrado con exito!", data)
                setEditarLibro(null)
            }
        })

    }

    const handleUpdateBook = async () => {
        easyFetch({
            url: "http://localhost:3000/API/v1/libros/" + id,
            method: "PUT",
            body: formData,
            callback: (data) => {
                console.log(" actualizado cn exito!", data)
                setEditarLibro(null)
            }
        })

    }

    return (<>
        <h2>Formulario</h2>
        <form className="main-form">
            <label htmlFor="">Nombre del libro:</label>
            <input required type="text"
                className="input-control"
                name="libro"
                value={libro}
                placeholder="Ingrese titulo del libro"
                onChange={handleInputChange} />
            <br />{!id && <>
                <label htmlFor="">Autor:</label>
                <input type="text"
                    className="input-control"
                    name="autor"
                    value={autor}
                    placeholder="Ingrese autor del libro"
                    onChange={handleInputChange} />
                <br /></>}

            <label htmlFor="">Precio:</label>
            <input type="text"
                className="input-control"
                name="precio"
                value={precio}
                placeholder="Ingrese precio del libro"
                onChange={handleInputChange} />
            <br />

        </form>

        {
            id ? (//editar o actualizar
                <>
                    <button onClick={handleRemoveBook}>Eliminar</button>
                    <button onClick={handleUpdateBook}>Guardar</button>
                </>

            ) : (//añadir (id=0)
                <button onClick={handleCreateBook}>Crear</button>
            )
        }


    </>)
}
export default BookForm