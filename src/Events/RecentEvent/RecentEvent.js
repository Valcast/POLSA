import Button from '../../Reusable Components/Button/Button'
import Description from '../../Reusable Components/Description/Description'
import Header from '../../Reusable Components/Header/Header'
import Image from '../../Reusable Components/Image/Image'

import eventsHero from '../../images/eventsHero.jpg'
import eventsHeroWebp from '../../images/eventsHero.webp'

import './RecentEvent.css'

const RecentEvent = () => {
  return (
    <section className='recentEvent'>
      <Image
        src={eventsHero}
        srcWebp={eventsHeroWebp}
        alt='Events Hero'
        className='recentEventHero'
      />
      <div className='recentEventText'>
        <Header text='Geothermal industry in outer colonies' />
        <Description
          text='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna, vitae cursus ipsum placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in augue nibh. Sed viverra sit amet ligula vitae pretium.'
          className='recentEventTextDescription'
        />
        <Button text='Check More' />
      </div>
    </section>
  )
}

export default RecentEvent
