import React from 'react'
import TestimonialCard from '../../components/Home/TestimonialCard'
import MarcoB from '../../assets/images/MarcoB.png'
import Shannon from '../../assets/images/shannon.png'
import Robert from '../../assets/images/robert.png'


function Testimonial() {
  return (
    <div className='overflow-hidden'>
        <h1 className='text-4xl text-center items-center justify-center flex pb-16 text-[#398492]'>
            Workshop Feedback
        </h1>
        <div className='flex mobile:flex-col justify-evenly items-center'>
            <TestimonialCard description='This is an engaging workshop that challenges you to slow down, reflect, and plan. My own journey was a challenging one riddled with family, health, and external hurdles all of which Eli & Peter coached around thoughtfully. The exercises had me completely reassess how I focused my time, selected my potential employers, and approached interviews. As a result of this, I received 4 offers within 30 days.' icon={MarcoB} name='Marco B.' />
            <TestimonialCard description='The Career Strategy workshop series is unique in that it focuses on the person and not the job. This means that the responsibility is on the individual to do some internal work to really think through who they are and what they want to contribute. Starting there makes the actual job search so much easier.' icon={Shannon} name='Shannon C.' />
            <TestimonialCard description='The Career Strategy series helped me focus on figuring out what I actually want from my career. I was surprised at how much I learned about myself. The guidance and support from Eli and Peter was critical to that self-reflection, and the other participants really helped me see myself and my career through a new lens. Thank you!' icon={Robert} name='Robert C.' />
        </div>
    </div>
  )
}

export default Testimonial