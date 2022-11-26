import React from 'react'
import VideoEmbed from '../../components/VideoEmbed'

function Stories() {
  return (
    <div>
        <h1 className='text-4xl items-center text-center justify-center flex pb-16 text-[#398492]'>
            Stories of Transformation
        </h1>
        <div className='flex mobile:flex-col overflow-hidden items-center text-center justify-center'>
            <div className='flex flex-col justify-center items-center embedresize md:max-w-[30vw]'>
                {/* VIDEO */}
                <VideoEmbed link='https://youtube.com/embed/btmcBDCLidw' title='Allen S. 1-1 Career Coaching Review' />
                {/* CAPTION */}
                <div className='px-[10%] text-slate-700'>
                    Allen worked with Your Career Strategy to make an international career transition that left him feeling like he was the one interviewing the companies that he chose to pursue. His journey took him from China to Malaysia to California and finally to London where he was able to secure work authorization and a job aligned with his values and ideal career path.
                </div>
            </div>
            <div className='flex flex-col justify-center items-center embedresize md:max-w-[30vw]'>
                {/* VIDEO */}
                <VideoEmbed link='https://youtube.com/embed/XjclVhHD2rQ' title='Jolene M. Career Coaching Review' />
                {/* CAPTION */}
                <div className='px-[10%] text-slate-700'>
                    Jolene found herself in the midst of a career transition during the pandemic. She had grown her career over the last 20 years to become a leader in the events and conferences space. Through our work, she validated her fundamental strengths and values against her chosen direction, rebuilt her confidence, and in her own words, “became her best self.” 
                </div>
            </div>
            <div className='flex flex-col justify-center items-center embedresize md:max-w-[30vw]'>
                {/* VIDEO */}
                <VideoEmbed link='https://youtube.com/embed/XSzX0NZmFVM' title='Nina Dahl Coaching Testimonial' />
                {/* CAPTION */}
                <div className='px-[10%] text-slate-700'>
                    Nina was a transitioning teacher who couldn’t see herself in the classroom anymore. She wasn’t sure what she wanted next and that’s where the work with YCS came in. In 4 months she was able to land a new role in a totally new industry, Professional Services, with a 100% increase in base compensation.
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stories