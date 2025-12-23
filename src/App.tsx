import Header from './components/Header'
import Hero from './components/Hero'
import ExploreSetapp from './components/ExploreSetapp'
import './App.css'

function App() {
  return (
    <div className="min-h-screen  bg-[#1e1e24] text-white selection:bg-purple-500 selection:text-white">
      <Header />
      <main>
        <Hero />
        <ExploreSetapp />
      </main>
    </div>
  )
}

export default App
