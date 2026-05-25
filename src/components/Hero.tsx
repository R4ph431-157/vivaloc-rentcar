import { useLanguage } from '../context/LanguageContext'
import { ArrowRight } from './icons'

export default function Hero() {
  const { tr } = useLanguage()

  return (
    <section className="hero">
      <img
        className="hero-bg"
        src="/assets/take%20wheel.jpg"
        alt=""
        aria-hidden="true"
      />
      <h1>
        <span className="row"><i>{tr.hero.line1}</i></span>
        <span className="row"><i className="grad">{tr.hero.line2}</i></span>
        <span className="row"><i className="outline">{tr.hero.line3}</i></span>
      </h1>
      <div className="hero-bottom">
        <p className="hero-sub">
          <b>{tr.hero.vehicles}</b> {tr.hero.sub}
        </p>
        <div className="hero-cta">
          <a href="#fleet" className="btn">
            {tr.hero.ctaFleet} <ArrowRight />
          </a>
          <a href="https://wa.me/2290129811111" target="_blank" rel="noopener noreferrer" className="btn alt">{tr.hero.ctaWhatsapp}</a>
        </div>
      </div>
    </section>
  )
}
