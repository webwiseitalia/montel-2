import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

export default function Codesign() {
  const otherPages = [
    { label: 'Tecnologia', path: '/qualita/tecnologia' },
    { label: 'Certificazioni', path: '/qualita/certificazioni' },
    { label: 'Brevetti', path: '/qualita/brevetti' },
    { label: 'Riconoscimenti', path: '/qualita/riconoscimenti' },
  ]

  const phases = [
    {
      title: 'Analisi congiunta',
      description: 'Lavoriamo insieme al cliente per comprendere le esigenze, definire le specifiche e identificare le soluzioni ottimali.'
    },
    {
      title: 'Ottimizzazione del design',
      description: 'Progettiamo pensando alla producibilità, selezionando materiali e processi che garantiscano qualità e costi competitivi.'
    },
    {
      title: 'Prototipazione rapida',
      description: 'Realizziamo prototipi funzionali per validare le soluzioni prima di passare alla produzione in serie.'
    },
    {
      title: 'Supporto continuo',
      description: 'Accompagniamo il cliente durante tutto il ciclo di vita del prodotto, dall\'industrializzazione all\'assistenza post-vendita.'
    },
  ]

  const benefits = [
    'Riduzione dei tempi di sviluppo',
    'Ottimizzazione dei costi di produzione',
    'Prodotti più affidabili e performanti',
    'Maggiore competitività sul mercato',
  ]

  return (
    <>
      <PageHeader
        title="Codesign"
        breadcrumbs={[
          { label: 'Qualità', path: '/qualita' },
          { label: 'Codesign' }
        ]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8">
            Collaborazione fin dalla progettazione
          </h2>
          <p className="text-white/60 text-lg mb-6">
            L'approccio codesign di Mont.El prevede una collaborazione stretta con il cliente fin dalle prime fasi di sviluppo del prodotto. Lavoriamo insieme per comprendere le esigenze, ottimizzare le soluzioni e accelerare il time-to-market.
          </p>
          <p className="text-white/60 mb-12">
            Questo approccio ci permette di proporre soluzioni che combinano le nostre competenze tecniche con la conoscenza applicativa del cliente, garantendo prodotti ottimizzati per prestazioni, costi e affidabilità.
          </p>

          <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center mb-12">
            <span className="text-white/30">[Immagine team codesign]</span>
          </div>
        </div>
      </section>

      {/* Fasi */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-12 text-center">
            Il processo di codesign
          </h2>
          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white/10 flex items-center justify-center text-white font-medium">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2">{phase.title}</h3>
                  <p className="text-white/50">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8">
            I vantaggi del codesign
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/60">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rimandi altre voci */}
      <section className="py-16 bg-[#0a0a0a] border-t border-white/10">
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
