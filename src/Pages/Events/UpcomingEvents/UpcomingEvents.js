import TurningLine from '../../../Reusable Components/TurningLine/TurningLine'
import UpcomingEvent from './UpcomingEvent/UpcomingEvent'

import event1image from '../../../images/eventsImages/event1image.jpg'
import event1imageWebp from '../../../images/eventsImages/event1image.webp'

import './UpcomingEvents.css'

const UpcomingEvents = ({ events }) => {
  return (
    <section className='upcomingEvents'>
      <TurningLine classname='upcomingEventsTurningLine' />
      <h1 className='upcomingEventsHeader'>Upcoming Events</h1>
      <UpcomingEvent
        title={typeof events == 'undefined' ? '' : events[0].title}
        description={typeof events == 'undefined' ? '' : events[0].short_desc}
        date={
          typeof events == 'undefined'
            ? ''
            : events[0].date.slice(0, 10).replaceAll('-', '.')
        }
        src={event1image}
        srcWebp={event1imageWebp}
        alt='Event 1 Image'
        reversed
      />
      <UpcomingEvent
        title={typeof events == 'undefined' ? '' : events[1].title}
        description={typeof events == 'undefined' ? '' : events[1].short_desc}
        date={
          typeof events == 'undefined'
            ? ''
            : events[1].date.slice(0, 10).replaceAll('-', '.')
        }
        src={event1image}
        srcWebp={event1imageWebp}
        alt='Event 1 Image'
      />
    </section>
  )
}

export default UpcomingEvents
