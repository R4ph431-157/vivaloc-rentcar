export function ArrowRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function ArrowDiagonal() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="3">
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  )
}

export function CheckIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  )
}

export function CarIcon({ color }: { color: string }) {
  return (
    <svg className="fveh" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2">
      <path d="M3 13l2-5a2 2 0 012-1.4h10A2 2 0 0119 8l2 5M5 17h14M5 17v2H3v-2M21 17v2h-2v-2M5 13h14" />
      <circle cx="7.5" cy="16.5" r="1.5" />
      <circle cx="16.5" cy="16.5" r="1.5" />
    </svg>
  )
}

export function QuadIcon({ color }: { color: string }) {
  return (
    <svg className="fveh" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2">
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
      <path d="M9 17h6M6 14V9h6l3 5M12 9V6h3" />
    </svg>
  )
}

export function BuggyIcon({ color }: { color: string }) {
  return (
    <svg className="fveh" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.2">
      <circle cx="6" cy="17" r="3" />
      <circle cx="18" cy="17" r="3" />
      <path d="M9 17h6M3 13l3-4h9l3 4M6 9V7M18 13V9M9 9V7h6" />
    </svg>
  )
}

export function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M21 11.5a8.5 8.5 0 01-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1121 11.5z" />
    </svg>
  )
}

export function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

export function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M4 4h16v16H4zM4 7l8 5 8-5" />
    </svg>
  )
}

export function TikTokIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.6 6.7a4.8 4.8 0 01-3.8-4.2V2h-3.4v13.7a2.9 2.9 0 01-2.9 2.5 2.9 2.9 0 01-2.9-2.9 2.9 2.9 0 012.9-2.9c.3 0 .5 0 .8.1V9a6.3 6.3 0 00-.8-.1 6.3 6.3 0 00-6.3 6.4 6.3 6.3 0 006.3 6.3 6.3 6.3 0 006.3-6.3V8.7a8.2 8.2 0 004.8 1.5V6.8a4.9 4.9 0 01-1-.1z" />
    </svg>
  )
}
