import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  setCount = () => {
    if (count.length > 0)
    setCount((count) => count + 1
    )}
    console.log(count)
      

  return (
    <>
   <button onClick={count}>Contador</button>
    </>
  )
}

export default App
