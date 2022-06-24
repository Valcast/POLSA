import Description from '../../Reusable Components/Description/Description'
import Header from '../../Reusable Components/Header/Header'
import Profile from '../../Reusable Components/Profile/Profile'
import './OurTeam.css'

const OurTeam = () => {
  return (
    <div className='ourTeam'>
      <Header className='ourTeamHeader' text='Our Team' />
      <Description
        className='ourTeamDescription'
        text='      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
      />
      <div className='team'>
        <Profile name='Jim Carrey' job='CEO' />
        <Profile name='Jim Carrey' job='CEO' />
        <Profile name='Jim Carrey' job='CEO' />
      </div>
    </div>
  )
}

export default OurTeam
