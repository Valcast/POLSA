import TurningLine from '../TurningLine/TurningLine'
import Header from '../Header/Header'
import Description from '../Description/Description'
import './Mission.css'

const Mission = ({ imgPath, alt }) => {
  return (
    <div className='mission'>
      <TurningLine classname='missionLine' />
      <Header className='missionHeader' text='Mission' />
      <Description
        className='missionDescription'
        text='Praesent et urna erat. Quisque imperdiet scelerisque purus interdum euismod. Morbi mi massa, congue eget pulvinar nec, pulvinar non purus. Aenean accumsan, diam ut egestas congue, urna diam tristique dolor, eu varius nisl erat sed mauris. Aliquam a euismod erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec dapibus lorem lorem, vitae commodo elit dapibus ac. Nullam enim sapien, mattis quis lacus vel, malesuada eleifend dolor. Cras consequat risus ac hendrerit rutrum. Vestibulum rhoncus viverra tellus vel aliquet. Aenean placerat, sem ut congue sagittis, quam nulla rutrum est, sed dignissim massa dui nec mi. Pellentesque non libero ac tellus luctus dignissim id sit amet massa. '
      />
      <img className="missionVideo"src={imgPath} alt={alt}></img>
      <Description
        className='missionDescription'
        text='Praesent et urna erat. Quisque imperdiet scelerisque purus interdum euismod. Morbi mi massa, congue eget pulvinar nec, pulvinar non purus. Aenean accumsan, diam ut egestas congue, urna diam tristique dolor, eu varius nisl erat sed mauris. Aliquam a euismod erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.'
      />
    </div>
  )
}

export default Mission
