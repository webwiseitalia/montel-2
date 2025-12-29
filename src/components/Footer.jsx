import { Link } from 'react-router-dom'
import logoImg from '../assets/cab-3/cab-3-1.webp'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    azienda: [
      { label: 'Chi siamo', path: '/azienda' },
      { label: 'Network', path: '/azienda/network' },
      { label: 'Certificazioni', path: '/qualita/certificazioni' },
      { label: 'Contatti', path: '/contatti' },
    ],
    prodotti: [
      { label: 'Sensori di livello', path: '/prodotti/sensori-livello-carburante' },
      { label: 'Cablaggi elettrici', path: '/prodotti/cablaggi-elettrici' },
      { label: 'Quadri elettrici', path: '/prodotti/quadri-elettrici' },
      { label: 'Sonde temperatura', path: '/prodotti/sonde-temperatura' },
    ],
    settori: [
      { label: 'Movimento terra', path: '/settori' },
      { label: 'Macchine agricole', path: '/settori' },
      { label: 'Automotive', path: '/settori' },
      { label: 'Nautica', path: '/settori' },
    ],
  }

  return (
    <footer className="bg-black">
      {/* Main Footer */}
      <div className="container py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Logo & Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-8">
              <img src={logoImg} alt="Mont.El" className="h-10 w-auto" />
            </Link>
            <p className="text-body text-muted mb-8 max-w-sm">
              Dal 1979 progettiamo e produciamo componenti elettronici per i settori industriali più esigenti.
            </p>
            <div className="space-y-1 text-sm text-muted">
              <p className="text-white">Mont.El S.r.l.</p>
              <p>Via Mazzini, 31/B</p>
              <p>25057 Sale Marasino (BS)</p>
              <p className="mt-4">+39 030 986300</p>
              <p>info@montel.it</p>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16">
              {/* Azienda */}
              <div>
                <h4 className="text-caption text-white mb-6">Azienda</h4>
                <ul className="space-y-4">
                  {footerLinks.azienda.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.path}
                        className="text-sm text-muted hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prodotti */}
              <div>
                <h4 className="text-caption text-white mb-6">Prodotti</h4>
                <ul className="space-y-4">
                  {footerLinks.prodotti.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.path}
                        className="text-sm text-muted hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Settori */}
              <div>
                <h4 className="text-caption text-white mb-6">Settori</h4>
                <ul className="space-y-4">
                  {footerLinks.settori.map((link, i) => (
                    <li key={i}>
                      <Link
                        to={link.path}
                        className="text-sm text-muted hover:text-white transition-colors duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="divider" />
      <div className="container py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted text-center md:text-left">
            © {currentYear} Mont.El S.r.l. — P.IVA 10695790153
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted hover:text-white transition-colors">
              Cookie Policy
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
