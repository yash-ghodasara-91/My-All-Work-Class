import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Inventory from './pages/Inventory'
import Services from './pages/Services'
import Support from './pages/Support'
import About from './pages/About'

function App() {
  return (
    <>
      <Header/>
      <Home/>
      <Cars/>
      <Inventory/>
      <Services/>
      <Support/>
      <About/>
    </>
  )
}

export default App
