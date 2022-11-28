import React from 'react'
import CoachingButtons from '../../components/Coaching/CoachingButtons'
import VideoEmbed from '../../components/VideoEmbed'

function CoachingMain() {
  return (
    <div className='mt-[15vh]'>
        <h1 className='text-4xl text-center items-center justify-center flex py-16 text-[#398492]'>
            1-1 COACHING
        </h1>
        <p className='text-center px-[10%]'>
            Each of the coaching programs below is custom-tailored for you and the unique situation you are currently facing. Each coaching program consists of 9 sessions to be completed within a period of 6 months leveraging a blueprint that supports you in achieving clarity around your goals, developing an understanding on all of your options, and leaning into your authenticity to set achievable actions week over week to help you reach your desired outcomes. You can take a look at our 1-1 coaching program offerings below and book a complimentary coaching discovery call so we can learn more about you and your goals. If one of our program offerings below doesn’t resonate with your needs, we encourage you to book a discovery call any way as we might be able to customize a program to help your achieve your specific goals.
        </p>
        <CoachingButtons />
        <div className='flex justify-center items-center embedresize'>
            <VideoEmbed link='https://www.youtube.com/embed/zJnXsesAkVI' title='Chris M. Career Coaching Review' />
        </div>
    </div>
  )
}

export default CoachingMain