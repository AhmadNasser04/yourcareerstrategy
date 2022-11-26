import React from 'react'
import Accordion from '../../components/Accordion'

function FAQ() {
  return (
    <div className='mt-[7vh]'>
        <h1 className='text-4xl text-center items-center justify-center py-16 flex text-[#398492]'>
          Frequently Asked Questions
        </h1>
        <div className='px-[10%]'>
          <Accordion data={data} />
        </div>
        <div>
          <h2 className='text-3xl text-center items-center justify-center py-16 flex text-[#398492]'>
            Have a question? Send it to us here!
          </h2>
          <form className='flex justify-center flex-col items-center py-12 space-y-5'>
            <div className='flex flex-col items-center'>
                <label className='font-semibold'>
                    Your name
                </label>
                <input
                    name="name"
                    type="text" 
                    className='border-2 bg-slate-100 rounded w-[23rem] h-[42px] md:w-[50vw]'
                    required 
                />
            </div>
            <div className='flex flex-col items-center'>
                <label className='font-semibold'>
                    Your email
                </label>
                <input
                    name="email"
                    type="email" 
                    className='border-2 bg-slate-100 rounded w-[23rem] h-[42px] md:w-[50vw]'
                    required 
                />
            </div>
            <div className='flex flex-col items-center'>
              <label className='font-semibold'>
                Your question
              </label>
              <textarea
                name='question'
                className='border-2 bg-slate-100 rounded w-[23rem] h-[300px] md:w-[50vw]'
              />
            </div>

            <div>
                <button type='submit' className='bg-[#398492] rounded text-white w-36 h-12'>Send Question</button>
            </div>
      </form>
        </div>
    </div>
  )
}

const data = [
  {
    question: 'How do I know if this workshop is the right fit for me?',
    answer: `
    If you have been feeling like you are just going through the motions and getting up and going to your job isn’t energizing you, then it is the right time to apply for your seat in The Career Strategy Series.

    If you feel that you are destined for more - more impact, more purpose, more fulfillment - but you can’t quite put your finger on what that direction is, then you are applying to a program specifically designed to help you understand exactly who you are and where you are headed.
    
    We crafted this program to help you build confidence in your chosen career path, define and articulate your professional value, and learn actionable strategies that you can use immediately or in the future to pivot into a more purposeful career.`
  },
  {
    question: 'Will I have clarity on a meaningful career trajectory once I complete the workshop and coaching program?',
    answer: `
    If you put in the effort asked of you in the workshops and coaching, the group work, and the assignments between sessions, you will leave the series with a clear understanding of your true career motivators, how to target your next career, and increased confidence in your ability to make the change.`
  },
  {
    question: 'I’ve seen other similar programs out there. How is Your Career Strategy different?',
    answer: `
    We absolutely encourage you, as a potential consumer of career development services, to do your homework on the various options out there, including ours. In summary, The Career Strategy Series stands out in the following ways:

    Small cohorts. Our groups of no more than 12 participants maximize your personalized learning and value.

    ​Pedagogically rich live webinars PLUS 1-1 accountability coaching. You will learn new behaviors, tools, and resources side-by-side with your peers coupled with expert coaching by Eli and Peter. Your learning journey is accelerated by developmental pre-work and between-session assignments.

    Lifelong impact. You will be developing new habits that are repeatable during career transitions for the rest of your career.

    World-class expertise.​Eli and Peter bring more than 35+ years of combined career services and career coaching experience to support your career ambitions.

    ​Proven methodology. Our research- and experience-backed methodology delivers results for those who have the tenacity to learn and apply them.

    100% Satisfaction Policy. Your satisfaction with your learning and development is assured. We will work tirelessly in pursuit of your complete satisfaction with the services we deliver.

    ​A strict Growth Mindset Policy. We do our best to only admit participants who operate with positive intent, who demonstrate a growth mindset, and who genuinely care about the success of others as well as their own outcomes.

    We would be delighted to take your inquiry by phone to share more about how we see our program as unique and explore with you whether Your Career Strategy is the right fit for you.`
  },
  {
    question: 'How much does The Career Strategy Series cost?',
    answer: `
    There is tremendous value baked into this program and your investment will be extremely reasonable compared to the cost to you of not taking action to clarify your career trajectory and execute your custom-tailored career strategy. Book your free discovery call with us to learn more.`
  },
  {
    question: 'How many participants are in each workshop?',
    answer: `
    We limit each workshop to 12 seats as we have found this is the optimal size for peer groups to get to know one another and for the coaches to be able to evenly and effectively distribute their attention. More than 12 participants dilutes the value for all involved.`
  },
  {
    question: 'What can be expected in the workshop delivery?',
    answer: `
    Our workshops are an interactive experience pedagogically designed for every learning style. We utilize visual presentations, engaging peer breakout exercises, thoughtful individual take-home tools, and regular opportunities to debrief the learnings and takeaways while setting clear actions. Using Zoom’s virtual classroom software, you'll interact with the facilitators and with your peers in the workshop using your video, microphone, and chatbox functionality.`
  },
  {
    question: "Can I apply if I'm based outside the USA?",
    answer: `
    Yes, you will be able to participate from anywhere in the world; however, depending on your timezone, you may have to attend the workshop and coaching at odd hours, so please make sure the time difference with New York Eastern Standard Time (EST) works with your schedule.`
  },
  {
    question: 'What is the total time commitment for the workshop portion of The Career Strategy Series?',
    answer: `
    Each workshop will have a runtime of 3 hours with a 10-minute intermission during each session. The workshops will run on weekends, which gives you 7 days to complete the workbook assignments for each following session. We recommend budgeting between 3-6 hours for these assignments between sessions. Additionally, you will have access to the Your Career Strategy Slack community, where you can pose questions to your coaches and engage with your peer groups. You are looking at a maximum time commitment of 10 hours per week.`
  },
  {
    question: `Do you guarantee a job in my newly decided career upon completion of the workshops?`,
    answer: `
    Our clients’ successes are directly dependent upon the effort, commitment, and diligence they put into their job search strategies. Outcomes and successes are affected by many external variables including market volatility, local, national, and global economies, market saturation for a particular industry, and a client’s level of experience, adaptability to workforce changes, skill sets, or continued motivation. We do not guarantee job placement, nor employment success.`
  },
  {
    question: 'Can I apply for The Career Strategy Series on behalf of someone else?',
    answer: `
    Due to the importance of understanding who our prospective participants are for the program, we will need to speak with the individual who will be in attendance in the program during the discovery call. This will ensure that we maintain an environment that promotes good chemistry and solidarity between all of our participants and facilitators.`
  }
]

export default FAQ