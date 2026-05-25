import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import { steps } from '../data/steps'

export default function HowItWorks() {
  const { tr } = useLanguage()

  return (
    <section id="how">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">{tr.howItWorks.eyebrow}</div>
          <h2 className="bighead">{tr.howItWorks.heading} <em>{tr.howItWorks.headingEm}</em></h2>
        </Reveal>
        <Reveal className="steps">
          {steps.map((step, i) => {
            const text = tr.howItWorks.steps[i]
            return (
              <div className="scell" key={step.num}>
                <span className="sn">{step.num}</span>
                <h4>{text.title}</h4>
                <p>{text.desc}</p>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
