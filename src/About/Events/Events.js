import Header from '../../Reusable Components/Header/Header'
import './Events.css'
import Description from '../../Reusable Components/Description/Description'
import falcon9 from '../../images/falcon9.jpg'
import falcon9Webp from '../../images/falcon9.webp'
import geosatellite from '../../images/geosatellite.jpg'
import geosatelliteWebp from '../../images/geosatellite.webp'
import Button from '../../Reusable Components/Button/Button'
import Image from '../../Reusable Components/Image/Image'

const Events = () => {
  return (
    <div className='events'>
      <Header className='eventsHeader' text='Check our newest projects' />
      <div className='eventsRecent'>
        <div className='eventsRecentProject'>
          <Image src={falcon9} srcWebp={falcon9Webp} alt='Falcon 9' />
          <div className='eventsRecentProjectText'>
            <Header
              className='eventsRecentProjectTextHeader'
              text='New Prototype Falcon 9'
            />
            <Description
              className='eventsRecentProjectTextDescription'
              text='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. '
            />
            <Button text='Read more' />
          </div>
        </div>
        <div className='eventsRecentProject'>
          <Image
            src={geosatellite}
            srcWebp={geosatelliteWebp}
            alt='Geo Satelitte'
          />
          <div className='eventsRecentProjectText'>
            <Header
              className='eventsRecentProjectTextHeader'
              text='Lightweight GeoSatellite '
            />
            <Description
              className='eventsRecentProjectTextDescription'
              text='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. '
            />
            <Button text='Read more' />
          </div>
        </div>
      </div>
      <div className='eventsOther'></div>
    </div>
  )
}

export default Events
