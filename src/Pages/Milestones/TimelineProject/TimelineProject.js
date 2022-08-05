import { Link } from 'react-router-dom'

import './TimelineProject.css'

const TimelineProject = ({
  header,
  description,
  year,
  className,
  reversed,
  path,
}) => {
  let isDragging = false
  return (
    <Link
      className={`timelineProject ${className} ${
        reversed ? 'timelineReversed' : ''
      }`}
      to={path}
      onMouseDown={() => {
        isDragging = false
      }}
      onMouseMove={() => {
        isDragging = true
      }}
      onClick={e => {
        if (isDragging) {
          e.preventDefault()
        }
      }}>
      <div className={` ${reversed ? 'timelineTextReversed' : ''}`}>
        {' '}
        <h1 className='timelineHeader'>{header}</h1>
        <p className='timelineDescription'>{description}</p>
      </div>
      <span className='timelineYear'>{year}</span>
    </Link>
  )
}

export default TimelineProject
