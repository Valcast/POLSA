import { Link } from 'react-router-dom'
import './Next.css'

const Next = ({ right = false, text, path }) => {
  return (
    <Link to={`/${path}`} className={`next ${right ? 'right' : ''}`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='15.281'
        height='14.894'
        viewBox='0 0 15.281 14.894'>
        <path
          id='Icon_awesome-arrow-right'
          data-name='Icon awesome-arrow-right'
          d='M8.784,3.645l-.757-.757a.815.815,0,0,0-1.156,0L.24,9.514a.815.815,0,0,0,0,1.156l6.63,6.63a.815.815,0,0,0,1.156,0l.757-.757a.819.819,0,0,0-.014-1.17l-4.11-3.915h9.8a.817.817,0,0,0,.819-.819V9.549a.817.817,0,0,0-.819-.819h-9.8L8.77,4.815A.814.814,0,0,0,8.784,3.645Z'
          transform='translate(0 -2.647)'
          fill='#fff'
        />
      </svg>

      {text}
    </Link>
  )
}

export default Next
