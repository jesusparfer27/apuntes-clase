import { useState } from 'react'
import Confetti from 'react-confetti'
export const TodoList = ({ listaTareas }) => {

    /**
     * 1. Uso de Hooks y declaración de variables
     */

    //Lista de Tareas
    const [tareas, setTareas] = useState(listaTareas);
    // Texto para el input
    const [textoTarea, setTextoTarea] = useState('');

    /**
     * 2. Creación de Funciones
     */

    const agregarTarea = () => {
        console.log("Agregando tarea");
        const nuevaTarea = textoTarea.trim(); // quitar espacios delante y detrás del texto
        if (nuevaTarea) {
            // valor random entre 0 y 1000
            const random = Math.floor(Math.random() * 1000);

            const tareasModificable = [...tareas, {
                id: random,
                tarea: nuevaTarea,
                isCompletada: false
            }];

            setTareas(tareasModificable);//Guardar datos
            setTextoTarea("");

        }
    }

    const completarTarea = (id) => {
        console.log("Completar Tarea")
        // Crear una copia de mis tareas porque la variable
        // de useState no se debe modificar directamente
        const tareasModificables = [...tareas]

        // Obtener la tarea
        // const tarea = tareas.find((t) => t.id == id );
        // console.log(tarea);

        // Obtenemos el indice de la tarea
        const index = tareasModificables.findIndex((t) => t.id == id);
        console.log("indice es:", index);

        // hacer modificaciones:
        // al agregar un ! al frente, invierto el valor 
        tareasModificables[index].isCompletada = !tareaModificable
        console.log(tareasModificables);
    }

    const quitarTarea = (id) => {
        console.log("Quitar tarea");
        const tareasModificables = tareas.filter((t) => t.id != id);

        console.log(tareasModificables)
        setTareas(tareasModificables)


    }

    const Tarea = ({ id, tarea, isCompletada }) => (
        <li className='item'>
            <span>
                <button onClick={() => completarTarea(id)}>ok</button>
                {id}. {tarea}
            </span>
            <button onClick={()=>quitarTarea(id)}>X</button>
        </li>
    )

    /**
    * 3. Creación de Vistas / Interfaz Gráfica
    */


    return (
        <>
            <h2>soy TodoList</h2>
            <input type="text"
                placeholder="Nueva Tarea"
                value={textoTarea}
                onChange={(e) => {
                    setTextoTarea(e.target.value)
                }}
            />

            <button onClick={agregarTarea}>Agregar</button>
            <h3>{textoTarea}</h3>

            <h3>Tareas pendientes</h3>
            <ul>
                {
                    // Si no hay tareas pendientes, mostrar mensaje
                    tareas.filter( (t)=> t.isCompletada == true).length == 0 && (
                    <>No hay tareas pendientes
                    <Confetti
                    numberOfPieces="1000"
                    recycle={false}
                    />
                    </>
                    )
                }
                {
                    tareas.map( (tarea) => {
                        if(!tarea.isCompletada){
                            return(
                        <Tarea key={tarea.id} {...tarea} />
                        )
                    }})
                }

            </ul>


        </>
    )
}





export default TodoList