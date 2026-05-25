import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import { ArrowRight } from './icons'

export default function Adventure() {
  const { tr } = useLanguage()

  return (
    <section className="adv">
      <Reveal className="av">
        <h2>
          {tr.adventure.line1}<br />
          <span className="grad">{tr.adventure.line2}</span><br />
          <span className="pink">{tr.adventure.line3}</span>
        </h2>
        <p>{tr.adventure.sub}</p>
        <a href="https://wa.me/2290129811111" target="_blank" rel="noopener noreferrer" className="btn">
          {tr.adventure.cta} <ArrowRight />
        </a>
      </Reveal>
    </section>
  )
}
