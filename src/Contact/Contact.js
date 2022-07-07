import Navbar from '../Reusable Components/Navbar/Navbar'
import Footer from '../Reusable Components/Footer/Footer'
import TurningLine from '../Reusable Components/TurningLine/TurningLine'
import Header from '../Reusable Components/Header/Header'
import Description from '../Reusable Components/Description/Description'
import FacebookIcon from '../Reusable Components/SocialsIcons/FacebookIcon'
import TwitterIcon from '../Reusable Components/SocialsIcons/TwitterIcon'
import InstagramIcon from '../Reusable Components/SocialsIcons/InstagramIcon'
import Government from '../Reusable Components/SocialsIcons/GovernmentIcon'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contactPage'>
      <Navbar />
      <section className='contactPageSection'>
        <div className='contactPageProcess'>
          <TurningLine classname='contactPageTurningLine' />
          <Header text='Contact us via form' className='contactPageHeader' />
          <Description
            text='Nam cursus luctus nibh et mollis. Phasellus in aliquet velit, eleifend lobortis tellus. Aliquam erat volutpat. Praesent sollicitudin congue augue pulvinar lacinia. Sed eget vulputate leo. Vivamus consequat sem urna, vitae cursus ipsum placerat in. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in augue nibh. Sed viverra sit amet ligula vitae pretium.'
            className='contactPageDescription'
          />
          <form className='contactForm'>
            <div className='contactFormData'>
              <input
                className='contactFormDataInput'
                type='text'
                placeholder='E-mail'></input>
              <input
                className='contactFormDataInput'
                type='text'
                placeholder='Name'></input>
            </div>
            <textarea
              className='contactFormDataText'
              type='textarea'
              placeholder='Text...'></textarea>
            <input
              className='contactFormDataButton'
              type='submit'
              value='Send'></input>
          </form>
        </div>
        <div className='contactLine'></div>
        <div className='contactInformation'>
          <Header text='Contact Information' />
          <address className='contactInformationAddresses'>
            <ul className='contactInformationAddressesList'>
              <li className='contactInformationAddress'>
                <span>Street Address:</span> 3839 D Street
              </li>
              <li className='contactInformationAddress'>
                <span>City:</span> Westland
              </li>
              <li className='contactInformationAddress'>
                <span>State:</span> Michigan
              </li>
              <li className='contactInformationAddress'>
                <span>Zipcode:</span> 48185
              </li>
              <li className='contactInformationAddress'>
                <span>Telephone Number:</span> 586-557-7677
              </li>
              <li className='contactInformationAddress'>
                <span>Mobile Numer:</span> 989-309-7893
              </li>
              <li className='contactInformationAddress'>
                <span>E-mail:</span> random.email@gmail.com
              </li>
            </ul>

            <hr className='contactInformationLine'></hr>
            <ul className='contactSocials'>
              <li className='contactSocial'>
                <FacebookIcon /> <span>fb.polsa.com</span>
              </li>
              <li className='contactSocial'>
                <InstagramIcon /> <span>POLSA.</span>
              </li>
              <li className='contactSocial'>
                <TwitterIcon /> <span>@POLSA</span>
              </li>
              <li className='contactSocial'>
                <Government /> <span>gov.polsa.com</span>
              </li>
            </ul>
          </address>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact
