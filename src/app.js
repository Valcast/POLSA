import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Homepage/Home'
import About from './About/About'
import './reset.css'
import Donation from './Donation/Donation'
import Mars from './Projects/Mars/Mars'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/donate' element={<Donation />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mars' element={<Mars />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
const root = createRoot(document.getElementById('root'))
root.render(<App />)
