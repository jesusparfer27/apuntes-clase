import { useState } from 'react'

const Slider = ({item}) => {

    // currentSlide es la variable
    // setCurrentSlide la funcion que actualiza la variable
    // useState la funcion inicial que le da el valor a la variable
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlide = () => {

        if(items.length > currentSlide +1 ){
            setCurrentSlide(currentSlide+1);
        } else {
            setCurrentSlide(0)
        }
    }
    const nextSlide = items.length > currentSlide+1 ? currentSlide+1 : 0;
    setCurrentSlide(nextSlide);
    }
    const handlePrevSlide = () => {
        const nextSlide

    }
    return (
        <>
        <button>Ant</button>
        <h1>Slider</h1>
        <img src={items[currentSlide]} alt={items[currentSlide]}/>
        <button onClick={handle}>Sig</button>
        </>
    )
}



export default Slider