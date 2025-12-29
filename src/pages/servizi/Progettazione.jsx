import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

export default function Progettazione() {
  const phases = [
    {
      title: 'Analisi delle esigenze',
      description: 'Studio approfondito delle specifiche tecniche, delle condizioni operative e degli obiettivi del cliente.'
    },
    {
      title: 'Proposta tecnica',
      description: 'Presentazione di soluzioni ottimizzate con valutazione dei materiali, dei costi e dei tempi di sviluppo.'
    },
    {
      title: 'Progettazione esecutiva',
      description: 'Sviluppo dettagliato degli schemi elettrici, dei disegni meccanici e della documentazione tecnica.'
    },
    {
      title: 'Prototipazione',
      description: 'Realizzazione di prototipi funzionali per validazione e test in condizioni reali.'
    },
    {
      title: 'Validazione',
      description: 'Test elettrici, ambientali e funzionali per verificare la conformità alle specifiche.'
    },
  ]

  const capabilities = [
    'Progettazione schemi elettrici e layout',
    'Selezione componenti e materiali',
    'Sviluppo firmware per sensori digitali',
    'Progettazione meccanica custodie e protezioni',
    'Documentazione tecnica completa',
    'Supporto alla certificazione di prodotto',
  ]

  return (
    <>
      <PageHeader
        title="Progettazione"
        breadcrumbs={[
          { label: 'Servizi', path: '/servizi' },
          { label: 'Progettazione' }
        ]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8">
            Approccio Codesign
          </h2>
          <p className="text-white/60 text-lg mb-6">
            Il nostro approccio codesign prevede una collaborazione stretta con il cliente fin dalle prime fasi di sviluppo. Lavoriamo insieme per comprendere le esigenze, ottimizzare le soluzioni e accelerare il time-to-market.
          </p>
          <p className="text-white/60 mb-12">
            Grazie alla nostra esperienza multisettoriale, siamo in grado di proporre soluzioni innovative che combinano le best practice di diverse industrie, garantendo prodotti affidabili e competitivi.
          </p>

          <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center mb-16">
            <span className="text-white/30">[Immagine ufficio tecnico / progettazione]</span>
          </div>
        </div>
      </section>

      {/* Fasi */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-12 text-center">
            Il nostro processo di progettazione
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

      {/* Competenze */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8">
            Le nostre competenze
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/60">{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantaggi codesign */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8">
            Vantaggi del codesign
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/5 border border-white/10 p-6">
              <h3 className="text-white font-medium mb-3">Riduzione dei costi</h3>
              <p className="text-white/50 text-sm">
                L'ottimizzazione del design in fase iniziale riduce i costi di produzione e gli sprechi.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6">
              <h3 className="text-white font-medium mb-3">Time-to-market accelerato</h3>
              <p className="text-white/50 text-sm">
                La collaborazione stretta elimina i passaggi inutili e accelera lo sviluppo.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6">
              <h3 className="text-white font-medium mb-3">Prodotti ottimizzati</h3>
              <p className="text-white/50 text-sm">
                Il design viene ottimizzato per la producibilità, garantendo qualità e affidabilità.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-6">
              <h3 className="text-white font-medium mb-3">Supporto continuo</h3>
              <p className="text-white/50 text-sm">
                Assistenza tecnica durante tutto il ciclo di vita del prodotto.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
