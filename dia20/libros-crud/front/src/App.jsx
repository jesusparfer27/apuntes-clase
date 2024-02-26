import './App.css'
import { Routes, Route, Outlet, Link} from "react-router-dom"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}></Route>

        <Route index element={<Home />}> </Route>
        <Route path="/lista" element={<ListaDeLibros />}> </Route>
        <Route path="/Contacto" element={<Contacto />}>
          
        </Route>
      </Routes>
    </>
  )
}

function Layout(){
  return (
    <>
    <h1>Soy Header</h1>
    <nav>
     <ul>
      <li>
        <Link to="/">Bienvenida</Link>
      </li>
      <li>
        <Link to="/lista">Lista de libros</Link>
      </li>
      <li>
        <Link to="/Contacto">Contacto</Link>
      </li>
     </ul>
    </nav>
    <h1>Layout</h1>
    {/* El  <Outlet> va a renderizar el Child que le mandes*/}
    <Outlet />

    <footer>Soy footer</footer>
    </>
  )
}

function Contacto() {

}

function Home() {
  return (
    <h1>Nuestra libreria HOME</h1>
  )
}

export default App
