import Footer from '../../Reusable Components/Footer/Footer'
import Mission from '../../Reusable Components/Mission/Mission'
import Navbar from '../../Reusable Components/Navbar/Navbar'
import flightVideo from '../../images/flightVideo.png'
import flightHero from '../../images/flightHero.jpg'
import flightHeroWebp from '../../images/flightHero.webp'
import Next from '../../Reusable Components/Next/Next'
import Header from '../../Reusable Components/Header/Header'
import Description from '../../Reusable Components/Description/Description'
import './Flight.css'
import Image from '../../Reusable Components/Image/Image'
const Flight = () => {
  return (
    <div className='flight'>
      <Navbar />
      <Image
        src={flightHero}
        srcWebp={flightHeroWebp}
        alt='Flight Hero Backgroud'
        className='flightHeroBackground'
      />
      <Next path='mars' right text='Landing On Mars' />
      <div className='flightHero'>
        <Header className='flightHeroHeader' text='TO THE STARS' />
        <Description
          className='flightHeroDescription'
          text='Praesent et urna erat. Quisque imperdiet scelerisque purus  interdum euismod. Morbi mi massa, congue eget pulvinar nec, pulvinar non purus. Aenean accumsan, diam ut egestas congue, urna diam tristique dolor, eu varius '
        />
      </div>
      <Mission imgPath={flightVideo} />
      <Footer className='flightFooter' />
    </div>
  )
}

export default Flight
