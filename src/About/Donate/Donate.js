import Button from '../../Reusable Components/Button/Button'
import Description from '../../Reusable Components/Description/Description'
import Header from '../../Reusable Components/Header/Header'
import AmericanExpress from '../../Reusable Components/PaymentIcons/AmericanExpress'
import Bitcoin from '../../Reusable Components/PaymentIcons/Bitcoin'
import Paypal from '../../Reusable Components/PaymentIcons/Paypal'
import Visa from '../../Reusable Components/PaymentIcons/Visa'
import TurningLine from '../../Reusable Components/TurningLine/TurningLine'
import './Donate.css'

const Donate = () => {
  return (
    <div className='donate'>
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
      <Button text='Donate' />
    </div>
  )
}

export default Donate
