import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

export default function Tecnologia() {
  const otherPages = [
    { label: 'Codesign', path: '/qualita/codesign' },
    { label: 'Certificazioni', path: '/qualita/certificazioni' },
    { label: 'Brevetti', path: '/qualita/brevetti' },
    { label: 'Riconoscimenti', path: '/qualita/riconoscimenti' },
  ]

  const technologies = [
    {
      title: 'Assemblaggio automatizzato',
      description: 'Linee di assemblaggio semi-automatiche e automatiche per garantire ripetibilità e qualità costante.'
    },
    {
      title: 'Saldatura controllata',
      description: 'Processi di saldatura con parametri monitorati e controllo qualità integrato.'
    },
    {
      title: 'Crimpatura di precisione',
      description: 'Attrezzature di crimpatura con verifica della forza applicata e controllo dimensionale.'
    },
    {
      title: 'Collaudo elettrico',
      description: 'Banchi di collaudo automatici per test elettrici al 100% di ogni prodotto.'
    },
    {
      title: 'Test ambientali',
      description: 'Camere climatiche per test di temperatura, umidità e cicli termici.'
    },
    {
      title: 'Controllo qualità',
      description: 'Strumentazione di misura calibrata e sistemi di visione per controlli dimensionali.'
    },
  ]

  return (
    <>
      <PageHeader
        title="Tecnologia"
        breadcrumbs={[
          { label: 'Qualità', path: '/qualita' },
          { label: 'Tecnologia' }
        ]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-8">
            Impianti e attrezzature all'avanguardia
          </h2>
          <p className="text-white/60 text-lg mb-6">
            Mont.El investe costantemente in tecnologie produttive all'avanguardia per garantire la massima qualità dei prodotti. I nostri stabilimenti sono dotati di attrezzature moderne per assemblaggio, saldatura, crimpatura e collaudo.
          </p>
          <p className="text-white/60 mb-12">
            Ogni processo è monitorato e controllato per assicurare la conformità alle specifiche e la ripetibilità dei risultati. La strumentazione di misura è calibrata secondo standard internazionali.
          </p>

          <div className="aspect-video bg-white/5 border border-white/10 flex items-center justify-center mb-12">
            <span className="text-white/30">[Immagine linea produttiva]</span>
          </div>
        </div>
      </section>

      {/* Tecnologie */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-light text-white mb-12 text-center">
            Le nostre tecnologie
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-6">
                <h3 className="text-white font-medium mb-3">{tech.title}</h3>
                <p className="text-white/50 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investimenti */}
      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="bg-white/5 border border-white/10 p-8">
            <h2 className="text-2xl font-light text-white mb-6">
              Investimenti in innovazione
            </h2>
            <p className="text-white/60 mb-6">
              Investiamo ogni anno in nuove tecnologie e nell'aggiornamento degli impianti esistenti per mantenere la nostra competitività e rispondere alle esigenze sempre più sfidanti dei nostri clienti.
            </p>
            <ul className="space-y-3 text-white/60">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Formazione continua del personale tecnico</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Aggiornamento costante delle attrezzature</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-white/70 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Ricerca e sviluppo di nuovi processi</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

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
