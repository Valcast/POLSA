import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({ to,text }) => {
  return (
    <Link to={`/${to}`}>
      <button>{text}</button>
    </Link>
  )
}

export default Button
