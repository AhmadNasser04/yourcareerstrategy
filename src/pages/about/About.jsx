import React from 'react'
import Eli from '../../assets/images/Eli-Big.png'
import Sharahn from '../../assets/images/Sharahn-Big.png'
import Martica from '../../assets/images/Martica-Big.png'
import Peter from '../../assets/images/Peter-Big.png'
import TeamMember from '../../components/About/TeamMember'
import VideoEmbed from '../../components/VideoEmbed'

function About() {
  return (
    <div className='mt-[15vh] space-y-4'>
        <div className='flex justify-center items-center embedresize'>
            <VideoEmbed link='https://www.youtube.com/embed/ZVNNPMPZltY' title='Chris M. Career Coaching Review' />
        </div>
        <div>
            <p className='text-slate-600 font-semibold px-3 xl:px-[22%]'>
                We are a community of expert career, life, and leadership coaches supporting clients who are ready to personally and professionally evolve in their lives and careers. We will coach you on how to identify and validate a career direction by looking at your “inner data” leveraging researched and proven subjective self-assessmnet tools. We’ll build a decision matrix to assess viable career options based on those intrinsic motivators we highlighted, target key roles, uncover the hidden job market, and refine your career narratives for your resume, LinkedIn, cover letters, elevator pitch, and interviews to ensure you are able to effectively negotiate an offer into your ideal role that ultimately will exceed your expectations. We’ve helped 1000s of clients across 6 continents define their “why” and pivot into careers that energize them, and in doing so, we get to live our “why” of helping you achieve your full potential.
            </p>
        </div>
        <div>
            <h1 className='text-4xl text-center items-center justify-center py-16 flex text-[#398492]'>
                About The Team
            </h1>
            <div className='items-center justify-center flex'>
                <div className='flex flex-col space-y-6 md:space-y-0 md:grid md:gap-6 md:grid-cols-2'>
                    <div className='flex flex-col space-y-6 items-center'>
                        <TeamMember picture={Eli} name='Eli Bohemond' description='After navigating 5 successful career transitions from management consulting, business development, start-ups, and higher education, Eli’s spent the last 8 years supporting 4K+ individuals across 90 countries with purposeful career and life transitions of their own. He is the Head Coach at Your Career Strategy.' linkedin='https://www.linkedin.com/in/elicareercoach/' />
                        <TeamMember picture={Martica} name='Martica Wakeman' description="Martica is a social scientist, holding a MSc in Environment and Sustainable Development and an MBA focused on Disruptive Innovation. She has advised teams within Fortune 500 companies, led groundbreaking research within Global South informal settlements, and built her own successful CPG company. Currently, Martica is the Head of People Operations at a Bay Area carbon capture company where she's building an incredible team. At the end of the day, Her passion is to enable people to do the best work of their lives, as unique as that is for everyone." linkedin='https://www.linkedin.com/in/marticawakeman/' />
                    </div>
                    <div className='flex flex-col space-y-6 items-center'>
                        <TeamMember picture={Sharahn} name='Sharahn LaRue McClung' description='For over two decades Sharahn has worked as a 1:1 coach and as a group facilitator with hundreds of clients in the tech & education industries to craft their personal narratives to impact their career development goals. Her prowess as a recognized performing artist fuels the competitive edge and artist’s empathy that she brings to her coaching practice.' linkedin='https://www.linkedin.com/in/sharahnlm/' />
                        <TeamMember picture={Peter} name='Peter Hill' description="Peter Hill is an Executive Coach with particular expertise in Career and High-Performance Mindset. Working primarily with Executive Leaders and Expat Professionals around the globe, he has decades of experience helping fix 'accidental careers'. Peter's professional footprint comprises 9 years in China, 6 years in Japan, 2.5 years in the UK, and 10+ years in the US. Through his one-to-one coaching, Peter has personally supported more than 2,000 high-performing executives and emerging executives representing a wide range of industries, functional areas, and geographies." linkedin='https://www.linkedin.com/in/coachpeterhill/' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About