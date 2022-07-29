import Footer from '../../Reusable Components/Footer/Footer'
import Navbar from '../../Reusable Components/Navbar/Navbar'
import Contact from '../../Reusable Components/Contact/Contact'
import RecentEvent from './RecentEvent/RecentEvent'
import UpcomingEvents from './UpcomingEvents/UpcomingEvents'

import { useEffect, useState } from 'react'

import './Events.css'
import LatestEvents from './LatestEvents/LatestEvents'

const Events = () => {
  const [data, setData] = useState([])

  const fetchEventsData = async () => {
    const res = await fetch('/.netlify/functions/getEventsData')
    const data = await res.json()
    setData(data)
  }

  useEffect(() => {
    fetchEventsData()
  }, [])

  return (
    <div className='events'>
      <Navbar />
      <RecentEvent event={data.latestEvents} />
      <UpcomingEvents events={data.upcomingEvents} />
      <LatestEvents events={data.latestEvents} />
      <Contact />
      <Footer />
    </div>
  )
}

export default Events
