import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

export default function Network() {
  const companies = [
    {
      name: 'Mont.El',
      location: 'Sale Marasino (BS), Italia',
      description: 'Sede principale. Progettazione e produzione di sensori di livello carburante, cablaggi elettrici, quadri elettrici e sonde di temperatura.'
    },
    {
      name: 'AME',
      location: 'Italia',
      description: 'Azienda del gruppo specializzata in componenti elettromeccanici per applicazioni industriali.'
    },
    {
      name: 'EUROSWITCH',
      location: 'Italia',
      description: 'Produzione di interruttori e sensori per il settore automotive e industriale.'
    },
    {
      name: 'INTEA',
      location: 'Italia',
      description: 'Soluzioni elettroniche avanzate per applicazioni speciali e personalizzate.'
    },
    {
      name: 'SIRE Romania',
      location: 'Romania',
      description: 'Stabilimento produttivo per cablaggi elettrici e assemblaggi, con capacità produttiva flessibile.'
    },
    {
      name: 'TECHTRON Romania',
      location: 'Romania',
      description: 'Centro di produzione per componenti elettronici con focus su volumi medio-alti.'
    },
  ]

  const timeline = [
    { year: '1979', event: 'Fondazione di Mont.El a Sale Marasino (BS)' },
    { year: '1990', event: 'Prima certificazione ISO 9001 per il Sistema di Gestione Qualità' },
    { year: '2000', event: 'Espansione della gamma prodotti con sonde di temperatura' },
    { year: '2005', event: 'Apertura dello stabilimento produttivo in Romania' },
    { year: '2010', event: 'Ottenimento certificazione IATF 16949 per il settore automotive' },
    { year: '2015', event: 'Certificazione ISO 14001 per la gestione ambientale' },
    { year: '2020', event: 'Ampliamento capacità produttiva e nuovi investimenti tecnologici' },
  ]

  return (
    <>
      <PageHeader
        title="Il Network"
        subtitle="Un gruppo di aziende complementari per offrire soluzioni complete e integrate."
        breadcrumbs={[
          { label: 'Azienda', path: '/azienda' },
          { label: 'Il Network' }
        ]}
      />

      {/* Intro */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <p className="text-white/60 text-lg mb-6">
            Mont.El fa parte di un network di aziende specializzate che operano in sinergia per offrire ai clienti una gamma completa di soluzioni nel settore dell'elettronica industriale.
          </p>
          <p className="text-white/60">
            Questa struttura ci permette di combinare competenze diverse, ottimizzare i processi produttivi e garantire la massima flessibilità nelle consegne, mantenendo sempre gli elevati standard qualitativi che ci contraddistinguono.
          </p>
        </div>
      </section>

      {/* Aziende del network */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Il gruppo</p>
            <h2 className="text-3xl font-light text-white">
              Le aziende del network
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/10 p-8 hover:border-white/30 transition-all"
              >
                <div className="w-16 h-16 bg-white/5 mb-6 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{company.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-medium text-white mb-1">
                  {company.name}
                </h3>
                <p className="text-white/40 text-sm mb-3">{company.location}</p>
                <p className="text-white/50 text-sm">
                  {company.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">La nostra evoluzione</p>
            <h2 className="text-3xl font-light text-white">
              La nostra storia
            </h2>
          </div>

          <div className="relative">
            {/* Linea verticale */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-start gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-white rounded-full -translate-x-1/2 mt-2" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <span className="text-white font-medium text-lg">{item.year}</span>
                    <p className="text-white/60 mt-1">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mappa */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Dove siamo</p>
            <h2 className="text-3xl font-light text-white">
              Presenza internazionale
            </h2>
          </div>
          <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="text-white/30">[Mappa sedi]</span>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  )
}
