import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

// Import images
import qualitaImg from '../../assets/apparechciature e cablaggi/imgi_22_qualita_1.webp'
import qualitaImg2 from '../../assets/apparechciature e cablaggi/imgi_23_qualita_2.webp'
import qualitaImg3 from '../../assets/apparechciature e cablaggi/imgi_24_qualita_3.webp'

export default function QualitaIndex() {
  const items = [
    {
      title: 'Codesign',
      path: '/qualita/codesign',
      description: 'Collaborazione stretta con il cliente dalla progettazione alla produzione per ottimizzare costi, tempi e prestazioni.',
      image: qualitaImg
    },
    {
      title: 'Tecnologia',
      path: '/qualita/tecnologia',
      description: 'Impianti moderni, attrezzature all\'avanguardia e processi produttivi controllati per garantire la massima qualità.',
      image: qualitaImg2
    },
    {
      title: 'Certificazioni',
      path: '/qualita/certificazioni',
      description: 'Sistema di Gestione Qualità certificato ISO 9001, IATF 16949 e ISO 14001 per standard internazionali.',
      image: qualitaImg3
    },
    {
      title: 'Brevetti',
      path: '/qualita/brevetti',
      description: 'Innovazione continua protetta da brevetti che testimoniano il nostro impegno nella ricerca e sviluppo.',
      image: qualitaImg
    },
    {
      title: 'Riconoscimenti',
      path: '/qualita/riconoscimenti',
      description: 'Premi e riconoscimenti che attestano l\'eccellenza dei nostri prodotti e servizi nel settore.',
      image: qualitaImg2
    },
  ]

  return (
    <>
      <PageHeader
        title="Qualità"
        subtitle="La qualità è il fondamento di tutto ciò che facciamo. Ogni prodotto che esce dai nostri stabilimenti è il risultato di processi certificati e controlli rigorosi."
        breadcrumbs={[{ label: 'Qualità' }]}
      />

      {/* Intro */}
      <section className="py-20 bg-black border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <p className="text-white/60 text-lg">
            Il nostro Sistema di Gestione Qualità è certificato secondo gli standard internazionali più rigorosi: ISO 9001 per la gestione della qualità, IATF 16949 per il settore automotive e ISO 14001 per la gestione ambientale.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="group bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="aspect-video overflow-hidden bg-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    title={item.title}
                    loading="lazy"
                    width="800"
                    height="450"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-medium text-white mb-3 group-hover:text-white/80">
                    {item.title}
                  </h3>
                  <p className="text-white/50 text-sm mb-6">
                    {item.description}
                  </p>
                  <div className="flex items-center gap-2 text-white/50 text-sm group-hover:text-white/70">
                    <span>Scopri</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Certificazioni in evidenza */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Certificazioni</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              Standard internazionali di eccellenza
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">ISO</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-3">ISO 9001</h3>
              <p className="text-white/50 text-sm">
                Sistema di Gestione Qualità per garantire prodotti conformi e miglioramento continuo.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">IATF</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-3">IATF 16949</h3>
              <p className="text-white/50 text-sm">
                Standard specifico per il settore automotive, con requisiti stringenti di qualità.
              </p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-white/10 flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">ISO</span>
              </div>
              <h3 className="text-lg font-medium text-white mb-3">ISO 14001</h3>
              <p className="text-white/50 text-sm">
                Sistema di Gestione Ambientale per operare con responsabilità verso l'ambiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Scopri il nostro approccio alla qualità" />
    </>
  )
}
