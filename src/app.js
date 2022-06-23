import { render } from 'react-dom'
import Home from './Homepage/Home'
import './reset.css'

const App = () => {
  return <Home />
}

render(<App />, document.getElementById('root'))
