import Hero from './components/Hero'
import WhatWeBuy from './components/WhatWeBuy'
import WhyUs from './components/WhyUs'
import Mandate from './components/Mandate'
import Process from './components/Process'
import SubmissionForm from './components/SubmissionForm'
import Contact from './components/Contact'

const NAVY = '#0F1B2D'
const GOLD = '#C6A667'

function App() {
  const scrollToForm = () => {
    const el = document.getElementById('submit')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: NAVY }}>
      <header className="sticky top-0 z-20 border-b border-[#1f2a3a]" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 h-14 flex items-center justify-between">
          <div className="text-white font-serif tracking-wide">Citywide Investors</div>
          <button onClick={scrollToForm} className="text-sm px-3 py-1 rounded-md" style={{ backgroundColor: GOLD, color: NAVY }}>Submit an Asset</button>
        </div>
      </header>

      <main>
        <Hero onCTA={scrollToForm} />
        <WhatWeBuy />
        <WhyUs />
        <Mandate />
        <Process />
        <SubmissionForm />
        <Contact />
      </main>

      <footer className="border-t border-[#1f2a3a]" style={{ backgroundColor: NAVY }}>
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-8 text-xs text-slate-500">© {new Date().getFullYear()} Citywide Investors. All rights reserved.</div>
      </footer>
    </div>
  )
}

export default App
