import React from 'react'
import Header from './Components/Section1/Header.jsx';
import HowItWorksSection from './Components/Section2/Work.jsx';
import Events from './Components/Section3/Events.jsx'
import WhyChoose from './Components/Section4/Choose.jsx';
import Mobile_Exp from './Components/Section5/mobile_exp.jsx';
import Testimonials from './Components/Section6/Testimonials.jsx';
import JoinWaitinglist from './Components/Section7/JoinWaitinglist.jsx';
import Footer from './Components/Section8/Footer.jsx';


function App() {

  return (
    <>
      <Header />
      <HowItWorksSection />
      <Events />
      <WhyChoose />
      <Mobile_Exp />
      <Testimonials />
      <JoinWaitinglist />
      <Footer />

    </>
  )
}

export default App
