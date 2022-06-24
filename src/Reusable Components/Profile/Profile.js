import FacebookIcon from '../SocialsIcons/FacebookIcon'
import InstagramIcon from '../SocialsIcons/InstagramIcon'
import TwitterIcon from '../SocialsIcons/TwitterIcon'
import './Profile.css'

const Profile = (path, name) => {
  return (
    <div className='profile'>
      <div className='profilePicture'>
        <img src={path} alt={name} />
      </div>
      <div className='profileName'>[name]</div>
      <div className='profileJob'>[job]</div>
      <div className='profileSocials'>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  )
}

export default Profile
