import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

export default function Brevetti() {
  const brevetti = [
    {
      title: 'Sensore di livello capacitivo',
      description: 'Tecnologia brevettata per la misurazione precisa del livello carburante con compensazione automatica delle variazioni di temperatura.'
    },
    {
      title: 'Sistema di connessione rapida',
      description: 'Connettore brevettato per cablaggi che garantisce montaggio rapido e tenuta stagna in ambienti gravosi.'
    },
    {
      title: 'Elettronica di elaborazione',
      description: 'Circuito integrato brevettato per l\'elaborazione del segnale dei sensori con filtraggio digitale avanzato.'
    },
  ]

  const otherPages = [
    { label: 'Codesign', path: '/qualita/codesign' },
    { label: 'Tecnologia', path: '/qualita/tecnologia' },
    { label: 'Certificazioni', path: '/qualita/certificazioni' },
    { label: 'Riconoscimenti', path: '/qualita/riconoscimenti' },
  ]

  return (
    <>
      <PageHeader
        title="Brevetti"
        breadcrumbs={[
          { label: 'Qualità', path: '/qualita' },
          { label: 'Brevetti' }
        ]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8">
            Innovazione protetta
          </h2>
          <p className="text-white/60 text-lg mb-12">
            L'innovazione è nel nostro DNA. Investiamo costantemente in ricerca e sviluppo per offrire prodotti tecnologicamente avanzati e competitivi. I nostri brevetti testimoniano questo impegno e proteggono le soluzioni innovative che sviluppiamo.
          </p>

          <h3 className="text-2xl font-light text-white mb-6">I nostri brevetti</h3>

          <div className="space-y-6">
            {brevetti.map((brevetto, index) => (
              <div
                key={index}
                className="flex items-start gap-6 p-6 bg-white/[0.02] border border-white/10"
              >
                <div className="w-12 h-12 bg-white/10 flex-shrink-0 flex items-center justify-center text-white font-medium">
                  {index + 1}
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">{brevetto.title}</h4>
                  <p className="text-white/50">{brevetto.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* R&D */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-light text-white mb-6">
                Ricerca e sviluppo
              </h2>
              <p className="text-white/60 mb-6">
                Il nostro team R&D lavora costantemente allo sviluppo di nuove soluzioni per anticipare le esigenze del mercato e offrire prodotti innovativi.
              </p>
              <p className="text-white/60">
                Collaboriamo con università e centri di ricerca per esplorare nuove tecnologie e metodologie produttive.
              </p>
            </div>
            <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-white/30">[Immagine laboratorio R&D]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Rimandi altre voci */}
      <section className="py-16 bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h3 className="text-xl font-medium text-white mb-6">Esplora anche</h3>
          <div className="flex flex-wrap gap-4">
            {otherPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="px-4 py-2 border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
