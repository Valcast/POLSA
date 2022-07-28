import './Home.css'
import Navbar from '../../Reusable Components/Navbar/Navbar'
import Button from '../../Reusable Components/Button/Button'

const Homepage = () => {
  return (
    <div className='home'>
      <Navbar />
      <video className='homeBackground' autoPlay muted loop>
        <source
          src={new URL('home-background.mp4', import.meta.url)}
          type='video/mp4'
        />
        <track default kind='captions' />
      </video>

      <header className='heroWrapper'>
        <h1 className='heroHeader'>POLAND CAN INTO SPACE</h1>
        <p className='heroDescription'>
          Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend
          lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue
          augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem
          urna, vitae cursus ipsum placerat in.
        </p>
      </header>

      <Button text='Milestones' />
    </div>
  )
}

export default Homepage
