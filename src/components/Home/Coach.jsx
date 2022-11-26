import React from 'react'

function Coach({image, name}) {
  return (
    <div>
        <div className='flex flex-col text-2xl space-y-2 justify-center items-center text-center'>
          <div className='w-52 h-52 mobile:w-36 mobile:h-36'>
            <img className='rounded-full w-[100%] h-[100%] object-cover' src={image} alt="coach" loading='lazy'/>
          </div>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default Coach