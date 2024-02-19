import React, { useState } from 'react';
import './Header.css';

const Header = ({ items, perdidos, encontrados }) => {
    const [menuDesplegable, setMenuDesplegable] = useState(null);

    const activarMenuHamburguesa = (hamburguesaId) => {
        setMenuDesplegable(hamburguesaId);
    };

    return (
        <div className="bloque-header">
            <div className="header-logo">
                <h1>Header</h1>
            </div>
            {items.map((item) => (
                <div key={item.id} className="menu-hamburguesa">
                    <div className="hamburguesa">
                        <button onClick={() => activarMenuHamburguesa(item.id)} className='hamburguesa-btn'>
                            {item.titulo}
                        </button>
                        {/* No es necesario poner el link dentro del componente */}
                        <span className="material-symbols-outlined">menu</span>
                    </div>
                    {menuDesplegable === item.id && (
                        <div className="contenido-desplegable">
                            {/* Agrega aquí el contenido desplegable */}
                            {/* Puedes usar item.perdidos y item.encontrados según tus necesidades */}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Header;
