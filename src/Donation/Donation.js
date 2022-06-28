import Footer from '../Reusable Components/Footer/Footer'
import Navbar from '../Reusable Components/Navbar/Navbar'
import Header from '../Reusable Components/Header/Header'
import Description from '../Reusable Components/Description/Description'
import './Donation.css'
import Button from '../Reusable Components/Button/Button'
import Line from '../Reusable Components/Line/Line'
import TurningLine from '../Reusable Components/TurningLine/TurningLine'

const Donation = () => {
  return (
    <div className='donation'>
      <Navbar />
      <div className='donationProcess'>
        <div className='donationAmount'>
          <TurningLine classname='donationTurningLine' />
          <Header className='donationHeader' text='Choose amount' />
          <div className='donationAmountButtons'>
            <Button text='$10' />
            <Button text='$20' />
            <Button text='$30' />
            <Button text='$50' />
            <input
              className='donationAmountOther '
              placeholder='Other amount...'></input>
          </div>
          <Description
            className='donationDescription'
            text='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna,'
          />
        </div>
        <Line className='donationProcessLine' />
        <div className='donationPayment'>
          <TurningLine classname='donationTurningLineReversed' />
          <Header className='donationHeader' text='Choose payment' />
          <div className='donationPaymentButtons'>
            <Button text='Visa' />
            <Button text='American Express' />
            <Button text='Paypal' />
          </div>
          <Description
            className='donationDescription'
            text='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna,'
          />
        </div>
      </div>
      <div className='donationOther'>
        <TurningLine classname='donationTurningLine' />
        <Header className='donationHeader' text='Other ways to give:' />
        <div className='donationOtherButtons'>
          <Button text='Bitcoin' />
          <Button text='Other' />
          <Button text='Nature' />
        </div>
        <Description
          className='donationOtherDescription'
          text='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna, vitae cursus ipsum placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in augue nibh. Sed viverra sit amet ligula vitae pretium.'
        />
      </div>
      <Footer />
    </div>
  )
}

export default Donation
