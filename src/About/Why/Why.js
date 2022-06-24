import Description from '../../Reusable Components/Description/Description'
import Header from '../../Reusable Components/Header/Header'
import TurningLine from '../../Reusable Components/TurningLine/TurningLine'
import './Why.css'

const Why = () => {
  return (
    <div className='why'>
      <TurningLine classname='turningLine' />
      <Header classname='whyHeader' text='Why are we doing this?' />
      <Description
        className='whyDescription'
        text='      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
      />
      <TurningLine classname='reversed' />
    </div>
  )
}

export default Why
