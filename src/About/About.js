import Navbar from '../Reusable Components/Navbar/Navbar'
import './About.css'
import Events from './Events/Events'
import OurTeam from './OurTeam/OurTeam'
import Who from './Who/Who'
import Why from './Why/Why'
import Donate from './Donate/Donate'

const About = () => {
  return (
    <div className='about'>
      <Navbar />
      <Who />
      <Why />
      <OurTeam />
      <Events />
      <Donate />
    </div>
  )
}

export default About
