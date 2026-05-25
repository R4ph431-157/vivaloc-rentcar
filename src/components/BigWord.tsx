import { useLanguage } from '../context/LanguageContext'

export default function BigWord() {
  const { tr } = useLanguage()
  const doubled = [...tr.bigWord, ...tr.bigWord]

  return (
    <div className="bigword">
      <div className="bigword-track">
        {doubled.map((word, i) => (
          <span key={i}>{word}</span>
        ))}
      </div>
    </div>
  )
}
