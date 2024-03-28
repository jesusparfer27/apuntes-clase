import { useEffect, useState } from "react";

const Hero = () => {

const [reactiveMenu, setReactiveMenu] = useState(false)
// const 
const isOpen = reactiveMenu

// useEffect (() => {
//     setReactiveMenu() => {

//     }

// }, [])


return (
    <>
    <div className="burguer_menu">
        <button className="burguer_button" onClick={reactiveMenu} 
        >
        <span class="material-symbols-outlined">
menu
</span>
<ul className="burguer_mobile">
                button.
            </ul>
        </button>
    </div>
    </>
)
}

export default Hero