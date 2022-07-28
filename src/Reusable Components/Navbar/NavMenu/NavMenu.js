import { Link } from 'react-router-dom'

import './NavMenu.css'

const NavMenu = () => {
  return (
    <nav>
      <menu className='navWrapper'>
        <Link to='/'>
          <li className='navLink'>Home</li>
        </Link>
        <Link to='/about'>
          <li className='navLink'>About POLSA</li>
        </Link>
        <Link to='/events'>
          <li className='navLink'>Events</li>
        </Link>
        <Link to='/milestones'>
          <li className='navLink'>Milestones</li>
        </Link>
        <Link to={`/contact`}>
          <li className='navLink'>Contact</li>
        </Link>
      </menu>
    </nav>
  )
}

export default NavMenu
