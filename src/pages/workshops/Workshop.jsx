import React from 'react'
import WaitlistButton from './WaitlistButton'
import ProgramButton from './ProgramButton'
import VideoEmbed from '../../components/VideoEmbed'

function Workshop() {
  return (
    <div className='mt-[15vh]'>
        <h1 className='text-4xl text-center items-center justify-center flex py-16 text-[#398492]'>
            Workshops
        </h1>
        <h1 className='text-3xl text-center items-center justify-center flex py-16 text-[#398492]'>
            PERMISSION TO DO WORK THAT INSPIRES YOU
        </h1>
        <div className='flex justify-center items-center embedresize'>
            <VideoEmbed link='https://www.youtube.com/embed/Zy9_ZtwM4q4' title='Permission to do the work that inspires you' />
        </div>
        <div className='py-6'>
            <WaitlistButton />
        </div>
        <h1 className='text-3xl text-center items-center justify-center flex py-16 text-[#398492]'>
            WHAT IS THE CAREER STRATEGY SERIES?
        </h1>
        <div className='px-[12%] space-y-5 text-slate-600'>
            <p>
                You will experince an interactive series comprising 3 live webinars and 4 1-to-1 coaching sessions. This program has been expertly developed to support you in:
            </p>
            <ol className='list-disc px-[5%]'>
                <li>
                    Realiging yourself with work that truly fulfills you
                </li>
                <li>
                    Building confidence in uour chosen career path
                </li>
                <li>
                    Defining and articulating your professional value
                </li>
                <li>
                    Learning actionable strategies that you can use immediately or in the future
                </li>
            </ol>
            <p>
                Career planning is a process that requires time and thoughtful execution, so even though a future career change could result from this work, our intention is to support you in getting clear on your vision and building a strategy that aligns with your timeline. This is a valuable aspect of career development often neglected by educational instituions and corprate environments. The Career Strategy Series is designed to fill this gap.
            </p>
            <p>
                The program is supplemented by pre-work and assignments between sessions designed to help you reflect on your innate talents and put a practical strategy in place to achieve your true potential.
            </p>
            <h1 className='text-3xl text-center items-center justify-center flex py-16 text-[#398492]'>
                WHY THIS PROGRAM?
            </h1>
            <p className='font-semibold'>
                Because we genuinely care about you!
            </p>
            <p>
                You will be supported by our decades of career coaching experince combined with a methodology rooted in story-telling and positive psychology so you can reconnect with yourself from the inside out. The Career Strategy Series will help you identify the strengths, values, interests, and ideals that give you energy. You will learn and be coached in how to apply these takeaways to your career planning
            </p>
            <p>
                You will become a member of a community of like-minded peers who are ready to take control of their career decision-making, supported by career coaches who have helped 10,000+ individuals achieve more purposeful work.
            </p>
            <p className='font-semibold'>
                THIS PROGRAM IS FOR YOU IF:
            </p>
                <ol className='list-disc px-[5%]'>
                    <li>
                        You have to desire to have a meaningful career-as defined by you not others-and expand your potential.
                    </li>
                    <li>
                        You want to feel confident in your career direction and know exactly how to tell your story.
                    </li>
                    <li>
                        You feel stagnant on your current career path and you don't know why.
                    </li>
                    <li>
                        You are seeking the guidance, tools, and resources to create a bullet-proof plan to become the best version of your professional self.
                    </li>
                </ol>
                <p className='font-semibold'>
                    BY THE END OF THIS PROGRAM YOU WILL:
                </p>
                <ol className='list-disc px-[5%]'>
                    <li>
                        Achieve a level of badassery in your career strategies and tactics that you will carry with you throughout the rest of your life
                    </li>
                    <li>
                        Cut through the confusing sea of career managment and job search information found online by leveraging a proven career development methodology.
                    </li>
                </ol>
                <p><span className='font-semibold'>Know who you are</span> so you can ensure you are in a career that energizes you.</p>
        </div>
        <h1 className='text-3xl text-center items-center justify-center flex py-16 text-[#398492]'>
            WHAT TO EXPECT FROM THE PROGRAM
        </h1>
        <div className='flex justify-center items-center embedresize'>
            <VideoEmbed link='https://www.youtube.com/embed/v_g031Bn3gE' title='What to expect from the program' />
        </div>
        <div className='py-16'>
            <ProgramButton />
        </div>
    </div>
  )
}

export default Workshop