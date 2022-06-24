import React from 'react'
import { createRoot } from 'react-dom/client'
import About from './About/About'
import './reset.css'

const App = () => {
  return <About />
}
const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
