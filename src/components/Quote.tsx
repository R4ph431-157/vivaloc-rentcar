import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'

export default function Quote() {
  const { tr } = useLanguage()

  return (
    <section>
      <div className="wrap">
        <Reveal className="quote">
          <div className="q">"</div>
          <blockquote>
            {tr.quote.before}<em>{tr.quote.em}</em>{tr.quote.after}
          </blockquote>
          <div className="who"><b>{tr.quote.author}</b> · {tr.quote.location}</div>
        </Reveal>
      </div>
    </section>
  )
}
