import Logo from '../Logo/Logo'
import Search from '../Search/Search'
import LanguageMode from './LanguageMode/LanguageMode'
import MenuContainer from './MenuContainer/MenuContainer'
import MenuItem from './MenuItem/MenuItem'

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Logo />
      <div className='MenuWrapper'>
        <MenuContainer>
          <MenuItem text='Home' />
          <MenuItem path='about' text='About POLSA' />
          <MenuItem path='events' text='Events' />
          <MenuItem path='contact' text='Contact' />
          <MenuItem text='Milestones' />
        </MenuContainer>
        <Search />
        <LanguageMode />
      </div>
    </div>
  )
}

export default Navbar
