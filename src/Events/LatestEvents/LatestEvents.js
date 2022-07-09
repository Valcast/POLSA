import Header from '../../Reusable Components/Header/Header'
import LatestEvent from './LatestEvent/LatestEvent'
import TurningLine from '../../Reusable Components/TurningLine/TurningLine'

import latestEvent1 from '../../images/eventsImages/latestEvent1.jpg'
import latestEvent1Webp from '../../images/eventsImages/latestEvent1.webp'

import './LatestEvents.css'

const LatestEvents = ({
  events = [{ date: '' }, { date: '' }, { date: '' }],
}) => {
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
          title={events[0].title}
          description={events[0].short_desc}
          date={events[0].date.slice(0, 10).replaceAll('-', '.')}
        />
        <LatestEvent
          src={latestEvent1}
          srcWebp={latestEvent1Webp}
          title={events[1].title}
          description={events[1].short_desc}
          date={events[1].date.slice(0, 10).replaceAll('-', '.')}
        />
        <LatestEvent
          src={latestEvent1}
          srcWebp={latestEvent1Webp}
          title={events[2].title}
          description={events[2].short_desc}
          date={events[2].date.slice(0, 10).replaceAll('-', '.')}
        />
      </div>
    </section>
  )
}

export default LatestEvents
