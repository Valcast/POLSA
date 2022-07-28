import LatestEvent from './LatestEvent/LatestEvent'
import TurningLine from '../../../Reusable Components/TurningLine/TurningLine'

import latestEvent1 from '../../../images/eventsImages/latestEvent1.jpg'
import latestEvent1Webp from '../../../images/eventsImages/latestEvent1.webp'

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
      <h1 className='latestEventsHeader'>Latest Events</h1>
      <div className='latestEventsList'>
        <LatestEvent
          src={latestEvent1}
          srcWebp={latestEvent1Webp}
          title={typeof events == 'undefined' ? '' : events[0].title}
          description={typeof events == 'undefined' ? '' : events[0].short_desc}
          date={
            typeof events == 'undefined'
              ? ''
              : events[0].date.slice(0, 10).replaceAll('-', '.')
          }
        />
        <LatestEvent
          src={latestEvent1}
          srcWebp={latestEvent1Webp}
          title={typeof events == 'undefined' ? '' : events[1].title}
          description={typeof events == 'undefined' ? '' : events[1].short_desc}
          date={
            typeof events == 'undefined'
              ? ''
              : events[1].date.slice(0, 10).replaceAll('-', '.')
          }
        />
        <LatestEvent
          src={latestEvent1}
          srcWebp={latestEvent1Webp}
          title={typeof events == 'undefined' ? '' : events[2].title}
          description={typeof events == 'undefined' ? '' : events[2].short_desc}
          date={
            typeof events == 'undefined'
              ? ''
              : events[2].date.slice(0, 10).replaceAll('-', '.')
          }
        />
      </div>
    </section>
  )
}

export default LatestEvents
