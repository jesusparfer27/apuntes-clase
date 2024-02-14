import {useState} from 'react'
import './MenuResponsive.css'

const MenuResponsive = () => {

const [isOpen, setIsOpen] = useState(false);

const items = [
    {
        titulo: "Home",
        href: "#"
    },
    {
        titulo: "Contacto",
        href: "#"
    },
    {
        titulo: "Productos",
        href: "#"
    }
]

const toggleMenu = () => {
    setIsOpen(!isOpen);
}

    return (
        <header className="Header">
            <h1>Logo</h1>
            <nav className={`Header-nav ${isOpen ? "isVisible" : ""}`}>
            <ul className="Header-ul">
                {items.map( (item, index) => (
                    <Li key ={index} {...item} />
                )
            )}
                
            </ul>
        </nav>
        {/* Boton responsive Menú */}
            <button onClick={() => toggleMenu()} className="Header-btn">
                BtnIcon
            </button>
        </header>
    )
}

const Li = ({titulo}) => {
    // {const titulo} = props
    return (
        <li className="Header-li">
            {titulo}
        </li>
    )
}
export default MenuResponsive;