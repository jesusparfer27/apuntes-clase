import { pixar } from '../../deb/deb'

const { column } = pixar;

const Column = () => {
    const { divUno, divDos, divTres } = column
    return (
        <>
            <div className="div-column">
                <div className='div-column-uno'>
                    <img src={divUno.src} />
                    <h3>Prueba</h3>
                </div>
                <div className='div-column-dos'>
                    <img src={divDos.src} />
                    <h3>Prueba</h3>
                </div>
                <div className='div-column-tres'>
                    <img src={divTres.src} />
                    <h3>Prueba</h3>
                </div>
            </div>
        </>
    )
}

export default Column