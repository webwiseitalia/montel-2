import { Link } from 'react-router-dom'
import PageHeader from '../../components/PageHeader'
import CTABanner from '../../components/CTABanner'

// Import images
import sensoriThumb from '../../assets/produzione/imgi_4_sensori_di_livello_thumb.webp'
import cablaggiThumb from '../../assets/produzione/imgi_5_cablaggi_elettrici_thumb.webp'
import quadriThumb from '../../assets/produzione/imgi_6_quadri_elettrici_thumb.webp'
import sondeThumb from '../../assets/produzione/imgi_7_sonde_di_temperatura_thumb.webp'

export default function ProdottiIndex() {
  const products = [
    {
      title: 'Sensori di livello carburante',
      description: 'Tecnologia capacitiva di alta precisione per la misurazione del livello carburante. Disponibili in versione tubolare e a piastra, con uscita analogica o digitale (CANbus).',
      features: ['Tecnologia capacitiva', 'Alta precisione', 'Resistenza alle vibrazioni'],
      path: '/prodotti/sensori-livello-carburante',
      image: sensoriThumb
    },
    {
      title: 'Cablaggi elettrici',
      description: 'Soluzioni su misura per ogni applicazione industriale. Progettazione e produzione di cablaggi completi con connettori, terminali e protezioni specifiche.',
      features: ['Su misura', 'Ogni settore industriale', 'Qualità certificata'],
      path: '/prodotti/cablaggi-elettrici',
      image: cablaggiThumb
    },
    {
      title: 'Quadri elettrici',
      description: 'Centraline e pannelli di controllo per applicazioni industriali. Assemblaggio completo di schede elettroniche, cablaggi interni e collaudo funzionale.',
      features: ['Centraline di controllo', 'Pannelli operatore', 'Collaudo funzionale'],
      path: '/prodotti/quadri-elettrici',
      image: quadriThumb
    },
    {
      title: 'Sonde di temperatura',
      description: 'Sensori per la misurazione precisa della temperatura in ogni condizione operativa. Disponibili con diverse tecnologie e configurazioni per ogni esigenza.',
      features: ['Alta precisione', 'Diverse configurazioni', 'Ambienti gravosi'],
      path: '/prodotti/sonde-temperatura',
      image: sondeThumb
    },
  ]

  return (
    <>
      <PageHeader
        title="Prodotti"
        subtitle="Quattro linee di prodotto progettate e realizzate interamente in Italia, con la massima attenzione alla qualità e all'innovazione tecnologica."
        breadcrumbs={[{ label: 'Prodotti' }]}
      />

      <section className="py-20 lg:py-32 bg-black">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.path}
                className="group bg-white/[0.02] border border-white/10 hover:border-white/30 transition-all"
              >
                <div className="aspect-video overflow-hidden bg-white/5">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-medium text-white mb-4 group-hover:text-white/80 transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-white/50 mb-4">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, i) => (
                      <span key={i} className="px-3 py-1 bg-white/5 text-white/60 text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-white/50 group-hover:text-white/70 transition-colors">
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

      {/* Perché sceglierci */}
      <section className="py-20 lg:py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-widest text-white/50 mb-4">Perché sceglierci</p>
            <h2 className="text-3xl md:text-4xl font-light text-white">
              I vantaggi dei nostri prodotti
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Qualità certificata</h3>
              <p className="text-white/50 text-sm">
                Tutti i nostri prodotti sono realizzati secondo gli standard ISO 9001 e IATF 16949.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Personalizzazione</h3>
              <p className="text-white/50 text-sm">
                Ogni prodotto può essere personalizzato per rispondere alle esigenze specifiche del cliente.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/10 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-white mb-3">Tempi rapidi</h3>
              <p className="text-white/50 text-sm">
                Capacità produttiva flessibile per garantire consegne puntuali anche su grandi volumi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTABanner title="Hai bisogno di un prodotto personalizzato?" />
    </>
  )
}
