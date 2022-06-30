import Navbar from '../../Reusable Components/Navbar/Navbar'
import Header from '../../Reusable Components/Header/Header'
import Description from '../../Reusable Components/Description/Description'
import './Mars.css'
import marsHero from '../../images/marsHero.png'
import Next from '../../Reusable Components/Next/Next'

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
    </div>
  )
}

export default Mars
