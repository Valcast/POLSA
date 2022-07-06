import TurningLine from '../TurningLine/TurningLine'
import Header from '../Header/Header'
import Description from '../Description/Description'
import './contact.css'
import Button from '../Button/Button'

const Contact = () => {
  return (
    <section className='contact'>
      <div className='turningLines'>
        <TurningLine />
        <TurningLine classname='reversed' />
      </div>
      <Header
        className='contactHeader'
        text='Would you like to contact with us?'
      />
      <Description
        className='contactDescription'
        text='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna, vitae cursus ipsum placerat'
      />

      <div className='contactButtons'>
        <Button text='Contact us' to='contact' />
        <span className='contactText'>or</span>
        <input className='contactInput' placeholder='Leave an e-mail...' />
      </div>
    </section>
  )
}

export default Contact
