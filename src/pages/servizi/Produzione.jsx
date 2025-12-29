import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

export default function Produzione() {
  const facilities = [
    {
      name: 'Stabilimento Italia',
      location: 'Sale Marasino (BS)',
      description: 'Sede principale con uffici tecnici, produzione e logistica. Focus su progettazione, prototipi e produzioni specializzate.'
    },
    {
      name: 'Stabilimento Romania',
      location: 'Romania',
      description: 'Centro produttivo per volumi medio-alti. Capacità flessibile per cablaggi e assemblaggi elettromeccanici.'
    },
  ]

  const processes = [
    'Assemblaggio cablaggi elettrici',
    'Produzione sensori di livello',
    'Assemblaggio quadri e centraline',
    'Saldatura e crimpatura automatica',
    'Assemblaggio sonde di temperatura',
    'Collaudo elettrico e funzionale',
  ]

  const quality = [
    {
      title: 'Tracciabilità completa',
      description: 'Ogni componente e ogni fase di produzione sono tracciati per garantire la massima qualità.'
    },
    {
      title: 'Collaudo 100%',
      description: 'Tutti i prodotti vengono collaudati al 100% prima della consegna secondo procedure validate.'
    },
    {
      title: 'Controllo statistico',
      description: 'Monitoraggio continuo dei processi con strumenti statistici per prevenire le non conformità.'
    },
  ]

  return (
    <>
      <PageHeader
        title="Produzione"
        breadcrumbs={[
          { label: 'Servizi', path: '/servizi' },
          { label: 'Produzione' }
        ]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8">
            Capacità produttiva flessibile
          </h2>
          <p className="text-white/60 text-lg mb-6">
            Mont.El dispone di stabilimenti produttivi in Italia e Romania per rispondere con flessibilità alle esigenze dei clienti. Dalla prototipazione alla produzione in serie, garantiamo tempi di consegna ottimizzati e qualità costante.
          </p>
          <p className="text-white/60 mb-12">
            I nostri impianti sono dotati di attrezzature moderne per assemblaggio, saldatura, crimpatura e collaudo, con processi certificati secondo gli standard ISO 9001 e IATF 16949.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-white/30">[Immagine stabilimento Italia]</span>
            </div>
            <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
              <span className="text-white/30">[Immagine stabilimento Romania]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stabilimenti */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-12 text-center">
            I nostri stabilimenti
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-8">
                <h3 className="text-xl font-medium text-white mb-1">{facility.name}</h3>
                <p className="text-white/40 text-sm mb-4">{facility.location}</p>
                <p className="text-white/50">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processi */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8">
            I nostri processi produttivi
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {processes.map((process, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/60">{process}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualità */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-12 text-center">
            Controllo qualità integrato
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quality.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-medium">{index + 1}</span>
                </div>
                <h3 className="text-white font-medium mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistica */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white/5 border border-white/10 p-8">
            <h2 className="text-2xl font-light text-white mb-6">
              Logistica e consegne
            </h2>
            <p className="text-white/60 mb-6">
              Gestiamo la logistica in modo flessibile per rispondere alle esigenze dei clienti: consegne JIT (Just In Time), gestione del magazzino conto terzi e spedizioni dirette.
            </p>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Consegne JIT (Just In Time)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Gestione scorte e magazzino</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Spedizioni internazionali</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
