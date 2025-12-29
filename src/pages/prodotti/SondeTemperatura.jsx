import PageHeader from '../../components/PageHeader'
import SidebarNav from '../../components/SidebarNav'
import CTABanner from '../../components/CTABanner'

// Import images
import sondeImg from '../../assets/produzione/imgi_7_sonde_di_temperatura_thumb.webp'

export default function SondeTemperatura() {
  const productNav = [
    { label: 'Sensori di livello carburante', path: '/prodotti/sensori-livello-carburante' },
    { label: 'Cablaggi elettrici', path: '/prodotti/cablaggi-elettrici' },
    { label: 'Quadri elettrici', path: '/prodotti/quadri-elettrici' },
    { label: 'Sonde di temperatura', path: '/prodotti/sonde-temperatura' },
  ]

  const sectors = [
    { name: 'Macchine movimento terra', description: 'Monitoraggio temperatura motore, olio idraulico, trasmissione' },
    { name: 'Macchine agricole', description: 'Controllo temperatura motore e fluidi operativi' },
    { name: 'Generatori', description: 'Sorveglianza termica per funzionamento ottimale' },
    { name: 'Veicoli industriali', description: 'Monitoraggio sistemi di raffreddamento e lubrificazione' },
    { name: 'Automotive', description: 'Sensori per applicazioni automotive certificate' },
    { name: 'Nautica', description: 'Sonde resistenti all\'ambiente marino' },
  ]

  const features = [
    'Alta precisione di misura',
    'Ampio range di temperatura (-50°C / +200°C)',
    'Resistenza alle vibrazioni e agli shock',
    'Tempi di risposta rapidi',
    'Diverse configurazioni di attacco',
    'Uscite analogiche o digitali',
  ]

  const types = [
    { name: 'Sonde NTC', description: 'Termistori a coefficiente di temperatura negativo per misure precise' },
    { name: 'Sonde PTC', description: 'Termistori a coefficiente di temperatura positivo per protezione termica' },
    { name: 'Termocoppie', description: 'Per misure di temperature estreme in ambienti gravosi' },
    { name: 'Sonde Pt100/Pt1000', description: 'Sensori a resistenza di platino per massima accuratezza' },
  ]

  return (
    <>
      <PageHeader
        title="Sonde di temperatura"
        breadcrumbs={[
          { label: 'Prodotti', path: '/prodotti' },
          { label: 'Sonde di temperatura' }
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
                  Misurazione precisa in ogni condizione
                </h2>
                <p className="text-white/60 text-lg mb-6">
                  Le sonde di temperatura Mont.El sono progettate per garantire misurazioni accurate e affidabili anche nelle condizioni operative più difficili. Vibrazioni, temperature estreme, umidità e ambienti aggressivi non compromettono le prestazioni dei nostri sensori.
                </p>
                <p className="text-white/60">
                  Offriamo una gamma completa di tecnologie per rispondere a ogni esigenza: termistori NTC e PTC, termocoppie e sensori a resistenza di platino (Pt100/Pt1000).
                </p>
              </div>

              <div className="aspect-video overflow-hidden border border-white/10 mb-16">
                <img
                  src={sondeImg}
                  alt="Sonde di temperatura Mont.El"
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

              {/* Tipologie */}
              <div className="mb-16">
                <h2 className="text-2xl font-light text-white mb-6">
                  Tecnologie disponibili
                </h2>
                <div className="space-y-4">
                  {types.map((type, index) => (
                    <div key={index} className="p-6 bg-white/[0.02] border border-white/10">
                      <h3 className="text-white font-medium mb-2">{type.name}</h3>
                      <p className="text-white/50 text-sm">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Settori applicativi */}
              <div className="mb-16">
                <h2 className="text-2xl font-light text-white mb-6">
                  Settori di applicazione
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {sectors.map((sector, index) => (
                    <div
                      key={index}
                      className="p-4 bg-white/[0.02] border border-white/10"
                    >
                      <h3 className="text-white font-medium mb-1">{sector.name}</h3>
                      <p className="text-white/50 text-sm">{sector.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personalizzazione */}
              <div className="bg-white/5 border-l-2 border-white/30 p-6 mb-16">
                <h3 className="text-white font-medium mb-3">Soluzioni personalizzate</h3>
                <p className="text-white/50 text-sm">
                  Ogni sonda può essere personalizzata in base alle specifiche esigenze del cliente: tipo di elemento sensibile, lunghezza, materiale della guaina, tipo di attacco e connettore. Il nostro team tecnico è a disposizione per sviluppare soluzioni su misura.
                </p>
              </div>

              {/* Download */}
              <div className="bg-white/5 border border-white/10 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-white font-medium mb-1">Catalogo sonde di temperatura</h3>
                  <p className="text-white/50 text-sm">Scarica il catalogo completo con tutte le specifiche tecniche</p>
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
