import React from 'react'
import desktopVideo from '../../assets/videos/desktop.mp4'

function MainVideoDesktop() {
  return (
    <div className='video-banner'>
        <video loop muted playsInline autoPlay className="video-laptop" >
            <source src={desktopVideo} type="video/mp4" />
        </video>
    </div>
  )
}

export default MainVideoDesktop