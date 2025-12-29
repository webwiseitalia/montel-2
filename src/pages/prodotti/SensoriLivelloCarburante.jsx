import PageHeader from '../../components/PageHeader'
import SidebarNav from '../../components/SidebarNav'
import CTABanner from '../../components/CTABanner'

// Import images
import sensoriImg from '../../assets/produzione/imgi_4_sensori_di_livello_thumb.webp'
import sensoriCase from '../../assets/case history/imgi_4_sensori_di_livello_thumb_case.webp'

export default function SensoriLivelloCarburante() {
  const productNav = [
    { label: 'Sensori di livello carburante', path: '/prodotti/sensori-livello-carburante' },
    { label: 'Cablaggi elettrici', path: '/prodotti/cablaggi-elettrici' },
    { label: 'Quadri elettrici', path: '/prodotti/quadri-elettrici' },
    { label: 'Sonde di temperatura', path: '/prodotti/sonde-temperatura' },
  ]

  const models = [
    { name: 'Sensori tubolari', description: 'Ideali per serbatoi con sviluppo verticale, alta precisione di misura' },
    { name: 'Sensori a piastra', description: 'Perfetti per serbatoi con forma irregolare o spazi ridotti' },
    { name: 'Uscita analogica', description: 'Segnale 0-5V o 4-20mA per integrazione con sistemi tradizionali' },
    { name: 'Uscita digitale CANbus', description: 'Comunicazione digitale per sistemi avanzati e diagnostica remota' },
    { name: 'Versioni ATEX', description: 'Conformi alle normative per ambienti a rischio esplosione' },
  ]

  const features = [
    'Alta precisione di misura (±1%)',
    'Resistenza alle vibrazioni e agli shock',
    'Ampio range di temperatura operativa (-40°C / +85°C)',
    'Compatibilità con diversi tipi di carburante',
    'Design robusto per ambienti gravosi',
    'Lunga durata operativa',
  ]

  return (
    <>
      <PageHeader
        title="Sensori di livello carburante"
        breadcrumbs={[
          { label: 'Prodotti', path: '/prodotti' },
          { label: 'Sensori di livello carburante' }
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
              {/* Intro tecnico */}
              <div className="mb-16">
                <h2 className="text-2xl font-light text-white mb-6">
                  Tecnologia capacitiva di alta precisione
                </h2>
                <p className="text-white/60 text-lg mb-6">
                  I sensori di livello carburante Mont.El utilizzano la tecnologia capacitiva per garantire misurazioni precise e affidabili in ogni condizione operativa. Progettati per resistere alle vibrazioni, agli shock e alle temperature estreme tipiche delle applicazioni industriali.
                </p>
                <p className="text-white/60">
                  Disponibili in diverse configurazioni per adattarsi a qualsiasi tipo di serbatoio e applicazione, i nostri sensori rappresentano la scelta ideale per macchine movimento terra, macchine agricole, generatori, veicoli industriali e applicazioni navali.
                </p>
              </div>

              {/* Immagine principale */}
              <div className="aspect-video overflow-hidden border border-white/10 mb-16">
                <img
                  src={sensoriImg}
                  alt="Sensori di livello carburante Mont.El"
                  title="Sensori di livello carburante Mont.El"
                  loading="lazy"
                  width="800"
                  height="450"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Caratteristiche */}
              <div className="mb-16">
                <h2 className="text-2xl font-light text-white mb-6">
                  Caratteristiche tecniche
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

              {/* Download catalogo */}
              <div className="bg-white/5 border border-white/10 p-6 mb-16 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-white font-medium mb-1">Catalogo sensori di livello</h3>
                  <p className="text-white/50 text-sm">Scarica il catalogo completo con tutte le specifiche tecniche</p>
                </div>
                <button className="btn-secondary whitespace-nowrap">
                  Scarica PDF
                </button>
              </div>

              {/* Descrizione funzionamento */}
              <div className="mb-16">
                <h2 className="text-2xl font-light text-white mb-6">
                  Come funziona
                </h2>
                <p className="text-white/60 mb-6">
                  I sensori capacitivi Mont.El misurano il livello del carburante rilevando le variazioni di capacità elettrica causate dalla presenza del liquido. Questa tecnologia garantisce misurazioni precise indipendentemente dalla qualità o dal tipo di carburante utilizzato.
                </p>
                <p className="text-white/60 mb-6">
                  Il sensore è composto da due elettrodi che formano un condensatore. Quando il livello del carburante cambia, varia anche la costante dielettrica del mezzo tra gli elettrodi, modificando la capacità misurata. Questa variazione viene convertita in un segnale elettrico proporzionale al livello.
                </p>
                <div className="aspect-video overflow-hidden border border-white/10">
                  <img
                    src={sensoriCase}
                    alt="Sensore di livello carburante installato su veicolo"
                    title="Sensore di livello carburante installato su veicolo"
                    loading="lazy"
                    width="800"
                    height="450"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Elenco modelli */}
              <div className="mb-16">
                <h2 className="text-2xl font-light text-white mb-6">
                  Modelli e configurazioni
                </h2>
                <div className="space-y-4">
                  {models.map((model, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between p-4 bg-white/[0.02] border border-white/10 hover:border-white/20 transition-colors"
                    >
                      <div>
                        <span className="text-white font-medium">{model.name}</span>
                        <p className="text-white/50 text-sm mt-1">{model.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Note informative */}
              <div className="bg-white/5 border-l-2 border-white/30 p-6">
                <h3 className="text-white font-medium mb-3">Soluzioni personalizzate</h3>
                <p className="text-white/50 text-sm">
                  Ogni sensore può essere personalizzato in base alle specifiche esigenze del cliente: lunghezza, tipo di attacco, materiali, connettori e output. Il nostro team tecnico è a disposizione per sviluppare soluzioni su misura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
