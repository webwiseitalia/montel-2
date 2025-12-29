import { Link } from 'react-router-dom'

// Import images
import teamAzienda from '../assets/sviluppo ad hoc/imgi_2_2500x900-azienda.webp'
import sensoriThumb from '../assets/produzione/imgi_4_sensori_di_livello_thumb.webp'
import cablaggiThumb from '../assets/produzione/imgi_5_cablaggi_elettrici_thumb.webp'
import quadriThumb from '../assets/produzione/imgi_6_quadri_elettrici_thumb.webp'
import sondeThumb from '../assets/produzione/imgi_7_sonde_di_temperatura_thumb.webp'
import qualitaImg from '../assets/apparechciature e cablaggi/imgi_22_qualita_1.webp'
import settoriImg from '../assets/settori applicazione/imgi_7_magricole2.webp'
import caseHistorySensori from '../assets/case history/imgi_4_sensori_di_livello_thumb_case.webp'
import caseHistoryCablaggi from '../assets/case history/imgi_5_cablaggi_elettrici_thumb_case.webp'
import caseHistoryQuadri from '../assets/case history/imgi_6_quadri_elettrici_thumb_case.webp'

export default function Home() {
  const products = [
    {
      title: 'Sensori di livello carburante',
      description: 'Tecnologia capacitiva di alta precisione',
      path: '/prodotti/sensori-livello-carburante',
      image: sensoriThumb
    },
    {
      title: 'Cablaggi elettrici',
      description: 'Soluzioni su misura per ogni applicazione',
      path: '/prodotti/cablaggi-elettrici',
      image: cablaggiThumb
    },
    {
      title: 'Quadri elettrici',
      description: 'Centraline e pannelli di controllo',
      path: '/prodotti/quadri-elettrici',
      image: quadriThumb
    },
    {
      title: 'Sonde di temperatura',
      description: 'Misurazione precisa in ogni condizione',
      path: '/prodotti/sonde-temperatura',
      image: sondeThumb
    },
  ]

  const sectors = [
    'Macchine movimento terra',
    'Macchine agricole',
    'Generatori',
    'Veicoli industriali',
    'Automotive',
    'Nautica',
    'Ferroviario'
  ]

  const caseHistories = [
    { title: 'Sensori di livello carburante', category: 'Sensori', path: '/case-history/sensori-livello-carburante', image: caseHistorySensori },
    { title: 'Cablaggi elettrici', category: 'Cablaggi', path: '/case-history/cablaggi-elettrici', image: caseHistoryCablaggi },
    { title: 'Quadri elettrici', category: 'Quadri', path: '/case-history/quadri-elettrici', image: caseHistoryQuadri },
  ]

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center bg-black">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-white/50 mb-6">Dal 1979</p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Life in a wire
          </h1>
          <p className="text-lg md:text-xl text-white/60 mb-8 max-w-3xl mx-auto">
            Progettazione e produzione di sensori di livello carburante, cablaggi elettrici, quadri elettrici e sonde di temperatura per l'industria.
          </p>

          {/* Ambiti sintetici */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="px-4 py-2 border border-white/20 text-white/70 text-sm">Sensori capacitivi</span>
            <span className="px-4 py-2 border border-white/20 text-white/70 text-sm">Cablaggi su misura</span>
            <span className="px-4 py-2 border border-white/20 text-white/70 text-sm">Quadri elettrici</span>
            <span className="px-4 py-2 border border-white/20 text-white/70 text-sm">Sonde temperatura</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contatti" className="btn-primary">
              Richiedi informazioni
            </Link>
            <Link to="/azienda" className="btn-secondary">
              Scopri l'azienda
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-white/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* CHI SIAMO - Teaser */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Chi siamo</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                Oltre 45 anni di esperienza nell'elettronica industriale
              </h2>
              <p className="text-white/60 text-lg mb-6">
                Mont.El è specializzata nella progettazione e produzione di componenti elettronici ed elettromeccanici destinati ai settori più esigenti dell'industria.
              </p>
              <p className="text-white/60 mb-8">
                Con sede a Sale Marasino (BS), dal 1979 offriamo soluzioni personalizzate che combinano qualità, innovazione e affidabilità per soddisfare le esigenze dei nostri clienti in tutto il mondo.
              </p>
              <Link to="/azienda" className="btn-primary">
                Scopri l'azienda
              </Link>
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

      {/* LIFE IN A WIRE - Video */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Life in a wire</p>
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            La nostra passione per l'eccellenza
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mb-12">
            Scopri come trasformiamo le idee in soluzioni concrete, dalla progettazione alla produzione.
          </p>
          <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center max-w-4xl mx-auto">
            <span className="text-white/30">[Video aziendale]</span>
          </div>
        </div>
      </section>

      {/* PRODOTTI */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Prodotti</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
              Soluzioni per ogni esigenza industriale
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Quattro linee di prodotto progettate e realizzate interamente in Italia, con la massima attenzione alla qualità e all'innovazione tecnologica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.path}
                className="group bg-white/[0.02] border border-white/10 p-8 hover:border-white/30 transition-all"
              >
                <div className="aspect-square mb-6 overflow-hidden bg-white/5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-lg font-medium text-white group-hover:text-white/80 transition-colors">
                  {product.title}
                </h3>
                <p className="text-white/50 text-sm mt-2">{product.description}</p>
                <div className="flex items-center gap-2 mt-4 text-white/50 text-sm group-hover:text-white/70">
                  <span>Scopri</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/prodotti" className="btn-secondary">
              Tutti i prodotti
            </Link>
          </div>
        </div>
      </section>

      {/* QUALITÀ */}
      <section className="py-20 lg:py-32 bg-[#f1f0ea]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-video overflow-hidden border border-black/10 order-2 lg:order-1">
              <img
                src={qualitaImg}
                alt="Controllo qualità Mont.El"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm uppercase tracking-widest text-black/50 mb-4">Qualità certificata</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#010101] mb-6">
                Eccellenza garantita da certificazioni internazionali
              </h2>
              <p className="text-black/60 text-lg mb-6">
                Il nostro Sistema di Gestione Qualità è certificato secondo gli standard più rigorosi del settore.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-3 py-1 bg-black/10 text-black/70 text-sm">ISO 9001</span>
                <span className="px-3 py-1 bg-black/10 text-black/70 text-sm">IATF 16949</span>
                <span className="px-3 py-1 bg-black/10 text-black/70 text-sm">ISO 14001</span>
              </div>
              <Link to="/qualita" className="btn-primary !bg-[#010101] !text-white !border-[#010101] hover:!bg-transparent hover:!text-[#010101]">
                Scopri di più
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SETTORI DI APPLICAZIONE */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Settori di applicazione</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
                Soluzioni per ogni industria
              </h2>
              <p className="text-white/60 text-lg mb-8">
                I nostri prodotti trovano applicazione nei settori industriali più esigenti, dove affidabilità e precisione sono requisiti fondamentali.
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                {sectors.map((sector, index) => (
                  <span key={index} className="px-4 py-2 border border-white/20 text-white/70 text-sm">
                    {sector}
                  </span>
                ))}
              </div>
              <Link to="/settori" className="btn-primary">
                Esplora i settori
              </Link>
            </div>
            <div className="aspect-video overflow-hidden border border-white/10">
              <img
                src={settoriImg}
                alt="Macchina agricola - settore di applicazione Mont.El"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CASE HISTORY */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Case history</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
              Progetti realizzati con successo
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Scopri come abbiamo aiutato i nostri clienti a raggiungere i loro obiettivi con soluzioni personalizzate e innovative.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {caseHistories.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="group bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="aspect-video overflow-hidden bg-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs uppercase tracking-wider text-white/40">{item.category}</span>
                  <h3 className="text-lg font-medium text-white group-hover:text-white/80 mt-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-4 text-white/50 text-sm group-hover:text-white/70">
                    <span>Leggi</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-history" className="btn-secondary">
              Tutte le case history
            </Link>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-20 lg:py-32 bg-black border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6">
            Hai un progetto in mente?
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Contattaci per scoprire come possiamo aiutarti a realizzare la tua idea con soluzioni su misura.
          </p>
          <Link to="/contatti" className="btn-primary">
            Richiedi informazioni
          </Link>
        </div>
      </section>
    </>
  )
}
