import Footer from '../../../Reusable Components/Footer/Footer'
import Mission from '../../../Reusable Components/Mission/Mission'
import Navbar from '../../../Reusable Components/Navbar/Navbar'
import flightVideo from '../../../images/flightVideo.jpg'
import flightVideoWebp from '../../../images/flightVideo.webp'
import flightHero from '../../../images/flightHero.jpg'
import flightHeroWebp from '../../../images/flightHero.webp'
import Next from '../../../Reusable Components/Next/Next'
import './Flight.css'
import Image from '../../../Reusable Components/Image/Image'
import Contact from '../../../Reusable Components/Contact/Contact'

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
      <Next path='moonBase' text='First Moon Base' />
      <Next path='mars' right text='Landing On Mars' />
      <section className='flightHero'>
        <h1 className='flightHeroHeader'>TO THE STARS</h1>
        <p className='flightHeroDescription'>
          Praesent et urna erat. Quisque imperdiet scelerisque purus interdum
          euismod. Morbi mi massa, congue eget pulvinar nec, pulvinar non purus.
          Aenean accumsan, diam ut egestas congue, urna diam tristique dolor, eu
          varius{' '}
        </p>
      </section>
      <Mission
        imagePath={flightVideo}
        imagePathWebp={flightVideoWebp}
        alt='Flight Video'
      />
      <Contact />
      <Footer className='flightFooter' />
    </div>
  )
}

export default Flight
