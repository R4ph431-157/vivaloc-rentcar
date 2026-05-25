import { useLanguage } from '../context/LanguageContext'

export default function Ticker() {
  const { tr } = useLanguage()
  const doubled = [...tr.ticker, ...tr.ticker]

  return (
    <div className="ticker">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i}>{item}</span>
        ))}
      </div>
    </div>
  )
}
