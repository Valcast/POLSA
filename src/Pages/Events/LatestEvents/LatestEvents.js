import LatestEvent from './LatestEvent/LatestEvent'
import TurningLine from '../../../Reusable Components/TurningLine/TurningLine'

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
          src={events[0].imageJpg}
          srcWebp={events[0].imageWebp}
          title={typeof events == 'undefined' ? '' : events[0].title}
          description={typeof events == 'undefined' ? '' : events[0].short_desc}
          date={
            typeof events == 'undefined'
              ? ''
              : events[0].date.slice(0, 10).replaceAll('-', '.')
          }
        />
        <LatestEvent
          src={events[1].imageJpg}
          srcWebp={events[1].imageWebp}
          title={typeof events == 'undefined' ? '' : events[1].title}
          description={typeof events == 'undefined' ? '' : events[1].short_desc}
          date={
            typeof events == 'undefined'
              ? ''
              : events[1].date.slice(0, 10).replaceAll('-', '.')
          }
        />
        <LatestEvent
          title={typeof events == 'undefined' ? '' : events[2].title}
          description={typeof events == 'undefined' ? '' : events[2].short_desc}
          date={
            typeof events == 'undefined'
              ? ''
              : events[2].date.slice(0, 10).replaceAll('-', '.')
          }
          src={events[2].imageJpg}
          srcWebp={events[2].imageWebp}
        />
      </div>
    </section>
  )
}

export default LatestEvents
