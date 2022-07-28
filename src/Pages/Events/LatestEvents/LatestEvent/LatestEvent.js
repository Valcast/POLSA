import Button from '../../../../Reusable Components/Button/Button'
import Image from '../../../../Reusable Components/Image/Image'

import './LatestEvent.css'

const LatestEvent = ({
  date = '',
  title = '',
  description = '',
  src = '',
  srcWebp = '',
  alt = '',
}) => {
  return (
    <div className='latestEvent'>
      <span className='latestEventDate'>{date}</span>
      <Image
        className='latestEventImage'
        src={src}
        srcWebp={srcWebp}
        alt={alt}
        width='460'
        height='360'
      />
      <h1 className='latestEventHeader'>{title}</h1>
      <p className='latestEventDescription'>{description}</p>
      <Button text='Read More' />
    </div>
  )
}

export default LatestEvent
