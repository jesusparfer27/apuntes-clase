import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Hero from '../components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Frontend</h1>
      <Hero></Hero>
    </>
  )
}

export default App
