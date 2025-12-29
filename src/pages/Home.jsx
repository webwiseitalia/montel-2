import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'

// Import images
import heroImg from '../assets/sviluppo ad hoc/imgi_2_2500x900-azienda.webp'
import sensoriImg from '../assets/produzione/imgi_4_sensori_di_livello_thumb.webp'
import cablaggiImg from '../assets/produzione/imgi_5_cablaggi_elettrici_thumb.webp'
import quadriImg from '../assets/produzione/imgi_6_quadri_elettrici_thumb.webp'
import sondeImg from '../assets/produzione/imgi_7_sonde_di_temperatura_thumb.webp'
import aziendaImg from '../assets/sviluppo ad hoc/imgi_8_1300x900-azienda.webp'
import settoriImg from '../assets/settori applicazione/imgi_7_magricole2.webp'
import qualitaImg from '../assets/apparechciature e cablaggi/imgi_22_qualita_1.webp'

export default function Home() {
  const products = [
    {
      title: 'Sensori di livello',
      subtitle: 'Tecnologia capacitiva',
      path: '/prodotti/sensori-livello-carburante',
      image: sensoriImg
    },
    {
      title: 'Cablaggi elettrici',
      subtitle: 'Soluzioni su misura',
      path: '/prodotti/cablaggi-elettrici',
      image: cablaggiImg
    },
    {
      title: 'Quadri elettrici',
      subtitle: 'Controllo e potenza',
      path: '/prodotti/quadri-elettrici',
      image: quadriImg
    },
    {
      title: 'Sonde temperatura',
      subtitle: 'Precisione assoluta',
      path: '/prodotti/sonde-temperatura',
      image: sondeImg
    },
  ]

  const stats = [
    { value: '1979', label: 'Anno di fondazione' },
    { value: '45+', label: 'Anni di esperienza' },
    { value: '7', label: 'Settori industriali' },
    { value: '3', label: 'Certificazioni ISO' },
  ]

  // Scroll animation observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('.animate-on-scroll, .animate-scale-on-scroll, .animate-slide-left, .animate-slide-right')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* HERO - Centered */}
      <section className="hero">
        <div className="hero-media">
          <img src={heroImg} alt="Mont.El Team" title="Team Mont.El - Eccellenza italiana dal 1979" width="2500" height="900" />
        </div>
        <div className="hero-overlay" />
        <div className="grid-lines" />

        <div className="hero-content container text-center">
          <p className="text-caption text-accent mb-6 animate-hero animate-hero-delay-1">Electronic Wiring Equipment</p>
          <h1 className="text-display mb-8 mx-auto animate-hero animate-hero-delay-2">
            Life in a wire
          </h1>
          <p className="text-body-lg text-muted max-w-2xl mx-auto mb-10 animate-hero animate-hero-delay-3">
            Dal 1979 progettiamo e produciamo componenti elettronici per i settori industriali più esigenti.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-hero animate-hero-delay-4">
            <Link to="/prodotti" className="btn btn-primary">
              Esplora i prodotti
            </Link>
            <Link to="/azienda" className="btn btn-outline">
              Scopri l'azienda
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-bounce">
          <span className="text-caption text-muted">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="section bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-caption text-accent mb-4 animate-on-scroll">Prodotti</p>
            <h2 className="text-headline mb-6 animate-on-scroll delay-1">Soluzioni industriali</h2>
            <p className="text-body-lg text-muted max-w-2xl mx-auto animate-on-scroll delay-2">
              Quattro linee di prodotto progettate e realizzate interamente in Italia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {products.map((product, index) => (
              <Link key={index} to={product.path} className={`card group animate-on-scroll delay-${index + 1}`}>
                <div className="card-image aspect-[4/5]">
                  <img src={product.image} alt={product.title} title={product.title} loading="lazy" width="400" height="500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <p className="text-caption text-accent mb-2">{product.subtitle}</p>
                  <h3 className="text-title text-white">{product.title}</h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12 animate-on-scroll">
            <Link to="/prodotti" className="btn btn-outline">
              Tutti i prodotti
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT - Split Layout Balanced */}
      <section className="section-lg bg-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 animate-scale-on-scroll">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={aziendaImg} alt="Stabilimento Mont.El" title="Stabilimento Mont.El a Sale Marasino" loading="lazy" width="1300" height="900" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-caption text-accent mb-6 animate-on-scroll">Chi siamo</p>
              <h2 className="text-headline mb-8 animate-on-scroll delay-1">
                Eccellenza italiana dal 1979
              </h2>
              <p className="text-body-lg text-muted mb-8 animate-on-scroll delay-2">
                Mont.El è specializzata nella progettazione e produzione di componenti elettronici ed elettromeccanici. Con sede a Sale Marasino (BS), serviamo clienti in tutto il mondo.
              </p>
              <div className="animate-on-scroll delay-3">
                <Link to="/azienda" className="btn btn-primary">
                  Scopri di più
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS - Centered */}
      <section className="section bg-brand-blue">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className={`text-center animate-on-scroll delay-${index + 1}`}>
                <div className="stat-number text-white animate-stat-glow">{stat.value}</div>
                <div className="stat-label text-white/60 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS - Split Layout Balanced */}
      <section className="section-lg bg-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <p className="text-caption text-accent mb-6 animate-on-scroll">Settori</p>
              <h2 className="text-headline mb-8 animate-on-scroll delay-1">
                Dove operiamo
              </h2>
              <p className="text-body-lg text-muted mb-8 animate-on-scroll delay-2">
                I nostri prodotti trovano applicazione nei settori industriali più esigenti, dove affidabilità e precisione sono requisiti fondamentali.
              </p>
              <div className="flex flex-wrap gap-3 mb-10 animate-on-scroll delay-3">
                {['Movimento terra', 'Agricoltura', 'Automotive', 'Nautica', 'Ferroviario'].map((sector, i) => (
                  <span key={i} className="px-4 py-2 border border-white/20 text-sm text-white/70 hover:border-accent hover:text-accent transition-all duration-300">
                    {sector}
                  </span>
                ))}
              </div>
              <div className="animate-on-scroll delay-4">
                <Link to="/settori" className="btn btn-primary">
                  Esplora i settori
                </Link>
              </div>
            </div>
            <div className="animate-scale-on-scroll">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={settoriImg} alt="Settori di applicazione" title="Settori di applicazione Mont.El" loading="lazy" width="800" height="600" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY - Split Section White */}
      <section className="section bg-white text-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 animate-scale-on-scroll">
              <div className="aspect-square overflow-hidden">
                <img src={qualitaImg} alt="Qualità Mont.El" title="Sistema Qualità Mont.El certificato" loading="lazy" width="800" height="800" className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-caption text-brand-red mb-6 animate-on-scroll">Qualità</p>
              <h2 className="text-headline mb-8 animate-on-scroll delay-1">
                Certificazioni internazionali
              </h2>
              <p className="text-body-lg text-black/60 mb-8 animate-on-scroll delay-2">
                Il nostro Sistema di Gestione Qualità è certificato secondo gli standard più rigorosi.
              </p>
              <div className="flex gap-8 mb-10 animate-on-scroll delay-3">
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-brand-blue">ISO</div>
                  <div className="text-sm text-black/50">9001</div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-brand-blue">IATF</div>
                  <div className="text-sm text-black/50">16949</div>
                </div>
                <div className="text-center hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl font-bold text-brand-blue">ISO</div>
                  <div className="text-sm text-black/50">14001</div>
                </div>
              </div>
              <div className="animate-on-scroll delay-4">
                <Link to="/qualita" className="btn btn-primary !bg-brand-blue !text-white hover:!bg-brand-red">
                  Scopri di più
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Centered */}
      <section className="section-lg bg-black relative overflow-hidden">
        <div className="grid-lines" />
        <div className="container relative z-10 text-center">
          <h2 className="text-headline mb-8 animate-on-scroll">
            Inizia il tuo progetto
          </h2>
          <p className="text-body-lg text-muted max-w-2xl mx-auto mb-10 animate-on-scroll delay-1">
            Contattaci per scoprire come possiamo supportare le tue esigenze con soluzioni personalizzate e di alta qualità.
          </p>
          <div className="animate-on-scroll delay-2">
            <Link to="/contatti" className="btn btn-primary">
              Contattaci ora
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
