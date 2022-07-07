import Footer from '../Reusable Components/Footer/Footer'
import Navbar from '../Reusable Components/Navbar/Navbar'
import Contact from '../Reusable Components/Contact/Contact'
import RecentEvent from './RecentEvent/RecentEvent'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents'
import LatestEvents from './LatestEvents/LatestEvents'

import './Events.css'

const Events = () => {
  return (
    <div className='events'>
      <Navbar />
      <RecentEvent />
      <UpcomingEvents />
      <LatestEvents />
      <Contact />
      <Footer />
    </div>
  )
}

export default Events
