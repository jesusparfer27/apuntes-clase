import { useState } from 'react'
import './css/newApp.css'
// import Encuentros from './components/Encuentros/Encuentros'
import Header from './components/Header/Header'
import Perdidos from './components/Perdidos/Perdidos'
// import MascotasTarjeta from './components/MascotasTarjeta/MascotasTarjeta'
// import Footer from './components/Footer/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Perdidos />
      {/* <Encuentros /> */}
      {/* <MascotasTarjeta /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
