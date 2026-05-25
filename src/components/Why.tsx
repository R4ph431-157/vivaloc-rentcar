import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import { whyRows } from '../data/why'

export default function Why() {
  const { tr } = useLanguage()

  return (
    <section id="why">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">{tr.why.eyebrow}</div>
          <h2 className="bighead">{tr.why.heading} <em>{tr.why.headingEm}</em></h2>
        </Reveal>
        <Reveal className="whyrows">
          {whyRows.map((row, i) => {
            const text = tr.why.rows[i]
            return (
              <div className="wrow" key={row.num}>
                <span className="wn">{row.num}</span>
                <span className="wt">{text.title}</span>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
