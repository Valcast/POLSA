import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import LanguageMode from './LanguageMode/LanguageMode'
import MenuContainer from './MenuContainer/MenuContainer'
import MenuItem from './MenuItem/MenuItem'

import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <div className='MenuWrapper'>
        <MenuContainer>
          <MenuItem text='Home' />
          <MenuItem text='About POLSA' />
          <MenuItem text='Events' />
          <MenuItem text='Contact' />
          <MenuItem text='Milestones' />
        </MenuContainer>
        <Search />
        <LanguageMode />
      </div>
    </nav>
  )
}

export default Navbar
