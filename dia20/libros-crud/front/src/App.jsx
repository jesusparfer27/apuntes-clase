import './App.css'
import { Routes, Route, Outlet, Link} from "react-router-dom"
import {Notfound} from './components/NotFound'
import Navigation from './components/Navigation'
import Home from './components/Home'
import BookList from './components/BookList'
import ListAuthors from './components/ListAuthors'
import BookAdd from './components/BookAdd'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>

        <Route index element={<Home />}> </Route>
        <Route path="/lista" element={<ListaDeLibros />}> </Route>
        <Route path="/Contacto" element={<Contacto />}>
          
        <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

function Layout (){
  return (
<>
<Navigation />
{/* El  <Outlet> va a renderizar el Child que le mandes*/}
<div className='content'>
<Outlet />
</div>
<footer>Soy footer</footer>
</>

)}

function Contacto() {

}

function Agregar() {
  return (

  )
}



export default App
