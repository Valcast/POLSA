import Button from '../../../Reusable Components/Button/Button'
import Description from '../../../Reusable Components/Description/Description'
import Header from '../../../Reusable Components/Header/Header'
import Image from '../../../Reusable Components/Image/Image'

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
    <div className={`upcomingEvent ${reversed == true ? "upcomingEventReversed" : ""}`}>
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
        <Header text={title} className='upcomingEventHeader' />
        <Description text={description} className='upcomingEventDescription' />
        <Button text='Read More' />
      </div>
    </div>
  )
}

export default UpcomingEvent
