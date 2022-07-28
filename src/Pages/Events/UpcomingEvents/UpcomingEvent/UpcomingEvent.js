import Button from '../../../../Reusable Components/Button/Button'
import Image from '../../../../Reusable Components/Image/Image'

import './UpcomingEvent.css'

const UpcomingEvent = ({
  date = '',
  title = '',
  description = '',
  src = '',
  srcWebp = '',
  alt = '',
  reversed = false,
}) => {
  return (
    <div
      className={`upcomingEvent ${
        reversed == true ? 'upcomingEventReversed' : ''
      }`}>
      <Image
        src={src}
        srcWebp={srcWebp}
        alt={alt}
        className='upcomingEventImage'
        width='890'
        height='390'
      />
      <div className='upcomingEventText'>
        <span className='upcomingEventDate'>{date}</span>
        <h1 className='upcomingEventHeader'>{title}</h1>
        <p className='upcomingEventDescription'>{description}</p>
        <Button text='Read More' />
      </div>
    </div>
  )
}

export default UpcomingEvent
