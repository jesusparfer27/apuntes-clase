import { useState } from 'react'

const LightBox = () => {
        // Primer atributo Variable
        //  segundo atributo que actualiza la Variable
        // tercer valor es el Valor inicial de la variable
        const [isOpen, setIsOpen] = useState(false);

        const toggleLightBox = () => {
            setIsOpen(!isOpen);
        }

    return (
        <section>
                <button onClick={toggleLightBox}>Abrir Lightbox</button>
                {isOpen && 
                <div>
                    <div className="Lightbox-backdrop">
                    <button onClick={toggleLightBox}>X</button>
                    <h3>Contenido del lightbox</h3>
                    </div>
                </div>}
        </section>
    )

}

export default LightBox