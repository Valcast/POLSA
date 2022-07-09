import Header from '../../Reusable Components/Header/Header'
import TurningLine from '../../Reusable Components/TurningLine/TurningLine'
import UpcomingEvent from './UpcomingEvent/UpcomingEvent'

import event1image from '../../images/eventsImages/event1image.jpg'
import event1imageWebp from '../../images/eventsImages/event1image.webp'

import './UpcomingEvents.css'

const UpcomingEvents = ({
  events = [{ date: '' }, { date: '' }, { date: '' }],
}) => {
  console.log(events[0])
  return (
    <section className='upcomingEvents'>
      <TurningLine classname='upcomingEventsTurningLine' />
      <Header text='Upcoming Events' className='upcomingEventsHeader' />
      <UpcomingEvent
        title={events[0].title}
        description={events[0].short_desc}
        date={events[0].date.slice(0, 10).replaceAll('-', '.')}
        src={event1image}
        srcWebp={event1imageWebp}
        alt='Event 1 Image'
        reversed
      />
      <UpcomingEvent
        title={events[1].title}
        description={events[1].short_desc}
        date={events[1].date.slice(0, 10).replaceAll('-', '.')}
        src={event1image}
        srcWebp={event1imageWebp}
        alt='Event 1 Image'
      />
      <UpcomingEvent
        title={events[2].title}
        description={events[2].short_desc}
        date={events[2].date.slice(0, 10).replaceAll('-', '.')}
        src={event1image}
        srcWebp={event1imageWebp}
        alt='Event 1 Image'
        reversed
      />
    </section>
  )
}

export default UpcomingEvents
