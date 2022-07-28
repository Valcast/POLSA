import Navbar from '../../Reusable Components/Navbar/Navbar'
import './About.css'
import Events from './Events/Events'
import OurTeam from './OurTeam/OurTeam'
import Who from './Who/Who'
import Why from './Why/Why'
import Donate from '../../Reusable Components/Donate/Donate'
import Footer from '../../Reusable Components/Footer/Footer'

const About = () => {
  return (
    <div className='about'>
      <Navbar />
      <Who />
      <Why />
      <OurTeam />
      <Events />
      <Donate />
      <Footer />
    </div>
  )
}

export default About
