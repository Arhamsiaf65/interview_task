import Header from './components/Header'
import Hero from './components/Hero'
import ExploreSetapp from './components/ExploreSetapp'
import TestimonialCarousel from './components/TestimonialCarousel'
import SocialTestimonials from './components/SocialTestimonials'
import CTASection from './components/CTASection'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen  bg-[#1e1e24] text-white selection:bg-purple-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <ExploreSetapp />
        <TestimonialCarousel />
        <SocialTestimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
