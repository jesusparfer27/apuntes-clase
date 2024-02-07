import { useState } from 'react'
import './Todolist.css'
export const TodoList = ({listaTareas}) =>{

const nuevaTarea = 'Hola'
const agregarTarea = () => {

}

const confirmarTarea = () => {

}

const setNuevaTarea = () => {

}

return (
    <>
    <input type="text" placeholder='Nueva tarea' className='barratexto' value={nuevaTarea}
    onChange={(e) => setNuevaTarea(e.target.value)}/>
    <button onClick={agregarTarea}><span>Agregar</span> </button>
    

    <h3>lista</h3>
    <ul>
        {
            listaTareas.map( (tarea)=> (
                <li key={tarea.id}>{tarea.tarea}</li>

            ))
        }
    </ul>
    </>
)



}