import { useState } from "react"

const Accordion = ({items}) => {

const [activeItem, setActiveItem] = useState(0);

const toggleAccordion = (itemId) => {
    setActiveItem 
}
   
    return (
        <section className="Accordion">
            {items.map((item) => (
            <div className="Accordion-div" key={item.id}>
                <button className="Accordion-btn">
                    {item.titulo}
                </button>
                { activeItem == item.id &&
                <div>{item.contenido}</div>}
            </div>
        ))}
        </section>
    )
}

export default Accordion