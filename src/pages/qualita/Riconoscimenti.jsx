import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

export default function Riconoscimenti() {
  const riconoscimenti = [
    {
      title: 'Premio Innovazione Industriale',
      year: '2022',
      description: 'Riconoscimento per l\'innovazione tecnologica nel settore dei sensori di livello carburante.'
    },
    {
      title: 'Supplier Excellence Award',
      year: '2021',
      description: 'Premio assegnato da un importante OEM del settore movimento terra per qualità e affidabilità delle forniture.'
    },
    {
      title: 'Best Performance Supplier',
      year: '2020',
      description: 'Riconoscimento per le eccellenti prestazioni in termini di qualità, puntualità e servizio.'
    },
  ]

  const otherPages = [
    { label: 'Codesign', path: '/qualita/codesign' },
    { label: 'Tecnologia', path: '/qualita/tecnologia' },
    { label: 'Certificazioni', path: '/qualita/certificazioni' },
    { label: 'Brevetti', path: '/qualita/brevetti' },
  ]

  return (
    <>
      <PageHeader
        title="Riconoscimenti"
        breadcrumbs={[
          { label: 'Qualità', path: '/qualita' },
          { label: 'Riconoscimenti' }
        ]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8">
            Eccellenza riconosciuta
          </h2>
          <p className="text-white/60 text-lg mb-12">
            I riconoscimenti ricevuti testimoniano l'impegno costante di Mont.El nella qualità, nell'innovazione e nel servizio ai clienti. Questi premi rappresentano il riconoscimento del lavoro di tutto il nostro team.
          </p>

          <div className="space-y-8">
            {riconoscimenti.map((item, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/10 p-8"
              >
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-white/10 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-white/40 text-sm">{item.year}</span>
                    <h3 className="text-xl font-medium text-white mt-1 mb-3">{item.title}</h3>
                    <p className="text-white/50">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impegno */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl font-light text-white mb-6">
            Il nostro impegno continua
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Questi riconoscimenti ci motivano a migliorare costantemente e a mantenere gli elevati standard di qualità che ci contraddistinguono. Il nostro obiettivo è continuare a meritare la fiducia dei nostri clienti.
          </p>
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
