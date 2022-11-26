import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from './pages/global/NavBar.jsx'
import Footer from './pages/global/Footer.jsx'

const Home = lazy(() => import('./pages/home/Home.jsx'))
const About = lazy(() => import('./pages/about/About.jsx'))
const CoachingMain = lazy(() => import("./pages/1-1-coaching/CoachingMain.jsx"))
const CoachingEarly = lazy(() => import('./pages/1-1-coaching/CoachingEarly.jsx'))
const CoachingSelfStarters = lazy(() => import('./pages/1-1-coaching/CoachingSelfStarters.jsx'))
const CoachingProfessionals = lazy(() => import('./pages/1-1-coaching/CoachingProfessionals.jsx'))
const CoachingManagment = lazy(() => import('./pages/1-1-coaching/CoachingManagment.jsx'))
const Workshop = lazy(() => import('./pages/workshops/Workshop.jsx'))
const FAQ = lazy(() => import('./pages/faq/FAQ.jsx'))
const TOS = lazy(() => import('./pages/tos/TOS.jsx'))
const ProgramFeatures = lazy(() => import('./pages/program-features/ProgramFeatures.jsx'))
const InterviewGuide = lazy(() => import('./pages/interview-guide/InterviewGuide.jsx'))
const Payment = lazy(() => import('./pages/payment/Payment.jsx'))
const Blog = lazy(() => import('./pages/blog/Blog.jsx'))

function App() {
  return (
    <Router>
      <NavBar />
      <Suspense fallback={<h1 className='mt-[20vw] justify-center items-center text-center'>Loading</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/1-1-coaching" element={<CoachingMain />} />
        <Route path="/1-1-coaching-early-careers" element={<CoachingEarly />} />
        <Route path="/1-1-coaching-self-starters" element={<CoachingSelfStarters />} />
        <Route path="/1-1-coaching-tenured-professionals" element={<CoachingProfessionals />} />
        <Route path="/1-1-coaching-management-coaching" element={<CoachingManagment />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/terms-and-conditions" element={<TOS />} />
        <Route path="/program-features" element={<ProgramFeatures />} />
        <Route path="/interview-guide" element={<InterviewGuide />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
