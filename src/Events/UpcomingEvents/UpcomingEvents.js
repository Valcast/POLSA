import Header from '../../Reusable Components/Header/Header'
import TurningLine from '../../Reusable Components/TurningLine/TurningLine'
import UpcomingEvent from './UpcomingEvent/UpcomingEvent'

import event1image from '../../images/eventsImages/event1image.jpg'
import event1imageWebp from '../../images/eventsImages/event1image.webp'

import './UpcomingEvents.css'

const UpcomingEvents = () => {
  return (
    <section className='upcomingEvents'>
      <TurningLine classname='upcomingEventsTurningLine' />
      <Header text='Upcoming Events' className='upcomingEventsHeader' />
      <UpcomingEvent
        title='Star technology revamped'
        description='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna, vitae cursus ipsum placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in augue nibh. Sed viverra sit amet ligula vitae pretium.'
        date='09.12.2022'
        src={event1image}
        srcWebp={event1imageWebp}
        alt='Event 1 Image'
        reversed
      />
      <UpcomingEvent
        title='Star technology revamped'
        description='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna, vitae cursus ipsum placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in augue nibh. Sed viverra sit amet ligula vitae pretium.'
        date='09.12.2022'
        src={event1image}
        srcWebp={event1imageWebp}
        alt='Event 1 Image'
      />
      <UpcomingEvent
        title='Star technology revamped'
        description='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna, vitae cursus ipsum placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in augue nibh. Sed viverra sit amet ligula vitae pretium.'
        date='09.12.2022'
        src={event1image}
        srcWebp={event1imageWebp}
        alt='Event 1 Image'
        reversed
      />
    </section>
  )
}

export default UpcomingEvents
