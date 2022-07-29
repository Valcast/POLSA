import Navbar from '../../Reusable Components/Navbar/Navbar'
import Button from '../../Reusable Components/Button/Button'
import Image from '../../Reusable Components/Image/Image'
import home from '../../images/home.jpg'
import homeWebp from '../../images/home.webp'

import './Home.css'

const Homepage = () => {
  return (
    <div className='home'>
      <Navbar />
      {navigator.connection.effectiveType == '4g' ? (
        <video className='homeBackgroundVideo' autoPlay muted loop>
          <source
            src={new URL('home-background.mp4', import.meta.url)}
            type='video/mp4'
          />
          <track default kind='captions' />
        </video>
      ) : (
        <Image
          className='homeBackground'
          src={home}
          srcWebp={homeWebp}
          alt='Home Image'></Image>
      )}

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
