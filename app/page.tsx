import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import Cards from './components/cards'
import Courses from './components/courses'
import Acheivement from './components/acheivement'
import Team from './components/team'
import Footerl from './components/footerL'
import Testimonials from './components/testimonials'


const page = () => {
  return (
    <div>
    <Header />
    <Hero />
     <Footer/>
     <Cards/>
     <Acheivement/>
     <Courses/>
     <Team/>
     <Testimonials/>
     <Footerl/>
    
</div>
  )
}

export default page
