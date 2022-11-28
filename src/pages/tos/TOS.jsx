import React from 'react'
import Accordion from '../../components/Accordion'

function TOS() {
  return (
    <div className='mt-[15vh]'>
        <h1 className='text-4xl text-center items-center justify-center pt-16 pb-5 flex text-[#398492]'>
            Terms and Conditions
        </h1>
        <p className='px-[10%] text-center font-semibold pb-16 text-slate-700'>We want to make working together a seamless process, so we’ve laid out our terms and conditions as simply as possible below. All new clients agree to these terms when engaging with our 1-1 coaching programs, workshops, and our team of coaches at Your Career Strategy.</p>
        <div className='px-[10%]'>
            <Accordion data={data} />
        </div>
    </div>
  )
}

const data = [
    {
      question: 'Payment',
      answer: `
      For individuals - we take online payments for all major credit cards via the payment processor Stripe (a 2.9% admin fee applies). We will also take payments through bank transfers via Zelle or Venmo. This helps clients to avoid the transaction fee. Please share your payment preference with the team at YCS and we will accomodate your request.

      For 1-1 Coaching Programs we are able to offer a 10% discount if you are able to make your full payment upfront.

      We want to make the investment in your coaching program as accessible as possible, so if you require a payment plan, we can break out your investment over 3-4 months; however, we will not be able to offer the 10% discount available for upfront payments.

      Additionally, 10% of all coaching program fees, 1-1 or workshops alike, are donated to an effective charity selected by you from givewell.org's list of their top effective charities.

      To participate in our workshop series or in one-to-one coaching, we require payment 3 business days in advance of commencing.`
    },
    {
      question: `Attendance, Cancellations, and Refunds`,
      answer: `
      Workshops

Attendance is mandatory at all scheduled workshops due to the group-based activities in each session requiring you to work both with the entire group of participants as well as within your designated group.

If you are unable to attend a workshop session due to an extenuating circumstance, you should email your facilitators at least 24-hours prior denoting your reason for missing the session and let your designated small group know you will not be in session. Although your facilitators will do their best to consistently record and send out the recording with each workshop recap, the delivery of a recording is not guaranteed.

The dates and expectations of workshop attendance were agreed upon before committing to purchasing the workshop package; therefore, we will not be offering any refunds for the purchased workshops. We have limited seats for each workshop series and once that seat is accepted, you take full responsibility for showing up and committing to your investment.

You should think of this investment in a similar manner as if you were to enroll in a degree program at any university. When you miss a class, you are responsible for contacting the professor for information on what you missed and for reaching out to classmates for additional insights on the lesson. Also as with a university degree program, if you need to withdraw for extenuating circumstances, you will be offered a seat in the next available session . We will not offer refunds due to withdrawals for extenuating circumstances.

1-1 Coaching Sessions

You may cancel or change your coaching session up to 24 hours prior to that session’s start time.

Canceling or postponing within 24 hours of your next session will result in you losing the cost and benefits of that session.

If you are not satisfied with your coaching experience after your first session with your coach, you can share your concerns with the Head Coach at YCS, Eli Bohemond (epbohemond at gmail dot com), and if you need to be re-matched with a suitable coach we can arrange that.

If you speak with our team and still feel coaching isn’t for you, we can refund you for the remainder of your unused sessions. A cancellation fee of $100 will be applied.

You will be charged for the sessions you’ve used in the first 30 days or any you’ve canceled within 24 hours of the agreed time of your next appointment and we will refund you the remainder.`
    },
    {
      question: 'Preparation and Expectations',
      answer: `
      Workshops

You will be expected to have all of the pre-work completed prior to the first workshop of the series as well as all take-home and group assignments completed before the start of the next workshop or peer group meeting.

Budget two to three hours each week to focus on the exercises and come prepared to openly share your discoveries with your designated peer group.

1-1 Coaching Sessions

You and your coach will be setting actions to take at the end of each session, which means those actions should be completed and ready to discuss before your next meeting. It is not the Coach’s responsibility to send you session notes, so please take note of your actions and goals to keep track of your coaching journey to fully maximize the value.

We would be delighted to take your inquiry by phone to share more about how we see our program as unique and explore with you whether Your Career Strategy is the right fit for you.`
    },
    {
      question: 'Growth Mindset Policy',
      answer: `
      Your Career Strategy commits to doing our best to only admit program participants who operate with positive intent, who demonstrate a growth mindset, and who genuinely care about the success of others as well as their own outcomes. The Growth Mindset Policy is our code of conduct. Participants are expected to behave in a collaborative, supportive, and respectful manner toward all stakeholders. Your Career Strategy reserves the right to dismiss any participants who fail to adhere to this policy.`
    },
    {
      question: 'Adding-on Additional 1-1 Coaching Sessions',
      answer: `
      If you require additional Coaching Sessions after the completion of your coaching initial program package, you can reach out directly to YCS's Head Coach, Eli Bohemond (epbohemond at gmail dot com), and we'll set up time to discuss the best options for ongoing coaching support.`
    },
    {
      question: 'Guarantee',
      answer: `
      Our clients’ successes are directly dependent upon the effort, commitment and diligence they put into their job search strategies. Outcomes and successes are affected by many external variables including market volatility, local, national, and global economies, market saturation for a particular industry, and a client’s level of experience, adaptability to workforce changes, skill sets, or continued motivation. We do not guarantee job placement, nor employment success.

By participating in our coaching programs and skill building workshops, you agree to hold us harmless for any job search outcomes.

We strongly encourage active client participation in this process to achieve the best outcome possible for all concerned.

We do offer a 100% Satisfaction Guaranteed Policy. We will work tirelessly in pursuit of the complete satisfaction with the services we deliver.`
    },
    {
      question: 'Punctuality',
      answer: `
      It is your responsibility to be on time for each workshop and each coaching session.

Please notify your coach if you will be late for a 1-1 session. If you are more than 10 minutes late without notifying your coach, that session will be counted as completed and deducted from your remaining 1-1 sessions in your package.`
    },
    {
      question: 'Session Expiration',
      answer: `
      For best results, we recommend you see your coach weekly or bi-weekly. Momentum is the key to coaching success, which is why frequent sessions are important to achieve results.

Our 1-1 coaching programs run from the date of your 1st coaching session until 6 months from that date. If you have extended travel, a life event (becoming a aprent, caring for a family member, a dibilitating illness, etc.), or another situation that would require pausing your coaching program, please address this with your coach directly and they will seek approval for a pause and extention of the agreed upon program time frame.

Our workshop programs are sometimes complemented with 1-1 coaching packages which will have an expirtation date of 90 days after commencing your first session. Reference the above paragraph in terms of reasons to request a pause and extention for the alotted timeframe.`
    },
    {
      question: 'Client Confidentiality',
      answer: `
      All information you share with Your Career Strategy, from the very first inquiry to your post-workshop and coaching feedback is treated confidentially.

Whether you’re dealing with our sales and support team or our coaches and facilitators, we value your privacy above all and ensure your privacy is protected.

Our coaching team keeps an internal tracker of each session and each client's progress, which may be shared with the senior coaching team for continual supervision, feedback, and quality control.

Discovery calls may be recorded for training and quality purposes.

Workshop and 1-1 caoching video recordings can also be used for internal coach training. Workshop content will be shared only with the participants in your cohort.

By agreeing to these terms and conditions you agree not to share these recordings and workshop materials publicly.`
    },
    {
      question: 'Privacy Policy',
      answer: `
      Your data is kept confidential at all times and is of the utmost importance to the team at Your Career Strategy. Our business is based on protecting client confidentiality and managing sensitive personal information.

No personal information that is provided to us will be shared with any third party. We may send occasional marketing emails to update you of relevant services you have shown interest in. You reserve the right to unsubscribe at any time from any email sent.`
    },
    {
      question: '3rd Party + Internal Data Privacy Policy',
      answer: `
      We record initial communications with Your Career Strategy through our CRM system and parts of our workshops and coaching sessions via Zoom to be shared internally with the coaching team and your fellow workshop participants. We record minimal data on 1-1 sessions and workshops, which are only viewable by your coaches through a password protected internal coaching tracker. We use Gmail for email communication and use Stripe as our secure payment system.`
    },
    {
      question: 'Cookies Policy',
      answer: `
      This site uses cookies — small text files that are placed on your machine to help the site provide a better user experience. In general, cookies are used to retain user preferences, store information for things like shopping carts, and provide anonymized tracking data to third party applications like Google Analytics.

As a rule, cookies will make your browsing experience better. However, you may prefer to disable cookies on this site and on others. The most effective way to do this is to disable cookies in your browser. We suggest consulting the Help section of your browser or taking a look at the About Cookies website which offers guidance for all modern browsers.`
    },
    {
      question: 'Copyright Notice',
      answer: `
      All original material (text, images, and links) on this site is the property of Your Career Strategy.

Any content used from a third party remains the property of the third party.`
    }
  ]

export default TOS