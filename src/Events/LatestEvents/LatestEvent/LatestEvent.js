import Button from '../../../Reusable Components/Button/Button'
import Description from '../../../Reusable Components/Description/Description'
import Header from '../../../Reusable Components/Header/Header'
import Image from '../../../Reusable Components/Image/Image'
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
      <Header className='latestEventHeader' text={title} />
      <Description className='latestEventDescription' text={description} />
      <Button text='Read More' />
    </div>
  )
}

export default LatestEvent
