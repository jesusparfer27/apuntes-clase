import { useState } from 'react'
import Column from './components/column/Column'
// import Footer from './components/Footer'    
import Hero from './components/hero/Hero'
import Header from './components/header/Header'
import './newApp.css'
import './components/column/Column.css'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Hero />
    <Column />
    </>
  )
}

export default App
