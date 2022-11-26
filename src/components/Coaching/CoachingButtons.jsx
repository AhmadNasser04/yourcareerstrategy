import React from 'react'
import { Link } from 'react-router-dom'

function CoachingButtons() {
  return (
    <div>
        <div className='text-centere px-[8vw] py-10'>
            <div className="row flex flex-col md:grid md:grid-cols-2 md:gap-10">
                <div className="text-center">
                    <Link className="CoachingButton" to="/1-1-coaching-early-careers/">Career Clarity Coaching  for Early Careers</Link> 
                    <Link className="CoachingButton" to="/1-1-coaching-tenured-professionals/">Career Transition Coaching for Tenured Professionals</Link>
                </div>
                <div className="text-center"> 
                    <Link className="CoachingButton" to="/1-1-coaching-self-starters/">Leadership and Performance Coaching for Self-Starters  </Link>
                    <Link className="CoachingButton" to="/1-1-coaching-management-coaching/">Life Balance, Relationship, and  Career Management Coaching for Everyone</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoachingButtons