import { useLanguage } from '../context/LanguageContext'
import Logo from './Logo'
import { InstagramIcon, WhatsAppIcon, TikTokIcon } from './icons'

export default function Footer() {
  const { tr } = useLanguage()

  return (
    <footer>
      <div className="fgrid">
        <div>
          <Logo />
          <p className="ftag">{tr.footer.tagline}</p>
        </div>
        <div className="fcol">
          <h5>{tr.footer.nav}</h5>
          <a href="#fleet">{tr.nav.fleet}</a>
          <a href="#why">{tr.nav.advantages}</a>
          <a href="#contact">{tr.nav.contact}</a>
        </div>
        <div className="fcol">
          <h5>{tr.footer.follow}</h5>
          <div className="fsocial">
            <a href="https://www.instagram.com/vivaloc.rentcar?igsh=Z3U4N25mcGozMWtz" target="_blank" rel="noopener noreferrer" className="fsoc-link" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://wa.me/2290129811111" target="_blank" rel="noopener noreferrer" className="fsoc-link" aria-label="WhatsApp">
              <WhatsAppIcon />
            </a>
            <a href="#" className="fsoc-link" aria-label="TikTok">
              <TikTokIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="fbot">
        <div className="fcopy">
          <span className="fcopy-line" />
          <span className="fcopy-text">© 2026 <b><span style={{color:'#ffffff'}}>VIVA</span><span style={{color:'#e63946'}}>LOC</span></b> · Cotonou, Bénin</span>
          <span className="fcopy-line" />
        </div>
      </div>
    </footer>
  )
}
