import { useState, useRef } from 'react'

interface Props {
  onReveal: () => void  // fires immediately when video ends — start site fade-in
  onDone: () => void    // fires after intro fades out — remove from DOM
}

export default function Intro({ onReveal, onDone }: Props) {
  const [phase, setPhase] = useState<'idle' | 'playing' | 'out'>('idle')
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleStart = () => {
    setPhase('playing')
    videoRef.current?.play()
  }

  const handleEnd = () => {
    setPhase('out')
    onReveal()
    setTimeout(onDone, 900)
  }

  return (
    <div className={`intro${phase === 'out' ? ' intro-out' : ''}`}>

      <div className="intro-glow" />

      <video
        ref={videoRef}
        src="/assets/start%20video.MOV"
        playsInline
        onEnded={handleEnd}
        className={`intro-video${phase === 'playing' ? ' active' : ''}`}
      />

      {/* cinematic shade: bars + vignette + colour grade */}
      <div className="intro-scene" />

      {phase === 'idle' && (
        <div className="intro-idle" onClick={handleStart}>
          <div className="logo intro-logo">VIVA<b>LOC</b></div>
          <span className="intro-hint">
            <span className="intro-dot" />
            TAP TO START
          </span>
        </div>
      )}

      {phase === 'playing' && (
        <button className="intro-skip" onClick={handleEnd}>
          SKIP
        </button>
      )}
    </div>
  )
}
