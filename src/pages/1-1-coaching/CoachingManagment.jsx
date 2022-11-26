import React from 'react'
import CoachingButtons from '../../components/Coaching/CoachingButtons'
import VideoEmbed from '../../components/VideoEmbed'

function CoachingManagment() {
  return (
    <div className='mt-[15vh]'>
        <h1 className='text-4xl text-center items-center justify-center flex py-16 text-[#398492]'>
            Life Balance, Relationship, and Career Management Coaching
        </h1>
        <CoachingButtons />
        <div className='px-[12%] space-y-5 text-slate-600'>
            <p>
                Towards the end of your life, years after you’ve retired, had children, and watched your grandchildren grow up, you’ll reflect on your life.  During that time reflecting, it’ll be very unlikely that you’ll wish you spent more time at work and less time with loved ones.  But working is part of life.  It’s important to find meaningful work to drive your sense of purpose.  Meaningful relationships are also essential to leading a fulfilling life as well.  It begs the question, “Can you find a healthy balance for both?”
            </p>
            <p>
                Working will take up a large portion of your time throughout your career.  At a certain point in time however, you’ll have to make difficult decisions when it comes to balancing work life and personal life.  Are you looking to start a family?  Do you want to get promoted to the highest levels of your company?  Are you thinking about relocating to be closer to loved ones?  These are just some questions that you may have to come face to face with.
            </p>
            <p>
                In today’s fast-paced society, it’s easy to get caught up focusing on things that may not necessarily be important to you.  Are you happy traveling from city to city each week for work or do you want to focus more on your children and take a step back from 70 hour weeks.  Sometimes there’s not an easy answer to these difficult questions.  To make matters more complicated, confiding in family and friends may not always be your best option as they may have their own biases towards the situation.
            </p>
            <p>
                At Your Career Strategy we understand exactly what you’re going through and have a great deal of experience coaching clients through difficult career, life, and relationship decisions.  It is nearly impossible to separate work from your personal life completely, so if you’re looking to achieve happiness in both areas, we work with you to learn how to manage both.
            </p>
            <p className='font-semibold'>
                In these coaching sessions you’ll get insights on the following areas:
            </p>
            <ol className='list-decimal px-[5%]'>
                <li>
                    Life Balance – Are you putting all your time and energy into one aspect of your life and neglecting everything else?
                </li>
                <li>
                    Relationships – Do you feel as though you aren’t connecting the way you want with a loved one in your life or teammates, peers, or leaders in a professional setting?
                </li>
                <li>
                    Career Management – How can you reach the next level in your career or slow things down by creating better boundaries?
                </li>
            </ol>
            <p className='font-semibold'>
                Here’s just some of the ways we coach you through managing these aspects of life:
            </p>
            <ol className='list-disc px-[5%]'>
                <li>
                    We offer flexible scheduling for our coaching sessions: We treat each client like the individual they are and customize coaching sessions to best suit you.  You don’t have to worry about being looped in to a “group session” or follow a schedule given to you.  We work with you to determine the frequency of your one-on-one sessions which can be bi-weekly, monthly, bi-monthly, or quarterly depending on what best accommodates your schedule and needs.
                </li>
                <li>
                    We evaluate what areas you should be prioritizing based on your feedback: Whether it’s your career, your relationships, your money, mental or physical health or other areas of your life, we work with you to determine the aspects to focus on and come up with actionable strategies on how to address them.  
                </li>
                <li>
                    We guide you in optimizing how you prioritize your life: Your time is valuable, and you may not even realize how much of it you are spending doing things you don’t really need to be doing.  Whether it’s putting in late nights doing unnecessary work projects or putting up with toxic relationships after they’ve run their course. Prioritizing your life is pivotal!  
                </li>
            </ol>
            <p>
                Our coaches are caring, thoughtful and intentional during each session and are constantly looking for ways to help you improve.
            </p>
            <p>
                If you’re unsure whether you could use a Life Balance, Relationship and Career Management coaching session, try a complimentary discovery session and you can see if it’s right for you. No matter what your experience level or age is, having a coach from our team working with you is a decision you won’t regret.  It’s inevitable that you’ll get to a point in your life where there’s a certain area that’s lacking and in need of guidance, so why not reach out and see if we can help you.
            </p>
        </div>
        <div className='pt-10'>
            <div className='flex justify-center items-center embedresize'>
                <VideoEmbed link='https://youtube.com/embed/GHoSqNyud4I' title='Rmranoor R. Career Coaching Testimonial' />
            </div>
            <div className='text-center md:px-10'>
                <p className='px-[10%] md:px-[20%]'>
                    Emranoor was going through a career transition, building better financial habits, and getting married. He wanted a new role within a new industry as a senior product manager to ideally make more before getting married and he wanted to overcome imposter syndrome. He built confidence in himself and his competencies through the exercises, tools, and coaching conversations over the course of his coaching program. Emranoor trusted the process and embraced the regimen, which resulted in landing a job within his target with a significant pay bump well before his wedding.
                </p>
            </div>
        </div>
    </div>
  )
}

export default CoachingManagment
