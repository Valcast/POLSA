import Navbar from '../../Reusable Components/Navbar/Navbar'
import Header from '../../Reusable Components/Header/Header'
import Description from '../../Reusable Components/Description/Description'
import './Mars.css'
import marsHero from '../../images/marsHero.png'
import Mission from '../../Reusable Components/Mission/Mission'
import Next from '../../Reusable Components/Next/Next'
import marsVideo from '../../images/marsVideo.png'
import RocketSVG from './RocketSVG'
import TurningLine from '../../Reusable Components/TurningLine/TurningLine'
import Donate from '../../About/Donate/Donate'
import Footer from '../../Reusable Components/Footer/Footer'
const Mars = () => {
  return (
    <div className='mars'>
      <Navbar />
      <img
        className='marsHeroBackground'
        src={marsHero}
        alt='marsHeroBackground'></img>
      <div className='marsHero'>
        <Header
          className='marsHeroHeader'
          text={`NEXT STEP \n INTO THE FUTURE`}
        />
        <Description
          className='marsHeroDescription'
          text={`Praesent et urna erat. Quisque imperdiet scelerisque purus  interdum euismod. \n Morbi mi massa, congue eget pulvinar nec, pulvinar non purus.`}
        />
        <Next text='First Commercial Flight' />
      </div>
      <Mission imgPath={marsVideo} alt='marsVideo' />
      <div className='marsRocket'>
        <TurningLine classname='marsLine' />
        <Header className='marsHeader' text='Brand New Rocket' />
        <Description
          className='marsDescription'
          text='Praesent et urna erat. Quisque imperdiet scelerisque purus interdum euismod. Morbi mi massa, congue eget pulvinar nec, pulvinar non purus. Aenean accumsan, diam ut egestas congue, urna diam tristique dolor, eu varius nisl erat sed mauris. Aliquam a euismod erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dapibus lorem lorem, vitae commodo elit dapibus ac. Nullam enim sapien, mattis quis lacus vel, malesuada eleifend dolor. Cras consequat risus ac hendrerit rutrum. Vestibulum rhoncus viverra tellus vel aliquet. Aenean placerat, sem ut congue sagittis, quam nulla rutrum est, sed dignissim massa dui nec mi. Pellentesque non libero ac tellus luctus dignissim id sit amet massa. '
        />
        <RocketSVG />
        <Description
          className='missionDescription'
          text='Praesent et urna erat. Quisque imperdiet scelerisque purus interdum euismod. Morbi mi massa, congue eget pulvinar nec, pulvinar non purus. Aenean accumsan, diam ut egestas congue, urna diam tristique dolor, eu varius nisl erat sed mauris. Aliquam a euismod erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
        />
      </div>
      <Donate />
      <Footer className='marsFooter'/>
    </div>
  )
}

export default Mars
