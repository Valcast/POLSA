import Header from '../../Reusable Components/Header/Header'
import './Events.css'
import Description from '../../Reusable Components/Description/Description'
import falcon9 from '../../images/falcon9.png'
import geosatellite from '../../images/geosatellite.png'
import Button from '../../Reusable Components/Button/Button'

const Events = () => {
  return (
    <div className='events'>
      <Header className='eventsHeader' text='Check our newest projects' />
      <div className='eventsRecent'>
        <div className='eventsRecentProject'>
          <img src={falcon9} alt='img' />
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
          <img src={geosatellite} alt='img' />
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
