import { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface Props {
  children: ReactNode
  className?: string
}

export default function Reveal({ children, className = '' }: Props) {
  const ref = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`reveal ${className}`.trim()}>
      {children}
    </div>
  )
}
