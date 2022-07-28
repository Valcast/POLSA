import TurningLine from '../TurningLine/TurningLine'
import './contact.css'
import Button from '../Button/Button'

const Contact = () => {
  return (
    <section className='contact'>
      <div className='turningLines'>
        <TurningLine />
        <TurningLine classname='reversed' />
      </div>
      <h2 className='contactHeader'>Would you like to contact with us?</h2>
      <p className='contactDescription'>
        Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend
        lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue
        augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem
        urna, vitae cursus ipsum placerat
      </p>

      <Button text='Contact us' to='contact' />
    </section>
  )
}

export default Contact
