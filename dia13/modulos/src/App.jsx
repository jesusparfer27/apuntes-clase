import { useState } from 'react'
import MenuResponsive from './components/menuresponsive/MenuResponsive'
import './css/App.css'
import Tabs from './components/menuresponsive/tabs/Tabs'
import Accordion from './components/menuresponsive/accordion/Accordion'
import LightBox from './components/menuresponsive/lightbox/LightBox'
import Slider from './components/sliders/Slider'

function App() {
  const [count, setCount] = useState(0)

  const items = [ id: 1, titulo: "Pregunta 1", contenido: ""
    
  ]

  return (
    <>
    <MenuResponsive />
    <br />
    <Tabs/>
    <br />
    <Accordion items={items}/>
    <br />
    <LightBox />
    <br />
    <Slider />
    {/* 
    */}
    </>
  )
}

export default App
