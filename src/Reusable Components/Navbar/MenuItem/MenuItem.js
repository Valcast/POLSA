import './MenuItem.css'
import { Link } from 'react-router-dom'

const MenuItem = ({ path = "", text }) => {
  return (
    <li className='MenuItem'>
      <Link to={`/${path}`}>{text}</Link>
    </li>
  )
}

export default MenuItem
