import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

export default function Certificazioni() {
  const certificazioni = [
    {
      name: 'ISO 9001',
      subtitle: 'Sistema di Gestione Qualità',
      description: 'La certificazione ISO 9001 attesta che il nostro Sistema di Gestione Qualità soddisfa i requisiti internazionali per garantire prodotti conformi alle aspettative dei clienti e il miglioramento continuo dei processi.'
    },
    {
      name: 'IATF 16949',
      subtitle: 'Standard Automotive',
      description: 'La certificazione IATF 16949 è lo standard di qualità specifico per il settore automotive. Questa certificazione garantisce che i nostri processi produttivi soddisfano i requisiti stringenti dei costruttori automobilistici.'
    },
    {
      name: 'ISO 14001',
      subtitle: 'Sistema di Gestione Ambientale',
      description: 'La certificazione ISO 14001 attesta il nostro impegno nella gestione responsabile dell\'ambiente. Monitoriamo e minimizziamo l\'impatto ambientale delle nostre attività produttive.'
    },
  ]

  const benefits = [
    {
      title: 'Processi controllati',
      description: 'Ogni fase della produzione è documentata e monitorata per garantire la conformità.'
    },
    {
      title: 'Tracciabilità completa',
      description: 'Ogni componente e ogni lavorazione sono tracciati per risalire alla storia del prodotto.'
    },
    {
      title: 'Miglioramento continuo',
      description: 'Analizziamo costantemente i dati per identificare opportunità di miglioramento.'
    },
    {
      title: 'Audit regolari',
      description: 'Verifiche interne ed esterne garantiscono il mantenimento degli standard.'
    },
  ]

  return (
    <>
      <PageHeader
        title="Certificazioni"
        breadcrumbs={[
          { label: 'Qualità', path: '/qualita' },
          { label: 'Certificazioni' }
        ]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <p className="text-white/60 text-lg mb-12">
            Il nostro Sistema di Gestione Qualità è certificato secondo gli standard internazionali più rigorosi. Queste certificazioni attestano il nostro impegno costante nella qualità, nell'affidabilità e nella sostenibilità ambientale.
          </p>

          <div className="space-y-8">
            {certificazioni.map((cert, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/10 p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-white/10 flex-shrink-0 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{cert.name.split(' ')[0]}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white mb-1">{cert.name}</h3>
                    <p className="text-white/40 text-sm mb-3">{cert.subtitle}</p>
                    <p className="text-white/50">{cert.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vantaggi */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-12 text-center">
            I vantaggi delle nostre certificazioni
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6">
                <h3 className="text-white font-medium mb-2">{benefit.title}</h3>
                <p className="text-white/50 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download certificati */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white/5 border border-white/10 p-8">
            <h2 className="text-2xl font-light text-white mb-6">
              Scarica i nostri certificati
            </h2>
            <p className="text-white/60 mb-8">
              I certificati ufficiali sono disponibili per il download. Per richieste specifiche o verifiche, contattaci.
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                <div>
                  <span className="text-white">Certificato ISO 9001</span>
                  <p className="text-white/40 text-sm">Sistema di Gestione Qualità</p>
                </div>
                <button className="btn-secondary text-sm">Scarica PDF</button>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                <div>
                  <span className="text-white">Certificato IATF 16949</span>
                  <p className="text-white/40 text-sm">Standard Automotive</p>
                </div>
                <button className="btn-secondary text-sm">Scarica PDF</button>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 border border-white/10">
                <div>
                  <span className="text-white">Certificato ISO 14001</span>
                  <p className="text-white/40 text-sm">Gestione Ambientale</p>
                </div>
                <button className="btn-secondary text-sm">Scarica PDF</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
