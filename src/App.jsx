import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom"
import Favorites from './pages/Favorites'

function App() {

  return (
    <main className="main-content">
      <Routes>
        <Route path='/' element={<Home />}>Home</Route>
        <Route path='/favorites' element={<Favorites />}>Favorites</Route>
      </Routes>
    </main>
  )
}

export default App
