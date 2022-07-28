import FacebookIcon from '../../../../Reusable Components/SocialsIcons/FacebookIcon'
import InstagramIcon from '../../../../Reusable Components/SocialsIcons/InstagramIcon'
import TwitterIcon from '../../../../Reusable Components/SocialsIcons/TwitterIcon'
import './Profile.css'

const Profile = ({ path, name, job }) => {
  return (
    <div className='profile'>
      <div className='profilePicture'>
        <img src={path} alt={name} />
      </div>
      <div className='profileName'>{name}</div>
      <div className='profileJob'>{job}</div>
      <div className='profileSocials'>
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
    </div>
  )
}

export default Profile
