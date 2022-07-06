import Description from '../../Reusable Components/Description/Description'
import Button from '../../Reusable Components/Button/Button'
import Logo from '../../Reusable Components/Logo/Logo'
import './Who.css'

const Who = () => {
  return (
    <section className='who'>
      <div className='whoText'>
        {' '}
        <h1>Who are we?</h1>
        <Description
          className='whoDescription'
          text='  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor '
        />
        <Button text='Explore' />
      </div>
      <Logo width={637} height={243} />
    </section>
  )
}

export default Who
