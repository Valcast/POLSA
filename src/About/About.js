import Navbar from '../Reusable Components/Navbar/Navbar'
import './About.css'
import Who from './Who/Who'
import Why from './Why/Why'

const About = () => {
  return (
    <div className='about'>
      <Navbar />
      <Who />
      <Why />
    </div>
  )
}

export default About
