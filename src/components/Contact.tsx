import { useLanguage } from '../context/LanguageContext'
import Reveal from './Reveal'
import { CheckIcon, WhatsAppIcon, InstagramIcon, EmailIcon } from './icons'
import { contactLinks, ContactChannel } from '../data/contact'

function ContactChannelIcon({ channel }: { channel: ContactChannel }) {
  if (channel === 'whatsapp') return <WhatsAppIcon />
  if (channel === 'instagram') return <InstagramIcon />
  return <EmailIcon />
}

export default function Contact() {
  const { tr } = useLanguage()

  return (
    <section id="contact">
      <div className="wrap">
        <Reveal className="contact-grid">
          <div className="cleft">
            <h2>{tr.contact.heading}<br /><em>{tr.contact.headingEm}</em></h2>
            <p>{tr.contact.sub}</p>
            <div className="clinks">
              {contactLinks.map((link, i) => {
                const text = tr.contact.contactLinks[i]
                return (
                  <a key={link.channel} href={link.href} className="clink" target={link.channel !== 'email' ? '_blank' : undefined} rel={link.channel !== 'email' ? 'noopener noreferrer' : undefined}>
                    <div className="ic">
                      <ContactChannelIcon channel={link.channel} />
                    </div>
                    <div>
                      <div className="ct">{text.label}</div>
                      <div className="cv">{text.value}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
          <div className="cright">
            <span className="cb">
              {tr.contact.badge}
            </span>
            <h3>{tr.contact.crightHeading}</h3>
            <ul>
              {tr.contact.comingSoon.map((item) => (
                <li key={item}>
                  <span className="chk"><CheckIcon /></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
