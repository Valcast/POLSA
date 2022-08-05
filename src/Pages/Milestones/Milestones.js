import Image from '../../Reusable Components/Image/Image'
import Navbar from '../../Reusable Components/Navbar/Navbar'

import TimelineBackgroud from '../../images/TimelineBackground.jpg'
import TimelineLine from './TimelineLine/TimelineLine'
import TimelineProject from './TimelineProject/TimelineProject'

import { useRef } from 'react'

import './Milestones.css'

const Milestones = () => {
  let offset = 0
  let isDown = false
  let timelineDiv = useRef(null)
  let timelineBackgroundDiv = useRef(null)

  return (
    <div className='milestones'>
      <Navbar />
      <Image
        src={TimelineBackgroud}
        alt='Timelines Background'
        className='timelineBackground'
        ref={timelineBackgroundDiv}
      />
      <div
        className='timeline'
        role='tablist'
        tabIndex={0}
        ref={timelineDiv}
        onMouseDown={e => {
          e.preventDefault()
          isDown = true
          offset = timelineDiv.current.offsetLeft - e.clientX
          timelineDiv.current.style.transition = ''
        }}
        onMouseMove={e => {
          e.preventDefault()
          if (isDown) {
            if (e.clientX + offset > 800) {
              return
            }

            if (e.clientX + offset < -1800) {
              return
            }
            timelineDiv.current.style.left = `${e.clientX + offset}px`
            timelineBackgroundDiv.current.style.left = `${
              (e.clientX + offset) / 2 - 500
            }px`
            console.log((e.clientX + offset) / 2 - 500)
          }
        }}
        onMouseUp={e => {
          if (e.clientX + offset > 440) {
            timelineDiv.current.style.transition = 'all 0.5s'
            timelineDiv.current.style.left = `450px`
          }
          if (e.clientX + offset < -1400) {
            timelineDiv.current.style.transition = 'all 0.5s'
            timelineDiv.current.style.left = `-1400px`
          }
          isDown = false
        }}>
        <TimelineProject
          header='Our First Human in Space'
          description='Nam cursus luctus nibh et mollis. Phasellus in aliquet 
                      velit, eleifend lobortis tellus. Aliquam erat volutpat. 
                      Praesent sollicitudin congue augue pulvinar lacinia. 
                      Sed eget vulputate leo. Vivamus consequat sem urna, 
                      '
          year='2022'
          className='timelineFirst'
          path='/'
        />
        <TimelineProject
          header='Creating Moon Base'
          description='Nam cursus luctus nibh et mollis. Phasellus in aliquet 
                      velit, eleifend lobortis tellus. Aliquam erat volutpat. 
                      Praesent sollicitudin congue augue pulvinar lacinia. 
                      Sed eget vulputate leo. Vivamus consequat sem urna, 
                      '
          year='2024'
          className='timelineSecond'
          reversed
          path='/moonbase'
        />
        <TimelineProject
          header='First Commercial Flight'
          description='Nam cursus luctus nibh et mollis. Phasellus in aliquet 
                      velit, eleifend lobortis tellus. Aliquam erat volutpat. 
                      Praesent sollicitudin congue augue pulvinar lacinia. 
                      Sed eget vulputate leo. Vivamus consequat sem urna, 
                      '
          year='2026'
          className='timelineThird'
          path='/flight'
        />
        <TimelineProject
          header='Mars Base'
          description='Nam cursus luctus nibh et mollis. Phasellus in aliquet 
                      velit, eleifend lobortis tellus. Aliquam erat volutpat. 
                      Praesent sollicitudin congue augue pulvinar lacinia. 
                      Sed eget vulputate leo. Vivamus consequat sem urna, 
                      '
          year='2028'
          className='timelineFourth'
          reversed
          path='/mars'
        />
        <TimelineLine />
      </div>
    </div>
  )
}

export default Milestones
