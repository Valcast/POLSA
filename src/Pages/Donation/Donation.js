import Footer from '../../Reusable Components/Footer/Footer'
import Navbar from '../../Reusable Components/Navbar/Navbar'
import Button from '../../Reusable Components/Button/Button'
import TurningLine from '../../Reusable Components/TurningLine/TurningLine'

import './Donation.css'

const Donation = () => {
  return (
    <div className='donation'>
      <Navbar />
      <section className='donationProcess'>
        <div className='donationAmount'>
          <TurningLine classname='donationTurningLine' />
          <h1 className='donationHeader'>Choose amount</h1>
          <div className='donationAmountButtons'>
            <Button text='$10' />
            <Button text='$20' />
            <Button text='$30' />
            <Button text='$50' />
            <input
              className='donationAmountOther '
              placeholder='Other amount...'></input>
          </div>
          <p className='donationDescription'>
            Nam cursus luctus nibh et mollis. Phasellus in aliquet velit,
            eleifend lobortis tellus. Aliquam erat volutpat. Praesent
            sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo.
            Vivamus consequat sem urna,
          </p>
        </div>
        <div className='donationPayment'>
          <TurningLine classname='donationTurningLineReversed' />
          <h1 className='donationHeader'>Choose payment</h1>
          <div className='donationPaymentButtons'>
            <Button text='Visa' />
            <Button text='American Express' />
            <Button text='Paypal' />
          </div>
          <p className='donationDescription'>
            Nam cursus luctus nibh et mollis. Phasellus in aliquet velit,
            eleifend lobortis tellus. Aliquam erat volutpat. Praesent
            sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo.
            Vivamus consequat sem urna,
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Donation
