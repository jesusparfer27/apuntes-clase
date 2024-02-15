import { useState } from 'react'
import './Header.css'



const Header = () => {

const [menuDesplegable, setmenuDesplegable] = useState()

return (
    <>
        <div className="bloque-header">
            <div className="header-logo">
                <h1>Header</h1>
            </div>
            <div className="menu-hamburguesa">
                <div className="hamburguesa">
                <span class="material-symbols-outlined">
                menu
                </span>
                </div>
            </div>
        </div>
    </>
)
}

export default Header