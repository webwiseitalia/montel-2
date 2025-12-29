import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <span className="text-black font-bold text-xl">M</span>
              </div>
              <span className="text-white font-semibold text-lg tracking-tight">
                MONT.EL
              </span>
            </Link>
            <div className="text-white/50 text-sm space-y-1">
              <p className="text-white">Mont.El Apparecchiature Elettroelettroniche S.r.l.</p>
              <p>Via Mazzini, 31/B</p>
              <p>25057 Sale Marasino (BS) – Italia</p>
              <p className="pt-2">Tel: +39 030 986300</p>
              <p>Email: info@montel.it</p>
              <p className="pt-2">P.IVA: 10695790153</p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
              Navigazione
            </h4>
            <ul className="space-y-3">
              <li><Link to="/azienda" className="text-white/50 text-sm hover:text-white transition-colors">Azienda</Link></li>
              <li><Link to="/prodotti" className="text-white/50 text-sm hover:text-white transition-colors">Prodotti</Link></li>
              <li><Link to="/settori" className="text-white/50 text-sm hover:text-white transition-colors">Settori di applicazione</Link></li>
              <li><Link to="/qualita" className="text-white/50 text-sm hover:text-white transition-colors">Qualità</Link></li>
              <li><Link to="/servizi" className="text-white/50 text-sm hover:text-white transition-colors">Servizi</Link></li>
              <li><Link to="/case-history" className="text-white/50 text-sm hover:text-white transition-colors">Case history</Link></li>
              <li><Link to="/contatti" className="text-white/50 text-sm hover:text-white transition-colors">Contatti</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
              Prodotti
            </h4>
            <ul className="space-y-3">
              <li><Link to="/prodotti/sensori-livello-carburante" className="text-white/50 text-sm hover:text-white transition-colors">Sensori di livello carburante</Link></li>
              <li><Link to="/prodotti/cablaggi-elettrici" className="text-white/50 text-sm hover:text-white transition-colors">Cablaggi elettrici</Link></li>
              <li><Link to="/prodotti/quadri-elettrici" className="text-white/50 text-sm hover:text-white transition-colors">Quadri elettrici</Link></li>
              <li><Link to="/prodotti/sonde-temperatura" className="text-white/50 text-sm hover:text-white transition-colors">Sonde di temperatura</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-medium uppercase tracking-wider mb-4">
              Documentazione
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Privacy / GDPR</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Condizioni generali di acquisto</a></li>
              <li><a href="#" className="text-white/50 text-sm hover:text-white transition-colors">Condizioni generali di fornitura</a></li>
              <li><Link to="/sostenibilita/etichettatura-ambientale" className="text-white/50 text-sm hover:text-white transition-colors">Etichettatura ambientale</Link></li>
              <li><a href="#" target="_blank" rel="noopener noreferrer" className="text-white/50 text-sm hover:text-white transition-colors">Whistleblowing</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/30 text-sm text-center md:text-left">
            <p>© {new Date().getFullYear()} Mont.El Apparecchiature Elettroelettroniche S.r.l. Tutti i diritti riservati.</p>
            <p className="text-xs mt-1">C.F./P.IVA 10695790153 | REA BS 351131 | Capitale sociale € 720.000,00</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/30 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-white/30 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
