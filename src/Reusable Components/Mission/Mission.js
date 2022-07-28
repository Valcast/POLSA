import TurningLine from '../TurningLine/TurningLine'
import './Mission.css'
import Image from '../Image/Image'

const Mission = ({ imagePath, imagePathWebp, alt }) => {
  return (
    <section className='mission'>
      <TurningLine classname='missionLine' />
      <h2 className='missionHeader'>Mission</h2>
      <p className='missionDescription'>
        Praesent et urna erat. Quisque imperdiet scelerisque purus interdum
        euismod. Morbi mi massa, congue eget pulvinar nec, pulvinar non purus.
        Aenean accumsan, diam ut egestas congue, urna diam tristique dolor, eu
        varius nisl erat sed mauris. Aliquam a euismod erat. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas. Donec dapibus lorem lorem, vitae commodo elit dapibus ac.
        Nullam enim sapien, mattis quis lacus vel, malesuada eleifend dolor.
        Cras consequat risus ac hendrerit rutrum. Vestibulum rhoncus viverra
        tellus vel aliquet. Aenean placerat, sem ut congue sagittis, quam nulla
        rutrum est, sed dignissim massa dui nec mi. Pellentesque non libero ac
        tellus luctus dignissim id sit amet massa.{' '}
      </p>
      <Image
        src={imagePath}
        srcWebp={imagePathWebp}
        alt={alt}
        className='missionImage'
        width='1520'
        height='670'
      />
      <p className='missionDescription'>
        Praesent et urna erat. Quisque imperdiet scelerisque purus interdum
        euismod. Morbi mi massa, congue eget pulvinar nec, pulvinar non purus.
        Aenean accumsan, diam ut egestas congue, urna diam tristique dolor, eu
        varius nisl erat sed mauris. Aliquam a euismod erat. Pellentesque
        habitant morbi tristique senectus et netus et malesuada fames ac turpis
        egestas.
      </p>
    </section>
  )
}

export default Mission
