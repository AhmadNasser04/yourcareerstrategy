import React from 'react'
import VideoEmbed from '../../components/VideoEmbed'
import AdamTesti from '../../assets/images/Adam-Testi.png'

function Payment() {

    function confirmPayment(e) {
        e.preventDefault();
        window.location.href = 'https://buy.stripe.com/test_28ocOAfq39vB6OIaEE'
    }

    return (
        <div className='mt-[7vh]'>
            <div className='md:grid md:grid-cols-2 gap-5 flex flex-col py-16 px-[5%] md:px-[15%]'>
                <div className='space-y-8'>
                    {/* First Section */}
                    <h1 className='text-3xl text-center items-center justify-center flex text-[#398492]'>
                        What To Expect From Your Mock Interview
                    </h1>
                    <div className='flex justify-center items-center embedresize'>
                        <VideoEmbed link='https://youtube.com/embed/DOpDZvtZ17M' title='Your Mock Interview - What to Expect' />
                    </div>
                    <h1 className='text-3xl text-center items-center justify-center flex text-[#398492]'>
                        After Enrolling In Your Mock Interview You Will Receive:
                    </h1>
                    <ol className='list-disc text-semibold space-y-2'>
                        <li>A Question Bank of all the top interview questions to prepare for ($50 Value)</li>
                        <li>A Mock Interview Prep Questionnaire to ensure you'll show up powerfully for your interview ($200 Value)</li>
                        <li>An Elevator Pitch Preparation Framework with examples ($300 Value)</li>
                        <li>An Interview Evaluation Rubric to help you pinpoint areas of improvement in your delivery ($250 Value)</li>
                        <li>A 60-Minute Live Recorded Mock Interview with an expert career coach. The interview will be custom tailored for the specific role, company, and people you are interviewing with. ($1250 Value)</li>
                        <li>Detailed Feedback on your interview performance including a list of the questions you were asked (Priceless)</li>
                        <li>A Value-Added Follow-Up Strategy to help you differentiate yourself from your competition ($500 Value)</li>
                        <li>Strategic Email Support from your coach for any quick questions you may have as you navigate an interview process for one of your target companies ($1000 Value)</li>
                        <li>$3550 TOTAL MOCK INTERVIEW PROGRAM VALUE</li>
                    </ol>
                </div>
                <div className='space-y-8 mt-16 md:mt-0'>
                    {/* Second Section */}
                    <h1 className='text-3xl text-center items-center justify-center flex text-[#398492]'>
                        Payment Options
                    </h1>
                    <h1 className='text-3xl text-center items-center justify-center flex text-[#398492]'>
                        By clicking purchase you agree to the terms below:
                    </h1>
                    <ol className='list-disc text-semibold space-y-2'>
                        <li>You are required to give 24hr notice if you must reschedule your mock interview or your session will be forfeited.</li>
                        <li>Session recordings will be held confidentially between you and the coaching team.</li>
                        <li>Recordings will be deleted after 7 days (so be sure to download your recorded interview).</li>
                        <li>Prepare using the resources provided to get the most out of Your Mock Interview. You agree to hold us harmless for any job search outcomes.</li>
                        <li>We will not offer refunds due to withdrawals from extenuating circumstances.</li>
                        <li>100% Satisfaction Guaranteed Policy: We will work tirelessly in pursuit of the complete satisfaction with the services we deliver.</li>
                    </ol>
                    <form onSubmit={confirmPayment} className='flex flex-col py-12 space-y-5'>
                        <div className='flex flex-col w-[100%] space-y-1'>
                            <label className='text-slate-600 text-sm'>
                                Name
                            </label>
                            <input
                                name="name"
                                type="text" 
                                placeholder='E.g. John Doe'
                                className='border-2 bg-slate-100 rounded h-[42px]'
                                required 
                            />
                        </div>
                        <div className='flex flex-col w-[100%] space-y-1'>
                            <label className='text-slate-600 text-sm'>
                                Email Address
                            </label>
                            <input
                                name="email"
                                type="text" 
                                placeholder='E.g. john@doe.com'
                                className='border-2 bg-slate-100 rounded h-[42px]'
                                required 
                            />
                        </div>
                        <div className='flex flex-col w-[100%] space-y-1'>
                            <h1 className='text-gray-600'>Customized Mock Interview (297$)</h1>
                        </div>
                        <input type='submit' value='Proceed To Payment' className='bg-[#398492] cursor-pointer rounded text-white w-44 h-12' />
                    </form>
                </div>
            </div>
            <div className='md:grid md:grid-cols-2 gap-5 flex flex-col py-16 px-[5%] md:px-[15%] items-center'>
                {/* First Section */}
                <div className='space-y-8'>
                    <h1 className='text-3xl text-center items-center justify-center flex text-[#CFB050]'>
                        HOW IT WORKS
                    </h1>
                    <h1 className='text-3xl text-center items-center justify-center flex text-[#398492]'>
                        Hear how Christan's Mock Interview helped him land a job at EY
                    </h1>
                    <div className='flex justify-center items-center embedresize'>
                        <VideoEmbed link='https://youtube.com/embed/AtSVK4xaM7U' title='Christan Landed a Job with EY' />
                    </div>
                </div>
                <div className='space-y-8 justify-center items-center'>
                    <ol className='list-disc text-semibold space-y-2'>
                        <li>Step 1: Pay to book Your Mock Interview above</li>
                        <li>Step 2: You will be redirected to a confirmation page to schedule Your Mock Interview</li>
                        <li>Step 3: Download all of your additional interview preparation resources from the confirmation page</li>
                        <li>Step 4: Select your expert career coach and book your 60-minute Mock Interview (conducted via Zoom)</li>
                        <li>Step 5: Provide your coach with the details of your interview preparation: your motivation for interviewing, a link to the job description, your LinkedIn URL, your presumed interviewer's LinkedIn URL. Your coach will meticulously prepare to give you the most relevant and realistic mock interview custom-tailored to the specific role and company you are interviewing with</li>
                        <li>Step 6: Prepare for your Mock Interview using the Interview Guide you just read, the Behavioral Interview Preparation Tool, and all of the additional resources you'll get access to once you purchase Your Mock Interview</li>
                        <li>Step 7: Show up ready to interview with your coach at the date and time you selected. After the interview, your coach will send your interview feedback and a link to your recorded Mock Interview. From there, it will be up to you to keep your coach updated on your interview progress</li>
                    </ol>
                </div>
            </div>
            <div>
                <h1 className='text-3xl text-center items-center justify-center flex text-[#CFB050]'>
                    WHAT CLIENTS ARE SAYING
                </h1>
                <div className='flex items-center justify-center pt-4'>
                    <img src={AdamTesti} alt="Adam's Testimonial" />
                </div>
            </div>
        </div>
  )
}

export default Payment