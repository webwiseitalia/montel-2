import PageHeader from '../../components/PageHeader'
import SidebarNav from '../../components/SidebarNav'
import CTABanner from '../../components/CTABanner'

// Import images
import quadriImg from '../../assets/produzione/imgi_6_quadri_elettrici_thumb.webp'
import quadriCase from '../../assets/case history/imgi_6_quadri_elettrici_thumb_case.webp'

export default function QuadriElettrici() {
  const productNav = [
    { label: 'Sensori di livello carburante', path: '/prodotti/sensori-livello-carburante' },
    { label: 'Cablaggi elettrici', path: '/prodotti/cablaggi-elettrici' },
    { label: 'Quadri elettrici', path: '/prodotti/quadri-elettrici' },
    { label: 'Sonde di temperatura', path: '/prodotti/sonde-temperatura' },
  ]

  const processSteps = [
    {
      title: 'Analisi delle specifiche',
      description: 'Studio approfondito dei requisiti funzionali, elettrici e ambientali del progetto'
    },
    {
      title: 'Progettazione',
      description: 'Sviluppo dello schema elettrico, layout meccanico e selezione dei componenti'
    },
    {
      title: 'Prototipazione',
      description: 'Realizzazione del prototipo per validazione funzionale e test di compatibilità'
    },
    {
      title: 'Produzione in serie',
      description: 'Fabbricazione con processi controllati e tracciabilità completa'
    },
    {
      title: 'Collaudo funzionale',
      description: 'Test elettrici e funzionali al 100% secondo procedure validate'
    },
  ]

  const products = [
    { name: 'Centraline di controllo', description: 'Unità di comando per macchine e impianti' },
    { name: 'Pannelli operatore', description: 'Interfacce uomo-macchina con display e comandi' },
    { name: 'Scatole di derivazione', description: 'Distribuzione e protezione dei circuiti' },
    { name: 'Quadri di potenza', description: 'Gestione e distribuzione dell\'energia elettrica' },
  ]

  return (
    <>
      <PageHeader
        title="Quadri elettrici"
        breadcrumbs={[
          { label: 'Prodotti', path: '/prodotti' },
          { label: 'Quadri elettrici' }
        ]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <SidebarNav items={productNav} title="Prodotti" />
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <div className="mb-16">
                <h2 className="text-2xl font-light text-white mb-6">
                  Centraline e pannelli di controllo su misura
                </h2>
                <p className="text-white/60 text-lg mb-6">
                  Mont.El progetta e produce quadri elettrici e centraline di controllo per applicazioni industriali. Dall'analisi delle specifiche alla consegna del prodotto finito, seguiamo ogni fase del processo con la massima attenzione alla qualità.
                </p>
                <p className="text-white/60">
                  I nostri quadri elettrici sono realizzati per resistere alle condizioni operative più gravose: vibrazioni, temperature estreme, umidità e polvere. Ogni unità è collaudata al 100% prima della consegna.
                </p>
              </div>

              <div className="aspect-video overflow-hidden border border-white/10 mb-16">
                <img
                  src={quadriImg}
                  alt="Quadri elettrici Mont.El"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tipologie prodotto */}
              <div className="mb-16">
                <h2 className="text-2xl font-light text-white mb-6">
                  Tipologie di prodotto
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {products.map((product, index) => (
                    <div key={index} className="p-6 bg-white/[0.02] border border-white/10">
                      <h3 className="text-white font-medium mb-2">{product.name}</h3>
                      <p className="text-white/50 text-sm">{product.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process steps */}
              <div className="mb-16">
                <h2 className="text-2xl font-light text-white mb-8">
                  Il nostro processo produttivo
                </h2>
                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0 w-10 h-10 bg-white/10 flex items-center justify-center text-white font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-2">{step.title}</h3>
                        <p className="text-white/50">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Immagine case */}
              <div className="aspect-video overflow-hidden border border-white/10 mb-16">
                <img
                  src={quadriCase}
                  alt="Dettaglio quadro elettrico Mont.El"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Servizi inclusi */}
              <div className="mb-16 bg-white/5 border border-white/10 p-8">
                <h2 className="text-2xl font-light text-white mb-6">
                  Servizi inclusi
                </h2>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Assemblaggio completo di schede elettroniche</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Cablaggio interno con materiali selezionati</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Collaudo funzionale al 100%</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Documentazione tecnica e certificati di conformità</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Tracciabilità completa dei componenti</span>
                  </li>
                </ul>
              </div>

              {/* Download */}
              <div className="bg-white/5 border border-white/10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-white font-medium mb-1">Catalogo quadri elettrici</h3>
                  <p className="text-white/50 text-sm">Scopri le nostre soluzioni per centraline e pannelli di controllo</p>
                </div>
                <button className="btn-secondary whitespace-nowrap">
                  Scarica PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
