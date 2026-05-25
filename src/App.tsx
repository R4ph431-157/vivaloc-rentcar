import { LanguageProvider } from './context/LanguageContext'
import Cursor from './components/Cursor'
import Aurora from './components/Aurora'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Fleet from './components/Fleet'
import BigWord from './components/BigWord'
import Why from './components/Why'
import Adventure from './components/Adventure'
import HowItWorks from './components/HowItWorks'
import Quote from './components/Quote'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <LanguageProvider>
      <div>
        <Cursor />
        <Aurora />
        <Nav />
        <main>
          <Hero />
          <Ticker />
          <Fleet />
          <BigWord />
          <Why />
          <Adventure />
          <HowItWorks />
          <Quote />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}
