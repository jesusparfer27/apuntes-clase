import './App.css'
import { TodoList } from './components/Todolist';

const misTareas=[{
id: 1, tareas: "entrenar", estaRealizada: false
}, {
id: 2, tareas: "trabajar", estaRealizada: true
}, {
id: 3, tareas: "estudiar", estaRealizada: false
}];

function App() {

 // const [count, setCount] = useState(0)

  return (
  <>
    <h1>Lista de tareas:</h1>
    <TodoList listaTareas={misTareas}/>
  </>
  )
}

export default App
