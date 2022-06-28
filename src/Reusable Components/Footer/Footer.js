import Button from '../Button/Button'
import Line from '../Line/Line'
import FacebookIcon from '../SocialsIcons/FacebookIcon'
import Government from '../SocialsIcons/GovernmentIcon'
import InstagramIcon from '../SocialsIcons/InstagramIcon'
import TwitterIcon from '../SocialsIcons/TwitterIcon'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footerFaq'>
        <p>Do you want to ask something?</p>
        <p>Check FAQ for frequently asked questions or send us an message</p>
        <div className='footerFaqButtons'>
          <Button text='FAQ' />
          <Button text='Contact' />
        </div>
      </div>
      <div className='footerMenu'>
        <ul className='footerMenuNav'>
          <li className='footerMenuItem'>Projects</li>
          <li className='footerMenuItem'>About</li>
          <li className='footerMenuItem'>Donate</li>
          <li className='footerMenuItem'>Contact</li>
          <li className='footerMenuItem'>Upcoming Events</li>
        </ul>
        <Line />
        <div className='footerSocials'>
          <div className='footerSocial'>
            <FacebookIcon /> <p className='footerSocialName'>fb.polsa.com</p>
          </div>
          <div className='footerSocial'>
            <InstagramIcon /> <p className='footerSocialName'>POLSA.</p>
          </div>
          <div className='footerSocial'>
            <TwitterIcon /> <p className='footerSocialName'>@POLSA</p>
          </div>
          <div className='footerSocial'>
            <Government /> <p className='footerSocialName'>gov.polsa.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
