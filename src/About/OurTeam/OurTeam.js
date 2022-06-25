import Description from '../../Reusable Components/Description/Description'
import Header from '../../Reusable Components/Header/Header'
import Profile from '../../Reusable Components/Profile/Profile'
import './OurTeam.css'

import pfp1 from '../../images/jimcarrey.png'
import pfp2 from '../../images/jasminesparrow.png'
import pfp3 from '../../images/jackdaniels.png'
import Line from '../../Reusable Components/Line/Line'

const OurTeam = () => {
  return (
    <div className='ourTeam'>
      <Header className='ourTeamHeader' text='Creators' />
      <Description
        className='ourTeamDescription'
        text='      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,'
      />
      <div className='team'>
        <Profile path={pfp1} name='Jim Carrey' job='CEO' />
        <Profile path={pfp2} name='Jasmine Sparrow' job='Head Scientist' />
        <Profile path={pfp3} name='Jack Daniels' job='Marketing Expert' />
      </div>
      <Line className='horizontal' />
    </div>
  )
}

export default OurTeam
