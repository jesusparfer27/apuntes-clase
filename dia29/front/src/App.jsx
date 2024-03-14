import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import './App.css'
// import Navigation from './components/Navigation

// Pages (mis componentes principales)
import NotFound from '@/components/NotFound'
import Home from '@/pages/Home'
import Navigation from '@/components/Navigation'
import Agregar from '@/components/Agregar'
// usando el alias @ para importar
import ListaLibros from '@/components/ListaLibros'
import ListaAutores from '@/components/ListaAutores'
import Login from '@/pages/login/Login'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/lista' element={<ListaLibros />}></Route>
        <Route path='/agregar' element={<Agregar />}></Route>
        <Route path='/autores' element={<ListaAutores />}></Route>
        <Route path='/login' element={<Login />}></Route>

        <Route path='*' element={<NotFound />}></Route>
      </Route>

    </Routes>
  )
}



function Layout() {
  return (<>

    <Navigation />
    <div className='content '>
      <Outlet />
    </div>

    <footer className='footer'>footer</footer>
  </>)
}



export default App
