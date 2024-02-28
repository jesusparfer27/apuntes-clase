import { Routes, Route, Outlet, Link } from "react-router-dom"

function Navigation() {
    return (
        <nav>
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
                        <Link to="/Contacto">Agregar</Link>
                    </li>
                    <li>
                        <Link to="/">Autores</Link>
                    </li>
                    <li>
                        <Link to="/">No existo</Link>
                    </li>
                </ul>
            </nav>
        </nav>

    )
}

export default Navigation