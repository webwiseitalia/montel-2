import PageHeader from '../../components/PageHeader'
import SidebarNav from '../../components/SidebarNav'
import CTABanner from '../../components/CTABanner'

// Import images
import cablaggiImg from '../../assets/produzione/imgi_5_cablaggi_elettrici_thumb.webp'
import cablaggiProduzione from '../../assets/cab-2/cab 2-1.webp'

export default function CablaggiElettrici() {
  const productNav = [
    { label: 'Sensori di livello carburante', path: '/prodotti/sensori-livello-carburante' },
    { label: 'Cablaggi elettrici', path: '/prodotti/cablaggi-elettrici' },
    { label: 'Quadri elettrici', path: '/prodotti/quadri-elettrici' },
    { label: 'Sonde di temperatura', path: '/prodotti/sonde-temperatura' },
  ]

  const services = [
    {
      title: 'Analisi requisiti',
      description: 'Studio approfondito delle specifiche tecniche e delle condizioni operative'
    },
    {
      title: 'Progettazione',
      description: 'Sviluppo dello schema elettrico e definizione dei materiali ottimali'
    },
    {
      title: 'Prototipazione',
      description: 'Realizzazione di prototipi per validazione e test funzionali'
    },
    {
      title: 'Produzione',
      description: 'Fabbricazione in serie con controllo qualità integrato'
    },
    {
      title: 'Collaudo',
      description: 'Test elettrici e funzionali al 100% dei prodotti'
    },
  ]

  const features = [
    'Cavi e conduttori selezionati per ogni applicazione',
    'Connettori di primarie marche (Deutsch, Amp, Molex, ecc.)',
    'Terminali crimpati con processo controllato',
    'Protezioni termoretraibili e guaine corrugati',
    'Etichettatura e identificazione personalizzata',
    'Conformità alle normative di settore',
  ]

  return (
    <>
      <PageHeader
        title="Cablaggi elettrici"
        breadcrumbs={[
          { label: 'Prodotti', path: '/prodotti' },
          { label: 'Cablaggi elettrici' }
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
                  Soluzioni su misura per ogni applicazione
                </h2>
                <p className="text-white/60 text-lg mb-6">
                  Mont.El progetta e produce cablaggi elettrici completi per applicazioni industriali in tutti i settori: macchine movimento terra, macchine agricole, generatori, veicoli industriali, automotive, nautica e ferroviario.
                </p>
                <p className="text-white/60 mb-6">
                  Ogni cablaggio è realizzato su specifica del cliente, dalla semplice terminazione di cavi alla realizzazione di sistemi complessi con centinaia di circuiti. Il nostro approccio "codesign" ci permette di collaborare strettamente con i clienti fin dalle prime fasi di sviluppo.
                </p>
              </div>

              <div className="aspect-video overflow-hidden border border-white/10 mb-16">
                <img
                  src={cablaggiImg}
                  alt="Cablaggi elettrici Mont.El"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caratteristiche */}
              <div className="mb-16">
                <h2 className="text-2xl font-light text-white mb-6">
                  Cosa offriamo
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/60">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Processo */}
              <div className="mb-16">
                <h2 className="text-2xl font-light text-white mb-8">
                  Il nostro processo
                </h2>
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0 w-10 h-10 bg-white/10 flex items-center justify-center text-white font-medium">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-white font-medium mb-2">{service.title}</h3>
                        <p className="text-white/50">{service.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Immagine produzione */}
              <div className="aspect-video overflow-hidden border border-white/10 mb-16">
                <img
                  src={cablaggiProduzione}
                  alt="Linea di produzione cablaggi Mont.El"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Codesign */}
              <div className="mb-16 bg-white/5 border border-white/10 p-8">
                <h2 className="text-2xl font-light text-white mb-6">
                  Approccio Codesign
                </h2>
                <p className="text-white/60 mb-6">
                  Il nostro approccio codesign prevede una collaborazione stretta con il cliente fin dalle prime fasi di progettazione. Questo permette di ottimizzare il prodotto, ridurre i costi e accelerare i tempi di sviluppo.
                </p>
                <ul className="space-y-3 text-white/60">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white/50 mt-2 flex-shrink-0" />
                    <span>Analisi congiunta delle specifiche e delle esigenze</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white/50 mt-2 flex-shrink-0" />
                    <span>Ottimizzazione del design per la producibilità</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white/50 mt-2 flex-shrink-0" />
                    <span>Selezione materiali per il miglior rapporto qualità/prezzo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-white/50 mt-2 flex-shrink-0" />
                    <span>Supporto continuo durante tutto il ciclo di vita del prodotto</span>
                  </li>
                </ul>
              </div>

              {/* Download */}
              <div className="bg-white/5 border border-white/10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-white font-medium mb-1">Catalogo cablaggi</h3>
                  <p className="text-white/50 text-sm">Scopri la nostra gamma completa di soluzioni</p>
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
