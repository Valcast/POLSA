import './Events.css'
import falcon9 from '../../../images/falcon9.jpg'
import falcon9Webp from '../../../images/falcon9.webp'
import geosatellite from '../../../images/geosatellite.jpg'
import geosatelliteWebp from '../../../images/geosatellite.webp'
import Button from '../../../Reusable Components/Button/Button'
import Image from '../../../Reusable Components/Image/Image'

const Events = () => {
  return (
    <section className='events'>
      <h1 className='eventsHeader'>Check our newest projects</h1>
      <div className='eventsRecent'>
        <div className='eventsRecentProject'>
          <Image src={falcon9} srcWebp={falcon9Webp} alt='Falcon 9' />
          <div className='eventsRecentProjectText'>
            <h1 className='eventsRecentProjectTextHeader'>
              New Prototype Falcon
            </h1>
            <p className='eventsRecentProjectTextDescription'>
              Nam cursus luctus nibh et mollis. Phasellus in aliquet velit,
              eleifend lobortis tellus. Aliquam erat volutpat. Praesent
              sollicitudin congue augue pulvinar lacinia. Sed eget vulputate
              leo.
            </p>
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
            <h1 className='eventsRecentProjectTextHeader'>
              Lightweight GeoSatellite
            </h1>
            <p className='eventsRecentProjectTextDescription'>
              Nam cursus luctus nibh et mollis. Phasellus in aliquet velit,
              eleifend lobortis tellus. Aliquam erat volutpat. Praesent
              sollicitudin congue augue pulvinar lacinia. Sed eget vulputate
              leo.
            </p>
            <Button text='Read more' />
          </div>
        </div>
      </div>
      <div className='eventsOther'></div>
    </section>
  )
}

export default Events
