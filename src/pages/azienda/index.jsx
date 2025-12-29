import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

// Import images
import teamAzienda from '../../assets/sviluppo ad hoc/imgi_2_2500x900-azienda.webp'
import aziendaImg from '../../assets/sviluppo ad hoc/imgi_8_1300x900-azienda.webp'

export default function AziendaIndex() {
  const subNav = [
    { label: 'Punti di forza e mission', path: '/azienda/punti-di-forza' },
    { label: 'Il Network', path: '/azienda/network' },
  ]

  const certifications = [
    { name: 'ISO 9001', description: 'Sistema di Gestione Qualità' },
    { name: 'IATF 16949', description: 'Standard automotive' },
    { name: 'ISO 14001', description: 'Gestione ambientale' },
  ]

  return (
    <>
      <PageHeader
        title="Azienda"
        subtitle="Dal 1979, Mont.El progetta e produce componenti elettronici ed elettromeccanici per i settori più esigenti dell'industria."
        breadcrumbs={[{ label: 'Azienda' }]}
      />

      {/* Menu secondario interno */}
      <section className="bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <nav className="flex gap-6 py-4 overflow-x-auto">
            {subNav.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-white/60 hover:text-white text-sm whitespace-nowrap transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {/* Intro content */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Oltre 45 anni di esperienza nell'elettronica industriale
              </h2>
              <p className="text-white/60 text-lg mb-6">
                Mont.El Apparecchiature Elettroelettroniche S.r.l. è specializzata nella progettazione e produzione di sensori di livello carburante, cablaggi elettrici, quadri elettrici e sonde di temperatura.
              </p>
              <p className="text-white/60 mb-6">
                Con sede a Sale Marasino (BS), serviamo clienti in tutto il mondo nei settori delle macchine movimento terra, macchine agricole, generatori, veicoli industriali, automotive, nautica e ferroviario.
              </p>
              <p className="text-white/60">
                La nostra filosofia "Life in a wire" rappresenta la passione e l'impegno che mettiamo in ogni prodotto, combinando innovazione tecnologica, qualità certificata e un servizio clienti dedicato.
              </p>
            </div>
            <div className="aspect-video overflow-hidden border border-white/10">
              <img
                src={teamAzienda}
                alt="Team Mont.El in riunione"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dati aziendali */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">I numeri</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              Mont.El in cifre
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">45+</div>
              <div className="text-white/50 text-sm uppercase tracking-wider">Anni di esperienza</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">4</div>
              <div className="text-white/50 text-sm uppercase tracking-wider">Linee di prodotto</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">7</div>
              <div className="text-white/50 text-sm uppercase tracking-wider">Settori industriali</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-light text-white mb-2">3</div>
              <div className="text-white/50 text-sm uppercase tracking-wider">Certificazioni</div>
            </div>
          </div>
        </div>
      </section>

      {/* Espansione produttiva */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video overflow-hidden border border-white/10 order-2 lg:order-1">
              <img
                src={aziendaImg}
                alt="Stabilimento Mont.El"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Espansione internazionale</p>
              <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
                Presenza produttiva in Romania
              </h2>
              <p className="text-white/60 text-lg mb-6">
                Per rispondere alle crescenti esigenze del mercato, Mont.El ha ampliato la propria capacità produttiva con uno stabilimento in Romania.
              </p>
              <p className="text-white/60">
                Questa espansione ci permette di offrire maggiore flessibilità, tempi di consegna ottimizzati e costi competitivi, mantenendo gli stessi standard qualitativi della sede italiana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificazioni teaser */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Qualità certificata</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Standard internazionali di eccellenza
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-12">
            Il nostro Sistema di Gestione Qualità è certificato secondo gli standard più rigorosi, a garanzia della massima affidabilità dei nostri prodotti.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6">
                <div className="text-2xl font-medium text-white mb-2">{cert.name}</div>
                <div className="text-white/50 text-sm">{cert.description}</div>
              </div>
            ))}
          </div>
          <Link to="/qualita/certificazioni" className="btn-secondary">
            Scopri le certificazioni
          </Link>
        </div>
      </section>

      {/* Download catalogo */}
      <section className="py-16 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-medium text-white mb-2">Catalogo prodotti</h3>
            <p className="text-white/50">Scarica il nostro catalogo completo con tutte le specifiche tecniche</p>
          </div>
          <button className="btn-primary whitespace-nowrap">
            Scarica il catalogo
          </button>
        </div>
      </section>

      <CTABanner title="Vuoi saperne di più sulla nostra azienda?" />
    </>
  )
}
