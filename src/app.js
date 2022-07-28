import Home from './Pages/Homepage/Home'
import About from './Pages/About/About'
import Donation from './Pages/Donation/Donation'
import Mars from './Pages/Projects/Mars/Mars'
import MoonBase from './Pages/Projects/MoonBase/MoonBase'
import Flight from './Pages/Projects/Flight/Flight'
import FAQ from './Pages/FAQ/FAQ'
import Contact from './Pages/Contact/Contact'
import Events from './Pages/Events/Events'

import './global.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />}></Route>
        <Route path='/donate' element={<Donation />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/mars' element={<Mars />}></Route>
        <Route path='/moonBase' element={<MoonBase />}></Route>
        <Route path='/flight' element={<Flight />}></Route>
        <Route path='/faq' element={<FAQ />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/events' element={<Events />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
