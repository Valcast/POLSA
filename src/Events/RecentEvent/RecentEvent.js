import Button from '../../Reusable Components/Button/Button'
import Description from '../../Reusable Components/Description/Description'
import Header from '../../Reusable Components/Header/Header'
import Image from '../../Reusable Components/Image/Image'

import eventsHero from '../../images/eventsHero.jpg'
import eventsHeroWebp from '../../images/eventsHero.webp'

import './RecentEvent.css'

const RecentEvent = ({ events = [{ date: '' }] }) => {
  return (
    <section className='recentEvent'>
      <Image
        src={eventsHero}
        srcWebp={eventsHeroWebp}
        alt='Events Hero'
        className='recentEventHero'
      />
      <div className='recentEventText'>
        <span className='recentEventDate'>
          {events[0].date.slice(0, 10).replaceAll('-', '.')}
        </span>
        <Header text={events[0].title} />
        <Description
          text={events[0].short_desc}
          className='recentEventTextDescription'
        />
        <Button text='Check More' />
      </div>
    </section>
  )
}

export default RecentEvent
