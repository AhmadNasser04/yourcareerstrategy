import React from 'react'
import mobileVideo from '../../assets/videos/mobile.mp4'

function MainVideoMobile() {
  return (
    <div className='video-banner'>
        <video loop muted playsInline autoPlay className="video-mobile" >
            <source src={mobileVideo} type="video/mp4" />
        </video>
    </div>
  )
}

export default MainVideoMobile