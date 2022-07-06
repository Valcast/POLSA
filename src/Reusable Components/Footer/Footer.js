import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import FacebookIcon from '../SocialsIcons/FacebookIcon'
import Government from '../SocialsIcons/GovernmentIcon'
import InstagramIcon from '../SocialsIcons/InstagramIcon'
import TwitterIcon from '../SocialsIcons/TwitterIcon'
import './Footer.css'

const Footer = ({ className }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className='footerFaq'>
        Do you want to ask something? <br /> <br />
        Check FAQ for frequently asked questions or send us an message
        <div className='footerFaqButtons'>
          <Button text='FAQ' to='faq' />
          <Button text='Contact' to='contact' />
        </div>
      </div>
      <div className='footerMenu'>
        <menu className='footerMenuNav'>
          <li className='footerMenuItem'>
            <Link to='/projects'>Projects</Link>
          </li>
          <li className='footerMenuItem'>
            <Link to='/about'>About</Link>
          </li>
          <li className='footerMenuItem'>
            <Link to='/donate'>Donate</Link>
          </li>
          <li className='footerMenuItem'>
            <Link to='/contact'>Contact</Link>
          </li>
          <li className='footerMenuItem'>
            <Link to='/events'>Upcoming events</Link>
          </li>
        </menu>
        <address className='footerSocials'>
          <ul>
            <li className='footerSocial'>
              <FacebookIcon />{' '}
              <span className='footerSocialName'>fb.polsa.com</span>
            </li>
            <li className='footerSocial'>
              <InstagramIcon /> <span className='footerSocialName'>POLSA.</span>
            </li>
            <li className='footerSocial'>
              <TwitterIcon /> <span className='footerSocialName'>@POLSA</span>
            </li>
            <li className='footerSocial'>
              <Government />{' '}
              <span className='footerSocialName'>gov.polsa.com</span>
            </li>
          </ul>
        </address>
      </div>
    </footer>
  )
}

export default Footer
