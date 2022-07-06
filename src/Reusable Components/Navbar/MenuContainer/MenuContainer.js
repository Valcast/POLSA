import './MenuContainer.css'

const MenuContainer = ({ children }) => {
  return (
    <nav>
      <menu className='MenuWrapper'>{children}</menu>
    </nav>
  )
}

export default MenuContainer
