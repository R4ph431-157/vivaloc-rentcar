import { useReveal } from '../hooks/useReveal'
import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import { ArrowDiagonal, CarIcon, QuadIcon, BuggyIcon } from './icons'
import { fleet, FleetItem, VehicleType } from '../data/fleet'

const vehicleColors: Record<VehicleType, string> = {
  car: 'var(--lime)',
  quad: 'var(--magenta)',
  buggy: 'var(--cyan)',
}

function VehicleIcon({ type }: { type: VehicleType }) {
  const color = vehicleColors[type]
  if (type === 'car') return <CarIcon color={color} />
  if (type === 'quad') return <QuadIcon color={color} />
  return <BuggyIcon color={color} />
}

interface FleetCardProps {
  item: FleetItem
  category: string
  title: [string, string]
  description: string
  price: string
  perDay: string
}

function FleetCard({ item, category, title, description, price, perDay }: FleetCardProps) {
  const ref = useReveal<HTMLElement>()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    v.play().catch(() => {})
  }, [])

  return (
    <article ref={ref} className="fcard reveal">
      <div className={`glow ${item.glowClass}`} />
      {item.image && (
        <img
          src={item.image}
          alt=""
          className="fcard-img"
          draggable={false}
          style={{
            ...(item.imagePos    ? { objectPosition: item.imagePos }  : {}),
            ...(item.imageHeight ? { height: item.imageHeight }       : {}),
          }}
        />
      )}
      {item.video && (
        <video
          ref={videoRef}
          className="fcard-vid"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src={item.video} type="video/mp4" />
        </video>
      )}
      <div className={`edge ${item.edgeClass}`} />
      <span className="fnum">{item.num}</span>
      <VehicleIcon type={item.vehicle} />
      <div className="fbody">
        <div className={`fcat ${item.catClass}`}>{category}</div>
        <h3>
          {title[0]}<br />
          {title[1]}
        </h3>
        <p className="fdesc">{description}</p>
        <div className="fmeta">
          <div className="fprice">{price} <small>{perDay}</small></div>
          <div className="farrow"><ArrowDiagonal /></div>
        </div>
      </div>
    </article>
  )
}

export default function Fleet() {
  const { tr } = useLanguage()

  return (
    <section id="fleet">
      <div className="wrap">
        <Reveal>
          <div className="eyebrow">{tr.fleet.eyebrow}</div>
          <h2 className="bighead">{tr.fleet.heading[0]} <em>{tr.fleet.heading[1]}</em></h2>
          <p className="sub2">{tr.fleet.sub}</p>
        </Reveal>
        <div className="fleet">
          {fleet.map((item, i) => {
            const text = tr.fleet.items[i]
            return (
              <FleetCard
                key={item.num}
                item={item}
                category={text.category}
                title={text.title}
                description={text.description}
                price={tr.fleet.price}
                perDay={tr.fleet.perDay}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}
