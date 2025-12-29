import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

// Import images
import progettazioneImg from '../../assets/sviluppo ad hoc/imgi_4_progettazione.webp'
import produzioneImg from '../../assets/produzione/imgi_10_1300x900-prodotti.webp'

export default function ServiziIndex() {
  const services = [
    {
      title: 'Progettazione',
      description: 'Supporto completo dalla definizione delle specifiche allo sviluppo del prodotto. Il nostro approccio codesign permette di ottimizzare costi, tempi e prestazioni.',
      features: ['Codesign', 'Prototipazione', 'Validazione'],
      path: '/servizi/progettazione',
      image: progettazioneImg
    },
    {
      title: 'Produzione',
      description: 'Capacità produttiva flessibile con stabilimenti in Italia e Romania. Processi controllati, tracciabilità completa e collaudo al 100% di ogni prodotto.',
      features: ['Italia e Romania', 'Collaudo 100%', 'Tracciabilità'],
      path: '/servizi/produzione',
      image: produzioneImg
    },
  ]

  const highlights = [
    {
      title: 'Servizio completo',
      description: 'Dalla progettazione alla produzione in serie, offriamo un servizio integrato che copre tutte le fasi del ciclo di vita del prodotto.'
    },
    {
      title: 'Flessibilità',
      description: 'Capacità di gestire ordini di ogni dimensione, dai prototipi alle grandi serie, con tempi di consegna ottimizzati.'
    },
    {
      title: 'Qualità garantita',
      description: 'Processi certificati ISO 9001 e IATF 16949, con controlli qualità integrati in ogni fase della produzione.'
    },
  ]

  return (
    <>
      <PageHeader
        title="Servizi"
        subtitle="Supporto completo dalla progettazione alla produzione: un partner affidabile per trasformare le tue idee in prodotti di qualità."
        breadcrumbs={[{ label: 'Servizi' }]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.path}
                className="group bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="aspect-video overflow-hidden bg-white/5">
                  <img
                    src={service.image}
                    alt={service.title}
                    title={service.title}
                    loading="lazy"
                    width="800"
                    height="450"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-medium text-white mb-4 group-hover:text-white/80">
                    {service.title}
                  </h2>
                  <p className="text-white/50 mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 text-white/60 text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-white/50 group-hover:text-white/70">
                    <span>Scopri di più</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Perché sceglierci</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              I vantaggi di lavorare con noi
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-light">{index + 1}</span>
                </div>
                <h3 className="text-lg font-medium text-white mb-3">{highlight.title}</h3>
                <p className="text-white/50 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner title="Hai bisogno di un servizio su misura? Contattaci" />
    </>
  )
}
