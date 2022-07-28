import Logo from '../Logo/Logo'
import Search from './Search/Search'
import LanguageMode from './LanguageMode/LanguageMode'
import NavMenu from './NavMenu/NavMenu'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />
      <div className='navbarWrapper'>
        <NavMenu />
        <Search />
        <LanguageMode />
      </div>
    </div>
  )
}

export default Navbar
