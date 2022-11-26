import React from 'react'

function VideoEmbed({ link, title }) {
  return (
    <div className='h-[100%] w-[90%]'>
        <iframe width="100%" height="100%" src={link} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

export default VideoEmbed