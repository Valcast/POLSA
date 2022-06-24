import './MenuItem.css'
import { Link } from 'react-router-dom'

const MenuItem = ({ path = '', text }) => {
  return (
    <Link to={`/${path}`}>
      <li className='MenuItem'>{text}</li>
    </Link>
  )
}

export default MenuItem
