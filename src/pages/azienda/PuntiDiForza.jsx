import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

export default function PuntiDiForza() {
  const strengths = [
    {
      title: 'Esperienza consolidata',
      description: 'Oltre 45 anni di attività nel settore dell\'elettronica industriale, con competenze maturate in applicazioni diversificate e complesse.'
    },
    {
      title: 'Qualità certificata',
      description: 'Sistema di Gestione Qualità certificato ISO 9001, IATF 16949 e ISO 14001, a garanzia di prodotti affidabili e conformi agli standard internazionali.'
    },
    {
      title: 'Flessibilità produttiva',
      description: 'Capacità di realizzare soluzioni personalizzate su misura per le esigenze specifiche di ogni cliente, dai prototipi alla produzione in serie.'
    },
    {
      title: 'Innovazione continua',
      description: 'Investimenti costanti in ricerca e sviluppo per offrire prodotti tecnologicamente avanzati e competitivi sul mercato.'
    },
    {
      title: 'Servizio completo',
      description: 'Supporto a 360° dalla progettazione alla produzione, con assistenza tecnica dedicata e tempi di consegna ottimizzati.'
    },
    {
      title: 'Presenza internazionale',
      description: 'Rete produttiva e commerciale estesa, con stabilimenti in Italia e Romania per servire clienti in tutto il mondo.'
    }
  ]

  return (
    <>
      <PageHeader
        title="Punti di forza e mission"
        breadcrumbs={[
          { label: 'Azienda', path: '/azienda' },
          { label: 'Punti di forza e mission' }
        ]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl font-light text-white mb-8">
              La nostra filosofia: Life in a wire
            </h2>

            <p className="text-white/60 text-lg mb-6">
              "Life in a wire" non è solo uno slogan, ma rappresenta la filosofia che guida ogni nostra attività. Crediamo che in ogni filo, in ogni connessione, in ogni componente ci sia vita: la vita delle macchine che alimentano, dei sistemi che controllano, delle industrie che servono.
            </p>

            <p className="text-white/60 mb-12">
              Da oltre 45 anni, Mont.El trasforma questa filosofia in prodotti concreti, combinando competenza tecnica, innovazione e attenzione al cliente per offrire soluzioni che fanno la differenza.
            </p>

            <h3 className="text-2xl font-light text-white mt-12 mb-6">
              La nostra mission
            </h3>

            <p className="text-white/60 mb-8">
              Essere il partner di riferimento per i nostri clienti nella progettazione e produzione di componenti elettronici ed elettromeccanici, offrendo soluzioni innovative, affidabili e personalizzate che contribuiscono al successo dei loro prodotti.
            </p>
          </div>
        </div>
      </section>

      {/* Punti di forza */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Cosa ci distingue</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              I nostri punti di forza
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/10 p-8 hover:border-white/30 transition-all"
              >
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6">
                  <span className="text-white text-xl font-light">{index + 1}</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-3">
                  {strength.title}
                </h3>
                <p className="text-white/50 text-sm">
                  {strength.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">I nostri valori</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              I principi che ci guidano
            </h2>
          </div>

          <div className="space-y-8">
            <div className="border-l-2 border-white/30 pl-6">
              <h3 className="text-xl font-medium text-white mb-2">Qualità</h3>
              <p className="text-white/60">
                La qualità è il fondamento di tutto ciò che facciamo. Ogni prodotto che esce dai nostri stabilimenti è sottoposto a rigorosi controlli per garantire prestazioni eccellenti.
              </p>
            </div>
            <div className="border-l-2 border-white/30 pl-6">
              <h3 className="text-xl font-medium text-white mb-2">Innovazione</h3>
              <p className="text-white/60">
                Investiamo costantemente in ricerca e sviluppo per anticipare le esigenze del mercato e offrire soluzioni sempre all'avanguardia.
              </p>
            </div>
            <div className="border-l-2 border-white/30 pl-6">
              <h3 className="text-xl font-medium text-white mb-2">Affidabilità</h3>
              <p className="text-white/60">
                I nostri clienti sanno di poter contare su di noi: rispettiamo gli impegni, manteniamo le promesse e costruiamo relazioni durature basate sulla fiducia.
              </p>
            </div>
            <div className="border-l-2 border-white/30 pl-6">
              <h3 className="text-xl font-medium text-white mb-2">Sostenibilità</h3>
              <p className="text-white/60">
                Operiamo con responsabilità verso l'ambiente e la comunità, con certificazione ISO 14001 e attenzione costante all'impatto delle nostre attività.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
