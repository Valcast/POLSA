import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({ to, text }) => {
  return (
    <Link to={`/${to}`} className='link'>
      {text}
    </Link>
  )
}

export default Button
