import { Link } from 'react-router-dom'

// Import images
import sensoriImg from '../../assets/produzione/imgi_4_sensori_di_livello_thumb.webp'
import cablaggiImg from '../../assets/produzione/imgi_5_cablaggi_elettrici_thumb.webp'
import quadriImg from '../../assets/produzione/imgi_6_quadri_elettrici_thumb.webp'
import sondeImg from '../../assets/produzione/imgi_7_sonde_di_temperatura_thumb.webp'
import headerImg from '../../assets/produzione/imgi_10_1300x900-prodotti.webp'

export default function ProdottiIndex() {
  const products = [
    {
      title: 'Sensori di livello carburante',
      description: 'Tecnologia capacitiva di alta precisione per la misurazione del livello carburante in ogni condizione operativa.',
      path: '/prodotti/sensori-livello-carburante',
      image: sensoriImg,
      features: ['Tecnologia capacitiva', 'Alta precisione ±1%', 'Output CANbus']
    },
    {
      title: 'Cablaggi elettrici',
      description: 'Soluzioni su misura per ogni applicazione industriale, dalla semplice terminazione a sistemi complessi.',
      path: '/prodotti/cablaggi-elettrici',
      image: cablaggiImg,
      features: ['100% personalizzati', 'Qualità certificata', 'Codesign']
    },
    {
      title: 'Quadri elettrici',
      description: 'Centraline e pannelli di controllo per applicazioni industriali con collaudo funzionale al 100%.',
      path: '/prodotti/quadri-elettrici',
      image: quadriImg,
      features: ['Centraline controllo', 'Pannelli operatore', 'Collaudo 100%']
    },
    {
      title: 'Sonde di temperatura',
      description: 'Misurazione precisa della temperatura con diverse tecnologie: NTC, PTC, termocoppie, Pt100.',
      path: '/prodotti/sonde-temperatura',
      image: sondeImg,
      features: ['NTC/PTC', 'Termocoppie', 'Pt100/Pt1000']
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="hero" style={{ minHeight: '70vh' }}>
        <div className="hero-media">
          <img src={headerImg} alt="Prodotti Mont.El" title="Prodotti Mont.El - Soluzioni per l'industria" width="1300" height="900" />
        </div>
        <div className="hero-overlay" />

        <div className="hero-content container text-center">
          <p className="text-caption text-accent mb-6">Prodotti</p>
          <h1 className="text-display">
            Soluzioni per l'industria
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section bg-black">
        <div className="container">
          <div className="max-w-3xl">
            <p className="text-body-lg text-muted">
              Quattro linee di prodotto progettate e realizzate interamente in Italia, con la massima attenzione alla qualità e all'innovazione tecnologica. Dal 1979, ogni componente che esce dai nostri stabilimenti rappresenta l'eccellenza del Made in Italy.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="bg-black pb-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            {products.map((product, index) => (
              <Link key={index} to={product.path} className="card group relative">
                <div className="card-image aspect-[4/3]">
                  <img src={product.image} alt={product.title} title={product.title} loading="lazy" width="800" height="600" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, i) => (
                      <span key={i} className="text-xs text-accent/80 px-2 py-1 border border-accent/30">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-title text-white mb-3">{product.title}</h2>
                  <p className="text-body text-muted mb-6 max-w-md">{product.description}</p>
                  <span className="btn btn-ghost inline-flex items-center gap-2 group-hover:border-white">
                    Scopri di più
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white text-black">
        <div className="container">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="text-headline mb-4">Hai bisogno di un prodotto personalizzato?</h2>
              <p className="text-body-lg text-black/60 max-w-xl">
                Il nostro team tecnico è a disposizione per sviluppare soluzioni su misura per le tue esigenze specifiche.
              </p>
            </div>
            <Link to="/contatti" className="btn btn-primary !bg-black !text-white hover:!bg-[#c8ff00] hover:!text-black shrink-0">
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
