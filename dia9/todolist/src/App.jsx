import './App.css'
import { TodoList } from './components/Todolist'

// 1. Crear Hooks

// ComponenteDidMount()
useEffect( () => {
  console.log("Cargué mi componente App.jsx") 
}, [])

// 2. Crear funciones y componentes extra


// 3. Renderizar y armar interfaz

// Hook useEffect, trabaja los estados de mi APP.
// 1. Cuando se crea el componente
// 2. Cuando se re-renderiza el componente
// 3. Cuando se elimina el componente

const misTareas=[{
  id:1, tarea: "programar", isCompletada: true
}, {
  id:2, tarea: "trabajar", isCompletada: false
}, {
  id:3, tarea: "dormir", isCompletada: true
}];

function App() {

  return (
    <>
    <h1> Día 10 - Todolist APP </h1>
    <TodoList listaTareas={misTareas} />
    <button onClick= {()=>{}}></button>
    </>
  )
}

export default App
