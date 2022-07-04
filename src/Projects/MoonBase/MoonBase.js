import moonHero from '../../images/moonBaseHero.jpg'
import moonHeroWebp from '../../images/moonBaseHero.jpg'
import Description from '../../Reusable Components/Description/Description'
import Header from '../../Reusable Components/Header/Header'
import Navbar from '../../Reusable Components/Navbar/Navbar'
import Next from '../../Reusable Components/Next/Next'
import Mission from '../../Reusable Components/Mission/Mission'
import moonBaseVideo from '../../images/moonBaseVideo.png'
import Footer from '../../Reusable Components/Footer/Footer'
import Donate from '../../About/Donate/Donate'
import Image from '../../Reusable Components/Image/Image'
import './MoonBase.css'

const MoonBase = () => {
  return (
    <div className='moon'>
      <Navbar />
      <Image
        src={moonHero}
        srcWebp={moonHeroWebp}
        alt='Flight Hero Backgroud'
        className='moonHeroBackground'
      />
      <Next path='firstHuman' text='Our First Human In Space' />
      <Next path='flight' right text='First Commercial Flight' />
      <div className='moonHero'>
        <Header
          className='moonHeroHeader'
          text='The unknown becomes available'
        />
        <Description
          className='moonHeroDescription'
          text='Praesent et urna erat. Quisque imperdiet scelerisque purus interdum euismod. Morbi mi massa, congue eget pulvinar nec, pulvinar non purus. Aenean accumsan, diam ut egestas congue, urna diam tristique dolor, eu varius nisl erat sed mauris. Aliquam a euismod erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dapibus lorem lorem, vitae commodo elit dapibus ac. Nullam enim sapien, mattis quis lacus vel, malesuada eleifend dolor. Cras consequat risus ac hendrerit rutrum. Vestibulum rhoncus viverra tellus vel aliquet.'
        />
      </div>
      <Mission imgPath={moonBaseVideo} />
      <Donate />
      <Footer />
    </div>
  )
}

export default MoonBase
