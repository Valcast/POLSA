import Header from '../../Reusable Components/Header/Header'
import LatestEvent from './LatestEvent/LatestEvent'
import TurningLine from '../../Reusable Components/TurningLine/TurningLine'

import latestEvent1 from '../../images/eventsImages/latestEvent1.jpg'
import latestEvent1Webp from '../../images/eventsImages/latestEvent1.webp'

import './LatestEvents.css'

const LatestEvents = () => {
  return (
    <section className='LatestEvents'>
      <div className='eventsTurningLines'>
        <TurningLine />
        <TurningLine classname='eventsTurningLinesReversed' />
      </div>
      <Header text='Latest Events' className='latestEventsHeader' />
      <div className='latestEventsList'>
        <LatestEvent
          src={latestEvent1}
          srcWebp={latestEvent1Webp}
          title='Star technology revamped'
          description='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna, vitae cursus ipsum placerat in. '
          date='05.03.2022'
        />
        <LatestEvent
          src={latestEvent1}
          srcWebp={latestEvent1Webp}
          title='Star technology revamped'
          description='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna, vitae cursus ipsum placerat in. '
          date='05.03.2022'
        />
        <LatestEvent
          src={latestEvent1}
          srcWebp={latestEvent1Webp}
          title='Star technology revamped'
          description='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna, vitae cursus ipsum placerat in. '
          date='05.03.2022'
        />
      </div>
    </section>
  )
}

export default LatestEvents
