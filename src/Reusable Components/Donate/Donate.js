import Button from '../Button/Button'
import Description from '../Description/Description'
import Header from '../Header/Header'
import AmericanExpress from '../PaymentIcons/AmericanExpress'
import Bitcoin from '../PaymentIcons/Bitcoin'
import Paypal from '../PaymentIcons/Paypal'
import Visa from '../PaymentIcons/Visa'
import TurningLine from '../TurningLine/TurningLine'
import './Donate.css'

const Donate = () => {
  return (
    <section className='donate'>
      <div className='turningLines'>
        <TurningLine />
        <TurningLine classname='reversed' />
      </div>
      <Header
        className='donateHeader'
        text='You can help us create cutting-edge technologies'
      />
      <Description
        className='donateDescription'
        text='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna, vitae cursus ipsum placerat'
      />
      <div className='paymentMethods'>
        <Paypal />
        <Visa />
        <AmericanExpress />
        <Bitcoin />
      </div>
      <Button to='donate' text='Donate' />
    </section>
  )
}

export default Donate
