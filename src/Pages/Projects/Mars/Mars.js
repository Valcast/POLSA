import Navbar from '../../../Reusable Components/Navbar/Navbar'
import Mission from '../../../Reusable Components/Mission/Mission'
import Next from '../../../Reusable Components/Next/Next'
import marsHero from '../../../images/marsHero.jpg'
import marsHeroWebp from '../../../images/marsHero.webp'
import marsVideo from '../../../images/marsVideo.jpg'
import marsVideoWebp from '../../../images/marsVideo.webp'
import RocketSVG from './RocketSVG'
import TurningLine from '../../../Reusable Components/TurningLine/TurningLine'
import Donate from '../../../Reusable Components/Donate/Donate'
import Footer from '../../../Reusable Components/Footer/Footer'
import Image from '../../../Reusable Components/Image/Image'

import './Mars.css'

const Mars = () => {
  return (
    <div className='mars'>
      <Navbar />
      <Image
        src={marsHero}
        srcWebp={marsHeroWebp}
        alt='Mars Hero Image'
        className='marsHeroBackground'
      />
      <div className='marsHero'>
        <h1 className='marsHeroHeader'>{`NEXT STEP \n INTO THE FUTURE`}</h1>
        <p className='marsHeroDescription'>{`Praesent et urna erat. Quisque imperdiet scelerisque purus  interdum euismod. \n Morbi mi massa, congue eget pulvinar nec, pulvinar non purus.`}</p>
        <Next path='flight' text='First Commercial Flight' />
      </div>
      <Mission
        imagePath={marsVideo}
        imagePathWebp={marsVideoWebp}
        alt='marsVideo'
      />
      <section className='marsRocket'>
        <TurningLine classname='marsLine' />
        <h2 className='marsHeader'>Brand New Rocket</h2>
        <p className='marsDescription'>
          Praesent et urna erat. Quisque imperdiet scelerisque purus interdum
          euismod. Morbi mi massa, congue eget pulvinar nec, pulvinar non purus.
          Aenean accumsan, diam ut egestas congue, urna diam tristique dolor, eu
          varius nisl erat sed mauris. Aliquam a euismod erat. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Donec dapibus lorem lorem, vitae commodo elit dapibus
          ac. Nullam enim sapien, mattis quis lacus vel, malesuada eleifend
          dolor. Cras consequat risus ac hendrerit rutrum. Vestibulum rhoncus
          viverra tellus vel aliquet. Aenean placerat, sem ut congue sagittis,
          quam nulla rutrum est, sed dignissim massa dui nec mi. Pellentesque
          non libero ac tellus luctus dignissim id sit amet massa.{' '}
        </p>
        <RocketSVG />
        <p className='marsDescription'>
          Praesent et urna erat. Quisque imperdiet scelerisque purus interdum
          euismod. Morbi mi massa, congue eget pulvinar nec, pulvinar non purus.
          Aenean accumsan, diam ut egestas congue, urna diam tristique dolor, eu
          varius nisl erat sed mauris. Aliquam a euismod erat. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas.
        </p>
      </section>
      <Donate />
      <Footer className='marsFooter' />
    </div>
  )
}

export default Mars
