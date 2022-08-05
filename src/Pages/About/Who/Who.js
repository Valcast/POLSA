import Logo from '../../../Reusable Components/Logo/Logo'
import { useState, useRef, useEffect } from 'react'

import './Who.css'

const Who = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  let videoDiv = useRef(null)

  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
      setIsVideoPlaying(false)
    }
  })

  useEffect(() => {
    if (isVideoPlaying) {
      videoDiv.current.requestFullscreen()
    }
  }, [isVideoPlaying])

  return (
    <section className='who'>
      <div className='whoText'>
        <h1>Who are we?</h1>
        <p className='whoDescription'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor
        </p>
        <button
          className='link whoButton'
          onClick={() => {
            setIsVideoPlaying(true)
          }}>
          Explore{' '}
          <svg
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
            fill='white'>
            <path d='M23 12l-22 12v-24l22 12zm-21 10.315l18.912-10.315-18.912-10.315v20.63z' />
          </svg>
        </button>
        {isVideoPlaying == true ? (
          <video
            className='whoVideo'
            autoPlay
            ref={videoDiv}
            onEnded={() => {
              setIsVideoPlaying(false)
            }}
            onKeyDown={e => {
              console.log(e.key)
            }}>
            <source
              src={new URL('polsaAbout.mp4', import.meta.url)}
              type='video/mp4'
            />
            <track kind='captions' />
          </video>
        ) : (
          <></>
        )}
      </div>
      <Logo width={637} height={243} />
    </section>
  )
}

export default Who
