import {useEffect,  useState} from 'react'



const userData = [
  {id: 1, nombre: "Jesús", hobbies: "Fútbol", isAdmin: false, edad:29},
  {id: 2, nombre: "Mario", hobbies: "Voleiball", isAdmin: false, edad:35},
  {id: 3, nombre: "Luis", hobbies: "Ski", isAdmin: false, edad:30},
  {id: 4, nombre: "Carlos", hobbies: "Balonmano", isAdmin: false, edad:27}
]

const Usuario = ({nombre, isAdmin, edad=0, id, deporte="no tiene"}) => {
  return (
    <>
    Math: {Math.random()}
    Nombre: {nombre} <br />
    Edad: {edad} <br />
    {isAdmin &&<><strong>soy Admin</strong><br /></>}
    Deporte favorito: {deporte} {id}

    </>
  )
}

function App() {

const [users, setUsers]=useState(userData);


  return (
    <>
    <h1>Lista de Usuarios</h1>
    <button
    
    onClick={ ()=>{
      setUsers([...users, {id: 1, nombre: "Jesús", hobbies: "Fútbol", isAdmin: false, edad:29}]);
    }}>
    onClick
    </button>
    <ul>
    {  
    users.map((user)=> (

        <Usuario key={user.id}    {...user }/>
  ))
    }
  </ul>
  </>)

}


  
export default App
