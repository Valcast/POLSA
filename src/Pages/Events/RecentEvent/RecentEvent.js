import Button from '../../../Reusable Components/Button/Button'
import Image from '../../../Reusable Components/Image/Image'

import imageJPG from '../../../images/eventsHero.jpg'
import imageWEBP from '../../../images/eventsHero.webp'

import './RecentEvent.css'

const RecentEvent = ({ event = [{ date: '' }] }) => {
  return (
    <section className='recentEvent'>
      <Image
        alt='Events Hero'
        className='recentEventHero'
        src={imageJPG}
        srcWebp={imageWEBP}
      />
      <div className='recentEventText'>
        <span className='recentEventDate'>
          {event[0].date.slice(0, 10).replaceAll('-', '.')}
        </span>
        <h2>{event[0].title}</h2>
        <p className='recentEventTextDescription'>{event[0].short_desc}</p>
        <Button text='Check More' />
      </div>
    </section>
  )
}

export default RecentEvent
