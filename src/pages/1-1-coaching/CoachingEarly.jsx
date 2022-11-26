import React from 'react'
import CoachingButtons from '../../components/Coaching/CoachingButtons'
import VideoEmbed from '../../components/VideoEmbed'

function CoachingEarly() {
  return (
    <div className='mt-[15vh]'>
        <h1 className='text-4xl text-center items-center justify-center flex py-16 text-[#398492]'>
            Career Clarity Coaching for Early Careers
        </h1>
        <CoachingButtons />
        <div className='px-[12%] space-y-5 text-slate-600'>
            <p>
                Picking a college major is hard.  Maybe you weren’t quite sure what to pick at the time, so you wound up in a major that your guardians, teachers or friends suggested for you.  Four years later after graduating, you realized you focused so much on getting good grades and securing that internship, that you didn’t really spend time thinking about what you wanted to do. 
            </p>
            <p>
                Now you’re a college graduate and going on interviews for any opening you can find.  You wind up getting an offer and land your first job as a Sales Representative.  If you’re in the 27 percent of graduates who found a job in the field they majored in, then a big congratulations to you, but if you’re like the majority, this isn’t exactly your dream job.
            </p>
            <p>
                Day by day, you find yourself going to a place you don’t want to be.  It feels like you are wasting your 20’s in a position you never dreamt you’d be in when you were tossing your graduation cap in the air on the big day.  The only thing keeping you from quitting and running away is the big paycheck and your new sidekick in life, a tremendous student loan.
            </p>
            <p>
                For someone so early in their career, the thought of doing this until you’re 65 or 75 feels like a 25 to life prison sentence.  This is not what you spent 12 years in grammar school and four years of university to be doing, but how can you get out of this hole you’ve dug yourself in?
            </p>
            <p>
                Well, you’ve come to the right place.  Our Coaches here at Your Career Strategy are fully equipped to help you navigate changing your career while still relatively new to the workforce.  Our qualified team will provide the tools you need to improve your current situation.
            </p>
            <p className='font-semibold'>
                Here’s just some of what we offer:
            </p>
            <ol className='list-decimal px-[5%]'>
                <li>
                    Assessing Your Background: We look at you as a person to understand your core values and passions.  Whether it was leading teammates on the football field or tutoring classmates with learning disabilities, we want to learn what makes you the person you are today.
                </li>
                <li>
                    Guide You to Be Intentional: Throughout your school years, your path was generally carved out for you.  Learn, take tests, get good grades.  You did all of this without thinking about the “why”.  We focus on having you think about the “why” when it comes to your career.  Our Coaches get you to reflect on why you are choosing the path you are on, and whether or not to consider different avenues.
                </li>
                <li>
                    A Portfolio of Transferrable Skills:  Whether you’re looking to stay in the industry you’re currently in or transition to a new one, we examine the skills you’ve acquired in your life so far.  As an Early Career Professional, you have the benefit of not needing decades worth of experience to pivot into a new career.  You’ll also be surprised at the transferrable skills you have that you didn’t even realize will help you in your next endeavor.  So even though that job you are in or the roles you’ve jumped between feel incongruous, everything that you’ve been doing will all come together and make sense for your next career move based on the work you do in this coaching program.
                </li>
            </ol>
            <p>
                Your Career Strategy Career Coaches don’t have a standard “system” or a pre-written guide book that chooses a path for you.  We don’t make promises about landing you your dream job before our first conversation and we aren’t the type of coaches who try and get everything done in one coaching session and move on to the next client.  Our coaches have experience in the real world and faced some of the struggles you are currently dealing with.  We coach from a place of knowledge and experience, eager to learn about your unique situation.  
            </p>
            <p>
                We are passionate about guiding you through a very uncertain time in life.  Taking a reflective approach to your search process, you’ll start looking for purpose filled roles that will make your work important to you.  Our Coaches will never lead you down a path you don’t want to be on.  We pride ourselves on being empathetic to your journey and being a champion for your success.
            </p>
            <p>
                So don’t let another minute slip away and speak to us now, before you look up from your cubical and you’re 45, wondering where the time has gone. 
            </p>
        </div>
        <div className='pt-10'>
            <div className='flex justify-center items-center embedresize'>
                <VideoEmbed link='https://www.youtube.com/embed/1LEKqLV0ofU' title='Tatiana S. 1-1 Career Coaching Review' />
            </div>
            <div className='text-center md:px-10'>
                <p className='px-[10%] md:px-[20%]'>
                    Tatiana reviews her experience with Your Career Strategy’s 1-1 career coaching services and the results she was able to achieve in her international job search. She ended the program with 5 different offers and a role that aligned with exactly what she was looking for in her target industry and location.
                </p>
            </div>
        </div>
    </div>
  )
}

export default CoachingEarly