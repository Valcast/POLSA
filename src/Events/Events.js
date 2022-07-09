import Footer from '../Reusable Components/Footer/Footer'
import Navbar from '../Reusable Components/Navbar/Navbar'
import Contact from '../Reusable Components/Contact/Contact'
import RecentEvent from './RecentEvent/RecentEvent'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents'
import LatestEvents from './LatestEvents/LatestEvents'

import './Events.css'
import { useEffect, useState } from 'react'

const Events = () => {
  const [eventsData, setEventsData] = useState({})

  const getEventsData = async () => {
    const response = await fetch('/.netlify/functions/getEventsData')
    const data = await response.json()

    setEventsData(data)
  }

  useEffect(() => {
    getEventsData()
  }, [])

  return (
    <div className='events'>
      <Navbar />
      <RecentEvent events={eventsData.latestEvents} />
      <UpcomingEvents events={eventsData.upcomingEvents} />
      <LatestEvents events={eventsData.latestEvents} />
      <Contact />
      <Footer />
    </div>
  )
}

export default Events
