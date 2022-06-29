import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Homepage/Home'
import About from './About/About'
import './reset.css'
import Donation from './Donation/Donation'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='about' element={<About />}></Route>
          <Route path='donate' element={<Donation />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)
