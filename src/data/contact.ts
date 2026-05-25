export type ContactChannel = 'whatsapp' | 'instagram' | 'email'

export interface ContactLink {
  channel: ContactChannel
  label: string
  value: string
  href: string
}

export const contactLinks: ContactLink[] = [
  { channel: 'whatsapp', label: 'WhatsApp', value: 'Écrire maintenant', href: 'https://wa.me/2290129811111' },
  { channel: 'instagram', label: 'Instagram', value: '@vivaloc.rentcar', href: 'https://www.instagram.com/vivaloc.rentcar?igsh=Z3U4N25mcGozMWtz' },
  { channel: 'email', label: 'Email', value: 'contact@vivaloc.bj', href: 'mailto:contact@vivaloc.bj' },
]

